"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-livestreaming-components-LiveVideoPlayer"],{80711:function(e,t,i){i.r(t);var l=i(85597),n=i(67294),o=i(30120),a=i(81719),d=i(21822),r=i(27274),s=i(69452),u=i(77029);let m=(0,a.ZP)(o.Z,{name:"EndPlayer",shouldForwardProp:e=>"dialog"!==e})(({theme:e,dialog:t})=>({position:"relative",backgroundColor:"#333",color:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"24px",...t&&{width:"100%",height:"100%"},"&:before":{content:'""',display:"block",paddingBottom:"56.25%"}})),c=(0,a.ZP)(o.Z,{name:"EndPlayer",shouldForwardProp:e=>"dialog"!==e})(({theme:e})=>({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"absolute",top:0,left:0,right:0,bottom:0})),f=(0,a.ZP)(o.Z)(({theme:e})=>({display:"flex",justifyContent:"center",alignItems:"center","& > *":{marginRight:`${e.spacing(1)} !important`}}));t.default=function({item:e,dialog:t,actions:i,dashboard:o}){let{firebaseBackend:a,i18n:v,dialogBackend:_,moment:g}=(0,l.OgA)(),p=a.getFirestore(),b=(0,l.zjB)(p,{collection:"live_video",docID:null==e?void 0:e.stream_key}),h=n.useCallback(()=>{i.deleteItem()},[]),{video_url:x,thumbnail_url:y,is_owner:E,is_streaming:k}=e||{},w=(null==b?void 0:b.status)==="idle"||!k,P=k&&E&&o&&(null==b?void 0:b.time_limit_warning),Z=(null==b?void 0:b.end_date)?g(null==b?void 0:b.end_date).diff(new Date,"minutes"):"";if(n.useEffect(()=>{w&&i&&i.updateStatusOffline()},[w,i]),n.useEffect(()=>{P&&Z>0&&_.alert({title:v.formatMessage({id:"timeout"}),message:v.formatMessage({id:"the_live_video_will_end_in_n_minutes"},{value:Z})})},[P,Z]),!e)return null;let C=(0,r.Q4)(y,"500","");return w?n.createElement(m,{dialog:t},n.createElement(c,null,n.createElement(u.zb,{icon:"ico-video",sx:{fontSize:40,mb:2}}),v.formatMessage({id:E?"your_live_video_has_ended":"live_video_had_ended"}),E?n.createElement(f,{mt:2},n.createElement(d.Z,{"data-testid":"buttonDeleteLiveVideo",role:"button",tabIndex:1,autoFocus:!0,variant:"contained",disableRipple:!0,size:"medium",color:"error",onClick:h,sx:{minWidth:100}},v.formatMessage({id:"delete"})),n.createElement(d.Z,{"data-testid":"buttonViewLiveVideo",role:"button",tabIndex:2,variant:"contained",disableRipple:!0,size:"medium",color:"primary",href:e.link||`/live-video/${null==e?void 0:e.id}`,sx:{minWidth:100}},v.formatMessage({id:"view"}))):null)):n.createElement(s.Z,{src:x,thumb_url:C,autoPlay:!0})}}}]);