<template>
  <div id="dash-header" class="d-flex flex-row justify-content-between">
    <div>
      <h1 class="fs-3 fw-bold">Foster Dashboard</h1>
      <p class="fs-6 text-primary">Welcome, Taylor!</p>
    </div>
    <div>
      <!-- <button class="btn btn-primary text-white ms-2">New Litter</button> -->
      <a href="/intake" class="btn btn-primary text-white ms-2">New Foster</a>
    </div>
  </div>
  <hr>
  <div id="dash-stats" class="d-flex flex-row justify-content-around fw-bold">
    <div class="m-2">
      <!-- Dynamic - user.current_fosters.length -->
      <p class="fs-2">6</p>
      <p>Current Fosters</p>
    </div>
    <div class="vr"></div>
    <div class="m-2">
      <p class="fs-2">2</p>
      <p>Current Litters</p>
    </div>
    <div class="vr"></div>
    <div class="m-2">
      <!-- Dynamic - user.fosters.length -->
      <p class="fs-2">62</p>
      <p>Total Fosters</p>
    </div>
  </div>
  <hr>
  <div class="mt-5">
    <CardCarousel></CardCarousel>
  </div>
</template>

<script>
import CardCarousel from '../components/CardCarousel.vue';

export default {
  name: 'MainDash',
  components: { CardCarousel }
}

</script>

<style scoped>
p {
  margin-bottom: .25rem;
}
</style>
