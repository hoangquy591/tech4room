import {AuthService} from "../_services/auth.service";
import axios from 'axios';

export const auth = {
    namespaced: true,
    state: {
        token: localStorage.getItem('token') || '',
        user: {}
    },
    actions: {
        login({commit}, user) {
            return AuthService.login(user)
                .then(
                    (response) => {
                        if (response.status === 200) {
                            localStorage.setItem('token', response.data.token);
                            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
                            commit('loginSuccess', response.data);
                            return Promise.resolve(response.data);
                        }
                    })
                .catch(
                    (error) => {
                        commit('loginFailure');
                        return Promise.reject(error.response);
                    })
        },
        logout({commit}) {
            return AuthService.logout().then(
                (response) => {
                    localStorage.removeItem('token');
                    delete axios.defaults.headers.common['Authorization'];
                    commit('logout');
                    return Promise.resolve(response);
                }
            ).catch(
                (error) => {
                    commit('logout');
                    return Promise.resolve(error.response);
                });
        },
        register({commit}, user) {
            return AuthService.register(user).then(
                (response) => {
                    commit('registerSuccess');
                    return Promise.resolve(response.data);
                },
                (error) => {
                    commit('registerFailure');
                    return Promise.reject(error.response)
                }
            );
        }
    },
    mutations: {
        loginSuccess(state, data) {
            state.token = data.token;
            state.user = data.user;
        },
        loginFailure(state) {
            state.token = "";
            state.user = {};
        },
        logout(state) {
            state.token = "";
            state.user = {};
        },
        registerSuccess(state) {
        },
        registerFailure(state) {
        }
    },
    getters: {
        isLogged: state => {
            return !!state.token;
        },
        loggedUser: state => {
            return state.user
        }
    }
};
