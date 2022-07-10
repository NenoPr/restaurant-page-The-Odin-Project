(()=>{"use strict";var e={747:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Inter&family=Roboto:wght@400;700&display=swap);"]),a.push([e.id,"html, body {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: roboto;\r\n    font-size: 16px;\r\n    position: relative;\r\n}\r\n\r\n#container {\r\n    display: grid; \r\n    grid-template: auto 10fr / 1fr; \r\n    justify-content: center; \r\n    align-content: center; \r\n}\r\n\r\n#header {\r\n    display: grid;\r\n    grid-area: 1 / 1 / 1 / 4;\r\n    grid-template: 1fr / auto auto auto auto;\r\n    justify-content: center;\r\n    align-items: center;\r\n    justify-items: center;\r\n    align-content: center;\r\n    gap: 5rem;\r\n    height: 20vh;\r\n    border-bottom: 1rem solid rgb(255, 255, 255);\r\n}\r\n\r\n.header-items {\r\n    border-bottom: .1rem solid black;\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n}\r\n\r\n.header-items:hover {\r\n    width: 120%;\r\n}\r\n\r\n#sticky-img {\r\n    position: sticky;\r\n    bottom: 0;\r\n    left: 95%;\r\n    width: 5rem;\r\n    height: 5rem;\r\n    padding: 1rem;\r\n    cursor: pointer;\r\n    z-index: 10;\r\n    display: inline;\r\n}\r\n\r\n#content {\r\n    grid-area: 2 / 1 / 2 / 4;\r\n    display: grid;\r\n    justify-items: center;\r\n    background-color: rgba(179, 179, 179, 0);\r\n    position: relative;\r\n}\r\n\r\nimg {\r\n    width: 40%;\r\n    padding-bottom: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#home-description {\r\n    width: 55%;\r\n    text-align: center;\r\n    font-size: 5rem;\r\n    font-weight: 900;\r\n    border-bottom: .3rem solid black;\r\n    margin: 0;\r\n    padding: 1rem;\r\n    border-radius: 1rem;\r\n    background-color: rgba(255, 255, 255, 0.804);\r\n}\r\n\r\n#backdrop-blur {\r\n    position: absolute;\r\n    height: 200vh;\r\n    width: 100%;\r\n    filter: blur(4px);\r\n    z-index: -1;\r\n}\r\n\r\n#backdrop-menu-blur {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    filter: blur(4px);\r\n    z-index: -1;\r\n}\r\n\r\n#backdrop {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n\r\n.home-why {\r\n    width: 50%;\r\n    text-align: justify;\r\n    font-size: 2rem;\r\n    padding: 5rem;\r\n    padding-left: 25%;\r\n    padding-right: 25%;\r\n    margin: 0;\r\n    background-color: rgba(202, 202, 202, 0.466);\r\n}\r\n\r\n#big-restaurant-img {\r\n    width: 100%;\r\n}\r\n\r\n.home-menu-call {\r\n    text-align: center;\r\n    width: 50%;\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n    color: white;\r\n    text-shadow: .2rem .2rem black;\r\n    margin: 0;\r\n    padding-top: 5rem;\r\n    padding-bottom: 3rem;\r\n}\r\n\r\n.home-menu-background-chef {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 100%;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.home-menu-background {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-items: center;\r\n    justify-content: center;\r\n    align-content: center;\r\n    width: 100%;\r\n    height: 50vh;\r\n}\r\n\r\n.home-menu-background-holder {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(31, 48, 48, 0.238);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-items: center;\r\n    align-content: center;\r\n    justify-content: center;\r\n}\r\n\r\n#home-menu-background-holder-2 {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-items: center;\r\n    align-content: center;\r\n    justify-content: center;\r\n}\r\n\r\n.home-menu-button {\r\n    border: .2rem solid rgb(44, 150, 255);;\r\n    border-radius: 1rem;\r\n    padding: 2rem;\r\n    cursor: pointer;\r\n    background-color: rgba(0, 0, 0, 0.615);\r\n    color: white;\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    width: 20%;\r\n    margin: 0;\r\n    font-weight: 900;\r\n}\r\n\r\n#footer {\r\n    border-top: .1rem solid black;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n /* ---- MENU PAGE FROM HERE DOWN ---- */\r\n\r\n .para {\r\n    font-size: 3rem;\r\n    border-bottom: .5rem solid black;\r\n    background-color: rgba(255, 255, 255, 0.634);\r\n    padding: 1rem;\r\n    border-radius: 1rem;\r\n }\r\n\r\n #menu-list {\r\n    list-style-type: none;\r\n    width: 50%;\r\n }\r\n\r\n li {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border: 0.2rem solid black;\r\n    margin: 2rem;\r\n    background-color: rgba(255, 255, 255, 0.634);\r\n    padding: 1rem;\r\n }\r\n\r\n li > p:first-child {\r\n    font-size: 4rem;\r\n    font-weight: 900;\r\n    padding: 1rem;\r\n    margin-bottom: 0;\r\n    border-bottom: .3rem solid black;\r\n    border-radius: 1rem;\r\n }\r\n\r\n li > p:nth-child(2) {\r\n    border: .2rem solid black;\r\n    border-radius: 1rem;\r\n }\r\n\r\n li > p {\r\n    font-size: 2rem;\r\n    padding: 1rem;\r\n }\r\n\r\n li > img {\r\n    border-radius: 1rem;\r\n    width: 100%;\r\n }\r\n\r\n \r\n /* ---- LOCATION PAGE FROM HERE DOWN ---- */\r\n\r\n #location-image {\r\n    padding-bottom: 3rem;\r\n }\r\n\r\n  /* ---- CONTACT PAGE FROM HERE DOWN ---- */\r\n\r\n  p {\r\n    font-size: 2rem;\r\n  }",""]);const d=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],d=0;d<e.length;d++){var l=e[d],c=r.base?l[0]+r.base:l[0],s=i[c]||0,u="".concat(c," ").concat(s);i[c]=s+1;var m=t(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var h=o(p,r);r.byIndex=d,n.splice(d,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=t(i[a]);n[d].references--}for(var l=r(e,o),c=0;c<i.length;c++){var s=t(i[c]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{function e(e){for(;e.firstChild;)e.removeChild(e.lastChild);window.scrollTo(0,0),e.style.cssText="";let n=document.createElement("p");n.classList.add("para"),n.textContent="Come find us now! Or we will find you hahah lol... unless",e.appendChild(n);let t=document.createElement("img");t.id="location-image",t.src="img/mario.jpg",t.alt="art",e.appendChild(t);let r=document.createElement("div");r.id="footer",r.textContent="This Restaurant is brought to you by a Project assignment from The Odin Project",e.appendChild(r)}function n(e){for(;e.firstChild;)e.removeChild(e.lastChild);window.scrollTo(0,0),e.style.cssText="";let n=document.createElement("div");n.id="backdrop-menu-blur",n.style.cssText="background-image: url(./img/brick-wall.jpg); background-size:  cover;background-repeat: no-repeat;background-position: center;",e.appendChild(n);let t=document.createElement("p");t.classList.add("para"),t.textContent="Our menu is so good  you wont believe it! Well believe IT!",e.appendChild(t);let r=document.createElement("ul");r.id="menu-list",e.appendChild(r);let o=document.createElement("li"),i=document.createElement("p");i.textContent="Mega burger WOW edition!",o.appendChild(i),i=document.createElement("p"),i.textContent="This is the ultimate Big Big BIG burger. Juicy big and delicious, your jaw size does not matter you WILL use a knife to cut down this beast before you eat it, unless you are... never mind. This borgar is sure to make you feel full, satisfied, and filled to the brim with the intricate taste of a good burger through the entire time you are eating it! Truly divine burgar!",o.appendChild(i),r.appendChild(o);let a=document.createElement("img");a.src="img/bargur.jpg",a.alt="art",o.appendChild(a),o=document.createElement("li"),i=document.createElement("p"),i.textContent="Big Spaget!",o.appendChild(i),i=document.createElement("p"),i.textContent="The big spaget challenge, this dish has defeated countless opponents. Its would be predators all lay defeated before its mighty size. Will you take on this momentous challenge and surpass those that came before you and defeat this huge beast?!",o.appendChild(i),r.appendChild(o),a=document.createElement("img"),a.src="img/spaget.jpg",a.alt="art",o.appendChild(a),o=document.createElement("li"),i=document.createElement("p"),i.textContent="The tough Steak Stallion!",o.appendChild(i),i=document.createElement("p"),i.textContent="The tough steak stallion is truly a supreme specimen of unbridled will of a once immense bull! Don't let it fool you, its size may be large but its filled to the brim with enough energy to blow you down by your second bite. Do not take this lightly, you will fail!",o.appendChild(i),r.appendChild(o),a=document.createElement("img"),a.src="img/steak.jpg",a.alt="art",o.appendChild(a);let d=document.createElement("img");d.id="sticky-img",d.src="img/arrow-up.png",d.alt="art",e.appendChild(d),d.addEventListener("click",(()=>{window.scrollTo(0,0)}));let l=document.createElement("div");l.id="footer",l.textContent="This Restaurant is brought to you by a Project assignment from The Odin Project",e.appendChild(l)}function r(t,r){for(;t.firstChild;)t.removeChild(t.lastChild);window.scrollTo(0,0),t.style.cssText="";let o=document.createElement("p");o.id="home-description",o.textContent="We serve food. The good kind. Come. You will love it. Pinky swear!",t.appendChild(o);let i=document.createElement("div");i.id="backdrop-blur",i.style.cssText="background-image: url(./img/brick-wall.jpg); background-size:  cover;background-repeat: no-repeat;background-position: center;",t.appendChild(i);let a=document.createElement("div");a.id="backdrop",t.appendChild(a),o=document.createElement("p"),o.classList.add("home-why"),o.innerHTML="The food here is so good the mothers hate it! Our food is so much better than theirs that their kids just want to eat our food! And not theirs! <b>They feel defeated!</b> And all our chefs are handsome to boot!",a.appendChild(o);let d=document.createElement("img");d.src="img/happy-chef.jpg",d.alt="art",a.appendChild(d),o=document.createElement("p"),o.classList.add("home-why"),o.innerHTML="But don't worry if you are a mother! No no no, trust us, you wont have any problems because you know.. you are just on a whole new level compared to the other moms! You can rest easy haha. In fact, wanna work here?",a.appendChild(o),d=document.createElement("img"),d.id="big-restaurant-img",d.src="img/restaurant.jpg",d.alt="art",t.appendChild(d);let l=document.createElement("div");l.classList.add("home-menu-background"),l.style.cssText="background-image: url(./img/header_img.jpg); background-size:  cover;background-repeat: no-repeat;background-position: center;",t.appendChild(l);let c=document.createElement("div");c.classList.add("home-menu-background-holder"),l.appendChild(c),o=document.createElement("p"),o.classList.add("home-menu-call"),o.innerHTML="Our place is so big you can call your entire family and their entire family thrice over and there would still be half the restaurant left for other guests, its that Big! Very Big! <br> Come and see it for yourself!",c.appendChild(o);let s=document.createElement("div");s.classList.add("home-menu-button"),s.textContent="Scope out our Location!",s.addEventListener("click",(()=>{e(t)})),c.appendChild(s),l=document.createElement("div"),l.classList.add("home-menu-background"),l.style.cssText="background-image: url(./img/header.jpg); background-size:  cover;background-repeat: no-repeat;background-position: center;",t.appendChild(l),c=document.createElement("div"),c.id="home-menu-background-holder-2",l.appendChild(c),o=document.createElement("p"),o.classList.add("home-menu-call"),o.innerHTML="Our food will pierce your happiness levels through the roof! Healthy food, big food, fried food everything is specialized per our chefs.<br> Just check our Menu and see what we are made of at this restaurant!",c.appendChild(o),s=document.createElement("div"),s.classList.add("home-menu-button"),s.textContent="Check out our Menu!",s.addEventListener("click",(()=>{n(t)})),c.appendChild(s);let u=document.createElement("div");u.id="footer",u.textContent="This Restaurant is brought to you by a Project assignment from The Odin Project",t.appendChild(u);let m=document.createElement("img");m.id="sticky-img",m.src="img/arrow-up.png",m.alt="art",t.appendChild(m),m.addEventListener("click",(()=>{window.scrollTo(0,0)}))}var o=t(379),i=t.n(o),a=t(795),d=t.n(a),l=t(569),c=t.n(l),s=t(565),u=t.n(s),m=t(216),p=t.n(m),h=t(589),g=t.n(h),f=t(747),b={};b.styleTagTransform=g(),b.setAttributes=u(),b.insert=c().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=p(),i()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;let y=document.createElement("div");y.id="container",document.body.appendChild(y);let C=document.createElement("div");C.id="header",y.appendChild(C),C.style.cssText="background-image: url(./img/header_image.jpg); background-size:  cover; background-repeat: no-repeat; background-position: center;";let v=document.createElement("div");v.id="landing-page",v.classList.add("header-items"),v.textContent="Home",C.appendChild(v);let w=document.createElement("div");w.id="menu",w.classList.add("header-items"),w.textContent="Menu",C.appendChild(w);let k=document.createElement("div");k.id="location",k.classList.add("header-items"),k.textContent="Location",C.appendChild(k);let E=document.createElement("div");E.id="contact",E.classList.add("header-items"),E.textContent="Contact",C.appendChild(E);let x,T=document.createElement("div");T.id="content",y.appendChild(T),r(T),v.addEventListener("click",(()=>{"Home"!=x&&(r(T),x="Home")})),w.addEventListener("click",(()=>{"Menu"!=x&&(n(T),x="Menu")})),k.addEventListener("click",(()=>{"Location"!=x&&(e(T),x="Location")})),E.addEventListener("click",(()=>{"Contact"!=x&&(function(e){for(;e.firstChild;)e.removeChild(e.lastChild);window.scrollTo(0,0),e.style.cssText="";let n=document.createElement("p");n.classList.add("para"),n.textContent="Contact us! We would love to hear from you! Love you <3",e.appendChild(n),n=document.createElement("p"),n.classList.add("para-contact"),n.textContent="Phone: 80085-4-7143",e.appendChild(n),n=document.createElement("p"),n.classList.add("para-contact"),n.textContent="Fax: 69-2-420",e.appendChild(n),n=document.createElement("p"),n.classList.add("para-contact"),n.textContent="Telegraph: 1337-4-HACKS",e.appendChild(n),n=document.createElement("p"),n.classList.add("para-contact"),n.textContent="Quantum Tunnel: 688787D8FF144C502C7F5CFFAAFE2CC588D86079F9DE88304C26B0CB99CE91C6",e.appendChild(n);let t=document.createElement("div");t.id="footer",t.textContent="This Restaurant is brought to you by a Project assignment from The Odin Project",e.appendChild(t)}(T),x="Contact")}))})()})();