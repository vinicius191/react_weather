(this.webpackJsonpreact_weather=this.webpackJsonpreact_weather||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),o=t.n(r),s=(t(9),t(1)),i="a28b3d68836e48b7b56e0a1e359c4867",l="https://api.openweathermap.org/data/2.5/";var u=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({}),u=Object(s.a)(o,2),m=u[0],d=u[1],h=Object(n.useState)(""),p=Object(s.a)(h,2),b=p[0],v=p[1];return c.a.createElement("div",{className:"undefined"!=typeof m.main&&m.main.temp>16?"App warm":"App"},c.a.createElement("main",null,c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",placeholder:"Search...",className:"search-bar",onChange:function(e){return r(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(l,"weather?q=").concat(t,"&units=metric&APPID=").concat(i)).then((function(e){return e.json()})).then((function(e){"404"===e.cod?(v("Place not found \ud83d\ude14"),r(""),d({})):(d(e),r(""),console.log("search",e),v(""))})).catch((function(e){"404"===e.cod&&v("Place not found \ud83d\ude14")}))}})),"undefined"!==typeof m.main?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},m.name,", ",m.sys.country),c.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","Abril","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a,", ").concat(t," ").concat(n," ").concat(c)}(new Date))),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},Math.round(m.main.temp),"\xb0C"),c.a.createElement("div",{className:"weather"},m.weather[0].main))):""!==b?c.a.createElement("div",{className:"weather-error"},b):""))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.21bfae7e.chunk.js.map