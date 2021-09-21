<template>
    <div class="section">
        <div class="control">
            <input type="text" class="input" ref="inputRef">
        </div>
    </div>
</template>

<script>
    import {ref, onMounted} from 'vue';

    export default {
        name:"ReplaceTemplateRef",
        setup(){
            const inputRef = ref(null);
            onMounted(()=>{
                console.log(inputRef.value)
                inputRef.value.focus();
            })
            return {
                inputRef
            }
        },
        // mounted(){
        //     this.$refs.inputRef.focus()
        // }
    }
</script>
