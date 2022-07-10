(()=>{"use strict";var e={747:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Inter&family=Roboto:wght@400;700&display=swap);"]),i.push([e.id,"html, body {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: roboto;\r\n}\r\n\r\n#container {\r\n    display: grid; \r\n    grid-template: auto 10fr / 1fr; \r\n    justify-content: center; \r\n    align-content: center; \r\n}\r\n\r\n#header {\r\n    display: grid;\r\n    grid-area: 1 / 1 / 1 / 4;\r\n    grid-template: 1fr / auto auto auto auto;\r\n    justify-content: center;\r\n    align-items: center;\r\n    justify-items: center;\r\n    align-content: center;\r\n    gap: 5rem;\r\n    height: 20vh;\r\n    border-bottom: 1rem solid rgb(255, 255, 255);\r\n}\r\n\r\n.header-items {\r\n    border-bottom: .1rem solid black;\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n}\r\n\r\n.header-items:hover {\r\n    width: 120%;\r\n}\r\n\r\n#landing-page {\r\n    \r\n}\r\n\r\n#menu {\r\n    \r\n}\r\n\r\n#contact {\r\n\r\n}\r\n\r\n#content {\r\n    grid-area: 2 / 1 / 2 / 4;\r\n    display: grid;\r\n    justify-items: center;\r\n    background-color: rgba(179, 179, 179, 0.724);\r\n    position: relative;\r\n}\r\n\r\nimg {\r\n    width: 40%;\r\n    padding-bottom: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#home-description {\r\n    width: 55%;\r\n    text-align: center;\r\n    font-size: 5rem;\r\n    font-weight: 900;\r\n    border-bottom: .3rem solid black;\r\n    margin: 0;\r\n}\r\n\r\n#backdrop {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#home-why {\r\n    width: 50%;\r\n    text-align: justify;\r\n    font-size: 2rem;\r\n    background-color: rgba(129, 129, 129, 0.563);\r\n    padding: 5rem;\r\n    padding-left: 25%;\r\n    padding-right: 25%;\r\n    margin: 0;\r\n}\r\n\r\n#big-restaurant-img {\r\n    width: 100%;\r\n}\r\n\r\n.home-menu-call {\r\n    text-align: center;\r\n    width: 50%;\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n    color: white;\r\n    text-shadow: .2rem .2rem black;\r\n    margin: 0;\r\n    padding-top: 5rem;\r\n    padding-bottom: 3rem;\r\n}\r\n\r\n.home-menu-background-chef {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 100%;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.home-menu-background {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-items: center;\r\n    justify-content: center;\r\n    align-content: center;\r\n    width: 100%;\r\n    height: 50vh;\r\n}\r\n\r\n.home-menu-background-holder {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(31, 48, 48, 0.238);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-items: center;\r\n    align-content: center;\r\n    justify-content: center;\r\n}\r\n\r\n#home-menu-background-holder-2 {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.238);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-items: center;\r\n    align-content: center;\r\n    justify-content: center;\r\n}\r\n\r\n.home-menu-button {\r\n    border: .2rem solid rgb(44, 150, 255);;\r\n    border-radius: 1rem;\r\n    padding: 2rem;\r\n    cursor: pointer;\r\n    background-color: rgba(0, 0, 0, 0.615);\r\n    color: white;\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    width: 20%;\r\n    margin: 0;\r\n    margin-top: 3rem;\r\n}\r\n\r\n#footer {\r\n    border-top: .1rem solid black;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n /* ---- MENU PAGE FROM HERE DOWN ---- */\r\n\r\n .para {\r\n    font-size: 3rem;\r\n    border-bottom: .5rem solid black;\r\n }\r\n\r\n #menu-list {\r\n    list-style-type: none;\r\n    width: 50%;\r\n }\r\n\r\n li {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border: 0.2rem solid black;\r\n    margin: 2rem;\r\n    background-color: rgba(255, 255, 255, 0.634);\r\n }\r\n\r\n li > p:first-child {\r\n    font-size: 4rem;\r\n    padding: 1rem;\r\n    margin-bottom: 0;\r\n }\r\n\r\n li > p {\r\n    font-size: 2rem;\r\n    padding: 1rem;\r\n }\r\n\r\n li > img {\r\n    padding-bottom: 1rem;\r\n    width: 100%;\r\n }\r\n\r\n \r\n /* ---- LOCATION PAGE FROM HERE DOWN ---- */\r\n\r\n #location-image {\r\n    padding-bottom: 3rem;\r\n }\r\n\r\n  /* ---- CONTACT PAGE FROM HERE DOWN ---- */\r\n\r\n  p {\r\n    font-size: 2rem;\r\n  }",""]);const d=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var l=e[d],c=r.base?l[0]+r.base:l[0],s=a[c]||0,u="".concat(c," ").concat(s);a[c]=s+1;var m=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var h=o(p,r);r.byIndex=d,t.splice(d,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=n(a[i]);t[d].references--}for(var l=r(e,o),c=0;c<a.length;c++){var s=n(a[c]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(e){for(;e.firstChild;)e.removeChild(e.lastChild);window.scrollTo(0,0),e.style.cssText="";let t=document.createElement("p");t.classList.add("para"),t.textContent="Come find us now! Or we will find you hahah lol... unless",e.appendChild(t);let n=document.createElement("img");n.id="location-image",n.src="img/mario.jpg",n.alt="art",e.appendChild(n);let r=document.createElement("div");r.id="footer",r.textContent="This Restaurant is brought to you by a Project assignment from The Odin Project",e.appendChild(r)}function t(e){for(;e.firstChild;)e.removeChild(e.lastChild);window.scrollTo(0,0),e.style.cssText="background-image: url(./img/brick-wall.jpg);";let t=document.createElement("p");t.classList.add("para"),t.textContent="Our menu is so good  you wont believe it! Well believe IT!",e.appendChild(t);let n=document.createElement("ul");n.id="menu-list",e.appendChild(n);let r=document.createElement("li"),o=document.createElement("p");o.textContent="Mega burger WOW edition!",r.appendChild(o),o=document.createElement("p"),o.textContent="This is the ultimate Big Big BIg burger. Juicy big and delicious, your jaw size does not matter you WILL use a knife to cut down this beast before you eat it, unless you are... never mind. This borgar is sure to make you fill full, satisfied, and filled to the brim with the intricate taste of a good burger through the entire time you are eating it! Truly divine burgar!",r.appendChild(o),n.appendChild(r);let a=document.createElement("img");a.src="img/bargur.jpg",a.alt="art",r.appendChild(a),r=document.createElement("li"),o=document.createElement("p"),o.textContent="Big Spaget!",r.appendChild(o),o=document.createElement("p"),o.textContent="The big spaget challenge, this dish has defeated countless opponents, Its would be predators all lay defeated before its mighty size. Will you take on this momentous challenge and surpass those that came before you and defeat this huge beast?!",r.appendChild(o),n.appendChild(r),a=document.createElement("img"),a.src="img/spaget.jpg",a.alt="art",r.appendChild(a),r=document.createElement("li"),o=document.createElement("p"),o.textContent="The tough Steak Stallion!",r.appendChild(o),o=document.createElement("p"),o.textContent="The tough steak stallion is truly a supreme specimen of unbridled will of a once imense bull! Don't let it fool you its size may be large but its filled to the brim with enough energy to blow you down by your second bite. Do not take this lightly, you will fall!",r.appendChild(o),n.appendChild(r),a=document.createElement("img"),a.src="img/steak.jpg",a.alt="art",r.appendChild(a);let i=document.createElement("div");i.id="footer",i.textContent="This Restaurant is brought to you by a Project assignment from The Odin Project",e.appendChild(i)}function r(n,r){for(;n.firstChild;)n.removeChild(n.lastChild);window.scrollTo(0,0);let o=document.createElement("p");o.id="home-description",o.textContent="We serve food. The good kind. Come. You will love it. Pinky swear!",n.appendChild(o);let a=document.createElement("div");a.id="backdrop",a.style.cssText="background-image: url(./img/brick-wall.jpg); background-size:  cover;background-repeat: no-repeat;background-position: center;",n.appendChild(a),o=document.createElement("p"),o.id="home-why",o.innerHTML="The food here is so good the mothers hate it! Our food is so much better than theirs that their kids just want to eat our food! And not theirs! <b>They feel defeated!</b> And all our chefs are handsome to boot!",a.appendChild(o);let i=document.createElement("img");i.src="img/happy-chef.jpg",i.alt="art",a.appendChild(i),o=document.createElement("p"),o.id="home-why",o.innerHTML="But don't worry if you are a mother! No no no, trust us, you wont have any problems because you know.. you are just on a whole new level compared to the other moms! You can rest easy haha. In fact, wanna work here?",a.appendChild(o),i=document.createElement("img"),i.id="big-restaurant-img",i.src="img/restaurant.jpg",i.alt="art",n.appendChild(i);let d=document.createElement("div");d.classList.add("home-menu-background"),d.style.cssText="background-image: url(./img/header_img.jpg); background-size:  cover;background-repeat: no-repeat;background-position: center;",n.appendChild(d);let l=document.createElement("div");l.classList.add("home-menu-background-holder"),d.appendChild(l),o=document.createElement("p"),o.classList.add("home-menu-call"),o.innerHTML="Our place is so big you can call your entire family and their entire family thrice over and there would still be half the restaurant left for other guests, its that Big! Very Big! <br> Come and see it for yourself!",l.appendChild(o);let c=document.createElement("div");c.classList.add("home-menu-button"),c.textContent="Scope out our Location!",c.addEventListener("click",(()=>{e(n)})),l.appendChild(c),d=document.createElement("div"),d.classList.add("home-menu-background"),d.style.cssText="background-image: url(./img/header.jpg); background-size:  cover;background-repeat: no-repeat;background-position: center;",n.appendChild(d),l=document.createElement("div"),l.id="home-menu-background-holder-2",d.appendChild(l),o=document.createElement("p"),o.classList.add("home-menu-call"),o.innerHTML="Our food will pierce your happiness levels through the roof! Healthy food, big food, fried food everything is specialized per our chefs.<br> Just check our Menu and see what we are made of at this restaurant!",l.appendChild(o),c=document.createElement("div"),c.classList.add("home-menu-button"),c.textContent="Check out our Menu!",c.addEventListener("click",(()=>{t(n)})),l.appendChild(c);let s=document.createElement("div");s.id="footer",s.textContent="This Restaurant is brought to you by a Project assignment from The Odin Project",n.appendChild(s)}var o=n(379),a=n.n(o),i=n(795),d=n.n(i),l=n(569),c=n.n(l),s=n(565),u=n.n(s),m=n(216),p=n.n(m),h=n(589),g=n.n(h),f=n(747),b={};b.styleTagTransform=g(),b.setAttributes=u(),b.insert=c().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=p(),a()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;let y=document.createElement("div");y.id="container",document.body.appendChild(y);let C=document.createElement("div");C.id="header",y.appendChild(C),C.style.cssText="background-image: url(./img/header_image.jpg); background-size:  cover; background-repeat: no-repeat; background-position: center;";let v=document.createElement("div");v.id="landing-page",v.classList.add("header-items"),v.textContent="Home",C.appendChild(v);let w=document.createElement("div");w.id="menu",w.classList.add("header-items"),w.textContent="Menu",C.appendChild(w);let E=document.createElement("div");E.id="location",E.classList.add("header-items"),E.textContent="Location",C.appendChild(E);let k=document.createElement("div");k.id="contact",k.classList.add("header-items"),k.textContent="Contact",C.appendChild(k);let x,T=document.createElement("div");T.id="content",y.appendChild(T),r(T),v.addEventListener("click",(()=>{"Home"!=x&&(r(T),x="Home")})),w.addEventListener("click",(()=>{"Menu"!=x&&(t(T),x="Menu")})),E.addEventListener("click",(()=>{"Location"!=x&&(e(T),x="Location")})),k.addEventListener("click",(()=>{"Contact"!=x&&(function(e){for(;e.firstChild;)e.removeChild(e.lastChild);window.scrollTo(0,0),e.style.cssText="";let t=document.createElement("p");t.classList.add("para"),t.textContent="Contact us! We would love to hear from you! Love you <3",e.appendChild(t),t=document.createElement("p"),t.classList.add("para-contact"),t.textContent="Phone: 80085-4-7143",e.appendChild(t),t=document.createElement("p"),t.classList.add("para-contact"),t.textContent="Fax: 69-2-420",e.appendChild(t),t=document.createElement("p"),t.classList.add("para-contact"),t.textContent="Telegraph: 1337-4-HACKS",e.appendChild(t),t=document.createElement("p"),t.classList.add("para-contact"),t.textContent="Quantum Tunnel: 688787D8FF144C502C7F5CFFAAFE2CC588D86079F9DE88304C26B0CB99CE91C6",e.appendChild(t)}(T),x="Contact")}))})()})();