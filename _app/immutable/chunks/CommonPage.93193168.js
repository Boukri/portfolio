import{S,i as V,s as z,w as A,a1 as B,M as N,y as v,a as T,k as y,z as k,c as w,l as C,m as D,h as c,n as M,A as q,b as g,D as E,a2 as O,N as j,O as F,P as G,g as d,d as $,B as I,q as H,r as J,u as K}from"./index.81f7329e.js";import{M as L}from"./app.0c16dbc8.js";import{T as Q}from"./TabTitle.4403cff8.js";function R(l){let e;return{c(){e=H(l[0])},l(s){e=J(s,l[0])},m(s,r){g(s,e,r)},p(s,r){r&1&&K(e,s[0])},d(s){s&&c(e)}}}function U(l){let e,s,r,f,i,m,n,_;function P(t){l[2](t)}let b={};l[0]!==void 0&&(b.title=l[0]),e=new Q({props:b}),A.push(()=>B(e,"title",P)),i=new L({props:{$$slots:{default:[R]},$$scope:{ctx:l}}});const p=l[1].default,o=N(p,l,l[3],null);return{c(){v(e.$$.fragment),r=T(),f=y("div"),v(i.$$.fragment),m=T(),n=y("div"),o&&o.c(),this.h()},l(t){k(e.$$.fragment,t),r=w(t),f=C(t,"DIV",{class:!0});var a=D(f);k(i.$$.fragment,a),m=w(a),n=C(a,"DIV",{class:!0});var u=D(n);o&&o.l(u),u.forEach(c),a.forEach(c),this.h()},h(){M(n,"class","col gap-5 flex-1"),M(f,"class","flex-1 col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12")},m(t,a){q(e,t,a),g(t,r,a),g(t,f,a),q(i,f,null),E(f,m),E(f,n),o&&o.m(n,null),_=!0},p(t,[a]){const u={};!s&&a&1&&(s=!0,u.title=t[0],O(()=>s=!1)),e.$set(u);const h={};a&9&&(h.$$scope={dirty:a,ctx:t}),i.$set(h),o&&o.p&&(!_||a&8)&&j(o,p,t,t[3],_?G(p,t[3],a,null):F(t[3]),null)},i(t){_||(d(e.$$.fragment,t),d(i.$$.fragment,t),d(o,t),_=!0)},o(t){$(e.$$.fragment,t),$(i.$$.fragment,t),$(o,t),_=!1},d(t){I(e,t),t&&c(r),t&&c(f),I(i),o&&o.d(t)}}}function W(l,e,s){let{$$slots:r={},$$scope:f}=e,{title:i="Title"}=e;function m(n){i=n,s(0,i)}return l.$$set=n=>{"title"in n&&s(0,i=n.title),"$$scope"in n&&s(3,f=n.$$scope)},[i,r,m,f]}class x extends S{constructor(e){super(),V(this,e,W,U,z,{title:0})}}export{x as C};