(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[54],{"t/Zn":function(e,a,t){"use strict";t.r(a);var n=t("Fcif"),o=t("dV/x"),r=t("mXGw"),c=t.n(r),l=(t("W0B4"),t("PDtE")),i=t("pF0b"),d=t("I9Y2"),s=Object(d.a)(r.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=Object(d.a)(r.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=t("Rx6o"),h=Object(d.a)(r.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),u=t("mxPc"),b=t("gbh0"),v=r.createElement(m,null),f=r.createElement(s,null),g=r.createElement(h,null),E=r.forwardRef((function(e,a){var t=e.checkedIcon,c=void 0===t?v:t,d=e.classes,s=e.color,m=void 0===s?"secondary":s,p=e.icon,h=void 0===p?f:p,b=e.indeterminate,E=void 0!==b&&b,k=e.indeterminateIcon,y=void 0===k?g:k,w=e.inputProps,C=e.size,O=void 0===C?"medium":C,x=Object(o.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),z=E?y:h,j=E?y:c;return r.createElement(i.a,Object(n.a)({type:"checkbox",classes:{root:Object(l.a)(d.root,d["color".concat(Object(u.a)(m))],E&&d.indeterminate),checked:d.checked,disabled:d.disabled},color:m,inputProps:Object(n.a)({"data-indeterminate":E},w),icon:r.cloneElement(z,{fontSize:void 0===z.props.fontSize&&"small"===O?O:z.props.fontSize}),checkedIcon:r.cloneElement(j,{fontSize:void 0===j.props.fontSize&&"small"===O?O:j.props.fontSize}),ref:a},x))})),k=Object(b.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(p.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(p.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(E),y=t("WLS8"),w=t("kebl"),C=t("/ZiB"),O=t("D9vu");a.default=function(e){var a,t;return c.a.createElement("div",null,c.a.createElement("div",{style:{display:"flex"}},e.imageUpload&&c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{translations:e.translations,imageUpload:e.imageUpload,imageUploaded:function(a){return e.onChange({src:a.url})}}),c.a.createElement(C.a,{variant:"body1",style:{marginLeft:"20px",marginRight:"20px"}},e.translations.or)),c.a.createElement(w.a,{placeholder:e.translations.srcPlaceholder,label:e.imageUpload?e.translations.haveUrl:e.translations.imageUrl,name:"src",value:e.data.src,onChange:function(a){return e.onChange({src:a.target.value})}})),c.a.createElement(w.a,{placeholder:e.translations.hrefPlaceholder,label:e.translations.hrefLabel,name:"href",style:{width:"512px"},value:null!==(a=e.data.href)&&void 0!==a?a:"",onChange:function(a){return e.onChange({href:a.target.value})}}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(y.a,{control:c.a.createElement(k,{value:null!==(t=e.data.openInNewWindow)&&void 0!==t&&t,onChange:function(a){return e.onChange({openInNewWindow:a.target.checked})}}),label:e.translations.openNewWindow}))}}}]);