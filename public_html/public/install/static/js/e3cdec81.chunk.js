"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-admincp-blocks-AdminDetailDataListing-Block"],{45464:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(85597),l=a(21241),r=a(30120),c=a(67294),i=a(91647);function m({data:e}){let{jsxBackend:t}=(0,n.OgA)(),{label:a,type:l,value:m}=e||{},u=`dataListing.value.${l||"default"}`;return m?c.createElement(r.Z,{mb:1},c.createElement(r.Z,{sx:{display:"flex"}},c.createElement(r.Z,{mr:1},c.createElement(i.Z,{variant:"body1",fontWeight:600},a,":")),c.createElement(i.Z,{variant:"body1"},t.render({component:u,props:{...e}})))):null}var u=(0,n.j4Z)({extendBlock:function({blockProps:e,title:t}){let{useFetchDetail:a,usePageParams:i,BlockLoading:u}=(0,n.OgA)(),{dataGridProps:s,id:o}=i(),{appName:d,resourceName:f,getListingActionName:g}=Object.assign({},s),E=(0,n.oHF)(d,f,g),[p,k,b]=a({dataSource:E,data:[],allowRiskParams:!1,pageParams:{id:o}});return E?k||b?c.createElement(l.gO,null,c.createElement(l.sU,{style:{minHeight:"60vh"}},k||b?c.createElement(u,{loading:k,error:b}):null)):p&&p.length?c.createElement(l.gO,null,c.createElement(l.sU,null,c.createElement(r.Z,null,p.map((e,t)=>c.createElement(m,{key:`i${t}`,data:e}))))):null:null},defaults:{title:"Data Listing"}})}}]);