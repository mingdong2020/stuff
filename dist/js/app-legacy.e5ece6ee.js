(function(e){function t(t){for(var o,a,i=t[0],s=t[1],l=t[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},r={app:0},c=[];function i(e){return s.p+"js/"+({about:"about",account:"account",error:"error",garden:"garden",mitax:"mitax",steamer:"steamer"}[e]||e)+"-legacy."+{about:"cc841f3d",account:"9c38feda",error:"8ede4601",garden:"59ef123c",mitax:"8045e0f0",steamer:"a7e84764"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1,account:1,error:1,garden:1,mitax:1,steamer:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({about:"about",account:"account",error:"error",garden:"garden",mitax:"mitax",steamer:"steamer"}[e]||e)+"."+{about:"cd227544",account:"98bc8c40",error:"73347020",garden:"95ad0d48",mitax:"5b98c8f0",steamer:"808cbae1"}[e]+".css",r=s.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===o||u===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}r[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03cf":function(e,t,n){e.exports=n.p+"img/logo-black.cc74daa6.png"},"060e":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiBAMAAADIaRbxAAAAD1BMVEUAAAD///////////////+PQt5oAAAABHRSTlMA0BCgog7iEwAAAHBJREFUKM/tytENgCAMRVFEB1BkAEgcQDcQ8/afScijLe4gHy25Pa6/BXf//eVbrjQUvzs3Iwwl43QTStLiI9Y2gpbczpwsvHKx8MjdihCiVpQQ1UKiqBYSRQceEkURhUQRABJDIDGkxJAQQ0IMbUJe7CMhE2FeUHMAAAAASUVORK5CYII="},"0ac8":function(e,t,n){e.exports=n.p+"img/cancel.669ccd08.png"},"1d67":function(e,t,n){e.exports=n.p+"img/home5.679248d5.png"},"2c1f":function(e,t,n){"use strict";n("4375")},3068:function(e,t,n){},"314e":function(e,t,n){e.exports=n.p+"img/logo-white.cc74daa6.png"},4375:function(e,t,n){},"465a":function(e,t,n){},4688:function(e,t,n){e.exports=n.p+"img/home3.e9598fdb.png"},5569:function(e,t){(function(e,t){var n=e.documentElement,o="orientationchange"in window?"orientationchange":"resize",a=function(){var e=n.clientWidth;e&&(n.style.fontSize=e>=750&&e<=1e3?"100px":e>=1e3?1e3/750*100+"px":e/750*100+"px")};e.addEventListener&&(t.addEventListener(o,a,!1),a())})(document,window),document.oncontextmenu=function(){return!1},document.onselectstart=function(){return!1},document.oncopy=function(){return!1}},"56d7":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("830f"),a=n("5c40"),r={id:"wind"};function c(e,t){var n=Object(a["z"])("router-view"),o=Object(a["z"])("Header");return Object(a["t"])(),Object(a["e"])("div",r,[Object(a["k"])(o,{"onBtn-slider":e.onSlider},{default:Object(a["G"])((function(){return[Object(a["k"])(n,{slider:e.slider},null,8,["slider"])]})),_:1},8,["onBtn-slider"])])}var i=n("314e"),s=n.n(i),l=n("03cf"),u=n.n(l),d=Object(a["I"])("data-v-cd71e626");Object(a["w"])("data-v-cd71e626");var p={class:"content"},f={class:"header-logo"},g={src:s.a,alt:"明动咨询"},h={src:u.a,alt:"明动咨询"},m=Object(a["k"])("span",null,null,-1),b=Object(a["k"])("span",null,null,-1),v=Object(a["k"])("span",null,null,-1);Object(a["u"])();var A=d((function(e,t){var n=Object(a["z"])("Options"),r=Object(a["z"])("Poster");return Object(a["t"])(),Object(a["e"])("div",p,[e.$store.getters.getStateHead?(Object(a["t"])(),Object(a["e"])("div",{key:0,class:"header",ref:"header",style:e.$store.getters.getStateType?"background-color: transparent":"background-color: #ffffff;border-bottom: 1px solid #EEEEEE;"},[Object(a["k"])("div",f,[Object(a["H"])(Object(a["k"])("img",g,null,512),[[o["c"],e.$store.getters.getStateType]]),Object(a["H"])(Object(a["k"])("img",h,null,512),[[o["c"],!e.$store.getters.getStateType]])]),Object(a["k"])("div",{class:e.$store.getters.getStateType?"header-menu menu-white":"header-menu",onClick:t[1]||(t[1]=function(){return e.onToggle.apply(e,arguments)})},[m,b,v],2)],4)):Object(a["f"])("",!0),Object(a["k"])("div",{class:"panel",id:"scroll",style:[e.$store.getters.getStateType?"height:"+e.clientHeight+"px;margin: 0;":"height:"+e.panelHeight+"px;",e.$store.getters.getStateHead?"":"margin: 0;"]},[Object(a["y"])(e.$slots,"default")],4),Object(a["k"])(n,{toggle:e.$store.getters.getStateToggle,"onBtn-cancel":e.onToggle},null,8,["toggle","onBtn-cancel"]),Object(a["k"])(r,{toggle:e.$store.getters.getStatePoster,"onBtn-cancel":e.onCancel,"onBtn-poster":e.onPoster},null,8,["toggle","onBtn-cancel","onBtn-poster"])])}));n("caad"),n("ac1f"),n("2532"),n("5319"),n("d3b7"),n("4d63"),n("25f0"),n("466d"),n("841c");function O(e,t,n){var o=new Date;o.setTime(o.getTime()+60*n*60*1e3),document.cookie=e+"="+escape(t)+";expires="+o.toGMTString()}function j(e){var t=new RegExp("(^| )"+e+"=([^;]*)(;|$)");if(document.cookie.match(t)){var n=document.cookie.match(t);return unescape(n[2])}return null}function k(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):null}function w(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)}function y(){var e=navigator.userAgent,t=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),n=k("os");return t||"ios"==n}var S=n("0ac8"),E=n.n(S),x=Object(a["I"])("data-v-547f045c");Object(a["w"])("data-v-547f045c");var T={class:"poster",ref:"poster"},C=Object(a["k"])("img",{src:E.a,alt:"明动咨询"},null,-1);Object(a["u"])();var R=x((function(e,t){return Object(a["H"])((Object(a["t"])(),Object(a["e"])("div",T,[Object(a["k"])("div",{class:"poster-panel",ref:"panel",onClick:t[2]||(t[2]=function(){return e.onPoster.apply(e,arguments)})},[Object(a["k"])("div",{class:"poster-cancel",onClick:t[1]||(t[1]=function(){return e.onCancel.apply(e,arguments)})},[C])],512)],512)),[[o["c"],e.cover]])})),H={name:"Poster",props:{toggle:Boolean},data:function(){return{cover:!1}},watch:{toggle:{handler:function(){var e=this;this.toggle?(this.cover=!0,setTimeout((function(){e.$refs.poster.style.opacity="1",e.$refs.panel.style.top="50%"}),30)):(this.$refs.poster.style.opacity="0",this.$refs.panel.style.top="42%",setTimeout((function(){e.cover=!1}),330))}}},mounted:function(){},methods:{onCancel:function(e){this.$emit("btn-cancel"),e.stopPropagation()},onPoster:function(){this.$emit("btn-poster")}}};n("2c1f");H.render=R,H.__scopeId="data-v-547f045c";var B=H,P=n("9ff4"),I=n("8f65"),$=n.n(I),M=n("787d"),U=n.n(M),Q=Object(a["I"])("data-v-4f11cab7");Object(a["w"])("data-v-4f11cab7");var N={class:"options"},_={ref:"panel",class:"options-panel"},D=Object(a["k"])("img",{src:$.a,alt:"明动咨询"},null,-1),F={class:"options-box"},L=Object(a["k"])("img",{src:U.a,alt:"明动咨询"},null,-1);Object(a["u"])();var z=Q((function(e,t){return Object(a["H"])((Object(a["t"])(),Object(a["e"])("div",N,[Object(a["k"])("div",{class:"options-blank",onClick:t[1]||(t[1]=function(){return e.onCancel.apply(e,arguments)})}),Object(a["k"])("div",_,[Object(a["k"])("div",{class:"options-head",onClick:t[2]||(t[2]=function(){return e.onCancel.apply(e,arguments)})},[D]),Object(a["k"])("div",F,[(Object(a["t"])(!0),Object(a["e"])(a["b"],null,Object(a["x"])(e.list,(function(t,n){return Object(a["t"])(),Object(a["e"])("div",{onClick:function(n){return e.onRouter(t.path)},class:e.$store.getters.getStateIndex==n?"options-list options-list-active":"options-list",key:n},[Object(a["k"])("span",null,Object(P["F"])(t.name),1),L],10,["onClick"])})),256))])],512)],512)),[[o["c"],e.cover]])})),G={name:"Options",props:{toggle:Boolean},data:function(){return{cover:!1,list:[{name:"首页",path:"/"},{name:"财务代理",path:"/account"},{name:"园区直招",path:"/garden"},{name:"爱税筹",path:"/mitax"},{name:"舟山自贸区",path:"/steamer"},{name:"关于我们",path:"/about"}]}},watch:{toggle:{handler:function(){var e=this;this.toggle?(this.cover=!0,setTimeout((function(){e.$refs.panel.style.right=0}),30)):(this.$refs.panel.style.right="-5.2rem",setTimeout((function(){e.cover=!1}),330))}}},methods:{onCancel:function(){this.$emit("btn-cancel")},onRouter:function(e){this.$router.replace({path:e})}}};n("fdb9");G.render=z,G.__scopeId="data-v-4f11cab7";var q=G,V={name:"Header",components:{Poster:B,Options:q},data:function(){return{clientHeight:0,panelHeight:0,watchPoster:!1,watchCancel:!1}},watch:{watchPoster:{handler:function(){this.watchPoster&&this.watchCancel&&this.onSlide()}},watchCancel:{handler:function(){this.watchPoster&&this.watchCancel&&this.onSlide()}}},mounted:function(){var e=this;this.clientHeight=window.innerHeight,this.panelHeight=this.clientHeight-this.$refs.header.offsetHeight;var t=j("advert");"1.0.0"==t?this.onSlide():location.href.includes("error")||location.href.includes("mitax")||setTimeout((function(){e.$store.commit("setStatePoster",!0),O("advert","1.0.0",1),e.watchPoster=!0}),2400)},methods:{onToggle:function(){var e=!this.$store.getters.getStateToggle;this.$store.commit("setStateToggle",e)},onCancel:function(){this.watchCancel=!0,this.$store.commit("setStatePoster",!1)},onPoster:function(){this.$store.commit("setStatePoster",!1),this.$router.replace({name:"Mitax"})},onSlide:function(){var e=this;setTimeout((function(){0==e.$store.getters.getStateIndex&&e.$emit("btn-slider")}),3600)}}};n("cfcd");V.render=A,V.__scopeId="data-v-cd71e626";var J=V,K={name:"App",data:function(){return{slider:!1}},components:{Header:J},methods:{onSlider:function(){this.slider=!0}}};n("64be");K.render=c;var W=K,Y=n("9483");Object(Y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var X=n("8c4f"),Z=n("060e"),ee=n.n(Z),te=Object(a["I"])("data-v-228ccc9e");Object(a["w"])("data-v-228ccc9e");var ne={class:"home"},oe={class:"swiper-wrapper"},ae=Object(a["k"])("div",{class:"slide-slogan"},[Object(a["k"])("h1",null,"我们研究并提供"),Object(a["k"])("h1",null,"企业需要的服务"),Object(a["k"])("h1",null,"帮助企业"),Object(a["k"])("h1",null,"实现更大的经济效益！")],-1),re=Object(a["k"])("img",{src:ee.a,alt:"明动咨询"},null,-1),ce={class:"swiper-slide slide-inpuk"},ie=Object(a["k"])("h3",null,"明动咨询成立于2013年10月18日, 是第一批入驻上海自贸区的咨询行业公司。",-1),se=Object(a["k"])("br",null,null,-1),le=Object(a["k"])("h3",null,"我们主要服务于中国(上海)自由贸易试验区的招商引资、客户运营咨询，资产管理、投资管理、融资租赁、商业保理以及其他类金融行业咨询服务。",-1),ue={class:"slide-bus"},de=Object(a["k"])("h2",null,"我们的业务",-1),pe={class:"slide-grid"},fe=Object(a["k"])("div",{class:"slide-statement"},[Object(a["k"])("a",{href:"http://www.beian.miit.gov.cn",target:"_blank"},"沪ICP备17000006号")],-1);Object(a["u"])();var ge=te((function(e,t){return Object(a["t"])(),Object(a["e"])("div",ne,[Object(a["k"])("div",{class:"swiper-container",style:"height:"+e.clientHeight+"px;"},[Object(a["k"])("div",oe,[Object(a["k"])("div",{class:e.bannerRatio?"swiper-slide slide-banner banner-aito":"swiper-slide slide-banner"},[ae,Object(a["k"])("div",{class:"slide-arrow",onClick:t[1]||(t[1]=function(){return e.onSilder.apply(e,arguments)})},[re])],2),Object(a["k"])("div",ce,[Object(a["k"])("div",{class:"slide-inform",style:1==e.clientRatio?"margin: 0.44rem auto 0 auto;":"margin: 1.34rem auto 0 auto;"},[ie,se,le],4),Object(a["k"])("div",ue,[de,Object(a["k"])("div",pe,[(Object(a["t"])(!0),Object(a["e"])(a["b"],null,Object(a["x"])(e.listData,(function(t,n){return Object(a["t"])(),Object(a["e"])("div",{class:"slide-list",onClick:function(n){return e.onRouter(t.path)},key:n},[Object(a["k"])("img",{src:t.image,alt:"明动咨询"},null,8,["src"]),Object(a["k"])("span",null,Object(P["F"])(t.name),1)],8,["onClick"])})),256))])]),fe])])],4)])})),he=(n("b680"),n("27f4"),n("7de3")),me=n.n(he),be={name:"Home",props:{slider:Boolean},data:function(){return{clientRatio:1,clientWidth:0,clientHeight:0,bannerSwiper:Object,bannerRatio:!1,hasHandler:!1,listData:[{name:"财务代理",path:"/account",image:n("ac53")},{name:"园区直招",path:"/garden",image:n("4688")},{name:"爱税筹",path:"/mitax",image:n("7229")},{name:"舟山自贸区",path:"/steamer",image:n("1d67")},{name:"关于我们",path:"/about",image:n("b328")}]}},watch:{slider:{handler:function(){this.hasHandler||0!=this.bannerSwiper.activeIndex||(this.bannerSwiper.slideTo(1,1e3,!1),this.$store.commit("setStateType",!1))}}},mounted:function(){var e=this;e.clientWidth=window.innerWidth,e.clientHeight=window.innerHeight;var t=750,n=1334,o=n*e.clientWidth/t;o<e.clientHeight&&(e.bannerRatio=!0),(e.clientWidth/e.clientHeight).toFixed(2)>="0.62"?e.clientRatio=1:(e.clientWidth/e.clientHeight).toFixed(2)<="0.52"&&(e.clientRatio=2),e.$nextTick((function(){e.bannerSwiper=new me.a(".home .swiper-container",{mousewheel:!0,direction:"vertical",height:e.clientHeight,on:{slideChangeTransitionStart:function(){e.hasHandler=!0,e.$store.commit("setStateType",0==this.activeIndex)}}}),setTimeout((function(){document.body.style.display="block"}),300)}))},methods:{onSilder:function(){0==this.bannerSwiper.activeIndex&&(this.bannerSwiper.slideTo(1,1e3,!1),this.$store.commit("setStateType",!1))},onRouter:function(e){this.$router.replace({path:e})}}};n("d114");be.render=ge,be.__scopeId="data-v-228ccc9e";var ve=be,Ae=[{path:"/",name:"Home",meta:{key:0},component:ve},{path:"/account",name:"Account",meta:{key:1},component:function(){return n.e("account").then(n.bind(null,"77be"))}},{path:"/garden",name:"Garden",meta:{key:2},component:function(){return n.e("garden").then(n.bind(null,"d3a6"))}},{path:"/mitax",name:"Mitax",meta:{key:3},component:function(){return n.e("mitax").then(n.bind(null,"dd56"))}},{path:"/steamer",name:"Steamer",meta:{key:4},component:function(){return n.e("steamer").then(n.bind(null,"41e7"))}},{path:"/about",name:"About",meta:{key:5},component:function(){return n.e("about").then(n.bind(null,"f820"))}}];Ae.push({path:"/*",name:"404",component:function(){return n.e("error").then(n.bind(null,"dda8"))}},{path:"/error/:code",name:"Error",component:function(){return n.e("error").then(n.bind(null,"dda8"))}});var Oe=Object(X["a"])({history:Object(X["b"])("/"),routes:Ae}),je=Oe,ke=n("5502"),we=Object(ke["a"])({state:{stateIndex:0,stateHead:!0,stateType:!0,stateToggle:!1,statePoster:!1,stateIosBar:w()&&y()},getters:{getStateIndex:function(e){return e.stateIndex},getStateHead:function(e){return e.stateHead},getStateType:function(e){return e.stateType},getStateToggle:function(e){return e.stateToggle},getStatePoster:function(e){return e.statePoster},getStateIosBar:function(e){return e.stateIosBar}},mutations:{setStateIndex:function(e,t){e.stateIndex=t},setStateHead:function(e,t){e.stateHead=t},setStateType:function(e,t){e.stateType=t},setStateToggle:function(e,t){e.stateToggle=t},setStatePoster:function(e,t){e.statePoster=t}},actions:{},modules:{}});n("5569");je.beforeEach((function(e,t,n){"Error"==e.name&&we.commit("setStateHead",!1),"Home"==e.name?we.commit("setStateType",!0):we.commit("setStateType",!1),we.commit("setStateToggle",!1),we.commit("setStateIndex",e.meta.key||0),n()})),Object(o["a"])(W).use(we).use(je).mount("#app")},"64be":function(e,t,n){"use strict";n("3068")},7229:function(e,t,n){e.exports=n.p+"img/home4.ad33119d.png"},"787d":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUBAMAAABL3sEiAAAAJFBMVEUAAABERERERERERERERERERERERERERERERERERERERERERERUwpzWAAAAC3RSTlMAoPBgMODQcFBAIIUb72cAAABHSURBVAjXY2hbwAAC0SpgSnqTA4hi3K0J4e42AFHMuzeDuda7CyDcjWCu024BEMWivRFKQQUhSqAaINqhhkGMhlqEsBbqCADsGRWhomzpGAAAAABJRU5ErkJggg=="},"8f65":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAD1BMVEUAAAAqLi4qLi4qLi4qLi4m99HTAAAABHRSTlMA8DBglKNC4QAAAGJJREFUGNNV0MsNgCAQANGNViChALQCDzZA3P5rMmaHw5AAgUfYT+wt1jjveObgsPU3erZFOf85oGy1QIMVYuOSnTsQAq8i8CgCEwIhnfzSvziCozszZ+2KXC0EukvuoLv7AT7rGxmcefuQAAAAAElFTkSuQmCC"},ac53:function(e,t,n){e.exports=n.p+"img/home2.82f03a57.png"},b328:function(e,t,n){e.exports=n.p+"img/home6.ac03fb24.png"},bc8e:function(e,t,n){},bde9:function(e,t,n){},cfcd:function(e,t,n){"use strict";n("465a")},d114:function(e,t,n){"use strict";n("bc8e")},fdb9:function(e,t,n){"use strict";n("bde9")}});