import { c as create_ssr_component } from "../../../chunks/ssr.js";
import Cookies from "js-cookie";
/* empty css                     */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#btn-div.svelte-8lk7mi{display:grid;justify-content:center;row-gap:2rem;padding:5rem;color:white}button.svelte-8lk7mi{font-family:'Roboto', sans-serif;background:linear-gradient(to right,#4981ec,#8ca1c2);;;border:3px solid white;border-radius:15px;height:10vh;width:50vw;font-size:2rem}p.svelte-8lk7mi{justify-self:center;font-size:1.5rem}@media(max-width: 768px){button.svelte-8lk7mi{font-size:1.5rem;width:70vw}}@media(max-width: 468px){p.svelte-8lk7mi{font-size:1rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Cookies.set("host", "false");
  Cookies.set("host_name", "");
  Cookies.get("username");
  if (localStorage["token"] == null || localStorage["token"] == 0) {
    window.location.reload();
    localStorage["token"] = 1;
  }
  $$result.css.add(css);
  return `<html lang="ts"><div class="title" data-svelte-h="svelte-17hlipe"><h1>MATH</h1> <h2>BINGO</h2></div> <hr> <div id="btn-div" class="svelte-8lk7mi"><p class="svelte-8lk7mi" data-svelte-h="svelte-al7ui8">Create room for multiplayer</p> <a href="/game_multiplayer" data-svelte-h="svelte-jksi8c"><button class="svelte-8lk7mi">Operations</button></a> <a href="/#" class="disabled" data-svelte-h="svelte-1o48kaq"><button class="svelte-8lk7mi">Geometry</button></a> <a href="/#" class="disabled" data-svelte-h="svelte-gy0o4b"><button class="svelte-8lk7mi">Fractions</button></a> <br><br> <a href="/multiplayer" data-svelte-h="svelte-15ewbfd"><button class="svelte-8lk7mi">Back</button></a></div> </html>`;
});
export {
  Page as default
};
