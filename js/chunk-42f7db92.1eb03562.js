(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42f7db92"],{"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var o=i("fe6c"),n=i("58df");function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(n["a"])(Object(o["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"3c02":function(t,e,i){},"5bcb":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{directives:[{name:"show",rawName:"v-show",value:!t.demoWorking,expression:"!demoWorking"}],attrs:{id:"home-footer",color:"black",dark:"","min-height":"72"}},[i("v-container",[i("v-row",[i("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" Copyright © 2021 ~ (주)캐주얼인사이트 ")])],1)],1)],1)},n=[],a=i("5530"),s=i("2f62"),c={name:"HomeFooter",data:function(){return{social:["Facebook","Twitter","Instagram","Linkedin"]}},computed:Object(a["a"])({},Object(s["c"])({demoWorking:function(t){return t.shared.demoWorking}}))},r=c,u=(i("99c0"),i("0c7c")),p=i("6544"),h=i.n(p),l=i("62ad"),d=i("a523"),f=(i("a9e3"),i("c7cd"),i("e25e"),i("b5b6"),i("8dd9")),b=i("3a66"),m=i("d10f"),v=i("58df"),g=i("80d2"),y=Object(v["a"])(f["a"],Object(b["a"])("footer",["height","inset"]),m["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(a["a"])(Object(a["a"])({},f["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(a["a"])(Object(a["a"])({},f["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(g["h"])(t),left:Object(g["h"])(this.computedLeft),right:Object(g["h"])(this.computedRight),bottom:Object(g["h"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots["default"])}}),w=i("0fd9"),j=Object(u["a"])(r,o,n,!1,null,null,null);e["default"]=j.exports;h()(j,{VCol:l["a"],VContainer:d["a"],VFooter:y,VRow:w["a"]})},"99c0":function(t,e,i){"use strict";i("3c02")},b5b6:function(t,e,i){},d10f:function(t,e,i){"use strict";var o=i("2b0e");e["a"]=o["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})}}]);