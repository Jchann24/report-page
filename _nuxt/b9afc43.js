(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(t,n,e){"use strict";var o={name:"LayoutDefault"},r=e(8),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("CoreNavbar"),this._v(" "),n("CoreNavigation"),this._v(" "),n("hr",{staticStyle:{"max-width":"50%",margin:"2em auto 2em auto"}}),this._v(" "),n("div",{attrs:{id:"content"}},[n("nuxt")],1)],1)}),[],!1,null,null,null);n.a=component.exports;installComponents(component,{CoreNavbar:e(190).default,CoreNavigation:e(191).default})},131:function(t,n,e){e(132),t.exports=e(133)},172:function(t,n,e){var content=e(173);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("e622d370",content,!0,{sourceMap:!1})},173:function(t,n,e){(n=e(29)(!1)).push([t.i,'body{margin-top:150px;font-family:"Quicksand",sans-serif;background-color:#f8f8f8;font-size:16px}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-active{opacity:0}',""]),t.exports=n},176:function(t,n,e){"use strict";var o=e(65);e.n(o).a},177:function(t,n,e){(n=e(29)(!1)).push([t.i,".navbar{border-radius:10px 10px 10px 10px;margin:20px 20px 0}",""]),t.exports=n},178:function(t,n,e){"use strict";var o=e(66);e.n(o).a},179:function(t,n,e){(n=e(29)(!1)).push([t.i,".dropdown-menu[data-v-6cad650a]{display:block;opacity:0;pointer-events:none;transition:opacity .45s}.dropdown-menu.show[data-v-6cad650a]{opacity:1;pointer-events:auto}.dropdown-item[data-v-6cad650a]:focus,.nuxt-link-exact-active[data-v-6cad650a]{background-color:hsla(0,0%,76.1%,.551)}.dropdown-item[data-v-6cad650a]:focus{color:#000}",""]),t.exports=n},190:function(t,n,e){"use strict";e.r(n);var o={name:"Navbar"},r=(e(176),e(8)),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("nav",{staticClass:"navbar fixed-top navbar-expand-md navbar-light bg-light shadow mb-4"},[n("div",{staticClass:"container-fluid"},[n("nuxt-link",{staticClass:"navbar-brand m-0 py-2",attrs:{to:"/",tag:"a"}},[n("img",{attrs:{src:"https://image.psikolif.com/wp-content/uploads/2018/10/Logo-Binus-University-Universitas-Bina-Nusantara-Original-PNG.png",alt:"",srcset:"",width:"100",height:"56"}})]),this._v(" "),this._m(0),this._v(" "),this._m(1)],1)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{id:"togglerNav",type:"button","data-toggle":"collapse","data-target":"#navbarContent","aria-controls":"navbarContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarContent"}},[n("ul",{staticClass:"navbar-nav  ml-auto mb-2 mb-lg-0"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link mr-md-4 p-0 my-2 float-right mr-2",attrs:{href:"https://github.com/Jchann24/report-page",target:"_blank"}},[n("img",{attrs:{src:"https://www.flaticon.com/svg/static/icons/svg/25/25231.svg",alt:"github repo",width:"40"}})])]),this._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link mr-md-4 p-0 my-2 float-right mr-2",attrs:{href:"https://www.linkedin.com/in/nicholas-jason-44b828190/",target:"_blank"}},[n("img",{attrs:{src:"https://www.flaticon.com/svg/static/icons/svg/174/174857.svg",alt:"my linkedin",width:"40"}})])]),this._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link mr-md-4 p-0 my-2 float-right mr-2",attrs:{href:"https://jchann24.github.io/personal-portfolio/",target:"_blank"}},[n("img",{attrs:{src:"https://www.iconfinder.com/data/icons/wireframes-7/100/Profile-512.png",alt:"my portfolio",width:"45"}})])])])])}],!1,null,null,null);n.default=component.exports},191:function(t,n,e){"use strict";e.r(n);var o={name:"CoreNavigation",data:function(){return{months:["sep","oct","nov","dec","jan","feb"]}}},r=(e(178),e(8)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bg-light py-4 mx-4 rounded-lg shadow-lg",staticStyle:{"border-left":"6px solid #474d6e"}},[t._m(0),t._v(" "),e("div",{staticClass:"container mt-4"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-4 col-md-6"},[e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-outline-secondary font-weight-bolder dropdown-toggle",attrs:{id:"btnNav",type:"button","data-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n            Navigation\n          ")]),t._v(" "),e("ul",{class:"dropdown-menu mt-3 shadow-lg rounded-lg",attrs:{id:"ddMenu"}},[e("nav",[e("li",[e("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/",tag:"a"}},[t._v("Home")])],1),t._v(" "),t._l(t.months,(function(n,o){return e("li",{key:o},[e("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/month/"+(o+1),tag:"a"}},[t._v("Month -\n                  "),e("span",{staticClass:"text-uppercase"},[t._v(t._s(n)+" ("+t._s(o+1)+")")])])],1)}))],2)])])]),t._v(" "),e("div",{staticClass:"col-8 col-md-6 text-right"},[e("PartialClock")],1)])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 text-center"},[n("h1",[this._v("3+1 Reports, Second Term")])])])])}],!1,null,"6cad650a",null);n.default=component.exports;installComponents(component,{PartialClock:e(192).default})},192:function(t,n,e){"use strict";e.r(n);var o={name:"Clock",data:function(){return{currentTime:""}},mounted:function(){this.clock()},methods:{clock:function(){var t=this,n=new Date,e="".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n.getDay()],", ").concat(n.getDate()," - ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()]," - ").concat(n.getFullYear()),o=this.updateTime(n.getHours()),r=this.updateTime(n.getMinutes()),c=this.updateTime(n.getSeconds());this.currentTime="".concat(e," / ").concat(o,":").concat(r,":").concat(c),setTimeout((function(){return t.clock()}),500)},updateTime:function(t){return t<10?"0".concat(t):t}}},r=e(8),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"m-0"},[this._v(this._s(this.currentTime))])}),[],!1,null,null,null);n.default=component.exports},65:function(t,n,e){var content=e(177);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("102ebdfd",content,!0,{sourceMap:!1})},66:function(t,n,e){var content=e(179);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("434110f4",content,!0,{sourceMap:!1})}},[[131,4,1,5]]]);