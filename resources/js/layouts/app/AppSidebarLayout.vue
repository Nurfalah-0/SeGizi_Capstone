<script setup lang="ts">
import AppContent from '@/components/AppContent.vue';
import AppShell from '@/components/AppShell.vue';
import AppSidebar from '@/components/AppSidebar.vue';
import AppSidebarHeader from '@/components/AppSidebarHeader.vue';
import { globalLoading } from '@/stores/loading';
import type { BreadcrumbItem } from '@/types';

type Props = {
    breadcrumbs?: BreadcrumbItem[];
};

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});
</script>

<template>
    <AppShell variant="sidebar">
        <!-- Global Loading Bar -->
        <div v-if="globalLoading" 
             style="position: fixed; top: 0; left: 0; height: 8px; width: 0; background: #36d362; z-index: 10000000; box-shadow: 0 0 20px rgba(54, 211, 98, 1);"
             class="global-animate-progress">
        </div>
        <AppSidebar />
        <AppContent variant="sidebar" class="overflow-x-hidden">
            <AppSidebarHeader :breadcrumbs="breadcrumbs" />
            <slot />
        </AppContent>
    </AppShell>
</template>
 
<style>
@keyframes global-progress {
  0% { width: 0; }
  100% { width: 100%; }
}
.global-animate-progress {
  animation: global-progress 1s ease-in-out forwards;
}
</style>
