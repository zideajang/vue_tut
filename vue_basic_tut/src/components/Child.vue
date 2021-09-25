<template>
    <div v-for="tut in tuts" :key="tut.id" class="card">
        <slot :tutTitle="tut.tutTitle"></slot>
    </div>
</template>

<script>

    export default {
        name:"Child",
        tuts:[
            {id:0,tutTitle:'Machine learning'},
            {id:1,tutTitle:'Deep learning'},
            {id:2,tutTitle:'Meta learning'},
        ]
    }
</script>

<style scoped>

</style>