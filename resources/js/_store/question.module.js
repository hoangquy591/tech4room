import {QuestionService} from "../_services/question.service";

export const question = {
    namespaced: true,
    state: {

    },
    actions: {
        all({commit}, record, page) {
            return QuestionService.all(record, page)
                .then(
                    (response) => {
                        return Promise.resolve(response.data);
                    }
                )
                .catch(
                    (error) => {
                        return Promise.reject(error.response);
                    }
                )
        },
        create({commit}, question) {
            return QuestionService.create(question)
                .then(
                    (response) => {
                        if (response.status === 200) {
                            // commit('createSuccess', response.data);
                            return Promise.resolve(response.data);
                        }
                    })
                .catch(
                    (error) => {
                        // commit('createFailure');
                        return Promise.reject(error.response);
                    })
        }
    },
    mutations: {
    },
    getters: {
    }
};
