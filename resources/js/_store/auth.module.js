import {AuthService} from "../_services/auth.service";
// import axios from 'axios';

export const auth = {
    namespaced: true,
    state: {
        token: localStorage.getItem('token') || '',
        user: JSON.parse(localStorage.getItem('user')) || {}
    },
    actions: {
        checkLogged({commit}) {
            return AuthService.checkLogged().catch(
                error => {
                    commit('logout');
                    return Promise.reject(error);
                }
            )
        },
        login({commit}, user) {
            return AuthService.login(user)
                .then(
                    (response) => {
                        if (response.status === 200) {
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
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
            state.token = data.token;
            state.user = data.user;
        },
        loginFailure(state) {
            state.token = "";
            state.user = {};
        },
        logout(state) {
            localStorage.clear();
            delete axios.defaults.headers.common['Authorization'];
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
