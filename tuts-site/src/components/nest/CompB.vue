<template>
    <div>
        <h1>Component B</h1>
        <comp-c/>
    </div>
</template>

<script>
    import CompC from "./CompC.vue"
    export default {
        name:"CompB",
        components:{
            CompC
        }
    }
</script>

<style scoped>

</style>