<template>
<div>
    <h1 v-bind="$attrs">{{title}}</h1>
    <span>{{likes}}</span>
    <button @click="clickOnLike">Like</button>
</div>
</template>

<script>
    export default {
        name:"Article",
        data(){
            return{
                favorites:0
            }
        },
        props:{
            title:{
                type:String,
                required:true,
                default:"machine learning"
            },
            likes:Number
        },
        inheritAttrs:false,
        methods:{
            clickOnLike(){
                this.favorites ++;
            }
        }
    }
</script>

<style scoped>

</style>