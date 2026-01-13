import DefaultTheme from "vitepress/theme";
import "./custom.css";
import "./index.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app, router }: any) {
    // register global components
    app.component("MyGlobalComponent" /* ... */);

    router.onAfterRouteChanged = (to: string) => {
      // 兼容旧博客的中文路径，重定向到新路径，避免外链失效
      if (to.startsWith(encodeURI("/博客/"))) {
        const newUrl = to.replace(encodeURI("/博客/"), "/posts/");
        window.location.href = newUrl;
      }

      if (to.startsWith(encodeURI("/笔记/"))) {
        const newUrl = to.replace(encodeURI("/笔记/"), "/notes/");
        window.location.href = newUrl;
      }
    };
  },
};
