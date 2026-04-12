<script setup lang="ts">
import AppLogoIcon from '@/components/AppLogoIcon.vue';
</script>

<template>
    <div
        class="flex size-8 items-center justify-center rounded-md bg-white text-sidebar-primary-foreground overflow-hidden p-1"
    >
        <AppLogoIcon class="h-full w-auto object-contain" />
    </div>
    <div class="ml-1 grid flex-1 text-left text-sm">
        <span class="mb-0.5 truncate leading-tight font-black uppercase tracking-tighter"
            ><span class="text-[#36d362]">Nutri</span><span class="text-[#ff9d29]">Flow</span></span
        >
    </div>
</template>
