import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../router';

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),

    actions: {
        async login(email, password) {
            const user = await axios.post(`${baseUrl}client-api/auth/login`, { email, password });
            // update pinia state
            this.user = user;

            localStorage.setItem('user', JSON.stringify(user));

            if (this.user.data.data.user.type == 'client') {
                router.push('/transactions');
            } else {
                router.push('/dashboard/transactions');
            }

        },
        async adminLogin(email, password) {
            const user = await axios.post(`${baseUrl}dashboard-api/auth/login`, { email, password });
            // update pinia state
            this.user = user;

            localStorage.setItem('user', JSON.stringify(user));

            if (this.user.data.data.user.type == 'client') {
                router.push('/transactions');
            } else {
                router.push('/dashboard/transactions');
            }

        }

        // async register(user) {
        //   await axios.post(`${baseUrl}/register`, user);
        //   router.push('/auth/login');
        // },

        // logout() {
        //   this.user = null;
        //   localStorage.removeItem('user');
        //   router.push('/auth/login');
        // }
    }
});
