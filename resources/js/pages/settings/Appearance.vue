<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AppearanceTabs from '@/components/AppearanceTabs.vue';
import Heading from '@/components/Heading.vue';
import GuestLayout from '@/layouts/GuestLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
</script>

<template>
    <GuestLayout>
        <Head title="Pengaturan Tampilan" />

        <!-- Green Header Section -->
        <div class="bg-[#EAFBF0] py-16 px-8 md:px-20">
            <div class="max-w-4xl mx-auto">
                <h1 class="text-4xl font-black text-zinc-900 tracking-tight">Tampilan Aplikasi</h1>
                <p class="text-zinc-600 font-medium mt-3">Sesuaikan tema dan warna antarmuka NutriFlow sesuai selera Anda.</p>
            </div>
        </div>

        <div class="max-w-4xl mx-auto w-full px-8 py-12">
            <SettingsLayout>
                <div class="space-y-8 bg-white p-8 rounded-[32px] shadow-sm border border-zinc-100">
                    <Heading
                        variant="small"
                        title="Tema & Warna"
                        description="Pilih antara mode terang, gelap, atau ikuti pengaturan sistem."
                    />
                    <AppearanceTabs />
                </div>
            </SettingsLayout>
        </div>
    </GuestLayout>
</template>
