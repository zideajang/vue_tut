<template>
  <carousel class="carousel" v-slot="{currentSlide}">
    <carousel-slide v-for="(slide,index) in carouselSlides" :key="index" >
      <div v-show="currentSlide === index + 1" class="slide-info">
        <img :src="require(`../assets/slides/${slide}`)"/>
      </div>
    </carousel-slide>

  </carousel>
</template>

<script>

import Carousel from '../components/carousel/Carousel.vue'
import CarouselSlide from '../components/carousel/CarouselSlide.vue'

export default {
  name: 'Home',
  setup(){
    const carouselSlides = [
      'slide_001.png',
      'slide_002.png',
      'slide_003.png',
    ]

    return{
      carouselSlides

    }
  },
  components: {
    Carousel,
    CarouselSlide
    
  }
}
</script>
<style scoped>
.carousel{
  position: relative;
  max-height: 100vh;
  height: 240px;
}
.slide-info{
  position:absolute;
  top:0;
  left:0;
  width: 100%;
  max-height: 100%;
  height: 240px;
}
.slide-info img{
  min-width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
