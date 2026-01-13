import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "首页",
    link: "/",
  },
  { text: "归档", link: "/archive", activeMatch: "/archive" },
  {
    text: "前端",
    items: [
      {
        text: "Vue",
        link: "/column/Vue/index",
      },
      {
        text: "插件调研",
        link: "/column/Plugins/",
      },
      {
        text: "JavaScript",
        link: "/column/JavaScript/",
      },
      {
        text: "砸碎",
        link: "/column/Tool/",
      },
    ],
  },
  {
    text: "后端",
    items: [
      {
        text: "docker",
        link: "/column/Docker/",
      },
    ],
  },
  {
    text: "Life",
    items: [
      {
        text: "摄影",
        link: "/column/Travel/",
      },
    ],
  },
  {
    text: "关于我",
    items: [
      { text: "Github", link: "https://github.com/Bing-b" },
      {
        text: "CSDN",
        link: "https://blog.csdn.net/Centenario_0?type=blog",
      },
      {
        text: "掘金",
        link: "https://juejin.cn/user/1007568465429656",
      },
    ],
  },
];
