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
  "/column/Tool/": [
    {
      text: "工具",
      items: [
        {
          text: "Ngrok 实现内网穿透",
          link: "/column/Tool/index",
        },
        {
          text: "Vue3 代码规范",
          link: "/column/Tool/specification",
        },
      ],
    },
  ],
  "/column/Docker/": [
    {
      text: "Docker",
      items: [
        {
          text: "常用命令",
          link: "/column/Docker/index",
        },
        {
          text: "修改容器php.ini",
          link: "/column/Docker/001_php",
        },
      ],
    },
  ],
};
