(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/ZiB":function(e,t,n){"use strict";var o=n("Fcif"),a=n("dV/x"),r=n("mXGw"),i=(n("W0B4"),n("PDtE")),c=n("gbh0"),s=n("mxPc"),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=r.forwardRef((function(e,t){var n=e.align,c=void 0===n?"inherit":n,d=e.classes,p=e.className,u=e.color,f=void 0===u?"initial":u,m=e.component,b=e.display,v=void 0===b?"initial":b,h=e.gutterBottom,g=void 0!==h&&h,y=e.noWrap,O=void 0!==y&&y,x=e.paragraph,w=void 0!==x&&x,j=e.variant,E=void 0===j?"body1":j,k=e.variantMapping,C=void 0===k?l:k,N=Object(a.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),D=m||(w?"p":C[E]||l[E])||"span";return r.createElement(D,Object(o.a)({className:Object(i.a)(d.root,p,"inherit"!==E&&d[E],"initial"!==f&&d["color".concat(Object(s.a)(f))],O&&d.noWrap,g&&d.gutterBottom,w&&d.paragraph,"inherit"!==c&&d["align".concat(Object(s.a)(c))],"initial"!==v&&d["display".concat(Object(s.a)(v))]),ref:t},N))}));t.a=Object(c.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)},"4p7D":function(e,t,n){"use strict";var o=n("Fcif"),a=n("aNYv"),r=n("dV/x"),i=n("mXGw"),c=(n("W0B4"),n("m3N6")),s=n("+Gfr"),l=n("lOOT"),d=n("pNlz"),p=n("q3GK"),u={entering:{opacity:1},entered:{opacity:1}},f={enter:s.b.enteringScreen,exit:s.b.leavingScreen},m=i.forwardRef((function(e,t){var n=e.children,s=e.disableStrictModeCompat,m=void 0!==s&&s,b=e.in,v=e.onEnter,h=e.onEntered,g=e.onEntering,y=e.onExit,O=e.onExited,x=e.onExiting,w=e.style,j=e.TransitionComponent,E=void 0===j?c.a:j,k=e.timeout,C=void 0===k?f:k,N=Object(r.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),D=Object(l.a)(),T=D.unstable_strictMode&&!m,R=i.useRef(null),S=Object(p.a)(n.ref,t),B=Object(p.a)(T?R:void 0,S),M=function(e){return function(t,n){if(e){var o=T?[R.current,t]:[t,n],r=Object(a.a)(o,2),i=r[0],c=r[1];void 0===c?e(i):e(i,c)}}},P=M(g),U=M((function(e,t){Object(d.b)(e);var n=Object(d.a)({style:w,timeout:C},{mode:"enter"});e.style.webkitTransition=D.transitions.create("opacity",n),e.style.transition=D.transitions.create("opacity",n),v&&v(e,t)})),A=M(h),I=M(x),L=M((function(e){var t=Object(d.a)({style:w,timeout:C},{mode:"exit"});e.style.webkitTransition=D.transitions.create("opacity",t),e.style.transition=D.transitions.create("opacity",t),y&&y(e)})),z=M(O);return i.createElement(E,Object(o.a)({appear:!0,in:b,nodeRef:T?R:void 0,onEnter:U,onEntered:A,onEntering:P,onExit:L,onExited:z,onExiting:I,timeout:C},N),(function(e,t){return i.cloneElement(n,Object(o.a)({style:Object(o.a)({opacity:0,visibility:"exited"!==e||b?void 0:"hidden"},u[e],w,n.props.style),ref:B},t))}))}));t.a=m},QRBv:function(e,t,n){"use strict";var o=n("Fcif"),a=n("dV/x"),r=n("mXGw"),i=(n("W0B4"),n("PDtE")),c=n("gbh0"),s=n("4p7D"),l=r.forwardRef((function(e,t){var n=e.children,c=e.classes,l=e.className,d=e.invisible,p=void 0!==d&&d,u=e.open,f=e.transitionDuration,m=e.TransitionComponent,b=void 0===m?s.a:m,v=Object(a.a)(e,["children","classes","className","invisible","open","transitionDuration","TransitionComponent"]);return r.createElement(b,Object(o.a)({in:u,timeout:f},v),r.createElement("div",{className:Object(i.a)(c.root,l,p&&c.invisible),"aria-hidden":!0,ref:t},n))}));t.a=Object(c.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(l)},YFqc:function(e,t,n){e.exports=n("cTJO")},YnUK:function(e,t,n){"use strict";var o=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("mXGw")),r=(0,o(n("c9Um")).default)(a.default.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=r},atfL:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,a=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(s){a=!0,r=s}finally{try{o||null==c.return||c.return()}finally{if(a)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=n("rePB"),i=n("Fcif"),c=n("dV/x"),s=n("mXGw"),l=n.n(s),d=n("W0B4"),p=n.n(d),u=n("PDtE"),f=n("gbh0"),m=n("mxPc"),b=n("bJWG"),v=s.forwardRef((function(e,t){var n=e.classes,o=e.className,a=e.color,r=void 0===a?"primary":a,l=e.position,d=void 0===l?"fixed":l,p=Object(c.a)(e,["classes","className","color","position"]);return s.createElement(b.a,Object(i.a)({square:!0,component:"header",elevation:4,className:Object(u.a)(n.root,n["position".concat(Object(m.a)(d))],n["color".concat(Object(m.a)(r))],o,"fixed"===d&&"mui-fixed"),ref:t},p))})),h=Object(f.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(v),g=n("MdBG"),y=n("QRBv"),O=n("xARA"),x=n("KiWR"),w=n("m3N6"),j=n("q3GK"),E=n("lOOT"),k=n("+Gfr"),C=n("pNlz");function N(e,t){var n=function(e,t){var n,o=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var a=window.getComputedStyle(t);n=a.getPropertyValue("-webkit-transform")||a.getPropertyValue("transform")}var r=0,i=0;if(n&&"none"!==n&&"string"===typeof n){var c=n.split("(")[1].split(")")[0].split(",");r=parseInt(c[4],10),i=parseInt(c[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(r-o.left,"px)"):"right"===e?"translateX(-".concat(o.left+o.width-r,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(i-o.top,"px)"):"translateY(-".concat(o.top+o.height-i,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var D={enter:k.b.enteringScreen,exit:k.b.leavingScreen},T=s.forwardRef((function(e,t){var n=e.children,o=e.direction,a=void 0===o?"down":o,r=e.in,l=e.onEnter,d=e.onEntered,p=e.onEntering,u=e.onExit,f=e.onExited,m=e.onExiting,b=e.style,v=e.timeout,h=void 0===v?D:v,g=e.TransitionComponent,y=void 0===g?w.a:g,k=Object(c.a)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),T=Object(E.a)(),R=s.useRef(null),S=s.useCallback((function(e){R.current=O.findDOMNode(e)}),[]),B=Object(j.a)(n.ref,S),M=Object(j.a)(B,t),P=function(e){return function(t){e&&(void 0===t?e(R.current):e(R.current,t))}},U=P((function(e,t){N(a,e),Object(C.b)(e),l&&l(e,t)})),A=P((function(e,t){var n=Object(C.a)({timeout:h,style:b},{mode:"enter"});e.style.webkitTransition=T.transitions.create("-webkit-transform",Object(i.a)({},n,{easing:T.transitions.easing.easeOut})),e.style.transition=T.transitions.create("transform",Object(i.a)({},n,{easing:T.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",p&&p(e,t)})),I=P(d),L=P(m),z=P((function(e){var t=Object(C.a)({timeout:h,style:b},{mode:"exit"});e.style.webkitTransition=T.transitions.create("-webkit-transform",Object(i.a)({},t,{easing:T.transitions.easing.sharp})),e.style.transition=T.transitions.create("transform",Object(i.a)({},t,{easing:T.transitions.easing.sharp})),N(a,e),u&&u(e)})),W=P((function(e){e.style.webkitTransition="",e.style.transition="",f&&f(e)})),G=s.useCallback((function(){R.current&&N(a,R.current)}),[a]);return s.useEffect((function(){if(!r&&"down"!==a&&"right"!==a){var e=Object(x.a)((function(){R.current&&N(a,R.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[a,r]),s.useEffect((function(){r||G()}),[r,G]),s.createElement(y,Object(i.a)({nodeRef:R,onEnter:U,onEntered:I,onEntering:A,onExit:z,onExited:W,onExiting:L,appear:!0,in:r,timeout:h},k),(function(e,t){return s.cloneElement(n,Object(i.a)({ref:M,style:Object(i.a)({visibility:"exited"!==e||r?void 0:"hidden"},b,n.props.style)},t))}))})),R={left:"right",right:"left",top:"down",bottom:"up"};var S={enter:k.b.enteringScreen,exit:k.b.leavingScreen},B=s.forwardRef((function(e,t){var n=e.anchor,o=void 0===n?"left":n,a=e.BackdropProps,r=e.children,l=e.classes,d=e.className,p=e.elevation,f=void 0===p?16:p,v=e.ModalProps,h=(v=void 0===v?{}:v).BackdropProps,O=Object(c.a)(v,["BackdropProps"]),x=e.onClose,w=e.open,j=void 0!==w&&w,k=e.PaperProps,C=void 0===k?{}:k,N=e.SlideProps,D=e.TransitionComponent,B=void 0===D?T:D,M=e.transitionDuration,P=void 0===M?S:M,U=e.variant,A=void 0===U?"temporary":U,I=Object(c.a)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"]),L=Object(E.a)(),z=s.useRef(!1);s.useEffect((function(){z.current=!0}),[]);var W=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?R[t]:t}(L,o),G=s.createElement(b.a,Object(i.a)({elevation:"temporary"===A?f:0,square:!0},C,{className:Object(u.a)(l.paper,l["paperAnchor".concat(Object(m.a)(W))],C.className,"temporary"!==A&&l["paperAnchorDocked".concat(Object(m.a)(W))])}),r);if("permanent"===A)return s.createElement("div",Object(i.a)({className:Object(u.a)(l.root,l.docked,d),ref:t},I),G);var H=s.createElement(B,Object(i.a)({in:j,direction:R[W],timeout:P,appear:z.current},N),G);return"persistent"===A?s.createElement("div",Object(i.a)({className:Object(u.a)(l.root,l.docked,d),ref:t},I),H):s.createElement(g.a,Object(i.a)({BackdropProps:Object(i.a)({},a,h,{transitionDuration:P}),BackdropComponent:y.a,className:Object(u.a)(l.root,l.modal,d),open:j,onClose:x,ref:t},I,O),H)})),M=Object(f.a)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(B),P=n("FwNb"),U=n("GeWT"),A=n.n(U),I=n("kB6Z"),L=n("nFgL");function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(L.a)(),o=Object(P.a)({theme:n,name:"MuiUseMediaQuery",props:{}});var a="function"===typeof e?e(n):e;a=a.replace(/^@media( ?)/m,"");var r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,c=Object(i.a)({},o,t),l=c.defaultMatches,d=void 0!==l&&l,p=c.matchMedia,u=void 0===p?r?window.matchMedia:null:p,f=c.noSsr,m=void 0!==f&&f,b=c.ssrMatchMedia,v=void 0===b?null:b,h=s.useState((function(){return m&&r?u(a).matches:v?v(a).matches:d})),g=h[0],y=h[1];return s.useEffect((function(){var e=!0;if(r){var t=u(a),n=function(){e&&y(t.matches)};return n(),t.addListener(n),function(){e=!1,t.removeListener(n)}}}),[a,u,r]),g}var W=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?I.b.indexOf(e)<=I.b.indexOf(t):I.b.indexOf(e)<I.b.indexOf(t)},G=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?I.b.indexOf(t)<=I.b.indexOf(e):I.b.indexOf(t)<I.b.indexOf(e)},H="undefined"===typeof window?s.useEffect:s.useLayoutEffect,F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.withTheme,o=void 0!==n&&n,a=e.noSSR,r=void 0!==a&&a,l=e.initialWidth;function d(e){var n=Object(E.a)(),a=e.theme||n,d=Object(P.a)({theme:a,name:"MuiWithWidth",props:Object(i.a)({},e)}),p=d.initialWidth,u=d.width,f=Object(c.a)(d,["initialWidth","width"]),m=s.useState(!1),b=m[0],v=m[1];H((function(){v(!0)}),[]);var h=a.breakpoints.keys.slice().reverse().reduce((function(e,t){var n=z(a.breakpoints.up(t));return!e&&n?t:e}),null),g=Object(i.a)({width:u||(b||r?h:void 0)||p||l},o?{theme:a}:{},f);return void 0===g.width?null:s.createElement(t,g)}return A()(d,t),d}};function V(e){var t=e.children,n=e.only,o=e.width,a=Object(E.a)(),r=!0;if(n)if(Array.isArray(n))for(var i=0;i<n.length;i+=1){if(o===n[i]){r=!1;break}}else n&&o===n&&(r=!1);if(r)for(var c=0;c<a.breakpoints.keys.length;c+=1){var s=a.breakpoints.keys[c],l=e["".concat(s,"Up")],d=e["".concat(s,"Down")];if(l&&W(s,o)||d&&G(s,o)){r=!1;break}}return r?t:null}V.propTypes={children:p.a.node,className:p.a.string,implementation:p.a.oneOf(["js","css"]),initialWidth:p.a.oneOf(["xs","sm","md","lg","xl"]),lgDown:p.a.bool,lgUp:p.a.bool,mdDown:p.a.bool,mdUp:p.a.bool,only:p.a.oneOfType([p.a.oneOf(["xs","sm","md","lg","xl"]),p.a.arrayOf(p.a.oneOf(["xs","sm","md","lg","xl"]))]),smDown:p.a.bool,smUp:p.a.bool,width:p.a.string.isRequired,xlDown:p.a.bool,xlUp:p.a.bool,xsDown:p.a.bool,xsUp:p.a.bool};var K=F()(V),X=n("mK0O");var _=Object(f.a)((function(e){var t={display:"none"};return e.breakpoints.keys.reduce((function(n,o){return n["only".concat(Object(m.a)(o))]=Object(X.a)({},e.breakpoints.only(o),t),n["".concat(o,"Up")]=Object(X.a)({},e.breakpoints.up(o),t),n["".concat(o,"Down")]=Object(X.a)({},e.breakpoints.down(o),t),n}),{})}),{name:"PrivateHiddenCss"})((function(e){var t=e.children,n=e.classes,o=e.className,a=e.only,r=(Object(c.a)(e,["children","classes","className","only"]),Object(E.a)()),i=[];o&&i.push(o);for(var l=0;l<r.breakpoints.keys.length;l+=1){var d=r.breakpoints.keys[l],p=e["".concat(d,"Up")],u=e["".concat(d,"Down")];p&&i.push(n["".concat(d,"Up")]),u&&i.push(n["".concat(d,"Down")])}return a&&(Array.isArray(a)?a:[a]).forEach((function(e){i.push(n["only".concat(Object(m.a)(e))])})),s.createElement("div",{className:i.join(" ")},t)}));var q=function(e){var t=e.implementation,n=void 0===t?"js":t,o=e.lgDown,a=void 0!==o&&o,r=e.lgUp,l=void 0!==r&&r,d=e.mdDown,p=void 0!==d&&d,u=e.mdUp,f=void 0!==u&&u,m=e.smDown,b=void 0!==m&&m,v=e.smUp,h=void 0!==v&&v,g=e.xlDown,y=void 0!==g&&g,O=e.xlUp,x=void 0!==O&&O,w=e.xsDown,j=void 0!==w&&w,E=e.xsUp,k=void 0!==E&&E,C=Object(c.a)(e,["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]);return"js"===n?s.createElement(K,Object(i.a)({lgDown:a,lgUp:l,mdDown:p,mdUp:f,smDown:b,smUp:h,xlDown:y,xlUp:x,xsDown:j,xsUp:k},C)):s.createElement(_,Object(i.a)({lgDown:a,lgUp:l,mdDown:p,mdUp:f,smDown:b,smUp:h,xlDown:y,xlUp:x,xsDown:j,xsUp:k},C))},Y=n("oQEK"),J=n("Ns/9"),$=n("qSp0");var Q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(J.a)(e,Object(i.a)({defaultTheme:$.a},t))};var Z=s.forwardRef((function(e,t){var n=e.classes,o=e.className,a=e.component,r=void 0===a?"div":a,l=e.disableGutters,d=void 0!==l&&l,p=e.variant,f=void 0===p?"regular":p,m=Object(c.a)(e,["classes","className","component","disableGutters","variant"]);return s.createElement(r,Object(i.a)({className:Object(u.a)(n.root,n[f],o,!d&&n.gutters),ref:t},m))})),ee=Object(f.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(X.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(Z),te=n("/ZiB"),ne=n("YnUK"),oe=n.n(ne),ae=n("LSll"),re=n("Rx6o"),ie=s.forwardRef((function(e,t){var n=e.absolute,o=void 0!==n&&n,a=e.classes,r=e.className,l=e.component,d=void 0===l?"hr":l,p=e.flexItem,f=void 0!==p&&p,m=e.light,b=void 0!==m&&m,v=e.orientation,h=void 0===v?"horizontal":v,g=e.role,y=void 0===g?"hr"!==d?"separator":void 0:g,O=e.variant,x=void 0===O?"fullWidth":O,w=Object(c.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return s.createElement(d,Object(i.a)({className:Object(u.a)(a.root,r,"fullWidth"!==x&&a[x],o&&a.absolute,f&&a.flexItem,b&&a.light,"vertical"===h&&a.vertical),role:y,ref:t},w))})),ce=Object(f.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(re.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(ie),se=n("u44p"),le=n("x+AB"),de=n("2Nex"),pe=n("nnXQ"),ue="undefined"===typeof window?s.useEffect:s.useLayoutEffect,fe=s.forwardRef((function(e,t){var n=e.alignItems,o=void 0===n?"center":n,a=e.autoFocus,r=void 0!==a&&a,l=e.button,d=void 0!==l&&l,p=e.children,f=e.classes,m=e.className,b=e.component,v=e.ContainerComponent,h=void 0===v?"li":v,g=e.ContainerProps,y=(g=void 0===g?{}:g).className,x=Object(c.a)(g,["className"]),w=e.dense,E=void 0!==w&&w,k=e.disabled,C=void 0!==k&&k,N=e.disableGutters,D=void 0!==N&&N,T=e.divider,R=void 0!==T&&T,S=e.focusVisibleClassName,B=e.selected,M=void 0!==B&&B,P=Object(c.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),U=s.useContext(pe.a),A={dense:E||U.dense||!1,alignItems:o},I=s.useRef(null);ue((function(){r&&I.current&&I.current.focus()}),[r]);var L=s.Children.toArray(p),z=L.length&&Object(de.a)(L[L.length-1],["ListItemSecondaryAction"]),W=s.useCallback((function(e){I.current=O.findDOMNode(e)}),[]),G=Object(j.a)(W,t),H=Object(i.a)({className:Object(u.a)(f.root,m,A.dense&&f.dense,!D&&f.gutters,R&&f.divider,C&&f.disabled,d&&f.button,"center"!==o&&f.alignItemsFlexStart,z&&f.secondaryAction,M&&f.selected),disabled:C},P),F=b||"li";return d&&(H.component=b||"div",H.focusVisibleClassName=Object(u.a)(f.focusVisible,S),F=le.a),z?(F=H.component||b?F:"div","li"===h&&("li"===F?F="div":"li"===H.component&&(H.component="div")),s.createElement(pe.a.Provider,{value:A},s.createElement(h,Object(i.a)({className:Object(u.a)(f.container,y),ref:G},x),s.createElement(F,H,L),L.pop()))):s.createElement(pe.a.Provider,{value:A},s.createElement(F,Object(i.a)({ref:G},H),L))})),me=Object(f.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(fe),be=s.forwardRef((function(e,t){var n=e.children,o=e.classes,a=e.className,r=e.disableTypography,l=void 0!==r&&r,d=e.inset,p=void 0!==d&&d,f=e.primary,m=e.primaryTypographyProps,b=e.secondary,v=e.secondaryTypographyProps,h=Object(c.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),g=s.useContext(pe.a).dense,y=null!=f?f:n;null==y||y.type===te.a||l||(y=s.createElement(te.a,Object(i.a)({variant:g?"body2":"body1",className:o.primary,component:"span",display:"block"},m),y));var O=b;return null==O||O.type===te.a||l||(O=s.createElement(te.a,Object(i.a)({variant:"body2",className:o.secondary,color:"textSecondary",display:"block"},v),O)),s.createElement("div",Object(i.a)({className:Object(u.a)(o.root,a,g&&o.dense,p&&o.inset,y&&O&&o.multiline),ref:t},h),y,O)})),ve=Object(f.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(be),he=n("YFqc"),ge=n.n(he),ye=l.a.createElement,Oe=Q((function(e){return{toolbar:e.mixins.toolbar}})),xe=function(){var e=Oe();return ye("div",null,ye("div",{className:e.toolbar}),ye(ce,null),ye(me,{component:"a",href:"/docs"},ye(ve,{primary:"Docs"})),ye(ge.a,{passHref:!0,href:"/"},ye(me,{component:"a"},ye(ve,{primary:"Home"}))),ye(ge.a,{passHref:!0,href:"/empty"},ye(me,{component:"a"},ye(ve,{primary:"Empty editor"}))),ye(ce,null),ye(se.a,null,ye(ge.a,{passHref:!0,href:"/old/demo"},ye(me,{component:"a"},ye(ve,{primary:"Old demo (v0)"}))),ye(ge.a,{passHref:!0,href:"/old/fromhtml"},ye(me,{component:"a"},ye(ve,{primary:"Old import-from-html-Demo"})))),ye(ce,null),ye(se.a,null,ye(me,{component:"a",href:"https://react-page.github.io/"},ye(ve,{primary:"Latest version"})),ye(me,{component:"a",href:"https://react-page.github.io/beta"},ye(ve,{primary:"beta version"}))))},we=l.a.createElement,je=Q((function(e){return{root:{display:"flex"},drawer:Object(r.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(r.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(r.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3),backgroundColor:"white",maxWidth:1280,margin:"auto"}}}));t.a=function(e){var t=e.children,n=je(),o=Object(E.a)(),r=a(l.a.useState(!1),2),i=r[0],c=r[1],s=function(){c(!i)},d=we(xe,null);return we("div",{className:n.root},we(h,{position:"fixed",className:n.appBar},we(ee,null,we(Y.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:s,className:n.menuButton},we(oe.a,null)),we(te.a,{variant:"h6",noWrap:!0},"React Page ",ae.a))),we("nav",{className:n.drawer},we(q,{smUp:!0,implementation:"css"},we(M,{variant:"temporary",anchor:"rtl"===o.direction?"right":"left",open:i,onClose:s,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},d)),we(q,{xsDown:!0,implementation:"css"},we(M,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},d))),we("main",{className:n.content},we("div",{className:n.toolbar}),t))}},cTJO:function(e,t,n){"use strict";var o=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var r=a(n("mXGw")),i=n("elyg"),c=n("nOHt"),s=n("vNVm"),l={};function d(e,t,n,o){if((0,i.isLocalURL)(t)){e.prefetch(t,n,o).catch((function(e){0}));var a=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var p=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),a=n&&n.pathname||"/",p=r.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),n=o(t,2),r=n[0],c=n[1];return{href:r,as:e.as?(0,i.resolveHref)(a,e.as):c||r}}),[a,e.href,e.as]),u=p.href,f=p.as,m=e.children,b=e.replace,v=e.shallow,h=e.scroll,g=e.locale;"string"===typeof m&&(m=r.default.createElement("a",null,m));var y=r.Children.only(m),O=y&&"object"===typeof y&&y.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),w=o(x,2),j=w[0],E=w[1],k=r.default.useCallback((function(e){j(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,j]);(0,r.useEffect)((function(){var e=E&&t&&(0,i.isLocalURL)(u),o="undefined"!==typeof g?g:n&&n.locale,a=l[u+"%"+f+(o?"%"+o:"")];e&&!a&&d(n,u,f,{locale:o})}),[f,u,E,g,t,n]);var C={ref:k,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,o,a,r,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=o.indexOf("#")<0),t[a?"replace":"push"](n,o,{shallow:r,locale:s}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,u,f,b,v,h,g)},onMouseEnter:function(e){(0,i.isLocalURL)(u)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),d(n,u,f,{priority:!0}))}};return(e.passHref||"a"===y.type&&!("href"in y.props))&&(C.href=(0,i.addBasePath)((0,i.addLocale)(f,"undefined"!==typeof g?g:n&&n.locale,n&&n.defaultLocale))),r.default.cloneElement(y,C)};t.default=p},oQEK:function(e,t,n){"use strict";var o=n("Fcif"),a=n("dV/x"),r=n("mXGw"),i=(n("W0B4"),n("PDtE")),c=n("gbh0"),s=n("Rx6o"),l=n("x+AB"),d=n("mxPc"),p=r.forwardRef((function(e,t){var n=e.edge,c=void 0!==n&&n,s=e.children,p=e.classes,u=e.className,f=e.color,m=void 0===f?"default":f,b=e.disabled,v=void 0!==b&&b,h=e.disableFocusRipple,g=void 0!==h&&h,y=e.size,O=void 0===y?"medium":y,x=Object(a.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return r.createElement(l.a,Object(o.a)({className:Object(i.a)(p.root,u,"default"!==m&&p["color".concat(Object(d.a)(m))],v&&p.disabled,"small"===O&&p["size".concat(Object(d.a)(O))],{start:p.edgeStart,end:p.edgeEnd}[c]),centerRipple:!0,focusRipple:!g,disabled:v,ref:t},x),r.createElement("span",{className:p.label},s))}));t.a=Object(c.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(s.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(p)},rePB:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}))},vNVm:function(e,t,n){"use strict";var o=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,a=(0,r.useRef)(),l=(0,r.useState)(!1),d=o(l,2),p=d[0],u=d[1],f=(0,r.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||p||e&&e.tagName&&(a.current=function(e,t,n){var o=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:o}),n}(n),a=o.id,r=o.observer,i=o.elements;return i.set(e,t),r.observe(e),function(){r.unobserve(e),0===i.size&&(r.disconnect(),s.delete(a))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[n,t,p]);return(0,r.useEffect)((function(){c||p||(0,i.default)((function(){return u(!0)}))}),[p]),[f,p]};var r=n("mXGw"),i=a(n("0G5g")),c="undefined"!==typeof IntersectionObserver;var s=new Map}}]);