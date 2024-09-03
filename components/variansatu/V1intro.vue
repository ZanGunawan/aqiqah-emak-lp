<template>
    <section id="about" class="pb-5">
        <div class="container">
            <h4 class="text-center mb-3 mb-md-5">Perkenalkan <span class="text-success fw-bold ">Aqiqah Emak 😍</span>
            </h4>
            <div class="row">
                <div class="col-12 col-md-6 d-flex justify-content-center mb-5 mb-md-0">
                    <img class="img-fluid" src="~/assets/images/variansatu/about.png" alt="">
                </div>
                <div class="col-12 col-md-6 d-flex align-items-center">
                    <div class="text-wrapper">
                        <h6 class="lh-base mb-5">Aqiqah Emak menyediakan berbagai layanan aqiqah, termasuk
                            penyediaan
                            kambing,
                            catering, dan
                            qurban. <br><br>
                            Kami berpusat di Bekasi dan melayani dengan penuh dedikasi untuk wilayah Jabodetabek dan
                            sekitarnya. <br><br>
                            Kepercayaan dan kepuasan pelanggan adalah prioritas kami. Kami memastikan setiap tahap
                            aqiqah—dari pemotongan, pembersihan karkas, pengolahan, hingga pengantaran—mematuhi standar
                            syari'i</h6>
                        <div class="button-wrapper d-flex flex-row">
                            <a href="javascript:;" @click="handleClick" class="btn btn-success">
                                <i class="bi bi-whatsapp me-2"></i>Konsultasi dengan Kami
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        handleClick() {
            if (window.fbq) {
                window.fbq('track', 'WaKonsultasi'); // Melacak event klik
            }
            // Arahkan ke WhatsApp dengan pesan yang telah diisi
            const phoneNumber = '6285692435389'; // Ganti dengan nomor WhatsApp Anda
            const message = 'Assalamualaikum Emak. Sebelum pesan saya mau tanya tanya donk Mak'; // Pesan yang akan dikirim
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(url, '_blank'); // Membuka WhatsApp dengan pesan
        }
    },
}
</script>

<style scoped>
@media (max-width: 576px) {
    a {
        width: 100%;
    }
}
</style>