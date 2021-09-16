<template>
<h1>{{greet}}</h1>
<tuts/>

</template>

<script>
import Tuts from './components/Tuts.vue'
export default {
  name: 'App',
  components:{
    Tuts
  },
  data(){
    return {
      greet:"Welcome Zidea "
    }
  }
}
</script>

<style>
.txt_decoration{
  text-decoration: underline;
}
.danger{
  color: orangered;
}
.completed{
  color: cornflowerblue;
}
.big-size{
  font-size: 1.25em;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div{
  font-size: 1.2em;
}
</style>
