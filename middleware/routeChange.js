export default function ({ store, route }) {
  console.log('berubah')
  store.commit('SET_LOADING', true);
  setTimeout(() => {
    store.commit('SET_LOADING', false);
  }, 500);
}
