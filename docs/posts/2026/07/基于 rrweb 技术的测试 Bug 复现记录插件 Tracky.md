---
title: 基于 rrweb 技术的测试 Bug 复现记录插件 Tracky
date: 2026-07-07
---

# 基于 rrweb 技术的测试 Bug 复现记录插件 Tracky

> ✨ 文章摘要

<!-- DESC SEP -->

前几天在浏览技术博客时，偶然看到了 `rrweb` 这个开源项目。它并不像传统的屏幕录制工具那样录制视频流，而是记录网页的 DOM 状态以及后续产生的所有 DOM 变更（Mutation）。这让我瞬间产生了一个灵感：这简直是做 Bug 复现神器和测试记录的完美技术方案啊！

趁热打铁，结合最近正在探索的 AI 辅助编程，我快速实现了一个名为 **Tracky** 的轻量级浏览器录制插件。

<!-- DESC SEP -->

---

## 1. 传统 Bug 录制的痛点

在日常的研发与测试协同中，我们经常遇到这样的场景：QA 发现了一个 Bug，光靠文字描述很难讲清楚前置条件和操作路径。于是大家习惯于录屏（比如用系统自带的录屏或者第三方工具）。但这种方式有几个明显的缺陷：

1. **文件体积大**：动辄几十 MB 的 MP4 文件，上传到 Jira 或内网系统非常慢。
2. **缺乏交互上下文**：视频只能“看”，研发在定位问题时，如果想知道当时网络请求的状态、或者某个具体 DOM 元素的层级结构，视频是无法提供这些信息的。
3. **模糊不清**：一旦视频被压缩，某些关键的微小 UI 变化或者文字提示就看不清了。

## 2. 遇见 rrweb 与 Tracky 的诞生

[rrweb (Record and Replay the Web)](https://github.com/rrweb-io/rrweb) 的出现完美解决了这个问题。它把页面的初始 DOM 树转换为一个快照（Snapshot），然后利用 `MutationObserver` 监听 DOM 树的任何变化（如节点的增删、属性的修改、文本的变动等）。同时，它还能捕获鼠标轨迹、点击事件、滚动位置甚至是 Canvas 的重绘。

基于这个核心能力，我开发了 **Tracky** —— 一个专为开发者 (Dev)、QA 和产品经理 (PM) 设计的 Chrome 浏览器插件。

### Tracky 的核心工作流：

1. **一键录制**：插件在页面右侧注入了一个极简的悬浮控制台，发现 Bug 时点击“开始录制”。
2. **精准捕获**：底层的 rrweb 开始默默记录所有的 DOM 变更和用户交互。
3. **单文件导出**：录制结束后，Tracky 会将收集到的 JSON 数据以及 `rrweb-player` 播放器打包，**生成一个独立的、自包含的 `.html` 文件**。

这意味着，QA 只需要把这个几百 KB 的 HTML 文件发给开发，开发用任何浏览器双击打开它，就能看到像素级 1:1 的完美回放。更绝的是，在回放过程中，**开发还可以直接打开控制台审查元素 (Inspect Element)**，因为回放的本质就是 DOM 的重建！

## 3. 技术实现细节

在开发 Tracky 时，主要的技术栈是原生 JavaScript + Chrome Extension Manifest V3。

### 3.1 核心目录结构

插件非常轻量，没有引入臃肿的打包工具，主要由以下几部分组成：

```text
- manifest.json      // 插件配置 (V3)
- rrweb-all.min.js   // 核心依赖
- content.js         // 注入到页面的脚本（包含悬浮 UI 和录制逻辑）
- background.js      // Service Worker (处理下载等后台任务)
```

### 3.2 自包含 HTML 的魔法

在 `content.js` 中，当录制停止时，我们需要把记录的事件数组转换成一个可以直接播放的网页。这里的核心思路是拼接 HTML 字符串：

```javascript
// 伪代码演示
const eventsJson = JSON.stringify(recordedEvents);
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/rrweb-player@latest/dist/style.css" />
  <script src="https://cdn.jsdelivr.net/npm/rrweb-player@latest/dist/index.js"><\/script>
</head>
<body>
  <script>
    const events = ${eventsJson};
    const player = new rrwebPlayer({
      target: document.body,
      props: {
        events: events,
      },
    });
  <\/script>
</body>
</html>
`;
```

拼接完成后，利用 `Blob` 和 Chrome 插件的 `chrome.downloads.download` API，将这段 HTML 直接下载到用户的本地。

## 4. 总结与展望

从偶然在博客看到一个技术方案，到自己动手用 AI 辅助写出一个可以落地的工具，整个过程非常令人兴奋。Tracky 完美地证明了“DOM 录制”相较于“视频录制”在 Web 研发流程中的降维打击优势。

接下来，我打算给 Tracky 增加更多实用特性：比如在回放时同步记录 Console 的报错信息 (Network/Console)，让它彻底变成一个全能的 Debug 记录仪！
