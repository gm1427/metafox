"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-marketplace-components-AddMarketplaceButton-Base"],{74109:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(85597),r=a(21241),l=a(30120),c=a(21822),i=a(41609),d=a.n(i),o=a(67294);function u({blockProps:e={variant:"contained"}}){let{useSession:t,i18n:a,dispatch:i,usePageParams:u}=(0,n.OgA)(),{user:s}=t(),f=u();if(d()(s))return null;let m=()=>{i({type:"addNewListing",payload:{identity:f.identity}})};return o.createElement(r.gO,null,o.createElement(r.sU,null,o.createElement(l.Z,{display:"flex",flexDirection:"row"},o.createElement(c.Z,{color:"primary",onClick:m,"data-testid":"addMarketplace"},a.formatMessage({id:"add_marketplace"})))))}}}]);