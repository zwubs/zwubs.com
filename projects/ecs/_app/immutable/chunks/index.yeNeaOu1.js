import{v as p}from"./runtime.FAD_NtMZ.js";const o=[];function f(){}function h(t,e){return{subscribe:d(t,e).subscribe}}function _(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function d(t,e=f){let s=null;const u=new Set;function i(r){if(_(t,r)&&(t=r,s)){const c=!o.length;for(const n of u)n[1](),o.push(n,t);if(c){for(let n=0;n<o.length;n+=2)o[n][0](o[n+1]);o.length=0}}}function b(r){i(r(t))}function l(r,c=f){const n=[r,c];return u.add(n),u.size===1&&(s=e(i,b)||f),r(t),()=>{u.delete(n),u.size===0&&s&&(s(),s=null)}}return{set:i,update:b,subscribe:l}}function a(t){let e;return p(t,s=>e=s)(),e}export{a as g,h as r,d as w};