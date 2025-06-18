
<script setup lang='ts'>
    import { defineProps } from 'vue';
    import { RouterLink, useRoute } from 'vue-router';   
    import YoutubeButton from '@/components/YoutubeButton.vue';
    import type { Meal } from '@/types/types';

    // const props = defineProps<{ 
    //     meal: {
    //         idMeal: string;
    //         strMeal: string;
    //         strMealThumb?: string;
    //         strInstructions?: string;
    //         strYoutube?: string;
    //     }
    // }>()

    const props = defineProps<{ meal: Meal }>();

</script>

<template>
    <div>
        <li class="bg-white shadow-xl rounded scale-100 hover:scale-102 duration-300 ease-in-out">

            <div class="flex flex-col col gap-2 w-full h-full">
                
                <!-- Meal Image -->
                <RouterLink :to="{name: 'mealDetails', params: {id: meal.idMeal}}" 
                    class="w-full h-full rounded-t-xl hover:cursor-pointer duration-300 ease-in-out transition-all"
                >
                    <img 
                        :src="meal.strMealThumb" 
                        :alt="meal.strMeal" 
                        :title="'Go to ' + meal.strMeal + ' details page'"
                        class="w-full h-50 sm:h-40 object-cover rounded-t-xl"
                    >
                </RouterLink>

                <!-- Meal Description -->
                <div class="flex flex-col gap-2 p-3 cursor-default w-full h-full">

                    <div class="flex flex-col gap-1">
                        <h3 class="font-semibold capitalize">{{ meal.strMeal }}</h3>
                        <p class="text-xs line-clamp-3 capitalize">{{ meal.strInstructions }}</p>
                    </div>

                    <div class="flex items-center" v-if="meal.strYoutube">
                        <YoutubeButton
                            :aHref="meal.strYoutube"
                            aName="Youtube"
                            aIconName="youtube"
                        />
                    </div>

                </div>
            </div>
        </li>
    </div>
</template>

<style lang="css" scoped>

</style>