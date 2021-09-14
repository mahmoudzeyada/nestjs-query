(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6805],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=a(r),d=o,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(y,s(s({ref:t},l),{},{components:r})):n.createElement(y,s({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var a=2;a<i;a++)s[a]=r[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6664:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return a},toc:function(){return l},default:function(){return p}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),s=["components"],u={title:"Custom Service"},c=void 0,a={unversionedId:"persistence/sequelize/custom-service",id:"persistence/sequelize/custom-service",isDocsHomePage:!1,title:"Custom Service",description:"To create a custom query service to add your own methods to you can extend the SequelizeQueryService.",source:"@site/docs/persistence/sequelize/custom-service.md",sourceDirName:"persistence/sequelize",slug:"/persistence/sequelize/custom-service",permalink:"/nestjs-query/docs/persistence/sequelize/custom-service",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/persistence/sequelize/custom-service.md",version:"current",frontMatter:{title:"Custom Service"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/nestjs-query/docs/persistence/sequelize/getting-started"},next:{title:"Serialization",permalink:"/nestjs-query/docs/persistence/sequelize/serialization"}},l=[],m={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To create a custom query service to add your own methods to you can extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"SequelizeQueryService"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.service.ts"',title:'"todo-item.service.ts"'},"import { QueryService } from '@nestjs-query/core';\nimport { InjectModel } from '@nestjs/sequelize';\nimport { SequelizeQueryService } from '@nestjs-query/query-sequelize';\nimport { TodoItemEntity } from './entity/todo-item.entity';\n\n@QueryService(TodoItemEntity)\nexport class TodoItemService extends SequelizeQueryService<TodoItemEntity> {\n  constructor(@InjectModel(TodoItemEntity) model: typeof TodoItemEntity) {\n    super(model);\n  }\n\n  async markAllAsCompleted(): Promise<number> {\n    const entities = await this.query({ filter: { completed: { is: true } } });\n\n    const { updatedCount } = await this.updateMany(\n      { completed: true }, // update\n      { id: { in: entities.map((e) => e.id) } }, // filter\n    );\n    // do some other business logic\n    return updatedCount;\n  }\n}\n")),(0,i.kt)("p",null,"To use the custom service in the auto-generated resolver you can specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceClass")," option."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts" {12,16}',title:'"todo-item.module.ts"',"{12,16}":!0},"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemService } from './todo-item.service';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQuerySequelizeModule.forFeature([TodoItemEntity])],\n      services: [TodoItemService],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          ServiceClass: TodoItemService,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n\n")))}p.isMDXComponent=!0}}]);