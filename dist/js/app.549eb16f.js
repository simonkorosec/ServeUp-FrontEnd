(function(e){function t(t){for(var i,o,n=t[0],l=t[1],c=t[2],u=0,m=[];u<n.length;u++)o=n[u],s[o]&&m.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(m.length)m.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],i=!0,n=1;n<r.length;n++){var l=r[n];0!==s[l]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var i={},s={app:0},a=[];function o(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=i,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(r,i,function(t){return e[t]}.bind(null,i));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="../dist/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var d=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"000b":function(e,t,r){e.exports=r.p+"img/ready.86aab7c8.svg"},"13a7":function(e,t,r){e.exports=r.p+"img/tables.bd7d9540.svg"},"14e1":function(e,t,r){e.exports=r.p+"img/history.014144ca.svg"},"1e30":function(e,t,r){"use strict";var i=r("6b4f"),s=r.n(i);s.a},"21bb":function(e,t,r){"use strict";var i=r("bcc9"),s=r.n(i);s.a},"2b89":function(e,t,r){"use strict";var i=r("a78c"),s=r.n(i);s.a},"335c":function(e,t,r){},"33cc":function(e,t,r){},"3b11":function(e,t,r){"use strict";var i=r("f132"),s=r.n(i);s.a},"3ca5":function(e,t,r){e.exports=r.p+"img/orders.bc2f05b2.svg"},"408a":function(e,t,r){},4480:function(e,t,r){},"500c":function(e,t,r){"use strict";var i=r("335c"),s=r.n(i);s.a},"5b1c":function(e,t,r){e.exports=r.p+"img/logo.e422f026.svg"},"5c0b":function(e,t,r){"use strict";var i=r("5e27"),s=r.n(i);s.a},"5c7e":function(e,t,r){e.exports=r.p+"img/stats.83dedc8d.svg"},"5e27":function(e,t,r){},"5fe7":function(e,t,r){"use strict";var i=r("b984"),s=r.n(i);s.a},"6b4f":function(e,t,r){},"6b73":function(e,t,r){"use strict";var i=r("a3ac"),s=r.n(i);s.a},"6dd9":function(e,t,r){},7097:function(e,t,r){},"781f":function(e,t,r){},"8a65":function(e,t,r){"use strict";var i=r("7097"),s=r.n(i);s.a},"8dfd":function(e,t,r){e.exports=r.p+"img/overview.d0fb831d.svg"},9174:function(e,t,r){e.exports=r.p+"img/settings.84bf0914.svg"},"922f":function(e,t,r){"use strict";var i=r("d594"),s=r.n(i);s.a},"96dd":function(e,t,r){},"9c96":function(e,t,r){"use strict";var i=r("781f"),s=r.n(i);s.a},a3ac:function(e,t,r){},a531:function(e,t,r){"use strict";var i=r("408a"),s=r.n(i);s.a},a78c:function(e,t,r){},a8ee:function(e,t,r){"use strict";var i=r("cdc9"),s=r.n(i);s.a},b984:function(e,t,r){},bcc9:function(e,t,r){},bdaf:function(e,t,r){e.exports=r.p+"img/new.6c25e3af.svg"},c7e2:function(e,t,r){"use strict";var i=r("4480"),s=r.n(i);s.a},cd49:function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var i=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"home"}},[i("div",{attrs:{id:"nav"}},[e._m(0),i("router-link",{attrs:{to:"/home/orders"}},[i("img",{attrs:{src:r("3ca5"),alt:"O"}}),i("p",[e._v("Trenutna Naročila")])]),i("router-link",{attrs:{to:"/home/history",append:""}},[i("img",{attrs:{src:r("14e1"),alt:"O"}}),i("p",[e._v("Zgodovina Naročil")])]),i("router-link",{attrs:{to:"/home/QRCode",append:""}},[i("img",{attrs:{src:r("13a7"),alt:"O"}}),i("p",[e._v("Mize")])]),i("router-link",{attrs:{to:"/home/stats",append:""}},[i("img",{attrs:{src:r("5c7e"),alt:"O"}}),i("p",[e._v("Statistika")])]),i("router-link",{attrs:{to:"/home/discounts",append:""}},[i("img",{attrs:{src:r("fa9c"),alt:"O"}}),i("p",[e._v("Popusti")])]),i("router-link",{attrs:{id:"su-nav-settings",to:"/home/settings",append:""}},[i("img",{attrs:{src:r("9174"),alt:"O"}}),i("p",[e._v("Nastavitve")])])],1),i("router-view")],1)},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"su-top-bar"}},[i("img",{attrs:{src:r("5b1c")}}),i("p",[e._v("ServeUp")])])}],l={name:"Home",data:function(){return{}}},c=l,d=(r("21bb"),r("2877")),u=Object(d["a"])(c,o,n,!1,null,null,null);u.options.__file="Home.vue";var m=u.exports,p={components:{Home:m}},v=p,f=(r("5c0b"),Object(d["a"])(v,s,a,!1,null,null,null));f.options.__file="App.vue";var _=f.exports,h=r("8c4f"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"su-orders"}},[e._m(0),r("div",{attrs:{id:"su-orders-container"}},[r("div",{attrs:{id:"su-time-line-box"}},[e._l(e.timeSlots,function(t,i){return r("time-line",{key:i},[r("template",{slot:"timeLabel"},[e._v(e._s(t[3]))]),r("template",{staticClass:"su-time-line-item-new",slot:"sectionNew"},e._l(t[0],function(e){return r("time-line-item",{key:e.orderId,staticClass:"su-time-line-item-new",class:{suHere:e.isHere},attrs:{"order-id":e.orderId}})}),1),r("template",{staticClass:"su-time-line-item-making",slot:"sectionMaking"},e._l(t[1],function(e){return r("time-line-item",{key:e.orderId,staticClass:"su-time-line-item-making",class:{suHere:e.isHere},attrs:{"order-id":e.orderId}})}),1),r("template",{staticClass:"su-time-line-item-new",slot:"sectionReady"},e._l(t[2],function(e){return r("time-line-item",{key:e.orderId,staticClass:"su-time-line-item-ready",class:{suHere:e.isHere},attrs:{"order-id":e.orderId}})}),1)],2)}),e.isEmpty(e.orderCards)?e._e():r("div",{staticClass:"su-time-section-footer"})],2),r("div",{attrs:{id:"su-time-section-box"}},[e._l(e.timeSlots,function(t,i){return r("time-section",{key:i},[r("template",{slot:"timeLabel"},[e._v(e._s(t[3]))]),r("template",{slot:"sectionNew"},e._l(t[0],function(t){return r("order-card",{key:t.orderId,class:{suHereNew:t.isHere,highlighted:t.isHighlighted},attrs:{"order-id":t.orderId,id:"su-card-"+t.orderId}},[r("template",{slot:"arrivalTime"},[e._v(e._s(t.displayTime))]),r("template",{slot:"ownerName"},[e._v(e._s(t.ownerName))]),r("template",{slot:"priceTotal"},[e._v(e._s(t.priceTotal))]),r("template",{slot:"orderItems"},e._l(t.orderItems,function(t){return r("order-card-item",{key:t.id},[r("template",{slot:"amount"},[e._v(e._s(t.amount))]),r("template",{slot:"foodName"},[e._v(e._s(t.name))]),r("template",{slot:"prepTime"},[e._v(e._s(t.prepTime))])],2)}),1),r("template",{slot:"totalPrepTime"},[e._v(e._s(t.totalPrepTime))])],2)}),1),r("template",{slot:"sectionMaking"},e._l(t[1],function(t){return r("order-card",{key:t.orderId,class:{suHereMaking:t.isHere,highlighted:t.isHighlighted},attrs:{"order-id":t.orderId,id:"su-card-"+t.orderId}},[r("template",{slot:"arrivalTime"},[e._v(e._s(t.displayTime))]),r("template",{slot:"ownerName"},[e._v(e._s(t.ownerName))]),r("template",{slot:"priceTotal"},[e._v(e._s(t.priceTotal))]),r("template",{slot:"orderItems"},e._l(t.orderItems,function(t){return r("order-card-item",{key:t.id},[r("template",{slot:"amount"},[e._v(e._s(t.amount))]),r("template",{slot:"foodName"},[e._v(e._s(t.name))]),r("template",{slot:"prepTime"},[e._v(e._s(t.prepTime))])],2)}),1),r("template",{slot:"totalPrepTime"},[e._v(e._s(t.totalPrepTime))])],2)}),1),r("template",{slot:"sectionReady"},e._l(t[2],function(t){return r("order-card",{key:t.orderId,class:{suHereReady:t.isHere,highlighted:t.isHighlighted},attrs:{"order-id":t.orderId,id:"su-card-"+t.orderId}},[r("template",{slot:"arrivalTime"},[e._v(e._s(t.displayTime))]),r("template",{slot:"ownerName"},[e._v(e._s(t.ownerName))]),r("template",{slot:"priceTotal"},[e._v(e._s(t.priceTotal))]),r("template",{slot:"orderItems"},e._l(t.orderItems,function(t){return r("order-card-item",{key:t.id},[r("template",{slot:"amount"},[e._v(e._s(t.amount))]),r("template",{slot:"foodName"},[e._v(e._s(t.name))]),r("template",{slot:"prepTime"},[e._v(e._s(t.prepTime))])],2)}),1),r("template",{slot:"totalPrepTime"},[e._v(e._s(t.totalPrepTime))])],2)}),1)],2)}),e.isEmpty(e.orderCards)?e._e():r("div",{staticClass:"su-time-section-footer"})],2)])])},b=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"su-top-bar"},[i("div",{staticClass:"pregled"},[i("img",{attrs:{src:r("8dfd")}}),i("p",[e._v("Pregled")])]),i("div",[i("img",{attrs:{src:r("bdaf")}}),i("p",[e._v("Nova naročila")])]),i("div",[i("img",{attrs:{src:r("da49")}}),i("p",[e._v("V pripravi")])]),i("div",[i("img",{attrs:{src:r("000b")}}),i("p",[e._v("Pripravljeno")])])])}],y=(r("55dd"),r("a4bb")),C=r.n(y),w=(r("ac6a"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"su-time-section"},[r("div",{staticClass:"su-time-section-divider",on:{click:e.toggleContent}},[r("p",[e._t("timeLabel")],2)]),e.visible?r("div",{staticClass:"su-time-section-container"},[r("div",{staticClass:"su-time-section-new"},[e._t("sectionNew")],2),r("div",{staticClass:"su-time-section-making"},[e._t("sectionMaking")],2),r("div",{staticClass:"su-time-section-ready"},[e._t("sectionReady")],2)]):e._e()])}),T=[],k={name:"TimeSection",data:function(){return{visible:!0}},methods:{toggleContent:function(){this.visible=!this.visible}}},I=k,x=(r("a8ee"),Object(d["a"])(I,w,T,!1,null,"4a608c66",null));x.options.__file="TimeSection.vue";var O=x.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"su-order-card-body",class:e.highlighted=e.isHighlighted},[r("div",{staticClass:"su-order-card-header"},[r("p",{staticClass:"su-order-card-owner"},[e._v("ID: "),e._t("ownerName")],2),r("p",{staticClass:"su-order-card-time"},[e._v("ob "),e._t("arrivalTime")],2),r("p",{staticClass:"su-order-card-total"},[e._t("priceTotal"),e._v("€")],2)]),r("div",{staticClass:"su-order-card-items"},[e._t("orderItems")],2),r("div",{staticClass:"su-order-card-footer"},[r("button",{on:{click:function(t){e.changeStatusCard()}}},[e._v("NASLEDNJI KORAK")]),r("p",[e._t("totalPrepTime"),e._v("m")],2)])])},H=[],N=(r("c5f6"),new i["a"]),S="https://serveup-backend.herokuapp.com/api/",E={name:"OrderCard",props:{orderId:Number},data:function(){return{isHighlighted:!1}},methods:{changeStatusCard:function(){N.$emit("changeStatus",this.orderId)}}},$=E,P=(r("500c"),Object(d["a"])($,j,H,!1,null,"eedd5492",null));P.options.__file="OrderCard.vue";var L=P.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"su-order-item-body"},[r("p",[e._t("amount"),e._v("x")],2),r("p",[e._t("foodName")],2),r("p",[e._t("prepTime"),e._v("m")],2)])},R=[],D={name:"OrderCardItem"},A=D,U=(r("d527"),Object(d["a"])(A,M,R,!1,null,"8b26ad1a",null));U.options.__file="OrderCardItem.vue";var z=U.exports,Q=r("bc3a"),q=r.n(Q),F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"su-time-line"},[r("div",{staticClass:"su-time-line-divider",on:{click:e.toggleContent}},[r("p",[e._t("timeLabel")],2)]),e.visible?r("div",{staticClass:"su-time-line-container"},[r("div",{staticClass:"su-time-line-new"},[e._t("sectionNew")],2),r("div",{staticClass:"su-time-line-making"},[e._t("sectionMaking")],2),r("div",{staticClass:"su-time-line-ready"},[e._t("sectionReady")],2)]):e._e()])},J=[],V={name:"TimeLine",data:function(){return{visible:!0}},methods:{toggleContent:function(){this.visible=!this.visible}}},K=V,B=(r("3b11"),Object(d["a"])(K,F,J,!1,null,"0292a71d",null));B.options.__file="TimeLine.vue";var Z=B.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"su-time-line-item",on:{click:function(t){e.highlightOrder()}}})},W=[],X={name:"TimeLineItem",props:{orderId:Number},methods:{highlightOrder:function(){console.log(this.orderId),N.$emit("highlight",this.orderId)}}},Y=X,ee=(r("5fe7"),Object(d["a"])(Y,G,W,!1,null,"578f2cb0",null));ee.options.__file="TimeLineItem.vue";var te=ee.exports,re=r("25c1"),ie=(r("2ef0"),{name:"Orders",components:{TimeLineItem:te,TimeLine:Z,OrderCardItem:z,OrderCard:L,TimeSection:O},data:function(){return{orderCards:[],refreshInterval:5e3,scrollOptions:{container:"#su-time-section-box",easing:"ease-in",offset:-60,force:!0,cancelable:!0,onStart:function(e){},onDone:function(e){},onCancel:function(){},x:!1,y:!0}}},computed:{timeSlots:function(){var e=this,t={};return this.orderCards.forEach(function(r){var i=r.arrivalTime;i.setSeconds(0),i.getMinutes()<30?i.setMinutes(0):i.setMinutes(30),i in t||(t[i]=[[],[],[],e.getDisplayTime(i)]),t[i][r.orderStatus].unshift(r)}),t}},methods:{isEmpty:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},parseOrder:function(e){var t={orderId:e.id_narocila,orderStatus:e.status,isHere:e.checked_in,arrivalTime:new Date(e.cas_prevzema),displayTime:"",ownerName:e.id_uporabnik,priceTotal:e.cena,totalPrepTime:0,isHighlighted:!1,orderItems:[]};return t.displayTime=this.getDisplayTime(t.arrivalTime),C()(e.jedi).forEach(function(r){var i=e.jedi[r],s=Math.floor(15*Math.random()+5);t.totalPrepTime+=s,t.orderItems.push({id:i.id_jed,amount:i.kolicina,name:i.ime_jedi,prepTime:s,price:i.cena})}),t},getDisplayTime:function(e){return e.getHours()+":"+("0"+e.getMinutes()).slice(-2)}},created:function(){var e=this;q.a.get(S+"orders/?id_restavracija=6").then(function(t){console.log("Response data",t.data.data),C()(t.data.data).forEach(function(r){if(3!==t.data.data[r].status){var i=e.parseOrder(t.data.data[r]);e.orderCards.push(i)}}),e.orderCards.sort(function(e,t){return e.arrivalTime-t.arrivalTime})})},mounted:function(){var e=this.orderCards,t=this.scrollOptions;N.$off(),N.$on("changeStatus",function(t){var r=null,i=-1;e.forEach(function(e,s){e.orderId===t&&(r=e,i=s)}),2===r.orderStatus&&e.splice(i,1),r.orderStatus+=1,q.a.post(S+"orders/status_update/",{id_narocilo:r.orderId,status:r.orderStatus}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}),N.$on("highlight",function(r){var i=e.filter(function(e){return e.orderId===r})[0];i.isHighlighted=!0;var s="#su-card-"+r;re["a"].scrollTo(s,200,t),setTimeout(function(){i.isHighlighted=!1,console.log("timeout")},1e3)}),setInterval(function(){var e=this;q.a.get(S+"orders/refresh/?id_restavracija=6").then(function(t){var r=this;console.log("Refresh data",t.data),0!==t.data.new_orders.length&&(console.log("Refresh data rcv",t.data),C()(t.data.new_orders).forEach(function(r){var i=e.parseOrder(t.data.data[r]);e.orderCards.push(i)}),e.orderCards.sort(function(e,t){return e.arrivalTime-t.arrivalTime})),0!==t.data.cancelled_orders.length&&(console.log("Refresh data rcv",t.data),t.data.cancelled_orders.forEach(function(t){e.$delete(r.orderCards,t)}))}).catch(function(e){console.log("refresh error",e)})},this.refreshInterval)}}),se=ie,ae=(r("c7e2"),Object(d["a"])(se,g,b,!1,null,"2cc35aea",null));ae.options.__file="Orders.vue";var oe=ae.exports,ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"su-history"}},[e._m(0),r("div",{staticClass:"su-history-container"},[r("div",{staticClass:"su-history-line-box"},e._l(e.timeSlots,function(t){return r("history-line",{key:t[1]},[r("template",{slot:"timeLabel"},[e._v("10:30")]),r("template",{slot:"lineItems"},e._l(t[0],function(e){return r("history-line-item",{key:e.orderId,attrs:{"order-id":e.orderId}})}),1)],2)}),1),r("history-tab",[r("template",{slot:"historyTimeSections"},e._l(e.timeSlots,function(t){return r("history-section",{key:t[1]},[r("template",{slot:"timeLabel"},[e._v(e._s(t[1]))]),r("template",{slot:"historyCards"},e._l(t[0],function(t){return r("history-card",{key:t.orderId},[r("template",{slot:"arrivalTime"},[e._v(e._s(t.displayTime))]),r("template",{slot:"ownerName"},[e._v(e._s(t.ownerName))]),r("template",{slot:"priceTotal"},[e._v(e._s(t.priceTotal))]),r("template",{slot:"historyItems"},e._l(t.orderItems,function(t){return r("history-card-item",{key:t.id},[r("template",{slot:"amount"},[e._v(e._s(t.amount))]),r("template",{slot:"foodName"},[e._v(e._s(t.name))]),r("template",{slot:"price"},[e._v(e._s(t.price))])],2)}),1)],2)}),1)],2)}),1)],2)],1)])},le=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"su-history-date"},[r("p",[e._v("DATE")])])}],ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"su-history-tab"},[e._t("historyTimeSections")],2)},de=[],ue={name:"HistoryTab"},me=ue,pe=(r("2b89"),Object(d["a"])(me,ce,de,!1,null,"c21c9038",null));pe.options.__file="HistoryTab.vue";var ve=pe.exports,fe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"su-history-time-section"},[r("div",{staticClass:"su-history-time-section-divider",on:{click:e.toggleContent}},[r("p",[e._t("timeLabel")],2)]),e.visible?r("div",{staticClass:"su-history-section-container"},[e._t("historyCards")],2):e._e()])},_e=[],he={name:"HistorySection",data:function(){return{visible:!0}},methods:{toggleContent:function(){this.visible=!this.visible}}},ge=he,be=(r("8a65"),Object(d["a"])(ge,fe,_e,!1,null,"3a8edf69",null));be.options.__file="HistorySection.vue";var ye=be.exports,Ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"su-card-wrapper"},[r("div",{staticClass:"su-history-card-body",class:e.highlighted=e.isHighlighted},[r("div",{staticClass:"su-history-card-header"},[r("p",{staticClass:"su-history-card-owner"},[e._v("ID:"),e._t("ownerName")],2),r("p",{staticClass:"su-history-card-time"},[e._v("ob "),e._t("arrivalTime")],2),r("p",{staticClass:"su-history-card-total"},[e._t("priceTotal"),e._v("€")],2)]),r("div",{staticClass:"su-history-card-items"},[e._t("historyItems")],2)])])},we=[],Te={name:"HistoryCard"},ke=Te,Ie=(r("1e30"),Object(d["a"])(ke,Ce,we,!1,null,"221a7202",null));Ie.options.__file="HistoryCard.vue";var xe=Ie.exports,Oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"su-history-item-body"},[r("p",[e._t("amount"),e._v("x")],2),r("p",[e._t("foodName")],2),r("p",[e._t("price"),e._v("€")],2)])},je=[],He={name:"HistoryCardItem"},Ne=He,Se=(r("e705"),Object(d["a"])(Ne,Oe,je,!1,null,"3a808298",null));Se.options.__file="HistoryCardItem.vue";var Ee=Se.exports,$e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"su-history-line"},[r("div",{staticClass:"su-history-line-divider",on:{click:e.toggleContent}},[r("p",[e._t("timeLabel")],2)]),e.visible?r("div",{staticClass:"su-history-line-container"},[e._t("lineItems")],2):e._e()])},Pe=[],Le={name:"HistoryLine",data:function(){return{visible:!0}},methods:{toggleContent:function(){this.visible=!this.visible}}},Me=Le,Re=(r("a531"),Object(d["a"])(Me,$e,Pe,!1,null,"55eae332",null));Re.options.__file="HistoryLine.vue";var De=Re.exports,Ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"su-history-line-item-wrapper"},[r("div",{staticClass:"su-history-line-item",on:{click:function(t){e.highlightOrder()}}})])},Ue=[],ze={name:"HistoryLineItem",props:{orderId:Number},methods:{highlightOrder:function(){console.log(this.orderId),N.$emit("highlightHis",this.orderId)}}},Qe=ze,qe=(r("e6ba"),Object(d["a"])(Qe,Ae,Ue,!1,null,"215bb532",null));qe.options.__file="HistoryLineItem.vue";var Fe=qe.exports,Je={name:"History",components:{HistoryLineItem:Fe,HistoryLine:De,HistoryCardItem:Ee,HistoryCard:xe,HistorySection:ye,HistoryTab:ve},data:function(){return{orderCards:[]}},computed:{timeSlots:function(){var e=this,t={};return this.orderCards.forEach(function(r){var i=r.arrivalTime;i.setSeconds(0),i.getMinutes()<30?i.setMinutes(0):i.setMinutes(30),i in t||(t[i]=[[],e.getDisplayTime(i)]),t[i][0].unshift(r)}),t}},methods:{parseOrder:function(e){var t={orderId:e.id_narocila,orderStatus:e.status,isHere:e.checked_in,arrivalTime:new Date(e.cas_prevzema),displayTime:"",ownerName:e.id_uporabnik,priceTotal:e.cena,totalPrepTime:0,isHighlighted:!1,orderItems:[]};return t.displayTime=this.getDisplayTime(t.arrivalTime),C()(e.jedi).forEach(function(r){var i=e.jedi[r];t.totalPrepTime+=i.cena,t.orderItems.push({id:i.id_jed,amount:i.kolicina,name:i.ime_jedi,prepTime:i.cena,price:i.cena})}),t},getDisplayTime:function(e){return e.getHours()+":"+("0"+e.getMinutes()).slice(-2)}},created:function(){var e=this;q.a.get(S+"orders/?id_restavracija=6").then(function(t){console.log("Response data",t.data.data),C()(t.data.data).forEach(function(r){if(3===t.data.data[r].status){var i=e.parseOrder(t.data.data[r]);e.orderCards.push(i)}}),e.orderCards.sort(function(e,t){return e.arrivalTime-t.arrivalTime})})}},Ve=Je,Ke=(r("9c96"),Object(d["a"])(Ve,ne,le,!1,null,"cb7ea31a",null));Ke.options.__file="History.vue";var Be=Ke.exports,Ze=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("form",[r("label",{staticClass:"companyName"},[e._v("ServeUp")]),r("br"),r("br"),r("br"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",name:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",name:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("br"),r("p",{attrs:{id:"error"}},[e._v(e._s(e.error))]),r("p",{staticClass:"forgot_pass"},[e._v("Forgot password?")]),r("br"),r("button",{attrs:{type:"button"},on:{click:function(t){e.login()}}},[e._v("Log in")]),r("br"),r("br"),r("label",[e._v("Don't have an account?")]),r("br"),r("router-link",{staticClass:"link",attrs:{to:"/sing_up"}},[e._v("Sign up")])],1)])},Ge=[],We={name:"Login",data:function(){return{email:"peter@gmail.com",password:"pan",error:""}},methods:{login:function(){var e=this;""===this.email||""===this.password?this.error="Uporabnisko ime in geslo ne smeta biti prazna.":q.a.post(S+"admin_user/login/",{email:this.email,password:this.password,format:"json"}).then(function(t){console.log(t.data),console.log("Uporabnik obstaja"),e.$router.push({path:"/home/orders"})}).catch(function(t){console.log(t),e.error=t.response.data.description,console.log("Uporabnik ne obstaja")}),this.$session.start(),this.$session.set("jwt","test")}}},Xe=We,Ye=(r("6b73"),Object(d["a"])(Xe,Ze,Ge,!1,null,"7636e576",null));Ye.options.__file="Login.vue";var et=Ye.exports,tt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("form",[r("label",{staticClass:"companyName"},[e._v("ServeUp")]),r("br"),r("br"),r("br"),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.full_name,expression:"full_name"}],attrs:{type:"text",placeholder:"Full name"},domProps:{value:e.full_name},on:{input:function(t){t.target.composing||(e.full_name=t.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.conf_password,expression:"conf_password"}],attrs:{type:"text",placeholder:"Confirm Password"},domProps:{value:e.conf_password},on:{input:function(t){t.target.composing||(e.conf_password=t.target.value)}}}),r("br"),r("p",{attrs:{id:"error"}},[e._v(e._s(e.error))]),r("br"),r("button",{attrs:{type:"button"},on:{click:function(t){e.register()}}},[e._v("Sign up")]),r("br"),r("br"),r("label",[e._v("Already have account?")]),r("br"),r("router-link",{staticClass:"link",attrs:{to:"/"}},[e._v("Log in")]),r("router-link",{staticClass:"link",attrs:{to:"/QRCode"}},[e._v("qr")])],1)])},rt=[],it={name:"Register",data:function(){return{full_name:"",email:"",password:"",conf_password:"",error:""}},methods:{register:function(){var e=this;""===this.full_name||""===this.email||""===this.password||""===this.conf_password?this.error="Vsi podatki morajo biti vnešeni":q.a.post(S+"api/admin_user/register/",{email:this.email,password:this.password,format:"json"}).then(function(t){console.log(t.data),console.log("Uporabnik uspesno dodan"),e.error="Registracija uspela."}).catch(function(t){console.log(t.response.data.description),e.error=t.response.data.description,console.log("Uporabnika ni bilo mogoče dodati")})}},mounted:function(){this.$session.exists()?console.log("obstaja"):console.log("ne obstaja")}},st=it,at=(r("922f"),Object(d["a"])(st,tt,rt,!1,null,"be6ad306",null));at.options.__file="Register.vue";var ot=at.exports,nt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("label",[e._v("asdasdasdads")]),r("qrcode-vue",{attrs:{value:e.value,size:e.size,level:"H"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"text",placeholder:"Text"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),r("br"),r("button",{directives:[{name:"print",rawName:"v-print"}]},[e._v("Print local range")])],1)},lt=[],ct=r("d7b0"),dt={name:"QRCode",data:function(){return{value:"aaaaa",size:300}},components:{QrcodeVue:ct["a"]},beforeCreate:function(){try{this.$session.exists()?console.log("obstaja"):this.$router.push({name:"login"})}catch(e){this.$router.push({name:"login"})}},mounted:function(){this.$session.exists()?console.log("obstaja"):console.log("ne obstaja")}},ut=dt,mt=Object(d["a"])(ut,nt,lt,!1,null,"466a3892",null);mt.options.__file="QRCode.vue";var pt=mt.exports;i["a"].use(h["a"]);var vt=new h["a"]({base:"../dist/",routes:[{path:"/",name:"login",component:et},{path:"/sing_up",name:"register",component:ot},{path:"/home",name:"home",component:m,children:[{path:"orders",name:"orders",component:oe},{path:"history",name:"history",component:Be},{path:"QRCode",name:"qrcode",component:pt}]}]}),ft=r("2f62");i["a"].use(ft["a"]);var _t=new ft["a"].Store({state:{},mutations:{},actions:{}}),ht=r("9483");Object(ht["a"])("".concat("../dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var gt=r("a41e"),bt=r.n(gt),yt=r("0628"),Ct=r.n(yt);i["a"].config.productionTip=!1,new i["a"]({router:vt,store:_t,render:function(e){return e(_)}}).$mount("#app");i["a"].use(Ct.a),i["a"].use(bt.a)},cdc9:function(e,t,r){},d527:function(e,t,r){"use strict";var i=r("33cc"),s=r.n(i);s.a},d594:function(e,t,r){},da49:function(e,t,r){e.exports=r.p+"img/making.d9d9abff.svg"},e6ba:function(e,t,r){"use strict";var i=r("96dd"),s=r.n(i);s.a},e705:function(e,t,r){"use strict";var i=r("6dd9"),s=r.n(i);s.a},f132:function(e,t,r){},fa9c:function(e,t,r){e.exports=r.p+"img/discounts.77975753.svg"}});
//# sourceMappingURL=app.549eb16f.js.map