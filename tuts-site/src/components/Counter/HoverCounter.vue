<template>
    <div class="container">
        <h2 @mouseover="increment" class="title">Hoverd {{count}} </h2>
    </div>
</template>

<script>
    import {ref} from 'vue';
    import incrementCount from './counter.js'
    export default {
        name:"HoverCounter",
        setup(){
            let count = ref(0);
            const {increment} = incrementCount(count)
            // console.log(111)
            return {
                count,
                increment
            }
        }
    }
</script>

<style scoped>

</style>