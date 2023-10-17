const NAME_CACHE_STATIC = "app_shell";

const appShell = [
    "/public/municipios_puebla.geojson"
];

self.addEventListener('install', (e) => {
    const staticCache = caches.open(NAME_CACHE_STATIC).then((cache)=>{
        cache.addAll(appShell);
    });

    e.waitUntil( Promise.all([ staticCache ])  );
});

self.addEventListener('fetch', (e)=>{
    if(e.request.url.includes("municipios_puebla.geojson")){
        return e.respondWith(caches.open(NAME_CACHE_STATIC).then(cache=>{
            console.log("municipios_puebla.geojson");
            return cache.match(e.request);
        }));
    }
    e.respondWith(fetch(e.request));
});