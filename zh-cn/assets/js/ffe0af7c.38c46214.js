"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[129],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,b=d["".concat(l,".").concat(f)]||d[f]||u[f]||c;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3804:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),i=["components"],a={title:"\u6570\u636e\u6301\u4e45\u5316",sidebar_position:12},l=void 0,s={unversionedId:"developer_cookbook/core/specs/persistent-strategy",id:"developer_cookbook/core/specs/persistent-strategy",isDocsHomePage:!1,title:"\u6570\u636e\u6301\u4e45\u5316",description:"\u6570\u636e\u6301\u4e45\u5316\u662f\u5bf9\u5b9e\u4f53\u7684\u5c5e\u6027\u6570\u636e\u7684\u5b58\u50a8\uff0c\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u7684\u4f7f\u7528\u573a\u666f\u5206\u4e3a\uff1a\u72b6\u6001\u5b58\u50a8\uff0c\u5c5e\u6027\u5b58\u50a8\uff0c\u65f6\u5e8f\u5b58\u50a8\u3002",source:"@site/docs/developer_cookbook/core/specs/persistent-strategy.md",sourceDirName:"developer_cookbook/core/specs",slug:"/developer_cookbook/core/specs/persistent-strategy",permalink:"/docs/zh-cn/developer_cookbook/core/specs/persistent-strategy",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/specs/persistent-strategy.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"\u6570\u636e\u6301\u4e45\u5316",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Channel",permalink:"/docs/zh-cn/developer_cookbook/core/specs/channel"},next:{title:"tentacle \u4e00\u81f4\u6027",permalink:"/docs/zh-cn/developer_cookbook/core/specs/tentacle-consistency"}},p=[{value:"\u72b6\u6001\u5b58\u50a8",id:"\u72b6\u6001\u5b58\u50a8",children:[],level:2},{value:"\u5c5e\u6027\u5b58\u50a8",id:"\u5c5e\u6027\u5b58\u50a8",children:[],level:2},{value:"\u65f6\u5e8f\u5b58\u50a8",id:"\u65f6\u5e8f\u5b58\u50a8",children:[],level:2},{value:"WAL",id:"wal",children:[],level:2}],u={toc:p};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u6570\u636e\u6301\u4e45\u5316\u662f\u5bf9\u5b9e\u4f53\u7684\u5c5e\u6027\u6570\u636e\u7684\u5b58\u50a8\uff0c\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u7684\u4f7f\u7528\u573a\u666f\u5206\u4e3a\uff1a\u72b6\u6001\u5b58\u50a8\uff0c\u5c5e\u6027\u5b58\u50a8\uff0c\u65f6\u5e8f\u5b58\u50a8\u3002"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"entity-data-persisten",src:r(5909).Z})),(0,c.kt)("h2",{id:"\u72b6\u6001\u5b58\u50a8"},"\u72b6\u6001\u5b58\u50a8"),(0,c.kt)("p",null,"\u72b6\u6001\u5b58\u50a8\u5b58\u50a8\u7684\u662f\u5b9e\u4f53\u7684\u6700\u65b0\u5c5e\u6027\u6570\u636e\uff0c\u662f\u5b9e\u4f53\u7684\u4e00\u4e2a\u5feb\u7167\u3002"),(0,c.kt)("h2",{id:"\u5c5e\u6027\u5b58\u50a8"},"\u5c5e\u6027\u5b58\u50a8"),(0,c.kt)("p",null,"\u5c5e\u6027\u6570\u636e \u5373\u5b9e\u4f53\u7684\u5c5e\u6027\u7684\u6570\u636e\uff0c\u6211\u4eec\u5c06 \u5b9e\u4f53 \u7684\u5c5e\u6027\u53ef\u9009\u7684\u5b58\u50a8\u5230\u641c\u7d22\u5f15\u64ce\u4e2d\uff0c\u5e76\u63d0\u4f9b ",(0,c.kt)("inlineCode",{parentName:"p"},"elasticsearch"),", ",(0,c.kt)("inlineCode",{parentName:"p"},"zinc")," \u7b49\u591a\u79cd\u9009\u62e9\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u914d\u7f6e\u7075\u6d3b\uff0c\u64cd\u4f5c\u7b80\u5355\uff0c\u529f\u80fd\u5f3a\u5927\u7684\u5b9e\u4f53\u7d22\u5f15\u529f\u80fd\u3002"),(0,c.kt)("h2",{id:"\u65f6\u5e8f\u5b58\u50a8"},"\u65f6\u5e8f\u5b58\u50a8"),(0,c.kt)("p",null,"\u65f6\u5e8f\u6570\u636e \u5176\u5b9e\u4e5f\u662f\u5b9e\u4f53\u7684\u5c5e\u6027\u6570\u636e\uff0c\u4e0d\u540c\u7684\u662f\u65f6\u5e8f\u6570\u636e\u662f\u5c5e\u6027\u6570\u636e\u5728\u5404\u4e2a\u65f6\u95f4\u70b9\u4e0a\u7684\u5386\u53f2\u6570\u636e\u3002"),(0,c.kt)("h2",{id:"wal"},"WAL"))}d.isMDXComponent=!0},5909:function(e,t,r){t.Z=r.p+"assets/images/entity-data-persisten-4ac47b48ebaebf755277befe5f6a6e85.png"}}]);