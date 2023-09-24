import { c as create_ssr_component, v as validate_component, i as add_attribute } from "../../../chunks/ssr.js";
import Cookies from "js-cookie";
import { i as io } from "../../../chunks/webSocketConnection.js";
/* empty css                     */import { M as Modal } from "../../../chunks/Modal.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".modal-container.svelte-1ohlt3j.svelte-1ohlt3j{display:flex;gap:1rem;flex-direction:column;align-items:center}.modal-container.svelte-1ohlt3j input.svelte-1ohlt3j{width:50%;height:3vh;border-radius:1rem;border:1px solid rgb(11, 85, 85)}.modal-container.svelte-1ohlt3j button.svelte-1ohlt3j{width:50%;height:4vh;font-size:1rem;border-radius:1rem;border:1px solid rgb(255, 255, 255)}.modal-container.svelte-1ohlt3j button.svelte-1ohlt3j:hover{box-shadow:0px 0px 13px 1px blue}#btn-div.svelte-1ohlt3j.svelte-1ohlt3j{display:grid;justify-content:center;row-gap:2rem;padding:5rem;color:white}button.svelte-1ohlt3j.svelte-1ohlt3j{font-family:'Roboto', sans-serif;background:linear-gradient(to right,#4981ec,#8ca1c2);;;border:3px solid white;border-radius:15px;height:10vh;width:50vw;font-size:2rem}p.svelte-1ohlt3j.svelte-1ohlt3j{justify-self:center;font-size:1.5rem}@media(max-width: 768px){button.svelte-1ohlt3j.svelte-1ohlt3j{font-size:1.5rem;width:70vw}}",
  map: null
};
let closeOnClickOutside = true;
let closeOnEscape = true;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Cookies.remove("multiplayer_session");
  Cookies.remove("host_name");
  Cookies.set("host", "false");
  Cookies.get("username");
  let opened = false;
  let code = "";
  io.on("no-room", () => {
    console.log("Room not found");
  });
  io.on("room-found", (data) => {
    if (code == data["room"] && data != false) {
      Cookies.set("multiplayer_session", data["room"]);
      window.location.href = "/game_multiplayer";
      console.log("found");
    } else if (data == false) {
      Cookies.remove("mutiplayer_session");
      console.log("cannot rejoin");
    }
  });
  $$result.css.add(css);
  return `<html lang="ts"><div class="title" data-svelte-h="svelte-17hlipe"><h1>MATH</h1> <h2>BINGO</h2></div> <hr> <div id="btn-div" class="svelte-1ohlt3j"><p class="svelte-1ohlt3j" data-svelte-h="svelte-11kn65l">Multiplayer Mode</p> <a href="/multiplayer_room" data-svelte-h="svelte-dukhpf"><button class="svelte-1ohlt3j">Create room</button></a> <button class="svelte-1ohlt3j" data-svelte-h="svelte-zwfy57">Join room</button> <br><br> <a href="/main" data-svelte-h="svelte-my547a"><button class="svelte-1ohlt3j">Back</button></a></div></html> ${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      centered: true,
      opened,
      target: "body",
      title: "Join room",
      overflow: "inside",
      closeOnClickOutside,
      closeOnEscape
    },
    {},
    {
      default: () => {
        return `<div class="modal-container svelte-1ohlt3j"><input type="text" name="" id="" class="svelte-1ohlt3j"${add_attribute("value", code, 0)}> <button class="svelte-1ohlt3j" data-svelte-h="svelte-asdme2">Join</button> <br></div>`;
      }
    }
  )}`;
});
export {
  Page as default
};
