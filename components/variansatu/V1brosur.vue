<template>
    <div class="py-5 container">
        <h4 class="text-center text-success mb-4">Brosur Kami 🥰 ..</h4>
        <div class="container-image mb-3">
            <img class="img-fluid" src="~/assets/images/variansatu/brosur.png" alt="">
        </div>
        <div class="button-wrapper d-flex flex-row justify-content-center">
            <a href="javascript:;" @click="downloadImage" class="btn btn-success">
                <i class="bi bi-download me-2"></i>Download Brosur
            </a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        downloadImage() {
            // Gantilah URL dengan path ke file gambar Anda
            const url = '/images/brosur.png'; // Ganti dengan path gambar Anda

            // Membuat link untuk unduhan
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Brosur Aqiqah Emak 2024.png'); // Nama file gambar yang akan diunduh
            document.body.appendChild(link);
            link.click();

            // Pelacakan event dengan Meta Pixel
            if (window.fbq) {
                window.fbq('track', 'BrosurDownload'); // Ganti 'ImageDownload' dengan nama event yang sesuai
            }

            link.remove(); // Hapus link setelah mengklik
        }
    }
}
</script>

<style scoped>
@media (min-width: 577px) {
    .container-image {
        margin-inline: auto;
        background: red;
        display: flex;
        justify-content: center;
        width: 40%;
    }
}

@media (max-width: 576px) {
    a {
        width: 100%;
    }
}
</style>