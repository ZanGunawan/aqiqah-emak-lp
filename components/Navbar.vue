<template>
    <section class="fixed-top">
        <p class="mb-0 py-1 text-center bg-dark text-white">
            {{ offer }} <span class="text-danger fw-bold">{{ timeLeft }}</span>
        </p>
        <nav class="navbar navbar-expand-lg bg-success shadow-lg">
            <div class="container">
                <a class="navbar-brand text-white fw-bold" style="letter-spacing: .7px;" href="/">
                    <img src="~/assets/images/logo-aqiqah-emak.png" alt="Logo" width="40" height="40"
                        class="d-inline-block align-text-middle me-2">
                    Aqiqah Emak
                </a>
                <button class="navbar-toggler bg-transparent border-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i class="bi bi-list text-white" style="font-size: 30px;"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item me-4 mt-4 mt-lg-0 mb-2 mb-lg-0">
                            <a class="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                                aria-current="page" href="#about"><i class="bi bi-house-door-fill me-2"></i>Beranda</a>
                        </li>
                        <li class="nav-item me-4 my-2 my-lg-0">
                            <a class="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                                href="#bonus"><i class="bi bi-card-list me-2"></i>Price List</a>
                        </li>
                    </ul>
                    <form class="d-flex mb-4 mb-lg-0" role="search">
                        <a href="javascript:;" @click="handleClick" class="btn btn-light">
                            <i class="bi bi-whatsapp me-2"></i>Contact Us
                        </a>
                    </form>
                </div>
            </div>
        </nav>
    </section>
</template>

<script>
export default {
    data() {
        return {
            offer: "Diskon s/d 500.000 hanya hari ini",
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
        handleClick() {
            if (window.fbq) {
                window.fbq('track', 'WaClickNavbar'); // Melacak event klik
            }
            // Arahkan ke WhatsApp dengan pesan yang telah diisi
            const phoneNumber = '6285692435389'; // Ganti dengan nomor WhatsApp Anda
            const message = 'Assalamualaikum Emak. Sebelum pesan saya mau tanya tanya donk Mak'; // Pesan yang akan dikirim
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(url, '_blank'); // Membuka WhatsApp dengan pesan
        },
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
/* .navbar {
    z-index: 1051;
} */
</style>