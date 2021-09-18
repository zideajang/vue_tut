<template>
    <h2>Method 属性</h2>
    <div>{{add(1,2,3)}}</div>
    <div>{{multiply(2)}}</div>
    <div>
        <h1 v-on:mouseover="title = '更新标题'">{{title}}-点赞数{{count}}</h1>
        <button v-on:click="changeTitle,increment2(2,$event)">更新标题</button>
        <button v-on:click="increment">点赞</button>
        <button v-on:click="count -= 1">取消点赞</button>
        <button @click="increment5">翻倍点赞</button>
    </div>
</template>
<script>
export default {
    name:'Posts',
    data(){
        return{
            title:"Machine learning",
            baseMultiplier : 5,
            count:0
        }
    },
    //这里不要用 arrow 函数
    methods:{
        changeTitle(event){
            console.log(event)
        },
        add(a,b,c){
            return a + b + c
        },
        multiply(num){
            return num * this.baseMultiplier
        },
        increment2(num,event){
            console.log(event)
            return this.count = this.count + num
        },
        increment(){
            return this.count += 1
        },
        increment5(){
            return this.count += 5
        }
    }

}
</script>
<style>

</style>