import { defineStore } from 'pinia';
import axios from 'axios';

const baseUrl = `${import.meta.env.VITE_API_URL}client-api`;

export const useTransactionStore = defineStore({
    id: 'transaction',
    state: () => ({
        paymentUrl: null,
        loading: false
    }),

    actions: {
        async store(amount) {
            const TOKEN = JSON.parse(localStorage.getItem('user')).data.data.token;
            this.loading = true;
            const transaction = await axios({
                method: 'post',
                url: `${baseUrl}/transactions`,
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                },
                data: {
                    amount
                }
            });
            this.loading = false;
            // update pinia state
            this.paymentUrl = transaction.data.data.paymentUrl;
            window.open(this.paymentUrl, '_blank');
        }
    }
});
