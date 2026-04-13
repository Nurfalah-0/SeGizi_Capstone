<script setup lang="ts">
import { Form, Head, Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
import DeleteUser from '@/components/DeleteUser.vue';
import Heading from '@/components/Heading.vue';
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GuestLayout from '@/layouts/GuestLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';

type Props = {
    mustVerifyEmail: boolean;
    status?: string;
};

defineProps<Props>();

const page = usePage();
const user = computed(() => page.props.auth.user);
</script>

<template>
    <GuestLayout>
        <Head title="Pengaturan Profil" />

        <!-- Green Header Section -->
        <div class="bg-[#EAFBF0] py-16 px-8 md:px-20">
            <div class="max-w-4xl mx-auto">
                <h1 class="text-4xl font-black text-zinc-900 tracking-tight">Pengaturan Akun</h1>
                <p class="text-zinc-600 font-medium mt-3">Kelola data pribadi dan preferensi kesehatan Anda.</p>
            </div>
        </div>

        <div class="max-w-4xl mx-auto w-full px-8 py-12">
            <SettingsLayout>
                <div class="flex flex-col space-y-8 bg-white p-8 rounded-[32px] shadow-sm border border-zinc-100">
                    <Heading
                        variant="small"
                        title="Informasi Profil"
                        description="Perbarui nama dan alamat email akun Anda"
                    />

                    <Form
                        v-bind="ProfileController.update.form()"
                        class="space-y-6"
                        v-slot="{ errors, processing, recentlySuccessful }"
                    >
                        <div class="grid gap-2">
                            <Label for="name" class="font-bold">Nama Lengkap</Label>
                            <Input
                                id="name"
                                class="bg-zinc-50 border-none rounded-xl px-5 py-6 focus:bg-white transition-all"
                                name="name"
                                :default-value="user?.name"
                                required
                                autocomplete="name"
                                placeholder="Nama sesuai KTP/ID"
                            />
                            <InputError class="mt-2" :message="errors.name" />
                        </div>

                        <div class="grid gap-2">
                            <Label for="email" class="font-bold">Alamat Email</Label>
                            <Input
                                id="email"
                                type="email"
                                class="bg-zinc-50 border-none rounded-xl px-5 py-6 focus:bg-white transition-all"
                                name="email"
                                :default-value="user?.email"
                                required
                                autocomplete="username"
                                placeholder="nama@contoh.com"
                            />
                            <InputError class="mt-2" :message="errors.email" />
                        </div>

                        <div v-if="mustVerifyEmail && !user?.email_verified_at">
                            <p class="-mt-4 text-sm text-muted-foreground font-medium">
                                Alamat email Anda belum diverifikasi.
                                <Link
                                    href="/email/verification-notification"
                                    as="button"
                                    class="text-[#36d362] font-black underline decoration-green-200 underline-offset-4 hover:decoration-[#36d362] transition-all"
                                >
                                    Klik di sini untuk mengirim ulang email verifikasi.
                                </Link>
                            </p>

                            <div
                                v-if="status === 'verification-link-sent'"
                                class="mt-2 text-sm font-black text-green-600"
                            >
                                Tautan verifikasi baru telah dikirim ke alamat email Anda.
                            </div>
                        </div>

                        <div class="flex items-center gap-4">
                            <Button
                                :disabled="processing"
                                class="bg-[#36d362] hover:bg-green-600 font-bold px-8 py-6 rounded-xl transition-all shadow-md shadow-green-50"
                                >Simpan Perubahan</Button
                            >

                            <Transition
                                enter-active-class="transition ease-in-out"
                                enter-from-class="opacity-0"
                                leave-active-class="transition ease-in-out"
                                leave-to-class="opacity-0"
                            >
                                <p
                                    v-show="recentlySuccessful"
                                    class="text-sm font-black text-green-600"
                                >
                                    Berhasil disimpan.
                                </p>
                            </Transition>
                        </div>
                    </Form>
                </div>

                <div class="mt-8 bg-red-50 p-8 rounded-[32px] border border-red-100">
                    <DeleteUser />
                </div>
            </SettingsLayout>
        </div>
    </GuestLayout>
</template>
