<template>
    <div class="container">
        <div class="control">
            <input class="input" type="text" placeholder="tut title" v-model="tutTitle">
        </div>
        <div class="control">
            <input class="input" type="text" placeholder="tut content" v-model="tutContent">
        </div>
        <PersonGreeting :title="tutTitle" :content="tutContent" @sendDescription="descriptionHandler" />

    </div>
</template>

<script>
    import {ref} from 'vue';
    import PersonGreeting from './PersonGreeting.vue'
    export default {
        name:"Person",
        components:{
            PersonGreeting
        },
        setup(){
            const tutTitle = ref('');
            const tutContent = ref('');
            function descriptionHandler(decription){
                alert(decription)
            }
            return {
                tutTitle,
                tutContent,
                descriptionHandler,
            }
        }

    }
</script>
