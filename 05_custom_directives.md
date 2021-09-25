今天我们将讨论什么是指令、以及指令具有有什么作用，以及如果创建自定义的指令。



### 什么是指令

指定就是应用于 HTML 元素的一些特定**属性**，例如 class 或者 style 这些属性， 在 vue 提供许多内置的指令，这些指令都是以 v 开头然后是一个`-`随后紧跟一个有意指令名称。



### 为什么需要指令

指令是最好操作 DOM 元素的方式，之前我们介绍 v-if 、v-bind、v-show 这些 vue 内置指令无疑都是用来控制 DOM 元素的指令。所以在学习 vue 过程少不了指令学习。



vue 通常也支持开发者自己创建一个指令来达到对 DOM 操作功能的复用。许多 Vue 的插件都有自己一套的指令集方便开发人员使用。



### Directive Hooks

有关指令的钩子函数 Vue2 和 Vue3 之间是不同的，所以这里有必要分别给大家列出 vue2 directive Hooks 和 vue3 directive Hooks。

#### Vue2 Hooks

| Hook 名称        | Hook 说明                  |      |
| ---------------- | -------------------------- | ---- |
| bind             | 当绑定到元素       |      |
| inserted         | 绑定元素插入到 |      |
| update           | 当元素更新了数据   |      |
| componentUpdated | 在子组件更新后     |      |
| unbind | 当指令从元素中移除 |      |


#### Vue2 Hooks
| Hook 名称        | Hook 说明                  |      |
| ---------------- | -------------------------- | ---- |
| bind             | beforeMount      |      |
| componentUpdated         | updated  |      |
| unbind           | unmounted |      |

created - before element's attrs or listeners are applied
beforeUpdate - called before the element itself is updated
beforeUnmount - called before the element is unmounted(like lifecycle beforeUnmount)

#### Hook Arguments
| Hook 名称        | 参数                 |      |
| ---------------- | -------------------------- | ---- |
| el             | the element our directive is bound to      | This is how we can edit CSS, inner content, and more      |
| binding         | how we can pass extra parameters or modifiers to our directive |      |
| vnode           | virtual node |      |
| prevVnode | previous virtual node`           |      |
| unbind | when directive is removed           |      |



```vue
app.directive('font-size',{
    beforeMount:(el) =>{
        el.style.fontSize = "28px"
    }
})
```

```vue
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//vue 2 -> Vue.directive
app.directive('font-size',{
    beforeMount:(el) =>{
        el.style.fontSize = "28px"
    }
})

app.mount('#app')
```

```vue
<p v-font-size>hell directive</p>
```

```vue
app.directive('font-size',{
    beforeMount:(el,binding) =>{
        el.style.fontSize = binding.value + "px"
    }
})
```

```vue
template>

<div class="container">
  <p v-font-size="fontSize">hell directive</p>
</div>
</template>

<script>
export default {
  
  name: 'App',
  data(){
    return {
      fontSize:100
    }
  },
}
</script>
```


```
app.directive('font-size',{
    beforeMount:(el,binding) =>{
        el.style.fontSize = binding.value + "px"
    },
    updated:(el,binding) =>{
        el.style.fontSize = binding.value + "px"
    }
});
```





```vue
<template>

<div class="container">
  <p v-font-size="fontSize">hell directive</p>
  <button class="button" @click="increment">increment fontSize</button>
</div>
</template>

<script>
export default {
  
  name: 'App',
  data(){
    return {
      fontSize:10
    }
  },
  methods:{
    increment(){
      this.fontSize += 5
    }
  }
}
</script>
```



```vue
app.directive('font-size',{
    beforeMount:(el,binding) =>{
        el.style.fontSize = binding.value + "px"
    },
    updated:(el,binding) =>{
        el.style.fontSize = binding.value + "px"
    }
});
```



```vue
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//vue 2 -> Vue.directive
app.directive('font-size',{
    beforeMount:(el,binding) =>{
        let size = 12

        switch(binding.arg){
            case 'small':
                size = 8
                break
            case 'large':
                size = 28
                break
        }

        el.style.fontSize = size + "px"
    },
    updated:(el,binding) =>{
        el.style.fontSize = binding.value + "px"
    }
});

app.mount('#app')

```





```vue
<template>

<div class="container">
  <p v-font-size:large >hell directive</p>
  <button class="button" @click="increment">increment fontSize</button>
</div>
</template>
```







```vue
<p v-font-size.large >hell directive</p>
```



```vue
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//vue 2 -> Vue.directive
app.directive('font-size',{
    beforeMount:(el,binding) =>{
        let size = 12

        // switch(binding.arg){
        //     case 'small':
        //         size = 8
        //         break
        //     case 'large':
        //         size = 28
        //         break
        // }

        if(binding.modifiers.small){
            size = 8
        }else if(binding.modifiers.large){
            size = 28
        }

        el.style.fontSize = size + "px"
    },
    updated:(el,binding) =>{
        el.style.fontSize = binding.value + "px"
    }
});

app.mount('#app')

```

