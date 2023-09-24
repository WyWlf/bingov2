

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/multiplayer_room/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.e39d7db0.js","_app/immutable/chunks/scheduler.ce5fb7fd.js","_app/immutable/chunks/index.cdd0258f.js","_app/immutable/chunks/js.cookie.edb2da2a.js","_app/immutable/chunks/mixkit-game-click-1114.ebb665c7.js"];
export const stylesheets = ["_app/immutable/assets/13.f845c68f.css","_app/immutable/assets/style.4a9a781b.css"];
export const fonts = [];
