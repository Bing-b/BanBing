import{d as p,I as s,a3 as i,u,h as c,l,a4 as d,a5 as f,a6 as m,a7 as h,a8 as A,a9 as g,aa as P,ab as v,ac as y,ad as C,ae as w,af as b,ag as R,a1 as _}from"./chunks/framework.dc175bcc.js";import{t as E}from"./chunks/theme.3b94dad1.js";const D={...E,enhanceApp({app:e}){e.component("MyGlobalComponent")}};function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=r(D),T=p({name:"VitePressApp",setup(){const{site:e}=u();return c(()=>{l(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),d(),f(),m(),n.setup&&n.setup(),()=>h(n.Layout)}});async function x(){const e=S(),a=O();a.provide(A,e);const t=g(e.route);return a.provide(P,t),a.component("Content",v),a.component("ClientOnly",y),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:C}),{app:a,router:e,data:t}}function O(){return w(T)}function S(){let e=s,a;return b(t=>{let o=R(t);return e&&(a=o),(e||a===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),_(()=>import(o),[])},n.NotFound)}s&&x().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{x as createApp};