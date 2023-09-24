import { l as split_css_unit, n as identity, c as create_ssr_component, o as listen, p as bubble, q as prevent_default, r as stop_propagation, g as getContext, b as compute_rest_props, t as get_current_component, d as spread, e as escape, f as escape_object, i as add_attribute, v as validate_component, m as missing_component, h as escape_attribute_value, a as subscribe, u as createEventDispatcher } from "./ssr.js";
import { createStitches, defaultThemeMap } from "@stitches/core";
import { w as writable } from "./index.js";
import { i as is_void } from "./names.js";
function cubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function sineInOut(t) {
  return -0.5 * (Math.cos(Math.PI * t) - 1);
}
function blur(node, { delay = 0, duration = 400, easing = cubicInOut, amount = 5, opacity = 0 } = {}) {
  const style2 = getComputedStyle(node);
  const target_opacity = +style2.opacity;
  const f = style2.filter === "none" ? "" : style2.filter;
  const od = target_opacity * (1 - opacity);
  const [value, unit] = split_css_unit(amount);
  return {
    delay,
    duration,
    easing,
    css: (_t, u) => `opacity: ${target_opacity - od * u}; filter: ${f} blur(${u * value}${unit});`
  };
}
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
  const style2 = getComputedStyle(node);
  const target_opacity = +style2.opacity;
  const transform = style2.transform === "none" ? "" : style2.transform;
  const od = target_opacity * (1 - opacity);
  const [xValue, xUnit] = split_css_unit(x);
  const [yValue, yUnit] = split_css_unit(y);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * xValue}${xUnit}, ${(1 - t) * yValue}${yUnit});
			opacity: ${target_opacity - od * u}`
  };
}
function slide(node, { delay = 0, duration = 400, easing = cubicOut, axis = "y" } = {}) {
  const style2 = getComputedStyle(node);
  const opacity = +style2.opacity;
  const primary_property = axis === "y" ? "height" : "width";
  const primary_property_value = parseFloat(style2[primary_property]);
  const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
  const capitalized_secondary_properties = secondary_properties.map(
    (e) => `${e[0].toUpperCase()}${e.slice(1)}`
  );
  const padding_start_value = parseFloat(style2[`padding${capitalized_secondary_properties[0]}`]);
  const padding_end_value = parseFloat(style2[`padding${capitalized_secondary_properties[1]}`]);
  const margin_start_value = parseFloat(style2[`margin${capitalized_secondary_properties[0]}`]);
  const margin_end_value = parseFloat(style2[`margin${capitalized_secondary_properties[1]}`]);
  const border_width_start_value = parseFloat(
    style2[`border${capitalized_secondary_properties[0]}Width`]
  );
  const border_width_end_value = parseFloat(
    style2[`border${capitalized_secondary_properties[1]}Width`]
  );
  return {
    delay,
    duration,
    easing,
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;`
  };
}
function scale(node, { delay = 0, duration = 400, easing = cubicOut, start = 0, opacity = 0 } = {}) {
  const style2 = getComputedStyle(node);
  const target_opacity = +style2.opacity;
  const transform = style2.transform === "none" ? "" : style2.transform;
  const sd = 1 - start;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (_t, u) => `
			transform: ${transform} scale(${1 - sd * u});
			opacity: ${target_opacity - od * u}
		`
  };
}
function draw(node, { delay = 0, speed, duration, easing = cubicInOut } = {}) {
  let len = node.getTotalLength();
  const style2 = getComputedStyle(node);
  if (style2.strokeLinecap !== "butt") {
    len += parseInt(style2.strokeWidth);
  }
  if (duration === void 0) {
    if (speed === void 0) {
      duration = 800;
    } else {
      duration = len / speed;
    }
  } else if (typeof duration === "function") {
    duration = duration(len);
  }
  return {
    delay,
    duration,
    easing,
    css: (_, u) => `
			stroke-dasharray: ${len};
			stroke-dashoffset: ${u * len};
		`
  };
}
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { observable = false } = $$props;
  let { component } = $$props;
  let { code } = $$props;
  if ($$props.observable === void 0 && $$bindings.observable && observable !== void 0)
    $$bindings.observable(observable);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  return `${observable ? ` <!-- HTML_TAG_START -->${exception(component, code)}<!-- HTML_TAG_END -->` : ``}`;
});
const Error$2 = Error$1;
const isBrowser = () => typeof window !== "undefined";
const browser = isBrowser();
const minifiedCss = ".modal-header{padding: 2px 16px;background-color: #339af0;color: white;}.modal-body{padding: 2px 16px;}.modal-footer{padding: 2px 16px;background-color: #339af0;color: white;}.modal-content{position: relative;background-color: #fefefe;margin: auto;padding: 0;border: 1px solid #888;width: 80%;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);animation-name: animateTop;animation-duration: 0.4s;}@keyframes animateTop {from {top: -300px; opacity: 0}to {top: 0; opacity: 1}}";
const style = browser ? document.createElement("style") : void 0;
if (browser) {
  const s = style;
  s.textContent = minifiedCss;
  s.id = "svelteui-inject";
}
function UserException(component, message, solution) {
  if (browser)
    document.head.appendChild(style);
  const html = `
    <div class="modal-content">
        <div class="modal-header">
            <h2>[${component} Component Error]:</h2>
            <h3>${message}</h3>
        </div>
        <div class="modal-body">
            <pre>
                ${solution ? solution : ""}
            </pre>
        </div>
        <div class="modal-footer">
            <h3>Fix the code to dismiss this error.</h3>
        </div>
    </div>        
    `;
  return html;
}
function exception(component, code) {
  const { message, solution } = code;
  if (solution) {
    return UserException(component, message, solution);
  }
  return UserException(component, message);
}
function useActions(node, actions) {
  const actionReturns = [];
  if (actions) {
    for (let i = 0; i < actions.length; i++) {
      const actionEntry = actions[i];
      const action = Array.isArray(actionEntry) ? actionEntry[0] : actionEntry;
      if (Array.isArray(actionEntry) && actionEntry.length > 1) {
        actionReturns.push(action(node, actionEntry[1]));
      } else {
        actionReturns.push(action(node));
      }
    }
  }
  return {
    update(actions2) {
      if ((actions2 && actions2.length || 0) != actionReturns.length) {
        throw new Error("You must not change the length of an actions array.");
      }
      if (actions2) {
        for (let i = 0; i < actions2.length; i++) {
          const returnEntry = actionReturns[i];
          if (returnEntry && returnEntry.update) {
            const actionEntry = actions2[i];
            if (Array.isArray(actionEntry) && actionEntry.length > 1) {
              returnEntry.update(actionEntry[1]);
            } else {
              returnEntry.update();
            }
          }
        }
      }
    },
    destroy() {
      for (let i = 0; i < actionReturns.length; i++) {
        const returnEntry = actionReturns[i];
        if (returnEntry && returnEntry.destroy) {
          returnEntry.destroy();
        }
      }
    }
  };
}
const MODIFIER_DIVIDER = "!";
const modifierRegex = new RegExp(`^[^${MODIFIER_DIVIDER}]+(?:${MODIFIER_DIVIDER}(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$`);
function createEventForwarder(component, except = []) {
  let $on;
  const events = [];
  component.$on = (fullEventType, callback) => {
    const eventType = fullEventType;
    let destructor = () => {
    };
    for (const exception2 of except) {
      if (typeof exception2 === "string" && exception2 === eventType) {
        const callbacks = component.$$.callbacks[eventType] || (component.$$.callbacks[eventType] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1)
            callbacks.splice(index, 1);
        };
      }
      if (typeof exception2 === "object" && exception2["name"] === eventType) {
        const oldCallback = callback;
        callback = (...props) => {
          if (!(typeof exception2 === "object" && exception2["shouldExclude"]())) {
            oldCallback(...props);
          }
        };
      }
    }
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events.push([eventType, callback]);
    }
    return () => {
      destructor();
    };
  };
  function forward(e) {
    bubble(component, e);
  }
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      let options = false;
      const modifierMatch = eventType.match(modifierRegex);
      if (modifierMatch) {
        const parts = eventType.split(MODIFIER_DIVIDER);
        eventType = parts[0];
        const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
        if (eventOptions.passive) {
          options = options || {};
          options.passive = true;
        }
        if (eventOptions.nonpassive) {
          options = options || {};
          options.passive = false;
        }
        if (eventOptions.capture) {
          options = options || {};
          options.capture = true;
        }
        if (eventOptions.once) {
          options = options || {};
          options.once = true;
        }
        if (eventOptions.preventDefault) {
          handler = prevent_default(handler);
        }
        if (eventOptions.stopPropagation) {
          handler = stop_propagation(handler);
        }
      }
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen(node, eventType, forward);
      }
      return destructor;
    };
    for (let i = 0; i < events.length; i++) {
      $on(events[i][0], events[i][1]);
    }
    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
        for (const entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      }
    };
  };
}
function getTransition(name) {
  let transition;
  if (typeof name === "function")
    return name;
  switch (name) {
    case "fade":
      transition = fade;
      break;
    case "blur":
      transition = blur;
      break;
    case "fly":
      transition = fly;
      break;
    case "slide":
      transition = slide;
      break;
    case "scale":
      transition = scale;
      break;
    case "draw":
      transition = draw;
      break;
    default:
      throw new Error("You must enter a valid transition name");
  }
  return transition;
}
const key = {};
function useSvelteUIThemeContext() {
  return getContext(key);
}
const colorScheme = writable("light");
const colors = {
  primary: "#228be6",
  white: "#ffffff",
  black: "#000000",
  dark50: "#C1C2C5",
  dark100: "#A6A7AB",
  dark200: "#909296",
  dark300: "#5c5f66",
  dark400: "#373A40",
  dark500: "#2C2E33",
  dark600: "#25262b",
  dark700: "#1A1B1E",
  dark800: "#141517",
  dark900: "#101113",
  gray50: "#f8f9fa",
  gray100: "#f1f3f5",
  gray200: "#e9ecef",
  gray300: "#dee2e6",
  gray400: "#ced4da",
  gray500: "#adb5bd",
  gray600: "#868e96",
  gray700: "#495057",
  gray800: "#343a40",
  gray900: "#212529",
  red50: "#fff5f5",
  red100: "#ffe3e3",
  red200: "#ffc9c9",
  red300: "#ffa8a8",
  red400: "#ff8787",
  red500: "#ff6b6b",
  red600: "#fa5252",
  red700: "#f03e3e",
  red800: "#e03131",
  red900: "#c92a2a",
  pink50: "#fff0f6",
  pink100: "#ffdeeb",
  pink200: "#fcc2d7",
  pink300: "#faa2c1",
  pink400: "#f783ac",
  pink500: "#f06595",
  pink600: "#e64980",
  pink700: "#d6336c",
  pink800: "#c2255c",
  pink900: "#a61e4d",
  grape50: "#f8f0fc",
  grape100: "#f3d9fa",
  grape200: "#eebefa",
  grape300: "#e599f7",
  grape400: "#da77f2",
  grape500: "#cc5de8",
  grape600: "#be4bdb",
  grape700: "#ae3ec9",
  grape800: "#9c36b5",
  grape900: "#862e9c",
  violet50: "#f3f0ff",
  violet100: "#e5dbff",
  violet200: "#d0bfff",
  violet300: "#b197fc",
  violet400: "#9775fa",
  violet500: "#845ef7",
  violet600: "#7950f2",
  violet700: "#7048e8",
  violet800: "#6741d9",
  violet900: "#5f3dc4",
  indigo50: "#edf2ff",
  indigo100: "#dbe4ff",
  indigo200: "#bac8ff",
  indigo300: "#91a7ff",
  indigo400: "#748ffc",
  indigo500: "#5c7cfa",
  indigo600: "#4c6ef5",
  indigo700: "#4263eb",
  indigo800: "#3b5bdb",
  indigo900: "#364fc7",
  blue50: "#e7f5ff",
  blue100: "#d0ebff",
  blue200: "#a5d8ff",
  blue300: "#74c0fc",
  blue400: "#4dabf7",
  blue500: "#339af0",
  blue600: "#228be6",
  blue700: "#1c7ed6",
  blue800: "#1971c2",
  blue900: "#1864ab",
  cyan50: "#e3fafc",
  cyan100: "#c5f6fa",
  cyan200: "#99e9f2",
  cyan300: "#66d9e8",
  cyan400: "#3bc9db",
  cyan500: "#22b8cf",
  cyan600: "#15aabf",
  cyan700: "#1098ad",
  cyan800: "#0c8599",
  cyan900: "#0b7285",
  teal50: "#e6fcf5",
  teal100: "#c3fae8",
  teal200: "#96f2d7",
  teal300: "#63e6be",
  teal400: "#38d9a9",
  teal500: "#20c997",
  teal600: "#12b886",
  teal700: "#0ca678",
  teal800: "#099268",
  teal900: "#087f5b",
  green50: "#ebfbee",
  green100: "#d3f9d8",
  green200: "#b2f2bb",
  green300: "#8ce99a",
  green400: "#69db7c",
  green500: "#51cf66",
  green600: "#40c057",
  green700: "#37b24d",
  green800: "#2f9e44",
  green900: "#2b8a3e",
  lime50: "#f4fce3",
  lime100: "#e9fac8",
  lime200: "#d8f5a2",
  lime300: "#c0eb75",
  lime400: "#a9e34b",
  lime500: "#94d82d",
  lime600: "#82c91e",
  lime700: "#74b816",
  lime800: "#66a80f",
  lime900: "#5c940d",
  yellow50: "#fff9db",
  yellow100: "#fff3bf",
  yellow200: "#ffec99",
  yellow300: "#ffe066",
  yellow400: "#ffd43b",
  yellow500: "#fcc419",
  yellow600: "#fab005",
  yellow700: "#f59f00",
  yellow800: "#f08c00",
  yellow900: "#e67700",
  orange50: "#fff4e6",
  orange100: "#ffe8cc",
  orange200: "#ffd8a8",
  orange300: "#ffc078",
  orange400: "#ffa94d",
  orange500: "#ff922b",
  orange600: "#fd7e14",
  orange700: "#f76707",
  orange800: "#e8590c",
  orange900: "#d9480f"
};
const colorNameMap = {
  blue: "blue",
  cyan: "cyan",
  dark: "dark",
  grape: "grape",
  gray: "gray",
  green: "green",
  indigo: "indigo",
  lime: "lime",
  orange: "orange",
  pink: "pink",
  red: "red",
  teal: "teal",
  violet: "violet",
  yellow: "yellow"
};
const { css, globalCss, keyframes, getCssText, theme, createTheme, config, reset } = createStitches({
  prefix: "svelteui",
  theme: {
    colors,
    space: {
      0: "0rem",
      xs: 10,
      sm: 12,
      md: 16,
      lg: 20,
      xl: 24,
      xsPX: "10px",
      smPX: "12px",
      mdPX: "16px",
      lgPX: "20px",
      xlPX: "24px",
      1: "0.125rem",
      2: "0.25rem",
      3: "0.375rem",
      4: "0.5rem",
      5: "0.625rem",
      6: "0.75rem",
      7: "0.875rem",
      8: "1rem",
      9: "1.25rem",
      10: "1.5rem",
      11: "1.75rem",
      12: "2rem",
      13: "2.25rem",
      14: "2.5rem",
      15: "2.75rem",
      16: "3rem",
      17: "3.5rem",
      18: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem"
    },
    fontSizes: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px"
    },
    fonts: {
      standard: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
      fallback: "Segoe UI, system-ui, sans-serif"
    },
    fontWeights: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    },
    lineHeights: {
      xs: 1,
      sm: 1.25,
      md: 1.5,
      lg: 1.625,
      xl: 1.75
    },
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    sizes: {},
    radii: {
      xs: "2px",
      sm: "4px",
      md: "8px",
      lg: "16px",
      xl: "32px",
      squared: "33%",
      rounded: "50%",
      pill: "9999px"
    },
    shadows: {
      xs: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
      sm: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",
      md: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
      lg: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",
      xl: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"
    },
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      5: "500",
      10: "1000",
      max: "9999"
    },
    borderWidths: {
      light: "1px",
      normal: "2px",
      bold: "3px",
      extrabold: "4px",
      black: "5px",
      xs: "1px",
      sm: "2px",
      md: "3px",
      lg: "4px",
      xl: "5px"
    },
    breakpoints: {
      xs: 576,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1400
    },
    borderStyles: {},
    transitions: {}
  },
  media: {
    xs: "(min-width: 576px)",
    sm: "(min-width: 768px)",
    md: "(min-width: 992px)",
    lg: "(min-width: 1200px)",
    xl: "(min-width: 1400px)"
  },
  utils: {
    focusRing: (value) => ({
      WebkitTapHighlightColor: "transparent",
      "&:focus": {
        outlineOffset: 2,
        outline: value === "always" || value === "auto" ? "2px solid $primary" : "none"
      },
      "&:focus:not(:focus-visible)": {
        outline: value === "auto" || value === "never" ? "none" : void 0
      }
    }),
    /** padding top */
    p: (value) => ({
      padding: value
    }),
    pt: (value) => ({
      paddingTop: value
    }),
    pr: (value) => ({
      paddingRight: value
    }),
    pb: (value) => ({
      paddingBottom: value
    }),
    pl: (value) => ({
      paddingLeft: value
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    /** margin */
    m: (value) => ({
      margin: value
    }),
    /** margin-top */
    mt: (value) => ({
      marginTop: value
    }),
    mr: (value) => ({
      marginRight: value
    }),
    mb: (value) => ({
      marginBottom: value
    }),
    ml: (value) => ({
      marginLeft: value
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    ta: (value) => ({
      textAlign: value
    }),
    tt: (value) => ({
      textTransform: value
    }),
    to: (value) => ({
      textOverflow: value
    }),
    d: (value) => ({ display: value }),
    dflex: (value) => ({
      display: "flex",
      alignItems: value,
      justifyContent: value
    }),
    fd: (value) => ({
      flexDirection: value
    }),
    fw: (value) => ({ flexWrap: value }),
    ai: (value) => ({
      alignItems: value
    }),
    ac: (value) => ({
      alignContent: value
    }),
    jc: (value) => ({
      justifyContent: value
    }),
    as: (value) => ({
      alignSelf: value
    }),
    fg: (value) => ({ flexGrow: value }),
    fs: (value) => ({
      fontSize: value
    }),
    fb: (value) => ({
      flexBasis: value
    }),
    bc: (value) => ({
      backgroundColor: value
    }),
    bf: (value) => ({
      backdropFilter: value
    }),
    bg: (value) => ({
      background: value
    }),
    bgBlur: (value) => ({
      bf: "saturate(180%) blur(10px)",
      bg: value
    }),
    bgColor: (value) => ({
      backgroundColor: value
    }),
    backgroundClip: (value) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value
    }),
    bgClip: (value) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value
    }),
    br: (value) => ({
      borderRadius: value
    }),
    bw: (value) => ({
      borderWidth: value
    }),
    btrr: (value) => ({
      borderTopRightRadius: value
    }),
    bbrr: (value) => ({
      borderBottomRightRadius: value
    }),
    bblr: (value) => ({
      borderBottomLeftRadius: value
    }),
    btlr: (value) => ({
      borderTopLeftRadius: value
    }),
    bs: (value) => ({
      boxShadow: value
    }),
    normalShadow: (value) => ({
      boxShadow: `0 4px 14px 0 $${value}`
    }),
    lh: (value) => ({
      lineHeight: value
    }),
    ov: (value) => ({ overflow: value }),
    ox: (value) => ({
      overflowX: value
    }),
    oy: (value) => ({
      overflowY: value
    }),
    pe: (value) => ({
      pointerEvents: value
    }),
    events: (value) => ({
      pointerEvents: value
    }),
    us: (value) => ({
      WebkitUserSelect: value,
      userSelect: value
    }),
    userSelect: (value) => ({
      WebkitUserSelect: value,
      userSelect: value
    }),
    w: (value) => ({ width: value }),
    h: (value) => ({
      height: value
    }),
    minW: (value) => ({
      minWidth: value
    }),
    minH: (value) => ({
      minWidth: value
    }),
    mw: (value) => ({
      maxWidth: value
    }),
    maxW: (value) => ({
      maxWidth: value
    }),
    mh: (value) => ({
      maxHeight: value
    }),
    maxH: (value) => ({
      maxHeight: value
    }),
    size: (value) => ({
      width: value,
      height: value
    }),
    minSize: (value) => ({
      minWidth: value,
      minHeight: value,
      width: value,
      height: value
    }),
    sizeMin: (value) => ({
      minWidth: value,
      minHeight: value,
      width: value,
      height: value
    }),
    maxSize: (value) => ({
      maxWidth: value,
      maxHeight: value
    }),
    sizeMax: (value) => ({
      maxWidth: value,
      maxHeight: value
    }),
    appearance: (value) => ({
      WebkitAppearance: value,
      appearance: value
    }),
    scale: (value) => ({
      transform: `scale(${value})`
    }),
    linearGradient: (value) => ({
      backgroundImage: `linear-gradient(${value})`
    }),
    tdl: (value) => ({
      textDecorationLine: value
    }),
    // Text gradient effect
    textGradient: (value) => ({
      backgroundImage: `linear-gradient(${value})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    })
  },
  themeMap: {
    ...defaultThemeMap,
    width: "space",
    height: "space",
    minWidth: "space",
    maxWidth: "space",
    minHeight: "space",
    maxHeight: "space",
    flexBasis: "space",
    gridTemplateColumns: "space",
    gridTemplateRows: "space",
    blockSize: "space",
    minBlockSize: "space",
    maxBlockSize: "space",
    inlineSize: "space",
    minInlineSize: "space",
    maxInlineSize: "space",
    borderWidth: "borderWeights"
  }
});
const dark = createTheme("dark-theme", {
  colors,
  shadows: {
    xs: "-4px 0 15px rgb(0 0 0 / 50%)",
    sm: "0 5px 20px -5px rgba(20, 20, 20, 0.1)",
    md: "0 8px 30px rgba(20, 20, 20, 0.15)",
    lg: "0 30px 60px rgba(20, 20, 20, 0.15)",
    xl: "0 40px 80px rgba(20, 20, 20, 0.25)"
  }
});
globalCss({
  a: {
    focusRing: "auto"
  },
  body: {
    [`${dark.selector} &`]: {
      backgroundColor: "$dark700",
      color: "$dark50"
    },
    backgroundColor: "$white",
    color: "$black"
  }
});
globalCss({
  html: {
    fontFamily: "sans-serif",
    lineHeight: "1.15",
    textSizeAdjust: "100%",
    margin: 0
  },
  body: {
    margin: 0
  },
  "article, aside, footer, header, nav, section, figcaption, figure, main": {
    display: "block"
  },
  h1: {
    fontSize: "2em",
    margin: 0
  },
  hr: {
    boxSizing: "content-box",
    height: 0,
    overflow: "visible"
  },
  pre: {
    fontFamily: "monospace, monospace",
    fontSize: "1em"
  },
  a: {
    background: "transparent",
    textDecorationSkip: "objects"
  },
  "a:active, a:hover": {
    outlineWidth: 0
  },
  "abbr[title]": {
    borderBottom: "none",
    textDecoration: "underline"
  },
  "b, strong": {
    fontWeight: "bolder"
  },
  "code, kbp, samp": {
    fontFamily: "monospace, monospace",
    fontSize: "1em"
  },
  dfn: {
    fontStyle: "italic"
  },
  mark: {
    backgroundColor: "#ff0",
    color: "#000"
  },
  small: {
    fontSize: "80%"
  },
  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline"
  },
  sup: {
    top: "-0.5em"
  },
  sub: {
    bottom: "-0.25em"
  },
  "audio, video": {
    display: "inline-block"
  },
  "audio:not([controls])": {
    display: "none",
    height: 0
  },
  img: {
    borderStyle: "none",
    verticalAlign: "middle"
  },
  "svg:not(:root)": {
    overflow: "hidden"
  },
  "button, input, optgroup, select, textarea": {
    fontFamily: "sans-serif",
    fontSize: "100%",
    lineHeight: "1.15",
    margin: 0
  },
  "button, input": {
    overflow: "visible"
  },
  "button, select": {
    textTransform: "none"
  },
  "button, [type=reset], [type=submit]": {
    WebkitAppearance: "button"
  },
  "button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner": {
    borderStyle: "none",
    padding: 0
  },
  "button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring": {
    outline: "1px dotted ButtonText"
  },
  legend: {
    boxSizing: "border-box",
    color: "inherit",
    display: "table",
    maxWidth: "100%",
    padding: 0,
    whiteSpace: "normal"
  },
  progress: {
    display: "inline-block",
    verticalAlign: "baseline"
  },
  textarea: {
    overflow: "auto"
  },
  "[type=checkbox], [type=radio]": {
    boxSizing: "border-box",
    padding: 0
  },
  "[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button": {
    height: "auto"
  },
  "[type=search]": {
    appearance: "textfield",
    outlineOffset: "-2px"
  },
  "[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration": {
    appearance: "none"
  },
  "::-webkit-file-upload-button": {
    appearance: "button",
    font: "inherit"
  },
  "details, menu": {
    display: "block"
  },
  summary: {
    display: "list-item"
  },
  canvas: {
    display: "inline-block"
  },
  template: {
    display: "none"
  },
  "[hidden]": {
    display: "none"
  }
});
function themeColor(color, shade = 0) {
  const theme2 = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
  let _shade = "50";
  if (!isSvelteUIColor(color))
    return color;
  if (shade !== Number(0))
    _shade = `${shade.toString()}00`;
  return theme2.colors[`${color}${_shade}`]?.value;
}
function isSvelteUIColor(color) {
  let valid = false;
  switch (color) {
    case "dark":
      valid = true;
      break;
    case "gray":
      valid = true;
      break;
    case "red":
      valid = true;
      break;
    case "pink":
      valid = true;
      break;
    case "grape":
      valid = true;
      break;
    case "violet":
      valid = true;
      break;
    case "indigo":
      valid = true;
      break;
    case "blue":
      valid = true;
      break;
    case "cyan":
      valid = true;
      break;
    case "teal":
      valid = true;
      break;
    case "green":
      valid = true;
      break;
    case "lime":
      valid = true;
      break;
    case "yellow":
      valid = true;
      break;
    case "orange":
      valid = true;
      break;
    default:
      valid = false;
      break;
  }
  return valid;
}
function createConverter(units) {
  return (px) => {
    if (typeof px === "number") {
      return `${px / 16}${units}`;
    }
    if (typeof px === "string") {
      const replaced = px.replace("px", "");
      if (!Number.isNaN(Number(replaced))) {
        return `${Number(replaced) / 16}${units}`;
      }
    }
    return px;
  };
}
const rem = createConverter("rem");
function cover(offset = 0) {
  return {
    position: "absolute",
    top: rem(offset),
    right: rem(offset),
    left: rem(offset),
    bottom: rem(offset)
  };
}
function size(props) {
  if (typeof props.size === "number") {
    return props.size;
  }
  if (typeof props.sizes[props.size] === "number") {
    return props.sizes[props.size];
  }
  return +props.sizes[props.size]?.value || +props.sizes.md?.value;
}
function radius(radii) {
  const theme2 = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
  if (typeof radii === "number") {
    return radii;
  }
  return theme2.radii[radii].value;
}
function isHexColor(hex) {
  const replaced = hex.replace("#", "");
  return typeof replaced === "string" && replaced.length === 6 && !Number.isNaN(Number(`0x${replaced}`));
}
function hexToRgba(color) {
  const replaced = color.replace("#", "");
  const parsed = parseInt(replaced, 16);
  const r = parsed >> 16 & 255;
  const g = parsed >> 8 & 255;
  const b = parsed & 255;
  return {
    r,
    g,
    b,
    a: 1
  };
}
function rgbStringToRgba(color) {
  const [r, g, b, a] = color.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r, g, b, a: a || 1 };
}
function toRgba(color) {
  if (isHexColor(color)) {
    return hexToRgba(color);
  }
  if (color.startsWith("rgb")) {
    return rgbStringToRgba(color);
  }
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function rgba(color, alpha = 1) {
  if (typeof color !== "string" || alpha > 1 || alpha < 0) {
    return "rgba(0, 0, 0, 1)";
  }
  const { r, g, b } = toRgba(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
const DEFAULT_GRADIENT = {
  from: "indigo",
  to: "cyan",
  deg: 45
};
function variant({ variant: variant2, color, gradient }) {
  const theme2 = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
  const primaryShade = 6;
  if (variant2 === "light") {
    return {
      border: "transparent",
      background: [rgba(themeColor(color, 8), 0.35), rgba(themeColor(color, 0), 1)],
      color: [
        color === "dark" ? themeColor("dark", 0) : themeColor(color, 2),
        color === "dark" ? themeColor("dark", 9) : themeColor(color, primaryShade)
      ],
      // themeColor(color, theme.colorScheme === 'dark' ? 2 : getPrimaryShade('light')),
      hover: [rgba(themeColor(color, 7), 0.45), rgba(themeColor(color, 1), 0.65)]
    };
  }
  if (variant2 === "default") {
    return {
      border: [themeColor("dark", 5), themeColor("gray", 4)],
      background: [themeColor("dark", 5), theme2.colors.white.value],
      color: [theme2.colors.white.value, theme2.colors.black.value],
      hover: [themeColor("dark", 4), themeColor("gray", 0)]
    };
  }
  if (variant2 === "white") {
    return {
      border: "transparent",
      background: theme2.colors.white.value,
      color: themeColor(color, primaryShade),
      hover: null
    };
  }
  if (variant2 === "outline") {
    return {
      border: [themeColor(color, 4), themeColor(color, primaryShade)],
      background: "transparent",
      color: [themeColor(color, 4), themeColor(color, primaryShade)],
      hover: [rgba(themeColor(color, 4), 0.05), rgba(themeColor(color, 0), 0.35)]
    };
  }
  if (variant2 === "gradient") {
    const merged = {
      from: gradient?.from || DEFAULT_GRADIENT.from,
      to: gradient?.to || DEFAULT_GRADIENT.to,
      deg: gradient?.deg || DEFAULT_GRADIENT.deg
    };
    return {
      background: `linear-gradient(${merged.deg}deg, ${themeColor(merged.from, primaryShade)} 0%, ${themeColor(merged.to, primaryShade)} 100%)`,
      color: theme2.colors.white.value,
      border: "transparent",
      hover: null
    };
  }
  if (variant2 === "subtle") {
    return {
      border: "transparent",
      background: "transparent",
      color: [
        color === "dark" ? themeColor("dark", 0) : themeColor(color, 2),
        color === "dark" ? themeColor("dark", 9) : themeColor(color, primaryShade)
      ],
      hover: [rgba(themeColor(color, 8), 0.35), rgba(themeColor(color, 0), 1)]
    };
  }
  return {
    border: "transparent",
    background: [themeColor(color, 8), themeColor(color, primaryShade)],
    color: theme2.colors.white.value,
    hover: themeColor(color, 7)
  };
}
const fns = {
  cover,
  size,
  radius,
  themeColor,
  variant,
  rgba
};
function useSvelteUITheme() {
  let observer;
  colorScheme?.subscribe((mode) => {
    observer = mode;
  });
  const DEFAULT_THEME = {
    // @ts-ignore
    ...theme,
    colorNames: colorNameMap,
    colorScheme: observer,
    dark: dark?.selector,
    fn: {
      cover: fns.cover,
      themeColor: fns.themeColor,
      size: fns.size,
      radius: fns.radius,
      rgba: fns.rgba,
      variant: fns.variant
    }
  };
  return DEFAULT_THEME;
}
const vFunc = (color, gradient) => {
  const { themeColor: themeColor2, rgba: rgba2 } = fns;
  const variants = {
    /** Filled variant */
    filled: {
      [`${dark.selector} &`]: {
        backgroundColor: themeColor2(color, 8)
      },
      border: "transparent",
      backgroundColor: themeColor2(color, 6),
      color: "White",
      "&:hover": { backgroundColor: themeColor2(color, 7) }
    },
    /** Light variant */
    light: {
      [`${dark.selector} &`]: {
        backgroundColor: rgba2(themeColor2(color, 8), 0.35),
        color: color === "dark" ? themeColor2("dark", 0) : themeColor2(color, 2),
        "&:hover": { backgroundColor: rgba2(themeColor2(color, 7), 0.45) }
      },
      border: "transparent",
      backgroundColor: themeColor2(color, 0),
      color: color === "dark" ? themeColor2("dark", 9) : themeColor2(color, 6),
      "&:hover": { backgroundColor: themeColor2(color, 1) }
    },
    /** Outline variant */
    outline: {
      [`${dark.selector} &`]: {
        border: `1px solid ${themeColor2(color, 4)}`,
        color: `${themeColor2(color, 4)}`,
        "&:hover": { backgroundColor: rgba2(themeColor2(color, 4), 0.05) }
      },
      border: `1px solid ${themeColor2(color, 7)}`,
      backgroundColor: "transparent",
      color: themeColor2(color, 7),
      "&:hover": {
        backgroundColor: rgba2(themeColor2(color, 0), 0.35)
      }
    },
    /** Subtle variant */
    subtle: {
      [`${dark.selector} &`]: {
        color: color === "dark" ? themeColor2("dark", 0) : themeColor2(color, 2),
        "&:hover": { backgroundColor: rgba2(themeColor2(color, 8), 0.35) }
      },
      border: "transparent",
      backgroundColor: "transparent",
      color: color === "dark" ? themeColor2("dark", 9) : themeColor2(color, 6),
      "&:hover": {
        backgroundColor: themeColor2(color, 0)
      }
    },
    /** Default variant */
    default: {
      [`${dark.selector} &`]: {
        border: `1px solid ${themeColor2("dark", 5)}`,
        backgroundColor: themeColor2("dark", 5),
        color: "White",
        "&:hover": { backgroundColor: themeColor2("dark", 4) }
      },
      border: `1px solid ${themeColor2("gray", 4)}`,
      backgroundColor: "White",
      color: "Black",
      "&:hover": { backgroundColor: themeColor2("gray", 0) }
    },
    /** White variant */
    white: {
      border: "transparent",
      backgroundColor: "White",
      color: themeColor2(color, 7),
      "&:hover": { backgroundColor: "White" }
    },
    gradient: {}
  };
  if (gradient) {
    variants.gradient = {
      border: "transparent",
      background: `linear-gradient(${gradient.deg}deg, $${gradient.from}600 0%, $${gradient.to}600 100%)`,
      color: "White"
    };
  }
  return variants;
};
function randomID(prefix = "svelteui") {
  return `${prefix}-${Math.random().toString(36).substring(2, 10)}`;
}
const hasOwn = {}.hasOwnProperty;
function cx(...args) {
  const classes = [];
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg)
      continue;
    const argType = typeof arg;
    if (argType === "string" || argType === "number") {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = { ...arg };
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (argType === "object") {
      if (arg.toString === Object.prototype.toString) {
        for (const key2 in arg) {
          if (hasOwn.call(arg, key2) && arg[key2]) {
            classes.push(key2);
          }
        }
      } else {
        classes.push(arg.toString());
      }
    }
  }
  return classes.join(" ");
}
function cssFactory() {
  return { cx };
}
function fromEntries(entries) {
  const o = {};
  Object.keys(entries).forEach((key2) => {
    const [k, v] = entries[key2];
    o[k] = v;
  });
  return o;
}
const CLASS_KEY = "svelteui";
function createRef(refName) {
  return `__svelteui-ref-${refName || ""}`;
}
function sanitizeCss(object, theme2) {
  const refs = [];
  const classMap = {};
  const _sanitizeVariants = (obj) => {
    const variantsObject = obj.variation ?? obj;
    const variants = Object.keys(variantsObject);
    for (const variant2 of variants) {
      _sanitize(variantsObject[variant2]);
    }
  };
  const _sanitize = (obj) => {
    Object.keys(obj).map((value) => {
      if (value === "variants") {
        _sanitizeVariants(obj[value]);
        return;
      }
      if (value === "ref") {
        refs.push(obj.ref);
      }
      if (value === "darkMode") {
        obj[`${theme2.dark} &`] = obj.darkMode;
      }
      if (obj[value] === null || typeof obj[value] !== "object")
        return;
      _sanitize(obj[value]);
      if (value === "darkMode") {
        delete obj[value];
      } else if (value.startsWith("@media"))
        ;
      else if (!value.startsWith("&") && !value.startsWith(theme2.dark)) {
        const getStyles = css(obj[value]);
        classMap[value] = getStyles().toString();
        obj[`& .${getStyles().toString()}`] = obj[value];
        delete obj[value];
      }
    });
  };
  _sanitize(object);
  delete object["& .root"];
  return { classMap, refs: Array.from(new Set(refs)) };
}
function createStyles(input) {
  const getCssObject = typeof input === "function" ? input : () => input;
  function useStyles2(params = {}, options) {
    const theme2 = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
    const { cx: cx2 } = cssFactory();
    const { override, name } = options || {};
    const dirtyCssObject = getCssObject(theme2, params, createRef);
    const sanitizedCss = Object.assign({}, dirtyCssObject);
    const { classMap, refs } = sanitizeCss(sanitizedCss, theme2);
    const root = dirtyCssObject["root"] ?? void 0;
    const cssObjectClean = root !== void 0 ? { ...root, ...sanitizedCss } : dirtyCssObject;
    const getStyles = css(cssObjectClean);
    const classes = fromEntries(Object.keys(dirtyCssObject).map((keys) => {
      const ref = refs.find((r) => r.includes(keys)) ?? "";
      const getRefName = ref?.split("-") ?? [];
      const keyIsRef = ref?.split("-")[getRefName?.length - 1] === keys;
      const value = keys.toString();
      let transformedClasses = classMap[value] ?? value;
      if (ref && keyIsRef) {
        transformedClasses = `${transformedClasses} ${ref}`;
      }
      if (keys === "root") {
        transformedClasses = getStyles({ css: override }).toString();
      }
      let libClass = `${CLASS_KEY}-${keys.toString()}`;
      if (name) {
        libClass = `${CLASS_KEY}-${name}-${keys.toString()}`;
        transformedClasses = `${transformedClasses} ${libClass}`;
      }
      return [keys, transformedClasses];
    }));
    return {
      cx: cx2,
      theme: theme2,
      classes,
      getStyles: css(cssObjectClean)
    };
  }
  return useStyles2;
}
const SYSTEM_PROPS = {
  mt: "marginTop",
  mb: "marginBottom",
  ml: "marginLeft",
  mr: "marginRight",
  pt: "paddingTop",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight"
};
const NEGATIVE_VALUES = ["-xs", "-sm", "-md", "-lg", "-xl"];
function isValidSizeValue(margin) {
  return typeof margin === "string" || typeof margin === "number";
}
function getSizeValue(margin, theme2) {
  if (NEGATIVE_VALUES.includes(margin)) {
    return theme2.fn.size({ size: margin.replace("-", ""), sizes: theme2.space }) * -1;
  }
  return theme2.fn.size({ size: margin, sizes: theme2.space });
}
function getSystemStyles(systemStyles, theme2) {
  const styles = {};
  if (isValidSizeValue(systemStyles.p)) {
    const value = getSizeValue(systemStyles.p, theme2);
    styles.padding = value;
  }
  if (isValidSizeValue(systemStyles.m)) {
    const value = getSizeValue(systemStyles.m, theme2);
    styles.margin = value;
  }
  if (isValidSizeValue(systemStyles.py)) {
    const value = getSizeValue(systemStyles.py, theme2);
    styles.paddingTop = value;
    styles.paddingBottom = value;
  }
  if (isValidSizeValue(systemStyles.px)) {
    const value = getSizeValue(systemStyles.px, theme2);
    styles.paddingLeft = value;
    styles.paddingRight = value;
  }
  if (isValidSizeValue(systemStyles.my)) {
    const value = getSizeValue(systemStyles.my, theme2);
    styles.marginTop = value;
    styles.marginBottom = value;
  }
  if (isValidSizeValue(systemStyles.mx)) {
    const value = getSizeValue(systemStyles.mx, theme2);
    styles.marginLeft = value;
    styles.marginRight = value;
  }
  Object.keys(SYSTEM_PROPS).forEach((property) => {
    if (isValidSizeValue(systemStyles[property])) {
      styles[SYSTEM_PROPS[property]] = theme2.fn.size({
        size: getSizeValue(systemStyles[property], theme2),
        sizes: theme2.space
      });
    }
  });
  return styles;
}
const Box = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let getCSSStyles;
  let BoxStyles;
  let systemStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "css",
    "root",
    "m",
    "my",
    "mx",
    "mt",
    "mb",
    "ml",
    "mr",
    "p",
    "py",
    "px",
    "pt",
    "pb",
    "pl",
    "pr"
  ]);
  let { use = [], element = void 0, class: className = "", css: css$1 = {}, root = void 0, m = void 0, my = void 0, mx = void 0, mt = void 0, mb = void 0, ml = void 0, mr = void 0, p = void 0, py = void 0, px = void 0, pt = void 0, pb = void 0, pl = void 0, pr = void 0 } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  const castRoot = () => root;
  const theme2 = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
  let isHTMLElement;
  let isComponent;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.css === void 0 && $$bindings.css && css$1 !== void 0)
    $$bindings.css(css$1);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.m === void 0 && $$bindings.m && m !== void 0)
    $$bindings.m(m);
  if ($$props.my === void 0 && $$bindings.my && my !== void 0)
    $$bindings.my(my);
  if ($$props.mx === void 0 && $$bindings.mx && mx !== void 0)
    $$bindings.mx(mx);
  if ($$props.mt === void 0 && $$bindings.mt && mt !== void 0)
    $$bindings.mt(mt);
  if ($$props.mb === void 0 && $$bindings.mb && mb !== void 0)
    $$bindings.mb(mb);
  if ($$props.ml === void 0 && $$bindings.ml && ml !== void 0)
    $$bindings.ml(ml);
  if ($$props.mr === void 0 && $$bindings.mr && mr !== void 0)
    $$bindings.mr(mr);
  if ($$props.p === void 0 && $$bindings.p && p !== void 0)
    $$bindings.p(p);
  if ($$props.py === void 0 && $$bindings.py && py !== void 0)
    $$bindings.py(py);
  if ($$props.px === void 0 && $$bindings.px && px !== void 0)
    $$bindings.px(px);
  if ($$props.pt === void 0 && $$bindings.pt && pt !== void 0)
    $$bindings.pt(pt);
  if ($$props.pb === void 0 && $$bindings.pb && pb !== void 0)
    $$bindings.pb(pb);
  if ($$props.pl === void 0 && $$bindings.pl && pl !== void 0)
    $$bindings.pl(pl);
  if ($$props.pr === void 0 && $$bindings.pr && pr !== void 0)
    $$bindings.pr(pr);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    getCSSStyles = typeof css$1 === "function" ? css$1 : () => css$1;
    {
      {
        isHTMLElement = root && typeof root === "string";
        isComponent = root && typeof root === "function";
      }
    }
    BoxStyles = css({});
    systemStyles = getSystemStyles(
      {
        m,
        my,
        mx,
        mt,
        mb,
        ml,
        mr,
        p,
        py,
        px,
        pt,
        pb,
        pl,
        pr
      },
      theme2
    );
    $$rendered = ` ${isHTMLElement ? ` ${((tag) => {
      return tag ? `<${castRoot()}${spread(
        [
          {
            class: escape(className, true) + " " + escape(
              BoxStyles({
                css: { ...getCSSStyles(theme2), ...systemStyles }
              }),
              true
            )
          },
          escape_object($$restProps)
        ],
        {}
      )}${add_attribute("this", element, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
    })(castRoot())}` : `${isComponent && typeof root !== "string" ? `${validate_component(root || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { use: [forwardEvents, [useActions, use]] },
        {
          class: className + " " + BoxStyles({
            css: { ...getCSSStyles(theme2), ...systemStyles }
          })
        },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}` : `<div${spread(
      [
        {
          class: escape(className, true) + " " + escape(
            BoxStyles({
              css: { ...getCSSStyles(theme2), ...systemStyles }
            }),
            true
          )
        },
        escape_object($$restProps)
      ],
      {}
    )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</div>`}`}`;
  } while (!$$settled);
  return $$rendered;
});
const Box$1 = Box;
const Circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { use = [] } = $$props;
  let { size: size2 = 25 } = $$props;
  let { color = "blue" } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${add_attribute("width", `${size2}px`, 0)}${add_attribute("height", `${size2}px`, 0)} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"${add_attribute("stroke", color, 0)}${add_attribute("class", className, 0)}><g fill="none" fill-rule="evenodd"><g transform="translate(2.5 2.5)" stroke-width="5"><circle stroke-opacity=".5" cx="16" cy="16" r="16"></circle><path d="M32 16c0-9.94-8.06-16-16-16"><animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg>`;
});
const Circle$1 = Circle;
const Bars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { use = [] } = $$props;
  let { size: size2 = 25 } = $$props;
  let { color = "blue" } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg"${add_attribute("fill", color, 0)}${add_attribute("width", `${size2}px`, 0)}${add_attribute("class", className, 0)}><rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect></svg>`;
});
const Bars$1 = Bars;
const Dots = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { use = [] } = $$props;
  let { size: size2 = 25 } = $$props;
  let { color = "blue" } = $$props;
  let { class: className = "" } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${add_attribute("width", `${size2}px`, 0)}${add_attribute("height", `${Number(size2) / 4}px`, 0)} viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg"${add_attribute("fill", color, 0)}${add_attribute("class", className, 0)}><circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle></svg>`;
});
const Dots$1 = Dots;
const LOADER_SIZES = {
  xs: 18,
  sm: 22,
  md: 36,
  lg: 44,
  xl: 58
};
const getCorrectShade = (color, dark2 = false) => {
  return theme.colors[dark2 ? `${color}400` : `${color}600`].value;
};
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "element", "class", "size", "color", "variant"]);
  let { use = [], element = void 0, class: className = "", size: size2 = "md", color = "blue", variant: variant2 = "circle" } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  const LOADERS = { bars: Bars$1, circle: Circle$1, dots: Dots$1 };
  const defaultLoader = variant2 in LOADERS ? variant2 : "circle";
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant2 !== void 0)
    $$bindings.variant(variant2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = ` ${validate_component(LOADERS[defaultLoader] || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { use: [forwardEvents, [useActions, use]] },
        {
          color: color === "white" ? "white" : getCorrectShade(color)
        },
        { size: LOADER_SIZES[size2] || size2 },
        { class: className },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Loader$1 = Loader;
const sizes$1 = {
  xs: 18,
  sm: 22,
  md: 28,
  lg: 34,
  xl: 44
};
function getVariantStyles(color) {
  const { themeColor: themeColor2 } = fns;
  const variants = vFunc(color);
  return {
    ...variants,
    hover: {
      [`${dark.selector} &`]: {
        color: themeColor2(color, 2),
        "&:hover": { backgroundColor: themeColor2("dark", 8) }
      },
      border: "1px solid transparent",
      backgroundColor: "transparent",
      color: themeColor2(color, 7),
      "&:hover": { backgroundColor: themeColor2(color) }
    },
    transparent: {
      [`${dark.selector} &`]: {
        color: themeColor2(color, 8),
        "&:hover": { backgroundColor: null }
      },
      border: "1px solid transparent",
      backgroundColor: "transparent",
      color: themeColor2(color, 7),
      "&:hover": { backgroundColor: null }
    }
  };
}
const useStyles$4 = createStyles((theme2, { color, radius: radius2, size: size2 }) => {
  return {
    root: {
      focusRing: "auto",
      position: "relative",
      appearance: "none",
      WebkitAppearance: "none",
      WebkitTapHighlightColor: "transparent",
      boxSizing: "border-box",
      height: typeof size2 === "string" ? sizes$1[size2] : `${size2}px`,
      minHeight: typeof size2 === "string" ? sizes$1[size2] : `${size2}px`,
      width: typeof size2 === "string" ? sizes$1[size2] : `${size2}px`,
      minWidth: typeof size2 === "string" ? sizes$1[size2] : `${size2}px`,
      borderRadius: `$${radius2}`,
      padding: 0,
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      textDecoration: "none",
      "&:not(:disabled):active": {
        transform: "translateY(1px)"
      },
      "&:disabled": {
        pointerEvents: "none",
        borderColor: "transparent",
        background: theme2.fn.themeColor("gray", 2),
        backgroundColor: theme2.fn.themeColor("gray", 2),
        color: theme2.fn.themeColor("gray", 5),
        cursor: "not-allowed",
        darkMode: {
          borderColor: "transparent",
          backgroundColor: theme2.fn.themeColor("dark", 4),
          color: theme2.fn.themeColor("dark", 6)
        }
      }
    },
    loading: {
      pointerEvents: "none",
      "&::before": {
        content: '""',
        position: "absolute",
        top: -1,
        left: -1,
        right: -1,
        bottom: -1,
        backgroundColor: "rgba(255, 255, 255, .5)",
        borderRadius: `$${radius2}`,
        cursor: "not-allowed"
      }
    },
    variants: {
      variation: getVariantStyles(color)
    }
  };
});
const ActionIconErrors = Object.freeze([
  {
    error: true,
    message: "If using the 'href' prop, set 'root' prop to an anchor ('a') tag",
    solution: `
                If your component looks like this:

                &lt;ActionIcon href='https://example.com'&gt;
                          ^^^ - Try adding prop root='a'
                       &lt;Icon /&gt;
                &lt;/ActionIcon&gt;
                `
  }
]);
const ActionIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx2;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "root",
    "color",
    "variant",
    "size",
    "radius",
    "loaderProps",
    "loading",
    "disabled",
    "href",
    "external"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, root = "button", color = "gray", variant: variant2 = "hover", size: size2 = "md", radius: radius2 = "sm", loaderProps = {
    size: "xs",
    color: "gray",
    variant: "circle"
  }, loading = false, disabled = false, href = "", external = false } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  let observable = false;
  let err;
  if (root !== "a" && $$props.href) {
    observable = true;
    err = ActionIconErrors[0];
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant2 !== void 0)
    $$bindings.variant(variant2);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.radius === void 0 && $$bindings.radius && radius2 !== void 0)
    $$bindings.radius(radius2);
  if ($$props.loaderProps === void 0 && $$bindings.loaderProps && loaderProps !== void 0)
    $$bindings.loaderProps(loaderProps);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.external === void 0 && $$bindings.external && external !== void 0)
    $$bindings.external(external);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (observable)
        override = { display: "none" };
    }
    ({ cx: cx2, classes, getStyles } = useStyles$4({ color, radius: radius2, size: size2 }, { name: "ActionIcon" }));
    $$rendered = `${validate_component(Error$2, "Error").$$render(
      $$result,
      {
        observable,
        component: "ActionIcon",
        code: err
      },
      {},
      {}
    )}  ${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { use: [forwardEvents, [useActions, use]] },
        { tabindex: 0 },
        { disabled: disabled || loading },
        {
          class: cx2(className, classes.root, { [classes.loading]: loading }, getStyles({ css: override, variation: variant2 }))
        },
        { target: external ? "_blank" : null },
        {
          rel: external ? "noreferrer noopener" : null
        },
        { root },
        { href },
        $$restProps,
        { element }
      ),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${loading ? `${validate_component(Loader$1, "Loader").$$render(
            $$result,
            {
              size: loaderProps.size,
              color: loaderProps.color,
              variant: loaderProps.variant
            },
            {},
            {}
          )}` : `${slots.default ? slots.default({}) : `+`}`}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const ActionIcon$1 = ActionIcon;
const CloseIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["width", "height"]);
  let { width = 16 } = $$props;
  let { height = 16 } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `<svg${spread(
    [
      { width: escape_attribute_value(width) },
      { height: escape_attribute_value(height) },
      { viewBox: "0 0 15 15" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$restProps)
    ],
    {}
  )}><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
});
const CloseIcon$1 = CloseIcon;
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "iconSize",
    "root",
    "color",
    "variant",
    "size",
    "radius",
    "loaderProps",
    "loading",
    "disabled",
    "href",
    "external"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, iconSize = "md", root = "button", color = "gray", variant: variant2 = "hover", size: size2 = "md", radius: radius2 = "sm", loaderProps = {
    size: "xs",
    color: "gray",
    variant: "circle"
  }, loading = false, disabled = false, href = "", external = false } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  const iconSizes = { xs: 12, sm: 14, md: 16, lg: 20, xl: 24 };
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
    $$bindings.iconSize(iconSize);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant2 !== void 0)
    $$bindings.variant(variant2);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.radius === void 0 && $$bindings.radius && radius2 !== void 0)
    $$bindings.radius(radius2);
  if ($$props.loaderProps === void 0 && $$bindings.loaderProps && loaderProps !== void 0)
    $$bindings.loaderProps(loaderProps);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.external === void 0 && $$bindings.external && external !== void 0)
    $$bindings.external(external);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = ` ${validate_component(ActionIcon$1, "ActionIcon").$$render(
      $$result,
      Object.assign({}, { class: className }, { use: [forwardEvents, [useActions, use]] }, { override }, { root }, { color }, { variant: variant2 }, { size: size2 }, { radius: radius2 }, { loaderProps }, { loading }, { disabled }, { href }, { external }, $$restProps, { element }),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(CloseIcon$1, "CloseIcon").$$render(
            $$result,
            {
              width: iconSizes[iconSize],
              height: iconSizes[iconSize]
            },
            {},
            {}
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const CloseButton$1 = CloseButton;
const TABBABLE_NODES = /input|select|textarea|button|object/;
const FOCUS_SELECTOR = "a, input, select, textarea, button, object, [tabindex]";
function hidden(element) {
  if (process.env.NODE_ENV === "test") {
    return false;
  }
  return element.style.display === "none";
}
function visible(element) {
  const isHidden = element.getAttribute("aria-hidden") || element.getAttribute("hidden") || element.getAttribute("type") === "hidden";
  if (isHidden) {
    return false;
  }
  let parentElement = element;
  while (parentElement) {
    if (parentElement === document.body || parentElement.nodeType === 11) {
      break;
    }
    if (hidden(parentElement)) {
      return false;
    }
    parentElement = parentElement.parentNode;
  }
  return true;
}
function getElementTabIndex(element) {
  const tabIndex = element.getAttribute("tabindex");
  return tabIndex ? parseInt(tabIndex, 10) : null;
}
function focusable(element) {
  const nodeName = element.nodeName.toLowerCase();
  const isTabIndexNotNull = getElementTabIndex(element) !== null;
  const res = (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    TABBABLE_NODES.test(nodeName) && !element.disabled || (element instanceof HTMLAnchorElement ? element.href || isTabIndexNotNull : isTabIndexNotNull)
  );
  return res && visible(element);
}
function tabbable(element) {
  const tabIndex = getElementTabIndex(element);
  const isTabIndexNull = tabIndex === null;
  return (isTabIndexNull || tabIndex >= 0) && focusable(element);
}
function findTabbableDescendants(element) {
  return Array.from(element.querySelectorAll(FOCUS_SELECTOR)).filter(tabbable);
}
function scopeTab(node, event) {
  const tabbable2 = findTabbableDescendants(node);
  if (!tabbable2.length) {
    event.preventDefault();
    return;
  }
  const finalTabbable = tabbable2[event.shiftKey ? 0 : tabbable2.length - 1];
  const root = node.getRootNode();
  const leavingFinalTabbable = finalTabbable === root.activeElement || node === root.activeElement;
  if (!leavingFinalTabbable) {
    return;
  }
  event.preventDefault();
  const target = tabbable2[event.shiftKey ? tabbable2.length - 1 : 0];
  if (target) {
    target.focus();
  }
}
function createAriaHider(containerNode) {
  const hiddenDomNodes = [];
  gatherOutsideDomNodes(containerNode);
  hiddenDomNodes.map(({ node }) => {
    node.setAttribute("aria-hidden", "true");
  });
  function gatherOutsideDomNodes(currentElement) {
    if (!currentElement) {
      return void 0;
    }
    if (currentElement !== document.querySelector("body")) {
      const parentElement = currentElement.parentElement;
      const siblingElements = [...Array.from(parentElement.children)];
      siblingElements.forEach((node) => {
        const ariaHidden = node.getAttribute("aria-hidden");
        if (node !== currentElement && node.nodeName !== "SCRIPT" && (ariaHidden === null || ariaHidden === "false")) {
          hiddenDomNodes.push({ node, ariaHidden });
        }
      });
      gatherOutsideDomNodes(parentElement);
    }
  }
  return () => {
    hiddenDomNodes.forEach((item) => {
      if (!item) {
        return;
      }
      if (item.ariaHidden === null) {
        item.node.removeAttribute("aria-hidden");
      } else {
        item.node.setAttribute("aria-hidden", item.ariaHidden);
      }
    });
  };
}
function focustrap(node, active = true) {
  let restoreAria = null;
  const handleKeyDown = (event) => {
    if (!active) {
      return;
    }
    if (event.key === "Tab" && node) {
      scopeTab(node, event);
    }
  };
  document.addEventListener("keydown", handleKeyDown);
  activate();
  function activate() {
    if (!active) {
      if (restoreAria) {
        restoreAria();
      }
      return;
    }
    restoreAria = createAriaHider(node);
    const processNode = () => {
      let focusElement = node.querySelector("[autofocus]");
      if (!focusElement) {
        const children = Array.from(node.querySelectorAll(FOCUS_SELECTOR));
        focusElement = children.find(tabbable) || children.find(focusable) || null;
        if (!focusElement && focusable(node))
          focusElement = node;
      }
      if (focusElement) {
        focusElement.focus({ preventScroll: true });
      } else if (process.env.NODE_ENV === "development") {
        console.warn("[@svelteuidev/composables/use-focus-trap] Failed to find focusable element within provided node", node);
      }
    };
    setTimeout(() => {
      if (node.getRootNode()) {
        processNode();
      } else if (process.env.NODE_ENV === "development") {
        console.warn("[@svelteuidev/composables/use-focus-trap] node is not part of the dom", node);
      }
    });
  }
  return {
    update(newActive) {
      active = newActive;
      activate();
    },
    destroy() {
      document.removeEventListener("keydown", handleKeyDown);
      if (restoreAria) {
        restoreAria();
      }
    }
  };
}
function useFocusReturn() {
  let lastActiveElement;
  const returnFocus = () => {
    if (lastActiveElement && "focus" in lastActiveElement && typeof lastActiveElement.focus === "function") {
      lastActiveElement.focus({ preventScroll: true });
    }
  };
  return {
    handleFocusReturn(opened, shouldReturnFocus = true) {
      if (opened) {
        lastActiveElement = document.activeElement;
      } else if (shouldReturnFocus) {
        returnFocus();
      }
    },
    returnFocus
  };
}
const Portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { use = [], element = void 0, class: className = "", target = "body", position = "relative", zIndex = 1 } = $$props;
  createEventForwarder(get_current_component());
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  return `<div${add_attribute("class", className, 0)} hidden style="${"position: " + escape(position, true) + "; zIndex: " + escape(zIndex, true) + ";"}"${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Portal$1 = Portal;
const OptionalPortal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { withinPortal = true, use = [], element = void 0, class: className = "", target = "body" } = $$props;
  if ($$props.withinPortal === void 0 && $$bindings.withinPortal && withinPortal !== void 0)
    $$bindings.withinPortal(withinPortal);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${withinPortal ? `${validate_component(Portal$1, "Portal").$$render(
      $$result,
      { class: className, use, target, element },
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}` : `${slots.default ? slots.default({}) : ``}`}`;
  } while (!$$settled);
  return $$rendered;
});
const OptionalPortal$1 = OptionalPortal;
function getTextColor(theme2, color, variant2, gradient, dark2 = false) {
  if (color === "dimmed")
    return dark2 ? theme2.fn.themeColor("dark", 2) : theme2.fn.themeColor("gray", 6);
  if (variant2 === "gradient" || gradient)
    return theme2.fn.themeColor(color, 6);
  if (variant2 === "link")
    return dark2 ? theme2.fn.themeColor("blue", 4) : theme2.fn.themeColor("blue", 7);
  if (variant2 === "text")
    return dark2 ? theme2.fn.themeColor(color, 5) : theme2.fn.themeColor(color, 7);
}
const useStyles$3 = createStyles((theme2, { align, color, inherit, inline, lineClamp, size: size2, tracking, transform, underline, weight, gradient, variant: variant2 }) => {
  return {
    root: {
      focusRing: "auto",
      [`${theme2.dark} &`]: {
        color: color === "dark" ? "$dark50" : getTextColor(theme2, color, variant2, gradient, true)
      },
      fontFamily: inherit ? "inherit" : "$standard",
      fontSize: inherit ? "inherit" : typeof size2 === "string" ? `$${size2}` : `${size2}px`,
      fontWeight: inherit ? "inherit" : `$${weight}`,
      letterSpacing: theme2.letterSpacings[tracking]?.value,
      lineHeight: inherit ? "inherit" : inline ? 1 : typeof size2 === "string" ? `$${size2}` : `${size2}px`,
      textTransform: transform,
      textDecoration: underline ? "underline" : "none",
      textAlign: align,
      cursor: variant2 === "link" ? "pointer" : "inherit",
      color: color === "green" ? "Black" : getTextColor(theme2, color, variant2, gradient),
      backgroundImage: variant2 === "gradient" ? `linear-gradient(${gradient?.deg}deg, $${gradient?.from}600 0%, $${gradient?.to}600 100%)` : null,
      WebkitBackgroundClip: variant2 === "gradient" ? "text" : null,
      WebkitTextFillColor: variant2 === "gradient" ? "transparent" : null,
      ...lineClamp !== void 0 ? {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: "vertical"
      } : {},
      "&:hover": variant2 === "link" && underline === true ? {
        textDecoration: "underline"
      } : void 0
    }
  };
});
const TextErrors = Object.freeze([
  {
    error: true,
    message: "If using the 'gradient' prop, set 'variant' prop to 'gradient' to apply the gradient",
    solution: `
                If your component looks like this:

                &lt;Text gradient={{from: 'blue', to: 'red', deg: 45}}&gt;Text string &lt;/Text&gt;
                                                                    ^^^ - Try adding prop variant='gradient'
                `
  },
  {
    error: true,
    message: "If using the 'link' variant, an href needs to be set and the root must be an anchor",
    solution: `
                If your component looks like this:

                &lt;Text variant='link'&gt;Text string &lt;/Text&gt;
                                    ^^^ - Try adding props href && root={'a'}'
                `
  }
]);
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx2;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "align",
    "color",
    "root",
    "transform",
    "variant",
    "size",
    "weight",
    "gradient",
    "inline",
    "lineClamp",
    "underline",
    "inherit",
    "href",
    "tracking"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, align = "left", color = "dark", root = void 0, transform = "none", variant: variant2 = "text", size: size2 = "md", weight = "normal", gradient = { from: "indigo", to: "cyan", deg: 45 }, inline = true, lineClamp = void 0, underline = false, inherit = false, href = "", tracking = "normal" } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  let observable = false;
  let err;
  if (gradient.from === "indigo" && gradient.to === "cyan0" && gradient.deg === 45 && variant2 !== "gradient") {
    observable = true;
    err = TextErrors[0];
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.transform === void 0 && $$bindings.transform && transform !== void 0)
    $$bindings.transform(transform);
  if ($$props.variant === void 0 && $$bindings.variant && variant2 !== void 0)
    $$bindings.variant(variant2);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.lineClamp === void 0 && $$bindings.lineClamp && lineClamp !== void 0)
    $$bindings.lineClamp(lineClamp);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  if ($$props.inherit === void 0 && $$bindings.inherit && inherit !== void 0)
    $$bindings.inherit(inherit);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tracking === void 0 && $$bindings.tracking && tracking !== void 0)
    $$bindings.tracking(tracking);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ cx: cx2, classes, getStyles } = useStyles$3(
      {
        lineClamp,
        underline,
        inline,
        inherit,
        gradient,
        variant: variant2,
        align,
        color,
        transform,
        size: size2,
        weight,
        tracking
      },
      { name: "Text" }
    ));
    $$rendered = `${validate_component(Error$2, "Error").$$render($$result, { observable, component: "Text", code: err }, {}, {})}  ${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { root },
        { use: [forwardEvents, [useActions, use]] },
        {
          class: cx2(className, classes.root, getStyles({ css: override }))
        },
        { href: href ?? void 0 },
        $$restProps,
        { element }
      ),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Text$1 = Text;
const useStyles$2 = createStyles((theme2, { radius: radius2, shadow, withBorder, padding }) => {
  return {
    root: {
      darkMode: {
        backgroundColor: theme2.fn.themeColor("dark", 7),
        color: theme2.fn.themeColor("dark")
      },
      padding: theme2.fn.size({ size: padding, sizes: theme2.space }),
      outline: 0,
      display: "block",
      textDecoration: "none",
      color: theme2.colors.black.value,
      backgroundColor: theme2.colors.white.value,
      boxSizing: "border-box",
      borderRadius: `$${radius2}`,
      WebkitTapHighlightColor: "transparent",
      boxShadow: theme2.shadows[shadow].value || shadow || "none",
      border: void 0
    },
    withBorder: {
      darkMode: {
        border: `1px solid ${theme2.fn.themeColor("dark", 4)}`
      },
      border: `1px solid ${theme2.fn.themeColor("gray", 3)}`
    }
  };
});
const Paper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx2;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, ["use", "element", "class", "override", "shadow", "radius", "withBorder", "padding"]);
  let { use = [], element = void 0, class: className = "", override = {}, shadow = "xs", radius: radius2 = "sm", withBorder = false, padding = "md" } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.radius === void 0 && $$bindings.radius && radius2 !== void 0)
    $$bindings.radius(radius2);
  if ($$props.withBorder === void 0 && $$bindings.withBorder && withBorder !== void 0)
    $$bindings.withBorder(withBorder);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ cx: cx2, classes, getStyles } = useStyles$2({ radius: radius2, shadow, withBorder, padding }, { name: "Paper" }));
    $$rendered = `${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        {
          class: cx2(classes.root, className, withBorder && classes.withBorder, getStyles({ css: override }))
        },
        { use },
        $$restProps,
        { element }
      ),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Paper$1 = Paper;
const useStyles$1 = createStyles((_, { inline }) => {
  return {
    root: {
      display: inline ? "inline-flex" : "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  };
});
const Center = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx2;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, ["use", "element", "class", "override", "inline"]);
  let { use = [], element = void 0, class: className = "", override = {}, inline = false } = $$props;
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ cx: cx2, classes, getStyles } = useStyles$1({ inline }, { name: "Center" }));
    $$rendered = ` ${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { use },
        {
          class: cx2(className, classes.root, getStyles({ css: override }))
        },
        $$restProps,
        { element }
      ),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Center$1 = Center;
const elevations = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400
};
function getDefaultZIndex(level) {
  return elevations[level];
}
const Overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let background;
  let baseStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "opacity",
    "color",
    "blur",
    "gradient",
    "zIndex",
    "radius",
    "center"
  ]);
  let { use = [], element = void 0, class: className = "", override = {}, opacity = 0.6, color = "#fff", blur: blur2 = 0, gradient = "", zIndex = getDefaultZIndex("modal"), radius: radius2 = 0, center = false } = $$props;
  const forwardEvents = createEventForwarder(get_current_component());
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.blur === void 0 && $$bindings.blur && blur2 !== void 0)
    $$bindings.blur(blur2);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.radius === void 0 && $$bindings.radius && radius2 !== void 0)
    $$bindings.radius(radius2);
  if ($$props.center === void 0 && $$bindings.center && center !== void 0)
    $$bindings.center(center);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    background = gradient ? { backgroundImage: gradient } : { backgroundColor: color };
    baseStyles = {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex
    };
    $$rendered = ` ${blur2 ? `${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { use: [forwardEvents, [useActions, use]] },
        {
          css: {
            ...baseStyles,
            backdropFilter: `blur(${blur2}px)`
          }
        },
        { class: className },
        $$restProps,
        { element }
      ),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Box$1, "Box").$$render(
            $$result,
            {
              css: {
                ...background,
                ...baseStyles,
                opacity,
                borderRadius: `${radius2}`,
                ...override
              }
            },
            {},
            {}
          )}`;
        }
      }
    )}` : `${validate_component(Box$1, "Box").$$render(
      $$result,
      Object.assign(
        {},
        { use: [forwardEvents, [useActions, use]] },
        {
          css: {
            ...background,
            ...baseStyles,
            opacity,
            borderRadius: `${radius2}`,
            ...override
          }
        },
        $$restProps,
        { class: className },
        { element }
      ),
      {
        element: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${center ? `${validate_component(Center$1, "Center").$$render($$result, {}, {}, {
            default: () => {
              return `${slots.default ? slots.default({}) : ``}`;
            }
          })}` : `${slots.default ? slots.default({}) : ``}`}`;
        }
      }
    )}`}`;
  } while (!$$settled);
  return $$rendered;
});
const Overlay$1 = Overlay;
const sizes = {
  xs: 320,
  sm: 380,
  md: 440,
  lg: 620,
  xl: 780,
  full: "100%"
};
const useStyles = createStyles((theme2, { centered, overflow, size: size2, zIndex }) => {
  const customSize = size2 in sizes === false;
  return {
    close: {},
    overlay: {},
    root: {
      position: "fixed",
      zIndex,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    inner: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflowY: "auto",
      padding: `${+theme2.space.xl.value * 2}px ${+theme2.space.md.value}px`,
      display: "flex",
      justifyContent: "center",
      alignItems: centered ? "center" : "flex-start"
    },
    transition: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      maxWidth: "100%"
    },
    title: {
      marginRight: +theme2.space.md.value,
      textOverflow: "ellipsis",
      display: "block",
      wordBreak: "break-word",
      fontFamily: theme2.fonts.standard.value
    },
    modal: {
      [`${theme2.dark} &`]: {
        backgroundColor: theme2.fn.themeColor("dark", 7)
      },
      position: "relative",
      width: typeof size2 === "string" && customSize ? size2 : theme2.fn.size({ sizes, size: size2 }),
      outline: 0,
      backgroundColor: "white",
      marginTop: centered ? "auto" : void 0,
      marginBottom: centered ? "auto" : void 0,
      zIndex: 1
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: parseInt(theme2.space.md.value),
      marginRight: -9
    },
    body: {
      maxHeight: overflow === "inside" ? "calc(100vh - 185px)" : null,
      overflowY: overflow === "inside" ? "auto" : null,
      wordBreak: "break-word"
    }
  };
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cx2;
  let classes;
  let getStyles;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "element",
    "class",
    "override",
    "opened",
    "title",
    "zIndex",
    "overflow",
    "withCloseButton",
    "overlayOpacity",
    "overlayColor",
    "overlayBlur",
    "radius",
    "size",
    "transition",
    "transitionOptions",
    "overlayTransition",
    "overlayTransitionOptions",
    "closeButtonLabel",
    "id",
    "shadow",
    "padding",
    "closeOnClickOutside",
    "closeOnEscape",
    "trapFocus",
    "centered",
    "target",
    "withinPortal"
  ]);
  let $colorScheme, $$unsubscribe_colorScheme;
  $$unsubscribe_colorScheme = subscribe(colorScheme, (value) => $colorScheme = value);
  let { use = [], element = void 0, class: className = "", override = {}, opened = false, title = "", zIndex = 200, overflow = "outside", withCloseButton = true, overlayOpacity = null, overlayColor = null, overlayBlur = 0, radius: radius2 = "sm", size: size2 = "md", transition = "scale", transitionOptions = { duration: 100, easing: sineInOut }, overlayTransition = "fade", overlayTransitionOptions = { duration: 200, easing: sineInOut }, closeButtonLabel = "svelteui-close-button", id = "svelteui", shadow = "lg", padding = "lg", closeOnClickOutside = true, closeOnEscape = true, trapFocus = true, centered = null, target = "#SVELTEUI_PROVIDER", withinPortal = true } = $$props;
  createEventDispatcher();
  const baseId = randomID(id);
  const titleId = `${baseId}-title`;
  const bodyId = `${baseId}-body`;
  const _overlayOpacity = typeof overlayOpacity === "number" ? overlayOpacity : $colorScheme === "dark" ? 0.85 : 0.75;
  const { handleFocusReturn } = useFocusReturn();
  const zIndexStyles = css({ zIndex });
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.override === void 0 && $$bindings.override && override !== void 0)
    $$bindings.override(override);
  if ($$props.opened === void 0 && $$bindings.opened && opened !== void 0)
    $$bindings.opened(opened);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.overflow === void 0 && $$bindings.overflow && overflow !== void 0)
    $$bindings.overflow(overflow);
  if ($$props.withCloseButton === void 0 && $$bindings.withCloseButton && withCloseButton !== void 0)
    $$bindings.withCloseButton(withCloseButton);
  if ($$props.overlayOpacity === void 0 && $$bindings.overlayOpacity && overlayOpacity !== void 0)
    $$bindings.overlayOpacity(overlayOpacity);
  if ($$props.overlayColor === void 0 && $$bindings.overlayColor && overlayColor !== void 0)
    $$bindings.overlayColor(overlayColor);
  if ($$props.overlayBlur === void 0 && $$bindings.overlayBlur && overlayBlur !== void 0)
    $$bindings.overlayBlur(overlayBlur);
  if ($$props.radius === void 0 && $$bindings.radius && radius2 !== void 0)
    $$bindings.radius(radius2);
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionOptions === void 0 && $$bindings.transitionOptions && transitionOptions !== void 0)
    $$bindings.transitionOptions(transitionOptions);
  if ($$props.overlayTransition === void 0 && $$bindings.overlayTransition && overlayTransition !== void 0)
    $$bindings.overlayTransition(overlayTransition);
  if ($$props.overlayTransitionOptions === void 0 && $$bindings.overlayTransitionOptions && overlayTransitionOptions !== void 0)
    $$bindings.overlayTransitionOptions(overlayTransitionOptions);
  if ($$props.closeButtonLabel === void 0 && $$bindings.closeButtonLabel && closeButtonLabel !== void 0)
    $$bindings.closeButtonLabel(closeButtonLabel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.closeOnClickOutside === void 0 && $$bindings.closeOnClickOutside && closeOnClickOutside !== void 0)
    $$bindings.closeOnClickOutside(closeOnClickOutside);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
    $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.trapFocus === void 0 && $$bindings.trapFocus && trapFocus !== void 0)
    $$bindings.trapFocus(trapFocus);
  if ($$props.centered === void 0 && $$bindings.centered && centered !== void 0)
    $$bindings.centered(centered);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.withinPortal === void 0 && $$bindings.withinPortal && withinPortal !== void 0)
    $$bindings.withinPortal(withinPortal);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      handleFocusReturn(opened);
    }
    {
      if (opened && (typeof target === "string" && !document.querySelector(target) || !target)) {
        throw new Error(`Wrap your app in the SvelteUIProvider, or provide a sufficent target throught the "target={''}" prop `);
      }
    }
    getTransition(transition);
    getTransition(overlayTransition);
    ({ cx: cx2, classes, getStyles } = useStyles({ centered, overflow, size: size2, zIndex }, { name: "Modal" }));
    $$rendered = `${opened ? `${validate_component(OptionalPortal$1, "OptionalPortal").$$render(
      $$result,
      {
        class: zIndexStyles(),
        withinPortal,
        target
      },
      {},
      {
        default: () => {
          return `${validate_component(Box$1, "Box").$$render(
            $$result,
            Object.assign(
              {},
              { id: baseId },
              { use },
              $$restProps,
              {
                class: cx2(className, classes.root, getStyles({ css: override }))
              },
              { element }
            ),
            {
              element: ($$value) => {
                element = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<div role="presentation"${add_attribute("class", classes.inner, 0)}><div${add_attribute("class", classes.transition, 0)}>${validate_component(Paper$1, "Paper").$$render(
                  $$result,
                  {
                    class: classes.modal,
                    shadow,
                    padding,
                    radius: radius2,
                    role: "dialog",
                    "aria-labelledby": titleId,
                    "aria-describedby": bodyId,
                    "aria-modal": true,
                    tabindex: -1,
                    use: [[focustrap, trapFocus]]
                  },
                  {},
                  {
                    default: () => {
                      return `${title || withCloseButton ? `<div${add_attribute("class", classes.header, 0)}>${slots.title ? slots.title({}) : ` ${validate_component(Text$1, "Text").$$render($$result, { id: titleId, class: classes.title }, {}, {
                        default: () => {
                          return `${escape(title)}`;
                        }
                      })} `} ${withCloseButton ? `${validate_component(CloseButton$1, "CloseButton").$$render(
                        $$result,
                        {
                          iconSize: 16,
                          "aria-label": closeButtonLabel,
                          class: classes.close
                        },
                        {},
                        {}
                      )}` : ``}</div>` : ``} <div${add_attribute("id", bodyId, 0)}${add_attribute("class", classes.body, 0)}>${slots.default ? slots.default({}) : `Place some content`}</div>`;
                    }
                  }
                )}</div></div> <div>${validate_component(Overlay$1, "Overlay").$$render(
                  $$result,
                  {
                    class: classes.overlay,
                    override: { position: "fixed" },
                    zIndex: 0,
                    blur: overlayBlur,
                    color: overlayColor || "black",
                    opacity: _overlayOpacity
                  },
                  {},
                  {}
                )}</div>`;
              }
            }
          )}`;
        }
      }
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_colorScheme();
  return $$rendered;
});
const Modal$1 = Modal;
export {
  Modal$1 as M
};
