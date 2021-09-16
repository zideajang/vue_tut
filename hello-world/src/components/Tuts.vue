<template>
    <div>
        <tut-card/>
    </div>
    <div v-for="title in titles" :key="title">
        <div>{{title}}</div>
    </div>
    <template v-for="title in titles" :key="title">
        <h5>{{title}}</h5>
    </template>
    <div style="margin-bottom:20px;">
    </div>
    <div v-for="(title,index) in titles" :key="title">
        {{index}} {{title}}
    </div>
    <div style="margin-bottom:20px;">
    </div>
    <div v-for="(tut,index) in tuts" :key="tut.title">
        {{index}} {{tut.title}}({{tut.category}})
    </div>
    <div v-for="category in cate" :key="category.category">
        <div>{{category.category}}</div>
        <h5 v-for="tut in category.tuts" :key="tut.title">{{tut.title}}</h5>
    </div>
    <div>

    </div>
</template>
<script>
import TutCard from './TutCard.vue'
export default{
    name:'Tuts',
    components:{
        TutCard
    },
    data(){
        return{
            titles:[
                'TypeScript 深入浅出—interface 和 type',
                'TypeScript 深入浅出—为什么我们需要 TypeScript',
                '程序员绕不开的算法8 —基数排序算法'
            ],
            tuts :[
                {title:"TypeScript 深入浅出—interface 和 type",category:"web"},
                {title:"TypeScript 深入浅出—为什么我们需要 TypeScript",category:"web"},
                {title:"程序员绕不开的算法8 —基数排序算法",category:"算法"}
            ],
            cate: [
                {
                    category:"machine leanring",
                    tuts:[
                        {title:"寻找网络最大流算法(1)—Ford-Fulkerson 算法"},
                        {title:"深度学习框架新贵—JAX(2)—JAX 能否终结 Numpy 的时代"}
                    ]
                },
                {
                    category:"web develop",
                    tuts:[
                        {title:"只用 JS 自己动手实现一个 Web Component"},
                        {title:"用于 Javascript 去解析 Javascript 自己动手写一个 Parser(1)"}
                    ]
                }
            ]

        }
    }
}
</script>
