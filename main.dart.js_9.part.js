((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_9",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C,E,B={b2C:function b2C(d,e,f){this.a=d
this.c=e
this.d=f},b2F:function b2F(){},b2G:function b2G(){},b2H:function b2H(){},b2D:function b2D(){},b2E:function b2E(){},b2Q:function b2Q(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=null},
cLN(d,e,f){var x=null
if($.ctT){$.ctT=!1
$.hn.b=new B.b2A(new B.b2C(new B.b2Q(C.cJC(C.crJ(e+"v1beta/",x,"application/json",x,x,x)),d),x,x))}return $.hn.ck()},
b2A:function b2A(d){this.a=d
this.b=null},
cyu(d){var x=J.W(d),w=x.j(d,"content")==null?null:B.cTJ(y.P.a(x.j(d,"content"))),v=A.a5(x.j(d,"finishReason")),u=A.ay(x.j(d,"index"))
x=y.g.a(x.j(d,"safetyRatings"))
if(x==null)x=null
else{x=J.d5(x,new B.bXJ(),y.R)
x=A.a1(x,!0,A.e(x).i("ae.E"))}return new B.aqx(w,v,u,x)},
aqx:function aqx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bXJ:function bXJ(){},
aCg:function aCg(){},
cTJ(d){var x=J.W(d),w=y.g.a(x.j(d,"parts"))
if(w==null)w=null
else{w=J.d5(w,new B.bXK(),y.C)
w=A.a1(w,!0,A.e(w).i("ae.E"))}return new C.Qh(w,A.a5(x.j(d,"role")))},
bXK:function bXK(){},
cmX(d){var x="promptFeedback",w=J.W(d),v=y.g.a(w.j(d,"candidates"))
if(v==null)v=null
else{v=J.d5(v,new B.bXL(),y.F)
v=A.a1(v,!0,A.e(v).i("ae.E"))}return new B.bYk(v,w.j(d,x)==null?null:B.cTK(y.P.a(w.j(d,x))))},
bYk:function bYk(d,e){this.a=d
this.b=e},
bXL:function bXL(){},
aCi:function aCi(){},
cTK(d){var x=y.g.a(J.B(d,"safetyRatings"))
if(x==null)x=null
else{x=J.d5(x,new B.bXM(),y.R)
x=A.a1(x,!0,A.e(x).i("ae.E"))}return new B.bYU(x)},
bYU:function bYU(d){this.a=d},
bXM:function bXM(){},
aCl:function aCl(){},
cyv(d){var x=J.W(d)
return new B.aqy(A.a5(x.j(d,"category")),A.a5(x.j(d,"probability")))},
aqy:function aqy(d,e){this.a=d
this.b=e},
aCm:function aCm(){},
cMG(d){var x=J.b7(d)
if(x.A())return x.gX(x)
return null}}
J=c[1]
A=c[0]
D=c[2]
C=c[11]
E=c[13]
B=a.updateHolder(c[10],B)
B.b2C.prototype={
RA(d,e,f,g){return this.b8o(d,e,f,g)},
b8o(d,e,f,g){var x=0,w=A.x(y.a),v,u=this,t,s
var $async$RA=A.q(function(h,i){if(h===1)return A.u(i,w)
while(true)switch(x){case 0:s=$.hn.ck().b
if(s!=null)s.H(0)
s=A.ad(d).i("U<1,aD<n,@>>")
x=3
return A.p(u.a.Lh("models/gemini-pro:generateContent",A.J(["contents",A.a1(new A.U(d,new B.b2F(),s),!0,s.i("ae.E"))],y.N,y.K),e,g),$async$RA)
case 3:t=i
s=$.hn.ck().b
if(s!=null)s.shn(!1)
s=B.cmX(t.a).a
v=s==null?null:C.b91(s)
x=1
break
case 1:return A.v(v,w)}})
return A.w($async$RA,w)},
y9(d,e,f,g,h){return this.ayW(d,e,f,g,h)},
ayW(a8,a9,b0,b1,b2){var $async$y9=A.q(function(b4,b5){switch(b4){case 2:s=v
x=s.pop()
break
case 1:t=b5
x=u}while(true)switch(x){case 0:a6=$.hn.ck().b
if(a6!=null)a6.H(0)
a6=b0==null?null:b0.length!==0
a6=a6===!0?"models/gemini-pro-vision":"models/gemini-pro"
g=y.N
f=A.c([A.J(["text",a8],g,g)],y.J)
e=b0==null?null:new A.U(b0,new B.b2G(),A.ad(b0).i("U<1,aD<n,aD<n,n>>>"))
if(e!=null)D.d.J(f,e)
e=y.K
x=3
return A.hV(r.a.UK(A.o(a6)+":streamGenerateContent",A.J(["contents",A.c([A.J(["parts",f],g,y.s)],y.h)],g,e),a9,!0,b2),$async$y9,w)
case 3:d=b5
g=$.hn.ck().b
if(g!=null)g.shn(!1)
x=d.c===200?4:5
break
case 4:q=d.a
p=0
o=""
a6=y.t
n=A.c([],a6)
m=A.c([],a6)
e=new A.kz(A.f9(q.b,"stream",e),y.S)
u=6
a6=y.g,g=$.hn.a
case 9:x=11
return A.hV(e.A(),$async$y9,w)
case 11:if(!b5){x=10
break}l=e.gX(e)
m=J.a8t(n,l)
J.lR(n)
k=""
try{f=m
k=D.dP.bP(f)}catch(b3){j=A.b6(b3)
a1="error: "+A.o(j)
a2=$.aEd
if(a2==null)A.a8e(a1)
else a2.$1(a1)
n=m
x=9
break}k=J.DG(k)
if(J.r(p,0)&&J.aEY(k,"[")){f=k
a3=J.bk(f)
if(0>a3)A.an(A.e9(0,0,a3,"startIndex",null))
k=A.cip(f,"[","",0)}if(J.aEY(k,",")){f=k
a3=J.bk(f)
if(0>a3)A.an(A.e9(0,0,a3,"startIndex",null))
k=A.cip(f,",","",0)}if(J.cqv(k,"]"))k=J.cjx(k,0,J.bk(k)-1)
k=J.DG(k)
f=E.un.bP(k),a3=f.length,a4=0
case 12:if(!(a4<f.length)){x=14
break}i=f[a4]
if(J.r(o,"")&&J.r(i,",")){x=13
break}o=J.a8t(o,i)
u=16
a5=a6.a(J.B(D.a4.oj(0,o,null),"candidates"))
h=B.cyu(a5==null?null:B.cMG(a5))
x=19
v=[1,7]
return A.hV(A.c6z(h),$async$y9,w)
case 19:a5=$.hn.b
if(a5===$.hn)A.an(A.lq(g))
a5=a5.b
if(a5!=null)a5.G(0,C.aMv(h))
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
return A.hV(e.bo(0),$async$y9,w)
case 20:x=s.pop()
break
case 8:case 5:case 1:return A.hV(null,0,w)
case 2:return A.hV(t,1,w)}})
var x=0,w=A.cgj($async$y9,y.F),v,u=2,t,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
return A.cgw(w)},
V5(d,e,f,g,h){return this.bn7(d,e,f,g,h)},
bn7(d,e,f,g,h){var x=0,w=A.x(y.a),v,u=this,t,s,r
var $async$V5=A.q(function(i,j){if(i===1)return A.u(j,w)
while(true)switch(x){case 0:r=$.hn.ck().b
if(r!=null)r.H(0)
r=y.N
t=A.c([A.J(["text",h],r,r)],y.J)
D.d.J(t,new A.U(e,new B.b2H(),A.ad(e).i("U<1,aD<n,aD<n,n>>>")))
x=3
return A.p(u.a.Lh("models/gemini-pro-vision:generateContent",A.J(["contents",A.c([A.J(["parts",t],r,y.s)],y.h)],r,y.K),d,g),$async$V5)
case 3:s=j
r=$.hn.ck().b
if(r!=null)r.shn(!1)
r=B.cmX(s.a).a
v=r==null?null:C.b91(r)
x=1
break
case 1:return A.v(v,w)}})
return A.w($async$V5,w)},
V4(d,e,f,g,h){return this.bn4(0,e,f,g,h)},
bn4(d,e,f,g,h){var x=0,w=A.x(y.a),v,u=this,t,s,r
var $async$V4=A.q(function(i,j){if(i===1)return A.u(j,w)
while(true)switch(x){case 0:s=$.hn.ck().b
if(s!=null)s.H(0)
s=y.N
r=B
x=3
return A.p(u.a.Lh("models/gemini-pro:generateContent",A.J(["contents",A.c([A.J(["parts",A.c([A.J(["text",e],s,s)],y.m)],s,y.x)],y.X)],s,y.K),f,h),$async$V4)
case 3:s=r.cmX(j.a).a
t=s==null?null:C.b91(s)
s=$.hn.ck().b
if(s!=null)s.G(0,t==null?null:C.aMv(t))
v=t
x=1
break
case 1:return A.v(v,w)}})
return A.w($async$V4,w)},
Rl(d,e,f,g){return this.b7H(d,e,f,g)},
b7H(d,e,f,g){var x=0,w=A.x(y.o),v,u=this,t,s
var $async$Rl=A.q(function(h,i){if(h===1)return A.u(i,w)
while(true)switch(x){case 0:s=$.hn.ck().b
if(s!=null)s.H(0)
s=A.ad(d).i("U<1,aD<n,P>>")
x=3
return A.p(u.a.Lh("models/embedding-001:batchEmbedContents",A.J(["requests",A.a1(new A.U(d,new B.b2D(),s),!0,s.i("ae.E"))],y.N,y.K),e,g),$async$Rl)
case 3:t=i
s=$.hn.ck().b
if(s!=null)s.shn(!1)
s=J.d5(y.j.a(J.B(t.a,"embeddings")),new B.b2E(),y.r)
v=A.a1(s,!0,A.e(s).i("ae.E"))
x=1
break
case 1:return A.v(v,w)}})
return A.w($async$Rl,w)},
Sg(d,e,f,g){return this.bcZ(d,e,f,g)},
bcZ(d,e,f,g){var x=0,w=A.x(y.i),v,u=this,t,s
var $async$Sg=A.q(function(h,i){if(h===1)return A.u(i,w)
while(true)switch(x){case 0:s=$.hn.ck().b
if(s!=null)s.H(0)
s=y.N
x=3
return A.p(u.a.Lh("models/embedding-001:embedContent",A.J(["model","models/embedding-001","content",A.J(["parts",A.c([A.J(["text",d],s,s)],y.m)],s,y.x)],s,y.K),e,g),$async$Sg)
case 3:t=i
s=$.hn.ck().b
if(s!=null)s.shn(!1)
v=J.l7(y.j.a(J.B(J.B(t.a,"embedding"),"values")),y.H)
x=1
break
case 1:return A.v(v,w)}})
return A.w($async$Sg,w)}}
B.b2Q.prototype={
UK(d,e,f,g,h){return this.bl7(d,e,f,g,h)},
Lh(d,e,f,g){return this.UK(d,e,f,!1,g)},
bl7(d,e,f,g,h){var x=0,w=A.x(y.c),v,u=this,t,s,r,q
var $async$UK=A.q(function(i,j){if(i===1)return A.u(j,w)
while(true)switch(x){case 0:q=f==null
if(!q||!1){q=q?null:f.c_()
if(q==null)q=null
if(q==null){q=y.z
q=A.y(q,q)}e.m(0,"generationConfig",q)}q=D.a4.fC(e,null)
t=y.z
s=A.J(["key",u.b],y.N,t)
r=C.bY(null,null,null,null,g?E.lL:null)
r.a="POST"
v=u.a.a6g(0,d,null,q,null,null,r,s,t)
x=1
break
case 1:return A.v(v,w)}})
return A.w($async$UK,w)}}
B.b2A.prototype={
b8n(d){return this.a.RA(d,null,null,null)},
a8r(d,e,f){return this.a.y9(d,e,f,null,null)},
ayU(d,e){return this.a8r(d,e,null)},
ayV(d,e){return this.a8r(d,null,e)},
bn6(d,e){return this.a.V5(null,d,null,null,e)},
bn3(d,e){return this.a.V4(0,e,null,null,null)},
b7G(d){return this.a.Rl(d,null,null,null)},
bcY(d){return this.a.Sg(d,null,null,null)}}
B.aqx.prototype={
l(d){var x=this
return"Candidates(content: "+A.o(x.a)+", finishReason: "+A.o(x.b)+", index: "+A.o(x.c)+", safetyRatings: "+A.o(x.d)+")"},
c_(){var x=this
return A.J(["content",x.a,"finishReason",x.b,"index",x.c,"safetyRatings",x.d],y.N,y.z)},
$iqi:1,
gk_(d){return this.a},
grT(){return this.b}}
B.aCg.prototype={}
B.bYk.prototype={
l(d){return"GeminiResponse(candidates: "+A.o(this.a)+", promptFeedback: "+A.o(this.b)+")"},
c_(){return A.J(["candidates",this.a,"promptFeedback",this.b],y.N,y.z)}}
B.aCi.prototype={}
B.bYU.prototype={
l(d){return"PromptFeedback(safetyRatings: "+A.o(this.a)+")"},
c_(){return A.J(["safetyRatings",this.a],y.N,y.z)}}
B.aCl.prototype={}
B.aqy.prototype={
l(d){return"SafetyRatings(category: "+A.o(this.a)+", probability: "+A.o(this.b)+")"},
c_(){return A.J(["category",this.a,"probability",this.b],y.N,y.z)},
$iH6:1}
B.aCm.prototype={}
var z=a.updateTypes(["H6(@)","aD<n,@>(Ef)","BH(@)","qi(@)"])
B.b2F.prototype={
$1(d){return d.c_()},
$S:z+1}
B.b2G.prototype={
$1(d){var x=y.N
return A.J(["inline_data",A.J(["mime_type","image/jpeg","data",D.nk.gSh().bP(d)],x,x)],x,y.f)},
$S:289}
B.b2H.prototype={
$1(d){var x=y.N
return A.J(["inline_data",A.J(["mime_type","image/jpeg","data",D.nk.gSh().bP(d)],x,x)],x,y.f)},
$S:289}
B.b2D.prototype={
$1(d){var x=y.N
return A.J(["model","models/embedding-001","content",A.J(["parts",A.c([A.J(["text",d],x,x)],y.m)],x,y.x)],x,y.K)},
$S:704}
B.b2E.prototype={
$1(d){return J.l7(y.j.a(J.B(d,"values")),y.H)},
$S:705}
B.bXJ.prototype={
$1(d){return B.cyv(y.P.a(d))},
$S:z+0}
B.bXK.prototype={
$1(d){return new C.Qi(A.a5(J.B(y.P.a(d),"text")))},
$S:z+2}
B.bXL.prototype={
$1(d){return B.cyu(y.P.a(d))},
$S:z+3}
B.bXM.prototype={
$1(d){return B.cyv(y.P.a(d))},
$S:z+0};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.P,[B.b2C,B.b2Q,B.b2A,B.aCg,B.aCi,B.aCl,B.aCm])
w(A.qk,[B.b2F,B.b2G,B.b2H,B.b2D,B.b2E,B.bXJ,B.bXK,B.bXL,B.bXM])
v(B.aqx,B.aCg)
v(B.bYk,B.aCi)
v(B.bYU,B.aCl)
v(B.aqy,B.aCm)
x(B.aCg,A.kJ)
x(B.aCi,A.kJ)
x(B.aCl,A.kJ)
x(B.aCm,A.kJ)})()
A.aBC(b.typeUniverse,JSON.parse('{"aqx":{"qi":[]},"aqy":{"H6":[]}}'))
var y=(function rtii(){var x=A.aw
return{F:x("qi"),J:x("O<aD<n,P>>"),m:x("O<aD<n,n>>"),h:x("O<aD<n,R<aD<n,P>>>>"),X:x("O<aD<n,R<aD<n,n>>>>"),t:x("O<D>"),s:x("R<aD<n,P>>"),x:x("R<aD<n,n>>"),j:x("R<@>"),r:x("R<be>"),f:x("aD<n,n>"),P:x("aD<n,@>"),K:x("P"),C:x("BH"),c:x("jV<@>"),R:x("H6"),N:x("n"),S:x("kz<dZ>"),z:x("@"),a:x("qi?"),g:x("R<@>?"),o:x("R<R<be>?>?"),i:x("R<be>?"),H:x("be")}})();(function staticFields(){$.ctT=!0})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_9",e:"endPart",h:b})})($__dart_deferred_initializers__,"CT9gXfWKHLo2ZRz7yTQGHjmD+vI=");