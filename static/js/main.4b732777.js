(()=>{"use strict";var e={1953:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Q});var o=n(2010),a=n(885),i=n(6459),r=n(5004),s=n(9385),l=n(3287),u=n(1054),d=n(5326),c=n(6184),f=n(3719),p=n(258),h=n(5277),g=n(763),m=n(694),x=n(5264),v=n(6906),y=n(1208),b=n(6808),w=n(2629),j={code:"function anonymous(){const{interpolate,offset,Extrapolate}=this._closure;return{transform:[{scale:interpolate(offset.value,[0,1],[1,1.1],Extrapolate.CLAMP)}]};}",location:"/Users/austinreeve/Documents/Projects/austin/austin-reeve-dot-com/components/AppIcon/index.tsx"},E={code:'function anonymous(){const{interpolate,rotation,Extrapolate}=this._closure;return{transform:[{rotateZ:interpolate(rotation.value,[0,0.5,1],[Math.floor(Math.random()*-2)-1,0,Math.floor(Math.random()*2)+1],Extrapolate.CLAMP)+"deg"},{scale:interpolate(rotation.value,[0,0.5,1],[1.01,1,1.01],Extrapolate.CLAMP)}]};}',location:"/Users/austinreeve/Documents/Projects/austin/austin-reeve-dot-com/components/AppIcon/index.tsx"},C={code:"function anonymous(){const{interpolate,minusOffset,Extrapolate}=this._closure;return{transform:[{scale:interpolate(minusOffset.value,[0,1],[0,1],Extrapolate.CLAMP)}],opacity:interpolate(minusOffset.value,[0,0.9],[0,0.9],Extrapolate.CLAMP)};}",location:"/Users/austinreeve/Documents/Projects/austin/austin-reeve-dot-com/components/AppIcon/index.tsx"};const M=function(e){var t=e.name,n=e.onPress,o=void 0===n?function(){}:n,a=e.image,i=e.onHoverIn,s=void 0===i?function(){}:i,M=e.onHoverOut,_=void 0===M?function(){}:M,k=e.isEditMode,S=void 0!==k&&k,A=e.setEditMode,P=void 0===A?function(){}:A,T=e.hideName,L=void 0!==T&&T,R=(0,c.useSharedValue)(0),I=(0,c.useSharedValue)(.5),z=(0,c.useSharedValue)(0),H=function(){R.value=(0,f.withTiming)(1,{duration:100,easing:p.Easing.inOut(p.Easing.ease)}),s&&s()},B=function(){R.value=(0,f.withTiming)(0,{duration:100,easing:p.Easing.inOut(p.Easing.ease)}),_&&_()};(0,r.useEffect)((function(){S?(z.value=(0,f.withTiming)(1,{duration:300,easing:p.Easing.inOut(p.Easing.ease)}),I.value=(0,h.withSequence)((0,f.withTiming)(0,{duration:Math.floor(20*Math.random())+120,easing:p.Easing.inOut(p.Easing.ease)}),(0,g.withRepeat)((0,f.withTiming)(1,{duration:Math.floor(20*Math.random())+120,easing:p.Easing.inOut(p.Easing.ease)}),-1,!0))):(z.value=(0,f.withTiming)(0,{duration:100,easing:p.Easing.inOut(p.Easing.ease)}),I.value=(0,f.withTiming)(.5,{duration:100,easing:p.Easing.inOut(p.Easing.ease)}))}),[S]);var D=(0,m.useAnimatedStyle)(function(){var e=function(){return{transform:[{scale:(0,x.interpolate)(R.value,[0,1],[1,1.1],v.Extrapolate.CLAMP)}]}};return e._closure={interpolate:x.interpolate,offset:R,Extrapolate:v.Extrapolate},e.__initData=j,e.__workletHash=0xeb1192872fa,e}()),U=(0,m.useAnimatedStyle)(function(){var e=function(){return{transform:[{rotateZ:`${(0,x.interpolate)(I.value,[0,.5,1],[Math.floor(-2*Math.random())-1,0,Math.floor(2*Math.random())+1],v.Extrapolate.CLAMP)}deg`},{scale:(0,x.interpolate)(I.value,[0,.5,1],[1.01,1,1.01],v.Extrapolate.CLAMP)}]}};return e._closure={interpolate:x.interpolate,rotation:I,Extrapolate:v.Extrapolate},e.__initData=E,e.__workletHash=5776898937807,e}()),N=(0,m.useAnimatedStyle)(function(){var e=function(){return{transform:[{scale:(0,x.interpolate)(z.value,[0,1],[0,1],v.Extrapolate.CLAMP)}],opacity:(0,x.interpolate)(z.value,[0,.9],[0,.9],v.Extrapolate.CLAMP)}};return e._closure={interpolate:x.interpolate,minusOffset:z,Extrapolate:v.Extrapolate},e.__initData=C,e.__workletHash=3681356310337,e}());return(0,w.jsxs)(y.default,{style:S?U:null,children:[(0,w.jsx)(d.default,{onLongPress:function(){P()},onHoverIn:function(){!S&&H()},onHoverOut:function(){!S&&B()},onPress:function(){return S?null:o()},children:(0,w.jsxs)(y.default,{style:[O.icon,D,{backgroundColor:a?null:"#fff"}],children:[a&&(0,w.jsx)(l.default,{style:O.image,source:a}),(0,w.jsx)(y.default,{style:[O.minus,N],children:(0,w.jsx)(b.default,{name:"minus",size:16,color:"black"})})]})}),!L&&(0,w.jsx)(u.default,{numberOfLines:1,style:O.name,children:t})]})};var O=o.default.create({icon:{width:40,height:40,borderRadius:10},name:{textAlign:"center",marginTop:5,fontSize:9,maxWidth:60,fontWeight:"bold",color:"#fff"},image:{height:40,width:40,borderRadius:10},minus:{position:"absolute",top:-6,left:-6,width:16,height:16,backgroundColor:"grey",borderRadius:8,justifyContent:"center",alignItems:"center",zIndex:1}}),_=n(5861),k=n(4504),S=n(5537);const A=function(e){(0,i.default)(e);var t=(0,r.useState)(0),n=(0,a.default)(t,2),o=n[0],l=n[1],u=(0,r.useState)(!1),d=(0,a.default)(u,2),c=d[0],f=d[1];return(0,r.useEffect)((function(){var e=function(){var e=(0,_.default)((function*(){var e=yield S.getBatteryLevelAsync();l(e>0?e:.8)}));return function(){return e.apply(this,arguments)}}(),t=function(){var e=(0,_.default)((function*(){var e=yield S.getBatteryStateAsync();f(e===S.BatteryState.CHARGING)}));return function(){return e.apply(this,arguments)}}(),n=S.addBatteryLevelListener((function(e){var t=e.batteryLevel;l(t>0?t:.8)})),o=S.addBatteryStateListener((function(e){var t=e.batteryState;f(t===S.BatteryState.CHARGING)}));return e(),t(),function(){n.remove(),o.remove()}}),[]),(0,w.jsxs)(s.default,{style:P.container,children:[(0,w.jsxs)(s.default,{style:P.body,children:[(0,w.jsx)(s.default,{style:[P.batteryFill,{width:14*o,backgroundColor:c?"#46eb34":o>=.2?"white":"red"}]}),c&&(0,w.jsxs)(s.default,{style:P.zapContainer,children:[(0,w.jsx)(k.default,{name:"md-flash",size:14,color:"#757575"}),(0,w.jsx)(s.default,{style:P.zapBackgroundOne,children:(0,w.jsx)(k.default,{name:"md-flash",size:14,color:"#757575"})}),(0,w.jsx)(s.default,{style:P.zapBackgroundTwo,children:(0,w.jsx)(k.default,{name:"md-flash",size:14,color:"#757575"})}),(0,w.jsx)(s.default,{style:P.zapBackgroundThree,children:(0,w.jsx)(k.default,{name:"md-flash",size:14,color:"#757575"})}),(0,w.jsx)(s.default,{style:P.zap,children:(0,w.jsx)(k.default,{name:"md-flash",size:12,color:"white"})})]})]}),(0,w.jsx)(s.default,{style:P.batteryTop})]})};var P=o.default.create({container:{flexDirection:"row",alignItems:"center",justifyContent:"center"},body:{height:9,width:18,borderRadius:2.5,borderWidth:1,borderColor:"rgba(255,255,255,0.6)"},batteryFill:{position:"absolute",left:1,top:1,height:5,borderRadius:1},batteryTop:{height:4,width:1,borderTopRightRadius:2,borderBottomRightRadius:2,backgroundColor:"rgba(255,255,255,0.6)",marginLeft:1,marginTop:1},zapContainer:{position:"absolute",left:1,top:-5},zapBackgroundOne:{position:"absolute",left:0,top:2},zapBackgroundTwo:{position:"absolute",left:-1,top:1},zapBackgroundThree:{position:"absolute",left:1,top:1},zap:{position:"absolute",left:1,top:1.5}}),T=n(4641),L=n(8990),R={code:"function anonymous(){const{offset,interpolate}=this._closure;return{opacity:offset.value,transform:[{scale:interpolate(offset.value,[0,1],[0.5,1])}]};}",location:"/Users/austinreeve/Documents/Projects/austin/austin-reeve-dot-com/components/NavBar/index.tsx"};const I=function(e){var t=e.isEditMode,n=void 0!==t&&t,o=e.editComplete,a=void 0===o?function(){}:o,i=(0,c.useSharedValue)(0),l=(new Date).toLocaleTimeString("en-US",{hour12:!0,hour:"2-digit",minute:"2-digit"}).replace(/ ?[AP]M$/,"").replace(/^0+/,"");(0,r.useEffect)((function(){i.value=n?(0,T.withDelay)(400,(0,f.withTiming)(1,{duration:100,easing:p.Easing.inOut(p.Easing.ease)})):0}),[n]);var h=(0,m.useAnimatedStyle)(function(){var e=function(){return{opacity:i.value,transform:[{scale:(0,x.interpolate)(i.value,[0,1],[.5,1])}]}};return e._closure={offset:i,interpolate:x.interpolate},e.__initData=R,e.__workletHash=0x9aee2cb5665,e}());return(0,w.jsxs)(s.default,{style:z.body,children:[(0,w.jsx)(s.default,{style:z.timeContainer,children:(0,w.jsx)(u.default,{style:z.time,children:l})}),(0,w.jsx)(s.default,{style:z.dynamicIsland}),(0,w.jsxs)(s.default,{style:z.statuses,children:[n&&(0,w.jsx)(y.default,{style:[h,z.doneContainer],children:(0,w.jsx)(L.default,{intensity:100,tint:"dark",style:z.doneButton,children:(0,w.jsx)(d.default,{onPress:function(){return a()},children:(0,w.jsx)(u.default,{style:z.doneButtonText,children:"Done"})})})}),(0,w.jsx)(b.default,{name:"wifi",size:14,color:"white"}),(0,w.jsx)(s.default,{style:{width:10}}),(0,w.jsx)(A,{})]})]})};var z=o.default.create({body:{paddingTop:14,flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",marginBottom:18},timeContainer:{width:90,paddingLeft:20,justifyContent:"center"},time:{marginTop:2,color:"white",fontSize:11,textAlign:"center",fontWeight:"600"},dynamicIsland:{height:24,marginTop:2,width:78,borderRadius:14,backgroundColor:"black"},statuses:{flexDirection:"row",alignItems:"center",justifyContent:"flex-end",paddingRight:40,width:90},batteryPercentage:{color:"white",fontSize:10},doneContainer:{position:"absolute",top:-2,left:4,zIndex:2},doneButton:{height:24,width:58,borderRadius:15,justifyContent:"center",alignItems:"center"},doneButtonText:{textAlign:"center",fontSize:12,marginTop:-1,fontWeight:"bold",color:"#fff"}}),H=n(7375),B=n(5722),D=n(6201),U=n(5667),N=n(6481),G=n(5313);const W=function(e){var t=e.setTitle,n=e.onHoverOut,o=e.setEditMode,a=e.editMode;return(0,w.jsx)(L.default,{tint:"dark",style:V.blur,children:(0,w.jsx)(s.default,{style:V.body,children:(0,w.jsxs)(s.default,{style:V.iconRow,children:[(0,w.jsx)(M,{name:"Contact",hideName:!0,onHoverIn:function(){t("Contact")},onHoverOut:n,setEditMode:function(){o(!a)},isEditMode:a,image:G,onPress:function(){!function(){var e=`mailto:austingenereeve@gmail.com?subject=${encodeURIComponent("Portfolio Reaching Out")}`;B.default.canOpenURL(e).then((function(t){if(t)return B.default.openURL(e);console.log("Can't handle url: "+e)})).catch((function(e){return console.error("An error occurred",e)}))}()}}),(0,w.jsx)(M,{name:"LinkedIn",hideName:!0,onHoverIn:function(){t("LinkedIn")},onHoverOut:n,setEditMode:function(){o(!a)},isEditMode:a,image:U,onPress:function(){B.default.openURL("https://www.linkedin.com/in/austin-reeve-12a301a0/")}}),(0,w.jsx)(M,{name:"Github",hideName:!0,onHoverIn:function(){t("Github")},onHoverOut:n,setEditMode:function(){o(!a)},isEditMode:a,image:D,onPress:function(){B.default.openURL("https://github.com/austinGENEreeve")}}),(0,w.jsx)(M,{name:"X",hideName:!0,onHoverIn:function(){t("X")},onHoverOut:n,setEditMode:function(){o(!a)},isEditMode:a,image:N,onPress:function(){B.default.openURL("https://twitter.com/austinGENEreeve")}})]})})})};var V=o.default.create({blur:{margin:20,borderRadius:20},body:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",marginBottom:10},iconRow:{flexDirection:"row",width:"100%",justifyContent:"space-between",paddingHorizontal:14,marginTop:10}}),X={code:"function anonymous(){const{interpolate,offset,Extrapolate}=this._closure;return{opacity:interpolate(offset.value,[0,1],[0,1],Extrapolate.CLAMP),transform:[{translateX:interpolate(offset.value,[0,1],[-100,0],Extrapolate.CLAMP)}]};}",location:"/Users/austinreeve/Documents/Projects/austin/austin-reeve-dot-com/components/Title/index.tsx"};const F=function(e){var t=e.title,n=(0,c.useSharedValue)(0);(0,r.useEffect)((function(){n.value=0,n.value=(0,f.withTiming)(1,{duration:400,easing:p.Easing.inOut(p.Easing.ease)})}),[t]);var o=(0,m.useAnimatedStyle)(function(){var e=function(){return{opacity:(0,x.interpolate)(n.value,[0,1],[0,1],v.Extrapolate.CLAMP),transform:[{translateX:(0,x.interpolate)(n.value,[0,1],[-100,0],v.Extrapolate.CLAMP)}]}};return e._closure={interpolate:x.interpolate,offset:n,Extrapolate:v.Extrapolate},e.__initData=X,e.__workletHash=0xd9e3029c906,e}());return(0,w.jsx)(y.default,{style:[$.body,o],children:(0,w.jsx)(u.default,{style:$.title,children:t})})};var $=o.default.create({body:{justifyContent:"flex-start",alignItems:"flex-start"},title:{fontSize:50,fontWeight:"bold",color:"#000",textAlign:"left"}}),Z=n(5954),q=n(8501);const J=function(e){(0,i.default)(e);var t=(0,r.useState)("Austin Reeve"),n=(0,a.default)(t,2),o=n[0],u=n[1],d=(0,r.useState)(null),c=(0,a.default)(d,2),f=(c[0],c[1]),p=(0,r.useState)(!1),h=(0,a.default)(p,2),g=h[0],m=h[1],x=function(){u("Austin Reeve"),f(null)};return(0,w.jsxs)(s.default,{style:K.body,children:[(0,w.jsx)(H.LinearGradient,{colors:["transparent","rgba(0,0,0,0.1)"],style:K.background}),(0,w.jsxs)(s.default,{style:K.row,children:[(0,w.jsx)(s.default,{style:K.left,children:(0,w.jsxs)(s.default,{style:K.phoneBackground,children:[(0,w.jsx)(l.default,{resizeMode:"cover",style:K.phoneScreen,source:Z}),(0,w.jsx)(I,{isEditMode:g,editComplete:function(){m(!1)}}),(0,w.jsx)(s.default,{style:K.iconRow,children:(0,w.jsx)(M,{name:"Marble",onHoverIn:function(){u("Marble"),f(q)},onHoverOut:x,image:q,setEditMode:function(){m(!g)},isEditMode:g})}),(0,w.jsx)(s.default,{style:K.doc,children:(0,w.jsx)(W,{setTitle:function(e){u(e)},onHoverOut:function(){return x()},setEditMode:function(){m(!g)},editMode:g})})]})}),(0,w.jsx)(s.default,{style:K.right,children:(0,w.jsx)(F,{title:o})})]})]})};var K=o.default.create({body:{justifyContent:"center",alignItems:"center",width:"100%",backgroundColor:"#fff"},background:{position:"absolute",top:0,height:"100%",width:"100%"},row:{flexDirection:"row",width:"100%",justifyContent:"space-between",paddingHorizontal:100},left:{width:"50%",flex:1,justifyContent:"center",alignItems:"center"},right:{width:"50%",flex:1},phoneBackground:{height:600,width:280,backgroundColor:"#000",borderRadius:40,borderCurve:"continuous",overflow:"hidden",alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:10},shadowOpacity:.4,shadowRadius:18},phoneScreen:{position:"absolute",top:10,height:580,width:260,borderRadius:30,borderCurve:"continuous",overflow:"hidden"},iconRow:{flexDirection:"row",width:"100%",justifyContent:"space-between",paddingHorizontal:28,marginTop:10},doc:{position:"absolute",bottom:0,width:"100%"}});function Q(){return(0,w.jsx)(J,{})}o.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},6201:(e,t,n)=>{e.exports=n.p+"static/media/github_icon.ec336bec1f5baf790bcb.png"},5954:(e,t,n)=>{e.exports=n.p+"static/media/iosBackground.d51671912345b4acc6b1.jpeg"},5667:(e,t,n)=>{e.exports=n.p+"static/media/linkedin_icon.b6fe5de3515687849a75.png"},5313:(e,t,n)=>{e.exports=n.p+"static/media/mail_icon.777ac29a191a82048eb7.png"},8501:(e,t,n)=>{e.exports=n.p+"static/media/marble_icon.25553f73437e1d1b0686.png"},6481:(e,t,n)=>{e.exports=n.p+"static/media/x_icon.98171861e5dcf55f4ada.png"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,(()=>{var e=[];n.O=(t,o,a,i)=>{if(!o){var r=1/0;for(d=0;d<e.length;d++){for(var[o,a,i]=e[d],s=!0,l=0;l<o.length;l++)(!1&i||r>=i)&&Object.keys(n.O).every((e=>n.O[e](o[l])))?o.splice(l--,1):(s=!1,i<r&&(r=i));if(s){e.splice(d--,1);var u=a();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,a,i]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/expo-gh-pages/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var a,i,[r,s,l]=o,u=0;if(r.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var d=l(n)}for(t&&t(o);u<r.length;u++)i=r[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[538],(()=>n(6271)));o=n.O(o)})();
//# sourceMappingURL=main.4b732777.js.map