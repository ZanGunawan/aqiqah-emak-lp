export const state = () => ({
    loading: false
});

export const mutations = {
    SET_LOADING(state, status) {
        state.loading = status;
    }
};

export const getters = {
    isLoading(state) {
        return state.loading;
    }
};
