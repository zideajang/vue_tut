
### 说出 Vue 不为人知的小技巧

最近收集了一些使用 vue 的小技巧，给大家分享一下。希望通过我的分享让大家在开发过程中提供更多解决问题思路，让 Vue 成为自己得心应手的工具。

### 将 prop 属性取值限制到选项列表

```vue
props:{
    name:{
        type:String
    },
    btnColor:{
        type:String,
        validator: s => ['blue','oranged'].includes(s)
    }
}
```


这个验证器函数(validator)接收一个 prop ，并返回 true 或 false 对应于该 prop 有效或无效。当需要比布尔值更多的选项，而且还想限制 prop 的取值范围时，经常使用这个函数。例如按钮类型或提示信息类型（info, success, danger, warning）是一些最常见的应用场景，例如对于颜色控制也是不错的用途。



### 完整代码
#### App.vue 代码
```vue
<template>
<div>
  <h1>组件</h1>
  <m-button name="按钮" btnColor="blue"/>
  </div>
</template>

<script>
import MButton from './components/MButton.vue'

export default {
  name: 'App',
  components: {
    MButton
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

#### MButton
```vue
<template>
    <button :style="{
        backgroundColor:btnColor,
        color:'white'
    }" >{{name}}</button>
</template>

<script>
    export default {
        name:'MButton',

        data(){
            return{
                info:{
                    textColor:'blue'
                },
                success:{
                    textColor:'green'
                }
            }
        },
        
        props:{
            name:{
                type:String
            },
            btnColor:{
                type:String,
                validator: s => ['blue','oranged'].includes(s)
            }
        }
    }
</script>
```
### 自定义 slot 默认值
可以为 Vue 中的 slot 设置默认的内容。

```vue
<template>
    <button class="button" @click="$emit('click')">
    <slot>
        <!-- 如果调用时没有提供 slot -->
        Click me
    </slot>
    </button>
</template>
```


不过更好方式是未 slot 设置默认默认内容来扩展点。这样为组件增加了更多灵活性。

```vue
<template>
    <button class="button" @click="$emit('click')">
        <!-- 调用组件可以为 slot 指定默认值 -->
        <slot>
        <div class="formatting">
            {{ text }}
        </div>
        </slot>
    </button>
</template>
```

### 什么时候使用 v-if ，什么时候不应该使用 v-if
```vue
<ComplicatedChart v-show="chartEnabled" />
```
有关`v-if` 和 `v-show` 不同方式实现元素显示和不显示想必大家都已经了解了吧，这里就不再赘述了。那么什么时候应该使用 `v-if` 呢? 如果不需要立即使用哪些对性能开销比较大的组件就可以考虑使用 `v-if` ，因为 `v-if` 会跳过渲染这样会加速页面加载的速度，而组件切换成本比较高可以考虑使用 `v-show`

