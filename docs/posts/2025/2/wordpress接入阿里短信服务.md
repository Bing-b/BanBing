---
title: docker 部署的 wordpress 接入阿里云短信服务实操
date: 2025-02-12
---

# docker 部署的 wordpress 接入阿里云短信服务实操

> ✨ 文章摘要

<!-- DESC SEP -->

处于项目需求，将此功能实现总结下如何在wordpress 后台接入阿里短信服务，实现等于短信验证登功能；

<!-- DESC SEP -->

---

## 一、阿里云短信服务配置：

#### 1、登录 [阿里云短信服务](https://dysms.console.aliyun.com/quickstart) 完成指引短信相关配置

![阿里](https://i-blog.csdnimg.cn/blog_migrate/f4f06f7396f05edee391c5199ed26899.png)

#### 2、[创建RAM用户](https://ram.console.aliyun.com/overview) 并完成授权

出于安全及规范考虑 需通过RAM 用户来完成OponApl 接口调用，创建成功需完成短信接口（<code>AliyunDysmsFullAccess、AliyunDysmsReadOnlyAccess</code>）授权。

##### RAM 用户

RAM用户是RAM的一种实体身份类型，有确定的身份ID和身份凭证，它通常与某个确定的人或应用程序一一对应。RAM用户具备以下特点：

- RAM用户由阿里云账号（主账号）或具有管理员权限的其他RAM用户、RAM角色创建，创建成功后，归属于该阿里云账号，它不是独立的阿里云账号。
- RAM用户不拥有资源，不能独立计量计费，由所属的阿里云账号统一付费。
- RAM用户必须在获得授权后，才能登录控制台或使用API访问阿里云账号下的资源。
- RAM用户拥有独立的登录密码或访问密钥。
- 一个阿里云账号下可以创建多个RAM用户，对应企业内的员工、系统或应用程序。

#### 3、创建RAM用户的AccessKey

注意创建完及时转存 <code>AccessKey Secret </code> ，避免后面接口使用时找不到。

##### 什么是AccessKey

访问密钥AccessKey（简称AK）是阿里云提供给用户的永久访问凭据，一组由AccessKey ID和AccessKey Secret组成的密钥对。

- AccessKey ID：用于标识用户。

- AccessKey Secret：是一个用于验证您拥有该AccessKey ID的密码。

AccessKey ID和AccessKey Secret根据算法由访问控制（RAM）生成，阿里云对AccessKey ID和AccessKey Secret的存储及传输均进行加密。

AccessKey不用于控制台登录，用于通过开发工具（API、CLI、SDK、Terraform等）访问阿里云时，发起的请求会携带AccessKey ID和AccessKey Secret加密请求内容生成的签名，进行身份验证及请求合法性校验。

##### 操作步骤

- 登录RAM控制台。

- 在左侧导航栏，选择身份管理 > 用户。

- 在用户页面，单击目标RAM用户名称。

在认证管理页签下的AccessKey区域，单击创建AccessKey。

![image](https://i-blog.csdnimg.cn/blog_migrate/199019c725b9b041fde2081d4d39f654.png)

根据界面提示完成安全验证。

在创建AccessKey对话框，查看AccessKey ID和AccessKey Secret。

#### 4、调用测试阿里OpenAPI

可以使用 [在线SDK 调用](https://next.api.aliyun.com/api/Dysmsapi/2017-05-25/SendSms?spm=a2c4g.11186623.0.0.5a695634u9pp2L&tab=DEMO&lang=PHP)，测试短信是否可接收。

### 二、wordpres 接入阿里短信 SDK

#### 1、在WordPress 的docker 容器中接入阿里云短信 SDK

- 进入 Docker 容器

```powershell
docker exec -it wordpress_container /bin/bash
```

- 安装 Composer
  在容器内安装 Composer。如果你还没有 Composer，可以使用以下命令来全局安装 Composer：

```powershell
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php --install-dir=/usr/local/bin --filename=composer
php -r "unlink('composer-setup.php');"
```

- 配置 Composer 使用阿里云镜像

```powershell
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

- 在官网下载完整 [SDK](https://next.api.aliyun.com/api/Dysmsapi/2017-05-25/SendSms?spm=a2c4g.11186623.0.0.5a695634u9pp2L&tab=DEMO&lang=PHP) 包 ，将包里的 <code> composer.json </code> 文件放入容器 <code> /var/www/html </code> 目录下，代码类似下面，使用时请去官网下载最新版。

```javascript
{
  "name": "alibabacloud/sample",
  "description": "Alibaba Cloud SDK Code Sample Library for PHP",
  "type": "library",
  "license": "Apache-2.0",
  "authors": [],
  "require": {
    "php": ">5.5",
    "alibabacloud/dysmsapi-20170525": "^2.0.24",
    "alibabacloud/darabonba-openapi": "^0.2.10",
    "alibabacloud/tea-console": "^0.1.0",
    "alibabacloud/tea-utils": "^0.2.19"
  },
  "autoload": {
    "psr-4": {
      "AlibabaCloud\\SDK\\Sample\\": "src"
    }
  },
  "scripts": {
    "fixer": "php-cs-fixer fix ./"
  },
  "config": {
    "sort-packages": true,
    "preferred-install": "dist",
    "optimize-autoloader": true
  },
  "prefer-stable": true
}
```

- 安装 阿里短信 SDK 依赖

```powershell
composer install
```

安装完成 /var/www/html 会生成一个 vendor 文件夹 及 composer.lock 文件

#### 2、wordpress 后台接入

- 在wordpress 主题文件 functions.php 中编写接入代码、准备好上面阿里服务创建的 RAM <code>AccessKey </code> 。创建好 Sample 类后续接口使用。

```javascript
/**
 * 接入阿里云短信服务
 */

// 引入短信服务相关sdk
require '/var/www/html/vendor/autoload.php';

use AlibabaCloud\SDK\Dysmsapi\V20170525\Dysmsapi;
use AlibabaCloud\Tea\Utils\Utils;
use AlibabaCloud\Tea\Console\Console;
use \Exception;
use AlibabaCloud\Tea\Exception\TeaError;

use Darabonba\OpenApi\Models\Config;
use AlibabaCloud\SDK\Dysmsapi\V20170525\Models\SendSmsRequest;
use AlibabaCloud\Tea\Utils\Utils\RuntimeOptions;

class Sample
{

    /**
     * 使用AK&SK初始化账号Client
     * @return Dysmsapi Client
     */
    public static function createClient()
    {
        // 工程代码泄露可能会导致 AccessKey 泄露，并威胁账号下所有资源的安全性。以下代码示例仅供参考。
        // 建议使用更安全的 STS 方式，更多鉴权访问方式请参见：https://help.aliyun.com/document_detail/311677.html。
        $config = new Config([
            // 必填，请确保代码运行环境设置了环境变量 ALIBABA_CLOUD_ACCESS_KEY_ID。
            "accessKeyId" => getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), // 替换你实际保存变量的位置
            // 必填，请确保代码运行环境设置了环境变量 ALIBABA_CLOUD_ACCESS_KEY_SECRET。
            "accessKeySecret" => getenv('ALIBABA_CLOUD_ACCESS_KEY_SECRET')
        ]);
        // Endpoint 请参考 https://api.aliyun.com/product/Dysmsapi
        $config->endpoint = "dysmsapi.aliyuncs.com";
        return new Dysmsapi($config);
    }
}
```

- 短发服务接口编写
  这里我们使用内置函数生成随机6位数字验证码，注意<code>$sendSmsRequest</code> 填入你第一步阿里短信服务配置相关参数。
  另外验证码需要设置时效性及对应的验证，这里就不过多介绍。

```javascript
/**
 * 短信服务
 */
function send_sms()
{

    // 获取手机号码
    $phone = isset($_POST['phone']) ? sanitize_text_field($_POST['phone']) : '';

    // 创建客户端并发送短信
    $client = Sample::createClient(); // Sample 类需要在这之前被引入
    $smsCode = rand(100000, 999999); // 生成随机6位数验证码


    $sendSmsRequest = new SendSmsRequest([
        "phoneNumbers" => $phone,
        "signName" => "xxxx科技公司", // 短信签名
        "templateCode" => xxxxxxxxx, // 短信模板CODE
        "templateParam" => json_encode(["code" => $smsCode])

    ]);

    $runtime = new RuntimeOptions([]);

    try {
        $resp = $client->sendSmsWithOptions($sendSmsRequest, $runtime);
        $response = array(
            'status' => 'success',
            'message' => '验证码已发送，请注意查收！'
        );

        wp_send_json($response);
    } catch (Exception $error) {
        // 处理异常
        if (!($error instanceof TeaError)) {
            $error = new TeaError([], $error->getMessage(), $error->getCode(), $error);
        }
        // 返回错误信息
        echo json_encode(array('status' => 'error', 'message' => '验证码发送失败：' . $error->message));
    }
}

add_action('wp_ajax_send_sms', 'send_sms');
add_action('wp_ajax_nopriv_send_sms', 'send_sms');
```

- 最后前端 php 页面发送 ajax 请求调用即可：

```javascript
jQuery.ajax({
    type: 'POST',
    url: '<?php echo admin_url('admin-ajax.php'); ?>',
    data: {
        action: 'send_sms',
        phone: phone,
        type: type
    },
    success: function(response) {
        alert(response.message);
    },
    error: function(xhr, status, error) {
        alert('发生错误：' + error, 'warning');
    }
});
```

至此 完成 docker 部署的wordpress 阿里云短信服务接入！
