self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    // Add code to cache assets
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
    // Add code to remove old caches
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});