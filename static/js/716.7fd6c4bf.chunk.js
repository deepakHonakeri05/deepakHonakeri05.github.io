"use strict";(self.webpackChunkdeepakHonakeri05=self.webpackChunkdeepakHonakeri05||[]).push([[716],{1716:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(2791),i=a(184);function l(){const[e,s]=(0,t.useState)(""),[a,l]=(0,t.useState)(""),[r,n]=(0,t.useState)("");return(0,t.useEffect)((()=>{fetch("https://contactusserver-deepakhonakeri5.b4a.run/messages")}),[]),(0,i.jsx)("div",{className:"form",children:(0,i.jsxs)("form",{onSubmit:async t=>{t.preventDefault();try{200===(await fetch("https://contactusserver-deepakhonakeri5.b4a.run/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:a,message:r})})).status?(s(""),l(""),n(""),alert("Message sent successfully")):alert("Some error occured")}catch(i){console.log(i)}},children:[(0,i.jsx)("input",{class:"inputFields",type:"text",value:e,placeholder:"Name",onChange:e=>s(e.target.value),required:!0}),(0,i.jsx)("br",{}),(0,i.jsx)("input",{class:"inputFields",type:"email",value:a,placeholder:"Email",onChange:e=>l(e.target.value),required:!0}),(0,i.jsx)("br",{}),(0,i.jsx)("input",{type:"text",class:"inputFields",value:r,placeholder:"Message",onChange:e=>n(e.target.value),required:!0}),(0,i.jsx)("button",{type:"submit",id:"submitButton",children:"Submit"})]})})}var r=a(3365),n=a(4670),c=a(1394);function o(e){let{prof:s}=e;return n.pM?s.hireable="Yes":s.hireable="No",(0,i.jsx)(c.pT,{bottom:!0,duration:1e3,distance:"20px",children:(0,i.jsxs)("div",{className:"main",id:"contact",children:[(0,i.jsx)("h1",{className:"prof-title",children:"Reach Out to me!"}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"main-content-profile",children:[(0,i.jsx)("div",{className:"blog-header",children:(0,i.jsx)("p",{className:"subTitle blog-subtitle",children:n.ns.subtitle})}),(0,i.jsx)(l,{}),null!==s.location&&(0,i.jsx)("div",{className:"location-div",children:(0,i.jsxs)("span",{className:"desc-prof",children:[(0,i.jsx)("svg",{viewBox:"-0.5 -2 20 19",version:"1.1",width:"22",height:"16","aria-hidden":"true",stroke:"currentColor",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"})}),s.location]})}),(0,i.jsx)("div",{className:"opp-div",children:(0,i.jsxs)("span",{className:"desc-prof",children:["Open for opportunities: ",s.hireable]})}),(0,i.jsx)(r.Z,{})]}),(0,i.jsx)("div",{className:"image-content-profile",children:(0,i.jsx)("img",{src:s.avatarUrl,alt:s.name,className:"profile-image"})})]})]})})}}}]);
//# sourceMappingURL=716.7fd6c4bf.chunk.js.map