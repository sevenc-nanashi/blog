(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[645],{4266:function(t,n){function e(t){const n={},e={};return t&&Object.entries(t).forEach((([t,r])=>{if(n[t])throw new Error(`"${t}" has already been declared`);const o=r.render?function(t){return t.match(/[a-z]+/gi).map((t=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase())).join("")}(t):void 0;n[t]={...r,render:o},o&&(e[o]=r.render)})),{output:n,components:e}}n.J=function(t){const{output:n,components:r}=e(t.tags),{output:o,components:i}=e(t.nodes);return{...t,tags:n,nodes:o,components:{...r,...i}}}},6684:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/made_blog",function(){return e(1877)}])},1877:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return w},default:function(){return y}});var r={};e.r(r),e.d(r,{callout:function(){return f}});var o={};e.r(o),e.d(o,{fence:function(){return l},heading:function(){return h},link:function(){return g}});var i={};e.r(i);var a=e(1799),u=e(7294),c=e(4211),s=e(4266),d=e(9863),f={render:d.UW,description:"Display the enclosed content in a callout box",children:["paragraph","tag","list"],attributes:{title:{type:String,description:"The title displayed at the top of the callout"}}},l={render:d.dn,attributes:{content:{type:String},language:{type:String,description:"The programming language of the code block. Place it after the backticks."}}},p=e(9396);var h={render:d.X6,children:["inline"],attributes:{id:{type:String},level:{type:Number,required:!0,default:1},className:{type:String}},transform:function(t,n){var e=t.transformAttributes(n),r=t.transformChildren(n),o=function(t,n){return n.id&&"string"===typeof n.id?n.id:t.filter((function(t){return"string"===typeof t})).join(" ").replace(/[?]/g,"").replace(/\s+/g,"-").toLowerCase()}(r,e);return new c.Vp(this.render,(0,p.Z)((0,a.Z)({},e),{id:o}),r)}},g={render:d.rU,children:["inline"],attributes:{href:{type:String}},transform:function(t,n){var e=t.transformAttributes(n),r=t.transformChildren(n);return new c.Vp(this.render,e,r)}},m={},b=(0,a.Z)({tags:r?r.default||r:{},nodes:o?o.default||o:{},functions:i?i.default||i:{}},m?m.default||m:{}),_=(0,s.J)(b).components,w=!0;function y(t){return c.RZ.react(t.markdoc.content,u,{components:(0,a.Z)({},_,t.components)})}}},function(t){t.O(0,[649,774,888,179],(function(){return n=6684,t(t.s=n);var n}));var n=t.O();_N_E=n}]);