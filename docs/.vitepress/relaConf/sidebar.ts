import { DefaultTheme } from "vitepress";
export const sidebar: DefaultTheme.Sidebar = {
  "/column/Blogs/": [
    {
      text: "前端框架&库",
      items: [
        {
          text: "对 AceEditor 二次封装 及 自定义扩展语言实现",
          link: "/column/Blogs/index",
        },
        {
          text: "token + localstorage 验证登录(vue)详细教程",
          link: "/column/Blogs/001",
        },
      ],
    },
  ],
};
