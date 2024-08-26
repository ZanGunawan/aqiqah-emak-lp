<template>
    <section id="problem" class="py-5">
        <div class="container">
            <h4 class="text-center mb-5">Ayah Bunda <u class="text-success">Tak Perlu Khawatir</u> lagi ...</h4>
            <div class="row mb-5">
                <div v-for="(data, index) in problem" :key="index" class="col-12 col-md-6 col-lg-4 mb-3">
                    <div class="card p-4 p-lg-5 bg-success-subtle border-0 shadow rounded-4">
                        <h5>{{ data.head }}</h5>
                        <p class="mb-0">{{ data.text }}
                        </p>
                    </div>
                </div>
            </div>
            <!-- <h4 class="text-center mb-5"> Jika iya, <span class="fw-bold text-success"> kami akan membantu Ayah
                    Bunda
                    mengatasi
                    kekhawatiran
                    tersebut.</span></h4>
            <hr> -->
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            problem: [
                {
                    "head": "Kualitas Terjamin 🌟",
                    "text": "Daging segar dan pengolahan sesuai syariat, memastikan kualitas layanan aqiqah yang tinggi."
                },
                {
                    "head": "Harga Transparan 💰",
                    "text": "Informasi biaya jelas dan tanpa biaya tersembunyi, sehingga Anda tahu persis apa yang Anda bayar."
                },
                {
                    "head": "Menu Variatif 🍽️",
                    "text": "Beragam pilihan menu yang dapat disesuaikan dengan selera dan kebutuhan acara Anda."
                },
                {
                    "head": "Pemesanan Mudah ⏱️",
                    "text": "Proses pemesanan yang cepat dan sistematis, menghemat waktu Anda."
                },
                {
                    "head": "Informasi Lengkap 🔍",
                    "text": "Detail layanan yang jelas dan mudah diakses, membuat Anda merasa yakin dalam memilih."
                },
                {
                    "head": "Kepuasan Terjamin 🚀",
                    "text": "Layanan yang diterima sesuai dengan janji, dengan dukungan penuh jika ada masalah."
                }
            ]
        }
    },
}
</script>

<style scoped></style>