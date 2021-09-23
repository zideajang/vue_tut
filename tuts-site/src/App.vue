<template>
<div data-tut="tut" class="container">
  <button class="button" @click="showChild =! showChild">Toggle Child</button>
  <Child v-if="showChild" />
</div>

</template>

<script>
import Child from './components/Child.vue'
import axios from 'axios'
export default {
  name: 'App',
  data(){
    return {
      title:"machine learning",
      showChild:true,
      posts:[]
    }
  },
  components: {
    Child,
  },
  beforeCreate(){
      // 返回组件实例
      console.log("beforeCreate",this)
      console.log("beforeCreate",this.title)
      console.log("Parent beforeCreate()")
  },
  created(){
      console.log("Parent create()")
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(response.data)
            this.posts = response.data
        })
        .catch((error)=>{
            console.log(error)
        });
  },
  beforeMount(){
      //
      console.log("Parent beforeMount()")
      console.log(this.$el)//null
      // console.log(this.$el.dataset.tut)//tut
  },
  mounted(){
      //这里和 vue2 感觉约有不同
      console.log("Parent mounted()")
      console.log(this.$el)//<div data-tut='tut' ...
      console.log(this.$el.dataset.tut) //tut
  },
  beforeUpdate(){
      console.log("Parent beforeUpdate()")
  },
  updated(){
      console.log("Parent updated()");
  },
  beforeUnmount(){
      console.log("Parent beforeUnmount()");
  },
  unmounted(){
      console.log("Parent unmounted()"); 
  }
}
</script>

<style>

</style>
