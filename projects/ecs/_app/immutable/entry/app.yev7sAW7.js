import{d as I,p as V,a as E,b as j,u as U,g as _,c as q,s as b,e as p,t as N}from"../chunks/runtime.FAD_NtMZ.js";import{c as W,i as k,a as w,b as v,t as z,d as O,e as g,s as S,f as F,p as G,o as H,g as R,h as J,j as K,k as x,l as A}from"../chunks/disclose-version.h3ui14po.js";import{o as M}from"../chunks/main-client.sQjuHDD1.js";function Q(a){return class extends X{constructor(t){super({component:a,...t})}}}class X{#t={};#e;constructor(t){this.#e=W(t.component,{target:t.target,props:{...t.props,$$events:this.#t},context:t.context,intro:t.intro,recover:t.recover});for(const e of Object.keys(this.#e))e==="$set"||e==="$destroy"||I(this,e,{get(){return this.#e[e]},set(o){this.#e[e]=o},enumerable:!0})}$set(t){this.#e.$set(t)}$on(t,e){this.#t[t]=this.#t[t]||[];const o=(...c)=>e.call(this,...c);return this.#t[t].push(o),()=>{this.#t[t]=this.#t[t].filter(c=>c!==o)}}$destroy(){this.#e.$destroy()}}const Y="modulepreload",Z=function(a,t){return new URL(a,t).href},T={},P=function(t,e,o){if(!e||e.length===0)return t();const c=document.getElementsByTagName("link");return Promise.all(e.map(r=>{if(r=Z(r,o),r in T)return;T[r]=!0;const n=r.endsWith(".css"),h=n?'[rel="stylesheet"]':"";if(!!o)for(let d=c.length-1;d>=0;d--){const s=c[d];if(s.href===r&&(!n||s.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${h}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":Y,n||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),n)return new Promise((d,s)=>{i.addEventListener("load",d),i.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t()).catch(r=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=r,window.dispatchEvent(n),!n.defaultPrevented)throw r})},at={};var $=A('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),tt=A("<!> <!>",!0);function et(a,t){V(t,!0);let e=E(t,"components",11,()=>[]),o=E(t,"data_0",3,null),c=E(t,"data_1",3,null);j(()=>t.stores.page.set(t.page)),U(()=>{t.stores,t.page,t.constructors,e(),t.form,o(),c(),t.stores.page.notify()});let r=b(!1),n=b(!1),h=b(null);M(()=>{const s=t.stores.page.subscribe(()=>{_(r)&&(p(n,!0),N().then(()=>{p(h,G(document.title||"untitled page"))}))});return p(r,!0),s});var y=H(a,!0,tt),i=g(y),d=S(S(i));k(i,()=>t.constructors[1],s=>{var u=R(s),f=g(u);w(f,()=>t.constructors[0],m=>{x(m(f,{get data(){return o()},children:(l,rt)=>{var L=R(l),C=g(L);w(C,()=>t.constructors[1],B=>{x(B(C,{get data(){return c()},get form(){return t.form}}),D=>e()[1]=D)}),v(l,L)}}),l=>e()[0]=l)}),v(s,u)},s=>{var u=R(s),f=g(u);w(f,()=>t.constructors[0],m=>{x(m(f,{get data(){return o()},get form(){return t.form}}),l=>e()[0]=l)}),v(s,u)}),k(d,()=>_(r),s=>{var u=J(s,!0,$),f=F(u);k(f,()=>_(n),m=>{var l=K(m);z(l,()=>_(h)),O(m,l)},null),O(s,u)},null),v(a,y),q()}const it=Q(et),ct=[()=>P(()=>import("../nodes/0.SFNqtnpL.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>P(()=>import("../nodes/1.0OP16hAb.js"),__vite__mapDeps([4,1,2,5,6]),import.meta.url),()=>P(()=>import("../nodes/2.EFCUjxwZ.js"),__vite__mapDeps([7,1,2,6,8,9]),import.meta.url)],lt=[],ut={"/":[2]},dt={handleError:({error:a})=>{console.error(a)}};export{ut as dictionary,dt as hooks,at as matchers,ct as nodes,it as root,lt as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.SFNqtnpL.js","../chunks/disclose-version.h3ui14po.js","../chunks/runtime.FAD_NtMZ.js","../assets/0.QPJPBTUF.css","../nodes/1.0OP16hAb.js","../chunks/singletons.BY2SymRJ.js","../chunks/index.yeNeaOu1.js","../nodes/2.EFCUjxwZ.js","../chunks/main-client.sQjuHDD1.js","../assets/2.ZzU1MnP_.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}