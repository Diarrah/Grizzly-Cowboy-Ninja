(this["webpackJsonprps-bnc"]=this["webpackJsonprps-bnc"]||[]).push([[0],[,,,,,,,,,,function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/triangle.73996ede.svg"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/icon-blue.104d64f9.svg"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/icon-yellow.3bd07db1.svg"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/icon-red.49686a70.svg"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/image-rules.2b280252.svg"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/g-vs-c.9e6c6c96.svg"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/g-vs-n.4134089b.svg"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/c-vs-n.c48137a7.svg"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/icon-red.476e90a9.svg"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/icon-blue.8b57a6b1.svg"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/icon-yellow.3b1a5d7e.svg"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/image-rules.b9c4b845.svg"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/bear.f47cbef4.svg"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/scissors.2911b085.svg"},,,,,,,function(e,s,t){var c={"./GCN/c-vs-n.svg":17,"./GCN/curve.svg":31,"./GCN/g-vs-c.svg":15,"./GCN/g-vs-n.svg":16,"./GCN/icon-blue.svg":11,"./GCN/icon-red.svg":13,"./GCN/icon-yellow.svg":12,"./GCN/image-rules.svg":14,"./RPS/icon-blue.svg":19,"./RPS/icon-red.svg":18,"./RPS/icon-yellow.svg":20,"./RPS/image-rules.svg":21,"./battleground/triangle.svg":10,"./bear.svg":22,"./scissors.svg":23};function a(e){var s=n(e);return t(s)}function n(e){if(!t.o(c,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=n,e.exports=a,a.id=30},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/curve.cbbf868b.svg"},,,,function(e,s,t){},function(e,s,t){"use strict";t.r(s);var c=t(0),a=t(1),n=t.n(a),r=t(24),i=t.n(r),o=t(6),l=t(22),j=t(23),b=function(){var e=Object(a.useContext)(B),s=e.grizzlyMode,t=e.setGrizzlyMode;Object(a.useEffect)((function(){sessionStorage.getItem("mode")||(t(!0),sessionStorage.setItem("mode","grizzly"))}),[]);return Object(c.jsxs)("div",{className:"mode",children:[Object(c.jsx)("span",{className:"mode__grizzly",children:Object(c.jsx)("img",{src:l.default,alt:"Bear"})}),Object(c.jsx)("button",{className:"grizzly__mode".concat(s?"":" active"),"aria-label":"Button to change game mode",onClick:function(){s?(sessionStorage.setItem("mode","scissors"),t(!1)):(sessionStorage.setItem("mode","grizzly"),t(!0))},type:"button",children:Object(c.jsx)("span",{className:"slider"})}),Object(c.jsx)("span",{className:"mode__scissors",children:Object(c.jsx)("img",{src:j.default,alt:"Scissors"})})]})},d=function(){var e=Object(a.useContext)(B),s=e.rpsScore,t=e.gcnScore,n=e.grizzlyMode;return Object(c.jsxs)("div",{className:"score",children:[Object(c.jsx)("div",{className:"score__textbox",children:Object(c.jsxs)("div",{className:"textbox__inner".concat(n?"":" active"),children:[Object(c.jsxs)("div",{className:"textbox__inner--grizzly",children:[Object(c.jsx)("span",{children:"Grizzly Bear"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:"Cowboy"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:"Ninja"})]}),Object(c.jsxs)("div",{className:"textbox__inner--scissors",children:[Object(c.jsx)("span",{children:"Rock"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:"Paper"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:"Scissors"})]})]})}),Object(c.jsxs)("div",{className:"score__number",children:["Score",Object(c.jsx)("span",{children:n?t:s}),Object(c.jsx)(M,{})]})]})},u=t(10),g=t(11),O=t(12),m=t(13),x=t(14),h=t(15),p=t(16),f=t(17),v=t(18),w=t(19),N=t(20),y=t(21),S=function(){var e=Object(a.useContext)(B),s=e.grizzlyMode,n=e.rpsScore,r=e.setRpsScore,i=e.gcnScore,l=e.setGcnScore,j=e.playing,b=e.setPlaying,d=e.computerWeapon,x=e.setComputerWeapon,h=e.weaponsRef,p=Object(a.useState)(),f=Object(o.a)(p,2),y=f[0],S=f[1],C=Object(a.useState)(),_=Object(o.a)(C,2),z=_[0],I=_[1];Object(a.useEffect)((function(){var e=Array.from(document.querySelectorAll(".battleground__weapon")),s=["red","blue","yellow"];h.current=e,function(){var e=Math.ceil(3*Math.random())-1;x(s[e])}(),e.forEach((function(e){return e.addEventListener("click",(function(e){L(e),b(!0)}))}))}),[]),Object(a.useEffect)((function(){j&&k()}),[j]);var L=function(e){h.current.forEach((function(s){s===e.target?(s.classList.add("playing"),S(e.target.dataset.color)):s.classList.add("hidden"),s.classList.contains("playing")&&(s.children[0].innerText="You Picked")}))},k=function(){d===y?I(0):"red"===d&&"yellow"===y||"blue"===d&&"red"===y||"yellow"===d&&"blue"===y?(I(-1),setTimeout((function(){s?(l(i-1),sessionStorage.setItem("gcn",Number(i-1))):(r(n-1),sessionStorage.setItem("rps",Number(n-1)))}),2500)):(I(1),setTimeout((function(){s?(l(i+1),sessionStorage.setItem("gcn",Number(i+1))):(r(n+1),sessionStorage.setItem("rps",Number(n+1)))}),2500))},M=function(e){return s?"yellow"===e?"cowboy":"red"===e?"ninja":"grizzly":"yellow"===e?"scissors":"red"===e?"rock":"paper"};return Object(c.jsxs)("div",{className:"battleground".concat(j?" move-up":""),children:[Object(c.jsx)("img",{className:"triangle ".concat(j?"hidden":""),src:u.default,alt:"Triangle"}),Object(c.jsxs)("div",{className:"battleground__weapon weapon--red","data-color":"red",children:[Object(c.jsx)("span",{}),Object(c.jsx)("img",{src:s?m.default:v.default,alt:"".concat(s?"Ninja":"Rock"," selection")})]}),Object(c.jsxs)("div",{className:"battleground__weapon weapon--blue","data-color":"blue",children:[Object(c.jsx)("span",{}),Object(c.jsx)("img",{src:s?g.default:w.default,alt:"".concat(s?"Bear":"Paper"," selection")})]}),Object(c.jsxs)("div",{className:"battleground__weapon weapon--yellow","data-color":"yellow",children:[Object(c.jsx)("span",{}),Object(c.jsx)("img",{src:s?O.default:N.default,alt:"".concat(s?"Cowboy":"Scissors"," selection")})]}),j&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"battleground__opponent ".concat(d),children:[Object(c.jsx)("svg",{className:"circle ".concat(d),width:"130",height:"130",viewBox:"0 0 130 130",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M65 7.5C96.7564 7.5 122.5 33.2436 122.5 65C122.5 96.7564 96.7564 122.5 65 122.5C33.2436 122.5 7.5 96.7564 7.5 65C7.5 33.2436 33.2436 7.5 65 7.5Z",stroke:"#E1E4ED",strokeWidth:"12"})}),Object(c.jsx)("img",{src:t(30)("./".concat(s?"GCN":"RPS","/icon-").concat(d,".svg")).default,alt:"".concat(M(d)," selection")})]}),Object(c.jsxs)("div",{className:"battleground__result",children:[Object(c.jsx)("h3",{children:0===z?"It's a tie!":1===z?"You win":"You lose"}),0!==z&&Object(c.jsx)("span",{children:1===z?"".concat(M(y)," beats ").concat(M(d)):"".concat(M(d)," beats ").concat(M(y))}),Object(c.jsx)(R,{}),1===z&&Object(c.jsx)("div",{className:"confetti".concat(1===z?" active":""),children:Object(c.jsx)("lottie-player",{src:"https://assets4.lottiefiles.com/temp/lf20_9xt8zC.json",background:"transparent",speed:".75",autoplay:!0,loop:!0})})]})]})]})},C=t(42),_=t(40),z=t(41),I=t(38),L=t(39);t(32),t(33),t(34);z.a.use([I.a,L.a]);var k=function(){var e=Object(a.useContext)(B).grizzlyMode,s=Object(a.useState)(!1),t=Object(o.a)(s,2),n=t[0],r=t[1],i=Object(a.useState)("true"===sessionStorage.getItem("first")),l=Object(o.a)(i,2),j=(l[0],l[1]);return Object(a.useEffect)((function(){sessionStorage.getItem("first")?(sessionStorage.setItem("first","false"),j(!1)):(sessionStorage.setItem("first","true"),j(!0),r(!0))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{className:"rules__btn",onClick:function(){return r(!n)},children:"Rules"}),Object(c.jsxs)("div",{className:"rules__wrapper".concat(n?" active":""),children:[Object(c.jsxs)("div",{className:"wrapper__header",children:[Object(c.jsx)("span",{children:"Rules"}),Object(c.jsx)("button",{onClick:function(){return r(!1)},"aria-label":"Button to close rules module",children:Object(c.jsx)("svg",{className:"close",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",children:Object(c.jsx)("path",{fill:"#3B4262",fillRule:"evenodd",d:"M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z",opacity:".25"})})})]}),!e&&Object(c.jsx)("div",{className:"rules rules--rps",children:Object(c.jsx)("img",{src:y.default,alt:"Rules of Rock, Paper, Scissors"})}),e&&n&&Object(c.jsx)("div",{className:"rules rules--gcn",children:Object(c.jsxs)(C.a,{direction:"horizontal",pagination:{clickable:!0},keyboard:{enabled:!0},simulateTouch:!1,slidesPerView:1,children:[Object(c.jsx)(_.a,{className:"rule rule--1",children:Object(c.jsxs)("p",{children:["Have you ever played ",Object(c.jsx)("span",{children:"Grizzly, Cowboy, Ninja?"}),Object(c.jsx)("small",{children:"(Yes, this is a real game!)"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{}),Object(c.jsx)("br",{}),"It's a fun twist on the classic game of ",Object(c.jsx)("span",{children:"Rock, Paper, Scissors."}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{}),Object(c.jsx)("br",{}),"The rules are just as straight forward and easy to learn, too.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("svg",{className:"arrow",width:"201",height:"8",viewBox:"0 0 201 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M200.354 4.35355C200.549 4.15829 200.549 3.84171 200.354 3.64645L197.172 0.464466C196.976 0.269204 196.66 0.269204 196.464 0.464466C196.269 0.659728 196.269 0.976311 196.464 1.17157L199.293 4L196.464 6.82843C196.269 7.02369 196.269 7.34027 196.464 7.53553C196.66 7.7308 196.976 7.7308 197.172 7.53553L200.354 4.35355ZM0 4.5H200V3.5H0V4.5Z",fill:"#3B4363"})})]})}),Object(c.jsxs)(_.a,{className:"rule rule--2",children:[Object(c.jsx)("div",{className:"rule__img__container",children:Object(c.jsx)("img",{src:h.default,alt:"Cowboy vs. Bear"})}),Object(c.jsxs)("div",{className:"rule__textbox",children:[Object(c.jsx)("span",{children:"Cowboy vs. Bear"})," ",Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"Cowboy can pull & shoot quicker than Bear can close the distance for a swipe."}),Object(c.jsx)("span",{children:"Cowboy wins."})]})]}),Object(c.jsxs)(_.a,{className:"rule rule--3",children:[Object(c.jsx)("div",{className:"rule__img__container",children:Object(c.jsx)("img",{src:p.default,alt:"Bear vs. Ninja"})}),Object(c.jsxs)("div",{className:"rule__textbox",children:[Object(c.jsx)("span",{children:"Bear vs. Ninja"}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"Ninja only has 1 sword but Bear has 10 - his claws! He is sliced up in no time."}),Object(c.jsx)("span",{children:"Bear wins."})]})]}),Object(c.jsxs)(_.a,{className:"rule rule--4",children:[Object(c.jsx)("div",{className:"rule__img__container",children:Object(c.jsx)("img",{src:f.default,alt:"Ninja vs. Cowboy"})}),Object(c.jsxs)("div",{className:"rule__textbox",children:[Object(c.jsx)("span",{children:"Ninja vs. Cowboy"}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"Ninja is sly & can sneak up on Cowboy before he even has a chance to notice."}),Object(c.jsx)("span",{children:"Ninja wins."})]})]}),Object(c.jsx)(_.a,{className:"rule rule--5",children:Object(c.jsx)("img",{src:x.default,alt:"Rules of Grizzly, Cowboy, Ninja"})})]})})]})]})},R=function(){var e=Object(a.useContext)(B),s=e.setPlaying,t=e.setComputerWeapon,n=e.weaponsRef;return Object(c.jsx)("button",{className:"retry__btn",onClick:function(){s(!1),function(){var e=Math.ceil(3*Math.random())-1;t(["red","blue","yellow"][e])}(),n.current.forEach((function(e){e.classList.remove("playing"),e.classList.remove("hidden"),e.children[0].innerText=""}))},children:"Try Again"})},M=function(){var e=Object(a.useContext)(B),s=e.grizzlyMode,t=e.setGcnScore,n=e.setRpsScore;return Object(c.jsxs)("button",{className:"reset",onClick:function(){s?(t(0),sessionStorage.setItem("gcn",Number(0))):(n(0),sessionStorage.setItem("rps",Number(0)))},children:[Object(c.jsx)("span",{children:"Reset"}),Object(c.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(c.jsxs)("g",{clipPath:"url(#clip1)",children:[Object(c.jsx)("path",{d:"M8.53505 1.46374C6.58517 -0.486123 3.41229 -0.486123 1.46241 1.46374C-0.487471 3.41362 -0.487471 6.5863 1.46241 8.53618C2.43735 9.51112 3.71813 9.9987 4.99872 9.9987C6.27931 9.9987 7.56009 9.51112 8.53503 8.53618C9.47968 7.59165 10 6.33581 10 4.99995C10 3.66413 9.47968 2.40825 8.53505 1.46374ZM8.2404 8.24153C6.4529 10.0289 3.54458 10.0291 1.75708 8.24153C-0.0302052 6.45411 -0.0302052 3.54579 1.75708 1.75843C2.65083 0.864658 3.82478 0.417803 4.99874 0.417803C6.17269 0.417803 7.34665 0.864658 8.2404 1.75843C9.10626 2.62427 9.58325 3.77544 9.58325 4.99995C9.58325 6.22448 9.10626 7.37563 8.2404 8.24153Z",fill:"black"}),Object(c.jsx)("path",{d:"M5.29342 4.99992L7.35639 2.93701L7.06172 2.64236L4.99875 4.70524L2.93588 2.64236L2.64124 2.93701L4.70411 4.99988L2.78856 6.91533L3.08323 7.21002L4.99875 5.29455L7.06417 7.35996L7.35883 7.06529L5.29342 4.99992Z",fill:"black"})]}),Object(c.jsx)("defs",{children:Object(c.jsxs)("clipPath",{id:"clip1",children:[" ",Object(c.jsx)("rect",{width:"10",height:"10",fill:"white"})," "]})})]})]})},B=(t(35),Object(a.createContext)()),G=function(){var e=Object(a.useState)(!1),s=Object(o.a)(e,2),t=s[0],n=s[1],r=Object(a.useState)(sessionStorage.getItem("rps")),i=Object(o.a)(r,2),l=i[0],j=i[1],u=Object(a.useState)(sessionStorage.getItem("gcn")),g=Object(o.a)(u,2),O=g[0],m=g[1],x=Object(a.useState)(),h=Object(o.a)(x,2),p=h[0],f=h[1],v=Object(a.useState)("grizzly"===sessionStorage.getItem("mode")),w=Object(o.a)(v,2),N=w[0],y=w[1],C=Object(a.useRef)([]);return Object(a.useEffect)((function(){sessionStorage.getItem("rps")?(j(Number(sessionStorage.getItem("rps"))),sessionStorage.setItem("rps",l)):(sessionStorage.setItem("rps",Number(0)),j(0)),sessionStorage.getItem("gcn")?(m(Number(sessionStorage.getItem("gcn"))),sessionStorage.setItem("gcn",O)):(sessionStorage.setItem("gcn",Number(0)),m(0))}),[]),Object(c.jsx)(B.Provider,{value:{playing:t,setPlaying:n,rpsScore:l,setRpsScore:j,gcnScore:O,setGcnScore:m,computerWeapon:p,setComputerWeapon:f,grizzlyMode:N,setGrizzlyMode:y,weaponsRef:C},children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(b,{}),Object(c.jsx)(d,{}),Object(c.jsx)(S,{}),Object(c.jsx)(k,{}),Object(c.jsx)(M,{})]})})};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(G,{})}),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.0bc8d36a.chunk.js.map