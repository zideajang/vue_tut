<template>
    <div class="container">
        <slot :data="data" :hello="hello" />
    </div>
</template>

<script>
    export default {
        name:'Child',
        data(){
            return {
                data:" This is from the child slot-scope"
            }
        },
        methods:{
            hello(){
                window.alert('This is from The Child');
            }
        }
    }
</script>

<style scoped>

</style>