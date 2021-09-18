<template>
    <div class="container">
        <section class="section">
        <h1 class="subtitle is-2 has-text-primary">{{description}}</h1>
        <h1 class="subtitle is-2 has-text-primary">{{description2}}</h1>
        
        <h2 class="subtitle is-3">{{totalLesson}}</h2>
        <h2 class="subtitle is-3">{{getLesson()}}</h2>
        <button @click="tuts.push({id:5,title:'graphic neural network1',lesson:12})">Add Tut</button>
        <div class="field">
            <label class="label" for="title">titl</label>
            <input id="title" type="text" class="input" v-model="title" />
            <button @click="resetDescription()">reset</button>
        </div>
        </section>
        <section class="section">
            <template v-for="tut in tuts" :key="tut.id">
                <div v-if="tut.lesson >10" class="card" style="margin-bottom:12px;">
                    <div class="card-header">
                        <div class="card-header-title">{{tut.title}}</div>
                    </div>
                </div>
            </template>
        </section>
        <section class="section">
            <template v-for="tut in getAdvanceTuts" :key="tut.id">
                <div  class="card" style="margin-bottom:12px;">
                    <div class="card-header">
                        <div class="card-header-title">{{tut.title}}</div>
                    </div>
                </div>
            </template>
        </section>
    </div>
</template>
<script>
export default {
    name:"Tut",
    data(){
        return{
            title:"machine leanring",
            subTitle:"deep learning",
            tuts:[
                {id:0,title:"Machine Learning",description:"",lesson:32},
                {id:1,title:"Deep Learning",description:"",lesson:12},
                {id:2,title:"Met Learning",description:"",lesson:8}
            ]
        }
    },
    methods:{
        resetDescription(){
            this.description2 = "machine Learning"
        },
        getLesson(){
            console.log('get lesson()')
            return this.tuts.reduce((total,tut)=>(total = total + tut.lesson),0)
        }
    },
    computed:{
        getAdvanceTuts(){
            return this.tuts.filter((tut)=>tut.lesson > 10);
        },
        description2:{
            get(){
                return `${this.title}—${this.subTitle}`
            },
            set(val){
                const desc = val.split(' ')
                this.title = desc[0];
                this.subTitle = desc[1];
            }
        },
        description(){
            return `${this.title}—${this.subTitle}`
        },
        totalLesson(){
            console.log('get total lesson')
            return this.tuts.reduce((total,tut)=>(total = total + tut.lesson),0)
        }
    }
}
</script>
<style>

</style>