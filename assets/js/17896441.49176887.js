(self.webpackChunkarpespythontools=self.webpackChunkarpespythontools||[]).push([["48"],{7594:function(e,t){function n(e){let t,n=[];for(let s of e.split(",").map(e=>e.trim()))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,l,i]=t;if(s&&i){s=parseInt(s);let e=s<(i=parseInt(i))?1:-1;("-"===l||".."===l||"\u2025"===l)&&(i+=e);for(let t=s;t!==i;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},2520:function(e,t,n){"use strict";n.d(t,{Z:()=>b});var s=n("5893");n("7294");var l=n("7026"),i=n("4681"),a=n("3413"),o=n("9246"),r=n("3012"),c=n("6025"),d=n("4757");function u(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}let m="breadcrumbHomeIcon_YNFT";function h(){let e=(0,d.ZP)("/");return(0,s.jsx)("li",{className:"breadcrumbs__item",children:(0,s.jsx)(r.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,s.jsx)(u,{className:m})})})}let p="breadcrumbsContainer_Z_bl";function f(e){let{children:t,href:n,isLast:l}=e,i="breadcrumbs__link";return l?(0,s.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,s.jsx)(r.Z,{className:i,href:n,itemProp:"item",children:(0,s.jsx)("span",{itemProp:"name",children:t})}):(0,s.jsx)("span",{className:i,children:t})}function x(e){let{children:t,active:n,index:i,addMicrodata:a}=e;return(0,s.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,s.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function b(){let e=(0,a.s1)(),t=(0,o.Ns)();return e?(0,s.jsx)("nav",{className:(0,l.Z)(i.k.docs.docBreadcrumbs,p),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,s.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,s.jsx)(h,{}),e.map((t,n)=>{let l=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,s.jsx)(x,{active:l,index:n,addMicrodata:!!i,children:(0,s.jsx)(f,{href:i,isLast:l,children:t.label})},n)})]})}):null}},6356:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>ti});var s=n("5893"),l=n("7294"),i=n("4713"),a=n("5346");let o=l.createContext(null);function r(e){var t;let{children:n,content:i}=e;let a=(t=i,(0,l.useMemo)(()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,contentTitle:t.contentTitle,toc:t.toc}),[t]));return(0,s.jsx)(o.Provider,{value:a,children:n})}function c(){let e=(0,l.useContext)(o);if(null===e)throw new a.i6("DocProvider");return e}function d(){var e;let{metadata:t,frontMatter:n,assets:l}=c();return(0,s.jsx)(i.d,{title:t.title,description:t.description,keywords:n.keywords,image:null!==(e=l.image)&&void 0!==e?e:n.image})}var u=n("7026"),m=n("4704"),h=n("3944");function p(){let{metadata:e}=c();return(0,s.jsx)(h.Z,{previous:e.previous,next:e.next})}var f=n("9580"),x=n("6035"),b=n("4681"),v=n("6025"),j=n("3012");let g={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function N(e){let{permalink:t,label:n,count:l,description:i}=e;return(0,s.jsxs)(j.Z,{href:t,title:i,className:(0,u.Z)(g.tag,l?g.tagWithCount:g.tagRegular),children:[n,l&&(0,s.jsx)("span",{children:l})]})}let y="tags_jXut",k="tag_QGVx";function C(e){let{tags:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("b",{children:(0,s.jsx)(v.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,s.jsx)("ul",{className:(0,u.Z)(y,"padding--none","margin-left--sm"),children:t.map(e=>(0,s.jsx)("li",{className:k,children:(0,s.jsx)(N,{...e})},e.permalink))})]})}let Z="iconEdit_Z9Sw";function _(e){let{className:t,...n}=e;return(0,s.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(Z,t),"aria-hidden":"true",...n,children:(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function B(e){let{editUrl:t}=e;return(0,s.jsxs)(j.Z,{to:t,className:b.k.common.editThisPage,children:[(0,s.jsx)(_,{}),(0,s.jsx)(v.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var w=n("2933");function L(e){let{lastUpdatedAt:t}=e,n=new Date(t),l=(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{i18n:{currentLocale:t}}=(0,w.Z)(),n=function(){let{i18n:{currentLocale:e,localeConfigs:t}}=(0,w.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})})({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,s.jsx)(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,s.jsx)("b",{children:(0,s.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:l})})},children:" on {date}"})}function T(e){let{lastUpdatedBy:t}=e;return(0,s.jsx)(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,s.jsx)("b",{children:t})},children:" by {user}"})}function E(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,s.jsxs)("span",{className:b.k.common.lastUpdated,children:[(0,s.jsx)(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,s.jsx)(L,{lastUpdatedAt:t}):"",byUser:n?(0,s.jsx)(T,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}let I="lastUpdated_JAkA";function A(e){let{className:t,editUrl:n,lastUpdatedAt:l,lastUpdatedBy:i}=e;return(0,s.jsxs)("div",{className:(0,u.Z)("row",t),children:[(0,s.jsx)("div",{className:"col",children:n&&(0,s.jsx)(B,{editUrl:n})}),(0,s.jsx)("div",{className:(0,u.Z)("col",I),children:(l||i)&&(0,s.jsx)(E,{lastUpdatedAt:l,lastUpdatedBy:i})})]})}function M(){let{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,tags:i}=e,a=i.length>0,o=!!(t||n||l);return a||o?(0,s.jsxs)("footer",{className:(0,u.Z)(b.k.docs.docFooter,"docusaurus-mt-lg"),children:[a&&(0,s.jsx)("div",{className:(0,u.Z)("row margin-top--sm",b.k.docs.docFooterTagsRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(C,{tags:i})})}),o&&(0,s.jsx)(A,{className:(0,u.Z)("margin-top--sm",b.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l})]}):null}var H=n("7455"),S=n("140");function V(e){let t=e.getBoundingClientRect();return t.top===t.bottom?V(e.parentNode):t}let z=l.memo(function e(t){let{toc:n,className:l,linkClassName:i,isChild:a}=t;return n.length?(0,s.jsx)("ul",{className:a?void 0:l,children:n.map(t=>(0,s.jsxs)("li",{children:[(0,s.jsx)(j.Z,{to:"#".concat(t.id),className:null!=i?i:void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,s.jsx)(e,{isChild:!0,toc:t.children,className:l,linkClassName:i})]},t.id))}):null});function R(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:r,...c}=e,d=(0,S.L)(),u=null!=o?o:d.tableOfContents.minHeadingLevel,m=null!=r?r:d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,l.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:s,maxHeadingLevel:l}=t;return n.flatMap(t=>{var n;let i=e({toc:t.children,minHeadingLevel:s,maxHeadingLevel:l});return(n=t).level>=s&&n.level<=l?[{...t,children:i}]:i})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t});let s=[];return t.forEach(e=>{let{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):s.push(l)}),s}(t),minHeadingLevel:n,maxHeadingLevel:s}),[t,n,s])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return!function(e){let t=(0,l.useRef)(void 0),n=function(){let e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,S.L)();return(0,l.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,l.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:s,linkActiveClassName:l,minHeadingLevel:i,maxHeadingLevel:a}=e;function o(){var e;let o=(e=s,Array.from(document.getElementsByClassName(e))),r=function(e,t){var n,s,l;let{anchorTopOffset:i}=t,a=e.find(e=>V(e).top>=i);if(a){;return(l=V(a)).top>0&&l.bottom<window.innerHeight/2?a:null!==(n=e[e.indexOf(a)-1])&&void 0!==n?n:null}return null!==(s=e[e.length-1])&&void 0!==s?s:null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,s=[];for(let e=t;e<=n;e+=1)s.push("h".concat(e,".anchor"));return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:a}),{anchorTopOffset:n.current}),c=o.find(e=>{var t;return r&&r.id===decodeURIComponent((t=e).href.substring(t.href.indexOf("#")+1))});o.forEach(e=>{var n;n=e,e===c?(t.current&&t.current!==n&&t.current.classList.remove(l),n.classList.add(l),t.current=n):n.classList.remove(l)})}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}},[e,n])}((0,l.useMemo)(()=>{if(i&&a)return{linkClassName:i,linkActiveClassName:a,minHeadingLevel:u,maxHeadingLevel:m}},[i,a,u,m])),(0,s.jsx)(z,{toc:h,className:n,linkClassName:i,...c})}let U={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function O(e){let{collapsed:t,...n}=e;return(0,s.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",U.tocCollapsibleButton,!t&&U.tocCollapsibleButtonExpanded,n.className),children:(0,s.jsx)(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}let D={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function P(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:i}=e,{collapsed:a,toggleCollapsed:o}=(0,H.u)({initialState:!0});return(0,s.jsxs)("div",{className:(0,u.Z)(D.tocCollapsible,!a&&D.tocCollapsibleExpanded,n),children:[(0,s.jsx)(O,{collapsed:a,onClick:o}),(0,s.jsx)(H.z,{lazy:!0,className:D.tocCollapsibleContent,collapsed:a,children:(0,s.jsx)(R,{toc:t,minHeadingLevel:l,maxHeadingLevel:i})})]})}let F="tocMobile_ITEo";function W(){let{toc:e,frontMatter:t}=c();return(0,s.jsx)(P,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(b.k.docs.docTocMobile,F)})}let q="tableOfContents_bqdL";function G(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,u.Z)(q,"thin-scrollbar",t),children:(0,s.jsx)(R,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}function J(){let{toc:e,frontMatter:t}=c();return(0,s.jsx)(G,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:b.k.docs.docTocDesktop})}var $=n("4403"),Y=n("65"),Q=n("4819"),X=n("7227"),K=n("4239");function ee(){let{prism:e}=(0,S.L)(),{colorMode:t}=(0,K.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var et=n("7594"),en=n.n(et);let es=/title=(?<quote>["'])(?<title>.*?)\1/,el=/\{(?<range>[\d,-]+)\}/,ei={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},ea={...ei,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},eo=Object.keys(ei);function er(e,t){let n=e.map(e=>{let{start:n,end:s}=ea[e];return"(?:".concat(n,"\\s*(").concat(t.flatMap(e=>{var t,n;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(n=e.block)||void 0===n?void 0:n.end].filter(Boolean)}).join("|"),")\\s*").concat(s,")")}).join("|");return new RegExp("^\\s*(?:".concat(n,")\\s*$"))}let ec="codeBlockContainer_Ckt0";function ed(e){let{as:t,...n}=e,l=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(e=>{let[s,l]=e,i=t[s];i&&"string"==typeof l&&(n[i]=l)}),n}(ee());return(0,s.jsx)(t,{...n,style:l,className:(0,u.Z)(n.className,ec,b.k.common.codeBlock)})}let eu={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function em(e){let{children:t,className:n}=e;return(0,s.jsx)(ed,{as:"pre",tabIndex:0,className:(0,u.Z)(eu.codeBlockStandalone,"thin-scrollbar",n),children:(0,s.jsx)("code",{className:eu.codeBlockLines,children:t})})}let eh={attributes:!0,characterData:!0,childList:!0,subtree:!0};var ep=n("3229");let ef={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function ex(e){let{line:t,classNames:n,showLineNumbers:l,getLineProps:i,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");let o=i({line:t,className:(0,u.Z)(n,l&&ef.codeLine)}),r=t.map((e,t)=>(0,s.jsx)("span",{...a({token:e})},t));return(0,s.jsxs)("span",{...o,children:[l?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:ef.codeLineNumber}),(0,s.jsx)("span",{className:ef.codeLineContent,children:r})]}):r,(0,s.jsx)("br",{})]})}function eb(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function ev(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let ej={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function eg(e){let{code:t,className:n}=e,[i,a]=(0,l.useState)(!1),o=(0,l.useRef)(void 0),r=(0,l.useCallback)(()=>{!function(e){let{target:t=document.body}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw TypeError("Expected parameter `text` to be a `string`, got `".concat(typeof e,"`."));let n=document.createElement("textarea"),s=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";let l=document.getSelection(),i=l.rangeCount>0&&l.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}n.remove(),i&&(l.removeAllRanges(),l.addRange(i)),s&&s.focus()}(t),a(!0),o.current=window.setTimeout(()=>{a(!1)},1e3)},[t]);return(0,l.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,s.jsx)("button",{type:"button","aria-label":i?(0,v.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,v.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,v.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.Z)("clean-btn",n,ej.copyButton,i&&ej.copyButtonCopied),onClick:r,children:(0,s.jsxs)("span",{className:ej.copyButtonIcons,"aria-hidden":"true",children:[(0,s.jsx)(eb,{className:ej.copyButtonIcon}),(0,s.jsx)(ev,{className:ej.copyButtonSuccessIcon})]})})}function eN(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let ey={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function ek(e){let{className:t,onClick:n,isEnabled:l}=e,i=(0,v.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,s.jsx)("button",{type:"button",onClick:n,className:(0,u.Z)("clean-btn",t,l&&ey.wordWrapButtonEnabled),"aria-label":i,title:i,children:(0,s.jsx)(eN,{className:ey.wordWrapButtonIcon,"aria-hidden":"true"})})}function eC(e){var t,n,i,o,r,c;let{children:d,className:m="",metastring:h,title:p,showLineNumbers:f,language:x}=e,{prism:{defaultLanguage:b,magicComments:v}}=(0,S.L)();let j=null==(n=null!==(t=null!=x?x:function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return null==t?void 0:t.replace(/language-/,"")}(m))&&void 0!==t?t:b)?void 0:n.toLowerCase(),g=ee(),N=function(){let[e,t]=(0,l.useState)(!1),[n,s]=(0,l.useState)(!1),i=(0,l.useRef)(null),o=(0,l.useCallback)(()=>{let n=i.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[i,e]),r=(0,l.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=i.current;s(e>t||i.current.querySelector("code").hasAttribute("style"))},[i]);return!function(e,t){let[n,s]=(0,l.useState)(),i=(0,l.useCallback)(()=>{var t;s(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))},[e,s]);(0,l.useEffect)(()=>{i()},[i]),!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:eh,s=(0,a.zX)(t),i=(0,a.Ql)(n);(0,l.useEffect)(()=>{let t=new MutationObserver(s);return e&&t.observe(e,i),()=>t.disconnect()},[e,s,i])}(n,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(i,r),(0,l.useEffect)(()=>{r()},[e,r]),(0,l.useEffect)(()=>(window.addEventListener("resize",r,{passive:!0}),()=>{window.removeEventListener("resize",r)}),[r]),{codeBlockRef:i,isEnabled:e,isCodeScrollable:n,toggle:o}}();let y=(null!==(r=null==(i=h)?void 0:null===(o=i.match(es))||void 0===o?void 0:o.groups.title)&&void 0!==r?r:"")||p,{lineClassNames:k,code:C}=function(e,t){let n=e.replace(/\n$/,""),{language:s,magicComments:l,metastring:i}=t;if(i&&el.test(i)){let e=i.match(el).groups.range;if(0===l.length)throw Error("A highlight range has been given in code block's metastring (``` ".concat(i,"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges."));let t=l[0].className;return{lineClassNames:Object.fromEntries(en()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:n}}if(void 0===s)return{lineClassNames:{},code:n};let a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return er(["js","jsBlock"],t);case"jsx":case"tsx":return er(["js","jsBlock","jsx"],t);case"html":return er(["js","jsBlock","html"],t);case"python":case"py":case"bash":return er(["bash"],t);case"markdown":case"md":return er(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return er(["tex"],t);case"lua":case"haskell":case"sql":return er(["lua"],t);case"wasm":return er(["wasm"],t);case"vb":case"vba":case"visual-basic":return er(["vb","rem"],t);case"vbnet":return er(["vbnet","rem"],t);case"batch":return er(["rem"],t);case"basic":return er(["rem","f90"],t);case"fsharp":return er(["js","ml"],t);case"ocaml":case"sml":return er(["ml"],t);case"fortran":return er(["f90"],t);case"cobol":return er(["cobol"],t);default:return er(eo,t)}}(s,l),o=n.split("\n"),r=Object.fromEntries(l.map(e=>[e.className,{start:0,range:""}])),c=Object.fromEntries(l.filter(e=>e.line).map(e=>{let{className:t,line:n}=e;return[n,t]})),d=Object.fromEntries(l.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.start,t]})),u=Object.fromEntries(l.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.end,t]}));for(let e=0;e<o.length;){let t=o[e].match(a);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);c[n]?r[c[n]].range+="".concat(e,","):d[n]?r[d[n]].start=e:u[n]&&(r[u[n]].range+="".concat(r[u[n]].start,"-").concat(e-1,",")),o.splice(e,1)}n=o.join("\n");let m={};return Object.entries(r).forEach(e=>{let[t,{range:n}]=e;en()(n).forEach(e=>{var n;null!==(n=m[e])&&void 0!==n||(m[e]=[]),m[e].push(t)})}),{lineClassNames:m,code:n}}(d,{metastring:h,language:j,magicComments:v});let Z=null!=f?f:!!(null==(c=h)?void 0:c.includes("showLineNumbers"));return(0,s.jsxs)(ed,{as:"div",className:(0,u.Z)(m,j&&!m.includes("language-".concat(j))&&"language-".concat(j)),children:[y&&(0,s.jsx)("div",{className:eu.codeBlockTitle,children:y}),(0,s.jsxs)("div",{className:eu.codeBlockContent,children:[(0,s.jsx)(ep.y$,{theme:g,code:C,language:null!=j?j:"text",children:e=>{let{className:t,style:n,tokens:l,getLineProps:i,getTokenProps:a}=e;return(0,s.jsx)("pre",{tabIndex:0,ref:N.codeBlockRef,className:(0,u.Z)(t,eu.codeBlock,"thin-scrollbar"),style:n,children:(0,s.jsx)("code",{className:(0,u.Z)(eu.codeBlockLines,Z&&eu.codeBlockLinesWithNumbering),children:l.map((e,t)=>(0,s.jsx)(ex,{line:e,getLineProps:i,getTokenProps:a,classNames:k[t],showLineNumbers:Z},t))})})}}),(0,s.jsxs)("div",{className:eu.buttonGroup,children:[(N.isEnabled||N.isCodeScrollable)&&(0,s.jsx)(ek,{className:eu.codeButton,onClick:()=>N.toggle(),isEnabled:N.isEnabled}),(0,s.jsx)(eg,{className:eu.codeButton,code:C})]})]})]})}function eZ(e){var t;let{children:n,...i}=e,a=(0,X.Z)();let o=(t=n,l.Children.toArray(t).some(e=>(0,l.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t);return(0,s.jsx)("string"==typeof o?eC:em,{...i,children:o},String(a))}function e_(e){return(0,s.jsx)("code",{...e})}var eB=n("1065");let ew={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function eL(e){return!!e&&("SUMMARY"===e.tagName||eL(e.parentElement))}function eT(e){let{summary:t,children:n,...i}=e;(0,eB.Z)().collectAnchor(i.id);let a=(0,X.Z)(),o=(0,l.useRef)(null),{collapsed:r,setCollapsed:c}=(0,H.u)({initialState:!i.open}),[d,m]=(0,l.useState)(i.open),h=l.isValidElement(t)?t:(0,s.jsx)("summary",{children:null!=t?t:"Details"});return(0,s.jsxs)("details",{...i,ref:o,open:d,"data-collapsed":r,className:(0,u.Z)(ew.details,a&&ew.isBrowser,i.className),onMouseDown:e=>{eL(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();let t=e.target;if(!!(eL(t)&&function e(t,n){return!!t&&(t===n||e(t.parentElement,n))}(t,o.current)))e.preventDefault(),r?(c(!1),m(!0)):c(!0)},children:[h,(0,s.jsx)(H.z,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),m(!e)},children:(0,s.jsx)("div",{className:ew.collapsibleContent,children:n})})]})}let eE="details_b_Ee";function eI(e){let{...t}=e;return(0,s.jsx)(eT,{...t,className:(0,u.Z)("alert alert--info",eE,t.className)})}function eA(e){let t=l.Children.toArray(e.children),n=t.find(e=>l.isValidElement(e)&&"summary"===e.type),i=(0,s.jsx)(s.Fragment,{children:t.filter(e=>e!==n)});return(0,s.jsx)(eI,{...e,summary:n,children:i})}function eM(e){return(0,s.jsx)($.Z,{...e})}let eH={containsTaskList:"containsTaskList_mC6p"},eS="img_ev3q",eV={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function ez(e){let{type:t,className:n,children:l}=e;return(0,s.jsx)("div",{className:(0,u.Z)(b.k.common.admonition,b.k.common.admonitionType(t),eV.admonition,n),children:l})}function eR(e){let{icon:t,title:n}=e;return(0,s.jsxs)("div",{className:eV.admonitionHeading,children:[(0,s.jsx)("span",{className:eV.admonitionIcon,children:t}),n]})}function eU(e){let{children:t}=e;return t?(0,s.jsx)("div",{className:eV.admonitionContent,children:t}):null}function eO(e){let{type:t,icon:n,title:l,children:i,className:a}=e;return(0,s.jsxs)(ez,{type:t,className:a,children:[l||n?(0,s.jsx)(eR,{title:l,icon:n}):null,(0,s.jsx)(eU,{children:i})]})}let eD={icon:(0,s.jsx)(function(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},{}),title:(0,s.jsx)(v.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function eP(e){return(0,s.jsx)(eO,{...eD,...e,className:(0,u.Z)("alert alert--secondary",e.className),children:e.children})}let eF={icon:(0,s.jsx)(function(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},{}),title:(0,s.jsx)(v.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function eW(e){return(0,s.jsx)(eO,{...eF,...e,className:(0,u.Z)("alert alert--success",e.className),children:e.children})}let eq={icon:(0,s.jsx)(function(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},{}),title:(0,s.jsx)(v.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function eG(e){return(0,s.jsx)(eO,{...eq,...e,className:(0,u.Z)("alert alert--info",e.className),children:e.children})}function eJ(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}let e$={icon:(0,s.jsx)(eJ,{}),title:(0,s.jsx)(v.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})},eY={icon:(0,s.jsx)(function(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},{}),title:(0,s.jsx)(v.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},eQ={icon:(0,s.jsx)(eJ,{}),title:(0,s.jsx)(v.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})},eX={note:eP,tip:eW,info:eG,warning:function(e){return(0,s.jsx)(eO,{...e$,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(eO,{...eY,...e,className:(0,u.Z)("alert alert--danger",e.className),children:e.children})},secondary:e=>(0,s.jsx)(eP,{title:"secondary",...e}),important:e=>(0,s.jsx)(eG,{title:"important",...e}),success:e=>(0,s.jsx)(eW,{title:"success",...e}),caution:function(e){return(0,s.jsx)(eO,{...eQ,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})}};function eK(e){let t=function(e){var t;let{mdxAdmonitionTitle:n,rest:i}=function(e){let t=l.Children.toArray(e),n=t.find(e=>l.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),i=t.filter(e=>e!==n);return{mdxAdmonitionTitle:null==n?void 0:n.props.children,rest:i.length>0?(0,s.jsx)(s.Fragment,{children:i}):null}}(e.children),a=null!==(t=e.title)&&void 0!==t?t:n;return{...e,...a&&{title:a},children:i}}(e),n=function(e){let t=eX[e];return t?t:(console.warn('No admonition component found for admonition type "'.concat(e,'". Using Info as fallback.')),eX.info)}(t.type);return(0,s.jsx)(n,{...t})}let e0={Head:Q.Z,details:eA,Details:eA,code:function(e){var t;return void 0!==(t=e).children&&l.Children.toArray(t.children).every(e=>"string"==typeof e&&!e.includes("\n"))?(0,s.jsx)(e_,{...e}):(0,s.jsx)(eZ,{...e})},a:function(e){return(0,s.jsx)(j.Z,{...e})},pre:function(e){return(0,s.jsx)(s.Fragment,{children:e.children})},ul:function(e){return(0,s.jsx)("ul",{...e,className:function(e){if(void 0!==e)return(0,u.Z)(e,(null==e?void 0:e.includes("contains-task-list"))&&eH.containsTaskList)}(e.className)})},li:function(e){return(0,eB.Z)().collectAnchor(e.id),(0,s.jsx)("li",{...e})},img:function(e){var t;return(0,s.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,u.Z)(t,eS))})},h1:e=>(0,s.jsx)(eM,{as:"h1",...e}),h2:e=>(0,s.jsx)(eM,{as:"h2",...e}),h3:e=>(0,s.jsx)(eM,{as:"h3",...e}),h4:e=>(0,s.jsx)(eM,{as:"h4",...e}),h5:e=>(0,s.jsx)(eM,{as:"h5",...e}),h6:e=>(0,s.jsx)(eM,{as:"h6",...e}),admonition:eK,mermaid:()=>null};function e1(e){let{children:t}=e;return(0,s.jsx)(Y.Z,{components:e0,children:t})}function e2(e){let{children:t}=e,n=function(){let{metadata:e,frontMatter:t,contentTitle:n}=c();return!t.hide_title&&void 0===n?e.title:null}();return(0,s.jsxs)("div",{className:(0,u.Z)(b.k.docs.docMarkdown,"markdown"),children:[n&&(0,s.jsx)("header",{children:(0,s.jsx)($.Z,{as:"h1",children:n})}),(0,s.jsx)(e1,{children:t})]})}var e5=n("2520");function e3(){return(0,s.jsx)(v.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function e4(){return(0,s.jsx)(v.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function e7(){return(0,s.jsx)(Q.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function e6(){return(0,s.jsx)(v.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function e9(){return(0,s.jsx)(v.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}function e8(e){let{className:t}=e;return(0,s.jsx)(eK,{type:"caution",title:(0,s.jsx)(e6,{}),className:(0,u.Z)(t,b.k.common.draftBanner),children:(0,s.jsx)(e9,{})})}function te(e){let{className:t}=e;return(0,s.jsx)(eK,{type:"caution",title:(0,s.jsx)(e3,{}),className:(0,u.Z)(t,b.k.common.unlistedBanner),children:(0,s.jsx)(e4,{})})}function tt(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e7,{}),(0,s.jsx)(te,{...e})]})}function tn(e){let{metadata:t}=e,{unlisted:n,frontMatter:l}=t;return(0,s.jsxs)(s.Fragment,{children:[(n||l.unlisted)&&(0,s.jsx)(tt,{}),l.draft&&(0,s.jsx)(e8,{})]})}let ts={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function tl(e){let{children:t}=e,n=function(){let{frontMatter:e,toc:t}=c(),n=(0,m.i)(),l=e.hide_table_of_contents,i=!l&&t.length>0,a=i?(0,s.jsx)(W,{}):void 0;return{hidden:l,mobile:a,desktop:i&&("desktop"===n||"ssr"===n)?(0,s.jsx)(J,{}):void 0}}(),{metadata:l}=c();return(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&ts.docItemCol),children:[(0,s.jsx)(tn,{metadata:l}),(0,s.jsx)(f.Z,{}),(0,s.jsxs)("div",{className:ts.docItemContainer,children:[(0,s.jsxs)("article",{children:[(0,s.jsx)(e5.Z,{}),(0,s.jsx)(x.Z,{}),n.mobile,(0,s.jsx)(e2,{children:t}),(0,s.jsx)(M,{})]}),(0,s.jsx)(p,{})]})]}),n.desktop&&(0,s.jsx)("div",{className:"col col--3",children:n.desktop})]})}function ti(e){let t="docs-doc-id-".concat(e.content.metadata.id),n=e.content;return(0,s.jsx)(r,{content:e.content,children:(0,s.jsxs)(i.FG,{className:t,children:[(0,s.jsx)(d,{}),(0,s.jsx)(tl,{children:(0,s.jsx)(n,{})})]})})}},3944:function(e,t,n){"use strict";n.d(t,{Z:()=>r});var s=n("5893");n("7294");var l=n("6025"),i=n("7026"),a=n("3012");function o(e){let{permalink:t,title:n,subLabel:l,isNext:o}=e;return(0,s.jsxs)(a.Z,{className:(0,i.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,s.jsx)("div",{className:"pagination-nav__label",children:n})]})}function r(e){let{previous:t,next:n}=e;return(0,s.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,s.jsx)(o,{...t,subLabel:(0,s.jsx)(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,s.jsx)(o,{...n,subLabel:(0,s.jsx)(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},6035:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(5893);n(7294);var l=n(7026),i=n(6025),a=n(4681),o=n(8529);function r(e){let{className:t}=e,n=(0,o.E)();return n.badge?(0,s.jsx)("span",{className:(0,l.Z)(t,a.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,s.jsx)(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},9580:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var s=n(5893);n(7294);var l=n(7026),i=n(2933),a=n(3012),o=n(6025),r=n(8057),c=n(4681),d=n(3896),u=n(8529);let m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){let t=m[e.versionMetadata.banner];return(0,s.jsx)(t,{...e})}function p(e){let{versionLabel:t,to:n,onClick:l}=e;return(0,s.jsx)(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,s.jsx)("b",{children:(0,s.jsx)(a.Z,{to:n,onClick:l,children:(0,s.jsx)(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function f(e){let t,{className:n,versionMetadata:a}=e,{siteConfig:{title:o}}=(0,i.Z)(),{pluginId:u}=(0,r.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(u),{latestDocSuggestion:f,latestVersionSuggestion:x}=(0,r.Jo)(u);let b=null!=f?f:(t=x).docs.find(e=>e.id===t.mainDocId);return(0,s.jsxs)("div",{className:(0,l.Z)(n,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,s.jsx)("div",{children:(0,s.jsx)(h,{siteTitle:o,versionMetadata:a})}),(0,s.jsx)("div",{className:"margin-top--md",children:(0,s.jsx)(p,{versionLabel:x.label,to:b.path,onClick:()=>m(x.name)})})]})}function x(e){let{className:t}=e,n=(0,u.E)();return n.banner?(0,s.jsx)(f,{className:t,versionMetadata:n}):null}},65:function(e,t,n){"use strict";n.d(t,{Z:function(){return o},a:function(){return a}});var s=n(7294);let l={},i=s.createContext(l);function a(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);