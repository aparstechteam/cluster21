(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8344dae"],{"159b":function(t,e,n){var o=n("da84"),s=n("fdbc"),r=n("17c2"),i=n("9112");for(var a in s){var c=o[a],u=c&&c.prototype;if(u&&u.forEach!==r)try{i(u,"forEach",r)}catch(d){u.forEach=r}}},"17c2":function(t,e,n){"use strict";var o=n("b727").forEach,s=n("a640"),r=s("forEach");t.exports=r?[].forEach:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}},3589:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.unknown||t.loading||t.retake?t._e():n("div",{staticClass:"pb-5 bg-gray-50 md:w-2/3 mx-auto rounded"},[n("div",{staticClass:"text-center pt-3"},[t.result[1]?n("h2",{staticClass:"ma-auto my-4 text-2xl font-bold"},[t._v(" You Scored: "+t._s(t.result[1])+" ")]):t._e(),n("div",{staticClass:"text-center mb-n5"},[this.ended<Date.now()?n("button",{staticClass:"mx-auto primary_btn my-2",on:{click:function(e){t.solutionv=!t.solutionv}}},[t._v(" "+t._s((t.solutionv?"Hide":"View")+" Solution")+" ")]):n("button",{staticClass:"mx-auto my-2 primary_btn",attrs:{text:"View Solution"},on:{click:t.endalert}})]),t.solutionv?n("iframe",{staticClass:"my-1",attrs:{src:"https://drive.google.com/file/d/"+t.solutionpdf.substr(32,33)+"/preview",height:"700",width:"100%"}}):t._e()]),!t.retake&&t.solution.length>0?n("div",{staticClass:"my-5 text-center"},[n("router-link",{staticClass:"mx-auto my-2 primary_btn",attrs:{link:"/ranking/"+this.$route.params.id,text:"View Your Rank"}})],1):t._e(),!t.retake&&t.solution.length>0?n("div",{staticClass:"text-center"},[n("button",{staticClass:"primary_btn mx-auto",domProps:{textContent:t._s("Test Yourself Again")},on:{click:t.startRetake}})]):t._e(),!t.retake&&t.solution.length>0?n("div",{staticClass:"text-center font-semibold my-4"},[t._v(" Retake exam score will not be recorded ")]):t._e()]),t.retake?n("div",{staticClass:"pb-10"},[n("div",{staticClass:"py-4 text-center"},[n("h1",{staticClass:"text-white text-2xl font-bold"},[t._v(" Exam - "+t._s(this.$route.params.id)+" ")])]),n("div",{staticClass:"md:w-2/3 md:mx-auto mx-2"},[t._l(t.solution,(function(e,o){return n("div",{key:o,staticClass:"bg-white mx-auto p-5 my-3 rounded-md"},[n("p",{domProps:{innerHTML:t._s(e.question)}}),n("div",{staticClass:"mt-3"},[e.a?n("div",{class:"my-3 p-3 rounded  "+(e.a==e.selected?"border-2 border-green-500 bg-green-300":"bg-gray-200"),domProps:{innerHTML:t._s(e.a)},on:{click:function(n){t.solution[o].selected=e.a}}}):t._e(),e.b?n("div",{class:"my-3 p-3 rounded  "+(e.b==e.selected?"border-2 border-green-500 bg-green-300":"bg-gray-200"),domProps:{innerHTML:t._s(e.b)},on:{click:function(n){t.solution[o].selected=e.b}}}):t._e(),e.c?n("div",{class:"my-3 p-3 rounded  "+(e.c==e.selected?"border-2 border-green-500 bg-green-300":"bg-gray-200"),domProps:{innerHTML:t._s(e.c)},on:{click:function(n){t.solution[o].selected=e.c}}}):t._e(),e.d?n("div",{class:"my-3 p-3 rounded  "+(e.d==e.selected?"border-2 border-green-500 bg-green-300":"bg-gray-200"),domProps:{innerHTML:t._s(e.d)},on:{click:function(n){t.solution[o].selected=e.d}}}):t._e()])])})),n("div",{staticClass:"text-center"},[n("button",{staticClass:"\n            rounded\n            py-3\n            px-4\n            shadow\n            hover:shadow-lg\n            bg-gradient-to-t\n            from-green-500\n            to-green-400\n            mx-auto\n            font-semibold\n            text-white\n            outline-none\n          ",on:{click:t.retakeResult}},[t._v(" Submit ")])])],2)]):t._e(),t.questions.length>0?n("div",{staticClass:"pb-10"},[n("div",{staticClass:"py-4 text-center"},[n("h1",{staticClass:"text-white text-2xl font-bold"},[t._v(" Exam - "+t._s(this.$route.params.id)+" ")])]),n("div",{staticClass:"md:w-2/3 md:mx-auto mx-2"},[t._l(t.questions,(function(e,o){return n("div",{key:o,staticClass:"bg-white mx-auto p-5 my-3 rounded-md bg-opacity-40"},[n("p",{staticClass:"text-lg kalpurush font-semibold mb-2",domProps:{innerHTML:t._s(e.question)}}),n("div",{staticClass:"mt-3"},[e.a?n("div",{class:"my-3 p-3 rounded  "+(e.a==e.selected?"border-2 border-green-500 bg-green-300":"bg-gray-50"),domProps:{innerHTML:t._s(e.a)},on:{click:function(n){t.questions[o].selected=e.a}}}):t._e(),e.b?n("div",{class:"my-3 p-3 rounded  "+(e.b==e.selected?"border-2 border-green-500 bg-green-300":"bg-gray-50"),domProps:{innerHTML:t._s(e.b)},on:{click:function(n){t.questions[o].selected=e.b}}}):t._e(),e.c?n("div",{class:"my-3 p-3 rounded  "+(e.c==e.selected?"border-2 border-green-500 bg-green-300":"bg-gray-50"),domProps:{innerHTML:t._s(e.c)},on:{click:function(n){t.questions[o].selected=e.c}}}):t._e(),e.d?n("div",{class:"my-3 p-3 rounded  "+(e.d==e.selected?"border-2 border-green-500 bg-green-300":"bg-gray-50"),domProps:{innerHTML:t._s(e.d)},on:{click:function(n){t.questions[o].selected=e.d}}}):t._e()])])})),n("div",{staticClass:"text-center"},[n("button",{staticClass:"\n            rounded\n            py-3\n            px-4\n            shadow\n            hover:shadow-lg\n            bg-gradient-to-t\n            from-green-500\n            to-green-400\n            mx-auto\n            font-semibold\n            text-white\n            outline-none\n          ",attrs:{disabled:t.eload},on:{click:t.submitAns}},[t._v(" "+t._s(t.eload?"Loading...":"Submit")+" ")])])],2)]):t._e(),t.loading?n("div",{staticClass:"text-center my-10"},[n("loader")],1):t._e(),t.show?n("div",{staticClass:"white--text fixed__timer"},[n("div",{staticClass:"bg-green-500 border border-white text-white"},[t._v(" "+t._s(t.minute)+" : "+t._s(t.second)+" ")])]):t._e()])},s=[],r=n("5530"),i=(n("d3b7"),n("d81d"),n("ac1f"),n("5319"),{data:function(){return{timing:null,solutionv:!1,retake:!1,questions:[],solution:[],result:[],unknown:!1,loading:!0,eload:!1,minute:0,second:0,end:Date.now()+12e6,show:!1,url:"",solutionpdf:"",starttime:Date.now(),ended:null,inttime:109090}},methods:{endalert:function(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink:function(){var t=this;fetch("https://script.google.com/macros/s/AKfycbwUTXAm1FHw4j_OiQmoCkVduDbWo6Ewkfcp6sWbfQ07PXtia_ryexQnK8N0H_EoVyE7/exec?id=".concat(this.$route.params.id)).then((function(t){return t.json()})).then((function(e){t.url=e.exam.question,t.inttime=6e4*e.exam.time,t.end=6e4*e.exam.time,t.solutionpdf=e.exam.solve_sheet;var n=localStorage.getItem("acuser");fetch(t.url+"?type=check&&phone="+n).then((function(t){return t.json()})).then((function(e){"exists"==e.message?(t.result=e.result?e.result:"",fetch(t.url+"?type=question").then((function(t){return t.json()})).then((function(e){t.solution=e})),t.loading=!1):(t.unknown=!0,fetch(t.url+"?type=question").then((function(t){return t.json()})).then((function(e){t.questions=e.map((function(t){return Object(r["a"])(Object(r["a"])({},t),{},{selected:""})})),t.loading=!1,t.showRemaining(t.end+Date.now()),t.autoSubmit(t.end+Date.now())})))}))}))},startRetake:function(){this.retake=!0,this.showRemaining(Date.now()+6e4*this.end)},retakeResult:function(){var t=this,e=this.solution.reduce((function(t,e){return e.correct==e.selected&&(t+=10),t}),0);this.$swal({icon:"success",title:"Success",text:"You Scored ".concat(e)}).then((function(){t.retake=!1}))},submitAns:function(){var t=this;this.eload=!0;var e=this.questions.reduce((function(t,e){return e.correct==e.selected&&(t+=10),t}),0),n=localStorage.getItem("exam".concat(this.$route.params.id));if(n)this.$router.replace("/ranking/"+this.$route.params.id);else{var o=localStorage.getItem("acuser");fetch(this.url,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify(Object(r["a"])(Object(r["a"])({type:"mcq",cluster:!0},this.user),{},{mcq:[o,e,Date.now()-this.starttime]}))}).then((function(){localStorage.setItem("exam".concat(t.$route.params.id),"submited"),clearTimeout(t.timing),t.eload=!1,t.$swal({icon:"success",title:"Success",text:"You Scored ".concat(e)}).then((function(){t.$router.replace("/ranking/"+t.$route.params.id)}))}))}},autoSubmit:function(t){var e=this;this.timing=setTimeout((function(){e.show=!1,e.submitAns()}),t)},showRemaining:function(t){var e=this;this.show=!0;var n=setInterval((function(){var o=t-Date.now();if(o<0)clearInterval(n);else{var s=Math.floor(o/e._days),r=Math.floor(o%e._days/e._hours),i=Math.floor(o%e._hours/e._minutes),a=Math.floor(o%e._minutes/e._seconds);e.second=a<10?"0"+a:a,e.minute=i<10?"0"+i:i,e.hours=r<10?"0"+r:r,e.days=s<10?"0"+s:s}}),1e3)}},created:function(){this.getQuestionLink()},computed:{_seconds:function(){return 1e3},_minutes:function(){return 60*this._seconds},_hours:function(){return 60*this._minutes},_days:function(){return 24*this._hours},user:function(){return this.$store.getters.getUser}}}),a=i,c=(n("3a75"),n("2877")),u=Object(c["a"])(a,o,s,!1,null,"056b10e4",null);e["default"]=u.exports},"3a75":function(t,e,n){"use strict";n("ba7c")},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},a640:function(t,e,n){"use strict";var o=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&o((function(){n.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,n){var o=n("23e7"),s=n("7b0b"),r=n("df75"),i=n("d039"),a=i((function(){r(1)}));o({target:"Object",stat:!0,forced:a},{keys:function(t){return r(s(t))}})},ba7c:function(t,e,n){},dbb4:function(t,e,n){var o=n("23e7"),s=n("83ab"),r=n("56ef"),i=n("fc6a"),a=n("06cf"),c=n("8418");o({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(t){var e,n,o=i(t),s=a.f,u=r(o),d={},l=0;while(u.length>l)n=s(o,e=u[l++]),void 0!==n&&c(d,e,n);return d}})},e439:function(t,e,n){var o=n("23e7"),s=n("d039"),r=n("fc6a"),i=n("06cf").f,a=n("83ab"),c=s((function(){i(1)})),u=!a||c;o({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return i(r(t),e)}})}}]);
//# sourceMappingURL=chunk-d8344dae.7867a6b0.js.map