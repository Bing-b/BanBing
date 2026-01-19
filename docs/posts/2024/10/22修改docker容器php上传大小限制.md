---
title: 修改通过 Docker 部署的 WordPress 上传文件的大小
date: 2024-10-22
---

# 修改通过 Docker 部署的 WordPress 上传文件的大小

> ✨ 文章摘要

<!-- DESC SEP -->

本文介绍了修改 Docker 部署的 WordPress 上传文件限制的多种方案。包括进入容器内部修改 `php.ini` 配置、安装并使用 Vim 编辑器、以及通过挂载自定义 `uploads.ini` 文件或配置环境变量等更具可维护性的方法。旨在帮助开发者解决 WordPress 默认上传大小限制（通常为 2M）导致的大文件上传失败问题。

<!-- DESC SEP -->

---

## 要修改通过 Docker 部署的 WordPress 上传文件的大小，你可以按照以下步骤操作：

1. **进入 Docker 容器**：首先，你需要进入 WordPress 容器内部。可以使用如下命令：

   ```bash
   docker exec -it wordpress /bin/bash
   ```

   其中`wordpress`是你的 WordPress 容器的名称或 ID。

2. **复制配置文件**：在容器内部，复制`php.ini-production`文件到`php.ini`，以便修改生产环境的 PHP 配置：

   ```bash
   cp /usr/local/etc/php/php.ini-production /usr/local/etc/php/php.ini
   ```

   然后，通过`cd`命令进入到 PHP 配置文件所在的目录：

   ```bash
   cd /usr/local/etc/php
   ```

3. **更新 APT 包**：在进行配置修改之前，更新容器的 APT 包管理器：

   ```bash
   apt-get update
   ```

4. **安装文本编辑器**：为了编辑配置文件，你可能需要一个文本编辑器，如`vim`：

   ```bash
   apt-get install vim
   ```

5. **编辑 PHP 配置**：使用文本编辑器打开`php.ini`文件，并修改以下参数：

   ```bash
   vim php.ini
   ```

   找到或添加以下行，并修改其后的值为你需要的值（例如，增加上传文件大小限制）：

   ```
   upload_max_filesize = 200M   ; 文件大小限制
   post_max_size = 250M         ; post大小限制
   memory_limit = 500M          ; 内存占用限制
   ```

   注意：这里的单位是 M（兆），你可以根据需要调整这些值。

6. **重启 Docker 容器**：保存并退出文本编辑器后，重启 WordPress 容器以使更改生效：

   ```bash
   docker restart wordpress
   ```

7. **使用自定义配置文件**：另一种方法是创建一个自定义的 PHP 配置文件（例如`uploads.ini`），并将其作为覆盖设置添加到容器中。这可以通过修改 Docker 启动命令或 docker-compose 文件来实现，将自定义配置文件挂载到容器内的相应路径下：

   ```bash
   docker run --name some-wordpress [...]
   -v /var/docker/uploads.ini:/usr/local/etc/php/conf.d/uploads.ini [...]
   bitnami/wordpress:latest
   ```

   其中`uploads.ini`包含你希望覆盖的 PHP 设置，如：

   ```
   file_uploads = On
   memory_limit = 256M
   upload_max_filesize = 32M
   post_max_size = 32M
   max_execution_time = 360
   ```

   这种方法允许你不必直接修改容器内的`php.ini`文件，而是通过挂载自定义配置文件来覆盖特定的设置。

8. **注意权限问题**：由于 Docker 容器通常以非 root 用户运行，确保挂载的文件和目录具有适当的权限，UID 通常为 1001。

9. **使用环境变量**：在某些情况下，你还可以利用环境变量来设置 PHP 的配置，这可以在运行 Docker 容器时通过`--env`参数传递。

请根据你的具体需求选择合适的方法，并确保在进行更改后充分测试以验证配置的有效性。
