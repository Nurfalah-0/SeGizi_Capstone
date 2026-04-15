<script setup lang="ts">
import { Head, usePage, router } from '@inertiajs/vue3';
import { 
    Scale, 
    Flame, 
    Activity, 
    TrendingUp, 
    Calendar, 
    ChevronRight, 
    Utensils, 
    Target,
    Zap,
    Trophy
} from 'lucide-vue-next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const page = usePage();
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard.url(),
    },
];

const stats = [
    { 
        title: 'Status BMI', 
        value: '22.5', 
        label: 'Normal', 
        icon: Scale, 
        color: 'text-green-600', 
        bg: 'bg-green-50',
        desc: 'Berat badan ideal'
    },
    { 
        title: 'Target Kalori', 
        value: '2,100', 
        label: 'kkal/hari', 
        icon: Flame, 
        color: 'text-orange-600', 
        bg: 'bg-orange-50',
        desc: 'Asupan harian optimal'
    },
    { 
        title: 'Aktivitas', 
        value: 'Aktif', 
        label: 'Moderate', 
        icon: Activity, 
        color: 'text-blue-600', 
        bg: 'bg-blue-50',
        desc: 'Aktivitas fisik rutin'
    },
];
</script>

<template>
    <Head title="Dashboard - NutriFlow" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex flex-1 flex-col gap-10 p-8 bg-[#fdfdfd] min-h-screen">
            <!-- Welcome Header -->
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div class="space-y-2">
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                        <Zap class="w-3 h-3 fill-green-600" />
                        Selamat Datang Kembali
                    </div>
                    <h1 class="text-4xl font-black tracking-tight text-zinc-900">
                        Halo, {{ page.props.auth.user?.name?.split(' ')[0] }}! 👋
                    </h1>
                    <p class="text-zinc-500 font-medium">Lanjutkan progres gaya hidup sehatmu hari ini.</p>
                </div>
                
                <div class="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-zinc-100">
                    <div class="flex flex-col items-end px-4 border-r border-zinc-100">
                        <span class="text-[10px] font-black text-zinc-400 uppercase">Target Hari Ini</span>
                        <span class="text-sm font-bold text-zinc-900">75% Tercapai</span>
                    </div>
                    <div class="p-2 bg-zinc-900 rounded-xl">
                        <Trophy class="w-5 h-5 text-[#36d362]" />
                    </div>
                </div>
            </div>

            <!-- Stats Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card v-for="stat in stats" :key="stat.title" class="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[32px] overflow-hidden hover:translate-y-[-4px] transition-all duration-300 bg-white group">
                    <CardContent class="p-8">
                        <div class="flex items-start justify-between mb-8">
                            <div :class="['p-4 rounded-[24px]', stat.bg]">
                                <component :is="stat.icon" :class="['w-7 h-7', stat.color]" />
                            </div>
                            <div class="flex flex-col items-end">
                                <span class="text-[10px] font-black uppercase tracking-widest text-zinc-300 group-hover:text-zinc-500 transition-colors">Real-time</span>
                                <div class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <h3 class="text-sm font-bold text-zinc-400">{{ stat.title }}</h3>
                            <div class="flex items-baseline gap-2">
                                <span class="text-4xl font-black text-zinc-900 tracking-tight">{{ stat.value }}</span>
                                <span :class="['text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter', stat.bg, stat.color]">{{ stat.label }}</span>
                            </div>
                            <p class="text-[11px] font-medium text-zinc-400 pt-2 border-t border-zinc-50">{{ stat.desc }}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <!-- Progress Chart Placeholder -->
                <Card class="lg:col-span-2 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[40px] overflow-hidden bg-white">
                    <CardHeader class="flex flex-row items-center justify-between p-10 pb-4">
                        <div class="space-y-1">
                            <CardTitle class="text-2xl font-black text-zinc-900">Analisis Progress</CardTitle>
                            <CardDescription class="text-sm font-medium">Statistik perubahan berat badan 30 hari terakhir</CardDescription>
                        </div>
                        <div class="flex gap-2">
                            <div class="p-3 bg-zinc-50 rounded-2xl hover:bg-zinc-100 transition-colors cursor-pointer border border-zinc-100 group">
                                <Calendar class="w-6 h-6 text-zinc-400 group-hover:text-zinc-900" />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent class="p-10 pt-0">
                        <div class="h-[320px] flex items-center justify-center bg-zinc-50/50 rounded-[32px] border border-dashed border-zinc-200 relative group overflow-hidden">
                            <div class="absolute inset-0 bg-gradient-to-tr from-green-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div class="flex flex-col items-center gap-6 text-zinc-400 text-center px-10 relative z-10">
                                <div class="p-5 bg-white shadow-sm rounded-3xl group-hover:scale-110 transition-transform duration-500">
                                    <TrendingUp class="w-10 h-10 text-zinc-200 group-hover:text-[#36d362] transition-colors" />
                                </div>
                                <div class="space-y-2">
                                    <p class="text-xl font-black text-zinc-400 group-hover:text-zinc-900 transition-colors tracking-tight">Menunggu Data Pertama</p>
                                    <p class="text-[13px] font-medium text-zinc-400 leading-relaxed mx-auto max-w-[280px]">Catat berat badanmu secara rutin untuk melihat visualisasi kesehatanmu di sini.</p>
                                </div>
                                <button class="mt-2 text-sm font-black text-[#36d362] hover:underline decoration-2 underline-offset-4">Mulai Pencatatan</button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- Shortcuts / Tips -->
                <div class="space-y-8 flex flex-col justify-center">
                    <Card class="border-none shadow-xl shadow-zinc-100 rounded-[40px] overflow-hidden bg-zinc-900 text-white hover:scale-[1.02] transition-all duration-500 group cursor-pointer" @click="router.visit('/recipes')">
                        <CardContent class="p-10 space-y-8">
                            <div class="flex items-center gap-4">
                                <div class="p-3.5 bg-white/10 rounded-2xl text-[#36d362] group-hover:bg-[#36d362] group-hover:text-white transition-all duration-500">
                                    <Utensils class="w-7 h-7" />
                                </div>
                                <h3 class="font-black text-xl">Rekomendasi Menu</h3>
                            </div>
                            <p class="text-zinc-400 text-[15px] leading-relaxed font-medium">
                                Cari tahu menu makanan apa yang paling cocok untuk target fisik kamu hari ini.
                            </p>
                            <div class="flex items-center justify-between group pt-6 border-t border-white/5 mt-4 text-[#36d362]">
                                <span class="font-black text-xs uppercase tracking-widest">Buka Katalog Resep</span>
                                <div class="p-2 bg-white/5 rounded-full group-hover:bg-[#36d362] group-hover:text-white transition-all">
                                    <ChevronRight class="w-4 h-4" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div @click="router.visit('/calorie-calculator')" class="p-10 rounded-[40px] bg-[#36d362] text-zinc-900 relative overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 min-h-[220px] flex flex-col justify-end">
                        <Target class="absolute -right-6 -top-6 w-48 h-48 text-black/5 group-hover:scale-110 transition-transform duration-700" />
                        <div class="relative z-10 space-y-4">
                            <h4 class="font-black text-2xl tracking-tight leading-tight">Optimalkan <br> Nutrisimu</h4>
                            <p class="text-sm font-bold text-zinc-800/60 leading-relaxed max-w-[200px]">
                                Cek kebutuhan kalori harianmu dengan kalkulator presisi.
                            </p>
                            <div class="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-3 rounded-2xl text-xs font-black shadow-lg hover:shadow-xl transition-all active:scale-95">
                                Mulai Sekarang
                                <ChevronRight class="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
