(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(n,e,t){},28:function(n,e,t){n.exports=t(39)},33:function(n,e,t){},39:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(21),i=t.n(o),c=(t(33),t(20),t(9)),u=t(5),l=t(12),f=t(6),m=t(7);function s(){var n=Object(f.a)(["\n    width: 40%;\n    margin: 40px 10%;\n    border: 1px solid red;\n    padding: 40px;\n"]);return s=function(){return n},n}function p(){var n=Object(f.a)(["\n    background: none;\n    border: none;\n    margin: 20px 30%;\n    cursor: pointer;\n    font-size: 10px;\n"]);return p=function(){return n},n}function d(){var n=Object(f.a)(["\n    background: -webkit-linear-gradient(left, #02d9ff 0%, #007fd9 100%);\n    width: 28%;\n    display: inline-block;\n    margin: 10px 2.5%;\n    padding: 20px 0;\n"]);return d=function(){return n},n}function g(){var n=Object(f.a)(["\n    width: 90%;\n    margin: 20px 5%;\n"]);return g=function(){return n},n}function E(){var n=Object(f.a)(["\n    text-align: ",";\n    font-size: ",";\n    margin: 10px;\n    font-weight: 600;\n    background: none;\n    text-transform: uppercase;\n"]);return E=function(){return n},n}function h(){var n=Object(f.a)(["\n    width: 34%;\n    margin: 10px 0 10px 32%;\n    padding: 10px;\n    border: 1px solid blue;\n"]);return h=function(){return n},n}function b(){var n=Object(f.a)(["\n    font-size: ",";\n    font-weight: ",";\n    text-align: ",";\n    margin: 0;\n"]);return b=function(){return n},n}var w=m.a.h1(b(),function(n){return n.size||"110px"},function(n){return n.weigth||"100"},function(n){return n.align||"center"}),x=m.a.input(h()),v=m.a.p(E(),function(n){return n.align||"center"},function(n){return n.size||"18px"}),j=m.a.section(g()),O=m.a.article(d()),k=m.a.button(p()),S=m.a.article(s()),z=function(){var n=Object(a.useState)([]),e=Object(l.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)(""),u=Object(l.a)(i,2),f=u[0],m=u[1];Object(a.useEffect)(function(){fetch("https://swapi.co/api/people/",{mode:"cors"}).then(function(n){return n.json()}).then(function(n){o(n.results)})},[]);var s=t.filter(function(n){return-1!==n.name.toLowerCase().indexOf(f.toLowerCase())});return r.a.createElement("div",null,r.a.createElement(x,{placeholder:"BUSCAR",onChange:function(n){return m(n.currentTarget.value)}}),r.a.createElement(v,null,"RESULTADOS"),r.a.createElement(j,null,s.map(function(n){return r.a.createElement(O,{key:n.name+n.heigth},r.a.createElement(v,{size:"25px"},n.name),r.a.createElement(k,null,r.a.createElement(c.b,{to:{pathname:"/Personaje/",state:{info:n}}},"VER DETALLE")))})))},A=function(n){n.form;return r.a.createElement("div",null,r.a.createElement(w,{size:"110px",weigth:"600"},"STAR WARS"),r.a.createElement(w,null,"PERSONAJES"),r.a.createElement(z,null))},R=function(n){var e=n.location.state.info,t=Object(a.useState)(null),o=Object(l.a)(t,2),i=o[0],u=o[1];return Object(a.useEffect)(function(){e?fetch(e.homeworld,{mode:"cors"}).then(function(n){return n.json()}).then(function(n){u(n.name)}):u(void 0)},[e]),r.a.createElement("div",null,e?r.a.createElement(j,null,r.a.createElement(w,{size:"120px",weigth:"600",align:"left"},e.name),r.a.createElement(w,{align:"left"},i),r.a.createElement(S,null,r.a.createElement(v,{align:"left"},"Peso: ",e.mass),r.a.createElement(v,{align:"left"},"A\xf1o: ",e.birth_year),r.a.createElement(v,{align:"left"},"G\xe9nero: ",e.gender)),r.a.createElement(k,null,r.a.createElement(c.b,{to:"/"},"VOLVER"))):"",";")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(function(){return r.a.createElement(c.a,{basename:"/api-star-wars"},r.a.createElement(u.a,{path:"/",exact:!0,component:A}),r.a.createElement(u.a,{path:"/Personaje/",component:R}))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.8e3c8199.chunk.js.map