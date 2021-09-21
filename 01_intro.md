> Vue 不仅在大企业中占有一席之地，而且也是中小企业的首选。而且现在前端岗位比较吃香，所以自己也想碰一碰 Vue。现代流行框架构建 web 都是基于组件(component)，组件 component 的设计主要为了就是重用(reuse)，重用好处就是易于维护和协同开发。还有就是响应式编程，数据驱动界面，通过 MVVM 设计模式 VM 在在数据和界面建立双向桥梁，让程序员从频繁的 DOM 操作中解脱出来，更专注于业务逻辑。



学习 vue 框架我们到达一个境界，解释可以给出一些问题，或者某一个领域可能出现问题的一个通用的解决方案。而不是局限在某一个语法或者某一个具体解决方案。这是现在自己缺失的一种能力，希望大家我们在共同学习 Vue 过程中，不仅了解 Vue 的 API 还要思考为什么要提出这个 API，这个 API 设计初衷，或者是说具体可以用这个 API 去解决那些问题。

## Vue 安装

### 准备工作
- 安装 nodejs
- 安装 visual studio code
- 安装 vetur 插件
### 安装 vue
有下面 3 种方式将 vue 添加到项目中
- **CDN** 方式引入 Vue，这种方式通常用于将 Vue 引入到你之前那些具有一定历史的项目
```html
<script src="https://unpkg.com/vue@next"></script>
```
- **npm** 方式安装 Vue，是使用Vue构建大规模应用程序的推荐方法。
```js
npm install vue@next
```
在用 Vue 构建大规模应用时，npm 这种方式相比与 CDN 方式安装 vue 更受欢迎的方法。
- **Vue CLI**(脚手架方式来安装 vue)

只需几分钟就能启动和运行，具有热重载、lint-on-save 和 production-ready 的构建功能。

```
npm install -g @vue/cli
```

**Vue** 提供了一个官方CLI，用于快速搭建单页应用程序的脚手架

- Vite
[vitejs](https://cn.vitejs.dev/) 是一种新型前端构建工具，能够显著提升前端开发体验。

```js
npm init vite@latest
```



### 使用 Vue/CLI 构建项目

查看 vue 版本

```vue
vue --version
```

```
@vue/cli 4.5.13
```

创建项目

```vue
vue create hello-world
```

提示选择构建项目是基于 vue2 还是 vue，这里选择`Default (Vue 3) ([Vue 3] babel, eslint)`选项来创建项目

```vue
Vue CLI v4.5.13
? Please pick a preset: (Use arrow keys)
❯ Default ([Vue 2] babel, eslint) 
  Default (Vue 3) ([Vue 3] babel, eslint) 
  Manually select features 
```

选择包管理工具，这里选择 `npm`

```vue
Vue CLI v4.5.13
? Please pick a preset: Default (Vue 3) ([Vue 3] babel, eslint)
? Pick the package manager to use when installing dependencies: (Use arrow keys)
❯ Use Yarn 
  Use NPM 
```

选择好包管理工具，就开始创建项目，当项目安装完成后运行如下命令

```
cd hello-world
npm run serve
```

然后就可以开浏览器输入 `http://localhost:8080/ ` 地址，

```
 DONE  Compiled successfully in 1999ms                                              9:37:45 ├F10: AM┤


  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.50.32:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```



然后就可以看到下面界面



<img src="./images/hello_world_001.png">

## 项目结构

就可以看到如下项目结构，

<img src="./images/project_structure_001.png" width="25%">



### pakcage.json 

在包管理文件 package.json 文件中列出了开发和发布时候依赖的包(库)。

```json
"dependencies": {
    "core-js": "^3.6.5",
    "vue": "^3.0.0"
  },
```

开发过程依赖

```json
"devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "@vue/compiler-sfc": "^3.0.0",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^7.0.0"
  },
```

在 `scripts` 中列出了 `serve` 、`build` 和 `lint` 。

```json
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
```



### package-lock.json

这个文件只有在 npm 在 5 以上版本才存在这个文件，也就是说在 npm 5 版本后才引进这个问个 package-lock.json，好处是让 npm 安装依赖时速度更快了。这是因为起初 npm 安装依赖时速度比较慢，所以 google facebook 就自己写了一个 yarn 工具来快速从 npm 仓库里拉取依赖。所以后来 npm 在 5 以后也引入 yarn 安装方式，当时 yarn 引入第三方依赖时就会引入 pakcage-lock.json。

这里既然说了就是把为什么有 pakcage-lock.json 这个文件就会下载比较快，当你用 `npm init -y` 初始化一个项目时候，这时并不会产生 `package-lock.json` 而是当你开始安装依赖时候就会产生 package-lock.json 文件，这个文件详细记录下载依赖的版本、下载地址以及hash 值等信息，所以在下一次安装时就可以通过读取这个文件快速定位到依赖的包，从而实现快速安装依赖包。



### babel.config.js

```js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
```



### 项目中的文件夹

| 项目         | 描述                                                         |      |
| ------------ | ------------------------------------------------------------ | ---- |
| Node_modules | 放置依赖库的文件                                             |      |
| public       | 其中放置一些静态资源，这里暂时包含两个文件 favicon.icon 和 index.html |      |
| src          |                                                              |      |



### 项目源文件(src)

#### main.js

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

这里将 Vue 的根组件 App 绑定到 id 为 app 的 div 的 DOM 元素上。

#### App.vue

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

看这个文件主要有三部分组成，`template` 标签内为视图 `script` 间为脚步代码而 `style` 为样式代码。在 script 中通常返回一个对象，这就是 Vue 的组件，Vue 也是由 component(组件)构成，业务逻辑主要定义在这个对象里。随后我们主要就是了解这个对象，其中 `name` 属性定义名称，`components` 属性注册一下在当前组件中使用到组件。

#### components/HelloWorld.vue



### 引入一个样式表

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
```







### Computed

基于现有属性进行计算，有一个好处就是会将计算结果进行缓存。

#### computed 和 watch

watch 更通用，computed 派生功能都能实现，computed 属性底层来自于 watch 但是在 watch 基础上做了优化，例如缓存，因为 computed 更简单、更高效，优先使用 computed。

#### computed 和 watch 应用场景

- watch 需要在数据变化时执行异步或开销较大的操作时使用，简单讲，当一条数据影响多条数据的时候，例如搜索数据