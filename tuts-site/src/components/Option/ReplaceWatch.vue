<template>
    <div class="container">
        <div class="control">
            <input class="input" type="text" v-model="title"/>
        </div>
        <div class="control">
            <input class="input" type="text" v-model="refTitle"/>
        </div>
        <div class="control">
            <input class="input" type="text" v-model="refContent"/>
        </div>
    </div>
</template>

<script>
    import {ref,watch} from 'vue'
    export default {
        name:'ReplaceWatch',
        setup(){
            const refTitle = ref('');
            const refContent = ref('content');

            watch([refTitle,refContent],(newVals,oldVals)=>{
                console.log('Old refValue',oldVals[0]);
                console.log('New refValue',newVals[0]);
                console.log('New refValue',newVals[1]);
                console.log('New refValue',newVals[1]);
            })
            return {
                refTitle,
                refContent
            }
        },
        data(){
            return{
                title:''
            }
        },
        watch:{
            title(newVal,oldVal){
                console.log('Old value',oldVal);
                console.log('New value',newVal)
            }
        }
    }
</script>

<style scoped>

</style>