<template>
    <div class="section">
        <h1 class="title">{{MyCompCounter}}</h1>
        <button class="button" @click="updateMyCompCounter">incrementCount</button>
    </div>
</template>

<script>

    import MyMixin from "./MyMixin.js";

    export default {
        name:'MyComp',
        mixins:[MyMixin],
        data(){
            let MyCompCounter = 0
            return{
                MyCompCounter
            }
        }
    }
</script>
