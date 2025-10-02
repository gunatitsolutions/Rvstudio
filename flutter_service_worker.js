'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0ab54fde06034014ae7c1354f920097b",
"version.json": "a96545fc3140d9e51a7824a506a68712",
"index.html": "a044aeb9ef8bc9a5c8111d2eebe5a126",
"/": "a044aeb9ef8bc9a5c8111d2eebe5a126",
"main.dart.js": "9f029aab9b4b991320e7b12cfb80e445",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "eb551d29fb89eadb986349a0f42e0841",
"icons/Icon-192.png": "3a60fc513f63e854f67acc201b80312d",
"icons/Icon-maskable-192.png": "3a60fc513f63e854f67acc201b80312d",
"icons/Icon-maskable-512.png": "92658b7cf664b7a889b27c63c6116811",
"icons/Icon-512.png": "92658b7cf664b7a889b27c63c6116811",
"manifest.json": "1f27ea6ffd71dac954b906d375bb09b6",
"sitemap.xml": "871ab01b2fc8e2dc07dde2f283d49e31",
"assets/AssetManifest.json": "442c5c393003a7607b8bf88adf512dae",
"assets/NOTICES": "c699d05e473d880dd62773bbbaa61148",
"assets/FontManifest.json": "97c2528ecc2fbf4093965257fdba1854",
"assets/AssetManifest.bin.json": "7f065f2ef49e24410babf293d1a6f92d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "69a7f5525e410d3c05530e5bc5e874d9",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "df86a1976d76bd04cf3fcaf5add2dd0f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "a8c55d0b318cfe9df7bd54422e6983b1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "308fe691b4f61fbfd24f7e8bd6a515f0",
"assets/fonts/MaterialIcons-Regular.otf": "166d33e25a2aec548820c8c499b8e295",
"assets/assets/images/email.png": "5eb3c4b86aafbee72b8c471b29413a50",
"assets/assets/images/mappin.png": "9cc090022ae31337336d2024160714b8",
"assets/assets/images/design.png": "6aaec412d8837ac9a83f03f453877606",
"assets/assets/images/connectivity_framwork_not_found.png": "8b381ef0e0390f7d8da51e905388c99d",
"assets/assets/images/pratilipi.png": "0b06e1cb29916872ce9707ebebcb3f56",
"assets/assets/images/carousels/carouse-product-watch.jpg": "2aa8e62254a1b7f7a790a262995ec1ed",
"assets/assets/images/carousels/carousel-product.jpg": "561809e3976c14134f2d0836f74474ed",
"assets/assets/images/carousels/penical.jpeg": "91b1e68f8cf4330d3569594c5a4c7044",
"assets/assets/images/carousels/carousel-Product-IMG_8120.JPG": "fc596c4e1f8910efb3450321ec2676e2",
"assets/assets/images/carousels/carousel-portrait.jpg": "9bfe96bd3fbb368a8c4f48be56dae832",
"assets/assets/images/writer.jpg": "b45cdca8138bc7bfde8748af7505221b",
"assets/assets/images/logodesign.jpeg": "d32dd80e4b8869197598040131d7f843",
"assets/assets/images/promote.png": "2bd8adcad79a4ebb80888d1a0583b3c4",
"assets/assets/images/shutterstock.png": "9d508466bb3cf5576bd93b737fa5dcfa",
"assets/assets/images/quote.png": "1a0aa9a06293ac5689bc32012e0e13e6",
"assets/assets/images/develop.png": "471c2c94d5d04112086eba9fd78c6809",
"assets/assets/images/laptop.png": "fb49e3c0c36437239db5f8c114b03062",
"assets/assets/images/fix_framework_not_found.png": "8c890fcb7a4933c029a6f6df822a8213",
"assets/assets/images/phone.png": "45903a1ffa9ede882171aca9f71c4c29",
"assets/assets/images/ios.png": "49f79e21da11e96b8cf0e3b8bef6616c",
"assets/assets/images/write.png": "dc4f0d3df06d5fc9b13b9168b88e2560",
"assets/assets/images/whatsapp.png": "426617ad28567da23a2346566d84b5a6",
"assets/assets/images/ravilakhtariya.png": "294969b89dfb7d13b42f818abd836b3b",
"assets/assets/placeholder.png": "56fd7b19d588e96fe2d06e48920c087b",
"assets/assets/AppIcon.png": "92658b7cf664b7a889b27c63c6116811",
"assets/assets/thumbnails/thumb-ahemdabad-street.jpg": "8ceeb9e4bd43c058a91c06a70140dcea",
"assets/assets/thumbnails/thumb-waterfall-rajkot.jpg": "5b1449f6fbb6f1fcceefdb1cdc1335dd",
"assets/assets/thumbnails/thum-rishikesh.jpg": "a406fbbfbc5056cd3cb1a5ad09ab755a",
"assets/assets/thumbnails/thumb-solo.jpg": "7e8b176afccb88167239786c8ae26301",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
