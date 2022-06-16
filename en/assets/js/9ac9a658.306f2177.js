"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[9812],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=p(a),k=n,s=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return a?r.createElement(s,i(i({ref:t},d),{},{components:a})):r.createElement(s,i({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},83420:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],u={title:"API\u5217\u8868",description:"API\u5217\u8868",sidebar_position:0},o=void 0,p={unversionedId:"api/rule_manager/tag",id:"api/rule_manager/tag",title:"API\u5217\u8868",description:"API\u5217\u8868",source:"@site/docs/api/rule_manager/tag.md",sourceDirName:"api/rule_manager",slug:"/api/rule_manager/tag",permalink:"/en/api/rule_manager/tag",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/rule_manager/tag.md",tags:[],version:"current",lastUpdatedAt:1655352424,formattedLastUpdatedAt:"6/16/2022",sidebarPosition:0,frontMatter:{title:"API\u5217\u8868",description:"API\u5217\u8868",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"VerifyToken",permalink:"/en/api/rudder/method_VerifyToken"},next:{title:"ActionVerify",permalink:"/en/api/rule_manager/method_ActionVerify"}},d={},m=[{value:"Rule API",id:"Rule",level:2}],c={toc:m};function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"Rule"},"Rule API"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_GetRule"},"GetRule")),(0,l.kt)("td",{parentName:"tr",align:null},"Get Rule")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_DeleteRule"},"DeleteRule")),(0,l.kt)("td",{parentName:"tr",align:null},"Delete Rule")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_UpdateRule"},"UpdateRule")),(0,l.kt)("td",{parentName:"tr",align:null},"Update Rule")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_TableList"},"TableList")),(0,l.kt)("td",{parentName:"tr",align:null},"Table List")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_ActionVerify"},"ActionVerify")),(0,l.kt)("td",{parentName:"tr",align:null},"Action Verify")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_SwitchRuleStatus"},"SwitchRuleStatus")),(0,l.kt)("td",{parentName:"tr",align:null},"Switch Rule Status")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_ErrUnsubscribe"},"ErrUnsubscribe")),(0,l.kt)("td",{parentName:"tr",align:null},"Error UnSubscribe")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_ErrSubscribe"},"ErrSubscribe")),(0,l.kt)("td",{parentName:"tr",align:null},"Error Subscribe")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_ChangeErrSubscribe"},"ChangeErrSubscribe")),(0,l.kt)("td",{parentName:"tr",align:null},"Change Error Subscribe")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_ListRuleTarget"},"ListRuleTarget")),(0,l.kt)("td",{parentName:"tr",align:null},"List Rule Target")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_CreateRuleTarget"},"CreateRuleTarget")),(0,l.kt)("td",{parentName:"tr",align:null},"Create Rule Target")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_DeleteRuleTarget"},"DeleteRuleTarget")),(0,l.kt)("td",{parentName:"tr",align:null},"Delete Rule Target")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_UpdateRuleTarget"},"UpdateRuleTarget")),(0,l.kt)("td",{parentName:"tr",align:null},"Update Rule Target")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_GetTableMap"},"GetTableMap")),(0,l.kt)("td",{parentName:"tr",align:null},"Get Table Map")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_UpdateTableMap"},"UpdateTableMap")),(0,l.kt)("td",{parentName:"tr",align:null},"Update Table Map")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_QueryRule"},"QueryRule")),(0,l.kt)("td",{parentName:"tr",align:null},"Query Rules")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_CreateRule"},"CreateRule")),(0,l.kt)("td",{parentName:"tr",align:null},"Create Rule")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_RemoveDevicesFromRule"},"RemoveDevicesFromRule")),(0,l.kt)("td",{parentName:"tr",align:null},"Remove Devices From Rule")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_AddDevicesToRule"},"AddDevicesToRule")),(0,l.kt)("td",{parentName:"tr",align:null},"Add Devices to Rule")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_GetRuleDevices"},"GetRuleDevices")),(0,l.kt)("td",{parentName:"tr",align:null},"Get Rule Devices")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_GetRuleDevicesID"},"GetRuleDevicesID")),(0,l.kt)("td",{parentName:"tr",align:null},"Get Rule Devices ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_GetTableDetails"},"GetTableDetails")),(0,l.kt)("td",{parentName:"tr",align:null},"Get Table Details")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./method_TesyConnectToKafka"},"TesyConnectToKafka")),(0,l.kt)("td",{parentName:"tr",align:null},"Test Kafka config")))))}k.isMDXComponent=!0}}]);