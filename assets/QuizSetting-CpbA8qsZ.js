import{ssr as i,ssrHydrationKey as c,ssrAttribute as S,escape as t,createComponent as p}from"solid-js/web";import{createSignal as n,createEffect as l,on as d,For as m}from"solid-js";import{f as h}from"./flags-BbEtasJZ.js";var x=["<div",' class="p-2 flex flex-row justify-evenly"><div class="rounded basis-1/2"><img class="w-96 shadow-md border"','><div class="grid grid-cols-2 gap-2 py-2">','</div></div><div class="self-center border w-52 h-24 p-4 rounded-full"><p class="text-4xl text-center">','</p><p class="text-center">',"</p></div></div>"],y=["<button",' class="p-2 border rounded">',"</button>"];function O({settings:s}){const[o,a]=n({correctFlag:{name:"",continent:"",description:"",img:""},choices:[]}),[e,f]=n(0),[u,v]=n("");return l(d(e,()=>{localStorage.setItem("score",JSON.stringify(e()))},{defer:!0})),l(d(o,()=>{localStorage.setItem("fourCountryQuestion",JSON.stringify(o()))},{defer:!0})),l(()=>{const r=localStorage.getItem("fourCountryQuestion");r?(console.log("getting questionData"),a(JSON.parse(r))):a(w());const g=localStorage.getItem("score");g?(console.log("getting score"),f(JSON.parse(g))):f(0)}),i(x,c(),S("src",t(o().correctFlag.img,!0),!1),t(p(m,{get each(){return o().choices},children:(r,g)=>i(y,c(),t(r.name))})),t(e()),t(u()))}function w(){let s=[];for(let a=0;a<4;a++){let e;do e=h[Math.floor(Math.random()*h.length)];while(s.indexOf(e)!=-1);s.push(e)}return{correctFlag:s[Math.floor(Math.random()*4)],choices:s}}var Q=["<div",' class="flex flex-col gap-5"><p class="text-2xl">Settings</p><div class="flex flex-col w-64 gap-2"><label class="opacity-50">time (mins):</label><select id="time-field" class="w-full p-2 rounded dark:bg-neutral-800" required>','</select><div><label class="opacity-50">continent:</label><select class="w-full p-2 rounded dark:bg-neutral-800" required>','</select></div><div><label class="opacity-50">amount:</label><input class="w-full p-2 rounded dark:bg-neutral-800" required min="1" step="5" placeholder="amount" type="number"></div></div><button class="self-end p-2 border rounded w-fit">start</button></div>'],b=["<option",">","</option>"];function C({onStartQuiz:s}){const[o,a]=n("Oceania"),[e,f]=n(0),[u,v]=n(1);return l(d(e,()=>{console.log(e())},{defer:!0})),l(d(o,()=>{console.log(o())},{defer:!0})),l(d(u,()=>{console.log(u())},{defer:!0})),i(Q,c(),t(p(m,{each:[0,1,2],children:r=>i(b,c(),t(r))})),t(p(m,{each:["Oceania","Africa","Asisa","North America","South America","Europe","Antartica"],children:r=>i(b,c(),t(r))})))}export{O as F,C as Q};
