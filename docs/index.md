---
# 提供三种布局，doc、page和home https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# https://vitepress.dev/reference/default-theme-home-page
title: BING
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

hero:
  name: 留白
  text: Stay true, be you
  # tagline: /躺平/
  image:
    #src: /home.gif
    alt: avatar
  actions:
    - theme: brand
      text: 进入主页
      link: /column/views/guide
    - theme: alt
      text: 个人成长
      link: /column/Growing/
features:
  - icon: 👾
    title: Web前端
    details: 专业攻城狮，国内某互联网厂搬砖。
    link: /column/views/guide
  - icon: 📷‍
    title: 热爱摄影
    details: 手持破iphone，也能拍摄大片。
    link: /column/Travel/
  - icon: 🛀
    title: 躺平青年
    details: 是个平平无奇但是又平平无奇的躺平青年。
---

<!-- 自定义组件 -->
<script setup>
import home from './components/home.vue';
</script>
<style >


  .name .clip {
      background-image: linear-gradient(-45deg, #ffcb47, #e34ba9, #369eff, #95f3d9);
      -webkit-background-size: 400% 400%;
      background-size: 400% 400%;
      border-radius: inherit;
      -webkit-animation: 5s animation-text 5s ease infinite;
      animation: 5s animation-text 5s ease infinite;
      position: relative;
      z-index: 5;
      font-size:100px;
      font-family:'xht';
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

  .main .text {
    font-family: "xht";
    font-weight: 600 !important;
  }

</style>
<home />
