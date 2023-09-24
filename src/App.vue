<script setup>
import { RouterView } from 'vue-router'
import SideNav from './components/navigation/SideNav.vue';
import MainDash from './components/MainDash.vue';
</script>

<template>
  <header>
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <SideNav />
        <MainDash />
      </div>
    </div>
  </header>

  <RouterView />
</template>
