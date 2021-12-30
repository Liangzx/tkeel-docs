"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[6299],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),k=c(r),m=o,d=k["".concat(p,".").concat(m)]||k[m]||s[m]||l;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=k;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},2363:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return k}});var n=r(7462),o=r(3366),l=(r(7294),r(3905)),i=["components"],a={title:"\u5b9e\u4f53",sidebar_position:1},p=void 0,c={unversionedId:"developer_cookbook/core/specs/entity",id:"developer_cookbook/core/specs/entity",isDocsHomePage:!1,title:"\u5b9e\u4f53",description:"\u5b9e\u4f53\uff08Entity\uff09",source:"@site/docs/developer_cookbook/core/specs/entity.md",sourceDirName:"developer_cookbook/core/specs",slug:"/developer_cookbook/core/specs/entity",permalink:"/docs/developer_cookbook/core/specs/entity",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/specs/entity.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5b9e\u4f53",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"IoT \u573a\u666f\u4e0b\uff0c\u901a\u8fc7\u6a21\u677f\u521b\u5efa\u8bbe\u5907",permalink:"/docs/developer_cookbook/core/tutorial/iot-create-entity-from-template"},next:{title:"\u6620\u5c04",permalink:"/docs/developer_cookbook/core/specs/mapper"}},u=[{value:"\u5b9e\u4f53\uff08Entity\uff09",id:"\u5b9e\u4f53entity",children:[],level:2},{value:"\u7ec4\u6210",id:"\u7ec4\u6210",children:[],level:2},{value:"\u5b9e\u4f53\u7684\u4e24\u79cd\u5b58\u5728\u5f62\u5f0f",id:"\u5b9e\u4f53\u7684\u4e24\u79cd\u5b58\u5728\u5f62\u5f0f",children:[],level:2},{value:"\u5b9e\u4f53\u7684\u751f\u547d\u5468\u671f",id:"\u5b9e\u4f53\u7684\u751f\u547d\u5468\u671f",children:[],level:2},{value:"\u5b9e\u4f53\u72b6\u6001\u7684\u5b58\u50a8",id:"\u5b9e\u4f53\u72b6\u6001\u7684\u5b58\u50a8",children:[],level:2}],s={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5b9e\u4f53entity"},"\u5b9e\u4f53\uff08Entity\uff09"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7269\u8054\u7f51\u4e16\u754c\u91cc\u7684\u64cd\u4f5c\u5bf9\u8c61\uff0c\u4ee5\u53ca\u8fd9\u4e9b\u5bf9\u8c61\u7ec4\u5408\u62bd\u8c61\u51fa\u6765\u7684\u5bf9\u8c61\uff0c\u5305\u62ec\u7f51\u5173\uff0c\u8bbe\u5907\uff0c\u8bbe\u5907\u7684\u805a\u5408\u62bd\u8c61\u7b49\u7b49\u3002")),(0,l.kt)("h2",{id:"\u7ec4\u6210"},"\u7ec4\u6210"),(0,l.kt)("p",null,"\u5b9e\u4f53\uff08Entity\uff09\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\u5b9e\u4f53\u7684 ",(0,l.kt)("strong",{parentName:"li"},"\u5934\u90e8")),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u4f53 ",(0,l.kt)("strong",{parentName:"li"},"\u5c5e\u6027"))),(0,l.kt)("p",null,"\u5934\u90e8\u5b57\u6bb5\u662f ",(0,l.kt)("strong",{parentName:"p"},"\u56fa\u5b9a")," \u4e14 ",(0,l.kt)("strong",{parentName:"p"},"\u5fc5\u987b")," \u7684\uff0c\u5c5e\u6027\u90e8\u5206\u662f ",(0,l.kt)("em",{parentName:"p"},"\u53ef\u9009")," \u7684\uff0c\u5c5e\u6027\u90e8\u5206\u4ee5 Key-Value \u7684\u5f62\u5f0f\u5b58\u5728\uff0c\u4ee5\u63d0\u4f9b\u826f\u597d\u7684\u6269\u5c55\u6027\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u4f53\u5177\u6709\u96f6\u4e2a\u6216\u591a\u4e2a\u5c5e\u6027\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u4f53\u5c5e\u6027\u7684\u7c7b\u578b\u53ef\u4ee5\u662f ",(0,l.kt)("em",{parentName:"li"},"\u4efb\u610f\u7c7b\u578b")," \u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u4f53 ",(0,l.kt)("strong",{parentName:"li"},"\u5fc5\u987b")," \u6709\u5982\u4e0b\u5b57\u6bb5\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"entity_id"),": \u5b9e\u4f53id"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"tag"),"\uff1a \u5b9e\u4f53\u6807\u7b7e"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"type"),": \u5b9e\u4f53\u7684\u7c7b\u578b\uff0c\u8bf8\u5982\u8bbe\u5907\uff0c\u7a7a\u95f4\u7b49"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"user_id"),": \u5b9e\u4f53\u62e5\u6709\u8005"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"source"),"\uff1a \u5b9e\u4f53\u7684\u521b\u5efa\u63d2\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"version"),"\uff1a \u5b9e\u4f53\u7684\u7248\u672c")))),(0,l.kt)("h2",{id:"\u5b9e\u4f53\u7684\u4e24\u79cd\u5b58\u5728\u5f62\u5f0f"},"\u5b9e\u4f53\u7684\u4e24\u79cd\u5b58\u5728\u5f62\u5f0f"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u7269\u8054\u7f51\u4e16\u754c\u4e2d\u7684\u64cd\u4f5c\u5bf9\u8c61\u7684\u6570\u5b57\u5316\u62bd\u8c61\uff0c\u6211\u4eec\u4e0d\u4ec5\u62bd\u8c61\u5176\u72b6\u6001\uff0c\u5bf9\u5176\u884c\u4e3a\u7684\u62bd\u8c61\u4e5f\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002\u7269\u7406\u4e16\u754c\u4e2d\u5b58\u5728\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"\u5bf9\u8c61"),"\uff0c\u6211\u4eec\u77e5\u9053\u5176\u7c7b\u578b\u4e0d\u540c\u5176\u884c\u4e3a\u4e00\u822c\u662f\u4e0d\u540c\u7684\u3002\u6240\u4ee5\u6211\u4eec\u4e3a\u5b9e\u4f53\u521b\u5efa\u8fd0\u884c\u65f6",(0,l.kt)("inlineCode",{parentName:"p"},"Actor"),"\uff0c\u6765\u4f53\u73b0\u7269\u7406\u4e16\u754c\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"\u5bf9\u8c61"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"\u72b6\u6001"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"\u884c\u4e3a"),"\u3002"),(0,l.kt)("h2",{id:"\u5b9e\u4f53\u7684\u751f\u547d\u5468\u671f"},"\u5b9e\u4f53\u7684\u751f\u547d\u5468\u671f"),(0,l.kt)("p",null,'curl -X GET "http://localhost:3500/v1.0/invoke/core/method/v1/entities/test123?source=abcd&owner=admin&type=DEVICE" '),(0,l.kt)("h2",{id:"\u5b9e\u4f53\u72b6\u6001\u7684\u5b58\u50a8"},"\u5b9e\u4f53\u72b6\u6001\u7684\u5b58\u50a8"),(0,l.kt)("p",null,"\u5b9e\u4f53\u7684\u72b6\u6001\u6570\u636e\uff0c\u5373\u5b9e\u4f53\u7684\u5c5e\u6027\u6570\u636e\uff0c\u6211\u4eec\u6839\u636e\u9700\u6c42\u5c06\u5176\u9009\u62e9\u6027\u7684\u5b58\u50a8\u5230\u72b6\u6001\u5b58\u50a8\uff0c\u65f6\u5e8f\u5b58\u50a8 \u548c \u641c\u7d22\u5f15\u64ce\u3002"),(0,l.kt)("p",null,"\u5b9e\u4f53\u72b6\u6001\u6570\u636e\u7684\u6301\u4e45\u5316\u5177\u6709\u4e24\u65b9\u9762\u7279\u5f81\uff1a\u9009\u62e9\u6027\uff0c\u7b56\u7565\u6027\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u6027\u662f\u6307\u7528\u6237\u53ef\u4ee5\u5bf9\u5b9e\u4f53\u7684\u5c5e\u6027\u8fdb\u884c\u914d\u7f6e\uff0c\u6765\u6307\u5b9a\u6240\u914d\u7f6e\u7684\u5c5e\u6027\u662f\u5426\u8fdb\u884c\u6301\u4e45\u5316\uff0c",(0,l.kt)("a",{parentName:"li",href:"/docs/developer_cookbook/core/specs/model"},"\u8be6\u60c5\u8bf7\u67e5\u770b"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7b56\u7565\u6027\u662f\u6307\u7528\u6237\u53ef\u4ee5\u6839\u636e\u5bf9\u670d\u52a1\u8282\u70b9\u914d\u7f6e\u4fe1\u606f\u8fdb\u884c\u8c03\u8282\uff0c\u6765\u63a7\u5236\u5b9e\u4f53\u6570\u636e\u7684",(0,l.kt)("a",{parentName:"li",href:"/docs/developer_cookbook/core/specs/persistent-strategy"},"\u6301\u4e45\u5316\u7b56\u7565"),"\u3002")))}k.isMDXComponent=!0}}]);