<template>
    <section id="offer" class="py-5">
        <div class="container">
            <h4 class="text-success text-center fw-bold mb-4">Testimoni dari customer kami!</h4>
            <div class="d-flex flex-column flex-md-row flex-wrap gap-3 justify-content-center mb-5">
                <img class="img-fluid shadow" src="~/assets/images/cust1.jpg" alt="">
                <img class="img-fluid shadow" src="~/assets/images/cust2.jpg" alt="">
                <img class="img-fluid shadow" src="~/assets/images/cust3.jpg" alt="">
                <img class="img-fluid shadow" src="~/assets/images/cust4.jpg" alt="">
            </div>
            <hr class="mb-4">
        </div>
        <div class="container-custom">
            <h4 class="text-center fw-bold lh-base">Promo Khusus bulan ini saja!</h4>
            <span class="d-flex gap-5 justify-content-center">
                <span class="fs-1 fw-bold text-danger">
                    <i class="bi bi-arrow-down-right"></i>
                    <i class="bi bi-arrow-down"></i>
                    <i class="bi bi-arrow-down-left"></i>
                </span>
                <!-- <img style="transform: rotate(90deg);" width="75" src="~/assets/images/down-arrow.mp4" alt=""> -->
                <!-- <img style="transform: rotate(90deg);" width="75" src="~/assets/images/fast-forward.png" alt="">
                <img style="transform: rotate(90deg);" width="75" src="~/assets/images/fast-forward.png" alt=""> -->
            </span>
            <img src="~/assets/images/promo-terbatas.jpg" class="img-fluid shadow" alt="">
            <div class="cta d-flex justify-content-center mb-2 mt-4">
                <a href="#" class="btn btn-danger"><i class="bi bi-whatsapp me-2"></i>Ambil Promo</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
@media (max-width: 576px) {
    a {
        width: 100%;
    }
}
</style>