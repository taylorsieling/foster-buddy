<template>
  <div class="col-md-3">
    <div class="card h-100" style="width: 18rem;">
      <img src="https://i.imgur.com/Oc8U8Ft.jpg" class="card-img-top" alt="Kitten">
      <div class="card-body">
        <h5 class="card-title">Gus</h5>
        <p class="card-text">
          Sex: Male <br>
          Age: 4 Weeks <br>
          Domestic Shorthair - Tabby
        </p>
        <a href="#" class="btn btn-secondary">View Profile</a>
      </div>
    </div>
  </div>
  
  <!-- <div class="card h-100" style="width: 18rem;">
    <img src="https://i.imgur.com/Oc8U8Ft.jpg" class="card-img-top" alt="Kitten">
    <div class="card-body">
      <h5 class="card-title">{{ f.name }}</h5>
      <p class="card-text">
        Sex: {{ f.sex }} <br>
        Age: 4 Weeks <br>
        Domestic Shorthair - Tabby
      </p>
      <a href="#" class="btn btn-primary">View Profile</a>
    </div>
  </div> -->
</template>

<script setup>

</script>

<style lang="scss" scoped>
.card-img-top {
  width: 100%;
  height: 20vw;
  object-fit: cover;
}
</style>
