export default function ({ store, route }) {
  store.commit('SET_LOADING', true);
  setTimeout(() => {
    store.commit('SET_LOADING', false);
  }, 500);
}
