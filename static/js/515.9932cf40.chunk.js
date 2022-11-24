"use strict";(self.webpackChunkredux=self.webpackChunkredux||[]).push([[515],{6515:function(e,a,t){t.r(a),t.d(a,{default:function(){return N}});var s=t(885),r=t(7313),n=t(4942),l=t(1413),i=t(5554),c=t(9984),u=t(1638),d=t(5987),o=["title","titleId"];var m=r.forwardRef((function(e,a){var t=e.title,s=e.titleId,n=(0,d.Z)(e,o);return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":s},n),t?r.createElement("title",{id:s},t):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"}))})),p=t(6417);function h(e){var a=e.authUser,t=(0,i.v9)((function(e){return e.user})),d=t.user,o=t.pending,h=t.error,f=(0,r.useState)({avatar:d.avatar,name:d.name,email:d.email,address:d.address,website:d.website}),x=(0,s.Z)(f,2),v=x[0],w=x[1],b=(0,r.useState)(!1),g=(0,s.Z)(b,2),j=g[0],N=g[1],y=(0,u.Fw)(v),Z=(0,i.I0)(),k=function(e){var a=e.target.value.trim(),t=e.target.name;if("email"===t){if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a))return}a.length>0?w((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,n.Z)({},t,a))})):w((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,n.Z)({},t,d[t]))}))};return(0,p.jsxs)("div",{className:"profile",children:[(0,p.jsx)("h1",{className:"page-header",children:"Update your account"}),(0,p.jsx)("p",{className:"mt-4 text-lg text-gray-500",children:"Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."}),(0,p.jsxs)("form",{id:"detailsForm",className:"details mt-8 md:max-w-md",onSubmit:function(e){e.preventDefault(),JSON.stringify(v)!==JSON.stringify(d)&&(a&&y(),Z(c.hI.updateAsync({avatar:v.avatar,name:v.name,email:v.email,address:v.address,website:v.website}))),e.target.reset()},children:[(0,p.jsxs)("div",{className:"input-group md:flex-row md:gap-16 md:justify-between",children:[(0,p.jsxs)("div",{className:"icon md:text-center",children:[(0,p.jsx)("label",{className:"block font-bold",children:"Profile picture"}),(0,p.jsx)("img",{className:"avatar cursor-default my-4 md:my-7",src:v.avatar,alt:"","aria-label":"Current user avatar",width:"64px",height:"64px",referrerPolicy:"no-referrer"}),(0,p.jsx)("span",{className:"swapper".concat(j?" spin":""),onClick:function e(){N(!0);var a=Math.round(99*Math.random());59===a?e():w((function(e){return(0,l.Z)((0,l.Z)({},e),{},{avatar:"https://avatars.dicebear.com/api/adventurer-neutral/".concat(a,".svg")})}))},onAnimationEnd:function(){return N(!j)},children:(0,p.jsx)(m,{className:"swapper-icon"})})]}),(0,p.jsxs)("div",{className:"input-row md:self-center",children:[(0,p.jsxs)("div",{className:"detail-input",children:[(0,p.jsx)("label",{className:"form-label",children:"Full name"}),(0,p.jsx)("input",{type:"text",name:"name",className:"form-input",disabled:o.update,placeholder:d.name,onChange:function(e){return k(e)}})]}),(0,p.jsxs)("div",{className:"detail-input",children:[(0,p.jsx)("label",{className:"form-label",children:"Email address"}),(0,p.jsx)("input",{type:"email",name:"email",className:"form-input",disabled:o.update,placeholder:d.email,pattern:"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",onChange:function(e){return k(e)}})]})]})]}),(0,p.jsxs)("div",{className:"input-group",children:[(0,p.jsxs)("div",{className:"detail-input",children:[(0,p.jsx)("label",{className:"form-label",children:"Address"}),(0,p.jsx)("input",{type:"text",name:"address",className:"form-input",disabled:o.update,placeholder:d.address,onChange:function(e){return k(e)}})]}),(0,p.jsxs)("div",{className:"detail-input",children:[(0,p.jsx)("label",{className:"form-label",children:"Website"}),(0,p.jsx)("input",{type:"text",name:"website",className:"form-input",disabled:o.update,placeholder:d.website,onChange:function(e){return k(e)}})]})]}),(0,p.jsx)("div",{className:"detail-input",children:(0,p.jsx)("button",{className:"button",disabled:o.update,type:"submit",form:"detailsForm",children:"Update"})}),!1===o.update&&!h.update&&(0,p.jsx)("span",{className:"status w-full",children:"Account has been updated!"}),h.update&&(0,p.jsx)("span",{className:"status w-full",children:"Something went wrong :("})]})]})}var f=t(4165),x=t(5861),v=t(9489),w=t(573),b=t(9572);function g(e){var a=e.auth,t=e.authUser,s=(0,i.v9)((function(e){return e.user})).error,r=(0,i.I0)(),n=function(){var e=(0,x.Z)((0,f.Z)().mark((function e(){var s;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(c.hI.deleteGoogleStart()),e.next=4,(0,v.bc)(t,b.V);case 4:return s=(0,w.JU)(b.db,"users",t.uid),e.next=7,(0,w.oe)(s);case 7:return e.next=9,(0,v.h8)(t);case 9:(0,v.w7)(a),r(c.hI.deleteGoogleSuccess()),r(c.hI.resetState()),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),r(c.hI.deleteGoogleError()),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:"delete",children:[(0,p.jsx)("h1",{className:"page-header",children:"Delete your account"}),(0,p.jsx)("p",{className:"mt-4 text-lg text-gray-500",children:"This will permanently erase your information from our database and all data will be lost, please proceed with caution."}),(0,p.jsx)("button",{className:"button danger mt-8",type:"button",onClick:n,children:"Delete"}),s.delete&&(0,p.jsx)("span",{className:"status mt-8",children:"Something went wrong :("})]})}var j=t(2938);function N(){(0,r.useEffect)((function(){document.title="Redux - Settings"}),[]);var e=(0,v.v0)(),a=(0,j.F_)(e),t=(0,s.Z)(a,1)[0];return(0,p.jsxs)("div",{className:"settings max-w-xl gap-12",children:[(0,p.jsx)(h,{authUser:t}),t&&(0,p.jsx)(g,{auth:e,authUser:t})]})}}}]);