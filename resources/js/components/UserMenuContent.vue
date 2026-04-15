<script setup lang="ts">
import { Link, router } from '@inertiajs/vue3';
import { LogOut, Settings } from 'lucide-vue-next';
import {
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import UserInfo from '@/components/UserInfo.vue';
import { logout } from '@/routes';
import { edit } from '@/routes/profile';
import type { User } from '@/types';

type Props = {
    user: User;
};

const handleLogout = () => {
    router.flushAll();
};

defineProps<Props>();
</script>

<template>
    <DropdownMenuLabel class="p-0 font-normal">
        <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <UserInfo :user="user" :show-email="true" />
        </div>
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
        <DropdownMenuItem :as-child="true" class="p-3 focus:bg-zinc-50 rounded-xl transition-colors">
            <Link class="flex items-center w-full cursor-pointer text-zinc-900 font-bold" :href="edit()" prefetch>
                <Settings class="mr-3 h-4 w-4 text-zinc-400 group-hover:text-zinc-900" />
                Settings
            </Link>
        </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator class="bg-zinc-50" />
    <DropdownMenuItem :as-child="true" class="p-3 focus:bg-red-50 rounded-xl transition-colors">
        <Link
            class="flex items-center w-full cursor-pointer text-red-500 font-bold"
            :href="logout()"
            @click="handleLogout"
            as="button"
            data-test="logout-button"
        >
            <LogOut class="mr-3 h-4 w-4" />
            Log out
        </Link>
    </DropdownMenuItem>
</template>
