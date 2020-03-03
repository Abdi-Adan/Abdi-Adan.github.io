'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "c413decdb5e980807a611f9eeea351f0",
"/assets/assets/banner.png": "22c742cd44a175ab83356f65d14a68ec",
"/assets/assets/dev.jpg": "4b560097e4fe863b5bc17387e8da48d4",
"/assets/assets/dev2.jpg": "1046a19a16f1e041a4ce7074644fdd39",
"/assets/assets/google.png": "9b224c9884c2bb081d4ac92b23675c2e",
"/assets/assets/kelvin.jpg": "025ac4acad76b10970aeac6b7a426773",
"/assets/assets/kitabulogo.png": "eb64888a407039005b60ddd2c7a3e70e",
"/assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"/index.html": "1dcb5f5a92edd1b9a39ef7aeb61d3e22",
"/main.dart.js": "1320dbebb3d6dafb9e3cbf2c40beb931",
"/main.dart.js.deps": "52fca1765c6cee72f7fff48c2d55633c"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
