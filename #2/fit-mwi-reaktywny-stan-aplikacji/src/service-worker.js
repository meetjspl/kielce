importScripts('workbox-sw.js');

workbox.setConfig({
  debug: false,
  modulePathPrefix: ''
});

workbox.skipWaiting();
workbox.clientsClaim();
workbox.precaching.precacheAndRoute([]);