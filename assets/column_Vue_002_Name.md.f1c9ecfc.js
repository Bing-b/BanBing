import{_ as s,o as a,c as n,N as e}from"./chunks/framework.d69a0811.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"column/Vue/002_Name.md"}'),l={name:"column/Vue/002_Name.md"},p=e(`<h3 id="一、vue-文件命名规范" tabindex="-1">一、vue 文件命名规范 <a class="header-anchor" href="#一、vue-文件命名规范" aria-label="Permalink to &quot;一、vue 文件命名规范&quot;">​</a></h3><h4 id="常用的命名规范" tabindex="-1">常用的命名规范： <a class="header-anchor" href="#常用的命名规范" aria-label="Permalink to &quot;常用的命名规范：&quot;">​</a></h4><ul><li>camelCase （小驼峰式命名法–首字母小写）</li><li>PascalCase （大驼峰式命名法–首字母大写）</li><li>kebab-case（短横线连接式）</li><li>Snake（下划线连接式）</li></ul><h5 id="_1-1-项目文件命名" tabindex="-1">1.1 项目文件命名 <a class="header-anchor" href="#_1-1-项目文件命名" aria-label="Permalink to &quot;1.1 项目文件命名&quot;">​</a></h5><p>规则可以快速记忆为 “ 静态文件下划线，编译文件短横线 ”</p><p>1.1.1 项目名 全部采用小写方式，以短横线分隔。例：==my-project-name== 1.1.2 目录名</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">my-project-name/</span></span>
<span class="line"><span style="color:#babed8;">|- builds         // 部署配置</span></span>
<span class="line"><span style="color:#babed8;">|- docs           // 项目的细化文档目录（可选）</span></span>
<span class="line"><span style="color:#babed8;">|- nginx          // 部署在容器上前端项目 nginx 代理文件目录</span></span>
<span class="line"><span style="color:#babed8;">|- config         // 全局配置</span></span>
<span class="line"><span style="color:#babed8;">|- node_modules   // 下载的依赖包</span></span>
<span class="line"><span style="color:#babed8;">|- public         // 静态页面目录</span></span>
<span class="line"><span style="color:#babed8;">|- src            // 源码目录</span></span>
<span class="line"><span style="color:#babed8;">  |- api          // http 请求目录</span></span>
<span class="line"><span style="color:#babed8;">  |- assets       // 静态资源目录，这里的资源会被wabpack构建</span></span>
<span class="line"><span style="color:#babed8;">    |- icon   // icon 存放目录</span></span>
<span class="line"><span style="color:#babed8;">    |- img    // 图片存放目录</span></span>
<span class="line"><span style="color:#babed8;">    |- js     // 公共 js 文件目录</span></span>
<span class="line"><span style="color:#babed8;">    |- scss   // 公共样式 scss 存放目录</span></span>
<span class="line"><span style="color:#babed8;">      |- frame.scss   // 入口文件</span></span>
<span class="line"><span style="color:#babed8;">      |- global.scss  // 公共样式</span></span>
<span class="line"><span style="color:#babed8;">      |- reset.scss   // 重置样式</span></span>
<span class="line"><span style="color:#babed8;">  |- components     // 组件</span></span>
<span class="line"><span style="color:#babed8;">  |- hooks          // hook</span></span>
<span class="line"><span style="color:#babed8;">  |- directives     // 公用指令</span></span>
<span class="line"><span style="color:#babed8;">  |- layout         // 框架布局</span></span>
<span class="line"><span style="color:#babed8;">  |- theme          // 主题</span></span>
<span class="line"><span style="color:#babed8;">  |- types          // 类型</span></span>
<span class="line"><span style="color:#babed8;">  |- enums          // 枚举</span></span>
<span class="line"><span style="color:#babed8;">  |- plugins        // 插件</span></span>
<span class="line"><span style="color:#babed8;">  |- router         // 路由</span></span>
<span class="line"><span style="color:#babed8;">    |- routes     // 详细的路由拆分目录（可选）</span></span>
<span class="line"><span style="color:#babed8;">    |- index.js</span></span>
<span class="line"><span style="color:#babed8;">  |- store  // 全局状态管理</span></span>
<span class="line"><span style="color:#babed8;">  |- utils  // 工具存放目录</span></span>
<span class="line"><span style="color:#babed8;">    |- request.js // 公共请求工具</span></span>
<span class="line"><span style="color:#babed8;">  |- views          // 页面存放目录</span></span>
<span class="line"><span style="color:#babed8;">  |- App.vue        // 根组件</span></span>
<span class="line"><span style="color:#babed8;">  |- main.js        // 入口文件</span></span>
<span class="line"><span style="color:#babed8;">|- tests          // 测试用例</span></span>
<span class="line"><span style="color:#babed8;">|- .browserslistrc// 浏览器兼容配置文件</span></span>
<span class="line"><span style="color:#babed8;">|- .editorconfig  // 编辑器配置文件</span></span>
<span class="line"><span style="color:#babed8;">|- .eslintignore  // eslint 忽略规则</span></span>
<span class="line"><span style="color:#babed8;">|- .eslintrc.js   // eslint 规则</span></span>
<span class="line"><span style="color:#babed8;">|- .gitignore     // git 忽略规则</span></span>
<span class="line"><span style="color:#babed8;">|- Dockerfile // Docker 部署文件</span></span>
<span class="line"><span style="color:#babed8;">|- index.html // 项目入口</span></span>
<span class="line"><span style="color:#babed8;">|- package-lock.json</span></span>
<span class="line"><span style="color:#babed8;">|- package.json // 依赖</span></span>
<span class="line"><span style="color:#babed8;">|- README.md // 项目 README</span></span>
<span class="line"><span style="color:#babed8;">|- vite.config.js // vite 配置</span></span></code></pre></div><p>1.1.3 图像文件名 全部采用小写方式， 优先选择单个单词命名，多个单词命名以下划线分隔。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">apple.png</span></span>
<span class="line"><span style="color:#babed8;">logo_police.gif</span></span></code></pre></div><p>1.1.4 HTML 文件名 全部采用小写方式， 优先选择单个单词命名，多个单词命名以下划线分隔。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">|- error_report.html</span></span>
<span class="line"><span style="color:#babed8;">|- success_report.html</span></span></code></pre></div><p>1.1.5 CSS/Less/Sass 文件名 全部采用小写方式， 优先选择单个单词命名，多个单词命名以短横线分隔。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">|- normalize.less</span></span>
<span class="line"><span style="color:#babed8;">|- base.less</span></span></code></pre></div><p>1.1.6 Js/Ts 文件名</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">index.js</span></span>
<span class="line"><span style="color:#babed8;">config.ts</span></span></code></pre></div><h5 id="_1-2-vue-组件命名" tabindex="-1">1.2 Vue 组件命名 <a class="header-anchor" href="#_1-2-vue-组件命名" aria-label="Permalink to &quot;1.2 Vue 组件命名&quot;">​</a></h5><p>参考官方风格指南 <a href="https://cn.vuejs.org/style-guide/" target="_blank" rel="noreferrer">https://cn.vuejs.org/style-guide/</a></p>`,17),o=[p];function c(t,i,r,b,d,y){return a(),n("div",null,o)}const g=s(l,[["render",c]]);export{h as __pageData,g as default};
