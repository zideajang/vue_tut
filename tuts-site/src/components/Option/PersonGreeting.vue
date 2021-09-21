<template>
    <div class="section">
        <h1 class="title">{{title}}</h1>
        <h1 class="subtitle">{{content}}</h1>
        <h1 class="title"> description {{tutDescription}}</h1>
        <button @click="sendEvent">send Description</button>
    </div>
</template>

<script>
import { computed } from 'vue'
    export default {
        name:'PersonGreeting',
        setup(props,context){
            const tutDescription = computed(()=>{
                return `${props.title} ${props.content}`
            })

            function sendEvent(){
                context.emit('sendDescription',tutDescription.value)
            }
            return {
                tutDescription,
                sendEvent
            }
        },
        props:['title','content']
        
    }
</script>

<style scoped>

</style>