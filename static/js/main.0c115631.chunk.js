(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n,s=c(9),a=c.n(s),r=c(3),i=c(19),o=c(7),l=c(16),d=c(17),j=c(10),u=function(e){return{type:"allTodos/SET",arr:e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"allTodos/SET":return Object(j.a)(t.arr);case"allTodos/REMOVE":return[];default:return e}},h=c(5);!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(n||(n={}));var O=function(e){return{type:"set/FILTER",filter:e}},f=function(e){return{type:"set/QUERY",query:e}},m=function(e){return{type:"set/TODOS",todos:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{query:"",filter:n.ALL,todos:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set/QUERY":return Object(h.a)(Object(h.a)({},e),{},{query:t.query});case"set/FILTER":return Object(h.a)(Object(h.a)({},e),{},{filter:t.filter});case"set/TODOS":return Object(h.a)(Object(h.a)({},e),{},{todos:t.todos});default:return e}},p=function(e){return{type:"todo/ADD",arr:e}},v=function(){return{type:"todo/REMOVE"}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"todo/ADD":return t.arr;case"todo/REMOVE":return null;default:return e}},N=Object(o.combineReducers)({activeTodo:y,filter:x,todos:b}),g=Object(o.createStore)(N,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(d.a))),E=c(18),T=c(4),L=c(13),w=c.n(L),C=c(0),k=(c(28),c(29),c(14)),D=c.n(k),A=(r.b,r.c),S=c(1),I=function(){var e=A((function(e){return e.activeTodo})),t=A((function(e){return e.filter})).todos,c=Object(r.b)();return Object(S.jsxs)(S.Fragment,{children:[!t&&Object(S.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),Object(S.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"#"}),Object(S.jsx)("th",{children:Object(S.jsx)("span",{className:"icon",children:Object(S.jsx)("i",{className:"fas fa-check"})})}),Object(S.jsx)("th",{children:"Title"}),Object(S.jsx)("th",{children:" "})]})}),Object(S.jsx)("tbody",{children:t.map((function(t){return Object(S.jsxs)("tr",{"data-cy":"todo",children:[Object(S.jsx)("td",{className:"is-vcentered",children:t.id}),Object(S.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(S.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(S.jsx)("i",{className:"fas fa-check"})})}),Object(S.jsx)("td",{className:"is-vcentered is-expanded",children:Object(S.jsx)("p",{className:D()({"has-text-danger":!t.completed},{"has-text-success":t.completed}),children:t.title})}),Object(S.jsx)("td",{className:"has-text-right is-vcentered",children:Object(S.jsx)("button",{onClick:function(){return function(e){c(p(e))}(t)},"data-cy":"selectButton",className:"button",type:"button",children:Object(S.jsx)("span",{className:"icon",children:Object(S.jsx)("i",{className:D()("far",{"fa-eye":t!==e},{"fa-eye-slash":t===e})})})})})]},t.id)}))})]})]})},R=function(){var e=Object(r.b)(),t=A((function(e){return e.filter})),c=t.filter,s=t.query,a=A((function(e){return e.todos}));return Object(C.useEffect)((function(){!function(){var t=Object(j.a)(a).filter((function(e){switch(c){case n.ALL:return e.title.toLowerCase().includes(s.toLowerCase());case n.ACTIVE:return!e.completed&&e.title.toLowerCase().includes(s.toLowerCase());case n.COMPLETED:return e.completed&&e.title.toLowerCase().includes(s.toLowerCase());default:return e}}));e(m(t))}()}),[c,s,e,a]),Object(S.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(S.jsx)("p",{className:"control",children:Object(S.jsx)("span",{className:"select",children:Object(S.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(t){e(O(t.target.value))},children:[Object(S.jsx)("option",{value:n.ALL,children:"All"}),Object(S.jsx)("option",{value:n.ACTIVE,children:"Active"}),Object(S.jsx)("option",{value:n.COMPLETED,children:"Completed"})]})})}),Object(S.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(S.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(t){e(f(t.target.value))}}),Object(S.jsx)("span",{className:"icon is-left",children:Object(S.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(S.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:s&&Object(S.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"btnDelete",onClick:function(){e(f(""))}})})]})]})},M=(c(31),function(){return Object(S.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(S.jsx)("div",{className:"Loader__content"})})});function V(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var q=function(){var e=Object(r.b)(),t=A((function(e){return e.activeTodo})),c=Object(C.useState)(),n=Object(T.a)(c,2),s=n[0],a=n[1];Object(C.useEffect)((function(){var e;t&&(e=t.userId,V("/users/".concat(e))).then((function(e){return a(e)}))}),[]);return Object(S.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(S.jsx)("div",{className:"modal-background"}),!s&&Object(S.jsx)(M,{}),s&&Object(S.jsxs)("div",{className:"modal-card",children:[Object(S.jsxs)("header",{className:"modal-card-head",children:[Object(S.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(S.jsx)("button",{onClick:function(){e(v())},type:"button",className:"delete","data-cy":"modal-close"})]}),Object(S.jsxs)("div",{className:"modal-card-body",children:[Object(S.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(S.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(S.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(S.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(S.jsx)("a",{href:"mailto:".concat(s.email),children:s.name})]})]})]})]})},P=function(){var e=Object(r.b)(),t=Object(C.useState)(!1),c=Object(T.a)(t,2),n=c[0],s=c[1],a=A((function(e){return e.activeTodo})),i=function(){var t=Object(E.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.next=3,V("/todos").then((function(t){return e(u(t))}));case 3:s(!1);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(C.useEffect)((function(){i()}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"section",children:Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"box",children:[Object(S.jsx)("h1",{className:"title",children:"Todos:"}),Object(S.jsx)("div",{className:"block",children:Object(S.jsx)(R,{})}),Object(S.jsx)("div",{className:"block",children:n?Object(S.jsx)(M,{}):Object(S.jsx)(I,{})})]})})}),a&&Object(S.jsx)(q,{})]})},_=function(){return Object(S.jsx)(r.a,{store:g,children:Object(S.jsx)(i.a,{children:Object(S.jsx)(P,{})})})};a.a.render(Object(S.jsx)(_,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.0c115631.chunk.js.map