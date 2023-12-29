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
  text: Stay true, be you..
  tagline: /躺平/
  image:
    src: /home.gif
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
  - icon: 🛀
    title: 躺平青年
    details: 是个平平无奇但是又平平无奇的躺平青年。
---

<!-- 自定义组件 -->
<script setup>
//import home from './components/home.vue';
</script>

<home />
