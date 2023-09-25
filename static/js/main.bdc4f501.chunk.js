(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n,s=c(7),a=c.n(s),r=c(6),l=c(15),i=c(5),o=c(13),d=c(14),u=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(4);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(n||(n={}));var m=function(e){return{type:"filter/SET_STATUS",payload:e}},f=function(e){return{type:"filter/SET_QUERY",payload:e}},O={status:n.All,query:""},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});case"filter/SET_QUERY":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});default:return e}},p=function(e){return{type:"todos/SET",payload:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?t.payload:e},y=Object(i.combineReducers)({currentTodo:h,filter:x,todos:v}),N=Object(i.createStore)(y,Object(o.composeWithDevTools)(Object(i.applyMiddleware)(d.a))),g=c(0),T=(c(23),c(24),c(11)),S=c.n(T),E=r.b,w=r.c,k=c(1),C=function(){var e=E(),t=w((function(e){return e.todos})),c=w((function(e){return e.currentTodo})),s=w((function(e){return e.filter})),a=s.status,r=s.query,l=Object(g.useMemo)((function(){return function(e,t,c){var s=function(e){return e.toLowerCase().includes(c.toLowerCase())};switch(t){case n.Active:return e.filter((function(e){return!e.completed&&s(e.title)}));case n.Completed:return e.filter((function(e){return e.completed&&s(e.title)}));default:return e.filter((function(e){return s(e.title)}))}}(t,a,r)}),[t,a,r]);return Object(k.jsx)(k.Fragment,{children:0===l.length?Object(k.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}):Object(k.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"#"}),Object(k.jsx)("th",{children:Object(k.jsx)("span",{className:"icon",children:Object(k.jsx)("i",{className:"fas fa-check"})})}),Object(k.jsx)("th",{children:"Title"}),Object(k.jsx)("th",{children:" "})]})}),t.length>0&&Object(k.jsx)("tbody",{children:l.map((function(t){return Object(k.jsxs)("tr",{"data-cy":"todo",children:[Object(k.jsx)("td",{className:"is-vcentered",children:t.id}),Object(k.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(k.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(k.jsx)("i",{className:"fas fa-check"})})}),Object(k.jsx)("td",{className:"is-vcentered is-expanded",children:Object(k.jsx)("p",{className:S()({"has-text-danger":!t.completed,"has-text-success":t.completed}),children:t.title})}),Object(k.jsx)("td",{className:"has-text-right is-vcentered",children:Object(k.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return e(u(t))},children:Object(k.jsx)("span",{className:"icon",children:Object(k.jsx)("i",{className:S()("far",{"fa-eye":(null===c||void 0===c?void 0:c.id)!==t.id,"fa-eye-slash":(null===c||void 0===c?void 0:c.id)===t.id})})})})})]},t.id)}))})]})})},A=function(){var e=E(),t=w((function(e){return e.filter})),c=t.status,s=t.query,a=function(t){return e(f(t))};return Object(k.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(k.jsx)("p",{className:"control",children:Object(k.jsx)("span",{className:"select",children:Object(k.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(t){return c=t.target.value,e(m(c));var c},children:[Object(k.jsx)("option",{value:n.All,children:"All"}),Object(k.jsx)("option",{value:n.Active,children:"Active"}),Object(k.jsx)("option",{value:n.Completed,children:"Completed"})]})})}),Object(k.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(k.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return a(e.target.value)}}),Object(k.jsx)("span",{className:"icon is-left",children:Object(k.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(k.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(k.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},_=c(3),R=(c(26),function(){return Object(k.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(k.jsx)("div",{className:"Loader__content"})})});function q(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var I=function(){var e=Object(g.useState)(null),t=Object(_.a)(e,2),c=t[0],n=t[1],s=E(),a=w((function(e){return e.currentTodo}));return Object(g.useEffect)((function(){var e;null!==a&&void 0!==a&&a.userId&&(e=a.userId,q("/users/".concat(e))).then(n)}),[]),Object(k.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(k.jsx)("div",{className:"modal-background"}),c?Object(k.jsxs)("div",{className:"modal-card",children:[Object(k.jsxs)("header",{className:"modal-card-head",children:[Object(k.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===a||void 0===a?void 0:a.id)}),Object(k.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return s(j())}})]}),Object(k.jsxs)("div",{className:"modal-card-body",children:[Object(k.jsx)("p",{className:"block","data-cy":"modal-title",children:null===a||void 0===a?void 0:a.title}),Object(k.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==a&&void 0!==a&&a.completed?Object(k.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(k.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(k.jsx)("a",{href:"mailto:Sincere@april.biz",children:c.name})]})]})]}):Object(k.jsx)(R,{})]})},L=function(){var e=E(),t=w((function(e){return e.currentTodo})),c=w((function(e){return e.todos})),n=function(t){return e(p(t))};return Object(g.useEffect)((function(){q("/todos").then(n)}),[]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"section",children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"box",children:[Object(k.jsx)("h1",{className:"title",children:"Todos:"}),Object(k.jsx)("div",{className:"block",children:Object(k.jsx)(A,{})}),Object(k.jsx)("div",{className:"block",children:c.length?Object(k.jsx)(C,{}):Object(k.jsx)(R,{})})]})})}),t&&Object(k.jsx)(I,{})]})},M=function(){return Object(k.jsx)(r.a,{store:N,children:Object(k.jsx)(l.a,{children:Object(k.jsx)(L,{})})})};a.a.render(Object(k.jsx)(M,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.bdc4f501.chunk.js.map