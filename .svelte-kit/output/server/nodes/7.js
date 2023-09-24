import * as universal from '../entries/pages/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/7.6bb8624a.js","_app/immutable/chunks/scheduler.ce5fb7fd.js","_app/immutable/chunks/index.cdd0258f.js","_app/immutable/chunks/singletons.e37431d1.js","_app/immutable/chunks/index.4afc524e.js","_app/immutable/chunks/js.cookie.edb2da2a.js"];
export const stylesheets = ["_app/immutable/assets/7.4b562cce.css","_app/immutable/assets/style.4a9a781b.css"];
export const fonts = [];
