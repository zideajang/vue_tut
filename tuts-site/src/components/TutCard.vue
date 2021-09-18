<template>
    <div class="card">
        <h1>标题: {{title}}</h1>
        <span v-if="isCompleted">已完成</span>
        <span>点赞数</span>
        <span>{{likes}}</span>
        <button @click="clickOnLikeBtn">{{likeBtnName}}</button>
    </div>
</template>
<script>
export default {
    name:"TutCard",
    data(){
        return {
            title:"machine learing",
            lesson:12,
            isCompleted:true,
            likes:15,
            clickedOnLikeBtn:false
        }
    },
    methods:{
        clickOnLikeBtn(){
            if(this.clickedOnLikeBtn){
                this.likes -= 1
            }else{
                this.likes += 1;
            }
            this.clickedOnLikeBtn=!this.clickedOnLikeBtn
        }
    },
    computed:{
        likeBtnName(){
            if (this.clickedOnLikeBtn){
                return "取消点赞"
            }else{
                return "点赞"
            }
        }
    },
    watch:{
        likes(newValue,oldValue){
            if(newValue != oldValue && newValue > 15){
                alert("恭喜你超过 15 人为你点赞")
            }
        }
    }
}
</script>
<style>
.card{
    font-size:1.2em;
}
</style>