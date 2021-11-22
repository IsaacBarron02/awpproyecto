'use strict';

self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
  
    const title = 'Push Codelab';
    const options = {
      body: 'Yay it works.',
      icon: 'images/icon.png',
      badge: 'images/badge.png'
    };
    self.registration.showNotification(title, options);
  
    const notificationPromise = self.registration.showNotification(title, options);
    event.waitUntil(notificationPromise);
  });

/* Cache

const cachePWA = 'cache-site-v1';
const assets = [
    "/",
    "/index.html",
    "/css/bootstrap.min.css",
    "/css/font-awesome.min.css",
    "/css/templatemo_misc.min.css",
    "/css/templatemo_style.min.css",
    "/font/",
    "/images/close.png",
    "/images/facebook.png",
    "/images/googleplus.png",
    "/images/next.png",
    "/images/previous.png",
    "/images/templatemo_arrow.png",
    "/images/templatemo_header.jpg",
    "/images/templatemo_header.png",
    "/images/templatemo_mapcorner.png",
    "/images/templatemo_menubg.png",
    "/images/templatemo_pricing.jpg",
    "/images/templatemo_separateline.png",
    "/images/serviceimg.png",
    "/images/serviceimg1.png",
    "/images/workicon.png",
    "/images/twitter.png",
    "/imgages/icons/32.png",
    "/images/icons/48.png",
    "/images/icons/64.png",
    "/images/service/1.jpg",
    "/images/service/2.jpg",
    "/images/service/3.jpg",
    "/js/app.ja",
    "/js/bootstrap-collapse.js",
    "/js/jquery-1.11.1.min.js",
    "/js/templatemo_custom.js",

    
];

self.addEventListener('install', installEvent => {
    installEvent.waitUntil(
        caches.open(cachePWA)
        .then( cacheResh => { 
            return cacheResh.addAll(assets);
    })
    )
});

self.addEventListener('fetch', fetchEvent => {
    //console.log(fetchEvent.request.url);
    fetchEvent.respondWith(
        caches.open(cachePWA).then(cache => {
            return cache.match(fetchEvent.request).then(response => {
                return response || fetch(fetchEvent.request).then( response => {
                    cache.put(fetchEvent.request, response.clone());
                });
            });
        })
    )
})
*/