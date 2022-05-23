const id = "MT*22-05-24",
	data = [
		"/mt/",
		"app.webmanifest",
		"resource/font/inter.woff2",
		"resource/style.css",
		"resource/script.js",
		"resource/img/icon.svg",
		"resource/img/icon.png"
	]
self.addEventListener("install", e => e.waitUntil(caches.open(id).then(c => c.addAll(data))))
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(k => Promise.all(k.map(key => { if (/MT/.test(key) && key !== id) return caches.delete(key) })))))
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))))
