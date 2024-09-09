export default {
    SHOW_TOAST(state) {
        state.toastVisible = true;
    },
    HIDE_TOAST(state) {
        state.toastVisible = false;
    },
    SET_CURRENT_TOAST_INDEX(state, index) {
        state.currentToastIndex = index;
    },
    SET_DATA(state, data) {
        state.toasts = data;
    },
}