const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/_...404_-BIiUBPH1.js","assets/web-CGBNmKrG.js","assets/HttpStatusCode-b2dJdmuH.js","assets/flags-CULBxLsF.js","assets/flags-zdjHWBlJ.js","assets/index-JwnWKm-9.js","assets/profile-BDRrRUm1.js","assets/four-countries-W1LB1xvB.js","assets/FourCountryQuiz-CKH057W2.js","assets/four-flags-W1LB1xvB.js","assets/index-D5YAQjcd.js"])))=>i.map(i=>d[i]);
import{r as fe,c as E,g as de,a as he,b as C,d as Ie,o as W,u as Oe,s as De,e as Me,f as pe,i as me,h as y,j as qe,k as Fe,S as Y,l as Ue,m as ee,n as ge,p as P,q,t as N,w as D,x as I,y as R,z as Be,A as je,B as we,C as We,D as He,E as Ve,F as Je}from"./web-CGBNmKrG.js";import{M as Ke,T as Ze,H as Ge}from"./HttpStatusCode-b2dJdmuH.js";const J="Invariant Violation",{setPrototypeOf:Xe=function(e,t){return e.__proto__=t,e}}=Object;class te extends Error{framesToPop=1;name=J;constructor(t=J){super(typeof t=="number"?`${J}: ${t} (see https://github.com/apollographql/invariant-packages)`:t),Xe(this,te.prototype)}}function K(e,t){if(!e)throw new te(t)}const Qe=/^[A-Za-z]:\//;function Ye(e=""){return e&&e.replace(/\\/g,"/").replace(Qe,t=>t.toUpperCase())}const et=/^[/\\]{2}/,tt=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,rt=/^[A-Za-z]:$/,nt=function(e){if(e.length===0)return".";e=Ye(e);const t=e.match(et),r=X(e),n=e[e.length-1]==="/";return e=at(e,!r),e.length===0?r?"/":n?"./":".":(n&&(e+="/"),rt.test(e)&&(e+="/"),t?r?`//${e}`:`//./${e}`:r&&!X(e)?`/${e}`:e)},ye=function(...e){if(e.length===0)return".";let t;for(const r of e)r&&r.length>0&&(t===void 0?t=r:t+=`/${r}`);return t===void 0?".":nt(t.replace(/\/\/+/g,"/"))};function at(e,t){let r="",n=0,a=-1,o=0,i=null;for(let s=0;s<=e.length;++s){if(s<e.length)i=e[s];else{if(i==="/")break;i="/"}if(i==="/"){if(!(a===s-1||o===1))if(o===2){if(r.length<2||n!==2||r[r.length-1]!=="."||r[r.length-2]!=="."){if(r.length>2){const c=r.lastIndexOf("/");c===-1?(r="",n=0):(r=r.slice(0,c),n=r.length-1-r.lastIndexOf("/")),a=s,o=0;continue}else if(r.length>0){r="",n=0,a=s,o=0;continue}}t&&(r+=r.length>0?"/..":"..",n=2)}else r.length>0?r+=`/${e.slice(a+1,s)}`:r=e.slice(a+1,s),n=s-a-1;a=s,o=0}else i==="."&&o!==-1?++o:o=-1}return r}const X=function(e){return tt.test(e)};function ot(e){return`virtual:${e}`}function st(e){return e.handler?.endsWith(".html")?X(e.handler)?e.handler:ye(e.root,e.handler):`$vinxi/handler/${e.name}`}const it=new Proxy({},{get(e,t){return K(typeof t=="string","Bundler name should be a string"),{name:t,type:"client",handler:ot(st({name:t})),baseURL:"/flagify/_build",chunks:new Proxy({},{get(r,n){K(typeof n=="string","Chunk expected");let a=ye("/flagify/_build",n+".mjs");return{import(){return import(a)},output:{path:a}}}}),inputs:new Proxy({},{get(r,n){K(typeof n=="string","Input must be string");let a=window.manifest[n].output;return{async import(){return import(a)},async assets(){return window.manifest[n].assets},output:{path:a}}}})}}});globalThis.MANIFEST=it;function ve(){let e=new Set;function t(a){return e.add(a),()=>e.delete(a)}let r=!1;function n(a,o){if(r)return!(r=!1);const i={to:a,options:o,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const s of e)s.listener({...i,from:s.location,retry:c=>{c&&(r=!0),s.navigate(a,{...o,resolve:!1})}});return!i.defaultPrevented}return{subscribe:t,confirm:n}}let Q;function re(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Q=window.history.state._depth}re();function lt(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function ct(e,t){let r=!1;return()=>{const n=Q;re();const a=n==null?null:Q-n;if(r){r=!1;return}a&&t(a)?(r=!0,window.history.go(-a)):e()}}const ut=/^(?:[a-z0-9]+:)?\/\//i,ft=/^\/+|(\/)\/+$/g,be="http://sr";function F(e,t=!1){const r=e.replace(ft,"$1");return r?t||/^[?#]/.test(r)?r:"/"+r:""}function j(e,t,r){if(ut.test(t))return;const n=F(e),a=r&&F(r);let o="";return!a||t.startsWith("/")?o=n:a.toLowerCase().indexOf(n.toLowerCase())!==0?o=n+a:o=a,(o||"/")+F(t,!o)}function dt(e,t){return F(e).replace(/\/*(\*.*)?$/g,"")+F(t)}function $e(e){const t={};return e.searchParams.forEach((r,n)=>{t[n]=r}),t}function ht(e,t,r){const[n,a]=e.split("/*",2),o=n.split("/").filter(Boolean),i=o.length;return s=>{const c=s.split("/").filter(Boolean),l=c.length-i;if(l<0||l>0&&a===void 0&&!t)return null;const u={path:i?"":"/",params:{}},v=g=>r===void 0?void 0:r[g];for(let g=0;g<i;g++){const h=o[g],$=c[g],f=h[0]===":",d=f?h.slice(1):h;if(f&&Z($,v(d)))u.params[d]=$;else if(f||!Z($,h))return null;u.path+=`/${$}`}if(a){const g=l?c.slice(-l).join("/"):"";if(Z(g,v(a)))u.params[a]=g;else return null}return u}}function Z(e,t){const r=n=>n.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?r(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(r):t instanceof RegExp?t.test(e):!1}function pt(e){const[t,r]=e.pattern.split("/*",2),n=t.split("/").filter(Boolean);return n.reduce((a,o)=>a+(o.startsWith(":")?2:3),n.length-(r===void 0?0:1))}function Ee(e){const t=new Map,r=de();return new Proxy({},{get(n,a){return t.has(a)||fe(r,()=>t.set(a,E(()=>e()[a]))),t.get(a)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function _e(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let r=e.slice(0,t.index),n=e.slice(t.index+t[0].length);const a=[r,r+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(n);)a.push(r+=t[1]),n=n.slice(t[0].length);return _e(n).reduce((o,i)=>[...o,...a.map(s=>s+i)],[])}const mt=100,gt=he(),xe=he();function wt(e,t=""){const{component:r,preload:n,load:a,children:o,info:i}=e,s=!o||Array.isArray(o)&&!o.length,c={key:e,component:r,preload:n||a,info:i};return Pe(e.path).reduce((l,u)=>{for(const v of _e(u)){const g=dt(t,v);let h=s?g:g.split("/*",1)[0];h=h.split("/").map($=>$.startsWith(":")||$.startsWith("*")?$:encodeURIComponent($)).join("/"),l.push({...c,originalPath:u,pattern:h,matcher:ht(h,!s,e.matchFilters)})}return l},[])}function yt(e,t=0){return{routes:e,score:pt(e[e.length-1])*1e4-t,matcher(r){const n=[];for(let a=e.length-1;a>=0;a--){const o=e[a],i=o.matcher(r);if(!i)return null;n.unshift({...i,route:o})}return n}}}function Pe(e){return Array.isArray(e)?e:[e]}function Re(e,t="",r=[],n=[]){const a=Pe(e);for(let o=0,i=a.length;o<i;o++){const s=a[o];if(s&&typeof s=="object"){s.hasOwnProperty("path")||(s.path="");const c=wt(s,t);for(const l of c){r.push(l);const u=Array.isArray(s.children)&&s.children.length===0;if(s.children&&!u)Re(s.children,l.pattern,r,n);else{const v=yt([...r],n.length);n.push(v)}r.pop()}}}return r.length?n:n.sort((o,i)=>i.score-o.score)}function G(e,t){for(let r=0,n=e.length;r<n;r++){const a=e[r].matcher(t);if(a)return a}return[]}function vt(e,t){const r=new URL(be),n=E(c=>{const l=e();try{return new URL(l,r)}catch{return console.error(`Invalid path ${l}`),c}},r,{equals:(c,l)=>c.href===l.href}),a=E(()=>n().pathname),o=E(()=>n().search,!0),i=E(()=>n().hash),s=()=>"";return{get pathname(){return a()},get search(){return o()},get hash(){return i()},get state(){return t()},get key(){return s()},query:Ee(W(o,()=>$e(n())))}}let L;function bt(){return L}function $t(e,t,r,n={}){const{signal:[a,o],utils:i={}}=e,s=i.parsePath||(m=>m),c=i.renderPath||(m=>m),l=i.beforeLeave||ve(),u=j("",n.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!a().value&&o({value:u,replace:!0,scroll:!1});const[v,g]=C(!1);let h;const $=(m,b)=>{b.value===f()&&b.state===w()||(h===void 0&&g(!0),L=m,h=b,De(()=>{h===b&&(d(h.value),p(h.state),qe(),k[1]([]))}).finally(()=>{h===b&&Me(()=>{L=void 0,m==="navigate"&&ze(h),g(!1),h=void 0})}))},[f,d]=C(a().value),[w,p]=C(a().state),T=vt(f,w),x=[],k=C([]),M=E(()=>typeof n.transformUrl=="function"?G(t(),n.transformUrl(T.pathname)):G(t(),T.pathname)),Le=Ee(()=>{const m=M(),b={};for(let _=0;_<m.length;_++)Object.assign(b,m[_].params);return b}),ne={pattern:u,path:()=>u,outlet:()=>null,resolvePath(m){return j(u,m)}};return Ie(W(a,m=>$("native",m),{defer:!0})),{base:ne,location:T,params:Le,isRouting:v,renderPath:c,parsePath:s,navigatorFactory:Te,matches:M,beforeLeave:l,preloadRoute:Ne,singleFlight:n.singleFlight===void 0?!0:n.singleFlight,submissions:k};function Ce(m,b,_){pe(()=>{if(typeof b=="number"){b&&(i.go?i.go(b):console.warn("Router integration does not support relative routing"));return}const{replace:H,resolve:V,scroll:z,state:U}={replace:!1,resolve:!0,scroll:!0,..._},S=V?m.resolvePath(b):j("",b);if(S===void 0)throw new Error(`Path '${b}' is not a routable path`);if(x.length>=mt)throw new Error("Too many redirects");const ae=f();(S!==ae||U!==w())&&(me||l.confirm(S,_)&&(x.push({value:ae,replace:H,scroll:z,state:w()}),$("navigate",{value:S,state:U})))})}function Te(m){return m=m||Oe(xe)||ne,(b,_)=>Ce(m,b,_)}function ze(m){const b=x[0];b&&(o({...m,replace:b.replace,scroll:b.scroll}),x.length=0)}function Ne(m,b={}){const _=G(t(),m.pathname),H=L;L="preload";for(let V in _){const{route:z,params:U}=_[V];z.component&&z.component.preload&&z.component.preload();const{preload:S}=z;b.preloadData&&S&&fe(r(),()=>S({params:U,location:{pathname:m.pathname,search:m.search,hash:m.hash,query:$e(m),state:null,key:""},intent:"preload"}))}L=H}}function Et(e,t,r,n){const{base:a,location:o,params:i}=e,{pattern:s,component:c,preload:l}=n().route,u=E(()=>n().path);c&&c.preload&&c.preload();const v=l?l({params:i,location:o,intent:L||"initial"}):void 0;return{parent:t,pattern:s,path:u,outlet:()=>c?y(c,{params:i,location:o,data:v,get children(){return r()}}):r(),resolvePath(h){return j(a.path(),h,u())}}}const _t=e=>t=>{const{base:r}=t,n=Fe(()=>t.children),a=E(()=>Re(n(),t.base||""));let o;const i=$t(e,a,()=>o,{base:r,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(i),y(gt.Provider,{value:i,get children(){return y(xt,{routerState:i,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[E(()=>(o=de())&&null),y(Pt,{routerState:i,get branches(){return a()}})]}})}})};function xt(e){const t=e.routerState.location,r=e.routerState.params,n=E(()=>e.preload&&pe(()=>{e.preload({params:r,location:t,intent:bt()||"initial"})}));return y(Y,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:a=>y(a,{params:r,location:t,get data(){return n()},get children(){return e.children}})})}function Pt(e){const t=[];let r;const n=E(W(e.routerState.matches,(a,o,i)=>{let s=o&&a.length===o.length;const c=[];for(let l=0,u=a.length;l<u;l++){const v=o&&o[l],g=a[l];i&&v&&g.route.key===v.route.key?c[l]=i[l]:(s=!1,t[l]&&t[l](),Ue(h=>{t[l]=h,c[l]=Et(e.routerState,c[l-1]||e.routerState.base,oe(()=>n()[l+1]),()=>e.routerState.matches()[l])}))}return t.splice(a.length).forEach(l=>l()),i&&s?i:(r=c[0],c)}));return oe(()=>n()&&r)()}const oe=e=>()=>y(Y,{get when(){return e()},keyed:!0,children:t=>y(xe.Provider,{value:t,get children(){return t.outlet()}})});function Rt([e,t],r,n){return[e,n?a=>t(n(a)):t]}function kt(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function St(e){let t=!1;const r=a=>typeof a=="string"?{value:a}:a,n=Rt(C(r(e.get()),{equals:(a,o)=>a.value===o.value&&a.state===o.state}),void 0,a=>(!t&&e.set(a),a));return e.init&&ee(e.init((a=e.get())=>{t=!0,n[1](r(a)),t=!1})),_t({signal:n,create:e.create,utils:e.utils})}function At(e,t,r){return e.addEventListener(t,r),()=>e.removeEventListener(t,r)}function Lt(e,t){const r=kt(`#${e}`);r?r.scrollIntoView():t&&window.scrollTo(0,0)}const Ct=new Map;function Tt(e=!0,t=!1,r="/_server",n){return a=>{const o=a.base.path(),i=a.navigatorFactory(a.base);let s={};function c(f){return f.namespaceURI==="http://www.w3.org/2000/svg"}function l(f){if(f.defaultPrevented||f.button!==0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey)return;const d=f.composedPath().find(M=>M instanceof Node&&M.nodeName.toUpperCase()==="A");if(!d||t&&!d.hasAttribute("link"))return;const w=c(d),p=w?d.href.baseVal:d.href;if((w?d.target.baseVal:d.target)||!p&&!d.hasAttribute("state"))return;const x=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||x&&x.includes("external"))return;const k=w?new URL(p,document.baseURI):new URL(p);if(!(k.origin!==window.location.origin||o&&k.pathname&&!k.pathname.toLowerCase().startsWith(o.toLowerCase())))return[d,k]}function u(f){const d=l(f);if(!d)return;const[w,p]=d,T=a.parsePath(p.pathname+p.search+p.hash),x=w.getAttribute("state");f.preventDefault(),i(T,{resolve:!1,replace:w.hasAttribute("replace"),scroll:!w.hasAttribute("noscroll"),state:x&&JSON.parse(x)})}function v(f){const d=l(f);if(!d)return;const[w,p]=d;typeof n=="function"&&(p.pathname=n(p.pathname)),s[p.pathname]||a.preloadRoute(p,{preloadData:w.getAttribute("preload")!=="false"})}function g(f){const d=l(f);if(!d)return;const[w,p]=d;typeof n=="function"&&(p.pathname=n(p.pathname)),!s[p.pathname]&&(s[p.pathname]=setTimeout(()=>{a.preloadRoute(p,{preloadData:w.getAttribute("preload")!=="false"}),delete s[p.pathname]},200))}function h(f){const d=l(f);if(!d)return;const[,w]=d;typeof n=="function"&&(w.pathname=n(w.pathname)),s[w.pathname]&&(clearTimeout(s[w.pathname]),delete s[w.pathname])}function $(f){if(f.defaultPrevented)return;let d=f.submitter&&f.submitter.hasAttribute("formaction")?f.submitter.getAttribute("formaction"):f.target.getAttribute("action");if(!d)return;if(!d.startsWith("https://action/")){const p=new URL(d,be);if(d=a.parsePath(p.pathname+p.search),!d.startsWith(r))return}if(f.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const w=Ct.get(d);if(w){f.preventDefault();const p=new FormData(f.target,f.submitter);w.call({r:a,f:f.target},f.target.enctype==="multipart/form-data"?p:new URLSearchParams(p))}}ge(["click","submit"]),document.addEventListener("click",u),e&&(document.addEventListener("mouseover",g),document.addEventListener("mouseout",h),document.addEventListener("focusin",v),document.addEventListener("touchstart",v)),document.addEventListener("submit",$),ee(()=>{document.removeEventListener("click",u),e&&(document.removeEventListener("mouseover",g),document.removeEventListener("mouseout",h),document.removeEventListener("focusin",v),document.removeEventListener("touchstart",v)),document.removeEventListener("submit",$)})}}function zt(e){const t=()=>{const n=window.location.pathname.replace(/^\/+/,"/")+window.location.search;return{value:e.transformUrl?e.transformUrl(n)+window.location.hash:n+window.location.hash,state:window.history.state}},r=ve();return St({get:t,set({value:n,replace:a,scroll:o,state:i}){a?window.history.replaceState(lt(i),"",n):window.history.pushState(i,"",n),Lt(decodeURIComponent(window.location.hash.slice(1)),o),re()},init:n=>At(window,"popstate",ct(n,a=>{if(a&&a<0)return!r.confirm(a);{const o=t();return!r.confirm(o.value,{state:o.state})}})),create:Tt(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:n=>window.history.go(n),beforeLeave:r}})(e)}function Nt(e){e.forEach(t=>{if(!t.attrs.href)return;let r=document.head.querySelector(`link[href="${t.attrs.href}"]`);r||(r=document.createElement("link"),r.setAttribute("rel","preload"),r.setAttribute("as","style"),r.setAttribute("href",t.attrs.href),document.head.appendChild(r))})}var It=R("<style>"),Ot=R("<link>"),Dt=R("<script> "),Mt=R("<noscript>");const qt={style:e=>(()=>{var t=P(It);return q(t,N(()=>e.attrs),!1,!0),D(t,()=>e.children),I(),t})(),link:e=>(()=>{var t=P(Ot);return q(t,N(()=>e.attrs),!1,!1),I(),t})(),script:e=>e.attrs.src?(()=>{var t=P(Dt);return q(t,N(()=>e.attrs,{get id(){return e.key}}),!1,!0),I(),t})():null,noscript:e=>(()=>{var t=P(Mt);return q(t,N(()=>e.attrs),!1,!0),I(),t})()};function Ft(e,t){let{tag:r,attrs:{key:n,...a}={key:void 0},children:o}=e;return qt[r]({attrs:{...a,nonce:t},key:n,children:o})}function Ut(e,t,r,n="default"){return Be(async()=>{{const o=(await e.import())[n],s=(await t.inputs?.[e.src].assets()).filter(l=>l.tag==="style"||l.attrs.rel==="stylesheet");return typeof window<"u"&&Nt(s),{default:l=>[...s.map(u=>Ft(u)),y(o,l)]}}})}const O={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Bt(e={}){const t={options:e,rootNode:ke(),staticRoutesMap:{}},r=n=>e.strictTrailingSlash?n:n.replace(/\/$/,"")||"/";if(e.routes)for(const n in e.routes)se(t,r(n),e.routes[n]);return{ctx:t,lookup:n=>jt(t,r(n)),insert:(n,a)=>se(t,r(n),a),remove:n=>Wt(t,r(n))}}function jt(e,t){const r=e.staticRoutesMap[t];if(r)return r.data;const n=t.split("/"),a={};let o=!1,i=null,s=e.rootNode,c=null;for(let l=0;l<n.length;l++){const u=n[l];s.wildcardChildNode!==null&&(i=s.wildcardChildNode,c=n.slice(l).join("/"));const v=s.children.get(u);if(v===void 0){if(s&&s.placeholderChildren.length>1){const g=n.length-l;s=s.placeholderChildren.find(h=>h.maxDepth===g)||null}else s=s.placeholderChildren[0]||null;if(!s)break;s.paramName&&(a[s.paramName]=u),o=!0}else s=v}return(s===null||s.data===null)&&i!==null&&(s=i,a[s.paramName||"_"]=c,o=!0),s?o?{...s.data,params:o?a:void 0}:s.data:null}function se(e,t,r){let n=!0;const a=t.split("/");let o=e.rootNode,i=0;const s=[o];for(const c of a){let l;if(l=o.children.get(c))o=l;else{const u=Ht(c);l=ke({type:u,parent:o}),o.children.set(c,l),u===O.PLACEHOLDER?(l.paramName=c==="*"?`_${i++}`:c.slice(1),o.placeholderChildren.push(l),n=!1):u===O.WILDCARD&&(o.wildcardChildNode=l,l.paramName=c.slice(3)||"_",n=!1),s.push(l),o=l}}for(const[c,l]of s.entries())l.maxDepth=Math.max(s.length-c,l.maxDepth||0);return o.data=r,n===!0&&(e.staticRoutesMap[t]=o),o}function Wt(e,t){let r=!1;const n=t.split("/");let a=e.rootNode;for(const o of n)if(a=a.children.get(o),!a)return r;if(a.data){const o=n.at(-1)||"";a.data=null,Object.keys(a.children).length===0&&a.parent&&(a.parent.children.delete(o),a.parent.wildcardChildNode=null,a.parent.placeholderChildren=[]),r=!0}return r}function ke(e={}){return{type:e.type||O.NORMAL,maxDepth:0,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function Ht(e){return e.startsWith("**")?O.WILDCARD:e[0]===":"||e==="*"?O.PLACEHOLDER:O.NORMAL}const Vt="modulepreload",Jt=function(e){return"/flagify/_build/"+e},ie={},A=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),i=o?.nonce||o?.getAttribute("nonce");a=Promise.all(r.map(s=>{if(s=Jt(s),s in ie)return;ie[s]=!0;const c=s.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Vt,c||(u.as="script",u.crossOrigin=""),u.href=s,i&&u.setAttribute("nonce",i),document.head.appendChild(u),c)return new Promise((v,g)=>{u.addEventListener("load",v),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${s}`)))})}))}return a.then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})},Se=[{page:!0,$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>A(()=>import("./_...404_-BIiUBPH1.js"),__vite__mapDeps([0,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/[...404].tsx?pick=default&pick=$css"].output.path)},path:"/*404",filePath:"/home/runner/work/flagify/flagify/src/routes/[...404].tsx"},{page:!0,$component:{src:"src/routes/flags.tsx?pick=default&pick=$css",build:()=>A(()=>import("./flags-CULBxLsF.js"),__vite__mapDeps([3,1,4])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/flags.tsx?pick=default&pick=$css"].output.path)},path:"/flags",filePath:"/home/runner/work/flagify/flagify/src/routes/flags.tsx"},{page:!0,$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>A(()=>import("./index-JwnWKm-9.js"),__vite__mapDeps([5,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/index.tsx?pick=default&pick=$css"].output.path)},path:"/",filePath:"/home/runner/work/flagify/flagify/src/routes/index.tsx"},{page:!0,$component:{src:"src/routes/profile.tsx?pick=default&pick=$css",build:()=>A(()=>import("./profile-BDRrRUm1.js"),__vite__mapDeps([6,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/profile.tsx?pick=default&pick=$css"].output.path)},path:"/profile",filePath:"/home/runner/work/flagify/flagify/src/routes/profile.tsx"},{page:!0,$component:{src:"src/routes/quiz/four-countries.tsx?pick=default&pick=$css",build:()=>A(()=>import("./four-countries-W1LB1xvB.js"),__vite__mapDeps([7,8,1,4])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/quiz/four-countries.tsx?pick=default&pick=$css"].output.path)},path:"/quiz/four-countries",filePath:"/home/runner/work/flagify/flagify/src/routes/quiz/four-countries.tsx"},{page:!0,$component:{src:"src/routes/quiz/four-flags.tsx?pick=default&pick=$css",build:()=>A(()=>import("./four-flags-W1LB1xvB.js"),__vite__mapDeps([9,8,1,4])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/quiz/four-flags.tsx?pick=default&pick=$css"].output.path)},path:"/quiz/four-flags",filePath:"/home/runner/work/flagify/flagify/src/routes/quiz/four-flags.tsx"},{page:!0,$component:{src:"src/routes/quiz/index.tsx?pick=default&pick=$css",build:()=>A(()=>import("./index-D5YAQjcd.js"),__vite__mapDeps([10,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/quiz/index.tsx?pick=default&pick=$css"].output.path)},path:"/quiz/",filePath:"/home/runner/work/flagify/flagify/src/routes/quiz/index.tsx"}],Kt=Zt(Se.filter(e=>e.page));function Zt(e){function t(r,n,a,o){const i=Object.values(r).find(s=>a.startsWith(s.id+"/"));return i?(t(i.children||(i.children=[]),n,a.slice(i.id.length)),r):(r.push({...n,id:a,path:a.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),r)}return e.sort((r,n)=>r.path.length-n.path.length).reduce((r,n)=>t(r,n,n.path,n.path),[])}function Gt(e){return e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}Bt({routes:Se.reduce((e,t)=>{if(!Gt(t))return e;let r=t.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(n,a)=>`**:${a}`);if(/:[^/]*\?/g.test(r))throw new Error(`Optional parameters are not supported in API routes: ${r}`);if(e[r])throw new Error(`Duplicate API routes for "${r}" found at "${e[r].route.path}" and "${t.path}"`);return e[r]={route:t},e},{})});function Xt(){function e(r){return{...r,...r.$$route?r.$$route.require().route:void 0,info:{...r.$$route?r.$$route.require().route.info:{},filesystem:!0},component:r.$component&&Ut(r.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:r.children?r.children.map(e):void 0}}return Kt.map(e)}let le;const Qt=()=>le||(le=Xt());var Yt=R("<svg stroke-width=0>");function Ae(e,t){const r=N(e.a,t),[n,a]=je(r,["src"]),[o,i]=C(""),s=E(()=>t.title?`${e.c}<title>${t.title}</title>`:e.c);return we(()=>i(s())),ee(()=>{i("")}),(()=>{var c=P(Yt);return q(c,N({get stroke(){return e.a?.stroke},get color(){return t.color||"currentColor"},get fill(){return t.color||"currentColor"},get style(){return{...t.style,overflow:"visible"}}},a,{get height(){return t.size||"1em"},get width(){return t.size||"1em"},xmlns:"http://www.w3.org/2000/svg",get innerHTML(){return o()}}),!0,!0),D(c,()=>me),I(),c})()}function er(e){return Ae({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>'},e)}function tr(e){return Ae({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z"/>'},e)}var rr=R('<button class="border-4 rounded-full p-2">');const[B,ce]=C(!1);function nr(){return we(W(B,()=>{B()?(localStorage.setItem("theme",JSON.stringify(!0)),document.body.classList.add("dark")):(localStorage.setItem("theme",JSON.stringify(!1)),document.body.classList.remove("dark"))},{defer:!0})),We(()=>{const e=localStorage.getItem("theme");e?ce(JSON.parse(e)):localStorage.setItem("theme",JSON.stringify(!1))}),(()=>{var e=P(rr);return e.$$click=()=>{ce(!B())},D(e,y(Y,{get when(){return B()},get fallback(){return y(er,{size:24})},get children(){return y(tr,{size:24})}})),I(),e})()}ge(["click"]);var ar=R('<nav class="flex flex-row shadow-2xl md:gap-4 p-2 bg-neutral-300 dark:bg-neutral-800"><div class="md:w-2/3 w-full md:px-0 px-4 flex flex-row m-auto"><div class="basis-1/2 justify-start flex flex-row gap-2 md:gap-5"><a href=/ class="border rounded p-2"target=_self>Home</a><a href=/quiz class="border rounded p-2"target=_self>Start Quiz</a><a href=/flags class="border rounded p-2"target=_self>Flags</a></div><div class="basis-1/2 flex flex-row justify-end gap-2 md:gap-5"><a href=/profile class="border rounded p-2"target=_self>Sandbox Profile</a><div class=inline-flex>'),or=R('<div class="md:w-2/3 m-auto py-14">');function sr(){return y(zt,{get base(){return"/flagify/"},root:e=>y(Ke,{get children(){return[y(Ze,{children:"Flags of the World"}),(()=>{var t=P(ar),r=t.firstChild,n=r.firstChild,a=n.nextSibling,o=a.firstChild,i=o.nextSibling;return D(i,y(nr,{})),t})(),(()=>{var t=P(or);return D(t,y(He,{get children(){return e.children}})),t})()]}}),get children(){return y(Qt,{})}})}var ir=R("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const lr=e=>{const t="Error | Uncaught Client Exception";return y(Ve,{fallback:r=>(console.error(r),[(()=>{var n=P(ir);return D(n,t),n})(),y(Ge,{code:500})]),get children(){return e.children}})};function cr(e,t){return Je(e,t)}function ue(e){return e.children}function ur(){return y(ue,{get children(){return y(ue,{get children(){return y(lr,{get children(){return y(sr,{})}})}})}})}const fr=JSON.parse(localStorage.getItem("theme"));fr?document.body.classList.add("dark"):document.body.classList.remove("dark");cr(()=>y(ur,{}),document.getElementById("app"));const mr=void 0;export{mr as default};
