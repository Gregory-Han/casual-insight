(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aaa8148c"],{"2af1":function(t,e,i){var s=i("23e7"),n=i("f748");s({target:"Math",stat:!0},{sign:n})},"608c":function(t,e,i){},"7efd":function(t,e,i){"use strict";i.d(e,"a",(function(){return g}));var s=i("b85c"),n=i("5530"),r=(i("2af1"),i("caad"),i("99af"),i("fb6a"),i("608c"),i("9d26")),o=i("0789"),a=i("604c"),c=i("e4cd"),l=i("dc22"),h=i("c3f0"),f=i("58df"),u=i("80d2");function d(t){var e=.501,i=Math.abs(t);return Math.sign(t)*(i/((1/e-2)*(1-i)+1))}function p(t,e,i,s){var n=t.clientWidth,r=i?e.content-t.offsetLeft-n:t.offsetLeft;i&&(s=-s);var o=e.wrapper+s,a=n+r,c=.4*n;return r<=s?s=Math.max(r-c,0):o<=a&&(s=Math.min(s-(o-a-c),e.content-e.wrapper)),i?-s:s}function v(t,e,i){var s=t.offsetLeft,n=t.clientWidth;if(i){var r=e.content-s-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,r))}var o=s+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,o))}var g=Object(f["a"])(a["a"],c["a"]).extend({name:"base-slide-group",directives:{Resize:l["a"],Touch:h["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"===typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{canTouch:function(){return"undefined"!==typeof window},__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object(n["a"])(Object(n["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,i=t.wrapper;return e>Math.abs(this.scrollOffset)+i},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$vuetify.rtl&&(t=-t);var e=t<=0?d(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+d(this.widths.content-this.widths.wrapper-t):-t;this.$vuetify.rtl&&(e=-e),this.$refs.content.style.transform="translateX(".concat(e,"px)")}},mounted:function(){var t=this;if("undefined"!==typeof ResizeObserver){var e=new ResizeObserver((function(){t.onResize()}));e.observe(this.$el),e.observe(this.$refs.content),this.$on("hook:destroyed",(function(){e.disconnect()}))}else{var i=0;this.$on("hook:beforeUpdate",(function(){var e;i=((null==(e=t.$refs.content)?void 0:e.children)||[]).length})),this.$on("hook:updated",(function(){var e;i!==((null==(e=t.$refs.content)?void 0:e.children)||[]).length&&t.setWidths()}))}},methods:{onScroll:function(){this.$refs.wrapper.scrollLeft=0},onFocusin:function(t){if(this.isOverflowing){var e,i=Object(s["a"])(Object(u["g"])(t));try{for(i.s();!(e=i.n()).done;){var n,r=e.value,o=Object(s["a"])(this.items);try{for(o.s();!(n=o.n()).done;){var a=n.value;if(a.$el===r)return void(this.scrollOffset=p(a.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))}}catch(c){o.e(c)}finally{o.f()}}}catch(c){i.e(c)}finally{i.f()}}},genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots["default"])},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var i="".concat(t[0].toUpperCase()).concat(t.slice(1)),s=this["has".concat(i)];return this.showArrows||s?this.$createElement(r["a"],{props:{disabled:!s}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(o["d"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset:function(t,e,i,s){var n=i?-1:1,r=n*s+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(r,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){if(this.canTouch){if(!this.isSwiping){var e=t.touchmoveX-t.touchstartX,i=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(i),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd:function(){if(this.canTouch){var t=this.$refs,e=t.content,i=t.wrapper,s=e.clientWidth-i.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=v(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=p(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){if(!t._isDestroyed){var e=t.$refs,i=e.content,s=e.wrapper;t.widths={content:i?i.clientWidth:0,wrapper:s?s.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e["b"]=g.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},"9dbe":function(t,e,i){"use strict";var s=i("d903"),n=i("4e82"),r=i("58df");e["a"]=Object(r["a"])(s["a"],Object(n["a"])("slideGroup")).extend({name:"v-slide-item"})},c6d2:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("base-section",{attrs:{id:"affiliates",space:"36"}},[s("v-container",[s("base-section-heading",{attrs:{title:"Who's using Zero?"}}),s("v-slide-group",[t._l(6,(function(e){return[s("v-slide-item",{key:e,staticClass:"align-self-center"},[s("base-img",{attrs:{src:i("e7dd")("./logo-"+e+"-"+(t.$vuetify.theme.isDark?"dark":"light")+".png"),color:"grey",contain:"",height:"40",width:"128"}})],1),e<6?s("v-responsive",{key:"divider-"+e,staticClass:"text-center",attrs:{height:"56",width:"48"}},[s("v-divider",{attrs:{vertical:""}})],1):t._e()]}))],2)],1)],1)},n=[],r={name:"SectionAffiliates"},o=r,a=i("0c7c"),c=i("6544"),l=i.n(c),h=i("a523"),f=i("ce7e"),u=i("6b53"),d=i("7efd"),p=i("9dbe"),v=Object(a["a"])(o,s,n,!1,null,null,null);e["default"]=v.exports;l()(v,{VContainer:h["a"],VDivider:f["a"],VResponsive:u["a"],VSlideGroup:d["b"],VSlideItem:p["a"]})},d903:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var s=i("ade3"),n=(i("277d"),i("4e82")),r=i("58df"),o=i("d9bd"),a=i("2b0e"),c=a["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots["default"]?(this.$scopedSlots["default"]&&(t=this.$scopedSlots["default"]({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:Object(s["a"])({},this.activeClass,this.isActive)}),t):(Object(o["c"])("v-item should only contain a single element",this),t)):(Object(o["c"])("v-item is missing a default scopedSlot",this),null);var t}});e["b"]=Object(r["a"])(c,Object(n["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"})},e4cd:function(t,e,i){"use strict";i("a9e3"),i("caad"),i("b0c0"),i("e25e");var s=i("d9bd"),n=i("2b0e");e["a"]=n["a"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,i=t.width,s=t.name,n=t.mobileBreakpoint;if(n===this.mobileBreakpoint)return e;var r=parseInt(this.mobileBreakpoint,10),o=!isNaN(r);return o?i<r:s===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(s["d"])("mobile-break-point","mobile-breakpoint",this)}})},e7dd:function(t,e,i){var s={"./logo-1-dark.png":"5599","./logo-1-light.png":"d29c","./logo-2-dark.png":"b228","./logo-2-light.png":"68e2","./logo-3-dark.png":"fe98","./logo-3-light.png":"5b8f","./logo-4-dark.png":"512b","./logo-4-light.png":"ee5e","./logo-5-dark.png":"ec02","./logo-5-light.png":"961b","./logo-6-dark.png":"e787","./logo-6-light.png":"4615","./logo-only.png":"fbd8","./logo-white.png":"d939"};function n(t){var e=r(t);return i(e)}function r(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="e7dd"}}]);