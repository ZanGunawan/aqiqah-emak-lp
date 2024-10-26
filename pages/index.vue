<template>
    <div class="position-relative">
        <Navbar />
        <Header />
        <Why />
        <Offer />
        <Promo />
        <TestFood />
        <Benefit />
        <Footer />

        <!-- element -->
        <WaButton />
        <Toast />
        <PromoModal />
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    layout: "default",
    mounted() {
        this.$store.dispatch('toast/cycleToasts');
    },
    async asyncData({ store }) {
        // store.dispatch('toast/fetchData')
        store.dispatch('index/setTimer')
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