<template>
<h1 v-bind:id="tutId">title: {{title}}</h1>
<h1>lessons: {{ 2 + 5 }}</h1>
<div v-html="subTitle"></div>
<div v-html="moreInfo"></div>
<button v-bind:disabled="isDisable">btn</button>
<div v-bind:class="status">Log Level</div>
<h1 v-bind:class="['big-size',isSuccess ? 'success':'danger']" >{{isSuccess ? 'success':'danger'}}</h1>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      tutId:'tutId',
      title:"machine learning",
      subTitle:"<b>regression</b>",
      moreInfo: `<a href="#" onclick="alert('machine learning regression')" >more info</a>`,
      isDisable:false,
      status:"success",
      isSuccess:true
    }
  }
}
</script>

<style>
.big-size{
  font-size: 2.25em;
}
.success{
  color:greenyellow;
  font-weight: bolder;
}
.danger {
  color: orangered;
  font-weight: bolder;
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
