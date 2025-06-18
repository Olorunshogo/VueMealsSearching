
<script setup lang='ts'>

    import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="w-full h-full">
        <div class="flex flex-col items-center gap-8 w-full min-h-screen bg-gray-100">
            
            <!-- Hero Section -->
            <section class="w-full h-full bg-gradient-to-br from-blue-700 via-30% via-green-700 to-indigo-700 text-white text-center px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">
                <div class="w-full max-w-7xl mx-auto h-full space-y-6">
                    <h1 class="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                        Discover Delicious Meals Instantly
                    </h1>
                    <p class="text-lg md:text-xl max-w-3xl mx-auto">
                        Search meals by name, ingredients, or even just the first letter.
                        Whether you’re a home cook or food lover, get inspired to cook something amazing today.
                    </p>
                    <RouterLink 
                        to="/by-name/avocado"
                        class="inline-block bg-white text-blue-700 px-6 py-3 mt-4 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
                    >
                        Start Exploring
                    </RouterLink>
                </div>
            </section>

            <!-- Features Section -->
            <section class="grid gap-8 md:grid-cols-3 text-center w-full max-w-7xl mx-auto px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">
                <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div class="text-4xl mb-4">🔍</div>
                    <h3 class="text-xl font-semibold mb-2">Search by Name</h3>
                    <p class="text-gray-600">
                        Know what you're craving? Just type and find meals instantly with a powerful live search.
                    </p>
                </div>

                <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div class="text-4xl mb-4">🔠</div>
                    <h3 class="text-xl font-semibold mb-2">Search by First Letter</h3>
                    <p class="text-gray-600">
                        Feeling random? Pick a letter and explore meals starting with it for a surprise treat.
                    </p>
                </div>

                <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div class="text-4xl mb-4">🥦</div>
                    <h3 class="text-xl font-semibold mb-2">Search by Ingredients</h3>
                    <p class="text-gray-600">
                        Enter your available ingredients and find meals that make the most of what you have.
                    </p>
                </div>

            </section>

            <!-- CTA Section -->
            <section class="w-full bg-gray-300 text-center border-t px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">
                <div class="max-w-4xl mx-auto space-y-4">
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-800">
                        Ready to find your next favorite dish?
                    </h2>
                    
                    <p>
                        Navigate through the app and explore meals that suit your cravings and creativity.
                    </p>

                    <div class="flex justify-center gap-4 flex-wrap pt-4">

                        <RouterLink 
                            to="/by-name/salmon" 
                            class="bg-black text-white font-semibold px-5 py-2 rounded-md hover:opacity-85 duration-300 ease-in-out transition-all"
                        >
                            Search by Name
                        </RouterLink>
                        
                        <RouterLink 
                            to="/letter/a" 
                            class="bg-indigo-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-indigo-700 duration-300 ease-in-out transition-all"
                        >
                            Search by Letter
                        </RouterLink>

                        <RouterLink 
                            to="/ingredients" 
                            class="bg-green-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-green-700 duration-300 ease-in-out transition-all"
                        >
                            Search by Ingredient
                        </RouterLink>
                    </div>
                </div>
            </section>

        </div>
    </div>
</template>

<style lang="css" scoped>

</style>