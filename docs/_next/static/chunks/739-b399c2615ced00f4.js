(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[739],{75713:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(95183),o=n(17082);async function i(){let e=await fetch("https://datastore.itcode.dev/itcode/video");if(e.ok)return await e.json();throw e}var a=n(48526),s=n(64517),l=n(87520),u=n.n(l),c=n(53244),h=n(13548),d=n.n(h);let _=u().bind(d());function f(e){let{width:t="100%",height:n="100dvh",src:l,children:u}=e,[h,d]=(0,c.useState)(!1),{data:f=[]}=(0,o.useQuery)({queryFn:i,queryKey:["useGetScreenerList"]}),g=(0,c.useMemo)(()=>f[(0,a.sZ)(f)],[f]),p=(0,c.useCallback)(()=>{d(!0)},[d]);return(0,c.useEffect)(()=>{l&&d(!0)},[l]),(0,r.jsxs)(s.Z,{className:_("screener"),"data-component":"Screener",height:n,position:"relative",width:t,children:[(0,r.jsx)(s.Z,{bgcolor:"#00000088",className:_("dimmer",{loading:!h}),height:"100%",left:0,position:"absolute",top:0,width:"100%",zIndex:1,children:u}),(0,r.jsx)(s.Z,{className:_("media"),height:"100%",left:0,position:"absolute",top:0,width:"100%",children:l?(0,r.jsx)("img",{alt:"screener",className:_("cover"),height:"100%",src:l,width:"100%"}):(0,r.jsx)("video",{className:_("cover"),controls:!1,height:"100%",src:g,width:"100%",autoPlay:!0,loop:!0,muted:!0,onCanPlay:p})})]})}},4870:function(e,t,n){"use strict";n.d(t,{default:function(){return D}});var r=n(95183),o=n(36880),i=n(48526),a=n(64517),s=n(44214),l=n(53244),u=n(72404),c=n(89323),h=n(59570),d=n(95164),_=n(87520),f=n.n(_),g=n(42034),p=n(53520),m=n.n(p);let x=f().bind(m());var v=function(e){let{theme:t,logo:n,title:o,isTransparent:s,onMenuClick:l,position:_="fixed",...f}=e,p=(e,n,r)=>s?e:"dark"===t?r:n;return(0,r.jsx)(a.Z,{bgcolor:p("transparent","#FFFFFF70","#12121270"),boxShadow:p(void 0,"0px 0px 5px ".concat(i.O9.shadow.default),"0px 0px 5px ".concat(i.O9.shadow.default)),className:x("header",{transparent:s}),component:"header","data-component":"Header",left:0,padding:.5,position:_,top:0,width:"100%",zIndex:1e4,...f,children:(0,r.jsxs)(h.Z,{alignItems:"center",color:p("white",void 0,void 0),direction:"row",gap:2,height:"100%",width:"100%",children:[l?(0,r.jsx)(c.Z,{color:"inherit",onClick:l,children:(0,r.jsx)(u.Z,{htmlColor:"inherit"})}):null,(0,r.jsx)(g.default,{href:"/",children:(0,r.jsxs)(h.Z,{alignItems:"center",direction:"row",gap:2,children:[(0,r.jsx)("img",{alt:o,height:24,src:n,width:24}),(0,r.jsx)(d.Z,{className:x("title"),children:o})]})})]})})},y=n(18975),S=n(29510),j=n(14453),k=n(61023),w=n(93318),b=n(68544),Z=n(96429),N=function(e){let{title:t,logo:n,version:o,items:i,currentUrl:a,paddingTop:s,...l}=e,u=e=>"/"===e?a===e:(null==a?void 0:a.startsWith(e))||!1;return(0,r.jsx)(y.ZP,{"data-component":"Sidebar",...l,children:(0,r.jsxs)(h.Z,{height:"100%",justifyContent:"space-between",marginTop:s,minWidth:250,paddingBottom:4,children:[(0,r.jsx)(S.Z,{children:null==i?void 0:i.map(e=>{let{icon:t,title:n,url:o}=e;return(0,r.jsx)(j.ZP,{children:(0,r.jsx)(g.default,{className:"w-full",href:o,children:(0,r.jsxs)(k.Z,{selected:u(o),children:[(0,r.jsx)(w.Z,{color:"inherit",children:t}),(0,r.jsx)(b.Z,{color:"inherit",primary:n})]})})},n)})}),(0,r.jsxs)(h.Z,{alignItems:"center",children:[(0,r.jsxs)(h.Z,{alignItems:"center",direction:"row",gap:1,children:[n?(0,r.jsx)(Z.Z,{alt:n,height:20,src:n,width:20}):null,t?(0,r.jsx)(d.Z,{variant:"caption",children:t}):null]}),o?(0,r.jsx)(d.Z,{color:"GrayText",variant:"caption",children:o}):null]})]})})},O=function(e){let{theme:t,logo:n,title:o,position:u,version:c,items:h}=e,d=(0,s.usePathname)(),[_,f]=(0,l.useState)(!0),[g,p]=(0,l.useState)(!1),[m,x]=(0,l.useState)(null),[y,S]=(0,l.useState)(),j=(0,l.useCallback)(()=>{p(e=>!e)},[]),k=(0,l.useCallback)(()=>{p(!1)},[]);return(0,i.yU)("#header",e=>S(e.borderBoxSize[0].blockSize)),(0,i.S1)(m,e=>f(e.isIntersecting)),(0,r.jsxs)(a.Z,{"data-component":"Navigation",ref:x,children:[(0,r.jsx)(v,{id:"header",isTransparent:_&&!g,logo:n,position:u,theme:t,title:o,onMenuClick:h?j:void 0}),h?(0,r.jsx)(N,{currentUrl:d,items:h,logo:n,open:g,paddingTop:"".concat(y,"px"),title:o,version:c,onClose:k}):null]})},F=n(91417),I=n(97667),M=n(32652);let C=[{icon:(0,r.jsx)(M.Z,{}),title:"홈",url:"/"},{icon:(0,r.jsx)(F.default,{}),title:"프로젝트",url:"/projects"},{icon:(0,r.jsx)(I.Z,{}),title:"방명록",url:"/guestbook"}];function D(e){let{...t}=e,{themeState:n}=(0,o.NX)();return(0,r.jsx)(O,{items:C,logo:"/logo.png",theme:n,...t})}},933:function(e,t,n){"use strict";n.r(t),n.d(t,{useIntersectionObserver:function(){return a},useMutationObserver:function(){return o},useResizeObserver:function(){return i}});var r=n(53244);function o(e,t,n){(0,r.useEffect)(()=>{let r=new MutationObserver(e=>{e.forEach(t)});if(e){if("string"==typeof e){let t=document.querySelector(e);t&&r.observe(t,n)}else r.observe(e,n)}return()=>{r.disconnect()}},[e,t,n])}function i(e,t,n){(0,r.useEffect)(()=>{let r=new ResizeObserver(e=>{e.forEach(t)});if(e){if("string"==typeof e){let t=document.querySelector(e);t&&r.observe(t,n)}else r.observe(e,n)}return()=>{r.disconnect()}},[e,t,n])}function a(e,t,n){(0,r.useEffect)(()=>{let r=new IntersectionObserver(e=>{e.forEach(t)},n);if(e){if("string"==typeof e){let t=document.querySelector(e);t&&r.observe(t)}else r.observe(e)}return()=>{r.disconnect()}},[e,t,n])}},48526:function(e,t,n){"use strict";n.d(t,{v:function(){return l},O9:function(){return u},R1:function(){return _},sZ:function(){return c},ir:function(){return f},$W:function(){return g},wh:function(){return o()},l8:function(){return d},GM:function(){return a()},S1:function(){return s.useIntersectionObserver},yU:function(){return s.useResizeObserver}});var r=n(29287),o=n.n(r),i=n(34262),a=n.n(i),s=n(933);let l={email:"psj2716@gmail.com",nickname:"RWB",social:{github:{link:"https://github.com/RWB0104",name:"Kapoo"},linkedin:{link:"https://www.linkedin.com/in/itcode",name:"RWB"}}},u={shadow:{default:"#00000050"}};function c(e){return Math.floor(Math.random()*(e.length-1))}function h(e,t){let n=t-"".concat(Math.floor(e)).length;return n>0?"".concat("0".repeat(n)).concat(e):"".concat(e)}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,n=new Date(e||Date.now()),r=-t-n.getTimezoneOffset()/60,o=new Date(n.getTime()-36e5*r),i=o.getMonth()+1;return{date:{text:h(o.getDate(),2),value:o.getDate()},hour:{text:h(o.getHours(),2),value:o.getHours()},minute:{text:h(o.getMinutes(),2),value:o.getMinutes()},month:{text:h(i,2),value:i},rawDate:o,second:{text:h(o.getSeconds(),2),value:o.getSeconds()},timestamp:o.getTime(),weekday:{text:["일","월","화","수","목","금","토","일"][o.getDay()],value:o.getDay()},year:{text:"".concat(o.getFullYear()),value:o.getFullYear()}}}function _(e,t,n){navigator.clipboard?(navigator.clipboard.writeText(e),null==t||t(e)):null==n||n(e)}function f(e,t){let n=t||0;return Math.round(e*10**n)/10**n}function g(e,t){let n=e%t;return n<0&&(n+=t),n}},36880:function(e,t,n){"use strict";n.d(t,{NX:function(){return o}});var r=n(66581);let o=(0,r.Ue)(e=>({setThemeState:t=>{localStorage.setItem("theme",t),e({themeState:t})},themeState:"dark",toggleThemeState:()=>{e(e=>{let{themeState:t}=e,n="light"===t?"dark":"light";return localStorage.setItem("theme",n),{themeState:n}})}}));(0,r.Ue)(e=>({setRefererState:t=>{e({refererState:t})}})),(0,r.Ue)(e=>({editorState:{preview:!0,wrap:!0},setEditorState:t=>{e(t)}}))},69302:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(95183),o=n(87520),i=n.n(o),a=n(98535),s=n.n(a);let l=i().bind(s());var u=function(e){let{fillColor:t,disabledAnimation:n,width:o="100%",height:i=40,className:a,...s}=e;return(0,r.jsxs)("svg",{className:l("waves",a),"data-component":"Wave",height:i,preserveAspectRatio:"none",shapeRendering:"auto",viewBox:"0 24 150 28",width:o,xmlns:"http://www.w3.org/2000/svg",...s,children:[(0,r.jsx)("defs",{children:(0,r.jsx)("path",{d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z",id:"gentle-wave"})}),(0,r.jsxs)("g",{className:l("parallax",{disabled:n}),children:[(0,r.jsx)("use",{fill:t,opacity:"0.7",x:"48",xlinkHref:"#gentle-wave",y:"0"}),(0,r.jsx)("use",{fill:t,opacity:"0.5",x:"48",xlinkHref:"#gentle-wave",y:"3"}),(0,r.jsx)("use",{fill:t,opacity:"0.3",x:"48",xlinkHref:"#gentle-wave",y:"5"}),(0,r.jsx)("use",{fill:t,x:"48",xlinkHref:"#gentle-wave",y:"7"})]})]})}},9797:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(95183),o=n(64517),i=n(59570),a=n(87520),s=n.n(a),l=n(76004),u=n.n(l),c=n(69302);let h=s().bind(u());function d(e){let{hour:t,...n}=e,a=t||new Date().getHours();return(0,r.jsxs)(i.Z,{"data-component":"Sky",...n,children:[(0,r.jsx)(i.Z,{className:h("cloud","hour-".concat(a)),width:"100%",children:(0,r.jsx)(c.Z,{fillColor:"inherit"})}),(0,r.jsx)(o.Z,{className:h("sky","hour-".concat(a)),height:200})]})}},70632:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(95183),o=n(59570),i=n(87520),a=n.n(i),s=n(53244),l=n(90461),u=n.n(l),c=n(96640),h=n(63239),d=n.n(h);let _=a().bind(d());function f(e){let{iconName:t,position:n,width:i="100%",height:a="100%",maxWidth:s,maxHeight:l,autoplay:u=!0,loop:h=!0,className:d,...f}=e;return(0,r.jsx)(o.Z,{"data-component":"DotLottieIcon",height:a,maxHeight:l,maxWidth:s,position:n,width:i,children:(0,r.jsx)(c.y1,{autoplay:u,className:_("dot-lottie",d),loop:h,src:"https://project.itcode.dev/lottie/lottie/".concat(t,".lottie"),...f})})}let g=a().bind(u());function p(e){let{containerProps:t,alt:n,width:i,height:a,className:l,onError:u,onLoad:c,...h}=e,[d,_]=(0,s.useState)("loading"),p=(0,s.useRef)(null),m=(0,s.useCallback)(e=>{_("error"),u&&u(e)},[u,_]),x=(0,s.useCallback)(e=>{_(e.currentTarget.complete?"success":"loading"),c&&c(e)},[c,_]);return(0,s.useEffect)(()=>{p.current&&_(p.current.complete?"success":"loading")},[p,_]),(0,r.jsxs)(o.Z,{"data-component":"Img",height:a,position:"relative",width:i,...t,children:[(0,r.jsx)("img",{alt:n,className:g("img",{loading:"success"!==d},l),"data-status":d,height:"100%",loading:"lazy",ref:p,width:"100%",onError:m,onLoadCapture:x,...h}),"success"===d?null:(0,r.jsx)(o.Z,{alignItems:"center",height:"100%",justifyContent:"center",left:0,position:"absolute",top:0,width:"100%",children:(0,r.jsx)(f,{iconName:"image-loading-improved"})})]})}},96429:function(e,t,n){"use strict";var r=n(70632);t.Z=r.default},13548:function(e){e.exports={screener:"Screener_screener__vSNkU",gradient:"Screener_gradient__j3i82",dimmer:"Screener_dimmer__qMP9k",loading:"Screener_loading__Yqgyf",cover:"Screener_cover__LZ_ra"}},59758:function(e){e.exports={root:"PageScreenerTemplate_root__L_OWP",text:"PageScreenerTemplate_text__RbQel"}},15290:function(e){e.exports={footer:"FooterTemplate_footer__1tmO_",title:"FooterTemplate_title__KkdF4"}},63239:function(e){e.exports={"dot-lottie":"DotLottieIcon_dot-lottie__Qrtsx"}},75048:function(e){e.exports={button:"SymbolicButton_button__Yg0O3"}},98535:function(e){e.exports={waves:"Wave_waves___Plcn",parallax:"Wave_parallax__AGFbj",disabled:"Wave_disabled__9dUgv","move-forever":"Wave_move-forever__DMhKC"}},75143:function(e){e.exports={ship:"Footer_ship__VuMth",floating:"Footer_floating__VX7pb",yay:"Footer_yay__eXeem"}},53520:function(e){e.exports={header:"Header_header__d0tpV",transparent:"Header_transparent__qZdXX",title:"Header_title__o5Ikz"}},76004:function(e){e.exports={sky:"Sky_sky__yO3SN","hour-0":"Sky_hour-0__UQRXS","hour-1":"Sky_hour-1__A6Z72","hour-2":"Sky_hour-2__z7sUg","hour-3":"Sky_hour-3__Yh1bm","hour-4":"Sky_hour-4__OEBPz","hour-5":"Sky_hour-5__3wqkB","hour-6":"Sky_hour-6__9OD_F","hour-7":"Sky_hour-7__eOcf_","hour-8":"Sky_hour-8__7gfPP","hour-9":"Sky_hour-9__LKlXD","hour-10":"Sky_hour-10__cGGA1","hour-11":"Sky_hour-11___VDjG","hour-12":"Sky_hour-12__QKW9G","hour-13":"Sky_hour-13___vjbO","hour-14":"Sky_hour-14___NrNY","hour-15":"Sky_hour-15__lxE64","hour-16":"Sky_hour-16__Jb2Xu","hour-17":"Sky_hour-17__Mqpwd","hour-18":"Sky_hour-18__qpa8e","hour-19":"Sky_hour-19__1egZH","hour-20":"Sky_hour-20___qb2w","hour-21":"Sky_hour-21__Xxp3b","hour-22":"Sky_hour-22__V5MjF","hour-23":"Sky_hour-23__A72bQ",cloud:"Sky_cloud__wjEZ2"}},90461:function(e){e.exports={img:"Img_img__AOtkz",loading:"Img_loading__rFssp"}}}]);