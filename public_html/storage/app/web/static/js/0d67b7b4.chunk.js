"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-ui-Feed-apps-Music-FeedEmbedAlbumList"],{50292:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var r=a(67294),l=a(85597),i=a(77029),n=a(30120),o=a(22410),s=a(73327),m=a(75677);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}let d=(0,o.Z)(e=>(0,s.Z)({item:{display:"block"},itemOuter:{display:"flex",borderRadius:"8px",border:e.mixins.border("secondary"),backgroundColor:e.mixins.backgroundColor("paper"),overflow:"hidden"},title:{"& a":{color:e.palette.text.primary}},subInfo:{textTransform:"uppercase"},itemInner:{flex:1,minWidth:0,padding:e.spacing(2),display:"flex",flexDirection:"column"},wrapperInfoFlag:{marginTop:"auto"},flagWrapper:{marginLeft:"auto"},year:{color:e.palette.text.secondary}}),{name:"MuiFeedEmbedProductTemplate"}),p=e=>{let{title:t,maxLinesTitle:a=2,link:o,is_featured:s,year:p,statistic:u,displayStatistic:f="total_play"}=e,y=d(),{i18n:b}=(0,l.OgA)();return r.createElement(m.Z,c({},e,{playerOverlay:!0,playerOverlayProps:{size:"sm"}}),r.createElement("div",{className:y.itemInner},o?r.createElement(n.Z,{mb:1,fontWeight:"bold",className:y.title},r.createElement(l.rUS,{to:o},r.createElement(i.Ys,{variant:"h4",lines:a},t))):r.createElement(n.Z,{className:y.title,mb:1},r.createElement(i.Ys,{variant:"h4",lines:2},t)),p&&r.createElement(n.Z,{className:y.year,mb:1},b.formatMessage({id:"year"}),":",p),r.createElement(n.Z,{className:y.wrapperInfoFlag,display:"flex",justifyContent:"space-between",alignItems:"flex-end"},r.createElement(i.$k,{values:u,display:f,fontStyle:"minor"}),r.createElement("div",{className:y.flagWrapper},s&&r.createElement(i.WN,{type:"is_featured"})))))};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}let f=e=>r.createElement(p,u({},e,{variant:"list",widthImage:"200px",mediaRatio:"11"}));var y=f},75677:function(e,t,a){var r=a(77029),l=a(27274),i=a(22410),n=a(73327),o=a(86010),s=a(67294);let m=(0,i.Z)(e=>(0,n.Z)({item:{display:"block",marginBottom:e.spacing(2)},itemOuter:{display:"flex",borderRadius:"8px",border:e.mixins.border("secondary"),backgroundColor:e.mixins.backgroundColor("paper"),overflow:"hidden"},media:{width:e=>`${e.widthImage}`,height:e=>`${e.heightImage}`},grid:{"& $itemOuter":{flexDirection:"column","& $media":{width:"100%"}}},list:{"& $itemOuter":{flexDirection:"row",[e.breakpoints.down("xs")]:{flexDirection:"column","& $media":{width:"100%"}}}}}),{name:"MuiFeedEmbedCardBlock"}),c=e=>{let{image:t,widthImage:a="200px",heightImage:i="auto",mediaRatio:n="11",variant:c="list",children:d,link:p,playerOverlay:u=!1,playerOverlayProps:f={},host:y,resource_name:b}=e,g=m({widthImage:a,heightImage:i}),h=!0,x=(0,l.Mf)(t);return"blog"===b&&x&&(h=!1),s.createElement("div",{className:(0,o.default)(g.item,g[c])},s.createElement("div",{className:g.itemOuter},h&&t&&s.createElement("div",{className:g.media},s.createElement(r.Gy,{link:p,src:(0,l.Q4)(t),host:y,aspectRatio:n,playerOverlay:u,playerOverlayProps:f})),d))};t.Z=c}}]);