// plugins/facebook-pixel.js
export default ({ app }) => {
    if (process.client) {
        // Tambahkan kode Meta Pixel di sini
        !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', '899271045376701'); // Ganti dengan ID Pixel Anda

        // Track PageView dengan parameter tambahan
        const trackPageView = (contentId, contentName) => {
            fbq('track', 'PageView', {
                content_id: contentId || window.location.pathname,
                content_name: contentName || app.context.route.name || 'Unknown Content'
            });
        };

        // Track pada inisialisasi
        trackPageView();

        // Monitor perubahan rute
        app.router.afterEach((to) => {
            trackPageView(to.path, to.name);
        });
    }
};
