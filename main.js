(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"4a0e4a91-2956-40bc-adae-6e467a654d3f","Content-Type":"application/json"}},t=function(t){return fetch("".concat(e.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:e.headers}).then(o)},r=function(t){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:e.headers}).then(o)},n=function(t){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:e.headers}).then(o)};function o(e){return e.ok?e.json():e.json().then((function(t){return Promise.reject("Ошибка: ".concat(e.status," - ").concat(t.message))}))}function c(e){e.classList.add("popup_is-opened"),e.addEventListener("click",i),document.addEventListener("keydown",a)}function u(e){e.classList.remove("popup_is-opened"),e.removeEventListener("click",i),document.removeEventListener("keydown",a)}function a(e){"Escape"===e.key&&u(document.querySelector(".popup_is-opened"))}function i(e){(e.target.classList.contains("popup__close")||e.target.classList.contains("popup_is-opened"))&&u(document.querySelector(".popup_is-opened"))}var l=document.forms["edit-profile"],p=document.forms["new-place"],s=document.forms["change-avatar"],d=l.querySelector(".button"),_=p.querySelector(".button"),f=s.querySelector(".button"),m=document.querySelector(".places__list"),y=l.querySelector(".popup__input_type_name"),v=l.querySelector(".popup__input_type_description"),S=p.querySelector(".popup__input_type_card-name"),h=p.querySelector(".popup__input_type_url"),b=s.querySelector(".popup__input_type_url_avatar"),q=document.querySelector(".profile__title"),g=document.querySelector(".profile__description"),C=document.querySelector(".profile__image");function k(e,t,r){t.textContent=e?"Сохранение...":r}var E=document.querySelector("#card-template").content,L=document.querySelector(".popup_type_image"),x=L.querySelector(".popup__image"),A=L.querySelector(".popup__caption");function I(e,t){e.likeCounter.textContent=t.likes.length,t.likes.some((function(t){return t._id===e.userId}))?e.likeButton.classList.add("card__like-button_is-active"):e.likeButton.classList.remove("card__like-button_is-active")}function B(e,t,o){var u=E.querySelector(".card").cloneNode(!0),a=u.querySelector(".card__delete-button"),i=u.querySelector(".card__like-button"),l=u.querySelector(".card__image"),p=u.querySelector(".card__title"),s=u.querySelector(".card__like-counter");return l.setAttribute("src",e.link),l.setAttribute("alt",e.name),s.textContent=e.likes.length,u.querySelector(".card__title").textContent=e.name,e.likes.some((function(e){return e._id==o.userId}))&&i.classList.add("card__like-button_is-active"),o.userId==e.owner._id?a.addEventListener("click",(function(){return t(u,e._id)})):a.style.display="none",l.addEventListener("click",(function(){!function(e){e.image.src=e.src,e.image.alt=e.caption,e.description.textContent=e.caption,c(e.element)}({element:L,src:l.src,caption:p.textContent,image:x,description:A})})),function(e,t,o,c){e.addEventListener("click",(function(u){var a={cardId:t._id,likeButton:e,likeCounter:c,userId:o};e.classList.contains("card__like-button_is-active")?function(e){n(e.cardId).then((function(t){return I(e,t)})).catch((function(e){return console.error("Ошибка: ".concat(e))}))}(a):function(e){r(e.cardId).then((function(t){return I(e,t)})).catch((function(e){return console.error("Ошибка: ".concat(e))}))}(a)}))}(i,e,o.userId,s),u}function U(e,r){r&&t(r).catch((function(e){return console.log(e)})),e.remove()}var w=function(e,t,r,n){var o=e.querySelector(".".concat(t.id,"-error"));o.textContent=r,o.classList.add(n.errorClass),O(e,n)},j=function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));n.classList.remove(r.errorClass),n.textContent="",D(e,r)?O(e,r):T(e,r)},O=function(e,t){e.querySelector(t.submitButtonSelector).disabled=!0},T=function(e,t){e.querySelector(t.submitButtonSelector).disabled=!1},D=function(e,t){return Array.from(e.querySelectorAll(t.inputSelector)).some((function(e){return!e.validity.valid}))};function P(e,t){Array.from(e.querySelectorAll(t.inputSelector)).forEach((function(r){j(e,r,t)})),O(e,t)}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var N,J=document.querySelector(".profile"),H=document.querySelector(".popup_type_edit"),z=H.querySelector(".popup__input_type_name"),$=H.querySelector(".popup__input_type_description"),F=document.querySelector(".popup_type_new-card"),G=J.querySelector(".profile__edit-button"),K=J.querySelector(".profile__add-button"),Q=document.querySelector(".popup_type_change-avatar"),R=document.querySelector(".overlay"),V="";Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(o),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(o)]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c,u,a=[],i=!0,l=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=c.call(r)).done)&&(a.push(n.value),a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],c=n[1];V=o._id,q.textContent=o.name,g.textContent=o.about,C.style.backgroundImage="url(".concat(o.avatar,")"),function(e,t){e.forEach((function(e){var r=B(e,U,{userId:t});m.append(r)}))}(c,V)})).catch((function(e){return console.log(e)})),N={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_active"},Array.from(document.querySelectorAll(N.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){Array.from(e.querySelectorAll(t.inputSelector)).forEach((function(r){r.addEventListener("input",(function(){!function(e,t,r){t.validity.valid?j(e,t,r):t.validity.patternMismatch?w(e,t,t.dataset.errorMessage,r):w(e,t,t.validationMessage,r)}(e,r,t)}))}))}(e,N)})),G.addEventListener("click",(function(){!function(e){e.name.value=q.textContent,e.description.value=g.textContent,c(e.element)}({name:z,description:$,element:H}),P(l,{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_active"})})),R.addEventListener("click",(function(){return c(Q)})),K.addEventListener("click",(function(){return c(F)})),l.addEventListener("submit",(function(t){t.preventDefault();var r,n,c=t.target.querySelector(".button").textContent;k(!0,d),(r=y.value,n=v.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:n})}).then(o)).then((function(e){q.textContent=e.name,g.textContent=e.about})).catch((function(e){return console.log(e)})).finally((function(){k(!1,d,c),u(document.querySelector(".popup_is-opened"))}))})),p.addEventListener("submit",(function(t){(function(t,r){t.preventDefault();var n,c,a=t.target.querySelector(".button").textContent;k(!0,_),(n=S.value,c=h.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:n,link:c})}).then(o)).then((function(e){var t=B(e,U,{userId:r});m.prepend(t)})).catch((function(e){return console.log(e)})).finally((function(){k(!1,_,a),u(document.querySelector(".popup_is-opened")),t.target.reset()}))})(t,V),P(p,{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_active"})})),s.addEventListener("submit",(function(t){(function(t){t.preventDefault();var r,n=t.target.querySelector(".button").textContent;k(!0,f),(r=b.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(o)).then((function(e){C.style.backgroundImage="url(".concat(e.avatar,")")})).catch((function(e){return console.log(e)})).finally((function(){k(!1,f,n),u(document.querySelector(".popup_is-opened")),t.target.reset()}))})(t),P(s,{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_active"})}))})();