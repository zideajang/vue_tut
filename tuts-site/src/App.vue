<template>

<div class="container">
  <h1 class="title">App Component</h1>
  <comp-a></comp-a>
</div>
</template>

<script>
import CompA from './components/nest/CompA.vue'
export default {
  
  name: 'App',
  data(){
    return {
      
    }
  },
  compontents:{
    CompA
  }
}
</script>

