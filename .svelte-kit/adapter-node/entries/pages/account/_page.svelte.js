import { c as create_ssr_component, b as compute_rest_props, s as setContext, d as spread, f as escape_object, h as escape_attribute_value, i as add_attribute, v as validate_component, g as getContext, a as subscribe, e as escape, j as each } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
import { i as is_void } from "../../../chunks/names.js";
import { twMerge } from "tailwind-merge";
import "js-cookie";
const Frame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "tag",
    "color",
    "rounded",
    "border",
    "shadow",
    "transition",
    "params",
    "node",
    "use",
    "options",
    "role"
  ]);
  const null_transition = () => ({ duration: 0 });
  const noop = () => {
  };
  setContext("background", true);
  let { tag = $$restProps.href ? "a" : "div" } = $$props;
  let { color = "default" } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { shadow = false } = $$props;
  let { transition = null_transition } = $$props;
  let { params = {} } = $$props;
  let { node = void 0 } = $$props;
  let { use = noop } = $$props;
  let { options = {} } = $$props;
  let { role = void 0 } = $$props;
  const bgColors = {
    gray: "bg-gray-50 dark:bg-gray-800",
    red: "bg-red-50 dark:bg-gray-800",
    yellow: "bg-yellow-50 dark:bg-gray-800 ",
    green: "bg-green-50 dark:bg-gray-800 ",
    indigo: "bg-indigo-50 dark:bg-gray-800 ",
    purple: "bg-purple-50 dark:bg-gray-800 ",
    pink: "bg-pink-50 dark:bg-gray-800 ",
    blue: "bg-blue-50 dark:bg-gray-800 ",
    light: "bg-gray-50 dark:bg-gray-700",
    dark: "bg-gray-50 dark:bg-gray-800",
    default: "bg-white dark:bg-gray-800",
    dropdown: "bg-white dark:bg-gray-700",
    navbar: "bg-white dark:bg-gray-900",
    navbarUl: "bg-gray-50 dark:bg-gray-800",
    form: "bg-gray-50 dark:bg-gray-700",
    primary: "bg-primary-50 dark:bg-gray-800 ",
    orange: "bg-orange-50 dark:bg-orange-800",
    none: ""
  };
  const textColors = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    orange: "text-orange-800 dark:text-orange-400",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",
    red: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",
    green: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",
    purple: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",
    pink: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",
    blue: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",
    light: "border-gray-500 divide-gray-500",
    dark: "border-gray-500 divide-gray-500",
    default: "border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
    dropdown: "border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
    navbar: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    form: "border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",
    primary: "border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",
    orange: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",
    none: ""
  };
  let divClass;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0)
    $$bindings.node(node);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  color = color ?? "default";
  {
    setContext("color", color);
  }
  divClass = twMerge(bgColors[color], textColors[color], rounded && "rounded-lg", border && "border", borderColors[color], shadow && "shadow-md", $$props.class);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(divClass) },
        { role: escape_attribute_value(role) }
      ],
      {}
    )}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)} `;
});
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["multiple", "flush", "activeClass", "inactiveClass", "defaultClass"]);
  let { multiple = false } = $$props;
  let { flush = false } = $$props;
  let { activeClass = "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800" } = $$props;
  let { inactiveClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800" } = $$props;
  let { defaultClass = "text-gray-500 dark:text-gray-400" } = $$props;
  const ctx = {
    flush,
    activeClass: twMerge(activeClass, $$props.classActive),
    inactiveClass: twMerge(inactiveClass, $$props.classInactive),
    selected: multiple ? void 0 : writable()
  };
  setContext("ctx", ctx);
  let frameClass;
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.flush === void 0 && $$bindings.flush && flush !== void 0)
    $$bindings.flush(flush);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0)
    $$bindings.inactiveClass(inactiveClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  frameClass = twMerge(defaultClass, $$props.class);
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, $$restProps, { class: frameClass }, { color: "none" }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} `;
});
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let contentClass;
  let $$unsubscribe_selected;
  let { open = false } = $$props;
  let { activeClass = void 0 } = $$props;
  let { inactiveClass = void 0 } = $$props;
  let { defaultClass = "flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700" } = $$props;
  let { transitionType = "slide" } = $$props;
  let { transitionParams = {} } = $$props;
  let { paddingFlush = "py-5" } = $$props;
  let { paddingDefault = "p-5" } = $$props;
  let { textFlushOpen = "text-gray-900 dark:text-white" } = $$props;
  let { textFlushDefault = "text-gray-500 dark:text-gray-400" } = $$props;
  let { borderClass = "border-l border-r group-first:border-t" } = $$props;
  let { borderOpenClass = "border-l border-r" } = $$props;
  let { borderBottomClass = "border-b" } = $$props;
  let { borderSharedClass = "border-gray-200 dark:border-gray-700" } = $$props;
  let { classActive = void 0 } = $$props;
  let { classInactive = void 0 } = $$props;
  let activeCls = twMerge(activeClass, classActive);
  let inactiveCls = twMerge(inactiveClass, classInactive);
  const ctx = getContext("ctx") ?? {};
  const selected = ctx.selected ?? writable();
  $$unsubscribe_selected = subscribe(selected, (value) => value);
  open = false;
  let buttonClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0)
    $$bindings.inactiveClass(inactiveClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  if ($$props.paddingFlush === void 0 && $$bindings.paddingFlush && paddingFlush !== void 0)
    $$bindings.paddingFlush(paddingFlush);
  if ($$props.paddingDefault === void 0 && $$bindings.paddingDefault && paddingDefault !== void 0)
    $$bindings.paddingDefault(paddingDefault);
  if ($$props.textFlushOpen === void 0 && $$bindings.textFlushOpen && textFlushOpen !== void 0)
    $$bindings.textFlushOpen(textFlushOpen);
  if ($$props.textFlushDefault === void 0 && $$bindings.textFlushDefault && textFlushDefault !== void 0)
    $$bindings.textFlushDefault(textFlushDefault);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.borderOpenClass === void 0 && $$bindings.borderOpenClass && borderOpenClass !== void 0)
    $$bindings.borderOpenClass(borderOpenClass);
  if ($$props.borderBottomClass === void 0 && $$bindings.borderBottomClass && borderBottomClass !== void 0)
    $$bindings.borderBottomClass(borderBottomClass);
  if ($$props.borderSharedClass === void 0 && $$bindings.borderSharedClass && borderSharedClass !== void 0)
    $$bindings.borderSharedClass(borderSharedClass);
  if ($$props.classActive === void 0 && $$bindings.classActive && classActive !== void 0)
    $$bindings.classActive(classActive);
  if ($$props.classInactive === void 0 && $$bindings.classInactive && classInactive !== void 0)
    $$bindings.classInactive(classInactive);
  buttonClass = twMerge([
    defaultClass,
    ctx.flush || borderClass,
    borderBottomClass,
    borderSharedClass,
    ctx.flush ? paddingFlush : paddingDefault,
    open && (ctx.flush ? textFlushOpen : activeCls || ctx.activeClass),
    !open && (ctx.flush ? textFlushDefault : inactiveCls || ctx.inactiveClass),
    $$props.class
  ]);
  contentClass = twMerge([
    ctx.flush ? paddingFlush : paddingDefault,
    ctx.flush ? "" : borderOpenClass,
    borderBottomClass,
    borderSharedClass
  ]);
  $$unsubscribe_selected();
  return `<h2 class="group"><button type="button"${add_attribute("class", buttonClass, 0)}${add_attribute("aria-expanded", open, 0)}>${slots.header ? slots.header({}) : ``} ${open ? `${slots.arrowup ? slots.arrowup({}) : ` <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg> `}` : `${slots.arrowdown ? slots.arrowdown({}) : ` <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg> `}`}</button></h2> ${open ? `<div><div${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : `<div class="hidden"><div${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`} `;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["pill", "outline", "size", "href", "type", "color", "shadow"]);
  const group = getContext("group");
  let { pill = false } = $$props;
  let { outline = false } = $$props;
  let { size = group ? "sm" : "md" } = $$props;
  let { href = void 0 } = $$props;
  let { type = "button" } = $$props;
  let { color = group ? outline ? "dark" : "alternative" : "primary" } = $$props;
  let { shadow = false } = $$props;
  const colorClasses = {
    alternative: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus:text-primary-700 dark:focus:text-white dark:hover:text-white",
    blue: "text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
    dark: "text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",
    green: "text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",
    light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",
    primary: "text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",
    purple: "text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",
    red: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",
    yellow: "text-white bg-yellow-400 hover:bg-yellow-500 ",
    none: ""
  };
  const coloredFocusClasses = {
    alternative: "focus:ring-gray-200 dark:focus:ring-gray-700",
    blue: "focus:ring-blue-300 dark:focus:ring-blue-800",
    dark: "focus:ring-gray-300 dark:focus:ring-gray-700",
    green: "focus:ring-green-300 dark:focus:ring-green-800",
    light: "focus:ring-gray-200 dark:focus:ring-gray-700",
    primary: "focus:ring-primary-300 dark:focus:ring-primary-800",
    purple: "focus:ring-purple-300 dark:focus:ring-purple-900",
    red: "focus:ring-red-300 dark:focus:ring-red-900",
    yellow: "focus:ring-yellow-300 dark:focus:ring-yellow-900",
    none: ""
  };
  const coloredShadowClasses = {
    alternative: "shadow-gray-500/50 dark:shadow-gray-800/80",
    blue: "shadow-blue-500/50 dark:shadow-blue-800/80",
    dark: "shadow-gray-500/50 dark:shadow-gray-800/80",
    green: "shadow-green-500/50 dark:shadow-green-800/80",
    light: "shadow-gray-500/50 dark:shadow-gray-800/80",
    primary: "shadow-primary-500/50 dark:shadow-primary-800/80",
    purple: "shadow-purple-500/50 dark:shadow-purple-800/80",
    red: "shadow-red-500/50 dark:shadow-red-800/80 ",
    yellow: "shadow-yellow-500/50 dark:shadow-yellow-800/80 ",
    none: ""
  };
  const outlineClasses = {
    alternative: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800",
    blue: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",
    dark: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",
    green: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",
    light: "text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",
    primary: "text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",
    purple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",
    red: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",
    yellow: "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",
    none: ""
  };
  const sizeClasses = {
    xs: "px-3 py-2 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base"
  };
  const hasBorder = () => outline || color === "alternative" || color === "light";
  let buttonClass;
  if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0)
    $$bindings.pill(pill);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  buttonClass = twMerge(
    "text-center font-medium",
    group ? "focus:ring-2" : "focus:ring-4",
    group && "focus:z-10",
    group || "focus:outline-none",
    "inline-flex items-center justify-center " + sizeClasses[size],
    outline ? outlineClasses[color] : colorClasses[color],
    color === "alternative" && (group ? "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600" : "dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-700"),
    outline && color === "dark" && (group ? "dark:text-white dark:border-white" : "dark:text-gray-400 dark:border-gray-700"),
    coloredFocusClasses[color],
    hasBorder() && group && "border-l-0 first:border-l",
    group ? pill && "first:rounded-l-full last:rounded-r-full" || "first:rounded-l-lg last:rounded-r-lg" : pill && "rounded-full" || "rounded-lg",
    shadow && "shadow-lg",
    shadow && coloredShadowClasses[color],
    $$props.disabled && "cursor-not-allowed opacity-50",
    $$props.class
  );
  return `${((tag) => {
    return tag ? `<${href ? "a" : "button"}${spread(
      [
        {
          type: escape_attribute_value(href ? void 0 : type)
        },
        { href: escape_attribute_value(href) },
        {
          role: escape_attribute_value(href ? "link" : "button")
        },
        escape_object($$restProps),
        {
          class: escape_attribute_value(buttonClass)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "button")} `;
});
const TabItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "title", "activeClasses", "inactiveClasses", "defaultClass"]);
  let { open = false } = $$props;
  let { title = "Tab title" } = $$props;
  let { activeClasses = void 0 } = $$props;
  let { inactiveClasses = void 0 } = $$props;
  let { defaultClass = "inline-block text-sm font-medium text-center disabled:cursor-not-allowed" } = $$props;
  const ctx = getContext("ctx") ?? {};
  ctx.selected ?? writable();
  let buttonClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  buttonClass = twMerge(
    defaultClass,
    open ? activeClasses ?? ctx.activeClasses : inactiveClasses ?? ctx.inactiveClasses,
    open && "active"
  );
  return `<li${add_attribute("class", twMerge("group", $$props.class), 0)} role="presentation"><button${spread(
    [
      { type: "button" },
      { role: "tab" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      }
    ],
    {}
  )}>${slots.title ? slots.title({}) : `${escape(title)}`}</button> ${open ? `<div class="hidden tab_content_placeholder"><div>${slots.default ? slots.default({}) : ``}</div></div>` : ``}</li> `;
});
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ulClass;
  let { style = "none" } = $$props;
  let { defaultClass = "flex flex-wrap space-x-2" } = $$props;
  let { contentClass = "p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4" } = $$props;
  let { divider = true } = $$props;
  let { activeClasses = "p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500" } = $$props;
  let { inactiveClasses = "p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300" } = $$props;
  const styledActiveClasses = {
    full: "p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:bg-gray-700 dark:text-white",
    pill: "py-3 px-4 text-white bg-primary-600 rounded-lg",
    underline: "p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500",
    none: ""
  };
  const styledInactiveClasses = {
    full: "p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
    pill: "py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
    underline: "p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400",
    none: ""
  };
  const ctx = {
    activeClasses: styledActiveClasses[style] || activeClasses,
    inactiveClasses: styledInactiveClasses[style] || inactiveClasses,
    selected: writable()
  };
  setContext("ctx", ctx);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.contentClass === void 0 && $$bindings.contentClass && contentClass !== void 0)
    $$bindings.contentClass(contentClass);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0)
    $$bindings.divider(divider);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  divider = ["full", "pill"].includes(style) ? false : divider;
  ulClass = twMerge(defaultClass, style === "underline" && "-mb-px", $$props.class);
  return `<ul${add_attribute("class", ulClass, 0)}>${slots.default ? slots.default({ style }) : ``}</ul> ${divider ? `${slots.divider ? slots.divider({}) : ` <div class="h-px bg-gray-200 dark:bg-gray-700"></div> `}` : ``} <div${add_attribute("class", contentClass, 0)} role="tabpanel" aria-labelledby="id-tab"></div> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let info = [];
  return `<div class="main-body">${validate_component(Tabs, "Tabs").$$render(
    $$result,
    {
      style: "full",
      defaultClass: "flex rounded-lg divide-x divide-dark-200 shadow dark:divide-gray-700"
    },
    {},
    {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { class: "w-full", open: true }, {}, {
          title: () => {
            return `<span slot="title" data-svelte-h="svelte-1oh8azg">Single Player</span>`;
          },
          default: () => {
            return `<p class="flex justify-center text-sm text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1nvdz2y"><b>Match History</b></p> <br> ${validate_component(Accordion, "Accordion").$$render(
              $$result,
              {
                activeClasses: "bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800",
                inactiveClasses: "text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
              },
              {},
              {
                default: () => {
                  return `${each(info, ({ game, time_finished, highest_streak, correct_answers, wrong_answers, status, mode, date }, i) => {
                    return `${status == 0 && mode == 0 ? `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { class: "bg-red-200 hover:bg-red-300" }, {}, {
                      header: () => {
                        return `<span slot="header">Game ${escape(game)} <br> <small>${escape(date)}</small> </span>`;
                      },
                      default: () => {
                        return `<p class="flex justify-center mb-2 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1wh4mz5"><b>Game stats</b></p> <div class="stats"><b data-svelte-h="svelte-1m9m1rz">Time finished:</b> <p>${escape(time_finished)}</p> <b data-svelte-h="svelte-gfioqi">Highest answer streak:</b> <p>${escape(highest_streak)}</p> <b data-svelte-h="svelte-16f3j3n">Correct answers:</b> <p>${escape(correct_answers)}</p> <b data-svelte-h="svelte-ci7954">Wrong answers:</b> <p>${escape(wrong_answers)}</p></div> `;
                      }
                    })}` : `${status == 1 && mode == 0 ? `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { class: "bg-blue-200 hover:bg-blue-300" }, {}, {
                      header: () => {
                        return `<span slot="header">Game ${escape(game)} <br> <small>${escape(date)}</small> </span>`;
                      },
                      default: () => {
                        return `<p class="flex justify-center mb-2 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1wh4mz5"><b>Game stats</b></p> <div class="stats"><b data-svelte-h="svelte-1m9m1rz">Time finished:</b> <p>${escape(time_finished)}</p> <b data-svelte-h="svelte-gfioqi">Highest answer streak:</b> <p>${escape(highest_streak)}</p> <b data-svelte-h="svelte-16f3j3n">Correct answers:</b> <p>${escape(correct_answers)}</p> <b data-svelte-h="svelte-ci7954">Wrong answers:</b> <p>${escape(wrong_answers)}</p></div> `;
                      }
                    })}` : ``}`}`;
                  })}`;
                }
              }
            )}`;
          }
        })} ${validate_component(TabItem, "TabItem").$$render($$result, { class: "w-full" }, {}, {
          title: () => {
            return `<span slot="title" data-svelte-h="svelte-pcknyd">Multiplayer</span>`;
          },
          default: () => {
            return `<p class="flex justify-center text-sm text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1nvdz2y"><b>Match History</b></p> <br> ${validate_component(Accordion, "Accordion").$$render(
              $$result,
              {
                activeClasses: "bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800",
                inactiveClasses: "text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
              },
              {},
              {
                default: () => {
                  return `${each(info, ({ game, time_finished, highest_streak, correct_answers, wrong_answers, status, mode, host, winner, date }, i) => {
                    return `${status == 0 && mode == 1 ? `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { class: "bg-red-200 hover:bg-red-300" }, {}, {
                      header: () => {
                        return `<span slot="header">Game ${escape(game)} <br> <small>Host: ${escape(host)}</small> <br> <small>${escape(date)}</small> </span>`;
                      },
                      default: () => {
                        return `<p class="flex justify-center mb-2 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-g0ir4h"><b>Game stats</b></p> <br><br> <div class="stats"><b data-svelte-h="svelte-18jrtuf">Winner:</b> ${winner == null || winner == "" ? `<p style="font-style: italic;" data-svelte-h="svelte-12pg193">No records</p>` : `<p>${escape(winner)}</p>`} <b data-svelte-h="svelte-1m9m1rz">Time finished:</b> <p>${escape(time_finished)}</p> <b data-svelte-h="svelte-gfioqi">Highest answer streak:</b> <p>${escape(highest_streak)}</p> <b data-svelte-h="svelte-16f3j3n">Correct answers:</b> <p>${escape(correct_answers)}</p> <b data-svelte-h="svelte-ci7954">Wrong answers:</b> <p>${escape(wrong_answers)}</p></div> `;
                      }
                    })}` : `${status == 1 && mode == 1 ? `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { class: "bg-blue-200 hover:bg-blue-300" }, {}, {
                      header: () => {
                        return `<span slot="header">Game ${escape(game)} <br> <small>Host: ${escape(host)}</small> <br> <small>${escape(date)}</small> </span>`;
                      },
                      default: () => {
                        return `<p class="flex justify-center mb-2 text-gray-500 dark:text-gray-400" data-svelte-h="svelte-g0ir4h"><b>Game stats</b></p> <div class="stats"><b data-svelte-h="svelte-18jrtuf">Winner:</b> ${winner == null || winner == "" ? `<p style="font-style: italic;" data-svelte-h="svelte-12pg193">No records</p>` : `<p class="font-medium">${escape(winner)}</p>`} <b data-svelte-h="svelte-1m9m1rz">Time finished:</b> <p>${escape(time_finished)}</p> <b data-svelte-h="svelte-gfioqi">Highest answer streak:</b> <p>${escape(highest_streak)}</p> <b data-svelte-h="svelte-16f3j3n">Correct answers:</b> <p>${escape(correct_answers)}</p> <b data-svelte-h="svelte-ci7954">Wrong answers:</b> <p>${escape(wrong_answers)}</p></div> `;
                      }
                    })}` : ``}`}`;
                  })}`;
                }
              }
            )}`;
          }
        })}`;
      }
    }
  )} <br> <div class="footer-nav">${validate_component(Button, "Button").$$render($$result, { color: "dark", href: "/main" }, {}, {
    default: () => {
      return `Back`;
    }
  })}</div></div> ${$$result.head += `<!-- HEAD_svelte-1tptmaj_START --><style lang="css" data-svelte-h="svelte-1hgz0x5">/*
! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #E5E7EB; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

[data-tooltip-style^='light'] + .tooltip > .tooltip-arrow:before {
  border-style: solid;
  border-color: #e5e7eb;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='top'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-right-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='right'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='bottom'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='left'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-right-width: 1px;
}

.tooltip[data-popper-placement^='top'] > .tooltip-arrow {
  bottom: -4px;
}

.tooltip[data-popper-placement^='bottom'] > .tooltip-arrow {
  top: -4px;
}

.tooltip[data-popper-placement^='left'] > .tooltip-arrow {
  right: -4px;
}

.tooltip[data-popper-placement^='right'] > .tooltip-arrow {
  left: -4px;
}

.tooltip.invisible > .tooltip-arrow:before {
  visibility: hidden;
}

[data-popper-arrow],[data-popper-arrow]:before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

[data-popper-arrow] {
  visibility: hidden;
}

[data-popper-arrow]:before {
  content: "";
  visibility: visible;
  transform: rotate(45deg);
}

[data-popper-arrow]:after {
  content: "";
  visibility: visible;
  transform: rotate(45deg);
  position: absolute;
  width: 9px;
  height: 9px;
  background: inherit;
}

[role="tooltip"] > [data-popper-arrow]:before {
  border-style: solid;
  border-color: #e5e7eb;
}

.dark [role="tooltip"] > [data-popper-arrow]:before {
  border-style: solid;
  border-color: #4b5563;
}

[role="tooltip"] > [data-popper-arrow]:after {
  border-style: solid;
  border-color: #e5e7eb;
}

.dark [role="tooltip"] > [data-popper-arrow]:after {
  border-style: solid;
  border-color: #4b5563;
}

[data-popover][role="tooltip"][data-popper-placement^='top'] > [data-popper-arrow]:before {
  border-bottom-width: 1px;
  border-right-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='top'] > [data-popper-arrow]:after {
  border-bottom-width: 1px;
  border-right-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='right'] > [data-popper-arrow]:before {
  border-bottom-width: 1px;
  border-left-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='right'] > [data-popper-arrow]:after {
  border-bottom-width: 1px;
  border-left-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='bottom'] > [data-popper-arrow]:before {
  border-top-width: 1px;
  border-left-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='bottom'] > [data-popper-arrow]:after {
  border-top-width: 1px;
  border-left-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='left'] > [data-popper-arrow]:before {
  border-top-width: 1px;
  border-right-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='left'] > [data-popper-arrow]:after {
  border-top-width: 1px;
  border-right-width: 1px;
}

[data-popover][role="tooltip"][data-popper-placement^='top'] > [data-popper-arrow] {
  bottom: -5px;
}

[data-popover][role="tooltip"][data-popper-placement^='bottom'] > [data-popper-arrow] {
  top: -5px;
}

[data-popover][role="tooltip"][data-popper-placement^='left'] > [data-popper-arrow] {
  right: -5px;
}

[data-popover][role="tooltip"][data-popper-placement^='right'] > [data-popper-arrow] {
  left: -5px;
}

[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #1C64F2;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6B7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6B7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
}

select:not([size]) {
  background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'%3e %3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 0.75em 0.75em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
}

[multiple] {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #1C64F2;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked,.dark [type='checkbox']:checked,.dark [type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 0.55em 0.55em;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 0.55em 0.55em;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
  background-size: 1em 1em;
}

.dark [type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
  background-size: 1em 1em;
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 12'%3e %3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M1 5.917 5.724 10.5 15 1.5'/%3e %3c/svg%3e");
  background-color: currentColor;
  border-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 0.55em 0.55em;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px auto inherit;
}

input[type=file]::file-selector-button {
  color: white;
  background: #1F2937;
  border: 0;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 2rem;
  padding-right: 1rem;
  margin-inline-start: -1rem;
  margin-inline-end: 1rem;
}

input[type=file]::file-selector-button:hover {
  background: #374151;
}

.dark input[type=file]::file-selector-button {
  color: white;
  background: #4B5563;
}

.dark input[type=file]::file-selector-button:hover {
  background: #6B7280;
}

input[type="range"]::-webkit-slider-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-webkit-slider-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-webkit-slider-thumb {
  background: #6B7280;
}

input[type="range"]:focus::-webkit-slider-thumb {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 1px;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}

input[type="range"]::-moz-range-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-moz-range-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-moz-range-thumb {
  background: #6B7280;
}

input[type="range"]::-moz-range-progress {
  background: #3F83F8;
}

input[type="range"]::-ms-fill-lower {
  background: #3F83F8;
}

input[type="range"].range-sm::-webkit-slider-thumb {
  height: 1rem;
  width: 1rem;
}

input[type="range"].range-lg::-webkit-slider-thumb {
  height: 1.5rem;
  width: 1.5rem;
}

input[type="range"].range-sm::-moz-range-thumb {
  height: 1rem;
  width: 1rem;
}

input[type="range"].range-lg::-moz-range-thumb {
  height: 1.5rem;
  width: 1.5rem;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
		.container {
  width: 100%;
}
		@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}
		@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}
		@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}
		@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}
		@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}
		.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
		.pointer-events-none {
  pointer-events: none;
}
		.visible {
  visibility: visible;
}
		.static {
  position: static;
}
		.fixed {
  position: fixed;
}
		.absolute {
  position: absolute;
}
		.relative {
  position: relative;
}
		.sticky {
  position: sticky;
}
		.-inset-1 {
  inset: -0.25rem;
}
		.inset-0 {
  inset: 0px;
}
		.inset-x-0 {
  left: 0px;
  right: 0px;
}
		.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
		.-left-1 {
  left: -0.25rem;
}
		.-left-1\\.5 {
  left: -0.375rem;
}
		.-left-14 {
  left: -3.5rem;
}
		.-left-3 {
  left: -0.75rem;
}
		.-left-\\[17px\\] {
  left: -17px;
}
		.-right-\\[16px\\] {
  right: -16px;
}
		.-right-\\[17px\\] {
  right: -17px;
}
		.bottom-0 {
  bottom: 0px;
}
		.bottom-4 {
  bottom: 1rem;
}
		.bottom-5 {
  bottom: 1.25rem;
}
		.bottom-6 {
  bottom: 1.5rem;
}
		.left-0 {
  left: 0px;
}
		.left-1 {
  left: 0.25rem;
}
		.left-1\\/2 {
  left: 50%;
}
		.left-2 {
  left: 0.5rem;
}
		.left-2\\.5 {
  left: 0.625rem;
}
		.left-5 {
  left: 1.25rem;
}
		.right-0 {
  right: 0px;
}
		.right-2 {
  right: 0.5rem;
}
		.right-2\\.5 {
  right: 0.625rem;
}
		.right-5 {
  right: 1.25rem;
}
		.right-6 {
  right: 1.5rem;
}
		.top-0 {
  top: 0px;
}
		.top-1 {
  top: 0.25rem;
}
		.top-1\\/2 {
  top: 50%;
}
		.top-2 {
  top: 0.5rem;
}
		.top-3 {
  top: 0.75rem;
}
		.top-4 {
  top: 1rem;
}
		.top-5 {
  top: 1.25rem;
}
		.top-6 {
  top: 1.5rem;
}
		.top-\\[124px\\] {
  top: 124px;
}
		.top-\\[142px\\] {
  top: 142px;
}
		.top-\\[178px\\] {
  top: 178px;
}
		.top-\\[40px\\] {
  top: 40px;
}
		.top-\\[72px\\] {
  top: 72px;
}
		.top-\\[88px\\] {
  top: 88px;
}
		.top-\\[calc\\(100\\%\\+1rem\\)\\] {
  top: calc(100% + 1rem);
}
		.-z-10 {
  z-index: -10;
}
		.z-0 {
  z-index: 0;
}
		.z-10 {
  z-index: 10;
}
		.z-30 {
  z-index: 30;
}
		.z-40 {
  z-index: 40;
}
		.z-50 {
  z-index: 50;
}
		.col-span-2 {
  grid-column: span 2 / span 2;
}
		.m-0 {
  margin: 0px;
}
		.m-0\\.5 {
  margin: 0.125rem;
}
		.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}
		.-mx-1\\.5 {
  margin-left: -0.375rem;
  margin-right: -0.375rem;
}
		.-my-1 {
  margin-top: -0.25rem;
  margin-bottom: -0.25rem;
}
		.-my-1\\.5 {
  margin-top: -0.375rem;
  margin-bottom: -0.375rem;
}
		.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
		.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}
		.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
		.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
		.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
		.my-8 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
		.-mb-px {
  margin-bottom: -1px;
}
		.-ml-4 {
  margin-left: -1rem;
}
		.-mr-1 {
  margin-right: -0.25rem;
}
		.-mr-1\\.5 {
  margin-right: -0.375rem;
}
		.-mt-px {
  margin-top: -1px;
}
		.mb-1 {
  margin-bottom: 0.25rem;
}
		.mb-10 {
  margin-bottom: 2.5rem;
}
		.mb-2 {
  margin-bottom: 0.5rem;
}
		.mb-2\\.5 {
  margin-bottom: 0.625rem;
}
		.mb-3 {
  margin-bottom: 0.75rem;
}
		.mb-4 {
  margin-bottom: 1rem;
}
		.mb-5 {
  margin-bottom: 1.25rem;
}
		.mb-6 {
  margin-bottom: 1.5rem;
}
		.mb-px {
  margin-bottom: 1px;
}
		.ml-1 {
  margin-left: 0.25rem;
}
		.ml-1\\.5 {
  margin-left: 0.375rem;
}
		.ml-2 {
  margin-left: 0.5rem;
}
		.ml-3 {
  margin-left: 0.75rem;
}
		.ml-4 {
  margin-left: 1rem;
}
		.ml-6 {
  margin-left: 1.5rem;
}
		.ml-auto {
  margin-left: auto;
}
		.mr-1 {
  margin-right: 0.25rem;
}
		.mr-2 {
  margin-right: 0.5rem;
}
		.mr-3 {
  margin-right: 0.75rem;
}
		.mr-4 {
  margin-right: 1rem;
}
		.mt-1 {
  margin-top: 0.25rem;
}
		.mt-1\\.5 {
  margin-top: 0.375rem;
}
		.mt-2 {
  margin-top: 0.5rem;
}
		.mt-3 {
  margin-top: 0.75rem;
}
		.mt-4 {
  margin-top: 1rem;
}
		.mt-6 {
  margin-top: 1.5rem;
}
		.block {
  display: block;
}
		.inline-block {
  display: inline-block;
}
		.inline {
  display: inline;
}
		.flex {
  display: flex;
}
		.inline-flex {
  display: inline-flex;
}
		.table {
  display: table;
}
		.grid {
  display: grid;
}
		.contents {
  display: contents;
}
		.\\!hidden {
  display: none !important;
}
		.hidden {
  display: none;
}
		.h-0 {
  height: 0px;
}
		.h-0\\.5 {
  height: 0.125rem;
}
		.h-1 {
  height: 0.25rem;
}
		.h-10 {
  height: 2.5rem;
}
		.h-12 {
  height: 3rem;
}
		.h-14 {
  height: 3.5rem;
}
		.h-16 {
  height: 4rem;
}
		.h-2 {
  height: 0.5rem;
}
		.h-2\\.5 {
  height: 0.625rem;
}
		.h-20 {
  height: 5rem;
}
		.h-24 {
  height: 6rem;
}
		.h-3 {
  height: 0.75rem;
}
		.h-3\\.5 {
  height: 0.875rem;
}
		.h-36 {
  height: 9rem;
}
		.h-4 {
  height: 1rem;
}
		.h-48 {
  height: 12rem;
}
		.h-5 {
  height: 1.25rem;
}
		.h-56 {
  height: 14rem;
}
		.h-6 {
  height: 1.5rem;
}
		.h-64 {
  height: 16rem;
}
		.h-7 {
  height: 1.75rem;
}
		.h-72 {
  height: 18rem;
}
		.h-8 {
  height: 2rem;
}
		.h-80 {
  height: 20rem;
}
		.h-9 {
  height: 2.25rem;
}
		.h-96 {
  height: 24rem;
}
		.h-\\[10px\\] {
  height: 10px;
}
		.h-\\[140px\\] {
  height: 140px;
}
		.h-\\[156px\\] {
  height: 156px;
}
		.h-\\[172px\\] {
  height: 172px;
}
		.h-\\[17px\\] {
  height: 17px;
}
		.h-\\[18px\\] {
  height: 18px;
}
		.h-\\[193px\\] {
  height: 193px;
}
		.h-\\[213px\\] {
  height: 213px;
}
		.h-\\[24px\\] {
  height: 24px;
}
		.h-\\[32px\\] {
  height: 32px;
}
		.h-\\[41px\\] {
  height: 41px;
}
		.h-\\[426px\\] {
  height: 426px;
}
		.h-\\[454px\\] {
  height: 454px;
}
		.h-\\[46px\\] {
  height: 46px;
}
		.h-\\[52px\\] {
  height: 52px;
}
		.h-\\[55px\\] {
  height: 55px;
}
		.h-\\[572px\\] {
  height: 572px;
}
		.h-\\[5px\\] {
  height: 5px;
}
		.h-\\[600px\\] {
  height: 600px;
}
		.h-\\[63px\\] {
  height: 63px;
}
		.h-\\[64px\\] {
  height: 64px;
}
		.h-auto {
  height: auto;
}
		.h-full {
  height: 100%;
}
		.h-modal {
  height: calc(100% - 2rem);
}
		.h-px {
  height: 1px;
}
		.max-h-64 {
  max-height: 16rem;
}
		.max-h-full {
  max-height: 100%;
}
		.w-1 {
  width: 0.25rem;
}
		.w-1\\/2 {
  width: 50%;
}
		.w-10 {
  width: 2.5rem;
}
		.w-10\\/12 {
  width: 83.333333%;
}
		.w-11 {
  width: 2.75rem;
}
		.w-11\\/12 {
  width: 91.666667%;
}
		.w-12 {
  width: 3rem;
}
		.w-14 {
  width: 3.5rem;
}
		.w-2 {
  width: 0.5rem;
}
		.w-2\\.5 {
  width: 0.625rem;
}
		.w-2\\/4 {
  width: 50%;
}
		.w-20 {
  width: 5rem;
}
		.w-24 {
  width: 6rem;
}
		.w-3 {
  width: 0.75rem;
}
		.w-3\\.5 {
  width: 0.875rem;
}
		.w-32 {
  width: 8rem;
}
		.w-36 {
  width: 9rem;
}
		.w-4 {
  width: 1rem;
}
		.w-48 {
  width: 12rem;
}
		.w-5 {
  width: 1.25rem;
}
		.w-6 {
  width: 1.5rem;
}
		.w-64 {
  width: 16rem;
}
		.w-8 {
  width: 2rem;
}
		.w-8\\/12 {
  width: 66.666667%;
}
		.w-80 {
  width: 20rem;
}
		.w-9 {
  width: 2.25rem;
}
		.w-9\\/12 {
  width: 75%;
}
		.w-\\[100\\%\\] {
  width: 100%;
}
		.w-\\[10px\\] {
  width: 10px;
}
		.w-\\[148px\\] {
  width: 148px;
}
		.w-\\[188px\\] {
  width: 188px;
}
		.w-\\[1px\\] {
  width: 1px;
}
		.w-\\[208px\\] {
  width: 208px;
}
		.w-\\[272px\\] {
  width: 272px;
}
		.w-\\[300px\\] {
  width: 300px;
}
		.w-\\[3px\\] {
  width: 3px;
}
		.w-\\[52px\\] {
  width: 52px;
}
		.w-\\[56px\\] {
  width: 56px;
}
		.w-\\[6px\\] {
  width: 6px;
}
		.w-\\[calc\\(100\\%-2rem\\)\\] {
  width: calc(100% - 2rem);
}
		.w-full {
  width: 100%;
}
		.min-w-\\[100\\%\\] {
  min-width: 100%;
}
		.max-w-2xl {
  max-width: 42rem;
}
		.max-w-4xl {
  max-width: 56rem;
}
		.max-w-7xl {
  max-width: 80rem;
}
		.max-w-\\[133px\\] {
  max-width: 133px;
}
		.max-w-\\[301px\\] {
  max-width: 301px;
}
		.max-w-\\[341px\\] {
  max-width: 341px;
}
		.max-w-\\[351px\\] {
  max-width: 351px;
}
		.max-w-\\[540px\\] {
  max-width: 540px;
}
		.max-w-\\[640px\\] {
  max-width: 640px;
}
		.max-w-\\[83px\\] {
  max-width: 83px;
}
		.max-w-full {
  max-width: 100%;
}
		.max-w-lg {
  max-width: 32rem;
}
		.max-w-md {
  max-width: 28rem;
}
		.max-w-screen-md {
  max-width: 768px;
}
		.max-w-screen-xl {
  max-width: 1280px;
}
		.max-w-sm {
  max-width: 24rem;
}
		.max-w-xl {
  max-width: 36rem;
}
		.max-w-xs {
  max-width: 20rem;
}
		.flex-1 {
  flex: 1 1 0%;
}
		.flex-shrink-0 {
  flex-shrink: 0;
}
		.shrink-0 {
  flex-shrink: 0;
}
		.origin-\\[0\\] {
  transform-origin: 0;
}
		.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.-translate-x-1\\/3 {
  --tw-translate-x: -33.333333%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.-translate-y-1\\/3 {
  --tw-translate-y: -33.333333%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.-translate-y-4 {
  --tw-translate-y: -1rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.translate-x-1\\/3 {
  --tw-translate-x: 33.333333%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.translate-y-1\\/3 {
  --tw-translate-y: 33.333333%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		@keyframes pulse {

  50% {
    opacity: .5;
  }
}
		.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
		@keyframes spin {

  to {
    transform: rotate(360deg);
  }
}
		.animate-spin {
  animation: spin 1s linear infinite;
}
		.cursor-not-allowed {
  cursor: not-allowed;
}
		.cursor-pointer {
  cursor: pointer;
}
		.resize {
  resize: both;
}
		.list-inside {
  list-style-position: inside;
}
		.list-outside {
  list-style-position: outside;
}
		.list-decimal {
  list-style-type: decimal;
}
		.list-disc {
  list-style-type: disc;
}
		.list-none {
  list-style-type: none;
}
		.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
		.grid-flow-row {
  grid-auto-flow: row;
}
		.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
		.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
		.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
		.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
		.grid-cols-7 {
  grid-template-columns: repeat(7, minmax(0, 1fr));
}
		.flex-row {
  flex-direction: row;
}
		.flex-col {
  flex-direction: column;
}
		.flex-col-reverse {
  flex-direction: column-reverse;
}
		.flex-wrap {
  flex-wrap: wrap;
}
		.items-start {
  align-items: flex-start;
}
		.items-end {
  align-items: flex-end;
}
		.items-center {
  align-items: center;
}
		.items-baseline {
  align-items: baseline;
}
		.justify-start {
  justify-content: flex-start;
}
		.justify-end {
  justify-content: flex-end;
}
		.justify-center {
  justify-content: center;
}
		.justify-between {
  justify-content: space-between;
}
		.justify-around {
  justify-content: space-around;
}
		.gap-1 {
  gap: 0.25rem;
}
		.gap-2 {
  gap: 0.5rem;
}
		.gap-3 {
  gap: 0.75rem;
}
		.gap-8 {
  gap: 2rem;
}
		.gap-y-4 {
  row-gap: 1rem;
}
		.-space-x-px > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-1px * var(--tw-space-x-reverse));
  margin-left: calc(-1px * calc(1 - var(--tw-space-x-reverse)));
}
		.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}
		.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
		.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}
		.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}
		.space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}
		.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}
		.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
		.space-y-2\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.625rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.625rem * var(--tw-space-y-reverse));
}
		.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}
		.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}
		.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2rem * var(--tw-space-y-reverse));
}
		.divide-x > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
}
		.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
		.divide-blue-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(164 202 254 / var(--tw-divide-opacity));
}
		.divide-blue-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(118 169 250 / var(--tw-divide-opacity));
}
		.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-divide-opacity));
}
		.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-divide-opacity));
}
		.divide-gray-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-divide-opacity));
}
		.divide-gray-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(156 163 175 / var(--tw-divide-opacity));
}
		.divide-gray-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-divide-opacity));
}
		.divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-divide-opacity));
}
		.divide-green-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(132 225 188 / var(--tw-divide-opacity));
}
		.divide-green-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(49 196 141 / var(--tw-divide-opacity));
}
		.divide-indigo-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(180 198 252 / var(--tw-divide-opacity));
}
		.divide-indigo-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(141 162 251 / var(--tw-divide-opacity));
}
		.divide-orange-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(253 186 140 / var(--tw-divide-opacity));
}
		.divide-pink-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(248 180 217 / var(--tw-divide-opacity));
}
		.divide-pink-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(241 126 184 / var(--tw-divide-opacity));
}
		.divide-primary-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(254 121 93 / var(--tw-divide-opacity));
}
		.divide-purple-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(202 191 253 / var(--tw-divide-opacity));
}
		.divide-purple-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(172 148 250 / var(--tw-divide-opacity));
}
		.divide-red-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(248 180 180 / var(--tw-divide-opacity));
}
		.divide-red-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(249 128 128 / var(--tw-divide-opacity));
}
		.divide-yellow-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(250 202 21 / var(--tw-divide-opacity));
}
		.divide-yellow-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(227 160 8 / var(--tw-divide-opacity));
}
		.self-center {
  align-self: center;
}
		.overflow-hidden {
  overflow: hidden;
}
		.overflow-x-auto {
  overflow-x: auto;
}
		.overflow-y-auto {
  overflow-y: auto;
}
		.overflow-y-scroll {
  overflow-y: scroll;
}
		.overscroll-contain {
  overscroll-behavior: contain;
}
		.whitespace-normal {
  white-space: normal;
}
		.whitespace-nowrap {
  white-space: nowrap;
}
		.whitespace-pre {
  white-space: pre;
}
		.whitespace-pre-line {
  white-space: pre-line;
}
		.whitespace-pre-wrap {
  white-space: pre-wrap;
}
		.\\!rounded-md {
  border-radius: 0.375rem !important;
}
		.rounded {
  border-radius: 0.25rem;
}
		.rounded-\\[2\\.5rem\\] {
  border-radius: 2.5rem;
}
		.rounded-\\[2rem\\] {
  border-radius: 2rem;
}
		.rounded-full {
  border-radius: 9999px;
}
		.rounded-lg {
  border-radius: 0.5rem;
}
		.rounded-sm {
  border-radius: 0.125rem;
}
		.rounded-xl {
  border-radius: 0.75rem;
}
		.rounded-b {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
		.rounded-b-\\[1rem\\] {
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
}
		.rounded-b-\\[2\\.5rem\\] {
  border-bottom-right-radius: 2.5rem;
  border-bottom-left-radius: 2.5rem;
}
		.rounded-b-lg {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
		.rounded-b-xl {
  border-bottom-right-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}
		.rounded-l {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
		.rounded-l-full {
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
}
		.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
		.rounded-r {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
		.rounded-r-full {
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
}
		.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
		.rounded-t {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
		.rounded-t-\\[2\\.5rem\\] {
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
}
		.rounded-t-lg {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
		.rounded-t-md {
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
}
		.rounded-t-sm {
  border-top-left-radius: 0.125rem;
  border-top-right-radius: 0.125rem;
}
		.rounded-t-xl {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}
		.\\!border-0 {
  border-width: 0px !important;
}
		.border {
  border-width: 1px;
}
		.border-0 {
  border-width: 0px;
}
		.border-2 {
  border-width: 2px;
}
		.border-\\[10px\\] {
  border-width: 10px;
}
		.border-\\[14px\\] {
  border-width: 14px;
}
		.border-\\[16px\\] {
  border-width: 16px;
}
		.border-\\[8px\\] {
  border-width: 8px;
}
		.border-x {
  border-left-width: 1px;
  border-right-width: 1px;
}
		.border-y {
  border-top-width: 1px;
  border-bottom-width: 1px;
}
		.border-b {
  border-bottom-width: 1px;
}
		.border-b-2 {
  border-bottom-width: 2px;
}
		.border-l {
  border-left-width: 1px;
}
		.border-l-0 {
  border-left-width: 0px;
}
		.border-l-4 {
  border-left-width: 4px;
}
		.border-r {
  border-right-width: 1px;
}
		.border-t {
  border-top-width: 1px;
}
		.border-dashed {
  border-style: dashed;
}
		.border-blue-300 {
  --tw-border-opacity: 1;
  border-color: rgb(164 202 254 / var(--tw-border-opacity));
}
		.border-blue-400 {
  --tw-border-opacity: 1;
  border-color: rgb(118 169 250 / var(--tw-border-opacity));
}
		.border-blue-700 {
  --tw-border-opacity: 1;
  border-color: rgb(26 86 219 / var(--tw-border-opacity));
}
		.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}
		.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}
		.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
		.border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}
		.border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}
		.border-gray-800 {
  --tw-border-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-border-opacity));
}
		.border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}
		.border-green-300 {
  --tw-border-opacity: 1;
  border-color: rgb(132 225 188 / var(--tw-border-opacity));
}
		.border-green-400 {
  --tw-border-opacity: 1;
  border-color: rgb(49 196 141 / var(--tw-border-opacity));
}
		.border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}
		.border-green-600 {
  --tw-border-opacity: 1;
  border-color: rgb(5 122 85 / var(--tw-border-opacity));
}
		.border-green-700 {
  --tw-border-opacity: 1;
  border-color: rgb(4 108 78 / var(--tw-border-opacity));
}
		.border-indigo-300 {
  --tw-border-opacity: 1;
  border-color: rgb(180 198 252 / var(--tw-border-opacity));
}
		.border-indigo-400 {
  --tw-border-opacity: 1;
  border-color: rgb(141 162 251 / var(--tw-border-opacity));
}
		.border-inherit {
  border-color: inherit;
}
		.border-orange-300 {
  --tw-border-opacity: 1;
  border-color: rgb(253 186 140 / var(--tw-border-opacity));
}
		.border-pink-300 {
  --tw-border-opacity: 1;
  border-color: rgb(248 180 217 / var(--tw-border-opacity));
}
		.border-pink-400 {
  --tw-border-opacity: 1;
  border-color: rgb(241 126 184 / var(--tw-border-opacity));
}
		.border-primary-400 {
  --tw-border-opacity: 1;
  border-color: rgb(255 188 173 / var(--tw-border-opacity));
}
		.border-primary-500 {
  --tw-border-opacity: 1;
  border-color: rgb(254 121 93 / var(--tw-border-opacity));
}
		.border-primary-600 {
  --tw-border-opacity: 1;
  border-color: rgb(239 86 47 / var(--tw-border-opacity));
}
		.border-primary-700 {
  --tw-border-opacity: 1;
  border-color: rgb(235 79 39 / var(--tw-border-opacity));
}
		.border-purple-300 {
  --tw-border-opacity: 1;
  border-color: rgb(202 191 253 / var(--tw-border-opacity));
}
		.border-purple-400 {
  --tw-border-opacity: 1;
  border-color: rgb(172 148 250 / var(--tw-border-opacity));
}
		.border-purple-700 {
  --tw-border-opacity: 1;
  border-color: rgb(108 43 217 / var(--tw-border-opacity));
}
		.border-red-300 {
  --tw-border-opacity: 1;
  border-color: rgb(248 180 180 / var(--tw-border-opacity));
}
		.border-red-400 {
  --tw-border-opacity: 1;
  border-color: rgb(249 128 128 / var(--tw-border-opacity));
}
		.border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}
		.border-red-600 {
  --tw-border-opacity: 1;
  border-color: rgb(224 36 36 / var(--tw-border-opacity));
}
		.border-red-700 {
  --tw-border-opacity: 1;
  border-color: rgb(200 30 30 / var(--tw-border-opacity));
}
		.border-transparent {
  border-color: transparent;
}
		.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}
		.border-yellow-300 {
  --tw-border-opacity: 1;
  border-color: rgb(250 202 21 / var(--tw-border-opacity));
}
		.border-yellow-400 {
  --tw-border-opacity: 1;
  border-color: rgb(227 160 8 / var(--tw-border-opacity));
}
		.bg-blue-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(225 239 254 / var(--tw-bg-opacity));
}
		.bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}
		.bg-blue-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(235 245 255 / var(--tw-bg-opacity));
}
		.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}
		.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}
		.bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}
		.bg-blue-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}
		.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
		.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}
		.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}
		.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}
		.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
		.bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}
		.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}
		.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}
		.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
		.bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(222 247 236 / var(--tw-bg-opacity));
}
		.bg-green-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 250 247 / var(--tw-bg-opacity));
}
		.bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(14 159 110 / var(--tw-bg-opacity));
}
		.bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}
		.bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}
		.bg-green-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}
		.bg-indigo-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 237 255 / var(--tw-bg-opacity));
}
		.bg-indigo-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(240 245 255 / var(--tw-bg-opacity));
}
		.bg-indigo-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(104 117 245 / var(--tw-bg-opacity));
}
		.bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}
		.bg-indigo-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}
		.bg-inherit {
  background-color: inherit;
}
		.bg-orange-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 236 220 / var(--tw-bg-opacity));
}
		.bg-orange-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 248 241 / var(--tw-bg-opacity));
}
		.bg-orange-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(208 56 1 / var(--tw-bg-opacity));
}
		.bg-pink-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 232 243 / var(--tw-bg-opacity));
}
		.bg-pink-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 242 248 / var(--tw-bg-opacity));
}
		.bg-pink-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(231 70 148 / var(--tw-bg-opacity));
}
		.bg-pink-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(153 21 75 / var(--tw-bg-opacity));
}
		.bg-primary-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 241 238 / var(--tw-bg-opacity));
}
		.bg-primary-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 228 222 / var(--tw-bg-opacity));
}
		.bg-primary-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 245 242 / var(--tw-bg-opacity));
}
		.bg-primary-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 121 93 / var(--tw-bg-opacity));
}
		.bg-primary-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 86 47 / var(--tw-bg-opacity));
}
		.bg-primary-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(235 79 39 / var(--tw-bg-opacity));
}
		.bg-primary-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(204 69 34 / var(--tw-bg-opacity));
}
		.bg-purple-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(237 235 254 / var(--tw-bg-opacity));
}
		.bg-purple-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(246 245 255 / var(--tw-bg-opacity));
}
		.bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}
		.bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}
		.bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}
		.bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}
		.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 232 232 / var(--tw-bg-opacity));
}
		.bg-red-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(251 213 213 / var(--tw-bg-opacity));
}
		.bg-red-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 242 242 / var(--tw-bg-opacity));
}
		.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(240 82 82 / var(--tw-bg-opacity));
}
		.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}
		.bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}
		.bg-red-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(119 29 29 / var(--tw-bg-opacity));
}
		.bg-teal-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(6 148 162 / var(--tw-bg-opacity));
}
		.bg-transparent {
  background-color: transparent;
}
		.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
		.bg-white\\/30 {
  background-color: rgb(255 255 255 / 0.3);
}
		.bg-yellow-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 246 178 / var(--tw-bg-opacity));
}
		.bg-yellow-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 202 21 / var(--tw-bg-opacity));
}
		.bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}
		.bg-yellow-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 253 234 / var(--tw-bg-opacity));
}
		.bg-yellow-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(194 120 3 / var(--tw-bg-opacity));
}
		.bg-yellow-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(159 88 10 / var(--tw-bg-opacity));
}
		.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}
		.bg-opacity-75 {
  --tw-bg-opacity: 0.75;
}
		.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}
		.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
		.from-blue-500 {
  --tw-gradient-from: #3F83F8 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(63 131 248 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
		.from-cyan-400 {
  --tw-gradient-from: #22d3ee var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(34 211 238 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
		.from-cyan-500 {
  --tw-gradient-from: #06b6d4 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(6 182 212 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
		.from-green-400 {
  --tw-gradient-from: #31C48D var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(49 196 141 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
		.from-lime-200 {
  --tw-gradient-from: #d9f99d var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(217 249 157 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
		.from-pink-400 {
  --tw-gradient-from: #F17EB8 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(241 126 184 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
		.from-pink-500 {
  --tw-gradient-from: #E74694 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(231 70 148 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
		.from-purple-500 {
  --tw-gradient-from: #9061F9 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(144 97 249 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
		.from-purple-600 {
  --tw-gradient-from: #7E3AF2 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(126 58 242 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
		.from-red-200 {
  --tw-gradient-from: #FBD5D5 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(251 213 213 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
		.from-red-400 {
  --tw-gradient-from: #F98080 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(249 128 128 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
		.from-sky-400 {
  --tw-gradient-from: #38bdf8 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(56 189 248 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
		.from-teal-200 {
  --tw-gradient-from: #AFECEF var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(175 236 239 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
		.from-teal-400 {
  --tw-gradient-from: #16BDCA var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(22 189 202 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
		.via-blue-600 {
  --tw-gradient-to: rgb(28 100 242 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #1C64F2 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
		.via-cyan-500 {
  --tw-gradient-to: rgb(6 182 212 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #06b6d4 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
		.via-green-500 {
  --tw-gradient-to: rgb(14 159 110 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #0E9F6E var(--tw-gradient-via-position), var(--tw-gradient-to);
}
		.via-lime-400 {
  --tw-gradient-to: rgb(163 230 53 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #a3e635 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
		.via-pink-500 {
  --tw-gradient-to: rgb(231 70 148 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #E74694 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
		.via-purple-600 {
  --tw-gradient-to: rgb(126 58 242 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #7E3AF2 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
		.via-red-300 {
  --tw-gradient-to: rgb(248 180 180 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #F8B4B4 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
		.via-red-500 {
  --tw-gradient-to: rgb(240 82 82 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #F05252 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
		.via-teal-500 {
  --tw-gradient-to: rgb(6 148 162 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #0694A2 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
		.to-blue-500 {
  --tw-gradient-to: #3F83F8 var(--tw-gradient-to-position);
}
		.to-blue-600 {
  --tw-gradient-to: #1C64F2 var(--tw-gradient-to-position);
}
		.to-blue-700 {
  --tw-gradient-to: #1A56DB var(--tw-gradient-to-position);
}
		.to-cyan-600 {
  --tw-gradient-to: #0891b2 var(--tw-gradient-to-position);
}
		.to-emerald-600 {
  --tw-gradient-to: #059669 var(--tw-gradient-to-position);
}
		.to-green-600 {
  --tw-gradient-to: #057A55 var(--tw-gradient-to-position);
}
		.to-lime-200 {
  --tw-gradient-to: #d9f99d var(--tw-gradient-to-position);
}
		.to-lime-500 {
  --tw-gradient-to: #84cc16 var(--tw-gradient-to-position);
}
		.to-orange-400 {
  --tw-gradient-to: #FF8A4C var(--tw-gradient-to-position);
}
		.to-pink-500 {
  --tw-gradient-to: #E74694 var(--tw-gradient-to-position);
}
		.to-pink-600 {
  --tw-gradient-to: #D61F69 var(--tw-gradient-to-position);
}
		.to-purple-700 {
  --tw-gradient-to: #6C2BD9 var(--tw-gradient-to-position);
}
		.to-red-600 {
  --tw-gradient-to: #E02424 var(--tw-gradient-to-position);
}
		.to-teal-600 {
  --tw-gradient-to: #047481 var(--tw-gradient-to-position);
}
		.to-yellow-200 {
  --tw-gradient-to: #FCE96A var(--tw-gradient-to-position);
}
		.bg-clip-text {
  -webkit-background-clip: text;
          background-clip: text;
}
		.fill-blue-600 {
  fill: #1C64F2;
}
		.fill-gray-600 {
  fill: #4B5563;
}
		.fill-green-500 {
  fill: #0E9F6E;
}
		.fill-pink-600 {
  fill: #D61F69;
}
		.fill-primary-600 {
  fill: #EF562F;
}
		.fill-purple-600 {
  fill: #7E3AF2;
}
		.fill-red-600 {
  fill: #E02424;
}
		.fill-white {
  fill: #ffffff;
}
		.fill-yellow-400 {
  fill: #E3A008;
}
		.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}
		.\\!p-0 {
  padding: 0px !important;
}
		.\\!p-2 {
  padding: 0.5rem !important;
}
		.\\!p-3 {
  padding: 0.75rem !important;
}
		.p-0 {
  padding: 0px;
}
		.p-0\\.5 {
  padding: 0.125rem;
}
		.p-1 {
  padding: 0.25rem;
}
		.p-1\\.5 {
  padding: 0.375rem;
}
		.p-2 {
  padding: 0.5rem;
}
		.p-2\\.5 {
  padding: 0.625rem;
}
		.p-3 {
  padding: 0.75rem;
}
		.p-4 {
  padding: 1rem;
}
		.p-5 {
  padding: 1.25rem;
}
		.p-6 {
  padding: 1.5rem;
}
		.\\!px-0 {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
		.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}
		.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
		.px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
		.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
		.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
		.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
		.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
		.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
		.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}
		.py-0\\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}
		.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
		.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
		.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
		.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}
		.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
		.py-3\\.5 {
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
}
		.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
		.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}
		.pb-1 {
  padding-bottom: 0.25rem;
}
		.pb-1\\.5 {
  padding-bottom: 0.375rem;
}
		.pb-2 {
  padding-bottom: 0.5rem;
}
		.pb-2\\.5 {
  padding-bottom: 0.625rem;
}
		.pl-10 {
  padding-left: 2.5rem;
}
		.pl-11 {
  padding-left: 2.75rem;
}
		.pl-2 {
  padding-left: 0.5rem;
}
		.pl-2\\.5 {
  padding-left: 0.625rem;
}
		.pl-3 {
  padding-left: 0.75rem;
}
		.pl-4 {
  padding-left: 1rem;
}
		.pl-9 {
  padding-left: 2.25rem;
}
		.pr-10 {
  padding-right: 2.5rem;
}
		.pr-11 {
  padding-right: 2.75rem;
}
		.pr-2 {
  padding-right: 0.5rem;
}
		.pr-2\\.5 {
  padding-right: 0.625rem;
}
		.pr-4 {
  padding-right: 1rem;
}
		.pr-9 {
  padding-right: 2.25rem;
}
		.pt-3 {
  padding-top: 0.75rem;
}
		.pt-4 {
  padding-top: 1rem;
}
		.pt-5 {
  padding-top: 1.25rem;
}
		.text-left {
  text-align: left;
}
		.text-center {
  text-align: center;
}
		.text-right {
  text-align: right;
}
		.text-justify {
  text-align: justify;
}
		.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
		.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
		.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
		.text-5xl {
  font-size: 3rem;
  line-height: 1;
}
		.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}
		.text-7xl {
  font-size: 4.5rem;
  line-height: 1;
}
		.text-8xl {
  font-size: 6rem;
  line-height: 1;
}
		.text-9xl {
  font-size: 8rem;
  line-height: 1;
}
		.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
		.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
		.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
		.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
		.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
		.font-black {
  font-weight: 900;
}
		.font-bold {
  font-weight: 700;
}
		.font-extrabold {
  font-weight: 800;
}
		.font-extralight {
  font-weight: 200;
}
		.font-light {
  font-weight: 300;
}
		.font-medium {
  font-weight: 500;
}
		.font-normal {
  font-weight: 400;
}
		.font-semibold {
  font-weight: 600;
}
		.font-thin {
  font-weight: 100;
}
		.uppercase {
  text-transform: uppercase;
}
		.italic {
  font-style: italic;
}
		.leading-6 {
  line-height: 1.5rem;
}
		.leading-9 {
  line-height: 2.25rem;
}
		.leading-loose {
  line-height: 2;
}
		.leading-none {
  line-height: 1;
}
		.leading-normal {
  line-height: 1.5;
}
		.leading-relaxed {
  line-height: 1.625;
}
		.tracking-normal {
  letter-spacing: 0em;
}
		.tracking-tight {
  letter-spacing: -0.025em;
}
		.tracking-tighter {
  letter-spacing: -0.05em;
}
		.tracking-wide {
  letter-spacing: 0.025em;
}
		.tracking-wider {
  letter-spacing: 0.05em;
}
		.tracking-widest {
  letter-spacing: 0.1em;
}
		.\\!text-gray-900 {
  --tw-text-opacity: 1 !important;
  color: rgb(17 24 39 / var(--tw-text-opacity)) !important;
}
		.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
		.text-blue-100 {
  --tw-text-opacity: 1;
  color: rgb(225 239 254 / var(--tw-text-opacity));
}
		.text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(118 169 250 / var(--tw-text-opacity));
}
		.text-blue-50 {
  --tw-text-opacity: 1;
  color: rgb(235 245 255 / var(--tw-text-opacity));
}
		.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}
		.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}
		.text-blue-700 {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}
		.text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 66 159 / var(--tw-text-opacity));
}
		.text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}
		.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}
		.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
		.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
		.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}
		.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}
		.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}
		.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
		.text-green-100 {
  --tw-text-opacity: 1;
  color: rgb(222 247 236 / var(--tw-text-opacity));
}
		.text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}
		.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}
		.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(5 122 85 / var(--tw-text-opacity));
}
		.text-green-700 {
  --tw-text-opacity: 1;
  color: rgb(4 108 78 / var(--tw-text-opacity));
}
		.text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(3 84 63 / var(--tw-text-opacity));
}
		.text-green-900 {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}
		.text-indigo-100 {
  --tw-text-opacity: 1;
  color: rgb(229 237 255 / var(--tw-text-opacity));
}
		.text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(141 162 251 / var(--tw-text-opacity));
}
		.text-indigo-500 {
  --tw-text-opacity: 1;
  color: rgb(104 117 245 / var(--tw-text-opacity));
}
		.text-indigo-800 {
  --tw-text-opacity: 1;
  color: rgb(66 56 157 / var(--tw-text-opacity));
}
		.text-orange-500 {
  --tw-text-opacity: 1;
  color: rgb(255 90 31 / var(--tw-text-opacity));
}
		.text-orange-800 {
  --tw-text-opacity: 1;
  color: rgb(138 44 13 / var(--tw-text-opacity));
}
		.text-pink-100 {
  --tw-text-opacity: 1;
  color: rgb(252 232 243 / var(--tw-text-opacity));
}
		.text-pink-400 {
  --tw-text-opacity: 1;
  color: rgb(241 126 184 / var(--tw-text-opacity));
}
		.text-pink-500 {
  --tw-text-opacity: 1;
  color: rgb(231 70 148 / var(--tw-text-opacity));
}
		.text-pink-800 {
  --tw-text-opacity: 1;
  color: rgb(153 21 75 / var(--tw-text-opacity));
}
		.text-primary-100 {
  --tw-text-opacity: 1;
  color: rgb(255 241 238 / var(--tw-text-opacity));
}
		.text-primary-400 {
  --tw-text-opacity: 1;
  color: rgb(255 188 173 / var(--tw-text-opacity));
}
		.text-primary-500 {
  --tw-text-opacity: 1;
  color: rgb(254 121 93 / var(--tw-text-opacity));
}
		.text-primary-600 {
  --tw-text-opacity: 1;
  color: rgb(239 86 47 / var(--tw-text-opacity));
}
		.text-primary-700 {
  --tw-text-opacity: 1;
  color: rgb(235 79 39 / var(--tw-text-opacity));
}
		.text-primary-800 {
  --tw-text-opacity: 1;
  color: rgb(204 69 34 / var(--tw-text-opacity));
}
		.text-purple-100 {
  --tw-text-opacity: 1;
  color: rgb(237 235 254 / var(--tw-text-opacity));
}
		.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}
		.text-purple-500 {
  --tw-text-opacity: 1;
  color: rgb(144 97 249 / var(--tw-text-opacity));
}
		.text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(126 58 242 / var(--tw-text-opacity));
}
		.text-purple-700 {
  --tw-text-opacity: 1;
  color: rgb(108 43 217 / var(--tw-text-opacity));
}
		.text-purple-800 {
  --tw-text-opacity: 1;
  color: rgb(85 33 181 / var(--tw-text-opacity));
}
		.text-red-100 {
  --tw-text-opacity: 1;
  color: rgb(253 232 232 / var(--tw-text-opacity));
}
		.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(249 128 128 / var(--tw-text-opacity));
}
		.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
}
		.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(224 36 36 / var(--tw-text-opacity));
}
		.text-red-700 {
  --tw-text-opacity: 1;
  color: rgb(200 30 30 / var(--tw-text-opacity));
}
		.text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(155 28 28 / var(--tw-text-opacity));
}
		.text-red-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}
		.text-teal-600 {
  --tw-text-opacity: 1;
  color: rgb(4 116 129 / var(--tw-text-opacity));
}
		.text-transparent {
  color: transparent;
}
		.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
		.text-yellow-100 {
  --tw-text-opacity: 1;
  color: rgb(253 246 178 / var(--tw-text-opacity));
}
		.text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(227 160 8 / var(--tw-text-opacity));
}
		.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(194 120 3 / var(--tw-text-opacity));
}
		.text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(114 59 19 / var(--tw-text-opacity));
}
		.underline {
  text-decoration-line: underline;
}
		.line-through {
  text-decoration-line: line-through;
}
		.decoration-blue-400 {
  text-decoration-color: #76A9FA;
}
		.decoration-2 {
  text-decoration-thickness: 2px;
}
		.placeholder-green-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(4 108 78 / var(--tw-placeholder-opacity));
}
		.placeholder-green-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(4 108 78 / var(--tw-placeholder-opacity));
}
		.placeholder-red-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(200 30 30 / var(--tw-placeholder-opacity));
}
		.placeholder-red-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(200 30 30 / var(--tw-placeholder-opacity));
}
		.opacity-100 {
  opacity: 1;
}
		.opacity-30 {
  opacity: 0.3;
}
		.opacity-50 {
  opacity: 0.5;
}
		.opacity-60 {
  opacity: 0.6;
}
		.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
		.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
		.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
		.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
		.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
		.shadow-blue-500\\/50 {
  --tw-shadow-color: rgb(63 131 248 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}
		.shadow-cyan-500\\/50 {
  --tw-shadow-color: rgb(6 182 212 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}
		.shadow-gray-500\\/50 {
  --tw-shadow-color: rgb(107 114 128 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}
		.shadow-green-500\\/50 {
  --tw-shadow-color: rgb(14 159 110 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}
		.shadow-lime-500\\/50 {
  --tw-shadow-color: rgb(132 204 22 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}
		.shadow-pink-500\\/50 {
  --tw-shadow-color: rgb(231 70 148 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}
		.shadow-primary-500\\/50 {
  --tw-shadow-color: rgb(254 121 93 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}
		.shadow-purple-500\\/50 {
  --tw-shadow-color: rgb(144 97 249 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}
		.shadow-red-500\\/50 {
  --tw-shadow-color: rgb(240 82 82 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}
		.shadow-teal-500\\/50 {
  --tw-shadow-color: rgb(6 148 162 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}
		.shadow-yellow-500\\/50 {
  --tw-shadow-color: rgb(194 120 3 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}
		.outline {
  outline-style: solid;
}
		.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
		.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
		.ring-8 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
		.ring-gray-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}
		.ring-primary-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 121 93 / var(--tw-ring-opacity));
}
		.ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}
		.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
		.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
		.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
		.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
		.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
		.duration-300 {
  transition-duration: 300ms;
}
		.duration-75 {
  transition-duration: 75ms;
}
		.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}
		.first-letter\\:float-left::first-letter {
  float: left;
}
		.first-letter\\:mr-3::first-letter {
  margin-right: 0.75rem;
}
		.first-letter\\:text-7xl::first-letter {
  font-size: 4.5rem;
  line-height: 1;
}
		.first-letter\\:font-bold::first-letter {
  font-weight: 700;
}
		.first-letter\\:text-gray-900::first-letter {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
		.first-line\\:uppercase::first-line {
  text-transform: uppercase;
}
		.first-line\\:tracking-widest::first-line {
  letter-spacing: 0.1em;
}
		.before\\:absolute::before {
  content: var(--tw-content);
  position: absolute;
}
		.before\\:right-0::before {
  content: var(--tw-content);
  right: 0px;
}
		.before\\:z-10::before {
  content: var(--tw-content);
  z-index: 10;
}
		.before\\:block::before {
  content: var(--tw-content);
  display: block;
}
		.before\\:h-full::before {
  content: var(--tw-content);
  height: 100%;
}
		.before\\:shadow-\\[-10px_0_50px_65px_rgba\\(256\\2c 256\\2c 256\\2c 1\\)\\]::before {
  content: var(--tw-content);
  --tw-shadow: -10px 0 50px 65px rgba(256,256,256,1);
  --tw-shadow-colored: -10px 0 50px 65px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
		.before\\:content-\\[\\'\\'\\]::before {
  --tw-content: '';
  content: var(--tw-content);
}
		.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}
		.after\\:left-\\[2px\\]::after {
  content: var(--tw-content);
  left: 2px;
}
		.after\\:left-\\[4px\\]::after {
  content: var(--tw-content);
  left: 4px;
}
		.after\\:top-0::after {
  content: var(--tw-content);
  top: 0px;
}
		.after\\:top-0\\.5::after {
  content: var(--tw-content);
  top: 0.125rem;
}
		.after\\:top-\\[2px\\]::after {
  content: var(--tw-content);
  top: 2px;
}
		.after\\:z-10::after {
  content: var(--tw-content);
  z-index: 10;
}
		.after\\:block::after {
  content: var(--tw-content);
  display: block;
}
		.after\\:h-4::after {
  content: var(--tw-content);
  height: 1rem;
}
		.after\\:h-5::after {
  content: var(--tw-content);
  height: 1.25rem;
}
		.after\\:h-6::after {
  content: var(--tw-content);
  height: 1.5rem;
}
		.after\\:h-full::after {
  content: var(--tw-content);
  height: 100%;
}
		.after\\:w-4::after {
  content: var(--tw-content);
  width: 1rem;
}
		.after\\:w-5::after {
  content: var(--tw-content);
  width: 1.25rem;
}
		.after\\:w-6::after {
  content: var(--tw-content);
  width: 1.5rem;
}
		.after\\:rounded-full::after {
  content: var(--tw-content);
  border-radius: 9999px;
}
		.after\\:border::after {
  content: var(--tw-content);
  border-width: 1px;
}
		.after\\:border-gray-300::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
		.after\\:bg-white::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
		.after\\:shadow-\\[10px_0_50px_65px_rgba\\(256\\2c 256\\2c 256\\2c 1\\)\\]::after {
  content: var(--tw-content);
  --tw-shadow: 10px 0 50px 65px rgba(256,256,256,1);
  --tw-shadow-colored: 10px 0 50px 65px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
		.after\\:transition-all::after {
  content: var(--tw-content);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
		.after\\:content-\\[\\'\\'\\]::after {
  --tw-content: '';
  content: var(--tw-content);
}
		.first\\:rounded-l-full:first-child {
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
}
		.first\\:rounded-l-lg:first-child {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
		.first\\:rounded-t-lg:first-child {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
		.first\\:border-l:first-child {
  border-left-width: 1px;
}
		.last\\:mr-0:last-child {
  margin-right: 0px;
}
		.last\\:rounded-b-lg:last-child {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
		.last\\:rounded-r-full:last-child {
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
}
		.last\\:rounded-r-lg:last-child {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
		.last\\:border-b-0:last-child {
  border-bottom-width: 0px;
}
		.last\\:border-r:last-child {
  border-right-width: 1px;
}
		.odd\\:bg-blue-800:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}
		.odd\\:bg-green-800:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}
		.odd\\:bg-purple-800:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}
		.odd\\:bg-red-800:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}
		.odd\\:bg-white:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
		.odd\\:bg-yellow-800:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}
		.even\\:bg-blue-700:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}
		.even\\:bg-gray-50:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
		.even\\:bg-green-700:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}
		.even\\:bg-purple-700:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}
		.even\\:bg-red-700:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}
		.even\\:bg-yellow-700:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}
		.focus-within\\:border-primary-500:focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(254 121 93 / var(--tw-border-opacity));
}
		.focus-within\\:ring-1:focus-within {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
		.hover\\:border-gray-300:hover {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
		.hover\\:bg-blue-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(225 239 254 / var(--tw-bg-opacity));
}
		.hover\\:bg-blue-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}
		.hover\\:bg-blue-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(164 202 254 / var(--tw-bg-opacity));
}
		.hover\\:bg-blue-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(118 169 250 / var(--tw-bg-opacity));
}
		.hover\\:bg-blue-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}
		.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
		.hover\\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}
		.hover\\:bg-gray-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}
		.hover\\:bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
		.hover\\:bg-gray-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}
		.hover\\:bg-gray-900:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
		.hover\\:bg-green-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(188 240 218 / var(--tw-bg-opacity));
}
		.hover\\:bg-green-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(49 196 141 / var(--tw-bg-opacity));
}
		.hover\\:bg-green-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}
		.hover\\:bg-indigo-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(205 219 254 / var(--tw-bg-opacity));
}
		.hover\\:bg-pink-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(250 209 232 / var(--tw-bg-opacity));
}
		.hover\\:bg-primary-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(255 228 222 / var(--tw-bg-opacity));
}
		.hover\\:bg-primary-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(235 79 39 / var(--tw-bg-opacity));
}
		.hover\\:bg-primary-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(204 69 34 / var(--tw-bg-opacity));
}
		.hover\\:bg-purple-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 215 254 / var(--tw-bg-opacity));
}
		.hover\\:bg-purple-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(172 148 250 / var(--tw-bg-opacity));
}
		.hover\\:bg-purple-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}
		.hover\\:bg-red-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(251 213 213 / var(--tw-bg-opacity));
}
		.hover\\:bg-red-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 180 180 / var(--tw-bg-opacity));
}
		.hover\\:bg-red-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 128 128 / var(--tw-bg-opacity));
}
		.hover\\:bg-red-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}
		.hover\\:bg-transparent:hover {
  background-color: transparent;
}
		.hover\\:bg-yellow-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(252 233 106 / var(--tw-bg-opacity));
}
		.hover\\:bg-yellow-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}
		.hover\\:bg-yellow-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(194 120 3 / var(--tw-bg-opacity));
}
		.hover\\:bg-gradient-to-bl:hover {
  background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));
}
		.hover\\:bg-gradient-to-br:hover {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}
		.hover\\:bg-gradient-to-l:hover {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}
		.hover\\:\\!text-inherit:hover {
  color: inherit !important;
}
		.hover\\:text-black:hover {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
		.hover\\:text-blue-700:hover {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}
		.hover\\:text-blue-900:hover {
  --tw-text-opacity: 1;
  color: rgb(35 56 118 / var(--tw-text-opacity));
}
		.hover\\:text-gray-400:hover {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
		.hover\\:text-gray-600:hover {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}
		.hover\\:text-gray-700:hover {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}
		.hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
		.hover\\:text-green-900:hover {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}
		.hover\\:text-indigo-900:hover {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}
		.hover\\:text-pink-900:hover {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}
		.hover\\:text-primary-700:hover {
  --tw-text-opacity: 1;
  color: rgb(235 79 39 / var(--tw-text-opacity));
}
		.hover\\:text-primary-900:hover {
  --tw-text-opacity: 1;
  color: rgb(165 55 27 / var(--tw-text-opacity));
}
		.hover\\:text-purple-900:hover {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}
		.hover\\:text-red-900:hover {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}
		.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
		.hover\\:text-yellow-900:hover {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}
		.hover\\:underline:hover {
  text-decoration-line: underline;
}
		.focus\\:z-10:focus {
  z-index: 10;
}
		.focus\\:z-40:focus {
  z-index: 40;
}
		.focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}
		.focus\\:border-gray-200:focus {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}
		.focus\\:border-green-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}
		.focus\\:border-green-600:focus {
  --tw-border-opacity: 1;
  border-color: rgb(5 122 85 / var(--tw-border-opacity));
}
		.focus\\:border-primary-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(254 121 93 / var(--tw-border-opacity));
}
		.focus\\:border-primary-600:focus {
  --tw-border-opacity: 1;
  border-color: rgb(239 86 47 / var(--tw-border-opacity));
}
		.focus\\:border-red-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}
		.focus\\:border-red-600:focus {
  --tw-border-opacity: 1;
  border-color: rgb(224 36 36 / var(--tw-border-opacity));
}
		.focus\\:bg-gray-900:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
		.focus\\:text-blue-700:focus {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}
		.focus\\:text-primary-700:focus {
  --tw-text-opacity: 1;
  color: rgb(235 79 39 / var(--tw-text-opacity));
}
		.focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
		.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
		.focus\\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
		.focus\\:ring-1:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
		.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
		.focus\\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
		.focus\\:\\!ring-gray-300:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity)) !important;
}
		.focus\\:ring-blue-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(195 221 253 / var(--tw-ring-opacity));
}
		.focus\\:ring-blue-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}
		.focus\\:ring-blue-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(118 169 250 / var(--tw-ring-opacity));
}
		.focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));
}
		.focus\\:ring-cyan-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(103 232 249 / var(--tw-ring-opacity));
}
		.focus\\:ring-gray-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));
}
		.focus\\:ring-gray-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}
		.focus\\:ring-gray-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(156 163 175 / var(--tw-ring-opacity));
}
		.focus\\:ring-green-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(188 240 218 / var(--tw-ring-opacity));
}
		.focus\\:ring-green-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));
}
		.focus\\:ring-green-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(49 196 141 / var(--tw-ring-opacity));
}
		.focus\\:ring-green-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(14 159 110 / var(--tw-ring-opacity));
}
		.focus\\:ring-indigo-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(141 162 251 / var(--tw-ring-opacity));
}
		.focus\\:ring-lime-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(217 249 157 / var(--tw-ring-opacity));
}
		.focus\\:ring-lime-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(190 242 100 / var(--tw-ring-opacity));
}
		.focus\\:ring-orange-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 90 31 / var(--tw-ring-opacity));
}
		.focus\\:ring-pink-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 209 232 / var(--tw-ring-opacity));
}
		.focus\\:ring-pink-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 217 / var(--tw-ring-opacity));
}
		.focus\\:ring-pink-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(241 126 184 / var(--tw-ring-opacity));
}
		.focus\\:ring-primary-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 213 204 / var(--tw-ring-opacity));
}
		.focus\\:ring-primary-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 188 173 / var(--tw-ring-opacity));
}
		.focus\\:ring-primary-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 121 93 / var(--tw-ring-opacity));
}
		.focus\\:ring-primary-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(235 79 39 / var(--tw-ring-opacity));
}
		.focus\\:ring-purple-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(220 215 254 / var(--tw-ring-opacity));
}
		.focus\\:ring-purple-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}
		.focus\\:ring-purple-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(172 148 250 / var(--tw-ring-opacity));
}
		.focus\\:ring-purple-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(144 97 249 / var(--tw-ring-opacity));
}
		.focus\\:ring-red-100:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 232 232 / var(--tw-ring-opacity));
}
		.focus\\:ring-red-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));
}
		.focus\\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));
}
		.focus\\:ring-red-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(240 82 82 / var(--tw-ring-opacity));
}
		.focus\\:ring-teal-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));
}
		.focus\\:ring-teal-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(6 148 162 / var(--tw-ring-opacity));
}
		.focus\\:ring-yellow-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));
}
		.focus\\:ring-yellow-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(227 160 8 / var(--tw-ring-opacity));
}
		.focus\\:ring-yellow-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(194 120 3 / var(--tw-ring-opacity));
}
		.disabled\\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}
		.disabled\\:opacity-50:disabled {
  opacity: 0.5;
}
		.group:first-child .group-first\\:rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
		.group:first-child .group-first\\:rounded-t-xl {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}
		.group:first-child .group-first\\:border-t {
  border-top-width: 1px;
}
		.group:last-child .group-last\\:rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
		.group:hover .group-hover\\:rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.group:hover .group-hover\\:bg-white\\/50 {
  background-color: rgb(255 255 255 / 0.5);
}
		.group:hover .group-hover\\:\\!bg-opacity-0 {
  --tw-bg-opacity: 0 !important;
}
		.group:hover .group-hover\\:\\!text-inherit {
  color: inherit !important;
}
		.group:hover .group-hover\\:text-primary-600 {
  --tw-text-opacity: 1;
  color: rgb(239 86 47 / var(--tw-text-opacity));
}
		.group:focus .group-focus\\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
		.group:focus .group-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
		.group:focus .group-focus\\:ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}
		.peer:checked ~ .peer-checked\\:bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}
		.peer:checked ~ .peer-checked\\:bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}
		.peer:checked ~ .peer-checked\\:bg-orange-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 90 31 / var(--tw-bg-opacity));
}
		.peer:checked ~ .peer-checked\\:bg-primary-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 86 47 / var(--tw-bg-opacity));
}
		.peer:checked ~ .peer-checked\\:bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}
		.peer:checked ~ .peer-checked\\:bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}
		.peer:checked ~ .peer-checked\\:bg-teal-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 116 129 / var(--tw-bg-opacity));
}
		.peer:checked ~ .peer-checked\\:bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}
		.peer:checked ~ .peer-checked\\:after\\:translate-x-full::after {
  content: var(--tw-content);
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.peer:checked ~ .peer-checked\\:after\\:border-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}
		.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:top-1\\/2 {
  top: 50%;
}
		.peer:placeholder-shown ~ .peer-placeholder-shown\\:top-1\\/2 {
  top: 50%;
}
		.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.peer:placeholder-shown ~ .peer-placeholder-shown\\:-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.peer:placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.peer:placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.peer:focus ~ .peer-focus\\:left-0 {
  left: 0px;
}
		.peer:focus ~ .peer-focus\\:top-2 {
  top: 0.5rem;
}
		.peer:focus ~ .peer-focus\\:-translate-y-4 {
  --tw-translate-y: -1rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.peer:focus ~ .peer-focus\\:-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.peer:focus ~ .peer-focus\\:scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
		.peer:focus ~ .peer-focus\\:px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
		.peer:focus ~ .peer-focus\\:text-primary-600 {
  --tw-text-opacity: 1;
  color: rgb(239 86 47 / var(--tw-text-opacity));
}
		.peer:focus ~ .peer-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
		.peer:focus ~ .peer-focus\\:ring-blue-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}
		.peer:focus ~ .peer-focus\\:ring-green-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));
}
		.peer:focus ~ .peer-focus\\:ring-orange-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 186 140 / var(--tw-ring-opacity));
}
		.peer:focus ~ .peer-focus\\:ring-primary-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 213 204 / var(--tw-ring-opacity));
}
		.peer:focus ~ .peer-focus\\:ring-purple-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}
		.peer:focus ~ .peer-focus\\:ring-red-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));
}
		.peer:focus ~ .peer-focus\\:ring-teal-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));
}
		.peer:focus ~ .peer-focus\\:ring-yellow-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:block) {
  display: block;
}
		:is(.dark .dark\\:hidden) {
  display: none;
}
		:is(.dark .dark\\:divide-blue-700) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(26 86 219 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:divide-blue-800) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(30 66 159 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:divide-gray-600) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:divide-gray-700) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:divide-gray-800) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:divide-green-700) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(4 108 78 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:divide-green-800) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(3 84 63 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:divide-indigo-700) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(81 69 205 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:divide-indigo-800) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(66 56 157 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:divide-orange-800) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(138 44 13 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:divide-pink-700) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(191 18 93 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:divide-pink-800) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(153 21 75 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:divide-primary-200) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(255 228 222 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:divide-purple-700) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(108 43 217 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:divide-purple-800) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(85 33 181 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:divide-red-700) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(200 30 30 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:divide-red-800) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(155 28 28 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:divide-yellow-700) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(142 75 16 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:divide-yellow-800) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(114 59 19 / var(--tw-divide-opacity));
}
		:is(.dark .dark\\:\\!border-gray-600) {
  --tw-border-opacity: 1 !important;
  border-color: rgb(75 85 99 / var(--tw-border-opacity)) !important;
}
		:is(.dark .dark\\:border-blue-400) {
  --tw-border-opacity: 1;
  border-color: rgb(118 169 250 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-blue-500) {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-blue-800) {
  --tw-border-opacity: 1;
  border-color: rgb(30 66 159 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-gray-500) {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-gray-600) {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-gray-700) {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-gray-800) {
  --tw-border-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-gray-900) {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-green-400) {
  --tw-border-opacity: 1;
  border-color: rgb(49 196 141 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-green-500) {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-green-800) {
  --tw-border-opacity: 1;
  border-color: rgb(3 84 63 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-indigo-400) {
  --tw-border-opacity: 1;
  border-color: rgb(141 162 251 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-indigo-800) {
  --tw-border-opacity: 1;
  border-color: rgb(66 56 157 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-orange-800) {
  --tw-border-opacity: 1;
  border-color: rgb(138 44 13 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-pink-400) {
  --tw-border-opacity: 1;
  border-color: rgb(241 126 184 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-pink-800) {
  --tw-border-opacity: 1;
  border-color: rgb(153 21 75 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-primary-200) {
  --tw-border-opacity: 1;
  border-color: rgb(255 228 222 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-primary-400) {
  --tw-border-opacity: 1;
  border-color: rgb(255 188 173 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-primary-500) {
  --tw-border-opacity: 1;
  border-color: rgb(254 121 93 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-purple-400) {
  --tw-border-opacity: 1;
  border-color: rgb(172 148 250 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-purple-800) {
  --tw-border-opacity: 1;
  border-color: rgb(85 33 181 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-red-400) {
  --tw-border-opacity: 1;
  border-color: rgb(249 128 128 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-red-500) {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-red-800) {
  --tw-border-opacity: 1;
  border-color: rgb(155 28 28 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-white) {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-yellow-300) {
  --tw-border-opacity: 1;
  border-color: rgb(250 202 21 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-yellow-800) {
  --tw-border-opacity: 1;
  border-color: rgb(114 59 19 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-r-gray-600) {
  --tw-border-opacity: 1;
  border-right-color: rgb(75 85 99 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:border-r-gray-700) {
  --tw-border-opacity: 1;
  border-right-color: rgb(55 65 81 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:bg-blue-400) {
  --tw-bg-opacity: 1;
  background-color: rgb(118 169 250 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-blue-500) {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-blue-600) {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-blue-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-blue-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(35 56 118 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-gray-200) {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-gray-300) {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-gray-500) {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-gray-600) {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-gray-700) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-gray-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-gray-800\\/30) {
  background-color: rgb(31 41 55 / 0.3);
}
		:is(.dark .dark\\:bg-gray-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-green-400) {
  --tw-bg-opacity: 1;
  background-color: rgb(49 196 141 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-green-500) {
  --tw-bg-opacity: 1;
  background-color: rgb(14 159 110 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-green-600) {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-green-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-green-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(1 71 55 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-indigo-400) {
  --tw-bg-opacity: 1;
  background-color: rgb(141 162 251 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-indigo-500) {
  --tw-bg-opacity: 1;
  background-color: rgb(104 117 245 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-indigo-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-indigo-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(54 47 120 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-inherit) {
  background-color: inherit;
}
		:is(.dark .dark\\:bg-orange-700) {
  --tw-bg-opacity: 1;
  background-color: rgb(180 52 3 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-orange-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(138 44 13 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-pink-400) {
  --tw-bg-opacity: 1;
  background-color: rgb(241 126 184 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-pink-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(117 26 61 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-primary-200) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 228 222 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-primary-400) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 188 173 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-primary-500) {
  --tw-bg-opacity: 1;
  background-color: rgb(254 121 93 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-primary-600) {
  --tw-bg-opacity: 1;
  background-color: rgb(239 86 47 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-primary-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(204 69 34 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-primary-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(165 55 27 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-purple-400) {
  --tw-bg-opacity: 1;
  background-color: rgb(172 148 250 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-purple-500) {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-purple-600) {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-purple-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-purple-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(74 29 150 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-red-500) {
  --tw-bg-opacity: 1;
  background-color: rgb(240 82 82 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-red-600) {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-red-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-red-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(119 29 29 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-transparent) {
  background-color: transparent;
}
		:is(.dark .dark\\:bg-yellow-400) {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-yellow-600) {
  --tw-bg-opacity: 1;
  background-color: rgb(159 88 10 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-yellow-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-yellow-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(99 49 18 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:bg-opacity-80) {
  --tw-bg-opacity: 0.8;
}
		:is(.dark .dark\\:fill-gray-300) {
  fill: #D1D5DB;
}
		:is(.dark .dark\\:\\!text-white) {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
}
		:is(.dark .dark\\:text-blue-100) {
  --tw-text-opacity: 1;
  color: rgb(225 239 254 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-blue-200) {
  --tw-text-opacity: 1;
  color: rgb(195 221 253 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-blue-300) {
  --tw-text-opacity: 1;
  color: rgb(164 202 254 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-blue-400) {
  --tw-text-opacity: 1;
  color: rgb(118 169 250 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-blue-500) {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-gray-100) {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-gray-200) {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-gray-300) {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-gray-400) {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-gray-500) {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-gray-600) {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-gray-700) {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-gray-900) {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-green-100) {
  --tw-text-opacity: 1;
  color: rgb(222 247 236 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-green-200) {
  --tw-text-opacity: 1;
  color: rgb(188 240 218 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-green-300) {
  --tw-text-opacity: 1;
  color: rgb(132 225 188 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-green-400) {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-green-500) {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-indigo-100) {
  --tw-text-opacity: 1;
  color: rgb(229 237 255 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-indigo-200) {
  --tw-text-opacity: 1;
  color: rgb(205 219 254 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-indigo-300) {
  --tw-text-opacity: 1;
  color: rgb(180 198 252 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-indigo-400) {
  --tw-text-opacity: 1;
  color: rgb(141 162 251 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-orange-200) {
  --tw-text-opacity: 1;
  color: rgb(252 217 189 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-orange-400) {
  --tw-text-opacity: 1;
  color: rgb(255 138 76 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-pink-100) {
  --tw-text-opacity: 1;
  color: rgb(252 232 243 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-pink-300) {
  --tw-text-opacity: 1;
  color: rgb(248 180 217 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-pink-400) {
  --tw-text-opacity: 1;
  color: rgb(241 126 184 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-primary-200) {
  --tw-text-opacity: 1;
  color: rgb(255 228 222 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-primary-300) {
  --tw-text-opacity: 1;
  color: rgb(255 213 204 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-primary-400) {
  --tw-text-opacity: 1;
  color: rgb(255 188 173 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-primary-500) {
  --tw-text-opacity: 1;
  color: rgb(254 121 93 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-primary-700) {
  --tw-text-opacity: 1;
  color: rgb(235 79 39 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-primary-800) {
  --tw-text-opacity: 1;
  color: rgb(204 69 34 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-primary-900) {
  --tw-text-opacity: 1;
  color: rgb(165 55 27 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-purple-100) {
  --tw-text-opacity: 1;
  color: rgb(237 235 254 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-purple-200) {
  --tw-text-opacity: 1;
  color: rgb(220 215 254 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-purple-300) {
  --tw-text-opacity: 1;
  color: rgb(202 191 253 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-purple-400) {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-red-100) {
  --tw-text-opacity: 1;
  color: rgb(253 232 232 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-red-200) {
  --tw-text-opacity: 1;
  color: rgb(251 213 213 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-red-300) {
  --tw-text-opacity: 1;
  color: rgb(248 180 180 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-red-400) {
  --tw-text-opacity: 1;
  color: rgb(249 128 128 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-red-500) {
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-white) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-yellow-100) {
  --tw-text-opacity: 1;
  color: rgb(253 246 178 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-yellow-200) {
  --tw-text-opacity: 1;
  color: rgb(252 233 106 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:text-yellow-300) {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:decoration-blue-600) {
  text-decoration-color: #1C64F2;
}
		:is(.dark .dark\\:placeholder-gray-400)::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}
		:is(.dark .dark\\:placeholder-gray-400)::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}
		:is(.dark .dark\\:placeholder-green-500)::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(14 159 110 / var(--tw-placeholder-opacity));
}
		:is(.dark .dark\\:placeholder-green-500)::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(14 159 110 / var(--tw-placeholder-opacity));
}
		:is(.dark .dark\\:placeholder-red-500)::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(240 82 82 / var(--tw-placeholder-opacity));
}
		:is(.dark .dark\\:placeholder-red-500)::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(240 82 82 / var(--tw-placeholder-opacity));
}
		:is(.dark .dark\\:opacity-25) {
  opacity: 0.25;
}
		:is(.dark .dark\\:shadow-blue-800\\/80) {
  --tw-shadow-color: rgb(30 66 159 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}
		:is(.dark .dark\\:shadow-cyan-800\\/80) {
  --tw-shadow-color: rgb(21 94 117 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}
		:is(.dark .dark\\:shadow-gray-800\\/80) {
  --tw-shadow-color: rgb(31 41 55 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}
		:is(.dark .dark\\:shadow-green-800\\/80) {
  --tw-shadow-color: rgb(3 84 63 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}
		:is(.dark .dark\\:shadow-lime-800\\/80) {
  --tw-shadow-color: rgb(63 98 18 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}
		:is(.dark .dark\\:shadow-pink-800\\/80) {
  --tw-shadow-color: rgb(153 21 75 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}
		:is(.dark .dark\\:shadow-primary-800\\/80) {
  --tw-shadow-color: rgb(204 69 34 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}
		:is(.dark .dark\\:shadow-purple-800\\/80) {
  --tw-shadow-color: rgb(85 33 181 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}
		:is(.dark .dark\\:shadow-red-800\\/80) {
  --tw-shadow-color: rgb(155 28 28 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}
		:is(.dark .dark\\:shadow-teal-800\\/80) {
  --tw-shadow-color: rgb(5 80 92 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}
		:is(.dark .dark\\:shadow-yellow-800\\/80) {
  --tw-shadow-color: rgb(114 59 19 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}
		:is(.dark .dark\\:ring-gray-500) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:ring-gray-900) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(17 24 39 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:ring-primary-500) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 121 93 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:ring-offset-gray-800) {
  --tw-ring-offset-color: #1F2937;
}
		:is(.dark .dark\\:first-letter\\:text-gray-100)::first-letter {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:before\\:shadow-\\[-10px_0_50px_65px_rgba\\(16\\2c 24\\2c 39\\2c 1\\)\\])::before {
  content: var(--tw-content);
  --tw-shadow: -10px 0 50px 65px rgba(16,24,39,1);
  --tw-shadow-colored: -10px 0 50px 65px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
		:is(.dark .dark\\:after\\:shadow-\\[10px_0_50px_65px_rgba\\(16\\2c 24\\2c 39\\2c 1\\)\\])::after {
  content: var(--tw-content);
  --tw-shadow: 10px 0 50px 65px rgba(16,24,39,1);
  --tw-shadow-colored: 10px 0 50px 65px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
		:is(.dark .dark\\:last\\:border-r-gray-500:last-child) {
  --tw-border-opacity: 1;
  border-right-color: rgb(107 114 128 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:last\\:border-r-gray-600:last-child) {
  --tw-border-opacity: 1;
  border-right-color: rgb(75 85 99 / var(--tw-border-opacity));
}
		:is(.dark .odd\\:dark\\:bg-blue-800):nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}
		:is(.dark .odd\\:dark\\:bg-gray-800):nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}
		:is(.dark .odd\\:dark\\:bg-green-800):nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}
		:is(.dark .odd\\:dark\\:bg-purple-800):nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}
		:is(.dark .odd\\:dark\\:bg-red-800):nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}
		:is(.dark .odd\\:dark\\:bg-yellow-800):nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}
		:is(.dark .even\\:dark\\:bg-blue-700):nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}
		:is(.dark .even\\:dark\\:bg-gray-700):nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}
		:is(.dark .even\\:dark\\:bg-green-700):nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}
		:is(.dark .even\\:dark\\:bg-purple-700):nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}
		:is(.dark .even\\:dark\\:bg-red-700):nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}
		:is(.dark .even\\:dark\\:bg-yellow-700):nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:focus-within\\:border-primary-500:focus-within) {
  --tw-border-opacity: 1;
  border-color: rgb(254 121 93 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:hover\\:border-gray-500:hover) {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:hover\\:border-gray-600:hover) {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:hover\\:border-gray-700:hover) {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:hover\\:bg-blue-600:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-blue-700:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-blue-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-gray-600:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-gray-700:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-gray-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-green-600:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-green-700:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-green-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-indigo-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-pink-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(153 21 75 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-primary-600:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(239 86 47 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-primary-700:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(235 79 39 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-primary-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(204 69 34 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-purple-500:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-purple-700:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-purple-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-red-600:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-red-700:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-red-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-yellow-400:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:bg-yellow-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}
		:is(.dark .hover\\:dark\\:bg-gray-800):hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}
		:is(.dark .dark\\:hover\\:text-blue-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(164 202 254 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:hover\\:text-gray-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:hover\\:text-green-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(132 225 188 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:hover\\:text-indigo-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(180 198 252 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:hover\\:text-pink-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(248 180 217 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:hover\\:text-primary-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(255 213 204 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:hover\\:text-primary-900:hover) {
  --tw-text-opacity: 1;
  color: rgb(165 55 27 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:hover\\:text-purple-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(202 191 253 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:hover\\:text-red-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(248 180 180 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:hover\\:text-white:hover) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:hover\\:text-yellow-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:focus\\:border-blue-500:focus) {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:focus\\:border-green-500:focus) {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:focus\\:border-primary-500:focus) {
  --tw-border-opacity: 1;
  border-color: rgb(254 121 93 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:focus\\:border-red-500:focus) {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}
		:is(.dark .dark\\:focus\\:text-white:focus) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
		:is(.dark .dark\\:focus\\:ring-blue-500:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-blue-600:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(28 100 242 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-blue-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-cyan-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(21 94 117 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-gray-500:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-gray-700:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-gray-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-green-500:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(14 159 110 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-green-600:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 122 85 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-green-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-lime-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 98 18 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-orange-600:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(208 56 1 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-pink-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(153 21 75 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-primary-500:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 121 93 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-primary-600:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(239 86 47 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-primary-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(204 69 34 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-purple-600:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 58 242 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-purple-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-purple-900:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(74 29 150 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-red-400:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-red-500:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(240 82 82 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-red-600:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(224 36 36 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-red-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-red-900:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(119 29 29 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-teal-600:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(4 116 129 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-teal-700:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 102 114 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-teal-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-yellow-600:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(159 88 10 / var(--tw-ring-opacity));
}
		:is(.dark .dark\\:focus\\:ring-yellow-900:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 49 18 / var(--tw-ring-opacity));
}
		:is(.dark .group:hover .dark\\:group-hover\\:bg-gray-800\\/60) {
  background-color: rgb(31 41 55 / 0.6);
}
		:is(.dark .group:hover .dark\\:group-hover\\:text-primary-500) {
  --tw-text-opacity: 1;
  color: rgb(254 121 93 / var(--tw-text-opacity));
}
		:is(.dark .group:focus .dark\\:group-focus\\:ring-gray-800\\/70) {
  --tw-ring-color: rgb(31 41 55 / 0.7);
}
		.peer:focus ~ :is(.dark .peer-focus\\:dark\\:text-primary-500) {
  --tw-text-opacity: 1;
  color: rgb(254 121 93 / var(--tw-text-opacity));
}
		:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-blue-800) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));
}
		:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-green-800) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));
}
		:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-orange-800) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(138 44 13 / var(--tw-ring-opacity));
}
		:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-primary-800) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(204 69 34 / var(--tw-ring-opacity));
}
		:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-purple-800) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}
		:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-red-800) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));
}
		:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-teal-800) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));
}
		:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-yellow-800) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity));
}
		@media (min-width: 640px) {

  .sm\\:order-last {
    order: 9999;
  }

  .sm\\:mb-0 {
    margin-bottom: 0px;
  }

  .sm\\:flex {
    display: flex;
  }

  .sm\\:grid {
    display: grid;
  }

  .sm\\:h-10 {
    height: 2.5rem;
  }

  .sm\\:h-6 {
    height: 1.5rem;
  }

  .sm\\:h-64 {
    height: 16rem;
  }

  .sm\\:h-7 {
    height: 1.75rem;
  }

  .sm\\:w-10 {
    width: 2.5rem;
  }

  .sm\\:w-6 {
    width: 1.5rem;
  }

  .sm\\:w-96 {
    width: 24rem;
  }

  .sm\\:w-auto {
    width: auto;
  }

  .sm\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sm\\:divide-x > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-x-reverse: 0;
    border-right-width: calc(1px * var(--tw-divide-x-reverse));
    border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
  }

  .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }

  .sm\\:p-5 {
    padding: 1.25rem;
  }

  .sm\\:p-6 {
    padding: 1.5rem;
  }

  .sm\\:p-8 {
    padding: 2rem;
  }

  .sm\\:px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .sm\\:pl-4 {
    padding-left: 1rem;
  }

  .sm\\:pr-4 {
    padding-right: 1rem;
  }

  .sm\\:pr-8 {
    padding-right: 2rem;
  }

  .sm\\:text-center {
    text-align: center;
  }

  .sm\\:text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .sm\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .sm\\:text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .sm\\:ring-8 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }

  .first\\:sm\\:pl-0:first-child {
    padding-left: 0px;
  }

  .last\\:sm\\:pr-0:last-child {
    padding-right: 0px;
  }
}
		@media (min-width: 768px) {

  .md\\:inset-0 {
    inset: 0px;
  }

  .md\\:mb-0 {
    margin-bottom: 0px;
  }

  .md\\:ml-2 {
    margin-left: 0.5rem;
  }

  .md\\:mr-6 {
    margin-right: 1.5rem;
  }

  .md\\:mt-0 {
    margin-top: 0px;
  }

  .md\\:block {
    display: block;
  }

  .md\\:flex {
    display: flex;
  }

  .md\\:grid {
    display: grid;
  }

  .md\\:hidden {
    display: none;
  }

  .md\\:h-\\[21px\\] {
    height: 21px;
  }

  .md\\:h-\\[262px\\] {
    height: 262px;
  }

  .md\\:h-\\[278px\\] {
    height: 278px;
  }

  .md\\:h-\\[294px\\] {
    height: 294px;
  }

  .md\\:h-\\[42px\\] {
    height: 42px;
  }

  .md\\:h-\\[654px\\] {
    height: 654px;
  }

  .md\\:h-\\[682px\\] {
    height: 682px;
  }

  .md\\:h-\\[8px\\] {
    height: 8px;
  }

  .md\\:h-\\[95px\\] {
    height: 95px;
  }

  .md\\:h-auto {
    height: auto;
  }

  .md\\:h-full {
    height: 100%;
  }

  .md\\:w-1\\/3 {
    width: 33.333333%;
  }

  .md\\:w-2\\/3 {
    width: 66.666667%;
  }

  .md\\:w-48 {
    width: 12rem;
  }

  .md\\:w-\\[96px\\] {
    width: 96px;
  }

  .md\\:w-auto {
    width: auto;
  }

  .md\\:max-w-\\[142px\\] {
    max-width: 142px;
  }

  .md\\:max-w-\\[512px\\] {
    max-width: 512px;
  }

  .md\\:max-w-\\[597px\\] {
    max-width: 597px;
  }

  .md\\:max-w-xl {
    max-width: 36rem;
  }

  .md\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .md\\:flex-row {
    flex-direction: row;
  }

  .md\\:flex-row-reverse {
    flex-direction: row-reverse;
  }

  .md\\:items-center {
    align-items: center;
  }

  .md\\:justify-between {
    justify-content: space-between;
  }

  .md\\:gap-8 {
    gap: 2rem;
  }

  .md\\:gap-x-0 {
    -moz-column-gap: 0px;
         column-gap: 0px;
  }

  .md\\:space-x-3 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.75rem * var(--tw-space-x-reverse));
    margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:space-x-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem * var(--tw-space-x-reverse));
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .md\\:divide-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-y-reverse: 0;
    border-top-width: calc(0px * calc(1 - var(--tw-divide-y-reverse)));
    border-bottom-width: calc(0px * var(--tw-divide-y-reverse));
  }

  .md\\:rounded-none {
    border-radius: 0px;
  }

  .md\\:rounded-l-lg {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .md\\:rounded-r-lg {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  .md\\:border-0 {
    border-width: 0px;
  }

  .md\\:bg-transparent {
    background-color: transparent;
  }

  .md\\:p-0 {
    padding: 0px;
  }

  .md\\:p-6 {
    padding: 1.5rem;
  }

  .md\\:p-8 {
    padding: 2rem;
  }

  .md\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .md\\:py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .md\\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .md\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .md\\:font-medium {
    font-weight: 500;
  }

  .md\\:text-primary-700 {
    --tw-text-opacity: 1;
    color: rgb(235 79 39 / var(--tw-text-opacity));
  }

  .md\\:hover\\:bg-transparent:hover {
    background-color: transparent;
  }

  .md\\:hover\\:text-primary-700:hover {
    --tw-text-opacity: 1;
    color: rgb(235 79 39 / var(--tw-text-opacity));
  }

  :is(.dark .md\\:dark\\:bg-transparent) {
    background-color: transparent;
  }

  :is(.dark .md\\:dark\\:text-white) {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  :is(.dark .md\\:dark\\:hover\\:bg-transparent:hover) {
    background-color: transparent;
  }

  :is(.dark .md\\:dark\\:hover\\:text-white:hover) {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
}
		@media (min-width: 1024px) {

  .lg\\:max-w-7xl {
    max-width: 80rem;
  }
}
		@media (min-width: 1280px) {

  .xl\\:h-80 {
    height: 20rem;
  }
}
		@media (min-width: 1536px) {

  .\\32xl\\:h-96 {
    height: 24rem;
  }
}
	</style><style data-svelte-h="svelte-1xc3lmp">button {
          border: unset;
          border-radius: unset;
          height: unset;
        }
        .main-body {
            width: 70%;
            margin: auto;
            background-color: rgb(228, 228, 228);
            padding: 1rem;
            margin-top: 1rem;
            height: 96svh;
            height: 96vh;
            overflow-y: auto;
            border-radius: 1rem;
        }
        .stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            row-gap: 2rem;
            width: 100%;
            justify-content: center;
            justify-items: center;
        }
        @media (max-width: 768px) {
            .main-body {
                width: 90%;
            }
            .stats {
                display: grid;
                grid-template-columns: 65% 35%;
                row-gap: 2rem;
                justify-items: normal;
            }
        }
        .footer-nav {
            position: relative;
            float: right;
            padding: 1rem;
        }</style><!-- HEAD_svelte-1tptmaj_END -->`, ""}`;
});
export {
  Page as default
};