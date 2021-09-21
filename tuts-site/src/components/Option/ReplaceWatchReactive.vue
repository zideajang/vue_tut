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
        <div class="control">
            <input class="input" type="text" v-model="tutTitle"/>
        </div>
        <div class="control">
            <input class="input" type="text" v-model="tutContent"/>
        </div>
        <div class="control">
            <input class="input" type="text" v-model="category.name"/>
        </div>
    </div>
</template>

<script>
    import {reactive, ref,toRefs,watch} from 'vue'
    export default {
        name:'ReplaceWatch',
        setup(){
            const refTitle = ref('');
            const refContent = ref('content');

            const tut = reactive({
                tutTitle:'',
                tutContent:'',
                category:{
                    name:''
                }
            });

            watch(()=>tut.category,function(newVal,oldVal){
                console.log('new tut category',newVal)
                console.log('old tut category',oldVal)
            },{
                deep:true
            })

            // watch(()=>{return {...tut}}, function(newVal,oldVal){
            //     console.log('tut title',oldVal.tutTitle)
            //     console.log('tut title',newVal.tutTitle)
            //     // console.log('new tut title',newVal.tutContent)
            //     // console.log('new tut Content',newVal.tutContent)
            // })

            // watch(()=>tut.tutTitle,function(newVal,oldVal){
            //     console.log('old tut title',newVal);
            //     console.log('new tut title',oldVal);
            // })

            watch([refTitle,refContent],(newVals,oldVals)=>{
                console.log('Old refValue',oldVals[0]);
                console.log('New refValue',newVals[0]);
                console.log('New refValue',newVals[1]);
                console.log('New refValue',newVals[1]);
            })
            return {
                refTitle,
                refContent,
                ...toRefs(tut)
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