<template>
  <header>
    <div class="header" :class="routeClass">
      <div class="container">
        <div class="text-wrapper">
          <h1 class="text-center">{{ header[routeText].h1 }}</h1>
          <p class="text-center">{{ header[routeText].p }}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    routeClass() {
      const routeName = this.$route.name;
      return `bg-${routeName}`;
    },
    routeText() {
      const routeName = this.$route.name
      return routeName
    }
  },
  data() {
    return {
      header: {
        about: {
          h1: 'Tentang Aqiqah Emak',
          p: 'Yuk lebih kenal dengan Aqiqah Emak!'
        },
        layanan: {
          h1: 'Layanan Kami',
          p: 'Layanan kami selalu menjadi pilihan terbaik ayah bunda'
        },
        galery: {
          h1: 'Galeri Kami',
          p: 'Setiap kegiatan dan momen yang kami dokumentasikan'
        }
      }
    }
  },
}
</script>

<style scoped>
.bg-about {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(~/assets/img/header/about.jpeg);
  background-attachment: fixed;
}

.bg-layanan {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(~/assets/img/header/layanan.jpg);
  background-attachment: fixed;
}

.bg-galery {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(~/assets/img/header/galery.jpg);
  background-attachment: fixed;
}
</style>
