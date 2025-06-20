
<script setup lang='ts'>
    import { watch, ref, onMounted } from 'vue';
    import { useMealStore } from '@/stores/meals';
    import { useRoute } from 'vue-router';
    import MealItem from '@/components/MealItem.vue';

    const mealStore = useMealStore();
    const keyword = ref<string>('');
    let debounceTimeout: number | undefined;
    const route = useRoute();

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

    onMounted(() => {
        const nameParam = route.params.name;
        keyword.value = Array.isArray(nameParam) ? nameParam[0] : nameParam || '';

        if (keyword.value) {
            searchMeals();
        }
    });

</script>

<template>    
    <div class="w-full h-full">

        <div class="flex flex-col gap-8 w-full max-w-7xl mx-auto h-full px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">
            
            <h1 class="text-center text-3xl md:text-4xl lg:text-5xl font-bold">Search by Name</h1>
                
            <!-- Meal Search Bar By Name-->
            <div class="w-full h-full">
                <input 
                    type="search" name="mealSearch" id="mealSearch" 
                    v-model="keyword"
                    class="p-2 bg-white border-2 border-gray-200 rounded-lg outline-none h-12 w-full cursor-default hover:border-b-blue-700 hover:cursor-pointer
                        focus:border-blue-700 focus:cursor-text placeholder-shown:text-sm duration-300 ease-in-out transition-all"
                    placeholder="Search for Meals"
                    @input="searchMeals"
                />
            </div>

            <!-- Search Results -->
            <div class="flex flex-col gap-8 w-full h-full">

                <div v-if="mealStore.searchedMeals.loading">Loading...</div>

                <ul 
                    v-else-if="mealStore.searchedMeals.data.length > 0"
                    class="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4"
                >
                    <MealItem
                        v-for="meal in mealStore.searchedMeals.data"
                        :key="meal.idMeal"
                        :meal="meal"
                    />
                </ul>

                <div 
                    v-else="keyword.length >= 2"
                    class="flex justify-center"
                >
                    <p>No meals found</p>
                </div>
            </div>

        </div>

    </div>
</template>

<style lang="css" scoped>

</style>