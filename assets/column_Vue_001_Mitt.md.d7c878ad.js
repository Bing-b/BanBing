import{_ as s,o as a,c as n,N as l}from"./chunks/framework.dc175bcc.js";const C=JSON.parse('{"title":"解决 mitt 多次触发事件订阅 bug","description":"","frontmatter":{},"headers":[],"relativePath":"column/Vue/001_Mitt.md"}'),t={name:"column/Vue/001_Mitt.md"},p=l(`<h1 id="解决-mitt-多次触发事件订阅-bug" tabindex="-1">解决 mitt 多次触发事件订阅 bug <a class="header-anchor" href="#解决-mitt-多次触发事件订阅-bug" aria-label="Permalink to &quot;解决 mitt 多次触发事件订阅 bug&quot;">​</a></h1><h3 id="💬-问题起源" tabindex="-1">💬 问题起源 <a class="header-anchor" href="#💬-问题起源" aria-label="Permalink to &quot;💬 问题起源&quot;">​</a></h3><p>在日常 vue 项目开发中，有时会用到 mitt（前身事件总线 mittBus）进行事件传递，然而使用经常就是 mitt().emit() , mitt().on 就结束了，未考虑到取消订阅事件， 订阅事件会创建回调函数，并将其添加到事件总线中。如果在实例卸载前不取消订阅，这些回调函数将一直存在于内存中， 这就导致同个订阅事件触发时相应多次。</p><h3 id="👌-解决方案" tabindex="-1">👌 解决方案 <a class="header-anchor" href="#👌-解决方案" aria-label="Permalink to &quot;👌 解决方案&quot;">​</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> proxy </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> = getCurrentInstance();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  // 订阅事件</span></span>
<span class="line"><span style="color:#A6ACCD;">  proxy.mittBus.on(&#39;eventName&#39;, () =&gt; </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  // 实例卸载前取消相关事件订阅</span></span>
<span class="line"><span style="color:#A6ACCD;">  onBeforeUnmount(() =&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 取消订阅特定事件</span></span>
<span class="line"><span style="color:#A6ACCD;">  proxy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">mittBus</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">off</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eventName</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 取消订阅所以事件</span></span>
<span class="line"><span style="color:#A6ACCD;">  proxy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">mittBus</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">all</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>附 mitt github 文档，以此记录 <a href="https://github.com/developit/mitt#parameters" target="_blank" rel="noreferrer">https://github.com/developit/mitt#parameters</a></p>`,6),o=[p];function e(c,r,i,D,y,F){return a(),n("div",null,o)}const m=s(t,[["render",e]]);export{C as __pageData,m as default};
