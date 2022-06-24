"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[1639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u8ba2\u9605 Device \u53d8\u66f4\uff08ws\uff09",description:"Device subscription(WebSocket)"},i=void 0,p={unversionedId:"api/appendix/websocket",id:"api/appendix/websocket",title:"\u8ba2\u9605 Device \u53d8\u66f4\uff08ws\uff09",description:"Device subscription(WebSocket)",source:"@site/docs/api/appendix/websocket.md",sourceDirName:"api/appendix",slug:"/api/appendix/websocket",permalink:"/api/appendix/websocket",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/appendix/websocket.md",tags:[],version:"current",lastUpdatedAt:1655360791,formattedLastUpdatedAt:"2022/6/16",frontMatter:{title:"\u8ba2\u9605 Device \u53d8\u66f4\uff08ws\uff09",description:"Device subscription(WebSocket)"},sidebar:"tutorialSidebar",previous:{title:"\u6837\u4f8b",permalink:"/api/appendix/plantuml/example"},next:{title:"\u57fa\u4e8etKeel\u6784\u5efa\u6069\u83f2\u5de5\u7a0b\u7269\u8054\u7f51\u5e73\u53f0\u89e3\u51b3\u65b9\u6848",permalink:"/base"}},o={},c=[{value:"\u65f6\u5e8f\u56fe",id:"sequence",level:2},{value:"Request",id:"request",level:2},{value:"Request Body",id:"request-body",level:3},{value:"v1WebsocketObject",id:"v1websocketobject",level:4},{value:"Response",id:"response",level:2},{value:"Response  200",id:"response--200",level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8c03\u7528\u8be5\u63a5\u53e3\u901a\u8fc7 websocket \u63a5\u6536 device \u53d8\u66f4\u3002"),(0,a.kt)("h2",{id:"sequence"},"\u65f6\u5e8f\u56fe"),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/png/AqWiAibCpYn8p2jHK2fFJL98piyhpiz9LL98B8QnkGgG5INd5wNg9XNbPwSMAIc0LMMZA039AoX0P81ChiIS4eMdktSzNzqT7lnY_xndVKkveEOgwDe1DIjOARnOl_tPnYQ51FqoG_touWGkeA0kI0wgp0gg7wexDQSuLU5f_yIN3OqlrYrwEQFroVw5pnhNOvWAKQAGK6OON9fKd5oKML2IcP_ddvILcboIe12Jf-3fel1oJiEBPK1ZzZtVk-x9ZbqmBiZKvxDQ4e0IJvUq9tYwW9ra1_4RqBrW1GemQQ1DCvxDtW9rsBvLp_lMm-n6Km7MhulkG7H56Bx7hYurBmK0",alt:null}),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"websocket /v1/ws\n")),(0,a.kt)("h3",{id:"request-body"},"Request Body"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"subscription object"),(0,a.kt)("td",{parentName:"tr",align:null},"Object"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#v1WebsocketObject"},"v1SubscriptionObject"))))),(0,a.kt)("h4",{id:"v1websocketobject"},"v1WebsocketObject"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"device id")))),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("h3",{id:"response--200"},"Response  200"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code2"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"200"),(0,a.kt)("td",{parentName:"tr",align:null},"OK"),(0,a.kt)("td",{parentName:"tr",align:null},"Object"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#"},"\u8bbe\u5907\u5b9e\u4f53"))))))}u.isMDXComponent=!0}}]);