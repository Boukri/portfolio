import{S as E,i as C,s as k,k as g,l as w,n as _,b as d,$ as P,E as R,J as I,h as m,w as S,y as q,z as D,A as L,g as b,d as v,B as U,I as T,a0 as V,o as z,a1 as A,M as B,a as J,m as y,c as O,a2 as W,N as j,O as F,P as G}from"./index.81f7329e.js";import{C as H}from"./CommonPage.93193168.js";import{p as K}from"./stores.9ae84ba0.js";import{b as Q}from"./paths.05da5182.js";function X(a){let e,t,s;return{c(){e=g("input"),this.h()},l(l){e=w(l,"INPUT",{placeholder:!0,class:!0}),this.h()},h(){_(e,"placeholder",a[1]),_(e,"class","text-[inherit] bg-transparent border-[1px] border-solid border-[var(--border)] px-[20px] py-[10px] rounded-[15px] flex-1 text-[1.15em]  svelte-c0g44u")},m(l,o){d(l,e,o),a[4](e),P(e,a[0]),t||(s=R(e,"input",a[5]),t=!0)},p(l,[o]){o&2&&_(e,"placeholder",l[1]),o&1&&e.value!==l[0]&&P(e,l[0])},i:I,o:I,d(l){l&&m(e),a[4](null),t=!1,s()}}}function Y(a,e,t){let{value:s=""}=e,{placeholder:l=""}=e,o;function f(){o.focus()}function p(u){S[u?"unshift":"push"](()=>{o=u,t(2,o)})}function h(){s=this.value,t(0,s)}return a.$$set=u=>{"value"in u&&t(0,s=u.value),"placeholder"in u&&t(1,l=u.placeholder)},[s,l,o,f,p,h]}class Z extends E{constructor(e){super(),C(this,e,Y,X,k,{value:0,placeholder:1,focus:3})}get focus(){return this.$$.ctx[3]}}function $(a){let e,t,s,l,o,f;function p(n){a[7](n)}let h={placeholder:"Search..."};a[0]!==void 0&&(h.value=a[0]),t=new Z({props:h}),a[6](t),S.push(()=>A(t,"value",p));const u=a[5].default,r=B(u,a,a[8],null);return{c(){e=g("div"),q(t.$$.fragment),l=J(),o=g("div"),r&&r.c(),this.h()},l(n){e=w(n,"DIV",{class:!0});var c=y(e);D(t.$$.fragment,c),c.forEach(m),l=O(n),o=w(n,"DIV",{class:!0});var i=y(o);r&&r.l(i),i.forEach(m),this.h()},h(){_(e,"class","w-100% row"),_(o,"class","w-100% col flex-1")},m(n,c){d(n,e,c),L(t,e,null),d(n,l,c),d(n,o,c),r&&r.m(o,null),f=!0},p(n,c){const i={};!s&&c&1&&(s=!0,i.value=n[0],W(()=>s=!1)),t.$set(i),r&&r.p&&(!f||c&256)&&j(r,u,n,n[8],f?G(u,n[8],c,null):F(n[8]),null)},i(n){f||(b(t.$$.fragment,n),b(r,n),f=!0)},o(n){v(t.$$.fragment,n),v(r,n),f=!1},d(n){n&&m(e),a[6](null),U(t),n&&m(l),n&&m(o),r&&r.d(n)}}}function x(a){let e,t;return e=new H({props:{title:a[1],$$slots:{default:[$]},$$scope:{ctx:a}}}),{c(){q(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,l){L(e,s,l),t=!0},p(s,[l]){const o={};l&2&&(o.title=s[1]),l&261&&(o.$$scope={dirty:l,ctx:s}),e.$set(o)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){v(e.$$.fragment,s),t=!1},d(s){U(e,s)}}}function ee(a,e,t){let s;T(a,K,i=>t(4,s=i));let{$$slots:l={},$$scope:o}=e,{title:f="Title"}=e,{search:p=""}=e,h;const u=V();let r=!1;z(()=>{let i=new URLSearchParams(window.location.search);t(0,p=i.get("q")??""),t(3,r=!0)});function n(i){S[i?"unshift":"push"](()=>{h=i,t(2,h)})}function c(i){p=i,t(0,p)}return a.$$set=i=>{"title"in i&&t(1,f=i.title),"search"in i&&t(0,p=i.search),"$$scope"in i&&t(8,o=i.$$scope)},a.$$.update=()=>{if(a.$$.dirty&1&&u("search",{search:p.trim().toLowerCase()}),a.$$.dirty&29&&r){let i=new URLSearchParams(window.location.search);i.set("q",p);const M=`${window.location.protocol}//${window.location.host}${window.location.pathname}?${i.toString()}`,N=window.history.state;window.history.replaceState(N,"",M),s.url.pathname.startsWith(`${Q}/search`)&&h&&h.focus()}},[p,f,h,r,s,l,n,c,o]}class le extends E{constructor(e){super(),C(this,e,ee,x,k,{title:1,search:0})}}export{le as S};