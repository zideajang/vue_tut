<template>
<h1 class="title is-1 has-text-white has-background-info">{{greet}}</h1>
<tut/>

</template>

<script>
import Tut from './components/Tut.vue'
export default {
  name: 'App',
  components:{
    Tut
  },
  data(){
    return {
      greet:"Welcome Zidea "
    }
  }
}
</script>

