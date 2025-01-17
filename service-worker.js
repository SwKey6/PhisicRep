const CACHE_NAME = 'physics-formulas-v3';
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
  // Добавьте сюда все остальные файлы вашего проекта (CSS, JS, изображения и т.д.)
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Возвращаем данные из кэша, если они есть
        if (response) {
          return response;
        }
        // Иначе делаем сетевой запрос
        return fetch(event.request)
          .then((response) => {
            // Проверяем что ответ валидный
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            // Кэшируем новый ответ
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
      })
  );
});