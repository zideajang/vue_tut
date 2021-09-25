<template>
<div class="container">
  <h1 class="title">Computed</h1>
  <h1 class="title"> {{description}}</h1>
  <button @click=""
</div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      title:"machine learning",
      lesson:12,
      totalLesson:0,
      tuts:[
        {id:0, title:'machine learning',lesson:12},
        {id:1, title:'deep learning',lesson:16},
        {id:2, title:'meta learning',lesson:8},
      ]
    }
  },

  computed:{
    description(){
      return `description: ${this.title} , ${this.lesson}`
    }
  }, 
  components: {
  },
    
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
