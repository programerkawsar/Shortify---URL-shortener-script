(window.webpackJsonp=window.webpackJsonp||[]).push([[3,19,20],{658:function(t,e,r){"use strict";r.r(e);var n=r(29),o=(r(80),r(25),{props:{darkTheme:{type:Boolean,required:!0,default:!0},id:String,currentUrl:String},data:function(){var t=this;return{valid:!0,btnLoading:!1,url:null,showTooltip:!1,copiedDisabled:!0,copiedUrl:!1,alertType:"error",alertMessage:null,checkURL:[function(e){return t.isURL(e)||"Please enter valid URL"}]}},computed:{options:function(){return this.$store.state.shortenOptions.show},maxClicks:function(){return this.$store.state.shortenOptions.maxClicks},expiryDate:function(){return this.$store.state.shortenOptions.expiryDate},password:function(){return this.$store.state.shortenOptions.password}},watch:{url:function(t){t||this.$refs.form.resetValidation()},showTooltip:function(t){!0===t&&(this.copiedUrl=!1)}},created:function(){this.currentUrl&&(this.url=this.currentUrl)},methods:{isURL:function(t){return!!/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)(?:\.(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)*(?:\.(?:[a-z\u00A1-\uFFFF]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(t)},copyContent:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.url){e.next=10;break}return e.prev=1,e.next=4,navigator.clipboard.writeText(t.url);case 4:t.copiedUrl=!0,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.copiedUrl=!1;case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()},toggleShortenOptions:function(){this.$store.commit("TOGGLE_SHORTEN_OPTIONS")},submit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=23;break}if(e.prev=1,t.btnLoading=!0,data={originalURL:t.url,maxClicks:t.maxClicks,expiryDate:t.expiryDate,password:t.password},!t.id){e.next=10;break}return e.next=7,t.$axios.$put("/urls/".concat(t.id),data);case 7:r=e.sent,e.next=13;break;case 10:return e.next=12,t.$axios.$post("/urls",data);case 12:r=e.sent;case 13:r&&(t.btnLoading=!1,t.url=r.data.shortURL,t.copiedDisabled=!1,t.$refs.form.resetValidation(),t.options&&t.toggleShortenOptions(),t.alertType="success",t.alertMessage="Your shortened URL has been generated"),e.next=23;break;case 16:e.prev=16,e.t0=e.catch(1),n=e.t0.response.data.message,t.alertType="error",t.alertMessage=n,t.btnLoading=!1,t.copiedDisabled=!0;case 23:case"end":return e.stop()}}),e,null,[[1,16]])})))()}}}),l=r(45),c=r(51),d=r.n(c),m=r(652),v=r(245),f=r(120),h=r(769),x=r(141),k=r(765),y=r(641),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-6 mt-sm-4"},[r("v-expand-transition",[t.alertMessage?r("v-alert",{attrs:{text:"",type:t.alertType,icon:"error"===t.alertType?"mdi-alert-octagon-outline":"mdi-check-circle-outline"}},[t._v(t._s(t.alertMessage))]):t._e()],1),t._v(" "),r("v-form",{ref:"form",staticClass:"d-sm-flex",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("div",{staticClass:"w-100 d-flex d-sm-block"},[r("v-text-field",{staticClass:"custom__input-inner-icon",attrs:{placeholder:"Paste a long URL",color:t.darkTheme?"":"indigo darken-4",outlined:"",autofocus:"",clearable:"",rules:t.checkURL},on:{blur:function(e){t.url||t.$refs.form.resetValidation()}},scopedSlots:t._u([{key:"append",fn:function(){return[r("v-tooltip",{attrs:{color:"black",top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{icon:"",color:t.darkTheme?"":"indigo darken-4",disabled:t.copiedDisabled||!t.valid||!t.url},on:{click:t.copyContent}},n),[r("v-icon",[t._v("mdi-content-copy")])],1)]}}]),model:{value:t.showTooltip,callback:function(e){t.showTooltip=e},expression:"showTooltip"}},[t._v(" "),t.copiedUrl?r("span",[r("v-icon",{attrs:{size:"18"}},[t._v("mdi-check-circle-outline")]),t._v("\n              Copied")],1):r("span",[t._v("Copy")])])]},proxy:!0}]),model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),t._v(" "),r("v-btn",{staticClass:"d-block d-sm-none",attrs:{color:t.darkTheme?"":"indigo darken-4","x-large":"",icon:""},on:{click:function(e){return t.toggleShortenOptions()}}},[r("v-icon",[t._v("mdi-cog-outline")])],1)],1),t._v(" "),r("v-btn",{class:"shorten-btn-xs-block "+(t.darkTheme?"black--text":"white--text")+" text-capitalize ml-0 ml-sm-2 mb-8 mb-sm-0 py-7",attrs:{type:"submit",color:t.darkTheme?"white":"indigo darken-4",depressed:"",disabled:!t.valid,loading:t.btnLoading,"x-large":""}},[t._v("Shorten")]),t._v(" "),r("v-btn",{staticClass:"d-none d-sm-block",attrs:{color:t.darkTheme?"":"indigo darken-4","x-large":"",icon:""},on:{click:function(e){return t.toggleShortenOptions()}}},[r("v-icon",[t._v("mdi-cog-outline")])],1)],1),t._v(" "),r("v-expand-transition",[t.options?r("ShortenOptions",{staticClass:"d-none d-sm-block"}):t._e()],1),t._v(" "),r("v-expand-transition",[t.options?r("ShortenOptionsMobile",{staticClass:"d-block d-sm-none"}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{ShortenOptions:r(669).default,ShortenOptionsMobile:r(670).default}),d()(component,{VAlert:m.a,VBtn:v.a,VExpandTransition:f.a,VForm:h.a,VIcon:x.a,VTextField:k.a,VTooltip:y.a})},669:function(t,e,r){"use strict";r.r(e);r(663),r(23);var n={data:function(){return{valid:!0,btnLoading:!1,menu:!1,showPassword:!1,maxClicks:null,expiry:{days:null,hours:null,minutes:null,date:null},password:"",numberCheck:[function(t){return Number.isInteger(Number(t))||"Please use only number nothing else"},function(t){return"0"!==String(t)[0]||"The first digit cannot be given as zero"},function(t){return"-"!==String(t)[0]||"Not allowed arithmetic symbols"},function(t){return"+"!==String(t)[0]||"Not allowed arithmetic symbols"}],passwordLength:[function(t){return t.length>=8||"Password minimum 8 characters"}]}},watch:{maxClicks:function(t){t||this.$refs.form.resetValidation()}},methods:{submit:function(){if(this.$refs.form.validate()){var t,e=this.expiry,r=e.days,n=e.hours,o=e.minutes,l=e.date;(r||n||o)&&l&&(this.expiry.date=null),(r||n||o)&&(t=this.getISODate()),l&&(t=l);var data={maxClicks:this.maxClicks,expiryDate:t,password:this.password};this.$store.dispatch("setShortenOptions",data),this.$store.commit("TOGGLE_SHORTEN_OPTIONS")}},getISODate:function(){var t=new Date,e=this.expiry,r=e.days,n=e.hours,o=e.minutes,l=Number(t.getDate())+Number(r),c=Number(t.getHours())+Number(n),d=Number(t.getMinutes())+Number(o);return r&&t.setDate(l),n&&t.setHours(c),o&&t.setMinutes(d),new Date(t).toISOString()}}},o=r(45),l=r(51),c=r.n(l),d=r(245),m=r(623),v=r(622),f=r(767),h=r(773),x=r(769),k=r(692),y=r(768),w=r(640),_=r(770),C=r(793),V=r(775),$=r(765),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-card",{staticClass:"pa-4",attrs:{light:""}},[r("v-tabs",{staticClass:"text-left",attrs:{color:"indigo darken-4",vertical:""}},[r("v-tab",{staticClass:"text-capitalize justify-start mr-4"},[t._v("Max Clicks")]),t._v(" "),r("v-tab",{staticClass:"text-capitalize justify-start mr-4"},[t._v("Expiry Date")]),t._v(" "),r("v-tab",{staticClass:"text-capitalize justify-start mr-4"},[t._v("Password Protection")]),t._v(" "),r("v-tab-item",[r("v-card",{staticClass:"pa-4",attrs:{outlined:""}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Max Clicks")]),t._v(" "),r("v-text-field",{attrs:{rules:t.numberCheck,color:"indigo darken-4",placeholder:"Link expires after x time clicks",outlined:"",autofocus:""},on:{blur:function(e){t.maxClicks||t.$refs.form.resetValidation()}},model:{value:t.maxClicks,callback:function(e){t.maxClicks=e},expression:"maxClicks"}})],1)],1),t._v(" "),r("v-tab-item",[r("v-card",{staticClass:"pa-4",attrs:{outlined:""}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"4"}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Days")]),t._v(" "),r("v-text-field",{attrs:{color:"indigo darken-4",placeholder:"Days",outlined:"",autofocus:"",rules:t.numberCheck},on:{blur:function(e){t.expiry.days||t.$refs.form.resetValidation()}},model:{value:t.expiry.days,callback:function(e){t.$set(t.expiry,"days",e)},expression:"expiry.days"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"4"}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Hours")]),t._v(" "),r("v-text-field",{attrs:{color:"indigo darken-4",placeholder:"Hours",outlined:"",rules:t.numberCheck},on:{blur:function(e){t.expiry.hours||t.$refs.form.resetValidation()}},model:{value:t.expiry.hours,callback:function(e){t.$set(t.expiry,"hours",e)},expression:"expiry.hours"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"4"}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Minutes")]),t._v(" "),r("v-text-field",{attrs:{color:"indigo darken-4",placeholder:"Minutes",outlined:"",rules:t.numberCheck},on:{blur:function(e){t.expiry.minutes||t.$refs.form.resetValidation()}},model:{value:t.expiry.minutes,callback:function(e){t.$set(t.expiry,"minutes",e)},expression:"expiry.minutes"}})],1),t._v(" "),r("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"12"}},[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("h5",{staticClass:"font-weight-medium"},[t._v("Date")]),t._v(" "),r("v-text-field",t._g(t._b({attrs:{placeholder:"YY/MM/DD","prepend-inner-icon":"mdi-calendar",color:"indigo darken-4",readonly:"",outlined:""},model:{value:t.expiry.date,callback:function(e){t.$set(t.expiry,"date",e)},expression:"expiry.date"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),r("v-date-picker",{attrs:{color:"indigo darken-4","no-title":"",scrollable:""},model:{value:t.expiry.date,callback:function(e){t.$set(t.expiry,"date",e)},expression:"expiry.date"}},[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"text-capitalize",attrs:{text:"",color:"indigo darken-4"},on:{click:function(e){t.menu=!1}}},[t._v("\n                    Cancel\n                  ")]),t._v(" "),r("v-btn",{attrs:{color:"indigo darken-4 white--text",depressed:""},on:{click:function(e){return t.$refs.menu.save(t.expiry.date)}}},[t._v("\n                    OK\n                  ")])],1)],1)],1)],1)],1)],1),t._v(" "),r("v-tab-item",[r("v-card",{staticClass:"pa-4",attrs:{outlined:""}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Password")]),t._v(" "),r("v-text-field",{attrs:{rules:t.passwordLength,color:"indigo darken-4",placeholder:"Enter password for protect your link","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password",hint:"At least 8 characters",outlined:"",autofocus:""},on:{"click:append":function(e){t.showPassword=!t.showPassword},submit:function(e){t.password||t.$refs.form.resetValidation()},blur:function(e){t.password||t.$refs.form.resetValidation()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1),t._v(" "),r("v-card-actions",{staticClass:"pa-0 pt-4"},[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"white--text text-capitalize",attrs:{color:"indigo darken-4",type:"submit",disabled:!t.valid,loading:t.btnLoading}},[t._v("Save Changes")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:v.a,VCol:f.a,VDatePicker:h.a,VForm:x.a,VMenu:k.a,VRow:y.a,VSpacer:w.a,VTab:_.a,VTabItem:C.a,VTabs:V.a,VTextField:$.a})},670:function(t,e,r){"use strict";r.r(e);r(663),r(23);var n={data:function(){return{valid:!0,btnLoading:!1,menu:!1,showPassword:!1,maxClicks:null,expiry:{days:null,hours:null,minutes:null,date:null},password:"",numberCheck:[function(t){return Number.isInteger(Number(t))||"Please use only number nothing else"},function(t){return"0"!==String(t)[0]||"The first digit cannot be given as zero"},function(t){return"-"!==String(t)[0]||"Not allowed arithmetic symbols"},function(t){return"+"!==String(t)[0]||"Not allowed arithmetic symbols"}],passwordLength:[function(t){return t.length>=8||"Password minimum 8 characters"}]}},watch:{maxClicks:function(t){t||this.$refs.form.resetValidation()}},methods:{submit:function(){if(this.$refs.form.validate()){var t,e=this.expiry,r=e.days,n=e.hours,o=e.minutes,l=e.date;(r||n||o)&&l&&(this.expiry.date=null),(r||n||o)&&(t=this.getISODate()),l&&(t=l);var data={maxClicks:this.maxClicks,expiryDate:t,password:this.password};this.$store.dispatch("setShortenOptions",data),this.$store.commit("TOGGLE_SHORTEN_OPTIONS")}},getISODate:function(){var t=new Date,e=this.expiry,r=e.days,n=e.hours,o=e.minutes,l=Number(t.getDate())+Number(r),c=Number(t.getHours())+Number(n),d=Number(t.getMinutes())+Number(o);return r&&t.setDate(l),n&&t.setHours(c),o&&t.setMinutes(d),new Date(t).toISOString()}}},o=r(45),l=r(51),c=r.n(l),d=r(245),m=r(623),v=r(622),f=r(767),h=r(773),x=r(769),k=r(692),y=r(768),w=r(640),_=r(770),C=r(793),V=r(775),$=r(765),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-card",{staticClass:"pa-2",attrs:{light:""}},[r("v-tabs",{attrs:{color:"indigo darken-4",grow:"",centered:""}},[r("v-tab",{staticClass:"text-capitalize"},[t._v("Clicks")]),t._v(" "),r("v-tab",{staticClass:"text-capitalize"},[t._v("Date")]),t._v(" "),r("v-tab",{staticClass:"text-capitalize"},[t._v("Password")]),t._v(" "),r("v-tab-item",[r("v-card",{staticClass:"pa-2",attrs:{outlined:""}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Max Clicks")]),t._v(" "),r("v-text-field",{attrs:{rules:t.numberCheck,color:"indigo darken-4",placeholder:"Link expires after x time clicks",outlined:"",autofocus:""},on:{blur:function(e){t.maxClicks||t.$refs.form.resetValidation()}},model:{value:t.maxClicks,callback:function(e){t.maxClicks=e},expression:"maxClicks"}})],1)],1),t._v(" "),r("v-tab-item",[r("v-card",{staticClass:"pa-2",attrs:{outlined:""}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"4"}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Days")]),t._v(" "),r("v-text-field",{attrs:{color:"indigo darken-4",placeholder:"Days",outlined:"",autofocus:"",rules:t.numberCheck},on:{blur:function(e){t.expiry.days||t.$refs.form.resetValidation()}},model:{value:t.expiry.days,callback:function(e){t.$set(t.expiry,"days",e)},expression:"expiry.days"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"4"}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Hours")]),t._v(" "),r("v-text-field",{attrs:{color:"indigo darken-4",placeholder:"Hours",outlined:"",rules:t.numberCheck},on:{blur:function(e){t.expiry.hours||t.$refs.form.resetValidation()}},model:{value:t.expiry.hours,callback:function(e){t.$set(t.expiry,"hours",e)},expression:"expiry.hours"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"4"}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Minutes")]),t._v(" "),r("v-text-field",{attrs:{color:"indigo darken-4",placeholder:"Minutes",outlined:"",rules:t.numberCheck},on:{blur:function(e){t.expiry.minutes||t.$refs.form.resetValidation()}},model:{value:t.expiry.minutes,callback:function(e){t.$set(t.expiry,"minutes",e)},expression:"expiry.minutes"}})],1),t._v(" "),r("v-col",{staticClass:"pt-0",attrs:{cols:"12",md:"12"}},[r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("h5",{staticClass:"font-weight-medium"},[t._v("Date")]),t._v(" "),r("v-text-field",t._g(t._b({attrs:{placeholder:"YY/MM/DD","prepend-inner-icon":"mdi-calendar",color:"indigo darken-4",readonly:"",outlined:""},model:{value:t.expiry.date,callback:function(e){t.$set(t.expiry,"date",e)},expression:"expiry.date"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),r("v-date-picker",{attrs:{color:"indigo darken-4","no-title":"",scrollable:""},model:{value:t.expiry.date,callback:function(e){t.$set(t.expiry,"date",e)},expression:"expiry.date"}},[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"text-capitalize",attrs:{text:"",color:"indigo darken-4"},on:{click:function(e){t.menu=!1}}},[t._v("\n                    Cancel\n                  ")]),t._v(" "),r("v-btn",{attrs:{color:"indigo darken-4 white--text",depressed:""},on:{click:function(e){return t.$refs.menu.save(t.expiry.date)}}},[t._v("\n                    OK\n                  ")])],1)],1)],1)],1)],1)],1),t._v(" "),r("v-tab-item",[r("v-card",{staticClass:"pa-2",attrs:{outlined:""}},[r("h5",{staticClass:"font-weight-medium"},[t._v("Password")]),t._v(" "),r("v-text-field",{attrs:{rules:t.passwordLength,color:"indigo darken-4",placeholder:"Enter password for protect your link","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password",hint:"At least 8 characters",outlined:"",autofocus:""},on:{"click:append":function(e){t.showPassword=!t.showPassword},submit:function(e){t.password||t.$refs.form.resetValidation()},blur:function(e){t.password||t.$refs.form.resetValidation()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1),t._v(" "),r("v-card-actions",{staticClass:"pa-0 pt-2"},[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"white--text text-capitalize",attrs:{color:"indigo darken-4",type:"submit",disabled:!t.valid,loading:t.btnLoading}},[t._v("Save Changes")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:v.a,VCol:f.a,VDatePicker:h.a,VForm:x.a,VMenu:k.a,VRow:y.a,VSpacer:w.a,VTab:_.a,VTabItem:C.a,VTabs:V.a,VTextField:$.a})}}]);