"use strict";(self.webpackChunkredux=self.webpackChunkredux||[]).push([[267],{6267:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var s=n(7313),a=n(5554),r=n(1413),i=n(4165),c=n(5861),l=n(885),o=n(3108),u=n.n(o),d=n(9489),x=n(2938),m=n(3440),h=n(8885),g=n(9984),p=n(6417);function f(){var e=(0,a.v9)((function(e){return e.auth})),t=e.user,n=e.pending,s=(0,a.I0)(),o=(0,d.v0)(),f=(0,x.F_)(o),v=(0,l.Z)(f,2),j=v[0],C=v[1],w=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(g.hI.resetState()),!j){e.next=4;break}return e.next=4,(0,d.w7)(o);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:"user",children:[!j&&!C&&t&&!u()(t,h)&&(0,p.jsx)("span",{className:"reset",title:"Reset account",onClick:w,children:(0,p.jsx)(m.Z,{})}),(0,p.jsx)("h1",{className:"font-bold text-lg mb-1",children:null===t||void 0===t?void 0:t.name}),(0,p.jsx)("span",{className:"block text-sm",children:null===t||void 0===t?void 0:t.email}),(0,p.jsx)("img",{className:"avatar mx-auto my-8",src:null===t||void 0===t?void 0:t.avatar,alt:"","aria-label":"User avatar",width:"64px",height:"64px",referrerPolicy:"no-referrer"}),(0,p.jsx)("button",{className:"button mx-auto",type:"button",disabled:n.login,onClick:function(){s(g.hI.logInAsync((0,r.Z)({},t)))},children:"Log In"})]})}var v=n(1387),j=n(1638);function C(){var e=(0,j.jN)(),t=(0,a.I0)(),n=(0,d.v0)(),s=(0,x.F_)(n),r=(0,l.Z)(s,2),o=r[0],u=r[1],m=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.w7)(n);case 3:t(g.hI.resetState()),(0,v.Am)("Signed out successfully",{type:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,v.Am)("Something went wrong, please try again",{type:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:"google-signin",children:[!o&&!u&&(0,p.jsxs)("button",{className:"google-identity",onClick:e,children:[(0,p.jsx)(w,{}),(0,p.jsx)("span",{className:"text",children:"Sign in with Google"})]}),o&&(0,p.jsx)("span",{className:"text-link text-center",onClick:m,children:"Sign out from Google"})]})}function w(){return(0,p.jsx)("span",{className:"google-logo",children:(0,p.jsx)("svg",{viewBox:"0 0 24 24",width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg",children:(0,p.jsxs)("g",{transform:"matrix(1, 0, 0, 1, 27.009001, -39.238998)",children:[(0,p.jsx)("path",{fill:"#4285F4",d:"M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"}),(0,p.jsx)("path",{fill:"#34A853",d:"M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"}),(0,p.jsx)("path",{fill:"#FBBC05",d:"M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"}),(0,p.jsx)("path",{fill:"#EA4335",d:"M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"})]})})})}var L=n(2188);function N(){var e=(0,a.v9)((function(e){return e.auth})).logged;return(0,s.useEffect)((function(){document.title="Redux - Login",e&&L.m.navigate("/")}),[e]),(0,p.jsxs)("div",{className:"login gap-12",children:[(0,p.jsxs)("div",{className:"description",children:[(0,p.jsx)("h1",{className:"page-header md:text-center",children:"Please log in"}),(0,p.jsx)("p",{className:"mt-4 max-w-2xl text-lg text-gray-500 md:mx-auto md:text-center",children:"Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."})]}),(0,p.jsx)(f,{}),(0,p.jsx)(C,{})]})}}}]);