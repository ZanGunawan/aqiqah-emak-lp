<template>
    <section id="order" class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 mb-4 mb-md-0">
                    <img class="img-fluid" src="~/assets/images/variansatu/cta.png" alt="">
                </div>
                <div class="col-12 col-md-6 d-flex align-items-center">
                    <div class="text-wrapper">
                        <h1 class="fw-bold text-success mb-3">Cashback s/d 500k 😍</h1>
                        <p class="mb-5">Promo Khusus di bulan ini saja, Ayah Bunda bisa dapat cashback hingga 500k dan
                            subsidi Ongkir
                            🥰. Yuk Langsung tanya tanya ke Kami 😊</p>
                        <div class="button-wrapper d-flex gap-3 flex-column flex-md-row">
                            <a class="btn btn-success" href="javascript:;" @click="handleClick">
                                <i class="bi bi-whatsapp"></i>
                                Chat Via Whatsaap
                            </a>
                            <a class="btn btn-outline-success" href="javascript:;" @click="downloadPDF()">
                                <i class="bi bi-download"></i>
                                Download Price
                                List</a>
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
                window.fbq('track', 'PriceList'); // Ganti 'PriceList' dengan nama event yang sesuai
            }

            link.remove(); // Hapus link setelah mengklik
        },
        handleClick() {
            if (window.fbq) {
                window.fbq('track', 'WaClick'); // Melacak event klik
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

<style scoped></style>