<template>
    <div class="container">
        <form @submit.prevent="submitForm">
            <div class="control">
                <input class="input" type="text" placeholder="Login" v-model="login"/>
            </div>
            <div class="control">
                <input class="input" type="password" placeholder="password" v-model="password"/>
            </div>
            <button class="button">Submit</button>
        </form>
    </div>
</template>

<script>
    import {useForm} from './useForm.js'
    export default {
        setup(){
            const {login, password, submitForm} = useForm()
            return {login, password, submitForm}
        }
    }
</script>

<style scoped>

</style>