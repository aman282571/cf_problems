(this.webpackJsonpcf=this.webpackJsonpcf||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(10),s=n.n(i),o=(n(16),n(2)),a=n(3),l=n(8),j=n(4),u=(n(17),n(0));var d=function(e){return Object(u.jsx)("div",{id:"loader",children:Object(u.jsxs)("div",{id:"box",children:[Object(u.jsxs)("div",{id:"l",children:[Object(u.jsx)("p",{children:"L"}),Object(u.jsx)("div",{})]}),Object(u.jsxs)("div",{id:"o",children:[Object(u.jsx)("p",{children:"O"}),Object(u.jsx)("div",{})]}),Object(u.jsxs)("div",{id:"a",children:[Object(u.jsx)("p",{children:"A"}),Object(u.jsx)("div",{})]}),Object(u.jsxs)("div",{id:"d",children:[Object(u.jsx)("p",{children:"D"}),Object(u.jsx)("div",{})]}),Object(u.jsxs)("div",{id:"i",children:[Object(u.jsx)("p",{children:"I"}),Object(u.jsx)("div",{})]}),Object(u.jsxs)("div",{id:"n",children:[Object(u.jsx)("p",{children:"N"}),Object(u.jsx)("div",{})]}),Object(u.jsxs)("div",{id:"g",children:[Object(u.jsx)("p",{children:"G"}),Object(u.jsx)("div",{})]})]})})},b=n(11);var O=function(e){var t=Object(r.useState)(""),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)(1),l=Object(o.a)(s,2),j=l[0],d=l[1],O=Object(r.useState)(!0),h=Object(o.a)(O,2),f=h[0],x=h[1],g=Object(r.useState)(!0),p=Object(o.a)(g,2),m=p[0],v=p[1],S=Object(r.useState)([]),C=Object(o.a)(S,2),N=C[0],w=C[1],T=Object(r.useState)(""),M=Object(o.a)(T,2),k=M[0],y=M[1],L=Object(r.useState)(""),I=Object(o.a)(L,2),E=I[0],P=I[1],F=Object(r.useState)([]),U=Object(o.a)(F,2),B=U[0],D=U[1];return Object(r.useEffect)((function(){var t=e.problems;t=t.filter((function(e){for(var t=!0,n=0;n<N.length;n++)if(!1===(t=-1===e.tags.indexOf(N[n])?t&&!1:t&&!0))return!1;return t})),""!==E&&(t=t.filter((function(e){return e.problemStatus===E}))),(t=t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(c.toLowerCase().trim())}))).sort((function(e,t){return e.rating!==t.rating?e.rating-t.rating:e.serialNumber-t.serialNumber})),d(1),D((function(e){return Object(a.a)(t)}))}),[N,E,c]),Object(u.jsxs)("div",{id:"container",children:[Object(u.jsx)("h1",{children:"Codeforces Problems"}),Object(u.jsxs)("h2",{children:["User: ",e.user]}),Object(u.jsxs)("ul",{className:"dropdown",children:[Object(u.jsx)("li",{className:"searchProblem",children:Object(u.jsx)("input",{type:"text",id:"searchProblem",placeholder:"Find problem",onChange:function(e){return i(e.target.value)}})}),Object(u.jsx)("li",{className:"status",children:Object(u.jsxs)("select",{onChange:function(e){return P((function(t){return e.target.value}))},children:[Object(u.jsx)("option",{value:"",children:"All"}),Object(u.jsx)("option",{value:"Todo",children:"Todo"}),Object(u.jsx)("option",{value:"Tried",children:"Tried"}),Object(u.jsx)("option",{value:"Solved",children:"Solved"})]})}),Object(u.jsxs)("li",{className:"tags",children:["Tags",Object(u.jsxs)("ul",{id:"dropbox",className:"filterTags",children:[Object(u.jsx)("li",{children:Object(u.jsx)("input",{type:"text",id:"filterTags",onChange:function(e){return y(e.target.value)}})}),e.tags.filter((function(e){return-1!==e.toLowerCase().indexOf(k.toLowerCase())})).map((function(e,t){return Object(u.jsx)("li",{onClick:function(e){w((function(t){return-1===t.indexOf(e.target.innerText.trim().toLowerCase())?[].concat(Object(a.a)(t),[e.target.innerText.trim().toLowerCase()]):t}))},children:e},t)}))]})]})]}),Object(u.jsxs)("div",{className:"Showtags",children:[" ",N.map((function(e,t){return Object(u.jsxs)("p",{id:"tags",children:[e,Object(u.jsx)(b.a,{className:"icon",onClick:function(e){return function(e){var t=Object(a.a)(N);t.splice(N.indexOf(e.currentTarget.parentElement.innerText.trim().toLowerCase()),1),w((function(e){return t}))}(e)}})," "]},t)}))," "]}),Object(u.jsxs)("p",{id:"results",children:[B.length," results"]}),Object(u.jsxs)("div",{className:"table-container",children:[Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"Serial",children:"#"}),Object(u.jsx)("th",{className:"Problem",children:"Problem"}),Object(u.jsx)("th",{className:"Status",children:"Status"}),Object(u.jsx)("th",{className:"Rating",onClick:function(){if(x((function(e){return!e})),f){var e=Object(a.a)(B);e.sort((function(e,t){return e.rating!==t.rating?t.rating-e.rating:e.serialNumber-t.serialNumber})),D((function(t){return Object(a.a)(e)}))}else{var t=Object(a.a)(B);t.sort((function(e,t){return e.rating!==t.rating?e.rating-t.rating:e.serialNumber-t.serialNumber})),D((function(e){return Object(a.a)(t)}))}},children:"Rating"}),Object(u.jsx)("th",{className:"Solvedcnt",onClick:function(){if(v((function(e){return!e})),m){var e=Object(a.a)(B);e.sort((function(e,t){return e.solvedCount!==t.solvedCount?e.solvedCount-t.solvedCount:e.serialNumber-t.serialNumber})),D((function(t){return Object(a.a)(e)}))}else{var t=Object(a.a)(B);t.sort((function(e,t){return e.solvedCount!==t.solvedCount?t.solvedCount-e.solvedCount:e.serialNumber-t.serialNumber})),D((function(e){return Object(a.a)(t)}))}},children:"Solved Count"})]})}),Object(u.jsx)("tbody",{children:B.slice(50*(j-1),50*j).map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{id:"number",children:e.serialNumber}),Object(u.jsx)("td",{children:Object(u.jsx)("a",{target:"_blank",href:"https://codeforces.com/problemset/problem/".concat(e.contestId,"/").concat(e.index),children:e.name})}),Object(u.jsx)("td",{id:"status",children:e.problemStatus}),Object(u.jsx)("td",{id:"rating",children:e.rating}),Object(u.jsx)("td",{id:"count",children:e.solvedCount})]},t)}))})]}),0===B.length?Object(u.jsx)("p",{id:"notFound",children:"No matching problem"}):""]}),Object(u.jsx)("div",{id:"pages",children:function(){var e=[];if(j>1&&e.push(Object(u.jsx)("span",{id:"diffrent",onClick:function(){return d((function(e){return e-1}))},children:"Prev."})),Math.floor(B.length/50)>1)for(var t=function(t){t===j?e.push(Object(u.jsx)("p",{id:"highlight",onClick:function(){return d(t)},children:t})):e.push(Object(u.jsx)("p",{id:"normal",onClick:function(){return d(t)},children:t}))},n=j;n<j+5&&n<=Math.floor(B.length/50)+1;n++)t(n);return j<Math.floor(B.length/50)+1&&e.push(Object(u.jsx)("span",{id:"diffrent",onClick:function(){return d((function(e){return e+1}))},children:"Next"})),e}()})]})};var h=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:e.error})})};n(9);var f=function(e){var t=Object(r.useState)({loadingState:!0,errorState:!1,errorMsg:null}),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)([]),b=Object(o.a)(s,2),f=b[0],x=b[1],g=Object(r.useState)([]),p=Object(o.a)(g,2),m=p[0],v=p[1];return Object(r.useEffect)((function(){fetch("https://codeforces.com/api/problemset.problems").then((function(e){return e.json()})).then((function(t){if("OK"===t.status){var n=new Map,r=new Map;t.result.problems.forEach((function(e,c){n.set("".concat(e.contestId).concat(e.index),Object(j.a)(Object(j.a)(Object(j.a)({},e),t.result.problemStatistics[c]),{},{problemStatus:"Todo"})),e.tags.forEach((function(e){r.has(e)||r.set(e,1)}))})),fetch("https://codeforces.com/api/user.status?handle=".concat(e.User)).then((function(e){return e.json()})).then((function(e){if("OK"===e.status){e.result.forEach((function(t){if(n.has("".concat(t.problem.contestId).concat(t.problem.index)))if("undefined"!==typeof t.verdict){if("OK"===t.verdict){var r=n.get("".concat(t.problem.contestId).concat(t.problem.index));r.problemStatus="Solved",n.set("".concat(t.problem.contestId).concat(t.problem.index),r)}}else{var c=n.get("".concat(t.problem.contestId).concat(e.problem.index));"Solved"!==c.problemStatus&&(c.problemStatus="Tried"),n.set("".concat(t.problem.contestId).concat(t.problem.index),c)}}));var t,c=[],s=Object(l.a)(n);try{for(s.s();!(t=s.n()).done;){var u=Object(o.a)(t.value,2),d=(u[0],u[1]);c.push(d)}}catch(S){s.e(S)}finally{s.f()}for(var b=1;b<=c.length;b++)"undefined"===typeof c[b-1].rating&&(c[b-1].rating=1e4);c.sort((function(e,t){return e.rating-t.rating}));for(var O=1;O<=c.length;O++)c[O-1].serialNumber=O;var h,f=[],g=Object(l.a)(r);try{for(g.s();!(h=g.n()).done;){var p=Object(o.a)(h.value,2),m=p[0];p[1];f.push(m)}}catch(S){g.e(S)}finally{g.f()}x((function(e){return[].concat(Object(a.a)(e),c)})),v((function(e){return[].concat(Object(a.a)(e),f)})),i((function(e){return Object(j.a)(Object(j.a)({},e),{},{loadingState:!1,errorState:!1,errorMsg:null})}))}else i((function(e){return Object(j.a)(Object(j.a)({},e),{},{loadingState:!1,errorState:!0,errorMsg:"User Not found"})}))})).catch((function(e){i((function(e){return Object(j.a)(Object(j.a)({},e),{},{loadingState:!1,errorState:!0,errorMsg:"Something went wrong"})}))}))}else i((function(e){return Object(j.a)(Object(j.a)({},e),{},{loadingState:!1,errorState:!0,errorMsg:"Something went wrong"})}))})).catch((function(e){i((function(e){return Object(j.a)(Object(j.a)({},e),{},{loadingState:!1,errorState:!0,errorMsg:"Something went wrong"})}))}))}),[e.User]),Object(u.jsxs)("div",{children:[c.loadingState?Object(u.jsx)(d,{}):c.errorState?Object(u.jsx)(h,{error:c.errorMsg}):Object(u.jsx)(O,{problems:f,tags:m,user:e.User}),c.loadingState||c.errorState?"":Object(u.jsx)("p",{id:"end",children:"Built & designed with \u2764\ufe0f"})]})};var x=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(u.jsx)("div",{className:"blurlayer",children:null===n?Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(e.target.user.value)},children:[Object(u.jsx)("p",{children:"Enter Codeforces handle"}),Object(u.jsx)("input",{id:"user",placeholder:"Like- tourist"})]}):Object(u.jsx)(f,{User:n})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),g()},9:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.6de64f42.chunk.js.map