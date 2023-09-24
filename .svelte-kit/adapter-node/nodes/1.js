

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.72168fb8.js","_app/immutable/chunks/scheduler.ce5fb7fd.js","_app/immutable/chunks/index.cdd0258f.js","_app/immutable/chunks/singletons.e37431d1.js","_app/immutable/chunks/index.4afc524e.js"];
export const stylesheets = [];
export const fonts = [];
