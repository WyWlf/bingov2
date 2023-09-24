import * as universal from '../entries/pages/singleplayer/_page.js';

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/singleplayer/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/singleplayer/+page.js";
export const imports = ["_app/immutable/nodes/14.ea90bb85.js","_app/immutable/chunks/scheduler.ce5fb7fd.js","_app/immutable/chunks/index.cdd0258f.js","_app/immutable/chunks/js.cookie.edb2da2a.js","_app/immutable/chunks/mixkit-game-click-1114.ebb665c7.js"];
export const stylesheets = ["_app/immutable/assets/14.242d97cf.css","_app/immutable/assets/style.4a9a781b.css"];
export const fonts = [];
