s<template>
    <div class="utama">
        <div class="overlay position-relative">
            <div class="bubble"></div>
            <img src="~/assets/img/logo-aqiqah-emak.png" alt="Logo Aqiqah Emak" class="mb-4 shadow-lg">
            <h1 class="mb-2">Rayakan <span class="text-success fw-bold">Momen Spesial</span> Ayah Bunda dengan Aqiqah
                Penuh
                Berkah</h1>
            <p class="fw-light">Buat Kenangan Abadi untuk Buah Hati Tercinta dengan Layanan Aqiqah Terpercaya</p>
            <hr style="width: 50%;">
            <p style="font-size: 12px;" class="text-danger">Ada Promo Khusus Untuk Ayah Bunda di bulan ini!! Cek yuk!
            </p>
            <button class="btn btn-sm btn-success shadow px-4">Cek Promo!!</button>
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
    background-image: url(~/assets/img/48942.jpg);
    background-position: center;
    background-size: cover;
    overflow: hidden;
}

.overlay {
    padding-inline: 25px;
    padding-block: 60px;
    background-color: rgba(255, 255, 255);
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
</style>