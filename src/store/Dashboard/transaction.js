import { defineStore } from 'pinia';
import axios from 'axios';

const baseUrl = `${import.meta.env.VITE_API_URL}dashboard-api`;

export const useAdminTransactionStore = defineStore({
    id: 'AdminTransaction',
    state: () => ({
        transactions: [],
        loading: false,
        paginations: {}
    }),

    actions: {
        async allTransaction() {
            const TOKEN = JSON.parse(localStorage.getItem('user')).data.data.token;
            console.log('🚀 ~ all ~ TOKEN:', TOKEN);
            this.loading = true;
            const transaction = await axios({
                method: 'post',
                url: `${baseUrl}/transactions`,
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            });
            this.loading = false;

            this.transactions = transaction.data.data.transactions;
            console.log("🚀 ~ allTransaction ~ this.transactions:", this.transactions)
            this.paginations = transaction.data.data.paginations;
            console.log('🚀 ~ allTransaction ~ this.paginations:', transaction.data.data);
        }
    }
});
