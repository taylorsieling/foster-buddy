<template>
  <div id="dash-header" class="d-flex flex-row flex-wrap flex-md-nowrap justify-content-between">
    <div class="mb-3 me-4">
      <h1 class="fs-3 fw-bold">Foster Dashboard</h1>
      <p class="fs-6 text-primary">Welcome, Taylor!</p>
    </div>
    <div class="ms-md-2">
      <a href="/intake" class="btn btn-primary text-white">New Foster</a>
    </div>
  </div>
  <hr />
  <div id="dash-stats" class="d-flex flex-row justify-content-around fw-bold">
    <div class="d-flex flex-row align-items-center">
      <i class="bi bi-arrow-up-circle-fill text-secondary fs-1 me-2"></i>
      <div class="m-2">
        <!-- Dynamic - user.current_fosters.length -->
        <p class="fs-2">6</p>
        <p>Current Fosters</p>
      </div>
    </div>
    <div class="vr"></div>
    <div class="d-flex flex-row align-items-center">
      <i class="bi bi-arrow-up-circle-fill text-success fs-1 me-2"></i>
      <div class="m-2">
        <!-- Dynamic - user.current_fosters.length -->
        <p class="fs-2">6</p>
        <p>Current Fosters</p>
      </div>
    </div>
    <div class="vr"></div>
    <div class="d-flex flex-row align-items-center">
      <i class="bi bi-arrow-up-circle-fill text-warning fs-1 me-2"></i>
      <div class="m-2">
        <!-- Dynamic - user.current_fosters.length -->
        <p class="fs-2">6</p>
        <p>Current Fosters</p>
      </div>
    </div>
  </div>
  <hr />
  <div class="mt-5">
    <CardCarousel></CardCarousel>
  </div>
</template>

<script>
import CardCarousel from '../components/CardCarousel.vue'

export default {
  name: 'MainDash',
  components: { CardCarousel }
}
</script>

<style scoped>
p {
  margin-bottom: 0.25rem;
}
</style>
