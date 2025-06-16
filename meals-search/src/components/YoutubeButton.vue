
<script setup lang='ts'>
    import { defineProps } from 'vue';
    import { Icon } from '@iconify/vue';
    const props = defineProps<{
        aHref: string | undefined;
        aName: string;
        aIconName: string;
    }>();

</script>

<template>
    <div>
        <a 
            :href="aHref" 
            target="_blank" rel="noopener noreferrer"
            class="flex items-center gap-2 px-3 py-2 text-sm lg:text-base text-white hover:text-slate-200 font-semibold rounded-lg shadow-lg bg-red-600 hover:bg-red-700 cursor-pointer duration-300 ease-in-out transition-all"
        >
            <span>
                <Icon :icon="`mdi:${aIconName}`" class="text-xl" />
            </span>
            <span>{{ aName }}</span>
        </a>
    </div>
</template>

<style lang="css" scoped>

</style>