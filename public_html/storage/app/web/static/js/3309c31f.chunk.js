"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-livestreaming-blocks-ShareLivestream-ShareLiveStreaming"],{86107:function(e,t,a){a.r(t);var r=a(84635),n=a(85597),o=a(21241),l=a(77029),i=a(30120),s=a(50130),c=a(81719),m=a(67294),p=a(89581);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}let d=(0,c.ZP)("div",{name:"Tab",slot:"container"})(({theme:e})=>({display:"flex",flexDirection:"row"})),f=(0,c.ZP)("div",{name:"Tab",slot:"item",shouldForwardProp:e=>"active"!==e})(({theme:e,active:t})=>({cursor:"pointer",textTransform:"uppercase",fontWeight:e.typography.fontWeightBold,fontSize:e.mixins.pxToRem(15),padding:e.spacing(2,0),marginRight:e.spacing(3.75),color:e.palette.text.secondary,borderBottom:"solid 2px",borderBottomColor:"transparent",...t&&{color:e.palette.primary.main,borderBottomColor:e.palette.primary.main}})),b=(0,c.ZP)(i.Z,{name:"Tab",slot:"panels"})(({theme:e})=>({})),g=(0,c.ZP)(i.Z,{name:"Tab",slot:"panel"})(({theme:e,active:t})=>({display:t?"block":"none"})),h=({name:e})=>{let t=(0,n.oHF)(p.m,p.T,e);return m.createElement(r.AO,{noHeader:!0,dataSource:t})},v=({icon:e="ico-arrow-left",...t})=>{let{navigate:a}=(0,n.OgA)(),r=()=>{a(-1)};return m.createElement(s.Z,u({size:"small",role:"button",id:"back","data-testid":"buttonBack",sx:{transform:"translate(-5px,0)"},onClick:r},t),m.createElement(l.zb,{icon:e}))};t.default=(0,n.j4Z)({extendBlock:function({title:e}){let[t,a]=m.useState("software"),{i18n:r}=(0,n.OgA)();return m.createElement(o.gO,null,m.createElement(o.ti,null,m.createElement(o.bi,null,m.createElement(v,null),r.formatMessage({id:e}))),m.createElement(o.sU,null,m.createElement(d,null,m.createElement(f,{active:"software"===t,onClick:()=>a("software")},r.formatMessage({id:"streaming_software"}))),m.createElement(b,null,m.createElement(g,{active:"software"===t},m.createElement(h,{name:"addItem"})))))},overrides:{noHeader:!1}})}}]);