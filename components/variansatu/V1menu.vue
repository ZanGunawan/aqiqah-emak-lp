<template>
    <section id="menu" class="py-5">
        <div class="container">
            <h4 class="text-center text-success mb-5">Beragam paket yang kami sediakan 😊 ..</h4>
            <div class="row mb-3">
                <div v-for="(data, index) in paket" :key="index" class="col-12 col-md-6 col-lg-4 mb-3">
                    <div class="card p-4 shadow rounded-4 mt-n5"
                        :class="data.headline === 'Paket Lengkap 😎' ? 'bg-secondary-subtle' : ''">
                        <div v-if="data.headline === 'Paket Lengkap 😎'" class="promoted d-flex mb-3">
                            <span class="badge rounded-pill text-bg-success px-3 py-2">Terbanyak Dipesan</span>
                        </div>
                        <h5>{{ data.headline }}</h5>
                        <h6 class="text-secondary">{{ data.customer }}</h6>
                        <hr>
                        <div class="list-wrapper d-flex flex-wrap gap-2 align-items-center">
                            <div v-for="(value, i) in data.benefits" :key="i" class="d-flex gap-2 align-items-center">
                                <i class="bi bi-check2-circle fs-4"></i>
                                <p class="mb-0">{{ value }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span>
                <h6>*Menu 1 : Krengseng, Blackpaper, Teriyaki, Semur, Rendang</h6>
                <h6>**Menu 2 : Tongseng, Sup, Gulai</h6>
                <h6>***Menu 1 : Domba Goreng Rempah, Krengseng, Domba Panggang</h6>
            </span>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            paket: [
                {
                    headline: 'Paket Hemat 🙂',
                    customer: 'Untuk acara sederhana dengan kualitas yang baik.',
                    image: '/images/paket.jpeg',
                    benefits: [
                        'Box Bento', 'Nasih Putih', 'Menu 1*', 'Menu 2**', 'Mix Vegetables', 'Kerupuk', 'Fruit Tea', 'Alat Makan'
                    ]
                },
                {
                    headline: 'Paket Lengkap 😎',
                    customer: 'Untuk perayaan istimewa dengan layanan terbaik.',
                    image: '/images/paket.jpeg',
                    benefits: [
                        'Box Bento', 'Nasi Putih', 'Telur Pindang', 'Bihun Cabe Hijau', 'Menu 1*', 'Menu 2**', 'Mix Vegetables', 'Kerupuk', 'Fruit Tea', 'Alat Makan'
                    ]
                },
                {
                    headline: 'Paket Premium 🤩',
                    customer: 'Semua kebutuhan aqiqah dalam satu paket untuk acara besar.',
                    image: '/images/paket.jpeg',
                    benefits: [
                        'Box Bento', 'Nasi Putih', 'Ayam Bakar', 'Bihun Cabe Hijau', 'Menu 1*', 'Menu 2**', 'Mix Vegetables', 'Kerupuk', 'Fruit Tea', 'Alat Makan'
                    ]
                },
                {
                    headline: 'Nasi Kebuli 😋',
                    customer: 'Menambahkan hidangan khas Timur Tengah yang lezat.',
                    image: '/images/paket.jpeg',
                    benefits: [
                        'Nasi Kebuli', 'Menu 1***', 'Acar Buah', 'Sambal', 'Kerupuk', 'Fruit Tea', 'Alat Makan'
                    ]
                },
                {
                    headline: 'Paket Domba Masak 🥣',
                    customer: 'Untuk Ayah Bunda yang suka prasmanan',
                    image: '/images/paket.jpeg',
                    benefits: [
                        'Menu 1*', 'Menu 2**'
                    ]
                },
            ]
        }
    },
}
</script>

<style scoped>
h6 {
    font-size: 14px !important;
}
</style>