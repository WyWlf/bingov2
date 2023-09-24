

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.be096b5f.js","_app/immutable/chunks/scheduler.ce5fb7fd.js","_app/immutable/chunks/index.cdd0258f.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.8bec06ac.js","_app/immutable/chunks/index.4afc524e.js","_app/immutable/chunks/js.cookie.edb2da2a.js"];
export const stylesheets = [];
export const fonts = [];
