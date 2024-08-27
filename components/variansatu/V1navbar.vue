<template>
    <nav class="navbar fixed-top  navbar-expand-lg bg-success">
        <div class="container">
            <a class="navbar-brand text-white fw-bold" style="letter-spacing: 1px;" href="#">
                <img src="~/assets/images/logo-aqiqah-emak.png" alt="Logo" width="40" height="40"
                    class="d-inline-block align-text-middle me-2">
                Aqiqah Emak
            </a>
            <button class="navbar-toggler bg-transparent border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="bi bi-list text-white" style="font-size: 30px;"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item me-4 my-2 my-lg-0">
                        <a class="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                            aria-current="page" href="#about">Tentang</a>
                    </li>
                    <li class="nav-item me-4 my-2 my-lg-0">
                        <a class="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                            href="#bonus">Bonus</a>
                    </li>
                    <li class="nav-item me-4 my-2 my-lg-0">
                        <a class="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                            href="#menu">Paket Menu</a>
                    </li>
                    <li class="nav-item me-4 my-2 my-lg-0">
                        <a class="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                            href="#order">Info Cashback</a>
                    </li>
                    <li class="nav-item me-4 my-2 my-lg-0">
                        <a class="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                            href="#alamat">Alamat</a>
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
</template>

<script>
export default {
    methods: {
        handleClick() {
            if (window.fbq) {
                window.fbq('track', 'WaClick'); // Melacak event klik
            }
            // Arahkan ke WhatsApp dengan pesan yang telah diisi
            const phoneNumber = '6285692435389'; // Ganti dengan nomor WhatsApp Anda
            const message = 'Assalamualaikum Emak. Sebelum pesan saya mau tanya tanya donk Mak'; // Pesan yang akan dikirim
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(url, '_blank'); // Membuka WhatsApp dengan pesan
        }
    },
}
</script>

<style scoped></style>