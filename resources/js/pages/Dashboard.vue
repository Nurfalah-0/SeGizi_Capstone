<script setup lang="ts">
import { Head, usePage } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Scale, Flame, Activity, PieChart, TrendingUp, Calendar, ChevronRight } from 'lucide-vue-next';
import type { BreadcrumbItem } from '@/types';

import { router } from '@inertiajs/vue3';

const page = usePage();
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard.url(),
    },
];

const stats = [
    { title: 'Status BMI', value: '22.5', label: 'Normal', icon: Scale, color: 'text-[#36d362]', bg: 'bg-green-50' },
    { title: 'Target Kalori', value: '2,100', label: 'kkal/hari', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50' },
    { title: 'Aktivitas', value: 'Aktif', label: 'Moderate', icon: Activity, color: 'text-blue-500', bg: 'bg-blue-50' },
];
</script>

<template>
    <Head title="Dashboard - NutriFlow" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex flex-1 flex-col gap-8 p-8 bg-zinc-50/50 min-h-screen">
            <!-- Welcome Header -->
            <div class="space-y-1">
                <h1 class="text-4xl font-black tracking-tight text-zinc-900 leading-tight">
                    Halo, {{ page.props.auth.user?.name?.split(' ')[0] }}! 👋
                </h1>
                <p class="text-zinc-500 font-medium italic">Siap untuk memulai gaya hidup sehat hari ini?</p>
            </div>

            <!-- Stats Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card v-for="stat in stats" :key="stat.title" class="border-none shadow-sm rounded-[24px] overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                    <CardContent class="p-6">
                        <div class="flex items-center justify-between mb-4">
                            <div :class="['p-3 rounded-2xl', stat.bg]">
                                <component :is="stat.icon" :class="['w-6 h-6', stat.color]" />
                            </div>
                            <span class="text-[10px] font-black uppercase tracking-widest text-zinc-400">Aktif</span>
                        </div>
                        <div class="space-y-1">
                            <h3 class="text-sm font-bold text-zinc-500">{{ stat.title }}</h3>
                            <div class="flex items-baseline gap-2">
                                <span class="text-3xl font-black text-zinc-900">{{ stat.value }}</span>
                                <span :class="['text-xs font-black px-2 py-0.5 rounded-full uppercase', stat.bg, stat.color]">{{ stat.label }}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Progress Chart Placeholder -->
                <Card class="lg:col-span-2 border-none shadow-sm rounded-[32px] overflow-hidden bg-white">
                    <CardHeader class="flex flex-row items-center justify-between p-8 pb-2">
                        <div>
                            <CardTitle class="text-xl font-black">Progress Berat Badan</CardTitle>
                            <CardDescription class="text-sm font-medium">Statistik 30 hari terakhir</CardDescription>
                        </div>
                        <div class="flex gap-2">
                            <div class="p-2.5 bg-zinc-50 rounded-xl hover:bg-zinc-100 transition-colors cursor-pointer border border-zinc-100">
                                <Calendar class="w-5 h-5 text-zinc-500" />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent class="h-[300px] flex items-center justify-center bg-zinc-50/50 m-8 mt-4 rounded-[32px] border-2 border-dashed border-zinc-200">
                        <div class="flex flex-col items-center gap-4 text-zinc-400 text-center px-6">
                            <div class="p-4 bg-zinc-100 rounded-full">
                                <TrendingUp class="w-8 h-8 opacity-20" />
                            </div>
                            <div>
                                <p class="text-lg font-black opacity-40">Belum Ada Data Statistik</p>
                                <p class="text-sm font-medium opacity-30 mt-1">Lakukan penimbangan berkala untuk <br> melihat progress kesehatanmu.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- Shortcuts / Tips -->
                <div class="space-y-6">
                    <Card class="border-none shadow-sm rounded-[32px] overflow-hidden bg-zinc-900 text-white hover:bg-zinc-800 transition-colors group cursor-pointer" @click="router.visit('/recipes')">
                        <CardContent class="p-8 space-y-6">
                            <div class="flex items-center gap-3">
                                <div class="p-2.5 bg-white/10 rounded-xl text-[#36d362]">
                                    <Utensils class="w-6 h-6" />
                                </div>
                                <h3 class="font-black text-lg">Menu Sehat</h3>
                            </div>
                            <p class="text-zinc-400 text-[14px] leading-relaxed font-medium">
                                Sempurnakan asupan harianmu dengan rekomendasi menu yang kami sediakan khusus untukmu.
                            </p>
                            <div class="flex items-center justify-between group py-3 px-1 border-t border-white/10 mt-4 hover:text-[#36d362] transition-colors">
                                <span class="font-bold text-sm">Lihat Menu Diet</span>
                                <ChevronRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </CardContent>
                    </Card>

                    <div @click="router.visit('/calorie-calculator')" class="p-8 rounded-[32px] bg-[#36d362] text-white relative overflow-hidden group cursor-pointer shadow-lg shadow-green-100/50 hover:bg-green-500 transition-all duration-300">
                        <Flame class="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 group-hover:scale-110 transition-transform duration-500" />
                        <div class="relative z-10 space-y-4">
                            <h4 class="font-black text-xl">Cek Kalorimu Sekarang!</h4>
                            <p class="text-sm font-medium text-white/80 leading-relaxed">
                                Pastikan asupan energimu sesuai dengan aktivitas fisik yang kamu lakukan hari ini.
                            </p>
                            <div class="inline-flex items-center gap-2 bg-white text-[#36d362] px-6 py-2.5 rounded-2xl text-sm font-black shadow-sm group-hover:shadow-lg transition-all">
                                Buka Kalkulator
                                <ChevronRight class="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
