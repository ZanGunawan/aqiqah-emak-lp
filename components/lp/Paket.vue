<template>
    <section id="paket">
        <div class="speaker-wrapper">
            <img src="~/assets/images/speaker-kiri.png" alt="">
            <img src="~/assets/images/speaker-kanan.png" alt="">
        </div>
        <div class="text-wrapper">
            <h2>Pilihan Paket Terbaik</h2>
        </div>
        <div class="container-box">
            <div class="box-wrapper" v-for="(data, index) in paket" :key="index">
                <div class="box-wrapper__image">
                    <img :src="data.image" alt="">
                </div>
                <div class="box-wrapper__text">
                    <h2>{{ data.headline }}</h2>
                    <div class="list-wrapper">
                        <div class="list-wrapper__text" v-for="(value, i) in data.benefits" :key="i">
                            <i class="material-icons">check_circle</i>
                            <p>{{ value }}</p>
                        </div>
                    </div>
                    <a target="_blank" href="https://wa.me/6285692435389?text=Assalamualaikum%20Emak.%20Sebelum%20pesan%20saya%20mau%20tanya%20tanya%20donk%20Mak">
                        <button>
                            <img src="~/assets/images/chat-circle-green.png" alt="">
                            Tanya ke CS yuk
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <div class="cashback-wrapper">
            <h2>200.000</h2>
            <div class="row">
                <div class="col-8">
                    <h3>Cashback sampai</h3>
                </div>
                <div class="col-4">
                    <h3>200 K</h3>
                </div>
            </div>
            <p>Buruan ambil promo sekarang</p>
        </div>
        <div class="muka-kambing">
            <img src="~/assets/images/muka-kambing.png" class="muka-kambing mt-5 mb-n3" alt="">
        </div>
        <div class="sky d-flex justify-content-between align-items-center position-relative">
            <img src="~/assets/images/awan-kiri.png" alt="">
            <img src="~/assets/images/awan-kanan.png" alt="">
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                paket: [
                    {
                        headline: 'Paket Hemat',
                        image: '/images/paket.jpeg',
                        benefits: [
                            'Box Bento', 'Nasih Putih', 'Menu 1', 'Menu 2', 'Mix Vegetables', 'Kerupuk', 'Fruit Tea', 'Alat Makan'
                        ]
                    },
                    {
                        headline: 'Paket Lengkap',
                        image: '/images/paket.jpeg',
                        benefits: [
                            'Box Bento', 'Nasi Putih', 'Telur Pindang', 'Bihun Cabe Hijau', 'Menu 1', 'Menu 2', 'Mix Vegetables', 'Kerupuk', 'Fruit Tea', 'Alat Makan'
                        ]
                    },
                    {
                        headline: 'Paket Premium',
                        image: '/images/paket.jpeg',
                        benefits: [
                            'Box Bento', 'Nasi Putih', 'Ayam Bakar', 'Bihun Cabe Hijau', 'Menu 1', 'Menu 2', 'Mix Vegetables', 'Kerupuk', 'Fruit Tea', 'Alat Makan'
                        ]
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>