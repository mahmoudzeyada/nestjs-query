(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7255],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,y=m["".concat(i,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),p="tabItem_1uMI",i="tabItemActive_2DSg";var s=37,u=39;var d=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,d=e.values,m=e.groupId,c=e.className,y=o(),T=y.tabGroupChoices,k=y.setTabGroupChoices,h=(0,a.useState)(r),g=h[0],f=h[1],I=a.Children.toArray(e.children),N=[];if(null!=m){var v=T[m];null!=v&&v!==g&&d.some((function(e){return e.value===v}))&&f(v)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),a=d[n].value;f(a),null!=m&&(k(m,a),setTimeout((function(){var e,n,a,r,o,l,p,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,l=window,p=l.innerHeight,s=l.innerWidth,n>=0&&o<=s&&r<=p&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case u:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},c)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",p,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(I.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},I.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},8529:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return y}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),l=n(5064),p=n(8215),i=["components"],s={title:"Types"},u=void 0,d={unversionedId:"graphql/types",id:"graphql/types",isDocsHomePage:!1,title:"Types",description:"@nestjs-query/query-graphql provides a number of types. Most will be automatically generated for you when you create a",source:"@site/docs/graphql/types.mdx",sourceDirName:"graphql",slug:"/graphql/types",permalink:"/nestjs-query/docs/graphql/types",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/graphql/types.mdx",version:"current",frontMatter:{title:"Types"},sidebar:"docs",previous:{title:"Relations",permalink:"/nestjs-query/docs/graphql/relations"},next:{title:"Federation",permalink:"/nestjs-query/docs/graphql/federation"}},m=[{value:"ArgsTypes",id:"argstypes",children:[{value:"QueryArgsType",id:"queryargstype",children:[]}]},{value:"ObjectTypes",id:"objecttypes",children:[{value:"ConnectionType",id:"connectiontype",children:[]},{value:"UpdateManyResponseType",id:"updatemanyresponsetype",children:[]},{value:"DeleteManyResponseType",id:"deletemanyresponsetype",children:[]}]},{value:"InputTypes",id:"inputtypes",children:[{value:"FilterType",id:"filtertype",children:[]},{value:"SortType",id:"sorttype",children:[]},{value:"CreateOneInputType",id:"createoneinputtype",children:[]},{value:"CreateManyInputType",id:"createmanyinputtype",children:[]},{value:"UpdateOneInputType",id:"updateoneinputtype",children:[]},{value:"UpdateManyInputType",id:"updatemanyinputtype",children:[]},{value:"DeleteOneInputType",id:"deleteoneinputtype",children:[]},{value:"DeleteManyInputType",id:"deletemanyinputtype",children:[]}]}],c={toc:m};function y(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," provides a number of types. Most will be automatically generated for you when you create a\nresolver. However, you can use many of the types in your own code for custom endpoints."),(0,o.kt)("p",null,"The following examples are based on the following ",(0,o.kt)("inlineCode",{parentName:"p"},"TodoItemDTO")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { FilterableField, IDField } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\nexport class TodoItemDTO {\n  @IDField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n")),(0,o.kt)("h2",{id:"argstypes"},"ArgsTypes"),(0,o.kt)("h3",{id:"queryargstype"},"QueryArgsType"),(0,o.kt)("p",null,"Args type used in ",(0,o.kt)("inlineCode",{parentName:"p"},"read")," endpoints to allow ",(0,o.kt)("inlineCode",{parentName:"p"},"filtering"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"paging"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"sorting"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryArgsType")," will generate an ",(0,o.kt)("inlineCode",{parentName:"p"},"ArgsType")," that will require the user to provide three arguments."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"filter?")," - A filter that should be used to find records to update. See ",(0,o.kt)("a",{parentName:"li",href:"#filtertype"},"FilterType")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"paging?")," - Options to page of result."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sorting?")," - Optional array to allow sorting of results. See ",(0,o.kt)("a",{parentName:"li",href:"#sorttype"},"SortType"),".")),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { QueryArgsType } from '@nestjs-query/query-graphql';\nimport { ArgsType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@ArgsType()\nexport class TodoItemQuery extends QueryArgsType(TodoItemDTO) {}\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"objecttypes"},"ObjectTypes"),(0,o.kt)("h3",{id:"connectiontype"},"ConnectionType"),(0,o.kt)("p",null,"Implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/relay/graphql/connections.htm"},"connections"),". Useful for large result sets\nwhere the end user should be able to page through the results."),(0,o.kt)("h4",{id:"usage-1"},"Usage"),(0,o.kt)(l.Z,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { QueryArgsType } from '@nestjs-query/query-graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\nexport const TodoItemQueryArgs = QueryArgsType(TodoItemDTO)\nexport const TodoItemConnection = TodoItemQueryArgs.ConnectionType;\n"))),(0,o.kt)(p.Z,{value:"schema",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar ConnectionCursor\n\ntype TodoItemConnection {\n  pageInfo: PageInfo!\n  edges: [TodoItemEdge!]!\n}\n\ntype TodoItemEdge {\n  node: TodoItem!\n  cursor: ConnectionCursor!\n}\n\ntype PageInfo {\n  hasNextPage: Boolean\n  hasPreviousPage: Boolean\n  startCursor: ConnectionCursor\n  endCursor: ConnectionCursor\n}\n")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"updatemanyresponsetype"},"UpdateManyResponseType"),(0,o.kt)("p",null,"Response from ",(0,o.kt)("inlineCode",{parentName:"p"},"updateMany")," mutations."),(0,o.kt)("h4",{id:"usage-2"},"Usage"),(0,o.kt)(l.Z,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { UpdateManyResponseType } from '@nestjs-query/query-graphql';\n\nexport const UpdateManyResponse = UpdateManyResponseType()\n"))),(0,o.kt)(p.Z,{value:"schema",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateManyResponse {\n  updatedCount: Int!\n}\n")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"deletemanyresponsetype"},"DeleteManyResponseType"),(0,o.kt)("p",null,"Response from ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteMany")," mutations."),(0,o.kt)("h4",{id:"usage-3"},"Usage"),(0,o.kt)(l.Z,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { DeleteManyResponseType } from '@nestjs-query/query-graphql';\n\nexport const UpdateManyResponse = DeleteManyResponseType()\n"))),(0,o.kt)(p.Z,{value:"schema",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type DeleteManyResponse {\n  deletedCount: Int!\n}\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"inputtypes"},"InputTypes"),(0,o.kt)("h3",{id:"filtertype"},"FilterType"),(0,o.kt)("p",null,"GraphQL implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"@nestjs-query/core")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Filter")," type."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"FilterType")," is dynamically created based on the fields in the ",(0,o.kt)("inlineCode",{parentName:"p"},"DTO")," annotated with ",(0,o.kt)("a",{parentName:"p",href:"/nestjs-query/docs/graphql/dtos#filterablefield"},"@FilterableField"),"."),(0,o.kt)("p",null,"Along with the dynamically create fields filter also has the following static fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"and")," - Allows for joining multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"Filters")," with using an ",(0,o.kt)("inlineCode",{parentName:"p"},"AND")," condition."),(0,o.kt)("p",{parentName:"li"},"For example, find all todo items that ",(0,o.kt)("inlineCode",{parentName:"p"},"start with 'Foo' AND end in 'Bar'"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'todoItems(filter: {\n  and: [\n    {title: {like: "Foo%"}},\n    {title: {like: "%Bar"}},\n  ]\n}) {\n  #...select your fields\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"or")," - Allows for joining multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"Filters")," using an ",(0,o.kt)("inlineCode",{parentName:"p"},"OR")," condition."),(0,o.kt)("p",{parentName:"li"},"  For example, find all todo items that ",(0,o.kt)("inlineCode",{parentName:"p"},"(are completed AND start with 'Foo') OR (are not completed and end in 'Bar')"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'todoItems(filter: {\n  or: [\n    {title: {eq: "Foo"}, completed: {is: true}},\n    {title: {eq: "Bar"}, completed: {is: false}},\n  ]\n}) {\n  #...select your fields\n}\n')))),(0,o.kt)(l.Z,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { FilterType } from '@nestjs-query/query-graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\nexport const TodoItemFilter = FilterType(TodoItemDTO)\n"))),(0,o.kt)(p.Z,{value:"schema",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input TodoItemFilter {\n  and: [TodoItemFilter!]\n  or: [TodoItemFilter!]\n  id: IDFilterComparison\n  title: StringFieldComparison\n  completed: BooleanFieldComparison\n  created: DateFieldComparison\n  updated: DateFieldComparison\n}\n\ninput IDFilterComparison {\n  is: Boolean\n  isNot: Boolean\n  eq: ID\n  neq: ID\n  gt: ID\n  gte: ID\n  lt: ID\n  lte: ID\n  like: ID\n  notLike: ID\n  iLike: ID\n  notILike: ID\n  in: [ID!]\n  notIn: [ID!]\n}\n\ninput StringFieldComparison {\n  is: Boolean\n  isNot: Boolean\n  eq: String\n  neq: String\n  gt: String\n  gte: String\n  lt: String\n  lte: String\n  like: String\n  notLike: String\n  iLike: String\n  notILike: String\n  in: [String!]\n  notIn: [String!]\n}\n\ninput BooleanFieldComparison {\n  is: Boolean\n  isNot: Boolean\n}\n\ninput DateFieldComparison {\n  is: Boolean\n  isNot: Boolean\n  eq: DateTime\n  neq: DateTime\n  gt: DateTime\n  gte: DateTime\n  lt: DateTime\n  lte: DateTime\n  in: [DateTime!]\n  notIn: [DateTime!]\n}\n")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sorttype"},"SortType"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SortType")," allows you to sort results."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," This type is automatically created when using ",(0,o.kt)("a",{parentName:"p",href:"#queryargstype"},"QueryArgsType"),"."),(0,o.kt)("p",null,"For more comprehensive examples take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/nestjs-query/docs/graphql/queries#sorting"},"Sorting Docs")),(0,o.kt)("h4",{id:"fields"},"Fields"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"field")," - The field to sort on. The is an ENUM of ",(0,o.kt)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/dtos#filterablefield"},"@FilterableFields")," defined in the DTO."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"direction")," - The direction to sort the field ",(0,o.kt)("inlineCode",{parentName:"li"},"ASC")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"DESC"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nulls?")," - On supported storage engines you can specify the null sort order ",(0,o.kt)("inlineCode",{parentName:"li"},"NULLS_FIRST"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"NULLS_LAST"))),(0,o.kt)(l.Z,{defaultValue:"code",values:[{label:"Code",value:"code"},{label:"Schema",value:"schema"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { QueryArgsType } from '@nestjs-query/query-graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\nexport const TodoItemQueryArgs = QueryArgsType(TodoItemDTO)\nexport const TodoItemSort = TodoItemQueryArgs.SortType;\n"))),(0,o.kt)(p.Z,{value:"schema",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input TodoItemSort {\n  field: TodoItemSortFields!\n  direction: SortDirection!\n  nulls: SortNulls\n}\n\nenum TodoItemSortFields {\n  id\n  title\n  completed\n  created\n  updated\n}\n\nenum SortDirection {\n  ASC\n  DESC\n}\n\nenum SortNulls {\n  NULLS_FIRST\n  NULLS_LAST\n}\n\n")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"createoneinputtype"},"CreateOneInputType"),(0,o.kt)("p",null,"Input type for ",(0,o.kt)("inlineCode",{parentName:"p"},"createOne")," mutations."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," Dont forget to annotate your DTO with ",(0,o.kt)("inlineCode",{parentName:"p"},"@InputType()")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"@nestjs/graphql"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," Your DTO should be one that you want to use for input. For example you may not want to let the end user to\nspecify the ",(0,o.kt)("inlineCode",{parentName:"p"},"created")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"updated")," fields so you would create a new DTO just for input."),(0,o.kt)("h4",{id:"usage-4"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { CreateOneInputType } from '@nestjs-query/query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType('TodoItemInput')\nexport class TodoItemInputDTO {\n  @IsString()\n  @Field({nullable: true})\n  title?: string;\n\n  @IsBoolean()\n  @Field({nullable: true})\n  completed?: string;\n}\n\n@InputType()\nexport class CreateOneTodoItemInput extends CreateOneInputType('todoItem', TodoItemInputDTO) {}\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"createmanyinputtype"},"CreateManyInputType"),(0,o.kt)("p",null,"Input type for ",(0,o.kt)("inlineCode",{parentName:"p"},"createMany")," mutations."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," Dont forget to annotate your DTO with ",(0,o.kt)("inlineCode",{parentName:"p"},"@InputType()")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"@nestjs/graphql"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," Your DTO should be one that you want to use for input. For example you may not want to let the end user to\nspecify the ",(0,o.kt)("inlineCode",{parentName:"p"},"created")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"updated")," fields so you would create a new DTO just for input."),(0,o.kt)("h4",{id:"usage-5"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { CreateManyInputType } from '@nestjs-query/query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType('TodoItemInput')\nexport class TodoItemInputDTO {\n  @IsString()\n  @Field({nullable: true})\n  title?: string;\n\n  @IsBoolean()\n  @Field({nullable: true})\n  completed?: string;\n}\n\n@InputType()\nexport class CreateManyTodoItemsInput extends CreateManyInputType('todoItems', TodoItemInputDTO) {}\n")),(0,o.kt)("h3",{id:"updateoneinputtype"},"UpdateOneInputType"),(0,o.kt)("p",null,"InputType type for ",(0,o.kt)("inlineCode",{parentName:"p"},"updateOne")," mutations."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateOneInputType")," will generate an ",(0,o.kt)("inlineCode",{parentName:"p"},"InputType")," that will require the user to provide two fields."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - The id of the record to update"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"update")," - A record with fields to update.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Dont forget to annotate your DTO with ",(0,o.kt)("inlineCode",{parentName:"p"},"@InputType()")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"@nestjs/graphql"),"."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Your DTO should be one that you want to use for updates. For example you may not want to let the end user to\nupdate the ",(0,o.kt)("inlineCode",{parentName:"p"},"created")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"updated")," fields so you would create a new DTO just for updates."))),(0,o.kt)("h4",{id:"usage-6"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { UpdateOneInputType } from '@nestjs-query/query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType('TodoItemUpdateInput')\nexport class TodoItemUpdateDTO {\n  @IsOptional()\n  @IsString()\n  @Field({ nullable: true })\n  title?: string;\n\n  @IsOptional()\n  @IsBoolean()\n  @Field({ nullable: true })\n  completed?: boolean;\n}\n\n@InputType()\nexport class UpdateOneTodoItemInput extends UpdateOneInputType(TodoItemDTO, TodoItemUpdateDTO) {}\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"updatemanyinputtype"},"UpdateManyInputType"),(0,o.kt)("p",null,"Input type for ",(0,o.kt)("inlineCode",{parentName:"p"},"updateMany")," mutations."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateOneInputType")," will generate an ",(0,o.kt)("inlineCode",{parentName:"p"},"InputType")," that will require the user to provide two arguments."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"filter")," - The filter that should be used to find records to update. See ",(0,o.kt)("a",{parentName:"li",href:"#filtertype"},"FilterType")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"update")," - The update to apply to each record found.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," Dont forget to annotate your DTO with ",(0,o.kt)("inlineCode",{parentName:"p"},"@InputType()")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"@nestjs/graphql"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," Your DTO should be one that you want to use for input. For example you may not want to let the end user to\nspecify the ",(0,o.kt)("inlineCode",{parentName:"p"},"created")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"updated")," fields so you would create a new DTO just for input."),(0,o.kt)("h4",{id:"usage-7"},"Usage"),(0,o.kt)("p",null,"In this example we use the read DTO for the FilterType, and a different update DTO."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { CreateOneInputType, FilterType } from '@nestjs-query/query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType('TodoItemUpdate')\nexport class TodoItemUpdateDTO {\n  @IsOptional()\n  @IsString()\n  @Field({ nullable: true })\n  title?: string;\n\n  @IsOptional()\n  @IsBoolean()\n  @Field({ nullable: true })\n  completed?: boolean;\n}\n\n@InputType()\nexport class UpdateManyTodoItemsInput extends UpdateManyInputType(\n  TodoItemDTO, // filter\n  TodoItemUpdateDTO // update DTO\n) {}\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"deleteoneinputtype"},"DeleteOneInputType"),(0,o.kt)("p",null,"InputType type for ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteOne")," mutations."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DeleteOneInputType")," will generate an ",(0,o.kt)("inlineCode",{parentName:"p"},"InputType")," that will require the user to provide the id of the record to delete."),(0,o.kt)("h4",{id:"usage-8"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { DeleteOneInputType } from '@nestjs-query/query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType()\nexport class DeleteOneTodoItemInput extends DeleteOneInputType(TodoItemDTO) {}\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"deletemanyinputtype"},"DeleteManyInputType"),(0,o.kt)("p",null,"Input type type for ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteMany")," mutations."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DeleteManyInputType")," will generate an ",(0,o.kt)("inlineCode",{parentName:"p"},"InputType")," that will require the user to provide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"filter")," - A filter used to find records to delete. See ",(0,o.kt)("a",{parentName:"li",href:"#filtertype"},"FilterType"))),(0,o.kt)("h4",{id:"usage-9"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { CreateOneInputType, FilterType } from '@nestjs-query/query-graphql';\nimport { InputType } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@InputType()\nexport class DeleteManyTodoItemsInput extends DeleteManyInputType(TodoItemDTO) {}\n")))}y.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);