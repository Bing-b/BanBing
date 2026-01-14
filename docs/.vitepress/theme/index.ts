import Theme from "vitepress/theme";
import "tdesign-vue-next/es/style/index.css";
import "./custom.css";
import "./index.css";
import GoBack from "./components/goBack.vue";
import { h } from "vue";

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // "doc-after": () => h(Comment),
      // "doc-top": () => h(ImageViewer),
      "aside-top": () => h(GoBack),
    });
  },
  enhanceApp({ app, router }: any) {
    // register global components
    app.component("MyGlobalComponent" /* ... */);
    app.component("GoBack", GoBack);

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
