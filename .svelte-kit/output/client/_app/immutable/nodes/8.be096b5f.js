import{s as zt,e as gt,i as M,d as h,C as At,D as Rt,E as ct,F as bt,r as wt,f as y,g as m,h as G,G as Lt,H as Zt,B as rt,u as ut,v as ht,w as ft,I as jr,J as mr,K as Kt,L as ot,p as Br,a as z,c as E,j as B,x as p,M as Qt,z as Fr,o as kr,N as Pr,O as Yt,P as Xt,y as Mt,Q as er,l as V,m as W,n as $,R as Ir,A as Q,S as xr,k as _r}from"../chunks/scheduler.ce5fb7fd.js";import{S as jt,i as Bt,a as Y,g as _t,t as D,c as Ct,f as Nt,b as yt,d as mt,m as kt,e as xt}from"../chunks/index.cdd0258f.js";import{e as Dt}from"../chunks/each.e59479a4.js";import{g as Ht,a as Tr,s as Gr,f as Rr,b as Lr,c as Yr}from"../chunks/index.8bec06ac.js";import{w as Ot}from"../chunks/index.4afc524e.js";import{a as Xr}from"../chunks/js.cookie.edb2da2a.js";function Nr(){for(var e=0,t,r,o="";e<arguments.length;)(t=arguments[e++])&&(r=Cr(t))&&(o&&(o+=" "),o+=r);return o}function Cr(e){if(typeof e=="string")return e;for(var t,r="",o=0;o<e.length;o++)e[o]&&(t=Cr(e[o]))&&(r&&(r+=" "),r+=t);return r}var $t="-";function Dr(e){var t=Or(e),r=e.conflictingClassGroups,o=e.conflictingClassGroupModifiers,n=o===void 0?{}:o;function a(l){var d=l.split($t);return d[0]===""&&d.length!==1&&d.shift(),zr(d,t)||Hr(l)}function i(l,d){var c=r[l]||[];return d&&n[l]?[].concat(c,n[l]):c}return{getClassGroupId:a,getConflictingClassGroupIds:i}}function zr(e,t){var i;if(e.length===0)return t.classGroupId;var r=e[0],o=t.nextPart.get(r),n=o?zr(e.slice(1),o):void 0;if(n)return n;if(t.validators.length!==0){var a=e.join($t);return(i=t.validators.find(function(l){var d=l.validator;return d(a)}))==null?void 0:i.classGroupId}}var or=/^\[(.+)\]$/;function Hr(e){if(or.test(e)){var t=or.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}function Or(e){var t=e.theme,r=e.prefix,o={nextPart:new Map,validators:[]},n=Vr(Object.entries(e.classGroups),r);return n.forEach(function(a){var i=a[0],l=a[1];qt(l,o,i,t)}),o}function qt(e,t,r,o){e.forEach(function(n){if(typeof n=="string"){var a=n===""?t:ar(t,n);a.classGroupId=r;return}if(typeof n=="function"){if(Ur(n)){qt(n(o),t,r,o);return}t.validators.push({validator:n,classGroupId:r});return}Object.entries(n).forEach(function(i){var l=i[0],d=i[1];qt(d,ar(t,l),r,o)})})}function ar(e,t){var r=e;return t.split($t).forEach(function(o){r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r}function Ur(e){return e.isThemeGetter}function Vr(e,t){return t?e.map(function(r){var o=r[0],n=r[1],a=n.map(function(i){return typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(function(l){var d=l[0],c=l[1];return[t+d,c]})):i});return[o,a]}):e}function Wr(e){if(e<1)return{get:function(){},set:function(){}};var t=0,r=new Map,o=new Map;function n(a,i){r.set(a,i),t++,t>e&&(t=0,o=r,r=new Map)}return{get:function(i){var l=r.get(i);if(l!==void 0)return l;if((l=o.get(i))!==void 0)return n(i,l),l},set:function(i,l){r.has(i)?r.set(i,l):n(i,l)}}}var Er="!";function qr(e){var t=e.separator||":",r=t.length===1,o=t[0],n=t.length;return function(i){for(var l=[],d=0,c=0,g,s=0;s<i.length;s++){var b=i[s];if(d===0){if(b===o&&(r||i.slice(s,s+n)===t)){l.push(i.slice(c,s)),c=s+n;continue}if(b==="/"){g=s;continue}}b==="["?d++:b==="]"&&d--}var u=l.length===0?i:i.substring(c),w=u.startsWith(Er),v=w?u.substring(1):u,f=g&&g>c?g-c:void 0;return{modifiers:l,hasImportantModifier:w,baseClassName:v,maybePostfixModifierPosition:f}}}function Jr(e){if(e.length<=1)return e;var t=[],r=[];return e.forEach(function(o){var n=o[0]==="[";n?(t.push.apply(t,r.sort().concat([o])),r=[]):r.push(o)}),t.push.apply(t,r.sort()),t}function Zr(e){return{cache:Wr(e.cacheSize),splitModifiers:qr(e),...Dr(e)}}var Kr=/\s+/;function Qr(e,t){var r=t.splitModifiers,o=t.getClassGroupId,n=t.getConflictingClassGroupIds,a=new Set;return e.trim().split(Kr).map(function(i){var l=r(i),d=l.modifiers,c=l.hasImportantModifier,g=l.baseClassName,s=l.maybePostfixModifierPosition,b=o(s?g.substring(0,s):g),u=!!s;if(!b){if(!s)return{isTailwindClass:!1,originalClassName:i};if(b=o(g),!b)return{isTailwindClass:!1,originalClassName:i};u=!1}var w=Jr(d).join(":"),v=c?w+Er:w;return{isTailwindClass:!0,modifierId:v,classGroupId:b,originalClassName:i,hasPostfixModifier:u}}).reverse().filter(function(i){if(!i.isTailwindClass)return!0;var l=i.modifierId,d=i.classGroupId,c=i.hasPostfixModifier,g=l+d;return a.has(g)?!1:(a.add(g),n(d,c).forEach(function(s){return a.add(l+s)}),!0)}).reverse().map(function(i){return i.originalClassName}).join(" ")}function $r(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o,n,a,i=l;function l(c){var g=t[0],s=t.slice(1),b=s.reduce(function(u,w){return w(u)},g());return o=Zr(b),n=o.cache.get,a=o.cache.set,i=d,d(c)}function d(c){var g=n(c);if(g)return g;var s=Qr(c,o);return a(c,s),s}return function(){return i(Nr.apply(null,arguments))}}function et(e){var t=function(o){return o[e]||[]};return t.isThemeGetter=!0,t}var Ar=/^\[(?:([a-z-]+):)?(.+)\]$/i,tn=/^\d+\/\d+$/,rn=new Set(["px","full","screen"]),nn=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,en=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,on=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function vt(e){return St(e)||rn.has(e)||tn.test(e)||Jt(e)}function Jt(e){return Ft(e,"length",gn)}function an(e){return Ft(e,"size",Sr)}function dn(e){return Ft(e,"position",Sr)}function ln(e){return Ft(e,"url",pn)}function Gt(e){return Ft(e,"number",St)}function St(e){return!Number.isNaN(Number(e))}function cn(e){return e.endsWith("%")&&St(e.slice(0,-1))}function It(e){return ir(e)||Ft(e,"number",ir)}function U(e){return Ar.test(e)}function Tt(){return!0}function Et(e){return nn.test(e)}function sn(e){return Ft(e,"",bn)}function Ft(e,t,r){var o=Ar.exec(e);return o?o[1]?o[1]===t:r(o[2]):!1}function gn(e){return en.test(e)}function Sr(){return!1}function pn(e){return e.startsWith("url(")}function ir(e){return Number.isInteger(Number(e))}function bn(e){return on.test(e)}function wn(){var e=et("colors"),t=et("spacing"),r=et("blur"),o=et("brightness"),n=et("borderColor"),a=et("borderRadius"),i=et("borderSpacing"),l=et("borderWidth"),d=et("contrast"),c=et("grayscale"),g=et("hueRotate"),s=et("invert"),b=et("gap"),u=et("gradientColorStops"),w=et("gradientColorStopPositions"),v=et("inset"),f=et("margin"),I=et("opacity"),L=et("padding"),_=et("saturate"),C=et("scale"),k=et("sepia"),F=et("skew"),N=et("space"),q=et("translate"),tt=function(){return["auto","contain","none"]},X=function(){return["auto","hidden","clip","visible","scroll"]},j=function(){return["auto",U,t]},R=function(){return[U,t]},J=function(){return["",vt]},x=function(){return["auto",St,U]},P=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},A=function(){return["solid","dashed","dotted","double","none"]},T=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},S=function(){return["start","end","center","between","around","evenly","stretch"]},at=function(){return["","0",U]},lt=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},it=function(){return[St,Gt]},dt=function(){return[St,U]};return{cacheSize:500,theme:{colors:[Tt],spacing:[vt],blur:["none","",Et,U],brightness:it(),borderColor:[e],borderRadius:["none","","full",Et,U],borderSpacing:R(),borderWidth:J(),contrast:it(),grayscale:at(),hueRotate:dt(),invert:at(),gap:R(),gradientColorStops:[e],gradientColorStopPositions:[cn,Jt],inset:j(),margin:j(),opacity:it(),padding:R(),saturate:it(),scale:it(),sepia:at(),skew:dt(),space:R(),translate:R()},classGroups:{aspect:[{aspect:["auto","square","video",U]}],container:["container"],columns:[{columns:[Et]}],"break-after":[{"break-after":lt()}],"break-before":[{"break-before":lt()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(P(),[U])}],overflow:[{overflow:X()}],"overflow-x":[{"overflow-x":X()}],"overflow-y":[{"overflow-y":X()}],overscroll:[{overscroll:tt()}],"overscroll-x":[{"overscroll-x":tt()}],"overscroll-y":[{"overscroll-y":tt()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",It]}],basis:[{basis:j()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",U]}],grow:[{grow:at()}],shrink:[{shrink:at()}],order:[{order:["first","last","none",It]}],"grid-cols":[{"grid-cols":[Tt]}],"col-start-end":[{col:["auto",{span:["full",It]},U]}],"col-start":[{"col-start":x()}],"col-end":[{"col-end":x()}],"grid-rows":[{"grid-rows":[Tt]}],"row-start-end":[{row:["auto",{span:[It]},U]}],"row-start":[{"row-start":x()}],"row-end":[{"row-end":x()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",U]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",U]}],gap:[{gap:[b]}],"gap-x":[{"gap-x":[b]}],"gap-y":[{"gap-y":[b]}],"justify-content":[{justify:["normal"].concat(S())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(S(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(S(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[L]}],px:[{px:[L]}],py:[{py:[L]}],ps:[{ps:[L]}],pe:[{pe:[L]}],pt:[{pt:[L]}],pr:[{pr:[L]}],pb:[{pb:[L]}],pl:[{pl:[L]}],m:[{m:[f]}],mx:[{mx:[f]}],my:[{my:[f]}],ms:[{ms:[f]}],me:[{me:[f]}],mt:[{mt:[f]}],mr:[{mr:[f]}],mb:[{mb:[f]}],ml:[{ml:[f]}],"space-x":[{"space-x":[N]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[N]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",U,t]}],"min-w":[{"min-w":["min","max","fit",U,vt]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[Et]},Et,U]}],h:[{h:[U,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",U,vt]}],"max-h":[{"max-h":[U,t,"min","max","fit"]}],"font-size":[{text:["base",Et,Jt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Gt]}],"font-family":[{font:[Tt]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",U]}],"line-clamp":[{"line-clamp":["none",St,Gt]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",U,vt]}],"list-image":[{"list-image":["none",U]}],"list-style-type":[{list:["none","disc","decimal",U]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[I]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[I]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(A(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",vt]}],"underline-offset":[{"underline-offset":["auto",U,vt]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:R()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",U]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",U]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[I]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(P(),[dn])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",an]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},ln]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[u]}],"gradient-via":[{via:[u]}],"gradient-to":[{to:[u]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[I]}],"border-style":[{border:[].concat(A(),["hidden"])}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[I]}],"divide-style":[{divide:A()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(A())}],"outline-offset":[{"outline-offset":[U,vt]}],"outline-w":[{outline:[vt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[I]}],"ring-offset-w":[{"ring-offset":[vt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Et,sn]}],"shadow-color":[{shadow:[Tt]}],opacity:[{opacity:[I]}],"mix-blend":[{"mix-blend":T()}],"bg-blend":[{"bg-blend":T()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",Et,U]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[g]}],invert:[{invert:[s]}],saturate:[{saturate:[_]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[g]}],"backdrop-invert":[{"backdrop-invert":[s]}],"backdrop-opacity":[{"backdrop-opacity":[I]}],"backdrop-saturate":[{"backdrop-saturate":[_]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",U]}],duration:[{duration:dt()}],ease:[{ease:["linear","in","out","in-out",U]}],delay:[{delay:dt()}],animate:[{animate:["none","spin","ping","pulse","bounce",U]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[C]}],"scale-x":[{"scale-x":[C]}],"scale-y":[{"scale-y":[C]}],rotate:[{rotate:[It,U]}],"translate-x":[{"translate-x":[q]}],"translate-y":[{"translate-y":[q]}],"skew-x":[{"skew-x":[F]}],"skew-y":[{"skew-y":[F]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",U]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",U]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",U]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[vt,Gt]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var pt=$r(wn);function Vt(e){let t,r,o,n,a,i;const l=e[14].default,d=wt(l,e,e[13],null);let c=[e[8],{class:e[7]},{role:e[6]}],g={};for(let s=0;s<c.length;s+=1)g=ct(g,c[s]);return{c(){t=y(e[1]),d&&d.c(),this.h()},l(s){t=m(s,(e[1]||"null").toUpperCase(),{class:!0,role:!0});var b=G(t);d&&d.l(b),b.forEach(h),this.h()},h(){Lt(e[1])(t,g)},m(s,b){M(s,t,b),d&&d.m(t,null),e[20](t),n=!0,a||(i=[Zt(r=e[4].call(null,t,e[5])),rt(t,"click",e[15]),rt(t,"mouseenter",e[16]),rt(t,"mouseleave",e[17]),rt(t,"focusin",e[18]),rt(t,"focusout",e[19])],a=!0)},p(s,b){e=s,d&&d.p&&(!n||b&8192)&&ut(d,l,e,e[13],n?ft(l,e[13],b,null):ht(e[13]),null),Lt(e[1])(t,g=Ht(c,[b&256&&e[8],(!n||b&128)&&{class:e[7]},(!n||b&64)&&{role:e[6]}])),r&&jr(r.update)&&b&32&&r.update.call(null,e[5])},i(s){n||(Y(d,s),s&&mr(()=>{n&&(o||(o=Nt(t,e[2],e[3],!0)),o.run(1))}),n=!0)},o(s){D(d,s),s&&(o||(o=Nt(t,e[2],e[3],!1)),o.run(0)),n=!1},d(s){s&&h(t),d&&d.d(s),e[20](null),s&&o&&o.end(),a=!1,Kt(i)}}}function un(e){let t=e[1],r,o=!1,n,a=e[1]&&Vt(e);return{c(){a&&a.c(),r=gt()},l(i){a&&a.l(i),r=gt()},m(i,l){a&&a.m(i,l),M(i,r,l),n=!0},p(i,[l]){i[1]?t?zt(t,i[1])?(a.d(1),a=Vt(i),t=i[1],a.c(),o&&(o=!1,Y(a)),a.m(r.parentNode,r)):(o&&(o=!1,Y(a)),a.p(i,l)):(a=Vt(i),t=i[1],a.c(),Y(a),a.m(r.parentNode,r)):t&&(o=!0,_t(),D(a,1,1,()=>{a=null,t=i[1],o=!1}),Ct())},i(i){n||(Y(a,i),n=!0)},o(i){D(a,i),n=!1},d(i){i&&h(r),a&&a.d(i)}}}function hn(e,t,r){const o=["tag","color","rounded","border","shadow","transition","params","node","use","options","role"];let n=At(t,o),{$$slots:a={},$$scope:i}=t;const l=()=>({duration:0}),d=()=>{};Rt("background",!0);let{tag:c=n.href?"a":"div"}=t,{color:g="default"}=t,{rounded:s=!1}=t,{border:b=!1}=t,{shadow:u=!1}=t,{transition:w=l}=t,{params:v={}}=t,{node:f=void 0}=t,{use:I=d}=t,{options:L={}}=t,{role:_=void 0}=t;const C={gray:"bg-gray-50 dark:bg-gray-800",red:"bg-red-50 dark:bg-gray-800",yellow:"bg-yellow-50 dark:bg-gray-800 ",green:"bg-green-50 dark:bg-gray-800 ",indigo:"bg-indigo-50 dark:bg-gray-800 ",purple:"bg-purple-50 dark:bg-gray-800 ",pink:"bg-pink-50 dark:bg-gray-800 ",blue:"bg-blue-50 dark:bg-gray-800 ",light:"bg-gray-50 dark:bg-gray-700",dark:"bg-gray-50 dark:bg-gray-800",default:"bg-white dark:bg-gray-800",dropdown:"bg-white dark:bg-gray-700",navbar:"bg-white dark:bg-gray-900",navbarUl:"bg-gray-50 dark:bg-gray-800",form:"bg-gray-50 dark:bg-gray-700",primary:"bg-primary-50 dark:bg-gray-800 ",orange:"bg-orange-50 dark:bg-orange-800",none:""},k={gray:"text-gray-800 dark:text-gray-300",red:"text-red-800 dark:text-red-400",yellow:"text-yellow-800 dark:text-yellow-300",green:"text-green-800 dark:text-green-400",indigo:"text-indigo-800 dark:text-indigo-400",purple:"text-purple-800 dark:text-purple-400",pink:"text-pink-800 dark:text-pink-400",blue:"text-blue-800 dark:text-blue-400",light:"text-gray-700 dark:text-gray-300",dark:"text-gray-700 dark:text-gray-300",default:"text-gray-500 dark:text-gray-400",dropdown:"text-gray-700 dark:text-gray-200",navbar:"text-gray-700 dark:text-gray-200",navbarUl:"text-gray-700 dark:text-gray-400",form:"text-gray-900 dark:text-white",primary:"text-primary-800 dark:text-primary-400",orange:"text-orange-800 dark:text-orange-400",none:""},F={gray:"border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",red:"border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",yellow:"border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",green:"border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",indigo:"border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",purple:"border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",pink:"border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",blue:"border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",light:"border-gray-500 divide-gray-500",dark:"border-gray-500 divide-gray-500",default:"border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",dropdown:"border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",navbar:"border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",navbarUl:"border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",form:"border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",primary:"border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",orange:"border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",none:""};let N;function q(x){ot.call(this,e,x)}function tt(x){ot.call(this,e,x)}function X(x){ot.call(this,e,x)}function j(x){ot.call(this,e,x)}function R(x){ot.call(this,e,x)}function J(x){Br[x?"unshift":"push"](()=>{f=x,r(0,f)})}return e.$$set=x=>{r(26,t=ct(ct({},t),bt(x))),r(8,n=At(t,o)),"tag"in x&&r(1,c=x.tag),"color"in x&&r(9,g=x.color),"rounded"in x&&r(10,s=x.rounded),"border"in x&&r(11,b=x.border),"shadow"in x&&r(12,u=x.shadow),"transition"in x&&r(2,w=x.transition),"params"in x&&r(3,v=x.params),"node"in x&&r(0,f=x.node),"use"in x&&r(4,I=x.use),"options"in x&&r(5,L=x.options),"role"in x&&r(6,_=x.role),"$$scope"in x&&r(13,i=x.$$scope)},e.$$.update=()=>{e.$$.dirty&512&&r(9,g=g??"default"),e.$$.dirty&512&&Rt("color",g),r(7,N=pt(C[g],k[g],s&&"rounded-lg",b&&"border",F[g],u&&"shadow-md",t.class))},t=bt(t),[f,c,w,v,I,L,_,N,n,g,s,b,u,i,a,q,tt,X,j,R,J]}class fn extends jt{constructor(t){super(),Bt(this,t,hn,un,zt,{tag:1,color:9,rounded:10,border:11,shadow:12,transition:2,params:3,node:0,use:4,options:5,role:6})}}function vn(e){let t;const r=e[7].default,o=wt(r,e,e[8],null);return{c(){o&&o.c()},l(n){o&&o.l(n)},m(n,a){o&&o.m(n,a),t=!0},p(n,a){o&&o.p&&(!t||a&256)&&ut(o,r,n,n[8],t?ft(r,n[8],a,null):ht(n[8]),null)},i(n){t||(Y(o,n),t=!0)},o(n){D(o,n),t=!1},d(n){o&&o.d(n)}}}function yn(e){let t,r;const o=[e[1],{class:e[0]},{color:"none"}];let n={$$slots:{default:[vn]},$$scope:{ctx:e}};for(let a=0;a<o.length;a+=1)n=ct(n,o[a]);return t=new fn({props:n}),{c(){yt(t.$$.fragment)},l(a){mt(t.$$.fragment,a)},m(a,i){kt(t,a,i),r=!0},p(a,[i]){const l=i&3?Ht(o,[i&2&&Tr(a[1]),i&1&&{class:a[0]},o[2]]):{};i&256&&(l.$$scope={dirty:i,ctx:a}),t.$set(l)},i(a){r||(Y(t.$$.fragment,a),r=!0)},o(a){D(t.$$.fragment,a),r=!1},d(a){xt(t,a)}}}function mn(e,t,r){const o=["multiple","flush","activeClass","inactiveClass","defaultClass"];let n=At(t,o),{$$slots:a={},$$scope:i}=t,{multiple:l=!1}=t,{flush:d=!1}=t,{activeClass:c="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800"}=t,{inactiveClass:g="text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800"}=t,{defaultClass:s="text-gray-500 dark:text-gray-400"}=t;const b={flush:d,activeClass:pt(c,t.classActive),inactiveClass:pt(g,t.classInactive),selected:l?void 0:Ot()};Rt("ctx",b);let u;return e.$$set=w=>{r(10,t=ct(ct({},t),bt(w))),r(1,n=At(t,o)),"multiple"in w&&r(2,l=w.multiple),"flush"in w&&r(3,d=w.flush),"activeClass"in w&&r(4,c=w.activeClass),"inactiveClass"in w&&r(5,g=w.inactiveClass),"defaultClass"in w&&r(6,s=w.defaultClass),"$$scope"in w&&r(8,i=w.$$scope)},e.$$.update=()=>{r(0,u=pt(s,t.class))},t=bt(t),[u,n,l,d,c,g,s,a,i]}class Mr extends jt{constructor(t){super(),Bt(this,t,mn,yn,zt,{multiple:2,flush:3,activeClass:4,inactiveClass:5,defaultClass:6})}}const kn=e=>({}),dr=e=>({}),xn=e=>({}),lr=e=>({}),_n=e=>({}),cr=e=>({});function Cn(e){let t;const r=e[22].arrowdown,o=wt(r,e,e[21],dr),n=o||En();return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,i){n&&n.m(a,i),t=!0},p(a,i){o&&o.p&&(!t||i&2097152)&&ut(o,r,a,a[21],t?ft(r,a[21],i,kn):ht(a[21]),dr)},i(a){t||(Y(n,a),t=!0)},o(a){D(n,a),t=!1},d(a){n&&n.d(a)}}}function zn(e){let t;const r=e[22].arrowup,o=wt(r,e,e[21],lr),n=o||An();return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,i){n&&n.m(a,i),t=!0},p(a,i){o&&o.p&&(!t||i&2097152)&&ut(o,r,a,a[21],t?ft(r,a[21],i,xn):ht(a[21]),lr)},i(a){t||(Y(n,a),t=!0)},o(a){D(n,a),t=!1},d(a){n&&n.d(a)}}}function En(e){let t,r;return{c(){t=Yt("svg"),r=Yt("path"),this.h()},l(o){t=Xt(o,"svg",{class:!0,"aria-hidden":!0,xmlns:!0,fill:!0,viewBox:!0});var n=G(t);r=Xt(n,"path",{stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),G(r).forEach(h),n.forEach(h),this.h()},h(){B(r,"stroke","currentColor"),B(r,"stroke-linecap","round"),B(r,"stroke-linejoin","round"),B(r,"stroke-width","2"),B(r,"d","m1 1 4 4 4-4"),B(t,"class","w-3 h-3 text-gray-800 dark:text-white"),B(t,"aria-hidden","true"),B(t,"xmlns","http://www.w3.org/2000/svg"),B(t,"fill","none"),B(t,"viewBox","0 0 10 6")},m(o,n){M(o,t,n),p(t,r)},p:Mt,d(o){o&&h(t)}}}function An(e){let t,r;return{c(){t=Yt("svg"),r=Yt("path"),this.h()},l(o){t=Xt(o,"svg",{class:!0,"aria-hidden":!0,xmlns:!0,fill:!0,viewBox:!0});var n=G(t);r=Xt(n,"path",{stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),G(r).forEach(h),n.forEach(h),this.h()},h(){B(r,"stroke","currentColor"),B(r,"stroke-linecap","round"),B(r,"stroke-linejoin","round"),B(r,"stroke-width","2"),B(r,"d","M9 5 5 1 1 5"),B(t,"class","w-3 h-3 text-gray-800 dark:text-white"),B(t,"aria-hidden","true"),B(t,"xmlns","http://www.w3.org/2000/svg"),B(t,"fill","none"),B(t,"viewBox","0 0 10 6")},m(o,n){M(o,t,n),p(t,r)},p:Mt,d(o){o&&h(t)}}}function Sn(e){let t,r,o;const n=e[22].default,a=wt(n,e,e[21],null);return{c(){t=y("div"),r=y("div"),a&&a.c(),this.h()},l(i){t=m(i,"DIV",{class:!0});var l=G(t);r=m(l,"DIV",{class:!0});var d=G(r);a&&a.l(d),d.forEach(h),l.forEach(h),this.h()},h(){B(r,"class",e[3]),B(t,"class","hidden")},m(i,l){M(i,t,l),p(t,r),a&&a.m(r,null),o=!0},p(i,l){a&&a.p&&(!o||l&2097152)&&ut(a,n,i,i[21],o?ft(n,i[21],l,null):ht(i[21]),null),(!o||l&8)&&B(r,"class",i[3])},i(i){o||(Y(a,i),o=!0)},o(i){D(a,i),o=!1},d(i){i&&h(t),a&&a.d(i)}}}function Mn(e){let t,r,o,n;const a=e[22].default,i=wt(a,e,e[21],null);return{c(){t=y("div"),r=y("div"),i&&i.c(),this.h()},l(l){t=m(l,"DIV",{});var d=G(t);r=m(d,"DIV",{class:!0});var c=G(r);i&&i.l(c),c.forEach(h),d.forEach(h),this.h()},h(){B(r,"class",e[3])},m(l,d){M(l,t,d),p(t,r),i&&i.m(r,null),n=!0},p(l,d){e=l,i&&i.p&&(!n||d&2097152)&&ut(i,a,e,e[21],n?ft(a,e[21],d,null):ht(e[21]),null),(!n||d&8)&&B(r,"class",e[3])},i(l){n||(Y(i,l),l&&mr(()=>{n&&(o||(o=Nt(t,e[4],e[1],!0)),o.run(1))}),n=!0)},o(l){D(i,l),l&&(o||(o=Nt(t,e[4],e[1],!1)),o.run(0)),n=!1},d(l){l&&h(t),i&&i.d(l),l&&o&&o.end()}}}function jn(e){let t,r,o,n,a,i,l,d,c,g,s,b;const u=e[22].header,w=wt(u,e,e[21],cr),v=[zn,Cn],f=[];function I(k,F){return k[0]?0:1}n=I(e),a=f[n]=v[n](e);const L=[Mn,Sn],_=[];function C(k,F){return k[0]?0:1}return l=C(e),d=_[l]=L[l](e),{c(){t=y("h2"),r=y("button"),w&&w.c(),o=z(),a.c(),i=z(),d.c(),c=gt(),this.h()},l(k){t=m(k,"H2",{class:!0});var F=G(t);r=m(F,"BUTTON",{type:!0,class:!0,"aria-expanded":!0});var N=G(r);w&&w.l(N),o=E(N),a.l(N),N.forEach(h),F.forEach(h),i=E(k),d.l(k),c=gt(),this.h()},h(){B(r,"type","button"),B(r,"class",e[2]),B(r,"aria-expanded",e[0]),B(t,"class","group")},m(k,F){M(k,t,F),p(t,r),w&&w.m(r,null),p(r,o),f[n].m(r,null),M(k,i,F),_[l].m(k,F),M(k,c,F),g=!0,s||(b=rt(r,"click",e[6]),s=!0)},p(k,[F]){w&&w.p&&(!g||F&2097152)&&ut(w,u,k,k[21],g?ft(u,k[21],F,_n):ht(k[21]),cr);let N=n;n=I(k),n===N?f[n].p(k,F):(_t(),D(f[N],1,1,()=>{f[N]=null}),Ct(),a=f[n],a?a.p(k,F):(a=f[n]=v[n](k),a.c()),Y(a,1),a.m(r,null)),(!g||F&4)&&B(r,"class",k[2]),(!g||F&1)&&B(r,"aria-expanded",k[0]);let q=l;l=C(k),l===q?_[l].p(k,F):(_t(),D(_[q],1,1,()=>{_[q]=null}),Ct(),d=_[l],d?d.p(k,F):(d=_[l]=L[l](k),d.c()),Y(d,1),d.m(c.parentNode,c))},i(k){g||(Y(w,k),Y(a),Y(d),g=!0)},o(k){D(w,k),D(a),D(d),g=!1},d(k){k&&(h(t),h(i),h(c)),w&&w.d(k),f[n].d(),_[l].d(k),s=!1,b()}}}function Bn(e,t,r){let o,n,{$$slots:a={},$$scope:i}=t,{open:l=!1}=t,{activeClass:d=void 0}=t,{inactiveClass:c=void 0}=t,{defaultClass:g="flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700"}=t,{transitionType:s="slide"}=t,{transitionParams:b={}}=t,{paddingFlush:u="py-5"}=t,{paddingDefault:w="p-5"}=t,{textFlushOpen:v="text-gray-900 dark:text-white"}=t,{textFlushDefault:f="text-gray-500 dark:text-gray-400"}=t,{borderClass:I="border-l border-r group-first:border-t"}=t,{borderOpenClass:L="border-l border-r"}=t,{borderBottomClass:_="border-b"}=t,{borderSharedClass:C="border-gray-200 dark:border-gray-700"}=t,{classActive:k=void 0}=t,{classInactive:F=void 0}=t,N=pt(d,k),q=pt(c,F);const tt=(A,T)=>{switch(s){case"blur":return Yr(A,T);case"fly":return Lr(A,T);case"fade":return Rr(A,T);default:return Gr(A,T)}},X=Qt("ctx")??{},j={},R=X.selected??Ot();Fr(e,R,A=>r(23,n=A));let J=l;l=!1,kr(()=>(J&&Pr(R,n=j,n),R.subscribe(A=>r(0,l=A===j))));const x=A=>R.set(l?{}:j);let P;return e.$$set=A=>{r(29,t=ct(ct({},t),bt(A))),"open"in A&&r(0,l=A.open),"activeClass"in A&&r(7,d=A.activeClass),"inactiveClass"in A&&r(8,c=A.inactiveClass),"defaultClass"in A&&r(9,g=A.defaultClass),"transitionType"in A&&r(10,s=A.transitionType),"transitionParams"in A&&r(1,b=A.transitionParams),"paddingFlush"in A&&r(11,u=A.paddingFlush),"paddingDefault"in A&&r(12,w=A.paddingDefault),"textFlushOpen"in A&&r(13,v=A.textFlushOpen),"textFlushDefault"in A&&r(14,f=A.textFlushDefault),"borderClass"in A&&r(15,I=A.borderClass),"borderOpenClass"in A&&r(16,L=A.borderOpenClass),"borderBottomClass"in A&&r(17,_=A.borderBottomClass),"borderSharedClass"in A&&r(18,C=A.borderSharedClass),"classActive"in A&&r(19,k=A.classActive),"classInactive"in A&&r(20,F=A.classInactive),"$$scope"in A&&r(21,i=A.$$scope)},e.$$.update=()=>{r(2,P=pt([g,X.flush||I,_,C,X.flush?u:w,l&&(X.flush?v:N||X.activeClass),!l&&(X.flush?f:q||X.inactiveClass),t.class])),e.$$.dirty&464896&&r(3,o=pt([X.flush?u:w,X.flush?"":L,_,C]))},t=bt(t),[l,b,P,o,tt,R,x,d,c,g,s,u,w,v,f,I,L,_,C,k,F,i,a]}class Ut extends jt{constructor(t){super(),Bt(this,t,Bn,jn,zt,{open:0,activeClass:7,inactiveClass:8,defaultClass:9,transitionType:10,transitionParams:1,paddingFlush:11,paddingDefault:12,textFlushOpen:13,textFlushDefault:14,borderClass:15,borderOpenClass:16,borderBottomClass:17,borderSharedClass:18,classActive:19,classInactive:20})}}function Wt(e){let t,r,o,n,a,i;const l=e[10].default,d=wt(l,e,e[9],null);let c=[{type:r=e[0]?void 0:e[1]},{href:e[0]},{role:o=e[0]?"link":"button"},e[3],{class:e[2]}],g={};for(let s=0;s<c.length;s+=1)g=ct(g,c[s]);return{c(){t=y(e[0]?"a":"button"),d&&d.c(),this.h()},l(s){t=m(s,((e[0]?"a":"button")||"null").toUpperCase(),{type:!0,href:!0,role:!0,class:!0});var b=G(t);d&&d.l(b),b.forEach(h),this.h()},h(){Lt(e[0]?"a":"button")(t,g)},m(s,b){M(s,t,b),d&&d.m(t,null),n=!0,a||(i=[rt(t,"click",e[11]),rt(t,"change",e[12]),rt(t,"keydown",e[13]),rt(t,"keyup",e[14]),rt(t,"touchstart",e[15],{passive:!0}),rt(t,"touchend",e[16]),rt(t,"touchcancel",e[17]),rt(t,"mouseenter",e[18]),rt(t,"mouseleave",e[19])],a=!0)},p(s,b){d&&d.p&&(!n||b&512)&&ut(d,l,s,s[9],n?ft(l,s[9],b,null):ht(s[9]),null),Lt(s[0]?"a":"button")(t,g=Ht(c,[(!n||b&3&&r!==(r=s[0]?void 0:s[1]))&&{type:r},(!n||b&1)&&{href:s[0]},(!n||b&1&&o!==(o=s[0]?"link":"button"))&&{role:o},b&8&&s[3],(!n||b&4)&&{class:s[2]}]))},i(s){n||(Y(d,s),n=!0)},o(s){D(d,s),n=!1},d(s){s&&h(t),d&&d.d(s),a=!1,Kt(i)}}}function Fn(e){let t=e[0]?"a":"button",r,o,n=(e[0]?"a":"button")&&Wt(e);return{c(){n&&n.c(),r=gt()},l(a){n&&n.l(a),r=gt()},m(a,i){n&&n.m(a,i),M(a,r,i),o=!0},p(a,[i]){a[0],t?zt(t,a[0]?"a":"button")?(n.d(1),n=Wt(a),t=a[0]?"a":"button",n.c(),n.m(r.parentNode,r)):n.p(a,i):(n=Wt(a),t=a[0]?"a":"button",n.c(),n.m(r.parentNode,r))},i(a){o||(Y(n,a),o=!0)},o(a){D(n,a),o=!1},d(a){a&&h(r),n&&n.d(a)}}}function Pn(e,t,r){const o=["pill","outline","size","href","type","color","shadow"];let n=At(t,o),{$$slots:a={},$$scope:i}=t;const l=Qt("group");let{pill:d=!1}=t,{outline:c=!1}=t,{size:g=l?"sm":"md"}=t,{href:s=void 0}=t,{type:b="button"}=t,{color:u=l?c?"dark":"alternative":"primary"}=t,{shadow:w=!1}=t;const v={alternative:"text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus:text-primary-700 dark:focus:text-white dark:hover:text-white",blue:"text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",dark:"text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",green:"text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",light:"text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",primary:"text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",purple:"text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",red:"text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",yellow:"text-white bg-yellow-400 hover:bg-yellow-500 ",none:""},f={alternative:"focus:ring-gray-200 dark:focus:ring-gray-700",blue:"focus:ring-blue-300 dark:focus:ring-blue-800",dark:"focus:ring-gray-300 dark:focus:ring-gray-700",green:"focus:ring-green-300 dark:focus:ring-green-800",light:"focus:ring-gray-200 dark:focus:ring-gray-700",primary:"focus:ring-primary-300 dark:focus:ring-primary-800",purple:"focus:ring-purple-300 dark:focus:ring-purple-900",red:"focus:ring-red-300 dark:focus:ring-red-900",yellow:"focus:ring-yellow-300 dark:focus:ring-yellow-900",none:""},I={alternative:"shadow-gray-500/50 dark:shadow-gray-800/80",blue:"shadow-blue-500/50 dark:shadow-blue-800/80",dark:"shadow-gray-500/50 dark:shadow-gray-800/80",green:"shadow-green-500/50 dark:shadow-green-800/80",light:"shadow-gray-500/50 dark:shadow-gray-800/80",primary:"shadow-primary-500/50 dark:shadow-primary-800/80",purple:"shadow-purple-500/50 dark:shadow-purple-800/80",red:"shadow-red-500/50 dark:shadow-red-800/80 ",yellow:"shadow-yellow-500/50 dark:shadow-yellow-800/80 ",none:""},L={alternative:"text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800",blue:"text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",dark:"text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",green:"text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",light:"text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",primary:"text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",purple:"text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",red:"text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",yellow:"text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",none:""},_={xs:"px-3 py-2 text-xs",sm:"px-4 py-2 text-sm",md:"px-5 py-2.5 text-sm",lg:"px-5 py-3 text-base",xl:"px-6 py-3.5 text-base"},C=()=>c||u==="alternative"||u==="light";let k;function F(P){ot.call(this,e,P)}function N(P){ot.call(this,e,P)}function q(P){ot.call(this,e,P)}function tt(P){ot.call(this,e,P)}function X(P){ot.call(this,e,P)}function j(P){ot.call(this,e,P)}function R(P){ot.call(this,e,P)}function J(P){ot.call(this,e,P)}function x(P){ot.call(this,e,P)}return e.$$set=P=>{r(27,t=ct(ct({},t),bt(P))),r(3,n=At(t,o)),"pill"in P&&r(4,d=P.pill),"outline"in P&&r(5,c=P.outline),"size"in P&&r(6,g=P.size),"href"in P&&r(0,s=P.href),"type"in P&&r(1,b=P.type),"color"in P&&r(7,u=P.color),"shadow"in P&&r(8,w=P.shadow),"$$scope"in P&&r(9,i=P.$$scope)},e.$$.update=()=>{r(2,k=pt("text-center font-medium",l?"focus:ring-2":"focus:ring-4",l&&"focus:z-10",l||"focus:outline-none","inline-flex items-center justify-center "+_[g],c?L[u]:v[u],u==="alternative"&&(l?"dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600":"dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-700"),c&&u==="dark"&&(l?"dark:text-white dark:border-white":"dark:text-gray-400 dark:border-gray-700"),f[u],C()&&l&&"border-l-0 first:border-l",l?d&&"first:rounded-l-full last:rounded-r-full"||"first:rounded-l-lg last:rounded-r-lg":d&&"rounded-full"||"rounded-lg",w&&"shadow-lg",w&&I[u],t.disabled&&"cursor-not-allowed opacity-50",t.class))},t=bt(t),[s,b,k,n,d,c,g,u,w,i,a,F,N,q,tt,X,j,R,J,x]}class In extends jt{constructor(t){super(),Bt(this,t,Pn,Fn,zt,{pill:4,outline:5,size:6,href:0,type:1,color:7,shadow:8})}}const Tn=e=>({}),sr=e=>({});function Gn(e){let t;return{c(){t=V(e[1])},l(r){t=W(r,e[1])},m(r,o){M(r,t,o)},p(r,o){o&2&&$(t,r[1])},d(r){r&&h(t)}}}function gr(e){let t,r,o,n,a;const i=e[10].default,l=wt(i,e,e[9],null);return{c(){t=y("div"),r=y("div"),l&&l.c(),this.h()},l(d){t=m(d,"DIV",{class:!0});var c=G(t);r=m(c,"DIV",{});var g=G(r);l&&l.l(g),g.forEach(h),c.forEach(h),this.h()},h(){B(t,"class","hidden tab_content_placeholder")},m(d,c){M(d,t,c),p(t,r),l&&l.m(r,null),o=!0,n||(a=Zt(e[3].call(null,r)),n=!0)},p(d,c){l&&l.p&&(!o||c&512)&&ut(l,i,d,d[9],o?ft(i,d[9],c,null):ht(d[9]),null)},i(d){o||(Y(l,d),o=!0)},o(d){D(l,d),o=!1},d(d){d&&h(t),l&&l.d(d),n=!1,a()}}}function Rn(e){let t,r,o,n,a,i,l;const d=e[10].title,c=wt(d,e,e[9],sr),g=c||Gn(e);let s=[{type:"button"},{role:"tab"},e[5],{class:e[2]}],b={};for(let w=0;w<s.length;w+=1)b=ct(b,s[w]);let u=e[0]&&gr(e);return{c(){t=y("li"),r=y("button"),g&&g.c(),o=z(),u&&u.c(),this.h()},l(w){t=m(w,"LI",{class:!0,role:!0});var v=G(t);r=m(v,"BUTTON",{type:!0,role:!0,class:!0});var f=G(r);g&&g.l(f),f.forEach(h),o=E(v),u&&u.l(v),v.forEach(h),this.h()},h(){er(r,b),B(t,"class",n=pt("group",e[4].class)),B(t,"role","presentation")},m(w,v){M(w,t,v),p(t,r),g&&g.m(r,null),r.autofocus&&r.focus(),p(t,o),u&&u.m(t,null),a=!0,i||(l=[rt(r,"click",e[21]),rt(r,"blur",e[11]),rt(r,"click",e[12]),rt(r,"contextmenu",e[13]),rt(r,"focus",e[14]),rt(r,"keydown",e[15]),rt(r,"keypress",e[16]),rt(r,"keyup",e[17]),rt(r,"mouseenter",e[18]),rt(r,"mouseleave",e[19]),rt(r,"mouseover",e[20])],i=!0)},p(w,[v]){c?c.p&&(!a||v&512)&&ut(c,d,w,w[9],a?ft(d,w[9],v,Tn):ht(w[9]),sr):g&&g.p&&(!a||v&2)&&g.p(w,a?v:-1),er(r,b=Ht(s,[{type:"button"},{role:"tab"},v&32&&w[5],(!a||v&4)&&{class:w[2]}])),w[0]?u?(u.p(w,v),v&1&&Y(u,1)):(u=gr(w),u.c(),Y(u,1),u.m(t,null)):u&&(_t(),D(u,1,1,()=>{u=null}),Ct()),(!a||v&16&&n!==(n=pt("group",w[4].class)))&&B(t,"class",n)},i(w){a||(Y(g,w),Y(u),a=!0)},o(w){D(g,w),D(u),a=!1},d(w){w&&h(t),g&&g.d(w),u&&u.d(),i=!1,Kt(l)}}}function Ln(e,t,r){const o=["open","title","activeClasses","inactiveClasses","defaultClass"];let n=At(t,o),{$$slots:a={},$$scope:i}=t,{open:l=!1}=t,{title:d="Tab title"}=t,{activeClasses:c=void 0}=t,{inactiveClasses:g=void 0}=t,{defaultClass:s="inline-block text-sm font-medium text-center disabled:cursor-not-allowed"}=t;const b=Qt("ctx")??{},u=b.selected??Ot();function w(j){return u.set(j),{destroy:u.subscribe(J=>{J!==j&&r(0,l=!1)})}}let v;function f(j){ot.call(this,e,j)}function I(j){ot.call(this,e,j)}function L(j){ot.call(this,e,j)}function _(j){ot.call(this,e,j)}function C(j){ot.call(this,e,j)}function k(j){ot.call(this,e,j)}function F(j){ot.call(this,e,j)}function N(j){ot.call(this,e,j)}function q(j){ot.call(this,e,j)}function tt(j){ot.call(this,e,j)}const X=()=>r(0,l=!0);return e.$$set=j=>{r(4,t=ct(ct({},t),bt(j))),r(5,n=At(t,o)),"open"in j&&r(0,l=j.open),"title"in j&&r(1,d=j.title),"activeClasses"in j&&r(6,c=j.activeClasses),"inactiveClasses"in j&&r(7,g=j.inactiveClasses),"defaultClass"in j&&r(8,s=j.defaultClass),"$$scope"in j&&r(9,i=j.$$scope)},e.$$.update=()=>{e.$$.dirty&449&&r(2,v=pt(s,l?c??b.activeClasses:g??b.inactiveClasses,l&&"active"))},t=bt(t),[l,d,v,w,t,n,c,g,s,i,a,f,I,L,_,C,k,F,N,q,tt,X]}class pr extends jt{constructor(t){super(),Bt(this,t,Ln,Rn,zt,{open:0,title:1,activeClasses:6,inactiveClasses:7,defaultClass:8})}}const Yn=e=>({}),br=e=>({}),Xn=e=>({style:e&2}),wr=e=>({style:e[1]});function ur(e){let t;const r=e[9].divider,o=wt(r,e,e[8],br),n=o||Nn();return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,i){n&&n.m(a,i),t=!0},p(a,i){o&&o.p&&(!t||i&256)&&ut(o,r,a,a[8],t?ft(r,a[8],i,Yn):ht(a[8]),br)},i(a){t||(Y(n,a),t=!0)},o(a){D(n,a),t=!1},d(a){n&&n.d(a)}}}function Nn(e){let t;return{c(){t=y("div"),this.h()},l(r){t=m(r,"DIV",{class:!0}),G(t).forEach(h),this.h()},h(){B(t,"class","h-px bg-gray-200 dark:bg-gray-700")},m(r,o){M(r,t,o)},p:Mt,d(r){r&&h(t)}}}function Dn(e){let t,r,o,n,a,i,l;const d=e[9].default,c=wt(d,e,e[8],wr);let g=e[0]&&ur(e);return{c(){t=y("ul"),c&&c.c(),r=z(),g&&g.c(),o=z(),n=y("div"),this.h()},l(s){t=m(s,"UL",{class:!0});var b=G(t);c&&c.l(b),b.forEach(h),r=E(s),g&&g.l(s),o=E(s),n=m(s,"DIV",{class:!0,role:!0,"aria-labelledby":!0}),G(n).forEach(h),this.h()},h(){B(t,"class",e[3]),B(n,"class",e[2]),B(n,"role","tabpanel"),B(n,"aria-labelledby","id-tab")},m(s,b){M(s,t,b),c&&c.m(t,null),M(s,r,b),g&&g.m(s,b),M(s,o,b),M(s,n,b),a=!0,i||(l=Zt(e[4].call(null,n)),i=!0)},p(s,[b]){c&&c.p&&(!a||b&258)&&ut(c,d,s,s[8],a?ft(d,s[8],b,Xn):ht(s[8]),wr),(!a||b&8)&&B(t,"class",s[3]),s[0]?g?(g.p(s,b),b&1&&Y(g,1)):(g=ur(s),g.c(),Y(g,1),g.m(o.parentNode,o)):g&&(_t(),D(g,1,1,()=>{g=null}),Ct()),(!a||b&4)&&B(n,"class",s[2])},i(s){a||(Y(c,s),Y(g),a=!0)},o(s){D(c,s),D(g),a=!1},d(s){s&&(h(t),h(r),h(o),h(n)),c&&c.d(s),g&&g.d(s),i=!1,l()}}}function Hn(e,t,r){let o,{$$slots:n={},$$scope:a}=t,{style:i="none"}=t,{defaultClass:l="flex flex-wrap space-x-2"}=t,{contentClass:d="p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4"}=t,{divider:c=!0}=t,{activeClasses:g="p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500"}=t,{inactiveClasses:s="p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"}=t;const b={full:"p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:bg-gray-700 dark:text-white",pill:"py-3 px-4 text-white bg-primary-600 rounded-lg",underline:"p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500",none:""},u={full:"p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",pill:"py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",underline:"p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400",none:""},w={activeClasses:b[i]||g,inactiveClasses:u[i]||s,selected:Ot()};Rt("ctx",w);function v(f){return{destroy:w.selected.subscribe(L=>{L&&f.replaceChildren(L)})}}return e.$$set=f=>{r(13,t=ct(ct({},t),bt(f))),"style"in f&&r(1,i=f.style),"defaultClass"in f&&r(5,l=f.defaultClass),"contentClass"in f&&r(2,d=f.contentClass),"divider"in f&&r(0,c=f.divider),"activeClasses"in f&&r(6,g=f.activeClasses),"inactiveClasses"in f&&r(7,s=f.inactiveClasses),"$$scope"in f&&r(8,a=f.$$scope)},e.$$.update=()=>{e.$$.dirty&3&&r(0,c=["full","pill"].includes(i)?!1:c),r(3,o=pt(l,i==="underline"&&"-mb-px",t.class))},t=bt(t),[c,i,d,o,v,l,g,s,a,n]}class On extends jt{constructor(t){super(),Bt(this,t,Hn,Dn,zt,{style:1,defaultClass:5,contentClass:2,divider:0,activeClasses:6,inactiveClasses:7})}}function hr(e,t,r){const o=e.slice();return o[1]=t[r].game,o[2]=t[r].time_finished,o[3]=t[r].highest_streak,o[4]=t[r].correct_answers,o[5]=t[r].wrong_answers,o[6]=t[r].status,o[7]=t[r].mode,o[8]=t[r].host,o[9]=t[r].winner,o[10]=t[r].date,o[12]=r,o}function fr(e,t,r){const o=e.slice();return o[1]=t[r].game,o[2]=t[r].time_finished,o[3]=t[r].highest_streak,o[4]=t[r].correct_answers,o[5]=t[r].wrong_answers,o[6]=t[r].status,o[7]=t[r].mode,o[10]=t[r].date,o[12]=r,o}function Un(e){let t,r;return t=new Ut({props:{class:"bg-blue-200 hover:bg-blue-300",$$slots:{header:[qn],default:[Wn]},$$scope:{ctx:e}}}),{c(){yt(t.$$.fragment)},l(o){mt(t.$$.fragment,o)},m(o,n){kt(t,o,n),r=!0},p(o,n){const a={};n&16385&&(a.$$scope={dirty:n,ctx:o}),t.$set(a)},i(o){r||(Y(t.$$.fragment,o),r=!0)},o(o){D(t.$$.fragment,o),r=!1},d(o){xt(t,o)}}}function Vn(e){let t,r;return t=new Ut({props:{class:"bg-red-200 hover:bg-red-300",$$slots:{header:[Zn],default:[Jn]},$$scope:{ctx:e}}}),{c(){yt(t.$$.fragment)},l(o){mt(t.$$.fragment,o)},m(o,n){kt(t,o,n),r=!0},p(o,n){const a={};n&16385&&(a.$$scope={dirty:n,ctx:o}),t.$set(a)},i(o){r||(Y(t.$$.fragment,o),r=!0)},o(o){D(t.$$.fragment,o),r=!1},d(o){xt(t,o)}}}function Wn(e){let t,r="<b>Game stats</b>",o,n,a,i="Time finished:",l,d,c=e[2]+"",g,s,b,u="Highest answer streak:",w,v,f=e[3]+"",I,L,_,C="Correct answers:",k,F,N=e[4]+"",q,tt,X,j="Wrong answers:",R,J,x=e[5]+"",P,A;return{c(){t=y("p"),t.innerHTML=r,o=z(),n=y("div"),a=y("b"),a.textContent=i,l=z(),d=y("p"),g=V(c),s=z(),b=y("b"),b.textContent=u,w=z(),v=y("p"),I=V(f),L=z(),_=y("b"),_.textContent=C,k=z(),F=y("p"),q=V(N),tt=z(),X=y("b"),X.textContent=j,R=z(),J=y("p"),P=V(x),A=z(),this.h()},l(T){t=m(T,"P",{class:!0,"data-svelte-h":!0}),Q(t)!=="svelte-1wh4mz5"&&(t.innerHTML=r),o=E(T),n=m(T,"DIV",{class:!0});var S=G(n);a=m(S,"B",{"data-svelte-h":!0}),Q(a)!=="svelte-1m9m1rz"&&(a.textContent=i),l=E(S),d=m(S,"P",{});var at=G(d);g=W(at,c),at.forEach(h),s=E(S),b=m(S,"B",{"data-svelte-h":!0}),Q(b)!=="svelte-gfioqi"&&(b.textContent=u),w=E(S),v=m(S,"P",{});var lt=G(v);I=W(lt,f),lt.forEach(h),L=E(S),_=m(S,"B",{"data-svelte-h":!0}),Q(_)!=="svelte-16f3j3n"&&(_.textContent=C),k=E(S),F=m(S,"P",{});var it=G(F);q=W(it,N),it.forEach(h),tt=E(S),X=m(S,"B",{"data-svelte-h":!0}),Q(X)!=="svelte-ci7954"&&(X.textContent=j),R=E(S),J=m(S,"P",{});var dt=G(J);P=W(dt,x),dt.forEach(h),S.forEach(h),A=E(T),this.h()},h(){B(t,"class","flex justify-center mb-2 text-gray-500 dark:text-gray-400"),B(n,"class","stats")},m(T,S){M(T,t,S),M(T,o,S),M(T,n,S),p(n,a),p(n,l),p(n,d),p(d,g),p(n,s),p(n,b),p(n,w),p(n,v),p(v,I),p(n,L),p(n,_),p(n,k),p(n,F),p(F,q),p(n,tt),p(n,X),p(n,R),p(n,J),p(J,P),M(T,A,S)},p(T,S){S&1&&c!==(c=T[2]+"")&&$(g,c),S&1&&f!==(f=T[3]+"")&&$(I,f),S&1&&N!==(N=T[4]+"")&&$(q,N),S&1&&x!==(x=T[5]+"")&&$(P,x)},d(T){T&&(h(t),h(o),h(n),h(A))}}}function qn(e){let t,r,o=e[1]+"",n,a,i,l,d,c=e[10]+"",g,s;return{c(){t=y("span"),r=V("Game "),n=V(o),a=z(),i=y("br"),l=z(),d=y("small"),g=V(c),s=z(),this.h()},l(b){t=m(b,"SPAN",{slot:!0});var u=G(t);r=W(u,"Game "),n=W(u,o),a=E(u),i=m(u,"BR",{}),l=E(u),d=m(u,"SMALL",{});var w=G(d);g=W(w,c),w.forEach(h),s=E(u),u.forEach(h),this.h()},h(){B(t,"slot","header")},m(b,u){M(b,t,u),p(t,r),p(t,n),p(t,a),p(t,i),p(t,l),p(t,d),p(d,g),p(t,s)},p(b,u){u&1&&o!==(o=b[1]+"")&&$(n,o),u&1&&c!==(c=b[10]+"")&&$(g,c)},d(b){b&&h(t)}}}function Jn(e){let t,r="<b>Game stats</b>",o,n,a,i="Time finished:",l,d,c=e[2]+"",g,s,b,u="Highest answer streak:",w,v,f=e[3]+"",I,L,_,C="Correct answers:",k,F,N=e[4]+"",q,tt,X,j="Wrong answers:",R,J,x=e[5]+"",P,A;return{c(){t=y("p"),t.innerHTML=r,o=z(),n=y("div"),a=y("b"),a.textContent=i,l=z(),d=y("p"),g=V(c),s=z(),b=y("b"),b.textContent=u,w=z(),v=y("p"),I=V(f),L=z(),_=y("b"),_.textContent=C,k=z(),F=y("p"),q=V(N),tt=z(),X=y("b"),X.textContent=j,R=z(),J=y("p"),P=V(x),A=z(),this.h()},l(T){t=m(T,"P",{class:!0,"data-svelte-h":!0}),Q(t)!=="svelte-1wh4mz5"&&(t.innerHTML=r),o=E(T),n=m(T,"DIV",{class:!0});var S=G(n);a=m(S,"B",{"data-svelte-h":!0}),Q(a)!=="svelte-1m9m1rz"&&(a.textContent=i),l=E(S),d=m(S,"P",{});var at=G(d);g=W(at,c),at.forEach(h),s=E(S),b=m(S,"B",{"data-svelte-h":!0}),Q(b)!=="svelte-gfioqi"&&(b.textContent=u),w=E(S),v=m(S,"P",{});var lt=G(v);I=W(lt,f),lt.forEach(h),L=E(S),_=m(S,"B",{"data-svelte-h":!0}),Q(_)!=="svelte-16f3j3n"&&(_.textContent=C),k=E(S),F=m(S,"P",{});var it=G(F);q=W(it,N),it.forEach(h),tt=E(S),X=m(S,"B",{"data-svelte-h":!0}),Q(X)!=="svelte-ci7954"&&(X.textContent=j),R=E(S),J=m(S,"P",{});var dt=G(J);P=W(dt,x),dt.forEach(h),S.forEach(h),A=E(T),this.h()},h(){B(t,"class","flex justify-center mb-2 text-gray-500 dark:text-gray-400"),B(n,"class","stats")},m(T,S){M(T,t,S),M(T,o,S),M(T,n,S),p(n,a),p(n,l),p(n,d),p(d,g),p(n,s),p(n,b),p(n,w),p(n,v),p(v,I),p(n,L),p(n,_),p(n,k),p(n,F),p(F,q),p(n,tt),p(n,X),p(n,R),p(n,J),p(J,P),M(T,A,S)},p(T,S){S&1&&c!==(c=T[2]+"")&&$(g,c),S&1&&f!==(f=T[3]+"")&&$(I,f),S&1&&N!==(N=T[4]+"")&&$(q,N),S&1&&x!==(x=T[5]+"")&&$(P,x)},d(T){T&&(h(t),h(o),h(n),h(A))}}}function Zn(e){let t,r,o=e[1]+"",n,a,i,l,d,c=e[10]+"",g,s;return{c(){t=y("span"),r=V("Game "),n=V(o),a=z(),i=y("br"),l=z(),d=y("small"),g=V(c),s=z(),this.h()},l(b){t=m(b,"SPAN",{slot:!0});var u=G(t);r=W(u,"Game "),n=W(u,o),a=E(u),i=m(u,"BR",{}),l=E(u),d=m(u,"SMALL",{});var w=G(d);g=W(w,c),w.forEach(h),s=E(u),u.forEach(h),this.h()},h(){B(t,"slot","header")},m(b,u){M(b,t,u),p(t,r),p(t,n),p(t,a),p(t,i),p(t,l),p(t,d),p(d,g),p(t,s)},p(b,u){u&1&&o!==(o=b[1]+"")&&$(n,o),u&1&&c!==(c=b[10]+"")&&$(g,c)},d(b){b&&h(t)}}}function vr(e){let t,r,o,n;const a=[Vn,Un],i=[];function l(d,c){return d[6]==0&&d[7]==0?0:d[6]==1&&d[7]==0?1:-1}return~(t=l(e))&&(r=i[t]=a[t](e)),{c(){r&&r.c(),o=gt()},l(d){r&&r.l(d),o=gt()},m(d,c){~t&&i[t].m(d,c),M(d,o,c),n=!0},p(d,c){let g=t;t=l(d),t===g?~t&&i[t].p(d,c):(r&&(_t(),D(i[g],1,1,()=>{i[g]=null}),Ct()),~t?(r=i[t],r?r.p(d,c):(r=i[t]=a[t](d),r.c()),Y(r,1),r.m(o.parentNode,o)):r=null)},i(d){n||(Y(r),n=!0)},o(d){D(r),n=!1},d(d){d&&h(o),~t&&i[t].d(d)}}}function Kn(e){let t,r,o=Dt(e[0]),n=[];for(let i=0;i<o.length;i+=1)n[i]=vr(fr(e,o,i));const a=i=>D(n[i],1,1,()=>{n[i]=null});return{c(){for(let i=0;i<n.length;i+=1)n[i].c();t=gt()},l(i){for(let l=0;l<n.length;l+=1)n[l].l(i);t=gt()},m(i,l){for(let d=0;d<n.length;d+=1)n[d]&&n[d].m(i,l);M(i,t,l),r=!0},p(i,l){if(l&1){o=Dt(i[0]);let d;for(d=0;d<o.length;d+=1){const c=fr(i,o,d);n[d]?(n[d].p(c,l),Y(n[d],1)):(n[d]=vr(c),n[d].c(),Y(n[d],1),n[d].m(t.parentNode,t))}for(_t(),d=o.length;d<n.length;d+=1)a(d);Ct()}},i(i){if(!r){for(let l=0;l<o.length;l+=1)Y(n[l]);r=!0}},o(i){n=n.filter(Boolean);for(let l=0;l<n.length;l+=1)D(n[l]);r=!1},d(i){i&&h(t),xr(n,i)}}}function Qn(e){let t,r="<b>Match History</b>",o,n,a,i,l;return i=new Mr({props:{activeClasses:"bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800",inactiveClasses:"text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800",$$slots:{default:[Kn]},$$scope:{ctx:e}}}),{c(){t=y("p"),t.innerHTML=r,o=z(),n=y("br"),a=z(),yt(i.$$.fragment),this.h()},l(d){t=m(d,"P",{class:!0,"data-svelte-h":!0}),Q(t)!=="svelte-1nvdz2y"&&(t.innerHTML=r),o=E(d),n=m(d,"BR",{}),a=E(d),mt(i.$$.fragment,d),this.h()},h(){B(t,"class","flex justify-center text-sm text-gray-500 dark:text-gray-400")},m(d,c){M(d,t,c),M(d,o,c),M(d,n,c),M(d,a,c),kt(i,d,c),l=!0},p(d,c){const g={};c&16385&&(g.$$scope={dirty:c,ctx:d}),i.$set(g)},i(d){l||(Y(i.$$.fragment,d),l=!0)},o(d){D(i.$$.fragment,d),l=!1},d(d){d&&(h(t),h(o),h(n),h(a)),xt(i,d)}}}function $n(e){let t,r="Single Player";return{c(){t=y("span"),t.textContent=r,this.h()},l(o){t=m(o,"SPAN",{slot:!0,"data-svelte-h":!0}),Q(t)!=="svelte-1oh8azg"&&(t.textContent=r),this.h()},h(){B(t,"slot","title")},m(o,n){M(o,t,n)},p:Mt,d(o){o&&h(t)}}}function te(e){let t,r;return t=new Ut({props:{class:"bg-blue-200 hover:bg-blue-300",$$slots:{header:[ae],default:[oe]},$$scope:{ctx:e}}}),{c(){yt(t.$$.fragment)},l(o){mt(t.$$.fragment,o)},m(o,n){kt(t,o,n),r=!0},p(o,n){const a={};n&16385&&(a.$$scope={dirty:n,ctx:o}),t.$set(a)},i(o){r||(Y(t.$$.fragment,o),r=!0)},o(o){D(t.$$.fragment,o),r=!1},d(o){xt(t,o)}}}function re(e){let t,r;return t=new Ut({props:{class:"bg-red-200 hover:bg-red-300",$$slots:{header:[ce],default:[le]},$$scope:{ctx:e}}}),{c(){yt(t.$$.fragment)},l(o){mt(t.$$.fragment,o)},m(o,n){kt(t,o,n),r=!0},p(o,n){const a={};n&16385&&(a.$$scope={dirty:n,ctx:o}),t.$set(a)},i(o){r||(Y(t.$$.fragment,o),r=!0)},o(o){D(t.$$.fragment,o),r=!1},d(o){xt(t,o)}}}function ne(e){let t,r=e[9]+"",o;return{c(){t=y("p"),o=V(r),this.h()},l(n){t=m(n,"P",{class:!0});var a=G(t);o=W(a,r),a.forEach(h),this.h()},h(){B(t,"class","font-medium")},m(n,a){M(n,t,a),p(t,o)},p(n,a){a&1&&r!==(r=n[9]+"")&&$(o,r)},d(n){n&&h(t)}}}function ee(e){let t,r="No records";return{c(){t=y("p"),t.textContent=r,this.h()},l(o){t=m(o,"P",{style:!0,"data-svelte-h":!0}),Q(t)!=="svelte-12pg193"&&(t.textContent=r),this.h()},h(){_r(t,"font-style","italic")},m(o,n){M(o,t,n)},p:Mt,d(o){o&&h(t)}}}function oe(e){let t,r="<b>Game stats</b>",o,n,a,i="Winner:",l,d,c,g="Time finished:",s,b,u=e[2]+"",w,v,f,I="Highest answer streak:",L,_,C=e[3]+"",k,F,N,q="Correct answers:",tt,X,j=e[4]+"",R,J,x,P="Wrong answers:",A,T,S=e[5]+"",at,lt;function it(nt,O){return nt[9]==null||nt[9]==""?ee:ne}let dt=it(e),K=dt(e);return{c(){t=y("p"),t.innerHTML=r,o=z(),n=y("div"),a=y("b"),a.textContent=i,l=z(),K.c(),d=z(),c=y("b"),c.textContent=g,s=z(),b=y("p"),w=V(u),v=z(),f=y("b"),f.textContent=I,L=z(),_=y("p"),k=V(C),F=z(),N=y("b"),N.textContent=q,tt=z(),X=y("p"),R=V(j),J=z(),x=y("b"),x.textContent=P,A=z(),T=y("p"),at=V(S),lt=z(),this.h()},l(nt){t=m(nt,"P",{class:!0,"data-svelte-h":!0}),Q(t)!=="svelte-g0ir4h"&&(t.innerHTML=r),o=E(nt),n=m(nt,"DIV",{class:!0});var O=G(n);a=m(O,"B",{"data-svelte-h":!0}),Q(a)!=="svelte-18jrtuf"&&(a.textContent=i),l=E(O),K.l(O),d=E(O),c=m(O,"B",{"data-svelte-h":!0}),Q(c)!=="svelte-1m9m1rz"&&(c.textContent=g),s=E(O),b=m(O,"P",{});var st=G(b);w=W(st,u),st.forEach(h),v=E(O),f=m(O,"B",{"data-svelte-h":!0}),Q(f)!=="svelte-gfioqi"&&(f.textContent=I),L=E(O),_=m(O,"P",{});var Z=G(_);k=W(Z,C),Z.forEach(h),F=E(O),N=m(O,"B",{"data-svelte-h":!0}),Q(N)!=="svelte-16f3j3n"&&(N.textContent=q),tt=E(O),X=m(O,"P",{});var H=G(X);R=W(H,j),H.forEach(h),J=E(O),x=m(O,"B",{"data-svelte-h":!0}),Q(x)!=="svelte-ci7954"&&(x.textContent=P),A=E(O),T=m(O,"P",{});var Pt=G(T);at=W(Pt,S),Pt.forEach(h),O.forEach(h),lt=E(nt),this.h()},h(){B(t,"class","flex justify-center mb-2 text-gray-500 dark:text-gray-400"),B(n,"class","stats")},m(nt,O){M(nt,t,O),M(nt,o,O),M(nt,n,O),p(n,a),p(n,l),K.m(n,null),p(n,d),p(n,c),p(n,s),p(n,b),p(b,w),p(n,v),p(n,f),p(n,L),p(n,_),p(_,k),p(n,F),p(n,N),p(n,tt),p(n,X),p(X,R),p(n,J),p(n,x),p(n,A),p(n,T),p(T,at),M(nt,lt,O)},p(nt,O){dt===(dt=it(nt))&&K?K.p(nt,O):(K.d(1),K=dt(nt),K&&(K.c(),K.m(n,d))),O&1&&u!==(u=nt[2]+"")&&$(w,u),O&1&&C!==(C=nt[3]+"")&&$(k,C),O&1&&j!==(j=nt[4]+"")&&$(R,j),O&1&&S!==(S=nt[5]+"")&&$(at,S)},d(nt){nt&&(h(t),h(o),h(n),h(lt)),K.d()}}}function ae(e){let t,r,o=e[1]+"",n,a,i,l,d,c,g=e[8]+"",s,b,u,w,v,f=e[10]+"",I,L;return{c(){t=y("span"),r=V("Game "),n=V(o),a=z(),i=y("br"),l=z(),d=y("small"),c=V("Host: "),s=V(g),b=z(),u=y("br"),w=z(),v=y("small"),I=V(f),L=z(),this.h()},l(_){t=m(_,"SPAN",{slot:!0});var C=G(t);r=W(C,"Game "),n=W(C,o),a=E(C),i=m(C,"BR",{}),l=E(C),d=m(C,"SMALL",{});var k=G(d);c=W(k,"Host: "),s=W(k,g),k.forEach(h),b=E(C),u=m(C,"BR",{}),w=E(C),v=m(C,"SMALL",{});var F=G(v);I=W(F,f),F.forEach(h),L=E(C),C.forEach(h),this.h()},h(){B(t,"slot","header")},m(_,C){M(_,t,C),p(t,r),p(t,n),p(t,a),p(t,i),p(t,l),p(t,d),p(d,c),p(d,s),p(t,b),p(t,u),p(t,w),p(t,v),p(v,I),p(t,L)},p(_,C){C&1&&o!==(o=_[1]+"")&&$(n,o),C&1&&g!==(g=_[8]+"")&&$(s,g),C&1&&f!==(f=_[10]+"")&&$(I,f)},d(_){_&&h(t)}}}function ie(e){let t,r=e[9]+"",o;return{c(){t=y("p"),o=V(r)},l(n){t=m(n,"P",{});var a=G(t);o=W(a,r),a.forEach(h)},m(n,a){M(n,t,a),p(t,o)},p(n,a){a&1&&r!==(r=n[9]+"")&&$(o,r)},d(n){n&&h(t)}}}function de(e){let t,r="No records";return{c(){t=y("p"),t.textContent=r,this.h()},l(o){t=m(o,"P",{style:!0,"data-svelte-h":!0}),Q(t)!=="svelte-12pg193"&&(t.textContent=r),this.h()},h(){_r(t,"font-style","italic")},m(o,n){M(o,t,n)},p:Mt,d(o){o&&h(t)}}}function le(e){let t,r="<b>Game stats</b>",o,n,a,i,l,d,c="Winner:",g,s,b,u="Time finished:",w,v,f=e[2]+"",I,L,_,C="Highest answer streak:",k,F,N=e[3]+"",q,tt,X,j="Correct answers:",R,J,x=e[4]+"",P,A,T,S="Wrong answers:",at,lt,it=e[5]+"",dt,K;function nt(Z,H){return Z[9]==null||Z[9]==""?de:ie}let O=nt(e),st=O(e);return{c(){t=y("p"),t.innerHTML=r,o=z(),n=y("br"),a=y("br"),i=z(),l=y("div"),d=y("b"),d.textContent=c,g=z(),st.c(),s=z(),b=y("b"),b.textContent=u,w=z(),v=y("p"),I=V(f),L=z(),_=y("b"),_.textContent=C,k=z(),F=y("p"),q=V(N),tt=z(),X=y("b"),X.textContent=j,R=z(),J=y("p"),P=V(x),A=z(),T=y("b"),T.textContent=S,at=z(),lt=y("p"),dt=V(it),K=z(),this.h()},l(Z){t=m(Z,"P",{class:!0,"data-svelte-h":!0}),Q(t)!=="svelte-g0ir4h"&&(t.innerHTML=r),o=E(Z),n=m(Z,"BR",{}),a=m(Z,"BR",{}),i=E(Z),l=m(Z,"DIV",{class:!0});var H=G(l);d=m(H,"B",{"data-svelte-h":!0}),Q(d)!=="svelte-18jrtuf"&&(d.textContent=c),g=E(H),st.l(H),s=E(H),b=m(H,"B",{"data-svelte-h":!0}),Q(b)!=="svelte-1m9m1rz"&&(b.textContent=u),w=E(H),v=m(H,"P",{});var Pt=G(v);I=W(Pt,f),Pt.forEach(h),L=E(H),_=m(H,"B",{"data-svelte-h":!0}),Q(_)!=="svelte-gfioqi"&&(_.textContent=C),k=E(H),F=m(H,"P",{});var tr=G(F);q=W(tr,N),tr.forEach(h),tt=E(H),X=m(H,"B",{"data-svelte-h":!0}),Q(X)!=="svelte-16f3j3n"&&(X.textContent=j),R=E(H),J=m(H,"P",{});var rr=G(J);P=W(rr,x),rr.forEach(h),A=E(H),T=m(H,"B",{"data-svelte-h":!0}),Q(T)!=="svelte-ci7954"&&(T.textContent=S),at=E(H),lt=m(H,"P",{});var nr=G(lt);dt=W(nr,it),nr.forEach(h),H.forEach(h),K=E(Z),this.h()},h(){B(t,"class","flex justify-center mb-2 text-gray-500 dark:text-gray-400"),B(l,"class","stats")},m(Z,H){M(Z,t,H),M(Z,o,H),M(Z,n,H),M(Z,a,H),M(Z,i,H),M(Z,l,H),p(l,d),p(l,g),st.m(l,null),p(l,s),p(l,b),p(l,w),p(l,v),p(v,I),p(l,L),p(l,_),p(l,k),p(l,F),p(F,q),p(l,tt),p(l,X),p(l,R),p(l,J),p(J,P),p(l,A),p(l,T),p(l,at),p(l,lt),p(lt,dt),M(Z,K,H)},p(Z,H){O===(O=nt(Z))&&st?st.p(Z,H):(st.d(1),st=O(Z),st&&(st.c(),st.m(l,s))),H&1&&f!==(f=Z[2]+"")&&$(I,f),H&1&&N!==(N=Z[3]+"")&&$(q,N),H&1&&x!==(x=Z[4]+"")&&$(P,x),H&1&&it!==(it=Z[5]+"")&&$(dt,it)},d(Z){Z&&(h(t),h(o),h(n),h(a),h(i),h(l),h(K)),st.d()}}}function ce(e){let t,r,o=e[1]+"",n,a,i,l,d,c,g=e[8]+"",s,b,u,w,v,f=e[10]+"",I,L;return{c(){t=y("span"),r=V("Game "),n=V(o),a=z(),i=y("br"),l=z(),d=y("small"),c=V("Host: "),s=V(g),b=z(),u=y("br"),w=z(),v=y("small"),I=V(f),L=z(),this.h()},l(_){t=m(_,"SPAN",{slot:!0});var C=G(t);r=W(C,"Game "),n=W(C,o),a=E(C),i=m(C,"BR",{}),l=E(C),d=m(C,"SMALL",{});var k=G(d);c=W(k,"Host: "),s=W(k,g),k.forEach(h),b=E(C),u=m(C,"BR",{}),w=E(C),v=m(C,"SMALL",{});var F=G(v);I=W(F,f),F.forEach(h),L=E(C),C.forEach(h),this.h()},h(){B(t,"slot","header")},m(_,C){M(_,t,C),p(t,r),p(t,n),p(t,a),p(t,i),p(t,l),p(t,d),p(d,c),p(d,s),p(t,b),p(t,u),p(t,w),p(t,v),p(v,I),p(t,L)},p(_,C){C&1&&o!==(o=_[1]+"")&&$(n,o),C&1&&g!==(g=_[8]+"")&&$(s,g),C&1&&f!==(f=_[10]+"")&&$(I,f)},d(_){_&&h(t)}}}function yr(e){let t,r,o,n;const a=[re,te],i=[];function l(d,c){return d[6]==0&&d[7]==1?0:d[6]==1&&d[7]==1?1:-1}return~(t=l(e))&&(r=i[t]=a[t](e)),{c(){r&&r.c(),o=gt()},l(d){r&&r.l(d),o=gt()},m(d,c){~t&&i[t].m(d,c),M(d,o,c),n=!0},p(d,c){let g=t;t=l(d),t===g?~t&&i[t].p(d,c):(r&&(_t(),D(i[g],1,1,()=>{i[g]=null}),Ct()),~t?(r=i[t],r?r.p(d,c):(r=i[t]=a[t](d),r.c()),Y(r,1),r.m(o.parentNode,o)):r=null)},i(d){n||(Y(r),n=!0)},o(d){D(r),n=!1},d(d){d&&h(o),~t&&i[t].d(d)}}}function se(e){let t,r,o=Dt(e[0]),n=[];for(let i=0;i<o.length;i+=1)n[i]=yr(hr(e,o,i));const a=i=>D(n[i],1,1,()=>{n[i]=null});return{c(){for(let i=0;i<n.length;i+=1)n[i].c();t=gt()},l(i){for(let l=0;l<n.length;l+=1)n[l].l(i);t=gt()},m(i,l){for(let d=0;d<n.length;d+=1)n[d]&&n[d].m(i,l);M(i,t,l),r=!0},p(i,l){if(l&1){o=Dt(i[0]);let d;for(d=0;d<o.length;d+=1){const c=hr(i,o,d);n[d]?(n[d].p(c,l),Y(n[d],1)):(n[d]=yr(c),n[d].c(),Y(n[d],1),n[d].m(t.parentNode,t))}for(_t(),d=o.length;d<n.length;d+=1)a(d);Ct()}},i(i){if(!r){for(let l=0;l<o.length;l+=1)Y(n[l]);r=!0}},o(i){n=n.filter(Boolean);for(let l=0;l<n.length;l+=1)D(n[l]);r=!1},d(i){i&&h(t),xr(n,i)}}}function ge(e){let t,r="<b>Match History</b>",o,n,a,i,l;return i=new Mr({props:{activeClasses:"bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800",inactiveClasses:"text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800",$$slots:{default:[se]},$$scope:{ctx:e}}}),{c(){t=y("p"),t.innerHTML=r,o=z(),n=y("br"),a=z(),yt(i.$$.fragment),this.h()},l(d){t=m(d,"P",{class:!0,"data-svelte-h":!0}),Q(t)!=="svelte-1nvdz2y"&&(t.innerHTML=r),o=E(d),n=m(d,"BR",{}),a=E(d),mt(i.$$.fragment,d),this.h()},h(){B(t,"class","flex justify-center text-sm text-gray-500 dark:text-gray-400")},m(d,c){M(d,t,c),M(d,o,c),M(d,n,c),M(d,a,c),kt(i,d,c),l=!0},p(d,c){const g={};c&16385&&(g.$$scope={dirty:c,ctx:d}),i.$set(g)},i(d){l||(Y(i.$$.fragment,d),l=!0)},o(d){D(i.$$.fragment,d),l=!1},d(d){d&&(h(t),h(o),h(n),h(a)),xt(i,d)}}}function pe(e){let t,r="Multiplayer";return{c(){t=y("span"),t.textContent=r,this.h()},l(o){t=m(o,"SPAN",{slot:!0,"data-svelte-h":!0}),Q(t)!=="svelte-pcknyd"&&(t.textContent=r),this.h()},h(){B(t,"slot","title")},m(o,n){M(o,t,n)},p:Mt,d(o){o&&h(t)}}}function be(e){let t,r,o,n;return t=new pr({props:{class:"w-full",open:!0,$$slots:{title:[$n],default:[Qn]},$$scope:{ctx:e}}}),o=new pr({props:{class:"w-full",$$slots:{title:[pe],default:[ge]},$$scope:{ctx:e}}}),{c(){yt(t.$$.fragment),r=z(),yt(o.$$.fragment)},l(a){mt(t.$$.fragment,a),r=E(a),mt(o.$$.fragment,a)},m(a,i){kt(t,a,i),M(a,r,i),kt(o,a,i),n=!0},p(a,i){const l={};i&16385&&(l.$$scope={dirty:i,ctx:a}),t.$set(l);const d={};i&16385&&(d.$$scope={dirty:i,ctx:a}),o.$set(d)},i(a){n||(Y(t.$$.fragment,a),Y(o.$$.fragment,a),n=!0)},o(a){D(t.$$.fragment,a),D(o.$$.fragment,a),n=!1},d(a){a&&h(r),xt(t,a),xt(o,a)}}}function we(e){let t;return{c(){t=V("Back")},l(r){t=W(r,"Back")},m(r,o){M(r,t,o)},d(r){r&&h(t)}}}function ue(e){let t,r,o,n,a,i,l,d,c,g=`/*
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
}\r
		.container {
  width: 100%;
}\r
		@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}\r
		@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}\r
		@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}\r
		@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}\r
		@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}\r
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
}\r
		.pointer-events-none {
  pointer-events: none;
}\r
		.visible {
  visibility: visible;
}\r
		.static {
  position: static;
}\r
		.fixed {
  position: fixed;
}\r
		.absolute {
  position: absolute;
}\r
		.relative {
  position: relative;
}\r
		.sticky {
  position: sticky;
}\r
		.-inset-1 {
  inset: -0.25rem;
}\r
		.inset-0 {
  inset: 0px;
}\r
		.inset-x-0 {
  left: 0px;
  right: 0px;
}\r
		.inset-y-0 {
  top: 0px;
  bottom: 0px;
}\r
		.-left-1 {
  left: -0.25rem;
}\r
		.-left-1\\.5 {
  left: -0.375rem;
}\r
		.-left-14 {
  left: -3.5rem;
}\r
		.-left-3 {
  left: -0.75rem;
}\r
		.-left-\\[17px\\] {
  left: -17px;
}\r
		.-right-\\[16px\\] {
  right: -16px;
}\r
		.-right-\\[17px\\] {
  right: -17px;
}\r
		.bottom-0 {
  bottom: 0px;
}\r
		.bottom-4 {
  bottom: 1rem;
}\r
		.bottom-5 {
  bottom: 1.25rem;
}\r
		.bottom-6 {
  bottom: 1.5rem;
}\r
		.left-0 {
  left: 0px;
}\r
		.left-1 {
  left: 0.25rem;
}\r
		.left-1\\/2 {
  left: 50%;
}\r
		.left-2 {
  left: 0.5rem;
}\r
		.left-2\\.5 {
  left: 0.625rem;
}\r
		.left-5 {
  left: 1.25rem;
}\r
		.right-0 {
  right: 0px;
}\r
		.right-2 {
  right: 0.5rem;
}\r
		.right-2\\.5 {
  right: 0.625rem;
}\r
		.right-5 {
  right: 1.25rem;
}\r
		.right-6 {
  right: 1.5rem;
}\r
		.top-0 {
  top: 0px;
}\r
		.top-1 {
  top: 0.25rem;
}\r
		.top-1\\/2 {
  top: 50%;
}\r
		.top-2 {
  top: 0.5rem;
}\r
		.top-3 {
  top: 0.75rem;
}\r
		.top-4 {
  top: 1rem;
}\r
		.top-5 {
  top: 1.25rem;
}\r
		.top-6 {
  top: 1.5rem;
}\r
		.top-\\[124px\\] {
  top: 124px;
}\r
		.top-\\[142px\\] {
  top: 142px;
}\r
		.top-\\[178px\\] {
  top: 178px;
}\r
		.top-\\[40px\\] {
  top: 40px;
}\r
		.top-\\[72px\\] {
  top: 72px;
}\r
		.top-\\[88px\\] {
  top: 88px;
}\r
		.top-\\[calc\\(100\\%\\+1rem\\)\\] {
  top: calc(100% + 1rem);
}\r
		.-z-10 {
  z-index: -10;
}\r
		.z-0 {
  z-index: 0;
}\r
		.z-10 {
  z-index: 10;
}\r
		.z-30 {
  z-index: 30;
}\r
		.z-40 {
  z-index: 40;
}\r
		.z-50 {
  z-index: 50;
}\r
		.col-span-2 {
  grid-column: span 2 / span 2;
}\r
		.m-0 {
  margin: 0px;
}\r
		.m-0\\.5 {
  margin: 0.125rem;
}\r
		.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}\r
		.-mx-1\\.5 {
  margin-left: -0.375rem;
  margin-right: -0.375rem;
}\r
		.-my-1 {
  margin-top: -0.25rem;
  margin-bottom: -0.25rem;
}\r
		.-my-1\\.5 {
  margin-top: -0.375rem;
  margin-bottom: -0.375rem;
}\r
		.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}\r
		.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}\r
		.mx-auto {
  margin-left: auto;
  margin-right: auto;
}\r
		.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}\r
		.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}\r
		.my-8 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}\r
		.-mb-px {
  margin-bottom: -1px;
}\r
		.-ml-4 {
  margin-left: -1rem;
}\r
		.-mr-1 {
  margin-right: -0.25rem;
}\r
		.-mr-1\\.5 {
  margin-right: -0.375rem;
}\r
		.-mt-px {
  margin-top: -1px;
}\r
		.mb-1 {
  margin-bottom: 0.25rem;
}\r
		.mb-10 {
  margin-bottom: 2.5rem;
}\r
		.mb-2 {
  margin-bottom: 0.5rem;
}\r
		.mb-2\\.5 {
  margin-bottom: 0.625rem;
}\r
		.mb-3 {
  margin-bottom: 0.75rem;
}\r
		.mb-4 {
  margin-bottom: 1rem;
}\r
		.mb-5 {
  margin-bottom: 1.25rem;
}\r
		.mb-6 {
  margin-bottom: 1.5rem;
}\r
		.mb-px {
  margin-bottom: 1px;
}\r
		.ml-1 {
  margin-left: 0.25rem;
}\r
		.ml-1\\.5 {
  margin-left: 0.375rem;
}\r
		.ml-2 {
  margin-left: 0.5rem;
}\r
		.ml-3 {
  margin-left: 0.75rem;
}\r
		.ml-4 {
  margin-left: 1rem;
}\r
		.ml-6 {
  margin-left: 1.5rem;
}\r
		.ml-auto {
  margin-left: auto;
}\r
		.mr-1 {
  margin-right: 0.25rem;
}\r
		.mr-2 {
  margin-right: 0.5rem;
}\r
		.mr-3 {
  margin-right: 0.75rem;
}\r
		.mr-4 {
  margin-right: 1rem;
}\r
		.mt-1 {
  margin-top: 0.25rem;
}\r
		.mt-1\\.5 {
  margin-top: 0.375rem;
}\r
		.mt-2 {
  margin-top: 0.5rem;
}\r
		.mt-3 {
  margin-top: 0.75rem;
}\r
		.mt-4 {
  margin-top: 1rem;
}\r
		.mt-6 {
  margin-top: 1.5rem;
}\r
		.block {
  display: block;
}\r
		.inline-block {
  display: inline-block;
}\r
		.inline {
  display: inline;
}\r
		.flex {
  display: flex;
}\r
		.inline-flex {
  display: inline-flex;
}\r
		.table {
  display: table;
}\r
		.grid {
  display: grid;
}\r
		.contents {
  display: contents;
}\r
		.\\!hidden {
  display: none !important;
}\r
		.hidden {
  display: none;
}\r
		.h-0 {
  height: 0px;
}\r
		.h-0\\.5 {
  height: 0.125rem;
}\r
		.h-1 {
  height: 0.25rem;
}\r
		.h-10 {
  height: 2.5rem;
}\r
		.h-12 {
  height: 3rem;
}\r
		.h-14 {
  height: 3.5rem;
}\r
		.h-16 {
  height: 4rem;
}\r
		.h-2 {
  height: 0.5rem;
}\r
		.h-2\\.5 {
  height: 0.625rem;
}\r
		.h-20 {
  height: 5rem;
}\r
		.h-24 {
  height: 6rem;
}\r
		.h-3 {
  height: 0.75rem;
}\r
		.h-3\\.5 {
  height: 0.875rem;
}\r
		.h-36 {
  height: 9rem;
}\r
		.h-4 {
  height: 1rem;
}\r
		.h-48 {
  height: 12rem;
}\r
		.h-5 {
  height: 1.25rem;
}\r
		.h-56 {
  height: 14rem;
}\r
		.h-6 {
  height: 1.5rem;
}\r
		.h-64 {
  height: 16rem;
}\r
		.h-7 {
  height: 1.75rem;
}\r
		.h-72 {
  height: 18rem;
}\r
		.h-8 {
  height: 2rem;
}\r
		.h-80 {
  height: 20rem;
}\r
		.h-9 {
  height: 2.25rem;
}\r
		.h-96 {
  height: 24rem;
}\r
		.h-\\[10px\\] {
  height: 10px;
}\r
		.h-\\[140px\\] {
  height: 140px;
}\r
		.h-\\[156px\\] {
  height: 156px;
}\r
		.h-\\[172px\\] {
  height: 172px;
}\r
		.h-\\[17px\\] {
  height: 17px;
}\r
		.h-\\[18px\\] {
  height: 18px;
}\r
		.h-\\[193px\\] {
  height: 193px;
}\r
		.h-\\[213px\\] {
  height: 213px;
}\r
		.h-\\[24px\\] {
  height: 24px;
}\r
		.h-\\[32px\\] {
  height: 32px;
}\r
		.h-\\[41px\\] {
  height: 41px;
}\r
		.h-\\[426px\\] {
  height: 426px;
}\r
		.h-\\[454px\\] {
  height: 454px;
}\r
		.h-\\[46px\\] {
  height: 46px;
}\r
		.h-\\[52px\\] {
  height: 52px;
}\r
		.h-\\[55px\\] {
  height: 55px;
}\r
		.h-\\[572px\\] {
  height: 572px;
}\r
		.h-\\[5px\\] {
  height: 5px;
}\r
		.h-\\[600px\\] {
  height: 600px;
}\r
		.h-\\[63px\\] {
  height: 63px;
}\r
		.h-\\[64px\\] {
  height: 64px;
}\r
		.h-auto {
  height: auto;
}\r
		.h-full {
  height: 100%;
}\r
		.h-modal {
  height: calc(100% - 2rem);
}\r
		.h-px {
  height: 1px;
}\r
		.max-h-64 {
  max-height: 16rem;
}\r
		.max-h-full {
  max-height: 100%;
}\r
		.w-1 {
  width: 0.25rem;
}\r
		.w-1\\/2 {
  width: 50%;
}\r
		.w-10 {
  width: 2.5rem;
}\r
		.w-10\\/12 {
  width: 83.333333%;
}\r
		.w-11 {
  width: 2.75rem;
}\r
		.w-11\\/12 {
  width: 91.666667%;
}\r
		.w-12 {
  width: 3rem;
}\r
		.w-14 {
  width: 3.5rem;
}\r
		.w-2 {
  width: 0.5rem;
}\r
		.w-2\\.5 {
  width: 0.625rem;
}\r
		.w-2\\/4 {
  width: 50%;
}\r
		.w-20 {
  width: 5rem;
}\r
		.w-24 {
  width: 6rem;
}\r
		.w-3 {
  width: 0.75rem;
}\r
		.w-3\\.5 {
  width: 0.875rem;
}\r
		.w-32 {
  width: 8rem;
}\r
		.w-36 {
  width: 9rem;
}\r
		.w-4 {
  width: 1rem;
}\r
		.w-48 {
  width: 12rem;
}\r
		.w-5 {
  width: 1.25rem;
}\r
		.w-6 {
  width: 1.5rem;
}\r
		.w-64 {
  width: 16rem;
}\r
		.w-8 {
  width: 2rem;
}\r
		.w-8\\/12 {
  width: 66.666667%;
}\r
		.w-80 {
  width: 20rem;
}\r
		.w-9 {
  width: 2.25rem;
}\r
		.w-9\\/12 {
  width: 75%;
}\r
		.w-\\[100\\%\\] {
  width: 100%;
}\r
		.w-\\[10px\\] {
  width: 10px;
}\r
		.w-\\[148px\\] {
  width: 148px;
}\r
		.w-\\[188px\\] {
  width: 188px;
}\r
		.w-\\[1px\\] {
  width: 1px;
}\r
		.w-\\[208px\\] {
  width: 208px;
}\r
		.w-\\[272px\\] {
  width: 272px;
}\r
		.w-\\[300px\\] {
  width: 300px;
}\r
		.w-\\[3px\\] {
  width: 3px;
}\r
		.w-\\[52px\\] {
  width: 52px;
}\r
		.w-\\[56px\\] {
  width: 56px;
}\r
		.w-\\[6px\\] {
  width: 6px;
}\r
		.w-\\[calc\\(100\\%-2rem\\)\\] {
  width: calc(100% - 2rem);
}\r
		.w-full {
  width: 100%;
}\r
		.min-w-\\[100\\%\\] {
  min-width: 100%;
}\r
		.max-w-2xl {
  max-width: 42rem;
}\r
		.max-w-4xl {
  max-width: 56rem;
}\r
		.max-w-7xl {
  max-width: 80rem;
}\r
		.max-w-\\[133px\\] {
  max-width: 133px;
}\r
		.max-w-\\[301px\\] {
  max-width: 301px;
}\r
		.max-w-\\[341px\\] {
  max-width: 341px;
}\r
		.max-w-\\[351px\\] {
  max-width: 351px;
}\r
		.max-w-\\[540px\\] {
  max-width: 540px;
}\r
		.max-w-\\[640px\\] {
  max-width: 640px;
}\r
		.max-w-\\[83px\\] {
  max-width: 83px;
}\r
		.max-w-full {
  max-width: 100%;
}\r
		.max-w-lg {
  max-width: 32rem;
}\r
		.max-w-md {
  max-width: 28rem;
}\r
		.max-w-screen-md {
  max-width: 768px;
}\r
		.max-w-screen-xl {
  max-width: 1280px;
}\r
		.max-w-sm {
  max-width: 24rem;
}\r
		.max-w-xl {
  max-width: 36rem;
}\r
		.max-w-xs {
  max-width: 20rem;
}\r
		.flex-1 {
  flex: 1 1 0%;
}\r
		.flex-shrink-0 {
  flex-shrink: 0;
}\r
		.shrink-0 {
  flex-shrink: 0;
}\r
		.origin-\\[0\\] {
  transform-origin: 0;
}\r
		.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.-translate-x-1\\/3 {
  --tw-translate-x: -33.333333%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.-translate-y-1\\/3 {
  --tw-translate-y: -33.333333%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.-translate-y-4 {
  --tw-translate-y: -1rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.translate-x-1\\/3 {
  --tw-translate-x: 33.333333%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.translate-y-1\\/3 {
  --tw-translate-y: 33.333333%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		@keyframes pulse {

  50% {
    opacity: .5;
  }
}\r
		.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}\r
		@keyframes spin {

  to {
    transform: rotate(360deg);
  }
}\r
		.animate-spin {
  animation: spin 1s linear infinite;
}\r
		.cursor-not-allowed {
  cursor: not-allowed;
}\r
		.cursor-pointer {
  cursor: pointer;
}\r
		.resize {
  resize: both;
}\r
		.list-inside {
  list-style-position: inside;
}\r
		.list-outside {
  list-style-position: outside;
}\r
		.list-decimal {
  list-style-type: decimal;
}\r
		.list-disc {
  list-style-type: disc;
}\r
		.list-none {
  list-style-type: none;
}\r
		.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}\r
		.grid-flow-row {
  grid-auto-flow: row;
}\r
		.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}\r
		.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}\r
		.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}\r
		.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}\r
		.grid-cols-7 {
  grid-template-columns: repeat(7, minmax(0, 1fr));
}\r
		.flex-row {
  flex-direction: row;
}\r
		.flex-col {
  flex-direction: column;
}\r
		.flex-col-reverse {
  flex-direction: column-reverse;
}\r
		.flex-wrap {
  flex-wrap: wrap;
}\r
		.items-start {
  align-items: flex-start;
}\r
		.items-end {
  align-items: flex-end;
}\r
		.items-center {
  align-items: center;
}\r
		.items-baseline {
  align-items: baseline;
}\r
		.justify-start {
  justify-content: flex-start;
}\r
		.justify-end {
  justify-content: flex-end;
}\r
		.justify-center {
  justify-content: center;
}\r
		.justify-between {
  justify-content: space-between;
}\r
		.justify-around {
  justify-content: space-around;
}\r
		.gap-1 {
  gap: 0.25rem;
}\r
		.gap-2 {
  gap: 0.5rem;
}\r
		.gap-3 {
  gap: 0.75rem;
}\r
		.gap-8 {
  gap: 2rem;
}\r
		.gap-y-4 {
  row-gap: 1rem;
}\r
		.-space-x-px > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-1px * var(--tw-space-x-reverse));
  margin-left: calc(-1px * calc(1 - var(--tw-space-x-reverse)));
}\r
		.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}\r
		.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}\r
		.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}\r
		.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}\r
		.space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}\r
		.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}\r
		.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}\r
		.space-y-2\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.625rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.625rem * var(--tw-space-y-reverse));
}\r
		.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}\r
		.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}\r
		.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2rem * var(--tw-space-y-reverse));
}\r
		.divide-x > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
}\r
		.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}\r
		.divide-blue-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(164 202 254 / var(--tw-divide-opacity));
}\r
		.divide-blue-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(118 169 250 / var(--tw-divide-opacity));
}\r
		.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-divide-opacity));
}\r
		.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-divide-opacity));
}\r
		.divide-gray-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-divide-opacity));
}\r
		.divide-gray-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(156 163 175 / var(--tw-divide-opacity));
}\r
		.divide-gray-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-divide-opacity));
}\r
		.divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-divide-opacity));
}\r
		.divide-green-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(132 225 188 / var(--tw-divide-opacity));
}\r
		.divide-green-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(49 196 141 / var(--tw-divide-opacity));
}\r
		.divide-indigo-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(180 198 252 / var(--tw-divide-opacity));
}\r
		.divide-indigo-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(141 162 251 / var(--tw-divide-opacity));
}\r
		.divide-orange-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(253 186 140 / var(--tw-divide-opacity));
}\r
		.divide-pink-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(248 180 217 / var(--tw-divide-opacity));
}\r
		.divide-pink-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(241 126 184 / var(--tw-divide-opacity));
}\r
		.divide-primary-500 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(254 121 93 / var(--tw-divide-opacity));
}\r
		.divide-purple-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(202 191 253 / var(--tw-divide-opacity));
}\r
		.divide-purple-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(172 148 250 / var(--tw-divide-opacity));
}\r
		.divide-red-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(248 180 180 / var(--tw-divide-opacity));
}\r
		.divide-red-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(249 128 128 / var(--tw-divide-opacity));
}\r
		.divide-yellow-300 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(250 202 21 / var(--tw-divide-opacity));
}\r
		.divide-yellow-400 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(227 160 8 / var(--tw-divide-opacity));
}\r
		.self-center {
  align-self: center;
}\r
		.overflow-hidden {
  overflow: hidden;
}\r
		.overflow-x-auto {
  overflow-x: auto;
}\r
		.overflow-y-auto {
  overflow-y: auto;
}\r
		.overflow-y-scroll {
  overflow-y: scroll;
}\r
		.overscroll-contain {
  overscroll-behavior: contain;
}\r
		.whitespace-normal {
  white-space: normal;
}\r
		.whitespace-nowrap {
  white-space: nowrap;
}\r
		.whitespace-pre {
  white-space: pre;
}\r
		.whitespace-pre-line {
  white-space: pre-line;
}\r
		.whitespace-pre-wrap {
  white-space: pre-wrap;
}\r
		.\\!rounded-md {
  border-radius: 0.375rem !important;
}\r
		.rounded {
  border-radius: 0.25rem;
}\r
		.rounded-\\[2\\.5rem\\] {
  border-radius: 2.5rem;
}\r
		.rounded-\\[2rem\\] {
  border-radius: 2rem;
}\r
		.rounded-full {
  border-radius: 9999px;
}\r
		.rounded-lg {
  border-radius: 0.5rem;
}\r
		.rounded-sm {
  border-radius: 0.125rem;
}\r
		.rounded-xl {
  border-radius: 0.75rem;
}\r
		.rounded-b {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}\r
		.rounded-b-\\[1rem\\] {
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
}\r
		.rounded-b-\\[2\\.5rem\\] {
  border-bottom-right-radius: 2.5rem;
  border-bottom-left-radius: 2.5rem;
}\r
		.rounded-b-lg {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
		.rounded-b-xl {
  border-bottom-right-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}\r
		.rounded-l {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}\r
		.rounded-l-full {
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
}\r
		.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
		.rounded-r {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}\r
		.rounded-r-full {
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
}\r
		.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}\r
		.rounded-t {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}\r
		.rounded-t-\\[2\\.5rem\\] {
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
}\r
		.rounded-t-lg {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}\r
		.rounded-t-md {
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
}\r
		.rounded-t-sm {
  border-top-left-radius: 0.125rem;
  border-top-right-radius: 0.125rem;
}\r
		.rounded-t-xl {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}\r
		.\\!border-0 {
  border-width: 0px !important;
}\r
		.border {
  border-width: 1px;
}\r
		.border-0 {
  border-width: 0px;
}\r
		.border-2 {
  border-width: 2px;
}\r
		.border-\\[10px\\] {
  border-width: 10px;
}\r
		.border-\\[14px\\] {
  border-width: 14px;
}\r
		.border-\\[16px\\] {
  border-width: 16px;
}\r
		.border-\\[8px\\] {
  border-width: 8px;
}\r
		.border-x {
  border-left-width: 1px;
  border-right-width: 1px;
}\r
		.border-y {
  border-top-width: 1px;
  border-bottom-width: 1px;
}\r
		.border-b {
  border-bottom-width: 1px;
}\r
		.border-b-2 {
  border-bottom-width: 2px;
}\r
		.border-l {
  border-left-width: 1px;
}\r
		.border-l-0 {
  border-left-width: 0px;
}\r
		.border-l-4 {
  border-left-width: 4px;
}\r
		.border-r {
  border-right-width: 1px;
}\r
		.border-t {
  border-top-width: 1px;
}\r
		.border-dashed {
  border-style: dashed;
}\r
		.border-blue-300 {
  --tw-border-opacity: 1;
  border-color: rgb(164 202 254 / var(--tw-border-opacity));
}\r
		.border-blue-400 {
  --tw-border-opacity: 1;
  border-color: rgb(118 169 250 / var(--tw-border-opacity));
}\r
		.border-blue-700 {
  --tw-border-opacity: 1;
  border-color: rgb(26 86 219 / var(--tw-border-opacity));
}\r
		.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}\r
		.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}\r
		.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}\r
		.border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}\r
		.border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
		.border-gray-800 {
  --tw-border-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-border-opacity));
}\r
		.border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}\r
		.border-green-300 {
  --tw-border-opacity: 1;
  border-color: rgb(132 225 188 / var(--tw-border-opacity));
}\r
		.border-green-400 {
  --tw-border-opacity: 1;
  border-color: rgb(49 196 141 / var(--tw-border-opacity));
}\r
		.border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}\r
		.border-green-600 {
  --tw-border-opacity: 1;
  border-color: rgb(5 122 85 / var(--tw-border-opacity));
}\r
		.border-green-700 {
  --tw-border-opacity: 1;
  border-color: rgb(4 108 78 / var(--tw-border-opacity));
}\r
		.border-indigo-300 {
  --tw-border-opacity: 1;
  border-color: rgb(180 198 252 / var(--tw-border-opacity));
}\r
		.border-indigo-400 {
  --tw-border-opacity: 1;
  border-color: rgb(141 162 251 / var(--tw-border-opacity));
}\r
		.border-inherit {
  border-color: inherit;
}\r
		.border-orange-300 {
  --tw-border-opacity: 1;
  border-color: rgb(253 186 140 / var(--tw-border-opacity));
}\r
		.border-pink-300 {
  --tw-border-opacity: 1;
  border-color: rgb(248 180 217 / var(--tw-border-opacity));
}\r
		.border-pink-400 {
  --tw-border-opacity: 1;
  border-color: rgb(241 126 184 / var(--tw-border-opacity));
}\r
		.border-primary-400 {
  --tw-border-opacity: 1;
  border-color: rgb(255 188 173 / var(--tw-border-opacity));
}\r
		.border-primary-500 {
  --tw-border-opacity: 1;
  border-color: rgb(254 121 93 / var(--tw-border-opacity));
}\r
		.border-primary-600 {
  --tw-border-opacity: 1;
  border-color: rgb(239 86 47 / var(--tw-border-opacity));
}\r
		.border-primary-700 {
  --tw-border-opacity: 1;
  border-color: rgb(235 79 39 / var(--tw-border-opacity));
}\r
		.border-purple-300 {
  --tw-border-opacity: 1;
  border-color: rgb(202 191 253 / var(--tw-border-opacity));
}\r
		.border-purple-400 {
  --tw-border-opacity: 1;
  border-color: rgb(172 148 250 / var(--tw-border-opacity));
}\r
		.border-purple-700 {
  --tw-border-opacity: 1;
  border-color: rgb(108 43 217 / var(--tw-border-opacity));
}\r
		.border-red-300 {
  --tw-border-opacity: 1;
  border-color: rgb(248 180 180 / var(--tw-border-opacity));
}\r
		.border-red-400 {
  --tw-border-opacity: 1;
  border-color: rgb(249 128 128 / var(--tw-border-opacity));
}\r
		.border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}\r
		.border-red-600 {
  --tw-border-opacity: 1;
  border-color: rgb(224 36 36 / var(--tw-border-opacity));
}\r
		.border-red-700 {
  --tw-border-opacity: 1;
  border-color: rgb(200 30 30 / var(--tw-border-opacity));
}\r
		.border-transparent {
  border-color: transparent;
}\r
		.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}\r
		.border-yellow-300 {
  --tw-border-opacity: 1;
  border-color: rgb(250 202 21 / var(--tw-border-opacity));
}\r
		.border-yellow-400 {
  --tw-border-opacity: 1;
  border-color: rgb(227 160 8 / var(--tw-border-opacity));
}\r
		.bg-blue-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(225 239 254 / var(--tw-bg-opacity));
}\r
		.bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}\r
		.bg-blue-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(235 245 255 / var(--tw-bg-opacity));
}\r
		.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}\r
		.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
		.bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
		.bg-blue-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}\r
		.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}\r
		.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}\r
		.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
		.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}\r
		.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}\r
		.bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
		.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
		.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
		.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
		.bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(222 247 236 / var(--tw-bg-opacity));
}\r
		.bg-green-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 250 247 / var(--tw-bg-opacity));
}\r
		.bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(14 159 110 / var(--tw-bg-opacity));
}\r
		.bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
		.bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
		.bg-green-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}\r
		.bg-indigo-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 237 255 / var(--tw-bg-opacity));
}\r
		.bg-indigo-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(240 245 255 / var(--tw-bg-opacity));
}\r
		.bg-indigo-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(104 117 245 / var(--tw-bg-opacity));
}\r
		.bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}\r
		.bg-indigo-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}\r
		.bg-inherit {
  background-color: inherit;
}\r
		.bg-orange-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 236 220 / var(--tw-bg-opacity));
}\r
		.bg-orange-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 248 241 / var(--tw-bg-opacity));
}\r
		.bg-orange-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(208 56 1 / var(--tw-bg-opacity));
}\r
		.bg-pink-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 232 243 / var(--tw-bg-opacity));
}\r
		.bg-pink-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 242 248 / var(--tw-bg-opacity));
}\r
		.bg-pink-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(231 70 148 / var(--tw-bg-opacity));
}\r
		.bg-pink-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(153 21 75 / var(--tw-bg-opacity));
}\r
		.bg-primary-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 241 238 / var(--tw-bg-opacity));
}\r
		.bg-primary-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 228 222 / var(--tw-bg-opacity));
}\r
		.bg-primary-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 245 242 / var(--tw-bg-opacity));
}\r
		.bg-primary-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 121 93 / var(--tw-bg-opacity));
}\r
		.bg-primary-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 86 47 / var(--tw-bg-opacity));
}\r
		.bg-primary-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(235 79 39 / var(--tw-bg-opacity));
}\r
		.bg-primary-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(204 69 34 / var(--tw-bg-opacity));
}\r
		.bg-purple-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(237 235 254 / var(--tw-bg-opacity));
}\r
		.bg-purple-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(246 245 255 / var(--tw-bg-opacity));
}\r
		.bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}\r
		.bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
		.bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
		.bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}\r
		.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 232 232 / var(--tw-bg-opacity));
}\r
		.bg-red-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(251 213 213 / var(--tw-bg-opacity));
}\r
		.bg-red-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 242 242 / var(--tw-bg-opacity));
}\r
		.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(240 82 82 / var(--tw-bg-opacity));
}\r
		.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
		.bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
		.bg-red-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(119 29 29 / var(--tw-bg-opacity));
}\r
		.bg-teal-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(6 148 162 / var(--tw-bg-opacity));
}\r
		.bg-transparent {
  background-color: transparent;
}\r
		.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
		.bg-white\\/30 {
  background-color: rgb(255 255 255 / 0.3);
}\r
		.bg-yellow-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 246 178 / var(--tw-bg-opacity));
}\r
		.bg-yellow-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 202 21 / var(--tw-bg-opacity));
}\r
		.bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
		.bg-yellow-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 253 234 / var(--tw-bg-opacity));
}\r
		.bg-yellow-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(194 120 3 / var(--tw-bg-opacity));
}\r
		.bg-yellow-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(159 88 10 / var(--tw-bg-opacity));
}\r
		.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}\r
		.bg-opacity-75 {
  --tw-bg-opacity: 0.75;
}\r
		.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}\r
		.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}\r
		.from-blue-500 {
  --tw-gradient-from: #3F83F8 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(63 131 248 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
		.from-cyan-400 {
  --tw-gradient-from: #22d3ee var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(34 211 238 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
		.from-cyan-500 {
  --tw-gradient-from: #06b6d4 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(6 182 212 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
		.from-green-400 {
  --tw-gradient-from: #31C48D var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(49 196 141 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
		.from-lime-200 {
  --tw-gradient-from: #d9f99d var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(217 249 157 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
		.from-pink-400 {
  --tw-gradient-from: #F17EB8 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(241 126 184 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
		.from-pink-500 {
  --tw-gradient-from: #E74694 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(231 70 148 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
		.from-purple-500 {
  --tw-gradient-from: #9061F9 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(144 97 249 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
		.from-purple-600 {
  --tw-gradient-from: #7E3AF2 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(126 58 242 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
		.from-red-200 {
  --tw-gradient-from: #FBD5D5 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(251 213 213 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
		.from-red-400 {
  --tw-gradient-from: #F98080 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(249 128 128 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
		.from-sky-400 {
  --tw-gradient-from: #38bdf8 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(56 189 248 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
		.from-teal-200 {
  --tw-gradient-from: #AFECEF var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(175 236 239 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
		.from-teal-400 {
  --tw-gradient-from: #16BDCA var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(22 189 202 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
		.via-blue-600 {
  --tw-gradient-to: rgb(28 100 242 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #1C64F2 var(--tw-gradient-via-position), var(--tw-gradient-to);
}\r
		.via-cyan-500 {
  --tw-gradient-to: rgb(6 182 212 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #06b6d4 var(--tw-gradient-via-position), var(--tw-gradient-to);
}\r
		.via-green-500 {
  --tw-gradient-to: rgb(14 159 110 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #0E9F6E var(--tw-gradient-via-position), var(--tw-gradient-to);
}\r
		.via-lime-400 {
  --tw-gradient-to: rgb(163 230 53 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #a3e635 var(--tw-gradient-via-position), var(--tw-gradient-to);
}\r
		.via-pink-500 {
  --tw-gradient-to: rgb(231 70 148 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #E74694 var(--tw-gradient-via-position), var(--tw-gradient-to);
}\r
		.via-purple-600 {
  --tw-gradient-to: rgb(126 58 242 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #7E3AF2 var(--tw-gradient-via-position), var(--tw-gradient-to);
}\r
		.via-red-300 {
  --tw-gradient-to: rgb(248 180 180 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #F8B4B4 var(--tw-gradient-via-position), var(--tw-gradient-to);
}\r
		.via-red-500 {
  --tw-gradient-to: rgb(240 82 82 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #F05252 var(--tw-gradient-via-position), var(--tw-gradient-to);
}\r
		.via-teal-500 {
  --tw-gradient-to: rgb(6 148 162 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #0694A2 var(--tw-gradient-via-position), var(--tw-gradient-to);
}\r
		.to-blue-500 {
  --tw-gradient-to: #3F83F8 var(--tw-gradient-to-position);
}\r
		.to-blue-600 {
  --tw-gradient-to: #1C64F2 var(--tw-gradient-to-position);
}\r
		.to-blue-700 {
  --tw-gradient-to: #1A56DB var(--tw-gradient-to-position);
}\r
		.to-cyan-600 {
  --tw-gradient-to: #0891b2 var(--tw-gradient-to-position);
}\r
		.to-emerald-600 {
  --tw-gradient-to: #059669 var(--tw-gradient-to-position);
}\r
		.to-green-600 {
  --tw-gradient-to: #057A55 var(--tw-gradient-to-position);
}\r
		.to-lime-200 {
  --tw-gradient-to: #d9f99d var(--tw-gradient-to-position);
}\r
		.to-lime-500 {
  --tw-gradient-to: #84cc16 var(--tw-gradient-to-position);
}\r
		.to-orange-400 {
  --tw-gradient-to: #FF8A4C var(--tw-gradient-to-position);
}\r
		.to-pink-500 {
  --tw-gradient-to: #E74694 var(--tw-gradient-to-position);
}\r
		.to-pink-600 {
  --tw-gradient-to: #D61F69 var(--tw-gradient-to-position);
}\r
		.to-purple-700 {
  --tw-gradient-to: #6C2BD9 var(--tw-gradient-to-position);
}\r
		.to-red-600 {
  --tw-gradient-to: #E02424 var(--tw-gradient-to-position);
}\r
		.to-teal-600 {
  --tw-gradient-to: #047481 var(--tw-gradient-to-position);
}\r
		.to-yellow-200 {
  --tw-gradient-to: #FCE96A var(--tw-gradient-to-position);
}\r
		.bg-clip-text {
  -webkit-background-clip: text;
          background-clip: text;
}\r
		.fill-blue-600 {
  fill: #1C64F2;
}\r
		.fill-gray-600 {
  fill: #4B5563;
}\r
		.fill-green-500 {
  fill: #0E9F6E;
}\r
		.fill-pink-600 {
  fill: #D61F69;
}\r
		.fill-primary-600 {
  fill: #EF562F;
}\r
		.fill-purple-600 {
  fill: #7E3AF2;
}\r
		.fill-red-600 {
  fill: #E02424;
}\r
		.fill-white {
  fill: #ffffff;
}\r
		.fill-yellow-400 {
  fill: #E3A008;
}\r
		.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}\r
		.\\!p-0 {
  padding: 0px !important;
}\r
		.\\!p-2 {
  padding: 0.5rem !important;
}\r
		.\\!p-3 {
  padding: 0.75rem !important;
}\r
		.p-0 {
  padding: 0px;
}\r
		.p-0\\.5 {
  padding: 0.125rem;
}\r
		.p-1 {
  padding: 0.25rem;
}\r
		.p-1\\.5 {
  padding: 0.375rem;
}\r
		.p-2 {
  padding: 0.5rem;
}\r
		.p-2\\.5 {
  padding: 0.625rem;
}\r
		.p-3 {
  padding: 0.75rem;
}\r
		.p-4 {
  padding: 1rem;
}\r
		.p-5 {
  padding: 1.25rem;
}\r
		.p-6 {
  padding: 1.5rem;
}\r
		.\\!px-0 {
  padding-left: 0px !important;
  padding-right: 0px !important;
}\r
		.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}\r
		.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}\r
		.px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}\r
		.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}\r
		.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}\r
		.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}\r
		.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}\r
		.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}\r
		.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}\r
		.py-0\\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}\r
		.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}\r
		.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}\r
		.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}\r
		.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}\r
		.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}\r
		.py-3\\.5 {
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
}\r
		.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}\r
		.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}\r
		.pb-1 {
  padding-bottom: 0.25rem;
}\r
		.pb-1\\.5 {
  padding-bottom: 0.375rem;
}\r
		.pb-2 {
  padding-bottom: 0.5rem;
}\r
		.pb-2\\.5 {
  padding-bottom: 0.625rem;
}\r
		.pl-10 {
  padding-left: 2.5rem;
}\r
		.pl-11 {
  padding-left: 2.75rem;
}\r
		.pl-2 {
  padding-left: 0.5rem;
}\r
		.pl-2\\.5 {
  padding-left: 0.625rem;
}\r
		.pl-3 {
  padding-left: 0.75rem;
}\r
		.pl-4 {
  padding-left: 1rem;
}\r
		.pl-9 {
  padding-left: 2.25rem;
}\r
		.pr-10 {
  padding-right: 2.5rem;
}\r
		.pr-11 {
  padding-right: 2.75rem;
}\r
		.pr-2 {
  padding-right: 0.5rem;
}\r
		.pr-2\\.5 {
  padding-right: 0.625rem;
}\r
		.pr-4 {
  padding-right: 1rem;
}\r
		.pr-9 {
  padding-right: 2.25rem;
}\r
		.pt-3 {
  padding-top: 0.75rem;
}\r
		.pt-4 {
  padding-top: 1rem;
}\r
		.pt-5 {
  padding-top: 1.25rem;
}\r
		.text-left {
  text-align: left;
}\r
		.text-center {
  text-align: center;
}\r
		.text-right {
  text-align: right;
}\r
		.text-justify {
  text-align: justify;
}\r
		.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}\r
		.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}\r
		.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}\r
		.text-5xl {
  font-size: 3rem;
  line-height: 1;
}\r
		.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}\r
		.text-7xl {
  font-size: 4.5rem;
  line-height: 1;
}\r
		.text-8xl {
  font-size: 6rem;
  line-height: 1;
}\r
		.text-9xl {
  font-size: 8rem;
  line-height: 1;
}\r
		.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}\r
		.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}\r
		.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}\r
		.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}\r
		.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}\r
		.font-black {
  font-weight: 900;
}\r
		.font-bold {
  font-weight: 700;
}\r
		.font-extrabold {
  font-weight: 800;
}\r
		.font-extralight {
  font-weight: 200;
}\r
		.font-light {
  font-weight: 300;
}\r
		.font-medium {
  font-weight: 500;
}\r
		.font-normal {
  font-weight: 400;
}\r
		.font-semibold {
  font-weight: 600;
}\r
		.font-thin {
  font-weight: 100;
}\r
		.uppercase {
  text-transform: uppercase;
}\r
		.italic {
  font-style: italic;
}\r
		.leading-6 {
  line-height: 1.5rem;
}\r
		.leading-9 {
  line-height: 2.25rem;
}\r
		.leading-loose {
  line-height: 2;
}\r
		.leading-none {
  line-height: 1;
}\r
		.leading-normal {
  line-height: 1.5;
}\r
		.leading-relaxed {
  line-height: 1.625;
}\r
		.tracking-normal {
  letter-spacing: 0em;
}\r
		.tracking-tight {
  letter-spacing: -0.025em;
}\r
		.tracking-tighter {
  letter-spacing: -0.05em;
}\r
		.tracking-wide {
  letter-spacing: 0.025em;
}\r
		.tracking-wider {
  letter-spacing: 0.05em;
}\r
		.tracking-widest {
  letter-spacing: 0.1em;
}\r
		.\\!text-gray-900 {
  --tw-text-opacity: 1 !important;
  color: rgb(17 24 39 / var(--tw-text-opacity)) !important;
}\r
		.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}\r
		.text-blue-100 {
  --tw-text-opacity: 1;
  color: rgb(225 239 254 / var(--tw-text-opacity));
}\r
		.text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(118 169 250 / var(--tw-text-opacity));
}\r
		.text-blue-50 {
  --tw-text-opacity: 1;
  color: rgb(235 245 255 / var(--tw-text-opacity));
}\r
		.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}\r
		.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}\r
		.text-blue-700 {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}\r
		.text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 66 159 / var(--tw-text-opacity));
}\r
		.text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}\r
		.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
		.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}\r
		.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}\r
		.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}\r
		.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}\r
		.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}\r
		.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
		.text-green-100 {
  --tw-text-opacity: 1;
  color: rgb(222 247 236 / var(--tw-text-opacity));
}\r
		.text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}\r
		.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}\r
		.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(5 122 85 / var(--tw-text-opacity));
}\r
		.text-green-700 {
  --tw-text-opacity: 1;
  color: rgb(4 108 78 / var(--tw-text-opacity));
}\r
		.text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(3 84 63 / var(--tw-text-opacity));
}\r
		.text-green-900 {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}\r
		.text-indigo-100 {
  --tw-text-opacity: 1;
  color: rgb(229 237 255 / var(--tw-text-opacity));
}\r
		.text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(141 162 251 / var(--tw-text-opacity));
}\r
		.text-indigo-500 {
  --tw-text-opacity: 1;
  color: rgb(104 117 245 / var(--tw-text-opacity));
}\r
		.text-indigo-800 {
  --tw-text-opacity: 1;
  color: rgb(66 56 157 / var(--tw-text-opacity));
}\r
		.text-orange-500 {
  --tw-text-opacity: 1;
  color: rgb(255 90 31 / var(--tw-text-opacity));
}\r
		.text-orange-800 {
  --tw-text-opacity: 1;
  color: rgb(138 44 13 / var(--tw-text-opacity));
}\r
		.text-pink-100 {
  --tw-text-opacity: 1;
  color: rgb(252 232 243 / var(--tw-text-opacity));
}\r
		.text-pink-400 {
  --tw-text-opacity: 1;
  color: rgb(241 126 184 / var(--tw-text-opacity));
}\r
		.text-pink-500 {
  --tw-text-opacity: 1;
  color: rgb(231 70 148 / var(--tw-text-opacity));
}\r
		.text-pink-800 {
  --tw-text-opacity: 1;
  color: rgb(153 21 75 / var(--tw-text-opacity));
}\r
		.text-primary-100 {
  --tw-text-opacity: 1;
  color: rgb(255 241 238 / var(--tw-text-opacity));
}\r
		.text-primary-400 {
  --tw-text-opacity: 1;
  color: rgb(255 188 173 / var(--tw-text-opacity));
}\r
		.text-primary-500 {
  --tw-text-opacity: 1;
  color: rgb(254 121 93 / var(--tw-text-opacity));
}\r
		.text-primary-600 {
  --tw-text-opacity: 1;
  color: rgb(239 86 47 / var(--tw-text-opacity));
}\r
		.text-primary-700 {
  --tw-text-opacity: 1;
  color: rgb(235 79 39 / var(--tw-text-opacity));
}\r
		.text-primary-800 {
  --tw-text-opacity: 1;
  color: rgb(204 69 34 / var(--tw-text-opacity));
}\r
		.text-purple-100 {
  --tw-text-opacity: 1;
  color: rgb(237 235 254 / var(--tw-text-opacity));
}\r
		.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}\r
		.text-purple-500 {
  --tw-text-opacity: 1;
  color: rgb(144 97 249 / var(--tw-text-opacity));
}\r
		.text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(126 58 242 / var(--tw-text-opacity));
}\r
		.text-purple-700 {
  --tw-text-opacity: 1;
  color: rgb(108 43 217 / var(--tw-text-opacity));
}\r
		.text-purple-800 {
  --tw-text-opacity: 1;
  color: rgb(85 33 181 / var(--tw-text-opacity));
}\r
		.text-red-100 {
  --tw-text-opacity: 1;
  color: rgb(253 232 232 / var(--tw-text-opacity));
}\r
		.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(249 128 128 / var(--tw-text-opacity));
}\r
		.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
}\r
		.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(224 36 36 / var(--tw-text-opacity));
}\r
		.text-red-700 {
  --tw-text-opacity: 1;
  color: rgb(200 30 30 / var(--tw-text-opacity));
}\r
		.text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(155 28 28 / var(--tw-text-opacity));
}\r
		.text-red-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
		.text-teal-600 {
  --tw-text-opacity: 1;
  color: rgb(4 116 129 / var(--tw-text-opacity));
}\r
		.text-transparent {
  color: transparent;
}\r
		.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
		.text-yellow-100 {
  --tw-text-opacity: 1;
  color: rgb(253 246 178 / var(--tw-text-opacity));
}\r
		.text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(227 160 8 / var(--tw-text-opacity));
}\r
		.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(194 120 3 / var(--tw-text-opacity));
}\r
		.text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(114 59 19 / var(--tw-text-opacity));
}\r
		.underline {
  text-decoration-line: underline;
}\r
		.line-through {
  text-decoration-line: line-through;
}\r
		.decoration-blue-400 {
  text-decoration-color: #76A9FA;
}\r
		.decoration-2 {
  text-decoration-thickness: 2px;
}\r
		.placeholder-green-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(4 108 78 / var(--tw-placeholder-opacity));
}\r
		.placeholder-green-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(4 108 78 / var(--tw-placeholder-opacity));
}\r
		.placeholder-red-700::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(200 30 30 / var(--tw-placeholder-opacity));
}\r
		.placeholder-red-700::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(200 30 30 / var(--tw-placeholder-opacity));
}\r
		.opacity-100 {
  opacity: 1;
}\r
		.opacity-30 {
  opacity: 0.3;
}\r
		.opacity-50 {
  opacity: 0.5;
}\r
		.opacity-60 {
  opacity: 0.6;
}\r
		.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
		.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
		.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
		.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
		.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
		.shadow-blue-500\\/50 {
  --tw-shadow-color: rgb(63 131 248 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		.shadow-cyan-500\\/50 {
  --tw-shadow-color: rgb(6 182 212 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		.shadow-gray-500\\/50 {
  --tw-shadow-color: rgb(107 114 128 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		.shadow-green-500\\/50 {
  --tw-shadow-color: rgb(14 159 110 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		.shadow-lime-500\\/50 {
  --tw-shadow-color: rgb(132 204 22 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		.shadow-pink-500\\/50 {
  --tw-shadow-color: rgb(231 70 148 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		.shadow-primary-500\\/50 {
  --tw-shadow-color: rgb(254 121 93 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		.shadow-purple-500\\/50 {
  --tw-shadow-color: rgb(144 97 249 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		.shadow-red-500\\/50 {
  --tw-shadow-color: rgb(240 82 82 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		.shadow-teal-500\\/50 {
  --tw-shadow-color: rgb(6 148 162 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		.shadow-yellow-500\\/50 {
  --tw-shadow-color: rgb(194 120 3 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		.outline {
  outline-style: solid;
}\r
		.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
		.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
		.ring-8 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
		.ring-gray-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}\r
		.ring-primary-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 121 93 / var(--tw-ring-opacity));
}\r
		.ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}\r
		.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
		.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
		.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
		.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
		.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
		.duration-300 {
  transition-duration: 300ms;
}\r
		.duration-75 {
  transition-duration: 75ms;
}\r
		.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}\r
		.first-letter\\:float-left::first-letter {
  float: left;
}\r
		.first-letter\\:mr-3::first-letter {
  margin-right: 0.75rem;
}\r
		.first-letter\\:text-7xl::first-letter {
  font-size: 4.5rem;
  line-height: 1;
}\r
		.first-letter\\:font-bold::first-letter {
  font-weight: 700;
}\r
		.first-letter\\:text-gray-900::first-letter {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
		.first-line\\:uppercase::first-line {
  text-transform: uppercase;
}\r
		.first-line\\:tracking-widest::first-line {
  letter-spacing: 0.1em;
}\r
		.before\\:absolute::before {
  content: var(--tw-content);
  position: absolute;
}\r
		.before\\:right-0::before {
  content: var(--tw-content);
  right: 0px;
}\r
		.before\\:z-10::before {
  content: var(--tw-content);
  z-index: 10;
}\r
		.before\\:block::before {
  content: var(--tw-content);
  display: block;
}\r
		.before\\:h-full::before {
  content: var(--tw-content);
  height: 100%;
}\r
		.before\\:shadow-\\[-10px_0_50px_65px_rgba\\(256\\2c 256\\2c 256\\2c 1\\)\\]::before {
  content: var(--tw-content);
  --tw-shadow: -10px 0 50px 65px rgba(256,256,256,1);
  --tw-shadow-colored: -10px 0 50px 65px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
		.before\\:content-\\[\\'\\'\\]::before {
  --tw-content: '';
  content: var(--tw-content);
}\r
		.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}\r
		.after\\:left-\\[2px\\]::after {
  content: var(--tw-content);
  left: 2px;
}\r
		.after\\:left-\\[4px\\]::after {
  content: var(--tw-content);
  left: 4px;
}\r
		.after\\:top-0::after {
  content: var(--tw-content);
  top: 0px;
}\r
		.after\\:top-0\\.5::after {
  content: var(--tw-content);
  top: 0.125rem;
}\r
		.after\\:top-\\[2px\\]::after {
  content: var(--tw-content);
  top: 2px;
}\r
		.after\\:z-10::after {
  content: var(--tw-content);
  z-index: 10;
}\r
		.after\\:block::after {
  content: var(--tw-content);
  display: block;
}\r
		.after\\:h-4::after {
  content: var(--tw-content);
  height: 1rem;
}\r
		.after\\:h-5::after {
  content: var(--tw-content);
  height: 1.25rem;
}\r
		.after\\:h-6::after {
  content: var(--tw-content);
  height: 1.5rem;
}\r
		.after\\:h-full::after {
  content: var(--tw-content);
  height: 100%;
}\r
		.after\\:w-4::after {
  content: var(--tw-content);
  width: 1rem;
}\r
		.after\\:w-5::after {
  content: var(--tw-content);
  width: 1.25rem;
}\r
		.after\\:w-6::after {
  content: var(--tw-content);
  width: 1.5rem;
}\r
		.after\\:rounded-full::after {
  content: var(--tw-content);
  border-radius: 9999px;
}\r
		.after\\:border::after {
  content: var(--tw-content);
  border-width: 1px;
}\r
		.after\\:border-gray-300::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}\r
		.after\\:bg-white::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
		.after\\:shadow-\\[10px_0_50px_65px_rgba\\(256\\2c 256\\2c 256\\2c 1\\)\\]::after {
  content: var(--tw-content);
  --tw-shadow: 10px 0 50px 65px rgba(256,256,256,1);
  --tw-shadow-colored: 10px 0 50px 65px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
		.after\\:transition-all::after {
  content: var(--tw-content);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
		.after\\:content-\\[\\'\\'\\]::after {
  --tw-content: '';
  content: var(--tw-content);
}\r
		.first\\:rounded-l-full:first-child {
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
}\r
		.first\\:rounded-l-lg:first-child {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
		.first\\:rounded-t-lg:first-child {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}\r
		.first\\:border-l:first-child {
  border-left-width: 1px;
}\r
		.last\\:mr-0:last-child {
  margin-right: 0px;
}\r
		.last\\:rounded-b-lg:last-child {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
		.last\\:rounded-r-full:last-child {
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
}\r
		.last\\:rounded-r-lg:last-child {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}\r
		.last\\:border-b-0:last-child {
  border-bottom-width: 0px;
}\r
		.last\\:border-r:last-child {
  border-right-width: 1px;
}\r
		.odd\\:bg-blue-800:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}\r
		.odd\\:bg-green-800:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}\r
		.odd\\:bg-purple-800:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}\r
		.odd\\:bg-red-800:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}\r
		.odd\\:bg-white:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
		.odd\\:bg-yellow-800:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}\r
		.even\\:bg-blue-700:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
		.even\\:bg-gray-50:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}\r
		.even\\:bg-green-700:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
		.even\\:bg-purple-700:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
		.even\\:bg-red-700:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
		.even\\:bg-yellow-700:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}\r
		.focus-within\\:border-primary-500:focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(254 121 93 / var(--tw-border-opacity));
}\r
		.focus-within\\:ring-1:focus-within {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
		.hover\\:border-gray-300:hover {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}\r
		.hover\\:bg-blue-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(225 239 254 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-blue-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-blue-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(164 202 254 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-blue-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(118 169 250 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-blue-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-gray-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-gray-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-gray-900:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-green-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(188 240 218 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-green-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(49 196 141 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-green-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-indigo-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(205 219 254 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-pink-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(250 209 232 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-primary-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(255 228 222 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-primary-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(235 79 39 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-primary-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(204 69 34 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-purple-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 215 254 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-purple-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(172 148 250 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-purple-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-red-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(251 213 213 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-red-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 180 180 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-red-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 128 128 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-red-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-transparent:hover {
  background-color: transparent;
}\r
		.hover\\:bg-yellow-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(252 233 106 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-yellow-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-yellow-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(194 120 3 / var(--tw-bg-opacity));
}\r
		.hover\\:bg-gradient-to-bl:hover {
  background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));
}\r
		.hover\\:bg-gradient-to-br:hover {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}\r
		.hover\\:bg-gradient-to-l:hover {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}\r
		.hover\\:\\!text-inherit:hover {
  color: inherit !important;
}\r
		.hover\\:text-black:hover {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}\r
		.hover\\:text-blue-700:hover {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}\r
		.hover\\:text-blue-900:hover {
  --tw-text-opacity: 1;
  color: rgb(35 56 118 / var(--tw-text-opacity));
}\r
		.hover\\:text-gray-400:hover {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}\r
		.hover\\:text-gray-600:hover {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}\r
		.hover\\:text-gray-700:hover {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}\r
		.hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
		.hover\\:text-green-900:hover {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}\r
		.hover\\:text-indigo-900:hover {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}\r
		.hover\\:text-pink-900:hover {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}\r
		.hover\\:text-primary-700:hover {
  --tw-text-opacity: 1;
  color: rgb(235 79 39 / var(--tw-text-opacity));
}\r
		.hover\\:text-primary-900:hover {
  --tw-text-opacity: 1;
  color: rgb(165 55 27 / var(--tw-text-opacity));
}\r
		.hover\\:text-purple-900:hover {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}\r
		.hover\\:text-red-900:hover {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
		.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
		.hover\\:text-yellow-900:hover {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}\r
		.hover\\:underline:hover {
  text-decoration-line: underline;
}\r
		.focus\\:z-10:focus {
  z-index: 10;
}\r
		.focus\\:z-40:focus {
  z-index: 40;
}\r
		.focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
		.focus\\:border-gray-200:focus {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}\r
		.focus\\:border-green-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}\r
		.focus\\:border-green-600:focus {
  --tw-border-opacity: 1;
  border-color: rgb(5 122 85 / var(--tw-border-opacity));
}\r
		.focus\\:border-primary-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(254 121 93 / var(--tw-border-opacity));
}\r
		.focus\\:border-primary-600:focus {
  --tw-border-opacity: 1;
  border-color: rgb(239 86 47 / var(--tw-border-opacity));
}\r
		.focus\\:border-red-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}\r
		.focus\\:border-red-600:focus {
  --tw-border-opacity: 1;
  border-color: rgb(224 36 36 / var(--tw-border-opacity));
}\r
		.focus\\:bg-gray-900:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
		.focus\\:text-blue-700:focus {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}\r
		.focus\\:text-primary-700:focus {
  --tw-text-opacity: 1;
  color: rgb(235 79 39 / var(--tw-text-opacity));
}\r
		.focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
		.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
		.focus\\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
		.focus\\:ring-1:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
		.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
		.focus\\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
		.focus\\:\\!ring-gray-300:focus {
  --tw-ring-opacity: 1 !important;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity)) !important;
}\r
		.focus\\:ring-blue-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(195 221 253 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-blue-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-blue-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(118 169 250 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-cyan-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(103 232 249 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-gray-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-gray-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-gray-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(156 163 175 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-green-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(188 240 218 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-green-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-green-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(49 196 141 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-green-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(14 159 110 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-indigo-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(141 162 251 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-lime-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(217 249 157 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-lime-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(190 242 100 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-orange-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 90 31 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-pink-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 209 232 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-pink-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 217 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-pink-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(241 126 184 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-primary-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 213 204 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-primary-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 188 173 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-primary-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 121 93 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-primary-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(235 79 39 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-purple-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(220 215 254 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-purple-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-purple-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(172 148 250 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-purple-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(144 97 249 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-red-100:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 232 232 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-red-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-red-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(240 82 82 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-teal-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-teal-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(6 148 162 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-yellow-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-yellow-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(227 160 8 / var(--tw-ring-opacity));
}\r
		.focus\\:ring-yellow-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(194 120 3 / var(--tw-ring-opacity));
}\r
		.disabled\\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}\r
		.disabled\\:opacity-50:disabled {
  opacity: 0.5;
}\r
		.group:first-child .group-first\\:rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
		.group:first-child .group-first\\:rounded-t-xl {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}\r
		.group:first-child .group-first\\:border-t {
  border-top-width: 1px;
}\r
		.group:last-child .group-last\\:rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}\r
		.group:hover .group-hover\\:rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.group:hover .group-hover\\:bg-white\\/50 {
  background-color: rgb(255 255 255 / 0.5);
}\r
		.group:hover .group-hover\\:\\!bg-opacity-0 {
  --tw-bg-opacity: 0 !important;
}\r
		.group:hover .group-hover\\:\\!text-inherit {
  color: inherit !important;
}\r
		.group:hover .group-hover\\:text-primary-600 {
  --tw-text-opacity: 1;
  color: rgb(239 86 47 / var(--tw-text-opacity));
}\r
		.group:focus .group-focus\\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
		.group:focus .group-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
		.group:focus .group-focus\\:ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}\r
		.peer:checked ~ .peer-checked\\:bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
		.peer:checked ~ .peer-checked\\:bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
		.peer:checked ~ .peer-checked\\:bg-orange-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 90 31 / var(--tw-bg-opacity));
}\r
		.peer:checked ~ .peer-checked\\:bg-primary-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 86 47 / var(--tw-bg-opacity));
}\r
		.peer:checked ~ .peer-checked\\:bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
		.peer:checked ~ .peer-checked\\:bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
		.peer:checked ~ .peer-checked\\:bg-teal-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 116 129 / var(--tw-bg-opacity));
}\r
		.peer:checked ~ .peer-checked\\:bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
		.peer:checked ~ .peer-checked\\:after\\:translate-x-full::after {
  content: var(--tw-content);
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.peer:checked ~ .peer-checked\\:after\\:border-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}\r
		.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:top-1\\/2 {
  top: 50%;
}\r
		.peer:placeholder-shown ~ .peer-placeholder-shown\\:top-1\\/2 {
  top: 50%;
}\r
		.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.peer:placeholder-shown ~ .peer-placeholder-shown\\:-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.peer:placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.peer:placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.peer:focus ~ .peer-focus\\:left-0 {
  left: 0px;
}\r
		.peer:focus ~ .peer-focus\\:top-2 {
  top: 0.5rem;
}\r
		.peer:focus ~ .peer-focus\\:-translate-y-4 {
  --tw-translate-y: -1rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.peer:focus ~ .peer-focus\\:-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.peer:focus ~ .peer-focus\\:scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
		.peer:focus ~ .peer-focus\\:px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}\r
		.peer:focus ~ .peer-focus\\:text-primary-600 {
  --tw-text-opacity: 1;
  color: rgb(239 86 47 / var(--tw-text-opacity));
}\r
		.peer:focus ~ .peer-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
		.peer:focus ~ .peer-focus\\:ring-blue-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}\r
		.peer:focus ~ .peer-focus\\:ring-green-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));
}\r
		.peer:focus ~ .peer-focus\\:ring-orange-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 186 140 / var(--tw-ring-opacity));
}\r
		.peer:focus ~ .peer-focus\\:ring-primary-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 213 204 / var(--tw-ring-opacity));
}\r
		.peer:focus ~ .peer-focus\\:ring-purple-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}\r
		.peer:focus ~ .peer-focus\\:ring-red-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));
}\r
		.peer:focus ~ .peer-focus\\:ring-teal-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));
}\r
		.peer:focus ~ .peer-focus\\:ring-yellow-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:block) {
  display: block;
}\r
		:is(.dark .dark\\:hidden) {
  display: none;
}\r
		:is(.dark .dark\\:divide-blue-700) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(26 86 219 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:divide-blue-800) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(30 66 159 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:divide-gray-600) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:divide-gray-700) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:divide-gray-800) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:divide-green-700) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(4 108 78 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:divide-green-800) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(3 84 63 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:divide-indigo-700) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(81 69 205 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:divide-indigo-800) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(66 56 157 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:divide-orange-800) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(138 44 13 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:divide-pink-700) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(191 18 93 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:divide-pink-800) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(153 21 75 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:divide-primary-200) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(255 228 222 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:divide-purple-700) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(108 43 217 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:divide-purple-800) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(85 33 181 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:divide-red-700) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(200 30 30 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:divide-red-800) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(155 28 28 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:divide-yellow-700) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(142 75 16 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:divide-yellow-800) > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(114 59 19 / var(--tw-divide-opacity));
}\r
		:is(.dark .dark\\:\\!border-gray-600) {
  --tw-border-opacity: 1 !important;
  border-color: rgb(75 85 99 / var(--tw-border-opacity)) !important;
}\r
		:is(.dark .dark\\:border-blue-400) {
  --tw-border-opacity: 1;
  border-color: rgb(118 169 250 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-blue-500) {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-blue-800) {
  --tw-border-opacity: 1;
  border-color: rgb(30 66 159 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-gray-500) {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-gray-600) {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-gray-700) {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-gray-800) {
  --tw-border-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-gray-900) {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-green-400) {
  --tw-border-opacity: 1;
  border-color: rgb(49 196 141 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-green-500) {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-green-800) {
  --tw-border-opacity: 1;
  border-color: rgb(3 84 63 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-indigo-400) {
  --tw-border-opacity: 1;
  border-color: rgb(141 162 251 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-indigo-800) {
  --tw-border-opacity: 1;
  border-color: rgb(66 56 157 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-orange-800) {
  --tw-border-opacity: 1;
  border-color: rgb(138 44 13 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-pink-400) {
  --tw-border-opacity: 1;
  border-color: rgb(241 126 184 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-pink-800) {
  --tw-border-opacity: 1;
  border-color: rgb(153 21 75 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-primary-200) {
  --tw-border-opacity: 1;
  border-color: rgb(255 228 222 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-primary-400) {
  --tw-border-opacity: 1;
  border-color: rgb(255 188 173 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-primary-500) {
  --tw-border-opacity: 1;
  border-color: rgb(254 121 93 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-purple-400) {
  --tw-border-opacity: 1;
  border-color: rgb(172 148 250 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-purple-800) {
  --tw-border-opacity: 1;
  border-color: rgb(85 33 181 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-red-400) {
  --tw-border-opacity: 1;
  border-color: rgb(249 128 128 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-red-500) {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-red-800) {
  --tw-border-opacity: 1;
  border-color: rgb(155 28 28 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-white) {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-yellow-300) {
  --tw-border-opacity: 1;
  border-color: rgb(250 202 21 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-yellow-800) {
  --tw-border-opacity: 1;
  border-color: rgb(114 59 19 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-r-gray-600) {
  --tw-border-opacity: 1;
  border-right-color: rgb(75 85 99 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:border-r-gray-700) {
  --tw-border-opacity: 1;
  border-right-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:bg-blue-400) {
  --tw-bg-opacity: 1;
  background-color: rgb(118 169 250 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-blue-500) {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-blue-600) {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-blue-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-blue-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(35 56 118 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-gray-200) {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-gray-300) {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-gray-500) {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-gray-600) {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-gray-700) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-gray-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-gray-800\\/30) {
  background-color: rgb(31 41 55 / 0.3);
}\r
		:is(.dark .dark\\:bg-gray-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-green-400) {
  --tw-bg-opacity: 1;
  background-color: rgb(49 196 141 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-green-500) {
  --tw-bg-opacity: 1;
  background-color: rgb(14 159 110 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-green-600) {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-green-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-green-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(1 71 55 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-indigo-400) {
  --tw-bg-opacity: 1;
  background-color: rgb(141 162 251 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-indigo-500) {
  --tw-bg-opacity: 1;
  background-color: rgb(104 117 245 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-indigo-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-indigo-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(54 47 120 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-inherit) {
  background-color: inherit;
}\r
		:is(.dark .dark\\:bg-orange-700) {
  --tw-bg-opacity: 1;
  background-color: rgb(180 52 3 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-orange-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(138 44 13 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-pink-400) {
  --tw-bg-opacity: 1;
  background-color: rgb(241 126 184 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-pink-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(117 26 61 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-primary-200) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 228 222 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-primary-400) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 188 173 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-primary-500) {
  --tw-bg-opacity: 1;
  background-color: rgb(254 121 93 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-primary-600) {
  --tw-bg-opacity: 1;
  background-color: rgb(239 86 47 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-primary-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(204 69 34 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-primary-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(165 55 27 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-purple-400) {
  --tw-bg-opacity: 1;
  background-color: rgb(172 148 250 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-purple-500) {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-purple-600) {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-purple-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-purple-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(74 29 150 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-red-500) {
  --tw-bg-opacity: 1;
  background-color: rgb(240 82 82 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-red-600) {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-red-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-red-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(119 29 29 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-transparent) {
  background-color: transparent;
}\r
		:is(.dark .dark\\:bg-yellow-400) {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-yellow-600) {
  --tw-bg-opacity: 1;
  background-color: rgb(159 88 10 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-yellow-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-yellow-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(99 49 18 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:bg-opacity-80) {
  --tw-bg-opacity: 0.8;
}\r
		:is(.dark .dark\\:fill-gray-300) {
  fill: #D1D5DB;
}\r
		:is(.dark .dark\\:\\!text-white) {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
}\r
		:is(.dark .dark\\:text-blue-100) {
  --tw-text-opacity: 1;
  color: rgb(225 239 254 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-blue-200) {
  --tw-text-opacity: 1;
  color: rgb(195 221 253 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-blue-300) {
  --tw-text-opacity: 1;
  color: rgb(164 202 254 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-blue-400) {
  --tw-text-opacity: 1;
  color: rgb(118 169 250 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-blue-500) {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-gray-100) {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-gray-200) {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-gray-300) {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-gray-400) {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-gray-500) {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-gray-600) {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-gray-700) {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-gray-900) {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-green-100) {
  --tw-text-opacity: 1;
  color: rgb(222 247 236 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-green-200) {
  --tw-text-opacity: 1;
  color: rgb(188 240 218 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-green-300) {
  --tw-text-opacity: 1;
  color: rgb(132 225 188 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-green-400) {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-green-500) {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-indigo-100) {
  --tw-text-opacity: 1;
  color: rgb(229 237 255 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-indigo-200) {
  --tw-text-opacity: 1;
  color: rgb(205 219 254 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-indigo-300) {
  --tw-text-opacity: 1;
  color: rgb(180 198 252 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-indigo-400) {
  --tw-text-opacity: 1;
  color: rgb(141 162 251 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-orange-200) {
  --tw-text-opacity: 1;
  color: rgb(252 217 189 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-orange-400) {
  --tw-text-opacity: 1;
  color: rgb(255 138 76 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-pink-100) {
  --tw-text-opacity: 1;
  color: rgb(252 232 243 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-pink-300) {
  --tw-text-opacity: 1;
  color: rgb(248 180 217 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-pink-400) {
  --tw-text-opacity: 1;
  color: rgb(241 126 184 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-primary-200) {
  --tw-text-opacity: 1;
  color: rgb(255 228 222 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-primary-300) {
  --tw-text-opacity: 1;
  color: rgb(255 213 204 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-primary-400) {
  --tw-text-opacity: 1;
  color: rgb(255 188 173 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-primary-500) {
  --tw-text-opacity: 1;
  color: rgb(254 121 93 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-primary-700) {
  --tw-text-opacity: 1;
  color: rgb(235 79 39 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-primary-800) {
  --tw-text-opacity: 1;
  color: rgb(204 69 34 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-primary-900) {
  --tw-text-opacity: 1;
  color: rgb(165 55 27 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-purple-100) {
  --tw-text-opacity: 1;
  color: rgb(237 235 254 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-purple-200) {
  --tw-text-opacity: 1;
  color: rgb(220 215 254 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-purple-300) {
  --tw-text-opacity: 1;
  color: rgb(202 191 253 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-purple-400) {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-red-100) {
  --tw-text-opacity: 1;
  color: rgb(253 232 232 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-red-200) {
  --tw-text-opacity: 1;
  color: rgb(251 213 213 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-red-300) {
  --tw-text-opacity: 1;
  color: rgb(248 180 180 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-red-400) {
  --tw-text-opacity: 1;
  color: rgb(249 128 128 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-red-500) {
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-white) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-yellow-100) {
  --tw-text-opacity: 1;
  color: rgb(253 246 178 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-yellow-200) {
  --tw-text-opacity: 1;
  color: rgb(252 233 106 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:text-yellow-300) {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:decoration-blue-600) {
  text-decoration-color: #1C64F2;
}\r
		:is(.dark .dark\\:placeholder-gray-400)::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}\r
		:is(.dark .dark\\:placeholder-gray-400)::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}\r
		:is(.dark .dark\\:placeholder-green-500)::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(14 159 110 / var(--tw-placeholder-opacity));
}\r
		:is(.dark .dark\\:placeholder-green-500)::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(14 159 110 / var(--tw-placeholder-opacity));
}\r
		:is(.dark .dark\\:placeholder-red-500)::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(240 82 82 / var(--tw-placeholder-opacity));
}\r
		:is(.dark .dark\\:placeholder-red-500)::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(240 82 82 / var(--tw-placeholder-opacity));
}\r
		:is(.dark .dark\\:opacity-25) {
  opacity: 0.25;
}\r
		:is(.dark .dark\\:shadow-blue-800\\/80) {
  --tw-shadow-color: rgb(30 66 159 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		:is(.dark .dark\\:shadow-cyan-800\\/80) {
  --tw-shadow-color: rgb(21 94 117 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		:is(.dark .dark\\:shadow-gray-800\\/80) {
  --tw-shadow-color: rgb(31 41 55 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		:is(.dark .dark\\:shadow-green-800\\/80) {
  --tw-shadow-color: rgb(3 84 63 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		:is(.dark .dark\\:shadow-lime-800\\/80) {
  --tw-shadow-color: rgb(63 98 18 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		:is(.dark .dark\\:shadow-pink-800\\/80) {
  --tw-shadow-color: rgb(153 21 75 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		:is(.dark .dark\\:shadow-primary-800\\/80) {
  --tw-shadow-color: rgb(204 69 34 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		:is(.dark .dark\\:shadow-purple-800\\/80) {
  --tw-shadow-color: rgb(85 33 181 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		:is(.dark .dark\\:shadow-red-800\\/80) {
  --tw-shadow-color: rgb(155 28 28 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		:is(.dark .dark\\:shadow-teal-800\\/80) {
  --tw-shadow-color: rgb(5 80 92 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		:is(.dark .dark\\:shadow-yellow-800\\/80) {
  --tw-shadow-color: rgb(114 59 19 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
		:is(.dark .dark\\:ring-gray-500) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:ring-gray-900) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(17 24 39 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:ring-primary-500) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 121 93 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:ring-offset-gray-800) {
  --tw-ring-offset-color: #1F2937;
}\r
		:is(.dark .dark\\:first-letter\\:text-gray-100)::first-letter {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:before\\:shadow-\\[-10px_0_50px_65px_rgba\\(16\\2c 24\\2c 39\\2c 1\\)\\])::before {
  content: var(--tw-content);
  --tw-shadow: -10px 0 50px 65px rgba(16,24,39,1);
  --tw-shadow-colored: -10px 0 50px 65px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
		:is(.dark .dark\\:after\\:shadow-\\[10px_0_50px_65px_rgba\\(16\\2c 24\\2c 39\\2c 1\\)\\])::after {
  content: var(--tw-content);
  --tw-shadow: 10px 0 50px 65px rgba(16,24,39,1);
  --tw-shadow-colored: 10px 0 50px 65px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
		:is(.dark .dark\\:last\\:border-r-gray-500:last-child) {
  --tw-border-opacity: 1;
  border-right-color: rgb(107 114 128 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:last\\:border-r-gray-600:last-child) {
  --tw-border-opacity: 1;
  border-right-color: rgb(75 85 99 / var(--tw-border-opacity));
}\r
		:is(.dark .odd\\:dark\\:bg-blue-800):nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}\r
		:is(.dark .odd\\:dark\\:bg-gray-800):nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
		:is(.dark .odd\\:dark\\:bg-green-800):nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}\r
		:is(.dark .odd\\:dark\\:bg-purple-800):nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}\r
		:is(.dark .odd\\:dark\\:bg-red-800):nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}\r
		:is(.dark .odd\\:dark\\:bg-yellow-800):nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}\r
		:is(.dark .even\\:dark\\:bg-blue-700):nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
		:is(.dark .even\\:dark\\:bg-gray-700):nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
		:is(.dark .even\\:dark\\:bg-green-700):nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
		:is(.dark .even\\:dark\\:bg-purple-700):nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
		:is(.dark .even\\:dark\\:bg-red-700):nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
		:is(.dark .even\\:dark\\:bg-yellow-700):nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:focus-within\\:border-primary-500:focus-within) {
  --tw-border-opacity: 1;
  border-color: rgb(254 121 93 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:hover\\:border-gray-500:hover) {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:hover\\:border-gray-600:hover) {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:hover\\:border-gray-700:hover) {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-blue-600:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-blue-700:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-blue-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-gray-600:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-gray-700:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-gray-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-green-600:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-green-700:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-green-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-indigo-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-pink-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(153 21 75 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-primary-600:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(239 86 47 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-primary-700:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(235 79 39 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-primary-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(204 69 34 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-purple-500:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-purple-700:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-purple-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-red-600:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-red-700:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-red-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-yellow-400:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:bg-yellow-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}\r
		:is(.dark .hover\\:dark\\:bg-gray-800):hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
		:is(.dark .dark\\:hover\\:text-blue-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(164 202 254 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:hover\\:text-gray-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:hover\\:text-green-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(132 225 188 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:hover\\:text-indigo-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(180 198 252 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:hover\\:text-pink-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(248 180 217 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:hover\\:text-primary-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(255 213 204 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:hover\\:text-primary-900:hover) {
  --tw-text-opacity: 1;
  color: rgb(165 55 27 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:hover\\:text-purple-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(202 191 253 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:hover\\:text-red-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(248 180 180 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:hover\\:text-white:hover) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:hover\\:text-yellow-300:hover) {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:focus\\:border-blue-500:focus) {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:focus\\:border-green-500:focus) {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:focus\\:border-primary-500:focus) {
  --tw-border-opacity: 1;
  border-color: rgb(254 121 93 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:focus\\:border-red-500:focus) {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}\r
		:is(.dark .dark\\:focus\\:text-white:focus) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-blue-500:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-blue-600:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(28 100 242 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-blue-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-cyan-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(21 94 117 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-gray-500:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-gray-700:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-gray-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-green-500:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(14 159 110 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-green-600:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 122 85 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-green-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-lime-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 98 18 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-orange-600:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(208 56 1 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-pink-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(153 21 75 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-primary-500:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(254 121 93 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-primary-600:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(239 86 47 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-primary-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(204 69 34 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-purple-600:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 58 242 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-purple-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-purple-900:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(74 29 150 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-red-400:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-red-500:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(240 82 82 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-red-600:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(224 36 36 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-red-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-red-900:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(119 29 29 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-teal-600:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(4 116 129 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-teal-700:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 102 114 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-teal-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-yellow-600:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(159 88 10 / var(--tw-ring-opacity));
}\r
		:is(.dark .dark\\:focus\\:ring-yellow-900:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 49 18 / var(--tw-ring-opacity));
}\r
		:is(.dark .group:hover .dark\\:group-hover\\:bg-gray-800\\/60) {
  background-color: rgb(31 41 55 / 0.6);
}\r
		:is(.dark .group:hover .dark\\:group-hover\\:text-primary-500) {
  --tw-text-opacity: 1;
  color: rgb(254 121 93 / var(--tw-text-opacity));
}\r
		:is(.dark .group:focus .dark\\:group-focus\\:ring-gray-800\\/70) {
  --tw-ring-color: rgb(31 41 55 / 0.7);
}\r
		.peer:focus ~ :is(.dark .peer-focus\\:dark\\:text-primary-500) {
  --tw-text-opacity: 1;
  color: rgb(254 121 93 / var(--tw-text-opacity));
}\r
		:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-blue-800) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));
}\r
		:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-green-800) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));
}\r
		:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-orange-800) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(138 44 13 / var(--tw-ring-opacity));
}\r
		:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-primary-800) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(204 69 34 / var(--tw-ring-opacity));
}\r
		:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-purple-800) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}\r
		:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-red-800) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));
}\r
		:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-teal-800) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));
}\r
		:is(.dark .peer:focus ~ .dark\\:peer-focus\\:ring-yellow-800) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity));
}\r
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
}\r
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
}\r
		@media (min-width: 1024px) {

  .lg\\:max-w-7xl {
    max-width: 80rem;
  }
}\r
		@media (min-width: 1280px) {

  .xl\\:h-80 {
    height: 20rem;
  }
}\r
		@media (min-width: 1536px) {

  .\\32xl\\:h-96 {
    height: 24rem;
  }
}\r
	`,s,b=`button {\r
          border: unset;\r
          border-radius: unset;\r
          height: unset;\r
        }\r
        .main-body {\r
            width: 70%;\r
            margin: auto;\r
            background-color: rgb(228, 228, 228);\r
            padding: 1rem;\r
            margin-top: 1rem;\r
            height: 96svh;\r
            height: 96vh;\r
            overflow-y: auto;\r
            border-radius: 1rem;\r
        }\r
        .stats {\r
            display: grid;\r
            grid-template-columns: repeat(2, 1fr);\r
            row-gap: 2rem;\r
            width: 100%;\r
            justify-content: center;\r
            justify-items: center;\r
        }\r
        @media (max-width: 768px) {\r
            .main-body {\r
                width: 90%;\r
            }\r
            .stats {\r
                display: grid;\r
                grid-template-columns: 65% 35%;\r
                row-gap: 2rem;\r
                justify-items: normal;\r
            }\r
        }\r
        .footer-nav {\r
            position: relative;\r
            float: right;\r
            padding: 1rem;\r
        }`,u;return r=new On({props:{style:"full",defaultClass:"flex rounded-lg divide-x divide-dark-200 shadow dark:divide-gray-700",$$slots:{default:[be]},$$scope:{ctx:e}}}),l=new In({props:{color:"dark",href:"/main",$$slots:{default:[we]},$$scope:{ctx:e}}}),{c(){t=y("div"),yt(r.$$.fragment),o=z(),n=y("br"),a=z(),i=y("div"),yt(l.$$.fragment),d=z(),c=y("style"),c.textContent=g,s=y("style"),s.textContent=b,this.h()},l(w){t=m(w,"DIV",{class:!0});var v=G(t);mt(r.$$.fragment,v),o=E(v),n=m(v,"BR",{}),a=E(v),i=m(v,"DIV",{class:!0});var f=G(i);mt(l.$$.fragment,f),f.forEach(h),v.forEach(h),d=E(w);const I=Ir("svelte-1tptmaj",document.head);c=m(I,"STYLE",{lang:!0,"data-svelte-h":!0}),Q(c)!=="svelte-1hgz0x5"&&(c.textContent=g),s=m(I,"STYLE",{"data-svelte-h":!0}),Q(s)!=="svelte-1xc3lmp"&&(s.textContent=b),I.forEach(h),this.h()},h(){B(i,"class","footer-nav"),B(t,"class","main-body"),B(c,"lang","css")},m(w,v){M(w,t,v),kt(r,t,null),p(t,o),p(t,n),p(t,a),p(t,i),kt(l,i,null),M(w,d,v),p(document.head,c),p(document.head,s),u=!0},p(w,[v]){const f={};v&16385&&(f.$$scope={dirty:v,ctx:w}),r.$set(f);const I={};v&16384&&(I.$$scope={dirty:v,ctx:w}),l.$set(I)},i(w){u||(Y(r.$$.fragment,w),Y(l.$$.fragment,w),u=!0)},o(w){D(r.$$.fragment,w),D(l.$$.fragment,w),u=!1},d(w){w&&(h(t),h(d)),xt(r),xt(l),h(c),h(s)}}}function he(e,t,r){let o=[];return kr(async()=>{const n=await fetch("https://localhost/sv/bingo/src/routes/php/retrieve_matches.php",{method:"POST",body:JSON.stringify({data:Xr.get("username")})});r(0,o=await n.json())}),[o]}class _e extends jt{constructor(t){super(),Bt(this,t,he,ue,zt,{})}}export{_e as component};
