<template>
    <section id="problem" class="py-5">
        <div class="container">
            <h4 class="text-center mb-5">Apakah Ayah Bunda <u class="text-success">Khawatir</u> terhadap ...</h4>
            <div class="row mb-5">
                <div class="col-12 col-md-6 col-lg-4 mb-3">
                    <div class="card p-4 p-lg-5 border-0 shadow-lg rounded-4">
                        <h5>Kualitas yang Tidak Jelas 🤔</h5>
                        <p class="mb-0">Sulit menentukan layanan aqiqah yang benar-benar berkualitas dan terpercaya.
                        </p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3">
                    <div class="card p-4 p-lg-5 border-0 shadow-lg rounded-4">
                        <h5>Ketidakpastian Harga 💸</h5>
                        <p class="mb-0">Informasi tentang biaya dan apa yang termasuk dalam paket tidak transparan
                        </p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3">
                    <div class="card p-4 p-lg-5 border-0 shadow-lg rounded-4">
                        <h5>Keterbatasan Pilihan Menu 🍽️</h5>
                        <p class="mb-0">Pilihan menu tidak bervariasi, sehingga tidak sesuai dengan kebutuhan dan
                            selera.
                        </p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3">
                    <div class="card p-4 p-lg-5 border-0 shadow-lg rounded-4">
                        <h5>Proses Pemesanan Rumit ⏳</h5>
                        <p class="mb-0">Sistem pemesanan tidak jelas, sehingga memakan banyak waktu.
                        </p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3">
                    <div class="card p-4 p-lg-5 border-0 shadow-lg rounded-4">
                        <h5>Kurangnya Transparansi 🔍</h5>
                        <p class="mb-0">Kurangnya informasi yang jelas mengenai layanan aqiqah
                        </p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3">
                    <div class="card p-4 p-lg-5 border-0 shadow-lg rounded-4">
                        <h5>Tidak Sesuai dengan Janji 🚫</h5>
                        <p class="mb-0">Khawatir bahwa apa yang dijanjikan berbeda dengan apa yang diterima pada hari H.
                        </p>
                    </div>
                </div>
            </div>
            <h4 class="text-center mb-5"> Jika iya, <span class="fw-bold text-success"> kami akan membantu Ayah
                    Bunda
                    mengatasi
                    kekhawatiran
                    tersebut.</span></h4>
            <hr>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            problem: [
                {
                    head: 'Kualitas yang Tidak Jelas 🤔',
                    text: 'Sulit menentukan layanan aqiqah yang benar-benar berkualitas dan terpercaya.'
                },
                {
                    head: 'Ketidakpastian Harga 💸',
                    text: 'Informasi tentang biaya dan apa yang termasuk dalam paket tidak transparan'
                },
                {
                    head: 'Keterbatasan Pilihan Menu 🍽️',
                    text: 'Pilihan menu tidak bervariasi, sehingga tidak sesuai dengan kebutuhan dan selera.'
                },
                {
                    head: 'Proses Pemesanan Rumit ⏳',
                    text: 'Sistem pemesanan tidak jelas, sehingga memakan banyak waktu.'
                },
                {
                    head: 'Kurangnya Transparansi 🔍',
                    text: 'Kurangnya informasi yang jelas mengenai layanan aqiqah'
                },
                {
                    head: 'Tidak Sesuai dengan Janji 🚫',
                    text: 'Khawatir bahwa apa yang dijanjikan berbeda dengan apa yang diterima pada hari H.'
                },
            ]
        }
    },
}
</script>

<style scoped></style>