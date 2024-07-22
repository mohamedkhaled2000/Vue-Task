import { createRouter, createWebHistory } from 'vue-router';
import Routes from './routes';
import { useAuthStore } from '../store/auth';

const router = createRouter({
    history: createWebHistory(),
    routes: Routes
});

router.beforeEach(async (to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/auth/login'];
    const authRequired = !publicPages.includes(to.path);
    
    const auth = useAuthStore();
    // const permissions = JSON.parse(localStorage.getItem('user')).permissions;

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (authRequired && !auth.user) {
            auth.returnUrl = to.fullPath;
            return next('/auth/login');
        } else next();
    } else {
        next();
    }
});

export default router;
