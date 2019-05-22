# vue-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

## 项目描述

针对vue写的一些demo 以及一些页面效果，平常做笔记和记录，方便自己可以随时查看和巩固

## 日志更新

##19.04.02

* 更新vuex的demo巩固了modules 和项目结构，以及action异步操作和mapMutations等
* 更新了事件修饰符，加深时间修饰符的使用和意义
* 使用touchmove处理左右滑动效果 暂时进行了一半

### 目录

页面  | name | 说明
---|---|---
1.tab-page[页面tab切换子页面]   | tabPage | 不改变hash规则 使用子路由进行tab切换  
2.页面地址参数获取 | Bss  | 路由传参和参数获取
3.slot   | Solt |  插槽的使用
4.Resolve   | Resolve | 按需加载 使用require引入会打包不同的js，优化首次加载内容
5.es6语法   | JsEs6 | es6的一些简单使用
6.axios请求axios接口请求  | Axios | axios的一个封装和使用
7.ScrollLeft左右滚动   | ScrollLeft | 移动端左右滑动效果 不太完善
8.修饰符  | Decorate | vue的一些简化事件修饰符的使用
9.vuex   | Vuexs | 状态管理的使用