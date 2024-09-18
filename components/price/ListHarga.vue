<template>
    <section id="list" class="py-5">
        <div class="container">
            <div class="row">
                <!-- <div class="col-12 col-md-6 col-lg-4">
                    <div class="card">
                        <img src="/assets/images/harga/biasa.jpg" alt="">
                    </div>
                </div> -->
                <div class="col-12 col-md-6 col-lg-4 mb-3" v-for="(data, index) in paket" :key="index">
                    <div class="card rounded-4 overflow-hidden shadow">
                        <div class="overflow-hidden d-flex justify-content-center align-items-center"
                            style="max-height: 250px;">
                            <img :src="data.image" class="img-fluid" style="transform: scale(1.3) rotate(-10deg);"
                                alt="paket aqiqah emak">
                        </div>
                        <div class="p-3">
                            <h3 class="mb-3">{{ data.headline }}</h3>
                            <h6>Dapat apa aja :</h6>
                            <div class="d-flex flex-wrap gap-2 mb-3">
                                <div class="d-flex gap-2" v-for="(value, i) in data.benefits" :key="i">
                                    <i class="material-icons text-success">check_circle</i>
                                    <p class="mb-0">{{ value }}</p>
                                </div>
                            </div>
                            <div class="mb-3">
                                <h6>Varian Menu :</h6>
                                <p class="mb-0"><strong>Menu 1 :</strong> {{ data.menu1 }}</p>
                                <p class="mb-0" v-if="data.headline !== 'Paket Nasi Kebuli'"><strong>menu 2 :</strong>
                                    {{ data.menu2 }}</p>
                            </div>
                            <a target="_blank"
                                href="https://wa.me/6285692435389?text=Assalamualaikum%20Emak.%20Sebelum%20pesan%20saya%20mau%20tanya%20tanya%20donk%20Mak">
                                <button class="btn btn-success w-100">
                                    Pesan Sekarang
                                </button>
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
    data() {
        return {
            paket: [
                {
                    headline: 'Paket Biasa',
                    image: '/harga/biasa.jpg',
                    benefits: [
                        'Box Bento', 'Nasih Putih', 'Menu 1', 'Menu 2', 'Mix Vegetables', 'Kerupuk', 'Fruit Tea', 'Alat Makan'
                    ],
                    menu1: 'Semur, Krengseng, Rendang, Teriyaki, Blackpaper',
                    menu2: 'Gulai, Tongseng, Sop'
                },
                {
                    headline: 'Paket Premium',
                    image: '/harga/lengkap.jpg',
                    benefits: [
                        'Box Bento', 'Nasi Putih', 'Telur Pindang', 'Bihun Cabe Hijau', 'Menu 1', 'Menu 2', 'Mix Vegetables', 'Kerupuk', 'Fruit Tea', 'Alat Makan'
                    ],
                    menu1: 'Semur, Krengseng, Rendang, Teriyaki, Blackpaper',
                    menu2: 'Gulai, Tongseng, Sop'
                },
                {
                    headline: 'Paket Special',
                    image: '/harga/istimewa.jpg',
                    benefits: [
                        'Box Bento', 'Nasi Putih', 'Ayam Bakar', 'Bihun Cabe Hijau', 'Menu 1', 'Menu 2', 'Mix Vegetables', 'Kerupuk', 'Fruit Tea', 'Alat Makan'
                    ],
                    menu1: 'Semur, Krengseng, Rendang, Teriyaki, Blackpaper',
                    menu2: 'Gulai, Tongseng, Sop'
                },
                {
                    headline: 'Paket Nasi Kebuli',
                    image: '/harga/kebuli.jpg',
                    benefits: [
                        'Nasi Kebuli', 'Menu 1', 'Acar Buah', 'Sambal', 'Kerupuk', 'Fruit Tea', 'Alat Makan'
                    ],
                    menu1: 'Domba Goreng Rempah, Krengseng, Domba Panggang'
                },
            ],
        }
    },
}
</script>

<style scoped></style>