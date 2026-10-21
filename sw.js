self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('velu-taxi-store').then(function(cache) {
      return cache.addAll([
        'app.html',
        'logo.png',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
