<template>
    <section id="timer">
        <div class="timer">
            <h1>
                {{ offer }} <span>{{ timeLeft }}</span>
            </h1>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            offer: "Student discount up to 85% for today only",
            expiryTime: new Date().getTime() + 3 * 60 * 60 * 1000, // 3 jam
            intervalId: null,
            timeLeft: "",
        };
    },
    mounted() {
        this.updateTimeLeft();
        this.intervalId = setInterval(this.updateTimeLeft, 1000);
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    },
    methods: {
        updateTimeLeft() {
            const now = new Date().getTime();
            const timeDifference = this.expiryTime - now;
            if (timeDifference > 0) {
                const hours = Math.floor(timeDifference / (1000 * 60 * 60));
                const minutes = Math.floor(
                    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
                this.timeLeft = `${hours}:${minutes}:${seconds}`;
            } else {
                // Set ulang waktu penawaran setelah 7 jam
                this.expiryTime = new Date().getTime() + 3 * 60 * 60 * 1000;
            }
        },
    },
};
</script>

<style>
/* Styling can be added here */
</style>