(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-core-blocks-PinListView-Connected"],{29750:function(e){e.exports=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=e>=t?e:t)),e}},87157:function(e,t,r){var n=r(40554),l=r(88958);e.exports=function(e,t,r,i){var a=e.length;for((r=n(r))<0&&(r=-r>a?0:a+r),(i=void 0===i||i>a?a:n(i))<0&&(i+=a),i=r>i?0:l(i);r<i;)e[r++]=t;return e}},19873:function(e,t,r){var n=r(87157),l=r(16612);e.exports=function(e,t,r,i){var a=null==e?0:e.length;return a?(r&&"number"!=typeof r&&l(e,t,r)&&(r=0,i=a),n(e,t,r,i)):[]}},3651:function(e,t,r){var n=r(42118),l=r(40554),i=Math.max;e.exports=function(e,t,r){var a=null==e?0:e.length;if(!a)return -1;var u=null==r?0:l(r);return u<0&&(u=i(a+u,0)),n(e,t,u)}},88958:function(e,t,r){var n=r(29750),l=r(40554);e.exports=function(e){return e?n(l(e),0,4294967295):0}},384:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var n=r(85597),l=r(21241),i=r(77029),a=r(27274),u=r(30120),o=r(35705),c=r(30030),s=r(19873),m=r.n(s),p=r(27361),f=r.n(p),d=r(3651),v=r.n(d),g=r(1469),h=r.n(g),E=r(53632),y=r.n(E),P=r(96026),w=r.n(P),x=r(67294),k=r(86706);let b=e=>{let{item:t,pushItem:r,order:l}=e,{jsxBackend:i}=(0,n.OgA)(),a=x.useRef(),u=i.get(t.component);return(x.useEffect(()=>{(null==a?void 0:a.current)&&r&&r(t,125,125,l)},[]),u)?x.createElement(c.ZP,{ref:a,item:!0,key:"itemAddPhotoAlbum",style:{width:"100%",paddingTop:0}},x.createElement(u,{size:"large"})):null},O=(e,t)=>{let{className:r,ItemView:n,spacing:l,itemProps:i,wrapAs:a,wrapProps:u}=e,[o,s]=x.useState([]),m=x.useRef();return x.useImperativeHandle(t,()=>{return{height:()=>{var e;return null===(e=m.current)||void 0===e?void 0:e.offsetHeight},addItem:e=>s(t=>t.concat(e))}},[]),x.createElement(c.ZP,{item:!0,ref:m,className:r},x.createElement(c.ZP,{container:!0,spacing:l},o.map(({identity:e,width:t,height:r},l)=>{return(null==e?void 0:e.component)?x.createElement(b,{item:e}):x.createElement(n,{identity:e,key:`${e}.c0`,width:t,height:r,itemProps:i,wrapAs:a,wrapProps:u})})))};var I=x.forwardRef(O),Z=r(22410),_=r(73327),j=(0,Z.Z)(e=>(0,_.Z)({root:{display:"flex",flexWrap:"wrap",alignItems:"flex-start"},column:{position:"relative",flexBasis:0,display:"flex",flexDirection:"column",minWidth:"200px",flexGrow:1}}),{name:"PinView"});function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let R={};var C=(0,n.h6e)(function({title:e,numColumns:t=4,numberOfItemsPerPage:r,displayLimit:s,pagingId:p,itemProps:d={},gridItemProps:g={},gridContainerProps:E,itemView:P,canLoadMore:O,canLoadSmooth:Z,loadMore:_,emptyPage:C="no_content",emptyPageProps:S,startItemView:N}){let V=j(),{jsxBackend:$}=(0,n.OgA)(),{loggedIn:z,user:U}=(0,n.kPO)(),W=(0,l.N6)(),D=null==W?void 0:W.identity;"user"===(null==W?void 0:W.resource_name)&&(null==W?void 0:W.profile_page)&&(null==W?void 0:W.album_id)&&(D=`photo.entities.photo_album.${W.album_id}`);let H=(0,n.z88)(D),B=$.get(P),G=$.get(`${P}.skeleton`),L=[];if(N){let M=(null==U?void 0:U.id)&&(null==W?void 0:W.id)&&U.id===parseInt(W.id);L=(0,a.W$)(N,{pageParams:W,authUser:U,loggedIn:z,isAuthUser:M,item:H}).map(({as:e,...t},r)=>({component:e,props:{key:r.toString(),...t}}))}let[Q,T]=x.useState(1),q=s||4,F=(0,k.v9)(e=>(0,n.Drc)(e,p))||(0,n.rjd)();(0,n.QP1)(O?()=>T(e=>e+1):void 0);let J=x.useRef(w()(0,t)),K=x.useRef(m()(w()(0,t),0)),X=x.useRef(m()(w()(0,t),[])),Y=x.useRef({}),[ee]=x.useState(w()(0,t).map(()=>x.createRef())),et=x.useCallback((e,t,r)=>{var n;let l=v()(K.current,y()(K.current));K.current[l]=K.current[l]+r/t,X.current[l].push({identity:e,width:t,height:r}),null===(n=ee[l].current)||void 0===n||n.addItem({identity:e,width:t,height:r})},[]);(null==F?void 0:F.ids)||(F.ids=[]);let er=O?F.ids.slice(0,Q*(r||20)):F.ids.slice(0,q||4),en=[...L,...er],{loading:el,refreshing:ei,error:ea,ended:eu,initialized:eo}=null!=F?F:{};x.useEffect(()=>{ei&&(Y.current={},K.current=m()(w()(0,t),0))},[ei]),d||(d={xs:12});let ec=(e,t,r,n)=>{Object.keys(Y.current).length!==(null==en?void 0:en.length)&&!(Object.keys(Y.current).length>(null==en?void 0:en.length))&&(Y.current[n]={identity:e,width:t,height:r},Object.keys(Y.current).length<(null==en?void 0:en.length)||Object.keys(Y.current).filter(e=>Y.current[e].width).forEach(e=>{let{identity:t,width:r,height:n}=Y.current[e];et(t,r,n)}))};if(x.useEffect(()=>{(eo&&O&&!el&&_&&!eu||ei)&&_()},[eo,ei]),!B)return null;if(ea){let es=f()(ea,"response.data.error")||f()(ea,"response.data.message"),em=403===f()(ea,"response.status")?"core.block.error403":"core.block.error404",ep=$.get(em);return x.createElement(ep,{title:es})}if(!eo)return G?x.createElement(l.gO,null,x.createElement(l.ti,{title:e}),x.createElement(l.sU,null,x.createElement(c.ZP,A({container:!0},E),w()(1,q).map(e=>x.createElement(G,{wrapAs:c.ZP,wrapProps:g,itemProps:d,key:e.toString()}))))):x.createElement(u.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"}},x.createElement(o.Z,{size:30}));if(!er.length&&eu){if("hide"===C)return null;let ef=$.get(C),{noBlock:ed}=S||{};return ed?x.createElement(ef,A({},S)):x.createElement(l.gO,null,x.createElement(l.ti,{title:e}),x.createElement(l.sU,null,x.createElement(ef,A({},S))))}let ev=null==E?void 0:E.spacing;return x.createElement(l.gO,null,x.createElement(l.ti,{title:e}),x.createElement(l.sU,null,x.createElement(c.ZP,{container:!0,spacing:ev,className:V.root},h()(J.current)&&J.current.map(e=>x.createElement(I,{spacing:ev,startItemViews:L,indexColumn:e,wrapAs:i.P4,wrapProps:R,ItemView:B,itemProps:d,ref:ee[e],key:e.toString(),className:V.column}))),x.createElement("div",{className:"srOnly"},h()(en)&&en.map((e,t)=>{return(null==e?void 0:e.component)?x.createElement(b,{order:t,item:e,pushItem:ec}):x.createElement(B,{identity:e,key:t,order:t,pushItem:ec,wrapAs:i.P4,wrapProps:R,itemProps:d})}))))})}}]);