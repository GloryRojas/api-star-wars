(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(n,e,t){n.exports=t(39)},32:function(n,e,t){},33:function(n,e,t){},39:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(20),o=t.n(i),c=(t(32),t(33),t(9)),u=t(7),l=t(10),f=t(5),m=t(6);function d(){var n=Object(f.a)(["\n    width: 40%;\n    margin: 40px 10%;\n    border: 1px solid red;\n    padding: 40px;\n\n    @media only screen and (max-width: 768px) {\n        width: 90%;\n        margin-left: 2.5%;\n        padding: 10px;\n      }\n"]);return d=function(){return n},n}function s(){var n=Object(f.a)(["\n    border: none;\n    margin: 20px 30%;\n    cursor: pointer;\n    font-size: 12px;\n"]);return s=function(){return n},n}function p(){var n=Object(f.a)(["\n    background: -webkit-linear-gradient(left, #02d9ff 0%, #007fd9 100%);\n    width: 28%;\n    display: inline-block;\n    margin: 10px 2.5%;\n    padding: 20px 0;\n    border-radius: 10px;\n\n    @media only screen and (max-width: 768px) {\n        width: 90%;\n        margin-left: 5%;\n      }\n"]);return p=function(){return n},n}function g(){var n=Object(f.a)(["\n    width: 90%;\n    margin: 20px 5%;\n"]);return g=function(){return n},n}function h(){var n=Object(f.a)(["\n    text-align: ",";\n    font-size: ",";\n    margin: 10px;\n    font-weight: 600;\n    background: none;\n    text-transform: uppercase;\n"]);return h=function(){return n},n}function E(){var n=Object(f.a)(["\n    width: 34%;\n    margin: 10px;\n    padding: 10px;\n    border: 1px solid blue;\n    border-radius: 5px;\n    outline: 0px;\n    &:hover {\n        background: #555;\n    }\n    &: focus {\n        border: 1px solid red;\n        background: none;\n    }\n"]);return E=function(){return n},n}function b(){var n=Object(f.a)(["\n    font-size: ",";\n    font-weight: ",";\n    text-align: ",";\n    margin: 0;\n    margin-left:  ",";\n\n    @media only screen and (max-width: 768px) {\n        font-size: 50px;\n      }\n"]);return b=function(){return n},n}var x=m.a.h1(b(),function(n){return n.size||"110px"},function(n){return n.weigth||"100"},function(n){return n.align||"center"},function(n){return n.left||"0"}),w=m.a.input(E()),v=m.a.p(h(),function(n){return n.align||"center"},function(n){return n.size||"18px"}),O=m.a.section(g()),j=m.a.article(p()),k=m.a.button(s()),y=m.a.article(d()),A=function(){var n=Object(a.useState)([]),e=Object(l.a)(n,2),t=e[0],r=e[1];return Object(a.useEffect)(function(){for(var n=[],e=1;e<10;e++)fetch("https://swapi.co/api/people/?page="+e,{mode:"cors"}).then(function(n){return n.json()}).then(function(e){return e.results.map(function(e){return n.push(e)})});r(n)},[]),t};function S(){var n=Object(f.a)(["\n    width: 50%;\n"]);return S=function(){return n},n}var z=m.a.img(S()),R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"A qui\xe9n buscas?"),r.a.createElement("h1",null,"Escribe su nombre"),r.a.createElement(z,{alt:"Jedi",src:"https://media1.giphy.com/media/3oeSATQOhfaOqgwjD2/giphy.gif?cid=790b76115d115a573834654b4d28fd6e&rid=giphy.gif"}))},L=function(){var n=Object(a.useState)(""),e=Object(l.a)(n,2),t=e[0],i=e[1],o=A().filter(function(n){return-1!==n.name.toLowerCase().indexOf(t.toLowerCase())});return r.a.createElement("div",null,r.a.createElement(w,{placeholder:"BUSCAR",onChange:function(n){return i(n.currentTarget.value)}}),r.a.createElement(v,null,"RESULTADOS"),r.a.createElement(O,null,o.map(function(n){return r.a.createElement(j,{key:n.name+n.heigth},r.a.createElement(v,{size:"25px"},n.name),r.a.createElement(k,null,r.a.createElement(c.b,{to:{pathname:"/Personaje/",state:{info:n}}},"VER DETALLE")))})),r.a.createElement(R,null))},T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,{size:"110px",weigth:"600"},"STAR WARS"),r.a.createElement(x,null,"PERSONAJES"),r.a.createElement(L,null))},C=function(n){var e=n.location.state.info,t=Object(a.useState)(null),i=Object(l.a)(t,2),o=i[0],u=i[1];return Object(a.useEffect)(function(){e?fetch(e.homeworld,{mode:"cors"}).then(function(n){return n.json()}).then(function(n){u(n.name)}):u(void 0)},[e]),r.a.createElement("div",{className:"App"},e?r.a.createElement(O,null,r.a.createElement(x,{size:"120px",weigth:"600",align:"left",left:"10%"},e.name),r.a.createElement(x,{align:"left",left:"10%"},o),r.a.createElement(y,null,r.a.createElement(v,{align:"left"},"Peso: ",e.mass),r.a.createElement(v,{align:"left"},"A\xf1o: ",e.birth_year),r.a.createElement(v,{align:"left"},"G\xe9nero: ",e.gender)),r.a.createElement(k,null,r.a.createElement(c.b,{to:"/"},"VOLVER"))):"")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(function(){return r.a.createElement(c.a,{basename:"/api-star-wars"},r.a.createElement(u.a,{path:"/",exact:!0,component:T}),r.a.createElement(u.a,{path:"/Personaje/",component:C}))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.f8e53681.chunk.js.map