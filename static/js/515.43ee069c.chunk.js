"use strict";(self.webpackChunkredux=self.webpackChunkredux||[]).push([[515],{6515:function(e,a,t){t.r(a),t.d(a,{default:function(){return k}});var r=t(1413),s=t(885),n=t(7313),i=t(5554),l=t(9489),c=t(2938),u=t(4165),d=t(5861),o=t(4942),m=t(1387),p=t(3108),h=t.n(p),f=t(1638),v=t(9984),x=t(5987),w=["title","titleId"];var b=n.forwardRef((function(e,a){var t=e.title,r=e.titleId,s=(0,x.Z)(e,w);return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":r},s),t?n.createElement("title",{id:r},t):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"}))})),g=t(6417);function j(e){var a=e.authUser,t=JSON.parse(localStorage.getItem("currentUser")),l=null===t||void 0===t?void 0:t.user.avatar,c=null!==l&&void 0!==l&&l.startsWith("http")?0:Number(null===l||void 0===l?void 0:l.replace(/\D/g,"")),p=(0,i.v9)((function(e){return e.auth})),x=p.user,w=p.pending,j=(0,n.useState)({avatar:x.avatar,name:x.name,email:x.email,address:x.address,website:x.website,wishlist:x.wishlist}),N=(0,s.Z)(j,2),Z=N[0],y=N[1],k=(0,n.useState)(c),A=(0,s.Z)(k,2),C=A[0],U=A[1],I=(0,n.useState)(!1),S=(0,s.Z)(I,2),E=S[0],F=S[1],D=(0,f.Fw)(Z),L=(0,i.I0)();(0,n.useEffect)((function(){Z.avatar!==x.avatar&&(U(0),y((function(e){return(0,r.Z)((0,r.Z)({},e),{},{avatar:x.avatar})})))}),[x.avatar]);var z=function(e){var a=e.target.value.trim(),t=e.target.name;if("name"===t){var s=a.split(" "),n=s[0].charAt(0).toUpperCase()+s[0].slice(1),i=s[1]?s[1].charAt(0).toUpperCase()+s[1].slice(1):"";return y((function(e){return(0,r.Z)((0,r.Z)({},e),{},{name:(n+" "+i).trim()})}))}if("email"===t){if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(a))return}a.length>0?y((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,o.Z)({},t,a))})):y((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,o.Z)({},t,x[t]))}))},G=function(){var e=(0,d.Z)((0,u.Z)().mark((function e(t){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),h()(Z,x)){e.next=6;break}return a&&D(),e.next=5,L(v.hI.updateAsync((0,r.Z)((0,r.Z)({},x),{},{avatar:Z.avatar,name:Z.name,email:Z.email,address:Z.address,website:Z.website})));case 5:(0,m.Am)("Account successfully updated",{type:"success"});case 6:t.target.reset();case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,g.jsxs)("div",{className:"profile",children:[(0,g.jsx)("h1",{className:"page-header",children:"Update your account"}),(0,g.jsx)("p",{className:"mt-4 text-lg text-gray-500",children:"Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam"}),(0,g.jsxs)("form",{id:"detailsForm",className:"details mt-10 md:max-w-md",onSubmit:G,children:[(0,g.jsxs)("div",{className:"input-group md:flex-row md:gap-16 md:justify-between",children:[(0,g.jsxs)("div",{className:"icon md:text-center",children:[(0,g.jsx)("label",{className:"block font-bold",children:"Profile picture"}),(0,g.jsx)("img",{className:"avatar cursor-default my-4 md:my-7",src:Z.avatar,alt:"","aria-label":"Current user avatar",width:"64px",height:"64px",referrerPolicy:"no-referrer"}),(0,g.jsx)("span",{className:"swapper".concat(E?" spin":""),onClick:function(){F(!0);var e=c===C?c+1:C+1;10===C?(U(a?0:1),y((function(e){return(0,r.Z)((0,r.Z)({},e),{},{avatar:a?a.photoURL:"assets/avatars/".concat(1,".svg")})}))):(U(e),y((function(a){return(0,r.Z)((0,r.Z)({},a),{},{avatar:"assets/avatars/".concat(e,".svg")})})))},onAnimationEnd:function(){return F(!1)},children:(0,g.jsx)(b,{className:"swapper-icon"})})]}),(0,g.jsxs)("div",{className:"input-row md:self-center flex-grow",children:[(0,g.jsxs)("div",{className:"detail-input",children:[(0,g.jsx)("label",{className:"form-label",children:"Full name"}),(0,g.jsx)("input",{type:"text",name:"name",className:"form-input",disabled:w.update,placeholder:x.name,onChange:function(e){return z(e)}})]}),(0,g.jsxs)("div",{className:"detail-input",children:[(0,g.jsx)("label",{className:"form-label",children:"Email address"}),(0,g.jsx)("input",{type:"email",name:"email",className:"form-input",disabled:w.update,placeholder:x.email,pattern:"\\w+([\\.\\-]?\\w+)*@\\w+([\\.\\-]?\\w+)*(\\.\\w{2,63})",onChange:function(e){return z(e)}})]})]})]}),(0,g.jsxs)("div",{className:"input-group",children:[(0,g.jsxs)("div",{className:"detail-input",children:[(0,g.jsx)("label",{className:"form-label",children:"Address"}),(0,g.jsx)("input",{type:"text",name:"address",className:"form-input",disabled:w.update,placeholder:x.address,onChange:function(e){return z(e)}})]}),(0,g.jsxs)("div",{className:"detail-input",children:[(0,g.jsx)("label",{className:"form-label",children:"Website"}),(0,g.jsx)("input",{type:"text",name:"website",className:"form-input",disabled:w.update,placeholder:x.website,pattern:"(?:www\\.|(?!www))[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{2,63}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&//=]*)",onChange:function(e){return z(e)}})]})]}),(0,g.jsx)("div",{className:"detail-input",children:(0,g.jsx)("button",{className:"button",disabled:w.update||w.delete,type:"submit",form:"detailsForm",children:"Update"})})]})]})}var N=t(573),Z=t(9572);function y(e){var a=e.auth,t=e.authUser,r=e.pending,s=(0,i.I0)(),n=function(){var e=(0,d.Z)((0,u.Z)().mark((function e(){var r;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(v.hI.deleteGoogleStart()),e.next=4,(0,l.bc)(t,Z.V);case 4:return r=(0,N.JU)(Z.db,"users",t.uid),e.next=7,(0,N.oe)(r);case 7:return e.next=9,(0,l.h8)(t);case 9:return e.next=11,(0,l.w7)(a);case 11:s(v.hI.resetUser()),s(v.hI.deleteGoogleSuccess()),(0,m.Am)("Account successfully deleted",{type:"success"}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),s(v.hI.deleteGoogleError());case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return(0,g.jsxs)("div",{className:"delete",children:[(0,g.jsx)("h1",{className:"page-header",children:"Delete your account"}),(0,g.jsx)("p",{className:"mt-4 text-lg text-gray-500",children:"This will permanently erase your information from our database and all data will be lost, please proceed with caution"}),(0,g.jsx)("button",{className:"button danger mt-8",type:"button",onClick:n,disabled:r.delete||r.update,children:"Delete"})]})}function k(){var e=(0,i.v9)((function(e){return e.auth})).pending;(0,n.useEffect)((function(){document.title="Redux - Settings"}),[]);var a=(0,l.v0)(),t=(0,c.F_)(a),u=(0,s.Z)(t,1)[0],d={auth:a,authUser:u,pending:e};return(0,g.jsxs)("div",{className:"settings max-w-2xl gap-10",children:[(0,g.jsx)(j,{authUser:u}),u&&(0,g.jsx)(y,(0,r.Z)({},d))]})}}}]);