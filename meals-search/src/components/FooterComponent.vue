
<script setup lang="ts">
    import { ref } from 'vue';

    const producedYear = ref<number>(2025);
    const currentYear = new Date().getFullYear();
    const displayCurrentYear = ref<boolean>(false);

    if (producedYear.value === currentYear) {
        displayCurrentYear.value = false;
    } else {
        displayCurrentYear.value = true;
    }

    const showYearRange = ref(currentYear !== producedYear.value);

</script>

<template>
    <footer class="shadow-lg w-full h-full">

        <div class="flex flex-col md:flex-row justify-center lg:justify-between items-center gap-1 lg:gap-4 text-sm text-black w-full mx-auto max-w-7xl h-full py-2 lg:h-(--navbar-h) px-(--section-px) lg:px-(--section-px-lg)">
            
            <!-- Left: App Name & Year -->
            <div class="flex items-center gap-2 text-center sm:text-left">
                <p>
                    <span>© {{ producedYear }} </span>
                    <!-- <span v-if="displayCurrentYear"> - {{ currentYear }} </span> -->
                    <span v-if="showYearRange"> - {{ currentYear }} </span>
                    <span> Meals Searching App. All rights reserved.</span>
                </p>
            </div>

            <!-- Right: Developer Credit or Socials -->
            <div class="text-center lg:text-right">
                <p>
                    Designed and built by
                    <a 
                        href="https://shogo-portfolio-mu.vercel.app/" 
                        target="_blank" class="text-blue-600 hover:underline"
                    >
                        Olorunshogo (Moses) BAMTEFA
                    </a>
                </p>
            </div>

        </div>

    </footer>
</template>

<style lang="css" scoped>
</style>