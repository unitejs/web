/**
 * Service worker
 */

var CACHE_NAME = "{CACHE_NAME}";
var CACHE_URLS = {CACHE_URLS};

function doFetch (fetchRequest) {
    return fetch(fetchRequest)
        .then(function (response) {
            if (!response || response.status !== 200 || response.type !== "basic") {
                return response;
            }
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
                .then(function (cache) {
                    cache.put(event.request, responseToCache);
                })
                .catch(function (err) {
                    console.error("Service Worker::fetch.cache.put", err);
                });

            return response;
        })
        .catch(function (err) {
            console.error("Service Worker::fetch", err);
        });
}

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(CACHE_URLS);
            })
            .catch(function (err) {
                console.error("Service Worker::install", err);
            })
    );
});

self.addEventListener("activate", function (event) {
    var cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys()
            .then(function (cacheNames) {
                return Promise.all(
                    cacheNames.map(function (cacheName) {
                        if (cacheWhitelist.indexOf(cacheName) === -1) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .catch(function (err) {
                console.error("Service Worker::activate", err);
            })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                }

                return doFetch(event.request.clone());
            })
            .catch(function (err) {
                console.error("Service Worker::caches.match", err);
            })
    );
});

/* Generated by UniteJS */
