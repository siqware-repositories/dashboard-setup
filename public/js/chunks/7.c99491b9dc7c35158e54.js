(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{EG0M:function(e,t,s){"use strict";s.r(t);var a={name:"addHome",props:["is_popup"],data:function(){return{user:{profile:null,category:"ICT",role:"user",type:"employee",name:"",email:"",telephone:"",password:"",content:"Content"},categories:[{id:1,category:"ICT"},{id:2,category:"Administrator"},{id:3,category:"Faculty of Science and Technology"}],data:"Working on the mix",options:{}}},computed:{popupSync:{get:function(){return this.is_popup},set:function(e){this.$emit("update-is_popup",e)}}}},i=s("KHd+"),l=Object(i.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vs-popup",{attrs:{fullscreen:"",title:"បន្ថែមអ្នកប្រើប្រាស់",active:e.popupSync},on:{"update:active":function(t){e.popupSync=t}}},[s("form",[s("div",{staticClass:"vx-row mb-2"},[s("div",{staticClass:"vx-col w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"title","label-placeholder":"ចំណងជើង"},model:{value:e.user.title,callback:function(t){e.$set(e.user,"title",t)},expression:"user.title"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("title"),expression:"errors.has('title')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("title")))])],1),e._v(" "),s("div",{staticClass:"vx-col w-full"},[s("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",label:"ប្រភេទ"},on:{"input-change":function(e){}},model:{value:e.user.category,callback:function(t){e.$set(e.user,"category",t)},expression:"user.category"}},e._l(e.categories,(function(e,t){return s("vs-select-item",{key:t,attrs:{value:e.category,text:e.category}})})),1)],1),e._v(" "),s("div",{staticClass:"vx-col w-full"},[s("tinymce",{attrs:{id:"d1",other_options:e.options},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}})],1)]),e._v(" "),s("div",{staticClass:"vx-row mb-2"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",label:"សិទ្ធ"},on:{"input-change":function(e){}},model:{value:e.user.role,callback:function(t){e.$set(e.user,"role",t)},expression:"user.role"}},[s("vs-select-item",{attrs:{value:"user",text:"User"}}),e._v(" "),s("vs-select-item",{attrs:{value:"admin",text:"Admin"}}),e._v(" "),s("vs-select-item",{attrs:{value:"super_admin",text:"Super Admin"}})],1)],1),e._v(" "),s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",label:"ប្រភេទ"},on:{"input-change":function(e){}},model:{value:e.user.type,callback:function(t){e.$set(e.user,"type",t)},expression:"user.type"}},[s("vs-select-item",{attrs:{value:"employee",text:"Employee"}}),e._v(" "),s("vs-select-item",{attrs:{value:"owner",text:"Owner"}}),e._v(" "),s("vs-select-item",{attrs:{value:"developer",text:"Developer"}})],1)],1)]),e._v(" "),s("div",{staticClass:"vx-row mb-2"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full",attrs:{type:"email",name:"email","icon-pack":"feather",icon:"icon-mail","icon-no-border":"","label-placeholder":"អ៊ីម៉ែល"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("email")))])],1),e._v(" "),s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"telephone","icon-pack":"feather",icon:"icon-smartphone","icon-no-border":"","label-placeholder":"លេខទុរស័ព្ទ"},model:{value:e.user.telephone,callback:function(t){e.$set(e.user,"telephone",t)},expression:"user.telephone"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("telephone"),expression:"errors.has('telephone')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("telephone")))])],1)]),e._v(" "),s("vs-divider"),e._v(" "),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("vs-button",{staticClass:"mr-3 mb-2",attrs:{type:"relief"},on:{click:function(t){return t.preventDefault(),e.submitForm(t)}}},[e._v("\n                    បង្កើត\n                ")]),e._v(" "),s("vs-button",{staticClass:"mb-2",attrs:{color:"warning",type:"relief"},on:{click:[function(t){return t.preventDefault(),e.resetField(t)},function(e){}]}},[e._v("\n                    ចាកចេញ\n                ")])],1)])],1)])}),[],!1,null,"3ae8426e",null).exports,r={name:"editHome",props:["is_popup"],data:function(){return{user:{profile:null,gender:"ប្រុស",role:"user",type:"employee",name:"",email:"",telephone:"",password:""}}},computed:{popupSync:{get:function(){return this.is_popup},set:function(e){this.$emit("update-is_popup",e)}}}},n={components:{EditHome:Object(i.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vs-popup",{attrs:{title:"បន្ថែមអ្នកប្រើប្រាស់",active:e.popupSync},on:{"update:active":function(t){e.popupSync=t}}},[s("form",[s("div",{staticClass:"vx-row mb-2"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"name","icon-pack":"feather",icon:"icon-user","icon-no-border":"","label-placeholder":"ឈ្មោះ"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("name")))])],1),e._v(" "),s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",label:"ភេទ"},on:{"input-change":function(e){}},model:{value:e.user.gender,callback:function(t){e.$set(e.user,"gender",t)},expression:"user.gender"}},[s("vs-select-item",{attrs:{value:"ប្រុស",text:"ប្រុស"}}),e._v(" "),s("vs-select-item",{attrs:{value:"ស្រី",text:"ស្រី"}})],1)],1)]),e._v(" "),s("div",{staticClass:"vx-row mb-2"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",label:"សិទ្ធ"},on:{"input-change":function(e){}},model:{value:e.user.role,callback:function(t){e.$set(e.user,"role",t)},expression:"user.role"}},[s("vs-select-item",{attrs:{value:"user",text:"User"}}),e._v(" "),s("vs-select-item",{attrs:{value:"admin",text:"Admin"}}),e._v(" "),s("vs-select-item",{attrs:{value:"super_admin",text:"Super Admin"}})],1)],1),e._v(" "),s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",label:"ប្រភេទ"},on:{"input-change":function(e){}},model:{value:e.user.type,callback:function(t){e.$set(e.user,"type",t)},expression:"user.type"}},[s("vs-select-item",{attrs:{value:"employee",text:"Employee"}}),e._v(" "),s("vs-select-item",{attrs:{value:"owner",text:"Owner"}}),e._v(" "),s("vs-select-item",{attrs:{value:"developer",text:"Developer"}})],1)],1)]),e._v(" "),s("div",{staticClass:"vx-row mb-2"},[s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full",attrs:{type:"email",name:"email","icon-pack":"feather",icon:"icon-mail","icon-no-border":"","label-placeholder":"អ៊ីម៉ែល"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("email")))])],1),e._v(" "),s("div",{staticClass:"vx-col sm:w-1/2 w-full"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"telephone","icon-pack":"feather",icon:"icon-smartphone","icon-no-border":"","label-placeholder":"លេខទុរស័ព្ទ"},model:{value:e.user.telephone,callback:function(t){e.$set(e.user,"telephone",t)},expression:"user.telephone"}}),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("telephone"),expression:"errors.has('telephone')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("telephone")))])],1)]),e._v(" "),s("vs-divider"),e._v(" "),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("vs-button",{staticClass:"mr-3 mb-2",attrs:{type:"relief"},on:{click:function(t){return t.preventDefault(),e.submitForm(t)}}},[e._v("\n                    បង្កើត\n                ")]),e._v(" "),s("vs-button",{staticClass:"mb-2",attrs:{color:"warning",type:"relief"},on:{click:[function(t){return t.preventDefault(),e.resetField(t)},function(e){}]}},[e._v("\n                    ចាកចេញ\n                ")])],1)])],1)])}),[],!1,null,"09f8f594",null).exports,AddHome:l},data:function(){return{is_popup:!1,is_popup_edit:!1,selected:[],tableList:["vs-th: Component","vs-tr: Component","vs-td: Component","thread: Slot","tbody: Slot","header: Slot"],users:[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",website:"ramiro.info"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",website:"kale.biz"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",website:"demarco.info"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",website:"ola.org"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",website:"elvis.io"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",website:"jacynthe.com"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",website:"conrad.com"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",website:"ambrose.net"}],data:"Working on the mix",options:{}}},methods:{syncPopup:function(e){this.is_popup=e},syncPopupEdit:function(e){this.is_popup_edit=e}}},o=Object(i.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("tinymce",{attrs:{id:"d2",other_options:e.options},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}),e._v(" "),s("div",{staticClass:"flex btn-group"},[s("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-plus-square"},on:{click:function(t){e.is_popup=!0}}},[e._v("បន្ថែម")]),e._v(" "),s("vs-button",{attrs:{color:"warning",type:"relief","icon-pack":"feather",icon:"icon-edit"},on:{click:function(t){e.is_popup_edit=!0}}},[e._v("កែប្រែ")]),e._v(" "),s("vs-button",{attrs:{type:"relief","icon-pack":"feather",icon:"icon-package"}},[e._v("អាប់គ្រេដ")]),e._v(" "),s("vs-button",{attrs:{color:"danger",type:"relief","icon-pack":"feather",icon:"icon-trash-2"}},[e._v("លុប")]),e._v(" "),s("add-home",{attrs:{is_popup:e.is_popup},on:{"update-is_popup":e.syncPopup}}),e._v(" "),s("edit-home",{attrs:{is_popup:e.is_popup_edit},on:{"update-is_popup":e.syncPopupEdit}})],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);