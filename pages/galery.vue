<template>
  <div id="galery">
    <Header />
    <div class="galery">
      <div class="container">
        <div class="image-wrapper">
          <div class="image-box" v-for="(data, index) in galery" :key="index">
            <img :src="data.src" :alt="data.alt">
            <p>{{ data.text }}</p>
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
    }
  },
}
</script>

<style scoped></style>
