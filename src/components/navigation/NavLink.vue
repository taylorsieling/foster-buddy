<template>
  <router-link class="nav-link fs-6" aria-current="isActive" :to="link.path">
    <i :class="link.icon"></i>    
    <span class="d-none d-md-inline ms-2">{{ link.name }}</span> 
  </router-link>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'NavLink',
  components: { RouterLink },
  props: { link: Object },
  data () {
    return {
      isActive: true
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-link {
  padding: .5rem 0;
  color: black;
}

</style>
