<template>
    <div class="container">
        <div class="control">
            <button  @click="getPosts" class="button">Load Post</button>
        </div>
        <div v-for="item in posts" :key="item.id">
            <h2 class="subtitle">{{item.title}}</h2>
            <p>{{item.body}}</p>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'
    export default {
        name:"PostList",
        data(){
            return {
                posts:[],
            }
        },
        methods: {
            getPosts(){
                axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then((response) => {
                        // console.log(response.data)
                        this.posts = response.data
                    })
                    .catch((error)=>{
                        console.log(error)
                    });
            }
        }
    }
</script>

<style scoped>

</style>