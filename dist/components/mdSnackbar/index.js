/*!
* Vue Material v0.7.5
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.VueMaterial=t(require("vue")):e.VueMaterial=t(e.Vue)})(this,(function(e){return (function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=472)})({0:function(e,t){e.exports=function(e,t,n,i,o){var r,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(r=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),i&&(u._scopeId=i);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var d=u.functional,l=d?u.render:u.beforeCreate;d?u.render=function(e,t){return c.call(t),l(e,t)}:u.beforeCreate=l?[].concat(l,c):[c]}return{esModule:r,exports:s,options:u}}},1:function(e,t,n){"use strict";function i(e){if(!e)return null;var t=e.mdTheme;return t||"md-theme"!==e.$options._componentTag||(t=e.mdName),t||i(e.$parent)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return i(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdTheme;this.$material.useTheme(e||"default")}},e.exports=t.default},343:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-snackbar",s.default),e.material.styles.push(u.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(344),s=i(r),a=n(350),u=i(a);e.exports=t.default},344:function(e,t,n){function i(e){n(345)}var o=n(0)(n(346),n(349),i,null,null);e.exports=o.exports},345:function(e,t){},346:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(36),r=i(o),s=n(42),a=i(s),u=n(1),c=i(u),d=n(347),l=i(d);t.default={name:"md-snackbar",props:{id:[String,Number],mdPosition:{type:String,default:"bottom center"},mdDuration:{type:[String,Number],default:4e3}},mixins:[c.default],data:function(){return{snackbarId:this.id||"snackbar-"+(0,r.default)(),removedSnackBarElementEventName:"removedSnackBarElement",active:!1,rootElement:{},snackbarElement:{},directionClass:null,closeTimeout:null,removedSnackBarElementEvent:null}},computed:{classes:function(){var e={"md-active":this.active};return this.directionClass=this.mdPosition.replace(/ /g,"-"),e["md-position-"+this.directionClass]=!0,e}},watch:{active:function(e){var t="md-has-toast-"+this.directionClass;e?(document.body.classList.add(t),document.body.classList.add("md-has-toast")):(document.body.classList.remove(t),document.body.classList.remove("md-has-toast"))}},methods:{removeElement:function(){if(document.body.contains(this.snackbarElement)&&!this.active){var e=this.snackbarElement.querySelector(".md-ripple.md-active");e&&e.classList.remove("md-active"),document.body.removeChild(this.snackbarElement)}document.dispatchEvent(this.removedSnackBarElementEvent)},open:function(){if(l.default.current)return document.removeEventListener(this.removedSnackBarElementEventName,this.showElementAndStartTimer),document.addEventListener(this.removedSnackBarElementEventName,this.showElementAndStartTimer),void l.default.current.close();this.showElementAndStartTimer()},showElementAndStartTimer:function(){document.body.contains(this.snackbarElement)||(document.removeEventListener(this.removedSnackBarElementEventName,this.showElementAndStartTimer),l.default.current=this,document.body.appendChild(this.snackbarElement),null!==this.$refs.container&&void 0!==this.$refs.container&&window.getComputedStyle(this.$refs.container).backgroundColor,this.active=!0,this.$emit("open"),this.mdDuration!==1/0&&this.setCloseTimeout(this.mdDuration),this.timeoutStartedAt=Date.now())},close:function(){var e=this;if(this.$refs.container){this.active=!1;var t=function t(){document.removeEventListener(a.default,t),e.removeElement()};l.default.current=null,this.$emit("close"),document.removeEventListener(a.default,t),document.addEventListener(a.default,t),this.clearCloseTimeout(),this.pendingDuration=this.mdDuration}},pauseTimeout:function(){this.pendingDuration=this.pendingDuration-(Date.now()-this.timeoutStartedAt),this.timeoutStartedAt=0,this.clearCloseTimeout()},resumeTimeout:function(){this.timeoutStartedAt=Date.now(),this.pendingDuration!==1/0&&this.setCloseTimeout(this.pendingDuration)},setCloseTimeout:function(e){this.clearCloseTimeout(),this.closeTimeout=window.setTimeout(this.close,e)},clearCloseTimeout:function(){this.closeTimeout&&(window.clearTimeout(this.closeTimeout),this.closeTimeout=null)}},mounted:function(){var e=this;this.$nextTick((function(){e.snackbarElement=e.$el,e.snackbarElement.parentNode.removeChild(e.snackbarElement),e.timeoutStartedAt=0,e.pendingDuration=e.mdDuration})),this.removedSnackBarElementEvent=new Event(this.removedSnackBarElementEventName)},beforeDestroy:function(){this.clearCloseTimeout(),this.active=!1,this.removeElement()}},e.exports=t.default},347:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(348),o=(function(e){return e&&e.__esModule?e:{default:e}})(i),r=new o.default({data:function(){return{current:null}}});t.default=r,e.exports=t.default},348:function(t,n){t.exports=e},349:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-snackbar",class:[e.themeClass,e.classes],attrs:{id:e.snackbarId},on:{mouseenter:e.pauseTimeout,mouseleave:e.resumeTimeout}},[n("div",{ref:"container",staticClass:"md-snackbar-container"},[n("div",{staticClass:"md-snackbar-content"},[e._t("default")],2)])])},staticRenderFns:[]}},350:function(e,t){e.exports=".THEME_NAME .md-snackbar .md-ink-ripple,.THEME_NAME.md-snackbar .md-ink-ripple{color:#fff}\n"},36:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){return Math.random().toString(36).slice(4)};t.default=i,e.exports=t.default},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(function(){var e=document.createElement("span"),t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in t)if(void 0!==e.style[n])return t[n]})(),e.exports=t.default},472:function(e,t,n){e.exports=n(343)}})}));