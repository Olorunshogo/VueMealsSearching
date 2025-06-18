
<script setup lang='ts'>
    import { watch, computed } from 'vue';
    import { useMealStore } from '@/stores/meals';
    import { useRoute, RouterLink } from 'vue-router';
    import MealItem from '@/components/MealItem.vue';

    const mealStore = useMealStore();
    const route = useRoute();

    const meals = computed(() => {
        return mealStore.searchedMealsByIngredients.data;
    });
    const ingredientParams = route.params.ingredient;

    watch(
        () => ingredientParams,
        (ingredient) => {
            if (ingredient) {
                mealStore.searchMealsByIngredients(ingredient as string);
            }
        },
        { immediate: true }
    );

</script>

<template>

    <div>

        <div class="flex flex-col gap-6 w-full max-w-7xl mx-auto h-full px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:(--section-py-lg)">
            
            <!-- Back Button -->
            <RouterLink
                to="/ingredients"
                title="Back to Ingredients"
                class="inline-block text-sm font-semibold px-4 py-2 w-fit rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
                <Icon icon="mdi:arrow-all" /> Back to Ingredients
            </RouterLink>
            
            <!-- Titile -->
            <h1 class="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
                Meals with "{{ ingredientParams }}"
            </h1>

            <!-- Loading state -->
            <div v-if="mealStore.searchedMealsByIngredients.loading">
                <p class="text-center">Loading meals...</p>
            </div>

            <!-- Meal result -->
            <ul
                v-else-if="meals.length > 0"
                class="grid grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] gap-4"
            >

                <MealItem
                    v-for="meal in meals"
                    :key="meal.idMeal"
                    :meal="meal"
                />
            </ul>


            <!-- No result -->
            <div v-else>
                <p class="text-center">No meals for this ingredient.</p>
            </div>


        </div>

    </div>
    
</template>

<style lang="css" scoped>

</style>