(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(6),a=n(1),i=n(0),r=Object(a.createContext)(),l=function(e){var t=e.children,n=Object(a.useState)("light"),c=Object(s.a)(n,2),l=c[0],o=c[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://skylerchan.ca/",j="SC.",h={name:"Skyler Chan",role:"work in progress",strings:["test.","test2."],description:"Skyler Chan is an 18-year old gap year student, currently living in Hong Kong. He's passionate about space exploration, Web 3.0, exponential technologies, photography, and philosophy.",social:{linkedin:"https://www.linkedin.com/in/skylerchan03/",github:"https://github.com/skyler-chan",twitter:"https://twitter.com/skyler_chan_"}},b=[{name:"3D J2 Orbit Propagator - UTAT",description:"Designed multiple iterations of 2D and 3D orbit propagators, including J2 Perturbation.",stack:["Python","NumPy","MatPlotLib"],sourceCode:"https://github.com/skyler-chan/3D-Orbit-Propagator-Using-NumPy-",livePreview:"https://github.com/skyler-chan/3D-Orbit-Propagator-Using-NumPy-"},{name:"MartianDAO",description:"Creator and Core Team",stack:["Notion","React"],sourceCode:"https://transparent-otter-86f.notion.site/MartianDAO-2264ef9ef23247e5a35d9f6d27428b7d?utm_source=notion",livePreview:"https://transparent-otter-86f.notion.site/MartianDAO-2264ef9ef23247e5a35d9f6d27428b7d?utm_source=notion"},{name:"Monument",description:"Community Manager/Operations/Growth",stack:["Discord","",""],sourceCode:"https://monument.app/",livePreview:"https://monument.app/"}],u=["HTML","CSS","JavaScript","Lightroom","React","French","Photography","Public Speaking","Being Spontaneous"],d="skylerchan2021@gmail.com",m=n(14),O=n.n(m),p=n(12),x=n.n(p),f=n(16),k=n.n(f),g=n(15),v=n.n(g),N=(n(27),function(){var e=Object(a.useContext)(r),t=Object(s.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,l=Object(a.useState)(!1),o=Object(s.a)(l,2),j=o[0],h=o[1],m=function(){return h(!j)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[b.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:m,className:"link link--nav",children:"Projects"})}):null,u.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:m,className:"link link--nav",children:"Skills"})}):null,d?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:m,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(i.jsx)(x.a,{}):Object(i.jsx)(O.a,{})}),Object(i.jsx)("button",{type:"button",onClick:m,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(i.jsx)(v.a,{}):Object(i.jsx)(k.a,{})})]})}),_=(n(33),function(){var e=o,t=j;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(N,{})]})}),w=n(10),y=n.n(w),C=n(17),P=n.n(C),S=n(18),D=n.n(S),M=(n(34),function(){var e=h.name,t=h.role,n=h.description,c=h.resume,s=h.social;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hey! I'm ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:n&&n}),Object(i.jsxs)("div",{className:"about__contact center",children:[c&&Object(i.jsx)("a",{href:c,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(i.jsxs)(i.Fragment,{children:[s.github&&Object(i.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(y.a,{})}),s.linkedin&&Object(i.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(P.a,{})}),s.twitter&&Object(i.jsx)("a",{href:s.twitter,"aria-label":"twitter",className:"link link--icon",children:Object(i.jsx)(D.a,{})})]})]})]})}),E=n(7),L=n.n(E),T=n(19),A=n.n(T),J=(n(36),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},L()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(y.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(A.a,{})})]})}),H=(n(37),function(){return b.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:b.map((function(e){return Object(i.jsx)(J,{project:e},L()())}))})]}):null}),I=(n(38),function(){return u.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:u.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},L()())}))})]}):null}),R=n(20),U=n.n(R),B=(n(39),function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(U.a,{fontSize:"large"})})}):null}),F=(n(40),function(){return d?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(d),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),Q=(n(41),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",className:"link footer__link",children:"Secret Surprise"})})}),W=(n(42),function(){var e=Object(a.useContext)(r),t=Object(s.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(_,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(M,{}),Object(i.jsx)(H,{}),Object(i.jsx)(I,{}),Object(i.jsx)(F,{})]}),Object(i.jsx)(B,{}),Object(i.jsx)(Q,{})]})});n(43);Object(c.render)(Object(i.jsx)(l,{children:Object(i.jsx)(W,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.3ef09120.chunk.js.map