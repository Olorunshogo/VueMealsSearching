<script setup lang="ts">

  import { RouterView } from 'vue-router';
  import NavbarComp from './components/NavbarComp.vue';
  import FooterComponent from './components/FooterComponent.vue';

</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100">

    <!-- Navbar -->
    <NavbarComp />

    <div class="flex flex-grow">
      <RouterView />
    </div>

    <!-- Footer -->
    <FooterComponent />

  </div>
</template>

<style scoped>


</style>
