## Slot

Props allow you to re-use components by passing in different data

Although props are great for re-usability, we do have a strict parent-child relationship

The child will always be in control of the HTML content and the parent can only pass in different data values

Slots on the other hand are more powerful

They allow you to re-use  a component

They allow the parent component to control the content inside the child content

Slots allow a parent component to embed any content in a child component including HTML elements

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

<style scoped>

</style>
```







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



### Slot Prop

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

<style scoped>

</style>
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

<style>

</style>
```





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



```vue
<template>
    <div v-for="tut in tuts" class="card" :key="tut.id">
        <slot :title="tut.title" :category="tut.category"></slot>
    </div>
</template>
```



然而，一个子组件的根节点会受到父组件的范围内CSS和子组件的范围内CSS的影响。这是设计上的问题，以便父组件可以为子组件的根元素设计样式以达到布局的目的。



当使用插槽时，即使内容被嵌入到子组件中，也会应用父组件的样式而不是子组件的样式。



