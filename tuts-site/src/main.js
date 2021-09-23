import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//vue 2 -> Vue.directive
app.directive('font-size',{
    beforeMount:(el,binding) =>{
        let size = 12

        // switch(binding.arg){
        //     case 'small':
        //         size = 8
        //         break
        //     case 'large':
        //         size = 28
        //         break
        // }

        if(binding.modifiers.small){
            size = 8
        }else if(binding.modifiers.large){
            size = 28
        }

        el.style.fontSize = size + "px"
    },
    updated:(el,binding) =>{
        el.style.fontSize = binding.value + "px"
    }
});

app.mount('#app')
