"use strict";(self.webpackChunkredux=self.webpackChunkredux||[]).push([[267],{6267:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var s=n(885),i=n(9489),a=n(1413),l=n(5554),r=n(9984),c=n(8885),o=n(3440),u=n(3108),d=n.n(u),x=n(2938),m=n(6417);function g(){var e=(0,l.v9)((function(e){return e.user})),t=e.user,n=e.pending,u=(0,l.I0)(),g=(0,i.v0)(),h=(0,x.F_)(g),v=(0,s.Z)(h,2),f=v[0],j=v[1];return(0,m.jsxs)("div",{className:"user",children:[!f&&!j&&t&&!d()(t,c)&&(0,m.jsx)("span",{className:"reset",title:"Reset account",onClick:function(){u(r.hI.resetState())},children:(0,m.jsx)(o.Z,{})}),(0,m.jsx)("h1",{className:"font-bold text-lg",children:null===t||void 0===t?void 0:t.name}),(0,m.jsx)("span",{className:"block text-sm",children:null===t||void 0===t?void 0:t.email}),(0,m.jsx)("img",{className:"avatar mx-auto my-8",src:null===t||void 0===t?void 0:t.avatar,alt:"","aria-label":"User avatar",width:"64px",height:"64px",referrerPolicy:"no-referrer"}),(0,m.jsx)("button",{className:"button mx-auto",type:"button",disabled:n.login,onClick:function(){u(r.hI.logInAsync((0,a.Z)({},t)))},children:"Log In"})]})}var h=n(6845);function v(){var e=(0,h.j)(),t=(0,l.I0)(),n=(0,i.v0)(),a=(0,x.F_)(n),c=(0,s.Z)(a,2),o=c[0],u=c[1];return(0,m.jsxs)("div",{className:"google-signin",children:[!o&&!u&&(0,m.jsxs)("button",{className:"google-identity",onClick:e,children:[(0,m.jsx)(f,{}),(0,m.jsx)("span",{className:"text",children:"Sign in with Google"})]}),o&&(0,m.jsx)("span",{className:"text-link text-center",onClick:function(){(0,i.w7)(n),t(r.hI.resetState())},children:"Remove Google account"})]})}function f(){return(0,m.jsx)("span",{className:"google-logo",children:(0,m.jsx)("svg",{viewBox:"0 0 24 24",width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg",children:(0,m.jsxs)("g",{transform:"matrix(1, 0, 0, 1, 27.009001, -39.238998)",children:[(0,m.jsx)("path",{fill:"#4285F4",d:"M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"}),(0,m.jsx)("path",{fill:"#34A853",d:"M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"}),(0,m.jsx)("path",{fill:"#FBBC05",d:"M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"}),(0,m.jsx)("path",{fill:"#EA4335",d:"M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"})]})})})}var j=n(7313),p=n(2188);function C(){var e=(0,l.v9)((function(e){return e.user})),t=e.pending,n=e.logged,a=e.error;(0,j.useEffect)((function(){document.title="Redux - Login",n&&p.m.navigate("/")}),[]);var r=(0,i.v0)(),c=(0,x.F_)(r),o=(0,s.Z)(c,1)[0];return(0,j.useEffect)((function(){var e=localStorage.getItem("currentUser");e&&e.startsWith("{")&&e.endsWith("}")||t.login||!o||(0,i.w7)(r)}),[r,o,t]),(0,m.jsxs)("div",{className:"login",children:[(0,m.jsxs)("div",{className:"description",children:[(0,m.jsx)("p",{className:"text-3xl font-bold leading-8 tracking-tight text-gray-900 -4xl md:text-center",children:"Please log in"}),(0,m.jsx)("p",{className:"mt-4 max-w-2xl text-lg text-gray-500 md:mx-auto md:text-center",children:"Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."})]}),(0,m.jsx)(g,{}),(0,m.jsx)(v,{}),a.login&&(0,m.jsx)("span",{className:"status text-center",children:"Something went wrong :("})]})}}}]);