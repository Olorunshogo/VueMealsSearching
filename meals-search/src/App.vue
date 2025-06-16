<script setup lang="ts">

  import { RouterView } from 'vue-router';
import NavbarComp from './components/NavbarComp.vue';

</script>

<template>
  <main>
    <div>
      <NavbarComp />
    </div>

    <div>
      <RouterView />
    </div>
  </main>
</template>

<style scoped>


</style>
