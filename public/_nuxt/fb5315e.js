(window.webpackJsonp=window.webpackJsonp||[]).push([[24,14],{657:function(t,e,r){"use strict";r.r(e);var n=r(45),o=r(51),c=r.n(o),l=r(623),d=r(141),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"text-center",attrs:{flat:""}},[r("v-icon",{attrs:{size:"40",color:"black"}},[t._v("mdi-database-alert-outline")]),t._v(" "),r("h1",{staticClass:"text-h6"},[t._v("No Data Found")]),t._v(" "),r("p",{staticClass:"text-caption text--secondary"},[t._v("\n    Lorem Ipsum is simply dummy text of the printing\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:l.a,VIcon:d.a})},783:function(t,e,r){"use strict";r.r(e);var n=r(29),o=(r(80),r(39),r(6),r(11),r(674)),c=r.n(o),l=(r(675),r(676),{name:"DashboardAdminStatistics",layout:"dashboard",middleware:["auth","admin"],data:function(){return{total:{},clicks:{},urls:{},users:{},countries:{},countryData:[]}},head:function(){return{title:"Statistics",titleTemplate:"%s - ".concat("Shortify Admin")}},mounted:function(){var t=this;c()({selector:"#visitorMap",map:"world",regionStyle:{initial:{fill:"#C5CAE9",stroke:"#000",strokeWidth:1,fillOpacity:1}},visualizeData:{scale:["#7986CB","#1A237E"],values:t.countries},onRegionTooltipShow:function(element,e){var r=element._tooltip,n=r.textContent||r.innerText,o=t.countries[e]||0;r.innerText="".concat(n," (").concat(o," Clicks)")}})},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/statistics/admin/totals");case 2:(r=e.sent)&&(t.total.urls=r.data.urls,t.total.clicks=r.data.clicks,t.total.users=r.data.users),t.setChartData();case 5:case"end":return e.stop()}}),e)})))()},methods:{setChartData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={},n={},o={},c={},e.next=7,t.$axios.$get("/statistics/admin");case 7:(l=e.sent).data.urls.forEach((function(t){r[t._id]=t.clicks})),l.data.urls.forEach((function(t){n[t._id]=t.createdLinks})),l.data.users.forEach((function(t){o[t._id]=t.numOfUsers})),l.data.countries.forEach((function(t){c[t._id]=t.clicks})),t.clicks=r,t.urls=n,t.users=o,t.countries=c,t.countryData=l.data.countries,e.next=21;break;case 19:e.prev=19,e.t0=e.catch(0);case 21:case"end":return e.stop()}}),e,null,[[0,19]])})))()}}}),d=r(45),v=r(51),h=r.n(v),m=r(623),_=r(696),C=r(767),f=r(672),x=r(625),y=r(217),w=r(142),k=r(216),V=r(44),D=r(768),E=r(58),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{staticClass:"pb-12",attrs:{"min-height":"100vh",color:"grey lighten-3"}},[r("v-container",[r("div",{staticClass:"pa-3"},[r("h1",{staticClass:"mb-6 text-h5"},[t._v("Statistics")]),t._v(" "),r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"6",md:"4"}},[r("v-card",{staticClass:"pa-6 mb-6",attrs:{outlined:""}},[r("h4",{staticClass:"text-body-1 font-weight-light"},[t._v("URLs")]),t._v(" "),r("h1",{staticClass:"my-3 font-weight-medium text-h4",domProps:{textContent:t._s(t.total.urls||0)}}),t._v(" "),r("p",{staticClass:"ma-0 text-body-2 text--secondary"},[t._v("In this year")])])],1),t._v(" "),r("v-col",{staticClass:"pb-0 pt-0 pt-sm-3 pt-md-3",attrs:{cols:"12",sm:"6",md:"4"}},[r("v-card",{staticClass:"pa-6 mb-6",attrs:{outlined:""}},[r("h4",{staticClass:"text-body-1 font-weight-light"},[t._v("Users")]),t._v(" "),r("h1",{staticClass:"my-3 font-weight-medium text-h4",domProps:{textContent:t._s(t.total.users||0)}}),t._v(" "),r("p",{staticClass:"ma-0 text-body-2 text--secondary"},[t._v("In this year")])])],1),t._v(" "),r("v-col",{staticClass:"pb-0 pt-0 pt-sm-0 pt-md-3",attrs:{cols:"12",sm:"6",md:"4"}},[r("v-card",{staticClass:"pa-6",attrs:{outlined:""}},[r("h4",{staticClass:"text-body-1 font-weight-light"},[t._v("Clicks")]),t._v(" "),r("h1",{staticClass:"my-3 font-weight-medium text-h4",domProps:{textContent:t._s(t.total.clicks||0)}}),t._v(" "),r("p",{staticClass:"ma-0 text-body-2 text--secondary"},[t._v("In this year")])])],1),t._v(" "),r("v-col",{staticClass:"mt-4 mt-md-0",attrs:{cols:"12"}},[r("v-card",{staticClass:"pa-6",attrs:{outlined:""}},[r("h4",{staticClass:"text-body-1 font-weight-light mb-5"},[t._v("URLs")]),t._v(" "),r("line-chart",{attrs:{data:t.urls}})],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"pa-6",attrs:{outlined:""}},[r("h4",{staticClass:"text-body-1 font-weight-light mb-5"},[t._v("Clicks")]),t._v(" "),r("area-chart",{attrs:{data:t.clicks}})],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"pa-6",attrs:{outlined:""}},[r("h4",{staticClass:"text-body-1 font-weight-light mb-5"},[t._v("Users")]),t._v(" "),r("line-chart",{attrs:{data:t.users}})],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-card",{staticClass:"pa-6",attrs:{outlined:""}},[r("h4",{staticClass:"text-body-1 font-weight-light mb-3"},[t._v("Visitor Map")]),t._v(" "),r("div",{attrs:{id:"visitorMap"}})])],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-card",{staticClass:"pa-6",attrs:{outlined:""}},[r("h4",{staticClass:"text-body-1 font-weight-light mb-1"},[t._v("Top Countries")]),t._v(" "),0===t.countryData.length?r("EmptyData"):t._e(),t._v(" "),r("v-list",{staticClass:"pa-0 overflow-y-auto",attrs:{height:"300"}},[t._l(t.countryData,(function(e,n){return[r("v-list-item",{key:e._id,staticClass:"px-0"},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"font-weight-light",domProps:{textContent:t._s(e._id)}})],1),t._v(" "),r("v-list-item-action",[r("v-chip",{attrs:{color:"indigo darken-4",small:"","text-color":"white"},domProps:{textContent:t._s(e.clicks)}})],1)],1),t._v(" "),n<t.countryData.length-1?r("v-divider",{key:n}):t._e()]}))],2)],1)],1)],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{EmptyData:r(657).default}),h()(component,{VCard:m.a,VChip:_.a,VCol:C.a,VContainer:f.a,VDivider:x.a,VList:y.a,VListItem:w.a,VListItemAction:k.a,VListItemContent:V.a,VListItemTitle:V.c,VRow:D.a,VSheet:E.a})}}]);