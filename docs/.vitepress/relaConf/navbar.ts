import { DefaultTheme } from "vitepress";

import { createSideBarZH } from "../theme/utils/createSideBar";

const sideBarConfig = createSideBarZH();
const firstNoteItemLink = sideBarConfig["/notes/"][0].items[0].link;

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "首页",
    link: "/",
  },
  { text: "归档", link: "/archive", activeMatch: "/archive" },
  {
    text: "笔记",
    link: firstNoteItemLink,
    activeMatch: "/notes",
  },
  // {
  //   text: "Life",
  //   link: "/column/Travel/",
  //   activeMatch: "/life",
  // },
  {
    text: "关于",
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
