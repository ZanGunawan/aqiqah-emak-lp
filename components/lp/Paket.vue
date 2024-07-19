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
                    <a href="#">
                        <button>
                            <img src="~/assets/images/chat-circle-green.png" alt="">
                            Yuk Diorder Sekarang
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
                        headline: 'Paket Hemat 😊 ',
                        image: '/images/paket.jpeg',
                        benefits: [
                            'Box Bento', 'Nasih Putih', 'Olahan Daging', 'Fruit Tea', 'Mix Vegetables', 'Alat Makan', 'Kerupuk Ikan', 'Kartu Ucapan', 'Plastik'
                        ]
                    },
                    {
                        headline: 'Paket Hemat 😁 ',
                        image: '/images/paket.jpeg',
                        benefits: [
                            'Box Bento', 'Nasih Putih', 'Olahan Daging', 'Fruit Tea', 'Mix Vegetables', 'Alat Makan', 'Kerupuk Ikan', 'Kartu Ucapan', 'Plastik'
                        ]
                    },
                    {
                        headline: 'Paket Hemat 😉 ',
                        image: '/images/paket.jpeg',
                        benefits: [
                            'Box Bento', 'Nasih Putih', 'Olahan Daging', 'Fruit Tea', 'Mix Vegetables', 'Alat Makan', 'Kerupuk Ikan', 'Kartu Ucapan', 'Plastik'
                        ]
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>