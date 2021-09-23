### 什么是指令

指定就是应用于 HTML 元素的一些特定**属性**，例如 class 或者 style 这些属性， 在 vue 提供许多内置的指令，这些指令都是以 v 开头然后是一个`-`随后紧跟一个有意指令名称。



之前我们介绍过



也可以自己定义一个自己的指令(directives)

重用方法来自定义 DOM 的功能

许多 Vue 插件使用



### Directive Hooks

#### Vue2 Hooks

| Hook 名称        | Hook 说明                  |      |
| ---------------- | -------------------------- | ---- |
| bind             | When bound to element      |      |
| inserted         | Bound element is inserted  |      |
| update           | When element updates(data) |      |
| componentUpdated | children updated           |      |
| unbind | when directive is removed           |      |


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

