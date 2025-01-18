const CACHE_NAME = 'physics-formulas-v5';
const urlsToCache = [
  '/PhisicRep/Phisic/',
  '/PhisicRep/Phisic/index.html',
  '/PhisicRep/Phisic/manifest.webmanifest',
  '/PhisicRep/Phisic/ik.png',
  '/PhisicRep/Phisic/Pages/massa.html',
  '/PhisicRep/Phisic/Pages/plotnost.html',
  '/PhisicRep/Phisic/Pages/davlenie.html',
  '/PhisicRep/Phisic/Pages/pageStyle.css',
  '/PhisicRep/Phisic/js/plotnost.js',
  '/PhisicRep/Phisic/js/CalculateMassa.js',
  '/PhisicRep/Phisic/js/CalculateDavlenie.js',
  '/PhisicRep/Phisic/style.css',
  '/PhisicRep/Phisic/Formula.html',
  '/PhisicRep/Phisic/CI.html',
  '/PhisicRep/Phisic/js/CI.js',
  '/PhisicRep/Phisic/Pages/S.html',
  '/PhisicRep/Phisic/js/S.js',
  '/PhisicRep/Phisic/Pages/Powers.html',
  '/PhisicRep/Phisic/js/Powers.js',
  '/PhisicRep/Phisic/CI.css',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Если получили ответ от сети, кэшируем его
        if (response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
        }
        return response;
      })
      .catch(() => {
        // Если сеть недоступна, пробуем взять из кэша
        return caches.match(event.request);
      })
  );
});