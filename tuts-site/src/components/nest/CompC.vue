<template>
    <div>
        <h1>Component C</h1>
        <h1>{{username}}</h1>
    </div>
</template>

<script>
    export default {
        name:"CompC",
        inject:["username"]
    }
</script>
<style scoped>

</style>