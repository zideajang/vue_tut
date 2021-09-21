<template>
    <div v-for="tut in tuts" class="card" :key="tut.id">
        <slot :title="tut.title" :category="tut.category"></slot>
    </div>
</template>

<script>
    export default {
        name:'TutList',
        data(){
            return{
                tuts:[
                    {id:0,title:"快速排序算法",category:"算法"},
                    {id:1,title:"归并排序算法",category:"算法"},
                    {id:2,title:"基数排序算法",category:"算法"}
                ]
            }
        }
    }
</script>

<style scoped>

</style>