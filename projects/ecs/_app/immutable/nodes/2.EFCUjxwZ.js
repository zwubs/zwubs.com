import{p as G,r as U,q as $e,m as q,d as z,f as m,u as N,v as ut,h as P,l as I,w as wt,x as Ze,y as Y,z as J,i as H,b as u,A as T,B as Ct,C as bt,s as i,o as K,g as h,e as f,D as Q,E as Z,a as vt,t as Le,j as gt,F as ye,n as We,G as Re,H as kt,I as ft,J as Bt,$ as Je,k as mt}from"../chunks/disclose-version.h3ui14po.js";import{s as V,g as l,e as B,i as He,p as w,f as _t,a as p,b as ce,c as C,h as ht,m as he,j as de,r as Fe,k as Ye,l as j}from"../chunks/runtime.FAD_NtMZ.js";import{g as zt,w as xt,r as Mt}from"../chunks/index.yeNeaOu1.js";import{s as A,c as Pt,g as D,o as St}from"../chunks/main-client.sQjuHDD1.js";const It=!1,Ot=!0,aa=Object.freeze(Object.defineProperty({__proto__:null,csr:Ot,ssr:It},Symbol.toStringTag,{value:"Module"}));class ue{}class et extends ue{}class Ee extends ue{#e=V(100);get x(){return l(this.#e)}set x(e){B(this.#e,G(e))}#t=V(100);get y(){return l(this.#t)}set y(e){B(this.#t,G(e))}}class qe extends ue{#e=V(0);get x(){return l(this.#e)}set x(e){B(this.#e,G(e))}#t=V(0);get y(){return l(this.#t)}set y(e){B(this.#t,G(e))}}class tt extends ue{#e=V(0);get degrees(){return l(this.#e)}set degrees(e){B(this.#e,G(e))}}class Ue extends ue{#e=V("#ff0000");get hex(){return l(this.#e)}set hex(e){B(this.#e,G(e))}}class nt extends ue{}class xe extends et{}class at extends ue{}class Ve extends ue{#e=V(50);get size(){return l(this.#e)}set size(e){B(this.#e,G(e))}}class rt extends ue{#e=V(0);get bounces(){return l(this.#e)}set bounces(e){B(this.#e,G(e))}}const Rt=Object.freeze(Object.defineProperty({__proto__:null,BounceComponent:nt,ColorComponent:Ue,IsBouncingComponent:xe,PositionComponent:Ee,RandomizeColorOnBounceComponent:at,RotationComponent:tt,ScoreComponent:rt,SizeComponent:Ve,VelocityComponent:qe},Symbol.toStringTag,{value:"Module"})),Et=t=>{let e=V(G(t)),r=He(()=>new Map(l(e).map(n=>[n.constructor,n])));return{get components(){return l(e)},get componentsByConstructor(){return l(r)},add(n){l(e).push(n)},delete(n){B(e,G(l(e).filter(a=>a!==n)))}}},Ke={};function ot(t){return t==="local"?localStorage:sessionStorage}function st(t,e,r){const n=r?.serializer??JSON,a=r?.storage??"local";function o(s,c){ot(a).setItem(s,n.stringify(c))}if(!Ke[t]){const s=xt(e,d=>{const g=ot(a).getItem(t);g&&d(n.parse(g));{const x=M=>{M.key===t&&d(M.newValue?n.parse(M.newValue):null)};return window.addEventListener("storage",x),()=>window.removeEventListener("storage",x)}}),{subscribe:c,set:v}=s;Ke[t]={set(d){o(t,d),v(d)},update(d){const g=d(zt(s));o(t,g),v(g)},subscribe:c}}return Ke[t]}st("modeOsPrefers",!1);st("modeUserPrefers",void 0);st("modeCurrent",!1);const yt="(prefers-reduced-motion: reduce)";function jt(){return window.matchMedia(yt).matches}const Gt=Mt(jt(),t=>{{const e=n=>{t(n.matches)},r=window.matchMedia(yt);return r.addEventListener("change",e),()=>{r.removeEventListener("change",e)}}});function Ft(t){const e=t-1;return e*e*e+1}function it(t,{delay:e=0,duration:r=400,easing:n=Ft,axis:a="y"}={}){const o=getComputedStyle(t),s=+o.opacity,c=a==="y"?"height":"width",v=parseFloat(o[c]),d=a==="y"?["top","bottom"]:["left","right"],g=d.map(_=>`${_[0].toUpperCase()}${_.slice(1)}`),x=parseFloat(o[`padding${g[0]}`]),M=parseFloat(o[`padding${g[1]}`]),F=parseFloat(o[`margin${g[0]}`]),O=parseFloat(o[`margin${g[1]}`]),b=parseFloat(o[`border${g[0]}Width`]),E=parseFloat(o[`border${g[1]}Width`]);return{delay:e,duration:r,easing:n,css:_=>`overflow: hidden;opacity: ${Math.min(_*20,1)*s};${c}: ${_*v}px;padding-${d[0]}: ${_*x}px;padding-${d[1]}: ${_*M}px;margin-${d[0]}: ${_*F}px;margin-${d[1]}: ${_*O}px;border-${d[0]}-width: ${_*b}px;border-${d[1]}-width: ${_*E}px;`}}var Lt=I('<div data-testid="accordion"><!></div>');function Vt(t,e){const r=U(e,["children","$$slots","$$events"]);w(e,!1);const n={};_t(n);const a=()=>ht(Gt,"$prefersReducedMotionStore",n),o=he();let s=p(e,"autocollapse",0,!1),c=p(e,"width",0,"w-full"),v=p(e,"spacing",0,"space-y-1"),d=p(e,"disabled",0,!1),g=p(e,"padding",0,"py-2 px-4"),x=p(e,"hover",0,"hover:bg-primary-hover-token"),M=p(e,"rounded",0,"rounded-container-token"),F=p(e,"caretOpen",0,"rotate-180"),O=p(e,"caretClosed",0,""),b=p(e,"regionControl",0,""),E=p(e,"regionPanel",0,"space-y-4"),_=p(e,"regionCaret",0,""),R=p(e,"transitions",8,()=>!a()),W=p(e,"transitionIn",0,it),y=p(e,"transitionInParams",8,()=>({duration:200})),ee=p(e,"transitionOut",0,it),te=p(e,"transitionOutParams",8,()=>({duration:200}));const X=xt(null);A("active",X),A("autocollapse",s()),A("disabled",d()),A("padding",g()),A("hover",x()),A("rounded",M()),A("caretOpen",F()),A("caretClosed",O()),A("regionControl",b()),A("regionPanel",E()),A("regionCaret",_()),A("transitions",R()),A("transitionIn",W()),A("transitionInParams",y()),A("transitionOut",ee()),A("transitionOutParams",te()),ce(()=>{c(),v(),ut(e),de(()=>{B(o,`${c()} ${v()} ${r.class??""}`)})});var ne=P(t,!0,Lt),ae=m(ne);$e(ne,()=>`accordion ${N(l(o))}`),q(ae,e.children,{},null),z(t,ne),C()}function lt(t,e){const{transition:r,params:n,enabled:a}=e;return a?r(t,n):"duration"in n?r(t,{duration:0}):{duration:0}}var At=I('<div class="accordion-lead"><!></div>'),Dt=I("(summary)",!0),Nt=I("<div><!></div>"),Tt=I("<div><!></div>"),Wt=I("(content)",!0),Ht=I('<div role="region"><!></div>'),qt=I('<div data-testid="accordion-item"><button type="button"><!> <div class="accordion-summary flex-1"><!></div> <!></button> <!></div>');function pt(t,e){const r=wt(e),n=U(e,["children","$$slots","$$events"]);w(e,!1);const a={};_t(a);const o=()=>ht(ee(),"$active",a),s=he(),c=he(),v=he(),d=he(),g=he(),x=he(),M=he(),F=Pt();let O=p(e,"open",4,!1),b=p(e,"id",8,()=>String(Math.random()));const E="",_="text-start w-full flex items-center space-x-4",R="fill-current w-3 transition-transform duration-[200ms]",W="";let y=p(e,"autocollapse",8,()=>D("autocollapse")),ee=p(e,"active",8,()=>D("active")),te=p(e,"disabled",8,()=>D("disabled")),X=p(e,"padding",8,()=>D("padding")),ne=p(e,"hover",8,()=>D("hover")),ae=p(e,"rounded",8,()=>D("rounded")),De=p(e,"caretOpen",8,()=>D("caretOpen")),Xe=p(e,"caretClosed",8,()=>D("caretClosed")),$=p(e,"regionControl",8,()=>D("regionControl")),ve=p(e,"regionPanel",8,()=>D("regionPanel")),ge=p(e,"regionCaret",8,()=>D("regionCaret")),fe=p(e,"transitions",8,()=>D("transitions")),pe=p(e,"transitionIn",8,()=>D("transitionIn")),Ne=p(e,"transitionInParams",8,()=>D("transitionInParams")),we=p(e,"transitionOut",8,()=>D("transitionOut")),Ce=p(e,"transitionOutParams",8,()=>D("transitionOutParams"));const be=`
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class={classesControlCaret}>
			<path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
		</svg>`;function re(k){y()===!0?ee().set(b()):O(!O()),ke(k)}function ke(k){const S=y()?o()===b():O();F("toggle",{event:k,id:b(),panelId:`accordion-panel-${b()}`,open:S,autocollapse:y()})}y()&&O()&&re(),ce(()=>{O(),y(),de(()=>{O()&&y()&&re()})}),ce(()=>{y(),o(),b(),O(),de(()=>{B(s,y()?o()===b():O())})}),ce(()=>{ut(e),de(()=>{B(c,`${E} ${n.class??""}`)})}),ce(()=>{X(),ne(),ae(),$(),de(()=>{B(v,`${_} ${X()} ${ne()} ${ae()} ${$()}`)})}),ce(()=>{l(s),De(),Xe(),de(()=>{B(d,l(s)?De():Xe())})}),ce(()=>{ge(),l(d),de(()=>{B(g,`${R} ${ge()} ${l(d)}`)})}),ce(()=>{ge(),de(()=>{B(x,`${R} ${ge()}`)})}),ce(()=>{X(),ae(),ve(),de(()=>{B(M,`${W} ${X()} ${ae()} ${ve()}`)})});var Be=P(t,!0,qt),L=m(Be),me=m(L),je=i(i(me)),ze=m(je),Me=i(i(je)),Te=i(i(L)),se,oe,Pe,Ge;Fe(()=>{Ze(Be,`accordion-item ${N(l(c))}`),Ze(L,`accordion-control ${N(l(v))}`),se!==(se=b())&&Y(L,"id",se),oe!==(oe=l(s))&&Y(L,"aria-expanded",oe),Pe!==(Pe=`accordion-panel-${N(b())}`)&&Y(L,"aria-controls",Pe),Ge!==(Ge=te())&&(L.disabled=Ge)}),J("click",L,re,!1),J("click",L,function(k){Ye.call(this,e,k)}),J("keydown",L,function(k){Ye.call(this,e,k)}),J("keyup",L,function(k){Ye.call(this,e,k)}),J("keypress",L,function(k){Ye.call(this,e,k)}),H(me,()=>r.lead,k=>{var S=P(k,!0,At),Se=m(S);q(Se,e.$$slots?.lead,{},null),z(k,S)},null),q(ze,e.$$slots?.summary,{},k=>{var S=K(k,!0,Dt);u(k,S)}),H(Me,()=>r.iconClosed||r.iconOpen,k=>{var S=P(k,!0,Nt),Se=m(S);$e(S,()=>`accordion-summary-icons ${N(l(x))}`),H(Se,()=>l(s),ie=>{var le=h(ie),Ie=f(le);q(Ie,e.$$slots?.iconClosed,{},_e=>{var Oe=h(_e),Qe=f(Oe);T(Qe,()=>be,!1),u(_e,Oe)}),u(ie,le)},ie=>{var le=h(ie),Ie=f(le);q(Ie,e.$$slots?.iconOpen,{},_e=>{var Oe=h(_e),Qe=f(Oe);T(Qe,()=>be,!1),u(_e,Oe)}),u(ie,le)}),z(k,S)},k=>{var S=P(k,!0,Tt),Se=m(S);T(Se,()=>be,!1),$e(S,()=>`accordion-summary-caret ${N(l(g))}`),z(k,S)}),H(Te,()=>l(s),k=>{var S=P(k,!0,Ht);Ct(S,()=>lt,()=>({transition:pe(),params:Ne(),enabled:fe()}),!1),bt(S,()=>lt,()=>({transition:we(),params:Ce(),enabled:fe()}),!1);var Se=m(S),ie,le,Ie;Fe(()=>{Ze(S,`accordion-panel ${N(l(M))}`),ie!==(ie=`accordion-panel-${N(b())}`)&&Y(S,"id",ie),le!==(le=!l(s))&&Y(S,"aria-hidden",le),Ie!==(Ie=b())&&Y(S,"aria-labelledby",Ie)}),q(Se,e.$$slots?.content,{},_e=>{var Oe=K(_e,!0,Wt);u(_e,Oe)}),z(k,S)},null),z(t,Be),C()}var Ut=Z("<svg><!></svg>");function Xt(t,e){const r=U(e,["children","$$slots","$$events"]);w(e,!1);var n=P(t,!0,Ut),a=m(n);T(a,()=>'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 12h3m14 0h3M12 2v3m0 14v3"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3"/></g>',!0),Q(n,()=>[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r],!1,""),z(t,n),C()}var Yt=I("<span>Nothing to see here.</span>");function Ae(t,e){w(e,!1);var r=h(t),n=f(r);pt(n,{regionPanel:"mx-2",class:"flex-1",$$slots:{lead:(a,o)=>{var s=h(a),c=f(s);vt(c,()=>e.icon,v=>{v(c,{color:"#ffffff"})}),u(a,s)},summary:(a,o)=>{var s=gt(a);Le(s,()=>e.title),z(a,s)},content:(a,o)=>{var s=h(a),c=f(s);q(c,e.children,{},v=>{var d=P(v,!0,Yt);z(v,d)}),u(a,s)}}}),u(t,r),C()}var Jt=I('<div class="grid grid-cols-[auto_1fr] gap-2 items-center max-h-8"><span>X</span> <span class="text-right text-xs"> </span></div> <input type="range"> <div class="grid grid-cols-[auto_1fr] gap-2 items-center max-h-8"><span>Y</span> <span class="text-right text-xs"> </span></div> <input type="range">',!0);function Qt(t,e){w(e,!0);var r=h(t),n=f(r);Ae(n,{title:"Position",icon:Xt,children:(a,o)=>{var s=K(a,!0,Jt),c=f(s),v=m(c),d=i(i(v)),g=m(d),x=i(i(c));ye(x);var M=i(i(x)),F=m(M),O=i(i(F)),b=m(O),E=i(i(M));ye(E);var _,R;Fe(()=>{We(g,`${N(e.position.x)} / ${N(e.canvas.width)}px`),_!==(_=e.canvas.width)&&Y(x,"max",_),We(b,`${N(e.position.y)} / ${N(e.canvas.height)}px`),R!==(R=e.canvas.height)&&Y(E,"max",R)}),Re(x,()=>e.position.x,W=>e.position.x=W),Re(E,()=>e.position.y,W=>e.position.y=W),u(a,s)}}),u(t,r),C()}var Zt=Z("<svg><!></svg>");function Kt(t,e){const r=U(e,["children","$$slots","$$events"]);w(e,!1);var n=P(t,!0,Zt),a=m(n);T(a,()=>'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M13 16a3 3 0 0 1 2.24 5M18 12h.01"/><path d="M18 21h-8a4 4 0 0 1-4-4a7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"/><path d="M20 8.54V4a2 2 0 1 0-4 0v3m-8.388 5.524a3 3 0 1 0-1.6 4.3"/></g>',!0),Q(n,()=>[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r],!1,""),z(t,n),C()}var $t=I('<div class="grid grid-cols-[auto_1fr] gap-2 items-center max-h-8"><span>X</span> <span class="text-right text-xs"> </span></div> <input type="range"> <div class="grid grid-cols-[auto_1fr] gap-2 items-center max-h-8"><span>Y</span> <span class="text-right text-xs"> </span></div> <input type="range">',!0);function en(t,e){w(e,!0);var r=h(t),n=f(r);Ae(n,{title:"Velocity",icon:Kt,children:(a,o)=>{var s=K(a,!0,$t),c=f(s),v=m(c),d=i(i(v)),g=m(d),x=i(i(c));ye(x),Y(x,"min",-10),Y(x,"max",10);var M=i(i(x)),F=m(M),O=i(i(F)),b=m(O),E=i(i(M));ye(E),Y(E,"min",-10),Y(E,"max",10),Fe(()=>{We(g,`${N(e.velocity.x)} / 10`),We(b,`${N(e.velocity.y)} / 10`)}),Re(x,()=>e.velocity.x,_=>e.velocity.x=_),Re(E,()=>e.velocity.y,_=>e.velocity.y=_),u(a,s)}}),u(t,r),C()}var tn=Z("<svg><!></svg>");function nn(t,e){const r=U(e,["children","$$slots","$$events"]);w(e,!1);var n=P(t,!0,tn),a=m(n);T(a,()=>'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688c0-.437-.18-.835-.437-1.125c-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2"/></g>',!0),Q(n,()=>[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r],!1,""),z(t,n),C()}var an=I('<div class="grid grid-cols-[auto_1fr_auto] gap-2 items-center max-h-8"><span class="mr-4">Fill</span> <span class="text-right"> </span> <input id="color" class="input svelte-mopvkf" type="color"></div>');function rn(t,e){w(e,!0);var r=h(t),n=f(r);Ae(n,{title:"Color",icon:nn,children:(a,o)=>{var s=P(a,!0,an),c=m(s),v=i(i(c)),d=m(v),g=i(i(v));ye(g),Le(d,()=>e.color.hex),Re(g,()=>e.color.hex,x=>e.color.hex=x),z(a,s)}}),u(t,r),C()}var sn=Z("<svg><!></svg>");function on(t,e){const r=U(e,["children","$$slots","$$events"]);w(e,!1);var n=P(t,!0,sn),a=m(n);T(a,()=>'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></g>',!0),Q(n,()=>[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r],!1,""),z(t,n),C()}var ln=I('<div class="grid grid-cols-[auto_1fr] gap-2 items-center max-h-8"><span>Degrees</span> <span class="text-right text-xs"> </span></div> <input type="range" max="90">',!0);function cn(t,e){w(e,!0);var r=h(t),n=f(r);Ae(n,{title:"Rotation",icon:on,children:(a,o)=>{var s=K(a,!0,ln),c=f(s),v=m(c),d=i(i(v)),g=m(d),x=i(i(c));ye(x),Le(g,()=>`${N(e.rotation.degrees)}° / 90°`),Re(x,()=>e.rotation.degrees,M=>e.rotation.degrees=M),u(a,s)}}),u(t,r),C()}var dn=Z("<svg><!></svg>");function un(t,e){const r=U(e,["children","$$slots","$$events"]);w(e,!1);var n=P(t,!0,dn),a=m(n);T(a,()=>'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"/><rect width="7" height="7" x="3" y="14" rx="1"/><circle cx="17.5" cy="17.5" r="3.5"/></g>',!0),Q(n,()=>[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r],!1,""),z(t,n),C()}var vn=Z("<svg><!></svg>");function gn(t,e){const r=U(e,["children","$$slots","$$events"]);w(e,!1);var n=P(t,!0,vn),a=m(n);T(a,()=>'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-6-6m6 6v-4.8m0 4.8h-4.8M3 16.2V21m0 0h4.8M3 21l6-6m12-7.2V3m0 0h-4.8M21 3l-6 6M3 7.8V3m0 0h4.8M3 3l6 6"/>',!0),Q(n,()=>[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r],!1,""),z(t,n),C()}var fn=I('<div class="grid grid-cols-[auto_1fr] gap-2 items-center max-h-8"><span>Size</span> <span class="text-right text-xs"> </span></div> <input type="range" min="1" max="100">',!0);function mn(t,e){w(e,!0);var r=h(t),n=f(r);Ae(n,{title:"Size",icon:gn,children:(a,o)=>{var s=K(a,!0,fn),c=f(s),v=m(c),d=i(i(v)),g=m(d),x=i(i(c));ye(x),Le(g,()=>`${N(e.size.size)}px / 100px`),Re(x,()=>e.size.size,M=>e.size.size=M),u(a,s)}}),u(t,r),C()}var _n=Z("<svg><!></svg>");function hn(t,e){const r=U(e,["children","$$slots","$$events"]);w(e,!1);var n=P(t,!0,_n),a=m(n);T(a,()=>'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7v14"/>',!0),Q(n,()=>[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r],!1,""),z(t,n),C()}var xn=I("<option> </option>"),yn=I('<select class="select flex-1"><option></option><!></select> <button class="btn-icon btn-icon-sm variant-filled-primary rounded-container-token"><!></button>',!0);function pn(t,e){w(e,!0);function r(_,R){return _.prototype instanceof R}const n=new Map(Object.entries(Rt).filter(([_,R])=>!r(R,et))),a=Array.from(n.keys());let o=He(()=>new Set(e.entity.components.map(_=>_.constructor.name))),s=He(()=>a.filter(_=>!l(o).has(_))),c=V("");const v=()=>{const _=n.get(l(c));_&&(e.entity.add(new _),B(c,""))};var d=K(t,!0,yn),g=f(d);ye(g);var x=m(g);x.value=((x.__value="")==null,"");var M=i(x),F=i(i(g)),O=m(F),b,E;Fe(()=>{b!==(b=l(s).length==0)&&(g.disabled=b),E!==(E=l(s).length==0)&&(F.disabled=E)}),kt(g,()=>l(c),_=>B(c,_)),ft(M,()=>l(s),65,(_,R,W)=>{var y=P(_,!0,xn),ee=m(y),te,X;Fe(()=>{te!==(te=j(R))&&(y.value=(y.__value=j(R))==null?"":j(R),Bt(y)),X!==(X=l(c)==j(R))&&(y.selected=X),We(ee,j(R))}),z(_,y)},null),J("click",F,v,!1),hn(O,{}),u(t,d),C()}var wn=Z("<svg><!></svg>");function Cn(t,e){const r=U(e,["children","$$slots","$$events"]);w(e,!1);var n=P(t,!0,wn),a=m(n);T(a,()=>'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/>',!0),Q(n,()=>[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r],!1,""),z(t,n),C()}var bn=I('<button class="btn-icon btn-icon-sm variant-ghost-error rounded-container-token self-start"><!></button>');function kn(t,e){w(e,!0);const r=()=>{e.entity.delete(e.component)};var n=P(t,!0,bn),a=m(n);J("click",n,r,!1),Cn(a,{}),z(t,n),C()}var Bn=Z("<svg><!></svg>");function zn(t,e){const r=U(e,["children","$$slots","$$events"]);w(e,!1);var n=P(t,!0,Bn),a=m(n);T(a,()=>'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></g>',!0),Q(n,()=>[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r],!1,""),z(t,n),C()}var Mn=I("<button><!></button>");function Pn(t,e){w(e,!0);let r=V(!1);function n(){B(r,!0)}function a(v){l(r)&&(e.element.style.right=`${parseInt(e.element.style.right)-v.movementX}px`,e.element.style.top=`${parseInt(e.element.style.top)+v.movementY}px`)}function o(){B(r,!1)}var s=P(t,!0,Mn),c=m(s);J("mouseup",Je,o,!1),J("mousemove",Je,a,!1),J("contextmenu",Je,o,!1),J("mousedown",s,n,!1),zn(c,{class:"cursor-move select-none"}),z(t,s),C()}var Sn=Z("<svg><!></svg>");function In(t,e){const r=U(e,["children","$$slots","$$events"]);w(e,!1);var n=P(t,!0,Sn),a=m(n);T(a,()=>'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v16M9 4v16m5-16v16m5-16v16m3-14L2 18"/>',!0),Q(n,()=>[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r],!1,""),z(t,n),C()}var On=I('<div class="grid grid-cols-[auto_1fr]"><span>Bounces</span> <span class="text-right"> </span></div>');function Rn(t,e){w(e,!0);var r=h(t),n=f(r);Ae(n,{title:"Score",icon:In,children:(a,o)=>{var s=P(a,!0,On),c=m(s),v=i(i(c)),d=m(v);Le(d,()=>e.score.bounces),z(a,s)}}),u(t,r),C()}var En=I("&nbsp;",!0),jn=I("&nbsp;",!0);function ct(t,e){w(e,!1);var r=h(t),n=f(r);pt(n,{regionPanel:"mx-2",class:"flex-1",disabled:!0,$$slots:{lead:(a,o)=>{var s=h(a),c=f(s);vt(c,()=>e.icon,v=>{v(c,{color:"#ffffff"})}),u(a,s)},summary:(a,o)=>{var s=gt(a);Le(s,()=>e.title),z(a,s)},iconClosed:(a,o)=>{var s=K(a,!0,En);u(a,s)},iconOpen:(a,o)=>{var s=K(a,!0,jn);u(a,s)}}}),u(t,r),C()}var Gn=Z("<svg><!></svg>");function Fn(t,e){const r=U(e,["children","$$slots","$$events"]);w(e,!1);var n=P(t,!0,Gn),a=m(n);T(a,()=>'<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"/><path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7m0-4h.01"/><path d="m11 8l2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"/></g>',!0),Q(n,()=>[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r],!1,""),z(t,n),C()}var Ln=Z("<svg><!></svg>");function Vn(t,e){const r=U(e,["children","$$slots","$$events"]);w(e,!1);var n=P(t,!0,Ln),a=m(n);T(a,()=>'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 9l-6-6l-6 6m6-6v14m-7 4h14"/>',!0),Q(n,()=>[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r],!1,""),z(t,n),C()}var An=I('<div class="flex flex-row items-center gap-4"><!> <!></div>'),Dn=I('<div class="card absolute m-4 w-full max-w-md flex flex-col variant-ghost-surface max-h-[90vh]" style="right: 0px; top: 0px;"><header class="flex flex-row items-center gap-2 p-4"><hgroup class="flex-1"><h1 class="h4 font-bold flex gap-2"><!><span>Components</span></h1> <p class="text-surface-100 text-sm">Data currently attached to the entity.</p></hgroup> <!></header> <hr> <!> <hr> <footer class="flex flex-row items-center gap-4 p-4"><!></footer></div>');function Nn(t,e){w(e,!0);let r=p(e,"entity",7),n=V(void 0);var a=P(t,!0,Dn);mt(a,b=>B(n,b),n);var o=m(a),s=m(o),c=m(s),v=m(c),d=i(i(s)),g=i(i(o)),x=i(i(g)),M=i(i(x)),F=i(i(M)),O=m(F);un(v,{width:"1.5rem",height:"1.5rem"}),Pn(d,{get element(){return l(n)}}),Vt(x,{spacing:"space-y-2 overflow-y-auto p-4",children:(b,E)=>{var _=h(b),R=f(_);ft(R,()=>r().components,65,(W,y,ee)=>{var te=h(W),X=f(te);H(X,()=>!(j(y)instanceof et),ne=>{var ae=P(ne,!0,An),De=m(ae),Xe=i(i(De));H(De,()=>j(y)instanceof Ee,$=>{var ve=h($),ge=f(ve);Qt(ge,{get position(){return j(y)},get canvas(){return e.canvas}}),u($,ve)},$=>{var ve=h($),ge=f(ve);H(ge,()=>j(y)instanceof qe,fe=>{var pe=h(fe),Ne=f(pe);en(Ne,{get velocity(){return j(y)}}),u(fe,pe)},fe=>{var pe=h(fe),Ne=f(pe);H(Ne,()=>j(y)instanceof tt,we=>{var Ce=h(we),be=f(Ce);cn(be,{get rotation(){return j(y)}}),u(we,Ce)},we=>{var Ce=h(we),be=f(Ce);H(be,()=>j(y)instanceof Ue,re=>{var ke=h(re),Be=f(ke);rn(Be,{get color(){return j(y)}}),u(re,ke)},re=>{var ke=h(re),Be=f(ke);H(Be,()=>j(y)instanceof nt,L=>{var me=h(L),je=f(me);ct(je,{title:"Bounce",icon:Vn}),u(L,me)},L=>{var me=h(L),je=f(me);H(je,()=>j(y)instanceof Ve,ze=>{var Me=h(ze),Te=f(Me);mn(Te,{get size(){return j(y)}}),u(ze,Me)},ze=>{var Me=h(ze),Te=f(Me);H(Te,()=>j(y)instanceof rt,se=>{var oe=h(se),Pe=f(oe);Rn(Pe,{get score(){return j(y)}}),u(se,oe)},se=>{var oe=h(se),Pe=f(oe);H(Pe,()=>j(y)instanceof at,Ge=>{var k=h(Ge),S=f(k);ct(S,{title:"Randomize Color On Bounce",icon:Fn}),u(Ge,k)},null),u(se,oe)}),u(ze,Me)}),u(L,me)}),u(re,ke)}),u(we,Ce)}),u(fe,pe)}),u($,ve)}),kn(Xe,{get entity(){return r()},set entity($){r($)},get component(){return j(y)}}),z(ne,ae)},null),u(W,te)},null),u(b,_)}}),pn(O,{get entity(){return r()},set entity(b){r(b)}}),z(t,a),C()}const dt=()=>{throw new Error("Cannot access context prior to initialization, make sure you access it within onMount.")},Tn=t=>{let e=G(t.getContext("2d")??dt()),r=V(G(window.innerWidth)),n=V(G(window.innerHeight)),a=V(G(window.devicePixelRatio));return{get context(){return e??dt()},get width(){return l(r)},set width(o){B(r,G(o))},get height(){return l(n)},set height(o){B(n,G(o))},get pixelRatio(){return l(a)},set pixelRatio(o){B(a,G(o))}}};var Wn=I('<canvas class="svelte-1njmqqg"></canvas> <!>',!0);function Hn(t,e){w(e,!0);let r=V(void 0),n=V(void 0);St(()=>{if(!l(n))throw new Error("No canvas element");B(r,G(Tn(l(n)))),a()});function a(){if(!l(r)||!l(n))throw new Error("No canvas initialized");l(r).pixelRatio=window.devicePixelRatio,l(r).width=window.innerWidth*l(r).pixelRatio,l(r).height=window.innerHeight*l(r).pixelRatio,l(n).width=l(r).width,l(n).height=l(r).height}var o=K(t,!0,Wn),s=f(o);mt(s,v=>B(n,v),n);var c=i(i(s));J("resize",Je,a,!1,!0),q(c,e.children,{get canvas(){return l(r)}},null),u(t,o),C()}const qn=()=>{const t=G(new Set),e=()=>{t.forEach(r=>{r()}),requestAnimationFrame(e)};return requestAnimationFrame(e),{add:r=>{t.add(r)}}};function Un(t,e){w(e,!0),e.updater.add(()=>{e.canvas.context.reset(),e.entities.forEach(a=>{const o=a.componentsByConstructor.get(Ee);if(!o)return;const s=a.componentsByConstructor.get(tt),c=a.componentsByConstructor.get(Ue),d=a.componentsByConstructor.get(Ve)?.size??50,g=d/2;e.canvas.context.lineCap="round",e.canvas.context.beginPath(),e.canvas.context.fillStyle=c?.hex??"#BBB",e.canvas.context.strokeStyle="#FFF",e.canvas.context.lineWidth=2,e.canvas.context.translate(o.x??0,o.y??0),e.canvas.context.rotate((s?.degrees??0)*Math.PI/180),e.canvas.context.fillRect(-g,-g,d,d),e.canvas.context.rect(-g,-g,d,d),e.canvas.context.stroke(),e.canvas.context.setTransform(1,0,0,1,0,0)})});var r=h(t),n=f(r);q(n,e.children,{},null),u(t,r),C()}function Xn(t,e){w(e,!0),e.updater.add(()=>{e.entities.forEach(a=>{const o=a.componentsByConstructor.get(Ee),s=a.componentsByConstructor.get(qe);!o||!s||(o.x+=s.x,o.y+=s.y)})});var r=h(t),n=f(r);q(n,e.children,{},null),u(t,r),C()}function Yn(t,e){w(e,!0),e.updater.add(()=>{e.entities.forEach(a=>{const o=a.componentsByConstructor.get(Ee),c=(a.componentsByConstructor.get(Ve)?.size??0)/2;o&&(o.x+c>e.canvas.width?o.x=e.canvas.width-c:o.x-c<0&&(o.x=c),o.y+c>e.canvas.height?o.y=e.canvas.height-c:o.y-c<0&&(o.y=c))})});var r=h(t),n=f(r);q(n,e.children,{},null),u(t,r),C()}function Jn(t,e){w(e,!0),e.updater.add(()=>{e.entities.forEach(a=>{const o=a.componentsByConstructor.get(Ee),s=a.componentsByConstructor.get(qe),v=(a.componentsByConstructor.get(Ve)?.size??0)/2,d=a.componentsByConstructor.has(nt),g=a.componentsByConstructor.get(xe);g&&a.delete(g),!(!o||!s||!d)&&(o.x+v>e.canvas.width?(s.x=Math.abs(s.x)*-1,a.add(new xe)):o.x-v<0&&(s.x=Math.abs(s.x),a.add(new xe)),o.y+v>e.canvas.height?(s.y=Math.abs(s.y)*-1,a.add(new xe)):o.y-v<0&&(s.y=Math.abs(s.y),a.add(new xe)))})});var r=h(t),n=f(r);q(n,e.children,{},null),u(t,r),C()}function Qn(t,e){w(e,!0),e.updater.add(()=>{e.entities.forEach(a=>{const o=a.componentsByConstructor.get(rt),s=a.componentsByConstructor.has(xe);o&&s&&(o.bounces+=1)})});var r=h(t),n=f(r);q(n,e.children,{},null),u(t,r),C()}function Zn(t,e){w(e,!0),e.updater.add(()=>{e.entities.forEach(a=>{const o=a.componentsByConstructor.get(Ue),s=a.componentsByConstructor.has(at),c=a.componentsByConstructor.has(xe);o&&c&&s&&(o.hex="#"+(Math.random()*16777215<<0).toString(16).padStart(6,"0"))})});var r=h(t),n=f(r);q(n,e.children,{},null),u(t,r),C()}var Kn=I("<!> <!> <!> <!> <!> <!> <!>",!0);function ra(t,e){w(e,!0);let r=V(G(Et([new Ee,new qe,new Ue,new Ve]))),n=He(()=>new Set([l(r)]));const a=qn();var o=h(t),s=f(o);Hn(s,{children:(c,v)=>{const d=He(()=>v.canvas);var g=h(c),x=f(g);H(x,()=>!!l(d),M=>{var F=K(M,!0,Kn),O=f(F),b=i(i(O)),E=i(i(b)),_=i(i(E)),R=i(i(_)),W=i(i(R)),y=i(i(W));Nn(O,{get entity(){return l(r)},set entity(ee){B(r,G(ee))},get canvas(){return l(d)}}),Xn(b,{updater:a,get entities(){return l(n)}}),Jn(E,{get canvas(){return l(d)},updater:a,get entities(){return l(n)}}),Yn(_,{get canvas(){return l(d)},updater:a,get entities(){return l(n)}}),Qn(R,{updater:a,get entities(){return l(n)}}),Zn(W,{updater:a,get entities(){return l(n)}}),Un(y,{get canvas(){return l(d)},updater:a,get entities(){return l(n)}}),u(M,F)},null),u(c,g)}}),u(t,o),C()}export{ra as component,aa as universal};