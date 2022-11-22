"use strict";(self.webpackChunkredux=self.webpackChunkredux||[]).push([[515],{6515:function(e,a,t){t.r(a),t.d(a,{default:function(){return N}});var n=t(885),s=t(7313),r=t(4942),l=t(1413),i=t(5554),d=t(9984),u=t(1638),o=t(5987),c=["title","titleId"];var m=s.forwardRef((function(e,a){var t=e.title,n=e.titleId,r=(0,o.Z)(e,c);return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":n},r),t?s.createElement("title",{id:n},t):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"}))})),p=t(6417);function v(e){var a=e.authUser,t=(0,i.v9)((function(e){return e.user})),o=t.user,c=t.pending,v=t.error,h=(0,s.useState)({name:null===o||void 0===o?void 0:o.name,email:null===o||void 0===o?void 0:o.email,avatar:null===o||void 0===o?void 0:o.avatar,address:null===o||void 0===o?void 0:o.address,website:null===o||void 0===o?void 0:o.website}),f=(0,n.Z)(h,2),x=f[0],w=f[1],b=(0,s.useState)(!1),g=(0,n.Z)(b,2),j=g[0],N=g[1],y=(0,u.Fw)(x),Z=(0,i.I0)(),k=function(e){var a=e.target.value.trim();if("email"===e.target.name){if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a))return}a.length>0?w((function(t){return(0,l.Z)((0,l.Z)({},t),{},(0,r.Z)({},e.target.name,a))})):w((function(a){return(0,l.Z)((0,l.Z)({},a),{},(0,r.Z)({},e.target.name,o[e.target.name]))}))};return(0,p.jsxs)("div",{className:"profile",children:[(0,p.jsx)("h1",{className:"page-header",children:"Update your account"}),(0,p.jsx)("p",{className:"mt-4 text-lg text-gray-500",children:"Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."}),(0,p.jsxs)("form",{id:"detailsForm",className:"details mt-8 md:max-w-md",onSubmit:function(e){e.preventDefault(),x.name===(null===o||void 0===o?void 0:o.name)&&x.email===(null===o||void 0===o?void 0:o.email)&&x.avatar===(null===o||void 0===o?void 0:o.avatar)&&x.address===(null===o||void 0===o?void 0:o.address)&&x.website===(null===o||void 0===o?void 0:o.website)||(a&&y(),Z(d.hI.updateAsync({name:x.name,email:x.email,avatar:x.avatar,address:x.address,website:x.website}))),e.target.reset()},children:[(0,p.jsxs)("div",{className:"input-group md:flex-row md:gap-16 md:justify-between",children:[(0,p.jsxs)("div",{className:"icon md:text-center",children:[(0,p.jsx)("label",{className:"block font-bold",children:"Profile picture"}),(0,p.jsx)("img",{className:"avatar cursor-default my-4 md:my-7",src:x.avatar,alt:"","aria-label":"Current user avatar",width:"64px",height:"64px",referrerPolicy:"no-referrer"}),(0,p.jsx)("span",{className:"swapper".concat(j?" spin":""),onClick:function e(){N(!0);var a=Math.round(99*Math.random());59===a?e():w((function(e){return(0,l.Z)((0,l.Z)({},e),{},{avatar:"https://avatars.dicebear.com/api/adventurer-neutral/".concat(a,".svg")})}))},onAnimationEnd:function(){return N(!j)},children:(0,p.jsx)(m,{className:"swapper-icon"})})]}),(0,p.jsxs)("div",{className:"input-row md:self-center",children:[(0,p.jsxs)("div",{className:"detail-input",children:[(0,p.jsx)("label",{className:"form-label",children:"Full name"}),(0,p.jsx)("input",{type:"text",name:"name",className:"form-input",disabled:c.update,placeholder:null===o||void 0===o?void 0:o.name,onChange:function(e){return k(e)}})]}),(0,p.jsxs)("div",{className:"detail-input",children:[(0,p.jsx)("label",{className:"form-label",children:"Email address"}),(0,p.jsx)("input",{type:"email",name:"email",className:"form-input",disabled:c.update,placeholder:null===o||void 0===o?void 0:o.email,pattern:"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",onChange:function(e){return k(e)}})]})]})]}),(0,p.jsxs)("div",{className:"input-group",children:[(0,p.jsxs)("div",{className:"detail-input",children:[(0,p.jsx)("label",{className:"form-label",children:"Address"}),(0,p.jsx)("input",{type:"text",name:"address",className:"form-input",disabled:c.update,placeholder:null===o||void 0===o?void 0:o.address,onChange:function(e){return k(e)}})]}),(0,p.jsxs)("div",{className:"detail-input",children:[(0,p.jsx)("label",{className:"form-label",children:"Website"}),(0,p.jsx)("input",{type:"text",name:"website",className:"form-input",disabled:c.update,placeholder:null===o||void 0===o?void 0:o.website,onChange:function(e){return k(e)}})]})]}),(0,p.jsx)("div",{className:"detail-input",children:(0,p.jsx)("button",{className:"button",disabled:c.update,type:"submit",form:"detailsForm",children:"Update"})}),!1===c.update&&!v.update&&(0,p.jsx)("span",{className:"status w-full",children:"Account has been updated!"}),v.update&&(0,p.jsx)("span",{className:"status w-full",children:"Something went wrong :("})]})]})}var h=t(4165),f=t(5861),x=t(9489),w=t(573),b=t(9572);function g(e){var a=e.auth,t=e.authUser,n=(0,i.v9)((function(e){return e.user})).error,s=(0,i.I0)(),r=function(){var e=(0,f.Z)((0,h.Z)().mark((function e(){var n;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(d.hI.deleteGoogleStart()),e.next=4,(0,x.bc)(t,b.V);case 4:return n=(0,w.JU)(b.db,"users",t.uid),e.next=7,(0,w.oe)(n);case 7:return e.next=9,(0,x.h8)(t);case 9:(0,x.w7)(a),s(d.hI.deleteGoogleSuccess()),s(d.hI.resetState()),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),s(d.hI.deleteGoogleError()),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:"delete",children:[(0,p.jsx)("h1",{className:"page-header",children:"Delete your account"}),(0,p.jsx)("p",{className:"mt-4 text-lg text-gray-500",children:"This will permanently erase your information from our database and all data will be lost, please proceed with caution."}),(0,p.jsx)("button",{className:"button danger mt-8",type:"button",onClick:r,children:"Delete"}),n.delete&&(0,p.jsx)("span",{className:"status mt-8",children:"Something went wrong :("})]})}var j=t(2938);function N(){(0,s.useEffect)((function(){document.title="Redux - Settings"}),[]);var e=(0,x.v0)(),a=(0,j.F_)(e),t=(0,n.Z)(a,1)[0];return(0,p.jsxs)("div",{className:"settings max-w-xl gap-16",children:[(0,p.jsx)(v,{authUser:t}),t&&(0,p.jsx)(g,{auth:e,authUser:t})]})}}}]);