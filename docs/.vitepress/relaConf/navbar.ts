import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "前端",
    items: [
      {
        text: "前端框架&库",
        link: "/column/Blogs/",
      },
      {
        text: "JavaScript",
        link: "/column/Algorithm/",
      },
    ],
  },
  // {
  //   text: "后端",
  //   items: [
  //     {
  //       text: "dovker",
  //       link: "/column/Travel/",
  //     },
  //   ],
  // },
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
