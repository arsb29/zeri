const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const mLink = document.querySelectorAll('.menu__link');
const bodyBurger = document.querySelector('body');
const headerLogo = document.querySelector('.header__logo');


iconMenu.addEventListener('click', function () {
	iconMenu.classList.toggle('active');
	menuBody.classList.toggle('active');
	headerLogo.classList.toggle('active');
	// if (parseInt(window.innerWidth) < 992) {
	bodyBurger.classList.toggle('lock');
	// };
});

for (var k = 0; k < mLink.length; k++) {
	mLink[k].addEventListener('click', function () {
		iconMenu.classList.remove('active');
		menuBody.classList.remove('active');
		headerLogo.classList.remove('active');
		body.classList.remove('lock');
	});
};
//SlideToggle

let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}

let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');

	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}

let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}

;
const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
	window.addEventListener('scroll', animScroll);
	function animScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + screenLeft }
	}
	setTimeout(() => {
		animScroll();
	}, 400)

};
var VanillaTilt = function () { "use strict"; class t { constructor(e, i = {}) { if (!(e instanceof Node)) throw "Can't initialize VanillaTilt because " + e + " is not a Node."; this.width = null, this.height = null, this.clientWidth = null, this.clientHeight = null, this.left = null, this.top = null, this.gammazero = null, this.betazero = null, this.lastgammazero = null, this.lastbetazero = null, this.transitionTimeout = null, this.updateCall = null, this.event = null, this.updateBind = this.update.bind(this), this.resetBind = this.reset.bind(this), this.element = e, this.settings = this.extendSettings(i), this.reverse = this.settings.reverse ? -1 : 1, this.glare = t.isSettingTrue(this.settings.glare), this.glarePrerender = t.isSettingTrue(this.settings["glare-prerender"]), this.fullPageListening = t.isSettingTrue(this.settings["full-page-listening"]), this.gyroscope = t.isSettingTrue(this.settings.gyroscope), this.gyroscopeSamples = this.settings.gyroscopeSamples, this.elementListener = this.getElementListener(), this.glare && this.prepareGlare(), this.fullPageListening && this.updateClientSize(), this.addEventListeners(), this.updateInitialPosition() } static isSettingTrue(t) { return "" === t || !0 === t || 1 === t } getElementListener() { if (this.fullPageListening) return window.document; if ("string" == typeof this.settings["mouse-event-element"]) { const t = document.querySelector(this.settings["mouse-event-element"]); if (t) return t } return this.settings["mouse-event-element"] instanceof Node ? this.settings["mouse-event-element"] : this.element } addEventListeners() { this.onMouseEnterBind = this.onMouseEnter.bind(this), this.onMouseMoveBind = this.onMouseMove.bind(this), this.onMouseLeaveBind = this.onMouseLeave.bind(this), this.onWindowResizeBind = this.onWindowResize.bind(this), this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this), this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.addEventListener("mousemove", this.onMouseMoveBind), (this.glare || this.fullPageListening) && window.addEventListener("resize", this.onWindowResizeBind), this.gyroscope && window.addEventListener("deviceorientation", this.onDeviceOrientationBind) } removeEventListeners() { this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind), this.gyroscope && window.removeEventListener("deviceorientation", this.onDeviceOrientationBind), (this.glare || this.fullPageListening) && window.removeEventListener("resize", this.onWindowResizeBind) } destroy() { clearTimeout(this.transitionTimeout), null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.reset(), this.removeEventListeners(), this.element.vanillaTilt = null, delete this.element.vanillaTilt, this.element = null } onDeviceOrientation(t) { if (null === t.gamma || null === t.beta) return; this.updateElementPosition(), this.gyroscopeSamples > 0 && (this.lastgammazero = this.gammazero, this.lastbetazero = this.betazero, null === this.gammazero ? (this.gammazero = t.gamma, this.betazero = t.beta) : (this.gammazero = (t.gamma + this.lastgammazero) / 2, this.betazero = (t.beta + this.lastbetazero) / 2), this.gyroscopeSamples -= 1); const e = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX, i = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY, s = e / this.width, n = i / this.height, l = (t.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero)) / s, a = (t.beta - (this.settings.gyroscopeMinAngleY + this.betazero)) / n; null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = { clientX: l + this.left, clientY: a + this.top }, this.updateCall = requestAnimationFrame(this.updateBind) } onMouseEnter() { this.updateElementPosition(), this.element.style.willChange = "transform", this.setTransition() } onMouseMove(t) { null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = t, this.updateCall = requestAnimationFrame(this.updateBind) } onMouseLeave() { this.setTransition(), this.settings.reset && requestAnimationFrame(this.resetBind) } reset() { this.event = { clientX: this.left + this.width / 2, clientY: this.top + this.height / 2 }, this.element && this.element.style && (this.element.style.transform = `perspective(${this.settings.perspective}px) ` + "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"), this.resetGlare() } resetGlare() { this.glare && (this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)", this.glareElement.style.opacity = "0") } updateInitialPosition() { if (0 === this.settings.startX && 0 === this.settings.startY) return; this.onMouseEnter(), this.fullPageListening ? this.event = { clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth, clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight } : this.event = { clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width, clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height }; let t = this.settings.scale; this.settings.scale = 1, this.update(), this.settings.scale = t, this.resetGlare() } getValues() { let t, e; return this.fullPageListening ? (t = this.event.clientX / this.clientWidth, e = this.event.clientY / this.clientHeight) : (t = (this.event.clientX - this.left) / this.width, e = (this.event.clientY - this.top) / this.height), t = Math.min(Math.max(t, 0), 1), e = Math.min(Math.max(e, 0), 1), { tiltX: (this.reverse * (this.settings.max - t * this.settings.max * 2)).toFixed(2), tiltY: (this.reverse * (e * this.settings.max * 2 - this.settings.max)).toFixed(2), percentageX: 100 * t, percentageY: 100 * e, angle: Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI) } } updateElementPosition() { let t = this.element.getBoundingClientRect(); this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.left = t.left, this.top = t.top } update() { let t = this.getValues(); this.element.style.transform = "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : t.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : t.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")", this.glare && (this.glareElement.style.transform = `rotate(${t.angle}deg) translate(-50%, -50%)`, this.glareElement.style.opacity = `${t.percentageY * this.settings["max-glare"] / 100}`), this.element.dispatchEvent(new CustomEvent("tiltChange", { detail: t })), this.updateCall = null } prepareGlare() { if (!this.glarePrerender) { const t = document.createElement("div"); t.classList.add("js-tilt-glare"); const e = document.createElement("div"); e.classList.add("js-tilt-glare-inner"), t.appendChild(e), this.element.appendChild(t) } this.glareElementWrapper = this.element.querySelector(".js-tilt-glare"), this.glareElement = this.element.querySelector(".js-tilt-glare-inner"), this.glarePrerender || (Object.assign(this.glareElementWrapper.style, { position: "absolute", top: "0", left: "0", width: "100%", height: "100%", overflow: "hidden", "pointer-events": "none" }), Object.assign(this.glareElement.style, { position: "absolute", top: "50%", left: "50%", "pointer-events": "none", "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)", width: `${2 * this.element.offsetWidth}px`, height: `${2 * this.element.offsetWidth}px`, transform: "rotate(180deg) translate(-50%, -50%)", "transform-origin": "0% 0%", opacity: "0" })) } updateGlareSize() { this.glare && Object.assign(this.glareElement.style, { width: `${2 * this.element.offsetWidth}`, height: `${2 * this.element.offsetWidth}` }) } updateClientSize() { this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight } onWindowResize() { this.updateGlareSize(), this.updateClientSize() } setTransition() { clearTimeout(this.transitionTimeout), this.element.style.transition = this.settings.speed + "ms " + this.settings.easing, this.glare && (this.glareElement.style.transition = `opacity ${this.settings.speed}ms ${this.settings.easing}`), this.transitionTimeout = setTimeout(() => { this.element.style.transition = "", this.glare && (this.glareElement.style.transition = "") }, this.settings.speed) } extendSettings(t) { let e = { reverse: !1, max: 15, startX: 0, startY: 0, perspective: 1e3, easing: "cubic-bezier(.03,.98,.52,.99)", scale: 1, speed: 300, transition: !0, axis: null, glare: !1, "max-glare": 1, "glare-prerender": !1, "full-page-listening": !1, "mouse-event-element": null, reset: !0, gyroscope: !0, gyroscopeMinAngleX: -45, gyroscopeMaxAngleX: 45, gyroscopeMinAngleY: -45, gyroscopeMaxAngleY: 45, gyroscopeSamples: 10 }, i = {}; for (var s in e) if (s in t) i[s] = t[s]; else if (this.element.hasAttribute("data-tilt-" + s)) { let t = this.element.getAttribute("data-tilt-" + s); try { i[s] = JSON.parse(t) } catch (e) { i[s] = t } } else i[s] = e[s]; return i } static init(e, i) { e instanceof Node && (e = [e]), e instanceof NodeList && (e = [].slice.call(e)), e instanceof Array && e.forEach(e => { "vanillaTilt" in e || (e.vanillaTilt = new t(e, i)) }) } } return "undefined" != typeof document && (window.VanillaTilt = t, t.init(document.querySelectorAll("[data-tilt]"))), t }();;
const popupLinks = document.querySelectorAll('.popup-link');
body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");
const mapBody = document.querySelector(".map");

var popupClone = document.getElementById("popup");
var popupCloneContent = popupClone.cloneNode(true);


let unlock = true;

const timeout = 800;


function popupFilling(curentPopup, contentForFilling) {
	// curentPopup.querySelector('.loader').classList.remove('loader__hidden');
	curentPopup.querySelector('.popup__title').innerHTML = contentForFilling.title;
	curentPopup.querySelector('.brief-popup__free').classList.remove('rubleRed', 'rubleGreen');
	curentPopup.querySelector('.brief-popup__food').classList.remove('foodRed', 'foodGreen');
	curentPopup.querySelector('.brief-popup__outdoor').classList.remove('outdoorRed', 'outdoorGreen');
	if (contentForFilling.free === 'true') {
		curentPopup.querySelector('.brief-popup__free').classList.add('rubleGreen');
		curentPopup.querySelector('.brief-popup__free').innerHTML = 'Бесплатно';
	} else {
		curentPopup.querySelector('.brief-popup__free').classList.add('rubleRed');
		curentPopup.querySelector('.brief-popup__free').innerHTML = 'Платно';
	}
	if (contentForFilling.food === 'true') {
		curentPopup.querySelector('.brief-popup__food').classList.add('foodGreen');
		curentPopup.querySelector('.brief-popup__food').innerHTML = 'Есть точки общепита';
	} else {
		curentPopup.querySelector('.brief-popup__food').classList.add('foodRed');
		curentPopup.querySelector('.brief-popup__food').innerHTML = 'Еда с собой';
	}
	if (contentForFilling.outdoor === 'true') {
		curentPopup.querySelector('.brief-popup__outdoor').classList.add('outdoorGreen');
		curentPopup.querySelector('.brief-popup__outdoor').innerHTML = 'Открытое';
	} else {
		curentPopup.querySelector('.brief-popup__outdoor').classList.add('outdoorRed');
		curentPopup.querySelector('.brief-popup__outdoor').innerHTML = 'Закрытое';
	}
	curentPopup.querySelector('.popup__metroStation').innerHTML = contentForFilling.metroStation;
	curentPopup.querySelector('.popup__address').innerHTML = contentForFilling.address;
	curentPopup.querySelector('.popup__description').innerHTML = contentForFilling.description;
	var picture = curentPopup.querySelector('.swiper-wrapper');
	picture.innerHTML = '';
	for (var i = 0; i < contentForFilling.image.split(',').length; i++) {
		picture.innerHTML += '<div class="swiper-slide"><img src="img/gulevan/' + contentForFilling.image.split(',')[i] + '" alt="" /></div>'
	};

	var img = new Image();
	img.onload = function () {
		mySwiper.slideTo(0, 0);
		mySwiper.update();
	}
	img.src = "img/gulevan/" + contentForFilling.image.split(',')[0];

	var metroColors = ['#d6083b', '#0078c9', '#009b47', '#ea7125', '#702785'];
	curentPopup.querySelector('.popup__metroIcon').style.backgroundColor = metroColors[contentForFilling.metroLine - 1];
}

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupO(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupO(curentPopup, contentForFilling) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		if (contentForFilling !== undefined) {
			popupFilling(curentPopup, contentForFilling)
		}
		curentPopup.classList.add('open')
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
;

VanillaTilt.init(document.querySelectorAll(".box"), {
	max: 25,
	speed: 400,
	glare: true
});

/*! SmoothScroll v16.1.4 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).SmoothScroll=t()}(this,(function(){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},t=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},n=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,i="",r=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===a&&t>=48&&t<=57||1===a&&t>=48&&t<=57&&45===r?i+="\\"+t.toString(16)+" ":i+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+i},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(e){return e?(t=e,parseInt(window.getComputedStyle(t).height,10)+e.offsetTop):0;var t},i=function(e,t,n){0===e&&document.body.focus(),n||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),window.scrollTo(0,t))},r=function(e,t,n,o){if(t.emitEvents&&"function"==typeof window.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(s,c){var u,l,d,f,m={};m.cancelScroll=function(e){cancelAnimationFrame(f),f=null,e||r("scrollCancel",u)},m.animateScroll=function(n,s,c){m.cancelScroll();var l=t(u||e,c||{}),h="[object Number]"===Object.prototype.toString.call(n),p=h||!n.tagName?null:n;if(h||p){var w=window.pageYOffset;l.header&&!d&&(d=document.querySelector(l.header));var g,y,v,S=a(d),E=h?n:function(e,t,n,a){var i=0;if(e.offsetParent)do{i+=e.offsetTop,e=e.offsetParent}while(e);return i=Math.max(i-t-n,0),a&&(i=Math.min(i,o()-window.innerHeight)),i}(p,S,parseInt("function"==typeof l.offset?l.offset(n,s):l.offset,10),l.clip),b=E-w,O=o(),I=0,M=function(e,t){var n=t.speedAsDuration?t.speed:Math.abs(e/1e3*t.speed);return t.durationMax&&n>t.durationMax?t.durationMax:t.durationMin&&n<t.durationMin?t.durationMin:parseInt(n,10)}(b,l),A=function(e){g||(g=e),I+=e-g,v=w+b*function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t}(l,y=(y=0===M?0:I/M)>1?1:y),window.scrollTo(0,Math.floor(v)),function(e,t){var o=window.pageYOffset;if(e==t||o==t||(w<t&&window.innerHeight+o)>=O)return m.cancelScroll(!0),i(n,t,h),r("scrollStop",l,n,s),g=null,f=null,!0}(v,E)||(f=window.requestAnimationFrame(A),g=e)};0===window.pageYOffset&&window.scrollTo(0,0),function(e,t,n){t||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)}(n,h,l),"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches?i(n,Math.floor(E),!1):(r("scrollStart",l,n,s),m.cancelScroll(!0),window.requestAnimationFrame(A))}};var h=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(l=e.target.closest(s))&&"a"===l.tagName.toLowerCase()&&!e.target.closest(u.ignore)&&l.hostname===window.location.hostname&&l.pathname===window.location.pathname&&/#/.test(l.href)){var t,o;try{t=n(decodeURIComponent(l.hash))}catch(e){t=n(l.hash)}if("#"===t){if(!u.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(t);(o=o||"#top"!==t?o:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=window.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||window.pageYOffset},document.title,t||window.location.href)}}(u),m.animateScroll(o,l))}},p=function(){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(u)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(n(history.state.anchor)))||m.animateScroll(e,null,{updateURL:!1})}};m.destroy=function(){u&&(document.removeEventListener("click",h,!1),window.removeEventListener("popstate",p,!1),m.cancelScroll(),u=null,l=null,d=null,f=null)};return function(){if(!("querySelector"in document&&"addEventListener"in window&&"requestAnimationFrame"in window&&"closest"in window.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";m.destroy(),u=t(e,c||{}),d=u.header?document.querySelector(u.header):null,document.addEventListener("click",h,!1),u.updateURL&&u.popstate&&window.addEventListener("popstate",p,!1)}(),m}}));
;
var scroll = new SmoothScroll('a[href*="#"]', {
	header: '.header'
});


const header = document.querySelector(".header");

window.addEventListener('scroll', addBackToHeader);
function addBackToHeader() {
	if (pageYOffset > 10) {
		header.style.boxShadow = "0 -30px 40px rgba(0, 0, 0, 1)";

	} else {
		header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.0)";
	};
};

var questionsPageFronts = document.querySelectorAll('.questions-page__front');
questionsPageFronts[0].classList.add('active');
_slideToggle(questionsPageFronts[0].parentElement.querySelector(".questions-page__back"));
for (var j = 0; j < questionsPageFronts.length; j++) {
	questionsPageFronts[j].addEventListener('click', function (e) {
		e.currentTarget.classList.toggle('active');
		e.currentTarget.classList.add('current');
		_slideToggle(e.currentTarget.parentElement.querySelector(".questions-page__back"));
		for (var k = 0; k < questionsPageFronts.length; k++) {
			if (questionsPageFronts[k].classList.contains('active')) {
				if (questionsPageFronts[k].classList.contains('current')) {
					questionsPageFronts[k].classList.remove('current');
				}
				else {
					questionsPageFronts[k].classList.remove('active');
					_slideUp(questionsPageFronts[k].parentElement.querySelector(".questions-page__back"));
				}
			}
		}

	})
}


