import{f,o as t,c as o,a as h,u as r,m,g as u,i as d,r as g,n as b,j as y,F as p,k as _,e as k,w as S,b as B,t as w}from"./app.9084bbd7.js";const x=["xlink:href"],$={name:"w-icon",inheritAttrs:!1},l=Object.assign($,{props:{prefix:{type:String,default:"icon"},name:{type:String,required:!0},color:{type:String,default:"#333"}},setup(e){const a=e,s=f(()=>`#${a.prefix}-${a.name}`);return(n,i)=>(t(),o("svg",m({class:"w-icon"},n.$attrs,{"aria-hidden":"true"}),[h("use",{"xlink:href":r(s)},null,8,x)],16))}});l.install=e=>{e.component(l.name,l)};const v=["disabled","autofocus","type"],T={key:2},C={name:"w-button"},c=Object.assign(C,{props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},outline:String,block:Boolean,loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean},emits:["click"],setup(e,{emit:a}){function s(n){a("click",n)}return(n,i)=>(t(),o("button",{class:b(["w-button",[e.type?"w-button-"+e.type:"",e.size?"w-button-"+e.size:"",{"is-disabled":e.disabled,"is-loading":e.loading,"is-plain":e.plain,"is-round":e.round,"is-circle":e.circle}]]),onClick:s,disabled:e.disabled||e.loading,autofocus:e.autofocus,type:e.nativeType},[e.loading?(t(),u(r(l),{key:0,class:"w-icon-loading w-icon--left",name:"loading"})):d("",!0),e.icon&&!e.loading?(t(),u(r(l),{key:1,class:"w-icon--left",name:e.icon},null,8,["name"])):d("",!0),n.$slots.default?(t(),o("span",T,[g(n.$slots,"default")])):d("",!0)],10,v))}});c.install=e=>{e.component(c.name,c)};const V=k('<h1 id="button-\u6309\u94AE" tabindex="-1">Button \u6309\u94AE <a class="header-anchor" href="#button-\u6309\u94AE" aria-hidden="true">#</a></h1><p>\u6309\u94AE\u7528\u4E8E\u5F00\u59CB\u4E00\u4E2A\u5373\u65F6\u64CD\u4F5C\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u6807\u8BB0\u4E86\u4E00\u4E2A\uFF08\u6216\u5C01\u88C5\u4E00\u7EC4\uFF09\u64CD\u4F5C\u547D\u4EE4\uFF0C\u54CD\u5E94\u7528\u6237\u70B9\u51FB\u884C\u4E3A\uFF0C\u89E6\u53D1\u76F8\u5E94\u7684\u4E1A\u52A1\u903B\u8F91\u3002</p><p>\u5728 Ant Design Vue \u4E2D\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E94\u79CD\u6309\u94AE\u3002</p><ul><li>\u4E3B\u6309\u94AE\uFF1A\u7528\u4E8E\u4E3B\u884C\u52A8\u70B9\uFF0C\u4E00\u4E2A\u64CD\u4F5C\u533A\u57DF\u53EA\u80FD\u6709\u4E00\u4E2A\u4E3B\u6309\u94AE\u3002</li><li>\u9ED8\u8BA4\u6309\u94AE\uFF1A\u7528\u4E8E\u6CA1\u6709\u4E3B\u6B21\u4E4B\u5206\u7684\u4E00\u7EC4\u884C\u52A8\u70B9\u3002</li><li>\u865A\u7EBF\u6309\u94AE\uFF1A\u5E38\u7528\u4E8E\u6DFB\u52A0\u64CD\u4F5C\u3002</li><li>\u6587\u672C\u6309\u94AE\uFF1A\u7528\u4E8E\u6700\u6B21\u7EA7\u7684\u884C\u52A8\u70B9\u3002</li><li>\u94FE\u63A5\u6309\u94AE\uFF1A\u7528\u4E8E\u4F5C\u4E3A\u5916\u94FE\u7684\u884C\u52A8\u70B9\u3002</li></ul><p>\u4EE5\u53CA\u56DB\u79CD\u72B6\u6001\u5C5E\u6027\u4E0E\u4E0A\u9762\u914D\u5408\u4F7F\u7528\u3002</p><ul><li>\u5371\u9669\uFF1A\u5220\u9664/\u79FB\u52A8/\u4FEE\u6539\u6743\u9650\u7B49\u5371\u9669\u64CD\u4F5C\uFF0C\u4E00\u822C\u9700\u8981\u4E8C\u6B21\u786E\u8BA4\u3002</li><li>\u5E7D\u7075\uFF1A\u7528\u4E8E\u80CC\u666F\u8272\u6BD4\u8F83\u590D\u6742\u7684\u5730\u65B9\uFF0C\u5E38\u7528\u5728\u9996\u9875/\u4EA7\u54C1\u9875\u7B49\u5C55\u793A\u573A\u666F\u3002</li><li>\u7981\u7528\uFF1A\u884C\u52A8\u70B9\u4E0D\u53EF\u7528\u7684\u65F6\u5019\uFF0C\u4E00\u822C\u9700\u8981\u6587\u6848\u89E3\u91CA\u3002</li><li>\u52A0\u8F7D\u4E2D\uFF1A\u7528\u4E8E\u5F02\u6B65\u64CD\u4F5C\u7B49\u5F85\u53CD\u9988\u7684\u65F6\u5019\uFF0C\u4E5F\u53EF\u4EE5\u907F\u514D\u591A\u6B21\u63D0\u4EA4\u3002</li></ul><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2>',9),j=JSON.parse('{"title":"Button \u6309\u94AE","description":"","frontmatter":{"title":"Button \u6309\u94AE"},"headers":[{"level":2,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528","link":"#\u4F55\u65F6\u4F7F\u7528","children":[]},{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[]}],"relativePath":"components/button.md"}'),N={name:"components/button.md"},z=Object.assign(N,{setup(e){const a=y({themes:["primary","success","warning","danger","info","metal","dark","light","brand","focus"]});return(s,n)=>(t(),o("div",null,[V,(t(!0),o(p,null,_(a.themes,i=>(t(),u(r(c),{round:"",key:i,type:i},{default:S(()=>[B(w(i),1)]),_:2},1032,["type"]))),128))]))}});export{j as __pageData,z as default};