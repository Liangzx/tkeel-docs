"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[2255],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2868:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],p={title:"\u5feb\u901f\u5165\u95e8",sidebar_position:1},i=void 0,c={unversionedId:"developer_cookbook/core/getting_started",id:"developer_cookbook/core/getting_started",isDocsHomePage:!1,title:"\u5feb\u901f\u5165\u95e8",description:"- \u4ecb\u7ecd",source:"@site/docs/developer_cookbook/core/getting_started.md",sourceDirName:"developer_cookbook/core",slug:"/developer_cookbook/core/getting_started",permalink:"/docs/developer_cookbook/core/getting_started",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/getting_started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5feb\u901f\u5165\u95e8",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf10 \u5982\u4f55\u4f7f\u7528tkeel\u5e73\u53f0\u8fde\u63a5\u4f60\u7684\u8bbe\u5907",permalink:"/docs/use"},next:{title:"\u67b6\u6784",permalink:"/docs/developer_cookbook/core/introduction/architecture"}},s=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[],level:2},{value:"\u57fa\u7840\u6982\u5ff5",id:"\u57fa\u7840\u6982\u5ff5",children:[{value:"\u5b9e\u4f53\uff08Entity\uff09",id:"\u5b9e\u4f53entity",children:[],level:3},{value:"Actor",id:"actor",children:[],level:3},{value:"\u6620\u5c04",id:"\u6620\u5c04",children:[],level:3},{value:"\u5173\u7cfb",id:"\u5173\u7cfb",children:[],level:3},{value:"\u6a21\u578b",id:"\u6a21\u578b",children:[],level:3},{value:"\u8ba2\u9605",id:"\u8ba2\u9605",children:[],level:3}],level:2},{value:"\u542f\u52a8\u670d\u52a1",id:"\u542f\u52a8\u670d\u52a1",children:[{value:"Self-hosted",id:"self-hosted",children:[],level:4},{value:"Kubernetes",id:"kubernetes",children:[],level:4}],level:2},{value:"\u4f7f\u7528 core \u7684 APIs",id:"\u4f7f\u7528-core-\u7684-apis",children:[{value:"\u7b2c 1 \u6b65\uff1a \u521b\u5efa\u5b9e\u4f53",id:"\u7b2c-1-\u6b65-\u521b\u5efa\u5b9e\u4f53",children:[],level:3},{value:"\u7b2c 2 \u6b65\uff1a \u7f16\u8f91\u5b9e\u4f53",id:"\u7b2c-2-\u6b65-\u7f16\u8f91\u5b9e\u4f53",children:[],level:3},{value:"\u7b2c 3 \u6b65\uff1a \u67e5\u8be2\u5b9e\u4f53",id:"\u7b2c-3-\u6b65-\u67e5\u8be2\u5b9e\u4f53",children:[],level:3},{value:"\u7b2c 4 \u6b65\uff1a Patch \u5b9e\u4f53\u5c5e\u6027",id:"\u7b2c-4-\u6b65-patch-\u5b9e\u4f53\u5c5e\u6027",children:[],level:3},{value:"\u7b2c 5 \u6b65\uff1a \u914d\u7f6e\u5b9e\u4f53\u5c5e\u6027\u914d\u7f6e\u4fe1\u606f",id:"\u7b2c-5-\u6b65-\u914d\u7f6e\u5b9e\u4f53\u5c5e\u6027\u914d\u7f6e\u4fe1\u606f",children:[],level:3},{value:"\u7b2c 6 \u6b65\uff1a \u641c\u7d22\u5b9e\u4f53",id:"\u7b2c-6-\u6b65-\u641c\u7d22\u5b9e\u4f53",children:[],level:3},{value:"\u7b2c 7 \u6b65\uff1a \u4e3a\u5b9e\u4f53\u521b\u5efa\u6620\u5c04",id:"\u7b2c-7-\u6b65-\u4e3a\u5b9e\u4f53\u521b\u5efa\u6620\u5c04",children:[],level:3},{value:"\u7b2c 8 \u6b65\uff1a \u901a\u8fc7 pubsub \u5411\u5b9e\u4f53\u53d1\u9001\u6d88\u606f",id:"\u7b2c-8-\u6b65-\u901a\u8fc7-pubsub-\u5411\u5b9e\u4f53\u53d1\u9001\u6d88\u606f",children:[],level:3},{value:"\u7b2c 9 \u6b65\uff1a \u521b\u5efa\u8ba2\u9605\uff0c\u8ba2\u9605\u5b9e\u4f53\u6570\u636e",id:"\u7b2c-9-\u6b65-\u521b\u5efa\u8ba2\u9605\u8ba2\u9605\u5b9e\u4f53\u6570\u636e",children:[],level:3},{value:"10 \u6b65\uff1a \u5220\u9664\u8ba2\u9605",id:"10-\u6b65-\u5220\u9664\u8ba2\u9605",children:[],level:3},{value:"\u7b2c 11 \u6b65\uff1a \u5220\u9664\u6620\u5c04",id:"\u7b2c-11-\u6b65-\u5220\u9664\u6620\u5c04",children:[],level:3},{value:"\u7b2c 12 \u6b65\uff1a \u5220\u9664\u5b9e\u4f53",id:"\u7b2c-12-\u6b65-\u5220\u9664\u5b9e\u4f53",children:[],level:3}],level:2}],d={toc:s};function u(e){var t=e.components,p=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%BB%8B%E7%BB%8D"},"\u4ecb\u7ecd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5"},"\u57fa\u7840\u6982\u5ff5"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%AE%9E%E4%BD%93entity"},"\u5b9e\u4f53\uff08Entity\uff09")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#actor"},"Actor")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%98%A0%E5%B0%84"},"\u6620\u5c04")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%85%B3%E7%B3%BB"},"\u5173\u7cfb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%A8%A1%E5%9E%8B"},"\u6a21\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E8%AE%A2%E9%98%85"},"\u8ba2\u9605")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1"},"\u542f\u52a8\u670d\u52a1"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#self-hosted"},"Self-hosted")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#kubernetes"},"Kubernetes")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E4%BD%BF%E7%94%A8-core-%E7%9A%84-apis"},"\u4f7f\u7528 core \u7684 APIs"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%AC%AC-1-%E6%AD%A5-%E5%88%9B%E5%BB%BA%E5%AE%9E%E4%BD%93"},"\u7b2c 1 \u6b65\uff1a \u521b\u5efa\u5b9e\u4f53")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%AC%AC-2-%E6%AD%A5-%E7%BC%96%E8%BE%91%E5%AE%9E%E4%BD%93"},"\u7b2c 2 \u6b65\uff1a \u7f16\u8f91\u5b9e\u4f53")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%AC%AC-3-%E6%AD%A5-%E6%9F%A5%E8%AF%A2%E5%AE%9E%E4%BD%93"},"\u7b2c 3 \u6b65\uff1a \u67e5\u8be2\u5b9e\u4f53")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%AC%AC-4-%E6%AD%A5-patch-%E5%AE%9E%E4%BD%93%E5%B1%9E%E6%80%A7"},"\u7b2c 4 \u6b65\uff1a Patch \u5b9e\u4f53\u5c5e\u6027")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%AC%AC-5-%E6%AD%A5-%E9%85%8D%E7%BD%AE%E5%AE%9E%E4%BD%93%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE%E4%BF%A1%E6%81%AF"},"\u7b2c 5 \u6b65\uff1a \u914d\u7f6e\u5b9e\u4f53\u5c5e\u6027\u914d\u7f6e\u4fe1\u606f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%AC%AC-6-%E6%AD%A5-%E6%90%9C%E7%B4%A2%E5%AE%9E%E4%BD%93"},"\u7b2c 6 \u6b65\uff1a \u641c\u7d22\u5b9e\u4f53")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%AC%AC-7-%E6%AD%A5-%E4%B8%BA%E5%AE%9E%E4%BD%93%E5%88%9B%E5%BB%BA%E6%98%A0%E5%B0%84"},"\u7b2c 7 \u6b65\uff1a \u4e3a\u5b9e\u4f53\u521b\u5efa\u6620\u5c04")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%AC%AC-8-%E6%AD%A5-%E9%80%9A%E8%BF%87-pubsub-%E5%90%91%E5%AE%9E%E4%BD%93%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF"},"\u7b2c 8 \u6b65\uff1a \u901a\u8fc7 pubsub \u5411\u5b9e\u4f53\u53d1\u9001\u6d88\u606f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%AC%AC-9-%E6%AD%A5-%E5%88%9B%E5%BB%BA%E8%AE%A2%E9%98%85%E8%AE%A2%E9%98%85%E5%AE%9E%E4%BD%93%E6%95%B0%E6%8D%AE"},"\u7b2c 9 \u6b65\uff1a \u521b\u5efa\u8ba2\u9605\uff0c\u8ba2\u9605\u5b9e\u4f53\u6570\u636e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#10-%E6%AD%A5-%E5%88%A0%E9%99%A4%E8%AE%A2%E9%98%85"},"10 \u6b65\uff1a \u5220\u9664\u8ba2\u9605")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%AC%AC-11-%E6%AD%A5-%E5%88%A0%E9%99%A4%E6%98%A0%E5%B0%84"},"\u7b2c 11 \u6b65\uff1a \u5220\u9664\u6620\u5c04")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%AC%AC-12-%E6%AD%A5-%E5%88%A0%E9%99%A4%E5%AE%9E%E4%BD%93"},"\u7b2c 12 \u6b65\uff1a \u5220\u9664\u5b9e\u4f53"))))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6b64\u6587\u6863\u4ec5\u4f9b\u7528\u6237\u5feb\u901f\u4e0a\u624b\uff0c\u8ba4\u8bc6 core\u3002")),(0,l.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,"Core \u662f tKeel \u7269\u8054\u7f51\u5e73\u53f0\u7684\u6570\u636e\u4e2d\u5fc3\uff0c\u9ad8\u6027\u80fd\u3001\u53ef\u62d3\u5c55\u7684\u8f7b\u91cf\u7ea7\u4e0b\u4e00\u4ee3\u6570\u5b57\u5316\u6570\u636e\u5f15\u64ce\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4ee5 \u5b9e\u4f53\uff08entity\uff09 \u4e3a\u64cd\u4f5c\u5355\u5143\uff0c\u901a\u8fc7\u7b80\u6613\u660e\u4e86\u7684 API \u5bf9\u5916\u63d0\u4f9b\u8bfb\u5199\u80fd\u529b\uff08\u5c5e\u6027\u8bfb\u5199\u3001\u65f6\u5e8f\u67e5\u8be2\u3001\u8ba2\u9605\uff0c\u6620\u5c04\u7b49\uff09\u3002"),(0,l.kt)("h2",{id:"\u57fa\u7840\u6982\u5ff5"},"\u57fa\u7840\u6982\u5ff5"),(0,l.kt)("h3",{id:"\u5b9e\u4f53entity"},"\u5b9e\u4f53\uff08Entity\uff09"),(0,l.kt)("p",null,"\u5b9e\u4f53\u662f\u6211\u4eec\u5728\u7269\u8054\u7f51\u4e16\u754c\u4e2d\u5bf9 Things \u7684\u4e00\u79cd\u62bd\u8c61\uff0c\u662f Core \u64cd\u4f5c\u7684\u57fa\u7840\u5bf9\u8c61\u3002\u5305\u62ec\u667a\u80fd\u706f\u3001\u7a7a\u8c03\u3001\u7f51\u5173\uff0c\u623f\u95f4\uff0c\u697c\u5c42\uff0c\u751a\u81f3\u662f\u901a\u8fc7\u6570\u636e\u805a\u5408\u751f\u6210\u7684\u865a\u62df\u8bbe\u5907\u7b49\u7b49\uff0c\u6211\u4eec\u5c06\u8fd9\u4e9b ",(0,l.kt)("inlineCode",{parentName:"p"},"Things")," \u8fdb\u884c\u62bd\u8c61\uff0c\n\u5b9a\u4e49\u4e3a\u5b9e\u4f53\u3002"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u5c5e\u6027")," \u662f\u5bf9\u67d0\u79cd\u5b9e\u4f53\u4e00\u90e8\u5206\u4fe1\u606f\u7684\u63cf\u8ff0\u3002\u4e00\u4e2a\u5b9e\u4f53\u5305\u542b\u4e24\u7c7b\u5c5e\u6027\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u57fa\u7840\u5c5e\u6027"),": \u6bcf\u4e2a\u5b9e\u4f53\u90fd\u5fc5\u5907\u7684\u5c5e\u6027\uff0c\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"id"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"owner"),"\u7b49\u7528\u4e8e\u6807\u8bc6\u5b9e\u4f53\u5171\u6709\u7279\u5f81\u7684\u5c5e\u6027\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u6269\u5c55\u5c5e\u6027"),": \u5b9e\u4f53\u9664\u57fa\u7840\u5c5e\u6027\u5916\u7684\u5c5e\u6027\uff0c\u8fd9\u79cd\u5c5e\u6027\u5c5e\u4e8e\u67d0\u4e00\u7c7b\u6216\u67d0\u4e00\u4e2a\u5b9e\u4f53\u7684\u7279\u5f81\u63cf\u8ff0\uff0c\u6bd4\u5982\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"li"},"\u6e29\u5ea6\u8ba1")," \u7684\u6e29\u5ea6\u3002")),(0,l.kt)("p",null,"\u66f4\u591a\u8bbe\u8ba1\u7ec6\u8282\u8bf7\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"/docs/developer_cookbook/core/specs/entity"},"\u5b9e\u4f53\u6587\u6863")),(0,l.kt)("h3",{id:"actor"},"Actor"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/developer_cookbook/core/specs/actor"},"Actor")," \u662f\u5b9e\u4f53\uff08Entity\uff09\u7684\u8fd0\u884c\u65f6\u7684\u4e00\u79cd\u6a21\u5f0f\u62bd\u8c61, \u7528\u4e8e\u7ef4\u62a4\u5b9e\u4f53\u7684\u5b9e\u65f6\u72b6\u6001\u4ee5\u53ca\u63d0\u4f9b\u5b9e\u4f53\u7684\u4e00\u4e9b\u5177\u4f53\u884c\u4e3a\u3002"),(0,l.kt)("h3",{id:"\u6620\u5c04"},"\u6620\u5c04"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/developer_cookbook/core/specs/mapper"},"\u6620\u5c04")," \u662f\u5b9e\u4f53\u5c5e\u6027\u4f20\u64ad\u7684\u62bd\u8c61\uff0c\u53ef\u4ee5\u5b9e\u73b0\u6570\u636e\u7684\u5411\u4e0a\u4f20\u9012\u4ee5\u53ca\u63a7\u5236\u547d\u4ee4\u7684\u5411\u4e0b\u4f20\u9012\u3002"),(0,l.kt)("div",{align:"center"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:n(9773).Z})),(0,l.kt)("i",null,"\u6620\u5c04\u6a21\u62df")),(0,l.kt)("p",null,"\u4e0a\u56fe\u4e2d\u84dd\u8272\u7ebf\u6761\u4ee3\u8868\u6570\u636e\u7684\u4e0a\u884c\uff0c\u5982\u8bbe\u5907\u6570\u636e\u4e0a\u62a5\uff0c\u9ed1\u8272\u4ee3\u8868\u6570\u636e\u7684\u4e0b\u884c\uff0c\u5982\u6307\u4ee4\u6570\u636e\u7684\u4e0b\u884c\u3002"),(0,l.kt)("p",null,"\u6620\u5c04\u64cd\u4f5c\u7684\u6267\u884c\u5305\u542b\u4e24\u6b65:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5199\u590d\u5236: \u5b9e\u73b0\u5b9e\u4f53\u5c5e\u6027\u53d8\u66f4\u65f6\uff0c\u5c06\u53d8\u66f4\u5411\u4e0b\u6e38\u5b9e\u4f53\u4f20\u9012\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8ba1\u7b97\u66f4\u65b0: \u5bf9\u4e0a\u6e38\u5b9e\u4f53\u4ea7\u751f\u7684\u53d8\u66f4\u7ec4\u5408\u8ba1\u7b97\uff0c\u7136\u540e\u5c06\u8ba1\u7b97\u7ed3\u679c\u66f4\u65b0\u5230\u5f53\u524d\u5b9e\u4f53\u3002")),(0,l.kt)("div",{align:"center"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:n(8982).Z}))),(0,l.kt)("h3",{id:"\u5173\u7cfb"},"\u5173\u7cfb"),(0,l.kt)("p",null,"\u5728\u7269\u7406\u4e16\u754c\u4e2d\uff0c\u5b9e\u4f53\u4e0e\u5b9e\u4f53\u4e4b\u95f4\u5f80\u5f80\u4e0d\u662f\u76f8\u4e92\u5b64\u7acb\u7684\uff0c\u5b83\u4eec\u4e4b\u95f4\u5f80\u5f80\u5b58\u5728\u5404\u5f0f\u5404\u6837\u7684\u8054\u7cfb\uff0c\u5982\u4ea4\u6362\u673a\uff0c\u8def\u7531\u5668\uff0c\u7ec8\u7aef\u8bbe\u5907\uff0c\u670d\u52a1\u5668\u901a\u8fc7\u5149\u7ea4\u8fde\u63a5\uff0c\u5728\u7f51\u7edc\u62d3\u6251\u56fe\u4e2d\u8fd9\u4e9b\u8bbe\u5907\u5b9e\u4f53\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"\u8fde\u63a5\u5173\u7cfb"),"\u3002\u8fd9\u4e9b\u5173\u7cfb\u5c06\u8fd9\u4e9b\u72ec\u7acb\u7684\u8bbe\u5907\u5b9e\u4f53\u94fe\u63a5\u5728\u4e00\u8d77\uff0c\u7ec4\u6210\u590d\u6742\u800c\u7cbe\u5bc6\u7684\u7f51\u7edc\uff0c\u5411\u5916\u63d0\u4f9b\u7a33\u5b9a\u800c\u9ad8\u901f\u7684\u7f51\u7edc\u901a\u4fe1\u670d\u52a1\u3002\u5f53\u7136\u5b9e\u4f53\u4e0d\u5c40\u9650\u4e8e\u8bbe\u5907\u5b9e\u4f53\uff0c\u5173\u7cfb\u4e5f\u4e0d\u4ec5\u4ec5\u5c40\u9650\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"\u8fde\u63a5\u5173\u7cfb"),"\uff0c",(0,l.kt)("a",{parentName:"p",href:"/docs/developer_cookbook/core/specs/relationship"},"\u66f4\u591a\u8bbe\u8ba1\u7ec6\u8282\u8bf7\u9605\u8bfb\u5173\u7cfb\u6587\u6863"),"\u3002"),(0,l.kt)("h3",{id:"\u6a21\u578b"},"\u6a21\u578b"),(0,l.kt)("p",null,"\u6211\u4eec\u5c06\u5b9e\u4f53\u5c5e\u6027\u7684\u7ea6\u675f\u96c6\u5408\u5b9a\u4e49\u4e3a\u6a21\u578b\u3002\u5b9e\u4f53\u662f\u5c5e\u6027\u6570\u636e\u7684\u8f7d\u4f53\uff0c\u4f46\u662f\u5982\u4f55\u89e3\u6790\u548c\u4f7f\u7528\u5b9e\u4f53\u7684\u5c5e\u6027\u6570\u636e\uff0c\u6211\u4eec\u9700\u8981\u5b9e\u4f53\u5c5e\u6027\u7684\u63cf\u8ff0\u4fe1\u606f\uff0c\u5982\u7c7b\u578b\uff0c\u53d6\u503c\u8303\u56f4\u7b49\uff0c\u6211\u4eec\u5c06\u8fd9\u4e9b\u63cf\u8ff0\u4fe1\u606f\u79f0\u4e4b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"\u7ea6\u675f"),"\u3002\u800c\u6a21\u578b\u5c31\u662f\u4e00\u4e2a\u5305\u542b",(0,l.kt)("inlineCode",{parentName:"p"},"\u7ea6\u675f"),"\u96c6\u5408\u7684\u8f7d\u4f53\uff0c\u6a21\u578b\u4e5f\u4ee5\u5b9e\u4f53\u7684\u5f62\u5f0f\u5b58\u5728\uff0c ",(0,l.kt)("a",{parentName:"p",href:"/docs/developer_cookbook/core/specs/model"},"\u66f4\u591a\u8bbe\u8ba1\u7ec6\u8282\u8bf7\u9605\u8bfb\u6a21\u578b\u6587\u6863")," \u3002"),(0,l.kt)("h3",{id:"\u8ba2\u9605"},"\u8ba2\u9605"),(0,l.kt)("p",null,"Core \u63d0\u4f9b\u4e86\u7b80\u6377\u65b9\u4fbf\u7684",(0,l.kt)("a",{parentName:"p",href:"/docs/developer_cookbook/core/specs/subscription"},"\u8ba2\u9605")," \uff0c\u4f9b\u5f00\u53d1\u8005\u5b9e\u65f6\u83b7\u53d6\u81ea\u5df1\u5173\u5fc3\u7684\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u5728 tKeel \u5e73\u53f0\u4e2d\u7528\u4e8e\u591a\u4e2a plugin \u4e4b\u95f4\u548c\u4e00\u4e2a plugin \u5185\u6240\u6709\u4ee5\u5b9e\u4f53\u4e3a\u64cd\u4f5c\u5bf9\u8c61\u7684\u6570\u636e\u4ea4\u6362\u3002"),(0,l.kt)("p",null,"\u5e95\u5c42\u5b9e\u73b0\u903b\u8f91\u662f\u8fd9\u6837\u7684\uff1a\u6bcf\u4e2a plugin \u5728\u6ce8\u518c\u7684\u65f6\u5019\u5728 Core \u5185\u90e8\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u4ea4\u4e92\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"pubsub"),"\uff0c\u540d\u79f0\u7edf\u4e00\u4e3a pluginID-pubsub,\n\u8ba2\u9605\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"topic")," \u7edf\u4e00\u4e3a pub-core\uff0csub-core\uff0c\u53ea\u6709 core \u4e0e\u8be5 plugin \u6709\u76f8\u5173\u6743\u9650\n\u6bd4\u5982\niothub: iothub-pubsub"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8ba2\u9605")," \u5206\u4e3a\u4e09\u79cd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5b9e\u65f6\u8ba2\u9605"),"\uff1a \u8ba2\u9605\u4f1a\u628a\u5b9e\u4f53\u7684\u5b9e\u65f6\u6570\u636e\u53d1\u9001\u7ed9\u8ba2\u9605\u8005\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u53d8\u66f4\u8ba2\u9605"),"\uff1a \u8ba2\u9605\u8005\u8ba2\u9605\u7684\u5b9e\u4f53\u5c5e\u6027\u53d1\u751f\u53d8\u66f4\u4e14\u6ee1\u8db3\u53d8\u66f4\u6761\u4ef6\u65f6\uff0c\u8ba2\u9605\u5c06\u5b9e\u4f53\u5c5e\u6027\u6570\u636e\u53d1\u9001\u7ed9\u8ba2\u9605\u8005\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5468\u671f\u8ba2\u9605"),"\uff1a \u8ba2\u9605\u5468\u671f\u6027\u7684\u5c06\u5b9e\u4f53\u5c5e\u6027\u6570\u636e\u53d1\u9001\u7ed9\u8ba2\u9605\u8005\u3002")),(0,l.kt)("h2",{id:"\u542f\u52a8\u670d\u52a1"},"\u542f\u52a8\u670d\u52a1"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f core \u4f9d\u8d56\u4e8e dapr \u542f\u52a8\uff0c \u6240\u4ee5\u6211\u4eec\u5e94\u8be5\u5148\u5b89\u88c5dapr\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u6ce8\u610f\uff1a\u8bf7\u672c\u5730\u5148\u8fd0\u884c\u4e00\u4e2a redis \u8fdb\u7a0b\uff0c\u76d1\u542c 6379 \u7aef\u53e3\uff0c\u65e0\u5bc6\u7801\u3002")),(0,l.kt)("p",null,"\u62c9\u53d6\u4ed3\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone  git@github.com:tkeel-io/core.git\ncd core\n")),(0,l.kt)("h4",{id:"self-hosted"},"Self-hosted"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"dapr run --app-id core --app-protocol http --app-port 6789 --dapr-http-port 3500 --dapr-grpc-port 50001 --log-level debug  --components-path ./examples/configs/core  go run cmd/core/main.go\n")),(0,l.kt)("p",null,"\u5728 core \u542f\u52a8\u540e\uff0ccore \u901a\u8fc7 sidecar \u4ee3\u7406\u7684 http \u7aef\u53e3\uff08\u9ed8\u8ba43500\uff09\u5411\u5916\u63d0\u4f9b\u670d\u52a1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'tomas@trace:~/projects/qingcloud/paas/tkeel/core$ dapr run --app-id core --app-protocol http --app-port 6789 --dapr-http-port 3500 --dapr-grpc-port 50001 --log-level debug  --components-path ./examples/configs/core  go run cmd/core/main.go \n\u2139\ufe0f  Starting Dapr with id core. HTTP Port: 3500. gRPC Port: 50001\nINFO[0000] starting Dapr Runtime -- version 1.2.2 -- commit 8aabc2c  app_id=core instance=trace scope=dapr.runtime type=log ver=1.2.2\n...\n== APP == time="2021-12-01T15:03:57.99399354+08:00" level=info msg="Elasticsearch returned with code<200>, version<7.14.2>\\n" dapr_ver=unknown instance=trace scope=core.search.es type=log\n== APP == dapr client initializing for: 127.0.0.1:50001\nINFO[0004] dapr initialized. Status: Running. Init Elapsed 4356.403146ms  app_id=core instance=trace scope=dapr.runtime type=log ver=1.2.2\nDEBU[0004] established connection to placement service at dns:///localhost:50005  app_id=core instance=trace scope=dapr.runtime.actor.internal.placement type=log ver=1.2.2\n...\n')),(0,l.kt)("h4",{id:"kubernetes"},"Kubernetes"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u90e8\u7f72 reids \u670d\u52a1",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install redis bitnami/redis\n"))),(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c core \u7a0b\u5e8f",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f k8s/core.yaml\n")))),(0,l.kt)("h2",{id:"\u4f7f\u7528-core-\u7684-apis"},"\u4f7f\u7528 core \u7684 APIs"),(0,l.kt)("h3",{id:"\u7b2c-1-\u6b65-\u521b\u5efa\u5b9e\u4f53"},"\u7b2c 1 \u6b65\uff1a \u521b\u5efa\u5b9e\u4f53"),(0,l.kt)("p",null,"\u9996\u5148\u6211\u4eec\u901a\u8fc7 API \u521b\u5efa\u4e00\u4e2a\u5b9e\u4f53\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/entities?id=device123" \\\n-H "Owner: admin" \\\n-H "Type: DEVICE" \\\n-H "Source: dm" \\\n-H "Content-Type: application/json" \\\n-d \'{\n    "status": "start",\n    "temp": 234\n    }\'\n')),(0,l.kt)("h3",{id:"\u7b2c-2-\u6b65-\u7f16\u8f91\u5b9e\u4f53"},"\u7b2c 2 \u6b65\uff1a \u7f16\u8f91\u5b9e\u4f53"),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5c1d\u8bd5\u4f7f\u7528 core \u7684 API \u5c06\u5b9e\u4f53\u7684\u6e29\u5ea6(",(0,l.kt)("inlineCode",{parentName:"p"},"temp"),") \u5b57\u6bb5\u66f4\u65b0\u4e3a123\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/entities/device123" \\\n  -H "Source: dm" \\\n  -H "Owner: admin" \\\n  -H "Type: DEVICE" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n       "status": "testing",\n       "temp":123\n     }\'\n')),(0,l.kt)("h3",{id:"\u7b2c-3-\u6b65-\u67e5\u8be2\u5b9e\u4f53"},"\u7b2c 3 \u6b65\uff1a \u67e5\u8be2\u5b9e\u4f53"),(0,l.kt)("p",null,"\u67e5\u770b\u6211\u4eec\u521b\u5efa\u7684\u5b9e\u4f53\uff0c\u6838\u5bf9\u524d\u9762\u64cd\u4f5c\u7684\u53d8\u5316\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/entities/device123" \\\n  -H "Source: dm" \\\n  -H "Owner: admin"  \\\n  -H "Type: DEVICE"\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"API response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "device123",\n    "source": "dm",\n    "owner": "admin",\n    "type": "DEVICE",\n    "configs": {},\n    "properties": {\n        "status": "testing",\n        "temp": 123\n    }\n}\n')),(0,l.kt)("h3",{id:"\u7b2c-4-\u6b65-patch-\u5b9e\u4f53\u5c5e\u6027"},"\u7b2c 4 \u6b65\uff1a Patch \u5b9e\u4f53\u5c5e\u6027"),(0,l.kt)("p",null,"core \u4e3a\u6211\u4eec\u63d0\u4f9b\u5f3a\u5927 ",(0,l.kt)("inlineCode",{parentName:"p"},"json patch")," \u64cd\u4f5c\uff0c \u5141\u8bb8\u6211\u4eec\u7075\u6d3b\u7684\u66f4\u65b0\u5b9e\u4f53\u5c5e\u6027\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "http://localhost:6789/v1/plugins/dm/entities/device123" \\\n  -H "Source: dm" \\\n  -H "Owner: admin" \\\n  -H "Type: DEVICE" \\\n  -H "Content-Type: application/json" \\\n  -d \'[\n    {\n      "path": "temp",\n      "operator": "replace",\n      "value": 20\n    }\n  ]\'\n')),(0,l.kt)("h3",{id:"\u7b2c-5-\u6b65-\u914d\u7f6e\u5b9e\u4f53\u5c5e\u6027\u914d\u7f6e\u4fe1\u606f"},"\u7b2c 5 \u6b65\uff1a \u914d\u7f6e\u5b9e\u4f53\u5c5e\u6027\u914d\u7f6e\u4fe1\u606f"),(0,l.kt)("p",null,"core \u4e2d\u7684\u5b9e\u4f53\u5c5e\u6027\uff08property\uff09\u662f\u53ef\u4ee5\u88ab\u914d\u7f6e\u7684\uff0c\u914d\u7f6e\u4fe1\u606f\u4f5c\u7528\u4e8e\u5bf9\u5b9e\u4f53\u5c5e\u6027\u7684\u89e3\u6790\u548c\u4f7f\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/entities/device123/configs" \\\n  -H "Content-Type: application/json" \\\n  -d \'[\n          {\n            "id": "temp",\n            "type": "int",\n            "define": {\n                "unit": "\xb0",\n                "max": 500,\n                "min": 10\n            },\n            "enabled": true,\n            "enabled_search": true\n          }\n    ]\'\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u7684 API \u8c03\u7528\u5bf9\u8bbe\u5907\u5b9e\u4f53\uff08device123\uff09\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"temp")," \u5c5e\u6027\u8fdb\u884c\u4e86\u914d\u7f6e\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u8868\u793a temp \u88ab\u89e3\u91ca\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"int")," \u7c7b\u578b\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"define")," \u4e2d\u5b9a\u4e49\u4e86 temp \u5c5e\u6027\u7684\u7ea6\u675f\u4fe1\u606f\uff0c\u5176\u5355\u4f4d ",(0,l.kt)("inlineCode",{parentName:"p"},"unit"),' \u4e3a"\xb0"\uff0c\u6700\u5927\u503c ',(0,l.kt)("inlineCode",{parentName:"p"},"max")," \u4e3a500\uff0c\u6700\u5c0f\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"min")," \u4e3a10\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"enabled")," \u6807\u8bc6 \u5c5e\u6027 temp \u662f\u5426\u88ab\u542f\u7528\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"enabled_search")," \u6807\u8bc6\u5c5e\u6027\u662f\u5426\u88ab\u6301\u4e45\u5316\u5230\u641c\u7d22\u5f15\u64ce\uff0c",(0,l.kt)("a",{parentName:"p",href:"/docs/developer_cookbook/core/specs/model"},"\u66f4\u591a\u8be6\u7ec6\u8d44\u6599\u8bf7\u67e5\u770b"),"\u3002"),(0,l.kt)("h3",{id:"\u7b2c-6-\u6b65-\u641c\u7d22\u5b9e\u4f53"},"\u7b2c 6 \u6b65\uff1a \u641c\u7d22\u5b9e\u4f53"),(0,l.kt)("p",null,"core \u901a\u8fc7\u914d\u7f6e\u641c\u7d22\u4e3a\u7528\u6237\u63d0\u4f9b\u5f3a\u5927\u7684\u7d22\u5f15\u80fd\u529b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/entities/search \\\n  -H "Source: dm" \\\n  -H "Owner: admin" \\\n  -H "Type: DEVICE" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n        "page": {\n        "limit": 200\n      }\n  }\'\n')),(0,l.kt)("h3",{id:"\u7b2c-7-\u6b65-\u4e3a\u5b9e\u4f53\u521b\u5efa\u6620\u5c04"},"\u7b2c 7 \u6b65\uff1a \u4e3a\u5b9e\u4f53\u521b\u5efa\u6620\u5c04"),(0,l.kt)("p",null,"core \u5bf9\u4e8e\u5b9e\u4f53\u7684\u8bbe\u8ba1\u548c\u62bd\u8c61\uff0c\u7edd\u4e0d\u6b62\u6b65\u4e8e get/set\uff0c core\u901a\u8fc7 \u6620\u5c04\uff08mapper\uff09 \u4e3a\u7528\u6237\u63d0\u4f9b\u5f3a\u5927\u800c\u7075\u6d3b\u7684\u6570\u636e\u8f6c\u6362\u548c\u6620\u5c04\uff0c\u901a\u8fc7\u5185\u7f6e\u5b9e\u73b0\u66f4\u52a0\u8f7b\u91cf\u7ea7\u7684\u6570\u636e\u6d41\u8f6c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa\u8bbe\u5907\u5b9e\u4f53 device234\uff1a"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'  curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/entities?id=device234" \\\n  -H "Owner: admin" \\\n  -H "Type: DEVICE" \\\n  -H "Source: dm" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n      "status": "start",\n      "temp": 111\n    }\'\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u4e3a\u5b9e\u4f53 device123 \u521b\u5efa\u6620\u5c04\uff1a"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'  curl -XPOST "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/entities/device123/mappers" \\\n  -H "Source: dm" \\\n  -H "Owner: admin" \\\n  -H "Type: DEVICE" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n      "name": "m-sync-dev234",\n      "tql": "insert into device123 select device234.temp as temp"\n    }\'\n')),(0,l.kt)("p",null,"mapper \u7684\u63cf\u8ff0\u4fe1\u606f\u7531\u4e24\u90e8\u5206\u6570\u636e\u7ec4\u6210\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u662f\u6620\u5c04\u7684\u540d\u79f0\uff0c",(0,l.kt)("a",{parentName:"p",href:"/docs/developer_cookbook/core/specs/tql"},"tql")," \u662f\u6620\u5c04\u7684\u89c4\u5219\u4fe1\u606f\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"insert into device123 select device234.temp as temp")," \u662f\u4e00\u6761\u5c06 device234 \u7684 temp \u5c5e\u6027\u53d8\u66f4 \u540c\u6b65\u5230 device123 \u7684 temp \u5c5e\u7684\u89c4\u5219\u3002\u5728\u89c4\u5219\u751f\u6548\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u60f3 device234 \u63a8\u9001\u6570\u636e\uff0c\u67e5\u770b device123 \u7684 temp \u662f\u5426\u53d8\u5316\u6765\u6821\u9a8c\u89c4\u5219\u662f\u5426\u751f\u6548\u3002"),(0,l.kt)("h3",{id:"\u7b2c-8-\u6b65-\u901a\u8fc7-pubsub-\u5411\u5b9e\u4f53\u53d1\u9001\u6d88\u606f"},"\u7b2c 8 \u6b65\uff1a \u901a\u8fc7 pubsub \u5411\u5b9e\u4f53\u53d1\u9001\u6d88\u606f"),(0,l.kt)("p",null,"core \u4e3a\u4e0a\u5c42\u5e94\u7528\u63d0\u4f9b\u4e24\u4e2a\u4e0d\u540c\u573a\u666f\u7684\u63a5\u53e3\uff1a",(0,l.kt)("a",{parentName:"p",href:"/docs/developer_cookbook/core/specs/interfaces"},"\u63a7\u5236\u5e73\u9762\u63a5\u53e3"),"\uff0c",(0,l.kt)("a",{parentName:"p",href:"/docs/developer_cookbook/core/specs/interfaces"},"\u6570\u636e\u5e73\u9762\u63a5\u53e3"),"\u3002\u63a7\u5236\u5e73\u9762\u7684\u63a5\u53e3\u7740\u773c\u4e8e\u89e3\u51b3\u4e0a\u5c42\u5e94\u7528\u7eb7\u7e41\u590d\u6742\u7684\u63a5\u53e3\u9700\u6c42\uff0c\u800c\u6570\u636e\u7a7a\u9762\u63a5\u53e3\u529b\u5728\u89e3\u51b3\u9ad8\u9891\uff0c\u5927\u541e\u5410\u91cf\u573a\u666f\u4e0b\u7684\u6027\u80fd\u95ee\u9898\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://localhost:3500/v1.0/publish/core-pubsub/core-pub \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n       "entity_id": "device234",\n       "owner": "admin",\n       "source": "dm",\n       "data": {\n           "temp": 234\n       }\n     }\'\n')),(0,l.kt)("h3",{id:"\u7b2c-9-\u6b65-\u521b\u5efa\u8ba2\u9605\u8ba2\u9605\u5b9e\u4f53\u6570\u636e"},"\u7b2c 9 \u6b65\uff1a \u521b\u5efa\u8ba2\u9605\uff0c\u8ba2\u9605\u5b9e\u4f53\u6570\u636e"),(0,l.kt)("p",null,"\u4e0d\u540c\u7684\u4e1a\u52a1\u573a\u666f\u5bf9 \u8ba2\u9605\uff08",(0,l.kt)("a",{parentName:"p",href:"/docs/developer_cookbook/core/specs/subscription"},"subscription"),"\uff09 \u7684\u9700\u6c42\u7c92\u5ea6\u4e0d\u5c3d\u76f8\u540c\uff0ccore \u4e3a\u4f7f\u7528\u8005\u63d0\u4f9b\u5185\u7f6e\u7684\uff0c\u9ad8\u6027\u80fd\u7684\uff0c\u591a\u6a21\u5f0f\u7684\u8ba2\u9605\u529f\u80fd\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/subscriptions?id=sub123" \\\n    -H "Source: dm" \\\n    -H "Owner: admin" \\\n    -H "Type: SUBSCRIPTION" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n            "mode": "realtime",\n            "filter":"insert into sub123 select device123.temp",\n            "topic": "sub123",\n            "pubsub_name": "core-pubsub"\n        }\'\n')),(0,l.kt)("h3",{id:"10-\u6b65-\u5220\u9664\u8ba2\u9605"},"10 \u6b65\uff1a \u5220\u9664\u8ba2\u9605"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/subscriptions?id=sub123" \\\n    -H "Source: dm" \\\n    -H "Owner: admin" \\\n    -H "Type: SUBSCRIPTION" \\\n    -H "Content-Type: application/json" \n')),(0,l.kt)("h3",{id:"\u7b2c-11-\u6b65-\u5220\u9664\u6620\u5c04"},"\u7b2c 11 \u6b65\uff1a \u5220\u9664\u6620\u5c04"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/entities/test123/mappers/m-sync-dev234" \\\n  -H "Source: dm"   \\\n  -H "Owner: admin" \\\n  -H "Type: DEVICE" \\\n  -H "Content-Type: application/json"\n')),(0,l.kt)("h3",{id:"\u7b2c-12-\u6b65-\u5220\u9664\u5b9e\u4f53"},"\u7b2c 12 \u6b65\uff1a \u5220\u9664\u5b9e\u4f53"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "http://localhost:3500/v1.0/invoke/core/method/v1/plugins/dm/entities/device123" \\\n  -H "Source: dm" \\\n  -H "Owner: admin" \\\n  -H "Type: DEVICE" \n')))}u.isMDXComponent=!0},8982:function(e,t,n){t.Z=n.p+"assets/images/mapping-93caaf9bb0622f4c5229a8888676fc85.png"},9773:function(e,t,n){t.Z=n.p+"assets/images/message_passing-fcadbb58510fc3e5d80f7b76d7849fd5.png"}}]);