export function createSideBarZH() {
  return {
    "/notes/": [
      {
        text: "Vue",
        collapsed: false,
        items: [
          {
            text: "01解决mitt多次触发事件订阅",
            link: "/notes/vue/01解决mitt多次触发事件订阅",
          },
          {
            text: "02v3.4-defindModel初体验",
            link: "/notes/vue/02v3.4-defindModel初体验",
          },
        ],
      },
      {
        text: "Docker",
        collapsed: false,
        items: [
          {
            text: "01基础命令",
            link: "/notes/docker/01基础命令",
          },
          {
            text: "02docker部署",
            link: "/notes/docker/02docker部署",
          },
        ],
      },
      {
        text: "前端规范",
        collapsed: false,
        items: [
          {
            text: "01Vue3代码规范",
            link: "/notes/前端规范/01Vue3代码规范",
          },
        ],
      },
    ].map((item, i) => (!i ? item : { ...item, collapsed: true })),
  };
}
