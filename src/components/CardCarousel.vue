<template>
  <div>
    <div id="carouselExample" class="carousel slide container">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <FosterCard></FosterCard>
        </div>
        <div class="carousel-item">
          <FosterCard></FosterCard>
        </div>
        <div class="carousel-item">
          <FosterCard></FosterCard>
        </div>
        <div class="carousel-item">
          <FosterCard></FosterCard>
        </div>
<!-- 
        <div v-for="f in fosters" :key="f.id" class="carousel-item">
          <FosterCard></FosterCard>        
        </div> -->
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import FosterCard from './FosterCard.vue';

export default {
  name: 'CardCarousel',
  components: { FosterCard },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
