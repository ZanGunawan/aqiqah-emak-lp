export default {
    currentToast(state) {
        return state.toastVisible ? state.toasts[state.currentToastIndex] : null;
    }
}