(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1054],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),y=a,f=m["".concat(s,".").concat(y)]||m[y]||c[y]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5695:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={title:"Initial Release",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/doug-martin",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["nestjs","typeorm","graphql"]},s=void 0,u={permalink:"/nestjs-query/blog/2020/01/26/Initial Release",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/blog/blog/2020-01-26-Initial Release.md",source:"@site/blog/2020-01-26-Initial Release.md",title:"Initial Release",description:"Initial Release of nestjs-query.",date:"2020-01-26T00:00:00.000Z",formattedDate:"January 26, 2020",tags:[{label:"nestjs",permalink:"/nestjs-query/blog/tags/nestjs"},{label:"typeorm",permalink:"/nestjs-query/blog/tags/typeorm"},{label:"graphql",permalink:"/nestjs-query/blog/tags/graphql"}],readingTime:.415,truncated:!1,prevItem:{title:"v0.0.4",permalink:"/nestjs-query/blog/2020/01/27/v0.0.4"}},p=[],c={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Initial Release of ",(0,o.kt)("inlineCode",{parentName:"p"},"nestjs-query"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nestjs-query")," is collection of packages to make crud for ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql")," (and potentially other transports) easier."),(0,o.kt)("p",null,"This library is composed of three packages."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/doug-martin/nestjs-query/tree/master/packages/core"},(0,o.kt)("inlineCode",{parentName:"a"},"@nestjs-query/core"))," - Defines all interfaces and utility types implemented by the other packages."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/doug-martin/nestjs-query/tree/master/packages/graphql"},(0,o.kt)("inlineCode",{parentName:"a"},"@nestjs-query/query-graphql"))," - Package that provides the graphql resolver and decorators for crud endpoints."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/doug-martin/nestjs-query/tree/master/packages/typeorm"},(0,o.kt)("inlineCode",{parentName:"a"},"@nestjs-query/query-typeorm"))," - Package that implements a Typeorm service that can be used by itself or with the graphql resolver provided by ",(0,o.kt)("inlineCode",{parentName:"li"},"@nestjs-query/query-graphql"),".")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://doug-martin.github.io/nestjs-query/docs/introduction/getting-started"},"To read more checkout the docs")))}m.isMDXComponent=!0}}]);