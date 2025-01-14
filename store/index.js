export const state = () => ({
  loading: true,
  navbar: false,
});

export const mutations = {
  SET_LOADING(state, status) {
    state.loading = status;
    state.navbar = false
  },
  SET_NAVBAR(state, status) {
    state.navbar = status
  }
};

export const getters = {
  isLoading(state) {
    return state.loading;
  },
  isNavbar(state) {
    return state.navbar
  }
};
