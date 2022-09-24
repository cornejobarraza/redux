"use strict";(self.webpackChunkredux=self.webpackChunkredux||[]).push([[121],{121:function(e,a,t){t.r(a),t.d(a,{default:function(){return x}});var n=t(4942),r=t(1413),i=t(885),s=t(7313),l=t(5554),d=t(9489),u=t(9984),c=t(7960),m=t(6661),o=t(5987),v=["title","titleId"];var p=s.forwardRef((function(e,a){var t=e.title,n=e.titleId,r=(0,o.Z)(e,v);return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":n},r),t?s.createElement("title",{id:n},t):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"}))})),h=t(2938),f=t(6417);function x(){var e=(0,l.v9)((function(e){return e.user})),a=e.user,t=e.pending,o=e.error,v=(0,s.useState)({name:null===a||void 0===a?void 0:a.name,email:null===a||void 0===a?void 0:a.email,avatar:null===a||void 0===a?void 0:a.avatar}),x=(0,i.Z)(v,2),g=x[0],j=x[1],w=(0,s.useState)(!1),b=(0,i.Z)(w,2),N=b[0],Z=b[1],k=(0,c.Fw)(g),y=(0,l.I0)();(0,s.useEffect)((function(){return function(){y(u.hI.clearStatus())}}),[y]);var C=(0,d.v0)(),E=(0,h.F_)(C),I=(0,i.Z)(E,2),F=I[0],M=I[1],S=function(e){var t=e.target.value.trim();if("email"===e.target.name){if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t))return}t.length>0?j((function(a){return(0,r.Z)((0,r.Z)({},a),{},(0,n.Z)({},e.target.name,t))})):j((function(t){return(0,r.Z)((0,r.Z)({},t),{},(0,n.Z)({},e.target.name,a[e.target.name]))}))};return(0,f.jsxs)("div",{className:"settings",children:[(0,f.jsxs)("div",{className:"description",children:[(0,f.jsx)("h1",{className:"page-header",children:"Update your account"}),(0,f.jsx)("p",{className:"mt-4 max-w-2xl text-xl text-gray-500 md:mx-auto md:text-center",children:"Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."})]}),(0,f.jsxs)("div",{className:"profile",children:[(0,f.jsxs)("div",{className:"picture md:text-center",children:[(0,f.jsx)("label",{className:"block mb-4 md:mb-0 font-bold",children:"Profile picture"}),(0,f.jsx)("img",{className:"avatar cursor-default md:my-7",src:g.avatar,alt:"","aria-label":"Current user avatar",width:"64px",height:"64px",referrerPolicy:"no-referrer"}),(0,f.jsx)("span",{className:"swapper".concat(N?" spin":""),onClick:function e(){Z(!0);var a=Math.round(99*Math.random());59===a?e():j((function(e){return(0,r.Z)((0,r.Z)({},e),{},{avatar:"https://avatars.dicebear.com/api/adventurer-neutral/".concat(a,".svg")})}))},onAnimationEnd:function(){return Z(!N)},children:(0,f.jsx)(p,{className:"swapper-icon"})})]}),(0,f.jsxs)("form",{id:"detailsForm",className:"details",onSubmit:function(e){e.preventDefault(),g.name===(null===a||void 0===a?void 0:a.name)&&g.email===(null===a||void 0===a?void 0:a.email)&&g.avatar===(null===a||void 0===a?void 0:a.avatar)||(F?(k(),y(u.hI.updateGoogleAsync({name:g.name,email:g.email,avatar:g.avatar}))):y(u.hI.updateAsync({name:g.name,email:g.email,avatar:g.avatar}))),e.target.reset()},children:[(0,f.jsxs)("div",{className:"detail-input",children:[(0,f.jsx)("label",{className:"form-label",children:"Full name"}),(0,f.jsx)("input",{name:"name",className:"form-input",disabled:t.update,placeholder:null===a||void 0===a?void 0:a.name,onChange:function(e){return S(e)}})]}),(0,f.jsxs)("div",{className:"detail-input mt-8",children:[(0,f.jsx)("label",{className:"form-label",children:"Email address"}),(0,f.jsx)("input",{name:"email",className:"form-input",disabled:t.update,placeholder:null===a||void 0===a?void 0:a.email,pattern:"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",onChange:function(e){return S(e)}})]})]}),(0,f.jsxs)("div",{className:"action lg:text-center md:-mt-8 w-full",children:[(0,f.jsx)("button",{className:"button",disabled:t.update,type:"submit",form:"detailsForm",children:"Update"}),t.update&&(0,f.jsx)("span",{className:"status",children:"Updating..."}),!1===t.update&&!o.update&&(0,f.jsx)("span",{className:"status",children:"Account has been updated!"}),o.update&&(0,f.jsx)("span",{className:"status",children:"Something went wrong"})]})]}),F&&!M&&(0,f.jsx)(m.dR,{}),F&&M&&(0,f.jsx)("p",{children:"Loading..."})]})}}}]);