<template>
    <div v-if="isNavbar" class="loading-overlay">
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['isNavbar'])
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
    background-color: #00000072;
    z-index: 1000;
    pointer-events: none;
}
</style>