webpackJsonp([1],{NHnr:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=t("VCXJ"),s={render:function(){var e=this.$createElement,i=this._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var r=t("X4nt")({name:"app"},s,!1,function(e){t("Sxou")},null,null).exports,a=t("zO6J"),l=t("Na2y"),p={data:()=>({list:[{img:"https://qiniu.epipe.cn/5456575529551388672?imageslim&imageView2/1/w/750/h/360"},{img:"https://qiniu.epipe.cn/5430983074181545984?imageslim&imageView2/1/w/750/h/360"},{img:"https://qiniu.epipe.cn/5464226412548325376?imageslim&imageView2/1/w/750/h/360"}]}),components:{Swiper:l.Swiper,Slide:l.Slide},methods:{getNum(e){this.$toast(`==当前滑到了第${e}个`,400)},prevSlideClick(){this.$refs.swiper.prevSlide()},nextSlideClick(){this.$refs.swiper.nextSlide()},slideToClick(){this.$refs.swiper.slideTo(2)}}},o={render:function(){var e=this.$createElement,i=this._self._c||e;return i("div",{staticClass:"hello"},[this.list.length>0?i("Swiper",{ref:"swiper",on:{transtionend:this.getNum}},this._l(this.list,function(e,t){return i("Slide",{key:t},[i("img",{attrs:{src:e.img}})])})):this._e(),this._v(" "),i("div",{staticStyle:{width:"100%",height:"100px",background:"red"}})],1)},staticRenderFns:[]};var u=t("X4nt")(p,o,!1,function(e){t("Qo0q")},"data-v-e199b144",null).exports;n.default.use(a.a);var c=new a.a({routes:[{path:"/",name:"HelloWorld",component:u}]}),d=t("kqZI"),h=t.n(d);n.default.config.productionTip=!1,n.default.use(h.a),new n.default({el:"#app",router:c,template:"<App/>",components:{App:r}})},Qo0q:function(e,i){},Sxou:function(e,i){}},["NHnr"]);
//# sourceMappingURL=app.32937a0c0ea20e8ea7c5.js.map