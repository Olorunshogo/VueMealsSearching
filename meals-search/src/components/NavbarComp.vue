

<script setup lang='ts'>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';

    const isMenuOpen = ref<boolean>(false);

    function toggleMenu() {
        isMenuOpen.value = !isMenuOpen.value;
    }

    const navLinks = [
        { name: 'byName', label: 'By Name' },
        { name: 'byLetter', label: 'By Letter' },
        { name: 'ingredients', label: 'Ingredients' },
        { name: 'about', label: 'About' }
    ];

</script>

<template>
    <header class="shadow-lg w-full h-full">
        <nav class="flex items-center cursor-pointer text-black w-full mx-auto max-w-7xl h-(--navbar-h) px-(--section-px) lg:px-(--section-px-lg) duration-300 ease-in-out transition-all">
        
            <div class="flex lg:hidden items-center justify-between w-full h-fit">
                <RouterLink :to="{name: 'home'}" class="inline-flex items-center h-full px-5 hover:bg-purple-500 duration-300 ease-in-out transition-all">
                    Home
                </RouterLink>

                <button 
                    @click="toggleMenu" aria-label="Toggle menu"
                    class="flex flex-col items-center justify-center text-2xl font-bold p-1 cursor-pointer shadow-lg rounded-lg w-8 h-fit duration-300 ease-in-out transition-all"
                >
                    <!-- &RightArrow; -->
                    <span :class="['block w-6 h-0.5 bg-black transition-transform duration-300', isMenuOpen ? 'rotate-45 translate-y-1.5' : '']"></span>
                    <span :class="['block w-6 h-0.5 bg-black my-1 transition-opacity duration-300', isMenuOpen ? 'opacity-0' : '']"></span>
                    <span :class="['block w-6 h-0.5 bg-black transition-transform duration-300', isMenuOpen ? '-rotate-45 -translate-y-1.5' : '']"></span>
                </button>

            </div>        

            <div
                v-if="isMenuOpen"
                class="fixed lg:hidden top-(--navbar-h) flex inset-0 z-20"
            >
                <Transition name="slide-right" mode="out-in">
                    <aside
                        class="w-2/3 bg-white flex flex-col items-center gap-3 py-6 h-full shadow-2xl"
                        @click.self="toggleMenu"
                    >
                        <RouterLink v-for="link in navLinks" :key="link.name" :to="{ name: link.name }"
                            class="p-2 text-center w-full max-w-sm mx-auto rounded hover:bg-slate-200"
                        >
                            {{ link.label }}
                        </RouterLink>         
                    </aside>
                </Transition>
            </div>

            <div
                v-if="isMenuOpen"
                class="fixed lg:hidden top-(--navbar-h) inset-0 z-20 transition-transform duration-300 ease-in-out"
                :class="isMenuOpen ? 'translate-x-2/3' : '-translate-x-full'"
            >
                <Transition name="slide-left" mode="out-in">
                    <aside
                        class="w-1/3 h-full bg-black/50 bg-opacity-30 backdrop-blur-sm shadow-lg"
                        @click="toggleMenu"
                    />
                </Transition>
            </div>


            <div class="hidden lg:flex *:inline-flex items-center justify-between font-bold text-sm gap-2 mx-auto cursor-pointer w-full *:w-fit max-w-7xl h-(--navbar-h)">
                
                <RouterLink :to="{name: 'home'}" class="inline-flex items-center px-5 py-2 rounded-xl hover:shadow-xl hover:bg-purple-500 duration-300 ease-in-out transition-all">
                    Home
                </RouterLink>
                
                <div class="flex items-center gap-2">

                    <RouterLink v-for="link in navLinks" :key="link.name" :to="{ name: link.name }"
                        class="p-2 text-center rounded-lg hover:shadow-lg hover:bg-purple-500 duration-300 ease-in-out transition-all"
                    >
                        {{ link.label }}
                    </RouterLink> 

                    
                </div>

            </div>

        </nav>
    </header>
</template>

<style lang="css" scoped>

</style>