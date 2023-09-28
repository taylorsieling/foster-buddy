<template>
  <div
    class="d-flex flex-column align-items-center align-items-md-start text-dark px-4 pt-5 min-vh-100"
  >
    <a href="/" class="d-flex flex-wrap align-items-center text-decoration-none mb-4">
      <img
        src="https://avatars.githubusercontent.com/u/68246505?v=4"
        alt="Profile Picture"
        width="40"
        height="40"
        class="rounded-circle"
      />
      <!-- Dynamic: user.name -->
      <span class="fs-4 d-none d-md-inline ms-3">Taylor</span>
    </a>
    <ul class="nav nav-pills flex-column mb-auto align-items-center align-items-md-start" id="menu">
      <li v-for="link in menuLinks" :key="link.id" class="nav-item">
        <NavLink :link="link" />
      </li>
    </ul>
    <div class="mb-5">
      <a href="/" class="d-flex flex-wrap align-items-center text-decoration-none mt-1">
        <i class="bi bi-info-circle-fill text-primary"></i>
        <span class="fs-6 d-none d-md-inline ms-3">Support</span>
      </a>
      <a href="/" class="d-flex flex-wrap align-items-center text-decoration-none mt-1">
        <i class="bi bi-dash-circle-fill text-primary"></i>
        <span class="fs-6 d-none d-md-inline ms-3">Logout</span>
      </a>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  name: 'SideNav',
  components: { NavLink },
  data() {
    return {
      menuLinks: [
        {
          id: 0,
          name: 'Dashboard',
          path: '/dashboard',
          icon: 'bi bi-house-door-fill'
        },
        {
          id: 2,
          name: 'Intake',
          path: '/intake',
          icon: 'bi bi-clipboard2-heart-fill'
        },
        { id: 1, name: 'Fosters', path: '/fosters', icon: 'bi bi-list-stars' }
      ]
    }
  }
}
</script>
