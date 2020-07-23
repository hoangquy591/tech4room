import Vue from 'vue';
import VueRouter from "vue-router";
import {routes} from "./routes";
import {store} from "../_store";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters['auth/isLogged']) {
            next();
        } else {
            next('/login');
        }
    } else {
        next()
    }
});

