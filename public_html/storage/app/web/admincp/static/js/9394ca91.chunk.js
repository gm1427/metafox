"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-group-components-GroupManager-MembershipQuestion-AddNewQuestionButton"],{5973:function(e,t,o){o.r(t);var a=o(85597),i=o(27274),n=o(21822),r=o(81719),u=o(67294),s=o(17563),l=o(27361),d=o.n(l);let p=(0,r.ZP)(n.Z,{})(({disabled:e,theme:t})=>({...e&&{color:`${t.palette.text.disabled} !important`}})),m=({disabled:e})=>{var t,o;let{i18n:n,usePageParams:r,dispatch:l,getSetting:m}=(0,a.OgA)(),{identity:g}=r(),c=(0,a.z88)("pagination"),{apiUrl:f,apiParams:v}=(0,a.oHF)("group","group_question","viewAll"),b=m(),h=d()(b,"group.maximum_membership_question")||0,_=g.split(".")[3],x=`${f}?${s.stringify((0,i.aZ)(v,{id:_}))}`,k=h<=(null===(t=c[x])||void 0===t?void 0:null===(o=t.ids)||void 0===o?void 0:o.length),w=()=>{l({type:"group/addNewMembershipQuestionForm",payload:{identity:g}})};return u.createElement(p,{onClick:w,variant:"text",disabled:e||k},n.formatMessage({id:"add"}))};t.default=m}}]);