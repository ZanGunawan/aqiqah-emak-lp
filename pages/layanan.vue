<template>
  <div id="layanan">
    <Header />
    <div class="layanan">
      <div class="container">
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
                <p class="mb-0">Menyediakan menu lengkap versi aqiqah emak, ( menu / makanan / minuman / sertifikat /
                  boneka / goodie bag dll )</p>
              </div>
              <div class="cta-wrapper">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Layanan Kami -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {}, {}, {}, {}, {}
      ],
    }
  },
}
</script>

<style scoped></style>
