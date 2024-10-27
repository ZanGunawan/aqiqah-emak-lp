s<template>
    <div class="utama position-relative">
        <div class="bubble"></div>

        <!-- header -->
        <div class="overlay text-center">
            <img style="border-radius: 50%;" src="~/assets/img/logo-aqiqah-emak.png" alt="Logo Aqiqah Emak"
                class="mb-5 shadow-lg">
            <h1 class="mb-2">
                <!-- Ayah Bunda Tidak Bingung Lagi Mencari Layanan Aqiqah yang Terjangkau dan Terpercaya Untuk Buah Hati
                Tercinta -->
                Rayakan <span class="text-success fw-bold">Momen Spesial</span> Ayah Bunda dengan Aqiqah
                Penuh
                Berkah
            </h1>
            <p class="fw-light mb-4">Buat Kenangan Abadi untuk Buah Hati Tercinta dengan Layanan Aqiqah Terpercaya</p>
            <div class="video-container shadow">
                <video class="bg-danger" style="width: 100%;" autoplay preload="auto" muted="" loop playsinline>
                    <p>Loading Video...</p>
                    <source class="bg-warning" src="/video.mp4" type="video/mp4">
                </video>
            </div>
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
            <h1 class="mb-3">Ketika Mencari Layanan Aqiqah, Ayah Bunda <span class="text-success fw-bold">Pasti
                    Khawatir</span> akan
                Hal ini ..</h1>
            <ul class="mb-4" style="list-style: none; padding: 0 !important;">
                <li class="d-flex gap-3"><i style="font-size: 24px" class="bi bi-x-circle text-danger"></i>Makanan
                    Basi
                    Saat Sampai Dirumah</li>
                <hr>
                <li class="d-flex gap-3"><i style="font-size: 24px" class="bi bi-x-circle text-danger"></i>Hewan
                    dan
                    Proses Pemotongan Tidak Mematuhi Syariat Islam</li>
                <hr>
                <li class="d-flex gap-3 mb-2"><i style="font-size: 24px" class="bi bi-x-circle text-danger"></i>Harga
                    Paket
                    Aqiqah Tidak Sesuai dengan Kualitas yang Diberikan</li>
                <hr>
                <li class="d-flex gap-3 mb-2"><i style="font-size: 24px" class="bi bi-x-circle text-danger"></i>Tidak
                    Dapat
                    Foto Dan Dokumentasi Pemotongan</li>
                <hr>
                <li class="d-flex gap-3 mb-2"><i style="font-size: 24px" class="bi bi-x-circle text-danger"></i>Paket
                    Makanan
                    Tiba Terlambat dan Tidak Sesuai dengan Jadwal</li>
            </ul>
            <h1 style="font-size: 20px !important;" class="p-3 rounded-2 bg-success-subtle">Tenang Saja.. Kami akan
                Bantu Mengatasi Kekhawatiran Ayah Bunda</h1>
        </div>


        <div class="intro">
            <h1 class="mb-3 text-center">- Perkenalkan -</h1>
            <div class="image-container">
                <img style="border-radius: 50%;" src="~/assets/img/logo-aqiqah-emak.png" alt="Logo Aqiqah Emak"
                    class="mb-4 shadow-lg">
            </div>
            <h1 class="mb-2 text-success fw-bold text-center" style="font-size: 32px;">AQIQAH EMAK</h1>
            <p class="text-center mb-4">Layanan Aqiqah yang Lengkap, Mulai dari Pemilihan Hewan
                Berkualitas Hingga Penyajian
                yang Memukau.</p>
            <h1 style="font-size: 20px !important;" class="p-3 rounded-2 bg-success-subtle mb-4">Kenapa Ayah Bunda yang
                Bijak
                pasti Memilih Aqiqah Emak?</h1>
            <ul class="mb-4" style="list-style: none; padding: 0 !important;">
                <li class="d-flex gap-3 mb-2"><i style="font-size: 24px" class="bi bi-check2-circle text-success"></i>5
                    Tahun Berpengalaman Melayani Aqiqah Keluarga Muslim di 5 Kota Besar</li>
                <hr>
                <li class="d-flex gap-3 mb-2"><i style="font-size: 24px"
                        class="bi bi-check2-circle text-success"></i>Memiliki Kandang Sendiri Yang Terletak di Pedesaan
                    Sehingga Hewan lebih Sehat</li>
                <hr>
                <li class="d-flex gap-3 mb-2"><i style="font-size: 24px"
                        class="bi bi-check2-circle text-success"></i>Sudah Banyak di Review Positif Bintang 5 di Google
                </li>
                <hr>
                <li class="d-flex gap-3 mb-2"><i style="font-size: 24px"
                        class="bi bi-check2-circle text-success"></i>Memiliki Program Buy 2 Get 3 yang tak ditemukan di
                    Layanan Aqiqah Lain</li>
                <hr>
                <li class="d-flex gap-3 mb-2"><i style="font-size: 24px"
                        class="bi bi-check2-circle text-success"></i>Dapat Melakukan Test Food Sebelum Memesan untuk
                    Memastikan Kualitas Masakan</li>
            </ul>
            <!-- <h1 style="font-size: 20px;">Kami Menyediakan Layanan Aqiqah yang Lengkap, Mulai dari Pemilihan Hewan
                Berkualitas Hingga Penyajian
                yang Memukau. Ayah Bunda Tinggal Duduk Manis di Rumah</h1> -->
        </div>

        <div class="paket">
            <h1 class="text-center fw-bold">Benefit</h1>
            <p class="text-center">Banyak Bonus yang Didapat Oleh Ayah Bunda </p>
            <div class="image-grid mb-4">
                <img class="img-fluid shadow" src="~/assets/img/benefit/boneka-gratis.jpg" alt="Benefit Aqiqah Emak">
                <img class="img-fluid shadow" src="~/assets/img/benefit/dokumentasi.jpg" alt="Benefit Aqiqah Emak">
                <img class="img-fluid shadow" src="~/assets/img/benefit/fruittea.jpg" alt="Benefit Aqiqah Emak">
                <img class="img-fluid shadow" src="~/assets/img/benefit/gratis-ongkis.jpg" alt="Benefit Aqiqah Emak">
                <img class="img-fluid shadow" src="~/assets/img/benefit/kartu-ucapan.jpg" alt="Benefit Aqiqah Emak">
                <img class="img-fluid shadow" src="~/assets/img/benefit/plastik-packaging.jpg"
                    alt="Benefit Aqiqah Emak">
                <img class="img-fluid shadow" src="~/assets/img/benefit/sertifikat.jpg" alt="Benefit Aqiqah Emak">
                <img class="img-fluid shadow" src="~/assets/img/benefit/test-food.jpg" alt="Benefit Aqiqah Emak">
                <img class="img-fluid shadow" src="~/assets/img/benefit/undangan-digital.jpg" alt="Benefit Aqiqah Emak">
            </div>
            <h1 class="text-center fw-bold mb-0">Varian Paket</h1>
            <img class="img-fluid" src="~/assets/img/SATU-PAKET.png" alt="">
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
.pain,
.intro,
.paket {
    position: relative;
    z-index: 99;
    padding-inline: 25px;
    padding-block: 45px;
    margin-block: auto;
}

h1 {
    font-family: "Space Grotesk", sans-serif;
    font-size: 24px;
}

/* img {
    border-radius: 50%;
    width: 100px;
} */

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

.image-container {
    display: flex;
    justify-content: center;
}

hr {
    margin-block: 5px;
}

.image-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 7px;
    margin: 0 auto;
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