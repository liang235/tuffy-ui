import{h as ce,j as Y,o as ue,c as fe,k as pe,l as ge,e as ve,f as he,s as M,a3 as ze,a4 as ye,a5 as Ee,a6 as be,a7 as we,a8 as Ce,a9 as Le,aa as He,ab as Ae,ac as Oe,X as _e,d as Se,u as Te,y as xe,ad as Ie,ae as Ne,af as Pe,ag as ke}from"./chunks/framework.31073e25.js";import{t as Re}from"./chunks/theme.89ed10f8.js";/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var E=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(o[d]=r[d])}return o},T=function(t){return t.tagName==="IMG"},je=function(t){return NodeList.prototype.isPrototypeOf(t)},x=function(t){return t&&t.nodeType===1},U=function(t){var r=t.currentSrc||t.src;return r.substr(-4).toLowerCase()===".svg"},V=function(t){try{return Array.isArray(t)?t.filter(T):je(t)?[].slice.call(t).filter(T):x(t)?[t].filter(T):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(T):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Be=function(t){var r=document.createElement("div");return r.classList.add("medium-zoom-overlay"),r.style.background=t,r},Me=function(t){var r=t.getBoundingClientRect(),d=r.top,u=r.left,I=r.width,N=r.height,h=t.cloneNode(),P=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,A=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return h.removeAttribute("id"),h.style.position="absolute",h.style.top=d+P+"px",h.style.left=u+A+"px",h.style.width=I+"px",h.style.height=N+"px",h.style.transform="",h},C=function(t,r){var d=E({bubbles:!1,cancelable:!1,detail:void 0},r);if(typeof window.CustomEvent=="function")return new CustomEvent(t,d);var u=document.createEvent("CustomEvent");return u.initCustomEvent(t,d.bubbles,d.cancelable,d.detail),u},Ze=function o(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=window.Promise||function(n){function a(){}n(a,a)},u=function(n){var a=n.target;if(a===_){z();return}g.indexOf(a)!==-1&&D({target:a})},I=function(){if(!(b||!e.original)){var n=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(F-n)>m.scrollOffset&&setTimeout(z,150)}},N=function(n){var a=n.key||n.keyCode;(a==="Escape"||a==="Esc"||a===27)&&z()},h=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n;if(n.background&&(_.style.background=n.background),n.container&&n.container instanceof Object&&(a.container=E({},m.container,n.container)),n.template){var s=x(n.template)?n.template:document.querySelector(n.template);a.template=s}return m=E({},m,a),g.forEach(function(l){l.dispatchEvent(C("medium-zoom:update",{detail:{zoom:c}}))}),c},P=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return o(E({},m,n))},A=function(){for(var n=arguments.length,a=Array(n),s=0;s<n;s++)a[s]=arguments[s];var l=a.reduce(function(i,p){return[].concat(i,V(p))},[]);return l.filter(function(i){return g.indexOf(i)===-1}).forEach(function(i){g.push(i),i.classList.add("medium-zoom-image")}),O.forEach(function(i){var p=i.type,v=i.listener,w=i.options;l.forEach(function(y){y.addEventListener(p,v,w)})}),c},X=function(){for(var n=arguments.length,a=Array(n),s=0;s<n;s++)a[s]=arguments[s];e.zoomed&&z();var l=a.length>0?a.reduce(function(i,p){return[].concat(i,V(p))},[]):g;return l.forEach(function(i){i.classList.remove("medium-zoom-image"),i.dispatchEvent(C("medium-zoom:detach",{detail:{zoom:c}}))}),g=g.filter(function(i){return l.indexOf(i)===-1}),c},$=function(n,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return g.forEach(function(l){l.addEventListener("medium-zoom:"+n,a,s)}),O.push({type:"medium-zoom:"+n,listener:a,options:s}),c},G=function(n,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return g.forEach(function(l){l.removeEventListener("medium-zoom:"+n,a,s)}),O=O.filter(function(l){return!(l.type==="medium-zoom:"+n&&l.listener.toString()===a.toString())}),c},Z=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.target,s=function(){var i={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},p=void 0,v=void 0;if(m.container)if(m.container instanceof Object)i=E({},i,m.container),p=i.width-i.left-i.right-m.margin*2,v=i.height-i.top-i.bottom-m.margin*2;else{var w=x(m.container)?m.container:document.querySelector(m.container),y=w.getBoundingClientRect(),k=y.width,ee=y.height,te=y.left,oe=y.top;i=E({},i,{width:k,height:ee,left:te,top:oe})}p=p||i.width-m.margin*2,v=v||i.height-m.margin*2;var H=e.zoomedHd||e.original,ne=U(H)?p:H.naturalWidth||p,ae=U(H)?v:H.naturalHeight||v,S=H.getBoundingClientRect(),re=S.top,ie=S.left,R=S.width,j=S.height,de=Math.min(Math.max(R,ne),p)/R,me=Math.min(Math.max(j,ae),v)/j,B=Math.min(de,me),se=(-ie+(p-R)/2+m.margin+i.left)/B,le=(-re+(v-j)/2+m.margin+i.top)/B,q="scale("+B+") translate3d("+se+"px, "+le+"px, 0)";e.zoomed.style.transform=q,e.zoomedHd&&(e.zoomedHd.style.transform=q)};return new d(function(l){if(a&&g.indexOf(a)===-1){l(c);return}var i=function k(){b=!1,e.zoomed.removeEventListener("transitionend",k),e.original.dispatchEvent(C("medium-zoom:opened",{detail:{zoom:c}})),l(c)};if(e.zoomed){l(c);return}if(a)e.original=a;else if(g.length>0){var p=g;e.original=p[0]}else{l(c);return}if(e.original.dispatchEvent(C("medium-zoom:open",{detail:{zoom:c}})),F=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,b=!0,e.zoomed=Me(e.original),document.body.appendChild(_),m.template){var v=x(m.template)?m.template:document.querySelector(m.template);e.template=document.createElement("div"),e.template.appendChild(v.content.cloneNode(!0)),document.body.appendChild(e.template)}if(e.original.parentElement&&e.original.parentElement.tagName==="PICTURE"&&e.original.currentSrc&&(e.zoomed.src=e.original.currentSrc),document.body.appendChild(e.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),e.original.classList.add("medium-zoom-image--hidden"),e.zoomed.classList.add("medium-zoom-image--opened"),e.zoomed.addEventListener("click",z),e.zoomed.addEventListener("transitionend",i),e.original.getAttribute("data-zoom-src")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("srcset"),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading"),e.zoomedHd.src=e.zoomed.getAttribute("data-zoom-src"),e.zoomedHd.onerror=function(){clearInterval(w),console.warn("Unable to reach the zoom image target "+e.zoomedHd.src),e.zoomedHd=null,s()};var w=setInterval(function(){e.zoomedHd.complete&&(clearInterval(w),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),s())},10)}else if(e.original.hasAttribute("srcset")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading");var y=e.zoomedHd.addEventListener("load",function(){e.zoomedHd.removeEventListener("load",y),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),s()})}else s()})},z=function(){return new d(function(n){if(b||!e.original){n(c);return}var a=function s(){e.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(e.zoomed),e.zoomedHd&&document.body.removeChild(e.zoomedHd),document.body.removeChild(_),e.zoomed.classList.remove("medium-zoom-image--opened"),e.template&&document.body.removeChild(e.template),b=!1,e.zoomed.removeEventListener("transitionend",s),e.original.dispatchEvent(C("medium-zoom:closed",{detail:{zoom:c}})),e.original=null,e.zoomed=null,e.zoomedHd=null,e.template=null,n(c)};b=!0,document.body.classList.remove("medium-zoom--opened"),e.zoomed.style.transform="",e.zoomedHd&&(e.zoomedHd.style.transform=""),e.template&&(e.template.style.transition="opacity 150ms",e.template.style.opacity=0),e.original.dispatchEvent(C("medium-zoom:close",{detail:{zoom:c}})),e.zoomed.addEventListener("transitionend",a)})},D=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.target;return e.original?z():Z({target:a})},K=function(){return m},J=function(){return g},Q=function(){return e.original},g=[],O=[],b=!1,F=0,m=r,e={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?m=t:(t||typeof t=="string")&&A(t),m=E({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},m);var _=Be(m.background);document.addEventListener("click",u),document.addEventListener("keyup",N),document.addEventListener("scroll",I),window.addEventListener("resize",z);var c={open:Z,close:z,toggle:D,update:h,clone:P,attach:A,detach:X,on:$,off:G,getOptions:K,getImages:J,getZoomedImage:Q};return c};function De(o,t){t===void 0&&(t={});var r=t.insertAt;if(!(!o||typeof document>"u")){var d=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",r==="top"&&d.firstChild?d.insertBefore(u,d.firstChild):d.appendChild(u),u.styleSheet?u.styleSheet.cssText=o:u.appendChild(document.createTextNode(o))}}var Fe=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";De(Fe);const qe=Ze;const Ue={key:0},Ve=["src"],Ye={__name:"ZoomImg",props:{src:String},setup(o){const t=ce(null);return Y(()=>{t.value&&qe(t.value,{background:"var(--vp-c-bg)"})}),(r,d)=>o.src?(ue(),fe("p",Ue,[pe("img",{ref_key:"imgRef",ref:t,src:ge(he)(o.src),loading:"lazy"},null,8,Ve)])):ve("",!0)}};const We={...Re,enhanceApp({app:o}){o.component("ZoomImg",Ye)}};function W(o){if(o.extends){const t=W(o.extends);return{...t,...o,async enhanceApp(r){t.enhanceApp&&await t.enhanceApp(r),o.enhanceApp&&await o.enhanceApp(r)}}}return o}const L=W(We),Xe=Se({name:"VitePressApp",setup(){const{site:o}=Te();return Y(()=>{xe(()=>{document.documentElement.lang=o.value.lang,document.documentElement.dir=o.value.dir})}),Ie(),Ne(),Pe(),L.setup&&L.setup(),()=>ke(L.Layout)}});async function $e(){const o=Ke(),t=Ge();t.provide(ye,o);const r=Ee(o.route);return t.provide(be,r),t.component("Content",we),t.component("ClientOnly",Ce),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return r.frontmatter.value}},$params:{get(){return r.page.value.params}}}),L.enhanceApp&&await L.enhanceApp({app:t,router:o,siteData:Le}),{app:t,router:o,data:r}}function Ge(){return He(Xe)}function Ke(){let o=M,t;return Ae(r=>{let d=Oe(r),u=null;return d&&(o&&(t=d),(o||t===d)&&(d=d.replace(/\.js$/,".lean.js")),u=_e(()=>import(d),[])),M&&(o=!1),u},L.NotFound)}M&&$e().then(({app:o,router:t,data:r})=>{t.go().then(()=>{ze(t.route,r.site),o.mount("#app")})});export{$e as createApp};