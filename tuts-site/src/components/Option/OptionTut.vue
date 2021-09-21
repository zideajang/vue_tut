<template>
    <div class="container">
        <h1 class="title">{{title}}</h1>
        <h1 class="title">count: {{count}}</h1>
        <button @click="incrementCount" class="button">incremement</button>
        <button @click="updateTut" class="button">update tut</button>
    </div>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="card-header-title">{{tut.title}}</div>
            </div>
            <div class="card-content">
                <div v-for="chapter in tut.chapters" :key="chapter.id">
                    {{chapter.title}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {reactive, ref} from 'vue'
    export default {
        name:"OptionTut",
        // data(){
        //     return{
        //         title:"machine leanring"
        //     }
        // }
        setup(){
            const title = ref("machine learning");
            let count = ref(0)
            const tut = reactive({
                title:'machine learning',
                lesson:12,
                chapters:[
                    {id:0,title:"introducion"},
                    {id:2,title:"regression"},
                    {id:3,title:"classification"},
                ]
            })

            function incrementCount(){
                count.value += 1
            }
            function updateTut(){
                tut.title = "updated Machine Learning"
            }
            return {
                title,
                count,
                tut,
                incrementCount,
                updateTut
            }
        }
    }
</script>

<style scoped>

</style>