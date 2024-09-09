<template>
    <main class="position-relative">
        <Navbar />

        <!-- element -->
        <WaButton />
        <Toast />
        <PromoModal />
    </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
    mounted() {
        this.$store.dispatch('toast/cycleToasts');
    },
    async asyncData({ store }) {
        store.dispatch('toast/fetchData')
    },
    computed: {
        ...mapState('toast', ['toasts'])
    },
    watch: {
        toasts(newValue) {
            if (newValue.length > 0) {
                // Data toasts telah tersedia, jalankan fungsi showNextToast
                this.$store.dispatch('toast/cycleToasts');
            }
        }
    }
}
</script>

<style scoped></style>