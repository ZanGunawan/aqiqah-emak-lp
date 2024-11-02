s<template>
    <div class="utama position-relative">
        <div class="bubble"></div>

        <!-- header -->
        <div class="overlay text-center">
            <img style="height: 60px;" src="~/assets/img/logo-aqiqah-emak.png" alt="Logo Aqiqah Emak" class="mb-5">
            <h1 class="mb-2">
                <!-- Ayah Bunda Tidak Bingung Lagi Mencari Layanan Aqiqah yang Terjangkau dan Terpercaya Untuk Buah Hati
                Tercinta -->
                Rayakan <span class="text-success fw-bold">Momen Spesial</span> Ayah Bunda dengan Aqiqah
                Penuh
                Berkah
            </h1>
            <p class="fw-light mb-4">Buat Kenangan Abadi untuk Buah Hati Tercinta dengan Layanan Aqiqah Terpercaya</p>
            <div class="video-container shadow mb-3">
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
                <a href="#offer" class="btn btn-sm btn-success shadow px-4 mx-3">Cek Promo!!</a>
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
                <img style="height: 85px;" src="~/assets/img/logo-aqiqah-emak.png" alt="Logo Aqiqah Emak" class="mb-4">
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
                <img class="img-fluid shadow" src="~/assets/img/benefit/gantungan-kunci.jpg" alt="Benefit Aqiqah Emak">
                <img class="img-fluid shadow" src="~/assets/img/benefit/goodie-bag.jpg" alt="Benefit Aqiqah Emak">
                <img class="img-fluid shadow" src="~/assets/img/benefit/minyak.jpg" alt="Benefit Aqiqah Emak">
                <img class="img-fluid shadow" src="~/assets/img/benefit/mug.jpg" alt="Benefit Aqiqah Emak">
            </div>
            <h1 class="p-3 rounded-2 bg-success-subtle text-center fw-bold mb-3">Varian Paket</h1>
            <img class="image-fluid mb-2 rounded-2 shadow" style="width: 100%;" src="~/assets/img/jpg/1.jpg"
                alt="Paket Aqiqah Emak">
            <img class="image-fluid mb-2 rounded-2 shadow" style="width: 100%;" src="~/assets/img/jpg/2.jpg"
                alt="Paket Aqiqah Emak">
            <img class="image-fluid mb-2 rounded-2 shadow" style="width: 100%;" src="~/assets/img/jpg/3.jpg"
                alt="Paket Aqiqah Emak">
            <img class="image-fluid mb-2 rounded-2 shadow" style="width: 100%;" src="~/assets/img/jpg/4.jpg"
                alt="Paket Aqiqah Emak">
            <img class="image-fluid mb-4 rounded-2 shadow" style="width: 100%;" src="~/assets/img/jpg/5.jpg"
                alt="Paket Aqiqah Emak">
            <h1 class="p-3 rounded-2 bg-success-subtle text-center fw-bold mb-3">Dan Beragam Menu Olahan</h1>
            <img class="image-fluid mb-2 rounded-2 shadow" style="width: 100%;" src="~/assets/img/jpg/6.jpg" alt="">
            <img class="image-fluid mb-3 rounded-2 shadow" style="width: 100%;" src="~/assets/img/jpg/7.jpg" alt="">
            <!-- <img class="img-fluid" src="~/assets/img/SATU-PAKET.png" alt=""> -->
        </div>

        <div class="benefit">
            <h1 class="fw-bold mb-3">Apa Kata Customer Kami?</h1>
            <div class="mb-4">
                <img class="img-fluid rounded-2 mb-2" src="~/assets/img/cust/cust1.jpg" alt="Customer Aqiqah Emak">
                <img class="img-fluid rounded-2 mb-2" src="~/assets/img/cust/cust2.jpg" alt="Customer Aqiqah Emak">
                <img class="img-fluid rounded-2 mb-2" src="~/assets/img/cust/cust3.jpg" alt="Customer Aqiqah Emak">
                <img class="img-fluid rounded-2 mb-2" src="~/assets/img/cust/cust4.jpg" alt="Customer Aqiqah Emak">
            </div>
            <h1 class="fw-bold mb-3">Review Kami di Google✨</h1>
            <div class="">
                <img class="img-fluid rounded-2 mb-2" src="~/assets/img/cust/maps1.jpg" alt="Customer Aqiqah Emak">
                <img class="img-fluid rounded-2 mb-2" src="~/assets/img/cust/maps2.jpg" alt="Customer Aqiqah Emak">
                <img class="img-fluid rounded-2 mb-2" src="~/assets/img/cust/maps3.jpg" alt="Customer Aqiqah Emak">
            </div>
        </div>

        <div class="solution">
            <h1 class="mb-3">Ayah Bunda Bisa Mengadakan <span class="fw-bold text-success">Acara Aqiqahan</span> dengan
                Penuh Hikmat Karena..</h1>
            <ul class="mb-4" style="list-style: none; padding: 0 !important;">
                <li class="d-flex gap-3 mb-2"><i style="font-size: 24px"
                        class="bi bi-check2-circle text-success"></i>Kualitas Makanan Terjaga Sampai Depan Rumah Ayah
                    Bunda</li>
                <hr>
                <li class="d-flex gap-3 mb-2"><i style="font-size: 24px"
                        class="bi bi-check2-circle text-success"></i>Dapat Foto dan Dokumentasi saat Penyembelihan Hewan
                    Qurban</li>
                <hr>
                <li class="d-flex gap-3 mb-2"><i style="font-size: 24px"
                        class="bi bi-check2-circle text-success"></i>Paket Aqiqah yang diterima Sebanding dengan Harga
                    yang Ayah Bunda Bayar
                </li>
                <hr>
                <li class="d-flex gap-3 mb-2"><i style="font-size: 24px"
                        class="bi bi-check2-circle text-success"></i>Paket Aqiqah Datang Tepat Waktu Sesuai yang
                    Dijanjikan</li>
                <hr>
                <li class="d-flex gap-3 mb-2"><i style="font-size: 24px"
                        class="bi bi-check2-circle text-success"></i>Hewan Aqiqah Disembelih dan Diolah sesuai Syariat
                    Islam</li>
            </ul>
        </div>

        <div class="offer" id="offer">
            <h1 class="mb-2 p-3 rounded-2 bg-success text-white text-center" style="font-size: 20px !important;">Hanya
                untuk Ayah
                dan Bunda! Pesan hari ini dan nikmati keuntungan dari promo eksklusif
                kami!</h1>
            <img class="img-fluid rounded-2 mb-3" src="~/assets/img/offer.jpg" alt="Penawaran Aqiqah Emak">
            <h1 class="mb-2 fw-bold text-center">Promo Terbatas!!</h1>
            <p class="text-center">Jangan Sampai Ketinggalan</p>
            <div class="arrow d-flex flex-row justify-content-center align-items-center">
                <i style="font-size: 32px; color: red; font-weight: bolder;" class="bi bi-arrow-down-right"></i>
                <i style="font-size: 32px; color: red; font-weight: bolder;" class="bi bi-arrow-down"></i>
                <i style="font-size: 32px; color: red; font-weight: bolder;" class="bi bi-arrow-down-left"></i>
            </div>
            <div class="d-flex justify-content-center">
                <button @click="getoffer()"
                    class="d-flex justify-content-center align-items-center gap-2 text-white btn btn-success rounded-pill shadow">
                    <i class="bi bi-whatsapp"></i>
                    Chat CS untuk Dapetin Promonya!</button>
            </div>
        </div>

        <div class="test-food">
            <h1 class="mb-2">Ayah Bunda Mau <span class="fw-bold text-success">Request Test Food?</span> Bisa Pastinya
                Donk!</h1>
            <p>Yuk isi Formulir di Bawah 😉</p>
            <form @submit.prevent="reqtestfood" ref="testfood">
                <div class="card border-0 rounded-2 bg-success-subtle p-3">
                    <div class="mb-3">
                        <label class="form-label" for="name">Nama</label>
                        <input class="form-control" type="text" id="name" name="nama" required>
                    </div>
                    <div class="d-flex gap-1">
                        <div class="mb-3">
                            <label class="form-label" for="menu1">Menu 1</label>
                            <select class="form-select" style="width: 100%;" name="menu1" id="menu1" required>
                                <option value="semur">Semur</option>
                                <option value="krengseng">Krengseng</option>
                                <option value="rendang">Rendang</option>
                                <option value="teriyaki">Teriyaki</option>
                                <option value="blackpaper">BlackPaper</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="menu2">Menu 2</label>
                            <select class="form-select" style="width: 100%;" name="menu2" id="menu2" required>
                                <option value="gulai">Gulai</option>
                                <option value="tongseng">Tongseng</option>
                                <option value="sop">Sop</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="alamat">Alamat</label>
                        <input class="form-control" type="text" name="alamat" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="hp">Nomer Hp</label>
                        <input class="form-control" type="number" name="hp" required>
                    </div>
                    <button type="submit" class="btn btn-success">Kirim Request ke CS</button>
                </div>
            </form>
        </div>

        <footer class="bg-success p-4">
            <p class="mb-0 text-white text-center">
                Powered by Aqiqah Emak
            </p>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pesan: ''
        }
    },
    methods: {
        reqtestfood(event) {
            this.pesan = Object.fromEntries(new FormData(event.target))
            const data = this.pesan

            const phone = '6285692435389'
            const message =
                `Testfood Aqiqah Emak

Nama : ${data.nama}
Menu : ${data.menu1} dan ${data.menu2}
Alamat : ${data.alamat}
Nomer hp : ${data.hp}`;

            const formattedMessage = encodeURIComponent(message);

            // URL WhatsApp
            const url = `https://wa.me/${phone}?text=${formattedMessage}`;

            // Membuka URL di tab baru
            window.open(url, '_blank');

            this.$refs.testfood.reset()
        },
        getoffer() {
            const generateUniqueId = (length = 6) => {
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
            };

            // Contoh penggunaan
            const uniqueId = generateUniqueId();

            const message = `*${uniqueId}*
_kode diatas adalah kode unik promo_ 
            
Assalamualaikum Aqiqah Emak. Boleh Saya Konsultasi dulu tentang Paket Aqiqah?`

            const phone = '6285692435389'

            const formattedMessage = encodeURIComponent(message);

            const url = `https://wa.me/${phone}?text=${formattedMessage}`;

            // Membuka URL di tab baru
            window.open(url, '_blank');
        }
    },
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
.paket,
.benefit,
.solution,
.offer,
.test-food {
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