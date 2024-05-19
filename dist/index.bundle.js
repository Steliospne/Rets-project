(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>l});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  /* Spinner variables */\n  --container-size: 800px;\n  --diameter: calc(var(--container-size)/2);\n  \n  --number-of-slices: 6;\n  --radius: calc(var(--diameter) / 2);\n  --circumference: 6.283185307 * var(--radius);\n  --slice-height: calc(var(--circumference) / var(--number-of-slices));\n  --slice-offset: calc(var(--slice-height) / 2);\n  --slice-color: #095b8d;\n  --slice-color-even: #063c5d;\n  --rotation: 360deg / var(--number-of-slices);\n\n  /* Form variables */\n  --form-wrapper-width: 350px;\n\n}\nbody {\n  font-family: sans-serif;\n  background: #f6f7f9;\n}\n.container {\n  position: relative;\n  max-width: var(--container-size);\n  margin: 2rem auto;\n}\n.spinner-table {\n  height: calc(var(--diameter) - 2px);\n  width: calc(var(--diameter) - 2px);\n  position: relative;\n  border-radius: 100%;\n  overflow: hidden;\n}\n.dial {\n  height: 100%;\n  transition: all 5s ease-out;\n  animation-fill-mode: forwards;\n  animation-timing-function: linear;\n}\n.dial.spinning {\n  animation-duration: 5s;\n  animation-timing-function: cubic-bezier(0.44, -0.205, 0, 1.13);\n  animation-name: spinning;\n}\n.dial:before {\n  content: "";\n  text-align: center;\n  display: block;\n  line-height: 60px;\n  position: absolute;\n  height: 40px;\n  width: 40px;\n  background: white;\n  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);\n  top: 50%;\n  left: 50%;\n  margin-top: -20px;\n  margin-left: -20px;\n  border-radius: 100%;\n  z-index: 200;\n}\n.dial .slice {\n  z-index: 150;\n  position: absolute;\n  top: calc(50% - var(--slice-offset));\n  height: var(--slice-height);\n  left: 50%;\n  width: 50%;\n  color: white;\n  text-align: right;\n  padding-right: 10px;\n  display: block;\n  transform-origin: left center;\n  /*&:nth-child(7) {\n              transform: rotate(180deg);\n          }\n          &:nth-child(8) {\n              transform: rotate(210deg);\n          }\n          &:nth-child(9) {\n              transform: rotate(240deg);\n          }\n          &:nth-child(10) {\n              transform: rotate(270deg);\n          }\n          &:nth-child(11) {\n              transform: rotate(300deg);\n          }\n          &:nth-child(12) {\n              transform: rotate(330deg);\n          } */\n}\n.dial .slice:before,\n.dial .slice:after {\n  content: "";\n  display: block;\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n.dial .slice:before {\n  margin-bottom: -1px;\n  margin-top: -2px;\n  border-width: 0 0 calc(var(--slice-height) / 2 + 4px) var(--radius);\n  border-color: transparent transparent var(--slice-color) transparent;\n}\n.dial .slice:after {\n  margin-top: -1px;\n  margin-bottom: -2px;\n  border-width: 0 var(--radius) calc(var(--slice-height) / 2 + 18px) 0;\n  border-color: transparent var(--slice-color) transparent transparent;\n}\n.dial .slice:nth-child(even):after {\n  border-color: transparent var(--slice-color-even) transparent transparent;\n}\n.dial .slice:nth-child(even):before {\n  border-color: transparent transparent var(--slice-color-even) transparent;\n}\n.dial .slice .label {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 70%;\n  line-height: var(--slice-height);\n  padding-top: 1px;\n  padding-bottom: 1px;\n  font-size: 16px;\n  text-align: right;\n  padding-left: 20px;\n}\n.dial .slice:nth-child(1) {\n  transform: rotate(0deg);\n}\n.dial .slice:nth-child(2) {\n  transform: rotate(60deg);\n}\n.dial .slice:nth-child(3) {\n  transform: rotate(120deg);\n}\n.dial .slice:nth-child(4) {\n  transform: rotate(180deg);\n}\n.dial .slice:nth-child(5) {\n  transform: rotate(240deg);\n}\n.dial .slice:nth-child(6) {\n  transform: rotate(300deg);\n}\n@keyframes rotating {\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.arrow {\n  position: absolute;\n  height: 30px;\n  width: 50px;\n  left: calc(var(--diameter) + 30px);\n  z-index: 500;\n  display: block;\n  top: 50%;\n  margin-top: -15px;\n  transform-origin: center right;\n}\n.pointer {\n  z-index: 500;\n  display: block;\n  height: 30px;\n  width: 50px;\n}\n.pointer:before {\n  content: "";\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 0 15px 50px;\n  border-color: transparent transparent #c27028 transparent;\n}\n.pointer:after {\n  content: "";\n  display: block;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 50px 15px 0;\n  border-color: transparent #c27028 transparent transparent;\n}\n.board {\n  position: relative;\n  background: white;\n  padding: 50px;\n}\nbutton#spin {\n  background: #c27028;\n  border: 0;\n  padding: 15px 50px;\n  color: white;\n  position: absolute;\n  top: 50%;\n  margin-top: -20px;\n  right: 20%;\n  cursor: pointer;\n  width: 125px;\n}\n\n/* Form rules */\n.form-wrapper {\n  width: var(--form-wrapper-width);\n  margin: auto;\n  position: relative;\n  top: calc(50dvh - var(--form-wrapper-width)/2);\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 25px;\n  border: solid rgb(153, 153, 153);\n  border-radius: 8px;\n  width: 330px;\n  box-sizing: border-box;\n}\n\ninput {\n  font-size: 1.3rem;\n  width: 250px;\n  height: 25px;\n  box-sizing: border-box;\n}\nspan {\n  display: flex;\n}\nspan.input {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 255px auto;\n}\n.condition {\n  color: red;\n  font-size: 21px;\n}\n\ninput:invalid {\n  background-color: rgb(255, 202, 202);\n  border-color: red;\n}\n\ninput:valid {\n  background-color: rgb(202, 255, 206);\n  border-color: green;\n}\n\n.error {\n  width: 250px;\n  font-weight: 600;\n  font-size: 90%;\n  color: white;\n  background-color: #900;\n  border-radius: 0 0 5px 5px;\n  box-sizing: border-box;\n}\n\nform > div > button {\n  width: 140px;\n  position: relative;\n  background: #c27028;\n  border: 0;\n  padding: 15px 50px;\n  color: white;\n  left: 67px;\n}\n\ndialog[open] {\n  opacity: 1;\n  transform: scaleY(1);\n}\n\ndialog {\n  animation: fadeIn 1s;\n  font-size: 1.5rem;\n  background-color: #323443;\n  color: SteelBlue;\n  padding: 30px;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  position: absolute;\n  opacity: 0;\n  transform: scaleY(0);\n  transition: opacity 0.7s ease-out, transform 0.7s ease-out,\n    overlay 0.7s ease-out allow-discrete, display 0.7s ease-out allow-discrete;\n}\n\ndialog div {\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n}\n\ndialog button {\n  border: none;\n  background-color: steelblue;\n  font-size: 1.3rem;\n  color: #cbcaca;\n  text-shadow: black 1px 0 10px;\n  padding: 10px;\n  cursor: pointer;\n}\n\ndialog button:hover {\n  color: #e1e0e0;\n  background-color: rgb(57, 107, 147);\n}\n\ndialog::backdrop {\n  background-color: rgb(0 0 0 / 0%);\n  transition: display 0.7s allow-discrete, overlay 0.7s allow-discrete,\n    background-color 0.7s;\n}\n\ndialog[open]::backdrop {\n  background-color: rgb(0 0 0 / 45%);\n  backdrop-filter: blur(4px);\n}\n\n@media only screen and (max-width: 450px) {\n  :root {\n    --container-size: 350px;\n    --diameter: var(--container-size);\n  }\n\n  .board {\n    position: relative;\n    background: white;\n    padding: 50px 0;\n}\n\n  .arrow {\n    left: calc(var(--diameter) + -40px);\n  }\n\n  button#spin {\n    top: unset;\n    right: calc(50% - (125px/2));\n  }\n}',""]);const l=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);r&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],l=0;l<n.length;l++){var s=n[l],d=r.base?s[0]+r.base:s[0],c=i[d]||0,p="".concat(d," ").concat(c);i[d]=c+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=o(m,r);r.byIndex=l,e.splice(l,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var l=t(i[a]);e[l].references--}for(var s=r(n,o),d=0;d<i.length;d++){var c=t(i[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),a=t.n(i),l=t(56),s=t.n(l),d=t(540),c=t.n(d),p=t(113),u=t.n(p),m=t(208),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=c(),e()(m.A,g),m.A&&m.A.locals&&m.A.locals;class h{static#n=["Bonus Donut","X","Spin Again","2x Bonus Donut","X","Spin Again"];static result;static#e=6;static generate(n=this.#e,e=this.#n){const t=document.createElement("div");t.classList.add("container"),t.innerHTML='\n    <div class="board">\n          <div class="spinner-table">\n              <div class="dial">\n              </div>\n          </div>\n          <div class="arrow">\n              <span class="pointer"></span>\n          </div>\n      </div>\n      \n      <div class="content-container">\n          <div class="pre">\n              <button id="spin">Spin</button>\n          </div>\n    </div>';const r=t.querySelector("#spin"),o=t.querySelector(".dial");for(o.addEventListener("animationend",h.showMessage);0!==n;){let r=document.createElement("div");r.classList.add("slice");let o=document.createElement("div");o.classList.add("label"),o.textContent=e[n-1],r.appendChild(o),t.getElementsByClassName("dial")[0].appendChild(r),n--}r.addEventListener("click",(()=>{let[n,e]=function(n=1){const e=1===n?.15:n[0],t=1===n?.05:n[1],r=1===n?.45:n[2];let o,i="x",a=!0,l=Math.floor(28*Math.random())*(0===Math.round(Math.random())?1:-1);return o=Math.random(),o<t?(o=240+l,a=!1,i="2x Bonus Donut"):o<e?(o=60+l,a=!1,i="Bonus Donut"):o<r?(o=180+l,a=!0,i="Spin Again"):(o=300+l,a=!1),[o+720,i]}();h.result=e,h.addSpinAnimation(n),o.classList.add("spinning")})),document.body.appendChild(t)}static addSpinAnimation(n){let e=null;const t=`\n    @keyframes spinning {\n        from {\n            transform: rotate(0);\n        }\n        to {\n            transform: rotate(${n}deg);\n        }\n    }\n        `;e||(e=document.createElement("style"),document.head.appendChild(e)),e.sheet.insertRule(t,e.length)}static showMessage(){const n=document.querySelector("#spin"),e=document.querySelector(".dial"),t=document.querySelector("dialog p");"Spin Again"===h.result?(t.textContent="You get to spin again!",document.querySelector("dialog").showModal(),document.querySelector("dialog").value=h.result,e.classList.remove("spinning")):("Bonus Donut"===h.result||"2xBonus Donut"===h.result?t.textContent=`Congrats! You got ${h.result}!`:t.textContent="Unfortunate, better luck next time!",document.querySelector("dialog").showModal(),n.style.pointerEvents="none")}}class b{static create(){const n=document.createElement("div");n.classList.add("form-wrapper"),n.innerHTML='\n            <form>\n            <div>\n                <label for="name">Name: </label>\n                <span class="input">\n                    <input type="text" id="name" name="fullName" placeholder="Name"/>\n                    <p class="condition"></p>\n                </span>\n                <span class="error" aria-live="polite"></span>\n            </div>\n            <div>\n                <label for="email">Email: </label>\n                <span class="input">\n                    <input type="email" id="email" name="email" placeholder="Email"/>\n                    <p class="condition"></p>\n                </span>\n                <span class="error" aria-live="polite"></span>\n            </div>\n            <div>\n                <label for="phone">Phone: </label>\n                <span class="input">\n                    <input type="tel" id="phone" name="phone" placeholder="69...."/>\n                    <p class="condition"></p>\n                </span>\n                <span class="error" aria-live="polite"></span>\n            </div>\n            <div>\n                <button type="submit">Submit</button>\n            </div>\n            </form>\n                ',document.querySelector("body").append(n),b.validation()}static validation(){const[n,e,t]=[...document.querySelectorAll("input")],r=(document.querySelector("#cancel"),{fullName:[/\d/,"4"],email:["^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$","8"],phone:[/^(\+?\d{1,3})?[\s-]?(\(?\d{1,4}\)?)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/,"10"]});n.addEventListener("input",(function(){const e=document.getElementsByClassName("error")[0];r.fullName[0].test(n.value)?(e.textContent="A name cannot contain numbers in its name.",n.setCustomValidity("Invalid Input."),n.nextElementSibling.innerHTML="&#x2717;",n.nextElementSibling.style.color="red"):n.value.length<+r.fullName[1]&&n.value.length>0?(e.textContent=`Shortest name name is 4 characters. You are at ${n.value.length}.`,n.setCustomValidity("Too short."),n.nextElementSibling.innerHTML="&#x2717;",n.nextElementSibling.style.color="red"):(e.textContent="",n.value.length>0?(n.setCustomValidity(""),n.nextElementSibling.innerHTML="&#10003;",n.nextElementSibling.style.color="green"):(n.nextElementSibling.innerHTML="&#x2717;",n.nextElementSibling.style.color="red"))})),e.addEventListener("input",(function(){const n=document.getElementsByClassName("error")[1];e.value.length<+r.email[1]&&e.value.length>0?(n.textContent=`Email must be at least 8 characters. You are at ${e.value.length}.`,e.setCustomValidity("Too short."),e.nextElementSibling.innerHTML="&#x2717;",e.nextElementSibling.style.color="red"):!RegExp(r.email[0]).test(e.value)&&e.value.length>0?(n.textContent="Thats not a valid email (example@domain.com).",e.setCustomValidity("Not an email."),e.nextElementSibling.innerHTML="&#x2717;",e.nextElementSibling.style.color="red"):(n.textContent="",e.value.length>0?(e.setCustomValidity(""),e.nextElementSibling.innerHTML="&#10003;",e.nextElementSibling.style.color="green"):(e.nextElementSibling.innerHTML="&#x2717;",e.nextElementSibling.style.color="red"))})),t.addEventListener("input",(function(){const n=document.getElementsByClassName("error")[2];t.value.length>0&&!RegExp(r.phone[0]).test(t.value)?(n.textContent="Thats not a valid phone number.",t.setCustomValidity("Not a phone number."),t.nextElementSibling.innerHTML="&#x2717;",t.nextElementSibling.style.color="red"):t.value.length<+r.phone[1]?(n.textContent=`Phone must be at least 10 characters. You are at ${t.value.length}.`,t.setCustomValidity("Too short."),t.nextElementSibling.innerHTML="&#x2717;",t.nextElementSibling.style.color="red"):(n.textContent="",t.value.length>0?(t.setCustomValidity(""),t.nextElementSibling.innerHTML="&#10003;",t.nextElementSibling.style.color="green"):(t.nextElementSibling.innerHTML="&#x2717;",t.nextElementSibling.style.color="red"))}))}}h.generate();const f=document.querySelector("dialog"),v=document.querySelector("#cancel"),x=document.querySelector("#confirmBtn");v.addEventListener("click",(()=>{f.close()})),x.addEventListener("click",(function(){f.close(),"Spin Again"!==f.value&&(document.body.innerHTML="",b.create())}))})()})();