<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide" />
    </div>
</template>

<script>
    import {ref} from 'vue';

    export default {
        name:"Carousel",
        setup(){
            const currentSlide = ref(2);

            return {currentSlide};
        }
    }
</script>

<style lang="sass" scoped>

</style>