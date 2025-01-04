<template>
    <div id="home">
        <div class="home">
            <div class="d-flex flex-column container">
                <h1 class="text-center">Layanan Aqiqah dengan Beragam menu Olahan</h1>
                <p class="text-center">Pesan mudah, layanan cepat 24 jam siap dikirim sesuai request anda!</p>
                <div class="cta d-flex align-items-center gap-4">
                    <a href="#" class="btn text-capitalize">send message</a>
                    <a href="#" class="text-capitalize"><i class="bi bi-play-btn me-2"></i>our documentation</a>
                </div>
            </div>
        </div>
        <div class="cta-section">
            <div class="d-flex flex-column container">
                <h1 class="text-center">Lebih Mengenali Aqiqah Emak dengan dekat</h1>
                <p class="text-center">Pesan mudah, layanan cepat 24 jam siap dikirim sesuai request anda!</p>
                <div class="cta d-flex align-items-center">
                    <a href="#" class="btn text-capitalize">Tentang kami</a>
                </div>
            </div>
        </div>
        <div class="service">
          <div class="container">
            <div class="headline-wrapper d-flex flex-column">
              <h1 class="text-center">Layanan Kami</h1>
              <p class="text-center">Berikut layanan dan paket yang kami sediakan di Aqiqah Emak</p>
            </div>
                <!-- <div class="cta d-flex align-items-center">
                  <a href="#" class="btn text-capitalize">Tentang kami</a>
                </div> -->
            <div class="container-menu">
              <div v-for="(data, index) in menu" :key="index" class="box-menu">
                <div class="image-wrapper">
                  <img src="~/assets/img/menu/1.jpg" alt="menu aqiqah emak">
                </div>
                <div class="text-wrapper">
                  <div class="text_head-wrapper d-flex justify-content-between align-items-center">
                    <h3 class="mb-0">Paket Lengkap</h3>
                    <p class="mb-0">Best Seller</p>
                  </div>
                  <div class="text_menu-wrapper">
                    <p class="mb-0">Menyediakan menu lengkap versi aqiqah emak, ( menu / makanan / minuman / sertifikat / boneka / goodie bag dll )</p>
                  </div>
                  <div class="cta-wrapper">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {}, {}, {}, {}, {}
      ]
    }
  },
}
</script>

<style scoped>
.home {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        url(~/assets/img/bg-hero.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: auto;
    min-height: 761px;
    padding-top: 73px;
}

.cta-section {
    background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
        url(~/assets/img/bg-cta.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: auto;
    min-height: 761px;
}

.service {
    border-top-left-radius: 50% 50px;
    border-top-right-radius: 50% 50px;
    margin-top: -50px;
    padding-block: 70px;
}

@media (max-width: 576px) {
    .home {
        height: 404px;
    }
}
</style>
