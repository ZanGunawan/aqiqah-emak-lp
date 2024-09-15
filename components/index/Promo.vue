<template>
    <section id="promo" class="py-5 promo">
        <div class="overlay"></div>
        <div class="content">
            <div class="container-custom">
                <h1 class="text-center">Special Diskon!!</h1>
                <h5 class="text-center">Diskon Hingga 500.000 untuk pembelian hari ini</h5>
                <h1 class="text-center text-danger mb-4">{{ timeLeft }}</h1>
                <div class="cta d-flex justify-content-center mb-5">
                    <a href="#" class="btn btn-danger"><i class="bi bi-whatsapp me-2"></i>Ambil Diskon</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            offer: "Student discount up to 85% for today only",
            expiryTime: new Date().getTime() + 3 * 60 * 60 * 1000, // 3 jam
            intervalId: null,
            timeLeft: "",
        };
    },
    mounted() {
        this.updateTimeLeft();
        this.intervalId = setInterval(this.updateTimeLeft, 1000);
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    },
    methods: {
        updateTimeLeft() {
            const now = new Date().getTime();
            const timeDifference = this.expiryTime - now;
            if (timeDifference > 0) {
                const hours = Math.floor(timeDifference / (1000 * 60 * 60));
                const minutes = Math.floor(
                    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
                this.timeLeft = `${hours}:${minutes}:${seconds}`;
            } else {
                // Set ulang waktu penawaran setelah 7 jam
                this.expiryTime = new Date().getTime() + 3 * 60 * 60 * 1000;
            }
        },
    },
}
</script>

<style scoped>
.promo {
    position: relative;
    width: 100%;
    height: 400px;
    /* Atur tinggi sesuai kebutuhan */
    background-image: url(~/assets/images/bg-tambahan.jpg);
    background-size: cover;
    background-position: center;
    color: #fff;
    /* Warna teks putih untuk kontras yang baik */
    display: flex;
    align-items: center;
    justify-content: center;
}

.promo .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    /* Gelap dengan opacity 0.5 */
    z-index: 1;
}

.promo .content {
    position: relative;
    z-index: 2;
    /* Pastikan konten berada di atas overlay */
    text-align: center;
}
</style>