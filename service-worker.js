const CACHE_NAME = 'physics-formulas-v16';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/ik.png',
  '/Pages/massa.html',
  '/Pages/plotnost.html',
  '/Pages/davlenie.html',
  '/Pages/pageStyle.css',
  '/js/plotnost.js',
  '/js/CalculateMassa.js',
  '/js/CalculateDavlenie.js',
  '/style.css',
  '/Formula.html',
  '/CI.html',
  '/js/CI.js',
  '/Pages/S.html',
  '/js/S.js',
  '/Pages/Powers.html',
  '/js/Powers.js',
  '/CI.css',
  '/Pages/Q.html',
  '/js/Q.js',
  '/Pages/MKT.html',
  '/js/MKT.js',
  '/exemple.html',
  '/Pages/seventh.html',
  '/js/seventh.js',
  '/Pages/volume.html',
  '/js/volume.js',
  '/Pages/KPD.html',
  '/js/KPD.js',
  '/down.png',
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