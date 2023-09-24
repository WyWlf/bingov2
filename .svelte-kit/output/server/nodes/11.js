import * as universal from '../entries/pages/main/_page.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/main/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/main/+page.js";
export const imports = ["_app/immutable/nodes/11.57f6251c.js","_app/immutable/chunks/scheduler.ce5fb7fd.js","_app/immutable/chunks/index.cdd0258f.js","_app/immutable/chunks/js.cookie.edb2da2a.js","_app/immutable/chunks/mixkit-game-click-1114.ebb665c7.js"];
export const stylesheets = ["_app/immutable/assets/11.b1cfd41a.css","_app/immutable/assets/style.4a9a781b.css"];
export const fonts = [];
