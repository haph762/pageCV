(()=>{"use strict";var e,v={},_={};function r(e){var n=_[e];if(void 0!==n)return n.exports;var t=_[e]={id:e,loaded:!1,exports:{}};return v[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=v,e=[],r.O=(n,t,f,c)=>{if(!t){var a=1/0;for(i=0;i<e.length;i++){for(var[t,f,c]=e[i],l=!0,o=0;o<t.length;o++)(!1&c||a>=c)&&Object.keys(r.O).every(b=>r.O[b](t[o]))?t.splice(o--,1):(l=!1,c<a&&(a=c));if(l){e.splice(i--,1);var u=f();void 0!==u&&(n=u)}}return n}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[t,f,c]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>e+"."+{82:"c93c008719ea967f",270:"6b388d0a6c4d158c",314:"c9bf46fa5208b70a",384:"1be4a3b203bc3eaf",397:"a0e7789622a45070",465:"382dea00dfd43407",478:"2cf6baf74135f0a8",481:"cfce5befd8e6ea6d",542:"9a86f41c87a6d184",605:"b3d40f2d2d0262cd",695:"01bb6a6b7c075fa6",720:"0c78db9a872bfe7e",833:"8db446a1436744ec",930:"3c747beace6b87ef"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="coreui-free-angular-admin-template:";r.l=(t,f,c,i)=>{if(e[t])e[t].push(f);else{var a,l;if(void 0!==c)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var d=o[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+c){a=d;break}}a||(l=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+c),a.src=r.tu(t)),e[t]=[f];var s=(g,b)=>{a.onerror=a.onload=null,clearTimeout(p);var m=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),m&&m.forEach(h=>h(b)),g)return g(b)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),l&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(f,c)=>{var i=r.o(e,f)?e[f]:void 0;if(0!==i)if(i)c.push(i[2]);else if(666!=f){var a=new Promise((d,s)=>i=e[f]=[d,s]);c.push(i[2]=a);var l=r.p+r.u(f),o=new Error;r.l(l,d=>{if(r.o(e,f)&&(0!==(i=e[f])&&(e[f]=void 0),i)){var s=d&&("load"===d.type?"missing":d.type),p=d&&d.target&&d.target.src;o.message="Loading chunk "+f+" failed.\n("+s+": "+p+")",o.name="ChunkLoadError",o.type=s,o.request=p,i[1](o)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var n=(f,c)=>{var o,u,[i,a,l]=c,d=0;if(i.some(p=>0!==e[p])){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(l)var s=l(r)}for(f&&f(c);d<i.length;d++)r.o(e,u=i[d])&&e[u]&&e[u][0](),e[u]=0;return r.O(s)},t=self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();