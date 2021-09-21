<template>
    <h1 class="title">{{refTitlContent}}</h1>
    <div class="card">
        <div class="card-header">
            <div class="card-header-title">{{title}}</div>
        </div>
        <div class="card-content">
            <div class="card-content-body">{{content}}</div>
        </div>
    </div>
    <div class="section">
        <div class="control">
            <input class="input" type="text" v-model="title"/>
        </div>
        <div class="control">
            <input class="input" type="text" v-model="content"/>
        </div>
    </div>
    <div class="section">
        <div class="control">
            <input class="input" type="text" v-model="refTitle"/>
        </div>
        <div class="control">
            <input class="input" type="text" v-model="refContent"/>
        </div>
    </div>
</template>

<script>
import { ref,computed } from 'vue'
    export default {
        name:"ReplaceComputed",
        setup(){
            const refTitle = ref('')
            const refContent = ref('')

            const refTitlContent = computed(function(){
                return `${refTitle.value} ${refContent.value}`
            })

            return {
                refTitle,
                refContent,
                refTitlContent
            }
        },
        data(){
            return {
                title:"",
                content:""
            }
        }
    }
</script>

<style scoped>

</style>