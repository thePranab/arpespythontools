"use strict";(self.webpackChunkarpespythontools=self.webpackChunkarpespythontools||[]).push([[211],{3056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var s=n(5893),r=n(1151);const a={title:"Slicing volume data"},i=void 0,o={id:"plane-slice",title:"Slicing volume data",description:"We can slice our 3D Fermi map data in order to get a particular plane using the",source:"@site/docs/plane-slice.md",sourceDirName:".",slug:"/plane-slice",permalink:"/arpespythontools/docs/plane-slice",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/arpespythontools/blob/main/docs/plane-slice.md",tags:[],version:"current",frontMatter:{title:"Slicing volume data"},sidebar:"docs",previous:{title:"Line profile",permalink:"/arpespythontools/docs/line-profile"},next:{title:"Rotate Fermi map",permalink:"/arpespythontools/docs/rotate"}},l={},p=[];function c(e){const t={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["We can slice our 3D Fermi map data in order to get a particular plane using the\r\n",(0,s.jsx)(t.code,{children:"plane_slice"})," function. Say, we need a constant energy cut."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:"showLineNumbers",children:"import arpespythontools as arp\r\ndata, energy, theta, phi = arp.load_ses_map('sample_map_data.zip')\r\n# We want iso-energy surface integrated between energy values 15.6 and 15.8 eV\r\niso_energy_surf = arp.plane_slice(data, energy, 15.6, 15.8)\r\n\r\n# Plot image\r\nimport matplotlib.pyplot as plt\r\n%matplotlib inline\r\n# Above line is specific to Jupyter Notebook\r\nplt.figure(figsize = (8, 6))\r\nplt.imshow(iso_energy_surf, origin = 'lower', aspect = 'auto', \\\r\n            extent = (theta[0], theta[-1], phi[0], phi[-1]))\r\nplt.xlabel(\"$\\\\phi$ (deg)\")\r\nplt.ylabel(\"$\\\\theta$ (deg)\")\r\nplt.show()\n"})}),"\n",(0,s.jsx)(t.p,{children:"This should give you an iso-energy surface like this:"}),"\n",(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{type:"image/webp",srcSet:n(4936).Z}),(0,s.jsx)("img",{src:n(2675).Z,alt:"iso-energy-surface"})]}),"\n",(0,s.jsx)(t.p,{children:"How about if we want the slice along another axis? All we need is transpose the\r\ndata, and provide the correct axis order."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:"showLineNumbers",children:"# integrating phi values between (-0.5, 0.5) degrees\r\nphi_slice = arp.plane_slice(data.transpose([2, 0, 1]), phi, -0.5, 0.5)\r\n\r\n# Plot image\r\nimport matplotlib.pyplot as plt\r\n%matplotlib inline\r\n# Above line is specific to Jupyter Notebook\r\nplt.figure(figsize = (8, 6))\r\nplt.imshow(phi_slice, origin = 'lower', aspect = 'auto', \\\r\n            extent = (phi[0], phi[-1], energy[0], energy[-1]))\r\nplt.xlabel(\"$\\\\theta$ (deg)\")\r\nplt.ylabel(\"$E_{kin}$ (eV)\")\r\nplt.show()\n"})}),"\n",(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{type:"image/webp",srcSet:n(8483).Z}),(0,s.jsx)("img",{src:n(5406).Z,alt:"phi-slice"})]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2675:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/iso-energy-surface-f877480b763d8848e675caf159b6155c.png"},4936:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/iso-energy-surface-12b9136739c1253a3d5bfff95869a7a4.webp"},5406:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/phi-slice-af798d816191e1c58e05a8774f26d9b3.png"},8483:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/phi-slice-4aeca814ede76933025f2c01725435d6.webp"},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(7294);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);