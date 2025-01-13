<template>
  <div id="about">
    <Header />
    <div class="about">
      <div class="visi-wrapper">
        <div class="container">
          <div class="row mb-5">
            <div class="col-12 col-md-5">
              <div class="image-wrapper">
                <img src="~/assets/img/about/1.jpg" alt="tentang aqiqah emak">
              </div>
            </div>
            <div class="col-12 col-md-7 d-flex align-items-center">
              <div class="text-wrapper">
                <h2>Visi Kami</h2>
                <p>Menjadi pilihan utama keluarga dalam menyediakan layanan aqiqah yang berkualitas dan terpercaya</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-7 d-flex align-items-center">
              <div class="text-wrapper">
                <h2>Misi Kami</h2>
                <p>Menyediakan layanan aqiqah yang mudah diakses dengan bahan berkualitas, serta memberikan pengalaman
                  yang memuaskan bagi pelanggan.</p>
              </div>
            </div>
            <div class="col-12 col-md-5">
              <div class="image-wrapper d-flex justify-content-end">
                <img src="~/assets/img/about/2.jpg" alt="tentang aqiqah emak">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nilai-wrapper">
        <div class="container">
          <div class="text-wrapper">
            <h1>Nilai-Nilai Kami</h1>
            <ul>
              <li>
                <img src="~/assets/img/about/ThumbsUp.png" alt="nilai-nilai aqiqah emak">
                <span>Kualitas</span>
              </li>
              <li>
                <img src="~/assets/img/about/SealCheck.png" alt="nilai-nilai aqiqah emak">
                <span>Kepercayaan</span>
              </li>
              <li>
                <img height="101" src="~/assets/img/about/Vector.png" alt="nilai-nilai aqiqah emak">
                <span>Kepuasan Pelanggan</span>
              </li>
              <li>
                <img src="~/assets/img/about/HandHeart.png" alt="nilai-nilai aqiqah emak">
                <span>Kepedulian Sosial</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nilai-wrapper {
  /* height: 100px; */
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(~/assets/img/bg-nilai.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-top-left-radius: 50% 50px;
  border-top-right-radius: 50% 50px;
  margin-top: -50px;
}
</style>
