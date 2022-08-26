(function(){"use strict";var t={7710:function(t,e,i){var a=i(6369),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"back"},[e("router-view")],1)},s=[],r=i(1001),o={},l=(0,r.Z)(o,n,s,!1,null,null,null),u=l.exports,c=i(2631),d=function(){var t=this,e=t._self._c;return e("form",{staticClass:"login-container",attrs:{action:""}},[e("p",[t._v("Login")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"用户名",oninput:"value=value.replace(/[^\\w_]/g,'')",maxlength:"10"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),e("br"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"密码",oninput:"value=value.replace(/[^\\w_]/g,'')",maxlength:"10"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),e("br"),e("label",{on:{click:t.register}},[t._v("注册点这里!")]),e("br"),e("span",{staticClass:"btn",on:{click:t.handleLogin}},[t._v("登录")])])},p=[],v={data(){return{username:"",password:""}},methods:{handleLogin(){""===this.username||""===this.password?alert("请输入完整哟！(゜▽＾*))"):(localStorage.setItem("token","魔法书，是为人间带来幸福的哟！"),this.$router.push({path:"./notes"}))},register(){alert("因为没给后端接口，所以随便输就能进哦！ (๑•̀ㅂ•́)و✧")}}},h=v,m=(0,r.Z)(h,d,p,!1,null,"fee398f4",null),f=m.exports,g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"notes"},[e("button",{staticClass:"btn",on:{click:function(e){t.navbarisShow=!t.navbarisShow}}},[t._v("≡")]),e("br"),e("transition",{attrs:{name:"navbar"}},[e("navbar",{directives:[{name:"show",rawName:"v-show",value:t.navbarisShow,expression:"navbarisShow"}],staticClass:"navbar"})],1),e("button",{staticClass:"add",staticStyle:{"border-color":"rgb(145,178,253)"},on:{click:function(e){t.isShow=!0}}},[t._v("+新增")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"searchtext",attrs:{placeholder:"标题查询"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),e("span",[t._v("标题")]),e("span",[t._v("分类")]),e("span",[t._v("字数")]),e("span",[t._v("创建时间")]),t._l(t.noteslist,(function(i){return e("form",{key:i.id,staticClass:"writeNotes"},[e("span",[t._v(t._s(i.title))]),e("span",[t._v(t._s(i.type))]),e("span",[t._v(t._s(i.text.length))]),e("span",[t._v(t._s(i.date))]),e("span",{staticClass:"edit",on:{click:function(e){return t.handleEdit(i.id)}}},[t._v("编辑")]),e("span",{staticClass:"edit",on:{click:function(e){return t.del(i.id)}}},[t._v("删除")]),e("br")])})),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{id:"overlay"},on:{click:function(e){t.isShow=!1}}},[e("div",{attrs:{id:"center"},on:{click:function(t){t.stopPropagation()}}},[e("div",[t._v("标题"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.preTitle,expression:"preTitle"}],staticClass:"title",attrs:{type:"text",maxlength:"30",onkeyup:"value=value.replace(/[^\\w\\u4E00-\\u9FA5|\\s+$]/g, '')"},domProps:{value:t.preTitle},on:{input:function(e){e.target.composing||(t.preTitle=e.target.value)}}})]),t._v(" 分类"),e("select",{directives:[{name:"model",rawName:"v-model",value:t.preType,expression:"preType"}],staticClass:"type",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.preType=e.target.multiple?i:i[0]}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("--请选择--")]),e("option",[t._v("笔记")]),e("option",[t._v("会议")])]),e("div",[t._v("内容")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.preText,expression:"preText"}],staticClass:"text",attrs:{type:"text",maxlength:"800",spellcheck:"false",onkeyup:"value=value.replace(/[^\\w\\u4E00-\\u9FA5|\\s+$]/g, '')"},domProps:{value:t.preText},on:{input:function(e){e.target.composing||(t.preText=e.target.value)}}}),e("button",{staticClass:"cancel",staticStyle:{"border-color":"darkgray"},on:{click:function(e){return t.clear()}}},[t._v("取消")]),e("button",{staticClass:"enter",on:{click:function(e){return t.add()}}},[t._v("确定")])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.editisShow,expression:"editisShow"}],attrs:{id:"overlay"},on:{click:function(e){t.editisShow=!1}}},[e("div",{attrs:{id:"center"},on:{click:function(t){t.stopPropagation()}}},[e("div",[t._v("标题"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.editTitle,expression:"editTitle"}],staticClass:"title",attrs:{type:"text",maxlength:"30",onkeyup:"value=value.replace(/[^\\w\\u4E00-\\u9FA5|\\s+$]/g, '')"},domProps:{value:t.editTitle},on:{input:function(e){e.target.composing||(t.editTitle=e.target.value)}}})]),t._v(" 分类"),e("select",{directives:[{name:"model",rawName:"v-model",value:t.editType,expression:"editType"}],staticClass:"type",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.editType=e.target.multiple?i:i[0]}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("--请选择--")]),e("option",[t._v("笔记")]),e("option",[t._v("会议")])]),e("div",[t._v("内容")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editText,expression:"editText"}],staticClass:"text",attrs:{type:"text",maxlength:"800",spellcheck:"false",onkeyup:"value=value.replace(/[^\\w\\u4E00-\\u9FA5|\\s+$]/g, '')"},domProps:{value:t.editText},on:{input:function(e){e.target.composing||(t.editText=e.target.value)}}}),e("button",{staticClass:"cancel",on:{click:function(e){return t.clearEdit()}}},[t._v("取消")]),e("button",{staticClass:"enter",on:{click:function(e){return t.edit()}}},[t._v("修改")])])])],2)},x=[],w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"navbar"},[e("ul",[e("li",[e("router-link",{staticClass:"which",attrs:{to:"/homepage"}},[t._v("主页")])],1),e("li",[e("router-link",{staticClass:"which",attrs:{to:"/notes"}},[t._v("笔记管理")])],1),e("li",[e("router-link",{staticClass:"which",attrs:{to:"/groups"}},[t._v("分组管理")])],1),e("li",[e("router-link",{staticClass:"which",attrs:{to:"/center"}},[t._v("个人信息")])],1)])])},_=[],T={},y=(0,r.Z)(T,w,_,!1,null,null,null),b=y.exports,k={components:{navbar:b},data(){return{datalist:[],isShow:!1,editisShow:!1,navbarisShow:!0,searchText:"",id:0,preTitle:"",preType:"",preText:"",editTitle:"",editType:"",editText:"",editDate:"",editId:0,editIndex:0}},methods:{clear(){this.isShow=!1,this.preTitle="",this.preType="",this.preText=""},add(){if(""===this.preTitle||""===this.preType||""===this.preText)alert("请把笔记写完整啦！(/≧▽≦)/");else{const t=new Date,e={title:this.preTitle,type:this.preType,text:this.preText,date:t.getFullYear()+"/"+(t.getMonth()+1)+"/"+t.getDate(),id:this.id};this.datalist.push(e),this.clear(),this.id++}},del(t){const e=confirm("确定删除吗(ノへ￣、)");if(e)for(var i=0;i<this.id;i++)this.datalist[i]&&this.datalist[i].id===t&&this.datalist.splice(i,1)},handleEdit(t){for(var e=0;e<this.id;e++)this.datalist[e]&&this.datalist[e].id===t&&(this.editIndex=e);this.editTitle=this.datalist[this.editIndex].title,this.editType=this.datalist[this.editIndex].type,this.editText=this.datalist[this.editIndex].text,this.editDate=this.datalist[this.editIndex].date,this.editId=t,this.editisShow=!0},edit(){const t={title:this.editTitle,type:this.editType,text:this.editText,date:this.editDate,id:this.editId};for(var e=0;e<this.id;e++)this.datalist[e]&&this.datalist[e].id===this.editId&&this.datalist.splice(e,1,t);this.clearEdit()},clearEdit(){this.editTitle="",this.editType="",this.editText="",this.editDate="",this.editId="",this.editisShow=!1}},computed:{noteslist(){return this.datalist.filter((t=>t.title.includes(this.searchText)))}}},C=k,S=(0,r.Z)(C,g,x,!1,null,"679169dd",null),P=S.exports,Z=function(){var t=this,e=t._self._c;return e("div",[t._v("主页")])},I=[],N={},E=(0,r.Z)(N,Z,I,!1,null,null,null),O=E.exports,$=function(){var t=this,e=t._self._c;return e("div",[t._v("分组管理")])},j=[],A={},D=(0,r.Z)(A,$,j,!1,null,null,null),F=D.exports,q=function(){var t=this,e=t._self._c;return e("div",[t._v("个人中心")])},R=[],L={},M=(0,r.Z)(L,q,R,!1,null,null,null),Y=M.exports;a.ZP.use(c.ZP);const z=[{path:"/login",component:f},{path:"/notes",component:P,meta:{isRequired:!0}},{path:"*",component:f},{path:"/homepage",component:O,meta:{isRequired:!0}},{path:"/groups",component:F,meta:{isRequired:!0}},{path:"/center",component:Y,meta:{isRequired:!0}}],B=new c.ZP({mode:"hash",base:"",routes:z});B.beforeEach(((t,e,i)=>{t.meta.isRequired?localStorage.getItem("token")?i():i("/login"):i()}));var G=B,H=i(3822);a.ZP.use(H.ZP);var J=new H.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),K=i(6265),Q=i.n(K);a.ZP.prototype.$axios=Q(),a.ZP.config.productionTip=!1,new a.ZP({router:G,store:J,render:t=>t(u)}).$mount("#app")}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,a,n,s){if(!a){var r=1/0;for(c=0;c<t.length;c++){a=t[c][0],n=t[c][1],s=t[c][2];for(var o=!0,l=0;l<a.length;l++)(!1&s||r>=s)&&Object.keys(i.O).every((function(t){return i.O[t](a[l])}))?a.splice(l--,1):(o=!1,s<r&&(r=s));if(o){t.splice(c--,1);var u=n();void 0!==u&&(e=u)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[a,n,s]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,s,r=a[0],o=a[1],l=a[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(l)var c=l(i)}for(e&&e(a);u<r.length;u++)s=r[u],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(c)},a=self["webpackChunkwerun"]=self["webpackChunkwerun"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(7710)}));a=i.O(a)})();
//# sourceMappingURL=app.9f39c28c.js.map