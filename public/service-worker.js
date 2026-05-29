/**
 * Service Worker for Common Ground PWA
 * Strategy:
 *   - Cache-first for static assets (JS, CSS, fonts, images)
 *   - Stale-while-revalidate for data (policies.json)
 *   - Offline fallback for navigation
 */

const CACHE_VERSION = "v5";
const STATIC_CACHE = `cg-static-${CACHE_VERSION}`;
const DATA_CACHE = `cg-data-${CACHE_VERSION}`;

const PRECACHE_ASSETS = [
  "/",
  "/about/",
  "/search/",
  "/data/policies.json",
  "/manifest.webmanifest",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/images/hero.jpg",
  "/logos/logo-mark.svg",
];

// Install: precache all static assets + policy pages
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_CACHE);
      await cache.addAll(PRECACHE_ASSETS);

      // Fetch policies.json and precache all individual policy pages
      try {
        const response = await fetch("/data/policies.json");
        const policies = await response.json();
        const policyUrls = policies
          .filter((p) => p.id !== "short-name" && p.overallSupport !== null)
          .map((p) => `/policies/${p.id}/`);
        await cache.addAll(policyUrls);
      } catch (e) {
        // If fetching policies fails, we still have base precache
        console.warn("[SW] Could not precache policy pages:", e);
      }

      await self.skipWaiting();
    })()
  );
});

// Activate: remove old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== STATIC_CACHE && k !== DATA_CACHE)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

// Fetch strategy
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  // Data files: stale-while-revalidate
  if (url.pathname.startsWith("/data/")) {
    event.respondWith(staleWhileRevalidate(DATA_CACHE, request));
    return;
  }

  // Navigation requests: network-first with offline fallback
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match("/")))
    );
    return;
  }

  // Static assets: cache-first
  event.respondWith(
    caches.match(request).then(
      (cached) => cached || fetch(request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
        }
        return response;
      })
    )
  );
});

async function staleWhileRevalidate(cacheName, request) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  });

  return cached || fetchPromise;
}
