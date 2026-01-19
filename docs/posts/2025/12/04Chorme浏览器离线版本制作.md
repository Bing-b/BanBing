---
title: Chrome 浏览器离线版本制作教程
date: 2025-12-04
---

# Chrome 浏览器离线版本制作教程

> ✨ 文章摘要

<!-- DESC SEP -->

这篇文章《Chrome 浏览器离线版本制作教程（含低版本包）》主要介绍了如何在 Windows 环境下制作并使用 Chrome 浏览器的离线（便携）版本，以实现多版本共存且互不干扰。

核心优势与说明

- 系统支持：仅支持 Windows 版本的 Chrome 浏览器 。

- 多版本共存：支持多个版本的 Chrome 同时存在，与日常使用的安装版不会发生冲突，可任意切换 。
<!-- DESC SEP -->

---

任意地方新建一个目录，用于存放多版本 chrome，例如新建一个chromes目录

## 1、下载并提取启动器

下载地址：**https://portableapps.com/apps/internet/google_chrome_portable**
将下载的 exe 文件后缀改成 zip（如果你压缩软件支持右键已压缩包形式打开也行） ,提取里面的 GoogleChromePortable.exe，放到上面新建的chromes目录。

![chorme](../../../public/images/chorme1.png)

## 2、提取 Chrome 主程序

在 **https://www.chromedownloads.net/chrome64win** 下载所需的 Chrome 离线版（exe）。下载后不要直接安装，把 .exe 改成 .zip 并打开，里面有一个 chrome.7z 文件，把它解压出来即可。

![chorme](../../../public/images/chorme2.png)

3、制作离线版

- 在 chromes 下创建一个以版本号命名的文件夹（如 76）。

- 把 GoogleChromePortable.exe 复制进去，并按需重命名为 Chrome76.exe。

- 在该文件夹内新建 App 目录，将之前提取出的 chrome.7z 放进去并解压（会生成 Chrome-bin）；解压后可删除 chrome.7z。

最终形成以下的目录形式即可
![chorme](../../../public/images/chorme3.png)

![chorme](../../../public/images/chorme4.png)

然后双击Chrome76.exe即可运行，首次运行会在当前目录生成一个Data目录，用于存放 Chrome 的数据，这样就不会和系统的安装的 Chrome 有冲突了。
