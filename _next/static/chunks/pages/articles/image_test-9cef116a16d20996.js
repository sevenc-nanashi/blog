(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39],{4266:function(t,n){function e(t){const n={},e={};return t&&Object.entries(t).forEach((([t,r])=>{if(n[t])throw new Error(`"${t}" has already been declared`);const i=r.render?function(t){return t.match(/[a-z]+/gi).map((t=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase())).join("")}(t):void 0;n[t]={...r,render:i},i&&(e[i]=r.render)})),{output:n,components:e}}n.J=function(t){const{output:n,components:r}=e(t.tags),{output:i,components:o}=e(t.nodes);return{...t,tags:n,nodes:i,components:{...r,...o}}}},4074:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/image_test",function(){return e(9978)}])},8769:function(t,n,e){"use strict";e.r(n)},75:function(t,n,e){"use strict";e.r(n),e.d(n,{fence:function(){return i},heading:function(){return a},link:function(){return s}});var r=e(181),i={render:r.dn,attributes:{content:{type:String},language:{type:String,description:"The programming language of the code block. Place it after the backticks."}}},o=e(1799),u=e(9396),c=e(4211);var a={render:r.X6,children:["inline"],attributes:{id:{type:String},level:{type:Number,required:!0,default:1},className:{type:String}},transform:function(t,n){var e=t.transformAttributes(n),r=t.transformChildren(n),i=function(t,n){return n.id&&"string"===typeof n.id?n.id:t.filter((function(t){return"string"===typeof t})).join(" ").replace(/[?]/g,"").replace(/\s+/g,"-").toLowerCase()}(r,e);return new c.Vp(this.render,(0,u.Z)((0,o.Z)({},e),{id:i}),r)}},s={render:r.rU,children:["inline"],attributes:{href:{type:String}},transform:function(t,n){var e=t.transformAttributes(n),r=t.transformChildren(n);return new c.Vp(this.render,e,r)}}},8420:function(t,n,e){"use strict";e.r(n),e.d(n,{callout:function(){return r}});var r={render:e(181).UW,description:"Display the enclosed content in a callout box",children:["paragraph","tag","list"],attributes:{title:{type:String,description:"The title displayed at the top of the callout"}}}},9978:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return p},default:function(){return h}});var r=e(1799),i=e(7294),o=e(4211),u=e(4266),c=e(8420),a=e(75),s=e(8769),d={},f=(0,r.Z)({tags:c?c.default||c:{},nodes:a?a.default||a:{},functions:s?s.default||s:{}},d?d.default||d:{}),l=(0,u.J)(f).components,p=!0;function h(t){return o.RZ.react(t.markdoc.content,i,{components:(0,r.Z)({},l,t.components)})}}},function(t){t.O(0,[649,774,888,179],(function(){return n=4074,t(t.s=n);var n}));var n=t.O();_N_E=n}]);