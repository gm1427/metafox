"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-ui-SmartDataGrid-HeaderBasic"],{92162:function(e,t,n){n.r(t);var r=n(30094),a=n(67294);t.default=function({colDef:e}){var t;return a.createElement(r.Z,{colDef:e},null!==(t=e.headerName)&&void 0!==t?t:"")}},30094:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(67294),a=n(30120),l=n(81719),i=n(10999),o=n(85597),c=n(26933),u=n(17563),d=n(60408);let s=(0,l.ZP)("div",{name:"DataGrid",slot:"Cell",shouldForwardProp(e){return!/width|height|flex|align|minWidth|sortable/i.test(e)}})(({sortable:e,align:t,width:n,height:r,minWidth:a,flex:l})=>({display:"flex",alignItems:"center",padding:"10px 4px",overflow:"hidden",justifyContent:null!=t?t:"start",minWidth:a,flex:l,width:n,height:r,textAlign:null!=t?t:"left",fontWeight:"bold",cursor:e?"pointer":"unset"})),f=e=>{return"asc"===e?"ico-arrow-up":"desc"===e?"ico-arrow-down":void 0};function h({colDef:e,children:t}){let{location:n}=(0,o.OgA)(),{handleColumnAction:l}=(0,i.Z)(),{headerAlign:h,align:m,minWidth:p,width:x,flex:g,headerHeight:v,action:w,sortable:C,description:Z,sortableField:b}=e,{search:k}=n,{order:E,order_by:W}=u.parse(k);return r.createElement(s,{align:null!=h?h:m,minWidth:p,width:x,flex:g,sortable:C,height:v,onClick:()=>C&&l("column/sortable",{action:w,sortableField:b,type:"desc"===W?"asc":"desc"})},t,C&&W&&E===b&&r.createElement(c.Z,{icon:f(W)}),r.createElement(a.Z,{sx:{pl:.5}},r.createElement(d.kW,null,Z)))}},10999:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294);let a=(0,r.createContext)(void 0);function l(){return(0,r.useContext)(a)}}}]);