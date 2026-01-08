### 常用命令

## 1、镜像相关

```shell
docker images  # 查看镜像

#从服务器拉取镜像拉取镜像
docker pull 镜像名 # 拉取最新版本的镜像
docker pull 镜像名:tag # 拉取镜像，指定版本

#推送镜像到服务
docker push 镜像名
docker push 镜像名:tag

#删除镜像，当前警情无任何容器使用才行
docker rmi 镜像名/镜像id #删除镜像
docker rmi -f 镜像名/镜像id #强制删除
docker rmi -f 镜像1 镜像2 #删除多个

#给镜像打标签
docker tag 原始镜像[:TAG] 目标镜像[:TAG]

#保存镜像
docker save -o 保存的目标文件名（可以指定路径/文件名） 镜像名

#加载镜像
docker load -i 镜像名

```

## 2、容器相关

```shell
docker ps #显示正在运行的容器
docker ps -a #显示全部容器，包括停止的

#启动容器
docker run -d --name 运行容器名称 -p 80:80 -d 镜像名称

# 暂停、中止、开始、重启
docker pause 容器名/id
docker stop name/id
docker start name/id
docker restart name/id

docker kill 容器名    #杀掉一个运行中的容器
docker rename 容器名 新容器名  #更换容器名

#删除容器
docker rm name/id
docker rm -f name/id #强制删除
docker rm name1 name2 #删除多个

#查看容器日志
docker logs name
docker logs -d name #持续跟踪日志

# 进容器
docker exec -it <容器名> /bin/bash

#退出
exit
```

## 3、本地文件覆盖容器文件

```shell
docker cp  /本地文件路径 <容器名>:/容器路径
# eg: docker cp  /data/website_doc/application/dist doc_nginx:/usr/share/nginx/html
```
