((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_107",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,A,C={
cMB(d){var y,x,w,v=(d.gp(d)>>>16&255)/255,u=(d.gp(d)>>>8&255)/255,t=(d.gp(d)&255)/255,s=Math.max(v,Math.max(u,t)),r=Math.min(v,Math.min(u,t)),q=s-r,p=d.gp(d),o=B.bl("hue")
if(s===0)o.b=0
else if(s===v)o.b=60*A.l.c8((u-t)/q,6)
else if(s===u)o.b=60*((t-v)/q+2)
else if(s===t)o.b=60*((v-u)/q+4)
o.b=isNaN(o.aB())?0:o.aB()
y=o.aB()
x=(s+r)/2
w=x===1?0:B.as(q/(1-Math.abs(2*x-1)),0,1)
return new C.Vd((p>>>24&255)/255,y,w,x)},
Vd:function Vd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}}
B=c[0]
A=c[2]
C=a.updateHolder(c[53],C)
C.Vd.prototype={
bp5(){var y=this,x=y.d,w=(1-Math.abs(2*x-1))*y.c,v=y.b
return B.cYw(y.a,v,w,w*(1-Math.abs(A.l.c8(v/60,2)-1)),x-w/2)},
n(d,e){var y=this
if(e==null)return!1
if(y===e)return!0
return e instanceof C.Vd&&e.a===y.a&&e.b===y.b&&e.c===y.c&&e.d===y.d},
gC(d){var y=this
return B.aK(y.a,y.b,y.c,y.d,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b,A.b)},
l(d){var y=this
return"HSLColor("+B.m(y.a)+", "+B.m(y.b)+", "+B.m(y.c)+", "+B.m(y.d)+")"}}
var z=a.updateTypes([]);(function inheritance(){var y=a.inherit
y(C.Vd,B.K)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_107",e:"endPart",h:b})})($__dart_deferred_initializers__,"pRQWPvFAIdqdJEDtVejDRuoTbdI=");