<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="promoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div
                    class="modal-content rounded-5 border-0 pb-4 px-3 d-flex flex-column gap-2 justify-content-center align-items-center">
                    <img width="200px" style="margin-top: -100px;" src="~/assets/images/promo.png" alt="">
                    <div class="mb-3">
                        <h1 class="modal-title fs-5 text-center">Pengen dapet promo special hari ini?? Klik tombol
                            dibawah, admin
                            bakal kirimin promo super ke kamu</h1>
                    </div>
                    <button type="button" class="btn btn-success"><i class="bi bi-whatsapp me-2"></i>Ambil
                        Promo</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
    mounted() {
        $('#promoModal').modal('show');
    },
}
</script>

<style scoped></style>