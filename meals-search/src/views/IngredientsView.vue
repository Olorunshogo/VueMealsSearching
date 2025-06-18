
<script setup lang='ts'>
    import { onMounted } from 'vue';
    import { useMealStore } from '@/stores/meals';
    import { RouterLink } from 'vue-router';

    const mealStore = useMealStore();
    // const route = useRoute();

    onMounted(() => {
        mealStore.fetchAllIngredients();
    });

</script>

<template>

    <div>

        <div class="flex flex-col gap-4 w-full max-w-7xl mx-auto h-full px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:(--section-py-lg)">
            
            <h1 class="text-center text-3xl md:text-4xl lg:text-5xl font-bold">Ingredients</h1>

            <!-- Fetch all Ingredients -->
            <div v-if="mealStore.allIngredients.loading">Loading ingredients...</div>

            <div v-else class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                <RouterLink 
                    v-for="ingredient in mealStore.allIngredients.data"
                    :key="ingredient.idIngredient"
                    :to="{ name: 'byIngredients', params: { ingredient: ingredient.strIngredient } }"
                    class="flex flex-col gap-2 bg-white rounded-lg p-3 mb-3 shadow-xl hover:cursor-pointer duration-300 ease-in-out transition-all"
                >
                    <h3 class="text-xl lg:text-2xl font-semibold text-blue-600">{{ ingredient.strIngredient }}</h3>
                    <p class="text-sm lg:text-base">
                        {{ ingredient.strDescription || 'No description available.' }}
                    </p>

                </RouterLink>
            </div>


        </div>

    </div>
    
</template>

<style lang="css" scoped>

</style>