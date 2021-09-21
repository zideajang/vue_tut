### Vue2 中的代码共享

在 Vue2 中并没有提供关于如何在组件间共享逻辑的完美解决方案。接下来将介绍 3 种常用方式在 Vue2 来共享代码

早在2016年年中，Dan Abramov 写了一篇[Mixins Considered Harmful](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html)，他认为在 React 组件中使用 mixins 来重用逻辑是一种反模式，而是主张远离这种方式。

<img src="images/reusable/dan.jpeg"/>

他提到的关于React mixins的缺点也同样也 Vue 中得以体现。让我们先熟悉一下这些缺点，然后再看看Composition API是如何克服这些缺点的。



Organized by feature however with mixins you can end up with property name conflicts it's not clear if and how these mixins interact and we can't easily reuse this code to search and sort different things like maybe if we had a list of reviews or sellers or shipping options

有了 mixins 可以按功能组织代码，但是通过 mixins 实现代码重用，可能会出现属性名称冲突的问题，不清楚这些 mixins 是否和如何互动，代码重用性不高，搜索和排序不同的东西，比如我们有一个评论、卖家或运输选项的列表。

#### 命名冲突

我们看到mixin模式如何在运行时合并两个对象。如果它们都共享一个同名的属性，会发生什么？

#### 潜在依赖关系

```vue
<template>
    <div class="section">
        <h1 class="title">{{MyCompCounter}}</h1>
        <button class="button" @click="updateMyCompCounter">incrementCount</button>
    </div>
</template>

<script>

    import MyMixin from "./MyMixin.js";

    export default {
        name:'MyComp',
        mixins:[MyMixin],
        data(){
            let MyCompCounter = 0
            return{
                MyCompCounter
            }
        }
    }
</script>
```



```vue
export default {
    
    methods:{
        updateMyCompCounter(){
            this.MyCompCounter++
        }
    }
}
```



Mixin 和消费其的组件之间具有一个潜在耦合，也就是组件可以更改 Mixin 中的定义变量，在 Mixin 中也能操作或者修改组件的数据属性，这样做问题是一旦修改了组件或者 Mixin 中属性，并不会在编译期间抛出错误，而会在运行时出现错误。当对于一个使用一大堆 Mixin 时，如果需要新增一个变量前我们需要查看这些组件是否定义过同名组件或者由方法可能潜在修改该变量。





### Mixin Factories

也就是函数将返回一个自定义的 mixin



Easily Reusable(易于重用)
Clearer Relationships(关系更清晰)
Weak Namespacing(弱的命名方式)
Implicit property additions(隐含的属性添加)
No instance access at runtime(在运行时没有实例访问)











#### Mixins 方式共享代码

| 文件名称         | 说明                                                         |      |
| ---------------- | ------------------------------------------------------------ | ---- |
| ClickCounter.vue | 通过点击按钮来更新计时器的数值                               |      |
| HoverCounter.vue | 通过鼠标滑过标题来更新计时器的数值                           |      |
| counter.js       | 数据和更新数据方法从 ClickCounter.vue 和 HoverCounter.vue 抽离共享 |      |

### 在 Mixins 前的状态

下面代码大家可能再熟悉不过了，这里就不做过多解释了，分别实现了通过点击按钮来更新计时器的数值和通过鼠标滑过标题来更新计时器的数值功能两个组件。

##### ClickCounter.vue

```vue
<template>
    <div class="container">
        <div class="control">
            <button @click="incrementCount"  class="button" type="text" >click increatment {{count}}</button>
        </div>
    </div>
</template>

<script>

    export default {
        name:"ClickCounter",
        data(){
            return{
                count:0
            }
        },
        methods:{
            incrementCount(){
                this.count += 1;
            }
        }
    }
</script>
```



##### HoverCounter.vue

```vue
<template>
    <div class="container">
        <h2 @mouseover="incrementCount" class="title">Hoverd {{count}} </h2>
    </div>
</template>

<script>
    export default {
        name:"HoverCounter",
        data(){
            return {
                count:0
            }
        },
        methods:{
            incrementCount(){
                this.count += 1;
            }
        }
    }
</script>

<style scoped>

</style>
```



##### methods



```vue
methods:{
  incrementCount(){
  	this.count += 1;
  }
}
```







通过 Mixins 方式来将两个组件共享代码，首先我们将两个组件拥有代码提取出来到一个`counter.js`文件中，注意这是是 js 文件

```js
export default{
    data(){
        return{
            count:0
        }
    },
    methods:{
        incrementCount(){
            this.count += 1;
        }
    }
}
```



更新后的 ClickCounter.vue 和 HoverCounter.vue ，通过引入 `import CounterMixin from './counter'`，然后通过`mixins`属性引入 `CounterMixin`。

```vue
<script>
    import CounterMixin from './counter'
    export default {
        name:"ClickCounter",
        mixins:[CounterMixin],
    }
</script>
```

mixin 后也可以在对象中定义同名的属性值，定义属性值会覆盖 mixin 中对应属性。

```vue
<script>
    import CounterMixin from './counter'
    export default {
        name:"HoverCounter",
        data(){
            return {
                count:100
            }
        },
        mixins:[CounterMixin]
    }
</script>
```


###  Vue3 组合式 API 来实现代码复用

首先通过组合式 API 对 ClickCounter.vue 和  HoverCounter.vue 

##### ClickCounter.vue

```vue
<script>
    import {ref} from 'vue';

    export default {
        name:"ClickCounter",
        setup(){
            let count = ref(0);
            function incrementCount(){
                count.value += 1
            }
            return {
                count,
                incrementCount
            }
        }
    }
</script>
```

通过组合式 API 将上面代码改变了，然后可以将其中业务逻辑可以到处一个普通函数，

```vue
export default function incrementCount(count){
    const increment = ()=>count.value += 1;
    return {increment}
    
}
```

然后再文件将其 `counter.js` 方式导入 `incrementCount` 。

```vue
<script>
    import {ref} from 'vue';
    import incrementCount from './counter.js'
    export default {
        name:"HoverCounter",
        setup(){
            let count = ref(0);
            const {increment} = incrementCount(count)
       
            return {
                count,
                increment
            }
        }
    }
</script>
```





我们学习了如何一步一步地重构现有的 Vue 代码，从 Options- 到 Composition-API。这样做有助于将代码移到一个地方，而不是散落在组件中，然后将其分组为逻辑块。最后，能够提取一个组合函数，包含了我们组件的一部分，并且可以很容易地在另一个组件中再次使用。

