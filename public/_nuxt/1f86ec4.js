(window.webpackJsonp=window.webpackJsonp||[]).push([[28,3,19,20],{656:function(t,e,r){"use strict";r.r(e);var n=r(29),o=(r(80),r(39),{props:{id:{type:String,required:!0},collection:{type:String,required:!0}},data:function(){return{dialog:!1,btnLoading:!1}},methods:{deleteItem:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.btnLoading=!0,e.next=4,t.$axios.$delete("/".concat(t.collection,"/").concat(t.id));case 4:e.sent&&(t.btnLoading=!1,t.dialog=!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.btnLoading=!1;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}}),l=r(45),c=r(51),d=r.n(c),v=r(245),m=r(623),f=r(622),h=r(667),x=r(625),k=r(141),_=r(142),y=r(115),C=r(44),w=r(640),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{"max-width":"350"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-list-item",t._g(t._b({staticClass:"px-6",attrs:{link:""}},"v-list-item",o,!1),n),[r("v-list-item-icon",{staticClass:"mr-3"},[r("v-icon",{attrs:{color:"black"}},[t._v("mdi-trash-can-outline")])],1),t._v(" "),r("v-list-item-title",[t._v("Delete")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",{staticClass:"text-h5"},[t._v("Are you sure to delete?")]),t._v(" "),r("v-card-text",[t._v("It is a long established fact that a reader will be distracted by the\n      readable content of a page\n    ")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" No ")]),t._v(" "),r("v-btn",{attrs:{color:"red darken-1",loading:t.btnLoading,text:""},on:{click:function(e){return t.deleteItem()}}},[t._v("\n        Yes\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VDialog:h.a,VDivider:x.a,VIcon:k.a,VListItem:_.a,VListItemIcon:y.a,VListItemTitle:C.c,VSpacer:w.a})},658:function(t,e,r){"use strict";r.r(e);var n=r(29),o=(r(80),r(25),{props:{darkTheme:{type:Boolean,required:!0,default:!0},id:String,currentUrl:String},data:function(){var t=this;return{valid:!0,btnLoading:!1,url:null,showTooltip:!1,copiedDisabled:!0,copiedUrl:!1,alertType:"error",alertMessage:null,checkURL:[function(e){return t.isURL(e)||"Please enter valid URL"}]}},computed:{options:function(){return this.$store.state.shortenOptions.show},maxClicks:function(){return this.$store.state.shortenOptions.maxClicks},expiryDate:function(){return this.$store.state.shortenOptions.expiryDate},password:function(){return this.$store.state.shortenOptions.password}},watch:{url:function(t){t||this.$refs.form.resetValidation()},showTooltip:function(t){!0===t&&(this.copiedUrl=!1)}},created:function(){this.currentUrl&&(this.url=this.currentUrl)},methods:{isURL:function(t){return!!/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)(?:\.(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)*(?:\.(?:[a-z\u00A1-\uFFFF]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(t)},copyContent:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.url){e.next=10;break}return e.prev=1,e.next=4,navigator.clipboard.writeText(t.url);case 4:t.copiedUrl=!0,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.copiedUrl=!1;case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()},toggleShortenOptions:function(){this.$store.commit("TOGGLE_SHORTEN_OPTIONS")},submit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=23;break}if(e.prev=1,t.btnLoading=!0,data={originalURL:t.url,maxClicks:t.maxClicks,expiryDate:t.expiryDate,password:t.password},!t.id){e.next=10;break}return e.next=7,t.$axios.$put("/urls/".concat(t.id),data);case 7:r=e.sent,e.next=13;break;case 10:return e.next=12,t.$axios.$post("/urls",data);case 12:r=e.sent;case 13:r&&(t.btnLoading=!1,t.url=r.data.shortURL,t.copiedDisabled=!1,t.$refs.form.resetValidation(),t.options&&t.toggleShortenOptions(),t.alertType="success",t.alertMessage="Your shortened URL has been generated"),e.next=23;break;case 16:e.prev=16,e.t0=e.catch(1),n=e.t0.response.data.message,t.alertType="error",t.alertMessage=n,t.btnLoading=!1,t.copiedDisabled=!0;case 23:case"end":return e.stop()}}),e,null,[[1,16]])})))()}}}),l=r(45),c=r(51),d=r.n(c),v=r(652),m=r(245),f=r(120),h=r(769),x=r(141),k=r(765),_=r(641),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-6 mt-sm-4"},[r("v-expand-transition",[t.alertMessage?r("v-alert",{attrs:{text:"",type:t.alertType,icon:"error"===t.alertType?"mdi-alert-octagon-outline":"mdi-check-circle-outline"}},[t._v(t._s(t.alertMessage))]):t._e()],1),t._v(" "),r("v-form",{ref:"form",staticClass:"d-sm-flex",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("div",{staticClass:"w-100 d-flex d-sm-block"},[r("v-text-field",{staticClass:"custom__input-inner-icon",attrs:{placeholder:"Paste a long URL",color:t.darkTheme?"":"indigo darken-4",outlined:"",autofocus:"",clearable:"",rules:t.checkURL},on:{blur:function(e){t.url||t.$refs.form.resetValidation()}},scopedSlots:t._u([{key:"append",fn:function(){return[r("v-tooltip",{attrs:{color:"black",top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{icon:"",color:t.darkTheme?"":"indigo darken-4",disabled:t.copiedDisabled||!t.valid||!t.url},on:{click:t.copyContent}},n),[r("v-icon",[t._v("mdi-content-copy")])],1)]}}]),model:{value:t.showTooltip,callback:function(e){t.showTooltip=e},expression:"showTooltip"}},[t._v(" "),t.copiedUrl?r("span",[r("v-icon",{attrs:{size:"18"}},[t._v("mdi-check-circle-outline")]),t._v("\n              Copied")],1):r("span",[t._v("Copy")])])]},proxy:!0}]),model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),t._v(" "),r("v-btn",{staticClass:"d-block d-sm-none",attrs:{color:t.darkTheme?"":"indigo darken-4","x-large":"",icon:""},on:{click:function(e){return t.toggleShortenOptions()}}},[r("v-icon",[t._v("mdi-cog-outline")])],1)],1),t._v(" "),r("v-btn",{class:"shorten-btn-xs-block "+(t.darkTheme?"black--text":"white--text")+" text-capitalize ml-0 ml-sm-2 mb-8 mb-sm-0 py-7",attrs:{type:"submit",color:t.darkTheme?"white":"indigo darken-4",depressed:"",disabled:!t.valid,loading:t.btnLoading,"x-large":""}},[t._v("Shorten")]),t._v(" "),r("v-btn",{staticClass:"d-none d-sm-block",attrs:{color:t.darkTheme?"":"indigo darken-4","x-large":"",icon:""},on:{click:function(e){return t.toggleShortenOptions()}}},[r("v-icon",[t._v("mdi-cog-outline")])],1)],1),t._v(" "),r("v-expand-transition",[t.options?r("ShortenOptions",{staticClass:"d-none d-sm-block"}):t._e()],1),t._v(" "),r("v-expand-transition",[t.options?r("ShortenOptionsMobile",{staticClass:"d-block d-sm-none"}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{ShortenOptions:r(669).default,ShortenOptionsMobile:r(670).default}),d()(component,{VAlert:v.a,VBtn:m.a,VExpandTransition:f.a,VForm:h.a,VIcon:x.a,VTextField:k.a,VTooltip:_.a})},660:function(t,e,r){"use strict";r.r(e);var n={props:{id:{type:String,required:!0},currentUrl:{type:String,required:!0}}},o=r(45),l=r(51),c=r.n(l),d=r(245),v=r(623),m=r(667),f=r(625),h=r(141),x=r(142),k=r(115),_=r(44),y=r(640),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{"max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-list-item",t._g(t._b({staticClass:"px-6",attrs:{link:""}},"v-list-item",o,!1),n),[r("v-list-item-icon",{staticClass:"mr-3"},[r("v-icon",{attrs:{color:"black"}},[t._v("mdi-pencil-circle-outline")])],1),t._v(" "),r("v-list-item-title",[t._v("Edit")])],1)]}},{key:"default",fn:function(dialog){return[r("v-card",[r("div",{staticClass:"d-flex align-center pa-4"},[r("h1",{staticClass:"text-h5"},[t._v("Update URL")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"text-capitalize",attrs:{color:"red darken-1",dark:"",depressed:""},on:{click:function(t){dialog.value=!1}}},[t._v("Close")])],1),t._v(" "),r("v-divider"),t._v(" "),r("div",{staticClass:"py-6 px-4"},[r("ShortenFunctionality",{attrs:{id:t.id,"dark-theme":!1,"current-url":t.currentUrl}})],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;c()(component,{ShortenFunctionality:r(658).default}),c()(component,{VBtn:d.a,VCard:v.a,VDialog:m.a,VDivider:f.a,VIcon:h.a,VListItem:x.a,VListItemIcon:k.a,VListItemTitle:_.c,VSpacer:y.a})},665:function(t,e,r){"use strict";r.r(e);var n=r(29),o=(r(33),r(25),r(73),r(80),{props:{item:{type:Object,required:!0}},data:function(){return{admin:!1}},created:function(){this.showAdminRoutes()},methods:{copyContent:function(data){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!data){t.next=8;break}return t.prev=1,t.next=4,navigator.clipboard.writeText(data);case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(1);case 8:case"end":return t.stop()}}),t,null,[[1,6]])})))()},showAdminRoutes:function(){"admin"===this.$route.name.split("-")[1]?this.admin=!0:this.admin=!1}}}),l=r(45),c=r(51),d=r.n(c),v=r(245),m=r(625),f=r(141),h=r(217),x=r(142),k=r(216),_=r(44),y=r(115),C=r(692),w=r(641),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list-item",{staticClass:"px-0"},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"mb-2",domProps:{textContent:t._s(t.item.originalURL)}}),t._v(" "),r("v-list-item-subtitle",{staticClass:"text-caption"},[t._v(t._s(t._f("moment")(t.item.createdAt,"from","now"))+" -\n      "),r("nuxt-link",{attrs:{to:"/"}},[t._v(t._s(t.item.clicks)+" Clicks")]),t._v("\n      - "+t._s(t.item.visitors.length)+" Unique Clicks\n    ")],1),t._v(" "),r("div",{staticClass:"d-flex align-center"},[r("p",{staticClass:"text-caption text--secondary ma-0 mt-1"},[r("nuxt-link",{attrs:{to:"/visit/"+t.item.shortedId}},[t._v(t._s(t.item.shortURL))])],1),t._v(" "),r("v-tooltip",{attrs:{color:"black",top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ml-1",attrs:{color:"black",small:"",icon:""},on:{click:function(e){return t.copyContent(t.item.shortURL)}}},n),[r("v-icon",{attrs:{size:"14"}},[t._v("mdi-content-copy")])],1)]}}])},[t._v(" "),r("span",[t._v("Copy")])])],1)],1),t._v(" "),r("v-list-item-action",[r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),n),[r("v-icon",{attrs:{color:"black"}},[t._v("mdi-dots-horizontal")])],1)]}}])},[t._v(" "),r("v-list",[r("v-list-item",{staticClass:"px-6",attrs:{to:"/dashboard/"+(t.admin?"admin":"user")+"/statistics/"+t.item.shortedId,link:""}},[r("v-list-item-icon",{staticClass:"mr-3"},[r("v-icon",{attrs:{color:"black"}},[t._v("mdi-chart-box-outline")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("Statistics")])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("DashboardUpdateUrlDialog",{attrs:{id:t.item.id,"current-url":t.item.originalURL}}),t._v(" "),r("v-divider"),t._v(" "),r("DashboardDeleteDialog",{attrs:{id:t.item.id,collection:"urls"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{DashboardUpdateUrlDialog:r(660).default,DashboardDeleteDialog:r(656).default}),d()(component,{VBtn:v.a,VDivider:m.a,VIcon:f.a,VList:h.a,VListItem:x.a,VListItemAction:k.a,VListItemContent:_.a,VListItemIcon:y.a,VListItemSubtitle:_.b,VListItemTitle:_.c,VMenu:C.a,VTooltip:w.a})},669:function(t,e,r){"use strict";r.r(e);r(663),r(23);var n={data:function(){return{valid:!0,btnLoading:!1,menu:!1,showPassword:!1,maxClicks:null,expiry:{days:null,hours:null,minutes:null,date:null},password:"",numberCheck:[function(t){return Number.isInteger(Number(t))||"Please use only number nothing else"},function(t){return"0"!==String(t)[0]||"The first digit cannot be given as zero"},function(t){return"-"!==String(t)[0]||"Not allowed arithmetic symbols"},function(t){return"+"!==String(t)[0]||"Not allowed arithmetic symbols"}],passwordLength:[function(t){return t.length>=8||"Password minimum 8 characters"}]}},watch:{maxClicks:function(t){t||this.$refs.form.resetValidation()}},methods:{submit:function(){if(this.$refs.form.validate()){var t,e=this.expiry,r=e.days,n=e.hours,o=e.minutes,l=e.date;(r||n||o)&&l&&(this.expiry.date=null),(r||n||o)&&(t=this.getISODate()),l&&(t=l);var data={maxClicks:this.maxClicks,expiryDate:t,password:this.password};this.$store.dispatch("setShortenOptions",data),this.$store.commit("TOGGLE_SHORTEN_OPTIONS")}},getISODate:function(){var t=new Date,e=this.expiry,r=e.days,n=e.hours,o=e.minutes,l=Number(t.getDate())+Number(r),c=Number(t.getHours())+Number(n),d=Number(t.getMinutes())+Number(o);return r&&t.setDate(l),n&&t.setHours(c),o&&t.setMinutes(d),new Date(t).toISOString()}}},o=r(45),l=r(51),c=r.n(l),d=r(245),v=r(623),m=r(622),f=r(767),h=r(773),x=r(769),k=r(692),_=r(768),y=r(640),C=r(770),w=r(793),V=r(775),S=r(765),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-card",{staticClass:"pa-4",attrs:{light:""}},[r("v-tabs",{staticClass:"text-left",attrs:{color:"indigo darken-4",vertical:""}},[r("v-tab",{staticClass:"text-capitalize justify-start mr-4"},[t._v("Max Clicks")]),t._v(" "),r("v-tab",{staticClass:"text-capitalize justify-start mr-4"},[t._v("Expiry Date")]),t._v(" "),r("v-tab",{staticClass:"text-capitalize justify-start mr-4"},[t._v("Password Protection")]),t._v(" "),r("v-tab-item",[r("v-card",{staticClass:"pa-4",attrs:{outlined:""}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Max Clicks")]),t._v(" "),r("v-text-field",{attrs:{rules:t.numberCheck,color:"indigo darken-4",placeholder:"Link expires after x time clicks",outlined:"",autofocus:""},on:{blur:function(e){t.maxClicks||t.$refs.form.resetValidation()}},model:{value:t.maxClicks,callback:function(e){t.maxClicks=e},expression:"maxClicks"}})],1)],1),t._v(" "),r("v-tab-item",[r("v-card",{staticClass:"pa-4",attrs:{outlined:""}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"4"}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Days")]),t._v(" "),r("v-text-field",{attrs:{color:"indigo darken-4",placeholder:"Days",outlined:"",autofocus:"",rules:t.numberCheck},on:{blur:function(e){t.expiry.days||t.$refs.form.resetValidation()}},model:{value:t.expiry.days,callback:function(e){t.$set(t.expiry,"days",e)},expression:"expiry.days"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"4"}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Hours")]),t._v(" "),r("v-text-field",{attrs:{color:"indigo darken-4",placeholder:"Hours",outlined:"",rules:t.numberCheck},on:{blur:function(e){t.expiry.hours||t.$refs.form.resetValidation()}},model:{value:t.expiry.hours,callback:function(e){t.$set(t.expiry,"hours",e)},expression:"expiry.hours"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"4"}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Minutes")]),t._v(" "),r("v-text-field",{attrs:{color:"indigo darken-4",placeholder:"Minutes",outlined:"",rules:t.numberCheck},on:{blur:function(e){t.expiry.minutes||t.$refs.form.resetValidation()}},model:{value:t.expiry.minutes,callback:function(e){t.$set(t.expiry,"minutes",e)},expression:"expiry.minutes"}})],1),t._v(" "),r("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"12"}},[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("h5",{staticClass:"font-weight-medium"},[t._v("Date")]),t._v(" "),r("v-text-field",t._g(t._b({attrs:{placeholder:"YY/MM/DD","prepend-inner-icon":"mdi-calendar",color:"indigo darken-4",readonly:"",outlined:""},model:{value:t.expiry.date,callback:function(e){t.$set(t.expiry,"date",e)},expression:"expiry.date"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),r("v-date-picker",{attrs:{color:"indigo darken-4","no-title":"",scrollable:""},model:{value:t.expiry.date,callback:function(e){t.$set(t.expiry,"date",e)},expression:"expiry.date"}},[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"text-capitalize",attrs:{text:"",color:"indigo darken-4"},on:{click:function(e){t.menu=!1}}},[t._v("\n                    Cancel\n                  ")]),t._v(" "),r("v-btn",{attrs:{color:"indigo darken-4 white--text",depressed:""},on:{click:function(e){return t.$refs.menu.save(t.expiry.date)}}},[t._v("\n                    OK\n                  ")])],1)],1)],1)],1)],1)],1),t._v(" "),r("v-tab-item",[r("v-card",{staticClass:"pa-4",attrs:{outlined:""}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Password")]),t._v(" "),r("v-text-field",{attrs:{rules:t.passwordLength,color:"indigo darken-4",placeholder:"Enter password for protect your link","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password",hint:"At least 8 characters",outlined:"",autofocus:""},on:{"click:append":function(e){t.showPassword=!t.showPassword},submit:function(e){t.password||t.$refs.form.resetValidation()},blur:function(e){t.password||t.$refs.form.resetValidation()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1),t._v(" "),r("v-card-actions",{staticClass:"pa-0 pt-4"},[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"white--text text-capitalize",attrs:{color:"indigo darken-4",type:"submit",disabled:!t.valid,loading:t.btnLoading}},[t._v("Save Changes")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCol:f.a,VDatePicker:h.a,VForm:x.a,VMenu:k.a,VRow:_.a,VSpacer:y.a,VTab:C.a,VTabItem:w.a,VTabs:V.a,VTextField:S.a})},670:function(t,e,r){"use strict";r.r(e);r(663),r(23);var n={data:function(){return{valid:!0,btnLoading:!1,menu:!1,showPassword:!1,maxClicks:null,expiry:{days:null,hours:null,minutes:null,date:null},password:"",numberCheck:[function(t){return Number.isInteger(Number(t))||"Please use only number nothing else"},function(t){return"0"!==String(t)[0]||"The first digit cannot be given as zero"},function(t){return"-"!==String(t)[0]||"Not allowed arithmetic symbols"},function(t){return"+"!==String(t)[0]||"Not allowed arithmetic symbols"}],passwordLength:[function(t){return t.length>=8||"Password minimum 8 characters"}]}},watch:{maxClicks:function(t){t||this.$refs.form.resetValidation()}},methods:{submit:function(){if(this.$refs.form.validate()){var t,e=this.expiry,r=e.days,n=e.hours,o=e.minutes,l=e.date;(r||n||o)&&l&&(this.expiry.date=null),(r||n||o)&&(t=this.getISODate()),l&&(t=l);var data={maxClicks:this.maxClicks,expiryDate:t,password:this.password};this.$store.dispatch("setShortenOptions",data),this.$store.commit("TOGGLE_SHORTEN_OPTIONS")}},getISODate:function(){var t=new Date,e=this.expiry,r=e.days,n=e.hours,o=e.minutes,l=Number(t.getDate())+Number(r),c=Number(t.getHours())+Number(n),d=Number(t.getMinutes())+Number(o);return r&&t.setDate(l),n&&t.setHours(c),o&&t.setMinutes(d),new Date(t).toISOString()}}},o=r(45),l=r(51),c=r.n(l),d=r(245),v=r(623),m=r(622),f=r(767),h=r(773),x=r(769),k=r(692),_=r(768),y=r(640),C=r(770),w=r(793),V=r(775),S=r(765),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-card",{staticClass:"pa-2",attrs:{light:""}},[r("v-tabs",{attrs:{color:"indigo darken-4",grow:"",centered:""}},[r("v-tab",{staticClass:"text-capitalize"},[t._v("Clicks")]),t._v(" "),r("v-tab",{staticClass:"text-capitalize"},[t._v("Date")]),t._v(" "),r("v-tab",{staticClass:"text-capitalize"},[t._v("Password")]),t._v(" "),r("v-tab-item",[r("v-card",{staticClass:"pa-2",attrs:{outlined:""}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Max Clicks")]),t._v(" "),r("v-text-field",{attrs:{rules:t.numberCheck,color:"indigo darken-4",placeholder:"Link expires after x time clicks",outlined:"",autofocus:""},on:{blur:function(e){t.maxClicks||t.$refs.form.resetValidation()}},model:{value:t.maxClicks,callback:function(e){t.maxClicks=e},expression:"maxClicks"}})],1)],1),t._v(" "),r("v-tab-item",[r("v-card",{staticClass:"pa-2",attrs:{outlined:""}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"4"}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Days")]),t._v(" "),r("v-text-field",{attrs:{color:"indigo darken-4",placeholder:"Days",outlined:"",autofocus:"",rules:t.numberCheck},on:{blur:function(e){t.expiry.days||t.$refs.form.resetValidation()}},model:{value:t.expiry.days,callback:function(e){t.$set(t.expiry,"days",e)},expression:"expiry.days"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"4"}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Hours")]),t._v(" "),r("v-text-field",{attrs:{color:"indigo darken-4",placeholder:"Hours",outlined:"",rules:t.numberCheck},on:{blur:function(e){t.expiry.hours||t.$refs.form.resetValidation()}},model:{value:t.expiry.hours,callback:function(e){t.$set(t.expiry,"hours",e)},expression:"expiry.hours"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"4"}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Minutes")]),t._v(" "),r("v-text-field",{attrs:{color:"indigo darken-4",placeholder:"Minutes",outlined:"",rules:t.numberCheck},on:{blur:function(e){t.expiry.minutes||t.$refs.form.resetValidation()}},model:{value:t.expiry.minutes,callback:function(e){t.$set(t.expiry,"minutes",e)},expression:"expiry.minutes"}})],1),t._v(" "),r("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"12"}},[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("h5",{staticClass:"font-weight-medium"},[t._v("Date")]),t._v(" "),r("v-text-field",t._g(t._b({attrs:{placeholder:"YY/MM/DD","prepend-inner-icon":"mdi-calendar",color:"indigo darken-4",readonly:"",outlined:""},model:{value:t.expiry.date,callback:function(e){t.$set(t.expiry,"date",e)},expression:"expiry.date"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),r("v-date-picker",{attrs:{color:"indigo darken-4","no-title":"",scrollable:""},model:{value:t.expiry.date,callback:function(e){t.$set(t.expiry,"date",e)},expression:"expiry.date"}},[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"text-capitalize",attrs:{text:"",color:"indigo darken-4"},on:{click:function(e){t.menu=!1}}},[t._v("\n                    Cancel\n                  ")]),t._v(" "),r("v-btn",{attrs:{color:"indigo darken-4 white--text",depressed:""},on:{click:function(e){return t.$refs.menu.save(t.expiry.date)}}},[t._v("\n                    OK\n                  ")])],1)],1)],1)],1)],1)],1),t._v(" "),r("v-tab-item",[r("v-card",{staticClass:"pa-2",attrs:{outlined:""}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Password")]),t._v(" "),r("v-text-field",{attrs:{rules:t.passwordLength,color:"indigo darken-4",placeholder:"Enter password for protect your link","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password",hint:"At least 8 characters",outlined:"",autofocus:""},on:{"click:append":function(e){t.showPassword=!t.showPassword},submit:function(e){t.password||t.$refs.form.resetValidation()},blur:function(e){t.password||t.$refs.form.resetValidation()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1),t._v(" "),r("v-card-actions",{staticClass:"pa-0 pt-2"},[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"white--text text-capitalize",attrs:{color:"indigo darken-4",type:"submit",disabled:!t.valid,loading:t.btnLoading}},[t._v("Save Changes")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCol:f.a,VDatePicker:h.a,VForm:x.a,VMenu:k.a,VRow:_.a,VSpacer:y.a,VTab:C.a,VTabItem:w.a,VTabs:V.a,VTextField:S.a})},785:function(t,e,r){"use strict";r.r(e);var n=r(29),o=(r(25),r(80),{name:"DashboardUserLinks",layout:"dashboard",middleware:"auth",data:function(){return{itemsPerPageArray:[4,8,12],search:"",page:1,itemsPerPage:4,sortBy:"newest",keys:[{name:"Newest",value:"newest"},{name:"Oldest",value:"oldest"},{name:"Most Popular",value:"mostpopular"},{name:"Less Popular",value:"lesspopular"}],items:[]}},head:function(){return{title:"Links",titleTemplate:"%s - ".concat("Shortify User")}},computed:{numberOfPages:function(){return Math.ceil(this.items.length/this.itemsPerPage)}},watch:{sortBy:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,l,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("newest"!==t){r.next=10;break}return r.prev=1,r.next=4,e.$axios.$get("/urls/me");case 4:n=r.sent,e.items=n.data,r.next=10;break;case 8:r.prev=8,r.t0=r.catch(1);case 10:if("oldest"!==t){r.next=20;break}return r.prev=11,r.next=14,e.$axios.$get("/urls/me?sort=createdAt");case 14:o=r.sent,e.items=o.data,r.next=20;break;case 18:r.prev=18,r.t1=r.catch(11);case 20:if("mostpopular"!==t){r.next=30;break}return r.prev=21,r.next=24,e.$axios.$get("/urls/me?sort=-clicks");case 24:l=r.sent,e.items=l.data,r.next=30;break;case 28:r.prev=28,r.t2=r.catch(21);case 30:if("lesspopular"!==t){r.next=40;break}return r.prev=31,r.next=34,e.$axios.$get("/urls/me?sort=clicks");case 34:c=r.sent,e.items=c.data,r.next=40;break;case 38:r.prev=38,r.t3=r.catch(31);case 40:case"end":return r.stop()}}),r,null,[[1,8],[11,18],[21,28],[31,38]])})))()}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/urls/me");case 3:(r=e.sent)&&(t.items=r.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))()},methods:{nextPage:function(){this.page+1<=this.numberOfPages&&(this.page+=1)},formerPage:function(){this.page-1>=1&&(this.page-=1)},updateItemsPerPage:function(t){this.itemsPerPage=t},isURL:function(t){return!!/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)(?:\.(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)*(?:\.(?:[a-z\u00A1-\uFFFF]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(t)},copyContent:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.url){e.next=10;break}return e.prev=1,e.next=4,navigator.clipboard.writeText(t.url);case 4:t.copiedUrl=!0,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.copiedUrl=!1;case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()}}}),l=r(45),c=r(51),d=r.n(c),v=r(245),m=r(623),f=r(767),h=r(672),x=r(771),k=r(667),_=r(625),y=r(141),C=r(217),w=r(142),V=r(44),S=r(692),$=r(768),L=r(705),D=r(58),P=r(640),O=r(765),T=r(71),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{staticClass:"pb-11",attrs:{"min-height":"100vh",color:"grey lighten-3"}},[r("v-container",[r("div",{staticClass:"pa-3"},[r("h1",{staticClass:"mb-6 text-h5"},[t._v("Links")]),t._v(" "),r("v-card",{staticClass:"pa-6 pb-8",attrs:{outlined:""}},[r("v-data-iterator",{attrs:{items:t.items,"items-per-page":t.itemsPerPage,page:t.page,search:t.search,"sort-by":t.sortBy.toLowerCase(),"hide-default-footer":""},on:{"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e},"update:page":function(e){t.page=e}},scopedSlots:t._u([{key:"header",fn:function(){return[r("v-toolbar",{staticClass:"mb-4",attrs:{dark:"",color:"indigo darken-4"}},[r("v-text-field",{attrs:{clearable:"",flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",color:"indigo darken-4",label:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),t.$vuetify.breakpoint.mdAndUp?[r("v-spacer"),t._v(" "),r("v-select",{attrs:{flat:"","solo-inverted":"","hide-details":"",items:t.keys,"item-text":"name","item-value":"value","prepend-inner-icon":"mdi-filter-variant",color:"indigo darken-4",label:"Sort by"},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}}),t._v(" "),r("v-dialog",{attrs:{"max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"text-capitalize ml-3",attrs:{color:"white black--text",height:"48px",depressed:"","x-large":""}},"v-btn",o,!1),n),[t._v("Add Link")])]}},{key:"default",fn:function(dialog){return[r("v-card",[r("div",{staticClass:"d-flex align-center pa-4"},[r("h1",{staticClass:"text-h5"},[t._v("Create Link")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"text-capitalize",attrs:{color:"red darken-1",dark:"",depressed:""},on:{click:function(t){dialog.value=!1}}},[t._v("Close")])],1),t._v(" "),r("v-divider"),t._v(" "),r("div",{staticClass:"py-6 px-4"},[r("ShortenFunctionality",{attrs:{"dark-theme":!1}})],1)],1)]}}],null,!1,3591552336)})]:t._e()],2)]},proxy:!0},{key:"default",fn:function(e){return[r("v-row",t._l(e.items,(function(t){return r("v-col",{key:t.id,attrs:{cols:"12"}},[r("v-card",{staticClass:"px-4"},[r("DashboardLinkItem",{attrs:{item:t}})],1)],1)})),1)]}},{key:"footer",fn:function(){return[r("v-row",{staticClass:"mt-5 px-3",attrs:{align:"center",justify:"center"}},[r("span",{staticClass:"black--text"},[t._v("Items per page")]),t._v(" "),r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{dark:"",text:"",color:"indigo darken-4"}},"v-btn",o,!1),n),[t._v("\n                    "+t._s(t.itemsPerPage)+"\n                    "),r("v-icon",[t._v("mdi-chevron-down")])],1)]}}])},[t._v(" "),r("v-list",t._l(t.itemsPerPageArray,(function(e,n){return r("v-list-item",{key:n,on:{click:function(r){return t.updateItemsPerPage(e)}}},[r("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1),t._v(" "),r("v-spacer"),t._v(" "),r("span",{staticClass:"mr-4 black--text"},[t._v("\n                Page "+t._s(t.page)+" of "+t._s(t.numberOfPages)+"\n              ")]),t._v(" "),r("v-btn",{staticClass:"mr-1",attrs:{fab:"",dark:"",small:"",depressed:"",color:"indigo darken-4"},on:{click:t.formerPage}},[r("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" "),r("v-btn",{staticClass:"ml-1",attrs:{fab:"",dark:"",small:"",depressed:"",color:"indigo darken-4"},on:{click:t.nextPage}},[r("v-icon",[t._v("mdi-chevron-right")])],1)],1)]},proxy:!0}])})],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{ShortenFunctionality:r(658).default,DashboardLinkItem:r(665).default}),d()(component,{VBtn:v.a,VCard:m.a,VCol:f.a,VContainer:h.a,VDataIterator:x.a,VDialog:k.a,VDivider:_.a,VIcon:y.a,VList:C.a,VListItem:w.a,VListItemTitle:V.c,VMenu:S.a,VRow:$.a,VSelect:L.a,VSheet:D.a,VSpacer:P.a,VTextField:O.a,VToolbar:T.a})}}]);