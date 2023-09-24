import { c as create_ssr_component, e as escape, j as each, k as get_store_value, i as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
import { i as incorrect, b as bg_msc } from "../../../chunks/wronganswer-37702.js";
import Cookies from "js-cookie";
/* empty css                     */import { i as io } from "../../../chunks/webSocketConnection.js";
import { M as Modal } from "../../../chunks/Modal.js";
const count = writable(0);
const current_question = writable();
const hp = writable(5);
const comboCounter = writable(0);
const time = writable(60);
const win = writable([
  ["a0", "a1", "a2", "a3", "a4"],
  ["b5", "b6", "b7", "b8", "b9"],
  ["c10", "c11", "c12", "c13", "c14"],
  ["d15", "d16", "d17", "d18", "d19"],
  ["e20", "e21", "e22", "e23", "e24"],
  ["a0", "b5", "c10", "d15", "e20"],
  ["a1", "b6", "c11", "d16", "e21"],
  ["a2", "b7", "c12", "d17", "e22"],
  ["a3", "b8", "c13", "d18", "e23"],
  ["a4", "b9", "c14", "d19", "e24"],
  ["a0", "b6", "c12", "d18", "e24"],
  ["a4", "b8", "c12", "d16", "e20"]
]);
const win_status = writable(0);
const correct_count = writable(0);
const wrong_count = writable(0);
const bonus_hp = writable(0);
const max = writable(24);
const trigger = writable(false);
const multiplayer = writable(false);
const game_start = writable(false);
const lowTime = "/_app/immutable/assets/time.83b74d97.wav";
const card_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".heart.svelte-1yedsaz.svelte-1yedsaz.svelte-1yedsaz{animation:svelte-1yedsaz-beat 1s infinite linear;animation-timing-function:steps(10)}@keyframes svelte-1yedsaz-beat{0%{scale:1.1\r\n		}85%{scale:1\r\n		}}.player-stat.svelte-1yedsaz.svelte-1yedsaz.svelte-1yedsaz{margin:2rem;margin-bottom:0}.question-box.svelte-1yedsaz img.svelte-1yedsaz.svelte-1yedsaz{height:4rem;width:4rem}.player-stat.svelte-1yedsaz img.svelte-1yedsaz.svelte-1yedsaz{height:2rem;width:2rem}#timer.svelte-1yedsaz.svelte-1yedsaz.svelte-1yedsaz{font-size:3rem}.mobile-view.svelte-1yedsaz.svelte-1yedsaz.svelte-1yedsaz{display:none}.question-box.svelte-1yedsaz.svelte-1yedsaz.svelte-1yedsaz{height:20vh;background-color:white;font-size:3em;font-family:'Lilita One', cursive;justify-content:center}.card-container.svelte-1yedsaz.svelte-1yedsaz.svelte-1yedsaz{display:flex;height:max-content;background-color:rgb(112, 166, 212);justify-content:flex-end}.card.svelte-1yedsaz.svelte-1yedsaz.svelte-1yedsaz{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;margin:3rem;text-align:center;border:3px solid white;box-sizing:border-box;background:linear-gradient(to right, #b31ace, #39175c);box-shadow:0px 0px 25px 15px rgb(29, 35, 97)}.card.active.svelte-1yedsaz.svelte-1yedsaz.svelte-1yedsaz{animation:svelte-1yedsaz-timeLow 1s infinite linear;animation-timing-function:steps(50)}@keyframes svelte-1yedsaz-timeLow{0%{box-shadow:0px 0px 25px 15px rgb(29, 35, 97)}85%{box-shadow:0px 0px 25px 15px rgb(199, 49, 29)}}.question.svelte-1yedsaz.svelte-1yedsaz.svelte-1yedsaz{display:flex;flex-direction:column;width:100%;margin:3em}.question.svelte-1yedsaz div.svelte-1yedsaz.svelte-1yedsaz{display:flex;align-items:center;gap:0.75rem}.question.svelte-1yedsaz div.svelte-1yedsaz span.svelte-1yedsaz{display:flex;align-items:center;font-size:2rem;font-family:'Lilita One', cursive}.question.svelte-1yedsaz p.svelte-1yedsaz.svelte-1yedsaz{font-family:'Lilita One', cursive;font-size:2rem;color:white}.question.svelte-1yedsaz img.svelte-1yedsaz.svelte-1yedsaz{height:3rem;width:3rem}@media(min-width: 1024px){.question-box.svelte-1yedsaz.svelte-1yedsaz.svelte-1yedsaz{height:10vh;font-size:1em}}@media(max-width: 768px){hr.svelte-1yedsaz.svelte-1yedsaz.svelte-1yedsaz{width:90%}.mobile-view.svelte-1yedsaz.svelte-1yedsaz.svelte-1yedsaz{display:block}.card-container.svelte-1yedsaz.svelte-1yedsaz.svelte-1yedsaz{display:none}.card.svelte-1yedsaz.svelte-1yedsaz.svelte-1yedsaz{display:grid;width:90vw;margin:auto;margin-top:10%}.mobile-view.svelte-1yedsaz>.question-box.svelte-1yedsaz.svelte-1yedsaz{display:flex;flex-direction:column;;;border-radius:10px;height:fit-content}.question-box.svelte-1yedsaz span.svelte-1yedsaz.svelte-1yedsaz{align-self:center;font-size:2rem}.question-box.svelte-1yedsaz p.svelte-1yedsaz.svelte-1yedsaz{font-size:1.2rem;font-family:light}}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let question;
  let threshold;
  let { questionString = [] } = $$props;
  let counter = 0;
  trigger.subscribe((val) => {
    if (val == true) {
      if (counter == 0) {
        questionString.splice(0, 1);
        trigger.set(false);
      } else {
        questionString.splice(counter, 1);
        trigger.set(false);
      }
    }
  });
  count.subscribe((value) => {
    counter = value;
    max.set(questionString.length - 1);
  });
  let lifeObj = [];
  hp.subscribe((value) => {
    lifeObj = [];
    for (let x = 0; x < value; x++) {
      lifeObj.push("null");
    }
  });
  let comboCount = 0;
  comboCounter.subscribe((value) => {
    comboCount = value;
  });
  let countdown = 0;
  time.subscribe((value) => {
    countdown = value;
  });
  let intervs;
  game_start.subscribe((val) => {
    if (val == true) {
      intervs = setInterval(
        () => {
          time.update((prev) => prev - 1);
        },
        1e3
      );
    }
  });
  win_status.subscribe((value) => {
    if (value > 0) {
      clearInterval(intervs);
    }
  });
  hp.subscribe((val) => {
    if (val <= 0) {
      clearInterval(intervs);
    }
  });
  io.on("chicken-dinner", () => {
    clearInterval(intervs);
  });
  let border_warn = "";
  let loweff = new Audio(lowTime);
  if ($$props.questionString === void 0 && $$bindings.questionString && questionString !== void 0)
    $$bindings.questionString(questionString);
  $$result.css.add(css$2);
  question = questionString[counter];
  {
    current_question.set(Math.round(eval(question) * 100) / 100);
  }
  threshold = "none";
  {
    if (comboCount > 3) {
      threshold = "block";
    } else {
      threshold = "none";
    }
  }
  {
    if (countdown == 0) {
      bonus_hp.set(0);
      hp.update((prev) => prev - 1);
      comboCounter.set(0);
      count.update((prev) => prev + 1);
      threshold = "none";
      time.set(60);
      let soundeff = new Audio(incorrect);
      soundeff.play();
    }
  }
  {
    if (countdown < 15) {
      loweff.volume = 0.3;
      loweff.play();
      border_warn = "active";
    } else {
      loweff.volume = 0;
      border_warn = "";
    }
  }
  return `<div class="card-container svelte-1yedsaz"><div class="question svelte-1yedsaz"><div class="question-box svelte-1yedsaz"><span class="svelte-1yedsaz">Question:   ${escape(question)} = ?</span></div> <div class="svelte-1yedsaz"><p class="svelte-1yedsaz" data-svelte-h="svelte-1v6xktn">Timer:</p> <span class="svelte-1yedsaz"><img src="/src/routes/assets/images/8bit-hrglass.gif" alt="" class="svelte-1yedsaz"> ${escape(countdown)}s <img src="/src/routes/assets/images/8bit-hrglass.gif" alt="" class="svelte-1yedsaz"></span></div> <div class="svelte-1yedsaz"><p class="svelte-1yedsaz" data-svelte-h="svelte-1b7hjqh">Lives:</p> ${each(lifeObj, ({ count: count2 }, i) => {
    return `<span class="svelte-1yedsaz" data-svelte-h="svelte-1vm5k3j"><img class="heart svelte-1yedsaz" src="/src/routes/assets/images/heart.png" alt=""></span>`;
  })}</div> <div class="svelte-1yedsaz"><p class="svelte-1yedsaz" data-svelte-h="svelte-1j6bdvw">Combo counter:</p> <span class="svelte-1yedsaz"><img src="/src/routes/assets/images/combo.gif" alt="" style="${"display: " + escape(threshold, true)}" class="svelte-1yedsaz">
				   ${escape(comboCount)}   
				<img src="/src/routes/assets/images/combo.gif" alt="" style="${"display: " + escape(threshold, true)}" class="svelte-1yedsaz"></span></div> <div class="svelte-1yedsaz" data-svelte-h="svelte-1eha2vw"><p class="svelte-1yedsaz">Game mode:</p> <br> <span class="svelte-1yedsaz">Multiplayer Mode</span></div></div> <div class="${"card " + escape(border_warn, true) + " svelte-1yedsaz"}">${slots.default ? slots.default({}) : ``}</div></div>  <div class="mobile-view svelte-1yedsaz"><div class="question-box svelte-1yedsaz"><p style="margin: auto; font-weight:bold" class="svelte-1yedsaz" data-svelte-h="svelte-1oaz1pm">Multiplayer Mode</p> <span style="margin: auto; display: flex" class="svelte-1yedsaz"><img src="/src/routes/assets/images/8bit-hrglass.gif" alt="" class="svelte-1yedsaz"> <span id="timer" class="svelte-1yedsaz">${escape(countdown)}s</span> <img src="/src/routes/assets/images/8bit-hrglass.gif" alt="" class="svelte-1yedsaz"></span> <div class="player-stat svelte-1yedsaz"><p style="display: flex; align-items:center" class="svelte-1yedsaz">Lives:
			${each(lifeObj, ({ count: count2 }, i) => {
    return `<span class="svelte-1yedsaz" data-svelte-h="svelte-1vm5k3j"><img class="heart svelte-1yedsaz" src="/src/routes/assets/images/heart.png" alt=""></span>`;
  })}</p> <p style="display: flex; align-items:center" class="svelte-1yedsaz">Combo: <span style="font-size: 2rem; font-weight:bold; font-family: Arial" class="svelte-1yedsaz">${escape(comboCount)}</span>
				 <span class="svelte-1yedsaz"><img src="/src/routes/assets/images/combo.gif" alt="" style="${"display: " + escape(threshold, true)}" class="svelte-1yedsaz"></span></p></div> <hr class="svelte-1yedsaz"> <span class="svelte-1yedsaz">Question:   ${escape(question)} = ?</span></div> <div class="${"card " + escape(border_warn, true) + " svelte-1yedsaz"}">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
const span_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "span.svelte-1b7m7o6{color:skyblue;font-size:2rem;display:flex;border:3px solid white;width:15vw;align-items:center;justify-content:center;height:100%;font-family:'Lilita One', cursive}span.svelte-1b7m7o6:hover{box-shadow:0px 0px 15px 5px white}@media(max-width: 9999px){span.svelte-1b7m7o6{font-size:1.5em;width:9vw}}@media(max-width: 1024px){span.svelte-1b7m7o6{font-size:1.5em;width:8vw}}@media(max-width: 768px){span.svelte-1b7m7o6{font-size:1.3rem;width:auto;height:8vh}}",
  map: null
};
const Span = create_ssr_component(($$result2, $$props2, $$bindings2, slots2) => {
  let { a } = $$props2;
  let { i } = $$props2;
  let prop;
  get_store_value(win);
  let row_key = "";
  if (i < 5) {
    row_key = "a" + i;
  } else if (i < 10) {
    row_key = "b" + i;
  } else if (i < 15) {
    row_key = "c" + i;
  } else if (i < 20) {
    row_key = "d" + i;
  } else if (i < 25) {
    row_key = "e" + i;
  }
  if ($$props2.a === void 0 && $$bindings2.a && a !== void 0)
    $$bindings2.a(a);
  if ($$props2.i === void 0 && $$bindings2.i && i !== void 0)
    $$bindings2.i(i);
  $$result2.css.add(css$1);
  return ` <span role="button" tabindex="0" style="${"pointer-events: " + escape(prop, true)}"${add_attribute("id", row_key, 0)} class="svelte-1b7m7o6">${escape(a["answer"])}</span>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".room-logs.svelte-2y6spp.svelte-2y6spp{display:flex;flex-direction:column;border:1px solid black;height:20vh;min-width:20vw;width:max-content;align-items:center;margin:2rem;gap:1rem;padding:0.5rem;border-radius:1rem;overflow-y:auto}h1.svelte-2y6spp.svelte-2y6spp,h2.svelte-2y6spp.svelte-2y6spp{font-family:'Lilita One', cursive;-webkit-text-fill-color:rgb(20, 106, 177);font-size:7rem;display:inline;margin:0.25em}.room-logs.svelte-2y6spp span.svelte-2y6spp{text-align:center}#header.svelte-2y6spp.svelte-2y6spp{height:20svh;height:20vh;background-color:white}.button-group-modal.svelte-2y6spp button.svelte-2y6spp:hover{color:rgb(34, 255, 255);box-shadow:0px 0px 15px 1px blueviolet}.button-group-modal.svelte-2y6spp button.svelte-2y6spp{width:10vw}.wait-container.svelte-2y6spp.svelte-2y6spp{display:flex;flex-direction:column;height:100vh;height:100svh;justify-content:flex-start;align-items:center;background-color:white}.wait-container.svelte-2y6spp>.wait-modal.svelte-2y6spp{display:flex;flex-direction:column;width:100%;justify-content:center;align-items:center}#header.svelte-2y6spp>.game-header.svelte-2y6spp{display:flex;font-family:Arial, Helvetica, sans-serif;flex-direction:column;padding:1rem}.wait-modal.svelte-2y6spp p.svelte-2y6spp{font-family:Arial, Helvetica, sans-serif}.modal-container.svelte-2y6spp.svelte-2y6spp{font-family:'Roboto', sans-serif;text-align:center}.modal-container.svelte-2y6spp .game-stat.svelte-2y6spp{display:grid;grid-template-columns:55% 45%;justify-items:start}.button-group.svelte-2y6spp.svelte-2y6spp{display:flex;justify-self:center;align-items:center;color:rgb(0, 0, 0);padding:1rem}.button-group.svelte-2y6spp button.svelte-2y6spp:hover{box-shadow:0px 0px 15px 1px blueviolet;color:rgb(34, 255, 255)}@media(max-width: 768px){#header.svelte-2y6spp.svelte-2y6spp,hr.svelte-2y6spp.svelte-2y6spp{display:none}.button-group.svelte-2y6spp.svelte-2y6spp{padding:0.5rem}}@media(max-width: 468px){.button-group.svelte-2y6spp button.svelte-2y6spp{width:50vw}.button-group-modal.svelte-2y6spp button.svelte-2y6spp{width:30vw}h1.svelte-2y6spp.svelte-2y6spp,h2.svelte-2y6spp.svelte-2y6spp{font-size:2rem}.room-logs.svelte-2y6spp.svelte-2y6spp{width:60vw}}",
  map: null
};
let closeOnClickOutside = false;
let closeOnEscape = false;
function UrlExists(url2) {
  var http = new XMLHttpRequest();
  http.open("GET", url2, false);
  http.send();
  return http.status != 404;
}
function getList(arr) {
  let unshuffled = arr;
  let shuffled = unshuffled.map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
  return shuffled;
}
function questionBuilder(fval, operator, lval) {
  let operations = {
    addition: "+",
    subtraction: "-",
    multiplication: "*",
    division: "/"
  };
  return "" + fval + operations[operator] + lval;
}
const Page = create_ssr_component(($$result2, $$props2, $$bindings2, slots2) => {
  let winner;
  let joined;
  let player_count;
  let minutes;
  let seconds;
  let time_finished;
  let host = Cookies.get("host");
  let session = "";
  let opened = false;
  let count2 = 0;
  let time2;
  localStorage["token"] = 0;
  let url = "";
  let game_config = {};
  let answers = [];
  let questionString2 = [];
  let bgMsc = new Audio(bg_msc);
  bgMsc.volume = 0.1;
  if (Cookies.get("multiplayer_session") == null) {
    let game = Math.floor(Math.random() * 999999 + 1);
    Cookies.set("multiplayer_session", game.toString());
    session = game.toString();
    url = "../php/game_configs/" + game.toString() + ".json";
    let path = "" + game + ".json";
    let x = 0;
    game_config = { path };
    for (x = 0; x < 25; x++) {
      let fVal = Math.floor(1 + Math.random() * 25);
      let lVal = Math.floor(1 + Math.random() * 25);
      let rand = Math.floor(Math.random() * 4);
      switch (rand) {
        case 0:
          let addition = fVal + lVal;
          game_config[x] = {
            firstVal: fVal,
            secondVal: lVal,
            operator: "addition",
            answer: Math.round(addition * 100) / 100
          };
          break;
        case 1:
          let subtraction = fVal - lVal;
          game_config[x] = {
            firstVal: fVal,
            secondVal: lVal,
            operator: "subtraction",
            answer: Math.round(subtraction * 100) / 100
          };
          break;
        case 2:
          let multiplication = fVal * lVal;
          game_config[x] = {
            firstVal: fVal,
            secondVal: lVal,
            operator: "multiplication",
            answer: Math.round(multiplication * 100) / 100
          };
          break;
        case 3:
          let division = fVal / lVal;
          game_config[x] = {
            firstVal: fVal,
            secondVal: lVal,
            operator: "division",
            answer: Math.round(division * 100) / 100
          };
          break;
      }
    }
  } else {
    session = Cookies.get("multiplayer_session");
    url = "../php/game_configs/" + Cookies.get("multiplayer_session") + ".json";
    InitializeVariables();
  }
  let gameBody = "";
  let multiplayer_header = "none";
  multiplayer.subscribe((val) => {
    if (val == true) {
      multiplayer_header = "";
      gameBody = "none";
    } else {
      multiplayer_header = "none";
      gameBody = "";
    }
  });
  game_start.subscribe((val) => {
    if (val == true) {
      time2 = setInterval(
        () => {
          count2 += 1;
        },
        1e3
      );
    }
  });
  let logs = [];
  function PromiseArray() {
    const importPromise = import(url);
    return importPromise;
  }
  async function InitializeVariables() {
    let temp_config = [];
    let questionnaire = [];
    let fileCheck = UrlExists("src/routes/php/game_configs/" + Cookies.get("multiplayer_session") + ".json");
    if (fileCheck == true) {
      const x = PromiseArray();
      x.then((module) => {
        for (let key in module.default) {
          if (module.default.hasOwnProperty(key) && typeof module.default[key] == "object") {
            temp_config.push(module.default[key]);
          }
        }
      }).then(() => {
        answers = getList(temp_config);
        let question2 = getList(answers);
        question2.forEach((item) => {
          questionnaire.push(questionBuilder(item["firstVal"], item["operator"], item["secondVal"]));
        });
        questionString2 = questionnaire;
      });
    } else {
      Cookies.remove("multiplayer_session");
      window.location.href = "/multiplayer";
    }
  }
  async function gamesave(condition) {
    let day = /* @__PURE__ */ new Date();
    const today = day.toLocaleDateString();
    let match_record = {
      game: Cookies.get("multiplayer_session"),
      username: Cookies.get("username"),
      time: time_finished,
      streak: highest,
      correct: get_store_value(correct_count),
      wrong: get_store_value(wrong_count),
      status: condition,
      mode: 1,
      host: Cookies.get("host_name"),
      winner,
      date: today
    };
    const sql = await fetch("https://localhost/sv/bingo/src/routes/php/match_save.php", {
      method: "POST",
      body: JSON.stringify(match_record)
    });
    let echo_code = await sql.text();
    console.log(echo_code);
  }
  async function winSave() {
    let match_record = {
      game: Cookies.get("multiplayer_session"),
      host: Cookies.get("host_name"),
      winner
    };
    const sql = await fetch("https://localhost/sv/bingo/src/routes/php/winner_save.php", {
      method: "POST",
      body: JSON.stringify(match_record)
    });
    let echo_code = await sql.text();
    console.log(echo_code);
  }
  hp.subscribe((val) => {
    if (val == 0) {
      gameEnd = true;
      opened = true;
      clearInterval(time2);
      gamesave(0);
      io.emit("player-kick", {
        game: Cookies.get("multiplayer_session"),
        player: Cookies.get("username")
      });
      Cookies.remove("multiplayer_session");
    }
  });
  win_status.subscribe((value) => {
    if (value > 0) {
      opened = true;
      clearInterval(time2);
      gamesave(1);
      io.emit("winner", {
        game: Cookies.get("multiplayer_session"),
        winner: Cookies.get("username")
      });
      winner = Cookies.get("username");
      winSave();
    }
  });
  let gameEnd = false;
  let highest = 0;
  comboCounter.subscribe((value) => {
    let curr_val = value;
    if (curr_val > highest) {
      highest = curr_val;
    }
  });
  addEventListener("beforeunload", () => {
    io.emit("disconnected", {
      game: Cookies.get("multiplayer_session"),
      player: Cookies.get("username")
    });
  });
  $$result2.css.add(css);
  winner = "";
  joined = 0;
  player_count = 0;
  minutes = Math.floor(count2 / 60);
  seconds = count2 % 60;
  time_finished = "" + minutes + " minute(s) & " + seconds + " second(s)";
  return `<div class="wait-container svelte-2y6spp" style="${"display: " + escape(multiplayer_header, true) + ";"}"><div class="title" data-svelte-h="svelte-1h1za07"><h1 class="svelte-2y6spp">MATH</h1> <h2 class="svelte-2y6spp">BINGO</h2></div> <div class="wait-modal svelte-2y6spp"><p class="svelte-2y6spp">Your game code is: <span>${escape(session)}</span></p> <p class="svelte-2y6spp">Players joined: ${escape(joined)}</p> <p style="font-weight: bold;" class="svelte-2y6spp" data-svelte-h="svelte-pv0365">Waiting for other players to join...</p> <div class="room-logs svelte-2y6spp">${each(logs, (players) => {
    return `<span class="svelte-2y6spp">User <span style="font-weight: bolder; color: blue" class="svelte-2y6spp">${escape(players)}</span> has joined the game</span>`;
  })}</div> <div class="button-group-modal svelte-2y6spp" style="display:flex; gap: 2rem">${host == "true" ? `<button class="svelte-2y6spp" data-svelte-h="svelte-1nyzmkh">Start Game</button> <button class="svelte-2y6spp" data-svelte-h="svelte-1hwd472">Cancel</button>` : `<div style="display: flex; flex-direction:column; align-items:center; gap: 1rem" data-svelte-h="svelte-1e30cj6"><img src="src/routes/assets/images/loader.gif" alt="" style="height: 3rem; width: 3rem"> <a href="/multiplayer">Leave</a></div>`}</div></div></div> <div id="header" style="${"display: " + escape(gameBody, true) + ";"}" class="svelte-2y6spp"><div class="game-header svelte-2y6spp"><div><p>Game code: <span style="font-weight: bold;">${escape(session)}</span></p> <p>Players left: <span style="font-weight: bold;">${escape(joined)}/${escape(player_count)}</span></p> <p data-svelte-h="svelte-9hixqi">Mode: <span style="font-weight: bold;">Operations</span></p></div> <div data-svelte-h="svelte-1x7m6zr"></div></div></div> <hr style="${"display: " + escape(gameBody, true) + ";"}" class="svelte-2y6spp"> <div style="${"display: " + escape(gameBody, true) + ";"}">${validate_component(Card, "Card").$$render($$result2, { questionString: questionString2 }, {}, {
    default: () => {
      return `${each(answers, (a, i) => {
        return `${validate_component(Span, "Span").$$render($$result2, { a, i }, {}, {})}`;
      })}`;
    }
  })} ${validate_component(Modal, "Modal").$$render(
    $$result2,
    {
      centered: true,
      opened,
      target: "body",
      title: "Game ended",
      overflow: "inside",
      closeOnClickOutside,
      closeOnEscape
    },
    {},
    {
      default: () => {
        return `${gameEnd == false && winner == Cookies.get("username") ? `<div class="modal-container svelte-2y6spp"><span data-svelte-h="svelte-x0efpq">🎉You have won!🎉</span><br><br> <small data-svelte-h="svelte-ag8h37">Game has been recorded to your match history.</small> <br><br> <hr class="svelte-2y6spp"> <span data-svelte-h="svelte-1hpu3un">Game Stats</span> <br><br> <div class="game-stat svelte-2y6spp"><p data-svelte-h="svelte-nga66p">Time finished</p> <p>: ${escape(time_finished)}</p> <p data-svelte-h="svelte-17e32cg">Highest answer streak</p> <p>: ${escape(highest)}</p> <p data-svelte-h="svelte-i6r21p">Correct answers</p> <p>: ${escape(get_store_value(correct_count))}</p> <p data-svelte-h="svelte-1nzj1xu">Wrong answers</p> <p>: ${escape(get_store_value(wrong_count))}</p></div></div>` : `${gameEnd == true ? `<div class="modal-container svelte-2y6spp"><span data-svelte-h="svelte-5kf99g">You&#39;ve ran out of HP!</span><br><br> <small data-svelte-h="svelte-g1q4j3">Tip: You can regain HP from answering correctly 5 times consecutively</small> <br><br> <hr class="svelte-2y6spp"> <div class="button-group svelte-2y6spp" style="justify-content: center;"><button class="svelte-2y6spp" data-svelte-h="svelte-q45fj9">Return</button></div></div>` : `${gameEnd == false && winner != Cookies.get("username") ? `<div class="modal-container svelte-2y6spp"><span data-svelte-h="svelte-914zwk">You have lost!</span><br><br> <small data-svelte-h="svelte-g1q4j3">Tip: You can regain HP from answering correctly 5 times consecutively</small> <br><br> <hr class="svelte-2y6spp"> <div class="button-group svelte-2y6spp" style="justify-content: center;"><button class="svelte-2y6spp" data-svelte-h="svelte-q45fj9">Return</button></div></div>` : ``}`}`}`;
      }
    }
  )} </div>`;
});
export {
  Page as default
};
