import{p as u,D as v,w as n,h as l,S as x,d as _,J as S,y as g,b as m,B as k,x as w,o as A,n as E,K as f,c as C}from"./web-BkDJMDSk.js";import{f as $}from"./flags-CKMOOGTe.js";var y=g('<p class="bg-neutral-100 h-full text-left p-4 md:rounded-xl dark:bg-neutral-800">'),D=g('<div class="border rounded md:p-4 items-center text-center p-2 flex flex-col gap-4"><div><img class="shadow-md m-auto"width=256px height=256px alt="image of the US flag"><p class="font-bold text-2xl"></p></div><!$><!/>');function b({flag:r,showDescription:h}){return(()=>{var t=u(D),i=t.firstChild,a=i.firstChild,s=a.nextSibling,o=i.nextSibling,[c,p]=v(o.nextSibling);return n(s,()=>r.name),n(t,l(x,{get when(){return h()},get children(){var e=u(y);return n(e,()=>r.description),e}}),c,p),_(()=>S(a,"src",r.img)),t})()}var N=g('<div class="flex gap-4"><div class="flex flex-col gap-4"><button id=show-description class="border hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:bg-neutral-800 p-2 rounded-full">description</button><select class="border hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:bg-neutral-800 p-2 rounded-full"required></select></div><div class="grid grid-cols-3 gap-4">'),F=g("<option>");function q(){const[r,h]=m(!0),[t,i]=m();return k(A(t,()=>{console.log(t())},{defer:!0})),(()=>{var a=u(N),s=a.firstChild,o=s.firstChild,c=o.nextSibling,p=s.nextSibling;return o.$$click=()=>{h(!r())},c.addEventListener("change",e=>{i(e.target.value)}),n(c,l(f,{each:["All","Oceania","Africa","Asia","North America","South America","Europe","Antarctica"],children:e=>(()=>{var d=u(F);return n(d,e),d})()})),n(p,l(x,{get when(){return C(()=>!!t())()&&t()!=="All"},get fallback(){return l(f,{each:$,children:(e,d)=>l(b,{flag:e,showDescription:r})})},get children(){return l(f,{get each(){return $.filter(e=>{if(e.continent==t())return e})},children:(e,d)=>l(b,{flag:e,showDescription:r})})}})),w(),a})()}E(["click"]);export{q as default};
