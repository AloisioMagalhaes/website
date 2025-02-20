// service-worker.js (Example)
self.addEventListener('message', event => {
    if (event.data.type === 'init') {
        const nonce = event.data.nonce;
        console.log('Service Worker inicializado com nonce:', nonce);
        // You can use the nonce here for security if needed.
    }
    // ... other message handling ...
});

// Example background task (Web Worker style)
self.addEventListener('fetch', event => {
    // Intercept fetch requests (example - adapt as needed)
    // You can use this to cache resources, modify requests, etc.
});

// ... other service worker event listeners ...
