webpackJsonp([0],{"4oLQ":function(t,e){},"H/0m":function(t,e){},IeS1:function(t,e){},LjRL:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"header"},[n("ul",{staticClass:"line"},[t._m(0),t._v(" "),n("div",{staticClass:"non"}),t._v(" "),n("nav",{staticClass:"header-nav"},[n("ul",[n("router-link",{attrs:{tag:"li",id:"home-nav",to:"/"}},[n("span",{on:{click:function(e){t.transPage("Home")}}},[n("a",[t._v("Home")])])]),t._v(" "),n("router-link",{attrs:{tag:"li",id:"game-nav",to:"/profile"}},[n("span",{on:{click:function(e){t.transPage("Profile")}}},[n("a",[t._v("Profile")])])]),t._v(" "),n("router-link",{attrs:{tag:"li",id:"info-nav",to:"/blog"}},[n("span",{on:{click:function(e){t.transPage("Blog")}}},[n("a",[t._v("Blog")])])]),t._v(" "),n("router-link",{attrs:{tag:"li",id:"gift-nav",to:"/contact"}},[n("span",{on:{click:function(e){t.transPage("Contact")}}},[n("a",[t._v("Contact")])])])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h1",[this._v("Aikachan's Page ")])])}]};var s=n("VU/8")({name:"HeaderItem",data:function(){return{item:"Home"}},methods:{transPage:function(t){this.item=t}}},i,!1,function(t){n("4oLQ")},"data-v-9db97ae4",null).exports,o={name:"Footer",methods:{transPagef:function(t,e){e&&e.preventDefault(),s.transPage(t)}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{attrs:{id:"footer"}},[n("nav",{attrs:{id:"footer-nav"}},[n("ul",[n("router-link",{attrs:{tag:"li",id:"home-nav",to:"/"}},[n("span",{on:{click:function(e){t.transPagef("Home",e)}}},[n("a",[t._v("Home")])])]),t._v(" "),n("router-link",{attrs:{tag:"li",id:"game-nav",to:"/profile"}},[n("span",{on:{click:function(e){t.transPagef("Profile",e)}}},[n("a",[t._v("Profile")])])]),t._v(" "),n("router-link",{attrs:{tag:"li",id:"info-nav",to:"/blog"}},[n("span",{on:{click:function(e){t.transPagef("blog",e)}}},[n("a",[t._v("Blog")])])]),t._v(" "),n("router-link",{attrs:{tag:"li",id:"gift-nav",to:"/contact"}},[n("span",{on:{click:function(e){t.transPagef("contact",e)}}},[n("a",[t._v("Contact")])])])],1)])])},staticRenderFns:[]};var l=n("VU/8")(o,r,!1,function(t){n("LjRL")},"data-v-1051d9c6",null).exports,c={name:"App",components:{headerItem:s,footerItem:l}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("headerItem"),this._v(" "),e("div",{staticClass:"layer"},[e("img",{attrs:{src:n("O7ML")}}),this._v(" "),e("div",{staticClass:"context"},[e("router-view")],1)]),this._v(" "),e("footerItem")],1)},staticRenderFns:[]};var u=n("VU/8")(c,v,!1,function(t){n("H/0m")},null,null).exports,_=n("/ocq"),f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("このページはあいかちゃんと，その中の人のホームページです．")]),t._v(" "),a("div",{staticClass:"aboutlayer"},[a("h2",[t._v("自己紹介")]),t._v(" "),a("div",{staticClass:"aboutContext"},[t._m(0),t._v(" "),a("div",{staticClass:"aboutImg"},[a("img",{attrs:{src:n("so/y")}}),t._v(" "),a("router-link",{attrs:{tag:"li",id:"game-nav",to:"/profile"}},[a("a",[t._v("more")])])],1)])]),t._v(" "),a("div",{staticClass:"bloglayer"},[a("h1",[t._v("あいかちゃんとその中の人のBlog")]),t._v(" "),a("h2",[t._v("技術的な話題や私生活のあれこれについて書いていきます.")]),t._v(" "),a("h2",[t._v("最新記事")]),t._v(" "),a("div",{staticClass:"newBlog"}),t._v(" "),a("router-link",{attrs:{tag:"button",to:"/blog"}},[t._v("あいかちゃんBlog")])],1),t._v(" "),a("div",{staticClass:"contactlayer"},[a("h1",[t._v("お問い合わせ")]),t._v(" "),a("div",{staticClass:"contactContext"},[a("router-link",{attrs:{tag:"p",to:"/contact"}},[a("a",[t._v("お問い合わせフォーム")])])],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aboutList"},[n("h3",[t._v("あいかちゃん")]),t._v(" "),n("ul",{staticClass:"cp_list"},[n("li",[t._v("美少女系男の娘")]),t._v(" "),n("li",[t._v("Wish to be an engineer.")]),t._v(" "),n("li",[t._v("Like music and Game.")]),t._v(" "),n("li",[t._v("Live in Nagoya.")])])])}]};var d=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Aikachan Page."}}},f,!1,function(t){n("IeS1")},"data-v-355d81ae",null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"blog"},[e("h1",[this._v("Blog")]),this._v(" "),e("p",[this._v("工事中")])])}]},m=n("VU/8")(null,h,!1,null,null,null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact"},[e("h1",[this._v("Contact")]),this._v(" "),e("p",[this._v("工事中")])])}]},g=n("VU/8")(null,p,!1,null,null,null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profile"},[e("h1",[this._v("Profile")]),this._v(" "),e("p",[this._v("工事中")])])}]},k=n("VU/8")(null,C,!1,null,null,null).exports;a.a.use(_.a);var P=new _.a({routes:[{path:"/",name:"HelloWorld",component:d},{path:"/contact",name:"Contact",component:g},{path:"/blog",name:"Blog",component:m},{path:"/profile",name:"Profile",component:k}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:P,components:{App:u},template:"<App/>"})},O7ML:function(t,e,n){t.exports=n.p+"static/img/aikam.7cc76fb.png"},"so/y":function(t,e,n){t.exports=n.p+"static/img/kao.5fea4d3.jpg"}},["NHnr"]);