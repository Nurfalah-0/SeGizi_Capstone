<script setup lang="ts">
import { computed } from 'vue';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/composables/useInitials';
import type { User } from '@/types';

type Props = {
    user: User;
    showEmail?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
    showEmail: true, // Default to true for better look in premium sidebar
});

const { getInitials } = useInitials();

const showAvatar = computed(
    () => props.user?.avatar && props.user?.avatar !== '',
);
</script>

<template>
    <template v-if="user">
        <Avatar class="h-10 w-10 overflow-hidden rounded-xl shadow-sm border border-zinc-100">
            <AvatarImage v-if="showAvatar" :src="user.avatar!" :alt="user.name" />
            <AvatarFallback class="rounded-xl bg-[#36d362] text-white font-black text-xs">
                {{ getInitials(user.name) }}
            </AvatarFallback>
        </Avatar>

        <div class="grid flex-1 text-left leading-tight ml-3">
            <span class="truncate font-black text-sm text-zinc-900">{{ user.name }}</span>
            <span v-if="showEmail" class="truncate text-[11px] font-bold text-zinc-400 tracking-tighter">{{
                user.email
            }}</span>
        </div>
    </template>
</template>
