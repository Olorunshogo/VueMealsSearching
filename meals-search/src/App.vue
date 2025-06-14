<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    
    <div class="w-full h-full">
      
      <nav class="flex items-center justify-center bg-black/80 text-white *:hover:text-green-700 gap-2 mx-auto text-sm cursor-pointer w-full h-16 duration-300 ease-in-out transition-all">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/meals">Meals</RouterLink>
      </nav>

    </div>
  </header>

  <RouterView />
</template>

<style scoped>


</style>
