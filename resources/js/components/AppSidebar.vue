<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { LayoutGrid, Newspaper, Scale, Utensils, LayoutDashboard } from 'lucide-vue-next';
import { computed } from 'vue';
import AppLogo from '@/components/AppLogo.vue';
import NavFooter from '@/components/NavFooter.vue';
import NavMain from '@/components/NavMain.vue';
import NavUser from '@/components/NavUser.vue';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

const page = usePage();

const mainNavItems = computed((): NavItem[] => {
    const items: NavItem[] = [
        {
            title: 'Beranda',
            href: '/',
            icon: LayoutGrid,
        },
        {
            title: 'Kalkulator Gizi',
            href: '/recommendations',
            icon: Scale,
        },
        {
            title: 'Menu Makanan',
            href: '/recipes',
            icon: Utensils,
        },
        {
            title: 'Artikel',
            href: '/articles',
            icon: Newspaper,
        },
    ];

    if (page.props.auth.user?.role === 'admin') {
        items.push({
            title: 'Admin Dashboard',
            href: '/admin/dashboard',
            icon: LayoutDashboard,
        });
    }

    return items;
});

const footerNavItems: NavItem[] = [];
</script>

<template>
    <Sidebar collapsible="icon" variant="inset">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <Link :href="dashboard.url()">
                            <AppLogo />
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
            <NavMain :items="mainNavItems" />
        </SidebarContent>

        <SidebarFooter>
            <NavFooter :items="footerNavItems" />
            <NavUser v-if="$page.props.auth.user" />
        </SidebarFooter>
    </Sidebar>
    <slot />
</template>
