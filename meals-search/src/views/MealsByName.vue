
<script setup lang='ts'>
    import { watch } from 'vue';
    import { useMealStore } from '@/stores/meals';
    import { useLocalStorage } from '@/composables/useLocalStorage';

    const mealStore = useMealStore();
    const keyword = useLocalStorage('meal-search-keyword', '');
    let debounceTimeout: number | undefined;

    function searchMeals() {
        mealStore.searchMeals(keyword.value);     
    }

    watch(keyword, (newVal) => {
        if (debounceTimeout) clearTimeout(debounceTimeout);

        debounceTimeout = setTimeout(() => {
            const trimmed = newVal.trim();
            if (trimmed.length >= 2) {
                mealStore.searchMeals(trimmed);
            } else {
                mealStore.searchedMeals.data = [];
            }
            
        }, 400)
    });

</script>

<template>
    <div class="flex flex-col gap-8 mt-8 w-full h-full px-(--section-px) lg:px-(--section-px-lg)">
        <h2 class="text-center">Search By Name</h2>
            
        <!-- Meal Search Bar -->
        <div class="w-full h-full">
            <input 
                type="search" name="mealSearch" id="mealSearch" 
                v-model="keyword"
                class="p-2 border-2 border-gray-200 rounded-lg outline-none h-12 w-full cursor-default hover:border-b-blue-700 hover:cursor-pointer
                    focus:border-blue-700 focus:cursor-text placeholder-shown:text-sm duration-300 ease-in-out transition-all"
                placeholder="Search for Meals"
                @input="searchMeals"
            />
        </div>

        <!-- Search Results -->
        <div class="flex flex-col gap-8 w-full h-full">

            <div v-if="mealStore.searchedMeals.loading">Loading...</div>

            <ul v-else-if="mealStore.searchedMeals.data.length > 0">
                <li v-for="meal in mealStore.searchedMeals.data" :key="meal.idMeal">
                    {{ meal.strMeal }}
                </li>
            </ul>

            <div v-else="keyword.length >= 2">
                <p>No meals found</p>
            </div>
        </div>

    </div>
</template>

<style lang="css" scoped>

</style>