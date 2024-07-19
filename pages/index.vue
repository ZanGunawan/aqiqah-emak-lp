<template>
  <main>
    <div class="container-wrapper">
      <Header />
      <Promo  />
      <Why />
      <Benefit />
      <Paket />
      <Price />
      <Footer />
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
main {
  background: #E8E8E8;
}
.container-wrapper {
  background: #0A833D;
}
@media screen and (min-width: 694px) {
  main {
    padding-block: 40px; 
  }
  .container-wrapper {
    width: 694px;
    margin-inline: auto;
    border-radius: 30px
  }
}
</style>