### CSS 作用域
- `<style>`标签被添加到`.vue`文件中
- 使用范围属性，将样式限制在组件中
- 否则样式将是全局的

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



```vue
<style >
.example[data-v-123]{
  font-weight: bolder;
  color: blueviolet;
}
</style>
<template>
  <div class="example" data-v-123>Inner Component</div>
</template>
```



### CSS Modules

开箱即用，可替代范围内的CSS
在`<style>`标签中使用模块属性
使用类绑定来访问`$style`对象



```vue
<style scoped>
```



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
```

```html
<div class="OutsideComp_example_7Nqpe">Outside Component</div>
```

