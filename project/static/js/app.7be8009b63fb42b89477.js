webpackJsonp([1],{"4L72":function(t,e){},"6E1I":function(t,e){},"9n10":function(t,e){},AgQL:function(t,e){},C76v:function(t,e){},CKt3:function(t,e){},DEx0:function(t,e){},Hw9z:function(t,e){},I0RU:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("4L72")},null,null).exports,r=i("/ocq"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n        "+this._s(this.$store.state.city)+"\n        "),e("span",{staticClass:"iconfont up-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont ba-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("请输入城市 / 景点 / 游玩主题")])}]};var c=i("VU/8")({name:"Header"},o,!1,function(t){i("uCBK")},"data-v-54f4b888",null).exports,l={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showswiper:function(){return this.list.length}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wranpper"},[this.showswiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var u=i("VU/8")(l,d,!1,function(t){i("jIqL")},"data-v-421c289c",null).exports,h={name:"icons",props:{iconlist:Array},computed:{iconsLength:function(){return this.iconlist.length},pages:function(){var t=[];return this.iconlist.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[t.iconsLength?i("swiper",t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("p",{staticClass:"icon-sesc"},[t._v(t._s(e.desc))])])}))})):t._e()],1)},staticRenderFns:[]};var p=i("VU/8")(h,v,!1,function(t){i("sLfn")},"data-v-a927b28c",null).exports,f={name:"recommend",props:{recommend:Array}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"hot-title"},[t._v("推荐信息")]),t._v(" "),i("ul",t._l(t.recommend,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}))])},staticRenderFns:[]};var _=i("VU/8")(f,m,!1,function(t){i("Hw9z")},"data-v-7827e4e8",null).exports,w={name:"weekcommend",props:{weekcommend:Array}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"hot-title"},[t._v("周末去哪儿玩")]),t._v(" "),i("ul",t._l(t.weekcommend,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wraper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var g=i("VU/8")(w,C,!1,function(t){i("CKt3")},"data-v-eefe9350",null).exports,y=i("mtWM"),b=i.n(y),k={name:"home",components:{HomeHeader:c,HomeSwiper:u,Icons:p,Recommend:_,Weekcommend:g},data:function(){return{city:"",list:[],iconlist:[],recommend:[],weekcommend:[]}},methods:{getHomeData:function(){b.a.get("/api/index.json?city="+this.city).then(this.getsucc).catch(this.geterror)},getsucc:function(t){if((t=t.data).data&&t.ret){var e=t.data;this.city=e.city,this.list=e.swiperList,this.iconlist=e.iconList,this.recommend=e.recommendList,this.weekcommend=e.weekendList}},geterror:function(t){console.log(t)}},mounted:function(){this.getHomeData()}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.list}}),t._v(" "),i("icons",{attrs:{iconlist:t.iconlist}}),t._v(" "),i("Recommend",{attrs:{recommend:t.recommend}}),t._v(" "),i("Weekcommend",{attrs:{weekcommend:t.weekcommend}})],1)},staticRenderFns:[]};var x=i("VU/8")(k,$,!1,function(t){i("I0RU")},null,null).exports,E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n\t城市选择\n\t"),e("div",[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])],1)])},staticRenderFns:[]};var F=i("VU/8")({name:"cityHeader"},E,!1,function(t){i("Ysi8")},"data-v-5279c4f6",null).exports,S=i("GQaK"),U={name:"serch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},methods:{handelCheckHotcity:function(t){this.$store.commit("changeCity",t),this.$router.push("/")}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},mounted:function(){this.bscroll=new S.a(this.$refs.serch)},computed:{hasNodata:function(){return!this.list.length}}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"serch"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"SerchInput",attrs:{type:"text",placeholder:"请输入城市或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"serch",staticClass:"serch-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"serch-item border-bottom",on:{click:function(i){t.handelCheckHotcity(e.name)}}},[t._v(t._s(e.name))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNodata,expression:"hasNodata"}],staticClass:"serch-item border-bottom no-data"},[t._v("\n\t\t\t\t没有找到匹配项\n\t\t\t")])],2)])])},staticRenderFns:[]};var T=i("VU/8")(U,I,!1,function(t){i("DEx0")},"data-v-040fecc8",null).exports,R={name:"list",props:{hot:Array,cities:Object,latter:String},methods:{handelCheckHotcity:function(t){this.$store.commit("changeCity",t),this.$router.push("/")}},watch:{latter:function(){var t=this.$refs[this.latter][0];this.latter&&this.scroll.scrollToElement(t)}},mounted:function(){this.scroll=new S.a(this.$refs.wrapper)}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"botton-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.$store.state.city))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"botton-list"},t._l(t.hot,function(e){return i("div",{key:e.id,staticClass:"button-wrapper"},[i("div",{staticClass:"button",on:{click:function(i){t.handelCheckHotcity(e.name)}}},[t._v(t._s(e.name))])])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),t._l(e,function(e){return i("div",{key:e.id,staticClass:"item-list",on:{click:function(i){t.handelCheckHotcity(e.name)}}},[i("div",{staticClass:"item border-bottom"},[t._v(t._s(e.name))])])})],2)})],2)])},staticRenderFns:[]};var D=i("VU/8")(R,A,!1,function(t){i("C76v")},"data-v-522fea93",null).exports,L={name:"alphalet",props:{cities:Object},data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{handelFunction:function(t){this.$emit("change",t.target.innerText)},handelTouchStart:function(){this.touchStatus=!0},handelTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<=e.letters.length&&e.$emit("change",e.letters[s])},16))},handeltouchend:function(){this.touchstatus=!1}}},v={render:function(){var t="this,e=t.$createElement,i=t._self._c||e;return" i("ul",{staticclass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refinfor:!0,staticclass:"item",on:{touchstart:function(e){return e.preventdefault(),t.handeltouchstart(e)},touchmove:t.handeltouchmove,touchend:t.handeltouchend,click:t.handelfunction}},[t._v(t._s(e))])}))},staticrenderfns:[]};var h="{name:"city",components:{CityHeader:F,Serch:T,List:D,Alphalet:i("VU/8")(L,V,!1,function(t){i("V2y1")},"data-v-eccf0d5a",null).exports},data:function(){return{hotCities:[],cities:{},latter:""}},methods:{getINfo:function(){b.a.get("/api/city.json").then(this.getInfoData).catch(this.daTaerr)},getInfoData:function(t){var" e="t.data;if(e.data){var" i="e.data;this.hotCities=i.hotCities,this.cities=i.cities}},daTaerr:function(t){console.log(t)},alPhaletFuncchange:function(t){this.latter=t}},mounted:function(){this.getINfo()}},N={render:function(){var" i("div",[i("city-header"),t._v(" "),i("serch",{attrs:{cities:t.cities}}),t._v(" "),i("list",{attrs:{cities:t.cities,hot:t.hotcities,latter:t.latter}}),t._v(" "),i("alphalet",{attrs:{cities:t.cities},on:{change:t.alphaletfuncchange}})],1)},staticrenderfns:[]};var o="i("VU/8")(H,N,!1,function(t){i("AgQL")},"data-v-0afe6416",null).exports,j={name:"gallary",props:{imgs:{type:Array}},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handelGallaryClick:function(){this.$emit("close")}}},G={render:function(){var" e("div",{staticclass:"gallary",on:{click:this.handelgallaryclick}},[e("div",{staticclass:"wrapper"},[e("swiper",{attrs:{options:this.swiperoption}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticclass:"gallary-img",attrs:{src:t,alt:""}})])}),this._v(" "),e("div",{staticclass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticrenderfns:[]};var m="i("VU/8")(j,G,!1,function(t){i("tY79")},null,null).exports,Y={render:function(){var" z="i("VU/8")({name:"fade"},Y,!1,function(t){i("ko37")},"data-v-192d2fd5",null).exports,P={name:"banner",props:{bannerData:Object,gallaryImgs:Array},data:function(){return{showGallary:!1}},methods:{handelBannerClick:function(){this.showGallary=!0},handelCloseGallary:function(){this.showGallary=!1}},components:{Gallary:M,FadeAnimation:z},computed:{gallaryImgLength:function(){return" this.gallaryimgs.length}}},b="{render:function(){var" i("div",[i("div",{staticclass:"banner",on:{click:t.handelbannerclick}},[i("img",{staticclass:"banner-img",attrs:{src:t.bannerdata.bannerimg,alt:""}}),t._v(" "),i("div",{staticclass:"banner-info"},[i("div",{staticclass:"banner-title"},[t._v(t._s(t.bannerdata.sightname))]),t._v(" "),i("div",{staticclass:"banner-number"},[i("span",{staticclass:"iconfont banner-icon"},[t._v("")]),t._v(t._s(t.gallaryimglength))])])]),t._v(" "),i("fade-animation",[i("gallary",{directives:[{name:"show",rawname:"v-show",value:t.showgallary,expression:"showgallary"}],attrs:{imgs:t.gallaryimgs},on:{close:t.handelclosegallary}})],1)],1)},staticrenderfns:[]};var w="i("VU/8")(P,B,!1,function(t){i("z/44")},"data-v-041a73bc",null).exports,K={name:"detail-header",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handelScroll:function(){var">60){console.log("666666666666666");var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},activated:function(){window.addEventListener("scroll",this.handelScroll)},deactivated:function(){window.removeEventListener("scroll",this.handelScroll)}},q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail-header"},[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[e("span",{staticClass:"iconfont header-abs-icon"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-fixed-back-icon"},[this._v("")])]),this._v("\n    景点详情\n  ")],1)],1)},staticRenderFns:[]};var Q=i("VU/8")(K,q,!1,function(t){i("hFWl")},"data-v-6eac38ee",null).exports,Z={name:"detail-list",props:{list:{type:Array}}},J={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list"},t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n\t\t\t"+t._s(e.title)+"\n\t\t")]),t._v(" "),e.children?i("div",{staticClass:"item-chilren"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}))},staticRenderFns:[]};var X={name:"detail",data:function(){return{list:[],bannerData:{},gallaryImgs:[]}},components:{DetailBanner:W,DetailHeader:Q,DetailList:i("VU/8")(Z,J,!1,function(t){i("6E1I")},"data-v-6d73b440",null).exports},methods:{getDetailData:function(){var t=this;b.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(function(e){if(e.data){var i=e.data;t.list=i.data.categoryList,t.bannerData=i.data,t.gallaryImgs=i.data.gallaryImgs}}).catch(function(t){console.log(t)})}},mounted:function(){this.getDetailData()}},tt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail"},[e("detail-header"),this._v(" "),e("detail-banner",{attrs:{bannerData:this.bannerData,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("div",{staticClass:"content"},[e("detail-list",{attrs:{list:this.list}})],1)],1)},staticRenderFns:[]};var et=i("VU/8")(X,tt,!1,function(t){i("UcZF")},"data-v-be8a6720",null).exports;s.a.use(r.a);var it=new r.a({routes:[{path:"/",name:"Home",component:x},{path:"/city",name:"City",component:O},{path:"/detail/:id",name:"Detail",component:et}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),st=i("v5o6"),nt=i.n(st),at=i("F3EI"),rt=i.n(at),ot=i("NYxO");s.a.use(ot.a);var ct=new ot.a.Store({state:{city:"香港"},mutations:{changeCity:function(t,e){t.city=e}}});i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns"),i("j1ja");s.a.config.productionTip=!1,nt.a.attach(document.body),s.a.use(rt.a),new s.a({el:"#app",router:it,store:ct,components:{App:a},template:"<app>"})},TzC8:function(t,e){},UcZF:function(t,e){},V2y1:function(t,e){},Ysi8:function(t,e){},hFWl:function(t,e){},jIqL:function(t,e){},ko37:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},sLfn:function(t,e){},tY79:function(t,e){},uCBK:function(t,e){},v2ns:function(t,e){},"z/44":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7be8009b63fb42b89477.js.map</app></=e.letters.length&&e.$emit("change",e.letters[s])},16))},handeltouchend:function(){this.touchstatus=!1}}},v={render:function(){var>