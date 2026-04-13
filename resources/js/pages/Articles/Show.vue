<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Link as LinkIcon, Quote } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import GuestLayout from '@/layouts/GuestLayout.vue';

import hidrasiImage from '../../../images/hidrasi.jpg';
import nutrisiImage from '../../../images/nutrisi tulang.jpg';
import tidurImage from '../../../images/tidur.jpg';

const props = defineProps<{
    article: string | number;
}>();

const allArticles = [
    {
        id: 1,
        title: '9 Tips Pola Hidup Sehat untuk Pemula',
        author: 'Dr. Sarah Gizi',
        category: 'Gaya Hidup',
        date: '12 Mar 2026',
        readTime: '8 min baca',
        image: hidrasiImage,
        content: [
            { type: 'p', text: 'Mulai perjalanan sehatmu dari hal-hal kecil seperti manajemen pola tidur dan hidrasi yang cukup setiap harinya. Tanpanya, tubuh tidak dapat memproses nutrisi secara maksimal.' },
            { type: 'h2', text: 'Mengapa Hidrasi Sangat Penting Bagi Pemula?' },
            { type: 'p', text: 'Saat Anda terhidrasi dengan baik, darah mengalir lebih mudah, membawa oksigen dan nutrisi ke sel-sel tubuh dengan efisien.' },
            { type: 'quote', text: 'Hidrasi bukan sekadar menghilangkan haus, tapi menyeimbangkan sistem fundamental dari seluruh organ tubuh Anda.' }
        ]
    },
    {
        id: 2,
        title: 'Tidur Berkualitas',
        author: 'Dr. John Doe',
        category: 'Mitos & Fakta',
        date: '14 Mar 2026',
        readTime: '6 min baca',
        image: tidurImage,
        content: [
            { type: 'p', text: 'Mengungkap misteri tentang berapa lama waktu ideal yang diperlukan untuk pemulihan otot dan sel tubuh. Banyak orang mengira pembentukan otot terjadi saat latihan fisik sedang berjalan, namun kenyataannya terjadi saat Anda istirahat total.' },
            { type: 'h2', text: 'Siklus Tidur yang Baik' },
            { type: 'p', text: 'Tidur 7-8 jam per malam memastikan hormon pertumbuhan dilepaskan secara optimal ke seluruh serabut otot yang pecah saat latihan.' },
            { type: 'quote', text: 'Tidur adalah bentuk latihan pasif yang paling efektif untuk kemajuan fisik Anda.' }
        ]
    },
    {
        id: 3,
        title: 'Rahasia Nutrisi Tulang Kuat',
        author: 'Prof. Bone',
        category: 'Nutrisi & Gizi',
        date: '20 Mar 2026',
        readTime: '5 min baca',
        image: nutrisiImage,
        content: [
            { type: 'p', text: 'Makanan super apa saja yang wajib kamu konsumsi agar tulangmu kuat dan bebas osteoporosis di masa tua? Kesehatan tulang melampaui sekadar kalsium, melainkan juga sinergi antara makronutrisi.' },
            { type: 'h2', text: 'Sumber Nutrisi' },
            { type: 'p', text: 'Sinar matahari pagi adalah sumber vitamin D terbaik untuk membantu penyerapan kalsium ke tulang dengan bantuan lemak sehat.' }
        ]
    },
    {
        id: 4,
        title: 'Nutrisi Penting untuk Kesehatan Tulang',
        author: 'Prof. Bone',
        category: 'Nutrisi & Gizi',
        date: '20 Mar 2026',
        readTime: '5 min baca',
        image: nutrisiImage,
        content: [
            { type: 'p', text: 'Kesehatan tulang melampaui sekadar kalsium. Vitamin D dan Magnesium juga sangat krusial.' },
            { type: 'h2', text: 'Sumber Nutrisi' },
            { type: 'p', text: 'Sinar matahari pagi adalah sumber vitamin D terbaik untuk membantu penyerapan kalsium ke tulang.' }
        ]
    },
    {
        id: 5,
        title: 'Tips Mengatur Meal Prep Seminggu',
        category: 'Tips & Trik',
        author: 'Chef Healthy',
        date: '22 Mar 2026',
        readTime: '12 min baca',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1200&auto=format&fit=crop',
        content: [
            { type: 'p', text: 'Meal prep adalah cara terbaik untuk tetap disiplin pada program diet Anda sekaligus menghemat waktu.' },
            { type: 'h2', text: 'Langkah Awal Meal Prep' },
            { type: 'p', text: 'Pilihlah satu hari dalam seminggu, biasanya Minggu, untuk mencuci, memotong, dan memasak bahan dasar makanan.' }
        ]
    },
    {
        id: 6,
        title: 'Superfood Lokal: Tempe vs Tahu',
        category: 'Nutrisi & Gizi',
        author: 'Dr. Sarah Gizi',
        date: '25 Mar 2026',
        readTime: '7 min baca',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop',
        content: [
            { type: 'p', text: 'Tempe dan tahu adalah protein nabati yang sangat baik, namun proses fermentasi tempe memberikan nilai tambah.' },
            { type: 'h2', text: 'Kandungan Protein' },
            { type: 'p', text: 'Tempe biasanya memiliki kandungan protein yang lebih padat dibandingkan tahu karena proses padat kacang kedelainya.' }
        ]
    }
];

const articleId = (props.article || 1).toString();
const articleData = allArticles.find(a => a.id.toString() === articleId) || allArticles[0];
</script>


<template>
    <Head :title="articleData.title" />

    <GuestLayout>
        <div class="flex flex-1 flex-col p-6 lg:p-10 bg-white min-h-screen">
            <!-- Navigation & Controls -->
            <div class="max-w-4xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                <Link href="/articles" class="inline-flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-[#36d362] transition-colors group">
                    <div class="p-1.5 rounded-full bg-zinc-100 group-hover:bg-[#36d362] group-hover:text-white transition-all">
                        <ArrowLeft class="w-4 h-4" />
                    </div>
                    Artikel Lainnya
                </Link>

                <div class="flex items-center gap-2">
                    <Button variant="outline" size="sm" class="rounded-full gap-2 border-zinc-200">
                        <Share2 class="w-3.5 h-3.5" /> Bagikan
                    </Button>
                    <div class="flex gap-1">
                        <Button variant="secondary" size="icon" class="rounded-full w-8 h-8">
                            <Facebook class="w-3.5 h-3.5" />
                        </Button>
                        <Button variant="secondary" size="icon" class="rounded-full w-8 h-8">
                            <Twitter class="w-3.5 h-3.5" />
                        </Button>
                    </div>
                </div>
            </div>

            <!-- Article Content Container -->
            <article class="max-w-4xl mx-auto w-full space-y-12 pb-20">
                <!-- Title & Meta -->
                <div class="space-y-8 text-center sm:text-left">
                    <div class="flex justify-center sm:justify-start gap-3">
                        <Badge class="bg-[#36d362]/10 text-[#36d362] border-none px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                            {{ articleData.category }}
                        </Badge>
                    </div>
                    
                    <h1 class="text-4xl sm:text-6xl font-black text-zinc-900 tracking-tight leading-[1.05]">
                        {{ articleData.title }}
                    </h1>

                    <div class="flex flex-col sm:flex-row items-center gap-6 justify-center sm:justify-start text-xs font-bold text-zinc-400 uppercase tracking-widest">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 overflow-hidden">
                                <span class="text-[10px]">SG</span>
                            </div>
                            <span class="text-zinc-900">{{ articleData.author }}</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="flex items-center gap-1.5"><Calendar class="w-4 h-4 text-[#36d362]" /> {{ articleData.date }}</span>
                            <span class="flex items-center gap-1.5"><Clock class="w-4 h-4 text-[#36d362]" /> {{ articleData.readTime }}</span>
                        </div>
                    </div>
                </div>

                <!-- Featured Image -->
                <div class="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl shadow-green-100">
                    <img 
                        :src="articleData.image" 
                        :alt="articleData.title"
                        class="w-full h-full object-cover"
                    />
                </div>

                <!-- Body Text -->
                <div class="space-y-8 max-w-none">
                    <template v-for="(block, index) in articleData.content" :key="index">
                        <p v-if="block.type === 'p'" class="text-lg text-zinc-600 leading-relaxed font-medium">
                            {{ block.text }}
                        </p>
                        
                        <h2 v-else-if="block.type === 'h2'" class="text-3xl font-black text-zinc-900 pt-6 tracking-tight">
                            {{ block.text }}
                        </h2>
                        
                        <div v-else-if="block.type === 'quote'" class="relative py-10 px-8 sm:px-12 my-12 bg-gray-50 rounded-[32px] border-l-8 border-[#36d362] overflow-hidden">
                            <Quote class="absolute -top-4 -right-4 w-32 h-32 text-gray-200 opacity-50" />
                            <p class="relative z-10 text-2xl font-bold text-zinc-800 italic leading-relaxed">
                                "{{ block.text }}"
                            </p>
                        </div>
                    </template>
                </div>

                <!-- Footer / Tagging -->
                <Separator class="bg-zinc-100" />
                
                <div class="flex flex-col sm:flex-row justify-between gap-8 pt-4">
                    <div class="flex flex-wrap gap-2">
                        <Badge variant="outline" class="rounded-full px-4 border-zinc-200 text-zinc-400 font-bold uppercase text-[9px]">Ramadan</Badge>
                        <Badge variant="outline" class="rounded-full px-4 border-zinc-200 text-zinc-400 font-bold uppercase text-[9px]">Puasa Sehat</Badge>
                        <Badge variant="outline" class="rounded-full px-4 border-zinc-200 text-zinc-400 font-bold uppercase text-[9px]">Nutrisi</Badge>
                    </div>
                    
                    <div class="flex items-center gap-4">
                        <span class="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Bagikan:</span>
                        <div class="flex gap-2">
                            <Button variant="ghost" size="icon" class="rounded-full text-zinc-400 hover:text-[#36d362]">
                                <Facebook class="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" class="rounded-full text-zinc-400 hover:text-[#36d362]">
                                <Twitter class="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" class="rounded-full text-zinc-400 hover:text-[#36d362]">
                                <LinkIcon class="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </GuestLayout>
</template>
