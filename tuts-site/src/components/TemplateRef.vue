<template>
    <div class="section">
        <div class="control">
            <input type="text" class="input" ref="inputRef">
        </div>
        
    </div>
    <post-list ref="postListRef"/>
</template>

<script>
import PostList from './Http/PostList.vue'
    export default {
        name:"TemplateRef",
        components:{
             PostList
        },
        mounted(){
            console.log(this.$refs.postListRef)
            this.$refs.inputRef.focus()
        }
    }
</script>

<style scoped>

</style>