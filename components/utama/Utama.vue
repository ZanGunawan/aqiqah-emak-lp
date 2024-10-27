s<template>
    <div class="utama position-relative">
        <div class="bubble"></div>

        <!-- header -->
        <div class="overlay text-center">
            <img src="~/assets/img/logo-aqiqah-emak.png" alt="Logo Aqiqah Emak" class="mb-5 shadow-lg">
            <h1 class="mb-2">
                <!-- Ayah Bunda Tidak Bingung Lagi Mencari Layanan Aqiqah yang Terjangkau dan Terpercaya Untuk Buah Hati
                Tercinta -->
                Rayakan <span class="text-success fw-bold">Momen Spesial</span> Ayah Bunda dengan Aqiqah
                Penuh
                Berkah
            </h1>
            <p class="fw-light">Buat Kenangan Abadi untuk Buah Hati Tercinta dengan Layanan Aqiqah Terpercaya</p>
            <div class="video-container shadow">
                <video class="bg-danger" style="width: 100%;" autoplay preload="auto" muted="" loop playsinline>
                    <source class="bg-warning" src="/video.mp4" type="video/mp4">
                </video>
            </div>
            <hr style="width: 50%; margin-inline: auto" class="mt-4 mb-3">
            <p style="font-size: 12px;" class="text-danger">Ada Promo Khusus Untuk Ayah Bunda di bulan ini!! Cek
                yuk!
            </p>
            <div class="d-flex align-items-center justify-content-center">
                <div class="arrow-container d-flex gap-1">
                    <div class="arrow-right"></div>
                    <div class="arrow-right"></div>
                    <div class="arrow-right"></div>
                </div>
                <button class="btn btn-sm btn-success shadow px-4 mx-3">Cek Promo!!</button>
                <div class="arrow-container d-flex gap-1">
                    <div class="arrow-left"></div>
                    <div class="arrow-left"></div>
                    <div class="arrow-left"></div>
                </div>
            </div>
        </div>

        <!-- pain -->
        <div class="pain">
            <h1>Ketika Mencari Layanan Aqiqah, Ayah Bunda Pasti Khawatir akan Hal ini ..</h1>
            <p>Kesulitan mencari layanan aqiqah yang terpercaya? Terkadang, proses persiapan bisa sangat melelahkan dan
                memakan waktu</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Space+Grotesk:wght@300..700&display=swap');

.utama {
    font-family: 'Poppins', sans-serif;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    background-color: rgba(255, 255, 255);
}

.overlay,
.pain {
    position: relative;
    z-index: 99;
    padding-inline: 25px;
    padding-block: 75px;
    margin-block: auto;
}

h1 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 24px;
}

img {
    border-radius: 50%;
    width: 100px;
}

.bubble {
    position: absolute;
    top: -50px;
    right: -50px;
    border-radius: 50%;
    filter: blur(100px);
    width: 200px;
    height: 200px;
    background: green;
}

.arrow-container {
    position: relative;
}

.arrow-left {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 15px solid red;
    /* Warna panah */
    animation: point 1s infinite alternate;
    /* Animasi */
}

.arrow-right {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid red;
    /* Warna panah */
    animation: point-right 1s infinite alternate;
    /* Animasi */
}

.video-container {
    width: 100%;
    border-radius: 15px;
    max-width: 300px;
    margin: auto;
    overflow: hidden;
    padding-bottom: -100px;
}

@keyframes point {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-10px);
        /* Gerakan ke kiri */
    }
}

@keyframes point-right {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(10px);
        /* Gerakan ke kiri */
    }
}
</style>