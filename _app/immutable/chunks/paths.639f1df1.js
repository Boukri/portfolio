import{J as b,s as h}from"./index.81f7329e.js";const e=[];function d(i,a=b){let n;const o=new Set;function c(t){if(h(i,t)&&(i=t,n)){const r=!e.length;for(const s of o)s[1](),e.push(s,i);if(r){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){c(t(i))}function _(t,r=b){const s=[t,r];return o.add(s),o.size===1&&(n=a(c)||b),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:c,update:l,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_c8c2rc)==null?void 0:f.base)??"";var u;const q=((u=globalThis.__sveltekit_c8c2rc)==null?void 0:u.assets)??p;export{q as a,p as b,d as w};
