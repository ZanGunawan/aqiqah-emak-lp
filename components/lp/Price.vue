<template>
    <section id="price">
        <div class="text-wrapper">
            <h2>Price list Aqiqah Emak</h2>
        </div>
        <div class="image-wrapper">
            <img src="~/assets/images/brosur.jpg" alt="paket hemat aqiqah emak">
            <!-- <img src="~/assets/images/paket/2.jpg" alt="paket special aqiqah emak">
            <img src="~/assets/images/paket/3.jpg" alt="paket istimewa aqiqah emak"> -->
        </div>
        <div class="cta-wrapper">
            <a href="javascript:;" @click="downloadImage"> 
                <button>
                    <!-- <img src="~/assets/images/chat-circle.png" alt=""> -->
                    Download Pricelist
                </button>
            </a> 
        </div>
    </section>
</template>

<script>
    export default {
        methods: {
            downloadImage() {
            // URL relatif ke folder static
                const imageUrl = '/images/brosur.jpg';
                const link = document.createElement('a');
                link.href = imageUrl;
                link.download = 'Brosur Aqiqah Emak.jpg'; // Nama file saat diunduh
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }
</script>

<style scoped>

</style>