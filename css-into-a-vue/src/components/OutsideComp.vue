<style module lang="scss">
$color:orangered;
$secondColor:lightblue;
.example{
  color:$color
}
:global(.title){
  color: $secondColor;
}

:export{
  primaryColor:$color
}
</style>
<template>
  <div :class="$style.example">{{$style.primaryColor}}</div>
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
