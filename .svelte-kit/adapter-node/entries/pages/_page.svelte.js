import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import Cookies from "js-cookie";
/* empty css                  */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".vertical-box.svelte-a3y2mj.svelte-a3y2mj.svelte-a3y2mj{border-radius:13px;display:flex;flex-direction:column;background-color:skyblue;width:50%;height:88vh;box-sizing:border-box;background-image:url('assets/images/mountains-background-game-vector.jpg');background-position:center;background-repeat:no-repeat;background-size:cover;margin:auto;margin-top:7vh}.vertical-header.svelte-a3y2mj p.svelte-a3y2mj.svelte-a3y2mj{font-size:2em;font-family:'Lilita One', cursive;text-align:center}.vertical-footer.svelte-a3y2mj.svelte-a3y2mj.svelte-a3y2mj{box-sizing:border-box;background-color:transparent;align-self:center;height:100%;width:100%;border-bottom-left-radius:13px;border-bottom-right-radius:13px}.vertical-footer.svelte-a3y2mj div.svelte-a3y2mj.svelte-a3y2mj{margin:1rem}.vertical-footer.svelte-a3y2mj p.svelte-a3y2mj.svelte-a3y2mj,label.svelte-a3y2mj.svelte-a3y2mj.svelte-a3y2mj{text-align:center}.vertical-footer.svelte-a3y2mj p.svelte-a3y2mj.svelte-a3y2mj:nth-child(1),.vertical-footer.svelte-a3y2mj label.svelte-a3y2mj.svelte-a3y2mj{font-size:1.5rem;font-family:sans-serif}input.svelte-a3y2mj.svelte-a3y2mj.svelte-a3y2mj{font-size:2rem;height:100%;border-radius:10px;border:1px;width:40%;justify-self:center;height:2.5vh;padding:0.5rem}.vertical-footer.svelte-a3y2mj div.svelte-a3y2mj div.svelte-a3y2mj{display:grid}button.svelte-a3y2mj.svelte-a3y2mj.svelte-a3y2mj{color:rgb(39, 39, 39);margin-top:5vh;border-radius:10px;border:1px;height:5vh;width:50%;justify-self:center}#status.svelte-a3y2mj.svelte-a3y2mj.svelte-a3y2mj{color:rgb(190, 202, 209);background-color:rgb(59, 54, 54);width:fit-content;justify-self:center;border-radius:13px;padding:5px}@media(max-width: 1368px){.vertical-box.svelte-a3y2mj.svelte-a3y2mj.svelte-a3y2mj{width:80%}input.svelte-a3y2mj.svelte-a3y2mj.svelte-a3y2mj{width:50%}}@media(max-width: 768px){input.svelte-a3y2mj.svelte-a3y2mj.svelte-a3y2mj{width:80%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let status = "";
  let user = Cookies.get("username");
  console.log(user);
  $$result.css.add(css);
  return `<div class="vertical-box svelte-a3y2mj"><div class="vertical-header svelte-a3y2mj" data-svelte-h="svelte-1ihtf7s"><p class="svelte-a3y2mj">SIGN IN</p></div> <div class="vertical-footer svelte-a3y2mj"><div class="svelte-a3y2mj"><p class="svelte-a3y2mj" data-svelte-h="svelte-2td5dy">USER LOGIN</p> <br> <div class="svelte-a3y2mj" data-svelte-h="svelte-id4g1"><label for="username" class="svelte-a3y2mj">Username</label> <br> <input type="text" name="" id="username" class="svelte-a3y2mj"></div> <br> <div class="svelte-a3y2mj" data-svelte-h="svelte-1mfrnr"><label for="" class="svelte-a3y2mj">Password</label> <br> <input type="password" id="password" class="svelte-a3y2mj"></div> <div class="svelte-a3y2mj"><p id="status" class="svelte-a3y2mj">${escape(status)}</p> <button class="svelte-a3y2mj" data-svelte-h="svelte-1lvb3s9">Log-in</button></div></div></div> </div>`;
});
export {
  Page as default
};
