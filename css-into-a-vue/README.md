

CSS-in-JS

BEM

Scoped css

css-module



聊一聊 Vue 中如何正确地使用 CSS ，介绍 style 标签中 scoped 和 module 属性使用方式，如何正确使用



Vue 深入浅出系列—聊一聊 CSS in Vue(上)

聊一聊 Vue 中如何正确地使用 CSS 

### CSS 作用域

- 在 .vue 文件中，我们都知道在 vue 有 template、script 和 style 块，其中 style 样式是全局样式
- 如果 style 标签中使用 scoped 属性`<style scoped>`，将样式作用范围限制在组件中

> 提示：如果一个子组件的根元素有一个在父组件中也存在的 class，父组件的样式将影响到到子组件中。



```vue
<template>
  <outside-comp/>
</template>

<script>
import OutsideComp from './components/OutsideComp.vue'

export default {
  name: 'App',
  components: {
    OutsideComp
  }
}
</script>
```



####  OutsideComp.vue

```vue
<style >
.example{
  color:orangered
}
</style>
<template>
  <div class="example">{{title}}</div>
  <inner-comp/>
</template>
```



#### InnerComp.vue

```vue
<style >
.example{
  font-weight: bolder;
  color: blueviolet;
}
</style>
<template>
  <div class="example">Inner Component</div>
</template>
```



上面代码片段中 style 定义样式 `.example` 是一个全局样式，会作用于整个应用中定义了 `class="example"` 所有DOM 元素。

```vue
<style scoped>
```
如果在添加 `scoped` 属性表示该样式仅作用于当前组件

```vue
<style type="text/css">
.example[data-v-381a8405]{
  font-weight: bolder;
  color: blueviolet;
}
</style>
<template>
  <div class="example" data-v-381a8405="">Inner Component</div>
</template>
```
通过上面代码我们不难发现当你在 style 标签给出属性后，会在组件内应用了该样式的 HTML 元素添加一个按照一定规则生成属性 `data-v-381a8405` 然后样式仅应用到该具有该属性的 HTML 元素 

```vue
.example[data-v-381a8405]{
  font-weight: bolder;
  color: blueviolet;
}
```



```vue
<style>
/* global styles */
</style>

<style scoped>
/* local styles */
</style>
```



在同一个组件可以定义 2 个或者多个 `<style>` 其中可以由 `scoped` 也可以有没有 scoped 属性，



### CSS Modules

开箱即用，可替代 scoped 内的CSS，在`<style>`标签中使用 module 属性，使用样式 class 绑定来到`$style`对象，也就是说明可以通过 `$style` 来访问该样式


```vue
<style module>
.example{
  color:orangered
}
</style>
<template>
  <div :class="$style.example">{{title}}</div>
  <inner-comp/>
</template>
<script>
import InnerComp from './InnerComp.vue'
export default{
  components: { InnerComp },
  name:"OutsideComp",
  data(){
    return {
      title:"Outside Component"
    }
  }
} 
</script>
```
通过在浏览器端开发者工具查看元素，这里 module 会给样式创建可识别的 class 名称为 `组件名_class名_字符串`
```html
<div class="OutsideComp_example_7Nqpe">Outside Component</div>
```
对比上面 `scoped` 做法这种实现更直观，便于调试，根据元素所采用 class 名称就可以对应到其样式，而采用 `scoped` 属性实现 style 方式需要样式结合一个 `data-v-string` 值才能定位其应用 HTML 元素

如果运行 `yarn add -D sass-loader sass` 来添加 sass-loader 时，会遇到编译作为，因为yarn 或者 npm 会自动安装 11.x，所以需要安装指定版本来解决问题。

```
npm install -D sass-loader@10.1.1 sass
```

```vue
<style module lang="scss">
$color:orangered;
:export{
  primaryColor:$color
}
</style>
<template>
  <div :class="$style.example">{{$style.primaryColor}}</div>
  <inner-comp/>
</template>
<script>
import InnerComp from './InnerComp.vue'
export default{
  components: { InnerComp },
  name:"OutsideComp",
  data(){
    return {
      title:"Outside Component"
    }
  }
} 
</script>
```
可以通过 `:export` 将样式属性值暴露给 Javascript 调用，JavaScript 可以通过`$style.primaryColor}`获取·primaryColor 的值并将其显示出来。

```vue
<style module lang="scss">
$color:orangered;
$secondColor:lightblue;
.example{
  color:$color
}
:global(.title){
  color: $secondColor;
}

:export{
  primaryColor:$color
}
</style>
```
可以通过 `:global` 将定义样式 class 转换为全局样式，这样在其他组件中也可以用到该样式。在 vue 中也支持独立于 vue 从 scss、less 或者 stylus 文件引入样式，这样做当然有好处，同时也会带来一些问题，也就是如果我们想要将组件。



我想介绍一下 JS 中的 CSS ，那么什么是 JS 中 CSS，就是如何用 JS 来写 CSS。可能已经从 React 社区听到了关于如何 JS 中的写 CSS 的内容，但在 vue 中 JS 中的 cSS 并不常用，其中一部分原因是 vue 和 react 对待 HTML 的方式不同，所以在 react 中， JavaScript 是以 JSX 的形式写 HTML 的。所以自然但 CSS 也是用 JavaScript 写的，但是 Vue 中却不同，在 vue 中，是在 HTML 中写 JavaScript，所以在 HTML 中使用 v 属性，或者使用双括号 mustache 方式实现数据绑定，所以 CSS和JS在vue中并不经常出现。Vue也已经有了很多开箱即用的选项，我的意思是我们不需要像在react中那样去处理CSS，所以真的没有理由去研究CSS和JS。



- Vue-styled-components
- Aphrodite





- Global Namespace(全局命名空间)
- Implicit dependencies(隐含的依赖关系)
- Poor Isolation(隔离性差)
- Dead code / duplication(复制代码)
- Non-deterministic resolution(非决定性的解决方案)



### CSS Methodologies



- Set of rules for writing CSS
- Helps reduce specificity, improve maintainability



CSS 随着应用的规模不断增大，也会引入新的 CSS 这样一来就会带来学多不可控的问题，如果你了解 CSS 并且参与过一个大型前端项目一定会深有体会，随着 CSS 不断扩展也就越来越难于驾驭了，这主要是因为 CSS 没有作用域。



为了便于维护 CSS 我们需要引入一些规则，例如 CSS 的 class 命名规则，通过这些共同遵守契约来在开发过程中避免一些未来不可控的问题。



- BEM
- Atomic CSS
- OOCSS
- SMACSS
- ITCSS



 BEM(Block Element, Modifier)

### UI Frameworks

- Faster development
- May cut down on design time
- Harder to customize



#### 多列出 UI Frameworks

- Vuetify
- Quasar
- Buefy
- VuePress
- Vue Bootstrap
- TailwindCSS
- Element UI
- Vue Material





一个精心设计的系统使做正确的事情变得容易，而做错误的事情则令人讨厌（但不是不可能）。
