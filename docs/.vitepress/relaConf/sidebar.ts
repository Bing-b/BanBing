import { DefaultTheme } from "vitepress";
export const sidebar: DefaultTheme.Sidebar = {
  "/column/Vue": [
    {
      text: "Vue",
      items: [
        {
          text: "defindModel 初体验",
          link: "/column/Vue/index",
        },
        {
          text: "解决 mitt 多次触发事件订阅 bug",
          link: "/column/Vue/001_Mitt",
        },
      ],
    },
  ],
  "/column/JavaScript": [
    {
      text: "JavaScript",
      items: [
        {
          text: "浅析 forEach 与 for 循环的区别",
          link: "/column/JavaScript/index",
        },
        {
          text: "解决 mitt 多次触发事件订阅 bug",
          link: "/column/Vue/001_Mitt",
        },
      ],
    },
  ],
  "/column/Plugins/": [
    {
      text: "前端框架&库",
      items: [
        {
          text: "AceEditor 封装及自定义扩展语言实现",
          link: "/column/Blogs/index",
        },
      ],
    },
  ],
};
