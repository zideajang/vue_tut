<template>
<div v-html="title"></div>
<div :class="[ isTitle?'title':'subTitle',isTitle && 'title-size','title-color']">Machine Learning tutorial</div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      title:"<h1>Hello Vue3.0</h1>",
      tutId:1,
      isTitle:true
    }
  },
  components: {
    
  }
}
</script>

<style>
.title {
  
  font-weight: 600;
}
.subTitle {
  font-size:1.05em;
  font-weight: 300;
  color:lightblue
}
.title-size{
  font-size:1.75em;
}
.title-color{
  color:darkblue
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
