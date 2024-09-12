<template>
    <div v-if="toast" class="toast-container position-fixed">
        <!-- <div class="toast" role="alert" aria-live="assertive" aria-atomic="true"> -->
        <div class="ms-3" :class="visible ? 'toast-box' : ''">
            <div class="shadow bg-light p-3 d-flex align-items-center rounded-3 gap-2">
                <div style="width: 40px; height: 40px;"
                    class="rounded-circle d-flex align-items-center justify-content-center bg-success">
                    <i class="bi bi-handbag-fill text-white"></i>
                </div>
                <div>
                    <p class="mb-0" style="font-size: 12px;"><strong>{{ toast['Nama Pemesan'] }}</strong> dari
                        <strong>{{
                            toast['Location']
                        }}</strong> telah
                        membeli <strong>Paket {{ toast['Nama Paket'] }} {{
                            toast['Jumlah Nasi Box'] }} Box</strong>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('toast', ['currentToast']),
        toast: {
            get() {
                return this.currentToast
            }
        },
        visible() {
            return this.$store.state.toast.toastVisible;
        }
    },
    methods: {
        hideToast() {
            this.$store.commit('HIDE_TOAST');
        },
    }
}
</script>

<style scoped>
.toast-container {
    z-index: 99;
    top: 80px;
    right: 5px;
}

.toast-box {
    animation: moveBox 8s infinite;
}

@keyframes moveBox {
    0% {
        transform: translateX(150%);
    }

    10% {
        transform: translateX(-5px);
    }

    75% {
        transform: translateX(-5px);
    }

    100% {
        transform: translateX(150%);
    }
}
</style>