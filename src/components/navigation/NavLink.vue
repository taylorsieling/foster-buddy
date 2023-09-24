<!-- <template>
  <NavLink
    v-bind="$attrs"
    class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
    active-class="border-indigo-500 text-gray-900 focus:border-indigo-700"
    inactive-class="text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"
  >
    <slot />
  </NavLink>
</template>


<template>
  <router-link class="block py-2 pl-3 pr-4 text-black bg-white" aria-current="" to="/about">About</router-link>
</template>

<script>
export default {
  name: "NavLink",

}
</script> -->

<template lang="html">
  <router-link class="block py-2 pl-3 pr-4 name-black bg-white" :to="`${link.page}`">
    {{link.name}}
  </router-link>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Tab'
      }
    },
    data () {
      return {
        isActive: true
      }
    }
  }
</script>

