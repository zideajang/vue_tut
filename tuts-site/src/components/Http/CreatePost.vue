<template>
    <div>
        <form @submit.prevent="createPost">
            <div class="control">
                <label class="label" for="userId">Post User Id</label>
                <input class="input" type="text" id="userId" v-model="formData.userId"/>
            </div>
            <div class="control">
                <label class="label" for="title">Post Title</label>
                <input class="input" type="text" id="title" v-model="formData.title"/>
            </div>
            <div class="control">
                <label class="label" for="body">Post Body</label>
                <input class="input" type="text" id="body" v-model="formData.body"/>
            </div>
            <div class="control">
                <button class="button">Create Post</button>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'CreatePost',
        data(){
            return{
                formData:{
                    userId:'',
                    title:'',
                    body:''
                }
            }
        },
        methods:{
            createPost(){
                axios.post('https://jsonplaceholder.typicode.com/posts',this.formData)
                .then(response=>console.log(response.data))
                .catch(error=>console.log(error))
            }
        }
    }
</script>

<style scoped>

</style>