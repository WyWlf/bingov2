import{a2 as m,a3 as w}from"./scheduler.ce5fb7fd.js";function k(t,a){const c={},o={},i={$$scope:1};let n=t.length;for(;n--;){const e=t[n],r=a[n];if(r){for(const s in e)s in r||(o[s]=1);for(const s in r)i[s]||(c[s]=r[s],i[s]=1);t[n]=r}else for(const s in e)i[s]=1}for(const e in o)e in c||(c[e]=void 0);return c}function v(t){return typeof t=="object"&&t!==null?t:{}}function b(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function h(t){const a=t-1;return a*a*a+1}function C(t){return-.5*(Math.cos(Math.PI*t)-1)}function F(t,{delay:a=0,duration:c=400,easing:o=b,amount:i=5,opacity:n=0}={}){const e=getComputedStyle(t),r=+e.opacity,s=e.filter==="none"?"":e.filter,p=r*(1-n),[d,u]=m(i);return{delay:a,duration:c,easing:o,css:(f,y)=>`opacity: ${r-p*y}; filter: ${s} blur(${y*d}${u});`}}function S(t,{delay:a=0,duration:c=400,easing:o=w}={}){const i=+getComputedStyle(t).opacity;return{delay:a,duration:c,easing:o,css:n=>`opacity: ${n*i}`}}function I(t,{delay:a=0,duration:c=400,easing:o=h,x:i=0,y:n=0,opacity:e=0}={}){const r=getComputedStyle(t),s=+r.opacity,p=r.transform==="none"?"":r.transform,d=s*(1-e),[u,f]=m(i),[y,_]=m(n);return{delay:a,duration:c,easing:o,css:($,g)=>`
			transform: ${p} translate(${(1-$)*u}${f}, ${(1-$)*y}${_});
			opacity: ${s-d*g}`}}function M(t,{delay:a=0,duration:c=400,easing:o=h,axis:i="y"}={}){const n=getComputedStyle(t),e=+n.opacity,r=i==="y"?"height":"width",s=parseFloat(n[r]),p=i==="y"?["top","bottom"]:["left","right"],d=p.map(l=>`${l[0].toUpperCase()}${l.slice(1)}`),u=parseFloat(n[`padding${d[0]}`]),f=parseFloat(n[`padding${d[1]}`]),y=parseFloat(n[`margin${d[0]}`]),_=parseFloat(n[`margin${d[1]}`]),$=parseFloat(n[`border${d[0]}Width`]),g=parseFloat(n[`border${d[1]}Width`]);return{delay:a,duration:c,easing:o,css:l=>`overflow: hidden;opacity: ${Math.min(l*20,1)*e};${r}: ${l*s}px;padding-${p[0]}: ${l*u}px;padding-${p[1]}: ${l*f}px;margin-${p[0]}: ${l*y}px;margin-${p[1]}: ${l*_}px;border-${p[0]}-width: ${l*$}px;border-${p[1]}-width: ${l*g}px;`}}function O(t,{delay:a=0,duration:c=400,easing:o=h,start:i=0,opacity:n=0}={}){const e=getComputedStyle(t),r=+e.opacity,s=e.transform==="none"?"":e.transform,p=1-i,d=r*(1-n);return{delay:a,duration:c,easing:o,css:(u,f)=>`
			transform: ${s} scale(${1-p*f});
			opacity: ${r-d*f}
		`}}function U(t,{delay:a=0,speed:c,duration:o,easing:i=b}={}){let n=t.getTotalLength();const e=getComputedStyle(t);return e.strokeLinecap!=="butt"&&(n+=parseInt(e.strokeWidth)),o===void 0?c===void 0?o=800:o=n/c:typeof o=="function"&&(o=o(n)),{delay:a,duration:o,easing:i,css:(r,s)=>`
			stroke-dasharray: ${n};
			stroke-dashoffset: ${s*n};
		`}}export{v as a,I as b,F as c,U as d,O as e,S as f,k as g,C as h,M as s};
