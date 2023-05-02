"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-installation-blocks-InstallFailed"],{27036:function(t,n,e){var r=e(64836);n.Z=void 0;var o=r(e(64938)),a=e(85893),i=(0,o.default)((0,a.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");n.Z=i},89572:function(t,n,e){var r=e(64836);n.Z=void 0;var o=r(e(64938)),a=e(85893),i=(0,o.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error");n.Z=i},74721:function(t,n,e){var r=e(64836);n.Z=void 0;var o=r(e(64938)),a=e(85893),i=(0,o.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");n.Z=i},62177:function(t,n,e){var r=e(64836);n.Z=void 0;var o=r(e(64938)),a=e(85893),i=(0,o.default)((0,a.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");n.Z=i},64938:function(t,n,e){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=e(81064)},63516:function(t,n,e){e.d(n,{Z:function(){return P}});var r=e(63366),o=e(87462),a=e(67294),i=e(36622),l=e(49669),c=e(94780),u=e(81719),s=e(78884),d=e(21822),f=e(35705),m=e(34867),g=e(1588);function p(t){return(0,m.Z)("MuiLoadingButton",t)}let v=(0,g.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var h=e(85893);let Z=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],x=t=>{let{loading:n,loadingPosition:e,classes:r}=t,a={root:["root",n&&"loading"],startIcon:[n&&`startIconLoading${(0,i.Z)(e)}`],endIcon:[n&&`endIconLoading${(0,i.Z)(e)}`],loadingIndicator:["loadingIndicator",n&&`loadingIndicator${(0,i.Z)(e)}`]},l=(0,c.Z)(a,p,r);return(0,o.Z)({},r,l)},b=t=>"ownerState"!==t&&"theme"!==t&&"sx"!==t&&"as"!==t&&"classes"!==t,E=(0,u.ZP)(d.Z,{shouldForwardProp:t=>b(t)||"classes"===t,name:"MuiLoadingButton",slot:"Root",overridesResolver:(t,n)=>{return[n.root,n.startIconLoadingStart&&{[`& .${v.startIconLoadingStart}`]:n.startIconLoadingStart},n.endIconLoadingEnd&&{[`& .${v.endIconLoadingEnd}`]:n.endIconLoadingEnd}]}})(({ownerState:t,theme:n})=>(0,o.Z)({[`& .${v.startIconLoadingStart}, & .${v.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0}},"center"===t.loadingPosition&&{transition:n.transitions.create(["background-color","box-shadow","border-color"],{duration:n.transitions.duration.short}),[`&.${v.loading}`]:{color:"transparent"}},"start"===t.loadingPosition&&t.fullWidth&&{[`& .${v.startIconLoadingStart}, & .${v.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===t.loadingPosition&&t.fullWidth&&{[`& .${v.startIconLoadingStart}, & .${v.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginLeft:-8}})),y=(0,u.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(t,n)=>{let{ownerState:e}=t;return[n.loadingIndicator,n[`loadingIndicator${(0,i.Z)(e.loadingPosition)}`]]}})(({theme:t,ownerState:n})=>(0,o.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===n.loadingPosition&&("outlined"===n.variant||"contained"===n.variant)&&{left:"small"===n.size?10:14},"start"===n.loadingPosition&&"text"===n.variant&&{left:6},"center"===n.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled},"end"===n.loadingPosition&&("outlined"===n.variant||"contained"===n.variant)&&{right:"small"===n.size?10:14},"end"===n.loadingPosition&&"text"===n.variant&&{right:6},"start"===n.loadingPosition&&n.fullWidth&&{position:"relative",left:-10},"end"===n.loadingPosition&&n.fullWidth&&{position:"relative",right:-10})),I=a.forwardRef(function(t,n){let e=(0,s.Z)({props:t,name:"MuiLoadingButton"}),{children:a,disabled:i=!1,id:c,loading:u=!1,loadingIndicator:d,loadingPosition:m="center",variant:g="text"}=e,p=(0,r.Z)(e,Z),v=(0,l.Z)(c),b=null!=d?d:(0,h.jsx)(f.Z,{"aria-labelledby":v,color:"inherit",size:16}),I=(0,o.Z)({},e,{disabled:i,loading:u,loadingIndicator:b,loadingPosition:m,variant:g}),P=x(I),w=u?(0,h.jsx)(y,{className:P.loadingIndicator,ownerState:I,children:b}):null;return(0,h.jsxs)(E,(0,o.Z)({disabled:i||u,id:v,ref:n},p,{variant:g,classes:P,ownerState:I,children:["end"===I.loadingPosition?a:w,"end"===I.loadingPosition?w:a]}))});var P=I},46207:function(t,n,e){var r=e(49064);n.Z=r.Z},81064:function(t,n,e){e.r(n),e.d(n,{capitalize:function(){return o.Z},createChainedFunction:function(){return a.Z},createSvgIcon:function(){return i.Z},debounce:function(){return l.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return u.Z},ownerDocument:function(){return s.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return m},unstable_ClassNameGenerator:function(){return E},unstable_useEnhancedEffect:function(){return g.Z},unstable_useId:function(){return p.Z},unsupportedProp:function(){return v},useControlled:function(){return h.Z},useEventCallback:function(){return Z.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return b.Z}});var r=e(37078),o=e(36622),a=e(46207),i=e(54235),l=e(75400),c=e(67421).Z,u=e(70061),s=e(47505),d=e(57577),f=e(18986).Z,m=e(7960).Z,g=e(63289),p=e(49669),v=e(40444).Z,h=e(42293),Z=e(26432),x=e(84771),b=e(40011);let E={configure:t=>{console.warn("MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.\n\nYou should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead\n\nThe detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401\n\nThe updated documentation: https://mui.com/guides/classname-generator/"),r.Z.configure(t)}}},77104:function(t,n,e){e.r(n);var r=e(85597),o=e(79817),a=e(67294),i=e(91647);n.default=(0,r.j4Z)({extendBlock:function(){return a.createElement(o.s_,null,a.createElement(o.V9,null),a.createElement(o.N,null,a.createElement(o.KG,{"data-testid":"blockInstallFailed"},a.createElement(i.Z,{variant:"h4",sx:{pb:2}},"Installation Failed"),a.createElement(i.Z,{variant:"body1"},"Your MetaFox is installed failed. Checking log for more information."),a.createElement(i.Z,{variant:"body1"},"MetaFox Team"))))}})},79817:function(t,n,e){e.d(n,{Qb:function(){return E},h0:function(){return L},lJ:function(){return x},s_:function(){return i},N:function(){return c},KG:function(){return j},jH:function(){return u},V9:function(){return f},cW:function(){return O}});var r=e(67294),o=e(81719);let a=(0,o.ZP)("div",{name:"InstallPanel"})(({theme:t})=>({width:700,backgroundColor:t.palette.background.paper,margin:t.spacing(6,0),border:t.mixins.border("secondary"),borderRadius:8,position:"relative",boxShadow:t.shadows[2]}));function i({children:t}){return r.createElement(a,null,t)}var l=e(30120);function c({children:t,hasMenu:n}){return r.createElement(l.Z,{sx:n?{display:"flex",minHeight:"400px",flexDirection:"row"}:{minHeight:"400px"}},t)}function u({children:t}){return t?r.createElement(l.Z,{sx:{py:2,px:2,textAlign:"right",borderTop:t=>t.mixins.border("secondary")}},t):null}var s=e(91647),d=e(5829);function f(){let{platformVersion:t}=(0,d.y)();return r.createElement(l.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",py:2,px:3,borderBottom:t=>t.mixins.border("secondary")}},r.createElement("img",{alt:"MetaFox",src:"https://metafox-assets.s3.eu-north-1.amazonaws.com/logo.png",height:40}),r.createElement(s.Z,null,t))}var m=e(85597);function g(){return(g=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}let p=(0,o.ZP)("ul",{name:"StepMenu",slot:"Root"})(()=>({listStyle:"none none outside",margin:0,padding:"16px 0 16px 0"})),v=(0,o.ZP)("li",{name:"StepMenu",slot:"Item"})(()=>({lineHeight:"40px",paddingLeft:"24px"})),h={active:{lineHeight:"32px",color:"text.primary",fontWeight:"bold"},default:{lineHeight:"32px",color:"text.primary"}};function Z({title:t,clickable:n,active:e,id:o}){return n?r.createElement(v,null,r.createElement(m.QVN,{to:`?step=${o}`},r.createElement(s.Z,{sx:e?h.active:h.default},t))):r.createElement(v,null,r.createElement(s.Z,{sx:e?h.active:h.default},t))}function x(){let{steps:t,disabledStep:n,currentStep:e}=(0,d.y)();return r.createElement(l.Z,{sx:{width:"160px",pt:.5}},r.createElement(p,null,t.map((t,o)=>r.createElement(Z,g({},t,{active:o===e,key:t.title,clickable:o<=e&&!n})))))}var b=e(18377);function E(){let{helpBlock:t}=(0,d.y)();return r.createElement(r.Fragment,null,r.createElement(b.Z,{sx:{flex:1}}),r.createElement(s.Z,{sx:{py:2,pr:2},paragraph:!0,"data-testid":"helpBlock"},r.createElement("span",{dangerouslySetInnerHTML:{__html:t}})))}var y=e(2279),I=e(26440),P=e(63516);let w=({formSchema:t})=>{let{formRefs:n,dispatch:e}=(0,m.OgA)(),[o,a]=r.useState(!1),i=(0,y.y)(),l=t=>{e({type:"@install/update",payload:t}),e({type:"@install/next",payload:{}})},c=r.useCallback(()=>{a(!1)},[]),u=()=>{a(!0)},s=()=>{n.get(t.name).submitForm()};return r.createElement(y.s_,null,r.createElement(y.V9,null),r.createElement(y.N,{hasMenu:!0},r.createElement(y.lJ,null),r.createElement(y.KG,null,r.createElement(I.dq,{initialValues:i,onSuccess:l,onFailure:c,onSubmitting:u,formSchema:t}),r.createElement(y.Qb,null))),r.createElement(y.jH,null,r.createElement(P.Z,{variant:"contained",color:"primary",loading:o,loadingPosition:"center","data-testid":"buttonContinue",onClick:s},"Continue")))};var L=w;function S(){return(S=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function j({children:t,...n}){return r.createElement(l.Z,S({component:"div",sx:{px:2,py:2,flex:1,position:"relative",display:"flex",flexDirection:"column"}},n),t)}var k=e(27036),C=e(89572),M=e(62177),_=e(74721);function z(){return(z=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}let F={success:{sx:{color:"#28a745"}},info:{sx:{color:"#28a745"}},warning:{sx:{color:"#ffc107"}},error:{icon:"ico-close",sx:{color:"#dc3545"}}},$=({variant:t="success"})=>{switch(t){case"success":return r.createElement(k.Z,z({"data-testid":"iconSuccess"},F.success));case"error":return r.createElement(C.Z,z({"data-testid":"iconError"},F.error));case"warning":return r.createElement(M.Z,z({"data-testid":"iconWarning"},F.warning));default:return r.createElement(_.Z,z({"data-testid":"iconInfo"},F.info))}};var O=$},5829:function(t,n,e){e.d(n,{y:function(){return o}});var r=e(86706);function o(){return(0,r.v9)(t=>t.installation)}},2279:function(t,n,e){e.d(n,{KG:function(){return o.KG},N:function(){return o.N},Qb:function(){return o.Qb},V9:function(){return o.V9},cW:function(){return o.cW},jH:function(){return o.jH},lJ:function(){return o.lJ},s_:function(){return o.s_},y:function(){return r.y}});var r=e(5829),o=e(79817)}}]);