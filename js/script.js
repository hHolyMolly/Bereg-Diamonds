function dynamicAdaptive(){function a(a){this.type=a}a.prototype.init=function(){const a=this;this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=document.querySelectorAll("[data-da]");for(let a=0;a<this.nodes.length;a++){const b=this.nodes[a],c=b.dataset.da.trim(),d=c.split(","),e={};e.element=b,e.parent=b.parentNode,e.destination=document.querySelector(d[0].trim()),e.breakpoint=d[1]?d[1].trim():"767",e.place=d[2]?d[2].trim():"last",e.index=this.indexInParent(e.parent,e.element),this.оbjects.push(e)}this.arraySort(this.оbjects),this.mediaQueries=Array.prototype.map.call(this.оbjects,function(a){return"("+this.type+"-width: "+a.breakpoint+"px),"+a.breakpoint},this),this.mediaQueries=Array.prototype.filter.call(this.mediaQueries,function(a,b,c){return Array.prototype.indexOf.call(c,a)===b});for(let b=0;b<this.mediaQueries.length;b++){const c=this.mediaQueries[b],d=String.prototype.split.call(c,","),e=window.matchMedia(d[0]),f=d[1],g=Array.prototype.filter.call(this.оbjects,function(a){return a.breakpoint===f});e.addListener(function(){a.mediaHandler(e,g)}),this.mediaHandler(e,g)}},a.prototype.mediaHandler=function(a,b){if(a.matches)for(let a=0;a<b.length;a++){const c=b[a];c.index=this.indexInParent(c.parent,c.element),this.moveTo(c.place,c.element,c.destination)}else for(let a=0;a<b.length;a++){const c=b[a];c.element.classList.contains(this.daClassname)&&this.moveBack(c.parent,c.element,c.index)}},a.prototype.moveTo=function(a,b,c){return b.classList.add(this.daClassname),"last"===a||a>=c.children.length?void c.insertAdjacentElement("beforeend",b):"first"===a?void c.insertAdjacentElement("afterbegin",b):void c.children[a].insertAdjacentElement("beforebegin",b)},a.prototype.moveBack=function(a,b,c){b.classList.remove(this.daClassname),a.children[c]===void 0?a.insertAdjacentElement("beforeend",b):a.children[c].insertAdjacentElement("beforebegin",b)},a.prototype.indexInParent=function(a,b){const c=Array.prototype.slice.call(a.children);return Array.prototype.indexOf.call(c,b)},a.prototype.arraySort=function(a){return"min"===this.type?void Array.prototype.sort.call(a,function(c,a){return c.breakpoint===a.breakpoint?c.place===a.place?0:"first"===c.place||"last"===a.place?-1:"last"===c.place||"first"===a.place?1:c.place-a.place:c.breakpoint-a.breakpoint}):void Array.prototype.sort.call(a,function(c,a){return c.breakpoint===a.breakpoint?c.place===a.place?0:"first"===c.place||"last"===a.place?1:"last"===c.place||"first"===a.place?-1:a.place-c.place:a.breakpoint-c.breakpoint})};const b=new a("max");b.init()}dynamicAdaptive();function scrollHeader(){const a=document.querySelector(".header"),b=new IntersectionObserver(function(b){b[0].isIntersecting?a.classList.remove("_scroll"):a.classList.add("_scroll")});b.observe(a)}scrollHeader();function weBuySlider(){if(document.querySelector(".we-buy__slider")){function a(){const a=document.querySelectorAll(".we-buy-slider__slide");1024.2<window.innerWidth&&7<a.length?b():c.style.display="none",768.2<window.innerWidth&&5<a.length?b():c.style.display="none",768.2>window.innerWidth&&3<a.length?b():c.style.display="none"}function b(){c.style.display="flex",new Swiper(".we-buy__slider",{slidesPerView:3,spaceBetween:30,speed:800,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1024.2:{slidesPerView:7},768.2:{slidesPerView:5}}})}const c=document.querySelector(".we-buy__slider").querySelector(".we-buy-slider__arrows");document.addEventListener("DOMContentLoaded",a),window.addEventListener("resize",a)}}weBuySlider(),document.querySelector(".customers-said__slider")&&new Swiper(".customers-said__slider",{slidesPerView:1,spaceBetween:20,grabCursor:!0,speed:800,loop:!0,navigation:{nextEl:".customers-said-slider__arrow.swiper-button-next",prevEl:".customers-said-slider__arrow.swiper-button-prev"},breakpoints:{992.2:{slidesPerView:3},480.2:{slidesPerView:2}}}),document.querySelector(".video-reviews__slider")&&new Swiper(".video-reviews__slider",{spaceBetween:20,grabCursor:!0,speed:800,loop:!0,navigation:{nextEl:".video-reviews-slider__arrow_next.swiper-button-next",prevEl:".video-reviews-slider__arrow_prev.swiper-button-prev"},pagination:{el:".video-reviews-slider__pagination.swiper-pagination",clickable:!0,renderBullet:function(a,b){return"<span class=\""+b+"\">"+(a+1)+"</span>"}},breakpoints:{768.2:{}}}),document.querySelector(".blog-section-slider")&&new Swiper(".blog-section-slider",{slidesPerView:1,spaceBetween:30,grabCursor:!0,speed:800,loop:!0,navigation:{nextEl:".blog-section-slider__arrow.swiper-button-next",prevEl:".blog-section-slider__arrow.swiper-button-prev"},breakpoints:{992.2:{slidesPerView:3},480.2:{slidesPerView:2}}});function mySpollers(){const a=document.querySelectorAll("[data-spollers]");if(0<a.length){function c(a,b=!1){a.forEach(a=>{a=b?a.item:a,b.matches||!b?(a.classList.add("_init"),e(a),a.addEventListener("click",f)):(a.classList.remove("_init"),e(a,!1),a.removeEventListener("click",f))})}function e(a,b=!0){const c=a.querySelectorAll("[data-spoller]");0<c.length&&c.forEach(a=>{b?(a.removeAttribute("tabindex"),!a.classList.contains("_active")&&(a.nextElementSibling.hidden=!0)):(a.setAttribute("tabindex","-1"),a.nextElementSibling.hidden=!1)})}function f(a){const b=a.target;if(b.hasAttribute("data-spoller")||b.closest("[data-spoller]")){const c=b.hasAttribute("data-spoller")?b:b.closest("[data-spoller]"),e=c.closest("[data-spollers]"),f=!!e.hasAttribute("data-one-spoller");e.querySelectorAll("._slide").length||(f&&!c.classList.contains("_active")&&g(e),c.classList.toggle("_active"),d(c.nextElementSibling,400)),a.preventDefault()}}function g(a){const c=a.querySelector("[data-spoller]._active");c&&(c.classList.remove("_active"),b(c.nextElementSibling,400))}const h=Array.from(a).filter(function(a){return!a.dataset.spollers.split(",")[0]});0<h.length&&c(h);const i=Array.from(a).filter(function(a){return a.dataset.spollers.split(",")[0]});if(0<i.length){const a=[];i.forEach(b=>{const c=b.dataset.spollers,d={},e=c.split(",");d.value=e[0],d.type=e[1]?e[1].trim():"max",d.item=b,a.push(d)});let b=a.map(function(a){return"("+a.type+"-width: "+a.value+"px),"+a.value+","+a.type});b=b.filter(function(a,b,c){return c.indexOf(a)===b}),b.forEach(b=>{const d=b.split(","),e=d[1],f=d[2],g=window.matchMedia(d[0]),h=a.filter(function(a){if(a.value===e&&a.type===f)return!0});g.addListener(function(){c(h,g)}),c(h,g)})}}let b=(a,b=400)=>{a.classList.contains("_slide")||(a.classList.add("_slide"),a.style.transitionProperty="height, margin, padding",a.style.transitionDuration=b+"ms",a.style.height=a.offsetHeight+"px",a.offsetHeight,a.style.overflow="hidden",a.style.height=0,a.style.paddingTop=0,a.style.paddingBottom=0,a.style.marginTop=0,a.style.marginBottom=0,window.setTimeout(()=>{a.hidden=!0,a.style.removeProperty("height"),a.style.removeProperty("padding-top"),a.style.removeProperty("padding-bottom"),a.style.removeProperty("margin-top"),a.style.removeProperty("margin-bottom"),a.style.removeProperty("overflow"),a.style.removeProperty("transition-duration"),a.style.removeProperty("transition-property"),a.classList.remove("_slide")},b))},c=(a,b=400)=>{if(!a.classList.contains("_slide")){a.classList.add("_slide"),a.hidden&&(a.hidden=!1);let c=a.offsetHeight;a.style.overflow="hidden",a.style.height=0,a.style.paddingTop=0,a.style.paddingBottom=0,a.style.marginTop=0,a.style.marginBottom=0,a.offsetHeight,a.style.transitionProperty="height, margin, padding",a.style.transitionDuration=b+"ms",a.style.height=c+"px",a.style.removeProperty("padding-top"),a.style.removeProperty("padding-bottom"),a.style.removeProperty("margin-top"),a.style.removeProperty("margin-bottom"),window.setTimeout(()=>{a.style.removeProperty("height"),a.style.removeProperty("overflow"),a.style.removeProperty("transition-duration"),a.style.removeProperty("transition-property"),a.classList.remove("_slide")},b)}},d=(a,d=400)=>a.hidden?c(a,d):b(a,d)}mySpollers();const mains=document.querySelectorAll("[data-select-main]");mains.forEach(a=>{a.addEventListener("click",b=>{if(b.target.closest("[data-select-btn]")){const a=b.target.closest("[data-select-main]"),c=document.querySelectorAll("[data-select-main]");c.forEach(b=>{b===a||(b.querySelector("[data-select-body]").classList.remove("_active"),b.querySelector("[data-select-arrow]").classList.remove("_active"),b.querySelector("[data-select-btn]").classList.remove("_active"))})}if(b.target.closest("[data-select-btn]")&&(a.querySelector("[data-select-body]").classList.toggle("_active"),a.querySelector("[data-select-btn]").classList.toggle("_active"),a.querySelector("[data-select-arrow]").classList.toggle("_active")),b.target.closest("[data-selected]")){const c=b.target.closest("[data-selected]").innerHTML;a.querySelector("[data-select-btn-name]").innerHTML=c,a.querySelector("[data-select-body]").classList.remove("_active"),a.querySelector("[data-select-arrow]").classList.remove("_active"),a.querySelector("[data-select-btn]").classList.remove("_active")}})}),document.addEventListener("click",a=>{if(!a.target.closest("[data-select-btn]")&&!a.target.closest("[data-select-body]")){const a=document.querySelectorAll("[data-select-main]");a.forEach(a=>{a.querySelector("[data-select-body]").classList.remove("_active"),a.querySelector("[data-select-arrow]").classList.remove("_active"),a.querySelector("[data-select-btn]").classList.remove("_active")})}});function myPopups(){const a=document.querySelectorAll("[data-popup-open]"),b=document.querySelectorAll(".lock-padding"),c=document.body;let d=!0;const e=500;if(a){function f(a){if(a&&d){const b=document.querySelector(".popup._active");b?g(b,!1):h(),a.classList.add("_active"),a.addEventListener("click",function(a){a.target.closest(".popup__body")||g(a.target.closest(".popup"))})}}function g(a,b=!0){d&&(a.classList.remove("_active"),b&&i())}function h(){const a=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";b&&b.forEach(b=>{b.style.paddingRight=a}),c.style.paddingRight=a,c.classList.add("_lock-scroll"),d=!1,setTimeout(()=>{d=!0},e)}function i(){setTimeout(()=>{b&&b.forEach(a=>{a.style.paddingRight="0px"}),c.style.paddingRight="0px",c.classList.remove("_lock-scroll")},e),d=!1,setTimeout(()=>{d=!0},e)}a.forEach(a=>{a.addEventListener("click",function(a){a.preventDefault();const b=this.getAttribute("data-popup"),c=document.getElementById(b);f(c);const d=document.querySelectorAll("input, textarea");0<d.length&&d.forEach(a=>{a.value="",document.querySelectorAll(".field__textarea-value").forEach(a=>{a.innerText="0"})})})});const j=document.querySelectorAll("[data-popup-close]");j.forEach(a=>{a.addEventListener("click",function(b){g(a.closest(".popup"))})}),document.addEventListener("keydown",function(a){if("Escape"===a.code){const a=document.querySelector(".popup._active");g(a)}}),function(){Element.prototype.closest||(Element.prototype.closest=function(a){for(var b=this;b;){if(b.matches(a))return b;b=b.parentElement}return null})}(),function(){Element.prototype.matches||(Element.prototype.mathes=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector)}()}}myPopups();function myPagination(){const a=document.querySelectorAll("[data-main]");a.forEach(a=>{let b=+a.querySelector("[data-pagination]").getAttribute("data-pagination");const c=a.querySelectorAll("[data-content]"),d=a.querySelectorAll("[data-content]").length;c.forEach(()=>{const b=a.querySelectorAll("[data-btn]").length,c=b+1,d=a.querySelector("[data-billet]"),e=d.cloneNode();e.removeAttribute("data-billet"),e.setAttribute("data-btn",`${c}`),e.innerHTML=c;const f=a.querySelector("[data-btns]");f.appendChild(e)});const e=a.querySelector("[data-btn]");e.classList.add("_active"),e.setAttribute("data-arrows",""),a.addEventListener("click",c=>{if(c.target.closest("[data-btn]")){const d=c.target.getAttribute("data-btn"),e=`[data-content="${d}"]`;a.querySelector(e).classList.add("_active"),c.target.classList.add("_active"),c.target.setAttribute("data-arrows","");const f=a.querySelectorAll("[data-content]");f.forEach(a=>{a.getAttribute("data-content")===d||a.classList.remove("_active")});const g=a.querySelectorAll("[data-btn]");g.forEach(a=>{a.getAttribute("data-btn")===d||(a.classList.remove("_active"),a.removeAttribute("data-arrows"))});const h=a.querySelectorAll("[data-content]").length,i=+d-1,j=+d+(b-2),k=b-2,l=h-k;if(+c.target.getAttribute("data-btn")>l){const c=a.querySelectorAll("[data-btn]");c.forEach(c=>{const d=+a.querySelectorAll("[data-content]").length-b;+c.getAttribute("data-btn")>d?c.classList.add("_visible"):c.classList.remove("_visible")})}else if(1===+c.target.getAttribute("data-btn"));else{const b=a.querySelectorAll("[data-btn]");b.forEach(a=>{+a.getAttribute("data-btn")>=i&&a.getAttribute("data-btn")<=j?a.classList.add("_visible"):a.classList.remove("_visible")})}const m=a.getBoundingClientRect().top;window.scrollBy({top:m,behavior:"smooth"})}if(c.target.closest("[data-right]")){const c=a.querySelector("[data-arrows]");if(+c.getAttribute("data-btn")===d);else{const c=a.querySelector("[data-arrows]");c.classList.remove("_active"),c.removeAttribute("data-arrows"),c.nextElementSibling.classList.add("_active"),c.nextElementSibling.setAttribute("data-arrows","");const d=c.nextElementSibling,e=d.getAttribute("data-btn"),f=`[data-content="${e}"]`;a.querySelector(f).classList.add("_active");const g=a.querySelectorAll("[data-content]");g.forEach(a=>{a.getAttribute("data-content")===e||a.classList.remove("_active")});const h=a.querySelectorAll("[data-content]").length,i=+e-1,j=+e+(b-2),k=b-2,l=h-k;if(+d.getAttribute("data-btn")>l){const c=a.querySelectorAll("[data-btn]");c.forEach(c=>{const d=+a.querySelectorAll("[data-content]").length-b;+c.getAttribute("data-btn")>d?c.classList.add("_visible"):c.classList.remove("_visible")})}else{const b=a.querySelectorAll("[data-btn]");b.forEach(a=>{+a.getAttribute("data-btn")>=i&&a.getAttribute("data-btn")<=j?a.classList.add("_visible"):a.classList.remove("_visible")})}}const e=a.getBoundingClientRect().top;window.scrollBy({top:e,behavior:"smooth"})}if(c.target.closest("[data-left]")){const c=a.querySelector("[data-arrows]");if(1!==+c.getAttribute("data-btn")&&2!==+c.getAttribute("data-btn")){const c=a.querySelector("[data-arrows]");c.classList.remove("_active"),c.removeAttribute("data-arrows"),c.previousElementSibling.classList.add("_active"),c.previousElementSibling.setAttribute("data-arrows","");const d=c.previousElementSibling,e=d.getAttribute("data-btn"),f=`[data-content="${e}"]`;a.querySelector(f).classList.add("_active");const g=a.querySelectorAll("[data-content]");g.forEach(a=>{a.getAttribute("data-content")===e||a.classList.remove("_active")});const h=a.querySelectorAll("[data-content]").length,i=+e-1,j=+e+(b-2),k=b-2,l=h-k;if(+d.getAttribute("data-btn")>l);else{const b=a.querySelectorAll("[data-btn]");b.forEach(a=>{+a.getAttribute("data-btn")>=i&&a.getAttribute("data-btn")<=j?a.classList.add("_visible"):a.classList.remove("_visible")})}}else if(2===+c.getAttribute("data-btn")){const b=a.querySelector("[data-arrows]");b.classList.remove("_active"),b.removeAttribute("data-arrows"),b.previousElementSibling.classList.add("_active"),b.previousElementSibling.setAttribute("data-arrows","");const c=a.querySelectorAll("[data-content]");c.forEach(a=>{1===a.getAttribute("data-content")&&a.classList.add("_active")})}const d=a.getBoundingClientRect().top;window.scrollBy({top:d,behavior:"smooth"})}});const f=a.querySelectorAll("[data-btn]");f.forEach(a=>{+a.getAttribute("data-btn")<=b&&a.classList.add("_visible")})})}myPagination();function myBurger(){if(document.getElementById("header-menu")){const a=document.getElementById("menu-open"),b=document.getElementById("menu-content"),c=document.querySelectorAll(".lock-padding"),d=document.querySelector("body");if(a&&b){function e(){const a=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";c&&c.forEach(b=>{b.style.paddingRight=a}),d.style.paddingRight=a,d.classList.add("_lock-scroll")}function f(){c&&c.forEach(a=>{a.style.paddingRight="0px"}),d.style.paddingRight="0px",d.classList.remove("_lock-scroll")}if(a.addEventListener("click",function(){a.classList.contains("_active")?(b.classList.remove("_active"),a.classList.remove("_active"),f()):(b.classList.add("_active"),a.classList.add("_active"),e())}),document.querySelector("[data-popup-open]")){function c(){const c=document.querySelectorAll("[data-popup-open]");c.forEach(c=>{c.addEventListener("click",function(){b.classList.remove("_active"),a.classList.remove("_active")})})}c()}}}}myBurger(),new WOW({mobile:!1,offset:100}).init();let isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};isMobile.any()?document.body.classList.add("_touch"):document.body.classList.add("_pc");function footerNav(){const a=document.querySelectorAll(".footer-menu__sub-list");document.addEventListener("DOMContentLoaded",function(){a.forEach(a=>{const b=a.querySelectorAll(".footer-menu__sub-item");4<b.length&&b.forEach(a=>{a.parentElement.style.gridTemplateColumns="repeat(2, auto)"})})})}footerNav();function showHeaderItems(){const a=document.querySelectorAll(".header-actions__item"),b=992.2;a.forEach(a=>{a.addEventListener("mouseover",function(){if(window.innerWidth>b){const b=a.querySelectorAll(".header-actions__text");b.forEach(a=>{a.style.width="170px"})}}),a.addEventListener("mouseout",function(){if(window.innerWidth>b){const b=a.querySelectorAll(".header-actions__text");b.forEach(a=>{a.style.width="0px"})}}),window.addEventListener("resize",function(){if(window.innerWidth>b){const b=a.querySelectorAll(".header-actions__text");b.forEach(a=>{a.style.width="0px"})}else{const b=a.querySelectorAll(".header-actions__text");b.forEach(a=>{a.style.width="100%"})}}),document.addEventListener("DOMContentLoaded",function(){if(window.innerWidth>b){const b=a.querySelectorAll(".header-actions__text");b.forEach(a=>{a.style.width="0px"})}else{const b=a.querySelectorAll(".header-actions__text");b.forEach(a=>{a.style.width="100%"})}})})}showHeaderItems();function showText(){const a=document.querySelectorAll(".page__text-column");a.forEach(a=>{a.addEventListener("click",function(b){const c=b.target,d=a.querySelectorAll(".text-column__item");c.closest(".text-column__button")&&d.forEach(a=>{if(a.style.display="none"){a.style.display="flex";const b=document.querySelectorAll(".text-column__button");b.forEach(a=>{a.style.display="none"})}})})})}showText();function textareaValue(){const a=document.querySelectorAll(".field__item-textarea");a.forEach(a=>{a.addEventListener("input",function(b){const c=b.target,d=a.querySelector(".field__textarea");if(c.closest(".field__textarea")){let b=d.value.length,c=a.querySelector(".field__textarea-value").innerText;c=b,a.querySelector(".field__textarea-value").innerText=b}})})}textareaValue();const furniture=document.querySelector(".gallery-block__body");if(furniture&&!isMobile.any()){function a(){let g=0;c.forEach(a=>{g+=a.offsetWidth});const h=g-furniture.offsetWidth,i=Math.floor(f-e);e+=i*d;let j=h/200*e;b.style.cssText=`transform: translate3d(${-j}px,0,0);`,0<Math.abs(i)?requestAnimationFrame(a):furniture.classList.remove("_init")}const b=document.querySelector(".gallery-block__column"),c=document.querySelectorAll(".gallery-block__row_parallax"),d=furniture.dataset.speed;let e=0,f=0;furniture.addEventListener("mousemove",function(b){if(1024.2<window.innerWidth){const c=furniture.offsetWidth,d=b.pageX-c/2;f=200*(d/c),furniture.classList.contains("_init")||(requestAnimationFrame(a),furniture.classList.add("_init"))}})}function inputFile(){const a=document.querySelectorAll("[data-input-file-main]");a.forEach(a=>{const b=a.querySelector("[data-input-file]"),c=a.querySelector("[data-input-file-text]"),d=+a.querySelector("[data-input-file-text]").getAttribute("data-input-file-max-symbols"),e=+a.querySelector("[data-input-file-maxsize]").getAttribute("data-input-file-maxsize");c.innerText.split("").length>d&&(c.innerText=c.innerText.split("").slice(0,d).join("")+"..."),b.addEventListener("change",f=>{var g=Math.pow;for(const a of b.files)if("image/png"===a.type||"image/jpeg"===a.type||"image/svg+xml"===a.type)c.classList.remove("_active");else return void(c.innerText="only png, jpeg, svg");let h=0;for(const a of b.files)h=+a.size;const i=e,j=g(1024,2),k=i*j;if(h>k)return void a.querySelector("[data-input-file-maxsize]").classList.add("_active");if(a.querySelector("[data-input-file-maxsize]").classList.remove("_active"),1<b.files.length)c.innerText="files selected";else for(const a of b.files)c.innerText=a.name.split("").length>d?a.name.split("").slice(0,d).join("")+"...":a.name})})}inputFile();function addFile(){function a(a){a.addEventListener("click",function(){if(!a.classList.contains("_active")){a.classList.add("_active"),b(),inputFile(),a.classList.contains("_active")&&setTimeout(()=>{a.classList.remove("_active")},300);const c=document.querySelectorAll(".remote__file");5<=c.length&&a.remove()}})}function b(){const a=document.querySelector(".remote-field__row");let b=`
		<div class="remote__file remote-file wow animate__animated animate__fadeIn" data-wow-duration="0.8s" data-input-file-main>
			<div class="remote-file__label">
				Upload Photos Or Send Photos
			</div>
			<div class="remote-file__item">
				<div class="remote-file__input">
					<div class="remote-file__input-text">
						<span data-input-file-text data-input-file-max-symbols="25">
							File is not selected
						</span>
					</div>
					<button class="remote-file__input-btn" type="button">
						<label class="input-file">
							<input data-input-file type="file" name="file" multiple>
							<span>Select</span>
						</label>
					</button>
				</div>
				<div class="remote-file__max-size" data-input-file-maxsize="10">
					Max. file size 10 MB
				</div>
			</div>
		</div>
		`;a.insertAdjacentHTML("beforeEnd","\n\t\t<div class=\"remote__file remote-file wow animate__animated animate__fadeIn\" data-wow-duration=\"0.8s\" data-input-file-main>\n\t\t\t<div class=\"remote-file__label\">\n\t\t\t\tUpload Photos Or Send Photos\n\t\t\t</div>\n\t\t\t<div class=\"remote-file__item\">\n\t\t\t\t<div class=\"remote-file__input\">\n\t\t\t\t\t<div class=\"remote-file__input-text\">\n\t\t\t\t\t\t<span data-input-file-text data-input-file-max-symbols=\"25\">\n\t\t\t\t\t\t\tFile is not selected\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button class=\"remote-file__input-btn\" type=\"button\">\n\t\t\t\t\t\t<label class=\"input-file\">\n\t\t\t\t\t\t\t<input data-input-file type=\"file\" name=\"file\" multiple>\n\t\t\t\t\t\t\t<span>Select</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"remote-file__max-size\" data-input-file-maxsize=\"10\">\n\t\t\t\t\tMax. file size 10 MB\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t")}const c=document.querySelectorAll("[data-file-add]");c.forEach(b=>{a(b)})}addFile();function remoteCatalog(){function a(){const a=document.body.getBoundingClientRect().top;window.scrollBy({top:a,behavior:"smooth"})}const b=document.querySelectorAll(".remote-catalog__button"),c=document.querySelector(".remote-error"),d=document.querySelectorAll(".remote-field__select"),e=document.querySelectorAll(".remote-textarea"),f=document.querySelectorAll(".remote-input"),g=document.querySelector(".checkbox-remote");if(b.forEach(a=>{a.addEventListener("click",function(){a.classList.contains("_active")||(b.forEach(a=>{a.classList.remove("_active")}),a.classList.add("_active"),c.classList.remove("_active"),c.classList.remove("_req"))})}),document.querySelector(".remote-field__form")&&document.querySelector(".remote-field__form").addEventListener("submit",function(b){c.classList.contains("_active")&&(b.preventDefault(),a()),c.classList.contains("_req")&&(c.classList.add("_active"),b.preventDefault(),a()),document.querySelector(".remote-field__select")&&(0<document.querySelectorAll(".remote-field__select_invalid").length?(c.classList.add("_req"),c.classList.add("_active"),b.preventDefault()):(c.classList.remove("_req"),c.classList.remove("_active"))),(document.querySelector(".remote-textarea")||document.querySelector(".remote-input"))&&0<document.querySelectorAll(".input-invalid").length&&(c.classList.add("_req"),c.classList.add("_active"),b.preventDefault()),g&&!g.checked&&(b.preventDefault(),c.classList.add("_req"),c.classList.add("_active"))}),document.querySelector(".remote-textarea")||document.querySelector(".remote-input")){if(0<e.length)for(let a=0;a<e.length;a++){const b=e[a];b.addEventListener("input",function(){10<this.value.length?(this.classList.remove("input-invalid"),c.classList.remove("_req"),c.classList.remove("_active")):this.classList.add("input-invalid")})}if(0<f.length)for(let a=0;a<f.length;a++){const b=f[a];b.addEventListener("input",function(){2<this.value.length?(this.classList.remove("input-invalid"),c.classList.remove("_req"),c.classList.remove("_active")):this.classList.add("input-invalid")})}}d.forEach(a=>{a.addEventListener("click",function(a){const b=a.target;b.closest(".remote-select__list-item")&&(b.closest(".remote-field__select").classList.remove("remote-field__select_invalid"),c.classList.remove("_req"),c.classList.remove("_active"))})}),g&&g.addEventListener("change",function(a){g.checked&&(c.classList.remove("_req"),c.classList.remove("_active"))})}remoteCatalog();function addComment(){function a(){const a=document.querySelector(".blog-comments__items");let d;d=480<window.innerWidth?`
				<article class="blog-comments-items__comment">
					<i class="blog-comments-items__icon blog-comments-items__icon_pc">
						<img src="img/page/blog/icon-comment.svg" alt="icon-comment">
					</i>
					<div class="blog-comments-items__text-block">
						<div class="blog-comments-items__item">
							<i class="blog-comments-items__icon blog-comments-items__icon_mobile">
								<img src="img/page/blog/icon-comment.svg" alt="icon-comment">
							</i>
							<h5 class="blog-comments-items__name">
								${b.value}
							</h5>
							<span class="blog-comments-items__data">
								${g}
							</span>
						</div>
						<p class="blog-comments-items__text">
							${c.value}
						</p>
					</div>
				</article>
				`:`
			<article class="blog-comments-items__comment">
				<i class="blog-comments-items__icon blog-comments-items__icon_pc">
					<img src="img/page/blog/icon-comment.svg" alt="icon-comment">
				</i>
				<div class="blog-comments-items__text-block">
					<div class="blog-comments-items__item">
						<i class="blog-comments-items__icon blog-comments-items__icon_mobile">
							<img src="img/page/blog/icon-comment.svg" alt="icon-comment">
						</i>
						<h5 class="blog-comments-items__name">
							${b.value}
						</h5>
					</div>
				</div>
				<p class="blog-comments-items__text">
					${c.value}
				</p>
				<span class="blog-comments-items__data">
					${g}
				</span>
			</article>
			`,a.insertAdjacentHTML("beforeEnd",d)}const b=document.querySelector("#comment-name"),c=document.querySelector("#comment-textarea"),d=document.querySelector("[data-button-comment]");let e=["January","February","March","April","May","June","July","August","September","October","November","December"],f=new Date;const g=innerHTML=f.toJSON().slice(8,10).replace(/-/g," ")+" "+e[f.getMonth()]+" "+f.getFullYear();d&&d.addEventListener("click",function(){1<b.value.length&&5<c.value.length&&!d.classList.contains("_active")&&(d.classList.add("_active"),a(),b.value="",c.value="",document.querySelector("#comment-email").value="",document.querySelector(".field__textarea-value").innerText="0",d.classList.contains("_active")&&setTimeout(()=>{d.classList.remove("_active")},300))})}addComment();function adaptiveComment(){function a(){b.forEach(a=>{const b=a.querySelector(".blog-comments-items__data"),c=a.querySelector(".blog-comments-items__text");480.2>window.innerWidth?(a.appendChild(c),a.appendChild(b)):(a.querySelector(".blog-comments-items__text-block").appendChild(c),a.querySelector(".blog-comments-items__item").appendChild(b))})}const b=document.querySelectorAll(".blog-comments-items__comment");window.addEventListener("resize",a),document.addEventListener("DOMContentLoaded",a)}adaptiveComment();