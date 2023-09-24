import * as universal from '../entries/pages/multiplayer/_layout.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/multiplayer/+layout.js";
export const imports = ["_app/immutable/nodes/5.d55a0f20.js","_app/immutable/chunks/layout.97fc869f.js","_app/immutable/chunks/scheduler.ce5fb7fd.js","_app/immutable/chunks/index.cdd0258f.js"];
export const stylesheets = [];
export const fonts = [];
