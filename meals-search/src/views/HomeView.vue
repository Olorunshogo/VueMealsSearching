
<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import axiosClient from '../axiosClient'
  import { useMealStore } from '@/stores/meals';

  const ingredients = ref([]);

  const mealStore = useMealStore();
  const meals = mealStore.meals;
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list');
    console.log(response.data);
    ingredients.value = response.data
  });

</script>

<template>
  <main class="w-full h-full px-(--section-px) lg:px-(--section-px-lg)">

    <div class="flex flex-col gap-12 w-full mx-auto max-w-7xl h-full py-(--section-py) lg:py-(--section-py-lg)">
      <h2 class="text-xl text-center py-4 font-bold">Home page</h2>

      <!-- Meals -->
      <div class="flex flex-col items-center justify-center gap-4 w-full h-full">
          
        <!-- Meal Search Bar -->
        <!-- <div class="w-full h-full">
          <input 
            type="search" name="mealSearch" id="mealSearch" 
            placeholder="Search for Meals"
            class="
              p-2 border-2 border-gray-200 rounded-lg outline-none h-12 w-full cursor-default
              hover:border-b-blue-700 hover:cursor-pointer
              focus:border-blue-700 focus:cursor-text 
              placeholder-shown:text-sm duration-300 ease-in-out transition-all
            "
          />
        </div> -->

        <!-- Meals List Search letter -->
        <div class="flex gap-2 justify-center mt-2">
          <!-- <pre class="flex">{{ letters }}</pre> -->
          <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
            {{ letter }}
          </router-link>
        </div>

      </div>

      <!-- Ingredients -->
      <div class="flex flex-col gap-8 w-full h-full">
        <h3 class="text-center font-semibold">Ingredients</h3>
        <pre>{{ ingredients }}</pre>
      </div>

      <!-- Meals -->
      <div class="flex flex-col gap-8 w-full h-full">
        <h3 class="text-center font-semibold">Meals</h3>
        <ul class="flex flex-col gap-2">
            <li v-for="meal in mealStore.meals" :key="meal"
              class="list-disc"
            >
              {{ meal }}
            </li>
        </ul>
      </div>

    </div>

  </main>
  
</template>

<style lang="css" scoped>

</style>

