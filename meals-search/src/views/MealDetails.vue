
<script setup lang='ts'>
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { useMealStore } from '@/stores/meals';

    import YoutubeButton from '@/components/YoutubeButton.vue';
    import { Icon } from '@iconify/vue';

    const route = useRoute();
    const mealStore = useMealStore()

    function getIngredients() {
        const details = mealStore.mealDetails;
        if (!details) return [];
        const ingredients: string[] = [];

        for (let i = 1; i <= 20; i++) {
            const ingredient = details[`strIngredient${i}` as keyof typeof details];
            if (ingredient && ingredient.trim()) {
                ingredients.push(ingredient);
            }
        }

        return ingredients;
    }

    function getMeasures() {
        const details = mealStore.mealDetails;
        if (!details) return [];
        const measures: string[] = [];

        for (let i = 1; i <= 20; i++) {
            const measure = details[`strMeasure${i}` as keyof typeof details];
            if (measure && measure.trim()) {
                measures.push(measure);
            }
        }

        return measures;
    }

    onMounted(() => {
        const id = route.params.id as string;
        if (id) {
            mealStore.getMealsById(id);
        }


    })
</script>

<template>
    <div>
        <div class="flex flex-col gap-8 w-full max-w-7xl mx-auto h-full px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">

            <!-- Title & Image -->
            <div 
                v-if="mealStore.mealDetails"
                class="flex flex-col gap-4 lg:gap-6"
            >
                <h1 class="text-3xl sm:text-4xl md:text-5xl text-center font-bold">{{ mealStore.mealDetails.strMeal }}</h1>
                <img 
                    :src="mealStore.mealDetails.strMealThumb" 
                    :alt="mealStore.mealDetails.strMeal"
                    :title="mealStore.mealDetails.strMeal" 
                    class="object-cover w-full sm:w-4/5 max-w-3xl h-auto mx-auto"
                />
                
            </div>
            <div v-else>
                <p>Loading meal details...</p>
            </div>

            <!-- Basic Info: Category, Area & Tags -->
            <div class="flex items-center justify-center gap-2 sm:gap-4 text-sm lg:text-base flex-wrap *:min-w-fit">
                <div>
                    <strong class="font-bold">Category: </strong> {{ mealStore.mealDetails?.strCategory }}
                </div>
                <div>
                    <strong class="font-bold">Area: </strong> {{ mealStore.mealDetails?.strArea }}
                </div>
                <div>
                    <strong class="font-bold">Tags: </strong> {{ mealStore.mealDetails?.strTags }}
                </div>
            </div>

            <!-- Instructions -->
            <p class="text-sm lg:text-base"> 
                <strong>Instruction</strong>: 
                {{ mealStore.mealDetails?.strInstructions }}
            </p>

            <!-- Ingredients & Measures -->
            <div class="grid sm:grid-cols-2 gap-4 lg:gap-8 px-4">

                <!-- Ingredients -->
                <div class="flex flex-col gap-4">
                    <h2 class="text-xl lg:text-2xl font-semibold">Ingredients</h2>

                    <ul class="list-decimal">
                         <li
                            v-for="(ingredient, i) in getIngredients()"
                            :key="'ingread-' + i"
                            class="text-sm lg:text-base"
                        >
                            {{ ingredient }}
                        </li>
                    </ul>
                </div>

                <!-- Measures -->
                <div class="flex flex-col gap-4">
                    <h2 class="text-xl lg:text-2xl font-semibold">Measures</h2>

                    <div>
                        <ul class="list-decimal pl-4">
                            <li
                                v-for="(measure, i) in getMeasures()"
                                :key="'meas-' + i"
                                class="text-sm lg:text-base"
                            >
                                {{ measure }}
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <!-- YouTubue & View Original Source button -->
            <div class="flex items-center flex-wrap gap-4">
                <YoutubeButton
                    :aHref="mealStore.mealDetails?.strYoutube"
                    aName="Youtube"
                    aIconName="youtube"
                />

                <a 
                    :href="mealStore.mealDetails?.strSource" 
                    target="_blank" rel="noopener noreferrer"
                    class="flex items-center gap-2 px-3 py-2 text-sm lg:text-base font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer duration-300 ease-in-out transition-all"
                >
                    <span>
                        <Icon icon="mdi:youtube" class="text-xl" />
                    </span>
                    <span>View Original Source</span>
                </a>

            </div>

        </div>

    </div>
</template>

<style lang="css" scoped>

</style>