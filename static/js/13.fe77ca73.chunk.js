(this["webpackJsonp@react-page/examples"]=this["webpackJsonp@react-page/examples"]||[]).push([[13],{1053:function(e,t,r){"use strict";r.r(t);var a=r(454),n=r(203),o=r(621),i=r(195),l=r(144),s=r(0);t.default=function(e){var t,r;return s.createElement("div",null,s.createElement("div",{style:{display:"flex"}},e.imageUpload&&s.createElement(s.Fragment,null,s.createElement(l.a,{translations:e.translations,imageUpload:e.imageUpload,imageUploaded:function(t){return e.onChange({src:t.url})}}),s.createElement(i.a,{variant:"body1",style:{marginLeft:"20px",marginRight:"20px"}},e.translations.or)),s.createElement(o.a,{placeholder:e.translations.srcPlaceholder,label:e.imageUpload?e.translations.haveUrl:e.translations.imageUrl,name:"src",value:e.data.src,onChange:function(t){return e.onChange({src:t.target.value})}})),s.createElement(o.a,{placeholder:e.translations.hrefPlaceholder,label:e.translations.hrefLabel,name:"href",style:{width:"512px"},value:null!==(t=e.data.href)&&void 0!==t?t:"",onChange:function(t){return e.onChange({href:t.target.value})}}),s.createElement("br",null),s.createElement("br",null),s.createElement(n.a,{control:s.createElement(a.a,{value:null!==(r=e.data.openInNewWindow)&&void 0!==r&&r,onChange:function(t){return e.onChange({openInNewWindow:t.target.checked})}}),label:e.translations.openNewWindow}))}},144:function(e,t,r){"use strict";var a=r(0),n=r(1060),o=r(42),i=r(240),l=(r(239),r(241)),s=r(243),c=r(247);function d(e){var t,r,a;return t=e,r=0,a=1,e=(Math.min(Math.max(r,t),a)-r)/(a-r),e=(e-=1)*e*e+1}var p=a.forwardRef((function(e,t){var r,n=e.classes,s=e.className,p=e.color,u=void 0===p?"primary":p,m=e.disableShrink,h=void 0!==m&&m,f=e.size,g=void 0===f?40:f,v=e.style,b=e.thickness,E=void 0===b?3.6:b,y=e.value,k=void 0===y?0:y,x=e.variant,C=void 0===x?"indeterminate":x,w=Object(i.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),O={},U={},j={};if("determinate"===C||"static"===C){var S=2*Math.PI*((44-E)/2);O.strokeDasharray=S.toFixed(3),j["aria-valuenow"]=Math.round(k),"static"===C?(O.strokeDashoffset="".concat(((100-k)/100*S).toFixed(3),"px"),U.transform="rotate(-90deg)"):(O.strokeDashoffset="".concat((r=(100-k)/100,r*r*S).toFixed(3),"px"),U.transform="rotate(".concat((270*d(k/70)).toFixed(3),"deg)"))}return a.createElement("div",Object(o.a)({className:Object(l.a)(n.root,s,"inherit"!==u&&n["color".concat(Object(c.a)(u))],{indeterminate:n.indeterminate,static:n.static}[C]),style:Object(o.a)({width:g,height:g},U,v),ref:t,role:"progressbar"},j,w),a.createElement("svg",{className:n.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},a.createElement("circle",{className:Object(l.a)(n.circle,h&&n.circleDisableShrink,{indeterminate:n.circleIndeterminate,static:n.circleStatic}[C]),style:O,cx:44,cy:44,r:(44-E)/2,fill:"none",strokeWidth:E})))})),u=Object(s.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(p),m=r(431),h=r.n(m),f=r(429),g=r.n(f),v={buttonContent:"Upload image",noFileError:"No file selected",badExtensionError:"Bad file type",tooBigError:"Too big",uploadingError:"Error while uploading",unknownError:"Unknown error"},b=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}(),E=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isUploading:!1,hasError:!1,errorText:"",progress:0},t.hasExtension=function(e){var r="("+(t.props.allowedExtensions?t.props.allowedExtensions.map((function(e){return e.toLowerCase()})).join("|"):"").replace(/\./g,"\\.")+")$";return new RegExp(r,"i").test(e.toLowerCase())},t.handleError=function(e){var r="";switch(e){case 1:r=t.props.translations.noFileError;break;case 2:r=t.props.translations.badExtensionError;break;case 3:r=t.props.translations.tooBigError;break;case 4:r=t.props.translations.uploadingError;break;default:r=t.props.translations.unknownError}t.setState({hasError:!0,errorText:r,isUploading:!0},(function(){return t.setState({isUploading:!1})})),setTimeout((function(){return t.setState({hasError:!1,errorText:""})}),5e3)},t.handleFileSelected=function(e){if(e.target.files&&e.target.files[0]){var r=e.target.files[0];t.hasExtension(r.name)?r.size>t.props.maxFileSize?t.handleError(3):(t.props.imageLoaded&&t.readFile(r).then((function(e){return t.props.imageLoaded(e)})),t.props.imageUpload&&(t.setState({isUploading:!0}),t.props.imageUpload(r,t.handleReportProgress).then((function(e){t.setState({progress:void 0,isUploading:!1}),t.props.imageUploaded&&t.props.imageUploaded(e)})).catch((function(e){t.setState({isUploading:!1}),t.props.imageUploadError&&t.props.imageUploadError(e)})))):t.handleError(2)}else t.handleError(1)},t.handleFileUploadClick=function(){return t.fileInput.click()},t.handleReportProgress=function(e){return t.setState({progress:e})},t.renderChildren=function(){return t.state.isUploading?a.createElement(u,{value:t.state.progress,size:19}):t.state.hasError?a.createElement(a.Fragment,null,t.state.errorText,a.createElement(g.a,{style:{marginLeft:"8px"}})):a.createElement(a.Fragment,null,t.props.translations.buttonContent,t.props.icon)},t}return b(t,e),t.prototype.readFile=function(e){return new Promise((function(t,r){var a=new FileReader;a.onload=function(r){var a=r.target.result;a=a.replace(";base64",";name="+e.name+";base64"),t({file:e,dataUrl:a})},a.readAsDataURL(e)}))},t.prototype.render=function(){var e=this;return a.createElement(a.Fragment,null,a.createElement(n.a,{disabled:this.state.isUploading,variant:"contained",color:this.state.hasError?"secondary":"primary",onClick:this.handleFileUploadClick,style:this.props.style},this.renderChildren()),!this.state.isUploading&&a.createElement("input",{style:{display:"none"},ref:function(t){return e.fileInput=t},type:"file",onChange:this.handleFileSelected}))},t.defaultProps={icon:a.createElement(h.a,{style:{marginLeft:"8px"}}),allowedExtensions:["jpg","jpeg","png"],maxFileSize:5242880,translations:v},t}(a.Component);t.a=E},429:function(e,t,r){"use strict";var a=r(248);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(0)),o=(0,a(r(249)).default)(n.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error");t.default=o},431:function(e,t,r){"use strict";var a=r(248);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(0)),o=(0,a(r(249)).default)(n.default.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");t.default=o},454:function(e,t,r){"use strict";var a=r(2),n=r(4),o=r(0),i=(r(8),r(5)),l=r(88),s=r(82),c=Object(s.a)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(s.a)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=r(15),u=Object(s.a)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),m=r(11),h=r(7),f=o.createElement(d,null),g=o.createElement(c,null),v=o.createElement(u,null),b=o.forwardRef((function(e,t){var r=e.checkedIcon,s=void 0===r?f:r,c=e.classes,d=e.color,p=void 0===d?"secondary":d,u=e.icon,h=void 0===u?g:u,b=e.indeterminate,E=void 0!==b&&b,y=e.indeterminateIcon,k=void 0===y?v:y,x=e.inputProps,C=e.size,w=void 0===C?"medium":C,O=Object(n.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),U=E?k:h,j=E?k:s;return o.createElement(l.a,Object(a.a)({type:"checkbox",classes:{root:Object(i.a)(c.root,c["color".concat(Object(m.a)(p))],E&&c.indeterminate),checked:c.checked,disabled:c.disabled},color:p,inputProps:Object(a.a)({"data-indeterminate":E},x),icon:o.cloneElement(U,{fontSize:void 0===U.props.fontSize&&"small"===w?w:U.props.fontSize}),checkedIcon:o.cloneElement(j,{fontSize:void 0===j.props.fontSize&&"small"===w?w:j.props.fontSize}),ref:t},O))}));t.a=Object(h.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(p.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(p.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(b)}}]);
//# sourceMappingURL=13.fe77ca73.chunk.js.map