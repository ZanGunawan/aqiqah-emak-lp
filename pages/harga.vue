<template>
    <div>
        <Navbar />
        <div class="header" style="margin-top: 90px;">
            <Promo />
        </div>
        <ListHarga />
        <Footer />
        <!-- component -->
        <PromoModal />
        <WaButton />
        <Toast />
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