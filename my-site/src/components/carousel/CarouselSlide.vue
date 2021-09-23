<template>
    <div class="slide">
        <transition name="slide">
            <slot/>
        </transition>
    </div>
</template>

<script>
    export default {
        name:'CarouselSlide'
    }
</script>

<style scoped>

</style>