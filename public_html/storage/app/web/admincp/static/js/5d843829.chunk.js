"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-group-blocks-GroupRule-Block","metafox-group-blocks-GroupRule-RuleMode-Block","metafox-group-blocks-GroupRule-RulePost-Block"],{85964:function(e,t,a){a.d(t,{ZP:function(){return S}});var o=a(63366),r=a(87462),n=a(67294),i=a(86010),s=a(94780),l=a(28442),d=a(41796),c=a(81719),u=a(78884),p=a(45355),m=a(70061),g=a(63289),f=a(84771),v=a(57742),b=a(1588),y=a(34867);function h(e){return(0,y.Z)("MuiListItem",e)}let Z=(0,b.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var x=a(94960),C=a(39193),R=a(85893);let _=["className"],k=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],L=(e,t)=>{let{ownerState:a}=e;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]},P=e=>{let{alignItems:t,button:a,classes:o,dense:r,disabled:n,disableGutters:i,disablePadding:l,divider:d,hasSecondaryAction:c,selected:u}=e;return(0,s.Z)({root:["root",r&&"dense",!i&&"gutters",!l&&"padding",d&&"divider",n&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",c&&"secondaryAction",u&&"selected"],container:["container"]},h,o)},w=(0,c.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:L})(({theme:e,ownerState:t})=>(0,r.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,r.Z)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${x.Z.root}`]:{paddingRight:48}},{[`&.${Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Z.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),A=(0,c.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),M=n.forwardRef(function(e,t){let a=(0,u.Z)({props:e,name:"MuiListItem"}),{alignItems:s="center",autoFocus:d=!1,button:c=!1,children:b,className:y,component:h,components:x={},componentsProps:L={},ContainerComponent:M="li",ContainerProps:{className:S}={},dense:I=!1,disabled:G=!1,disableGutters:O=!1,disablePadding:$=!1,divider:N=!1,focusVisibleClassName:j,secondaryAction:B,selected:E=!1}=a,V=(0,o.Z)(a.ContainerProps,_),F=(0,o.Z)(a,k),q=n.useContext(v.Z),U=n.useMemo(()=>({dense:I||q.dense||!1,alignItems:s,disableGutters:O}),[s,q.dense,I,O]),T=n.useRef(null);(0,g.Z)(()=>{d&&T.current&&T.current.focus()},[d]);let Y=n.Children.toArray(b),z=Y.length&&(0,m.Z)(Y[Y.length-1],["ListItemSecondaryAction"]),D=(0,r.Z)({},a,{alignItems:s,autoFocus:d,button:c,dense:U.dense,disabled:G,disableGutters:O,disablePadding:$,divider:N,hasSecondaryAction:z,selected:E}),W=P(D),H=(0,f.Z)(T,t),J=x.Root||w,K=L.root||{},Q=(0,r.Z)({className:(0,i.default)(W.root,K.className,y),disabled:G},F),X=h||"li";return(c&&(Q.component=h||"div",Q.focusVisibleClassName=(0,i.default)(Z.focusVisible,j),X=p.Z),z)?(X=Q.component||h?X:"div","li"===M&&("li"===X?X="div":"li"===Q.component&&(Q.component="div")),(0,R.jsx)(v.Z.Provider,{value:U,children:(0,R.jsxs)(A,(0,r.Z)({as:M,className:(0,i.default)(W.container,S),ref:H,ownerState:D},V,{children:[(0,R.jsx)(J,(0,r.Z)({},K,!(0,l.Z)(J)&&{as:X,ownerState:(0,r.Z)({},D,K.ownerState)},Q,{children:Y})),Y.pop()]}))})):(0,R.jsx)(v.Z.Provider,{value:U,children:(0,R.jsxs)(J,(0,r.Z)({},K,{as:X,ref:H,ownerState:D},!(0,l.Z)(J)&&{ownerState:(0,r.Z)({},D,K.ownerState)},Q,{children:[Y,B&&(0,R.jsx)(C.Z,{children:B})]}))})});var S=M},94960:function(e,t,a){a.d(t,{t:function(){return n}});var o=a(1588),r=a(34867);function n(e){return(0,r.Z)("MuiListItemButton",e)}let i=(0,o.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);t.Z=i},39193:function(e,t,a){a.d(t,{Z:function(){return h}});var o=a(63366),r=a(87462),n=a(67294),i=a(86010),s=a(94780),l=a(81719),d=a(78884),c=a(57742),u=a(1588),p=a(34867);function m(e){return(0,p.Z)("MuiListItemSecondaryAction",e)}(0,u.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var g=a(85893);let f=["className"],v=e=>{let{disableGutters:t,classes:a}=e;return(0,s.Z)({root:["root",t&&"disableGutters"]},m,a)},b=(0,l.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.disableGutters&&t.disableGutters]}})(({ownerState:e})=>(0,r.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),y=n.forwardRef(function(e,t){let a=(0,d.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:s}=a,l=(0,o.Z)(a,f),u=n.useContext(c.Z),p=(0,r.Z)({},a,{disableGutters:u.disableGutters}),m=v(p);return(0,g.jsx)(b,(0,r.Z)({className:(0,i.default)(m.root,s),ownerState:p,ref:t},l))});y.muiName="ListItemSecondaryAction";var h=y},86507:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var o=a(85597),r=a(21241),n=a(30120),i=a(67294),s=a(53620),l=a(32487);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}let c=(0,o.Uh$)((0,o.YUM)(function({identity:e,...t}){return e?i.createElement(r.gO,d({},t),i.createElement(r.sU,null,i.createElement(n.Z,null,i.createElement(s.default,{identity:e}),i.createElement(l.default,null)))):null},()=>{}));var u=(0,o.j4Z)({name:"GroupRule",extendBlock:c,overrides:{emptyPage:"hide",headerActions:[{as:"group.addNewRuleButton"}],authRequired:!0},defaults:{title:"Group Rules",itemView:"groupRule.itemView.mainCard",gridLayout:"Group - Rule - Main Card",itemLayout:"Group - Rule - Main Card",blockLayout:"App List Pending Posts",contentType:"group"}})},53620:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var o=a(85597),r=a(21241),n=a(76482),i=a(85964),s=a(26569),l=a(91647),d=a(67294),c=a(86706);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}let p=({title:e,identity:t,item:a,...p})=>{let{i18n:m}=(0,o.OgA)(),g=(0,c.I0)(),[f,v]=(0,d.useState)(!!(null==a?void 0:a.is_rule_confirmation)),[b,y]=(0,d.useState)(!1),h=e=>{y(!0),v(e),g({type:"group/updateRuleConfirmation",payload:{identity:t,is_rule_confirmation:e},meta:{onSuccess:()=>y(!1),onFailure:()=>y(!1)}})};return d.createElement(r.gO,u({},p),d.createElement(r.ti,{title:e}),d.createElement(l.Z,{variant:"body2",paragraph:!0},m.formatMessage({id:"group_rules_description"})),d.createElement(r.sU,null,d.createElement(n.Z,{sx:{boxShadow:"none"}},d.createElement(i.ZP,{sx:{py:4},secondaryAction:d.createElement(s.Z,{onChange:(e,t)=>h(t),checked:f,size:"medium",color:"primary",disabled:b})},d.createElement(l.Z,{component:"div",variant:"body1"},m.formatMessage({id:"enable_rule_mode"}))))))},m=(0,o.Uh$)((0,o.YUM)(p,()=>{}));var g=(0,o.j4Z)({extendBlock:m,overrides:{blockLayout:"App List Pending Posts",gridLayout:"Group - Rule - Main Card",itemLayout:"Group - Rule - Main Card",contentType:"group",title:"group_rules",showWhen:["truthy","profile.extra.can_update_rule_confirmation"]}})},32487:function(e,t,a){a.r(t);var o=a(85597);t.default=(0,o.j4Z)({name:"GroupRule",extendBlock:"core.block.listview",overrides:{headerActions:[{as:"group.addNewRuleButton"}],authRequired:!0},defaults:{moduleName:"group",resourceName:"group_rule",actionName:"viewAll",emptyPage:"core.block.no_content_with_icon",title:"set_up_group_rules",canLoadMore:!0,itemView:"groupRule.itemView.mainCard",blockLayout:"App List Pending Posts",gridLayout:"Group - Rule - Main Card",itemLayout:"Group - Rule - Main Card",emptyPageProps:{title:"no_rules_set_up",description:"no_rules_set_up_description",image:"ico-note-paper-o"}}})}}]);