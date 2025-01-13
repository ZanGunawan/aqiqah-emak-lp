<template>
  <div id="home">
    <div class="home">
      <div class="container">
        <div class="text-wrapper">
          <vue-typed-js :strings="['Beragam menu Olahan', 'Pelayanan Terbaik', 'Rasa dan Pengiriman Terpercaya']"
            :type-speed="50" :back-speed="30" :back-delay="2000" :loop="true">
            <h1 class="text-center">Layanan Aqiqah dengan
              <span class="typing"></span>
            </h1>
          </vue-typed-js>
          <p class="text-center">Pesan mudah, layanan cepat 24 jam siap dikirim sesuai request anda!</p>
          <div class="cta d-flex align-items-center gap-4">
            <a href="#" class="btn text-capitalize">send message</a>
            <a href="#" class="text-capitalize"><i class="bi bi-play-btn me-2"></i>our documentation</a>
          </div>
        </div>
      </div>
    </div>
    <div class="cta-section">
      <div class="d-flex flex-column container">
        <h1 class="text-center">Lebih Mengenali Aqiqah Emak dengan dekat</h1>
        <p class="text-center">Pesan mudah, layanan cepat 24 jam siap dikirim sesuai request anda!</p>
        <div class="cta d-flex align-items-center">
          <nuxt-link to="/about" class="btn text-capitalize">Tentang Kami</nuxt-link>
        </div>
      </div>
    </div>
    <div class="service">
      <div class="container">
        <div class="headline-wrapper d-flex flex-column">
          <h1 class="text-center">Layanan Kami</h1>
          <p class="text-center">Berikut layanan dan paket yang kami sediakan di Aqiqah Emak</p>
        </div>
        <div class="container-menu mb-5">
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
                <p class="mb-0">Menyediakan menu lengkap versi aqiqah emak, ( menu / makanan / minuman / sertifikat /
                  boneka / goodie bag dll )</p>
              </div>
              <div class="cta-wrapper">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div class="cta d-flex align-items-center justify-content-center">
          <a href="#" class="text-capitalize">Lihat lebih banyak</a>
        </div>
      </div>
    </div>
    <div class="galery">
      <div class="container">
        <div class="headline-wrapper d-flex flex-column">
          <h1 class="text-center">Galeri Kegiatan</h1>
        </div>
        <div class="image-wrapper mb-5">
          <div class="image-box" v-for="(data, index) in galery" :key="index">
            <img :src="data.src" :alt="data.alt">
            <p>{{ data.text }}</p>
          </div>
        </div>
        <div class="cta d-flex align-items-center justify-content-center">
          <a href="#" class="text-capitalize">Lihat lebih banyak</a>
        </div>
      </div>
    </div>
    <div class="testimoni">
      <div class="container">
        <div class="headline-wrapper d-flex flex-column">
          <h1 class="text-center">Testimoni Real dari Pelanggan Kami</h1>
        </div>
        <div class="cust-wrapper mb-5">
          <div class="cust-box" v-for="(data, index) in testimoni" :key="index">
            <div class="text-wrapper">
              <h4 class="text-capitalize text-center mb-1">{{ data.name }}</h4>
              <p class="text-center">{{ data.date }}</p>
              <div class="star-wrapper mb-3">
                <span class="text-center"><i class="bi bi-star-fill me-1" v-for="(value, i) in data.star"
                    :key="i"></i></span>
              </div>
              <div class="image-wrapper">
                <img :src="data.src" :alt="data.alt">
              </div>
            </div>
          </div>
        </div>
        <div class="cta d-flex align-items-center justify-content-center">
          <a href="#" class="text-capitalize">Lihat lebih banyak</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: [
        'Beragam menu Olahan',
        'Pelayanan Terbaik',
        'Rasa dan Pengiriman Terpercaya',
      ],
      currentIndex: 0,
      menu: [
        {}, {}, {}, {}, {}
      ],
      galery: [
        {
          src: '/galery/1.jpg',
          alt: 'image 1',
          text: 'Pembagian Aqiqah pak mamat'
        }, {
          src: '/galery/2.jpg',
          alt: 'image 2',
          text: 'Persiapan Aqiqah anak pertama pak Misbah'
        }, {
          src: '/galery/3.jpg',
          alt: 'image 3',
          text: 'Pembagian Aqiqah di rumah pak raden'
        }, {
          src: '/galery/1.jpg',
          alt: 'image 1',
          text: 'Pembagian Aqiqah pak mamat'
        }, {
          src: '/galery/2.jpg',
          alt: 'image 2',
          text: 'Persiapan Aqiqah anak pertama pak Misbah'
        }, {
          src: '/galery/3.jpg',
          alt: 'image 3',
          text: 'Pembagian Aqiqah di rumah pak raden'
        },
      ],
      testimoni: [
        {
          name: 'rosihudin',
          src: '/cust/cust1.jpg',
          alt: 'customer aqiqah emak',
          date: '08/09/2024',
          star: 5
        }, {
          name: 'eva',
          src: '/cust/cust2.jpg',
          alt: 'customer aqiqah emak',
          date: '10/09/2024',
          star: 4
        }, {
          name: 'yulianti',
          src: '/cust/cust3.jpg',
          alt: 'customer aqiqah emak',
          date: '10/08/2024',
          star: 5
        }
      ]
    }
  },
}
</script>

<style scoped>
.dynamic-part {
  display: inline-block;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
  {
  opacity: 0;
}

.home {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(~/assets/img/bg-hero.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 90vh;
  /* max-height: max-content; */
  padding-block: 73px;
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
