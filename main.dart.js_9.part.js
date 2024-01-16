((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_9",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C,E,B={b1F:function b1F(d,e,f){this.a=d
this.c=e
this.d=f},b1I:function b1I(){},b1J:function b1J(){},b1K:function b1K(){},b1G:function b1G(){},b1H:function b1H(){},b1T:function b1T(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=null},
cKW(d,e,f){var x=null
if($.ctn){$.ctn=!1
$.hf.b=new B.b1D(new B.b1F(new B.b1T(C.cII(C.cr8(e+"v1beta/",x,"application/json",x,x,x)),d),x,x))}return $.hf.fR()},
b1D:function b1D(d){this.a=d
this.b=null},
cxG(d){var x=J.a0(d),w=x.j(d,"content")==null?null:B.cST(y.P.a(x.j(d,"content"))),v=A.a4(x.j(d,"finishReason")),u=A.az(x.j(d,"index"))
x=y.g.a(x.j(d,"safetyRatings"))
if(x==null)x=null
else{x=J.d_(x,new B.bX1(),y.R)
x=A.ab(x,!0,A.e(x).i("ae.E"))}return new B.apA(w,v,u,x)},
apA:function apA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX1:function bX1(){},
aBp:function aBp(){},
cST(d){var x=J.a0(d),w=y.g.a(x.j(d,"parts"))
if(w==null)w=null
else{w=J.d_(w,new B.bX2(),y.C)
w=A.ab(w,!0,A.e(w).i("ae.E"))}return new C.Py(w,A.a4(x.j(d,"role")))},
bX2:function bX2(){},
cmn(d){var x="promptFeedback",w=J.a0(d),v=y.g.a(w.j(d,"candidates"))
if(v==null)v=null
else{v=J.d_(v,new B.bX3(),y.F)
v=A.ab(v,!0,A.e(v).i("ae.E"))}return new B.bXD(v,w.j(d,x)==null?null:B.cSU(y.P.a(w.j(d,x))))},
bXD:function bXD(d,e){this.a=d
this.b=e},
bX3:function bX3(){},
aBr:function aBr(){},
cSU(d){var x=y.g.a(J.B(d,"safetyRatings"))
if(x==null)x=null
else{x=J.d_(x,new B.bX4(),y.R)
x=A.ab(x,!0,A.e(x).i("ae.E"))}return new B.bYc(x)},
bYc:function bYc(d){this.a=d},
bX4:function bX4(){},
aBu:function aBu(){},
cxH(d){var x=J.a0(d)
return new B.apB(A.a4(x.j(d,"category")),A.a4(x.j(d,"probability")))},
apB:function apB(d,e){this.a=d
this.b=e},
aBv:function aBv(){},
cLN(d){var x=J.b7(d)
if(x.B())return x.ga_(x)
return null}}
J=c[1]
A=c[0]
D=c[2]
C=c[11]
E=c[13]
B=a.updateHolder(c[10],B)
B.b1F.prototype={
Rr(d,e,f,g){return this.b9l(d,e,f,g)},
b9l(d,e,f,g){var x=0,w=A.x(y.a),v,u=this,t,s
var $async$Rr=A.t(function(h,i){if(h===1)return A.u(i,w)
while(true)switch(x){case 0:s=$.hf.fR().b
if(s!=null)s.H(0)
s=A.ad(d).i("T<1,aD<o,@>>")
x=3
return A.q(u.a.L3("models/gemini-pro:generateContent",A.I(["contents",A.ab(new A.T(d,new B.b1I(),s),!0,s.i("ae.E"))],y.N,y.K),e,g),$async$Rr)
case 3:t=i
s=$.hf.fR().b
if(s!=null)s.shf(!1)
s=B.cmn(t.a).a
v=s==null?null:C.b88(s)
x=1
break
case 1:return A.v(v,w)}})
return A.w($async$Rr,w)},
xH(d,e,f,g,h){return this.azN(d,e,f,g,h)},
azN(a8,a9,b0,b1,b2){var $async$xH=A.t(function(b4,b5){switch(b4){case 2:s=v
x=s.pop()
break
case 1:t=b5
x=u}while(true)switch(x){case 0:a6=$.hf.fR().b
if(a6!=null)a6.H(0)
a6=b0==null?null:b0.length!==0
a6=a6===!0?"models/gemini-pro-vision":"models/gemini-pro"
g=y.N
f=A.c([A.I(["text",a8],g,g)],y.J)
e=b0==null?null:new A.T(b0,new B.b1J(),A.ad(b0).i("T<1,aD<o,aD<o,o>>>"))
if(e!=null)D.d.I(f,e)
e=y.K
x=3
return A.hQ(r.a.UH(A.m(a6)+":streamGenerateContent",A.I(["contents",A.c([A.I(["parts",f],g,y.s)],y.h)],g,e),a9,!0,b2),$async$xH,w)
case 3:d=b5
g=$.hf.fR().b
if(g!=null)g.shf(!1)
x=d.c===200?4:5
break
case 4:q=d.a
p=0
o=""
a6=y.t
n=A.c([],a6)
m=A.c([],a6)
e=new A.ku(A.f5(q.b,"stream",e),y.S)
u=6
a6=y.g,g=$.hf.a
case 9:x=11
return A.hQ(e.B(),$async$xH,w)
case 11:if(!b5){x=10
break}l=e.ga_(e)
m=J.a7B(n,l)
J.mk(n)
k=""
try{f=m
k=D.dX.c1(f)}catch(b3){j=A.b3(b3)
a1="error: "+A.m(j)
a2=$.a7l
if(a2==null)A.Rx(a1)
else a2.$1(a1)
n=m
x=9
break}k=J.Df(k)
if(J.p(p,0)&&J.aE3(k,"[")){f=k
a3=J.bd(f)
if(0>a3)A.as(A.e5(0,0,a3,"startIndex",null))
k=A.chE(f,"[","",0)}if(J.aE3(k,",")){f=k
a3=J.bd(f)
if(0>a3)A.as(A.e5(0,0,a3,"startIndex",null))
k=A.chE(f,",","",0)}if(J.cpY(k,"]"))k=J.ciK(k,0,J.bd(k)-1)
k=J.Df(k)
f=E.up.c1(k),a3=f.length,a4=0
case 12:if(!(a4<f.length)){x=14
break}i=f[a4]
if(J.p(o,"")&&J.p(i,",")){x=13
break}o=J.a7B(o,i)
u=16
a5=a6.a(J.B(D.a3.nT(0,o,null),"candidates"))
h=B.cxG(a5==null?null:B.cLN(a5))
x=19
v=[1,7]
return A.hQ(A.c5V(h),$async$xH,w)
case 19:a5=$.hf.b
if(a5===$.hf)A.as(A.Le(g))
a5=a5.b
if(a5!=null)a5.F(0,C.aLF(h))
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
return A.hQ(e.bl(0),$async$xH,w)
case 20:x=s.pop()
break
case 8:case 5:case 1:return A.hQ(null,0,w)
case 2:return A.hQ(t,1,w)}})
var x=0,w=A.cfD($async$xH,y.F),v,u=2,t,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
return A.cfP(w)},
V2(d,e,f,g,h){return this.bo7(d,e,f,g,h)},
bo7(d,e,f,g,h){var x=0,w=A.x(y.a),v,u=this,t,s,r
var $async$V2=A.t(function(i,j){if(i===1)return A.u(j,w)
while(true)switch(x){case 0:r=$.hf.fR().b
if(r!=null)r.H(0)
r=y.N
t=A.c([A.I(["text",h],r,r)],y.J)
D.d.I(t,new A.T(e,new B.b1K(),A.ad(e).i("T<1,aD<o,aD<o,o>>>")))
x=3
return A.q(u.a.L3("models/gemini-pro-vision:generateContent",A.I(["contents",A.c([A.I(["parts",t],r,y.s)],y.h)],r,y.K),d,g),$async$V2)
case 3:s=j
r=$.hf.fR().b
if(r!=null)r.shf(!1)
r=B.cmn(s.a).a
v=r==null?null:C.b88(r)
x=1
break
case 1:return A.v(v,w)}})
return A.w($async$V2,w)},
V1(d,e,f,g,h){return this.bo4(0,e,f,g,h)},
bo4(d,e,f,g,h){var x=0,w=A.x(y.a),v,u=this,t,s,r
var $async$V1=A.t(function(i,j){if(i===1)return A.u(j,w)
while(true)switch(x){case 0:s=$.hf.fR().b
if(s!=null)s.H(0)
s=y.N
r=B
x=3
return A.q(u.a.L3("models/gemini-pro:generateContent",A.I(["contents",A.c([A.I(["parts",A.c([A.I(["text",e],s,s)],y.m)],s,y.x)],y.X)],s,y.K),f,h),$async$V1)
case 3:s=r.cmn(j.a).a
t=s==null?null:C.b88(s)
s=$.hf.fR().b
if(s!=null)s.F(0,t==null?null:C.aLF(t))
v=t
x=1
break
case 1:return A.v(v,w)}})
return A.w($async$V1,w)},
Rc(d,e,f,g){return this.b8D(d,e,f,g)},
b8D(d,e,f,g){var x=0,w=A.x(y.o),v,u=this,t,s
var $async$Rc=A.t(function(h,i){if(h===1)return A.u(i,w)
while(true)switch(x){case 0:s=$.hf.fR().b
if(s!=null)s.H(0)
s=A.ad(d).i("T<1,aD<o,O>>")
x=3
return A.q(u.a.L3("models/embedding-001:batchEmbedContents",A.I(["requests",A.ab(new A.T(d,new B.b1G(),s),!0,s.i("ae.E"))],y.N,y.K),e,g),$async$Rc)
case 3:t=i
s=$.hf.fR().b
if(s!=null)s.shf(!1)
s=J.d_(y.j.a(J.B(t.a,"embeddings")),new B.b1H(),y.r)
v=A.ab(s,!0,A.e(s).i("ae.E"))
x=1
break
case 1:return A.v(v,w)}})
return A.w($async$Rc,w)},
S6(d,e,f,g){return this.bdP(d,e,f,g)},
bdP(d,e,f,g){var x=0,w=A.x(y.i),v,u=this,t,s
var $async$S6=A.t(function(h,i){if(h===1)return A.u(i,w)
while(true)switch(x){case 0:s=$.hf.fR().b
if(s!=null)s.H(0)
s=y.N
x=3
return A.q(u.a.L3("models/embedding-001:embedContent",A.I(["model","models/embedding-001","content",A.I(["parts",A.c([A.I(["text",d],s,s)],y.m)],s,y.x)],s,y.K),e,g),$async$S6)
case 3:t=i
s=$.hf.fR().b
if(s!=null)s.shf(!1)
v=J.oK(y.j.a(J.B(J.B(t.a,"embedding"),"values")),y.H)
x=1
break
case 1:return A.v(v,w)}})
return A.w($async$S6,w)}}
B.b1T.prototype={
UH(d,e,f,g,h){return this.bm4(d,e,f,g,h)},
L3(d,e,f,g){return this.UH(d,e,f,!1,g)},
bm4(d,e,f,g,h){var x=0,w=A.x(y.c),v,u=this,t,s,r,q
var $async$UH=A.t(function(i,j){if(i===1)return A.u(j,w)
while(true)switch(x){case 0:q=f==null
if(!q||!1){q=q?null:f.bQ()
if(q==null)q=null
if(q==null){q=y.z
q=A.y(q,q)}e.m(0,"generationConfig",q)}q=D.a3.fl(e,null)
t=y.z
s=A.I(["key",u.b],y.N,t)
r=C.bV(null,null,null,null,g?E.lZ:null)
r.a="POST"
v=u.a.a6N(0,d,null,q,null,null,r,s,t)
x=1
break
case 1:return A.v(v,w)}})
return A.w($async$UH,w)}}
B.b1D.prototype={
b9k(d){return this.a.Rr(d,null,null,null)},
a93(d,e,f){return this.a.xH(d,e,f,null,null)},
azL(d,e){return this.a93(d,e,null)},
azM(d,e){return this.a93(d,null,e)},
bo6(d,e){return this.a.V2(null,d,null,null,e)},
bo3(d,e){return this.a.V1(0,e,null,null,null)},
b8C(d){return this.a.Rc(d,null,null,null)},
bdO(d){return this.a.S6(d,null,null,null)}}
B.apA.prototype={
l(d){var x=this
return"Candidates(content: "+A.m(x.a)+", finishReason: "+A.m(x.b)+", index: "+A.m(x.c)+", safetyRatings: "+A.m(x.d)+")"},
bQ(){var x=this
return A.I(["content",x.a,"finishReason",x.b,"index",x.c,"safetyRatings",x.d],y.N,y.z)},
$iq6:1,
gjD(d){return this.a},
gr7(){return this.b}}
B.aBp.prototype={}
B.bXD.prototype={
l(d){return"GeminiResponse(candidates: "+A.m(this.a)+", promptFeedback: "+A.m(this.b)+")"},
bQ(){return A.I(["candidates",this.a,"promptFeedback",this.b],y.N,y.z)}}
B.aBr.prototype={}
B.bYc.prototype={
l(d){return"PromptFeedback(safetyRatings: "+A.m(this.a)+")"},
bQ(){return A.I(["safetyRatings",this.a],y.N,y.z)}}
B.aBu.prototype={}
B.apB.prototype={
l(d){return"SafetyRatings(category: "+A.m(this.a)+", probability: "+A.m(this.b)+")"},
bQ(){return A.I(["category",this.a,"probability",this.b],y.N,y.z)},
$iGv:1}
B.aBv.prototype={}
var z=a.updateTypes(["Gv(@)","aD<o,@>(DP)","Bb(@)","q6(@)"])
B.b1I.prototype={
$1(d){return d.bQ()},
$S:z+1}
B.b1J.prototype={
$1(d){var x=y.N
return A.I(["inline_data",A.I(["mime_type","image/jpeg","data",D.nz.gS7().c1(d)],x,x)],x,y.f)},
$S:287}
B.b1K.prototype={
$1(d){var x=y.N
return A.I(["inline_data",A.I(["mime_type","image/jpeg","data",D.nz.gS7().c1(d)],x,x)],x,y.f)},
$S:287}
B.b1G.prototype={
$1(d){var x=y.N
return A.I(["model","models/embedding-001","content",A.I(["parts",A.c([A.I(["text",d],x,x)],y.m)],x,y.x)],x,y.K)},
$S:703}
B.b1H.prototype={
$1(d){return J.oK(y.j.a(J.B(d,"values")),y.H)},
$S:704}
B.bX1.prototype={
$1(d){return B.cxH(y.P.a(d))},
$S:z+0}
B.bX2.prototype={
$1(d){return new C.Pz(A.a4(J.B(y.P.a(d),"text")))},
$S:z+2}
B.bX3.prototype={
$1(d){return B.cxG(y.P.a(d))},
$S:z+3}
B.bX4.prototype={
$1(d){return B.cxH(y.P.a(d))},
$S:z+0};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.O,[B.b1F,B.b1T,B.b1D,B.aBp,B.aBr,B.aBu,B.aBv])
w(A.q8,[B.b1I,B.b1J,B.b1K,B.b1G,B.b1H,B.bX1,B.bX2,B.bX3,B.bX4])
v(B.apA,B.aBp)
v(B.bXD,B.aBr)
v(B.bYc,B.aBu)
v(B.apB,B.aBv)
x(B.aBp,A.kF)
x(B.aBr,A.kF)
x(B.aBu,A.kF)
x(B.aBv,A.kF)})()
A.aAL(b.typeUniverse,JSON.parse('{"apA":{"q6":[]},"apB":{"Gv":[]}}'))
var y=(function rtii(){var x=A.aA
return{F:x("q6"),J:x("N<aD<o,O>>"),m:x("N<aD<o,o>>"),h:x("N<aD<o,Q<aD<o,O>>>>"),X:x("N<aD<o,Q<aD<o,o>>>>"),t:x("N<C>"),s:x("Q<aD<o,O>>"),x:x("Q<aD<o,o>>"),j:x("Q<@>"),r:x("Q<cq>"),f:x("aD<o,o>"),P:x("aD<o,@>"),K:x("O"),C:x("Bb"),c:x("jP<@>"),R:x("Gv"),N:x("o"),S:x("ku<e6>"),z:x("@"),a:x("q6?"),g:x("Q<@>?"),o:x("Q<Q<cq>?>?"),i:x("Q<cq>?"),H:x("cq")}})();(function staticFields(){$.ctn=!0})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_9",e:"endPart",h:b})})($__dart_deferred_initializers__,"hum23ae8lzYq2pXDiD/bPiEWHIk=");