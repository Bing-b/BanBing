import { defineConfig } from "vitepress";
import { sidebar, nav } from "./relaConf";
const isProd = process.env.NODE_ENV === "production";
export default {
  base: isProd ? "/BanBing/" : "/",
  title: "BING",
  description: "世上只有一种英雄主义，就是在认清生活真相之后依然热爱生活",
  head: [["link", { rel: "icon", href: "/BanBing/favicon.ico" }]],

  cleanUrls: true,
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
