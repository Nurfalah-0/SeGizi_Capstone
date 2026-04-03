<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import { ShieldBan, ShieldCheck } from 'lucide-vue-next';
import { onUnmounted, ref } from 'vue';
import Heading from '@/components/Heading.vue';
import TwoFactorRecoveryCodes from '@/components/TwoFactorRecoveryCodes.vue';
import TwoFactorSetupModal from '@/components/TwoFactorSetupModal.vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTwoFactorAuth } from '@/composables/useTwoFactorAuth';
import GuestLayout from '@/layouts/GuestLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { disable, enable } from '@/routes/two-factor';

type Props = {
    requiresConfirmation?: boolean;
    twoFactorEnabled?: boolean;
};

withDefaults(defineProps<Props>(), {
    requiresConfirmation: false,
    twoFactorEnabled: false,
});

const { hasSetupData, clearTwoFactorAuthData } = useTwoFactorAuth();
const showSetupModal = ref<boolean>(false);

onUnmounted(() => {
    clearTwoFactorAuthData();
});
</script>

<template>
    <GuestLayout>
        <Head title="Keamanan Akun (2FA)" />

        <!-- Green Header Section -->
        <div class="bg-[#EAFBF0] py-16 px-8 md:px-20">
            <div class="max-w-4xl mx-auto">
                <h1 class="text-4xl font-black text-zinc-900 tracking-tight">Autentikasi Dua Faktor</h1>
                <p class="text-zinc-600 font-medium mt-3">Tambahkan lapisan keamanan ekstra pada akun Anda untuk mencegah akses yang tidak diinginkan.</p>
            </div>
        </div>

        <div class="max-w-4xl mx-auto w-full px-8 py-12">
            <SettingsLayout>
                <div class="space-y-8 bg-white p-8 rounded-[32px] shadow-sm border border-zinc-100">
                    <Heading
                        variant="small"
                        title="Pengaturan Keamanan"
                        description="Kelola metode verifikasi tambahan untuk proses masuk Anda."
                    />

                    <div
                        v-if="!twoFactorEnabled"
                        class="flex flex-col items-start justify-start space-y-4"
                    >
                        <Badge variant="destructive">Nonaktif</Badge>

                        <p class="text-muted-foreground font-medium">
                            Saat Anda mengaktifkan autentikasi dua faktor, Anda akan diminta memasukkan PIN keamanan saat login. PIN ini dapat diambil dari aplikasi pendukung TOTP di perangkat Anda.
                        </p>

                        <div>
                            <Button
                                v-if="hasSetupData"
                                @click="showSetupModal = true"
                                class="bg-[#36d362] hover:bg-green-600 font-bold px-6 py-5 rounded-xl shadow-md"
                            >
                                <ShieldCheck />Lanjutkan Pengaturan
                            </Button>
                            <Form
                                v-else
                                v-bind="enable.form()"
                                @success="showSetupModal = true"
                                #default="{ processing }"
                            >
                                <Button type="submit" :disabled="processing" class="bg-[#36d362] hover:bg-green-600 font-bold px-6 py-5 rounded-xl shadow-md">
                                    <ShieldCheck />Aktifkan 2FA</Button
                                ></Form
                            >
                        </div>
                    </div>

                    <div
                        v-else
                        class="flex flex-col items-start justify-start space-y-4"
                    >
                        <Badge variant="default" class="bg-green-100 text-green-700 hover:bg-green-200">Aktif</Badge>

                        <p class="text-muted-foreground font-medium">
                            Dengan autentikasi dua faktor yang aktif, Anda akan diminta memasukkan PIN keamanan saat login untuk memastikan keamanan maksimal.
                        </p>

                        <TwoFactorRecoveryCodes />

                        <div class="relative inline">
                            <Form v-bind="disable.form()" #default="{ processing }">
                                <Button
                                    variant="destructive"
                                    type="submit"
                                    :disabled="processing"
                                    class="font-bold px-6 py-5 rounded-xl"
                                >
                                    <ShieldBan />
                                    Nonaktifkan 2FA
                                </Button>
                            </Form>
                        </div>
                    </div>

                    <TwoFactorSetupModal
                        v-model:isOpen="showSetupModal"
                        :requiresConfirmation="requiresConfirmation"
                        :twoFactorEnabled="twoFactorEnabled"
                    />
                </div>
            </SettingsLayout>
        </div>
    </GuestLayout>
</template>
