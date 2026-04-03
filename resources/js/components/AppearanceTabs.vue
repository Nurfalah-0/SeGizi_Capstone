<script setup lang="ts">
import { Monitor, Moon, Sun } from 'lucide-vue-next';
import { useAppearance } from '@/composables/useAppearance';

const { appearance, updateAppearance } = useAppearance();

const tabs = [
    { value: 'light', Icon: Sun, label: 'Mode Terang' },
    { value: 'dark', Icon: Moon, label: 'Mode Gelap' },
    { value: 'system', Icon: Monitor, label: 'Ikuti Sistem' },
] as const;
</script>

<template>
    <div
        class="inline-flex gap-2 rounded-[20px] bg-zinc-100 p-2 shadow-inner"
    >
        <button
            v-for="{ value, Icon, label } in tabs"
            :key="value"
            @click="updateAppearance(value)"
            :class="[
                'flex items-center rounded-[14px] px-6 py-3 transition-all duration-300 font-bold text-sm',
                appearance === value
                    ? 'bg-white shadow-lg text-[#36d362]'
                    : 'text-zinc-500 hover:bg-zinc-200/60 hover:text-zinc-800',
            ]"
        >
            <component :is="Icon" class="h-4 w-4 mr-2" />
            <span>{{ label }}</span>
        </button>
    </div>
</template>
