
<script setup lang="ts">

    import { useMealStore } from '@/stores/meals';
    const mealStore = useMealStore();
    const meals = mealStore.meals;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

</script>

<template>
  <div class="flex flex-col gap-12 bg-black/70 text-white min-h-dvh h-full px-(--section-px) lg:px-(--section-px-lg)">
    <h2 class="text-xl text-center py-4 font-bold">Meal search page</h2>

    <div class="flex flex-col items-center justify-center gap-4 w-full h-full">
        
        <div class="w-full h-full">
            <input 
                type="search" name="mealSearch" id="mealSearch" 
                placeholder="Search for Meals"
                class="p-2 border-2 border-gray-200 rounded-lg outline-none h-12 w-full"
            />
        </div>

        <div class="flex gap-2 justify-center mt-2">
            <!-- <pre class="flex">{{ letters }}</pre> -->
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
                {{ letter }}
            </router-link>
        </div>

    </div>

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
</template>

<style scoped>

</style>
