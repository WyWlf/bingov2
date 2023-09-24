import * as universal from '../entries/pages/multiplayer_room/_layout.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/multiplayer_room/+layout.js";
export const imports = ["_app/immutable/nodes/6.d55a0f20.js","_app/immutable/chunks/layout.97fc869f.js","_app/immutable/chunks/scheduler.ce5fb7fd.js","_app/immutable/chunks/index.cdd0258f.js"];
export const stylesheets = [];
export const fonts = [];
