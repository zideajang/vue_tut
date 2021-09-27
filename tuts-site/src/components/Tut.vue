<template>
<div>
<h1 class="my-title">machine learning from Child</h1>
</div>
<!-- <div class="card">
    <div class="card-header">
    <div v-bind="$attrs" class="card-header-title">{{title}}</div>
    </div>
    <div class="card-body">
    {{title}}({{lesson}}) {{isPublish?'yes':'no'}}
    </div>
</div> -->
</template>

<script>
    export default {
        name:'Tut',
        data(){
            return {
            }
        },
        props:{
            title:{
                type:String,
                required:true,
                default:"machine learning default value"
            }
            ,lesson:{
                type:Number
            },
            isPublish:{
                type:Boolean
            }
        },
        inheritAttrs:false
    }
</script>

<style scoped>
.my-title{
    color:orangered
}
</style>