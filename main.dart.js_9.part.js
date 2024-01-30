((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_9",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C,E,B={b2D:function b2D(d,e,f){this.a=d
this.c=e
this.d=f},b2G:function b2G(){},b2H:function b2H(){},b2I:function b2I(){},b2E:function b2E(){},b2F:function b2F(){},b2R:function b2R(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=null},
cLI(d,e,f){var x=null
if($.ctO){$.ctO=!1
$.hm.b=new B.b2B(new B.b2D(new B.b2R(C.cJx(C.crD(e+"v1beta/",x,"application/json",x,x,x)),d),x,x))}return $.hm.cj()},
b2B:function b2B(d){this.a=d
this.b=null},
cyp(d){var x=J.W(d),w=x.j(d,"content")==null?null:B.cTF(y.P.a(x.j(d,"content"))),v=A.a5(x.j(d,"finishReason")),u=A.ay(x.j(d,"index"))
x=y.g.a(x.j(d,"safetyRatings"))
if(x==null)x=null
else{x=J.d1(x,new B.bXF(),y.R)
x=A.a1(x,!0,A.e(x).i("ae.E"))}return new B.aqy(w,v,u,x)},
aqy:function aqy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bXF:function bXF(){},
aCh:function aCh(){},
cTF(d){var x=J.W(d),w=y.g.a(x.j(d,"parts"))
if(w==null)w=null
else{w=J.d1(w,new B.bXG(),y.C)
w=A.a1(w,!0,A.e(w).i("ae.E"))}return new C.Qi(w,A.a5(x.j(d,"role")))},
bXG:function bXG(){},
cmT(d){var x="promptFeedback",w=J.W(d),v=y.g.a(w.j(d,"candidates"))
if(v==null)v=null
else{v=J.d1(v,new B.bXH(),y.F)
v=A.a1(v,!0,A.e(v).i("ae.E"))}return new B.bYg(v,w.j(d,x)==null?null:B.cTG(y.P.a(w.j(d,x))))},
bYg:function bYg(d,e){this.a=d
this.b=e},
bXH:function bXH(){},
aCj:function aCj(){},
cTG(d){var x=y.g.a(J.B(d,"safetyRatings"))
if(x==null)x=null
else{x=J.d1(x,new B.bXI(),y.R)
x=A.a1(x,!0,A.e(x).i("ae.E"))}return new B.bYQ(x)},
bYQ:function bYQ(d){this.a=d},
bXI:function bXI(){},
aCm:function aCm(){},
cyq(d){var x=J.W(d)
return new B.aqz(A.a5(x.j(d,"category")),A.a5(x.j(d,"probability")))},
aqz:function aqz(d,e){this.a=d
this.b=e},
aCn:function aCn(){},
cMB(d){var x=J.b7(d)
if(x.A())return x.gX(x)
return null}}
J=c[1]
A=c[0]
D=c[2]
C=c[11]
E=c[13]
B=a.updateHolder(c[10],B)
B.b2D.prototype={
RA(d,e,f,g){return this.b8o(d,e,f,g)},
b8o(d,e,f,g){var x=0,w=A.w(y.a),v,u=this,t,s
var $async$RA=A.q(function(h,i){if(h===1)return A.t(i,w)
while(true)switch(x){case 0:s=$.hm.cj().b
if(s!=null)s.H(0)
s=A.ad(d).i("U<1,aD<o,@>>")
x=3
return A.p(u.a.Lh("models/gemini-pro:generateContent",A.J(["contents",A.a1(new A.U(d,new B.b2G(),s),!0,s.i("ae.E"))],y.N,y.K),e,g),$async$RA)
case 3:t=i
s=$.hm.cj().b
if(s!=null)s.shm(!1)
s=B.cmT(t.a).a
v=s==null?null:C.b92(s)
x=1
break
case 1:return A.u(v,w)}})
return A.v($async$RA,w)},
y8(d,e,f,g,h){return this.ayW(d,e,f,g,h)},
ayW(a8,a9,b0,b1,b2){var $async$y8=A.q(function(b4,b5){switch(b4){case 2:s=v
x=s.pop()
break
case 1:t=b5
x=u}while(true)switch(x){case 0:a6=$.hm.cj().b
if(a6!=null)a6.H(0)
a6=b0==null?null:b0.length!==0
a6=a6===!0?"models/gemini-pro-vision":"models/gemini-pro"
g=y.N
f=A.c([A.J(["text",a8],g,g)],y.J)
e=b0==null?null:new A.U(b0,new B.b2H(),A.ad(b0).i("U<1,aD<o,aD<o,o>>>"))
if(e!=null)D.d.J(f,e)
e=y.K
x=3
return A.hW(r.a.UK(A.n(a6)+":streamGenerateContent",A.J(["contents",A.c([A.J(["parts",f],g,y.s)],y.h)],g,e),a9,!0,b2),$async$y8,w)
case 3:d=b5
g=$.hm.cj().b
if(g!=null)g.shm(!1)
x=d.c===200?4:5
break
case 4:q=d.a
p=0
o=""
a6=y.t
n=A.c([],a6)
m=A.c([],a6)
e=new A.kA(A.f9(q.b,"stream",e),y.S)
u=6
a6=y.g,g=$.hm.a
case 9:x=11
return A.hW(e.A(),$async$y8,w)
case 11:if(!b5){x=10
break}l=e.gX(e)
m=J.a8s(n,l)
J.lR(n)
k=""
try{f=m
k=D.dQ.bN(f)}catch(b3){j=A.b5(b3)
a1="error: "+A.n(j)
a2=$.aEe
if(a2==null)A.a8d(a1)
else a2.$1(a1)
n=m
x=9
break}k=J.DG(k)
if(J.r(p,0)&&J.aEZ(k,"[")){f=k
a3=J.bk(f)
if(0>a3)A.an(A.ea(0,0,a3,"startIndex",null))
k=A.cil(f,"[","",0)}if(J.aEZ(k,",")){f=k
a3=J.bk(f)
if(0>a3)A.an(A.ea(0,0,a3,"startIndex",null))
k=A.cil(f,",","",0)}if(J.cqq(k,"]"))k=J.cjt(k,0,J.bk(k)-1)
k=J.DG(k)
f=E.un.bN(k),a3=f.length,a4=0
case 12:if(!(a4<f.length)){x=14
break}i=f[a4]
if(J.r(o,"")&&J.r(i,",")){x=13
break}o=J.a8s(o,i)
u=16
a5=a6.a(J.B(D.a4.oi(0,o,null),"candidates"))
h=B.cyp(a5==null?null:B.cMB(a5))
x=19
v=[1,7]
return A.hW(A.c6v(h),$async$y8,w)
case 19:a5=$.hm.b
if(a5===$.hm)A.an(A.lq(g))
a5=a5.b
if(a5!=null)a5.G(0,C.aMw(h))
o=""
u=6
x=18
break
case 16:u=15
a7=t
x=13
break
x=18
break
case 15:x=6
break
case 18:case 13:f.length===a3||(0,A.af)(f),++a4
x=12
break
case 14:++p
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=20
return A.hW(e.bn(0),$async$y8,w)
case 20:x=s.pop()
break
case 8:case 5:case 1:return A.hW(null,0,w)
case 2:return A.hW(t,1,w)}})
var x=0,w=A.cgf($async$y8,y.F),v,u=2,t,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
return A.cgs(w)},
V5(d,e,f,g,h){return this.bn7(d,e,f,g,h)},
bn7(d,e,f,g,h){var x=0,w=A.w(y.a),v,u=this,t,s,r
var $async$V5=A.q(function(i,j){if(i===1)return A.t(j,w)
while(true)switch(x){case 0:r=$.hm.cj().b
if(r!=null)r.H(0)
r=y.N
t=A.c([A.J(["text",h],r,r)],y.J)
D.d.J(t,new A.U(e,new B.b2I(),A.ad(e).i("U<1,aD<o,aD<o,o>>>")))
x=3
return A.p(u.a.Lh("models/gemini-pro-vision:generateContent",A.J(["contents",A.c([A.J(["parts",t],r,y.s)],y.h)],r,y.K),d,g),$async$V5)
case 3:s=j
r=$.hm.cj().b
if(r!=null)r.shm(!1)
r=B.cmT(s.a).a
v=r==null?null:C.b92(r)
x=1
break
case 1:return A.u(v,w)}})
return A.v($async$V5,w)},
V4(d,e,f,g,h){return this.bn4(0,e,f,g,h)},
bn4(d,e,f,g,h){var x=0,w=A.w(y.a),v,u=this,t,s,r
var $async$V4=A.q(function(i,j){if(i===1)return A.t(j,w)
while(true)switch(x){case 0:s=$.hm.cj().b
if(s!=null)s.H(0)
s=y.N
r=B
x=3
return A.p(u.a.Lh("models/gemini-pro:generateContent",A.J(["contents",A.c([A.J(["parts",A.c([A.J(["text",e],s,s)],y.m)],s,y.x)],y.X)],s,y.K),f,h),$async$V4)
case 3:s=r.cmT(j.a).a
t=s==null?null:C.b92(s)
s=$.hm.cj().b
if(s!=null)s.G(0,t==null?null:C.aMw(t))
v=t
x=1
break
case 1:return A.u(v,w)}})
return A.v($async$V4,w)},
Rl(d,e,f,g){return this.b7H(d,e,f,g)},
b7H(d,e,f,g){var x=0,w=A.w(y.o),v,u=this,t,s
var $async$Rl=A.q(function(h,i){if(h===1)return A.t(i,w)
while(true)switch(x){case 0:s=$.hm.cj().b
if(s!=null)s.H(0)
s=A.ad(d).i("U<1,aD<o,P>>")
x=3
return A.p(u.a.Lh("models/embedding-001:batchEmbedContents",A.J(["requests",A.a1(new A.U(d,new B.b2E(),s),!0,s.i("ae.E"))],y.N,y.K),e,g),$async$Rl)
case 3:t=i
s=$.hm.cj().b
if(s!=null)s.shm(!1)
s=J.d1(y.j.a(J.B(t.a,"embeddings")),new B.b2F(),y.r)
v=A.a1(s,!0,A.e(s).i("ae.E"))
x=1
break
case 1:return A.u(v,w)}})
return A.v($async$Rl,w)},
Sg(d,e,f,g){return this.bcZ(d,e,f,g)},
bcZ(d,e,f,g){var x=0,w=A.w(y.i),v,u=this,t,s
var $async$Sg=A.q(function(h,i){if(h===1)return A.t(i,w)
while(true)switch(x){case 0:s=$.hm.cj().b
if(s!=null)s.H(0)
s=y.N
x=3
return A.p(u.a.Lh("models/embedding-001:embedContent",A.J(["model","models/embedding-001","content",A.J(["parts",A.c([A.J(["text",d],s,s)],y.m)],s,y.x)],s,y.K),e,g),$async$Sg)
case 3:t=i
s=$.hm.cj().b
if(s!=null)s.shm(!1)
v=J.l7(y.j.a(J.B(J.B(t.a,"embedding"),"values")),y.H)
x=1
break
case 1:return A.u(v,w)}})
return A.v($async$Sg,w)}}
B.b2R.prototype={
UK(d,e,f,g,h){return this.bl7(d,e,f,g,h)},
Lh(d,e,f,g){return this.UK(d,e,f,!1,g)},
bl7(d,e,f,g,h){var x=0,w=A.w(y.c),v,u=this,t,s,r,q
var $async$UK=A.q(function(i,j){if(i===1)return A.t(j,w)
while(true)switch(x){case 0:q=f==null
if(!q||!1){q=q?null:f.bZ()
if(q==null)q=null
if(q==null){q=y.z
q=A.y(q,q)}e.m(0,"generationConfig",q)}q=D.a4.fB(e,null)
t=y.z
s=A.J(["key",u.b],y.N,t)
r=C.bY(null,null,null,null,g?E.lM:null)
r.a="POST"
v=u.a.a6g(0,d,null,q,null,null,r,s,t)
x=1
break
case 1:return A.u(v,w)}})
return A.v($async$UK,w)}}
B.b2B.prototype={
b8n(d){return this.a.RA(d,null,null,null)},
a8r(d,e,f){return this.a.y8(d,e,f,null,null)},
ayU(d,e){return this.a8r(d,e,null)},
ayV(d,e){return this.a8r(d,null,e)},
bn6(d,e){return this.a.V5(null,d,null,null,e)},
bn3(d,e){return this.a.V4(0,e,null,null,null)},
b7G(d){return this.a.Rl(d,null,null,null)},
bcY(d){return this.a.Sg(d,null,null,null)}}
B.aqy.prototype={
l(d){var x=this
return"Candidates(content: "+A.n(x.a)+", finishReason: "+A.n(x.b)+", index: "+A.n(x.c)+", safetyRatings: "+A.n(x.d)+")"},
bZ(){var x=this
return A.J(["content",x.a,"finishReason",x.b,"index",x.c,"safetyRatings",x.d],y.N,y.z)},
$iqj:1,
gjZ(d){return this.a},
grR(){return this.b}}
B.aCh.prototype={}
B.bYg.prototype={
l(d){return"GeminiResponse(candidates: "+A.n(this.a)+", promptFeedback: "+A.n(this.b)+")"},
bZ(){return A.J(["candidates",this.a,"promptFeedback",this.b],y.N,y.z)}}
B.aCj.prototype={}
B.bYQ.prototype={
l(d){return"PromptFeedback(safetyRatings: "+A.n(this.a)+")"},
bZ(){return A.J(["safetyRatings",this.a],y.N,y.z)}}
B.aCm.prototype={}
B.aqz.prototype={
l(d){return"SafetyRatings(category: "+A.n(this.a)+", probability: "+A.n(this.b)+")"},
bZ(){return A.J(["category",this.a,"probability",this.b],y.N,y.z)},
$iH6:1}
B.aCn.prototype={}
var z=a.updateTypes(["H6(@)","aD<o,@>(Ef)","BH(@)","qj(@)"])
B.b2G.prototype={
$1(d){return d.bZ()},
$S:z+1}
B.b2H.prototype={
$1(d){var x=y.N
return A.J(["inline_data",A.J(["mime_type","image/jpeg","data",D.nl.gSh().bN(d)],x,x)],x,y.f)},
$S:289}
B.b2I.prototype={
$1(d){var x=y.N
return A.J(["inline_data",A.J(["mime_type","image/jpeg","data",D.nl.gSh().bN(d)],x,x)],x,y.f)},
$S:289}
B.b2E.prototype={
$1(d){var x=y.N
return A.J(["model","models/embedding-001","content",A.J(["parts",A.c([A.J(["text",d],x,x)],y.m)],x,y.x)],x,y.K)},
$S:704}
B.b2F.prototype={
$1(d){return J.l7(y.j.a(J.B(d,"values")),y.H)},
$S:705}
B.bXF.prototype={
$1(d){return B.cyq(y.P.a(d))},
$S:z+0}
B.bXG.prototype={
$1(d){return new C.Qj(A.a5(J.B(y.P.a(d),"text")))},
$S:z+2}
B.bXH.prototype={
$1(d){return B.cyp(y.P.a(d))},
$S:z+3}
B.bXI.prototype={
$1(d){return B.cyq(y.P.a(d))},
$S:z+0};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.P,[B.b2D,B.b2R,B.b2B,B.aCh,B.aCj,B.aCm,B.aCn])
w(A.ql,[B.b2G,B.b2H,B.b2I,B.b2E,B.b2F,B.bXF,B.bXG,B.bXH,B.bXI])
v(B.aqy,B.aCh)
v(B.bYg,B.aCj)
v(B.bYQ,B.aCm)
v(B.aqz,B.aCn)
x(B.aCh,A.kK)
x(B.aCj,A.kK)
x(B.aCm,A.kK)
x(B.aCn,A.kK)})()
A.aBD(b.typeUniverse,JSON.parse('{"aqy":{"qj":[]},"aqz":{"H6":[]}}'))
var y=(function rtii(){var x=A.aw
return{F:x("qj"),J:x("O<aD<o,P>>"),m:x("O<aD<o,o>>"),h:x("O<aD<o,R<aD<o,P>>>>"),X:x("O<aD<o,R<aD<o,o>>>>"),t:x("O<E>"),s:x("R<aD<o,P>>"),x:x("R<aD<o,o>>"),j:x("R<@>"),r:x("R<be>"),f:x("aD<o,o>"),P:x("aD<o,@>"),K:x("P"),C:x("BH"),c:x("jU<@>"),R:x("H6"),N:x("o"),S:x("kA<dZ>"),z:x("@"),a:x("qj?"),g:x("R<@>?"),o:x("R<R<be>?>?"),i:x("R<be>?"),H:x("be")}})();(function staticFields(){$.ctO=!0})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_9",e:"endPart",h:b})})($__dart_deferred_initializers__,"zAptQfdclAKjOmV7Bx4d1Xr9Q50=");