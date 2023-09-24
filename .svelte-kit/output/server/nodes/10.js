import * as universal from '../entries/pages/game_multiplayer/_page.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/game_multiplayer/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/game_multiplayer/+page.js";
export const imports = ["_app/immutable/nodes/10.7244cbb5.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.ce5fb7fd.js","_app/immutable/chunks/index.cdd0258f.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.4afc524e.js","_app/immutable/chunks/correct.980f2511.js","_app/immutable/chunks/js.cookie.edb2da2a.js","_app/immutable/chunks/webSocketConnection.61438940.js","_app/immutable/chunks/Modal.dbb8c5fa.js","_app/immutable/chunks/index.8bec06ac.js"];
export const stylesheets = ["_app/immutable/assets/10.dd6d44a1.css","_app/immutable/assets/style.4a9a781b.css"];
export const fonts = [];
