"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-music-components-PlaylistItem-EmbedCard-index"],{57987:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(77216),l=a(85597),i=a(16473),r=a(30120),o=a(81719),m=a(27274),s=a(67294);let c=(0,o.ZP)("span",{slot:"flagWrapper"})(({theme:e})=>({marginLeft:"auto","& > .MuiFlag-root":{marginLeft:e.spacing(2.5)}})),p=(0,o.ZP)("div",{slot:"ItemInner"})(({theme:e})=>({flex:1,minWidth:0,padding:e.spacing(3),display:"flex",flexDirection:"column"})),u=(0,o.ZP)(r.Z,{slot:"WrapperInfoFlag"})(({theme:e})=>({display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginTop:"auto"})),d=(0,o.ZP)(r.Z,{slot:"Title"})(({theme:e})=>({marginBottom:e.spacing(1),fontWeight:"bold","& a":{color:e.palette.text.primary}})),f=({item:e,variant:t="list"})=>{let{assetUrl:a}=(0,l.OgA)();return e?s.createElement(i.gu,{variant:t,bottomSpacing:"normal"},s.createElement(i.nF,{image:(0,m.Q4)(e.image,"240",a("music.playlist_no_image")),widthImage:"200px"}),s.createElement(p,null,s.createElement(d,null,s.createElement(l.rUS,{to:e.link},s.createElement(i.Ys,{variant:"h4",lines:2},e.name))),s.createElement(r.Z,{mb:1},s.createElement(i.$k,{values:e.statistic,display:"total_song",fontStyle:"minor",skipZero:!1})),e.description?s.createElement(i.Ys,{variant:"body1",lines:2,component:"div",sx:{mb:2,color:"text.secondary"}},s.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}})):null,s.createElement(u,null,s.createElement(i.$k,{values:e.statistic,display:"total_play",fontStyle:"minor",skipZero:!1}),s.createElement(c,null,s.createElement(i.K6,{variant:"text",value:e.is_featured,color:"primary"}))))):null};var g=(0,n.Y)(f,n.c)}}]);