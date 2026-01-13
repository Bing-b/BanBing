import { defineConfig } from "vitepress";
import { sidebar, nav } from "./relaConf";

export default {
  base: "/BanBing",
  title: "BING",
  description: "世上只有一种英雄主义，就是在认清生活真相之后依然热爱生活",
  head: [["link", { rel: "icon", href: "/BanBing/favicon.ico" }]],
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
    logo: "/logo.png",
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

    i18nRouting: false,
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    outlineTitle: "当前页面",
    lastUpdatedText: "最近更新时间",

    // carbonAds: {
    //   code: "your-carbon-code",
    //   placement: "your-carbon-placement",
    // },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
};
