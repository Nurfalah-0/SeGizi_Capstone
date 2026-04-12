<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import GuestLayout from '@/layouts/GuestLayout.vue';
import { ShieldAlert } from 'lucide-vue-next';
</script>

<template>
    <Head title="Kebijakan Privasi - NutriFlow" />
    <GuestLayout>
        <div class="max-w-[800px] mx-auto px-8 py-20 pb-40">
            <div class="w-16 h-16 bg-[#36d362]/10 text-[#36d362] flex items-center justify-center rounded-2xl mb-8">
                <ShieldAlert class="w-8 h-8" />
            </div>
            <h1 class="text-4xl md:text-5xl font-black tracking-tight mb-6">Kebijakan <span class="text-[#36d362]">Privasi</span></h1>
            <p class="text-xl text-zinc-500 font-medium mb-12">Terakhir diperbarui: 11 April 2026</p>
            
            <div class="prose prose-zinc prose-lg max-w-none prose-headings:font-black prose-p:text-zinc-600">
                <h3>1. Pengumpulan Data</h3>
                <p>Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami. Sebagai contoh, kami mengumpulkan informasi ketika Anda membuat akun, berpartisipasi dalam setiap layanan interaktif (seperti rekomendasi gizi), mengisi metrik kesehatan Anda (seperti berat badan dan tinggi), meminta dukungan klien, atau sebaliknya berkomunikasi dengan kami.</p>
                
                <h3>2. Penggunaan Data Anda</h3>
                <p>Kami menggunakan informasi tentang Anda untuk menyediakan layanan personalisasi nutrisi yang akurat kepada Anda. Kami TIDAK membagikan data kesehatan Anda kepada pihak ketiga dengan tujuan pemasaran atau penjualan murni tanpa konsen langsung dari Anda sebagai pengguna independen. Data yang digunakan dalam riset hanya berbentuk pseudo-anonim.</p>
                
                <h3>3. Keamanan Metrik Kesehatan</h3>
                <p>Informasi fisik seperti berat badan, tinggi badan, target diet disandikan demi privasi maksimum di sistem database kami dan hanya digunakan di ujung terminal ketika menampilkan kalkulasi yang Anda inginkan.</p>

                <h3>4. Kontak</h3>
                <p>Jika Anda memiliki pertanyaan tentang pedoman ini, silahkan hubungi <a href="/contact" class="text-[#36d362]">Pusat Bantuan</a>.</p>
            </div>
        </div>
    </GuestLayout>
</template>
