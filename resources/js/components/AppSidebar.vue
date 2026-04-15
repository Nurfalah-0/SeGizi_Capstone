<script setup lang="ts">
import NavMain from '@/components/NavMain.vue';
import NavUser from '@/components/NavUser.vue';
import { 
    Sidebar, 
    SidebarContent, 
    SidebarFooter, 
    SidebarHeader, 
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem 
} from '@/components/ui/sidebar';
import { usePage, Link } from '@inertiajs/vue3';
import { 
    BookOpen, 
    Folder, 
    LayoutGrid, 
    Utensils, 
    Calculator, 
    Newspaper,
    LayoutDashboard,
    Search,
    Heart
} from 'lucide-vue-next';
import AppLogo from '@/components/AppLogo.vue';
import { computed } from 'vue';

interface NavItem {
    title: string;
    href: string;
    icon: any;
    isActive?: boolean;
}

interface GroupedNavItem {
    title: string;
    items: NavItem[];
}

const page = usePage();

const mainNavItems = computed(() => {
    const items: NavItem[] = [
        {
            title: 'Beranda',
            href: '/dashboard',
            icon: LayoutGrid,
        },
        {
            title: 'Kalkulator Gizi',
            href: '/calorie-calculator',
            icon: Calculator,
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
            href: '/dashboardadmin',
            icon: LayoutDashboard,
        });
    }

    return items;
});

const footerNavItems: NavItem[] = [
    {
        title: 'Bantuan',
        href: '/contact',
        icon: BookOpen,
    },
];
</script>

<template>
    <Sidebar 
        collapsible="icon" 
        class="border-r border-zinc-100 bg-white"
        style="--sidebar-background: 255 255 255; --sidebar-foreground: 24 24 27; --sidebar-border: 244 244 245; --sidebar-ring: 54 211 98;"
    >
        <SidebarHeader class="p-4">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child class="hover:bg-transparent px-2">
                        <Link :href="'/'" class="flex items-center gap-1 group">
                            <AppLogo />
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent class="px-4 gap-8">
            <div class="space-y-6">
                <!-- Group Title -->
                <div class="px-4">
                    <p class="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-4">Aplikasi</p>
                    <nav class="space-y-1">
                        <Link 
                            v-for="item in mainNavItems" 
                            :key="item.href"
                            :href="item.href"
                            :class="[
                                'flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group',
                                $page.url === item.href 
                                    ? 'bg-zinc-900 text-white shadow-lg' 
                                    : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900'
                            ]"
                        >
                            <component 
                                :is="item.icon" 
                                :class="[
                                    'size-5 transition-all duration-300',
                                    $page.url === item.href ? 'text-[#36d362] stroke-[2.5px]' : 'text-zinc-400 group-hover:text-zinc-900 stroke-[2px]'
                                ]" 
                            />
                            <span :class="['text-sm tracking-tight transition-colors', $page.url === item.href ? 'font-bold' : 'font-medium underline-offset-4']">
                                {{ item.title }}
                            </span>
                        </Link>
                    </nav>
                </div>

                <!-- Secondary Group -->
                <div class="px-4">
                    <p class="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-4">Dukungan</p>
                    <nav class="space-y-1">
                        <Link 
                            v-for="item in footerNavItems" 
                            :key="item.href"
                            :href="item.href"
                            class="flex items-center gap-4 px-4 py-3 rounded-2xl text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-all duration-300 group"
                        >
                            <component :is="item.icon" class="size-5 text-zinc-400 group-hover:text-zinc-900 stroke-[2px]" />
                            <span class="text-sm tracking-tight font-medium transition-colors">{{ item.title }}</span>
                        </Link>
                    </nav>
                </div>
            </div>
        </SidebarContent>

        <SidebarFooter class="p-6 border-t border-zinc-50">
            <NavUser />
        </SidebarFooter>
    </Sidebar>
</template>

<style scoped>
/* Smooth transitions */
nav a {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
