"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-layout-LayoutBlock-LayoutBlockLiveEditor"],{85964:function(e,t,a){a.d(t,{ZP:function(){return A}});var o=a(63366),n=a(87462),r=a(67294),i=a(86010),s=a(94780),l=a(28442),c=a(41796),d=a(81719),u=a(78884),p=a(45355),m=a(70061),y=a(63289),f=a(84771),Z=a(57742),v=a(1588),b=a(34867);function g(e){return(0,b.Z)("MuiListItem",e)}let h=(0,v.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var x=a(94960),C=a(39193),k=a(85893);let I=["className"],L=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],S=(e,t)=>{let{ownerState:a}=e;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]},P=e=>{let{alignItems:t,button:a,classes:o,dense:n,disabled:r,disableGutters:i,disablePadding:l,divider:c,hasSecondaryAction:d,selected:u}=e;return(0,s.Z)({root:["root",n&&"dense",!i&&"gutters",!l&&"padding",c&&"divider",r&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",d&&"secondaryAction",u&&"selected"],container:["container"]},g,o)},R=(0,d.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:S})(({theme:e,ownerState:t})=>(0,n.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,n.Z)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${x.Z.root}`]:{paddingRight:48}},{[`&.${h.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${h.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${h.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${h.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),$=(0,d.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),M=r.forwardRef(function(e,t){let a=(0,u.Z)({props:e,name:"MuiListItem"}),{alignItems:s="center",autoFocus:c=!1,button:d=!1,children:v,className:b,component:g,components:x={},componentsProps:S={},ContainerComponent:M="li",ContainerProps:{className:A}={},dense:E=!1,disabled:B=!1,disableGutters:N=!1,disablePadding:w=!1,divider:O=!1,focusVisibleClassName:j,secondaryAction:G,selected:_=!1}=a,F=(0,o.Z)(a.ContainerProps,I),T=(0,o.Z)(a,L),V=r.useContext(Z.Z),z=r.useMemo(()=>({dense:E||V.dense||!1,alignItems:s,disableGutters:N}),[s,V.dense,E,N]),q=r.useRef(null);(0,y.Z)(()=>{c&&q.current&&q.current.focus()},[c]);let D=r.Children.toArray(v),U=D.length&&(0,m.Z)(D[D.length-1],["ListItemSecondaryAction"]),W=(0,n.Z)({},a,{alignItems:s,autoFocus:c,button:d,dense:z.dense,disabled:B,disableGutters:N,disablePadding:w,divider:O,hasSecondaryAction:U,selected:_}),Y=P(W),H=(0,f.Z)(q,t),J=x.Root||R,K=S.root||{},Q=(0,n.Z)({className:(0,i.default)(Y.root,K.className,b),disabled:B},T),X=g||"li";return(d&&(Q.component=g||"div",Q.focusVisibleClassName=(0,i.default)(h.focusVisible,j),X=p.Z),U)?(X=Q.component||g?X:"div","li"===M&&("li"===X?X="div":"li"===Q.component&&(Q.component="div")),(0,k.jsx)(Z.Z.Provider,{value:z,children:(0,k.jsxs)($,(0,n.Z)({as:M,className:(0,i.default)(Y.container,A),ref:H,ownerState:W},F,{children:[(0,k.jsx)(J,(0,n.Z)({},K,!(0,l.Z)(J)&&{as:X,ownerState:(0,n.Z)({},W,K.ownerState)},Q,{children:D})),D.pop()]}))})):(0,k.jsx)(Z.Z.Provider,{value:z,children:(0,k.jsxs)(J,(0,n.Z)({},K,{as:X,ref:H,ownerState:W},!(0,l.Z)(J)&&{ownerState:(0,n.Z)({},W,K.ownerState)},Q,{children:[D,G&&(0,k.jsx)(C.Z,{children:G})]}))})});var A=M},94960:function(e,t,a){a.d(t,{t:function(){return r}});var o=a(1588),n=a(34867);function r(e){return(0,n.Z)("MuiListItemButton",e)}let i=(0,o.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);t.Z=i},39193:function(e,t,a){a.d(t,{Z:function(){return g}});var o=a(63366),n=a(87462),r=a(67294),i=a(86010),s=a(94780),l=a(81719),c=a(78884),d=a(57742),u=a(1588),p=a(34867);function m(e){return(0,p.Z)("MuiListItemSecondaryAction",e)}(0,u.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var y=a(85893);let f=["className"],Z=e=>{let{disableGutters:t,classes:a}=e;return(0,s.Z)({root:["root",t&&"disableGutters"]},m,a)},v=(0,l.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.disableGutters&&t.disableGutters]}})(({ownerState:e})=>(0,n.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),b=r.forwardRef(function(e,t){let a=(0,c.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:s}=a,l=(0,o.Z)(a,f),u=r.useContext(d.Z),p=(0,n.Z)({},a,{disableGutters:u.disableGutters}),m=Z(p);return(0,y.jsx)(v,(0,n.Z)({className:(0,i.default)(m.root,s),ownerState:p,ref:t},l))});b.muiName="ListItemSecondaryAction";var g=b},61702:function(e,t,a){var o=a(63366),n=a(87462),r=a(67294),i=a(86010),s=a(94780),l=a(91647),c=a(57742),d=a(78884),u=a(81719),p=a(97484),m=a(85893);let y=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],f=e=>{let{classes:t,inset:a,primary:o,secondary:n,dense:r}=e;return(0,s.Z)({root:["root",a&&"inset",r&&"dense",o&&n&&"multiline"],primary:["primary"],secondary:["secondary"]},p.L,t)},Z=(0,u.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[{[`& .${p.Z.primary}`]:t.primary},{[`& .${p.Z.secondary}`]:t.secondary},t.root,a.inset&&t.inset,a.primary&&a.secondary&&t.multiline,a.dense&&t.dense]}})(({ownerState:e})=>(0,n.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),v=r.forwardRef(function(e,t){let a=(0,d.Z)({props:e,name:"MuiListItemText"}),{children:s,className:u,disableTypography:p=!1,inset:v=!1,primary:b,primaryTypographyProps:g,secondary:h,secondaryTypographyProps:x}=a,C=(0,o.Z)(a,y),{dense:k}=r.useContext(c.Z),I=null!=b?b:s,L=h,S=(0,n.Z)({},a,{disableTypography:p,inset:v,primary:!!I,secondary:!!L,dense:k}),P=f(S);return null==I||I.type===l.Z||p||(I=(0,m.jsx)(l.Z,(0,n.Z)({variant:k?"body2":"body1",className:P.primary,component:null!=g&&g.variant?void 0:"span",display:"block"},g,{children:I}))),null==L||L.type===l.Z||p||(L=(0,m.jsx)(l.Z,(0,n.Z)({variant:"body2",className:P.secondary,color:"text.secondary",display:"block"},x,{children:L}))),(0,m.jsxs)(Z,(0,n.Z)({className:(0,i.default)(P.root,u),ownerState:S,ref:t},C,{children:[I,L]}))});t.Z=v},24673:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var o=a(85597),n=a(41547),r=a(44373),i=a(50130),s=a(85964),l=a(61702),c=a(12551),d=a(38790),u=a(81719),p=a(67294);let m=(0,u.ZP)("div",{name:"LiveEditorBlock",slot:"Root"})(({theme:e})=>({position:"absolute",left:10,zIndex:e.zIndex.appBar+1}));function y(e){let{blockName:t}=e,{jsxBackend:a,dispatch:u,i18n:y}=(0,o.OgA)(),f=a.get(t),Z=p.useRef(),[v,b]=p.useState(!1),g=p.useCallback(()=>b(!0),[]),h=p.useCallback(()=>b(!1),[]),x=t=>{b(!1),u({type:t,payload:e})};return f?p.createElement(m,{ref:Z},p.createElement(d.Z,{title:y.formatMessage({id:"edit_layout_block"})},p.createElement(i.Z,{onClick:g,size:"smallest",color:"success"},p.createElement(n.zb,{icon:"ico-pencilline"}))),p.createElement(c.Z,{id:"menuBlockEditor",open:v,anchorEl:Z.current,onClose:h},p.createElement(s.ZP,{dense:!0,button:!0,focusRipple:!1,onClick:()=>x("@layout/editBlock")},p.createElement(l.Z,null,y.formatMessage({id:"edit_layout_block"}))),p.createElement(s.ZP,{dense:!0,button:!0,focusRipple:!1,onClick:()=>x("@layout/createBlock")},p.createElement(l.Z,null,y.formatMessage({id:"create_layout_block"}))),p.createElement(r.Z,{light:!0,variant:"middle"}),p.createElement(s.ZP,{dense:!0,button:!0,focusRipple:!1,onClick:()=>x("@layout/deleteBlock")},p.createElement(l.Z,null,y.formatMessage({id:"remove"}))))):(console.error(`Unexpected not found "${t}"`),null)}}}]);