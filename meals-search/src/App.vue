<script setup lang="ts">

  import NavBar from './components/NavBar.vue';
  import { RouterView } from 'vue-router';

</script>

<template>
  <main>
    <div>
      <NavBar />
    </div>

    <div>
      <RouterView />
    </div>
  </main>
</template>

<style scoped>


</style>
