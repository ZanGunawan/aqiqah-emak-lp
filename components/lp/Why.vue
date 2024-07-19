<template>
    <section id="why">
        <div class="headline-wrapper">
            <img src="~/assets/images/orang-mikir.png" alt="">
            <h2>Mengapa Memilih Aqiqah Emak?</h2>
        </div>
        <div class="container-box">
            <div v-for="(data, index) in datas" :key="index" class="box-wrapper">
                <img src="~/assets/images/checklist-circle.png" alt="">
                <h3>{{ data.headline }}</h3>
                <p>{{ data.paragraf }}</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                datas: [
                    {
                        headline: 'Kualitas dan Kebersihan',
                        paragraf: 'Kami hanya menggunakan bahan-bahan segar dan halal, diproses dengan standar kebersihan yang tinggi'
                    },
                    {
                        headline: 'Pilihan Paket yang Fleksibel',
                        paragraf: 'Beragam pilihan paket sesuai dengan kebutuhan dan budget Anda.'
                    },
                    {
                        headline: 'Layanan Prima',
                        paragraf: 'Tim kami siap memberikan pelayanan terbaik untuk memastikan momen aqiqah berjalan lancar dan berkesan.'
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>