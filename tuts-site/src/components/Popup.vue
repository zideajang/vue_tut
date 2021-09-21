<template>
    <div>
        <div >
            <h1>this is popup </h1>
            <input type="text" v-model="title"/>
        </div>
        <button  class="button" @click="$emit('close',title)">Close Popup</button>
    </div>
</template>

<script>
    export default {
        name:"Popup",
        data(){
            return{
                title:""
            }
        },
        emits: {
            close: (name) => {
                if(!name){
                    return false
                }else{
                    return true
                }
            }
        }
    }
</script>

<style scoped>

</style>