<template>
    <div>
        <h1>Component A</h1>
        <comp-b/>
    </div>
</template>

<script>
    import CompB from "./CompB.vue"
    console.log(CompB)
    export default {
        name:"CompA",
        components:{
            CompB
        }
    }
</script>

<style scoped>

</style>