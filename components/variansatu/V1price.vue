<template>
    <section id="price" class="py-5">
        <div class="container">
            <div class="text-wrapping mb-5">
                <h4 class="text-center">Ini Pricelist Kami Ayah Bunda .. 🥰</h4>
                <!-- <p class="text-danger text-center">Pilih Jenis Paket !</p> -->
            </div>
            <div class="price-box">
                <div class="nav-select d-flex justify-content-center">
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link" :class="kelamin === 'lelaki' ? 'bg-success active' : ''"
                                @click="changeKelamin('lelaki')" aria-current="page" href="javascript:;">Paket
                                Lelaki</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :class="kelamin === 'perempuan' ? 'bg-success active' : ''"
                                @click="changeKelamin('perempuan')" href="javascript:;">Paket
                                Perempuan</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            kelamin: 'lelaki'
        }
    },
    methods: {
        changeKelamin(value) {
            this.kelamin = value
        }
    },
}
</script>

<style scoped>
.nav-link {
    color: green;
}
</style>