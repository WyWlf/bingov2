

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/game/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.3513b6d0.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.ce5fb7fd.js","_app/immutable/chunks/index.cdd0258f.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.4afc524e.js","_app/immutable/chunks/correct.980f2511.js","_app/immutable/chunks/js.cookie.edb2da2a.js","_app/immutable/chunks/Modal.dbb8c5fa.js","_app/immutable/chunks/index.8bec06ac.js"];
export const stylesheets = ["_app/immutable/assets/9.033c94be.css","_app/immutable/assets/style.4a9a781b.css"];
export const fonts = [];
