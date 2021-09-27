### 属性

### methods



### computed 属性

#### 如何使用 computed 以及其特性

- 在模板上，用于绑定数据，用起来点类似于 data，也是将数据绑定到模板上一种方式
- 基于 data 提供数据，通过操作或者组合得到新的数据，然后这样是一种更优雅方式来处理多个数据的组合

```js
<h1 class="subtitle">{{title}} {{lesson}}</h1>
```



```vue
<h1 class="subtitle">title:{{title}} lesson:{{lesson}}</h1>
```



```vue
  computed:{
    description(){
      return `title:${title} lesson:${lesson}`
    }
  },
```

定义一个 `computed`属性，属性值是一个对象，我们可以这个对象内部定义方法，方法需要返回一数据(基本类型或者复合类型)，在使用可以类似于 data 中的定义数据，如下

```vue
<h1 class="subtitle">{{description}}</h1>
```

作为一个变量来使用时，注意对于 `description`函数无需其后的表示调用括号，框架为我们做了额外的处理。

```js
return `title:${this.title} lesson:${this.lesson}`
```

在 `computed` 方法中调用属性需要 `this`



```vue
  data(){
    return {
      title:'machine learning',
      lesson:12,
      totalLesson:0,
      tuts:[
        {id:0,title:"machine learning",lesson:12},
        {id:1,title:"deep learning",lesson:16},
        {id:2,title:"meta learning",lesson:8},
      ]
    }
  },
```



```vue
<h1 class="title">total lesson:{{totalLesson}}</h1>
```



```vue
  <button class="button" @click="totalLesson = tuts.reduce((total,curr)=>(total = total + curr.lesson),0)" >cal</button>

```



```vue
    totalLesson(){
      return this.tuts.reduce((total,curr)=>(total = total + curr.lesson),0)
    }
```






#### 对比 methods 和 computed
相对于 methods 来说 通过缓存提高计算效率



```vue
methods:{
    getTotalLesson(){
      return this.tuts.reduce((total,curr)=>(total = total + curr.lesson),0)
    }
  },
```



```vue
    totalLesson(){
      return this.tuts.reduce((total,curr)=>(total = total + curr.lesson),0)
    }
```



```vue
<h1 class="title">{{getTotalLesson()}}</h1>
```



```vue
<h1 class="title">count: {{count}}</h1>
  <button class="button" @click="count += 1">increment</button>
```





#### computed 应用于 v-for

```vue
  <template v-for="tut in tuts" :key="tut.id">
    <div v-if="tut.lesson > 10" class="box">{{tut.title}}</div>
  </template>
```



```vue
  <template v-for="tut in filteredTuts" :key="tut.id">
    <div  class="box">{{tut.title}}</div>
  </template>
```



```vue
    filteredTuts(){
      return this.tuts.filter((tut)=>(tut.lesson > 10))
    },
```





#### computed 的 getter 和 setter



```vue
totalLesson:{
      get(){
        return this.tuts.reduce((total,curr)=>(total = total + curr.lesson),0)
      },
      set(){

      }
      // console.log('get total lesson in computed')
      // 
    }
```



```vue
    description:{
      get(){
        return `${this.title} ${this.lesson}`
      },
      set(value){
        let description = value.split(' ');
        this.title = description[0];
        this.lesson = description[1];
      }
      
    },
```



```vue
<div class="control">
    <input class="input" type="text" v-model="description">
    </div>
```



### watcher

通过 watcher 我们可以对任意数据进行监视，当数据发生更改时我们可以接受到更改前值和更改后的值，并可以对其进行操作。



```vue
  <h1 class="title">{{title}} likes:{{likes}}</h1>

  <button @click="likes +=1">increase like</button>
  <button @click="likes -=1">decrease like</button>
```



```vue
  watch:{
    likes(newValue,oldValue){
      if(newValue > oldValue && newValue == 10){
        this.msg='不错不错'
      }
    }
  },
```







#### watcher 和 computed

```vue
  computed:{
    description(){
      return `${this.title} ${this.lesson}`;
    }
  },
```



```vue
  data(){
    return {
      title:'machine learning',
      lesson:0,
      likes:0,
      msg:'',
      description:''
    }
  },
```



```vue
    title:{
      handler(newValue){
        this.description = newValue + ' ' + this.lesson
      },
      immediate:true
    },
    lesson:{
      hander(newValue){
        this.description = this.title + ' ' + newValue
      },
      immediate:true
    },
```



##### immediate 选项

```vue
    tut:{
      handler(newValue){
        console.log(newValue);
      },
      immediate:true
    }
```



#### deep 选项

```vue
      tut:{
        title:"machine learing",
        lesson:0
      }
```











