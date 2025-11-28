import{_ as a,c as n,o as p,ag as e}from"./chunks/framework.Ctd7LOiU.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"column/Vue/002_Name.md","filePath":"column/Vue/002_Name.md"}'),l={name:"column/Vue/002_Name.md"};function i(c,s,t,o,r,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h3 id="一、vue-文件命名规范" tabindex="-1">一、vue 文件命名规范 <a class="header-anchor" href="#一、vue-文件命名规范" aria-label="Permalink to &quot;一、vue 文件命名规范&quot;">​</a></h3><h4 id="常用的命名规范" tabindex="-1">常用的命名规范： <a class="header-anchor" href="#常用的命名规范" aria-label="Permalink to &quot;常用的命名规范：&quot;">​</a></h4><ul><li>camelCase （小驼峰式命名法–首字母小写）</li><li>PascalCase （大驼峰式命名法–首字母大写）</li><li>kebab-case（短横线连接式）</li><li>Snake（下划线连接式）</li></ul><h5 id="_1-1-项目文件命名" tabindex="-1">1.1 项目文件命名 <a class="header-anchor" href="#_1-1-项目文件命名" aria-label="Permalink to &quot;1.1 项目文件命名&quot;">​</a></h5><p>规则可以快速记忆为 “ 静态文件下划线，编译文件短横线 ”</p><p>1.1.1 项目名 全部采用小写方式，以短横线分隔。例：==my-project-name== 1.1.2 目录名</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>my-project-name/</span></span>
<span class="line"><span>|- builds         // 部署配置</span></span>
<span class="line"><span>|- docs           // 项目的细化文档目录（可选）</span></span>
<span class="line"><span>|- nginx          // 部署在容器上前端项目 nginx 代理文件目录</span></span>
<span class="line"><span>|- config         // 全局配置</span></span>
<span class="line"><span>|- node_modules   // 下载的依赖包</span></span>
<span class="line"><span>|- public         // 静态页面目录</span></span>
<span class="line"><span>|- src            // 源码目录</span></span>
<span class="line"><span>  |- api          // http 请求目录</span></span>
<span class="line"><span>  |- assets       // 静态资源目录，这里的资源会被wabpack构建</span></span>
<span class="line"><span>    |- icon   // icon 存放目录</span></span>
<span class="line"><span>    |- img    // 图片存放目录</span></span>
<span class="line"><span>    |- js     // 公共 js 文件目录</span></span>
<span class="line"><span>    |- scss   // 公共样式 scss 存放目录</span></span>
<span class="line"><span>      |- frame.scss   // 入口文件</span></span>
<span class="line"><span>      |- global.scss  // 公共样式</span></span>
<span class="line"><span>      |- reset.scss   // 重置样式</span></span>
<span class="line"><span>  |- components     // 组件</span></span>
<span class="line"><span>  |- hooks          // hook</span></span>
<span class="line"><span>  |- directives     // 公用指令</span></span>
<span class="line"><span>  |- layout         // 框架布局</span></span>
<span class="line"><span>  |- theme          // 主题</span></span>
<span class="line"><span>  |- types          // 类型</span></span>
<span class="line"><span>  |- enums          // 枚举</span></span>
<span class="line"><span>  |- plugins        // 插件</span></span>
<span class="line"><span>  |- router         // 路由</span></span>
<span class="line"><span>    |- routes     // 详细的路由拆分目录（可选）</span></span>
<span class="line"><span>    |- index.js</span></span>
<span class="line"><span>  |- store  // 全局状态管理</span></span>
<span class="line"><span>  |- utils  // 工具存放目录</span></span>
<span class="line"><span>    |- request.js // 公共请求工具</span></span>
<span class="line"><span>  |- views          // 页面存放目录</span></span>
<span class="line"><span>  |- App.vue        // 根组件</span></span>
<span class="line"><span>  |- main.js        // 入口文件</span></span>
<span class="line"><span>|- tests          // 测试用例</span></span>
<span class="line"><span>|- .browserslistrc// 浏览器兼容配置文件</span></span>
<span class="line"><span>|- .editorconfig  // 编辑器配置文件</span></span>
<span class="line"><span>|- .eslintignore  // eslint 忽略规则</span></span>
<span class="line"><span>|- .eslintrc.js   // eslint 规则</span></span>
<span class="line"><span>|- .gitignore     // git 忽略规则</span></span>
<span class="line"><span>|- Dockerfile // Docker 部署文件</span></span>
<span class="line"><span>|- index.html // 项目入口</span></span>
<span class="line"><span>|- package-lock.json</span></span>
<span class="line"><span>|- package.json // 依赖</span></span>
<span class="line"><span>|- README.md // 项目 README</span></span>
<span class="line"><span>|- vite.config.js // vite 配置</span></span></code></pre></div><p>1.1.3 图像文件名 全部采用小写方式， 优先选择单个单词命名，多个单词命名以下划线分隔。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>apple.png</span></span>
<span class="line"><span>logo_police.gif</span></span></code></pre></div><p>1.1.4 HTML 文件名 全部采用小写方式， 优先选择单个单词命名，多个单词命名以下划线分隔。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>|- error_report.html</span></span>
<span class="line"><span>|- success_report.html</span></span></code></pre></div><p>1.1.5 CSS/Less/Sass 文件名 全部采用小写方式， 优先选择单个单词命名，多个单词命名以短横线分隔。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>|- normalize.less</span></span>
<span class="line"><span>|- base.less</span></span></code></pre></div><p>1.1.6 Js/Ts 文件名</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>index.js</span></span>
<span class="line"><span>config.ts</span></span></code></pre></div><h5 id="_1-2-vue-组件命名" tabindex="-1">1.2 Vue 组件命名 <a class="header-anchor" href="#_1-2-vue-组件命名" aria-label="Permalink to &quot;1.2 Vue 组件命名&quot;">​</a></h5><p>参考官方风格指南 <a href="https://cn.vuejs.org/style-guide/" target="_blank" rel="noreferrer">https://cn.vuejs.org/style-guide/</a></p>`,17)]))}const g=a(l,[["render",i]]);export{h as __pageData,g as default};
