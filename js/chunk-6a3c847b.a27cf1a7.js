(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a3c847b"],{2532:function(t,e,n){"use strict";var r=n("23e7"),i=n("5a34"),o=n("1d80"),a=n("577e"),s=n("ab13");r({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~a(o(this)).indexOf(a(i(t)),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),i=n("825a"),o=n("577e"),a=n("d039"),s=n("ad6d"),c="toString",u=RegExp.prototype,l=u[c],f=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=c;(f||d)&&r(RegExp.prototype,c,(function(){var t=i(this),e=o(t.source),n=t.flags,r=o(void 0===n&&t instanceof RegExp&&!("flags"in u)?s.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),a=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),o=n("9bdd"),a=n("e95a"),s=n("50c4"),c=n("8418"),u=n("35a1");t.exports=function(t){var e,n,l,f,d,v,p=i(t),h="function"==typeof this?this:Array,m=arguments.length,g=m>1?arguments[1]:void 0,b=void 0!==g,y=u(p),x=0;if(b&&(g=r(g,m>2?arguments[2]:void 0,2)),void 0==y||h==Array&&a(y))for(e=s(p.length),n=new h(e);e>x;x++)v=b?g(p[x],x):p[x],c(n,x,v);else for(f=y.call(p),d=f.next,n=new h;!(l=d.call(f)).done;x++)v=b?o(f,g,[l.value,x],!0):l.value,c(n,x,v);return n.length=x,n}},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},6062:function(t,e,n){"use strict";var r=n("6d61"),i=n("6566");t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,n){"use strict";var r=n("9bf2").f,i=n("7c73"),o=n("e2cc"),a=n("0366"),s=n("19aa"),c=n("2266"),u=n("7dd0"),l=n("2626"),f=n("83ab"),d=n("f183").fastKey,v=n("69f3"),p=v.set,h=v.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,r){s(t,l,e),p(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=r&&c(r,t[u],{that:t,AS_ENTRIES:n})})),v=h(e),m=function(t,e,n){var r,i,o=v(t),a=g(t,e);return a?a.value=n:(o.last=a={index:i=d(e,!0),key:e,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=a),r&&(r.next=a),f?o.size++:t.size++,"F"!==i&&(o.index[i]=a)),t},g=function(t,e){var n,r=v(t),i=d(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return o(l.prototype,{clear:function(){var t=this,e=v(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),r=g(e,t);if(r){var i=r.next,o=r.previous;delete n.index[r.index],r.removed=!0,o&&(o.next=i),i&&(i.previous=o),n.first==r&&(n.first=i),n.last==r&&(n.last=o),f?n.size--:e.size--}return!!r},forEach:function(t){var e,n=v(this),r=a(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!g(this,t)}}),o(l.prototype,n?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return m(this,0===t?0:t,e)}}:{add:function(t){return m(this,t=0===t?0:t,t)}}),f&&r(l.prototype,"size",{get:function(){return v(this).size}}),l},setStrong:function(t,e,n){var r=e+" Iterator",i=h(e),o=h(r);u(t,e,(function(t,e){p(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("94ca"),a=n("6eeb"),s=n("f183"),c=n("2266"),u=n("19aa"),l=n("861d"),f=n("d039"),d=n("1c7e"),v=n("d44e"),p=n("7156");t.exports=function(t,e,n){var h=-1!==t.indexOf("Map"),m=-1!==t.indexOf("Weak"),g=h?"set":"add",b=i[t],y=b&&b.prototype,x=b,w={},_=function(t){var e=y[t];a(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(m&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})},S=o(t,"function"!=typeof b||!(m||y.forEach&&!f((function(){(new b).entries().next()}))));if(S)x=n.getConstructor(e,t,h,g),s.enable();else if(o(t,!0)){var k=new x,C=k[g](m?{}:-0,1)!=k,E=f((function(){k.has(1)})),A=d((function(t){new b(t)})),I=!m&&f((function(){var t=new b,e=5;while(e--)t[g](e,e);return!t.has(-0)}));A||(x=e((function(e,n){u(e,x,t);var r=p(new b,e,x);return void 0!=n&&c(n,r[g],{that:r,AS_ENTRIES:h}),r})),x.prototype=y,y.constructor=x),(E||I)&&(_("delete"),_("has"),h&&_("get")),(I||C)&&_(g),m&&y.clear&&delete y.clear}return w[t]=x,r({global:!0,forced:x!=b},w),v(x,t),m||n.setStrong(x,t,h),x}},7156:function(t,e,n){var r=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var o,a;return i&&"function"==typeof(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&i(t,a),t}},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(a){throw i(t),a}}},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),a=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:a},{from:i})},ab13:function(t,e,n){var r=n("b622"),i=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(r){}}return!1}},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,o=Function.prototype,a=o.toString,s=/^\s*function ([^ (]*)/,c="name";r&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(t){return""}}})},bb2f:function(t,e,n){var r=n("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},caad:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").includes,o=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d28b:function(t,e,n){var r=n("746f");r("iterator")},d86e:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.user?n("div",{staticClass:"w-full md:w-2/3 mx-2 md:mx-auto"},[n("div",{staticClass:"bg-gray-50 rounded p-3 border-2 border-gray-800 text-center"},[n("h2",{staticClass:"text-lg font-semibold"},[t._v(t._s(t.user.name))]),n("p",[t._v(t._s(t.user.phone))]),n("p",[t._v(t._s(t.user.email))])])]):t._e(),n("div",{staticClass:"md:w-3/4 mx-auto"},[n("div",{staticClass:"mt-4 text-center flex flex-wrap justify-center gap-3"},[n("button",{class:"p-3 rounded-lg  font-semibold shadow-sm hover:shadow-lg text-white capitalize "+(""==t.s?"bg-black shadow-lg":"bg-green-500 shadow-sm"),on:{click:function(e){return t.filterByCluster("")}}},[t._v(" All ")]),t._l(t.clusters,(function(e){return n("button",{key:e,class:"p-3 rounded-lg  font-semibold shadow-sm hover:shadow-lg text-white capitalize "+(e==t.s?"bg-black shadow-lg":"bg-green-500 shadow-sm"),on:{click:function(n){return t.filterByCluster(e)}}},[t._v(" "+t._s(e)+" ")])}))],2),t._l(t.exams,(function(e,r){return n("div",{key:r,staticClass:"\n        p-5\n        bg-clip-padding\n        backdrop-filter backdrop-blur-xl\n        bg-opacity-30\n        border border-gray-200\n        bg-gray-200\n        mx-3\n        my-5\n        rounded-lg\n      "},[n("div",{staticClass:"text-center"},[n("div",[n("h2",{staticClass:"ma-auto balooda text-2xl font-semibold text-gray-700 py-3"},[t._v(" "+t._s(e.topic)+" ")]),n("h2",{staticClass:"\n              ma-auto\n              text-xl\n              capitalize\n              font-semibold\n              text-gray-700\n              py-3\n            "},[t._v(" "+t._s(e.cluster)+" ")])]),t._m(0,!0),n("div",{staticClass:"mx-auto mt-5 space-y-2 flex flex-wrap justify-center"},[t.user?e.purchased?e.start<Date.now()?n("router-link",{staticClass:"primary_btn my-2",attrs:{to:"/exam/"+e.id}},[t._v("Start Exam")]):n("button",{staticClass:"primary_btn my-2",on:{click:t.upcomingalert}},[t._v(" Start Exam ")]):n("button",{staticClass:"primary_btn my-2",on:{click:t.purchasealert}},[t._v(" Start Exam ")]):n("router-link",{staticClass:"primary_btn my-2",attrs:{to:"/login"}},[t._v(" Start Exam ")]),n("router-link",{staticClass:"mx-2 primary_btn",attrs:{to:"/ranking/"+e.id}},[t._v("Leaderboard")]),t.user?e.purchased?n("button",{staticClass:"primary_btn my-2",attrs:{disabled:e.loading},on:{click:function(n){return t.viewSolution(e.exam,e.solve_sheet,e.id)}}},[t._v(" "+t._s(e.loading?"Loading...":"Solve Sheet")+" ")]):e.purchased?n("button",{staticClass:"primary_btn my-2",on:{click:t.upcomingalert}},[t._v(" Solve Sheet ")]):n("button",{staticClass:"primary_btn my-2",on:{click:t.endalert}},[t._v(" Solve Sheet ")]):n("router-link",{staticClass:"primary_btn my-2",attrs:{to:"/login"}},[t._v(" Solve Sheet ")])],1)])])}))],2),t.exams.length<1?n("div",{staticClass:"mt-10 text-center"},[n("loader")],1):t._e()])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-lg"},[n("h2",{staticClass:"mt-2 cursive pt-2 text-white"},[t._v(" Per Question marks: 10 "),n("br"),t._v(" Per Question Time: 3 minutes ")])])}];function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t){if(Array.isArray(t))return o(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n("fb6a"),n("b0c0");function c(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return a(t)||s(t)||c(t)||u()}n("d81d"),n("25f0"),n("ac1f"),n("5319"),n("6062"),n("4de4"),n("caad"),n("2532");var f={data:function(){return{exams:[],clusters:[],s:""}},methods:{viewSolution:function(t,e,n){var r=this;this.exams[parseInt(n)-1].loading=!0,fetch(t+"?type=check&&phone="+this.user.email).then((function(t){return t.json()})).then((function(t){"exists"==t.message?(window.open(e,"_blank"),r.exams[parseInt(n)-1].loading=!1):(r.$swal({icon:"warning",text:"You must give exam to view solution"}),r.exams[parseInt(n)-1].loading=!1)}))},getRoutineInfo:function(){var t=this,e=localStorage.getItem("acuser"),n=setInterval((function(){t.user&&void 0==t.allexams&&e?t.getClasses():clearInterval(n)}),2e3);e||this.getClasses()},getClasses:function(){var t=this;fetch("https://script.google.com/macros/s/AKfycbwUTXAm1FHw4j_OiQmoCkVduDbWo6Ewkfcp6sWbfQ07PXtia_ryexQnK8N0H_EoVyE7/exec").then((function(t){return t.json()})).then((function(e){t.allexams=e.exams.map((function(e){return{id:e.id.toString(),topic:e.topic,question:e.question,start:new Date(e.end).getTime(),solve_sheet:e.solve_sheet,loading:!1,purchased:!!(t.user&&t.user.clusters.indexOf(e.cluster.replace(" ","_"))>-1),cluster:e.cluster,exam:e.question}})),t.clusters=new Set(l(e.exams.map((function(t){return t.cluster})))),t.exams=t.allexams}))},filterByCluster:function(t){this.s=t,this.exams=this.allexams.filter((function(e){return e.cluster.includes(t)}))},endalert:function(){this.$swal({icon:"warning",title:"You must purchase this cluster"})},upcomingalert:function(){this.$swal({icon:"warning",title:"Comming soon..."})},purchasealert:function(){this.$swal({icon:"warning",title:"Not Purchased",text:"You must purchase this cluster."})}},created:function(){this.getRoutineInfo()},computed:{user:function(){return this.$store.getters.getUser}}},d=f,v=n("2877"),p=Object(v["a"])(d,r,i,!1,null,"c468a244",null);e["default"]=p.exports},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),a=n("5135"),s=n("861d"),c=n("9bf2").f,u=n("e893"),l=o.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(d,l);var v=d.prototype=l.prototype;v.constructor=d;var p=v.toString,h="Symbol(test)"==String(l("test")),m=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(a(f,t))return"";var n=h?e.slice(7,-1):e.replace(m,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},f183:function(t,e,n){var r=n("23e7"),i=n("d012"),o=n("861d"),a=n("5135"),s=n("9bf2").f,c=n("241c"),u=n("057f"),l=n("90e3"),f=n("bb2f"),d=!1,v=l("meta"),p=0,h=Object.isExtensible||function(){return!0},m=function(t){s(t,v,{value:{objectID:"O"+p++,weakData:{}}})},g=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,v)){if(!h(t))return"F";if(!e)return"E";m(t)}return t[v].objectID},b=function(t,e){if(!a(t,v)){if(!h(t))return!0;if(!e)return!1;m(t)}return t[v].weakData},y=function(t){return f&&d&&h(t)&&!a(t,v)&&m(t),t},x=function(){w.enable=function(){},d=!0;var t=c.f,e=[].splice,n={};n[v]=1,t(n).length&&(c.f=function(n){for(var r=t(n),i=0,o=r.length;i<o;i++)if(r[i]===v){e.call(r,i,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:u.f}))},w=t.exports={enable:x,fastKey:g,getWeakData:b,onFreeze:y};i[v]=!0},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("861d"),o=n("e8b5"),a=n("23cb"),s=n("50c4"),c=n("fc6a"),u=n("8418"),l=n("b622"),f=n("1dde"),d=f("slice"),v=l("species"),p=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var n,r,l,f=c(this),d=s(f.length),m=a(t,d),g=a(void 0===e?d:e,d);if(o(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?i(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(f,m,g);for(r=new(void 0===n?Array:n)(h(g-m,0)),l=0;m<g;m++,l++)m in f&&u(r,l,f[m]);return r.length=l,r}})}}]);
//# sourceMappingURL=chunk-6a3c847b.a27cf1a7.js.map