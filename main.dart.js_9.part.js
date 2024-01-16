((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_9",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C,E,B={b1b:function b1b(d,e,f){this.a=d
this.c=e
this.d=f},b1e:function b1e(){},b1f:function b1f(){},b1g:function b1g(){},b1c:function b1c(){},b1d:function b1d(){},b1p:function b1p(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=null},
cJM(d,e,f){var x=null
if($.csk){$.csk=!1
$.he.b=new B.b19(new B.b1b(new B.b1p(C.cHA(C.cq6(e+"v1beta/",x,"application/json",x,x,x)),d),x,x))}return $.he.cn()},
b19:function b19(d){this.a=d
this.b=null},
cwA(d){var x=J.Y(d),w=x.j(d,"content")==null?null:B.cRD(y.P.a(x.j(d,"content"))),v=A.a4(x.j(d,"finishReason")),u=A.ay(x.j(d,"index"))
x=y.g.a(x.j(d,"safetyRatings"))
if(x==null)x=null
else{x=J.d1(x,new B.bW9(),y.R)
x=A.aa(x,!0,A.e(x).i("ae.E"))}return new B.ap3(w,v,u,x)},
ap3:function ap3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bW9:function bW9(){},
aAM:function aAM(){},
cRD(d){var x=J.Y(d),w=y.g.a(x.j(d,"parts"))
if(w==null)w=null
else{w=J.d1(w,new B.bWa(),y.C)
w=A.aa(w,!0,A.e(w).i("ae.E"))}return new C.Pf(w,A.a4(x.j(d,"role")))},
bWa:function bWa(){},
clm(d){var x="promptFeedback",w=J.Y(d),v=y.g.a(w.j(d,"candidates"))
if(v==null)v=null
else{v=J.d1(v,new B.bWb(),y.F)
v=A.aa(v,!0,A.e(v).i("ae.E"))}return new B.bWL(v,w.j(d,x)==null?null:B.cRE(y.P.a(w.j(d,x))))},
bWL:function bWL(d,e){this.a=d
this.b=e},
bWb:function bWb(){},
aAO:function aAO(){},
cRE(d){var x=y.g.a(J.B(d,"safetyRatings"))
if(x==null)x=null
else{x=J.d1(x,new B.bWc(),y.R)
x=A.aa(x,!0,A.e(x).i("ae.E"))}return new B.bXk(x)},
bXk:function bXk(d){this.a=d},
bWc:function bWc(){},
aAR:function aAR(){},
cwB(d){var x=J.Y(d)
return new B.ap4(A.a4(x.j(d,"category")),A.a4(x.j(d,"probability")))},
ap4:function ap4(d,e){this.a=d
this.b=e},
aAS:function aAS(){},
cKC(d){var x=J.b7(d)
if(x.B())return x.ga_(x)
return null}}
J=c[1]
A=c[0]
D=c[2]
C=c[11]
E=c[13]
B=a.updateHolder(c[10],B)
B.b1b.prototype={
Qr(d,e,f,g){return this.b6z(d,e,f,g)},
b6z(d,e,f,g){var x=0,w=A.w(y.a),v,u=this,t,s
var $async$Qr=A.q(function(h,i){if(h===1)return A.t(i,w)
while(true)switch(x){case 0:s=$.he.cn().b
if(s!=null)s.G(0)
s=A.ad(d).i("T<1,aC<o,@>>")
x=3
return A.p(u.a.Ke("models/gemini-pro:generateContent",A.I(["contents",A.aa(new A.T(d,new B.b1e(),s),!0,s.i("ae.E"))],y.N,y.K),e,g),$async$Qr)
case 3:t=i
s=$.he.cn().b
if(s!=null)s.sh7(!1)
s=B.clm(t.a).a
v=s==null?null:C.b7D(s)
x=1
break
case 1:return A.u(v,w)}})
return A.v($async$Qr,w)},
xa(d,e,f,g,h){return this.axx(d,e,f,g,h)},
axx(a8,a9,b0,b1,b2){var $async$xa=A.q(function(b4,b5){switch(b4){case 2:s=v
x=s.pop()
break
case 1:t=b5
x=u}while(true)switch(x){case 0:a6=$.he.cn().b
if(a6!=null)a6.G(0)
a6=b0==null?null:b0.length!==0
a6=a6===!0?"models/gemini-pro-vision":"models/gemini-pro"
g=y.N
f=A.c([A.I(["text",a8],g,g)],y.J)
e=b0==null?null:new A.T(b0,new B.b1f(),A.ad(b0).i("T<1,aC<o,aC<o,o>>>"))
if(e!=null)D.d.I(f,e)
e=y.K
x=3
return A.hN(r.a.TC(A.n(a6)+":streamGenerateContent",A.I(["contents",A.c([A.I(["parts",f],g,y.s)],y.h)],g,e),a9,!0,b2),$async$xa,w)
case 3:d=b5
g=$.he.cn().b
if(g!=null)g.sh7(!1)
x=d.c===200?4:5
break
case 4:q=d.a
p=0
o=""
a6=y.t
n=A.c([],a6)
m=A.c([],a6)
e=new A.kn(A.f6(q.b,"stream",e),y.S)
u=6
a6=y.g,g=$.he.a
case 9:x=11
return A.hN(e.B(),$async$xa,w)
case 11:if(!b5){x=10
break}l=e.ga_(e)
m=J.a75(n,l)
J.lE(n)
k=""
try{f=m
k=D.dL.bS(f)}catch(b3){j=A.b3(b3)
a1="error: "+A.n(j)
a2=$.a6R
if(a2==null)A.Rd(a1)
else a2.$1(a1)
n=m
x=9
break}k=J.D1(k)
if(J.x(p,0)&&J.aDr(k,"[")){f=k
a3=J.be(f)
if(0>a3)A.ao(A.e8(0,0,a3,"startIndex",null))
k=A.cgP(f,"[","",0)}if(J.aDr(k,",")){f=k
a3=J.be(f)
if(0>a3)A.ao(A.e8(0,0,a3,"startIndex",null))
k=A.cgP(f,",","",0)}if(J.coU(k,"]"))k=J.chW(k,0,J.be(k)-1)
k=J.D1(k)
f=E.tp.bS(k),a3=f.length,a4=0
case 12:if(!(a4<f.length)){x=14
break}i=f[a4]
if(J.x(o,"")&&J.x(i,",")){x=13
break}o=J.a75(o,i)
u=16
a5=a6.a(J.B(D.a4.nx(0,o,null),"candidates"))
h=B.cwA(a5==null?null:B.cKC(a5))
x=19
v=[1,7]
return A.hN(A.c4Z(h),$async$xa,w)
case 19:a5=$.he.b
if(a5===$.he)A.ao(A.mK(g))
a5=a5.b
if(a5!=null)a5.F(0,C.aL2(h))
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
return A.hN(e.bj(0),$async$xa,w)
case 20:x=s.pop()
break
case 8:case 5:case 1:return A.hN(null,0,w)
case 2:return A.hN(t,1,w)}})
var x=0,w=A.ceI($async$xa,y.F),v,u=2,t,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
return A.ceV(w)},
TY(d,e,f,g,h){return this.blg(d,e,f,g,h)},
blg(d,e,f,g,h){var x=0,w=A.w(y.a),v,u=this,t,s,r
var $async$TY=A.q(function(i,j){if(i===1)return A.t(j,w)
while(true)switch(x){case 0:r=$.he.cn().b
if(r!=null)r.G(0)
r=y.N
t=A.c([A.I(["text",h],r,r)],y.J)
D.d.I(t,new A.T(e,new B.b1g(),A.ad(e).i("T<1,aC<o,aC<o,o>>>")))
x=3
return A.p(u.a.Ke("models/gemini-pro-vision:generateContent",A.I(["contents",A.c([A.I(["parts",t],r,y.s)],y.h)],r,y.K),d,g),$async$TY)
case 3:s=j
r=$.he.cn().b
if(r!=null)r.sh7(!1)
r=B.clm(s.a).a
v=r==null?null:C.b7D(r)
x=1
break
case 1:return A.u(v,w)}})
return A.v($async$TY,w)},
TX(d,e,f,g,h){return this.bld(0,e,f,g,h)},
bld(d,e,f,g,h){var x=0,w=A.w(y.a),v,u=this,t,s,r
var $async$TX=A.q(function(i,j){if(i===1)return A.t(j,w)
while(true)switch(x){case 0:s=$.he.cn().b
if(s!=null)s.G(0)
s=y.N
r=B
x=3
return A.p(u.a.Ke("models/gemini-pro:generateContent",A.I(["contents",A.c([A.I(["parts",A.c([A.I(["text",e],s,s)],y.m)],s,y.x)],y.X)],s,y.K),f,h),$async$TX)
case 3:s=r.clm(j.a).a
t=s==null?null:C.b7D(s)
s=$.he.cn().b
if(s!=null)s.F(0,t==null?null:C.aL2(t))
v=t
x=1
break
case 1:return A.u(v,w)}})
return A.v($async$TX,w)},
Qc(d,e,f,g){return this.b5S(d,e,f,g)},
b5S(d,e,f,g){var x=0,w=A.w(y.o),v,u=this,t,s
var $async$Qc=A.q(function(h,i){if(h===1)return A.t(i,w)
while(true)switch(x){case 0:s=$.he.cn().b
if(s!=null)s.G(0)
s=A.ad(d).i("T<1,aC<o,N>>")
x=3
return A.p(u.a.Ke("models/embedding-001:batchEmbedContents",A.I(["requests",A.aa(new A.T(d,new B.b1c(),s),!0,s.i("ae.E"))],y.N,y.K),e,g),$async$Qc)
case 3:t=i
s=$.he.cn().b
if(s!=null)s.sh7(!1)
s=J.d1(y.j.a(J.B(t.a,"embeddings")),new B.b1d(),y.r)
v=A.aa(s,!0,A.e(s).i("ae.E"))
x=1
break
case 1:return A.u(v,w)}})
return A.v($async$Qc,w)},
R6(d,e,f,g){return this.bb5(d,e,f,g)},
bb5(d,e,f,g){var x=0,w=A.w(y.i),v,u=this,t,s
var $async$R6=A.q(function(h,i){if(h===1)return A.t(i,w)
while(true)switch(x){case 0:s=$.he.cn().b
if(s!=null)s.G(0)
s=y.N
x=3
return A.p(u.a.Ke("models/embedding-001:embedContent",A.I(["model","models/embedding-001","content",A.I(["parts",A.c([A.I(["text",d],s,s)],y.m)],s,y.x)],s,y.K),e,g),$async$R6)
case 3:t=i
s=$.he.cn().b
if(s!=null)s.sh7(!1)
v=J.kX(y.j.a(J.B(J.B(t.a,"embedding"),"values")),y.H)
x=1
break
case 1:return A.u(v,w)}})
return A.v($async$R6,w)}}
B.b1p.prototype={
TC(d,e,f,g,h){return this.bjf(d,e,f,g,h)},
Ke(d,e,f,g){return this.TC(d,e,f,!1,g)},
bjf(d,e,f,g,h){var x=0,w=A.w(y.c),v,u=this,t,s,r,q
var $async$TC=A.q(function(i,j){if(i===1)return A.t(j,w)
while(true)switch(x){case 0:q=f==null
if(!q||!1){q=q?null:f.bO()
if(q==null)q=null
if(q==null){q=y.z
q=A.y(q,q)}e.m(0,"generationConfig",q)}q=D.a4.fe(e,null)
t=y.z
s=A.I(["key",u.b],y.N,t)
r=C.bX(null,null,null,null,g?E.lm:null)
r.a="POST"
v=u.a.a52(0,d,null,q,null,null,r,s,t)
x=1
break
case 1:return A.u(v,w)}})
return A.v($async$TC,w)}}
B.b19.prototype={
b6y(d){return this.a.Qr(d,null,null,null)},
a7h(d,e,f){return this.a.xa(d,e,f,null,null)},
axv(d,e){return this.a7h(d,e,null)},
axw(d,e){return this.a7h(d,null,e)},
blf(d,e){return this.a.TY(null,d,null,null,e)},
blc(d,e){return this.a.TX(0,e,null,null,null)},
b5R(d){return this.a.Qc(d,null,null,null)},
bb4(d){return this.a.R6(d,null,null,null)}}
B.ap3.prototype={
l(d){var x=this
return"Candidates(content: "+A.n(x.a)+", finishReason: "+A.n(x.b)+", index: "+A.n(x.c)+", safetyRatings: "+A.n(x.d)+")"},
bO(){var x=this
return A.I(["content",x.a,"finishReason",x.b,"index",x.c,"safetyRatings",x.d],y.N,y.z)},
$iq2:1,
gjt(d){return this.a},
gqR(){return this.b}}
B.aAM.prototype={}
B.bWL.prototype={
l(d){return"GeminiResponse(candidates: "+A.n(this.a)+", promptFeedback: "+A.n(this.b)+")"},
bO(){return A.I(["candidates",this.a,"promptFeedback",this.b],y.N,y.z)}}
B.aAO.prototype={}
B.bXk.prototype={
l(d){return"PromptFeedback(safetyRatings: "+A.n(this.a)+")"},
bO(){return A.I(["safetyRatings",this.a],y.N,y.z)}}
B.aAR.prototype={}
B.ap4.prototype={
l(d){return"SafetyRatings(category: "+A.n(this.a)+", probability: "+A.n(this.b)+")"},
bO(){return A.I(["category",this.a,"probability",this.b],y.N,y.z)},
$iGm:1}
B.aAS.prototype={}
var z=a.updateTypes(["Gm(@)","aC<o,@>(DA)","B2(@)","q2(@)"])
B.b1e.prototype={
$1(d){return d.bO()},
$S:z+1}
B.b1f.prototype={
$1(d){var x=y.N
return A.I(["inline_data",A.I(["mime_type","image/jpeg","data",D.mS.gR7().bS(d)],x,x)],x,y.f)},
$S:290}
B.b1g.prototype={
$1(d){var x=y.N
return A.I(["inline_data",A.I(["mime_type","image/jpeg","data",D.mS.gR7().bS(d)],x,x)],x,y.f)},
$S:290}
B.b1c.prototype={
$1(d){var x=y.N
return A.I(["model","models/embedding-001","content",A.I(["parts",A.c([A.I(["text",d],x,x)],y.m)],x,y.x)],x,y.K)},
$S:704}
B.b1d.prototype={
$1(d){return J.kX(y.j.a(J.B(d,"values")),y.H)},
$S:705}
B.bW9.prototype={
$1(d){return B.cwB(y.P.a(d))},
$S:z+0}
B.bWa.prototype={
$1(d){return new C.Pg(A.a4(J.B(y.P.a(d),"text")))},
$S:z+2}
B.bWb.prototype={
$1(d){return B.cwA(y.P.a(d))},
$S:z+3}
B.bWc.prototype={
$1(d){return B.cwB(y.P.a(d))},
$S:z+0};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.N,[B.b1b,B.b1p,B.b19,B.aAM,B.aAO,B.aAR,B.aAS])
w(A.q4,[B.b1e,B.b1f,B.b1g,B.b1c,B.b1d,B.bW9,B.bWa,B.bWb,B.bWc])
v(B.ap3,B.aAM)
v(B.bWL,B.aAO)
v(B.bXk,B.aAR)
v(B.ap4,B.aAS)
x(B.aAM,A.kx)
x(B.aAO,A.kx)
x(B.aAR,A.kx)
x(B.aAS,A.kx)})()
A.aA7(b.typeUniverse,JSON.parse('{"ap3":{"q2":[]},"ap4":{"Gm":[]}}'))
var y=(function rtii(){var x=A.az
return{F:x("q2"),J:x("O<aC<o,N>>"),m:x("O<aC<o,o>>"),h:x("O<aC<o,Q<aC<o,N>>>>"),X:x("O<aC<o,Q<aC<o,o>>>>"),t:x("O<C>"),s:x("Q<aC<o,N>>"),x:x("Q<aC<o,o>>"),j:x("Q<@>"),r:x("Q<ct>"),f:x("aC<o,o>"),P:x("aC<o,@>"),K:x("N"),C:x("B2"),c:x("jI<@>"),R:x("Gm"),N:x("o"),S:x("kn<e0>"),z:x("@"),a:x("q2?"),g:x("Q<@>?"),o:x("Q<Q<ct>?>?"),i:x("Q<ct>?"),H:x("ct")}})();(function staticFields(){$.csk=!0})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_9",e:"endPart",h:b})})($__dart_deferred_initializers__,"rSykGSQQ8pzEggQC4zv2lVQwC7Q=");