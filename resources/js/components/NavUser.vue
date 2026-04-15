<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { ChevronsUpDown } from 'lucide-vue-next';
import { computed } from 'vue';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';
import UserInfo from '@/components/UserInfo.vue';
import UserMenuContent from '@/components/UserMenuContent.vue';

const page = usePage();
const user = computed(() => page.props.auth.user);
const { isMobile, state } = useSidebar();
</script>

<template>
    <SidebarMenu>
        <SidebarMenuItem v-if="user">
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <SidebarMenuButton
                        size="lg"
                        class="h-16 rounded-[24px] border border-zinc-50 bg-white shadow-sm hover:bg-zinc-50 hover:shadow-md transition-all duration-300 data-[state=open]:bg-zinc-50"
                        data-test="sidebar-menu-button"
                    >
                        <UserInfo :user="user" :show-email="true" />
                        <div class="ml-2 p-1 bg-zinc-100 rounded-lg">
                            <ChevronsUpDown class="size-3.5 text-zinc-400" />
                        </div>
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    class="w-(--reka-dropdown-menu-trigger-width) min-w-64 rounded-[28px] p-2 shadow-2xl border-zinc-100 bg-white/95 backdrop-blur-xl animate-in slide-in-from-bottom-2 duration-300"
                    :side="
                        isMobile
                            ? 'bottom'
                            : state === 'collapsed'
                              ? 'left'
                              : 'bottom'
                    "
                    align="end"
                    :side-offset="12"
                >
                    <UserMenuContent :user="user" />
                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenuItem>
    </SidebarMenu>
</template>
