import { ref } from 'vue';

export const globalLoading = ref(false);

export const triggerLoading = (duration = 1000) => {
    globalLoading.value = true;
    setTimeout(() => {
        globalLoading.value = false;
    }, duration);
};
