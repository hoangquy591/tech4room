import Vue from 'vue';
import VueRouter from "vue-router";
import {routes} from "./routes";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/', '/login', '/register', '/posts', '/questions', '/discussions', '/forgot'];
    const authRequired = !publicPages.includes(to.path);
    const logged = localStorage.getItem('user');

    if (authRequired && !logged) {
        return next('/login');
    }
    next();
});
