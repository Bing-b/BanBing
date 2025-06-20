### 基础常用命令

1、进入容器

```shell
docker exec -it <容器名> /bin/bash
```

2、重启容器

```shell
docker restart <容器名>
```

3、本地文件覆盖容器文件

```shell
docker cp  /本地文件路径 <容器名>:/容器路径
# eg: docker cp  /data/website_doc/application/dist doc_nginx:/usr/share/nginx/html
```

4、重启容器

```shell
docker restart <容器名>
```
