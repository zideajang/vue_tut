<template>
    <div class="card">
        <div class="card-header">
            <div class="card-header-title">{{title}}</div>
        </div>
    </div>
    <div class="container">
        <div class="control">
            <input class="input" type="text" v-model="title"/>
        </div>
        <div class="control">
            <input class="input" type="text" v-model="content"/>
        </div>
    </div>
</template>

<script>
import {ref, reactive, toRefs } from 'vue'

    export default {
        name:"VModel",
        setup(){
            const count = ref(0)
            const tut = reactive({
            title:'',
            content:''
            });

            return {
            count,
            ...toRefs(tut)
            }
        },
    }
</script>

<style scoped>

</style>