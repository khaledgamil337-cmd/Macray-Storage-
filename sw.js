const CACHE_NAME = 'macray-v1';
const urlsToCache = [
  '/Macray-Storage-/',
  '/Macray-Storage-/index.html',
  '/Macray-Storage-/icon-192.png',
  '/Macray-Storage-/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
