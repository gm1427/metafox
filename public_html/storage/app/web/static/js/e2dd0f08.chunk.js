"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["pages.photo"],{91896:function(a,e,o){o.r(e);var t=o(85597);e.default=(0,t.al0)({appName:"photo",pageName:"photo_album.browse",resourceName:"photo_album",categoryName:"photo_category",paramCreator:a=>({tab:`${a.tab}_albums`})})},96998:function(a,e,o){o.r(e);var t=o(85597);e.default=(0,t.al0)({appName:"photo",pageName:"photo.browse",resourceName:"photo",categoryName:"photo_category",paramCreator:a=>{var e,o;return{tab:null===(e=a.tab)||void 0===e?void 0:e.replace(/-/g,"_"),view:null===(o=a.tab)||void 0===o?void 0:o.replace(/-/g,"_")}}})},11341:function(a,e,o){o.r(e);var t=o(85597);e.default=(0,t.zs4)({appName:"photo",resourceName:"photo_album",pageName:"photo_album.edit"})},20719:function(a,e,o){o.r(e);var t=o(85597);e.default=(0,t.zs4)({appName:"photo",resourceName:"photo",pageName:"photo.edit"})},68786:function(a,e,o){o.r(e);var t=o(85597);e.default=(0,t.oks)({appName:"photo",pageName:"photo.home",resourceName:"photo"})},121:function(a,e,o){o.r(e);var t=o(85597);e.default=(0,t.oks)({appName:"photo",pageName:"photo.my",resourceName:"photo",defaultTab:"my",loginRequired:!0})},3910:function(a,e,o){o.r(e);var t=o(85597);e.default=(0,t.nd)({appName:"photo",pageName:"photo_album.search",resourceName:"photo_album",categoryName:"photo_category",paramCreator:a=>({tab:`${a.tab}_albums`})})},58484:function(a,e,o){o.r(e);var t=o(85597);e.default=(0,t.nd)({appName:"photo",pageName:"photo.search",resourceName:"photo",categoryName:"photo_category"})},5953:function(a,e,o){o.r(e);var t=o(85597);e.default=(0,t.oFY)({appName:"photo",resourceName:"photo_album",pageName:"photo_album.view"})},74466:function(a,e,o){o.r(e),o.d(e,{default:function(){return i}});var t=o(85597),r=o(21241),p=o(89773),m=o(27361),l=o.n(m),u=o(67294),n=o(96974);function i(a){let{createPageParams:e,createContentParams:o,useGetItem:m,dispatch:i,jsxBackend:s}=(0,t.OgA)(),c=(0,t.oHF)(p.T7,p.Sm,"viewAll"),h=(0,n.s0)(),d=(0,n.TH)(),[N,g]=u.useState(0),[f,v]=u.useState(!0),b=u.useCallback(a=>{g(a),v(!1)},[]),_=u.useCallback(()=>{v(!1)},[]),y=e(a,a=>({appName:p.T7,resourceName:p.Sm,tab:"landing",pageMetaName:`${p.T7}.${p.Sm}.landing`,_pageType:"browseItem"})),T=m(`${null==y?void 0:y.appName}.entities.${null==y?void 0:y.resourceName}.${null==y?void 0:y.photo_id}`),w=m(null==T?void 0:T.album);u.useEffect(()=>{(null==y?void 0:y.photo_id)&&f&&i((0,t.RR$)("/photo/:id",{id:null==y?void 0:y.photo_id},_,b))},[]);let $=o({mainListing:{canLoadMore:!0,contentType:p.Sm,title:null==y?void 0:y.heading,dataSource:{apiUrl:null==c?void 0:c.apiUrl,apiRules:null==c?void 0:c.apiRules,apiParams:{...null==c?void 0:c.apiParams,...y}}}});if(u.useEffect(()=>{if(f&&T&&!N){let a={pathname:d.pathname},e={asModal:!0,loadedDetail:!0,modalCloseTo:w?{pathname:`/photo/album/${w.id}`}:{pathname:"/photo"}};setImmediate(()=>{h(a,{state:e,replace:!0})})}},[T,f,N]),N){let k=l()(N,"response.data.error")||l()(N,"response.data.message"),C=403===l()(N,"response.status")?"core.error403":"core.error404";return u.createElement(r.T3,{pageName:C,pageParams:{title:k,variant:"h2"}})}return f?s.render({component:"Loading"}):u.createElement(r.T3,{pageName:w?"photo_album.view":"photo.home",pageParams:y,contentParams:$})}}}]);