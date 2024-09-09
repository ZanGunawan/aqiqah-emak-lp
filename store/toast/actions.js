import Papa from 'papaparse';
export default {
    cycleToasts({ state, commit }) {
        const showDuration = 8000; // Durasi tampilan toast (10 detik)

        // Fungsi untuk menampilkan toast berikutnya
        function showNextToast() {
            if (state.toasts.length > 0) {
                commit('SHOW_TOAST');
                // Setelah durasi tampil, sembunyikan toast dan tampilkan toast berikutnya
                setTimeout(() => {
                    commit('HIDE_TOAST');
                    const nextIndex = (state.currentToastIndex + 1) % state.toasts.length;
                    commit('SET_CURRENT_TOAST_INDEX', nextIndex);
                    showNextToast(); // Tampilkan toast berikutnya
                }, showDuration);
            }
        }

        // Mulai dengan menampilkan toast pertama
        showNextToast();
    },
    async fetchData({ commit }) {
        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTN-2Ok4IcG_36mpcBqrCkykU855PD9MMy8dHZBHeQtwC5yrjfvcxyhf85v6w5PtTIX0BUyNvQCCntR/pub?gid=1909641303&single=true&output=csv';

        try {
            // Mengambil data CSV
            const response = await fetch(csvUrl);
            const csvText = await response.text();

            // Mengonversi CSV ke JSON menggunakan PapaParse
            const results = await new Promise((resolve, reject) => {
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        resolve(results.data);
                    },
                    error: (error) => {
                        reject(error);
                    }
                });
            });

            // Menyimpan data ke state
            commit('SET_DATA', results);
        } catch (error) {
            console.error('Error fetching and parsing CSV:', error);
        }
    }
}