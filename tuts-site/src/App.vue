<template>
<div class="nav">
  <h1>{{title}} site</h1>
</div> 
<div>
<div v-html="subTitle"></div>

</div>
<tut-card/>
</template>

<script>
import TutCard from "./components/TutCard.vue"
export default {
  name: 'App',
  data(){
    return {
      title:"Zidea",
      subTitle:"<b> machine leanring</b>",
      
    }
  },
  components: {
    TutCard
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
