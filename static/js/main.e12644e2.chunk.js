(this["webpackJsonpyalantis-school"]=this["webpackJsonpyalantis-school"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),s=n.n(c),a=n(30),i=n.n(a),o=(n(38),n(39),n(18)),u=n(2),l=n(9),j=n.n(l),b=n(13),d=n(10),h=(n(41),n(31)),f=n.n(h);function p(){return m.apply(this,arguments)}function m(){return(m=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f()("https://yalantis-react-school-api.yalantis.com/api/task0/users");case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var O=n(15),v=(n(59),function(e){var t=e.setActiveUsers,n=e.users,c=void 0===n?[]:n,a=e.activeUsers,i=s.a.useState([]),o=Object(d.a)(i,1)[0];return c.forEach((function(e){o[e.id]=1===a.filter((function(t){return t.id===e.id})).length})),0===c.length?Object(r.jsx)("div",{children:"---"}):Object(r.jsx)("div",{className:"user-list__list",children:c.map((function(e){return Object(r.jsxs)("div",{className:"user-list__item",children:[e.lastName," ",e.firstName,Object(r.jsx)("input",{type:"checkbox",onChange:function(){t(e.id),o[e.id]=!o[e.id]},checked:o[e.id],id:e.id})]},e.id)}))})});var x=function(e){var t=e.usersByAlpha,n=e.activeUsers,c=e.setActiveUsers,s=e.rawData,a=function(e){n.find((function(t){return t.id===e}))?c(n.filter((function(t){return t.id!==e}))):c([].concat(Object(O.a)(n),[s.find((function(t){return t.id===e}))]))};return Object(r.jsx)("div",{className:"column_user_list",children:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].map((function(e,c){return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"letter",children:e}),Object(r.jsx)(v,{users:t[c],activeUsers:n,setActiveUsers:a})]},"letter_index".concat(c))}))})},y=(n(60),["January","February","March","April","May","June","July","August","September","October","November","December"]);function N(e){return e.sort((function(e,t){var n=e.lastName.toLowerCase(),r=t.lastName.toLowerCase();return n<r?-1:n>r?1:0})),e}function g(e,t,n){["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].forEach((function(n,r){t[r]=N(e.filter((function(e){return e.lastName.toUpperCase().startsWith(n)})))})),n(Object(O.a)(t))}function w(e){return"".concat(e.lastName," ").concat(e.firstName," - \n    ").concat(new Date(e.dob).getDate()," \n    ").concat(y[new Date(e.dob).getMonth()]," \n    ").concat(new Date(e.dob).getFullYear()," year")}var S=function(e){var t=e.users,n=void 0===t?[]:t;localStorage.setItem("users",JSON.stringify(n));var c=["January","February","March","April","May","June","July","August","September","October","November","December"],s=function(e){e=N(e);var t=[];return y.forEach((function(n,r){t[r]=e.filter((function(e){return new Date(e.dob).getMonth()===r}))})),t}(n);return 0===n.length?Object(r.jsx)("div",{children:"No selected employees"}):Object(r.jsxs)("div",{className:"user-list-by-month__list vLine",children:[Object(r.jsx)("hr",{}),c.map((function(e,t){return s[t].length>0&&Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:e}),Object(r.jsx)("ul",{children:s[t].map((function(e){return Object(r.jsx)("li",{className:"user-list-by-month__item",children:w(e)},e.id)}))})]},e)}))]})},A=function(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("users")||"[]")),t=Object(d.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),i=Object(d.a)(a,2),o=i[0],u=i[1],l=Object(c.useState)([]),h=Object(d.a)(l,2),f=h[0],m=h[1];return Object(c.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,n=t.data,m(r=void 0===n?[]:n),g(r,o,u);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsxs)("section",{className:"main",children:[Object(r.jsxs)("div",{className:"alphabet",children:[Object(r.jsx)("p",{children:"Employees"}),Object(r.jsx)(x,{usersByAlpha:o,activeUsers:n,setActiveUsers:s,rawData:f})]}),Object(r.jsxs)("div",{className:"user-list-by--month",children:[Object(r.jsx)("p",{children:"Employees birthday"}),Object(r.jsx)(S,{users:n})]})]})},J=function(){return Object(r.jsxs)("h3",{children:["Let's go to ",Object(r.jsx)(o.b,{to:"/employees",children:"Emploees"})]})},D=function(){return Object(r.jsxs)(o.a,{children:[Object(r.jsx)(u.a,{exact:!0,path:"/",component:J}),Object(r.jsx)(u.a,{exact:!0,path:"/employees",component:A})]})};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(D,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.e12644e2.chunk.js.map