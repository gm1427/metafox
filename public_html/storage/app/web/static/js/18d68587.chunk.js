"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-user-blocks-MFAVerify-Block"],{85667:function(e,t,a){a.r(t);var r=a(84635),n=a(85597),o=a(21241),c=a(90738),u=a(67294);t.default=(0,n.j4Z)({extendBlock:function({title:e}){let{localStore:t,jsxBackend:a}=(0,n.OgA)(),l=(0,n.oHF)("mfa","user_auth","authForm"),i=t.get(c.ub),s=a.get("core.block.error404");return(u.useEffect(()=>{return()=>{t.remove(c.ub)}},[]),i&&l)?u.createElement(o.gO,{testid:"blockMFA"},u.createElement(o.sU,null,u.createElement(r.AO,{dataSource:{...l,apiParams:{...l.apiParams,mfa_token:i}},navigationConfirmWhenDirty:!1}))):u.createElement(s)},defaults:{title:"authentication",blockLayout:"Resend Email - Contained"}})}}]);