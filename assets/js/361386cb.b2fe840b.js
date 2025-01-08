"use strict";(self.webpackChunkarpespythontools=self.webpackChunkarpespythontools||[]).push([["747"],{8944:function(e,a,n){n.r(a),n.d(a,{default:()=>c,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>s});var t=JSON.parse('{"id":"data-import","title":"Loading ARPES data","description":"At the moment, this module can only import data produced by Scienta-Omicron SES","source":"@site/docs/data-import.md","sourceDirName":".","slug":"/data-import","permalink":"/arpespythontools/docs/data-import","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/arpespythontools/blob/main/docs/data-import.md","tags":[],"version":"current","frontMatter":{"title":"Loading ARPES data","sidebar_label":"Importing data","keywords":["arpes data","ses","scienta","scienta-omicron"]},"sidebar":"docs","previous":{"title":"Hands-on","permalink":"/arpespythontools/docs/category/hands-on"},"next":{"title":"Data visualization","permalink":"/arpespythontools/docs/visualization"}}'),o=n("5893"),r=n("65");let i={title:"Loading ARPES data",sidebar_label:"Importing data",keywords:["arpes data","ses","scienta","scienta-omicron"]},s=void 0,d={},l=[{value:"Load ARPES Spectra from SES plaintext file",id:"load-arpes-spectra-from-ses-plaintext-file",level:3},{value:"Load Fermi Map data from SES ZIP file",id:"load-fermi-map-data-from-ses-zip-file",level:3}];function p(e){let a={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.p,{children:["At the moment, this module can only import data produced by Scienta-Omicron SES\nprogram. However, you can implement custom loader specific to your data file,\nand use other modules. Here is an example of ",(0,o.jsx)(a.a,{href:"https://github.com/pranabdas/arpespythontools/blob/main/src/arpespythontools/custom_loader_one.py",children:"custom loader"}),".\nFor the spectral scans, we will use SES produced plaintext (",(0,o.jsx)(a.code,{children:".txt"}),") output file\nas input, while in case of Fermi map data, we will need the ZIP files as input\nformat."]}),"\n",(0,o.jsxs)(a.p,{children:["First thing first, import ",(0,o.jsx)(a.code,{children:"arpespythontools"})," in your program:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-python",children:"import arpespythontools as arp\n"})}),"\n",(0,o.jsx)(a.h3,{id:"load-arpes-spectra-from-ses-plaintext-file",children:"Load ARPES Spectra from SES plaintext file"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-python",children:"data, energy, angle = arp.load_ses_spectra('sample_spectra.txt')\n"})}),"\n",(0,o.jsxs)(a.p,{children:["Here, ",(0,o.jsx)(a.code,{children:"data"})," is a two dimensional numpy array; x-dimension is along energy and\ny-dimension is along angle/theta. ",(0,o.jsx)(a.code,{children:"energy"})," and ",(0,o.jsx)(a.code,{children:"angle"})," are one dimensional\nvectors of kinetic energy in eV and angle values are in degree, respectively."]}),"\n",(0,o.jsx)(a.admonition,{type:"tip",children:(0,o.jsxs)(a.p,{children:["If you have a workflow to directly work from cloud services like Dropbox or\nOneDrive, it is possible to import data directly from an URL source instead of\nlocal file path. You will require additional code for Dropbox or OneDrive\nauthentication, which is not currently included with ",(0,o.jsx)(a.strong,{children:"arpespythontools"}),"."]})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-python",children:'url = "https://pranabdas.github.io/drive/datasets/arpes/sample_spectrum.txt"\ndata, energy, angle = arp.load_ses_spectra(url)\n'})}),"\n",(0,o.jsx)(a.h3,{id:"load-fermi-map-data-from-ses-zip-file",children:"Load Fermi Map data from SES ZIP file"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-python",children:"map_data, energy, theta, phi = arp.load_ses_map('sample_map_data.zip')\n"})}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.code,{children:"map_data"})," will contain three dimensional array of Fermi map data; x-dimension\nis along energy, y-dimension is along theta and z-dimension is along phi.\n",(0,o.jsx)(a.code,{children:"energy"}),", ",(0,o.jsx)(a.code,{children:"theta"}),", and ",(0,o.jsx)(a.code,{children:"phi"})," are one dimensional vectors of kinetic energy (eV),\ntheta (deg), and phi (deg), respectively."]}),"\n",(0,o.jsxs)(a.p,{children:["Notice that you do not need to unzip the SES produced ",(0,o.jsx)(a.code,{children:".zip"})," file, the program\ndirectly reads from ",(0,o.jsx)(a.code,{children:".zip"})," file."]})]})}function c(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},65:function(e,a,n){n.d(a,{Z:function(){return s},a:function(){return i}});var t=n(7294);let o={},r=t.createContext(o);function i(e){let a=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);