(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[645],{4266:function(t,e){function n(t){let e={},n={};return t&&Object.entries(t).forEach(([t,r])=>{if(e[t])throw Error(`"${t}" has already been declared`);let i=r.render?t.match(/[a-z]+/gi).map(t=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()).join(""):void 0;e[t]={...r,render:i},i&&(n[i]=r.render)}),{output:e,components:n}}e.J=function(t){let{output:e,components:r}=n(t.tags),{output:i,components:o}=n(t.nodes);return{...t,tags:e,nodes:i,components:{...r,...o}}},e.w=function(t){return Object.prototype.hasOwnProperty.call(t,"default")?t.default:t||{}}},6684:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles/made_blog",function(){return n(3521)}])},2149:function(t,e,n){"use strict";n.r(e)},8869:function(t,e,n){"use strict";n.r(e),n.d(e,{fence:function(){return i},heading:function(){return a},link:function(){return u}});var r=n(2209);let i={render:r.dn,attributes:{content:{type:String},language:{type:String,description:"The programming language of the code block. Place it after the backticks."}}};var o=n(4211);let a={render:r.X6,children:["inline"],attributes:{id:{type:String},level:{type:Number,required:!0,default:1},className:{type:String}},transform(t,e){let n=t.transformAttributes(e),r=t.transformChildren(e),i=n.id&&"string"==typeof n.id?n.id:r.filter(t=>"string"==typeof t).join(" ").replace(/[?]/g,"").replace(/\s+/g,"-").toLowerCase();return new o.Vp(this.render,{...n,id:i},r)}},u={render:r.rU,children:["inline"],attributes:{href:{type:String}},transform(t,e){let n=t.transformAttributes(e),r=t.transformChildren(e);return new o.Vp(this.render,n,r)}}},8431:function(t,e,n){"use strict";n.r(e),n.d(e,{callout:function(){return i}});var r=n(2209);let i={render:r.UW,description:"Display the enclosed content in a callout box",children:["paragraph","tag","list"],attributes:{title:{type:String,description:"The title displayed at the top of the callout"}}}},3521:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return d},default:function(){return f}});var r=n(7294),i=n(4211),o=n(4266),a=n(8431),u=n(8869),c=n(2149);let s={tags:(0,o.w)(a),nodes:(0,o.w)(u),functions:(0,o.w)(c),...(0,o.w)({})},{components:l}=(0,o.J)(s);var d=!0;function f(t){return i.RZ.react(t.markdoc.content,r,{components:{...l,...t.components}})}}},function(t){t.O(0,[649,774,888,179],function(){return t(t.s=6684)}),_N_E=t.O()}]);