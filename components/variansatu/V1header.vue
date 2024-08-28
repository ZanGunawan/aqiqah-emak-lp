<template>
    <section id="header" class="py-5 mt-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 d-flex align-items-center order-2 order-md-1">
                    <div class="header-wrapper">
                        <div class="text-wrapper mb-5">
                            <h1 class="fw-bold lh-base">Mulai dari Hanya <strong class="text-success">1,7 Juta!</strong>
                                Aqiqah Berkualitas dengan Harga
                                Terjangkau</h1>
                            <p>Rayakan momen spesial dengan aqiqah yang penuh berkah. Mulai dari hanya 1,7 juta, kami
                                menawarkan layanan aqiqah yang berkualitas untuk memastikan hari istimewa Anda berjalan
                                lancar 🥰</p>
                        </div>
                        <div class="button-wrapper gap-2 d-flex flex-column flex-md-row">
                            <a href="javascript:;" @click="downloadPDF" class="btn btn-success"><i
                                    class="bi bi-download me-2"></i>Download
                                Pricelist</a>
                            <a href="#problem" class="btn btn-outline-success">Lebih Detail</a>
                        </div>
                    </div>

                </div>
                <div class="col-12 col-md-6 order-1 order-md-2">
                    <img class="img-fluid" src="~/assets/images/variansatu/header.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        downloadPDF() {
            // Gantilah URL dengan path ke file PDF Anda
            const url = '/pdf/file.pdf';

            // Membuat link untuk unduhan
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Price List Aqiqah Emak.pdf'); // Nama file yang akan diunduh
            document.body.appendChild(link);
            link.click();

            if (window.fbq) {
                window.fbq('track', 'PriceListHeader'); // Ganti 'PriceList' dengan nama event yang sesuai
            }

            link.remove(); // Hapus link setelah mengklik
        }
    },
}
</script>

<style scoped></style>