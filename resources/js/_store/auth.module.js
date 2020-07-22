import { AuthService } from "../_services/auth.service";

const user = JSON.parse(localStorage.getItem('user'));
const initState = user
                    ? { status: { logged: true }, user }
                    : { status: { logged: false}, user: null};

export const auth = {
    namespaced: true,
    state: {
        logged: false,
        token: localStorage.getItem('token') || '',
        user: {}
    },
    actions: {
        login({commit}, user) {
            return AuthService.login(user).then(
                response => {
                    console.log(response);
                    commit('loginSuccess', response.data);
                    return Promise.resolve(response);
                },
                error => {
                    console.log(error);
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            )
        },

        logout({commit}) {
            AuthService.logout();
            commit('logout');
        },

        register({commit}, user) {
            return AuthService.register(user).then(
                response => {
                    commit('registerSuccess');
                    return Promise.resolve(response.data);
                },
                error => {
                    commit('registerFailure');
                    return Promise.reject(error)
                }
            );
        }
    },
    mutations: {
        loginSuccess(state, data) {
            state.logged = true;
            state.user = data.user;
            state.token = data.token;
        },
        loginFailure(state) {
            state.logged = false;
            state.user = null;
        },
        // logout(state) {
        //     state.status.logged = false;
        //     state.user = null;
        // },
        registerSuccess(state) {
            state.logged = false;
        },
        registerFailure(state) {
            state.logged = false;
        }
    }
};
