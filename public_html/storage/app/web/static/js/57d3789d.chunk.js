"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-group-blocks-ProfileAboutDetail-Block"],{57206:function(e,t,o){o.r(t),o.d(t,{default:function(){return E}});var l=o(85597),n=o(90910),a=o(90717),i=o(84116),r=o(21241),c=o(77029),u=o(27274),m=o(30120),s=o(71682),d=o(81719),f=o(67294);let p=(0,d.ZP)("div")(({theme:e})=>({marginBottom:e.spacing(1.5),fontSize:e.mixins.pxToRem(15),color:e.palette.text.primary})),g=["ico-globe-o","ico-lock","ico-user1-three"],v=["public_group","closed_group","secret_group"],h=(0,l.Uh$)(function({title:e,identity:t}){let{useFetchDetail:o,usePageParams:d,jsxBackend:h,i18n:E,useGetItem:_}=(0,l.OgA)(),b=_(t)||[],k=(0,l.oHF)(a.eA,a.eA,"groupInfo"),w=d(),[Z,x,y]=o({dataSource:k,pageParams:w}),A=()=>f.createElement(m.Z,null,f.createElement(s.Z,{width:"100%"}),f.createElement(s.Z,{width:"100%"}),f.createElement(s.Z,{width:"100%"})),C=h.get("core.block.no_content"),{text:P,location:j,phone:B,total_member:D,external_link:M,creation_date:O,reg_method:U,category:F}=Object.assign({},Z),L=f.createElement(l.rUS,{to:(null==F?void 0:F.link)||(null==F?void 0:F.url),color:"primary"},null==F?void 0:F.name),S=[{icon:"ico-checkin-o",info:j,value:!!j},{icon:"ico-layers-o",info:L,value:!!L},{icon:"ico-phone-o",info:B,value:!!B},{icon:"ico-user-two-men-o",info:E.formatMessage({id:"people_joined_group"},{value:D}),value:!!D},{icon:g[U]||"",info:U?E.formatMessage({id:v[U]}):"",value:!0},{icon:"ico-globe-alt-o",info:M,value:!!M},{icon:"ico-calendar",info:E.formatMessage({id:"created_at"},{date:()=>f.createElement(c.r2,{"data-testid":"publishedDate",value:O,format:"LL"})}),value:!0,showWhen:["truthy","item.profile_settings.core_view_publish_date"]}].filter(e=>e.value),W=[];return b&&S&&(W=(0,u.W$)(S,{item:b})),f.createElement(r.gO,null,f.createElement(r.ti,{title:e}),f.createElement(r.sU,null,f.createElement(n.Z,{loading:x,error:y,loadingComponent:A,emptyComponent:Z?null:C},f.createElement(m.Z,null,P&&f.createElement(p,null,f.createElement(c.Ys,{variant:"body1",showFull:!0},f.createElement(i.ZP,{html:P}))),f.createElement("div",null,f.createElement(c.VJ,{values:W}))))))});var E=(0,l.j4Z)({name:"GroupProfileAboutDetail",extendBlock:h})}}]);