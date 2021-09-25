<template>
  <div id="app">
    <div>Hello Vue2.0</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      title:'machine learning',
      tuts:[]
    }
  },
  components: {
    
  }
  ,beforeCreate(){
    console.log(this)
    console.log(this.title)
  },created(){
    //puplating data
  },
  beforeMount(){
    console.log(this.$el)
    console.log(this.$el)
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
