<template>
    <div>
        <h1 class="title">Child Component</h1>
    </div>
</template>

<script>
    export default {
        name:"Child",
        beforeCreate(){
            console.log("Child beforeCreate()")
        },
        created(){
            console.log("Child create()")
        },
        beforeMount(){
            console.log("Child beforeMount()")
        },
        mounted(){
            console.log("Child mounted()")
        },
        beforeUpdate(){
            console.log("Child beforeUpdate()")
        },
        updated(){
            console.log("Child updated()");
        },
        beforeUnmount(){
            console.log("Child beforeUnmount()");
        },
        unmounted(){
            console.log("Child unmounted()"); 
        }
    }
</script>

<style scoped>

</style>