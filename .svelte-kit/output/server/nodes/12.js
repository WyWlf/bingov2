

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/multiplayer/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.fa58d36e.js","_app/immutable/chunks/scheduler.ce5fb7fd.js","_app/immutable/chunks/index.cdd0258f.js","_app/immutable/chunks/js.cookie.edb2da2a.js","_app/immutable/chunks/mixkit-game-click-1114.ebb665c7.js","_app/immutable/chunks/webSocketConnection.61438940.js","_app/immutable/chunks/Modal.dbb8c5fa.js","_app/immutable/chunks/index.8bec06ac.js","_app/immutable/chunks/index.4afc524e.js"];
export const stylesheets = ["_app/immutable/assets/12.4ca9a789.css","_app/immutable/assets/style.4a9a781b.css"];
export const fonts = [];
