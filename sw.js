// Offline cache. Naikkan angka VERSI setiap kali file situs diubah.
var VERSI = "pagerjurang-v4";
var INTI = ["./", "index.html", "css/style.css", "js/app.js", "data/info.js", "img/ikon.svg"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSI).then(function (c) { return c.addAll(INTI); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSI; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

// Serve from cache straight away, refresh from network in the background.
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(VERSI).then(function (c) {
    return c.match(req, { ignoreSearch: true }).then(function (hit) {
      var net = fetch(req).then(function (res) {
        if (res && res.ok) c.put(req, res.clone());
        return res;
      }).catch(function () { return hit; });
      return hit || net;
    });
  }));
});
