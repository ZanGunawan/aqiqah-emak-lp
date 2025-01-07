<template>
    <nav
        :class="['navbar navbar-expand-lg py-3', { 'navbar-visible': isNavbarVisible, 'navbar-custom': isNavbarRelative }]">
        <div class="container">
            <nuxt-link to="/" class="navbar-brand">
                <img v-if="isNavbarVisible" src="~/assets/img/path18.png" alt="" height="40">
                <img v-else src="~/assets/img/path6.png" alt="" height="40">
            </nuxt-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="link-container" id="navbarSupportedContent">
                <ul class="ms-auto me-3 mb-2 mb-lg-0">
                    <li class="">
                        <nuxt-link to="/about" class="fw-light" :class="isNavbarVisible ? 'text-dark' : 'text-white'" >Tentang Kami</nuxt-link>
                    </li>
                    <li class="">
                      <nuxt-link to="/layanan" class="fw-light" :class="isNavbarVisible ? 'text-dark' : 'text-white'">Layanan</nuxt-link>
                    </li>
                    <!-- <li class="">
                      <a class="fw-light" :class="isNavbarVisible ? 'text-dark' : 'text-white'" aria-current="page"
                      href="#">Testimoni</a>
                    </li> -->
                    <li class="">
                      <nuxt-link to="/galery" class="fw-light" :class="isNavbarVisible ? 'text-dark' : 'text-white'">Galeri</nuxt-link>
                    </li>
                    <li class="">
                        <a class="btn rounded-pill text-dark" aria-current="page" href="#">Hubungi Kami</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isNavbarVisible: false, // Status visibilitas navbar
            isNavbarRelative: false
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handelScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handelScroll);
    },
    methods: {
        handelScroll() {
            if (window.scrollY > 400) {
                this.isNavbarVisible = true;
                // this.isNavbarRelative = true;
            } else if (window.scrollY > 73 && window.scrollY < 400) {
                this.isNavbarRelative = true
                this.isNavbarVisible = false
            } else if (window.scrollY < 73) {
                this.isNavbarVisible = false;
                this.isNavbarRelative = false
            } else {
            }
        }
    },
}
</script>

<style scoped>
.navbar {
    z-index: 1030;
    position: absolute;
    width: 100%;
}

.navbar-custom {
    /* Posisi awal di luar viewport */
    position: fixed;
    top: -100px;
    right: 0;
    left: 0;
    z-index: 1030;
    /* Agar berada di atas elemen lain */
    transition: top 0.3s ease-in-out;
    background-color: #fff;
    /* Mulai dari luar viewport */
    /* Animasi halus */
}

.navbar-visible {
    position: fixed;
    top: 0 !important;
    right: 0;
    left: 0;
    transition: top 0.3s ease-in-out;
    background-color: #fff;
    box-shadow: 0 2px 15px #00000088;
    /* Navbar muncul */
    /* Navbar muncul di posisi atas */
}
</style>
