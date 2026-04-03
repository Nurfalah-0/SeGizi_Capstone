<script setup lang="ts">
import { ref, computed } from 'vue';
import { Head } from '@inertiajs/vue3';
import GuestLayout from '@/layouts/GuestLayout.vue';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from '@/components/ui/select';
import { Flame, Info, RefreshCcw, Activity } from 'lucide-vue-next';
import { triggerLoading } from '@/stores/loading';

const age = ref<number>();
const gender = ref('male');
const weight = ref<number>();
const height = ref<number>();
const activity = ref('1.2');
const tdeeResult = ref<number | null>(null);

const calculateCalorie = () => {
    if (age.value && weight.value && height.value && age.value > 0 && weight.value > 0 && height.value > 0) {
        triggerLoading(1500);
        tdeeResult.value = null;

        setTimeout(() => {
            let bmr = 0;
            const w = Number(weight.value);
            const h = Number(height.value);
            const a = Number(age.value);
            if (gender.value === 'male') {
                bmr = (10 * w) + (6.25 * h) - (5 * a) + 5;
            } else {
                bmr = (10 * w) + (6.25 * h) - (5 * a) - 161;
            }
            tdeeResult.value = bmr * parseFloat(activity.value);
        }, 1500);
    } else {
        alert("Lengkapi data: Usia, Berat, dan Tinggi dengan angka yang valid.");
    }
};

const reset = () => {
    age.value = undefined;
    gender.value = 'male';
    weight.value = undefined;
    height.value = undefined;
    activity.value = '1.2';
    tdeeResult.value = null;
};

const calorieGoals = computed(() => {
    if (!tdeeResult.value) return [];
    return [
        { label: 'Turun BB', calories: Math.round(tdeeResult.value - 500), desc: 'Defisit Lemak' },
        { label: 'Jaga BB', calories: Math.round(tdeeResult.value), desc: 'Stabil' },
        { label: 'Naik BB', calories: Math.round(tdeeResult.value + 500), desc: 'Surplus Otot' },
    ];
});
</script>

<template>
    <Head title="Kalkulator Kalori" />

    <GuestLayout>
        <div class="flex flex-1 flex-col gap-6 p-6 lg:p-20 bg-white min-h-screen">
            <div class="max-w-4xl mx-auto w-full">
                <Card class="border border-gray-100 shadow-xl bg-white rounded-[32px] overflow-hidden">
                    <CardHeader class="pb-8">
                        <div class="flex items-center gap-4 mb-2">
                            <div class="p-3 bg-[#36d362]/10 rounded-2xl">
                                <Flame class="w-8 h-8 text-[#36d362]" />
                            </div>
                            <div>
                                <CardTitle class="text-2xl font-black text-black">Target Kalori Harian</CardTitle>
                                <CardDescription class="text-zinc-500 font-medium mt-1">Estimasi kebutuhan energi harian (TDEE) berdasarkan profil fisik Anda.</CardDescription>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent class="grid gap-8 p-8 pt-0">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            <div class="space-y-3">
                                <Label class="text-[11px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Jenis Kelamin</Label>
                                <Select v-model="gender">
                                    <SelectTrigger class="h-16 !bg-white border-zinc-100 rounded-[22px] focus:ring-4 focus:ring-[#36d362]/10 focus:border-[#36d362] shadow-sm transition-all group overflow-hidden">
                                        <div class="flex items-center gap-2 font-black text-zinc-900">
                                            <SelectValue placeholder="Pilih Jenis Kelamin" class="placeholder:text-zinc-300" />
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent class="rounded-[28px] border border-zinc-100 shadow-2xl p-2 bg-white animate-in zoom-in-95 duration-300">
                                        <SelectItem value="male" class="rounded-2xl py-4 focus:bg-green-50 text-zinc-900 focus:text-[#36d362] font-black transition-colors cursor-pointer mb-1">Laki-laki</SelectItem>
                                        <SelectItem value="female" class="rounded-2xl py-4 focus:bg-green-50 text-zinc-900 focus:text-[#36d362] font-black transition-colors cursor-pointer">Perempuan</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div class="space-y-3">
                                <Label for="age" class="text-[11px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Usia (Tahun)</Label>
                                <input 
                                    id="age" 
                                    type="number" 
                                    v-model.number="age" 
                                    placeholder="Contoh: 25" 
                                    class="h-16 w-full px-6 bg-white border border-zinc-100 rounded-[22px] focus:outline-none focus:ring-4 focus:ring-[#36d362]/10 focus:border-[#36d362] text-zinc-900 font-black shadow-sm transition-all placeholder:text-zinc-300" 
                                />
                            </div>

                            <div class="space-y-3">
                                <Label for="weight" class="text-[11px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Berat (kg)</Label>
                                <input 
                                    id="weight" 
                                    type="number" 
                                    v-model.number="weight" 
                                    placeholder="Contoh: 65" 
                                    class="h-16 w-full px-6 bg-white border border-zinc-100 rounded-[22px] focus:outline-none focus:ring-4 focus:ring-[#36d362]/10 focus:border-[#36d362] text-zinc-900 font-black shadow-sm transition-all placeholder:text-zinc-300" 
                                />
                            </div>

                            <div class="space-y-3">
                                <Label for="height" class="text-[11px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Tinggi (cm)</Label>
                                <input 
                                    id="height" 
                                    type="number" 
                                    v-model.number="height" 
                                    placeholder="Contoh: 170" 
                                    class="h-16 w-full px-6 bg-white border border-zinc-100 rounded-[22px] focus:outline-none focus:ring-4 focus:ring-[#36d362]/10 focus:border-[#36d362] text-zinc-900 font-black shadow-sm transition-all placeholder:text-zinc-300" 
                                />
                            </div>

                            <div class="space-y-3 md:col-span-2">
                                <Label class="text-[11px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Tingkat Aktivitas Harian</Label>
                                <Select v-model="activity">
                                    <SelectTrigger class="h-16 !bg-white border-zinc-100 rounded-[22px] focus:ring-4 focus:ring-[#36d362]/10 focus:border-[#36d362] shadow-sm transition-all group overflow-hidden">
                                        <div class="font-black text-zinc-900 truncate">
                                            <SelectValue placeholder="Pilih Tingkat Aktivitas" />
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent class="rounded-[28px] border border-zinc-100 shadow-2xl p-2 bg-white animate-in zoom-in-95 duration-300">
                                        <SelectItem value="1.2" class="rounded-2xl py-4 focus:bg-green-50 text-zinc-900 focus:text-[#36d362] font-black transition-colors cursor-pointer mb-1 whitespace-normal">Sedentari (Jarang Olahraga)</SelectItem>
                                        <SelectItem value="1.375" class="rounded-2xl py-4 focus:bg-green-50 text-zinc-900 focus:text-[#36d362] font-black transition-colors cursor-pointer mb-1 whitespace-normal">Ringan (1-3 hari/minggu)</SelectItem>
                                        <SelectItem value="1.55" class="rounded-2xl py-4 focus:bg-green-50 text-zinc-900 focus:text-[#36d362] font-black transition-colors cursor-pointer mb-1 whitespace-normal">Sedang (3-5 hari/minggu)</SelectItem>
                                        <SelectItem value="1.725" class="rounded-2xl py-4 focus:bg-green-50 text-zinc-900 focus:text-[#36d362] font-black transition-colors cursor-pointer mb-1 whitespace-normal">Berat (6-7 hari/minggu)</SelectItem>
                                        <SelectItem value="1.9" class="rounded-2xl py-4 focus:bg-green-50 text-zinc-900 focus:text-[#36d362] font-black transition-colors cursor-pointer whitespace-normal">Ekstra (Atlet / Kerja Fisik)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div class="flex gap-4 mt-8">
                            <button @click="calculateCalorie" class="flex-1 h-20 bg-[#36d362] hover:bg-green-600 text-white font-black rounded-[24px] shadow-2xl shadow-green-100 transition-all uppercase tracking-[0.2em] text-sm hover:-translate-y-1 active:translate-y-0.5 duration-300">
                                Hitung Kalori Sekarang
                            </button>
                            <button @click="reset" class="w-20 h-20 flex items-center justify-center border border-zinc-100 rounded-[24px] hover:bg-zinc-50 transition-all text-zinc-300 hover:text-zinc-600 shadow-sm bg-white">
                                <RefreshCcw class="w-7 h-7" />
                            </button>
                        </div>

                        <Transition
                            enter-active-class="transition duration-500 ease-out"
                            enter-from-class="transform translate-y-8 opacity-0"
                            enter-to-class="transform translate-y-0 opacity-100"
                        >
                            <div v-if="tdeeResult" class="mt-4 space-y-8">
                                <div class="p-10 rounded-[32px] bg-gradient-to-br from-[#36d362] to-green-600 text-white shadow-2xl relative overflow-hidden group border-4 border-white">
                                    <div class="relative z-10 text-center space-y-3">
                                        <p class="text-green-50 text-[11px] font-black uppercase tracking-[0.2em] opacity-80">Kebutuhan Kalori Harian</p>
                                        <div class="text-7xl font-black tracking-tighter">
                                            {{ Math.round(tdeeResult) }} <span class="text-2xl font-bold opacity-60">kkal</span>
                                        </div>
                                        <div class="pt-4">
                                            <span class="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider">Total Daily Energy Expenditure</span>
                                        </div>
                                    </div>
                                    <Activity class="absolute -bottom-6 -right-6 w-40 h-40 text-white/10 transform rotate-12 group-hover:scale-110 transition-transform duration-700" />
                                </div>

                                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div v-for="goal in calorieGoals" :key="goal.label" class="p-6 rounded-[24px] bg-gray-50 border border-gray-100 text-center space-y-3 hover:border-[#36d362] transition-colors group">
                                        <p class="text-[10px] font-black uppercase text-zinc-400 tracking-widest">{{ goal.label }}</p>
                                        <div class="text-3xl font-black text-black group-hover:text-[#36d362] transition-colors">
                                            {{ goal.calories }} <span class="text-xs font-bold opacity-40">kkal</span>
                                        </div>
                                        <p class="text-[11px] font-bold text-zinc-500 uppercase">{{ goal.desc }}</p>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                    </CardContent>

                    <CardFooter class="bg-gray-50 border-t border-gray-100 p-8 rounded-b-[32px]">
                        <div class="flex gap-4 text-[13px] text-zinc-500 leading-relaxed font-medium">
                            <Info class="w-6 h-6 shrink-0 text-[#36d362]" />
                            <p>Hasil dihitung menggunakan rumus <span class="font-black text-black">Mifflin-St Jeor</span>. Ini adalah estimasi energi harian berdasarkan profil fisik dan tingkat aktivitas yang Anda masukkan.</p>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </GuestLayout>
</template>

<style scoped>
</style>


<style scoped>
</style>
