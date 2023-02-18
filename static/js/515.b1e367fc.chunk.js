"use strict";(self.webpackChunkredux=self.webpackChunkredux||[]).push([[515],{6515:function(e,a,t){t.r(a),t.d(a,{default:function(){return y}});var r=t(885),s=t(7313),n=t(4942),i=t(1413),l=t(5554),u=t(1387),c=t(5987),d=["title","titleId"];var o=s.forwardRef((function(e,a){var t=e.title,r=e.titleId,n=(0,c.Z)(e,d);return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":r},n),t?s.createElement("title",{id:r},t):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"}))})),m=t(1638),p=t(9984),h=t(6417);function f(e){var a=e.authUser,t=(0,l.v9)((function(e){return e.user})),c=t.user,d=t.pending,f=t.error,x=(0,s.useState)({avatar:c.avatar,name:c.name,email:c.email,address:c.address,website:c.website}),v=(0,r.Z)(x,2),b=v[0],w=v[1],g=(0,s.useState)(!1),j=(0,r.Z)(g,2),N=j[0],y=j[1],Z=(0,m.Fw)(b),S=(0,l.I0)();(0,s.useEffect)((function(){!1!==d.update||f.update||((0,u.Am)("Account successfully updated!",{type:"success"}),S(p.hI.clearStatus())),f.update&&((0,u.Am)("Something went wrong, please try again",{type:"error"}),S(p.hI.clearStatus()))}),[d.update,f.update,S]);var k=function(e){var a=e.target.value.trim(),t=e.target.name;if("email"===t){if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(a))return}a.length>0?w((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,n.Z)({},t,a))})):w((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,n.Z)({},t,c[t]))}))};return(0,h.jsxs)("div",{className:"profile",children:[(0,h.jsx)("h1",{className:"page-header",children:"Update your account"}),(0,h.jsx)("p",{className:"mt-4 text-lg text-gray-500",children:"Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."}),(0,h.jsxs)("form",{id:"detailsForm",className:"details mt-8 md:max-w-md",onSubmit:function(e){e.preventDefault(),JSON.stringify(b)!==JSON.stringify(c)&&(a&&Z(),S(p.hI.updateAsync({avatar:b.avatar,name:b.name,email:b.email,address:b.address,website:b.website}))),e.target.reset()},children:[(0,h.jsxs)("div",{className:"input-group md:flex-row md:gap-16 md:justify-between",children:[(0,h.jsxs)("div",{className:"icon md:text-center",children:[(0,h.jsx)("label",{className:"block font-bold",children:"Profile picture"}),(0,h.jsx)("img",{className:"avatar cursor-default my-4 md:my-7",src:b.avatar,alt:"","aria-label":"Current user avatar",width:"64px",height:"64px",referrerPolicy:"no-referrer"}),(0,h.jsx)("span",{className:"swapper".concat(N?" spin":""),onClick:function e(){y(!0);var a=Math.round(99*Math.random());59===a?e():w((function(e){return(0,i.Z)((0,i.Z)({},e),{},{avatar:"https://avatars.dicebear.com/api/adventurer-neutral/".concat(a,".svg")})}))},onAnimationEnd:function(){return y(!N)},children:(0,h.jsx)(o,{className:"swapper-icon"})})]}),(0,h.jsxs)("div",{className:"input-row md:self-center flex-grow",children:[(0,h.jsxs)("div",{className:"detail-input",children:[(0,h.jsx)("label",{className:"form-label",children:"Full name"}),(0,h.jsx)("input",{type:"text",name:"name",className:"form-input",disabled:d.update,placeholder:c.name,onChange:function(e){return k(e)}})]}),(0,h.jsxs)("div",{className:"detail-input",children:[(0,h.jsx)("label",{className:"form-label",children:"Email address"}),(0,h.jsx)("input",{type:"email",name:"email",className:"form-input",disabled:d.update,placeholder:c.email,pattern:"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",onChange:function(e){return k(e)}})]})]})]}),(0,h.jsxs)("div",{className:"input-group",children:[(0,h.jsxs)("div",{className:"detail-input",children:[(0,h.jsx)("label",{className:"form-label",children:"Address"}),(0,h.jsx)("input",{type:"text",name:"address",className:"form-input",disabled:d.update,placeholder:c.address,onChange:function(e){return k(e)}})]}),(0,h.jsxs)("div",{className:"detail-input",children:[(0,h.jsx)("label",{className:"form-label",children:"Website"}),(0,h.jsx)("input",{type:"text",name:"website",className:"form-input",disabled:d.update,placeholder:c.website,pattern:"^[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{2,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$",onChange:function(e){return k(e)}})]})]}),(0,h.jsx)("div",{className:"detail-input",children:(0,h.jsx)("button",{className:"button",disabled:d.update,type:"submit",form:"detailsForm",children:"Update"})})]})]})}var x=t(4165),v=t(5861),b=t(9489),w=t(573),g=t(9572);function j(e){var a=e.auth,t=e.authUser,r=(0,l.v9)((function(e){return e.user})).error,n=(0,l.I0)();(0,s.useEffect)((function(){r.delete&&((0,u.Am)("Something went wrong, please try again",{type:"error"}),n(p.hI.clearStatus()))}),[r.delete,n]);var i=function(){var e=(0,v.Z)((0,x.Z)().mark((function e(){var r;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(p.hI.deleteGoogleStart()),e.next=4,(0,b.bc)(t,g.V);case 4:return r=(0,w.JU)(g.db,"users",t.uid),e.next=7,(0,w.oe)(r);case 7:return e.next=9,(0,b.h8)(t);case 9:(0,b.w7)(a),n(p.hI.deleteGoogleSuccess()),n(p.hI.resetState()),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),n(p.hI.deleteGoogleError()),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:"delete",children:[(0,h.jsx)("h1",{className:"page-header",children:"Delete your account"}),(0,h.jsx)("p",{className:"mt-4 text-lg text-gray-500",children:"This will permanently erase your information from our database and all data will be lost, please proceed with caution."}),(0,h.jsx)("button",{className:"button danger mt-8",type:"button",onClick:i,children:"Delete"})]})}var N=t(2938);function y(){(0,s.useEffect)((function(){document.title="Redux - Settings"}),[]);var e=(0,b.v0)(),a=(0,N.F_)(e),t=(0,r.Z)(a,1)[0];return(0,h.jsxs)("div",{className:"settings max-w-xl gap-12",children:[(0,h.jsx)(f,{authUser:t}),t&&(0,h.jsx)(j,{auth:e,authUser:t})]})}}}]);