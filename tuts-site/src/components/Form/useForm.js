import { ref } from 'vue';

export function useForm(){
    const login = ref('');
    const password = ref('');

    function submitForm(){
        console.log(`User ${login.value} is logging in`)
    }
    return {login, password, submitForm}
}