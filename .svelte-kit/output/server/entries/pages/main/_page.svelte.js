import { c as create_ssr_component } from "../../../chunks/ssr.js";
import Cookies from "js-cookie";
/* empty css                     */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#btn-div.svelte-149st73{display:grid;justify-content:center;row-gap:2rem;padding:5rem;color:white}button.svelte-149st73{font-family:'Roboto', sans-serif;background:linear-gradient(to right, #4981ec, #8ca1c2);border:3px solid white;border-radius:15px;height:10vh;width:50vw;font-size:2rem}@media(max-width: 768px){button.svelte-149st73{font-size:1.5rem;width:70vw}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Cookies.get("username");
  $$result.css.add(css);
  return `<body data-sveltekit-preload-data="off"><div class="title" data-svelte-h="svelte-1h1za07"><h1>MATH</h1> <h2>BINGO</h2></div> <hr> <div id="btn-div" class="svelte-149st73"><a href="/singleplayer" data-svelte-h="svelte-1trki96"><button class="svelte-149st73">Single Player Mode</button></a> <a href="/multiplayer" data-svelte-h="svelte-1y19d1g"><button class="svelte-149st73">Multiplayer Mode</button></a> <a href="/account" data-svelte-h="svelte-1x3y7vj"><button class="svelte-149st73">View History</button></a> <br><br> <a href="/"><button class="svelte-149st73" data-svelte-h="svelte-4ad4p">Log out</button></a></div> </body>`;
});
export {
  Page as default
};
