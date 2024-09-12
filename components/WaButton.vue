<template>
    <div class="wa-button d-flex align-items-center gap-2">
        <p style="border: 1px solid white;" class="text-light bg-success py-2 px-3 rounded-5 mb-0">Customer Service</p>
        <a href="javascript:;" style="border: 1px solid white;"
            class="bg-success bg-gradient rounded-circle d-flex justify-content-center align-items-center text-light">
            <i class="bi bi-whatsapp fs-3"></i>
        </a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wa-button {
    position: fixed;
    z-index: 9;
    right: 10px;
    bottom: 10px;
}

@media (min-width: 577px) {
    .wa-button {
        right: 30px;
        bottom: 30px;
    }
}

a {
    height: 60px;
    width: 60px;
}
</style>