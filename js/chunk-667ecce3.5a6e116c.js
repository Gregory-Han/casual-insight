(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-667ecce3"],{"544a":function(t,e,s){"use strict";s("5a43")},"5a43":function(t,e,s){},c9b8:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("base-section",{attrs:{id:"recent-works",space:"0"}},[s("v-container",{staticClass:"mb-3 py-0",attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center"}},[s("v-theme-provider",{attrs:{dark:""}},[s("v-col",{staticClass:"accent extra-padding",attrs:{cols:"12",md:"6"}},[s("v-responsive",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[s("base-subtitle",{staticClass:"primary--text",attrs:{title:"Portfolio Showcase",space:"2"}}),s("base-title",{attrs:{"mobile-size":"title",size:"display-1",space:"2",title:"최근 개정 현황"}}),s("base-divider",{attrs:{color:"primary"}}),s("base-body",{attrs:{space:t.$vuetify.breakpoint.smAndDown?0:void 0}},[t._v(" 지식거래 & 데이터-허브를 겸비한 분석 시각화를 제공하기 위한 우리의 최근 결과물 입니다. Open-API 제공 포털별 인증키를 별도로 받지 않아도 사용 가능합니다. ")]),s("v-item-group",{model:{value:t.work,callback:function(e){t.work=e},expression:"work"}},t._l(t.works,(function(e,a){return s("div",{key:a},[s("v-item",{attrs:{value:e}},[s("v-btn",{staticClass:"mb-1",attrs:{"input-value":e===t.work,text:"",color:t.colorTop3(a)},on:{click:function(s){e=t.work}}},[t._v(" "+t._s(e)+" ")])],1),a<t.works.length?s("br",{key:"br-"+a}):t._e()],1)})),0)],1)],1)],1)],1)],1)],1)},i=[],r=s("5530"),o=s("2f62"),n={name:"SectionRecentWork",data:function(){return{work:"전체"}},computed:Object(r["a"])({},Object(o["c"])({works:function(t){return t.shared.works||[]}})),methods:{filter:function(t){return t.work===this.work||"전체"===this.work},colorTop3:function(t){return t>0&&t<4?"#ddaf89":"grey lighten-3"}}},c=n,l=(s("544a"),s("0c7c")),u=s("6544"),d=s.n(u),v=s("8336"),p=s("62ad"),b=s("a523"),f=s("d903"),m=s("604c"),h=s("6b53"),w=s("0fd9"),k=s("480e"),g=Object(l["a"])(c,a,i,!1,null,"723ad93e",null);e["default"]=g.exports;d()(g,{VBtn:v["a"],VCol:p["a"],VContainer:b["a"],VItem:f["b"],VItemGroup:m["b"],VResponsive:h["a"],VRow:w["a"],VThemeProvider:k["a"]})},d903:function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var a=s("ade3"),i=(s("277d"),s("4e82")),r=s("58df"),o=s("d9bd"),n=s("2b0e"),c=n["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots["default"]?(this.$scopedSlots["default"]&&(t=this.$scopedSlots["default"]({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:Object(a["a"])({},this.activeClass,this.isActive)}),t):(Object(o["c"])("v-item should only contain a single element",this),t)):(Object(o["c"])("v-item is missing a default scopedSlot",this),null);var t}});e["b"]=Object(r["a"])(c,Object(i["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"})}}]);