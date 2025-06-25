import { defineConfig } from "vitepress";
import { sidebar, nav } from "./relaConf";

export default defineConfig({
  base: "/BanBing/",
  title: "BING",
  description: "世上只有一种英雄主义，就是在认清生活真相之后依然热爱生活",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // 如果是 SVG，可以写：
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],
  // 配置markdown写作风格
  // markdown: {
  //   toc: {
  //     level: [1, 2, 3, 4]
  //   },
  //   headers: {
  //     level: [1, 2, 3, 4]
  //   },
  //   // https://github.com/valeriangalliat/markdown-it-anchor#usage
  //   anchor: {
  //     // permalink: anchor.permalink.headerLink()
  //   },
  //   lineNumbers: true // 让代码块中实现行号

  //   // config: (md) => {
  //   //   md.use(demoBlockPlugin, {
  //   //     cssPreprocessor: 'less'
  //   //   });
  //   // }
  // },

  themeConfig: {
    logo: "/home.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar,

    search: {
      provider: "local",
    },

    outline: {
      level: [2, 6],
      label: "目录",
    },

    i18nRouting: true,

    // carbonAds: {
    //   code: "your-carbon-code",
    //   placement: "your-carbon-placement",
    // },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
