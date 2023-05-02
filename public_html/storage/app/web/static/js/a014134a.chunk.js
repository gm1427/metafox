(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-user-blocks-EmailNotificationSettings-Block"],{85964:function(e,t,n){"use strict";n.d(t,{ZP:function(){return L}});var a=n(63366),r=n(87462),o=n(67294),i=n(86010),s=n(94780),l=n(28442),d=n(41796),c=n(81719),p=n(78884),u=n(45355),m=n(70061),y=n(63289),v=n(84771),g=n(57742),f=n(1588),b=n(34867);function Z(e){return(0,b.Z)("MuiListItem",e)}let h=(0,f.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var x=n(94960),C=n(39193),S=n(85893);let P=["className"],A=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],I=(e,t)=>{let{ownerState:n}=e;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]},k=e=>{let{alignItems:t,button:n,classes:a,dense:r,disabled:o,disableGutters:i,disablePadding:l,divider:d,hasSecondaryAction:c,selected:p}=e;return(0,s.Z)({root:["root",r&&"dense",!i&&"gutters",!l&&"padding",d&&"divider",o&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",c&&"secondaryAction",p&&"selected"],container:["container"]},Z,a)},E=(0,c.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:I})(({theme:e,ownerState:t})=>(0,r.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,r.Z)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${x.Z.root}`]:{paddingRight:48}},{[`&.${h.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${h.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${h.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${h.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),$=(0,c.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),B=o.forwardRef(function(e,t){let n=(0,p.Z)({props:e,name:"MuiListItem"}),{alignItems:s="center",autoFocus:d=!1,button:c=!1,children:f,className:b,component:Z,components:x={},componentsProps:I={},ContainerComponent:B="li",ContainerProps:{className:L}={},dense:w=!1,disabled:N=!1,disableGutters:j=!1,disablePadding:O=!1,divider:T=!1,focusVisibleClassName:R,secondaryAction:M,selected:F=!1}=n,_=(0,a.Z)(n.ContainerProps,P),G=(0,a.Z)(n,A),V=o.useContext(g.Z),q=o.useMemo(()=>({dense:w||V.dense||!1,alignItems:s,disableGutters:j}),[s,V.dense,w,j]),D=o.useRef(null);(0,y.Z)(()=>{d&&D.current&&D.current.focus()},[d]);let U=o.Children.toArray(f),z=U.length&&(0,m.Z)(U[U.length-1],["ListItemSecondaryAction"]),W=(0,r.Z)({},n,{alignItems:s,autoFocus:d,button:c,dense:q.dense,disabled:N,disableGutters:j,disablePadding:O,divider:T,hasSecondaryAction:z,selected:F}),H=k(W),Q=(0,v.Z)(D,t),Y=x.Root||E,J=I.root||{},K=(0,r.Z)({className:(0,i.default)(H.root,J.className,b),disabled:N},G),X=Z||"li";return(c&&(K.component=Z||"div",K.focusVisibleClassName=(0,i.default)(h.focusVisible,R),X=u.Z),z)?(X=K.component||Z?X:"div","li"===B&&("li"===X?X="div":"li"===K.component&&(K.component="div")),(0,S.jsx)(g.Z.Provider,{value:q,children:(0,S.jsxs)($,(0,r.Z)({as:B,className:(0,i.default)(H.container,L),ref:Q,ownerState:W},_,{children:[(0,S.jsx)(Y,(0,r.Z)({},J,!(0,l.Z)(Y)&&{as:X,ownerState:(0,r.Z)({},W,J.ownerState)},K,{children:U})),U.pop()]}))})):(0,S.jsx)(g.Z.Provider,{value:q,children:(0,S.jsxs)(Y,(0,r.Z)({},J,{as:X,ref:Q,ownerState:W},!(0,l.Z)(Y)&&{ownerState:(0,r.Z)({},W,J.ownerState)},K,{children:[U,M&&(0,S.jsx)(C.Z,{children:M})]}))})});var L=B},94960:function(e,t,n){"use strict";n.d(t,{t:function(){return o}});var a=n(1588),r=n(34867);function o(e){return(0,r.Z)("MuiListItemButton",e)}let i=(0,a.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);t.Z=i},39193:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var a=n(63366),r=n(87462),o=n(67294),i=n(86010),s=n(94780),l=n(81719),d=n(78884),c=n(57742),p=n(1588),u=n(34867);function m(e){return(0,u.Z)("MuiListItemSecondaryAction",e)}(0,p.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var y=n(85893);let v=["className"],g=e=>{let{disableGutters:t,classes:n}=e;return(0,s.Z)({root:["root",t&&"disableGutters"]},m,n)},f=(0,l.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.disableGutters&&t.disableGutters]}})(({ownerState:e})=>(0,r.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),b=o.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:s}=n,l=(0,a.Z)(n,v),p=o.useContext(c.Z),u=(0,r.Z)({},n,{disableGutters:p.disableGutters}),m=g(u);return(0,y.jsx)(f,(0,r.Z)({className:(0,i.default)(m.root,s),ownerState:u,ref:t},l))});b.muiName="ListItemSecondaryAction";var Z=b},61702:function(e,t,n){"use strict";var a=n(63366),r=n(87462),o=n(67294),i=n(86010),s=n(94780),l=n(91647),d=n(57742),c=n(78884),p=n(81719),u=n(97484),m=n(85893);let y=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],v=e=>{let{classes:t,inset:n,primary:a,secondary:r,dense:o}=e;return(0,s.Z)({root:["root",n&&"inset",o&&"dense",a&&r&&"multiline"],primary:["primary"],secondary:["secondary"]},u.L,t)},g=(0,p.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[{[`& .${u.Z.primary}`]:t.primary},{[`& .${u.Z.secondary}`]:t.secondary},t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})(({ownerState:e})=>(0,r.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),f=o.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiListItemText"}),{children:s,className:p,disableTypography:u=!1,inset:f=!1,primary:b,primaryTypographyProps:Z,secondary:h,secondaryTypographyProps:x}=n,C=(0,a.Z)(n,y),{dense:S}=o.useContext(d.Z),P=null!=b?b:s,A=h,I=(0,r.Z)({},n,{disableTypography:u,inset:f,primary:!!P,secondary:!!A,dense:S}),k=v(I);return null==P||P.type===l.Z||u||(P=(0,m.jsx)(l.Z,(0,r.Z)({variant:S?"body2":"body1",className:k.primary,component:null!=Z&&Z.variant?void 0:"span",display:"block"},Z,{children:P}))),null==A||A.type===l.Z||u||(A=(0,m.jsx)(l.Z,(0,r.Z)({variant:"body2",className:k.secondary,color:"text.secondary",display:"block"},x,{children:A}))),(0,m.jsxs)(g,(0,r.Z)({className:(0,i.default)(k.root,p),ownerState:I,ref:t},C,{children:[P,A]}))});t.Z=f},51584:function(e,t,n){var a=n(44239),r=n(37005);e.exports=function(e){return!0===e||!1===e||r(e)&&"[object Boolean]"==a(e)}},19414:function(e,t,n){"use strict";n.d(t,{Q:function(){return u},A:function(){return v}});var a=n(67294),r=n(85964),o=n(61702),i=n(12501),s=n(74825),l=n(81719),d=n(51584),c=n.n(d);let p=(0,l.ZP)(r.ZP,{name:"StyledListItem"})(({theme:e})=>{var t;return{borderBottom:"solid 1px",borderBottomColor:null===(t=e.palette.border)||void 0===t?void 0:t.secondary,padding:"22px 0 !important",display:"flex",justifyContent:"space-between","&:first-of-typed":{paddingTop:6},"&:last-child":{paddingBottom:6,borderBottom:"none"}}});function u({item:e,onChanged:t}){var n,r;let[l,d]=a.useState(null==e?void 0:null===(n=e.value)||void 0===n?void 0:n.toString()),u=n=>{let a=n.target.value;d(a),t(c()(a)?a:parseInt(a,10),null==e?void 0:e.var_name)};return a.createElement(p,null,a.createElement(o.Z,{primary:e.phrase,sx:{pr:2}}),a.createElement(i.Z,{variant:"standard",value:l,onChange:u,disableUnderline:!0},null==e?void 0:null===(r=e.options)||void 0===r?void 0:r.map((e,t)=>a.createElement(s.Z,{value:c()(e.value)?e.value:e.value.toString(),key:t},e.label))))}var m=n(26569);let y=(0,l.ZP)(r.ZP,{name:"StyledSwitchList"})(({theme:e})=>{var t;return{borderBottom:"solid 1px",borderBottomColor:null===(t=e.palette.border)||void 0===t?void 0:t.secondary,padding:`${e.spacing(2)} 0 !important`,display:"flex",justifyContent:"space-between","&:first-of-type":{paddingTop:6},"&:last-child":{paddingBottom:6,borderBottom:"none"}}});function v({item:e,onChanged:t,disabled:n,size:r="medium",color:i="primary"}){let[s,l]=a.useState(!!e.value),d=a.useCallback(()=>{let n=!s;l(n),t(n?1:0,e.var_name||e.module_id)},[e.module_id,e.var_name,t,s]);return a.createElement(y,null,a.createElement(o.Z,{primary:e.phrase,sx:{pr:2}}),a.createElement(m.Z,{size:r,checked:s,color:i,disabled:n,onChange:d}))}},36817:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(85597),r=n(86706),o=n(21241),i=n(78573),s=n(67294),l=n(36831);let d=(0,r.$j)(e=>e.user.emailNotificationSettings)(function({data:e,title:t,blockProps:n}){let{dispatch:r}=(0,a.OgA)();return s.useEffect(()=>{r({type:"setting/emailNotificationSettings/FETCH"})},[r]),s.createElement(o.gO,null,s.createElement(o.ti,{title:t}),s.createElement(o.sU,null,s.createElement(i.Z,{disablePadding:!0},e.map(e=>s.createElement(l.Z,{item:e,key:e.var_name,typeAction:"emailNotificationSettings"})))))});var c=(0,a.j4Z)({extendBlock:d,defaults:{title:"email_notifications",blockLayout:"Account Setting"}})},36831:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var a=n(61702),r=n(81719),o=n(30120),i=n(67294),s=n(19414),l=n(77029),d=n(85597);let c=(0,r.ZP)("div",{name:"StyledSwitchList",shouldForwardProp:e=>"open"!==e})(({theme:e,open:t})=>{var n;return{borderBottom:"solid 1px",borderBottomColor:null===(n=e.palette.border)||void 0===n?void 0:n.secondary,padding:`${e.spacing(t?3:1)} 0 !important`,"&:first-of-type":{paddingTop:6},"&:last-child":{paddingBottom:6,borderBottom:"none"}}}),p=(0,r.ZP)("div",{name:"AppNameStyled"})(({theme:e})=>({display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer"})),u=(0,r.ZP)(a.Z,{name:"AppNameText"})(({theme:e})=>({"& span":{fontWeight:e.typography.fontWeightBold}})),m=(0,r.ZP)("div",{name:"appSettings",shouldForwardProp:e=>"open"!==e})(({theme:e,open:t})=>({marginLeft:e.spacing(2),...t&&{"& div":{border:0}}}));function y({item:e,typeAction:t,disabled:n,size:a="medium",color:r="primary"}){let{dispatch:y}=(0,d.OgA)(),[v,g]=i.useState(!1),[f,b]=i.useState(!!e.value),{channel:Z,type:h,app_name:x}=e,C=(e,n)=>{y({type:`setting/${t}/UPDATE`,payload:{var_name:n,value:e,channel:Z}})},S=(e,n)=>{y({type:`setting/${t}/UPDATE`,payload:{channel:Z,value:e,module_id:n}}),b(e=>!e)},P=()=>{g(e=>!e)};return i.createElement(c,{open:!v},i.createElement(p,{onClick:P},i.createElement(u,{primary:x,sx:{pr:2}}),i.createElement(l.zb,{icon:v?"ico-angle-up":"ico-angle-down"})),v&&i.createElement(m,{ml:2,open:!f},i.createElement(s.A,{onChanged:S,item:e}),i.createElement(o.Z,{ml:2},f&&h.map(e=>i.createElement(s.A,{onChanged:C,item:e,key:e.var_name})))))}}}]);