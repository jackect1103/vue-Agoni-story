# Agoni小说网项目流程
## 1. 安装node环境
1.1 node.js安装
https://nodejs.org/en/download/

1.2 npm的安装
由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入 "npm -v" 来测试是否成功安装。命令如下，出现版本提示表示安装成功:
```javascript
npm -v
5.6.0
```
1.3 安装cnpm
npm是Node.js提供的包管理工具，因为npm安装插件是从国外服务器下载，受网络影响大，可能出现异常，我们可以用淘宝 npm 镜像cnpm代替默认的 npm。
```javascript
npm install -g cnpm --registry=https://registry.npm.taobao.org 
```

1.4 安装vue-cli3.0
```javascript
命令 ：npm install -g @vue/cli
若出现错误：Unexpected end of JSON input while parsing near···
解决办法：
npm cache clean --force
npm cache verify
npm i -g @vue/cli
```
安装后
查看版本（是否安装成功）：
>vue -V (大写的V)

## 2. 创建项目
2.1 使用vue脚手架创建项目(vue-cli)
```javascript
vue create 项目名字
```

