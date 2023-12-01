"use strict";(self.webpackChunkarpespythontools=self.webpackChunkarpespythontools||[]).push([[937],{9134:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=a(5893),o=a(1151);const i={title:"Data visualization",keywords:["ARPES data visualization","data visualization","matplotlib","python data visualization"]},s=void 0,r={id:"visualization",title:"Data visualization",description:"This example provides basic example of image plot using matplotlib. There is",source:"@site/docs/visualization.md",sourceDirName:".",slug:"/visualization",permalink:"/arpespythontools/docs/visualization",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/arpespythontools/blob/main/docs/visualization.md",tags:[],version:"current",frontMatter:{title:"Data visualization",keywords:["ARPES data visualization","data visualization","matplotlib","python data visualization"]},sidebar:"docs",previous:{title:"Importing data",permalink:"/arpespythontools/docs/data-import"},next:{title:"k-space conversion",permalink:"/arpespythontools/docs/k-conv"}},p={},l=[{value:"Crop image",id:"crop-image",level:2}];function c(t){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:["This example provides basic example of image plot using ",(0,n.jsx)(e.strong,{children:"matplotlib"}),". There is\na huge list of customization possible using ",(0,n.jsx)(e.strong,{children:"matplotlib"}),". You can consult\n",(0,n.jsx)(e.a,{href:"https://matplotlib.org",children:"matplotlib"})," documentation for advanced customizations."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:"import arpespythontools as arp\ndata, energy, angle = arp.load_ses_spectra('sample_spectra.txt')\n\n# Plot image\nimport matplotlib.pyplot as plt\n%matplotlib inline\n# Above line is specific to Jupyter Notebook\nplt.figure(figsize = (8, 6))\nplt.imshow(data, origin = 'lower', aspect = 'auto', \\\n            extent = (angle[0], angle[-1], energy[0], energy[-1]))\nplt.xlabel(\"$\\\\theta$ (deg)\")\nplt.ylabel(\"$E_{kin}$ (eV)\")\nplt.set_cmap('magma_r')\nplt.show()\n"})}),"\n",(0,n.jsx)(e.p,{children:"You should see a plot like this upon successful execution:"}),"\n",(0,n.jsxs)("picture",{children:[(0,n.jsx)("source",{type:"image/webp",srcSet:a(3041).Z}),(0,n.jsx)("img",{src:a(4478).Z,alt:"plot-sample-spectra"})]}),"\n",(0,n.jsx)(e.h2,{id:"crop-image",children:"Crop image"}),"\n",(0,n.jsxs)(e.p,{children:["We can crop images (two-dimensionl data) using the ",(0,n.jsx)(e.code,{children:"crop_2d"})," function. Say, we\nwant to crop and focus only on the Dirac cone part. We want to crop the energy\nrange (16, 16.8) and angle range (-6, 4)."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:"# data_crop, x_crop, y_crop = crop_2d(data, x, y, x_min, x_max, y_min, y_max)\ndata_crop, x_crop, y_crop = arp.crop_2d(data, x, y, 16, 16.8, -6, 4)\n\nplt.figure(figsize = (8, 8))\nplt.imshow(data_crop, origin = 'lower', aspect = 'auto', \\\n            extent = (y_crop[0], y_crop[-1], x_crop[0], x_crop[-1]))\nplt.xlabel(\"$\\\\theta$ (deg)\")\nplt.ylabel(\"$E_{kin}$ (eV)\")\nplt.set_cmap('magma_r')\nplt.show()\n"})}),"\n",(0,n.jsxs)("picture",{children:[(0,n.jsx)("source",{type:"image/webp",srcSet:a(4166).Z}),(0,n.jsx)("img",{src:a(4090).Z,alt:"crop-image"})]}),"\n",(0,n.jsx)(e.p,{children:"That's what we wanted to achieve."}),"\n",(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsxs)(e.p,{children:["For advanced 3D visualization of Fermi map data, you may have a look at\n",(0,n.jsx)(e.a,{href:"https://pranabdas.github.io/python-tutorial/matplotlib/3d-vol",children:"this example"}),"\nfrom my Python tutorial."]})})]})}function d(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(c,{...t})}):c(t)}},4090:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/crop-image-e185c274ae29d3fb88395e3c40c68382.png"},4166:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/crop-image-3a68b70d22c71898f2148044700a45dd.webp"},4478:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/plot-sample-spectra-30f7cf719a7e35eebdd429721273b364.png"},3041:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/plot-sample-spectra-41f7615f6733228558a0ddbaefd37316.webp"},1151:(t,e,a)=>{a.d(e,{Z:()=>r,a:()=>s});var n=a(7294);const o={},i=n.createContext(o);function s(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);