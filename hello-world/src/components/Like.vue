<template>
    <div>
        <span v-if="count === 0">Like</span>
        <span v-else-if="count>10">Level 2</span>
        <span v-else-if="count>5">Level 1</span>
        <span v-else>Like:{{count}}</span>
    </div>
    <div v-if="!isFolded">
        <h1>{{title}}</h1>
    </div>
    <div style="display:none;" v-show="isFolded">
        <h1>请登录</h1>
    </div>
</template>
<script>

export default{
    name:'Like',
    data(){
        
        return{
            title:"machine leanring tutorials",
            count:10,
            isFolded:true
        } 
    }
}
</script>
