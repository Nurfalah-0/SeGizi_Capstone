<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import GuestLayout from '@/layouts/GuestLayout.vue';
import { Info } from 'lucide-vue-next';
</script>

<template>
    <Head title="Tentang Platform - NutriFlow" />
    <GuestLayout>
        <div class="max-w-[800px] mx-auto px-8 py-20 pb-40">
            <div class="w-16 h-16 bg-[#36d362]/10 text-[#36d362] flex items-center justify-center rounded-2xl mb-8">
                <Info class="w-8 h-8" />
            </div>
            <h1 class="text-5xl font-black tracking-tight mb-6">Tentang <span class="text-[#36d362]">NutriFlow</span></h1>
            <p class="text-xl text-zinc-500 font-medium mb-12">Makanan untuk hidup, bukan hidup untuk makanan. Platform gizi terpadu masa depan Anda.</p>
            
            <div class="prose prose-zinc prose-lg max-w-none prose-headings:font-black prose-p:text-zinc-600">
                <h3>Misi Kami</h3>
                <p>Di NutriFlow, kami percaya bahwa setiap orang berhak mendapatkan akses ke informasi nutrisi yang jelas, akurat, dan dipersonalisasi. Misi kami adalah untuk menyederhanakan kompleksitas diet dan gizi menjadi langkah-langkah praktis sehari-hari.</p>
                
                <h3>Apa yang Kami Lakukan?</h3>
                <p>Kami menggabungkan kalkulator berbasisi data ilmiah dengan rekomendasi yang dipersonalisasi, menawarkan kepada pengguna kami cara yang komprehensif untuk memahami tubuh mereka, merencanakan makanan mereka, dan mencapai tujuan kebugaran serta diet mereka - terlepas dari apakah Anda ingin menurunkan berat badan, mempertahankan performa, atau menambah massa otot.</p>
                
                <h3>Hubungi Tim Kami</h3>
                <p>Jika Anda memiliki pertanyaan seputar NutriFlow, jangan ragu untuk menuju ke halaman <a href="/contact" class="text-[#36d362] no-underline hover:underline">Kontak Kami</a> yang telah disediakan.</p>
            </div>
        </div>
    </GuestLayout>
</template>
