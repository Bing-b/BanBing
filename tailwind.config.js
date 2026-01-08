/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  safelist: ["dark"],
  content: [
    "./docs/**/*.vue",
    "./docs/**/*.md",
    "./docs/.vitepress/**/*.vue",
    "./docs/.vitepress/**/*.ts",
  ],
  theme: {
    extend: {
      // 自定义字体
      fontFamily: {
        cyly: ["cyly"],
        maoken: ["maoken"],
        xht: ["xht"],
      },
    },
  },
  plugins: [], // 插件
};
