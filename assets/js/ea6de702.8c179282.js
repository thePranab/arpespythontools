"use strict";(self.webpackChunkarpespythontools=self.webpackChunkarpespythontools||[]).push([[937],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9407:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],p={title:"Data visualization",keywords:["ARPES data visualization","data visualization","matplotlib","python data visualization"]},l=void 0,s={unversionedId:"visualization",id:"visualization",title:"Data visualization",description:"This example provides basic example of image plot using matplotlib. There is",source:"@site/docs/visualization.md",sourceDirName:".",slug:"/visualization",permalink:"/arpespythontools/docs/visualization",draft:!1,editUrl:"https://github.com/pranabdas/arpespythontools/blob/main/docs/visualization.md",tags:[],version:"current",frontMatter:{title:"Data visualization",keywords:["ARPES data visualization","data visualization","matplotlib","python data visualization"]},sidebar:"docs",previous:{title:"Importing data",permalink:"/arpespythontools/docs/data-import"},next:{title:"k-space conversion",permalink:"/arpespythontools/docs/k-conv"}},c={},u=[{value:"Crop image",id:"crop-image",level:2}],m={toc:u};function d(e){var t=e.components,p=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example provides basic example of image plot using ",(0,r.kt)("strong",{parentName:"p"},"matplotlib"),". There is\na huge list of customization possible using ",(0,r.kt)("strong",{parentName:"p"},"matplotlib"),". You can consult\n",(0,r.kt)("a",{parentName:"p",href:"https://matplotlib.org"},"matplotlib")," documentation for advanced customizations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"import arpespythontools as arp\ndata, energy, angle = arp.load_ses_spectra('sample_spectra.txt')\n\n# Plot image\nimport matplotlib.pyplot as plt\n%matplotlib inline\n# Above line is specific to Jupyter Notebook\nplt.figure(figsize = (8, 6))\nplt.imshow(data, origin = 'lower', aspect = 'auto', \\\n            extent = (angle[0], angle[-1], energy[0], energy[-1]))\nplt.xlabel(\"$\\\\theta$ (deg)\")\nplt.ylabel('$E_{kin}$ (eV)')\nplt.set_cmap('magma_r')\nplt.show()\n")),(0,r.kt)("p",null,"You should see a plot like this upon successful execution:"),(0,r.kt)("picture",null,(0,r.kt)("source",{type:"image/webp",srcSet:n(3041).Z}),(0,r.kt)("img",{src:n(4478).Z,alt:"plot-sample-spectra"})),(0,r.kt)("h2",{id:"crop-image"},"Crop image"),(0,r.kt)("p",null,"We can crop images (two-dimensionl data) using the ",(0,r.kt)("inlineCode",{parentName:"p"},"crop_2d")," function. Say, we\nwant to crop and focus only on the Dirac cone part. We want to crop the energy\nrange (16, 16.8) and angle range (-6, 4)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},"# data_crop, x_crop, y_crop = crop_2d(data, x, y, x_min, x_max, y_min, y_max)\ndata_crop, x_crop, y_crop = arp.crop_2d(data, x, y, 16, 16.8, -6, 4)\n\nplt.figure(figsize = (8, 8))\nplt.imshow(data_crop, origin = 'lower', aspect = 'auto', \\\n            extent = (y_crop[0], y_crop[-1], x_crop[0], x_crop[-1]))\nplt.xlabel(\"$\\\\theta$ (deg)\")\nplt.ylabel('$E_{kin}$ (eV)')\nplt.set_cmap('magma_r')\nplt.show()\n")),(0,r.kt)("picture",null,(0,r.kt)("source",{type:"image/webp",srcSet:n(4166).Z}),(0,r.kt)("img",{src:n(4090).Z,alt:"crop-image"})),(0,r.kt)("p",null,"That's what we wanted to achieve."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For advanced 3D visualization of Fermi map data, you may have a look at\n",(0,r.kt)("a",{parentName:"p",href:"https://pranabdas.github.io/python-tutorial/matplotlib/3d-vol"},"this example"),"\nfrom my Python tutorial.")))}d.isMDXComponent=!0},4090:function(e,t,n){t.Z=n.p+"assets/images/crop-image-e0e922335cb435d2ed981fe02e9ad9f2.png"},4166:function(e,t,n){t.Z=n.p+"assets/images/crop-image-0d38ec4badf682b001be36a9ba53e18d.webp"},4478:function(e,t,n){t.Z=n.p+"assets/images/plot-sample-spectra-30f7cf719a7e35eebdd429721273b364.png"},3041:function(e,t,n){t.Z=n.p+"assets/images/plot-sample-spectra-41f7615f6733228558a0ddbaefd37316.webp"}}]);