<template>
    <div class="container">
        <div class="control">
            <button @click="incrementCount"  class="button" type="text" >click increatment {{count}}</button>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue';

    export default {
        name:"ClickCounter",
        setup(){
            let count = ref(0);
            function incrementCount(){
                count.value += 1
            }
            return {
                count,
                incrementCount
            }
        }
    }
</script>

<style scoped>

</style>