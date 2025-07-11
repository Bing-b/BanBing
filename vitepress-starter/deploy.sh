#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run docs:build

# 进入生成的文件夹
cd  ../docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# 将master构建后的代码合并到gh-pages分支上，然后在gh-pages分支上部署~
git push -f git@github.com:/Bing-b/BanBing.git master:gh-pages