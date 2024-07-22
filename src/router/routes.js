import AppLayout from '@/layout/AppLayout.vue';

export default [
    {
        path: '/dashoard',
        component: AppLayout,
        children: [
            // {
            //     path: '/',
            //     name: 'dashboard',
            //     component: () => import('@/views/Dashboard.vue'),
            //     meta: {
            //         requiresAuth: true
            //     }
            // },
            {
                path: '/dashoard/transactions',
                name: 'AllTransactions',
                component: () => import('@/views/pages/Dashboard/Transaction.vue'),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },
    {
        path: '/dashoard/login',
        name: 'adminLogin',
        component: () => import('@/views/pages/auth/AdminLogin.vue')
    },
    {
        path: '/auth/login',
        name: 'login',
        component: () => import('@/views/pages/auth/Login.vue')
    },
    {
        path: '/transactions',
        name: 'transactions',
        component: () => import('@/views/pages/Client/Transaction.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/pages/notfound',
        name: 'notfound',
        component: () => import('@/views/pages/NotFound.vue')
    },
]