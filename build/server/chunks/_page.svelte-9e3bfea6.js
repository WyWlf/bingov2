import { c as create_ssr_component } from './ssr-559db788.js';
import Cookies from 'js-cookie';

const css = {
  code: "#btn-div.svelte-13jzm4s{display:grid;justify-content:center;row-gap:2em;padding:5em;color:white}button.svelte-13jzm4s{font-family:'Roboto', sans-serif;background:linear-gradient(to right, #4981ec, #8ca1c2);border:3px solid white;border-radius:15px;height:10vh;width:50vw;font-size:2em}p.svelte-13jzm4s{justify-self:center;font-size:1.5em}@media(max-width: 768px){button.svelte-13jzm4s{font-size:1.5rem;width:70vw}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Cookies.get("username");
  if (localStorage["token"] == null || localStorage["token"] == 0) {
    window.location.reload();
    localStorage["token"] = 1;
  }
  $$result.css.add(css);
  return `<div class="title" data-svelte-h="svelte-1r0t4f2"><h1>MATH</h1> <h2>BINGO</h2></div> <hr> <div id="btn-div" class="svelte-13jzm4s"><p class="svelte-13jzm4s" data-svelte-h="svelte-tjkfvs">Single Player Mode</p> <a href="/game" data-svelte-h="svelte-xbbm8j"><button class="svelte-13jzm4s">Operations</button></a> <a href="/" class="disabled" data-svelte-h="svelte-298i8u"><button class="svelte-13jzm4s">Geometry</button></a> <a href="/" class="disabled" data-svelte-h="svelte-181z3id"><button class="svelte-13jzm4s">Fractions</button></a> <br><br> <a href="/main" data-svelte-h="svelte-r80ibb"><button class="svelte-13jzm4s">Back</button></a> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9e3bfea6.js.map
