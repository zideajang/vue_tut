<style module>
.example{
  color:orangered
}
</style>
<template>
  <div :class="$style.example">{{title}}</div>
  <inner-comp/>
</template>
<script>
import InnerComp from './InnerComp.vue'
export default{
  components: { InnerComp },
  name:"OutsideComp",
  data(){
    return {
      title:"Outside Component"
    }
  }
} 
</script>
