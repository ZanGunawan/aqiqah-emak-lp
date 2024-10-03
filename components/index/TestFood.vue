<template>
    <section id="test-food" class="bg-success py-5">
        <div class="container">
            <h4 class="text-center text-white fw-bold">Mau Test Food?</h4>
            <h6 class="text-center text-white mb-4">Yuk ikuti langkah nya😊</h6>
            <div class="row mb-3 mb-md-4">
                <div class="col-12 col-md-6 col-lg-4 mb-3">
                    <div
                        class="text-center card border-0 shadow rounded-3 p-3 p-md-4 d-flex flex-column justify-content-center align-items-center gap-2">
                        <span class="material-symbols-outlined text-success" style="font-size: 48px;">
                            support_agent
                        </span>
                        <h5 class="mb-0">Hubungi Customer Service</h5>
                        <p>Kirim pesan ke tim kami di WhatsApp untuk memulai proses test food gratis. Tim kami siap
                            membantu Anda dengan informasi dan panduan.</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3">
                    <div
                        class="text-center card border-0 shadow rounded-3 p-3 p-md-4 d-flex flex-column justify-content-center align-items-center gap-2">
                        <span class="material-symbols-outlined text-success" style="font-size: 48px;">
                            event_available
                        </span>
                        <h5 class="mb-0">Pilih Menu dan Alamat Pengiriman</h5>
                        <p>Pilih menu test food yang Anda inginkan dan kirimkan alamat pengiriman Anda. Kami akan
                            menyiapkan paket sesuai dengan pilihan dan lokasi Anda.</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3">
                    <div
                        class="text-center card border-0 shadow rounded-3 p-3 p-md-4 d-flex flex-column justify-content-center align-items-center gap-2">
                        <span class="material-symbols-outlined text-success" style="font-size: 48px;">
                            sentiment_very_satisfied
                        </span>
                        <h5 class="mb-0">Terima dan Nikmati Test Food</h5>
                        <p>Paket test food akan dikirimkan langsung ke alamat Anda. Cicipi hidangan kami dan rasakan
                            kualitasnya tanpa harus keluar rumah.</p>
                    </div>
                </div>
            </div>
            <div id="paket" class="cta d-flex justify-content-center mb-5">
                <a href="#" class="btn btn-danger"><i class="bi bi-whatsapp me-2"></i>Request Test
                    Food</a>
            </div>

            <hr class="text-white">

            <!-- promo bulan ini -->
            <div class="card border-0 rounded-3 shadow px-2 px-md-4 py-4 py-md-4 mt-5">
                <h4 class="text-center fw-bold mb-4">
                    Paket Mewah untuk Tamu Undangan Anda
                </h4>
                <div class="row">
                    <div class="col-12 col-md-6 mb-3">
                        <img src="~/assets/images/promo-satu.jpg" class="img-fluid" alt="">
                    </div>
                    <div class="col-12 col-md-6 mb-3">
                        <img src="~/assets/images/promo-dua.jpg" class="img-fluid" alt="">
                    </div>
                    <div class="col-12 col-md-6 mb-3">
                        <img src="~/assets/images/promo-tiga.jpg" class="img-fluid" alt="">
                    </div>
                    <div class="col-12 col-md-6 mb-3">
                        <img src="~/assets/images/promo-empat.jpg" class="img-fluid" alt="">
                    </div>
                </div>
                <div class="cta d-flex justify-content-center">
                    <a href="/harga" class="btn btn-danger"><i class="bi bi-card-list me-2"></i>Lihat Harga</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
@media (max-width: 576px) {
    a {
        width: 100%;
    }
}
</style>