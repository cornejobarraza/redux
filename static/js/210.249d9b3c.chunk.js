(self.webpackChunkredux=self.webpackChunkredux||[]).push([[210],{7210:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return x}});var n=r(7313),o=r(5554),a=r(1413),i=r(4165),u=r(5861),c=r(885),s=r(3108),f=r.n(s),l=r(9489),h=r(2938),p=r(9984),v=r(1638),_=r(8885),d=r(2429),y=r(6417),b=(0,d.Z)((0,y.jsx)("path",{d:"M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm3 2v2h6v-2h-6zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4z"}),"PersonRemove");function g(){var t=(0,o.v9)((function(t){return t.auth})),e=t.user,r=t.logged.gAuth,n=t.pending,s=(0,v.jN)(),d=(0,o.I0)(),g=(0,l.v0)(),j=(0,h.F_)(g),m=(0,c.Z)(j,2),x=m[0],w=m[1],z=function(){var t=(0,u.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(d(p.hI.resetState()),!x){t.next=4;break}return t.next=4,(0,l.w7)(g);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,y.jsxs)("div",{className:"user",children:[!x&&!w&&!r&&e&&!f()(e,_)&&(0,y.jsx)("span",{className:"reset",title:"Reset account",onClick:z,children:(0,y.jsx)(b,{})}),(0,y.jsx)("h1",{className:"font-bold text-lg mb-1",children:null===e||void 0===e?void 0:e.name}),(0,y.jsx)("span",{className:"block text-sm",children:null===e||void 0===e?void 0:e.email}),(0,y.jsx)("img",{className:"avatar mx-auto my-8",src:null===e||void 0===e?void 0:e.avatar,alt:"","aria-label":"User avatar",width:"64px",height:"64px",referrerPolicy:"no-referrer"}),(0,y.jsx)("button",{className:"button mx-auto",type:"button",disabled:n.login||w,onClick:function(){!x&&r?s():d(p.hI.logInAsync((0,a.Z)({},e)))},children:"Log In"})]})}var j=r(7456),m=r(2188);function x(){var t=(0,o.v9)((function(t){return t.auth})).logged.status;return(0,n.useEffect)((function(){document.title="Redux - Login",t&&m.m.navigate("/")}),[t]),(0,y.jsxs)("div",{className:"login gap-10",children:[(0,y.jsxs)("div",{className:"description",children:[(0,y.jsx)("h1",{className:"page-header md:text-center",children:"Please log in"}),(0,y.jsx)("p",{className:"mt-4 max-w-2xl text-lg text-gray-500 md:mx-auto md:text-center",children:"Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam"})]}),(0,y.jsx)(g,{}),(0,y.jsx)(j.h,{})]})}},3108:function(t,e,r){t=r.nmd(t);var n="__lodash_hash_undefined__",o=9007199254740991,a="[object Arguments]",i="[object Array]",u="[object Boolean]",c="[object Date]",s="[object Error]",f="[object Function]",l="[object Map]",h="[object Number]",p="[object Object]",v="[object Promise]",_="[object RegExp]",d="[object Set]",y="[object String]",b="[object Symbol]",g="[object WeakMap]",j="[object ArrayBuffer]",m="[object DataView]",x=/^\[object .+?Constructor\]$/,w=/^(?:0|[1-9]\d*)$/,z={};z["[object Float32Array]"]=z["[object Float64Array]"]=z["[object Int8Array]"]=z["[object Int16Array]"]=z["[object Int32Array]"]=z["[object Uint8Array]"]=z["[object Uint8ClampedArray]"]=z["[object Uint16Array]"]=z["[object Uint32Array]"]=!0,z[a]=z[i]=z[j]=z[u]=z[m]=z[c]=z[s]=z[f]=z[l]=z[h]=z[p]=z[_]=z[d]=z[y]=z[g]=!1;var A="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,O="object"==typeof self&&self&&self.Object===Object&&self,k=A||O||Function("return this")(),N=e&&!e.nodeType&&e,S=N&&t&&!t.nodeType&&t,P=S&&S.exports===N,I=P&&A.process,E=function(){try{return I&&I.binding&&I.binding("util")}catch(t){}}(),F=E&&E.isTypedArray;function L(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}function U(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function $(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var C,M,R=Array.prototype,Z=Function.prototype,B=Object.prototype,T=k["__core-js_shared__"],D=Z.toString,q=B.hasOwnProperty,V=function(){var t=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),W=B.toString,G=RegExp("^"+D.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),H=P?k.Buffer:void 0,J=k.Symbol,K=k.Uint8Array,Q=B.propertyIsEnumerable,X=R.splice,Y=J?J.toStringTag:void 0,tt=Object.getOwnPropertySymbols,et=H?H.isBuffer:void 0,rt=(C=Object.keys,M=Object,function(t){return C(M(t))}),nt=It(k,"DataView"),ot=It(k,"Map"),at=It(k,"Promise"),it=It(k,"Set"),ut=It(k,"WeakMap"),ct=It(Object,"create"),st=Ut(nt),ft=Ut(ot),lt=Ut(at),ht=Ut(it),pt=Ut(ut),vt=J?J.prototype:void 0,_t=vt?vt.valueOf:void 0;function dt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function yt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function bt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function gt(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new bt;++e<r;)this.add(t[e])}function jt(t){var e=this.__data__=new yt(t);this.size=e.size}function mt(t,e){var r=Mt(t),n=!r&&Ct(t),o=!r&&!n&&Rt(t),a=!r&&!n&&!o&&qt(t),i=r||n||o||a,u=i?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=u.length;for(var s in t)!e&&!q.call(t,s)||i&&("length"==s||o&&("offset"==s||"parent"==s)||a&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Lt(s,c))||u.push(s);return u}function xt(t,e){for(var r=t.length;r--;)if($t(t[r][0],e))return r;return-1}function wt(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Y&&Y in Object(t)?function(t){var e=q.call(t,Y),r=t[Y];try{t[Y]=void 0;var n=!0}catch(a){}var o=W.call(t);n&&(e?t[Y]=r:delete t[Y]);return o}(t):function(t){return W.call(t)}(t)}function zt(t){return Dt(t)&&wt(t)==a}function At(t,e,r,n,o){return t===e||(null==t||null==e||!Dt(t)&&!Dt(e)?t!==t&&e!==e:function(t,e,r,n,o,f){var v=Mt(t),g=Mt(e),x=v?i:Ft(t),w=g?i:Ft(e),z=(x=x==a?p:x)==p,A=(w=w==a?p:w)==p,O=x==w;if(O&&Rt(t)){if(!Rt(e))return!1;v=!0,z=!1}if(O&&!z)return f||(f=new jt),v||qt(t)?Nt(t,e,r,n,o,f):function(t,e,r,n,o,a,i){switch(r){case m:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case j:return!(t.byteLength!=e.byteLength||!a(new K(t),new K(e)));case u:case c:case h:return $t(+t,+e);case s:return t.name==e.name&&t.message==e.message;case _:case y:return t==e+"";case l:var f=U;case d:var p=1&n;if(f||(f=$),t.size!=e.size&&!p)return!1;var v=i.get(t);if(v)return v==e;n|=2,i.set(t,e);var g=Nt(f(t),f(e),n,o,a,i);return i.delete(t),g;case b:if(_t)return _t.call(t)==_t.call(e)}return!1}(t,e,x,r,n,o,f);if(!(1&r)){var k=z&&q.call(t,"__wrapped__"),N=A&&q.call(e,"__wrapped__");if(k||N){var S=k?t.value():t,P=N?e.value():e;return f||(f=new jt),o(S,P,r,n,f)}}if(!O)return!1;return f||(f=new jt),function(t,e,r,n,o,a){var i=1&r,u=St(t),c=u.length,s=St(e).length;if(c!=s&&!i)return!1;var f=c;for(;f--;){var l=u[f];if(!(i?l in e:q.call(e,l)))return!1}var h=a.get(t);if(h&&a.get(e))return h==e;var p=!0;a.set(t,e),a.set(e,t);var v=i;for(;++f<c;){var _=t[l=u[f]],d=e[l];if(n)var y=i?n(d,_,l,e,t,a):n(_,d,l,t,e,a);if(!(void 0===y?_===d||o(_,d,r,n,a):y)){p=!1;break}v||(v="constructor"==l)}if(p&&!v){var b=t.constructor,g=e.constructor;b==g||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof g&&g instanceof g||(p=!1)}return a.delete(t),a.delete(e),p}(t,e,r,n,o,f)}(t,e,r,n,At,o))}function Ot(t){return!(!Tt(t)||function(t){return!!V&&V in t}(t))&&(Zt(t)?G:x).test(Ut(t))}function kt(t){if(!function(t){var e=t&&t.constructor,r="function"==typeof e&&e.prototype||B;return t===r}(t))return rt(t);var e=[];for(var r in Object(t))q.call(t,r)&&"constructor"!=r&&e.push(r);return e}function Nt(t,e,r,n,o,a){var i=1&r,u=t.length,c=e.length;if(u!=c&&!(i&&c>u))return!1;var s=a.get(t);if(s&&a.get(e))return s==e;var f=-1,l=!0,h=2&r?new gt:void 0;for(a.set(t,e),a.set(e,t);++f<u;){var p=t[f],v=e[f];if(n)var _=i?n(v,p,f,e,t,a):n(p,v,f,t,e,a);if(void 0!==_){if(_)continue;l=!1;break}if(h){if(!L(e,(function(t,e){if(i=e,!h.has(i)&&(p===t||o(p,t,r,n,a)))return h.push(e);var i}))){l=!1;break}}else if(p!==v&&!o(p,v,r,n,a)){l=!1;break}}return a.delete(t),a.delete(e),l}function St(t){return function(t,e,r){var n=e(t);return Mt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Vt,Et)}function Pt(t,e){var r=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?r["string"==typeof e?"string":"hash"]:r.map}function It(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Ot(r)?r:void 0}dt.prototype.clear=function(){this.__data__=ct?ct(null):{},this.size=0},dt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},dt.prototype.get=function(t){var e=this.__data__;if(ct){var r=e[t];return r===n?void 0:r}return q.call(e,t)?e[t]:void 0},dt.prototype.has=function(t){var e=this.__data__;return ct?void 0!==e[t]:q.call(e,t)},dt.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=ct&&void 0===e?n:e,this},yt.prototype.clear=function(){this.__data__=[],this.size=0},yt.prototype.delete=function(t){var e=this.__data__,r=xt(e,t);return!(r<0)&&(r==e.length-1?e.pop():X.call(e,r,1),--this.size,!0)},yt.prototype.get=function(t){var e=this.__data__,r=xt(e,t);return r<0?void 0:e[r][1]},yt.prototype.has=function(t){return xt(this.__data__,t)>-1},yt.prototype.set=function(t,e){var r=this.__data__,n=xt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this},bt.prototype.clear=function(){this.size=0,this.__data__={hash:new dt,map:new(ot||yt),string:new dt}},bt.prototype.delete=function(t){var e=Pt(this,t).delete(t);return this.size-=e?1:0,e},bt.prototype.get=function(t){return Pt(this,t).get(t)},bt.prototype.has=function(t){return Pt(this,t).has(t)},bt.prototype.set=function(t,e){var r=Pt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this},gt.prototype.add=gt.prototype.push=function(t){return this.__data__.set(t,n),this},gt.prototype.has=function(t){return this.__data__.has(t)},jt.prototype.clear=function(){this.__data__=new yt,this.size=0},jt.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},jt.prototype.get=function(t){return this.__data__.get(t)},jt.prototype.has=function(t){return this.__data__.has(t)},jt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof yt){var n=r.__data__;if(!ot||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new bt(n)}return r.set(t,e),this.size=r.size,this};var Et=tt?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,a=[];++r<n;){var i=t[r];e(i,r,t)&&(a[o++]=i)}return a}(tt(t),(function(e){return Q.call(t,e)})))}:function(){return[]},Ft=wt;function Lt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||w.test(t))&&t>-1&&t%1==0&&t<e}function Ut(t){if(null!=t){try{return D.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function $t(t,e){return t===e||t!==t&&e!==e}(nt&&Ft(new nt(new ArrayBuffer(1)))!=m||ot&&Ft(new ot)!=l||at&&Ft(at.resolve())!=v||it&&Ft(new it)!=d||ut&&Ft(new ut)!=g)&&(Ft=function(t){var e=wt(t),r=e==p?t.constructor:void 0,n=r?Ut(r):"";if(n)switch(n){case st:return m;case ft:return l;case lt:return v;case ht:return d;case pt:return g}return e});var Ct=zt(function(){return arguments}())?zt:function(t){return Dt(t)&&q.call(t,"callee")&&!Q.call(t,"callee")},Mt=Array.isArray;var Rt=et||function(){return!1};function Zt(t){if(!Tt(t))return!1;var e=wt(t);return e==f||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function Bt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}function Tt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Dt(t){return null!=t&&"object"==typeof t}var qt=F?function(t){return function(e){return t(e)}}(F):function(t){return Dt(t)&&Bt(t.length)&&!!z[wt(t)]};function Vt(t){return null!=(e=t)&&Bt(e.length)&&!Zt(e)?mt(t):kt(t);var e}t.exports=function(t,e){return At(t,e)}}}]);