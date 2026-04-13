<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { ArrowRight, Utensils } from 'lucide-vue-next';
import { ref, computed } from 'vue';
import GuestLayout from '@/layouts/GuestLayout.vue';
import carbonaraImage from '../../images/carbonara.jpg';
import hidrasiImage from '../../images/hidrasi.jpg';
import laukImage from '../../images/lauk.png';
import nutrisiImage from '../../images/nutrisi tulang.jpg';
import tidurImage from '../../images/tidur.jpg';

// Form logic for Personalization
const weight = ref<string>('');
const height = ref<string>('');
const age = ref<string>('');
const gender = ref<string>('male');
const goal = ref<string>('maintain');

const handleGetRecommendation = () => {
    if (weight.value && height.value && age.value) {
        window.location.href = `/recommendations?weight=${weight.value}&height=${height.value}&age=${age.value}&gender=${gender.value}&goal=${goal.value}`;
    } else {
        alert('Tolong isi data diri kamu (Berat, Tinggi, Usia) untuk hasil yang akurat.');
    }
};

// Filters
const activeRecipeFilter = ref('Semua');
const activeArticleFilter = ref('Semua');

// Data
const recipes = [
    {
        id: 1,
        title: 'Pasta Carbonara Sehat',
        category: 'Tinggi Protein',
        calories: 420,
        protein: 35,
        image: carbonaraImage,
        description: 'Nikmati pasta lezat yang telah dimodifikasi agar kaya protein dan lebih sehat untuk diet Anda.'
    },
    {
        id: 2,
        title: 'Nasi Campur Sayur',
        category: 'Rendah Kalori',
        calories: 310,
        protein: 28,
        image: laukImage,
        description: 'Kombinasi nasi dan beraneka lauk pauk bergizi seimbang untuk hidangan keluarga.'
    },
    {
        id: 3,
        title: 'Jus Detoks Hidrasi',
        category: 'Tinggi Serat',
        calories: 120,
        protein: 2,
        image: hidrasiImage,
        description: 'Minuman pelepas dahaga yang kaya serat dan baik untuk melancarkan pencernaan harian.'
    }
];

const articles = [
    {
        id: 1,
        title: '9 Tips Pola Hidup Sehat untuk Pemula',
        category: 'Gaya Hidup',
        description: 'Mulai perjalanan sehatmu dari hal-hal kecil seperti manajemen pola tidur dan hidrasi yang cukup setiap harinya.',
        image: hidrasiImage,
    },
    {
        id: 2,
        title: 'Tidur Berkualitas',
        category: 'Mitos & Fakta',
        description: 'Mengungkap misteri tentang berapa lama waktu ideal yang diperlukan untuk pemulihan otot dan sel tubuh.',
        image: tidurImage,
    },
    {
        id: 3,
        title: 'Rahasia Nutrisi Tulang Kuat',
        category: 'Nutrisi & Gizi',
        description: 'Makanan super apa saja yang wajib kamu konsumsi agar tulangmu kuat dan bebas osteoporosis di masa tua?',
        image: nutrisiImage,
    }
];

// Computeds
const filteredRecipes = computed(() => {
    return recipes.filter(r => {
        if (activeRecipeFilter.value === 'Semua') return true;
        return r.category === activeRecipeFilter.value;
    }).slice(0, 3);
});

const filteredArticles = computed(() => {
    return articles.filter(a => {
        if (activeArticleFilter.value === 'Semua') return true;
        
        let filterCat = activeArticleFilter.value;
        if (filterCat === 'Nutrisi') filterCat = 'Nutrisi & Gizi';
        
        return a.category === filterCat;
    });
});
</script>

<template>
    <Head title="Beranda - Resep Sehat & Kalkulator Gizi" />

    <GuestLayout>
        <!-- Hero Section -->
        <section class="bg-gradient-to-b from-[#f0fff4] to-white py-24 px-8 md:px-20 relative overflow-hidden min-h-[90vh] flex items-center">
            <div class="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
                <!-- Text & Form Area -->
                <div class="lg:w-[55%] space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
                    <div class="space-y-6">
                        <span class="inline-block px-4 py-1.5 bg-[#36d362]/10 text-[#36d362] rounded-full text-[11px] font-black uppercase tracking-widest">Mulai Perjalananmu</span>
                        <h1 class="text-4xl md:text-[56px] font-black text-[#111] leading-[1.1] tracking-tight">
                            Atur pola makan <br> 
                            sesuai <span class="text-[#36d362]">kebutuhan tubuhmu</span>
                        </h1>
                        <p class="text-zinc-500 font-medium text-[16px] max-w-[500px] leading-relaxed">
                            Beri tahu kami tujuanmu, dan sistem kami akan merancang rencana asupan gizi serta rekomendasi hidangan hanya untukmu. Gratis, tanpa perlu daftar di awal!
                        </p>
                    </div>
                    
                    <!-- Personalization Form Board -->
                    <div class="bg-white p-8 rounded-[32px] shadow-2xl shadow-green-100/50 max-w-xl relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-1.5 h-full bg-[#36d362]"></div>
                        <h3 class="text-xl font-black text-zinc-900 mb-6 flex items-center gap-3">
                            <Utensils class="w-5 h-5 text-[#36d362]" />
                            Beri Tahu Preferensi Dietmu
                        </h3>
                        
                        <div class="space-y-5">
                            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div class="space-y-2">
                                    <label class="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Berat (kg)</label>
                                    <input v-model="weight" type="number" placeholder="Misal: 70" class="w-full bg-zinc-50 border-none rounded-xl px-4 py-3.5 text-sm font-bold text-zinc-900 focus:ring-2 focus:ring-[#36d362]/30 transition-all placeholder:text-zinc-300">
                                </div>
                                <div class="space-y-2">
                                    <label class="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Tinggi (cm)</label>
                                    <input v-model="height" type="number" placeholder="Misal: 170" class="w-full bg-zinc-50 border-none rounded-xl px-4 py-3.5 text-sm font-bold text-zinc-900 focus:ring-2 focus:ring-[#36d362]/30 transition-all placeholder:text-zinc-300">
                                </div>
                                <div class="space-y-2">
                                    <label class="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Usia</label>
                                    <input v-model="age" type="number" placeholder="Misal: 25" class="w-full bg-zinc-50 border-none rounded-xl px-4 py-3.5 text-sm font-bold text-zinc-900 focus:ring-2 focus:ring-[#36d362]/30 transition-all placeholder:text-zinc-300">
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <label class="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Gender</label>
                                    <div class="flex bg-zinc-50 rounded-xl p-1">
                                        <button @click="gender = 'male'" :class="gender === 'male' ? 'bg-white shadow-sm text-blue-600' : 'text-zinc-400 hover:text-zinc-600'" class="flex-1 py-2.5 text-xs font-black rounded-lg transition-all">Pria</button>
                                        <button @click="gender = 'female'" :class="gender === 'female' ? 'bg-white shadow-sm text-pink-500' : 'text-zinc-400 hover:text-zinc-600'" class="flex-1 py-2.5 text-xs font-black rounded-lg transition-all">Wanita</button>
                                    </div>
                                </div>
                                <div class="space-y-2">
                                    <label class="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Tujuan Diet</label>
                                    <select v-model="goal" class="w-full bg-zinc-50 border-none rounded-xl px-4 py-3 text-sm font-bold text-zinc-900 focus:ring-2 focus:ring-[#36d362]/30 transition-all cursor-pointer h-[42px]">
                                        <option value="lose">Menurunkan Berat</option>
                                        <option value="maintain">Menjaga Berat</option>
                                        <option value="gain">Menaikkan Mass</option>
                                    </select>
                                </div>
                            </div>
                            
                            <button @click="handleGetRecommendation" class="w-full mt-4 flex items-center justify-center gap-2 bg-[#36d362] hover:bg-green-600 text-white rounded-xl py-4 font-black transition-all hover:shadow-xl hover:shadow-green-500/20 active:scale-[0.98]">
                                Hitung BMI & Kalori Saya
                                <ArrowRight class="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Image Area -->
                <div class="lg:w-[45%] flex justify-center animate-in fade-in slide-in-from-right-8 duration-1000 hidden md:flex">
                    <div class="relative w-full max-w-[600px]">
                        <img 
                            :src="laukImage" 
                            alt="NutriFlow Healthy Food Illustration" 
                            class="w-full h-auto drop-shadow-[0_20px_50px_rgba(54,211,98,0.2)]"
                        >
                        <!-- Floating elements for added premium feel -->
                        <div class="absolute -top-10 -right-10 w-24 h-24 bg-[#ff9d29]/10 rounded-full blur-2xl"></div>
                        <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-[#36d362]/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
            
            <!-- Decor Elements -->
            <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-[#36d362]/3 rounded-full -translate-y-1/2 translate-x-1/4 blur-[100px]"></div>
            <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#ff9d29]/3 rounded-full translate-y-1/2 -translate-x-1/4 blur-[80px]"></div>
        </section>

        <!-- Menu Populer Section -->
        <section class="py-24 px-8 md:px-20 max-w-[1400px] mx-auto">
            <div class="text-center mb-16 relative">
                <h2 class="text-3xl font-extrabold text-black">
                    Menu <span class="text-[#ff9d29]">Populer</span>
                </h2>
                <p class="text-gray-600 font-medium mt-3">Temukan berbagai resep sehat dan lezat.</p>
                
                <!-- Filters & Search -->
                <div class="flex flex-col items-center gap-8 mt-12">
                    <div class="inline-flex items-center bg-[#f4f4f5]/80 p-1.5 rounded-[24px] gap-1 shadow-inner border-transparent">
                        <button 
                            v-for="type in ['Tinggi Serat', 'Rendah Kalori', 'Tinggi Protein']"
                            :key="type"
                            @click="activeRecipeFilter = activeRecipeFilter === type ? 'Semua' : type"
                            :class="activeRecipeFilter === type ? 'bg-white text-[#36d362] shadow-md' : 'text-zinc-500 hover:text-zinc-900'"
                            class="text-[12px] font-black px-8 py-3 rounded-2xl transition-all duration-300"
                        >{{ type }}</button>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 transition-all duration-500">
                <Link v-for="recipe in filteredRecipes" :key="recipe.id" :href="`/recipes/${recipe.id}`" class="group animate-in fade-in zoom-in duration-500 block">
                    <div class="h-full bg-white rounded-[32px] shadow-sm border-transparent overflow-hidden hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-500 hover:-translate-y-2">
                        <div class="relative overflow-hidden aspect-[16/11]">
                            <img :src="recipe.image" :alt="recipe.title" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                            <div class="absolute top-5 left-5">
                                <span class="bg-[#36d362] text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-green-500/20">
                                    {{ recipe.category }}
                                </span>
                            </div>
                        </div>
                        <div class="p-8 space-y-6">
                            <h3 class="text-[22px] font-black text-zinc-900 tracking-tight line-clamp-1">{{ recipe.title }}</h3>
                            <div class="flex items-center gap-3">
                                <div class="px-4 py-1.5 bg-[#36d362]/10 rounded-full flex items-center gap-2">
                                    <span class="w-1.5 h-1.5 rounded-full bg-[#36d362]"></span>
                                    <span class="text-[#36d362] text-[11px] font-black uppercase tracking-wider">{{ recipe.calories }} Kalori</span>
                                </div>
                                <div class="px-4 py-1.5 bg-[#ff9d29]/10 rounded-full flex items-center gap-2">
                                    <span class="w-1.5 h-1.5 rounded-full bg-[#ff9d29]"></span>
                                    <span class="text-[#ff9d29] text-[11px] font-black uppercase tracking-wider">{{ recipe.protein }}G Protein</span>
                                </div>
                            </div>
                            <p class="text-zinc-400 text-[14px] leading-relaxed line-clamp-2 font-medium">
                                {{ recipe.description }}
                            </p>
                            <div class="pt-2">
                                <span class="px-6 py-2.5 bg-[#36d362] text-white text-[12px] font-black rounded-[10px] group-hover:bg-green-600 transition-colors inline-flex items-center gap-2 cursor-pointer">
                                    Lihat Resep
                                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            <div class="mt-16 text-center">
                <Link href="/recipes" class="inline-flex items-center text-[15px] font-bold text-white bg-[#36d362] px-10 py-3.5 rounded-lg hover:bg-green-600 transition shadow-lg shadow-green-100">
                    Lihat Semua Makanan &rarr;
                </Link>
            </div>
        </section>

        <!-- Artikel Populer Section -->
        <section class="py-24 px-8 md:px-20 max-w-[1400px] mx-auto overflow-hidden">
            <div class="text-center mb-16 relative">
                <h2 class="text-3xl font-extrabold text-black">
                    Artikel <span class="text-[#ff9d29]">Populer</span>
                </h2>
                <p class="text-gray-500 font-medium mt-3">Pelajari pola makan sehat dan gaya hidup seimbang.</p>
                
                <div class="flex flex-col items-center gap-8 mt-12">
                    <div class="inline-flex items-center bg-[#f4f4f5]/80 p-1.5 rounded-[20px] gap-1 shadow-inner border-transparent">
                        <button 
                            v-for="cat in ['Semua', 'Gaya Hidup', 'Mitos & Fakta', 'Nutrisi']"
                            :key="cat"
                            @click="activeArticleFilter = cat"
                            :class="activeArticleFilter === cat ? 'bg-white text-[#36d362] shadow-sm' : 'text-zinc-500 hover:text-zinc-900'"
                            class="text-[12px] font-black px-8 py-2.5 rounded-2xl transition-all duration-300 whitespace-nowrap"
                        >{{ cat }}</button>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <Link v-for="article in filteredArticles" :key="article.id" :href="`/articles/${article.id}`" class="group animate-in fade-in zoom-in duration-500 block">
                    <div class="h-full bg-white rounded-[32px] shadow-sm border-transparent overflow-hidden hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-500 hover:-translate-y-2">
                        <div class="relative overflow-hidden aspect-[16/10]">
                            <img :src="article.image" :alt="article.title" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                            <div class="absolute top-5 left-5">
                                <span class="bg-white/90 backdrop-blur-sm text-[#36d362] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                                    {{ article.category }}
                                </span>
                            </div>
                        </div>
                        <div class="p-8 space-y-6">
                            <h3 class="text-[20px] font-black text-zinc-900 leading-tight line-clamp-2">{{ article.title }}</h3>
                            <p class="text-zinc-400 text-[14px] leading-relaxed line-clamp-2 font-medium">
                                {{ article.description }}
                            </p>
                            <div class="pt-2">
                                <span class="text-[#36d362] text-[13px] font-black flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer">
                                    Baca Selengkapnya
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            <div class="mt-16 text-center">
                <Link href="/articles" class="inline-flex items-center text-[15px] font-bold text-white bg-[#36d362] px-10 py-3.5 rounded-lg hover:bg-green-600 transition shadow-lg shadow-green-100">
                    Lihat Semua Artikel &rarr;
                </Link>
            </div>
        </section>
    </GuestLayout>
</template>



<style>
/* You can add extra styling here if needed */
</style>
