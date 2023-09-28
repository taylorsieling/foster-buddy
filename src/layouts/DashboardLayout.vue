<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div id="nav-panel" class="col-2 col-md-3 px-sm-2 px-0 border-end">
        <SideNav />
      </div>
      <div class="col p-5">
        <div class="container">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from '../components/navigation/SideNav.vue'

export default {
  name: 'DashboardLayout',
  components: { SideNav },
  created() {
    console.log('created: dashboard layout')
  },
  destoyed() {
    console.log('destroyed: dashboard layout')
  }
}
</script>

<style lang="scss" scoped>
.col-md-3 {
  max-width: 280px;
}
</style>
