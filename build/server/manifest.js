const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["8bit-hrglass.gif","favicon.png"]),
	mimeTypes: {".gif":"image/gif",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ca0d42c7.js","app":"_app/immutable/entry/app.01c3fe73.js","imports":["_app/immutable/entry/start.ca0d42c7.js","_app/immutable/chunks/scheduler.ce5fb7fd.js","_app/immutable/chunks/singletons.e37431d1.js","_app/immutable/chunks/index.4afc524e.js","_app/immutable/entry/app.01c3fe73.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.ce5fb7fd.js","_app/immutable/chunks/index.cdd0258f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-4ee79d60.js')),
			__memo(() => import('./chunks/1-f0013965.js')),
			__memo(() => import('./chunks/2-5be6758b.js')),
			__memo(() => import('./chunks/3-a4b7e9f8.js')),
			__memo(() => import('./chunks/4-a9013cf6.js')),
			__memo(() => import('./chunks/5-3bc04b36.js')),
			__memo(() => import('./chunks/6-8e7442fd.js')),
			__memo(() => import('./chunks/8-df4ead54.js')),
			__memo(() => import('./chunks/9-339a8a6e.js')),
			__memo(() => import('./chunks/10-b9d25856.js')),
			__memo(() => import('./chunks/11-e1b4e513.js')),
			__memo(() => import('./chunks/12-c6c06777.js')),
			__memo(() => import('./chunks/13-2e42ed3e.js')),
			__memo(() => import('./chunks/14-b8fffcc6.js'))
		],
		routes: [
			{
				id: "/account",
				pattern: /^\/account\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/game_multiplayer",
				pattern: /^\/game_multiplayer\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/game",
				pattern: /^\/game\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/main",
				pattern: /^\/main\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/multiplayer_room",
				pattern: /^\/multiplayer_room\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/multiplayer",
				pattern: /^\/multiplayer\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/singleplayer",
				pattern: /^\/singleplayer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
