(this.webpackJsonpblubbr=this.webpackJsonpblubbr||[]).push([[0],{10:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));i(1);var s=i(2),a=i.n(s),r=i(0);function c(e){var t=e.tag,i=void 0===t?"button":t,s=e.href,c=void 0===s?"/":s,n=e.color,o=void 0===n?"":n,l=e.className,d=void 0===l?"":l,h=e.size,b=void 0===h?"":h,j=e.loading,m=void 0!==j&&j,v=e.wide,u=void 0!==v&&v,f=e.wideMobile,O=void 0!==f&&f,x=e.disabled,g=void 0!==x&&x,p=e.children,N=void 0===p?void 0:p,w=a()("button",o&&"button-".concat(o),b&&"button-".concat(b),m&&"is-loading",u&&"button-block",O&&"button-wide-mobile",d),y=i;return Object(r.jsx)(y,{href:c,className:w,disabled:g,children:N})}},14:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i(11),a=i(1),r=i(0),c={className:void 0,src:void 0,width:void 0,height:void 0,alt:void 0};function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=Object(a.useState)(!1),i=Object(s.a)(t,2),n=i[0],o=i[1],l=Object(a.useRef)(null);Object(a.useEffect)((function(){h(l.current)}),[l]);var d=function(e,t){return'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(e," ").concat(t,'"%3E%3C/svg%3E')},h=function(e){var t=document.createElement("img");!n&&e&&(e.style.display="none",e.before(t),t.src=d(e.getAttribute("width")||0,e.getAttribute("height")||0),t.width=e.width,t.height=e.height,t.style.opacity="0",e.className&&t.classList.add(e.className),t.remove(),e.style.display="")};function b(){o(!0)}return Object(r.jsx)("img",{ref:l,className:e.className,src:e.src,width:e.width,height:e.height,alt:e.alt,onLoad:b})}},15:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return o}));var s=i(1),a=i(16),r=i(3),c=i(0);function n(){a.a.initialize("G-FE2829FLJR",{testMode:!1})}function o(e){var t=e.children,i=Object(r.f)();Object(s.useEffect)((function(){n(i.pathname+i.search)}),[i]);var n=function(e){a.a.set({page:e}),a.a.pageview(e)};return Object(c.jsx)(c.Fragment,{children:t})}},22:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var s=i(1),a=i(28),r=i(0);function c(e){var t=e.src,i=e.style,c=Object(s.useRef)(null),n=Object(s.useRef)(null);Object(s.useEffect)((function(){new a.Rive({src:t,canvas:c.current,autoplay:!0}),o()}),[c,n]);var o=function(){if(n.current&&c.current){var e=n.current.getBoundingClientRect(),t=e.width,i=e.height;c.current.width=4*t,c.current.height=4*i}};return Object(r.jsx)("div",{id:"retina-canvas",ref:n,style:i,children:Object(r.jsx)("canvas",{ref:c})})}},25:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var s=i(11),a=i(1),r=i.n(a),c=i(21),n=i(0),o=r.a.forwardRef((function(e,t){var i=Object(a.useState)(window.innerHeight),r=Object(s.a)(i,2),o=r[0],l=r[1],d=Object(a.useState)(),h=Object(s.a)(d,2),b=h[0],j=h[1];Object(a.useEffect)((function(){u(),v()}),[o]),Object(a.useImperativeHandle)(t,(function(){return{init:function(){j(document.querySelectorAll("[class*=reveal-]"))}}})),Object(a.useEffect)((function(){"undefined"!==typeof b&&b.length>0&&(m()||(window.addEventListener("scroll",f),window.addEventListener("resize",O)),v())}),[b]);var m=function(){return!!b&&b.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},v=function(){if(!m()&&b)for(var e="data-reveal-offset",t="data-reveal-container",i="is-revealed",s=function(s){var a=b[s],r=parseInt(a.getAttribute("data-reveal-delay")),c=a.getAttribute(e)?parseInt(a.getAttribute(e)):200;(function(e,t){return e.getBoundingClientRect().top<=o-t})(a.getAttribute(t)?a.closest(a.getAttribute(t)):a,c)&&!a.classList.contains(i)&&(r&&0!==r?setTimeout((function(){return a.classList.add(i)}),r):a.classList.add(i))},a=0;a<b.length;a++)s(a)},u=function(){m()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",O))},f=Object(c.throttle)((function(){u(),v()}),30),O=Object(c.throttle)((function(){l(window.innerHeight)}),30);return Object(n.jsx)(n.Fragment,{children:e.children})}));function l(e){var t=e.children,i=Object(a.useRef)();return Object(a.useEffect)((function(){document.body.classList.add("is-loaded"),i.current.init()}),[]),Object(n.jsx)(o,{ref:i,children:t})}},26:function(e,t,i){"use strict";i.d(t,"a",(function(){return g}));var s=i(1),a=i(11),r=i(2),c=i.n(r),n=i(13),o=i(14),l=i.p+"static/media/logo.145fa764.png",d=i(0);function h(e){var t=c()("brand",e.className);return Object(d.jsx)("div",{className:t,children:Object(d.jsx)("h1",{className:"m-0",children:Object(d.jsx)(n.b,{to:"/",children:Object(d.jsx)(o.a,{src:l,alt:"Open",width:32,height:32})})})})}var b=i(10),j={className:"",navPosition:void 0,hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=Object(s.useState)(!1),i=Object(a.a)(t,2),r=i[0],n=i[1],o=Object(s.useRef)(null),l=Object(s.useRef)(null);Object(s.useEffect)((function(){return r&&m(),document.addEventListener("keydown",u),document.addEventListener("click",f),function(){document.removeEventListener("keydown",u),document.removeEventListener("click",f),v()}}));var m=function(){var e;document.body.classList.add("off-nav-is-active"),o.current&&(o.current.style.maxHeight=(null===(e=o.current)||void 0===e?void 0:e.scrollHeight)+"px",n(!0))},v=function(){document.body.classList.remove("off-nav-is-active"),o.current&&(o.current.style.maxHeight=""),n(!1)},u=function(e){r&&27===e.keyCode&&v()},f=function(e){o.current&&r&&!o.current.contains(e.target)&&e.target!==l.current&&v()},O=c()("site-header",e.bottomOuterDivider&&"has-bottom-divider",e.className);return Object(d.jsx)("header",{className:O,children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:c()("site-header-inner",e.bottomDivider&&"has-bottom-divider"),children:[Object(d.jsx)(h,{}),!e.hideNav&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("button",{ref:l,className:"header-nav-toggle",onClick:r?v:m,children:[Object(d.jsx)("span",{className:"screen-reader",children:"Menu"}),Object(d.jsx)("span",{className:"hamburger",children:Object(d.jsx)("span",{className:"hamburger-inner"})})]}),Object(d.jsx)("nav",{ref:o,className:c()("header-nav",r&&"is-active"),children:Object(d.jsxs)("div",{className:"header-nav-inner",children:[Object(d.jsxs)("ul",{className:c()("list-reset text-xs",e.navPosition&&"header-nav-".concat(e.navPosition)),children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#bots",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#features",onClick:v,children:"Features"})})]}),!e.hideSignin&&Object(d.jsx)("ul",{className:"list-reset header-nav-right",children:Object(d.jsx)("li",{children:Object(d.jsx)(b.a,{tag:"a",color:"primary",wideMobile:!0,href:"https://discord.gg/ZtAWMP2DDd",children:"Join Discord"})})})]})})]})]})})})}var v=i(5);function u(e){var t=c()("footer-nav",e.className);return Object(d.jsx)("nav",Object(v.a)(Object(v.a)({},e.props),{},{className:t,children:Object(d.jsxs)("ul",{className:"list-reset",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#bots",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#features",children:"Features"})})]})}))}function f(e){var t=c()("footer-social",e.className);return Object(d.jsx)("div",{className:t,children:Object(d.jsxs)("ul",{className:"list-reset",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://facebook.com/",children:Object(d.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("title",{children:"Facebook"}),Object(d.jsx)("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})]})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://twitter.com/",children:Object(d.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("title",{children:"Twitter"}),Object(d.jsx)("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})]})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://google.com/",children:Object(d.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("title",{children:"Instagram"}),Object(d.jsxs)("g",{children:[Object(d.jsx)("circle",{cx:"12.145",cy:"3.892",r:"1"}),Object(d.jsx)("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),Object(d.jsx)("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})]})]})})})]})})}var O={className:void 0,topOuterDivider:!1,topDivider:!1};function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=c()("site-footer center-content-mobile",e.topOuterDivider&&"has-top-divider",e.className);return Object(d.jsx)("footer",{className:t,children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:c()("site-footer-inner",e.topDivider&&"has-top-divider"),children:[Object(d.jsxs)("div",{className:"footer-top space-between text-xxs",children:[Object(d.jsx)(h,{}),Object(d.jsx)(f,{})]}),Object(d.jsxs)("div",{className:"footer-bottom space-between text-xxs invert-order-desktop",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("div",{className:"footer-copyright",children:["Made by the ",Object(d.jsx)("a",{href:"https://blubbr.io",children:" blubbr"})," team on planet Earth. All right reserved."]})]})]})})})}function g(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{navPosition:"right",className:"reveal-from-bottom"}),Object(d.jsx)("main",{className:"site-content",children:e.children}),Object(d.jsx)(x,{})]})}},45:function(e,t,i){},46:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i.n(s),r=i(27),c=i.n(r),n=i(13),o=i(0);function l(){return Object(o.jsx)("div",{className:"spinner-container",children:Object(o.jsxs)("svg",{className:"spinner",viewBox:"0 0 120 120",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("circle",{className:"internal-circle",cx:"60",cy:"60",r:"30"}),Object(o.jsx)("circle",{className:"external-circle",cx:"60",cy:"60",r:"50"})]})})}var d=i(3),h=i(2),b=i.n(h);function j(e){var t=b()("button-group",e.className);return Object(o.jsx)("div",{className:t,children:e.children})}var m=i(10),v=i(22);function u(){return Object(o.jsx)(v.a,{src:"./reading_bot.riv",style:{height:"calc(100vh - 286px)"}})}function f(e){var t=e.topOuterDivider,i=void 0!==t&&t,s=e.bottomOuterDivider,a=void 0!==s&&s,r=e.topDivider,c=void 0!==r&&r,n=e.bottomDivider,l=void 0!==n&&n,d=e.hasBgColor,h=void 0!==d&&d,v=e.invertColor,f=void 0!==v&&v,O=e.className,x=void 0===O?"":O,g=b()("hero section center-content",i&&"has-top-divider",a&&"has-bottom-divider",h&&"has-bg-color",f&&"invert-color",x),p=b()("hero-inner section-inner",c&&"has-top-divider",l&&"has-bottom-divider");return Object(o.jsx)("section",{className:g,children:Object(o.jsx)("div",{className:"container-sm",children:Object(o.jsxs)("div",{className:p,children:[Object(o.jsxs)("div",{className:"hero-content",children:[Object(o.jsxs)("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"25",children:["The future of"," ",Object(o.jsx)("span",{className:"text-color-primary",children:"investing"})]}),Object(o.jsxs)("div",{className:"container-xs",children:[Object(o.jsx)("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"75",children:"Blubbr is a financial analytics company that specializes in a set of automated tools to help you stay informed and up-to-date on any ticker in the index."}),Object(o.jsx)("div",{className:"reveal-from-bottom","data-reveal-delay":"300",children:Object(o.jsxs)(j,{children:[Object(o.jsx)(m.a,{tag:"a",color:"primary",wideMobile:!0,href:"https://discord.gg/ZtAWMP2DDd",children:"Join Discord"}),Object(o.jsx)(m.a,{tag:"a",color:"dark",wideMobile:!0,href:"#bots",children:"Meet the Bots"})]})})]})]}),Object(o.jsx)("div",{id:"bots",className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"200",children:Object(o.jsx)(u,{})})]})})})}var O=i(26),x=i(5),g=i(30),p=function(e){var t=e.className,i=void 0===t?void 0:t,s=e.children,a=void 0===s?null:s,r=e.data,c=e.tag,n=void 0===c?"h2":c,l=Object(g.a)(e,["className","children","data","tag"]),d=b()("section-header",i),h=n;return Object(o.jsx)(o.Fragment,{children:(r.title||r.paragraph)&&Object(o.jsx)("div",Object(x.a)(Object(x.a)({},l),{},{className:d,children:Object(o.jsxs)("div",{className:"container-xs",children:[a,r.title&&Object(o.jsx)(h,{className:b()("mt-0",r.paragraph?"mb-16":"mb-0"),children:r.title}),r.paragraph&&Object(o.jsx)("p",{className:"m-0",children:r.paragraph})]})}))})},N=i.p+"static/media/feature-tile-icon-01.5c8835a7.svg",w=i.p+"static/media/feature-tile-icon-02.5a6c1204.svg",y=i.p+"static/media/feature-tile-icon-03.50fbb51a.svg",D=i.p+"static/media/feature-tile-icon-04.b460a076.svg",k=i.p+"static/media/feature-tile-icon-05.80719075.svg",B=i.p+"static/media/feature-tile-icon-06.f4a99d23.svg",C=i(14);function E(e){var t=e.delay,i=e.title,s=e.body,a=e.img;return Object(o.jsx)("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":t,children:Object(o.jsxs)("div",{className:"tiles-item-inner",children:[Object(o.jsx)("div",{className:"features-tiles-item-header",children:Object(o.jsx)("div",{className:"features-tiles-item-image mb-16",children:Object(o.jsx)(C.a,{src:a.src,alt:a.alt,width:64,height:64})})}),Object(o.jsxs)("div",{className:"features-tiles-item-content",children:[Object(o.jsx)("h3",{className:"h4 mt-0 mb-8",children:i}),Object(o.jsx)("p",{className:"m-0 text-sm",children:s})]})]})})}function M(e){var t=e.topOuterDivider,i=void 0!==t&&t,s=e.bottomOuterDivider,a=void 0!==s&&s,r=e.topDivider,c=void 0!==r&&r,n=e.bottomDivider,l=void 0!==n&&n,d=e.hasBgColor,h=void 0!==d&&d,j=e.invertColor,m=void 0!==j&&j,v=e.className,u=void 0===v?"":v,f=e.pushLeft,O=void 0!==f&&f,g=b()("features-tiles section",i&&"has-top-divider",a&&"has-bottom-divider",h&&"has-bg-color",m&&"invert-color",u),C=b()("features-tiles-inner section-inner pt-0",c&&"has-top-divider",l&&"has-bottom-divider"),M=b()("tiles-wrap center-content",O&&"push-left"),L=[{delay:0,title:"Premium Content",body:"Our specialized software is optimized to find the next big insight that can help you         realize alpha gains.",img:{src:N,alt:"Premium Content"}},{delay:100,title:"Daily Digest",body:"With our daily digest, you will get the powerful insights of blubbr right in your         inbox.",img:{src:w,alt:"Daily Digest"}},{delay:50,title:"Global Network",body:"Our global community of financial professionals means you can always talk stock.",img:{src:y,alt:"Global Network"}},{delay:0,title:"ML Insights",body:"Our machine-learning algorithms will help you better understand current market         dynamics.",img:{src:D,alt:"ML Insights"}},{delay:100,title:"Free Trial",body:"Join the community for free and see for yourself how much fat you can cut off with         blubbr.",img:{src:k,alt:"Free Trial"}},{delay:200,title:"Deep Dives",body:"As a member, you get access to hand-crafted research from our deticated members.",img:{src:B,alt:"Deep Dives"}}];return Object(o.jsx)("section",{id:"features",className:g,children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:C,children:[Object(o.jsx)(p,{data:{title:"We read the news",paragraph:"NotiFi is a trading bot that scrapes the SEC website to find new       filings for SPACs to notify traders when to trade before the       rest of the market finds out."},className:"center-content"}),Object(o.jsxs)("div",{className:M,children:[Object(o.jsx)(E,Object(x.a)({},L[0])),Object(o.jsx)(E,Object(x.a)({},L[1])),Object(o.jsx)(E,Object(x.a)({},L[2])),Object(o.jsx)(E,Object(x.a)({},L[3])),Object(o.jsx)(E,Object(x.a)({},L[4])),Object(o.jsx)(E,Object(x.a)({},L[5]))]})]})})})}var L=i.p+"static/media/features-split-image-01.94b14c16.png",A=i.p+"static/media/features-split-image-02.49942613.png";function F(e){var t=e.overline,i=e.title,s=e.body,a=e.img,r=e.from,c=e.shouldFill;return Object(o.jsxs)("div",{className:"split-item",children:[Object(o.jsxs)("div",{className:"split-item-content center-content-mobile reveal-from-"+r,"data-reveal-container":".split-item",children:[Object(o.jsx)("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8",children:t}),Object(o.jsx)("h3",{className:"mt-0 mb-12",children:i}),Object(o.jsx)("p",{className:"m-0",children:s})]}),Object(o.jsx)("div",{className:b()("split-item-image center-content-mobile reveal-from-bottom",c&&"split-item-image-fill"),"data-reveal-container":".split-item",children:Object(o.jsx)(C.a,{src:a.src,alt:a.alt,width:528,height:396})})]})}function S(e){var t=e.topOuterDivider,i=void 0!==t&&t,s=e.bottomOuterDivider,a=void 0!==s&&s,r=e.topDivider,c=void 0!==r&&r,n=e.bottomDivider,l=void 0!==n&&n,d=e.hasBgColor,h=void 0!==d&&d,j=e.invertColor,m=void 0!==j&&j,v=e.className,u=void 0===v?"":v,f=e.invertMobile,O=void 0!==f&&f,g=e.invertDesktop,N=void 0!==g&&g,w=e.alignTop,y=void 0!==w&&w,D=e.imageFill,k=void 0!==D&&D,B=b()("features-split section",i&&"has-top-divider",a&&"has-bottom-divider",h&&"has-bg-color",m&&"invert-color",u),C=b()("features-split-inner section-inner",c&&"has-top-divider",l&&"has-bottom-divider"),E=b()("split-wrap",O&&"invert-mobile",N&&"invert-desktop",y&&"align-top"),M=[{overline:"BOT",title:"Notifi",body:"Gets a feed from a webscraping bot that notifies a discord channel when there are         important updates to the SEC website. The fastest way to get new information.",img:{src:L,alt:"Notifi Bot"},from:"left",shouldFill:k},{overline:"BOT",title:"Notifi News",body:"Be the first to know about breaking news. Notifi News reads every article the second         it is published and filters it for important financial information.",img:{src:A,alt:"Notifi News Bot"},from:"right",shouldFill:k}];return Object(o.jsx)("section",{className:B,children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:C,children:[Object(o.jsx)(p,{data:{title:"Advanced insights",paragraph:"At Blubbr, we cut the fat off of traditional financial institutions       because we believe the power belongs to the players."},className:"center-content"}),Object(o.jsxs)("div",{className:E,children:[Object(o.jsx)(F,Object(x.a)({},M[0])),Object(o.jsx)(F,Object(x.a)({},M[1]))]})]})})})}function z(e){var t=e.delay,i=void 0===t?0:t,s=e.name,a=e.rank,r=e.from,c=void 0===r?"bottom":r,n=e.message;return Object(o.jsx)("div",{className:"tiles-item reveal-from-"+c,"data-reveal-delay":i,children:Object(o.jsxs)("div",{className:"tiles-item-inner",children:[Object(o.jsx)("div",{className:"testimonial-item-content",children:Object(o.jsx)("p",{className:"text-sm mb-0",children:n})}),Object(o.jsxs)("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider",children:[Object(o.jsx)("span",{className:"testimonial-item-name text-color-high",children:s}),Object(o.jsx)("span",{className:"text-color-low",children:" / "}),Object(o.jsx)("span",{className:"testimonial-item-link",children:Object(o.jsx)("a",{href:"/",children:a})})]})]})})}function H(e){var t=e.topOuterDivider,i=void 0!==t&&t,s=e.bottomOuterDivider,a=void 0!==s&&s,r=e.topDivider,c=void 0!==r&&r,n=e.bottomDivider,l=void 0!==n&&n,d=e.hasBgColor,h=void 0!==d&&d,j=e.invertColor,m=void 0!==j&&j,v=e.className,u=void 0===v?"":v,f=e.pushLeft,O=void 0!==f&&f,x=b()("testimonial section",i&&"has-top-divider",a&&"has-bottom-divider",h&&"has-bg-color",m&&"invert-color",u),g=b()("testimonial-inner section-inner",c&&"has-top-divider",l&&"has-bottom-divider"),N=b()("tiles-wrap",O&&"push-left"),w=[{name:"Soren",rank:"Commodore",message:"\u2014 Timing is everything. With Notifi, I can rest easy knowing that if anything happens         in the news I will be the first to know. Blubbr saves me time by pre-reading every         financial article as it is published, so I only need to read the important summaries."},{name:"Justin",rank:"Captain",message:"\u2014 I love Blubbr! Their notification services actually send my phone an SMS         notification whenever something important happens related to my stocks. Its like getting a         text from Warren Buffet anytime there is new information about my holdings."},{name:"Steven",rank:"Sailor",message:"\u2014 The insights behind Blubbr are huge. With massive amounts of data, the team has been         able to reliably predict important market signals and warn the community when it is time         to buy or sell."}];return Object(o.jsx)("section",{className:x,children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:g,children:[Object(o.jsx)(p,{data:{title:"Hear it from them",paragraph:"Don't just take our word for it, hear what some of our community members have to say       about how Blubbr has helped them achieve alpha gains."},className:"center-content"}),Object(o.jsxs)("div",{className:N,children:[Object(o.jsx)(z,{delay:200,from:"right",name:w[0].name,rank:w[0].rank,message:w[0].message}),Object(o.jsx)(z,{from:"bottom",name:w[1].name,rank:w[1].rank,message:w[1].message}),Object(o.jsx)(z,{delay:200,from:"left",name:w[2].name,rank:w[2].rank,message:w[2].message})]})]})})})}function I(e){var t=e.topOuterDivider,i=void 0!==t&&t,s=e.bottomOuterDivider,a=void 0!==s&&s,r=e.topDivider,c=void 0!==r&&r,n=e.bottomDivider,l=void 0!==n&&n,d=e.hasBgColor,h=void 0!==d&&d,j=e.invertColor,v=void 0!==j&&j,u=e.className,f=void 0===u?"":u,O=e.split,x=void 0===O||O,g=b()("cta section center-content-mobile reveal-from-bottom",i&&"has-top-divider",a&&"has-bottom-divider",h&&"has-bg-color",v&&"invert-color",f),p=b()("cta-inner section-inner",c&&"has-top-divider",l&&"has-bottom-divider",x&&"cta-split");return Object(o.jsx)("section",{className:g,children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:p,children:[Object(o.jsx)("div",{className:"cta-slogan",children:Object(o.jsx)("h3",{className:"m-0",children:"Welcome to the future of investing"})}),Object(o.jsx)("div",{className:"cta-action",children:Object(o.jsx)(m.a,{tag:"a",color:"dark",wideMobile:!0,href:"https://discord.gg/ZtAWMP2DDd",children:"Join Discord"})})]})})})}var T=i(15),P=i(25);function R(){return Object(o.jsx)(T.a,{children:Object(o.jsx)(P.a,{children:Object(o.jsxs)(O.a,{children:[Object(o.jsx)(f,{className:"illustration-section-01"}),Object(o.jsx)(M,{}),Object(o.jsx)(S,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),Object(o.jsx)(H,{topDivider:!0}),Object(o.jsx)(I,{split:!0})]})})})}var W=Object(s.lazy)((function(){return i.e(4).then(i.bind(null,47))})),J=Object(s.lazy)((function(){return i.e(3).then(i.bind(null,48))}));function V(){return Object(o.jsx)(s.Suspense,{fallback:Object(o.jsx)(l,{}),children:Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{exact:!0,path:"/",component:R}),Object(o.jsx)(d.a,{exact:!0,path:"/spacs",component:W}),Object(o.jsx)(d.a,{exact:!0,path:"/discord",render:G}),Object(o.jsx)(d.a,{component:J})]})})}function G(){return window.location.href="https://discord.gg/ZtAWMP2DDd",null}function Z(){return Object(s.useEffect)((function(){Object(T.b)()}),[]),Object(o.jsx)(V,{})}i(45);c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(n.a,{basename:"",children:Object(o.jsx)(Z,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.e4f460bc.chunk.js.map