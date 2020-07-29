import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import {auth} from "./auth.module";

Vue.use(Vuex);

const token = localStorage.getItem('token');

if (token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
}

export const store = new Vuex.Store({
    modules: {
        auth
    }
});
