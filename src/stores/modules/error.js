import _ from "lodash";

export default {
    namespaced: true,
    state: {
        errors: []
    },
    actions: {
        clearErrors({commit}) {
            commit('setErrors', [])
        },
        addError({commit, state}, data) {
            const response = data.response;
            let error;

            if (_.isEmpty(response)) {
                error = {
                    status: 500,
                    title: 'Internal Server Error',
                    message: 'Internal Server Error',
                    data: {},
                    errors: {}
                }
            } else {
                error = {
                    status: response.status,
                    title: response.statusText,
                    message: !_.isEmpty(response.data) ? response.data.message : 'Internal Server Error',
                    data: !_.isEmpty(response.data) ? response.data.data : {},
                    errors: !_.isEmpty(response.data) ? response.data.errors: {}
                }
            }

            console.error(error);
            let errors = _.cloneDeep(state.errors);
            errors.push(error);
            commit('setErrors', errors)
        },

    },
    mutations: {
        setErrors(state, errors) {
            state.errors = errors;
        }
    },
    getters: {
        errors(state) {
            return _.cloneDeep(state.errors)
        },
        hasErrors(state) {
            return !_.isEmpty(state.errors);
        }
    }
}