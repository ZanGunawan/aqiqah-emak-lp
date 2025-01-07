<template>
  <div v-if="isLoading" class="loading-overlay">
      <div class="loader">
          <img src="~/assets/img/main-logo.png" alt="Logo" class="logo" />
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
      ...mapGetters(['isLoading'])
  }
}
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #28a745;
  /* Warna hijau Bootstrap */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  position: relative;
}

.logo {
  width: 100px;
  /* Atur sesuai kebutuhan */
  height: auto;
  position: relative;
  z-index: 2;
  border-radius: 50%;
  /* Pastikan logo di atas animasi */
}

.loader::before {
  content: '';
  position: absolute;
  top: -10px;
  /* Adjust sesuai kebutuhan */
  left: -10px;
  /* Adjust sesuai kebutuhan */
  width: 120px;
  /* Lebar lingkaran */
  height: 120px;
  /* Tinggi lingkaran */
  border: 8px solid rgba(255, 255, 255, 0.5);
  /* Warna dan transparansi */
  border-radius: 50%;
  border-top: 8px solid #fff;
  /* Warna atas lingkaran */
  animation: spin 1.5s linear infinite;
  /* Animasi berputar */
}

@keyframes spin {
  0% {
      transform: rotate(0deg);
  }

  100% {
      transform: rotate(360deg);
  }
}
</style>
