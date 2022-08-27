(function(){"use strict";var t={1585:function(t,e,a){var i=a(6369),s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"back"},[e("keep-alive",[e("router-view")],1)],1)},n=[],r=a(1001),o={},l=(0,r.Z)(o,s,n,!1,null,null,null),c=l.exports,u=a(2631),p=function(){var t=this,e=t._self._c;return e("form",{staticClass:"login-container",attrs:{action:""}},[e("p",[t._v("Login")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"用户名",oninput:"value=value.replace(/[^\\w_]/g,'')",maxlength:"10"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),e("br"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"密码",oninput:"value=value.replace(/[^\\w_]/g,'')",maxlength:"10"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),e("br"),e("label",{on:{click:t.register}},[t._v("注册点这里!")]),e("br"),e("span",{staticClass:"btn",on:{click:t.handleLogin}},[t._v("登录")])])},d=[],v={data(){return{username:"",password:""}},methods:{handleLogin(){""===this.username||""===this.password?alert("请输入完整哟！(゜▽＾*))"):(localStorage.setItem("token","魔法书，是为人间带来幸福的哟！"),this.$router.push({path:"./notes"}))},register(){alert("因为没给后端接口，所以随便输就能进哦！ (๑•̀ㅂ•́)و✧")}}},h=v,m=(0,r.Z)(h,p,d,!1,null,"1ad628e0",null),f=m.exports,w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"notes"},[e("button",{staticClass:"btn",on:{click:function(e){t.navbarisShow=!t.navbarisShow}}},[t._v("≡")]),e("br"),e("transition",{attrs:{name:"navbar"}},[e("navbar",{directives:[{name:"show",rawName:"v-show",value:t.navbarisShow,expression:"navbarisShow"}],staticClass:"navbar"})],1),e("button",{staticClass:"add",staticStyle:{"border-color":"rgb(145,178,253)"},on:{click:function(e){t.isShow=!0}}},[t._v("+新增")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTitle,expression:"searchTitle"}],staticClass:"searchtitle",attrs:{placeholder:"标题查询"},domProps:{value:t.searchTitle},on:{input:function(e){e.target.composing||(t.searchTitle=e.target.value)}}}),e("select",{directives:[{name:"model",rawName:"v-model",value:t.searchType,expression:"searchType"}],staticClass:"type",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.searchType=e.target.multiple?a:a[0]}}},[e("option",{attrs:{selected:"selected",value:""}},[t._v("全部")]),e("option",[t._v("笔记")]),e("option",[t._v("会议")])]),e("span",{staticClass:"spantext"},[t._v("标题")]),e("span",{staticClass:"spantext"},[t._v("分类")]),e("span",{staticClass:"spantext"},[t._v("字数")]),e("span",{staticClass:"spantext"},[t._v("创建时间")]),t._l(t.noteslist,(function(a){return e("form",{key:a.id,staticClass:"writeNotes"},[e("span",{staticClass:"spantext"},[t._v(t._s(a.title))]),e("span",{staticClass:"spantext"},[t._v(t._s(a.type))]),e("span",{staticClass:"spantext"},[t._v(t._s(a.text.length))]),e("span",{staticClass:"spantext"},[t._v(t._s(a.date))]),e("span",{staticClass:"edit",on:{click:function(e){return t.handleEdit(a.id)}}},[t._v("编辑")]),e("span",{staticClass:"edit",on:{click:function(e){return t.del(a.id)}}},[t._v("删除")]),e("br")])})),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{id:"overlay"},on:{click:function(e){t.isShow=!1}}},[e("div",{attrs:{id:"center"},on:{click:function(t){t.stopPropagation()}}},[e("div",[t._v("标题"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.preTitle,expression:"preTitle"}],staticClass:"title",attrs:{type:"text",maxlength:"30",onkeyup:"value=value.replace(/[^\\w\\u4E00-\\u9FA5|\\s+$]/g, '')"},domProps:{value:t.preTitle},on:{input:function(e){e.target.composing||(t.preTitle=e.target.value)}}})]),t._v(" 分类"),e("select",{directives:[{name:"model",rawName:"v-model",value:t.preType,expression:"preType"}],staticClass:"type",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.preType=e.target.multiple?a:a[0]}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("--请选择--")]),e("option",[t._v("笔记")]),e("option",[t._v("会议")])]),e("div",[t._v("内容")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.preText,expression:"preText"}],staticClass:"text",attrs:{type:"text",maxlength:"800",spellcheck:"false",onkeyup:"value=value.replace(/[^\\w\\u4E00-\\u9FA5|\\s+$]/g, '')"},domProps:{value:t.preText},on:{input:function(e){e.target.composing||(t.preText=e.target.value)}}}),e("button",{staticClass:"cancel",staticStyle:{"border-color":"darkgray"},on:{click:function(e){return t.clear()}}},[t._v("取消")]),e("button",{staticClass:"enter",on:{click:function(e){return t.add()}}},[t._v("确定")])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.editisShow,expression:"editisShow"}],attrs:{id:"overlay"},on:{click:function(e){t.editisShow=!1}}},[e("div",{attrs:{id:"center"},on:{click:function(t){t.stopPropagation()}}},[e("div",[t._v("标题"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.editTitle,expression:"editTitle"}],staticClass:"title",attrs:{type:"text",maxlength:"30",onkeyup:"value=value.replace(/[^\\w\\u4E00-\\u9FA5|\\s+$]/g, '')"},domProps:{value:t.editTitle},on:{input:function(e){e.target.composing||(t.editTitle=e.target.value)}}})]),t._v(" 分类"),e("select",{directives:[{name:"model",rawName:"v-model",value:t.editType,expression:"editType"}],staticClass:"type",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.editType=e.target.multiple?a:a[0]}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("--请选择--")]),e("option",[t._v("笔记")]),e("option",[t._v("会议")])]),e("div",[t._v("内容")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editText,expression:"editText"}],staticClass:"text",attrs:{type:"text",maxlength:"800",spellcheck:"false",onkeyup:"value=value.replace(/[^\\w\\u4E00-\\u9FA5|\\s+$]/g, '')"},domProps:{value:t.editText},on:{input:function(e){e.target.composing||(t.editText=e.target.value)}}}),e("button",{staticClass:"cancel",on:{click:function(e){return t.clearEdit()}}},[t._v("取消")]),e("button",{staticClass:"enter",on:{click:function(e){return t.edit()}}},[t._v("修改")])])])],2)},b=[],x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"navbar"},[e("ul",[e("li",[e("router-link",{staticClass:"which",attrs:{to:"/homepage"}},[t._v("主页")])],1),e("li",[e("router-link",{staticClass:"which",attrs:{to:"/notes"}},[t._v("笔记管理")])],1),e("li",[e("router-link",{staticClass:"which",attrs:{to:"/groups"}},[t._v("分组管理")])],1),e("li",[e("router-link",{staticClass:"which",attrs:{to:"/center"}},[t._v("个人信息")])],1)])])},g=[],_={},T=(0,r.Z)(_,x,g,!1,null,null,null),y=T.exports,C={components:{navbar:y},data(){return{datalist:[],isShow:!1,editisShow:!1,navbarisShow:!0,searchTitle:"",searchType:"",id:0,preTitle:"",preType:"",preText:"",editTitle:"",editType:"",editText:"",editDate:"",editId:0,editIndex:0}},methods:{clear(){this.isShow=!1,this.preTitle="",this.preType="",this.preText=""},add(){if(""===this.preTitle||""===this.preType||""===this.preText)alert("请把笔记写完整啦！(/≧▽≦)/");else{const t=new Date,e={title:this.preTitle,type:this.preType,text:this.preText,date:t.getFullYear()+"/"+(t.getMonth()+1)+"/"+t.getDate(),id:this.id};this.datalist.push(e),this.clear(),this.id++}},del(t){const e=confirm("确定删除吗(ノへ￣、)");if(e)for(var a=0;a<this.id;a++)this.datalist[a]&&this.datalist[a].id===t&&this.datalist.splice(a,1)},handleEdit(t){for(var e=0;e<this.id;e++)this.datalist[e]&&this.datalist[e].id===t&&(this.editIndex=e);this.editTitle=this.datalist[this.editIndex].title,this.editType=this.datalist[this.editIndex].type,this.editText=this.datalist[this.editIndex].text,this.editDate=this.datalist[this.editIndex].date,this.editId=t,this.editisShow=!0},edit(){const t={title:this.editTitle,type:this.editType,text:this.editText,date:this.editDate,id:this.editId};for(var e=0;e<this.id;e++)this.datalist[e]&&this.datalist[e].id===this.editId&&this.datalist.splice(e,1,t);this.clearEdit()},clearEdit(){this.editTitle="",this.editType="",this.editText="",this.editDate="",this.editId="",this.editisShow=!1}},computed:{noteslist(){return this.datalist.filter((t=>t.title.includes(this.searchTitle))).filter((t=>t.type.includes(this.searchType)))}}},k=C,S=(0,r.Z)(k,w,b,!1,null,"3cf2acc1",null),P=S.exports,N=function(){var t=this,e=t._self._c;return e("div",[e("button",{staticClass:"btn",on:{click:function(e){t.navbarisShow=!t.navbarisShow}}},[t._v("≡")]),e("br"),e("transition",{attrs:{name:"navbar"}},[e("navbar",{directives:[{name:"show",rawName:"v-show",value:t.navbarisShow,expression:"navbarisShow"}],staticClass:"navbar"})],1),t._v(" 主页 ")],1)},Z=[],I={components:{navbar:y},data(){return{navbarisShow:!0}}},E=I,O=(0,r.Z)(E,N,Z,!1,null,null,null),A=O.exports,$=function(){var t=this,e=t._self._c;return e("div",[e("button",{staticClass:"btn",on:{click:function(e){t.navbarisShow=!t.navbarisShow}}},[t._v("≡")]),e("br"),e("transition",{attrs:{name:"navbar"}},[e("navbar",{directives:[{name:"show",rawName:"v-show",value:t.navbarisShow,expression:"navbarisShow"}],staticClass:"navbar"})],1),t._v(" 分组管理 ")],1)},j=[],D={components:{navbar:y},data(){return{navbarisShow:!0}}},F=D,q=(0,r.Z)(F,$,j,!1,null,null,null),R=q.exports,L=function(){var t=this,e=t._self._c;return e("div",[e("button",{staticClass:"btn",on:{click:function(e){t.navbarisShow=!t.navbarisShow}}},[t._v("≡")]),e("br"),e("transition",{attrs:{name:"navbar"}},[e("navbar",{directives:[{name:"show",rawName:"v-show",value:t.navbarisShow,expression:"navbarisShow"}],staticClass:"navbar"})],1),t._v(" 个人中心 ")],1)},M=[],Y={components:{navbar:y},data(){return{navbarisShow:!0}}},z=Y,B=(0,r.Z)(z,L,M,!1,null,null,null),G=B.exports;i.ZP.use(u.ZP);const H=[{path:"/login",component:f},{path:"/notes",component:P,meta:{isRequired:!0}},{path:"*",component:f},{path:"/homepage",component:A,meta:{isRequired:!0}},{path:"/groups",component:R,meta:{isRequired:!0}},{path:"/center",component:G,meta:{isRequired:!0}}],J=new u.ZP({mode:"hash",base:"",routes:H});J.beforeEach(((t,e,a)=>{t.meta.isRequired?localStorage.getItem("token")?a():a("/login"):a()}));var K=J,Q=a(3822);i.ZP.use(Q.ZP);var U=new Q.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),V=a(6265),W=a.n(V);i.ZP.prototype.$axios=W(),i.ZP.config.productionTip=!1,new i.ZP({router:K,store:U,render:t=>t(c)}).$mount("#app")}},e={};function a(i){var s=e[i];if(void 0!==s)return s.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,i,s,n){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],s=t[u][1],n=t[u][2];for(var o=!0,l=0;l<i.length;l++)(!1&n||r>=n)&&Object.keys(a.O).every((function(t){return a.O[t](i[l])}))?i.splice(l--,1):(o=!1,n<r&&(r=n));if(o){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,s,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,n,r=i[0],o=i[1],l=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(l)var u=l(a)}for(e&&e(i);c<r.length;c++)n=r[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(u)},i=self["webpackChunkwerun"]=self["webpackChunkwerun"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(1585)}));i=a.O(i)})();
//# sourceMappingURL=app.03727999.js.map