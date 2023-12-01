"use strict";(self.webpackChunkarpespythontools=self.webpackChunkarpespythontools||[]).push([[733],{9967:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=a(5893),n=a(1151);const i={title:"Rotate Fermi map data",sidebar_label:"Rotate Fermi map"},l=void 0,r={id:"rotate",title:"Rotate Fermi map data",description:"If your Fermi map measurement was not done keeping the high symmetry directions",source:"@site/docs/rotate.md",sourceDirName:".",slug:"/rotate",permalink:"/arpespythontools/docs/rotate",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/arpespythontools/blob/main/docs/rotate.md",tags:[],version:"current",frontMatter:{title:"Rotate Fermi map data",sidebar_label:"Rotate Fermi map"},sidebar:"docs",previous:{title:"Slicing volume data",permalink:"/arpespythontools/docs/plane-slice"},next:{title:"Enhancing spectra",permalink:"/arpespythontools/docs/enhancements"}},m={},c=[{value:"Rotate 3D Fermi map data",id:"rotate-3d-fermi-map-data",level:2}];function h(s){const e={annotation:"annotation",code:"code",h2:"h2",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msubsup:"msubsup",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,n.a)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["If your Fermi map measurement was not done keeping the high symmetry directions\nalong the slit direction (or perpendicular to the slit direction), and you need\nto rotate the collected data in order to make the high symmetry directions along\nthe x- or y-coordinate, the ",(0,t.jsx)(e.code,{children:"rotate_2d"})," and ",(0,t.jsx)(e.code,{children:"rotate_3d"})," functions come handy.\nRemember positive rotation angle rotates clockwise, and center of rotation is at\n(",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsxs)(e.msub,{children:[(0,t.jsx)(e.mi,{children:"k"}),(0,t.jsx)(e.mi,{children:"x"})]}),(0,t.jsx)(e.mo,{children:"="}),(0,t.jsx)(e.mn,{children:"0"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"k_x=0"})]})})}),(0,t.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(e.span,{className:"vlist-r",children:[(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,t.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0315em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"})})]})}),(0,t.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,t.jsx)(e.span,{})})})]})})]}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(e.span,{className:"mrel",children:"="}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord",children:"0"})]})]})]}),", ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsxs)(e.msub,{children:[(0,t.jsx)(e.mi,{children:"k"}),(0,t.jsx)(e.mi,{children:"y"})]}),(0,t.jsx)(e.mo,{children:"="}),(0,t.jsx)(e.mn,{children:"0"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"k_y=0"})]})})}),(0,t.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.9805em",verticalAlign:"-0.2861em"}}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(e.span,{className:"vlist-r",children:[(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,t.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0315em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"y"})})]})}),(0,t.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,t.jsx)(e.span,{})})})]})})]}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(e.span,{className:"mrel",children:"="}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord",children:"0"})]})]})]}),")."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"rotate_2d"})," can rotate a 2D array with respect to its surface normal. Let's get\nsome Fermi map data first."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:"import arpespythontools as arp\nimport matplotlib.pyplot as plt\n%matplotlib inline\n\nurl = 'https://pranabdas.github.io/drive/datasets/arpes/sample_map_data.zip'\ndata, energy, theta, phi = arp.load_ses_map(url)\n\n# Plot one slice\nplt.figure(figsize = (8, 6))\nplt.imshow(data[150, :, :], origin = 'lower', aspect = 'auto', \\\n    extent = (phi[0], phi[-1], theta[0], theta[-1]))\nplt.show()\n"})}),"\n",(0,t.jsx)(e.p,{children:"This is how a constant energy cut looks like before rotation:"}),"\n",(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{type:"image/webp",srcSet:a(1180).Z}),(0,t.jsx)("img",{src:a(298).Z,alt:"rotate-before"})]}),"\n",(0,t.jsx)(e.p,{children:"Now, we can rotate only a single slice first."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:"data_r, theta_r, phi_r = arp.rotate_2d(data[150, :, :], 45, theta, phi)\n\n# Plot one slice\nplt.figure(figsize = (8, 6))\nplt.imshow(data_r, origin = 'lower', aspect = 'auto', \\\n    extent = (phi_r[0], phi_r[-1], theta_r[0], theta_r[-1]))\nplt.show()\n"})}),"\n",(0,t.jsx)(e.p,{children:"Let us plot a slice again. This is what we get after the rotation."}),"\n",(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{type:"image/webp",srcSet:a(5906).Z}),(0,t.jsx)("img",{src:a(4322).Z,alt:"rotate-after"})]}),"\n",(0,t.jsx)(e.h2,{id:"rotate-3d-fermi-map-data",children:"Rotate 3D Fermi map data"}),"\n",(0,t.jsxs)(e.p,{children:["Instead of rotating only one slice, we can also rotate the full 3D array.\n",(0,t.jsx)(e.code,{children:"rotate_3d"})," function needs the 3D map data (with first dimension along the\nenergy, second and third dimensions are ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsxs)(e.msub,{children:[(0,t.jsx)(e.mi,{children:"k"}),(0,t.jsx)(e.mi,{children:"x"})]})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"k_x"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(e.span,{className:"vlist-r",children:[(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,t.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0315em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"})})]})}),(0,t.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,t.jsx)(e.span,{})})})]})})]})]})})]})," and ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsxs)(e.msub,{children:[(0,t.jsx)(e.mi,{children:"k"}),(0,t.jsx)(e.mi,{children:"y"})]})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"k_y"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.9805em",verticalAlign:"-0.2861em"}}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(e.span,{className:"vlist-r",children:[(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,t.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0315em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"y"})})]})}),(0,t.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,t.jsx)(e.span,{})})})]})})]})]})})]}),", respectively) as\ninput. It needs ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsxs)(e.msub,{children:[(0,t.jsx)(e.mi,{children:"k"}),(0,t.jsx)(e.mi,{children:"x"})]})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"k_x"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(e.span,{className:"vlist-r",children:[(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,t.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0315em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"})})]})}),(0,t.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,t.jsx)(e.span,{})})})]})})]})]})})]})," and ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsxs)(e.msub,{children:[(0,t.jsx)(e.mi,{children:"k"}),(0,t.jsx)(e.mi,{children:"y"})]})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"k_y"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.9805em",verticalAlign:"-0.2861em"}}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(e.span,{className:"vlist-r",children:[(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,t.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0315em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"y"})})]})}),(0,t.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,t.jsx)(e.span,{})})})]})})]})]})})]})," vectors as input as well. Provide the required\nangle to rotate in degree as before. Axis of rotation is the first axis (i.e.,\nenergy). The function returns rotated data, new ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsxs)(e.msubsup,{children:[(0,t.jsx)(e.mi,{children:"k"}),(0,t.jsx)(e.mi,{children:"x"}),(0,t.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"k_x'"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.9989em",verticalAlign:"-0.247em"}}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(e.span,{className:"vlist-r",children:[(0,t.jsxs)(e.span,{className:"vlist",style:{height:"0.7519em"},children:[(0,t.jsxs)(e.span,{style:{top:"-2.453em",marginLeft:"-0.0315em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"})})]}),(0,t.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mtight",children:(0,t.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})]}),(0,t.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.247em"},children:(0,t.jsx)(e.span,{})})})]})})]})]})})]})," and ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsxs)(e.msubsup,{children:[(0,t.jsx)(e.mi,{children:"k"}),(0,t.jsx)(e.mi,{children:"y"}),(0,t.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"k_y'"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"1.135em",verticalAlign:"-0.3831em"}}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(e.span,{className:"vlist-r",children:[(0,t.jsxs)(e.span,{className:"vlist",style:{height:"0.7519em"},children:[(0,t.jsxs)(e.span,{style:{top:"-2.453em",marginLeft:"-0.0315em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"y"})})]}),(0,t.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mtight",children:(0,t.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})]}),(0,t.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.3831em"},children:(0,t.jsx)(e.span,{})})})]})})]})]})})]})," vectors.\nLet's see an example:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:"data_r, theta_r, phi_r = arp.rotate_3d(data, 45, theta, phi)\n\n# we can plot a slice after rotation to get the above result\nplt.imshow(data_r[150, :, :], origin = 'lower', aspect = 'auto', \\\n    extent = (phi_r[0], phi_r[-1], theta_r[0], theta_r[-1]))\nplt.show()\n"})})]})}function d(s={}){const{wrapper:e}={...(0,n.a)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(h,{...s})}):h(s)}},4322:(s,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/rotate-after-635f9277833e2ef3e0101055e9b4f216.png"},5906:(s,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/rotate-after-c9f7152b3266fd6c93b2d330087110c0.webp"},298:(s,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/rotate-before-2749c931e84261605318cb1c29152e9f.png"},1180:(s,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/rotate-before-a91d52dbed9b3f70ea1d022563df1843.webp"},1151:(s,e,a)=>{a.d(e,{Z:()=>r,a:()=>l});var t=a(7294);const n={},i=t.createContext(n);function l(s){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:l(s.components),t.createElement(i.Provider,{value:e},s.children)}}}]);