const CACHE_NAME = 'CACHE_NAME-1000'
const files = [
  '/',
  '/stl.css',
  '/run.js',
  '/android-chrome-384x384.png',
  '/favicon-32x32.png',
  '/android-chrome-192x192.png',
  
]

self.addEventListener('install', event => event.waitUntil(
  caches.open(CACHE_NAME)
    .then(cache => cache.addAll(files))
))
self.addEventListener('activate', event => event.waitUntil(
  caches.keys().then(cacheNames => Promise.all(
    cacheNames.map(cname => cname !== CACHE_NAME ? caches.delete(cname) : null)
  ))
))

self.addEventListener('fetch', event => event.respondWith(
    caches.match(event.request).then(
      response => response ? response : fetch(event.request)
    )
  )
)

