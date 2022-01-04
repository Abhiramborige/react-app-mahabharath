const cacheName = "version-1";
const urlsToCache = [
  'index.html',
  'offline.html'
];
const self = this;

// Install ServiceWorker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.log(err))
  )
})

// Listen ServiceWorker

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(() => {
        return fetch(event.request)
          .catch(() => caches.match('offline.html'))
      })
  )
})

// Run Service Worker

self.addEventListener('activate', event => {
  const cacheWhiteList = [];
  cacheWhiteList.push(cacheName);
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map(cacheName => {
        if (!cacheWhiteList.includes(cacheName)) {
          return caches.delete(cacheName);
        }
      })
    ))
  )
})