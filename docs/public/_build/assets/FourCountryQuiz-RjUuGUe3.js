import{n as v,b as l,G as c,o as m,t as n,h as w,F as C,d as F,w as S,C as D}from"./web-BrHe74Mx.js";import{f as h}from"./flags-zdjHWBlJ.js";var y=S('<div class="p-2 flex flex-row"><div class="rounded basis-1/2"><img class="w-96 shadow-md border"><div class="grid grid-cols-2 gap-2 py-2"></div></div><div class="border w-52 h-24 p-4 rounded-full"><p class="text-4xl text-center"></p><p class=text-center>'),M=S('<button class="p-2 border rounded">');function I(){const[e,a]=l({correctFlag:{name:"",continent:"",description:"",img:""},choices:[]}),[t,r]=l(0),[$,d]=l("");return c(m(t,()=>{localStorage.setItem("score",JSON.stringify(t()))},{defer:!0})),c(m(e,()=>{localStorage.setItem("fourCountryQuestion",JSON.stringify(e()))},{defer:!0})),c(()=>{const o=localStorage.getItem("fourCountryQuestion");o?(console.log("getting questionData"),a(JSON.parse(o))):a(p());const s=localStorage.getItem("score");s?(console.log("getting score"),r(JSON.parse(s))):r(0)}),(()=>{var o=y(),s=o.firstChild,g=s.firstChild,x=g.nextSibling,_=s.nextSibling,u=_.firstChild,b=u.nextSibling;return n(x,w(C,{get each(){return e().choices},children:(f,Q)=>(()=>{var i=M();return i.$$click=()=>{f.name===e().correctFlag.name?(r(t()+1),d("right! good work"),a(p())):(d("wrong!"),r(t()-1))},n(i,()=>f.name),i})()})),n(u,t),n(b,$),F(()=>D(g,"src",e().correctFlag.img)),o})()}function p(){let e=[];for(let t=0;t<4;t++){let r;do r=h[Math.floor(Math.random()*h.length)];while(e.indexOf(r)!=-1);e.push(r)}return{correctFlag:e[Math.floor(Math.random()*4)],choices:e}}v(["click"]);export{I as F};
