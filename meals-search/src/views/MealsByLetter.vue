
<script setup lang='ts'>
    import { computed, watch, onMounted } from 'vue';
    import { useMealStore } from '@/stores/meals';
    import { useRoute } from 'vue-router';
    import MealItem from '@/components/MealItem.vue';

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const  mealStore = useMealStore();
    const route = useRoute();

    const loading = computed(() => {
        return mealStore.searchedMealsByLetter.loading;
    });

    const meals = computed(() => {
        return mealStore.searchedMealsByLetter.data;
    });

    function getMealsByLetter() {
        const letterParam = route.params.letter;
        const letter = Array.isArray(letterParam) ? letterParam[0] : letterParam;
        
        mealStore.searchMealsByLetter(letter);
        
    }

    watch(() => route.params.letter, getMealsByLetter);

    onMounted(() => {
        getMealsByLetter();
    });



</script>

<template>
    <div class="w-full h-full">

        <div class="flex flex-col gap-8 w-full max-w-7xl mx-auto h-full px-(--section-px) lg:px-(--section-px-lg)) py-(--section-py) lg:py-(--section-py-lg)">
            
            <div class="flex flex-col gap-4">
                <!-- Meal Alphabet Search -->
                <h1 class="text-center text-3xl md:text-4xl lg:text-5xl font-bold">Search by Letter</h1>

                <div class="flex justify-center gap-1 sm:gap-2 text-sm lg:text-base mt-2 text-black font-semibold py-4">
                    <router-link 
                        :to="{ name: 'byLetter', params: { letter } }" 
                        v-for="letter of letters" :key="letter"
                        class="flex text-wrap"
                    >
                        {{ letter }}
                    </router-link>
                </div>
            </div>

            <!-- Meal Alphabet Search Results -->
            <div class="flex flex-col gap-8 w-full h-full">
                <div v-if="loading">Loading...</div>

                <ul 
                    v-else-if="meals.length > 0"
                    class="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4"
                >
                    <MealItem
                        v-for="meal in meals"
                        :key="meal.idMeal"
                        :meal="meal"
                    />
                </ul>

                <div v-else class="flex justify-center">
                    <p>No meals found for this letter.</p>
                </div>

            </div>


        </div>

    </div>
</template>

<style lang="css" scoped>

</style>