<script setup>
import { useLayout } from '@/layout/composables/layout';
import { ref, computed } from 'vue';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import { useTransactionStore } from '@/store/transaction';

const { layoutConfig } = useLayout();
const amount = ref('');

const transaction = useTransactionStore()

const logoUrl = computed(() => {
    return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});

</script>

<template>
    <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            <img :src="logoUrl" alt="Sakai logo" class="mb-5 w-6rem flex-shrink-0" />
            <div
                style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5">
                        <img src="/demo/images/login/avatar.png" alt="Image" height="50" class="mb-3" />
                        <div class="text-900 text-3xl font-medium mb-3">Welcome, Isabel!</div>
                        <span class="text-600 font-medium">Please Enter your amount</span>
                    </div>

                    <div>
                        <label class="block text-900 text-xl font-medium mb-2">Amount</label>
                        <InputNumber placeholder="Amount" class="w-full md:w-30rem mb-5" style="padding: 1rem"
                            v-model="amount" />

                        <Button label="Pay Now" class="w-full p-3 text-xl" @click="transaction.store(amount)" :loading="transaction.loading"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>
