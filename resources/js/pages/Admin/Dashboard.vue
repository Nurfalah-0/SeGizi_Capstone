<script setup lang="ts">
import { Head, router } from '@inertiajs/vue3';
import { LayoutDashboard, FileText, Utensils, Star, StarOff, CheckCircle2 } from 'lucide-vue-next';
import AppLayout from '@/layouts/AppLayout.vue';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const props = defineProps<{
    articles: Array<any>;
    recipes: Array<any>;
}>();

const toggleArticlePopular = (id: number) => {
    router.patch(route('admin.articles.toggle-popular', id), {}, {
        preserveScroll: true,
    });
};

const toggleRecipePopular = (id: number) => {
    router.patch(route('admin.recipes.toggle-popular', id), {}, {
        preserveScroll: true,
    });
};
</script>

<template>
    <Head title="Admin Dashboard - NutriFlow" />

    <AppLayout>
        <template #header>
            <h2 class="text-xl font-black text-zinc-900 flex items-center gap-2">
                <LayoutDashboard class="w-5 h-5 text-[#36d362]" />
                Panel Pengelola NutriFlow
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8">
                <!-- Welcome Section -->
                <div class="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl">
                    <div class="relative z-10 space-y-2">
                        <h1 class="text-3xl font-black">Halo, Admin! 👋</h1>
                        <p class="text-zinc-400 font-medium">Kelola konten populer NutriFlow untuk ditampilkan di halaman utama.</p>
                    </div>
                    <div class="absolute top-0 right-0 w-64 h-64 bg-[#36d362]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Articles Management -->
                    <Card class="border-none shadow-sm rounded-[32px] overflow-hidden">
                        <CardHeader class="bg-zinc-50/50 pb-8">
                            <div class="flex items-center justify-between">
                                <div class="space-y-1">
                                    <div class="flex items-center gap-2">
                                        <FileText class="w-5 h-5 text-blue-500" />
                                        <CardTitle class="text-xl font-black">Kelola Artikel</CardTitle>
                                    </div>
                                    <CardDescription>Tandai artikel yang menurut Anda layak menjadi populer.</CardDescription>
                                </div>
                                <Badge variant="secondary" class="bg-blue-100 text-blue-600 font-bold px-3 py-1">
                                    {{ articles.length }} Total
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent class="p-0">
                            <div class="divide-y divide-zinc-100">
                                <div v-for="article in articles" :key="article.id" class="p-6 flex items-center justify-between hover:bg-zinc-50/50 transition-colors">
                                    <div class="flex items-center gap-4">
                                        <div class="w-12 h-12 rounded-2xl overflow-hidden shadow-sm">
                                            <img :src="article.image" class="w-full h-full object-cover">
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-zinc-900 line-clamp-1">{{ article.title }}</h4>
                                            <p class="text-[12px] text-zinc-500 font-medium">{{ article.category }}</p>
                                        </div>
                                    </div>
                                    <Button 
                                        @click="toggleArticlePopular(article.id)"
                                        :variant="article.is_popular ? 'default' : 'outline'"
                                        class="rounded-full px-4 h-9 text-xs font-black transition-all"
                                        :class="article.is_popular ? 'bg-[#36d362] hover:bg-green-600 text-white shadow-lg shadow-green-500/20' : 'text-zinc-500'"
                                    >
                                        <Star v-if="article.is_popular" class="w-3.5 h-3.5 mr-2 fill-current" />
                                        <StarOff v-else class="w-3.5 h-3.5 mr-2" />
                                        {{ article.is_popular ? 'Populer' : 'Biasa' }}
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <!-- Recipes Management -->
                    <Card class="border-none shadow-sm rounded-[32px] overflow-hidden">
                        <CardHeader class="bg-zinc-50/50 pb-8">
                            <div class="flex items-center justify-between">
                                <div class="space-y-1">
                                    <div class="flex items-center gap-2">
                                        <Utensils class="w-5 h-5 text-[#ff9d29]" />
                                        <CardTitle class="text-xl font-black">Kelola Menu</CardTitle>
                                    </div>
                                    <CardDescription>Pilih resep terbaik untuk ditampilkan di sorotan khusus.</CardDescription>
                                </div>
                                <Badge variant="secondary" class="bg-orange-100 text-[#ff9d29] font-bold px-3 py-1">
                                    {{ recipes.length }} Total
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent class="p-0">
                            <div class="divide-y divide-zinc-100">
                                <div v-for="recipe in recipes" :key="recipe.id" class="p-6 flex items-center justify-between hover:bg-zinc-50/50 transition-colors">
                                    <div class="flex items-center gap-4">
                                        <div class="w-12 h-12 rounded-2xl overflow-hidden shadow-sm">
                                            <img :src="recipe.image" class="w-full h-full object-cover">
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-zinc-900 line-clamp-1">{{ recipe.title }}</h4>
                                            <div class="flex items-center gap-2 mt-0.5">
                                                <span class="text-[11px] text-[#36d362] font-black uppercase tracking-wider">{{ recipe.calories }} Kkal</span>
                                                <span class="w-1 h-1 rounded-full bg-zinc-200"></span>
                                                <span class="text-[11px] text-zinc-500 font-medium">{{ recipe.category }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button 
                                        @click="toggleRecipePopular(recipe.id)"
                                        :variant="recipe.is_popular ? 'default' : 'outline'"
                                        class="rounded-full px-4 h-9 text-xs font-black transition-all"
                                        :class="recipe.is_popular ? 'bg-[#ff9d29] hover:bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'text-zinc-500'"
                                    >
                                        <Star v-if="recipe.is_popular" class="w-3.5 h-3.5 mr-2 fill-current" />
                                        <StarOff v-else class="w-3.5 h-3.5 mr-2" />
                                        {{ recipe.is_popular ? 'Populer' : 'Biasa' }}
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <!-- Footer Note -->
                <div class="text-center p-8">
                    <div class="inline-flex items-center gap-2 text-zinc-400 text-sm font-medium">
                        <CheckCircle2 class="w-4 h-4 text-[#36d362]" />
                        Semua perubahan akan segera terlihat oleh pengguna di halaman beranda.
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
