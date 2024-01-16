((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_129",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C,E,B={b35:function b35(d,e,f){this.a=d
this.c=e
this.d=f},b38:function b38(){},b39:function b39(){},b3a:function b3a(){},b36:function b36(){},b37:function b37(){},b3j:function b3j(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=null},
cMn(d,e,f){var x=null
if($.cuM){$.cuM=!1
$.hr.b=new B.b33(new B.b35(new B.b3j(C.cK8(C.csx(e+"v1beta/",x,"application/json",x,x,x)),d),x,x))}return $.hr.fT()},
b33:function b33(d){this.a=d
this.b=null},
cz4(d){var x=J.a0(d),w=x.j(d,"content")==null?null:B.cUu(y.P.a(x.j(d,"content"))),v=A.a7(x.j(d,"finishReason")),u=A.aA(x.j(d,"index"))
x=y.g.a(x.j(d,"safetyRatings"))
if(x==null)x=null
else{x=J.d3(x,new B.bYq(),y.R)
x=A.ad(x,!0,A.e(x).i("ai.E"))}return new B.apF(w,v,u,x)},
apF:function apF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bYq:function bYq(){},
aBt:function aBt(){},
cUu(d){var x=J.a0(d),w=y.g.a(x.j(d,"parts"))
if(w==null)w=null
else{w=J.d3(w,new B.bYr(),y.C)
w=A.ad(w,!0,A.e(w).i("ai.E"))}return new C.Q5(w,A.a7(x.j(d,"role")))},
bYr:function bYr(){},
cnL(d){var x="promptFeedback",w=J.a0(d),v=y.g.a(w.j(d,"candidates"))
if(v==null)v=null
else{v=J.d3(v,new B.bYs(),y.F)
v=A.ad(v,!0,A.e(v).i("ai.E"))}return new B.bZ1(v,w.j(d,x)==null?null:B.cUv(y.P.a(w.j(d,x))))},
bZ1:function bZ1(d,e){this.a=d
this.b=e},
bYs:function bYs(){},
aBv:function aBv(){},
cUv(d){var x=y.g.a(J.B(d,"safetyRatings"))
if(x==null)x=null
else{x=J.d3(x,new B.bYt(),y.R)
x=A.ad(x,!0,A.e(x).i("ai.E"))}return new B.bZB(x)},
bZB:function bZB(d){this.a=d},
bYt:function bYt(){},
aBy:function aBy(){},
cz5(d){var x=J.a0(d)
return new B.apG(A.a7(x.j(d,"category")),A.a7(x.j(d,"probability")))},
apG:function apG(d,e){this.a=d
this.b=e},
aBz:function aBz(){},
cNg(d){var x=J.b8(d)
if(x.B())return x.ga_(x)
return null}}
J=c[1]
A=c[0]
D=c[2]
C=c[24]
E=c[86]
B=a.updateHolder(c[10],B)
B.b35.prototype={
Rt(d,e,f,g){return this.b9Z(d,e,f,g)},
b9Z(d,e,f,g){var x=0,w=A.x(y.a),v,u=this,t,s
var $async$Rt=A.t(function(h,i){if(h===1)return A.u(i,w)
while(true)switch(x){case 0:s=$.hr.fT().b
if(s!=null)s.H(0)
s=A.ag(d).i("U<1,aC<o,@>>")
x=3
return A.r(u.a.L3("models/gemini-pro:generateContent",A.J(["contents",A.ad(new A.U(d,new B.b38(),s),!0,s.i("ai.E"))],y.N,y.K),e,g),$async$Rt)
case 3:t=i
s=$.hr.fT().b
if(s!=null)s.shg(!1)
s=B.cnL(t.a).a
v=s==null?null:C.b9z(s)
x=1
break
case 1:return A.v(v,w)}})
return A.w($async$Rt,w)},
xH(d,e,f,g,h){return this.aA9(d,e,f,g,h)},
aA9(a8,a9,b0,b1,b2){var $async$xH=A.t(function(b4,b5){switch(b4){case 2:s=v
x=s.pop()
break
case 1:t=b5
x=u}while(true)switch(x){case 0:a6=$.hr.fT().b
if(a6!=null)a6.H(0)
a6=b0==null?null:b0.length!==0
a6=a6===!0?"models/gemini-pro-vision":"models/gemini-pro"
g=y.N
f=A.c([A.J(["text",a8],g,g)],y.J)
e=b0==null?null:new A.U(b0,new B.b39(),A.ag(b0).i("U<1,aC<o,aC<o,o>>>"))
if(e!=null)D.d.I(f,e)
e=y.K
x=3
return A.i7(r.a.UL(A.m(a6)+":streamGenerateContent",A.J(["contents",A.c([A.J(["parts",f],g,y.s)],y.h)],g,e),a9,!0,b2),$async$xH,w)
case 3:d=b5
g=$.hr.fT().b
if(g!=null)g.shg(!1)
x=d.c===200?4:5
break
case 4:q=d.a
p=0
o=""
a6=y.t
n=A.c([],a6)
m=A.c([],a6)
e=new A.kS(A.ff(q.b,"stream",e),y.S)
u=6
a6=y.g,g=$.hr.a
case 9:x=11
return A.i7(e.B(),$async$xH,w)
case 11:if(!b5){x=10
break}l=e.ga_(e)
m=J.a7O(n,l)
J.mT(n)
k=""
try{f=m
k=D.dX.c1(f)}catch(b3){j=A.b3(b3)
a1="error: "+A.m(j)
a2=$.a7y
if(a2==null)A.S5(a1)
else a2.$1(a1)
n=m
x=9
break}k=J.DE(k)
if(J.q(p,0)&&J.aE7(k,"[")){f=k
a3=J.bd(f)
if(0>a3)A.av(A.ea(0,0,a3,"startIndex",null))
k=A.cj1(f,"[","",0)}if(J.aE7(k,",")){f=k
a3=J.bd(f)
if(0>a3)A.av(A.ea(0,0,a3,"startIndex",null))
k=A.cj1(f,",","",0)}if(J.crl(k,"]"))k=J.ck7(k,0,J.bd(k)-1)
k=J.DE(k)
f=E.up.c1(k),a3=f.length,a4=0
case 12:if(!(a4<f.length)){x=14
break}i=f[a4]
if(J.q(o,"")&&J.q(i,",")){x=13
break}o=J.a7O(o,i)
u=16
a5=a6.a(J.B(D.a3.o_(0,o,null),"candidates"))
h=B.cz4(a5==null?null:B.cNg(a5))
x=19
v=[1,7]
return A.i7(A.c7j(h),$async$xH,w)
case 19:a5=$.hr.b
if(a5===$.hr)A.av(A.LM(g))
a5=a5.b
if(a5!=null)a5.F(0,C.aKm(h))
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
return A.i7(e.bl(0),$async$xH,w)
case 20:x=s.pop()
break
case 8:case 5:case 1:return A.i7(null,0,w)
case 2:return A.i7(t,1,w)}})
var x=0,w=A.ch0($async$xH,y.F),v,u=2,t,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
return A.chc(w)},
V7(d,e,f,g,h){return this.boX(d,e,f,g,h)},
boX(d,e,f,g,h){var x=0,w=A.x(y.a),v,u=this,t,s,r
var $async$V7=A.t(function(i,j){if(i===1)return A.u(j,w)
while(true)switch(x){case 0:r=$.hr.fT().b
if(r!=null)r.H(0)
r=y.N
t=A.c([A.J(["text",h],r,r)],y.J)
D.d.I(t,new A.U(e,new B.b3a(),A.ag(e).i("U<1,aC<o,aC<o,o>>>")))
x=3
return A.r(u.a.L3("models/gemini-pro-vision:generateContent",A.J(["contents",A.c([A.J(["parts",t],r,y.s)],y.h)],r,y.K),d,g),$async$V7)
case 3:s=j
r=$.hr.fT().b
if(r!=null)r.shg(!1)
r=B.cnL(s.a).a
v=r==null?null:C.b9z(r)
x=1
break
case 1:return A.v(v,w)}})
return A.w($async$V7,w)},
V6(d,e,f,g,h){return this.boU(0,e,f,g,h)},
boU(d,e,f,g,h){var x=0,w=A.x(y.a),v,u=this,t,s,r
var $async$V6=A.t(function(i,j){if(i===1)return A.u(j,w)
while(true)switch(x){case 0:s=$.hr.fT().b
if(s!=null)s.H(0)
s=y.N
r=B
x=3
return A.r(u.a.L3("models/gemini-pro:generateContent",A.J(["contents",A.c([A.J(["parts",A.c([A.J(["text",e],s,s)],y.m)],s,y.x)],y.X)],s,y.K),f,h),$async$V6)
case 3:s=r.cnL(j.a).a
t=s==null?null:C.b9z(s)
s=$.hr.fT().b
if(s!=null)s.F(0,t==null?null:C.aKm(t))
v=t
x=1
break
case 1:return A.v(v,w)}})
return A.w($async$V6,w)},
Re(d,e,f,g){return this.b9f(d,e,f,g)},
b9f(d,e,f,g){var x=0,w=A.x(y.o),v,u=this,t,s
var $async$Re=A.t(function(h,i){if(h===1)return A.u(i,w)
while(true)switch(x){case 0:s=$.hr.fT().b
if(s!=null)s.H(0)
s=A.ag(d).i("U<1,aC<o,K>>")
x=3
return A.r(u.a.L3("models/embedding-001:batchEmbedContents",A.J(["requests",A.ad(new A.U(d,new B.b36(),s),!0,s.i("ai.E"))],y.N,y.K),e,g),$async$Re)
case 3:t=i
s=$.hr.fT().b
if(s!=null)s.shg(!1)
s=J.d3(y.j.a(J.B(t.a,"embeddings")),new B.b37(),y.r)
v=A.ad(s,!0,A.e(s).i("ai.E"))
x=1
break
case 1:return A.v(v,w)}})
return A.w($async$Re,w)},
S8(d,e,f,g){return this.bet(d,e,f,g)},
bet(d,e,f,g){var x=0,w=A.x(y.i),v,u=this,t,s
var $async$S8=A.t(function(h,i){if(h===1)return A.u(i,w)
while(true)switch(x){case 0:s=$.hr.fT().b
if(s!=null)s.H(0)
s=y.N
x=3
return A.r(u.a.L3("models/embedding-001:embedContent",A.J(["model","models/embedding-001","content",A.J(["parts",A.c([A.J(["text",d],s,s)],y.m)],s,y.x)],s,y.K),e,g),$async$S8)
case 3:t=i
s=$.hr.fT().b
if(s!=null)s.shg(!1)
v=J.p9(y.j.a(J.B(J.B(t.a,"embedding"),"values")),y.H)
x=1
break
case 1:return A.v(v,w)}})
return A.w($async$S8,w)}}
B.b3j.prototype={
UL(d,e,f,g,h){return this.bmQ(d,e,f,g,h)},
L3(d,e,f,g){return this.UL(d,e,f,!1,g)},
bmQ(d,e,f,g,h){var x=0,w=A.x(y.c),v,u=this,t,s,r,q
var $async$UL=A.t(function(i,j){if(i===1)return A.u(j,w)
while(true)switch(x){case 0:q=f==null
if(!q||!1){q=q?null:f.bQ()
if(q==null)q=null
if(q==null){q=y.z
q=A.y(q,q)}e.m(0,"generationConfig",q)}q=D.a3.fl(e,null)
t=y.z
s=A.J(["key",u.b],y.N,t)
r=C.c_(null,null,null,null,g?E.lZ:null)
r.a="POST"
v=u.a.a71(0,d,null,q,null,null,r,s,t)
x=1
break
case 1:return A.v(v,w)}})
return A.w($async$UL,w)}}
B.b33.prototype={
b9Y(d){return this.a.Rt(d,null,null,null)},
a9j(d,e,f){return this.a.xH(d,e,f,null,null)},
aA7(d,e){return this.a9j(d,e,null)},
aA8(d,e){return this.a9j(d,null,e)},
boW(d,e){return this.a.V7(null,d,null,null,e)},
boT(d,e){return this.a.V6(0,e,null,null,null)},
b9e(d){return this.a.Re(d,null,null,null)},
bes(d){return this.a.S8(d,null,null,null)}}
B.apF.prototype={
l(d){var x=this
return"Candidates(content: "+A.m(x.a)+", finishReason: "+A.m(x.b)+", index: "+A.m(x.c)+", safetyRatings: "+A.m(x.d)+")"},
bQ(){var x=this
return A.J(["content",x.a,"finishReason",x.b,"index",x.c,"safetyRatings",x.d],y.N,y.z)},
$iqC:1,
gjH(d){return this.a},
gra(){return this.b}}
B.aBt.prototype={}
B.bZ1.prototype={
l(d){return"GeminiResponse(candidates: "+A.m(this.a)+", promptFeedback: "+A.m(this.b)+")"},
bQ(){return A.J(["candidates",this.a,"promptFeedback",this.b],y.N,y.z)}}
B.aBv.prototype={}
B.bZB.prototype={
l(d){return"PromptFeedback(safetyRatings: "+A.m(this.a)+")"},
bQ(){return A.J(["safetyRatings",this.a],y.N,y.z)}}
B.aBy.prototype={}
B.apG.prototype={
l(d){return"SafetyRatings(category: "+A.m(this.a)+", probability: "+A.m(this.b)+")"},
bQ(){return A.J(["category",this.a,"probability",this.b],y.N,y.z)},
$iH1:1}
B.aBz.prototype={}
var z=a.updateTypes(["H1(@)","aC<o,@>(Ee)","BC(@)","qC(@)"])
B.b38.prototype={
$1(d){return d.bQ()},
$S:z+1}
B.b39.prototype={
$1(d){var x=y.N
return A.J(["inline_data",A.J(["mime_type","image/jpeg","data",D.nz.gS9().c1(d)],x,x)],x,y.f)},
$S:287}
B.b3a.prototype={
$1(d){var x=y.N
return A.J(["inline_data",A.J(["mime_type","image/jpeg","data",D.nz.gS9().c1(d)],x,x)],x,y.f)},
$S:287}
B.b36.prototype={
$1(d){var x=y.N
return A.J(["model","models/embedding-001","content",A.J(["parts",A.c([A.J(["text",d],x,x)],y.m)],x,y.x)],x,y.K)},
$S:701}
B.b37.prototype={
$1(d){return J.p9(y.j.a(J.B(d,"values")),y.H)},
$S:702}
B.bYq.prototype={
$1(d){return B.cz5(y.P.a(d))},
$S:z+0}
B.bYr.prototype={
$1(d){return new C.Q6(A.a7(J.B(y.P.a(d),"text")))},
$S:z+2}
B.bYs.prototype={
$1(d){return B.cz4(y.P.a(d))},
$S:z+3}
B.bYt.prototype={
$1(d){return B.cz5(y.P.a(d))},
$S:z+0};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.K,[B.b35,B.b3j,B.b33,B.aBt,B.aBv,B.aBy,B.aBz])
w(A.dL,[B.b38,B.b39,B.b3a,B.b36,B.b37,B.bYq,B.bYr,B.bYs,B.bYt])
v(B.apF,B.aBt)
v(B.bZ1,B.aBv)
v(B.bZB,B.aBy)
v(B.apG,B.aBz)
x(B.aBt,A.l1)
x(B.aBv,A.l1)
x(B.aBy,A.l1)
x(B.aBz,A.l1)})()
A.dA(b.typeUniverse,JSON.parse('{"apF":{"qC":[]},"apG":{"H1":[]}}'))
var y=(function rtii(){var x=A.a3
return{F:x("qC"),J:x("I<aC<o,K>>"),m:x("I<aC<o,o>>"),h:x("I<aC<o,R<aC<o,K>>>>"),X:x("I<aC<o,R<aC<o,o>>>>"),t:x("I<C>"),s:x("R<aC<o,K>>"),x:x("R<aC<o,o>>"),j:x("R<@>"),r:x("R<cw>"),f:x("aC<o,o>"),P:x("aC<o,@>"),K:x("K"),C:x("BC"),c:x("k9<@>"),R:x("H1"),N:x("o"),S:x("kS<e0>"),z:x("@"),a:x("qC?"),g:x("R<@>?"),o:x("R<R<cw>?>?"),i:x("R<cw>?"),H:x("cw")}})();(function staticFields(){$.cuM=!0})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_129",e:"endPart",h:b})})($__dart_deferred_initializers__,"WwOgqigkLxZrBMjJUMqDsxG+COM=");