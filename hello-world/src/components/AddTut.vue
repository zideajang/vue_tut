<template>
    <ol v-if="false">
        <li>捕捉用户输入</li>
        <li>输入框</li>
        <li>文本编译器</li>
        <li>下拉选择</li>
        <li>勾选框</li>
        <li>单选框</li>
        <li>提交表单</li>
    </ol>
    <div>
        <pre>
            {{JSON.stringify(formValues,null,2)}}
        </pre>
    </div>
    <div class="container">
    <section class="section">
    <h2>添加课程</h2>
    <form @submit.prevent="submitForm" class="pure-form">
        <fieldset>
        <div class="field">
            <label class="label" for="name">标题</label>
            <div class="control">
            <input class="input"  id="name" v-model.trim="formValues.title" type="text">
            </div>
        </div>
        <div class="field">
            <label class="label" for="profile">描述</label>
            <div class="control">
                <textarea class="textarea" id="profile" type="text" v-model.trim.lazy="formValues.profile"/>
            </div>
        </div>
        <div class="select">
            <select id="category" v-model="formValues.category">
                <option value="">类别</option>
                <option value="Web">Web</option>
                <option value="Backend">Backend</option>
                <option value="Machine Learning">Machine Learning</option>
            </select>
        </div>
        <div class="control">
            <label class="label" for="lesson">lesson</label>
            <input @keyup.enter="submitForm" class="input" type="number" id="lesson" v-model.number="formValues.lesson">
        </div>
        <hr/>
        <div class="select is-multiple">
            <select id="favority" multiple v-model="formValues.favorities">
                <option value="">发布到</option>
                <option value="Drawiing">知乎</option>
                <option value="Backend">西瓜</option>
                <option value="Machine Learning">哔哩哔哩</option>
            </select>
        </div>
        <hr/>
        <div>
            <label class="label" for="">技能</label>
            <input class="checkbox" type="checkbox" id="html" value="html" v-model="formValues.skillset">
            <label for="html">HTML</label>
            <input class="checkbox" type="checkbox" id="css" value="css" v-model="formValues.skillset">
            <label for="css">CSS</label>
            <input class="checkbox" type="checkbox" id="javascript" value="javascript" v-model="formValues.skillset">
            <label for="javascript">JavaScript</label>
        </div>
        <hr/>
        <div class="field">
            <div class="control">
                <label class="label" for="isPublic">
                <input type="checkbox" id="isPublic" v-model="formValues.isPublic" true-value="yes" false-value="no">
                是否公开
                </label>
            </div>
        </div>
        <div class="field is-grouped">
        <hr/>
        </div>
        <div>

        </div>
    </fieldset>
        <button class="button is-primary" >submit</button>
    </form>
    </section>
    </div>
</template>

<script>

export default{
    data(){
        return{
            formValues:{
                title:'Machine Learning',
                profile:'',
                favorities:[],
                isPublic:"yes",
                skillset:[],
                lesson:null
            }
        }
    },
    name:'Register',
    methods:{
        submitForm(event){
            console.log(event)
        }
    },
    computed:{
        
    }
}
</script>

<style>

</style>