import{ssr as l,ssrHydrationKey as d,ssrAttribute as m,escape as r,createComponent as p}from"solid-js/web";import{createSignal as c,createEffect as i,on as u,For as h}from"solid-js";import{f as g}from"./flags-zdjHWBlJ.js";var S=["<div",' class="p-2 flex flex-row"><div class="rounded basis-1/2"><img class="w-96 shadow-md border"','><div class="grid grid-cols-2 gap-2 py-2">','</div></div><div class="border w-52 h-24 p-4 rounded-full"><p class="text-4xl text-center">','</p><p class="text-center">',"</p></div></div>"],v=["<button",' class="p-2 border rounded">',"</button>"];function F(){const[e,a]=c({correctFlag:{name:"",continent:"",description:"",img:""},choices:[]}),[t,o]=c(0),[f,y]=c("");return i(u(t,()=>{localStorage.setItem("score",JSON.stringify(t()))},{defer:!0})),i(u(e,()=>{localStorage.setItem("fourCountryQuestion",JSON.stringify(e()))},{defer:!0})),i(()=>{const s=localStorage.getItem("fourCountryQuestion");s?(console.log("getting questionData"),a(JSON.parse(s))):a(x());const n=localStorage.getItem("score");n?(console.log("getting score"),o(JSON.parse(n))):o(0)}),l(S,d(),m("src",r(e().correctFlag.img,!0),!1),r(p(h,{get each(){return e().choices},children:(s,n)=>l(v,d(),r(s.name))})),r(t()),r(f()))}function x(){let e=[];for(let t=0;t<4;t++){let o;do o=g[Math.floor(Math.random()*g.length)];while(e.indexOf(o)!=-1);e.push(o)}return{correctFlag:e[Math.floor(Math.random()*4)],choices:e}}export{F};
