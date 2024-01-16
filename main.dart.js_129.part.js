((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_129",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C,E,B={b2C:function b2C(d,e,f){this.a=d
this.c=e
this.d=f},b2F:function b2F(){},b2G:function b2G(){},b2H:function b2H(){},b2D:function b2D(){},b2E:function b2E(){},b2Q:function b2Q(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=null},
cLd(d,e,f){var x=null
if($.ctJ){$.ctJ=!1
$.hp.b=new B.b2A(new B.b2C(new B.b2Q(C.cJ0(C.crv(e+"v1beta/",x,"application/json",x,x,x)),d),x,x))}return $.hp.cn()},
b2A:function b2A(d){this.a=d
this.b=null},
cxZ(d){var x=J.a_(d),w=x.j(d,"content")==null?null:B.cTe(y.P.a(x.j(d,"content"))),v=A.a7(x.j(d,"finishReason")),u=A.az(x.j(d,"index"))
x=y.g.a(x.j(d,"safetyRatings"))
if(x==null)x=null
else{x=J.d6(x,new B.bXy(),y.R)
x=A.ac(x,!0,A.e(x).i("ah.E"))}return new B.ap8(w,v,u,x)},
ap8:function ap8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bXy:function bXy(){},
aAQ:function aAQ(){},
cTe(d){var x=J.a_(d),w=y.g.a(x.j(d,"parts"))
if(w==null)w=null
else{w=J.d6(w,new B.bXz(),y.C)
w=A.ac(w,!0,A.e(w).i("ah.E"))}return new C.PN(w,A.a7(x.j(d,"role")))},
bXz:function bXz(){},
cmK(d){var x="promptFeedback",w=J.a_(d),v=y.g.a(w.j(d,"candidates"))
if(v==null)v=null
else{v=J.d6(v,new B.bXA(),y.F)
v=A.ac(v,!0,A.e(v).i("ah.E"))}return new B.bY9(v,w.j(d,x)==null?null:B.cTf(y.P.a(w.j(d,x))))},
bY9:function bY9(d,e){this.a=d
this.b=e},
bXA:function bXA(){},
aAS:function aAS(){},
cTf(d){var x=y.g.a(J.B(d,"safetyRatings"))
if(x==null)x=null
else{x=J.d6(x,new B.bXB(),y.R)
x=A.ac(x,!0,A.e(x).i("ah.E"))}return new B.bYJ(x)},
bYJ:function bYJ(d){this.a=d},
bXB:function bXB(){},
aAV:function aAV(){},
cy_(d){var x=J.a_(d)
return new B.ap9(A.a7(x.j(d,"category")),A.a7(x.j(d,"probability")))},
ap9:function ap9(d,e){this.a=d
this.b=e},
aAW:function aAW(){},
cM5(d){var x=J.b8(d)
if(x.B())return x.ga_(x)
return null}}
J=c[1]
A=c[0]
D=c[2]
C=c[24]
E=c[86]
B=a.updateHolder(c[10],B)
B.b2C.prototype={
Qt(d,e,f,g){return this.b7d(d,e,f,g)},
b7d(d,e,f,g){var x=0,w=A.w(y.a),v,u=this,t,s
var $async$Qt=A.r(function(h,i){if(h===1)return A.t(i,w)
while(true)switch(x){case 0:s=$.hp.cn().b
if(s!=null)s.G(0)
s=A.ag(d).i("U<1,aC<m,@>>")
x=3
return A.q(u.a.Ke("models/gemini-pro:generateContent",A.J(["contents",A.ac(new A.U(d,new B.b2F(),s),!0,s.i("ah.E"))],y.N,y.K),e,g),$async$Qt)
case 3:t=i
s=$.hp.cn().b
if(s!=null)s.sh6(!1)
s=B.cmK(t.a).a
v=s==null?null:C.b93(s)
x=1
break
case 1:return A.u(v,w)}})
return A.v($async$Qt,w)},
x9(d,e,f,g,h){return this.axV(d,e,f,g,h)},
axV(a8,a9,b0,b1,b2){var $async$x9=A.r(function(b4,b5){switch(b4){case 2:s=v
x=s.pop()
break
case 1:t=b5
x=u}while(true)switch(x){case 0:a6=$.hp.cn().b
if(a6!=null)a6.G(0)
a6=b0==null?null:b0.length!==0
a6=a6===!0?"models/gemini-pro-vision":"models/gemini-pro"
g=y.N
f=A.c([A.J(["text",a8],g,g)],y.J)
e=b0==null?null:new A.U(b0,new B.b2G(),A.ag(b0).i("U<1,aC<m,aC<m,m>>>"))
if(e!=null)D.d.I(f,e)
e=y.K
x=3
return A.i4(r.a.TH(A.o(a6)+":streamGenerateContent",A.J(["contents",A.c([A.J(["parts",f],g,y.s)],y.h)],g,e),a9,!0,b2),$async$x9,w)
case 3:d=b5
g=$.hp.cn().b
if(g!=null)g.sh6(!1)
x=d.c===200?4:5
break
case 4:q=d.a
p=0
o=""
a6=y.t
n=A.c([],a6)
m=A.c([],a6)
e=new A.kM(A.fg(q.b,"stream",e),y.S)
u=6
a6=y.g,g=$.hp.a
case 9:x=11
return A.i4(e.B(),$async$x9,w)
case 11:if(!b5){x=10
break}l=e.ga_(e)
m=J.a7i(n,l)
J.m5(n)
k=""
try{f=m
k=D.dM.bS(f)}catch(b3){j=A.b3(b3)
a1="error: "+A.o(j)
a2=$.a73
if(a2==null)A.RM(a1)
else a2.$1(a1)
n=m
x=9
break}k=J.Dq(k)
if(J.x(p,0)&&J.aDv(k,"[")){f=k
a3=J.be(f)
if(0>a3)A.as(A.ec(0,0,a3,"startIndex",null))
k=A.cic(f,"[","",0)}if(J.aDv(k,",")){f=k
a3=J.be(f)
if(0>a3)A.as(A.ec(0,0,a3,"startIndex",null))
k=A.cic(f,",","",0)}if(J.cqh(k,"]"))k=J.cjj(k,0,J.be(k)-1)
k=J.Dq(k)
f=E.tp.bS(k),a3=f.length,a4=0
case 12:if(!(a4<f.length)){x=14
break}i=f[a4]
if(J.x(o,"")&&J.x(i,",")){x=13
break}o=J.a7i(o,i)
u=16
a5=a6.a(J.B(D.a4.nC(0,o,null),"candidates"))
h=B.cxZ(a5==null?null:B.cM5(a5))
x=19
v=[1,7]
return A.i4(A.c6n(h),$async$x9,w)
case 19:a5=$.hp.b
if(a5===$.hp)A.as(A.ni(g))
a5=a5.b
if(a5!=null)a5.F(0,C.aJK(h))
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
case 18:case 13:f.length===a3||(0,A.aj)(f),++a4
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
return A.i4(e.bk(0),$async$x9,w)
case 20:x=s.pop()
break
case 8:case 5:case 1:return A.i4(null,0,w)
case 2:return A.i4(t,1,w)}})
var x=0,w=A.cg5($async$x9,y.F),v,u=2,t,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
return A.cgi(w)},
U3(d,e,f,g,h){return this.bm6(d,e,f,g,h)},
bm6(d,e,f,g,h){var x=0,w=A.w(y.a),v,u=this,t,s,r
var $async$U3=A.r(function(i,j){if(i===1)return A.t(j,w)
while(true)switch(x){case 0:r=$.hp.cn().b
if(r!=null)r.G(0)
r=y.N
t=A.c([A.J(["text",h],r,r)],y.J)
D.d.I(t,new A.U(e,new B.b2H(),A.ag(e).i("U<1,aC<m,aC<m,m>>>")))
x=3
return A.q(u.a.Ke("models/gemini-pro-vision:generateContent",A.J(["contents",A.c([A.J(["parts",t],r,y.s)],y.h)],r,y.K),d,g),$async$U3)
case 3:s=j
r=$.hp.cn().b
if(r!=null)r.sh6(!1)
r=B.cmK(s.a).a
v=r==null?null:C.b93(r)
x=1
break
case 1:return A.u(v,w)}})
return A.v($async$U3,w)},
U2(d,e,f,g,h){return this.bm3(0,e,f,g,h)},
bm3(d,e,f,g,h){var x=0,w=A.w(y.a),v,u=this,t,s,r
var $async$U2=A.r(function(i,j){if(i===1)return A.t(j,w)
while(true)switch(x){case 0:s=$.hp.cn().b
if(s!=null)s.G(0)
s=y.N
r=B
x=3
return A.q(u.a.Ke("models/gemini-pro:generateContent",A.J(["contents",A.c([A.J(["parts",A.c([A.J(["text",e],s,s)],y.m)],s,y.x)],y.X)],s,y.K),f,h),$async$U2)
case 3:s=r.cmK(j.a).a
t=s==null?null:C.b93(s)
s=$.hp.cn().b
if(s!=null)s.F(0,t==null?null:C.aJK(t))
v=t
x=1
break
case 1:return A.u(v,w)}})
return A.v($async$U2,w)},
Qe(d,e,f,g){return this.b6v(d,e,f,g)},
b6v(d,e,f,g){var x=0,w=A.w(y.o),v,u=this,t,s
var $async$Qe=A.r(function(h,i){if(h===1)return A.t(i,w)
while(true)switch(x){case 0:s=$.hp.cn().b
if(s!=null)s.G(0)
s=A.ag(d).i("U<1,aC<m,L>>")
x=3
return A.q(u.a.Ke("models/embedding-001:batchEmbedContents",A.J(["requests",A.ac(new A.U(d,new B.b2D(),s),!0,s.i("ah.E"))],y.N,y.K),e,g),$async$Qe)
case 3:t=i
s=$.hp.cn().b
if(s!=null)s.sh6(!1)
s=J.d6(y.j.a(J.B(t.a,"embeddings")),new B.b2E(),y.r)
v=A.ac(s,!0,A.e(s).i("ah.E"))
x=1
break
case 1:return A.u(v,w)}})
return A.v($async$Qe,w)},
R9(d,e,f,g){return this.bbL(d,e,f,g)},
bbL(d,e,f,g){var x=0,w=A.w(y.i),v,u=this,t,s
var $async$R9=A.r(function(h,i){if(h===1)return A.t(i,w)
while(true)switch(x){case 0:s=$.hp.cn().b
if(s!=null)s.G(0)
s=y.N
x=3
return A.q(u.a.Ke("models/embedding-001:embedContent",A.J(["model","models/embedding-001","content",A.J(["parts",A.c([A.J(["text",d],s,s)],y.m)],s,y.x)],s,y.K),e,g),$async$R9)
case 3:t=i
s=$.hp.cn().b
if(s!=null)s.sh6(!1)
v=J.lj(y.j.a(J.B(J.B(t.a,"embedding"),"values")),y.H)
x=1
break
case 1:return A.u(v,w)}})
return A.v($async$R9,w)}}
B.b2Q.prototype={
TH(d,e,f,g,h){return this.bk1(d,e,f,g,h)},
Ke(d,e,f,g){return this.TH(d,e,f,!1,g)},
bk1(d,e,f,g,h){var x=0,w=A.w(y.c),v,u=this,t,s,r,q
var $async$TH=A.r(function(i,j){if(i===1)return A.t(j,w)
while(true)switch(x){case 0:q=f==null
if(!q||!1){q=q?null:f.bO()
if(q==null)q=null
if(q==null){q=y.z
q=A.y(q,q)}e.m(0,"generationConfig",q)}q=D.a4.fd(e,null)
t=y.z
s=A.J(["key",u.b],y.N,t)
r=C.c1(null,null,null,null,g?E.ln:null)
r.a="POST"
v=u.a.a5j(0,d,null,q,null,null,r,s,t)
x=1
break
case 1:return A.u(v,w)}})
return A.v($async$TH,w)}}
B.b2A.prototype={
b7c(d){return this.a.Qt(d,null,null,null)},
a7z(d,e,f){return this.a.x9(d,e,f,null,null)},
axT(d,e){return this.a7z(d,e,null)},
axU(d,e){return this.a7z(d,null,e)},
bm5(d,e){return this.a.U3(null,d,null,null,e)},
bm2(d,e){return this.a.U2(0,e,null,null,null)},
b6u(d){return this.a.Qe(d,null,null,null)},
bbK(d){return this.a.R9(d,null,null,null)}}
B.ap8.prototype={
l(d){var x=this
return"Candidates(content: "+A.o(x.a)+", finishReason: "+A.o(x.b)+", index: "+A.o(x.c)+", safetyRatings: "+A.o(x.d)+")"},
bO(){var x=this
return A.J(["content",x.a,"finishReason",x.b,"index",x.c,"safetyRatings",x.d],y.N,y.z)},
$iqx:1,
gjv(d){return this.a},
gqR(){return this.b}}
B.aAQ.prototype={}
B.bY9.prototype={
l(d){return"GeminiResponse(candidates: "+A.o(this.a)+", promptFeedback: "+A.o(this.b)+")"},
bO(){return A.J(["candidates",this.a,"promptFeedback",this.b],y.N,y.z)}}
B.aAS.prototype={}
B.bYJ.prototype={
l(d){return"PromptFeedback(safetyRatings: "+A.o(this.a)+")"},
bO(){return A.J(["safetyRatings",this.a],y.N,y.z)}}
B.aAV.prototype={}
B.ap9.prototype={
l(d){return"SafetyRatings(category: "+A.o(this.a)+", probability: "+A.o(this.b)+")"},
bO(){return A.J(["category",this.a,"probability",this.b],y.N,y.z)},
$iGT:1}
B.aAW.prototype={}
var z=a.updateTypes(["GT(@)","aC<m,@>(E_)","Bt(@)","qx(@)"])
B.b2F.prototype={
$1(d){return d.bO()},
$S:z+1}
B.b2G.prototype={
$1(d){var x=y.N
return A.J(["inline_data",A.J(["mime_type","image/jpeg","data",D.mT.gRa().bS(d)],x,x)],x,y.f)},
$S:290}
B.b2H.prototype={
$1(d){var x=y.N
return A.J(["inline_data",A.J(["mime_type","image/jpeg","data",D.mT.gRa().bS(d)],x,x)],x,y.f)},
$S:290}
B.b2D.prototype={
$1(d){var x=y.N
return A.J(["model","models/embedding-001","content",A.J(["parts",A.c([A.J(["text",d],x,x)],y.m)],x,y.x)],x,y.K)},
$S:702}
B.b2E.prototype={
$1(d){return J.lj(y.j.a(J.B(d,"values")),y.H)},
$S:703}
B.bXy.prototype={
$1(d){return B.cy_(y.P.a(d))},
$S:z+0}
B.bXz.prototype={
$1(d){return new C.PO(A.a7(J.B(y.P.a(d),"text")))},
$S:z+2}
B.bXA.prototype={
$1(d){return B.cxZ(y.P.a(d))},
$S:z+3}
B.bXB.prototype={
$1(d){return B.cy_(y.P.a(d))},
$S:z+0};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.L,[B.b2C,B.b2Q,B.b2A,B.aAQ,B.aAS,B.aAV,B.aAW])
w(A.dL,[B.b2F,B.b2G,B.b2H,B.b2D,B.b2E,B.bXy,B.bXz,B.bXA,B.bXB])
v(B.ap8,B.aAQ)
v(B.bY9,B.aAS)
v(B.bYJ,B.aAV)
v(B.ap9,B.aAW)
x(B.aAQ,A.kU)
x(B.aAS,A.kU)
x(B.aAV,A.kU)
x(B.aAW,A.kU)})()
A.dA(b.typeUniverse,JSON.parse('{"ap8":{"qx":[]},"ap9":{"GT":[]}}'))
var y=(function rtii(){var x=A.a3
return{F:x("qx"),J:x("I<aC<m,L>>"),m:x("I<aC<m,m>>"),h:x("I<aC<m,Q<aC<m,L>>>>"),X:x("I<aC<m,Q<aC<m,m>>>>"),t:x("I<C>"),s:x("Q<aC<m,L>>"),x:x("Q<aC<m,m>>"),j:x("Q<@>"),r:x("Q<cz>"),f:x("aC<m,m>"),P:x("aC<m,@>"),K:x("L"),C:x("Bt"),c:x("k3<@>"),R:x("GT"),N:x("m"),S:x("kM<dZ>"),z:x("@"),a:x("qx?"),g:x("Q<@>?"),o:x("Q<Q<cz>?>?"),i:x("Q<cz>?"),H:x("cz")}})();(function staticFields(){$.ctJ=!0})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_129",e:"endPart",h:b})})($__dart_deferred_initializers__,"VOZv+eQLq93CtwHPQi/1z1SaEKk=");