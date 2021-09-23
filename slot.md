## Slot

之前介绍过 props 传递数据来实现组件多态方式重用。虽然 props 是一种不错的组件重用方式，增加了组件使用灵活性，但是消费组件和其父组件之间存在一种父子关系。父组件通过在 HTML 内容传入不同数据来控制子组件。Slot 方式也是一种不错方式来增强组件灵活性，将更多的对组件控制权交给用户来控制。通过 Slot 就具有更高自由度来实现组件的重用。可以轻松地实现在父级组件控制子组件中的具体内容。



Slot 应用场景比较多，例如一个详情页面某一个板块根据该详情页面类型显示不同内容，例如小区详情、租房详情中一些信息可能根据类型不同。



### 初识 Slot

```vue
<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"Card"
    }
</script>

```

组件创建一个 `slot` 标签，这个标签类似占位符，随后在子组件中的定义 HTML 内容将替换这个 slot。



```vue
<template>
<div class="container">
<form class="form">
<fieldset class="fieldset">
<div class="control">
<Input class="input" type="text" v-model="name"/>
</div>
</fieldset>
</form>

<card>
  <div class="card">
    <div class="card-image">
    <figure class="image is-4by3">
      <img src="@/assets/quick_sort.png" alt="Placeholder image">
    </figure>
  </div>
  </div>
</Card>
<Card>
  <div class="card">
    <div class="card-content">
      Machine learning
      </div>
    </div>
  </Card>
</div>

</template>

<script>
import Input from "./components/Form/Input.vue"
import Card from "./components/Tut/Card.vue"

export default {
  name: 'App',
  data(){
    return {
      name:""
    }
  },
  components: {
    Input,
    Card
  }
}
</script>

<style>

</style>

```

- 引入 Card 组件 `import Card from "./components/Tut/Card.vue" `
- 通过` import` 引入 Card 组件 ，然后在 `<Card></Card>` 之间标签定义 HTML 内容
- 引入 `<slot>默认值</slot>` 如果没有在 Card 标签之间给出内容则使用默认值



### 支持多个 Slot 

在组件中可能有多个 slot 可以对 slot 进行命名，这样一来可以一个组件中定义多个 slot，然后根据 slot 名称来替换 slot。

```vue
<template>
    <div>
        <div class="card">
            <header class="card-header">
                <slot name="header"></slot>
            </header>
            <div class="card-image">
                <slot name="img"></slot>
            </div>
            <div class="card-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
```

通过代码演示一下，在 Card 组件模板里定义 3 个组件，然后分别给 slot 定义名称`name='header`。也可以保留一个没有名字 `slot`  作为默认 slot。



```vue
<Card>
  <template v-slot:header>
    <p class="card-header-title">
      快速排序算法
    </p>
  </template>
  <template v-slot:img>
    <figure class="image is-4by3">
      <img src="@/assets/quick_sort.png" alt="Placeholder image">
    </figure>
  </template>
  <template v-slot:default>
    <div class="content">
      Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
    </div>
  </template>
</Card>
```

在 Card 定义好 slot 之后，我们就可以使用 Card 组件，在调用组件时候通过模板的 `v-slot:img` 属性来指定该模板将要替换哪一个 slot。对于没有指定名称的 `slot` 对应方式 `<template v-slot:default>`。



### Slot Prop

Slot Prop 也就是将组价属性暴露给将要替换 slot 模板的 template 组件使用。

```vue
<template>
    <div v-for="tut in tuts" class="card" :key="tut.id">
        <div class="card-header">
            <div class="card-header-title">{{tut.title}}({{tut.category}})</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TutList',
        data(){
            return{
                tuts:[
                    {id:0,title:"快速排序算法",category:"算法"},
                    {id:1,title:"归并排序算法",category:"算法"},
                    {id:2,title:"基数排序算法",category:"算法"}
                ]
            }
        }
    }
</script>
```



```vue
<template>
<div class="container">

<TutList/>
</div>

</template>

<script>
import TutList from "./components/TutList.vue"

export default {
  name: 'App',
  data(){
    return {
      name:""
    }
  },
  components: {
    TutList
  }
}
</script>
```

在 TutList 组件对 slot 将`tut.title` 绑定到 `title`上，然后将 `tut.category` 绑定到 `category` 属性上。

```vue
<template>
    <div v-for="tut in tuts" class="card" :key="tut.id">
        <slot :title="tut.title" :category="tut.category"></slot>
    </div>
</template>
```



然后就可以在 TutList 组件中 `template` 的 `slotProps`对象，通过 slotProps 对象就可以调用 slot 上的属性值。

```vue
<template>
<div class="container">

<TutList>
  <template v-slot:default="slotProps">
    <div class="card-header">
            <div class="card-header-title">{{slotProps.title}}({{slotProps.category}})</div>
        </div>
  </template>
</TutList>
<TutList>
  <template v-slot:default="slotProps">
    <div class="card-header">
            <div class="card-header-title">{{slotProps.title}}</div>
        </div>
  </template>
</TutList>
</div>

</template>
```



#### 进一步思考



```vue
<template>
    <div class="container">
        <h1 class="title">Hello form Child</h1>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'Child'
    }
</script>

<style scoped>

</style>
```



```vue
<template>

<div class="container">
  <Child>
    <button class="button" @click="clickOnBtn()">click Btn</button>
  </Child>
</div>
</template>

<script>
import Child from './components/slotdemo/Child.vue'
export default {
  
  name: 'App',
  data(){
    return {
      fontSize:10
    }
  },
  compontents:{
    Child
  },
  methods:{
    increment(){
      this.fontSize += 5
    },
    clickOnBtn(){
      alert("hello from parent")
    }
  }
}
</script>
```

有关上面代码给大家一定思考时间，其实 `Child` 标签之间内容应该属于 Child 而不会其父级组件，但是当我们点击 button 却可以调用到父级的方法。









Props allow you to re-use components by passing in different data

Although props are great for re-usability, we do have a strict parent-child relationship

The child will always be in control of the HTML content and the parent can only pass in different data values

Slots on the other hand are more powerful

They allow you to re-use  a component

They allow the parent component to control the content inside the child content

Slots allow a parent component to embed any content in a child component including HTML elements

