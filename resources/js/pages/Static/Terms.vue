<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { Scale as Balance } from 'lucide-vue-next';
import GuestLayout from '@/layouts/GuestLayout.vue';
</script>

<template>
    <Head title="Syarat dan Ketentuan - NutriFlow" />
    <GuestLayout>
        <div class="max-w-[800px] mx-auto px-8 py-20 pb-40">
            <div class="w-16 h-16 bg-[#36d362]/10 text-[#36d362] flex items-center justify-center rounded-2xl mb-8">
                <Balance class="w-8 h-8" />
            </div>
            <h1 class="text-4xl md:text-5xl font-black tracking-tight mb-6">Syarat & <span class="text-[#36d362]">Ketentuan</span></h1>
            <p class="text-xl text-zinc-500 font-medium mb-12">Aturan main dan term legal dalam menggunakan layanan platform NutriFlow.</p>
            
            <div class="prose prose-zinc prose-lg max-w-none prose-headings:font-black prose-p:text-zinc-600">
                <h3>1. Disclaimer Medis</h3>
                <p>Informasi yang disediakan oleh kalkulator NutriFlow hanya bersifat sebagai estimasi umum berbasis algoritma publik. Data hasil kalkulator BMI, TDEE, maupun Rencana Makanan TIDAK DIMAKSUDKAN sebagai panduan medis profesional, diagnosis nutrisi langsung, maupun obat untuk penyakit. Silahkan konsultasi ke dokter atau nutrisionis klinis ahli untuk informasi mutlak.</p>
                
                <h3>2. Lisensi Pengguna</h3>
                <p>NutriFlow memberi Anda akses terbatas dan hak non-eksklusif untuk menggunakan platform ini dengan peruntukan evaluasi nutrisi dan gaya hidup pribadi yang wajar. Dilarang menduplikasi resep dan artikel secara bot-scraping berskala di luar platform tanpa atribusi dan ijin tertulis.</p>
                
                <h3>3. Layanan Berkelanjutan</h3>
                <p>Kami memiliki hak tunggal untuk merubah fungsionalitas, model operasi kalkulator, dan konten terkait kapanpun kami memutuskan ada penyesuaian yang perlu dibuat kepada layanan NutriFlow secara holistik.</p>
            </div>
        </div>
    </GuestLayout>
</template>
