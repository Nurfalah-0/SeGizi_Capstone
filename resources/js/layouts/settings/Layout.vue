<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { User, Lock, ShieldCheck, Palette } from 'lucide-vue-next';
import Heading from '@/components/Heading.vue';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCurrentUrl } from '@/composables/useCurrentUrl';
import { toUrl } from '@/lib/utils';
import { edit as editAppearance } from '@/routes/appearance';
import { edit as editProfile } from '@/routes/profile';
import { show } from '@/routes/two-factor';
import { edit as editPassword } from '@/routes/settings/password';
import type { NavItem } from '@/types';

const sidebarNavItems: (NavItem & { icon: any })[] = [
    {
        title: 'Profil',
        href: editProfile(),
        icon: User,
    },
    {
        title: 'Kata Sandi',
        href: editPassword(),
        icon: Lock,
    },
    {
        title: 'Keamanan (2FA)',
        href: show(),
        icon: ShieldCheck,
    },
    {
        title: 'Tampilan',
        href: editAppearance(),
        icon: Palette,
    },
];

const { isCurrentOrParentUrl } = useCurrentUrl();
</script>

<template>
    <div class="px-0">
        <Heading
            title="Menu Pengaturan"
            description="Navigasikan preferensi akun Anda di sini."
            class="mb-8"
        />

        <div class="flex flex-col lg:flex-row lg:space-x-12">
            <aside class="w-full lg:w-72 mb-10 lg:mb-0">
                <nav
                    class="flex flex-col space-y-3"
                    aria-label="Settings"
                >
                    <Link
                        v-for="item in sidebarNavItems"
                        :key="toUrl(item.href)"
                        :href="item.href"
                        :class="[
                            'flex items-center gap-4 w-full rounded-2xl px-6 py-5 transition-all duration-300 border border-transparent shadow-sm cursor-pointer group',
                            $page.url.split('?')[0] === toUrl(item.href)
                                ? 'bg-[#36d362] text-white font-black shadow-lg shadow-green-100' 
                                : 'bg-white text-zinc-700 font-bold hover:bg-green-50 hover:text-[#36d362] hover:border-green-100',
                        ]"
                    >
                        <component 
                            :is="item.icon" 
                            class="h-5 w-5 transition-colors" 
                            :class="$page.url.split('?')[0] === toUrl(item.href) ? 'text-white' : 'text-zinc-400 group-hover:text-[#36d362]'" 
                        />
                        <span class="text-[16px]">{{ item.title }}</span>
                    </Link>
                </nav>
            </aside>

            <Separator class="my-6 lg:hidden" />

            <div class="flex-1 md:max-w-2xl">
                <section class="space-y-12">
                    <slot />
                </section>
            </div>
        </div>
    </div>
</template>
