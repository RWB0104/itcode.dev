(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{96525:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(48509),o=n(60763);async function i(){let e=await fetch("https://datastore.itcode.dev/itcode/video");if(e.ok)return await e.json();throw e}var a=n(20171),s=n(20909),l=n(29311),c=n.n(l),u=n(35243),h=n(90042),d=n.n(h);let _=c().bind(d());function f(e){let{width:t="100%",height:n="100vh",src:l,children:c}=e,[h,d]=(0,u.useState)(!1),{data:f=[]}=(0,o.useQuery)({queryFn:i,queryKey:["useGetScreenerList"]}),g=(0,u.useMemo)(()=>f[(0,a.sZ)(f)],[f]),p=(0,u.useCallback)(()=>{d(!0)},[d]);return(0,u.useEffect)(()=>{l&&d(!0)},[l]),(0,r.jsxs)(s.Z,{className:_("screener"),"data-component":"Screener",height:n,position:"relative",width:t,children:[(0,r.jsx)(s.Z,{bgcolor:"#00000088",className:_("dimmer",{loading:!h}),height:"100%",left:0,position:"absolute",top:0,width:"100%",zIndex:1,children:c}),(0,r.jsx)(s.Z,{className:_("media"),height:"100%",left:0,position:"absolute",top:0,width:"100%",children:l?(0,r.jsx)("img",{alt:"screener",className:_("cover"),height:"100%",src:l,width:"100%"}):(0,r.jsx)("video",{className:_("cover"),controls:!1,height:"100%",src:g,width:"100%",autoPlay:!0,loop:!0,muted:!0,onCanPlay:p})})]})}},69343:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(48509),o=n(82692),i=n(20171),a=n(20909),s=n(31379),l=n(35243),c=n(26237),u=n(94906),h=n(88392),d=n(10135),_=n(29311),f=n.n(_),g=n(91139),p=n.n(g),x=n(87260),m=n.n(x);let v=f().bind(m());var y=function(e){let{theme:t,logo:n,title:o,isTransparent:s,onMenuClick:l,..._}=e,f=(e,n,r)=>s?e:"dark"===t?r:n;return(0,r.jsx)(a.Z,{bgcolor:f("transparent","#FFFFFF70","#12121270"),boxShadow:f(void 0,"0px 0px 5px ".concat(i.O9.shadow.default),"0px 0px 5px ".concat(i.O9.shadow.default)),className:v("header",{transparent:s}),component:"header","data-component":"Header",left:0,padding:.5,position:"fixed",top:0,width:"100%",zIndex:1e4,..._,children:(0,r.jsxs)(h.Z,{alignItems:"center",color:f("white",void 0,void 0),direction:"row",gap:2,height:"100%",width:"100%",children:[(0,r.jsx)(u.Z,{color:"inherit",onClick:l,children:(0,r.jsx)(c.Z,{htmlColor:"inherit"})}),(0,r.jsx)(p(),{href:"/",children:(0,r.jsxs)(h.Z,{alignItems:"center",direction:"row",gap:2,children:[(0,r.jsx)("img",{alt:o,height:24,src:n,width:24}),(0,r.jsx)(d.Z,{className:v("title"),children:o})]})})]})})},k=n(22181),j=n(32554),S=n(44946),w=n(65554),b=n(30453),Z=n(12434),N=n(30832),F=function(e){let{title:t,logo:n,version:o,items:i,currentUrl:a,paddingTop:s,...l}=e,c=e=>"/"===e?a===e:(null==a?void 0:a.startsWith(e))||!1;return(0,r.jsx)(k.ZP,{"data-component":"Sidebar",...l,children:(0,r.jsxs)(h.Z,{height:"100%",justifyContent:"space-between",marginTop:s,minWidth:250,paddingBottom:4,children:[(0,r.jsx)(j.Z,{children:null==i?void 0:i.map(e=>{let{icon:t,title:n,url:o}=e;return(0,r.jsx)(S.ZP,{children:(0,r.jsx)(p(),{className:"w-full",href:o,children:(0,r.jsxs)(w.Z,{selected:c(o),children:[(0,r.jsx)(b.Z,{color:"inherit",children:t}),(0,r.jsx)(Z.Z,{color:"inherit",primary:n})]})})},n)})}),(0,r.jsxs)(h.Z,{alignItems:"center",children:[(0,r.jsxs)(h.Z,{alignItems:"center",direction:"row",gap:1,children:[n?(0,r.jsx)(N.Z,{alt:n,height:20,src:n,width:20}):null,t?(0,r.jsx)(d.Z,{variant:"caption",children:t}):null]}),o?(0,r.jsx)(d.Z,{color:"GrayText",variant:"caption",children:o}):null]})]})})},I=function(e){let{theme:t,logo:n,title:o,version:c,items:u}=e,h=(0,s.usePathname)(),[d,_]=(0,l.useState)(!0),[f,g]=(0,l.useState)(!1),[p,x]=(0,l.useState)(null),[m,v]=(0,l.useState)(),k=(0,l.useCallback)(()=>{g(e=>!e)},[]),j=(0,l.useCallback)(()=>{g(!1)},[]);return(0,i.yU)("#header",e=>v(e.borderBoxSize[0].blockSize)),(0,i.S1)(p,e=>_(e.isIntersecting)),(0,r.jsxs)(a.Z,{"data-component":"Navigation",ref:x,children:[(0,r.jsx)(y,{id:"header",isTransparent:d&&!f,logo:n,theme:t,title:o,onMenuClick:k}),(0,r.jsx)(F,{currentUrl:h,items:u,logo:n,open:f,paddingTop:"".concat(m,"px"),title:o,version:c,onClose:j})]})},O=n(63615),C=n(86328),M=n(20812);let D=[{icon:(0,r.jsx)(M.Z,{}),title:"홈",url:"/"},{icon:(0,r.jsx)(O.default,{}),title:"프로젝트",url:"/projects"},{icon:(0,r.jsx)(C.Z,{}),title:"방명록",url:"/guestbook"}];function z(e){let{...t}=e,{themeState:n}=(0,o.N)();return(0,r.jsx)(I,{items:D,logo:"/logo.png",theme:n,...t})}},73997:function(e,t,n){"use strict";n.r(t),n.d(t,{useIntersectionObserver:function(){return i},useResizeObserver:function(){return o}});var r=n(35243);function o(e,t){(0,r.useEffect)(()=>{let n=new ResizeObserver(e=>{e.forEach(t)});if(e){if("string"==typeof e){let t=document.querySelector(e);t&&n.observe(t)}else n.observe(e)}return()=>{n.disconnect()}},[e,t])}function i(e,t,n){(0,r.useEffect)(()=>{let r=new IntersectionObserver(e=>{e.forEach(t)},n);if(e){if("string"==typeof e){let t=document.querySelector(e);t&&r.observe(t)}else r.observe(e)}return()=>{r.disconnect()}},[e,t,n])}},20171:function(e,t,n){"use strict";n.d(t,{v:function(){return l},O9:function(){return c},R1:function(){return _},sZ:function(){return u},ir:function(){return f},wh:function(){return o()},l8:function(){return d},GM:function(){return a()},S1:function(){return s.useIntersectionObserver},yU:function(){return s.useResizeObserver}});var r=n(49240),o=n.n(r),i=n(21746),a=n.n(i),s=n(73997);let l={email:"psj2716@mensakorea.org",nickname:"RWB",social:{github:{link:"https://github.com/RWB0104",name:"Kapoo"},linkedin:{link:"https://www.linkedin.com/in/itcode",name:"RWB"}}},c={shadow:{default:"#00000050"}};function u(e){return Math.floor(Math.random()*(e.length-1))}function h(e,t){let n=t-"".concat(Math.floor(e)).length;return n>0?"".concat("0".repeat(n)).concat(e):"".concat(e)}function d(e){let t=new Date(e||Date.now()),n=t.getMonth()+1;return{date:{text:h(t.getDate(),2),value:t.getDate()},hour:{text:h(t.getHours(),2),value:t.getHours()},minute:{text:h(t.getMinutes(),2),value:t.getMinutes()},month:{text:h(n,2),value:n},rawDate:t,second:{text:h(t.getSeconds(),2),value:t.getSeconds()},timestamp:t.getTime(),weekday:{text:["일","월","화","수","목","금","토","일"][t.getDay()],value:t.getDay()},year:{text:"".concat(t.getFullYear()),value:t.getFullYear()}}}function _(e,t,n){navigator.clipboard?(navigator.clipboard.writeText(e),null==t||t(e)):null==n||n(e)}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.round(e*10**t)/10**t}},82692:function(e,t,n){"use strict";n.d(t,{N:function(){return o}});var r=n(18921);let o=(0,r.Ue)(e=>({setThemeState:t=>{localStorage.setItem("theme",t),e({themeState:t})},themeState:"dark",toggleThemeState:()=>{e(e=>{let{themeState:t}=e,n="light"===t?"dark":"light";return localStorage.setItem("theme",n),{themeState:n}})}}));(0,r.Ue)(e=>({setRefererState:t=>{e({refererState:t})}}))},2350:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(48509),o=n(29311),i=n.n(o),a=n(11498),s=n.n(a);let l=i().bind(s());var c=function(e){let{fillColor:t,disabledAnimation:n,width:o="100%",height:i=40,className:a,...s}=e;return(0,r.jsxs)("svg",{className:l("waves",a),"data-component":"Wave",height:i,preserveAspectRatio:"none",shapeRendering:"auto",viewBox:"0 24 150 28",width:o,xmlns:"http://www.w3.org/2000/svg",...s,children:[(0,r.jsx)("defs",{children:(0,r.jsx)("path",{d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z",id:"gentle-wave"})}),(0,r.jsxs)("g",{className:l("parallax",{disabled:n}),children:[(0,r.jsx)("use",{fill:t,opacity:"0.7",x:"48",xlinkHref:"#gentle-wave",y:"0"}),(0,r.jsx)("use",{fill:t,opacity:"0.5",x:"48",xlinkHref:"#gentle-wave",y:"3"}),(0,r.jsx)("use",{fill:t,opacity:"0.3",x:"48",xlinkHref:"#gentle-wave",y:"5"}),(0,r.jsx)("use",{fill:t,x:"48",xlinkHref:"#gentle-wave",y:"7"})]})]})}},22556:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(48509),o=n(20909),i=n(88392),a=n(29311),s=n.n(a),l=n(18229),c=n.n(l),u=n(2350);let h=s().bind(c());function d(e){let{hour:t,...n}=e,a=t||new Date().getHours();return(0,r.jsxs)(i.Z,{"data-component":"Sky",...n,children:[(0,r.jsx)(i.Z,{className:h("cloud","hour-".concat(a)),width:"100%",children:(0,r.jsx)(u.Z,{fillColor:"inherit"})}),(0,r.jsx)(o.Z,{className:h("sky","hour-".concat(a)),height:200})]})}},79332:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(48509),o=n(20909),i=n(88392),a=n(29311),s=n.n(a),l=n(35243),c=n(75463),u=n.n(c),h=n(54640),d=n(6299),_=n.n(d);let f=s().bind(_());function g(e){let{iconName:t,position:n,width:o="100%",height:a="100%",maxWidth:s,maxHeight:l,autoplay:c=!0,loop:u=!0,className:d,..._}=e;return(0,r.jsx)(i.Z,{"data-component":"DotLottieIcon",height:a,maxHeight:l,maxWidth:s,position:n,width:o,children:(0,r.jsx)(h.y1,{autoplay:c,className:f("dot-lottie",d),loop:u,src:"https://project.itcode.dev/lottie/lottie/".concat(t,".lottie"),..._})})}let p=s().bind(u());function x(e){let{containerProps:t,alt:n,width:a,height:s,className:c,onError:u,onLoad:h,...d}=e,[_,f]=(0,l.useState)("loading"),x=(0,l.useRef)(null),m=(0,l.useCallback)(e=>{f("error"),u&&u(e)},[u,f]),v=(0,l.useCallback)(e=>{f(e.currentTarget.complete?"success":"loading"),h&&h(e)},[h,f]);return(0,l.useEffect)(()=>{x.current&&f(x.current.complete?"success":"loading")},[x,f]),(0,r.jsxs)(o.Z,{"data-component":"Img",height:s,position:"relative",width:a,...t,children:[(0,r.jsx)("img",{alt:n,className:p("img",{loading:"success"!==_},c),"data-status":_,height:"100%",loading:"lazy",ref:x,width:"100%",onError:m,onLoadCapture:v,...d}),"success"===_?null:(0,r.jsx)(i.Z,{alignItems:"center",height:"100%",justifyContent:"center",left:0,position:"absolute",top:0,width:"100%",children:(0,r.jsx)(g,{iconName:"image-loading-improved"})})]})}},30832:function(e,t,n){"use strict";var r=n(79332);t.Z=r.default},90042:function(e){e.exports={screener:"Screener_screener__vSNkU",gradient:"Screener_gradient__j3i82",dimmer:"Screener_dimmer__qMP9k",loading:"Screener_loading__Yqgyf",cover:"Screener_cover__LZ_ra"}},17706:function(e){e.exports={root:"PageScreenerTemplate_root__L_OWP",text:"PageScreenerTemplate_text__RbQel"}},86962:function(e){e.exports={footer:"FooterTemplate_footer__1tmO_",title:"FooterTemplate_title__KkdF4"}},6299:function(e){e.exports={"dot-lottie":"DotLottieIcon_dot-lottie__Qrtsx"}},18065:function(e){e.exports={button:"SymbolicButton_button__Yg0O3"}},11498:function(e){e.exports={waves:"Wave_waves___Plcn",parallax:"Wave_parallax__AGFbj",disabled:"Wave_disabled__9dUgv","move-forever":"Wave_move-forever__DMhKC"}},45570:function(e){e.exports={ship:"Footer_ship__VuMth",floating:"Footer_floating__VX7pb",yay:"Footer_yay__eXeem"}},87260:function(e){e.exports={header:"Header_header__d0tpV",transparent:"Header_transparent__qZdXX",title:"Header_title__o5Ikz"}},18229:function(e){e.exports={sky:"Sky_sky__yO3SN","hour-0":"Sky_hour-0__UQRXS","hour-1":"Sky_hour-1__A6Z72","hour-2":"Sky_hour-2__z7sUg","hour-3":"Sky_hour-3__Yh1bm","hour-4":"Sky_hour-4__OEBPz","hour-5":"Sky_hour-5__3wqkB","hour-6":"Sky_hour-6__9OD_F","hour-7":"Sky_hour-7__eOcf_","hour-8":"Sky_hour-8__7gfPP","hour-9":"Sky_hour-9__LKlXD","hour-10":"Sky_hour-10__cGGA1","hour-11":"Sky_hour-11___VDjG","hour-12":"Sky_hour-12__QKW9G","hour-13":"Sky_hour-13___vjbO","hour-14":"Sky_hour-14___NrNY","hour-15":"Sky_hour-15__lxE64","hour-16":"Sky_hour-16__Jb2Xu","hour-17":"Sky_hour-17__Mqpwd","hour-18":"Sky_hour-18__qpa8e","hour-19":"Sky_hour-19__1egZH","hour-20":"Sky_hour-20___qb2w","hour-21":"Sky_hour-21__Xxp3b","hour-22":"Sky_hour-22__V5MjF","hour-23":"Sky_hour-23__A72bQ",cloud:"Sky_cloud__wjEZ2"}},75463:function(e){e.exports={img:"Img_img__AOtkz",loading:"Img_loading__rFssp"}}}]);