"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-layout-LayoutSlot-LayoutSlotLiveEditor"],{30986:function(o,e,t){t.d(e,{Z:function(){return R}});var r=t(63366),a=t(87462),i=t(67294),n=t(86010),l=t(94780),d=t(41796),u=t(36622),s=t(81719),p=t(78884),c=t(1588),g=t(34867);function v(o){return(0,g.Z)("MuiButtonGroup",o)}let b=(0,c.Z)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]);var m=t(58907),h=t(85893);let f=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],x=(o,e)=>{let{ownerState:t}=o;return[{[`& .${b.grouped}`]:e.grouped},{[`& .${b.grouped}`]:e[`grouped${(0,u.Z)(t.orientation)}`]},{[`& .${b.grouped}`]:e[`grouped${(0,u.Z)(t.variant)}`]},{[`& .${b.grouped}`]:e[`grouped${(0,u.Z)(t.variant)}${(0,u.Z)(t.orientation)}`]},{[`& .${b.grouped}`]:e[`grouped${(0,u.Z)(t.variant)}${(0,u.Z)(t.color)}`]},e.root,e[t.variant],!0===t.disableElevation&&e.disableElevation,t.fullWidth&&e.fullWidth,"vertical"===t.orientation&&e.vertical]},Z=o=>{let{classes:e,color:t,disabled:r,disableElevation:a,fullWidth:i,orientation:n,variant:d}=o,s={root:["root",d,"vertical"===n&&"vertical",i&&"fullWidth",a&&"disableElevation"],grouped:["grouped",`grouped${(0,u.Z)(n)}`,`grouped${(0,u.Z)(d)}`,`grouped${(0,u.Z)(d)}${(0,u.Z)(n)}`,`grouped${(0,u.Z)(d)}${(0,u.Z)(t)}`,r&&"disabled"]};return(0,l.Z)(s,v,e)},$=(0,s.ZP)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:x})(({theme:o,ownerState:e})=>(0,a.Z)({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},"contained"===e.variant&&{boxShadow:(o.vars||o).shadows[2]},e.disableElevation&&{boxShadow:"none"},e.fullWidth&&{width:"100%"},"vertical"===e.orientation&&{flexDirection:"column"},{[`& .${b.grouped}`]:(0,a.Z)({minWidth:40,"&:not(:first-of-type)":(0,a.Z)({},"horizontal"===e.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===e.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===e.variant&&"horizontal"===e.orientation&&{marginLeft:-1},"outlined"===e.variant&&"vertical"===e.orientation&&{marginTop:-1}),"&:not(:last-of-type)":(0,a.Z)({},"horizontal"===e.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===e.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===e.variant&&"horizontal"===e.orientation&&{borderRight:o.vars?`1px solid rgba(${o.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${"light"===o.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},"text"===e.variant&&"vertical"===e.orientation&&{borderBottom:o.vars?`1px solid rgba(${o.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${"light"===o.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},"text"===e.variant&&"inherit"!==e.color&&{borderColor:o.vars?`rgba(${o.vars.palette[e.color].mainChannel} / 0.5)`:(0,d.Fq)(o.palette[e.color].main,.5)},"outlined"===e.variant&&"horizontal"===e.orientation&&{borderRightColor:"transparent"},"outlined"===e.variant&&"vertical"===e.orientation&&{borderBottomColor:"transparent"},"contained"===e.variant&&"horizontal"===e.orientation&&{borderRight:`1px solid ${(o.vars||o).palette.grey[400]}`,[`&.${b.disabled}`]:{borderRight:`1px solid ${(o.vars||o).palette.action.disabled}`}},"contained"===e.variant&&"vertical"===e.orientation&&{borderBottom:`1px solid ${(o.vars||o).palette.grey[400]}`,[`&.${b.disabled}`]:{borderBottom:`1px solid ${(o.vars||o).palette.action.disabled}`}},"contained"===e.variant&&"inherit"!==e.color&&{borderColor:(o.vars||o).palette[e.color].dark},{"&:hover":(0,a.Z)({},"outlined"===e.variant&&"horizontal"===e.orientation&&{borderRightColor:"currentColor"},"outlined"===e.variant&&"vertical"===e.orientation&&{borderBottomColor:"currentColor"})}),"&:hover":(0,a.Z)({},"contained"===e.variant&&{boxShadow:"none"})},"contained"===e.variant&&{boxShadow:"none"})})),y=i.forwardRef(function(o,e){let t=(0,p.Z)({props:o,name:"MuiButtonGroup"}),{children:l,className:d,color:u="primary",component:s="div",disabled:c=!1,disableElevation:g=!1,disableFocusRipple:v=!1,disableRipple:b=!1,fullWidth:x=!1,orientation:y="horizontal",size:R="medium",variant:z="outlined"}=t,C=(0,r.Z)(t,f),B=(0,a.Z)({},t,{color:u,component:s,disabled:c,disableElevation:g,disableFocusRipple:v,disableRipple:b,fullWidth:x,orientation:y,size:R,variant:z}),E=Z(B),S=i.useMemo(()=>({className:E.grouped,color:u,disabled:c,disableElevation:g,disableFocusRipple:v,disableRipple:b,fullWidth:x,size:R,variant:z}),[u,c,g,v,b,x,R,z,E.grouped]);return(0,h.jsx)($,(0,a.Z)({as:s,role:"group",className:(0,n.default)(E.root,d),ref:e,ownerState:B},C,{children:(0,h.jsx)(m.Z.Provider,{value:S,children:l})}))});var R=y},32685:function(o,e,t){t.r(e),t.d(e,{default:function(){return c}});var r=t(85597),a=t(60408),i=t(30120),n=t(21822),l=t(30986),d=t(50130),u=t(68929),s=t.n(u),p=t(67294);function c(o){let{slotName:e}=o,{i18n:t,dispatch:u}=(0,r.OgA)(),c=e=>u({type:e,payload:o});return p.createElement(i.Z,{title:"configure this area","data-testid":s()(`LayoutSlot_${e}`),sx:{position:"absolute",right:0,display:"flex",flexDirection:"row",justifyContent:"flex-end",fontSize:"0.75rem",zIndex:100}},p.createElement(l.Z,{size:"small"},p.createElement(n.Z,{disabled:!0,size:"smallest"},e),p.createElement(d.Z,{size:"smallest",onClick:()=>c("@layout/editSlot"),title:t.formatMessage({id:"edit_layout_slot"})},p.createElement(a.zb,{icon:"ico-pencilline-o"})),p.createElement(d.Z,{size:"smallest",onClick:()=>c("@layout/createBlock"),title:t.formatMessage({id:"create_layout_block"})},p.createElement(a.zb,{icon:"ico-list-plus"}))))}}}]);