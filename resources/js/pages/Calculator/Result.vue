<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { Head, Link, usePage } from '@inertiajs/vue3';
import GuestLayout from '@/layouts/GuestLayout.vue';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scale, Flame, Utensils, Newspaper, ChevronRight, Save, Info, CheckCircle2, ShoppingBag } from 'lucide-vue-next';
import { triggerLoading } from '@/stores/loading';

const page = usePage();

// Form data from query or local storage
const userData = ref({
    age: 25,
    gender: 'male',
    weight: 70,
    height: 170,
    activity: '1.2',
    goal: 'maintain' // lose, maintain, gain
});

const bmiResult = ref<number | null>(null);
const tdeeResult = ref<number | null>(null);
const recommendedCalories = ref<number | null>(null);

const calculateResults = () => {
    const { weight, height, age, gender, activity, goal } = userData.value;
    
    // BMI
    const h = height / 100;
    bmiResult.value = weight / (h * h);
    
    // BMR
    let bmr = 0;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    
    // TDEE
    tdeeResult.value = bmr * parseFloat(activity);
    
    // Recommended based on goal
    if (goal === 'lose') recommendedCalories.value = Math.round(tdeeResult.value - 500);
    else if (goal === 'gain') recommendedCalories.value = Math.round(tdeeResult.value + 500);
    else recommendedCalories.value = Math.round(tdeeResult.value);
};

onMounted(() => {
    // Try to get from URL params
    const params = new URLSearchParams(window.location.search);
    if (params.get('weight')) {
        userData.value.weight = Number(params.get('weight'));
        userData.value.height = Number(params.get('height'));
        userData.value.age = Number(params.get('age')) || 25;
        userData.value.gender = params.get('gender') || 'male';
        userData.value.activity = params.get('activity') || '1.2';
        userData.value.goal = params.get('goal') || 'maintain';
        
        triggerLoading(1000);
        calculateResults();
    } else {
        // Try to get from local storage (if redirected from login)
        const pending = localStorage.getItem('pending_save_recommendation');
        if (pending) {
            userData.value = JSON.parse(pending);
            calculateResults();
            localStorage.removeItem('pending_save_recommendation');
            
            // If user is now logged in, auto-save or notify
            if (page.props.auth?.user) {
                setTimeout(() => {
                    alert('Rencana makan kamu telah dipulihkan dan siap disimpan!');
                }, 1000);
            }
        } else {
            calculateResults();
        }
    }
});

const bmiCategory = computed(() => {
    if (!bmiResult.value) return null;
    if (bmiResult.value < 18.5) return { label: 'Kurang Berat Badan', color: 'bg-blue-500', desc: 'Sangat disarankan menambah asupan kalori.' };
    if (bmiResult.value < 25) return { label: 'Berat Badan Ideal', color: 'bg-[#36d362]', desc: 'Pertahankan pola makan seimbang Anda!' };
    if (bmiResult.value < 30) return { label: 'Kelebihan Berat Badan', color: 'bg-yellow-500', desc: 'Perlu pengaturan pola makan defisit kalori.' };
    return { label: 'Obesitas', color: 'bg-red-500', desc: 'Sangat disarankan konsultasi medis segera.' };
});

const mealPlan = computed(() => {
    const allDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const todayIndex = new Date().getDay();
    
    const days = Array.from({ length: 7 }).map((_, i) => {
        const dayIndex = (todayIndex + i) % 7;
        return i === 0 ? `${allDays[dayIndex]} (Hari Ini)` : allDays[dayIndex];
    });

    const goals = {
        lose: {
            breakfast: 'Oatmeal dengan Buah Beri',
            lunch: 'Salad Dada Ayam Panggang',
            dinner: 'Ikan Lemon & Brokoli Rebus',
            snack: 'Apel / Almond'
        },
        maintain: {
            breakfast: 'Roti Gandum & Telur Orak-arik',
            lunch: 'Nasi Merah & Ayam Bakar',
            dinner: 'Tumis Sayur & Tahu Tempe',
            snack: 'Pisang / Greek Yogurt'
        },
        gain: {
            breakfast: 'Smoothie Protein & Selai Kacang',
            lunch: 'Steak Daging Sapi & Kentang Tumbuk',
            dinner: 'Pasta Gandum & Salmon Panggang',
            snack: 'Almond / Alpukat'
        }
    };
    
    const currentGoal = (userData.value.goal as keyof typeof goals) || 'maintain';
    const basePlan = goals[currentGoal];
    
    return days.map(day => ({
        day,
        ...basePlan
    }));
});

const articlesByGoal = {
    lose: [
        { id: 1, title: '7 Kunci Hidrasi untuk Metabolisme', category: 'Nutrisi', image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800' },
        { id: 2, title: 'Mitos Diet Karbohidrat Terbongkar', category: 'Tips & Trik', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800' },
        { id: 3, title: 'Cara Defisit Kalori Tanpa Lapar', category: 'Panduan', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800' }
    ],
    maintain: [
        { id: 4, title: 'Menjaga Berat Badan Ideal Setelah Diet', category: 'Gaya Hidup', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800' },
        { id: 5, title: 'Pentingnya Keseimbangan Makro Nutrisi', category: 'Edukasi', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800' },
        { id: 6, title: 'Tips Meal Prep untuk Pekerja Kantoran', category: 'Tips', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800' }
    ],
    gain: [
        { id: 7, title: 'Panduan Bulking Bersih (Clean Bulk)', category: 'Otot', image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=800' },
        { id: 8, title: 'Sumber Protein Terbaik untuk Otot', category: 'Nutrisi', image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800' },
        { id: 9, title: 'Latihan Beban vs Kardio saat Gain', category: 'Fitness', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800' }
    ]
};

const filteredRelatedArticles = computed(() => {
    const currentGoal = (userData.value.goal as keyof typeof articlesByGoal) || 'maintain';
    return articlesByGoal[currentGoal];
});

const handleSave = () => {
    if (!page.props.auth?.user) {
        // Save to local storage then redirect to login
        localStorage.setItem('pending_save_recommendation', JSON.stringify(userData.value));
        window.location.href = '/login';
    } else {
        triggerLoading(1500);
        setTimeout(() => {
            alert('Rencana berhasil disimpan ke akun Anda! Kamu bisa melihatnya di Dashboard.');
        }, 1500);
    }
};
</script>

<template>
    <Head title="Rekomendasi Personal NutriFlow" />

    <GuestLayout>
        <div class="max-w-[1400px] mx-auto px-8 md:px-20 py-12 space-y-12">
            <!-- Header Result -->
            <div class="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-zinc-100 pb-12">
                <div class="space-y-4">
                    <span class="inline-block px-4 py-1 bg-[#36d362]/10 text-[#36d362] rounded-full text-[10px] font-black uppercase tracking-widest">Analisis Personal</span>
                    <h1 class="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">Rencana Gizi <span class="text-[#36d362]">Khusus Untukmu</span></h1>
                    <p class="text-zinc-500 font-medium max-w-xl leading-relaxed">
                        Berdasarkan data yang kamu masukkan, berikut adalah estimasi kebutuhan gizi dan rencana makan yang paling optimal untuk mencapai tujuanmu.
                    </p>
                </div>
                
                <div class="flex gap-4">
                    <button @click="handleSave" class="group flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-2xl font-black hover:bg-black transition-all hover:-translate-y-1 shadow-xl shadow-zinc-200">
                        <Save class="w-5 h-5 text-[#36d362]" />
                        Simpan Rencana
                    </button>
                    <Link href="/" class="px-8 py-4 bg-white border border-zinc-100 text-black rounded-2xl font-black hover:bg-zinc-50 transition-all">
                        Ubah Data
                    </Link>
                </div>
            </div>

            <!-- Analysis Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- BMI Card -->
                <div class="p-10 rounded-[32px] bg-white border border-zinc-100 shadow-xl shadow-zinc-100/50 flex flex-col items-center text-center space-y-6 relative overflow-hidden group">
                    <div class="p-4 bg-blue-50 rounded-2xl text-blue-600 transition-transform group-hover:scale-110">
                        <Scale class="w-8 h-8" />
                    </div>
                    <div>
                        <p class="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Skor BMI</p>
                        <div class="text-6xl font-black text-zinc-900 tracking-tighter">{{ bmiResult?.toFixed(1) }}</div>
                    </div>
                    <Badge :class="bmiCategory?.color" class="px-6 py-2 text-[12px] font-black uppercase shadow-lg shadow-black/5">
                        {{ bmiCategory?.label }}
                    </Badge>
                    <p class="text-[13px] text-zinc-500 font-medium leading-relaxed">
                        {{ bmiCategory?.desc }}
                    </p>
                </div>

                <!-- TDEE Card -->
                <div class="p-10 rounded-[32px] bg-white border border-zinc-100 shadow-xl shadow-zinc-100/50 flex flex-col items-center text-center space-y-6 relative overflow-hidden group">
                    <div class="p-4 bg-orange-50 rounded-2xl text-orange-600 transition-transform group-hover:scale-110">
                        <Flame class="w-8 h-8" />
                    </div>
                    <div>
                        <p class="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Kebutuhan Kalori</p>
                        <div class="text-6xl font-black text-zinc-900 tracking-tighter">{{ Math.round(tdeeResult || 0) }}</div>
                    </div>
                    <span class="text-zinc-400 font-black text-xs uppercase tracking-widest">kkal / hari (TDEE)</span>
                    <p class="text-[13px] text-zinc-500 font-medium leading-relaxed">
                        Konsumsi energi total harian untuk menjaga berat badan tetap stabil.
                    </p>
                </div>

                <!-- Goal Recommendation Card -->
                <div class="p-10 rounded-[32px] bg-gradient-to-br from-[#36d362] to-[#2fb856] text-white shadow-2xl relative overflow-hidden group border-4 border-white">
                    <div class="relative z-10 flex flex-col items-center text-center space-y-6">
                        <div class="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
                            <CheckCircle2 class="w-8 h-8" />
                        </div>
                        <div>
                            <p class="text-green-50 text-[10px] font-black uppercase tracking-widest mb-1 opacity-80">Target Rekomendasi</p>
                            <div class="text-6xl font-black tracking-tighter">{{ Math.round(recommendedCalories || 0) }}</div>
                        </div>
                        <Badge class="bg-white text-[#36d362] px-6 py-2 text-[12px] font-black uppercase shadow-lg">
                            {{ userData.goal === 'lose' ? 'Defisit' : userData.goal === 'gain' ? 'Surplus' : 'Maintenance' }}
                        </Badge>
                        <p class="text-green-50 text-[13px] font-medium leading-relaxed opacity-90">
                            Penuhi target ini untuk mencapai tujuan <span class="font-black text-white px-1">{{ userData.goal }}</span> berat badanmu.
                        </p>
                    </div>
                    <Flame class="absolute -bottom-10 -right-10 w-48 h-48 text-white/10 rotate-12 group-hover:scale-110 duration-700" />
                </div>
            </div>

            <!-- Meal Plan Section (The Hook) -->
            <section class="space-y-8">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="p-3 bg-zinc-900 rounded-2xl text-[#36d362]">
                            <Utensils class="w-6 h-6" />
                        </div>
                        <h2 class="text-3xl font-black text-zinc-900">Rencana Makan <span class="text-[#36d362]">7 Hari</span></h2>
                    </div>
                    <div class="hidden md:flex items-center gap-2 text-[13px] text-zinc-400 font-bold uppercase tracking-widest">
                        <div class="w-2 h-2 rounded-full bg-[#36d362]"></div>
                        Generated for you
                    </div>
                </div>

                <!-- Horizontal Tabs for Days -->
                <!-- Horizontal Tabs for Days -->
                <div class="grid grid-cols-1 md:grid-cols-7 gap-4">
                    <div v-for="(day, index) in mealPlan" :key="day.day" :class="[
                        'p-6 rounded-[28px] transition-all group relative bg-white',
                        index === 0 ? 'border-2 border-[#36d362] shadow-xl shadow-[#36d362]/20 z-10' : 'border border-zinc-100 hover:border-[#36d362] hover:shadow-2xl hover:shadow-green-100/50'
                    ]">
                        <!-- Subtle background glow for today, barely visible -->
                        <div v-if="index === 0" class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#36d362]/5 to-transparent opacity-50 pointer-events-none"></div>

                        <div :class="['mb-6 pb-4 border-b transition-colors relative z-10 flex items-center justify-between', index === 0 ? 'border-[#36d362]/20' : 'border-zinc-50']">
                            <div class="flex items-center gap-2">
                                <p :class="[
                                    'text-[14px] font-black',
                                    index === 0 ? 'text-[#36d362]' : 'text-zinc-900 group-hover:text-[#36d362]'
                                ]">{{ day.day }}</p>
                                
                                <!-- Live indicator -->
                                <div v-if="index === 0" class="flex items-center">
                                    <span class="relative flex h-2 w-2">
                                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#36d362] opacity-75"></span>
                                      <span class="relative inline-flex rounded-full h-2 w-2 bg-[#36d362]"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="space-y-6 relative z-10">
                            <div class="space-y-1">
                                <p :class="['text-[9px] font-black uppercase tracking-wider', index === 0 ? 'text-[#36d362]' : 'text-zinc-400']">08:00 - Pagi</p>
                                <p class="text-[13px] font-bold leading-tight text-zinc-800">{{ day.breakfast }}</p>
                            </div>
                            <div class="space-y-1">
                                <p :class="['text-[9px] font-black uppercase tracking-wider', index === 0 ? 'text-[#36d362]' : 'text-zinc-400']">13:00 - Siang</p>
                                <p class="text-[13px] font-bold leading-tight text-zinc-800">{{ day.lunch }}</p>
                            </div>
                            <div class="space-y-1">
                                <p :class="['text-[9px] font-black uppercase tracking-wider', index === 0 ? 'text-[#36d362]' : 'text-zinc-400']">16:00 - Snack</p>
                                <p class="text-[13px] font-bold leading-tight text-zinc-800">{{ day.snack }}</p>
                            </div>
                            <div class="space-y-1">
                                <p :class="['text-[9px] font-black uppercase tracking-wider', index === 0 ? 'text-[#36d362]' : 'text-zinc-400']">19:00 - Malam</p>
                                <p class="text-[13px] font-bold leading-tight text-zinc-800">{{ day.dinner }}</p>
                            </div>
                        </div>
                        
                        <!-- Affiliate Link Placeholder -->
                        <div :class="['mt-8 pt-4 border-t relative z-10', index === 0 ? 'border-[#36d362]/20' : 'border-zinc-50']">
                            <a href="#" class="flex items-center justify-between text-[11px] font-black hover:underline uppercase tracking-tighter text-[#36d362]">
                                Order di GoFood
                                <ShoppingBag class="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Articles Section -->
            <section class="space-y-8 bg-zinc-50/50 -mx-8 md:-mx-20 px-8 md:px-20 py-24 rounded-[64px]">
                <div class="flex items-center gap-4">
                    <div class="p-3 bg-[#ff9d29]/10 rounded-2xl text-[#ff9d29]">
                        <Newspaper class="w-6 h-6" />
                    </div>
                    <h2 class="text-3xl font-black text-zinc-900">Edukasi <span class="text-[#ff9d29]">Nutrisi</span></h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <Link v-for="article in filteredRelatedArticles" :key="article.id" :href="`/articles/${article.id}`" class="group">
                        <div class="bg-white rounded-[32px] overflow-hidden border border-zinc-100 shadow-sm group-hover:shadow-xl transition-all duration-500">
                            <div class="aspect-video overflow-hidden">
                                <img :src="article.image" :alt="article.title" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                            </div>
                            <div class="p-8">
                                <Badge variant="secondary" class="bg-zinc-100 text-zinc-500 text-[9px] px-3 font-black uppercase tracking-widest mb-4">
                                    {{ article.category }}
                                </Badge>
                                <h3 class="text-lg font-black text-zinc-900 group-hover:text-[#36d362] transition-colors mb-4 line-clamp-2">{{ article.title }}</h3>
                                <div class="flex items-center gap-2 text-[12px] font-black text-[#36d362]">
                                    Teruskan Membaca
                                    <ChevronRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            <!-- Bottom CTA -->
            <div class="p-12 md:p-20 bg-zinc-900 rounded-[48px] text-center space-y-8 relative overflow-hidden">
                <div class="relative z-10 space-y-6">
                    <h2 class="text-3xl md:text-5xl font-black text-white tracking-tight">Kesehatan adalah <span class="text-[#36d362]">Investasi Terbaik</span></h2>
                    <p class="text-zinc-400 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
                        Simpan rencana makan ini sekarang dan mulai hari pertamamu menuju versi diri yang lebih sehat. Gratis, selamanya.
                    </p>
                    <div class="flex flex-wrap justify-center gap-6 pt-4">
                        <button @click="handleSave" class="px-12 py-5 bg-[#36d362] text-white rounded-2xl font-black hover:bg-green-600 transition-all hover:-translate-y-1 shadow-2xl shadow-green-500/20 text-[18px]">
                            Simpan Rekomendasi Saya
                        </button>
                    </div>
                </div>
                
                <!-- Decor -->
                <div class="absolute -top-20 -left-20 w-80 h-80 bg-[#36d362]/5 rounded-full blur-[100px]"></div>
                <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-green-500/10 rounded-full blur-[100px]"></div>
            </div>
            
            <!-- Disclaimer -->
            <div class="flex gap-4 p-8 bg-zinc-50 border border-zinc-100 rounded-3xl text-zinc-500 text-[13px] font-medium leading-relaxed">
                <Info class="w-6 h-6 shrink-0 text-[#36d362]" />
                <p>
                    Informasi ini dihasilkan secara otomatis berdasarkan data input pengguna dan bersifat umum. Sangat disarankan untuk berkonsultasi dengan ahli gizi atau dokter sebelum memulai program diet atau olahraga yang signifikan, terutama jika Anda memiliki kondisi kesehatan tertentu.
                </p>
            </div>
        </div>
    </GuestLayout>
</template>

<style scoped>
/* Any custom styles here */
</style>
