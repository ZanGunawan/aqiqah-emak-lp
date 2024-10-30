<template>
    <div>
        <Utama />
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('SET_LOADING', true); // Mulai loading
        setTimeout(() => {
            this.$store.commit('SET_LOADING', false); // Sembunyikan loading setelah 2 detik
        }, 2000);
    }
}
</script>

<style scoped>
div {
    background: rgb(228, 228, 228);
    max-width: 360px;
    margin-inline: auto;
}
</style>