var TH="186",mU={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},lU={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},SH=0,QW=1,jH=2,dU=3,uU=0,c7=1,yH=2,N7=3,E7=0,oJ=1,I9=2,z9=0,n7=1,$W=2,WW=3,ZW=4,vH=5,cU=6,q7=100,fH=101,hH=102,bH=103,xH=104,gH=200,pH=201,mH=202,lH=203,dH=204,uH=205,cH=206,nH=207,sH=208,iH=209,oH=210,aH=211,rH=212,tH=213,eH=214,JY=0,QY=1,$Y=2,KW=3,WY=4,ZY=5,KY=6,HY=7,YY=0,XY=1,UY=2,q9=0,HW=1,YW=2,XW=3,UW=4,GW=5,NW=6,EW=7,nU="attached",sU="detached",iU=300,F7=301,z8=302,GQ=303,NQ=304,s7=306,GY=1000,EQ=1001,NY=1002,J8=1003,EY=1004,oU=1004,i7=1005,aU=1005,aJ=1006,qQ=1007,rU=1007,A8=1008,tU=1008,F9=1009,qY=1010,FY=1011,o7=1012,qW=1013,Q8=1014,p9=1015,A9=1016,FW=1017,DW=1018,D7=1020,DY=35902,OY=35899,RY=1021,MY=1022,C9=1023,C8=1026,w8=1027,kY=1028,OW=1029,_8=1030,RW=1031,eU=1032,MW=1033,FQ=33776,DQ=33777,OQ=33778,RQ=33779,kW=35840,LW=35841,VW=35842,BW=35843,IW=36196,zW=37492,AW=37496,CW=37488,wW=37489,MQ=37490,_W=37491,PW=37808,TW=37809,SW=37810,jW=37811,yW=37812,vW=37813,fW=37814,hW=37815,bW=37816,xW=37817,gW=37818,pW=37819,mW=37820,lW=37821,dW=36492,uW=36494,cW=36495,nW=36283,sW=36284,kQ=36285,iW=36286,JG=2200,QG=2201,$G=2202,WG=2300,ZG=2301,KG=2302,HG=2303,YG=2400,XG=2401,UG=2402,GG=2500,NG=2501,EG=0,qG=1,FG=2,DG=3200,OG=3201,RG=3202,MG=3203,oW=0,LY=1,P8="",VY="srgb",aW="srgb-linear",rW="linear",DJ="srgb",kG="",LG="rg",VG="ga",BG=0,IG=7680,zG=7681,AG=7682,CG=7683,wG=34055,_G=34056,PG=5386,TG=512,SG=513,jG=514,yG=515,vG=516,fG=517,hG=518,bG=519,BY=512,IY=513,zY=514,LQ=515,AY=516,CY=517,VQ=518,wY=519,xG=35044,gG=35048,pG=35040,mG=35045,lG=35049,dG=35041,uG=35046,cG=35050,nG=35042,sG="100",tW="300 es",eW=2000,iG=2001,oG={COMPUTE:"compute",RENDER:"render"},aG={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},rG={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},tG={TEXTURE_COMPARE:"depthTextureCompare"},eG={NONE:0,SHARED:1,FULL:2};function JN(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}var QN={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Z7(J,Q){return new QN[J](Q)}function _Y(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function H7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function PY(){let J=H7("canvas");return J.style.display="block",J}var kK={},t9=null;function $N(J){t9=J}function WN(){return t9}function m7(...J){let Q="THREE."+J.shift();if(t9)t9("log",Q,...J);else console.log(Q,...J)}function TY(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function N0(...J){J=TY(J);let Q="THREE."+J.shift();if(t9)t9("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function S0(...J){J=TY(J);let Q="THREE."+J.shift();if(t9)t9("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function b9(...J){let Q=J.join(" ");if(Q in kK)return;kK[Q]=!0,N0(...J)}function SY(J,Q,$){return new Promise(function(W,Z){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:Z();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:W()}}setTimeout(K,$)})}var jY={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class K9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let W=$[J];if(W!==void 0){let Z=W.indexOf(Q);if(Z!==-1)W.splice(Z,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let W=$.slice(0);for(let Z=0,K=W.length;Z<K;Z++)W[Z].call(this,J);J.target=null}}}var fJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],LK=1234567,k8=Math.PI/180,L8=180/Math.PI;function eJ(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(fJ[J&255]+fJ[J>>8&255]+fJ[J>>16&255]+fJ[J>>24&255]+"-"+fJ[Q&255]+fJ[Q>>8&255]+"-"+fJ[Q>>16&15|64]+fJ[Q>>24&255]+"-"+fJ[$&63|128]+fJ[$>>8&255]+"-"+fJ[$>>16&255]+fJ[$>>24&255]+fJ[W&255]+fJ[W>>8&255]+fJ[W>>16&255]+fJ[W>>24&255]).toLowerCase()}function m0(J,Q,$){return Math.max(Q,Math.min($,J))}function JZ(J,Q){return(J%Q+Q)%Q}function ZN(J,Q,$,W,Z){return W+(J-Q)*(Z-W)/($-Q)}function KN(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function b7(J,Q,$){return(1-$)*J+$*Q}function HN(J,Q,$,W){return b7(J,Q,1-Math.exp(-$*W))}function YN(J,Q=1){return Q-Math.abs(JZ(J,Q*2)-Q)}function XN(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function UN(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function GN(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function NN(J,Q){return J+Math.random()*(Q-J)}function EN(J){return J*(0.5-Math.random())}function qN(J){if(J!==void 0)LK=J;let Q=LK+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function FN(J){return J*k8}function DN(J){return J*L8}function ON(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function RN(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function MN(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function kN(J,Q,$,W,Z){let{cos:K,sin:H}=Math,Y=K($/2),X=H($/2),U=K((Q+W)/2),N=H((Q+W)/2),E=K((Q-W)/2),G=H((Q-W)/2),q=K((W-Q)/2),O=H((W-Q)/2);switch(Z){case"XYX":J.set(Y*N,X*E,X*G,Y*U);break;case"YZY":J.set(X*G,Y*N,X*E,Y*U);break;case"ZXZ":J.set(X*E,X*G,Y*N,Y*U);break;case"XZX":J.set(Y*N,X*O,X*q,Y*U);break;case"YXY":J.set(X*q,Y*N,X*O,Y*U);break;case"ZYZ":J.set(X*O,X*q,Y*N,Y*U);break;default:N0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+Z)}}function dJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function i0(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var LN={DEG2RAD:k8,RAD2DEG:L8,generateUUID:eJ,clamp:m0,euclideanModulo:JZ,mapLinear:ZN,inverseLerp:KN,lerp:b7,damp:HN,pingpong:YN,smoothstep:XN,smootherstep:UN,randInt:GN,randFloat:NN,randFloatSpread:EN,seededRandom:qN,degToRad:FN,radToDeg:DN,isPowerOfTwo:ON,ceilPowerOfTwo:RN,floorPowerOfTwo:MN,setQuaternionFromProperEuler:kN,normalize:i0,denormalize:dJ};class e{static{e.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6],this.y=W[1]*Q+W[4]*$+W[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=m0(this.x,J.x,Q.x),this.y=m0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=m0(this.x,J,Q),this.y=m0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(m0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(m0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=this.x-J.x,K=this.y-J.y;return this.x=Z*$-K*W+J.x,this.y=Z*W+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xJ{constructor(J=0,Q=0,$=0,W=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=W}static slerpFlat(J,Q,$,W,Z,K,H){let Y=$[W+0],X=$[W+1],U=$[W+2],N=$[W+3],E=Z[K+0],G=Z[K+1],q=Z[K+2],O=Z[K+3];if(N!==O||Y!==E||X!==G||U!==q){let R=Y*E+X*G+U*q+N*O;if(R<0)E=-E,G=-G,q=-q,O=-O,R=-R;let D=1-H;if(R<0.9995){let F=Math.acos(R),V=Math.sin(F);D=Math.sin(D*F)/V,H=Math.sin(H*F)/V,Y=Y*D+E*H,X=X*D+G*H,U=U*D+q*H,N=N*D+O*H}else{Y=Y*D+E*H,X=X*D+G*H,U=U*D+q*H,N=N*D+O*H;let F=1/Math.sqrt(Y*Y+X*X+U*U+N*N);Y*=F,X*=F,U*=F,N*=F}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,$,W,Z,K){let H=$[W],Y=$[W+1],X=$[W+2],U=$[W+3],N=Z[K],E=Z[K+1],G=Z[K+2],q=Z[K+3];return J[Q]=H*q+U*N+Y*G-X*E,J[Q+1]=Y*q+U*E+X*N-H*G,J[Q+2]=X*q+U*G+H*E-Y*N,J[Q+3]=U*q-H*N-Y*E-X*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,W){return this._x=J,this._y=Q,this._z=$,this._w=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:W,_z:Z,_order:K}=J,H=Math.cos,Y=Math.sin,X=H($/2),U=H(W/2),N=H(Z/2),E=Y($/2),G=Y(W/2),q=Y(Z/2);switch(K){case"XYZ":this._x=E*U*N+X*G*q,this._y=X*G*N-E*U*q,this._z=X*U*q+E*G*N,this._w=X*U*N-E*G*q;break;case"YXZ":this._x=E*U*N+X*G*q,this._y=X*G*N-E*U*q,this._z=X*U*q-E*G*N,this._w=X*U*N+E*G*q;break;case"ZXY":this._x=E*U*N-X*G*q,this._y=X*G*N+E*U*q,this._z=X*U*q+E*G*N,this._w=X*U*N-E*G*q;break;case"ZYX":this._x=E*U*N-X*G*q,this._y=X*G*N+E*U*q,this._z=X*U*q-E*G*N,this._w=X*U*N+E*G*q;break;case"YZX":this._x=E*U*N+X*G*q,this._y=X*G*N+E*U*q,this._z=X*U*q-E*G*N,this._w=X*U*N-E*G*q;break;case"XZY":this._x=E*U*N-X*G*q,this._y=X*G*N-E*U*q,this._z=X*U*q+E*G*N,this._w=X*U*N+E*G*q;break;default:N0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,W=Math.sin($);return this._x=J.x*W,this._y=J.y*W,this._z=J.z*W,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],W=Q[4],Z=Q[8],K=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],N=Q[10],E=$+H+N;if(E>0){let G=0.5/Math.sqrt(E+1);this._w=0.25/G,this._x=(U-Y)*G,this._y=(Z-X)*G,this._z=(K-W)*G}else if($>H&&$>N){let G=2*Math.sqrt(1+$-H-N);this._w=(U-Y)/G,this._x=0.25*G,this._y=(W+K)/G,this._z=(Z+X)/G}else if(H>N){let G=2*Math.sqrt(1+H-$-N);this._w=(Z-X)/G,this._x=(W+K)/G,this._y=0.25*G,this._z=(Y+U)/G}else{let G=2*Math.sqrt(1+N-$-H);this._w=(K-W)/G,this._x=(Z+X)/G,this._y=(Y+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(m0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let W=Math.min(1,Q/$);return this.slerp(J,W),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+K*H+W*X-Z*Y,this._y=W*U+K*Y+Z*H-$*X,this._z=Z*U+K*X+$*Y-W*H,this._w=K*U-$*H-W*Y-Z*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=this.dot(J);if(H<0)$=-$,W=-W,Z=-Z,K=-K,H=-H;let Y=1-Q;if(H<0.9995){let X=Math.acos(H),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+K*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+K*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),W=Math.sqrt(1-$),Z=Math.sqrt($);return this.set(W*Math.sin(J),W*Math.cos(J),Z*Math.sin(Q),Z*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(VK.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(VK.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6]*W,this.y=Z[1]*Q+Z[4]*$+Z[7]*W,this.z=Z[2]*Q+Z[5]*$+Z[8]*W,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements,K=1/(Z[3]*Q+Z[7]*$+Z[11]*W+Z[15]);return this.x=(Z[0]*Q+Z[4]*$+Z[8]*W+Z[12])*K,this.y=(Z[1]*Q+Z[5]*$+Z[9]*W+Z[13])*K,this.z=(Z[2]*Q+Z[6]*$+Z[10]*W+Z[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,W=this.z,Z=J.x,K=J.y,H=J.z,Y=J.w,X=2*(K*W-H*$),U=2*(H*Q-Z*W),N=2*(Z*$-K*Q);return this.x=Q+Y*X+K*N-H*U,this.y=$+Y*U+H*X-Z*N,this.z=W+Y*N+Z*U-K*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[4]*$+Z[8]*W,this.y=Z[1]*Q+Z[5]*$+Z[9]*W,this.z=Z[2]*Q+Z[6]*$+Z[10]*W,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=m0(this.x,J.x,Q.x),this.y=m0(this.y,J.y,Q.y),this.z=m0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=m0(this.x,J,Q),this.y=m0(this.y,J,Q),this.z=m0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(m0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:W,z:Z}=J,K=Q.x,H=Q.y,Y=Q.z;return this.x=W*Y-Z*H,this.y=Z*K-$*Y,this.z=$*H-W*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return F$.copy(this).projectOnVector(J),this.sub(F$)}reflect(J){return this.sub(F$.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(m0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,W=this.z-J.z;return Q*Q+$*$+W*W}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let W=Math.sin(Q)*J;return this.x=W*Math.sin($),this.y=Math.cos(Q)*J,this.z=W*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),W=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=W,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var F$=new P,VK=new xJ;class d0{static{d0.prototype.isMatrix3=!0}constructor(J,Q,$,W,Z,K,H,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,Y,X)}set(J,Q,$,W,Z,K,H,Y,X){let U=this.elements;return U[0]=J,U[1]=W,U[2]=H,U[3]=Q,U[4]=Z,U[5]=Y,U[6]=$,U[7]=K,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[3],Y=$[6],X=$[1],U=$[4],N=$[7],E=$[2],G=$[5],q=$[8],O=W[0],R=W[3],D=W[6],F=W[1],V=W[4],A=W[7],M=W[2],z=W[5],_=W[8];return Z[0]=K*O+H*F+Y*M,Z[3]=K*R+H*V+Y*z,Z[6]=K*D+H*A+Y*_,Z[1]=X*O+U*F+N*M,Z[4]=X*R+U*V+N*z,Z[7]=X*D+U*A+N*_,Z[2]=E*O+G*F+q*M,Z[5]=E*R+G*V+q*z,Z[8]=E*D+G*A+q*_,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*K*U-Q*H*X-$*Z*U+$*H*Y+W*Z*X-W*K*Y}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],N=U*K-H*X,E=H*Y-U*Z,G=X*Z-K*Y,q=Q*N+$*E+W*G;if(q===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/q;return J[0]=N*O,J[1]=(W*X-U*$)*O,J[2]=(H*$-W*K)*O,J[3]=E*O,J[4]=(U*Q-W*Y)*O,J[5]=(W*Z-H*Q)*O,J[6]=G*O,J[7]=($*Y-X*Q)*O,J[8]=(K*Q-$*Z)*O,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,W,Z,K,H){let Y=Math.cos(Z),X=Math.sin(Z);return this.set($*Y,$*X,-$*(Y*K+X*H)+K+J,-W*X,W*Y,-W*(-X*K+Y*H)+H+Q,0,0,1),this}scale(J,Q){return b9("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(D$.makeScale(J,Q)),this}rotate(J){return b9("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(D$.makeRotation(-J)),this}translate(J,Q){return b9("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(D$.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<9;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var D$=new d0,BK=new d0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),IK=new d0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function VN(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(Z,K,H){if(this.enabled===!1||K===H||!K||!H)return Z;if(this.spaces[K].transfer==="srgb")Z.r=x9(Z.r),Z.g=x9(Z.g),Z.b=x9(Z.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)Z.applyMatrix3(this.spaces[K].toXYZ),Z.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")Z.r=K7(Z.r),Z.g=K7(Z.g),Z.b=K7(Z.b);return Z},workingToColorSpace:function(Z,K){return this.convert(Z,this.workingColorSpace,K)},colorSpaceToWorking:function(Z,K){return this.convert(Z,K,this.workingColorSpace)},getPrimaries:function(Z){return this.spaces[Z].primaries},getTransfer:function(Z){if(Z==="")return"linear";return this.spaces[Z].transfer},getToneMappingMode:function(Z){return this.spaces[Z].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(Z,K=this.workingColorSpace){return Z.fromArray(this.spaces[K].luminanceCoefficients)},define:function(Z){Object.assign(this.spaces,Z)},_getMatrix:function(Z,K,H){return Z.copy(this.spaces[K].toXYZ).multiply(this.spaces[H].fromXYZ)},_getDrawingBufferColorSpace:function(Z){return this.spaces[Z].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(Z=this.workingColorSpace){return this.spaces[Z].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(Z,K){return b9("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(Z,K)},toWorkingColorSpace:function(Z,K){return b9("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(Z,K)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],W=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:W,transfer:"linear",toXYZ:BK,fromXYZ:IK,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:W,transfer:"srgb",toXYZ:BK,fromXYZ:IK,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var QJ=VN();function x9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function K7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var x8;class QZ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(x8===void 0)x8=H7("canvas");x8.width=J.width,x8.height=J.height;let W=x8.getContext("2d");if(J instanceof ImageData)W.putImageData(J,0,0);else W.drawImage(J,0,0,J.width,J.height);$=x8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=H7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let W=$.getImageData(0,0,J.width,J.height),Z=W.data;for(let K=0;K<Z.length;K++)Z[K]=x9(Z[K]/255)*255;return $.putImageData(W,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(x9(Q[$]/255)*255);else Q[$]=x9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return N0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var BN=0;class L9{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:BN++}),this.uuid=eJ(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},W=this.data;if(W!==null){let Z;if(Array.isArray(W)){Z=[];for(let K=0,H=W.length;K<H;K++)if(W[K].isDataTexture)Z.push(O$(W[K].image));else Z.push(O$(W[K]))}else Z=O$(W);$.url=Z}if(!Q)J.images[this.uuid]=$;return $}}function O$(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return QZ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return N0("Texture: Unable to serialize Texture."),{}}class yY extends L9{constructor(J=null){b9('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.');super(J);this.isSource=!0}}var IN=0,R$=new P;class LJ extends K9{constructor(J=LJ.DEFAULT_IMAGE,Q=LJ.DEFAULT_MAPPING,$=1001,W=1001,Z=1006,K=1008,H=1023,Y=1009,X=LJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:IN++}),this.uuid=eJ(),this.name="",this.source=new L9(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=W,this.magFilter=Z,this.minFilter=K,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new e(0,0),this.repeat=new e(1,1),this.center=new e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new d0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(R$).x}get height(){return this.source.getSize(R$).y}get depth(){return this.source.getSize(R$).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){N0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){N0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(W&&$&&(W.isVector2&&$.isVector2))W.copy($);else if(W&&$&&(W.isVector3&&$.isVector3))W.copy($);else if(W&&$&&(W.isMatrix3&&$.isMatrix3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}LJ.DEFAULT_IMAGE=null;LJ.DEFAULT_MAPPING=300;LJ.DEFAULT_ANISOTROPY=1;class GJ{static{GJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,W=1){this.x=J,this.y=Q,this.z=$,this.w=W}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,W){return this.x=J,this.y=Q,this.z=$,this.w=W,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*W+K[12]*Z,this.y=K[1]*Q+K[5]*$+K[9]*W+K[13]*Z,this.z=K[2]*Q+K[6]*$+K[10]*W+K[14]*Z,this.w=K[3]*Q+K[7]*$+K[11]*W+K[15]*Z,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,W,Z,K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],N=Y[8],E=Y[1],G=Y[5],q=Y[9],O=Y[2],R=Y[6],D=Y[10];if(Math.abs(U-E)<0.01&&Math.abs(N-O)<0.01&&Math.abs(q-R)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(N+O)<0.1&&Math.abs(q+R)<0.1&&Math.abs(X+G+D-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let V=(X+1)/2,A=(G+1)/2,M=(D+1)/2,z=(U+E)/4,_=(N+O)/4,w=(q+R)/4;if(V>A&&V>M)if(V<0.01)$=0,W=0.707106781,Z=0.707106781;else $=Math.sqrt(V),W=z/$,Z=_/$;else if(A>M)if(A<0.01)$=0.707106781,W=0,Z=0.707106781;else W=Math.sqrt(A),$=z/W,Z=w/W;else if(M<0.01)$=0.707106781,W=0.707106781,Z=0;else Z=Math.sqrt(M),$=_/Z,W=w/Z;return this.set($,W,Z,Q),this}let F=Math.sqrt((R-q)*(R-q)+(N-O)*(N-O)+(E-U)*(E-U));if(Math.abs(F)<0.001)F=1;return this.x=(R-q)/F,this.y=(N-O)/F,this.z=(E-U)/F,this.w=Math.acos((X+G+D-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=m0(this.x,J.x,Q.x),this.y=m0(this.y,J.y,Q.y),this.z=m0(this.z,J.z,Q.z),this.w=m0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=m0(this.x,J,Q),this.y=m0(this.y,J,Q),this.z=m0(this.z,J,Q),this.w=m0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(m0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BQ extends K9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new GJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new GJ(0,0,J,Q),this.textures=[];let W={width:J,height:Q,depth:$.depth},Z=new LJ(W),K=$.count;for(let H=0;H<K;H++)this.textures[H]=Z.clone(),this.textures[H].isRenderTargetTexture=!0,this.textures[H].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let W=0,Z=this.textures.length;W<Z;W++)if(this.textures[W].image.width=J,this.textures[W].image.height=Q,this.textures[W].image.depth=$,this.textures[W].isData3DTexture!==!0)this.textures[W].isArrayTexture=this.textures[W].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let W=Object.assign({},J.textures[Q].image);this.textures[Q].source=new L9(W)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uJ extends BQ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class a7 extends LJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class vY extends uJ{constructor(J=1,Q=1,$=1,W={}){super(J,Q,W);this.isWebGLArrayRenderTarget=!0,this.depth=$,this.texture=new a7(null,J,Q,$),this._setTextureOptions(W),this.texture.isRenderTargetTexture=!0}}class r7 extends LJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class fY extends uJ{constructor(J=1,Q=1,$=1,W={}){super(J,Q,W);this.isWebGL3DRenderTarget=!0,this.depth=$,this.texture=new r7(null,J,Q,$),this._setTextureOptions(W),this.texture.isRenderTargetTexture=!0}}class l0{static{l0.prototype.isMatrix4=!0}constructor(J,Q,$,W,Z,K,H,Y,X,U,N,E,G,q,O,R){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,Y,X,U,N,E,G,q,O,R)}set(J,Q,$,W,Z,K,H,Y,X,U,N,E,G,q,O,R){let D=this.elements;return D[0]=J,D[4]=Q,D[8]=$,D[12]=W,D[1]=Z,D[5]=K,D[9]=H,D[13]=Y,D[2]=X,D[6]=U,D[10]=N,D[14]=E,D[3]=G,D[7]=q,D[11]=O,D[15]=R,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new l0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,W=1/g8.setFromMatrixColumn(J,0).length(),Z=1/g8.setFromMatrixColumn(J,1).length(),K=1/g8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*W,Q[1]=$[1]*W,Q[2]=$[2]*W,Q[3]=0,Q[4]=$[4]*Z,Q[5]=$[5]*Z,Q[6]=$[6]*Z,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z,K=Math.cos($),H=Math.sin($),Y=Math.cos(W),X=Math.sin(W),U=Math.cos(Z),N=Math.sin(Z);if(J.order==="XYZ"){let E=K*U,G=K*N,q=H*U,O=H*N;Q[0]=Y*U,Q[4]=-Y*N,Q[8]=X,Q[1]=G+q*X,Q[5]=E-O*X,Q[9]=-H*Y,Q[2]=O-E*X,Q[6]=q+G*X,Q[10]=K*Y}else if(J.order==="YXZ"){let E=Y*U,G=Y*N,q=X*U,O=X*N;Q[0]=E+O*H,Q[4]=q*H-G,Q[8]=K*X,Q[1]=K*N,Q[5]=K*U,Q[9]=-H,Q[2]=G*H-q,Q[6]=O+E*H,Q[10]=K*Y}else if(J.order==="ZXY"){let E=Y*U,G=Y*N,q=X*U,O=X*N;Q[0]=E-O*H,Q[4]=-K*N,Q[8]=q+G*H,Q[1]=G+q*H,Q[5]=K*U,Q[9]=O-E*H,Q[2]=-K*X,Q[6]=H,Q[10]=K*Y}else if(J.order==="ZYX"){let E=K*U,G=K*N,q=H*U,O=H*N;Q[0]=Y*U,Q[4]=q*X-G,Q[8]=E*X+O,Q[1]=Y*N,Q[5]=O*X+E,Q[9]=G*X-q,Q[2]=-X,Q[6]=H*Y,Q[10]=K*Y}else if(J.order==="YZX"){let E=K*Y,G=K*X,q=H*Y,O=H*X;Q[0]=Y*U,Q[4]=O-E*N,Q[8]=q*N+G,Q[1]=N,Q[5]=K*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=G*N+q,Q[10]=E-O*N}else if(J.order==="XZY"){let E=K*Y,G=K*X,q=H*Y,O=H*X;Q[0]=Y*U,Q[4]=-N,Q[8]=X*U,Q[1]=E*N+O,Q[5]=K*U,Q[9]=G*N-q,Q[2]=q*N-G,Q[6]=H*U,Q[10]=O*N+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(zN,J,AN)}lookAt(J,Q,$){let W=this.elements;if(rJ.subVectors(J,Q),rJ.lengthSq()===0)rJ.z=1;if(rJ.normalize(),n9.crossVectors($,rJ),n9.lengthSq()===0){if(Math.abs($.z)===1)rJ.x+=0.0001;else rJ.z+=0.0001;rJ.normalize(),n9.crossVectors($,rJ)}return n9.normalize(),R6.crossVectors(rJ,n9),W[0]=n9.x,W[4]=R6.x,W[8]=rJ.x,W[1]=n9.y,W[5]=R6.y,W[9]=rJ.y,W[2]=n9.z,W[6]=R6.z,W[10]=rJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[4],Y=$[8],X=$[12],U=$[1],N=$[5],E=$[9],G=$[13],q=$[2],O=$[6],R=$[10],D=$[14],F=$[3],V=$[7],A=$[11],M=$[15],z=W[0],_=W[4],w=W[8],k=W[12],I=W[1],b=W[5],j=W[9],h=W[13],i=W[2],S=W[6],p=W[10],o=W[14],m=W[3],K0=W[7],u=W[11],r=W[15];return Z[0]=K*z+H*I+Y*i+X*m,Z[4]=K*_+H*b+Y*S+X*K0,Z[8]=K*w+H*j+Y*p+X*u,Z[12]=K*k+H*h+Y*o+X*r,Z[1]=U*z+N*I+E*i+G*m,Z[5]=U*_+N*b+E*S+G*K0,Z[9]=U*w+N*j+E*p+G*u,Z[13]=U*k+N*h+E*o+G*r,Z[2]=q*z+O*I+R*i+D*m,Z[6]=q*_+O*b+R*S+D*K0,Z[10]=q*w+O*j+R*p+D*u,Z[14]=q*k+O*h+R*o+D*r,Z[3]=F*z+V*I+A*i+M*m,Z[7]=F*_+V*b+A*S+M*K0,Z[11]=F*w+V*j+A*p+M*u,Z[15]=F*k+V*h+A*o+M*r,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[12],K=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],N=J[6],E=J[10],G=J[14],q=J[3],O=J[7],R=J[11],D=J[15],F=Y*G-X*E,V=H*G-X*N,A=H*E-Y*N,M=K*G-X*U,z=K*E-Y*U,_=K*N-H*U;return Q*(O*F-R*V+D*A)-$*(q*F-R*M+D*z)+W*(q*V-O*M+D*_)-Z*(q*A-O*z+R*_)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[1],K=J[5],H=J[9],Y=J[2],X=J[6],U=J[10];return Q*(K*U-H*X)-$*(Z*U-H*Y)+W*(Z*X-K*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let W=this.elements;if(J.isVector3)W[12]=J.x,W[13]=J.y,W[14]=J.z;else W[12]=J,W[13]=Q,W[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],N=J[9],E=J[10],G=J[11],q=J[12],O=J[13],R=J[14],D=J[15],F=Q*H-$*K,V=Q*Y-W*K,A=Q*X-Z*K,M=$*Y-W*H,z=$*X-Z*H,_=W*X-Z*Y,w=U*O-N*q,k=U*R-E*q,I=U*D-G*q,b=N*R-E*O,j=N*D-G*O,h=E*D-G*R,i=F*h-V*j+A*b+M*I-z*k+_*w;if(i===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/i;return J[0]=(H*h-Y*j+X*b)*S,J[1]=(W*j-$*h-Z*b)*S,J[2]=(O*_-R*z+D*M)*S,J[3]=(E*z-N*_-G*M)*S,J[4]=(Y*I-K*h-X*k)*S,J[5]=(Q*h-W*I+Z*k)*S,J[6]=(R*A-q*_-D*V)*S,J[7]=(U*_-E*A+G*V)*S,J[8]=(K*j-H*I+X*w)*S,J[9]=($*I-Q*j-Z*w)*S,J[10]=(q*z-O*A+D*F)*S,J[11]=(N*A-U*z-G*F)*S,J[12]=(H*k-K*b-Y*w)*S,J[13]=(Q*b-$*k+W*w)*S,J[14]=(O*V-q*M-R*F)*S,J[15]=(U*M-N*V+E*F)*S,this}scale(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z;return Q[0]*=$,Q[4]*=W,Q[8]*=Z,Q[1]*=$,Q[5]*=W,Q[9]*=Z,Q[2]*=$,Q[6]*=W,Q[10]*=Z,Q[3]*=$,Q[7]*=W,Q[11]*=Z,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],W=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,W))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=1-$,K=J.x,H=J.y,Y=J.z,X=Z*K,U=Z*H;return this.set(X*K+$,X*H-W*Y,X*Y+W*H,0,X*H+W*Y,U*H+$,U*Y-W*K,0,X*Y-W*H,U*Y+W*K,Z*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,W,Z,K){return this.set(1,$,Z,0,J,1,K,0,Q,W,1,0,0,0,0,1),this}compose(J,Q,$){let W=this.elements,Z=Q._x,K=Q._y,H=Q._z,Y=Q._w,X=Z+Z,U=K+K,N=H+H,E=Z*X,G=Z*U,q=Z*N,O=K*U,R=K*N,D=H*N,F=Y*X,V=Y*U,A=Y*N,M=$.x,z=$.y,_=$.z;return W[0]=(1-(O+D))*M,W[1]=(G+A)*M,W[2]=(q-V)*M,W[3]=0,W[4]=(G-A)*z,W[5]=(1-(E+D))*z,W[6]=(R+F)*z,W[7]=0,W[8]=(q+V)*_,W[9]=(R-F)*_,W[10]=(1-(E+O))*_,W[11]=0,W[12]=J.x,W[13]=J.y,W[14]=J.z,W[15]=1,this}decompose(J,Q,$){let W=this.elements;J.x=W[12],J.y=W[13],J.z=W[14];let Z=this.determinantAffine();if(Z===0)return $.set(1,1,1),Q.identity(),this;let K=g8.set(W[0],W[1],W[2]).length(),H=g8.set(W[4],W[5],W[6]).length(),Y=g8.set(W[8],W[9],W[10]).length();if(Z<0)K=-K;Y9.copy(this);let X=1/K,U=1/H,N=1/Y;return Y9.elements[0]*=X,Y9.elements[1]*=X,Y9.elements[2]*=X,Y9.elements[4]*=U,Y9.elements[5]*=U,Y9.elements[6]*=U,Y9.elements[8]*=N,Y9.elements[9]*=N,Y9.elements[10]*=N,Q.setFromRotationMatrix(Y9),$.x=K,$.y=H,$.z=Y,this}makePerspective(J,Q,$,W,Z,K,H=2000,Y=!1){let X=this.elements,U=2*Z/(Q-J),N=2*Z/($-W),E=(Q+J)/(Q-J),G=($+W)/($-W),q,O;if(Y)q=Z/(K-Z),O=K*Z/(K-Z);else if(H===2000)q=-(K+Z)/(K-Z),O=-2*K*Z/(K-Z);else if(H===2001)q=-K/(K-Z),O=-K*Z/(K-Z);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=E,X[12]=0,X[1]=0,X[5]=N,X[9]=G,X[13]=0,X[2]=0,X[6]=0,X[10]=q,X[14]=O,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,W,Z,K,H=2000,Y=!1){let X=this.elements,U=2/(Q-J),N=2/($-W),E=-(Q+J)/(Q-J),G=-($+W)/($-W),q,O;if(Y)q=1/(K-Z),O=K/(K-Z);else if(H===2000)q=-2/(K-Z),O=-(K+Z)/(K-Z);else if(H===2001)q=-1/(K-Z),O=-Z/(K-Z);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=E,X[1]=0,X[5]=N,X[9]=0,X[13]=G,X[2]=0,X[6]=0,X[10]=q,X[14]=O,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<16;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var g8=new P,Y9=new l0,zN=new P(0,0,0),AN=new P(1,1,1),n9=new P,R6=new P,rJ=new P,zK=new l0,AK=new xJ;class E9{constructor(J=0,Q=0,$=0,W=E9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=W}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,W=this._order){return this._x=J,this._y=Q,this._z=$,this._order=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let W=J.elements,Z=W[0],K=W[4],H=W[8],Y=W[1],X=W[5],U=W[9],N=W[2],E=W[6],G=W[10];switch(Q){case"XYZ":if(this._y=Math.asin(m0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-K,Z);else this._x=Math.atan2(E,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-m0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,G),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-N,Z),this._z=0;break;case"ZXY":if(this._x=Math.asin(m0(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-N,G),this._z=Math.atan2(-K,X);else this._y=0,this._z=Math.atan2(Y,Z);break;case"ZYX":if(this._y=Math.asin(-m0(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(E,G),this._z=Math.atan2(Y,Z);else this._x=0,this._z=Math.atan2(-K,X);break;case"YZX":if(this._z=Math.asin(m0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-N,Z);else this._x=0,this._y=Math.atan2(H,G);break;case"XZY":if(this._z=Math.asin(-m0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(E,X),this._y=Math.atan2(H,Z);else this._x=Math.atan2(-U,G),this._y=0;break;default:N0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return zK.makeRotationFromQuaternion(J),this.setFromRotationMatrix(zK,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return AK.setFromEuler(this),this.setFromQuaternion(AK,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}E9.DEFAULT_ORDER="XYZ";class t7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var CN=0,CK=new P,p8=new xJ,T9=new l0,M6=new P,I7=new P,wN=new P,_N=new xJ,wK=new P(1,0,0),_K=new P(0,1,0),PK=new P(0,0,1),TK={type:"added"},PN={type:"removed"},m8={type:"childadded",child:null},M$={type:"childremoved",child:null};class ZJ extends K9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:CN++}),this.uuid=eJ(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ZJ.DEFAULT_UP.clone();let J=new P,Q=new E9,$=new xJ,W=new P(1,1,1);function Z(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(Z),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:W},modelViewMatrix:{value:new l0},normalMatrix:{value:new d0}}),this.matrix=new l0,this.matrixWorld=new l0,this.matrixAutoUpdate=ZJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ZJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new t7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return p8.setFromAxisAngle(J,Q),this.quaternion.multiply(p8),this}rotateOnWorldAxis(J,Q){return p8.setFromAxisAngle(J,Q),this.quaternion.premultiply(p8),this}rotateX(J){return this.rotateOnAxis(wK,J)}rotateY(J){return this.rotateOnAxis(_K,J)}rotateZ(J){return this.rotateOnAxis(PK,J)}translateOnAxis(J,Q){return CK.copy(J).applyQuaternion(this.quaternion),this.position.add(CK.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(wK,J)}translateY(J){return this.translateOnAxis(_K,J)}translateZ(J){return this.translateOnAxis(PK,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(T9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)M6.copy(J);else M6.set(J,Q,$);let W=this.parent;if(this.updateWorldMatrix(!0,!1),I7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)T9.lookAt(I7,M6,this.up);else T9.lookAt(M6,I7,this.up);if(this.quaternion.setFromRotationMatrix(T9),W)T9.extractRotation(W.matrixWorld),p8.setFromRotationMatrix(T9),this.quaternion.premultiply(p8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return S0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(TK),m8.child=J,this.dispatchEvent(m8),m8.child=null;else S0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(PN),M$.child=J,this.dispatchEvent(M$),M$.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),T9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),T9.multiply(J.parent.matrixWorld);return J.applyMatrix4(T9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(TK),m8.child=J,this.dispatchEvent(m8),m8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,W=this.children.length;$<W;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let W=this.children;for(let Z=0,K=W.length;Z<K;Z++)W[Z].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(I7,J,wN),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(I7,_N,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:W}=J,Z=this.matrix.elements;Z[12]+=Q-Z[0]*Q-Z[4]*$-Z[8]*W,Z[13]+=$-Z[1]*Q-Z[5]*$-Z[9]*W,Z[14]+=W-Z[2]*Q-Z[6]*$-Z[10]*W}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let W=this.parent;if(J===!0&&W!==null)W.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let Z=this.children;for(let K=0,H=Z.length;K<H;K++)Z[K].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let W={};if(W.uuid=this.uuid,W.type=this.type,W.name=this.name,W.castShadow=this.castShadow,W.receiveShadow=this.receiveShadow,W.visible=this.visible,W.frustumCulled=this.frustumCulled,W.renderOrder=this.renderOrder,W.static=this.static,W.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)W.userData=this.userData;if(W.layers=this.layers.mask,W.matrix=this.matrix.toArray(),W.up=this.up.toArray(),this.pivot!==null)W.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)W.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)W.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(W.type="InstancedMesh",W.count=this.count,W.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)W.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(W.type="BatchedMesh",W.perObjectFrustumCulled=this.perObjectFrustumCulled,W.sortObjects=this.sortObjects,W.drawRanges=this._drawRanges,W.reservedRanges=this._reservedRanges,W.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),W.instanceInfo=this._instanceInfo.map((H)=>({...H})),W.availableInstanceIds=this._availableInstanceIds.slice(),W.availableGeometryIds=this._availableGeometryIds.slice(),W.nextIndexStart=this._nextIndexStart,W.nextVertexStart=this._nextVertexStart,W.geometryCount=this._geometryCount,W.maxInstanceCount=this._maxInstanceCount,W.maxVertexCount=this._maxVertexCount,W.maxIndexCount=this._maxIndexCount,W.geometryInitialized=this._geometryInitialized,W.matricesTexture=this._matricesTexture.toJSON(J),W.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)W.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)W.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)W.boundingBox=this.boundingBox.toJSON()}function Z(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)W.background=this.background.toJSON();else if(this.background.isTexture)W.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)W.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){W.geometry=Z(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let N=Y[X];Z(J.shapes,N)}else Z(J.shapes,Y)}}if(this.isSkinnedMesh){if(W.bindMode=this.bindMode,W.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Z(J.skeletons,this.skeleton),W.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(Z(J.materials,this.material[Y]));W.material=H}else W.material=Z(J.materials,this.material);if(this.children.length>0){W.children=[];for(let H=0;H<this.children.length;H++)W.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){W.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];W.animations.push(Z(J.animations,Y))}}if(Q){let H=K(J.geometries),Y=K(J.materials),X=K(J.textures),U=K(J.images),N=K(J.shapes),E=K(J.skeletons),G=K(J.animations),q=K(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(N.length>0)$.shapes=N;if(E.length>0)$.skeletons=E;if(G.length>0)$.animations=G;if(q.length>0)$.nodes=q}return $.object=W,$;function K(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let W=J.children[$];this.add(W.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ZJ.DEFAULT_UP=new P(0,1,0);ZJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;ZJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class M8 extends ZJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var TN={type:"move"};class e7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new M8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new M8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new M8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let W=null,Z=null,K=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=!0;for(let O of J.hand.values()){let R=Q.getJointPose(O,$),D=this._getHandJoint(X,O);if(R!==null)D.matrix.fromArray(R.transform.matrix),D.matrix.decompose(D.position,D.rotation,D.scale),D.matrixWorldNeedsUpdate=!0,D.jointRadius=R.radius;D.visible=R!==null}let U=X.joints["index-finger-tip"],N=X.joints["thumb-tip"],E=U.position.distanceTo(N.position),G=0.02,q=0.005;if(X.inputState.pinching&&E>G+q)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&E<=G-q)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(Z=Q.getPose(J.gripSpace,$),Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(W=Q.getPose(J.targetRaySpace,$),W===null&&Z!==null)W=Z;if(W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(TN)}}}if(H!==null)H.visible=W!==null;if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new M8;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var hY={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},s9={h:0,s:0,l:0},k6={h:0,s:0,l:0};function k$(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class B0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let W=J;if(W&&W.isColor)this.copy(W);else if(typeof W==="number")this.setHex(W);else if(typeof W==="string")this.setStyle(W)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,QJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,W=QJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,QJ.colorSpaceToWorking(this,W),this}setHSL(J,Q,$,W=QJ.workingColorSpace){if(J=JZ(J,1),Q=m0(Q,0,1),$=m0($,0,1),Q===0)this.r=this.g=this.b=$;else{let Z=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-Z;this.r=k$(K,Z,J+0.3333333333333333),this.g=k$(K,Z,J),this.b=k$(K,Z,J-0.3333333333333333)}return QJ.colorSpaceToWorking(this,W),this}setStyle(J,Q="srgb"){function $(Z){if(Z===void 0)return;if(parseFloat(Z)<1)N0("Color: Alpha component of "+J+" will be ignored.")}let W;if(W=/^(\w+)\(([^\)]*)\)/.exec(J)){let Z,K=W[1],H=W[2];switch(K){case"rgb":case"rgba":if(Z=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(255,parseInt(Z[1],10))/255,Math.min(255,parseInt(Z[2],10))/255,Math.min(255,parseInt(Z[3],10))/255,Q);if(Z=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(100,parseInt(Z[1],10))/100,Math.min(100,parseInt(Z[2],10))/100,Math.min(100,parseInt(Z[3],10))/100,Q);break;case"hsl":case"hsla":if(Z=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(Z[4]),this.setHSL(parseFloat(Z[1])/360,parseFloat(Z[2])/100,parseFloat(Z[3])/100,Q);break;default:N0("Color: Unknown color model "+J)}}else if(W=/^\#([A-Fa-f\d]+)$/.exec(J)){let Z=W[1],K=Z.length;if(K===3)return this.setRGB(parseInt(Z.charAt(0),16)/15,parseInt(Z.charAt(1),16)/15,parseInt(Z.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(Z,16),Q);else N0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=hY[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else N0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=x9(J.r),this.g=x9(J.g),this.b=x9(J.b),this}copyLinearToSRGB(J){return this.r=K7(J.r),this.g=K7(J.g),this.b=K7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return QJ.workingToColorSpace(hJ.copy(this),J),Math.round(m0(hJ.r*255,0,255))*65536+Math.round(m0(hJ.g*255,0,255))*256+Math.round(m0(hJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=QJ.workingColorSpace){QJ.workingToColorSpace(hJ.copy(this),Q);let{r:$,g:W,b:Z}=hJ,K=Math.max($,W,Z),H=Math.min($,W,Z),Y,X,U=(H+K)/2;if(H===K)Y=0,X=0;else{let N=K-H;switch(X=U<=0.5?N/(K+H):N/(2-K-H),K){case $:Y=(W-Z)/N+(W<Z?6:0);break;case W:Y=(Z-$)/N+2;break;case Z:Y=($-W)/N+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=QJ.workingColorSpace){return QJ.workingToColorSpace(hJ.copy(this),Q),J.r=hJ.r,J.g=hJ.g,J.b=hJ.b,J}getStyle(J="srgb"){QJ.workingToColorSpace(hJ.copy(this),J);let{r:Q,g:$,b:W}=hJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${W.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(W*255)})`}offsetHSL(J,Q,$){return this.getHSL(s9),this.setHSL(s9.h+J,s9.s+Q,s9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(s9),J.getHSL(k6);let $=b7(s9.h,k6.h,Q),W=b7(s9.s,k6.s,Q),Z=b7(s9.l,k6.l,Q);return this.setHSL($,W,Z),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,W=this.b,Z=J.elements;return this.r=Z[0]*Q+Z[3]*$+Z[6]*W,this.g=Z[1]*Q+Z[4]*$+Z[7]*W,this.b=Z[2]*Q+Z[5]*$+Z[8]*W,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var hJ=new B0;B0.NAMES=hY;class IQ{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new B0(J),this.density=Q}clone(){return new IQ(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zQ{constructor(J,Q=1,$=1000){this.isFog=!0,this.name="",this.color=new B0(J),this.near=Q,this.far=$}clone(){return new zQ(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $Z extends ZJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new E9,this.environmentIntensity=1,this.environmentRotation=new E9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var X9=new P,S9=new P,L$=new P,j9=new P,l8=new P,d8=new P,SK=new P,V$=new P,B$=new P,I$=new P,z$=new GJ,A$=new GJ,C$=new GJ;class iJ{constructor(J=new P,Q=new P,$=new P){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,W){W.subVectors($,Q),X9.subVectors(J,Q),W.cross(X9);let Z=W.lengthSq();if(Z>0)return W.multiplyScalar(1/Math.sqrt(Z));return W.set(0,0,0)}static getBarycoord(J,Q,$,W,Z){X9.subVectors(W,Q),S9.subVectors($,Q),L$.subVectors(J,Q);let K=X9.dot(X9),H=X9.dot(S9),Y=X9.dot(L$),X=S9.dot(S9),U=S9.dot(L$),N=K*X-H*H;if(N===0)return Z.set(0,0,0),null;let E=1/N,G=(X*Y-H*U)*E,q=(K*U-H*Y)*E;return Z.set(1-G-q,q,G)}static containsPoint(J,Q,$,W){if(this.getBarycoord(J,Q,$,W,j9)===null)return!1;return j9.x>=0&&j9.y>=0&&j9.x+j9.y<=1}static getInterpolation(J,Q,$,W,Z,K,H,Y){if(this.getBarycoord(J,Q,$,W,j9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(Z,j9.x),Y.addScaledVector(K,j9.y),Y.addScaledVector(H,j9.z),Y}static getInterpolatedAttribute(J,Q,$,W,Z,K){return z$.setScalar(0),A$.setScalar(0),C$.setScalar(0),z$.fromBufferAttribute(J,Q),A$.fromBufferAttribute(J,$),C$.fromBufferAttribute(J,W),K.setScalar(0),K.addScaledVector(z$,Z.x),K.addScaledVector(A$,Z.y),K.addScaledVector(C$,Z.z),K}static isFrontFacing(J,Q,$,W){return X9.subVectors($,Q),S9.subVectors(J,Q),X9.cross(S9).dot(W)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,W){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[W]),this}setFromAttributeAndIndices(J,Q,$,W){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,W),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return X9.subVectors(this.c,this.b),S9.subVectors(this.a,this.b),X9.cross(S9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return iJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return iJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,W,Z){return iJ.getInterpolation(J,this.a,this.b,this.c,Q,$,W,Z)}containsPoint(J){return iJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return iJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,W=this.b,Z=this.c,K,H;l8.subVectors(W,$),d8.subVectors(Z,$),V$.subVectors(J,$);let Y=l8.dot(V$),X=d8.dot(V$);if(Y<=0&&X<=0)return Q.copy($);B$.subVectors(J,W);let U=l8.dot(B$),N=d8.dot(B$);if(U>=0&&N<=U)return Q.copy(W);let E=Y*N-U*X;if(E<=0&&Y>=0&&U<=0)return K=Y/(Y-U),Q.copy($).addScaledVector(l8,K);I$.subVectors(J,Z);let G=l8.dot(I$),q=d8.dot(I$);if(q>=0&&G<=q)return Q.copy(Z);let O=G*X-Y*q;if(O<=0&&X>=0&&q<=0)return H=X/(X-q),Q.copy($).addScaledVector(d8,H);let R=U*q-G*N;if(R<=0&&N-U>=0&&G-q>=0)return SK.subVectors(Z,W),H=(N-U)/(N-U+(G-q)),Q.copy(W).addScaledVector(SK,H);let D=1/(R+O+E);return K=O*D,H=E*D,Q.copy($).addScaledVector(l8,K).addScaledVector(d8,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class yJ{constructor(J=new P(1/0,1/0,1/0),Q=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(U9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(U9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=U9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let Z=$.getAttribute("position");if(Q===!0&&Z!==void 0&&J.isInstancedMesh!==!0)for(let K=0,H=Z.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,U9);else U9.fromBufferAttribute(Z,K);U9.applyMatrix4(J.matrixWorld),this.expandByPoint(U9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();L6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();L6.copy($.boundingBox)}L6.applyMatrix4(J.matrixWorld),this.union(L6)}}let W=J.children;for(let Z=0,K=W.length;Z<K;Z++)this.expandByObject(W[Z],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,U9),U9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(z7),V6.subVectors(this.max,z7),u8.subVectors(J.a,z7),c8.subVectors(J.b,z7),n8.subVectors(J.c,z7),i9.subVectors(c8,u8),o9.subVectors(n8,c8),H8.subVectors(u8,n8);let Q=[0,-i9.z,i9.y,0,-o9.z,o9.y,0,-H8.z,H8.y,i9.z,0,-i9.x,o9.z,0,-o9.x,H8.z,0,-H8.x,-i9.y,i9.x,0,-o9.y,o9.x,0,-H8.y,H8.x,0];if(!w$(Q,u8,c8,n8,V6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!w$(Q,u8,c8,n8,V6))return!1;return B6.crossVectors(i9,o9),Q=[B6.x,B6.y,B6.z],w$(Q,u8,c8,n8,V6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,U9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(U9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return y9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),y9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),y9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),y9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),y9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),y9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),y9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),y9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(y9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var y9=[new P,new P,new P,new P,new P,new P,new P,new P],U9=new P,L6=new yJ,u8=new P,c8=new P,n8=new P,i9=new P,o9=new P,H8=new P,z7=new P,V6=new P,B6=new P,Y8=new P;function w$(J,Q,$,W,Z){for(let K=0,H=J.length-3;K<=H;K+=3){Y8.fromArray(J,K);let Y=Z.x*Math.abs(Y8.x)+Z.y*Math.abs(Y8.y)+Z.z*Math.abs(Y8.z),X=Q.dot(Y8),U=$.dot(Y8),N=W.dot(Y8);if(Math.max(-Math.max(X,U,N),Math.min(X,U,N))>Y)return!1}return!0}var h9=SN();function SN(){let J=new ArrayBuffer(4),Q=new Float32Array(J),$=new Uint32Array(J),W=new Uint32Array(512),Z=new Uint32Array(512);for(let X=0;X<256;++X){let U=X-127;if(U<-27)W[X]=0,W[X|256]=32768,Z[X]=24,Z[X|256]=24;else if(U<-14)W[X]=1024>>-U-14,W[X|256]=1024>>-U-14|32768,Z[X]=-U-1,Z[X|256]=-U-1;else if(U<=15)W[X]=U+15<<10,W[X|256]=U+15<<10|32768,Z[X]=13,Z[X|256]=13;else if(U<128)W[X]=31744,W[X|256]=64512,Z[X]=24,Z[X|256]=24;else W[X]=31744,W[X|256]=64512,Z[X]=13,Z[X|256]=13}let K=new Uint32Array(2048),H=new Uint32Array(64),Y=new Uint32Array(64);for(let X=1;X<1024;++X){let U=X<<13,N=0;while((U&8388608)===0)U<<=1,N-=8388608;U&=-8388609,N+=947912704,K[X]=U|N}for(let X=1024;X<2048;++X)K[X]=939524096+(X-1024<<13);for(let X=1;X<31;++X)H[X]=X<<23;H[31]=1199570944,H[32]=2147483648;for(let X=33;X<63;++X)H[X]=2147483648+(X-32<<23);H[63]=3347054592;for(let X=1;X<64;++X)if(X!==32)Y[X]=1024;return{floatView:Q,uint32View:$,baseTable:W,shiftTable:Z,mantissaTable:K,exponentTable:H,offsetTable:Y}}function sJ(J){if(Math.abs(J)>65504)N0("DataUtils.toHalfFloat(): Value out of range.");J=m0(J,-65504,65504),h9.floatView[0]=J;let Q=h9.uint32View[0],$=Q>>23&511;return h9.baseTable[$]+((Q&8388607)>>h9.shiftTable[$])}function f7(J){let Q=J>>10;return h9.uint32View[0]=h9.mantissaTable[h9.offsetTable[Q]+(J&1023)]+h9.exponentTable[Q],h9.floatView[0]}class bY{static toHalfFloat(J){return sJ(J)}static fromHalfFloat(J){return f7(J)}}var CJ=new P,I6=new e,jN=0;class qJ extends K9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jN++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let W=0,Z=this.itemSize;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)I6.fromBufferAttribute(this,Q),I6.applyMatrix3(J),this.setXY(Q,I6.x,I6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)CJ.fromBufferAttribute(this,Q),CJ.applyMatrix3(J),this.setXYZ(Q,CJ.x,CJ.y,CJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)CJ.fromBufferAttribute(this,Q),CJ.applyMatrix4(J),this.setXYZ(Q,CJ.x,CJ.y,CJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)CJ.fromBufferAttribute(this,Q),CJ.applyNormalMatrix(J),this.setXYZ(Q,CJ.x,CJ.y,CJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)CJ.fromBufferAttribute(this,Q),CJ.transformDirection(J),this.setXYZ(Q,CJ.x,CJ.y,CJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=dJ($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=i0($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=dJ(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=i0(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=dJ(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=i0(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=dJ(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=i0(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=dJ(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=i0(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=i0(Q,this.array),$=i0($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J*=this.itemSize,this.normalized)Q=i0(Q,this.array),$=i0($,this.array),W=i0(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J*=this.itemSize,this.normalized)Q=i0(Q,this.array),$=i0($,this.array),W=i0(W,this.array),Z=i0(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this.array[J+3]=Z,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class xY extends qJ{constructor(J,Q,$){super(new Int8Array(J),Q,$)}}class gY extends qJ{constructor(J,Q,$){super(new Uint8Array(J),Q,$)}}class pY extends qJ{constructor(J,Q,$){super(new Uint8ClampedArray(J),Q,$)}}class mY extends qJ{constructor(J,Q,$){super(new Int16Array(J),Q,$)}}class AQ extends qJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class lY extends qJ{constructor(J,Q,$){super(new Int32Array(J),Q,$)}}class CQ extends qJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class dY extends qJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$);this.isFloat16BufferAttribute=!0}getX(J){let Q=f7(this.array[J*this.itemSize]);if(this.normalized)Q=dJ(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=i0(Q,this.array);return this.array[J*this.itemSize]=sJ(Q),this}getY(J){let Q=f7(this.array[J*this.itemSize+1]);if(this.normalized)Q=dJ(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=i0(Q,this.array);return this.array[J*this.itemSize+1]=sJ(Q),this}getZ(J){let Q=f7(this.array[J*this.itemSize+2]);if(this.normalized)Q=dJ(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=i0(Q,this.array);return this.array[J*this.itemSize+2]=sJ(Q),this}getW(J){let Q=f7(this.array[J*this.itemSize+3]);if(this.normalized)Q=dJ(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=i0(Q,this.array);return this.array[J*this.itemSize+3]=sJ(Q),this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=i0(Q,this.array),$=i0($,this.array);return this.array[J+0]=sJ(Q),this.array[J+1]=sJ($),this}setXYZ(J,Q,$,W){if(J*=this.itemSize,this.normalized)Q=i0(Q,this.array),$=i0($,this.array),W=i0(W,this.array);return this.array[J+0]=sJ(Q),this.array[J+1]=sJ($),this.array[J+2]=sJ(W),this}setXYZW(J,Q,$,W,Z){if(J*=this.itemSize,this.normalized)Q=i0(Q,this.array),$=i0($,this.array),W=i0(W,this.array),Z=i0(Z,this.array);return this.array[J+0]=sJ(Q),this.array[J+1]=sJ($),this.array[J+2]=sJ(W),this.array[J+3]=sJ(Z),this}}class A0 extends qJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var yN=new yJ,A7=new P,_$=new P;class SJ{constructor(J=new P,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else yN.setFromPoints(J).getCenter($);let W=0;for(let Z=0,K=J.length;Z<K;Z++)W=Math.max(W,$.distanceToSquared(J[Z]));return this.radius=Math.sqrt(W),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;A7.subVectors(J,this.center);let Q=A7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),W=($-this.radius)*0.5;this.center.addScaledVector(A7,W/$),this.radius+=W}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else _$.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(A7.copy(J.center).add(_$)),this.expandByPoint(A7.copy(J.center).sub(_$));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var vN=0,Z9=new l0,P$=new ZJ,s8=new P,tJ=new yJ,C7=new yJ,PJ=new P;class c0 extends K9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vN++}),this.uuid=eJ(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((JN(J))?CQ:AQ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let Z=new d0().getNormalMatrix(J);$.applyNormalMatrix(Z),$.needsUpdate=!0}let W=this.attributes.tangent;if(W!==void 0)W.transformDirection(J),W.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return Z9.makeRotationFromQuaternion(J),this.applyMatrix4(Z9),this}rotateX(J){return Z9.makeRotationX(J),this.applyMatrix4(Z9),this}rotateY(J){return Z9.makeRotationY(J),this.applyMatrix4(Z9),this}rotateZ(J){return Z9.makeRotationZ(J),this.applyMatrix4(Z9),this}translate(J,Q,$){return Z9.makeTranslation(J,Q,$),this.applyMatrix4(Z9),this}scale(J,Q,$){return Z9.makeScale(J,Q,$),this.applyMatrix4(Z9),this}lookAt(J){return P$.lookAt(J),P$.updateMatrix(),this.applyMatrix4(P$.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(s8).negate(),this.translate(s8.x,s8.y,s8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let W=0,Z=J.length;W<Z;W++){let K=J[W];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new A0($,3))}else{let $=Math.min(J.length,Q.count);for(let W=0;W<$;W++){let Z=J[W];Q.setXYZ(W,Z.x,Z.y,Z.z||0)}if(J.length>Q.count)N0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new yJ;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){S0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(tJ.setFromBufferAttribute(Z),this.morphTargetsRelative)PJ.addVectors(this.boundingBox.min,tJ.min),this.boundingBox.expandByPoint(PJ),PJ.addVectors(this.boundingBox.max,tJ.max),this.boundingBox.expandByPoint(PJ);else this.boundingBox.expandByPoint(tJ.min),this.boundingBox.expandByPoint(tJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))S0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new SJ;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){S0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(J){let $=this.boundingSphere.center;if(tJ.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z];if(C7.setFromBufferAttribute(H),this.morphTargetsRelative)PJ.addVectors(tJ.min,C7.min),tJ.expandByPoint(PJ),PJ.addVectors(tJ.max,C7.max),tJ.expandByPoint(PJ);else tJ.expandByPoint(C7.min),tJ.expandByPoint(C7.max)}tJ.getCenter($);let W=0;for(let Z=0,K=J.count;Z<K;Z++)PJ.fromBufferAttribute(J,Z),W=Math.max(W,$.distanceToSquared(PJ));if(Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(PJ.fromBufferAttribute(H,X),Y)s8.fromBufferAttribute(J,X),PJ.add(s8);W=Math.max(W,$.distanceToSquared(PJ))}}if(this.boundingSphere.radius=Math.sqrt(W),isNaN(this.boundingSphere.radius))S0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){S0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:W,uv:Z}=Q,K=this.getAttribute("tangent");if(K===void 0||K.count!==$.count)K=new qJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",K);let H=[],Y=[];for(let w=0;w<$.count;w++)H[w]=new P,Y[w]=new P;let X=new P,U=new P,N=new P,E=new e,G=new e,q=new e,O=new P,R=new P;function D(w,k,I){X.fromBufferAttribute($,w),U.fromBufferAttribute($,k),N.fromBufferAttribute($,I),E.fromBufferAttribute(Z,w),G.fromBufferAttribute(Z,k),q.fromBufferAttribute(Z,I),U.sub(X),N.sub(X),G.sub(E),q.sub(E);let b=1/(G.x*q.y-q.x*G.y);if(!isFinite(b))return;O.copy(U).multiplyScalar(q.y).addScaledVector(N,-G.y).multiplyScalar(b),R.copy(N).multiplyScalar(G.x).addScaledVector(U,-q.x).multiplyScalar(b),H[w].add(O),H[k].add(O),H[I].add(O),Y[w].add(R),Y[k].add(R),Y[I].add(R)}let F=this.groups;if(F.length===0)F=[{start:0,count:J.count}];for(let w=0,k=F.length;w<k;++w){let I=F[w],b=I.start,j=I.count;for(let h=b,i=b+j;h<i;h+=3)D(J.getX(h+0),J.getX(h+1),J.getX(h+2))}let V=new P,A=new P,M=new P,z=new P;function _(w){M.fromBufferAttribute(W,w),z.copy(M);let k=H[w];V.copy(k),V.sub(M.multiplyScalar(M.dot(k))).normalize(),A.crossVectors(z,k);let b=A.dot(Y[w])<0?-1:1;K.setXYZW(w,V.x,V.y,V.z,b)}for(let w=0,k=F.length;w<k;++w){let I=F[w],b=I.start,j=I.count;for(let h=b,i=b+j;h<i;h+=3)_(J.getX(h+0)),_(J.getX(h+1)),_(J.getX(h+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new qJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let E=0,G=$.count;E<G;E++)$.setXYZ(E,0,0,0);let W=new P,Z=new P,K=new P,H=new P,Y=new P,X=new P,U=new P,N=new P;if(J)for(let E=0,G=J.count;E<G;E+=3){let q=J.getX(E+0),O=J.getX(E+1),R=J.getX(E+2);W.fromBufferAttribute(Q,q),Z.fromBufferAttribute(Q,O),K.fromBufferAttribute(Q,R),U.subVectors(K,Z),N.subVectors(W,Z),U.cross(N),H.fromBufferAttribute($,q),Y.fromBufferAttribute($,O),X.fromBufferAttribute($,R),H.add(U),Y.add(U),X.add(U),$.setXYZ(q,H.x,H.y,H.z),$.setXYZ(O,Y.x,Y.y,Y.z),$.setXYZ(R,X.x,X.y,X.z)}else for(let E=0,G=Q.count;E<G;E+=3)W.fromBufferAttribute(Q,E+0),Z.fromBufferAttribute(Q,E+1),K.fromBufferAttribute(Q,E+2),U.subVectors(K,Z),N.subVectors(W,Z),U.cross(N),$.setXYZ(E+0,U.x,U.y,U.z),$.setXYZ(E+1,U.x,U.y,U.z),$.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)PJ.fromBufferAttribute(J,Q),PJ.normalize(),J.setXYZ(Q,PJ.x,PJ.y,PJ.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:N}=H,E=new X.constructor(Y.length*U),G=0,q=0;for(let O=0,R=Y.length;O<R;O++){if(H.isInterleavedBufferAttribute)G=Y[O]*H.data.stride+H.offset;else G=Y[O]*U;for(let D=0;D<U;D++)E[q++]=X[G++]}return new qJ(E,U,N)}if(this.index===null)return N0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new c0,$=this.index.array,W=this.attributes;for(let H in W){let Y=W[H],X=J(Y,$);Q.setAttribute(H,X)}let Z=this.morphAttributes;for(let H in Z){let Y=[],X=Z[H];for(let U=0,N=X.length;U<N;U++){let E=X[U],G=J(E,$);Y.push(G)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let X=K[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let W={},Z=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let N=0,E=X.length;N<E;N++){let G=X[N];U.push(G.toJSON(J.data))}if(U.length>0)W[Y]=U,Z=!0}if(Z)J.data.morphAttributes=W,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let W=J.attributes;for(let X in W){let U=W[X];this.setAttribute(X,U.clone(Q))}let Z=J.morphAttributes;for(let X in Z){let U=[],N=Z[X];for(let E=0,G=N.length;E<G;E++)U.push(N[E].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let X=0,U=K.length;X<U;X++){let N=K[X];this.addGroup(N.start,N.count,N.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class J6{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=eJ()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let W=0,Z=this.stride;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=eJ();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=eJ();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var lJ=new P;class V8{constructor(J,Q,$,W=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=W}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)lJ.fromBufferAttribute(this,Q),lJ.applyMatrix4(J),this.setXYZ(Q,lJ.x,lJ.y,lJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)lJ.fromBufferAttribute(this,Q),lJ.applyNormalMatrix(J),this.setXYZ(Q,lJ.x,lJ.y,lJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)lJ.fromBufferAttribute(this,Q),lJ.transformDirection(J),this.setXYZ(Q,lJ.x,lJ.y,lJ.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=dJ($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=i0($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=i0(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=i0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=i0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=i0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=dJ(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=dJ(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=dJ(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=dJ(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=i0(Q,this.array),$=i0($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=i0(Q,this.array),$=i0($,this.array),W=i0(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=i0(Q,this.array),$=i0($,this.array),W=i0(W,this.array),Z=i0(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this.data.array[J+3]=Z,this}clone(J){if(J===void 0){m7("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return new qJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new V8(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){m7("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var T$=new P,fN=new P,hN=new d0;class k9{constructor(J=new P(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,W){return this.normal.set(J,Q,$),this.constant=W,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let W=T$.subVectors($,Q).cross(fN.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(W,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let W=J.delta(T$),Z=this.normal.dot(W);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/Z;if($===!0&&(K<0||K>1))return null;return Q.copy(J.start).addScaledVector(W,K)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||hN.getNormalMatrix(J),W=this.coplanarPoint(T$).applyMatrix4(J),Z=this.normal.applyMatrix3($).normalize();return this.constant=-W.dot(Z),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var bN=0;class jJ extends K9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:bN++}),this.uuid=eJ(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new B0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){N0(`Material: parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){N0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(W&&W.isColor)W.set($);else if(W&&W.isVector2&&($&&$.isVector2)||W&&W.isEuler&&($&&$.isEuler)||W&&W.isVector3&&($&&$.isVector3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((Z)=>Z.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function W(Z){let K=[];for(let H in Z){let Y=Z[H];delete Y.metadata,K.push(Y)}return K}if(Q){let Z=W(J.textures),K=W(J.images);if(Z.length>0)$.textures=Z;if(K.length>0)$.images=K}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new B0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new k9().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new e().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new e().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let W=Q.length;$=Array(W);for(let Z=0;Z!==W;++Z)$[Z]=Q[Z].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class wQ extends jJ{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new B0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var i8,w7=new P,o8=new P,a8=new P,r8=new e,_7=new e,uY=new l0,z6=new P,P7=new P,A6=new P,jK=new e,S$=new e,yK=new e;class WZ extends ZJ{constructor(J=new wQ){super();if(this.isSprite=!0,this.type="Sprite",i8===void 0){i8=new c0;let Q=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),$=new J6(Q,5);i8.setIndex([0,1,2,0,2,3]),i8.setAttribute("position",new V8($,3,0,!1)),i8.setAttribute("uv",new V8($,2,3,!1))}this.geometry=i8,this.material=J,this.center=new e(0.5,0.5),this.count=1}intersectsFrustum(J){return J.intersectsSprite(this)}raycast(J,Q){if(J.camera===null)S0('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(o8.setFromMatrixScale(this.matrixWorld),uY.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),a8.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)o8.multiplyScalar(-a8.z);let $=this.material.rotation,W,Z;if($!==0)Z=Math.cos($),W=Math.sin($);let K=this.center;C6(z6.set(-0.5,-0.5,0),a8,K,o8,W,Z),C6(P7.set(0.5,-0.5,0),a8,K,o8,W,Z),C6(A6.set(0.5,0.5,0),a8,K,o8,W,Z),jK.set(0,0),S$.set(1,0),yK.set(1,1);let H=J.ray.intersectTriangle(z6,P7,A6,!1,w7);if(H===null){if(C6(P7.set(-0.5,0.5,0),a8,K,o8,W,Z),S$.set(0,1),H=J.ray.intersectTriangle(z6,A6,P7,!1,w7),H===null)return}let Y=J.ray.origin.distanceTo(w7);if(Y<J.near||Y>J.far)return;Q.push({distance:Y,point:w7.clone(),uv:iJ.getInterpolation(w7,z6,P7,A6,jK,S$,yK,new e),face:null,object:this})}copy(J,Q){if(super.copy(J,Q),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}}function C6(J,Q,$,W,Z,K){if(r8.subVectors(J,$).addScalar(0.5).multiply(W),Z!==void 0)_7.x=K*r8.x-Z*r8.y,_7.y=Z*r8.x+K*r8.y;else _7.copy(r8);J.copy(Q),J.x+=_7.x,J.y+=_7.y,J.applyMatrix4(uY)}var w6=new P,vK=new P;class ZZ extends ZJ{constructor(){super();this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(J){super.copy(J,!1);let Q=J.levels;for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];this.addLevel(Z.object.clone(),Z.distance,Z.hysteresis)}return this.autoUpdate=J.autoUpdate,this}addLevel(J,Q=0,$=0){Q=Math.abs(Q);let W=this.levels,Z;for(Z=0;Z<W.length;Z++)if(Q<W[Z].distance)break;return W.splice(Z,0,{distance:Q,hysteresis:$,object:J}),this.add(J),this}removeLevel(J){let Q=this.levels;for(let $=0;$<Q.length;$++)if(Q[$].distance===J){let W=Q.splice($,1);return this.remove(W[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(J){let Q=this.levels;if(Q.length>0){let $,W;for($=1,W=Q.length;$<W;$++){let Z=Q[$].distance;if(Q[$].object.visible)Z-=Z*Q[$].hysteresis;if(J<Z)break}return Q[$-1].object}return null}raycast(J,Q){if(this.levels.length>0){w6.setFromMatrixPosition(this.matrixWorld);let W=J.ray.origin.distanceTo(w6);this.getObjectForDistance(W).raycast(J,Q)}}update(J){let Q=this.levels;if(Q.length>1){w6.setFromMatrixPosition(J.matrixWorld),vK.setFromMatrixPosition(this.matrixWorld);let $=w6.distanceTo(vK)/J.zoom;Q[0].object.visible=!0;let W,Z;for(W=1,Z=Q.length;W<Z;W++){let K=Q[W].distance;if(Q[W].object.visible)K-=K*Q[W].hysteresis;if($>=K)Q[W-1].object.visible=!1,Q[W].object.visible=!0;else break}this._currentLevel=W-1;for(;W<Z;W++)Q[W].object.visible=!1}}toJSON(J){let Q=super.toJSON(J);Q.object.autoUpdate=this.autoUpdate,Q.object.levels=[];let $=this.levels;for(let W=0,Z=$.length;W<Z;W++){let K=$[W];Q.object.levels.push({object:K.object.uuid,distance:K.distance,hysteresis:K.hysteresis})}return Q}}var v9=new P,j$=new P,_6=new P,P6=new P;class T8{constructor(J=new P,Q=new P(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,v9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=v9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return v9.copy(this.origin).addScaledVector(this.direction,Q),v9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,W){j$.copy(J).add(Q).multiplyScalar(0.5),_6.copy(Q).sub(J).normalize(),P6.copy(this.origin).sub(j$);let Z=J.distanceTo(Q)*0.5,K=-this.direction.dot(_6),H=P6.dot(this.direction),Y=-P6.dot(_6),X=P6.lengthSq(),U=Math.abs(1-K*K),N,E,G,q;if(U>0)if(N=K*Y-H,E=K*H-Y,q=Z*U,N>=0)if(E>=-q)if(E<=q){let O=1/U;N*=O,E*=O,G=N*(N+K*E+2*H)+E*(K*N+E+2*Y)+X}else E=Z,N=Math.max(0,-(K*E+H)),G=-N*N+E*(E+2*Y)+X;else E=-Z,N=Math.max(0,-(K*E+H)),G=-N*N+E*(E+2*Y)+X;else if(E<=-q)N=Math.max(0,-(-K*Z+H)),E=N>0?-Z:Math.min(Math.max(-Z,-Y),Z),G=-N*N+E*(E+2*Y)+X;else if(E<=q)N=0,E=Math.min(Math.max(-Z,-Y),Z),G=E*(E+2*Y)+X;else N=Math.max(0,-(K*Z+H)),E=N>0?Z:Math.min(Math.max(-Z,-Y),Z),G=-N*N+E*(E+2*Y)+X;else E=K>0?-Z:Z,N=Math.max(0,-(K*E+H)),G=-N*N+E*(E+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,N);if(W)W.copy(j$).addScaledVector(_6,E);return G}intersectSphere(J,Q){if(J.radius<0)return null;v9.subVectors(J.center,this.origin);let $=v9.dot(this.direction),W=v9.dot(v9)-$*$,Z=J.radius*J.radius;if(W>Z)return null;let K=Math.sqrt(Z-W),H=$-K,Y=$+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,W,Z,K,H,Y,X=1/this.direction.x,U=1/this.direction.y,N=1/this.direction.z,E=this.origin;if(X>=0)$=(J.min.x-E.x)*X,W=(J.max.x-E.x)*X;else $=(J.max.x-E.x)*X,W=(J.min.x-E.x)*X;if(U>=0)Z=(J.min.y-E.y)*U,K=(J.max.y-E.y)*U;else Z=(J.max.y-E.y)*U,K=(J.min.y-E.y)*U;if($>K||Z>W)return null;if(Z>$||isNaN($))$=Z;if(K<W||isNaN(W))W=K;if(N>=0)H=(J.min.z-E.z)*N,Y=(J.max.z-E.z)*N;else H=(J.max.z-E.z)*N,Y=(J.min.z-E.z)*N;if($>Y||H>W)return null;if(H>$||$!==$)$=H;if(Y<W||W!==W)W=Y;if(W<0)return null;return this.at($>=0?$:W,Q)}intersectsBox(J){return this.intersectBox(J,v9)!==null}intersectTriangle(J,Q,$,W,Z){let K=this.origin,H=this.direction,Y=H.x,X=H.y,U=H.z,N=J.x-K.x,E=J.y-K.y,G=J.z-K.z,q=Q.x-K.x,O=Q.y-K.y,R=Q.z-K.z,D=$.x-K.x,F=$.y-K.y,V=$.z-K.z,A=Math.abs(Y),M=Math.abs(X),z=Math.abs(U),_,w,k,I,b,j,h,i,S,p,o,m;if(A>=M&&A>=z)if(k=Y,j=N,S=q,m=D,Y>=0)_=X,w=U,I=E,b=G,h=O,i=R,p=F,o=V;else _=U,w=X,I=G,b=E,h=R,i=O,p=V,o=F;else if(M>=z)if(k=X,j=E,S=O,m=F,X>=0)_=U,w=Y,I=G,b=N,h=R,i=q,p=V,o=D;else _=Y,w=U,I=N,b=G,h=q,i=R,p=D,o=V;else if(k=U,j=G,S=R,m=V,U>=0)_=Y,w=X,I=N,b=E,h=q,i=O,p=D,o=F;else _=X,w=Y,I=E,b=N,h=O,i=q,p=F,o=D;if(k===0)return null;let K0=_/k,u=w/k,r=1/k,$0=I-K0*j,v0=b-u*j,f0=h-K0*S,XJ=i-u*S,o0=p-K0*m,n=o-u*m,Y0=o0*XJ-n*f0,Z0=$0*n-v0*o0,h0=f0*v0-XJ*$0;if(W){if(Y0<0||Z0<0||h0<0)return null}else if((Y0<0||Z0<0||h0<0)&&(Y0>0||Z0>0||h0>0))return null;let g0=Y0+Z0+h0;if(g0===0)return null;let w0=r*(Y0*j+Z0*S+h0*m);if(g0>0?w0<0:w0>0)return null;return this.at(w0/g0,Z)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class m9 extends jJ{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new B0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new E9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var fK=new l0,X8=new T8,T6=new SJ,hK=new P,S6=new P,j6=new P,y6=new P,y$=new P,v6=new P,bK=new P,f6=new P;class zJ extends ZJ{constructor(J=new c0,Q=new m9){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}getVertexPosition(J,Q){let $=this.geometry,W=$.attributes.position,Z=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(W,J);let H=this.morphTargetInfluences;if(Z&&H){v6.set(0,0,0);for(let Y=0,X=Z.length;Y<X;Y++){let U=H[Y],N=Z[Y];if(U===0)continue;if(y$.fromBufferAttribute(N,J),K)v6.addScaledVector(y$,U);else v6.addScaledVector(y$.sub(Q),U)}Q.add(v6)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.material,Z=this.matrixWorld;if(W===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(T6.copy($.boundingSphere),T6.applyMatrix4(Z),X8.copy(J.ray).recast(J.near),T6.containsPoint(X8.origin)===!1){if(X8.intersectSphere(T6,hK)===null)return;if(X8.origin.distanceToSquared(hK)>(J.far-J.near)**2)return}if(fK.copy(Z).invert(),X8.copy(J.ray).applyMatrix4(fK),$.boundingBox!==null){if(X8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,X8)}_computeIntersections(J,Q,$){let W,Z=this.geometry,K=this.material,H=Z.index,Y=Z.attributes.position,X=Z.attributes.uv,U=Z.attributes.uv1,N=Z.attributes.normal,E=Z.groups,G=Z.drawRange;if(H!==null)if(Array.isArray(K))for(let q=0,O=E.length;q<O;q++){let R=E[q],D=K[R.materialIndex],F=Math.max(R.start,G.start),V=Math.min(H.count,Math.min(R.start+R.count,G.start+G.count));for(let A=F,M=V;A<M;A+=3){let z=H.getX(A),_=H.getX(A+1),w=H.getX(A+2);if(W=h6(this,D,J,$,X,U,N,z,_,w),W)W.faceIndex=Math.floor(A/3),W.face.materialIndex=R.materialIndex,Q.push(W)}}else{let q=Math.max(0,G.start),O=Math.min(H.count,G.start+G.count);for(let R=q,D=O;R<D;R+=3){let F=H.getX(R),V=H.getX(R+1),A=H.getX(R+2);if(W=h6(this,K,J,$,X,U,N,F,V,A),W)W.faceIndex=Math.floor(R/3),Q.push(W)}}else if(Y!==void 0)if(Array.isArray(K))for(let q=0,O=E.length;q<O;q++){let R=E[q],D=K[R.materialIndex],F=Math.max(R.start,G.start),V=Math.min(Y.count,Math.min(R.start+R.count,G.start+G.count));for(let A=F,M=V;A<M;A+=3){let z=A,_=A+1,w=A+2;if(W=h6(this,D,J,$,X,U,N,z,_,w),W)W.faceIndex=Math.floor(A/3),W.face.materialIndex=R.materialIndex,Q.push(W)}}else{let q=Math.max(0,G.start),O=Math.min(Y.count,G.start+G.count);for(let R=q,D=O;R<D;R+=3){let F=R,V=R+1,A=R+2;if(W=h6(this,K,J,$,X,U,N,F,V,A),W)W.faceIndex=Math.floor(R/3),Q.push(W)}}}}function xN(J,Q,$,W,Z,K,H,Y){let X;if(Q.side===1)X=W.intersectTriangle(H,K,Z,!0,Y);else X=W.intersectTriangle(Z,K,H,Q.side===0,Y);if(X===null)return null;f6.copy(Y),f6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(f6);if(U<$.near||U>$.far)return null;return{distance:U,point:f6.clone(),object:J}}function h6(J,Q,$,W,Z,K,H,Y,X,U){J.getVertexPosition(Y,S6),J.getVertexPosition(X,j6),J.getVertexPosition(U,y6);let N=xN(J,Q,$,W,S6,j6,y6,bK);if(N){let E=new P;if(iJ.getBarycoord(bK,S6,j6,y6,E),Z)N.uv=iJ.getInterpolatedAttribute(Z,Y,X,U,E,new e);if(K)N.uv1=iJ.getInterpolatedAttribute(K,Y,X,U,E,new e);if(H){if(N.normal=iJ.getInterpolatedAttribute(H,Y,X,U,E,new P),N.normal.dot(W.direction)>0)N.normal.multiplyScalar(-1)}let G={a:Y,b:X,c:U,normal:new P,materialIndex:0};iJ.getNormal(S6,j6,y6,G.normal),N.face=G,N.barycoord=E}return N}var T7=new GJ,xK=new GJ,gK=new GJ,gN=new GJ,pK=new l0,b6=new P,v$=new SJ,mK=new l0,f$=new T8;class KZ extends zJ{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new l0,this.bindMatrixInverse=new l0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new yJ;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,b6),this.boundingBox.expandByPoint(b6)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new SJ;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,b6),this.boundingSphere.expandByPoint(b6)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,W=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(v$.copy(this.boundingSphere),v$.applyMatrix4(W),J.ray.intersectsSphere(v$)===!1)return;if(mK.copy(W).invert(),f$.copy(J.ray).applyMatrix4(mK),this.boundingBox!==null){if(f$.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,f$)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new GJ,Q=this.geometry.attributes.skinWeight;for(let $=0,W=Q.count;$<W;$++){J.fromBufferAttribute(Q,$);let Z=1/J.manhattanLength();if(Z!==1/0)J.multiplyScalar(Z);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else N0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,W=this.geometry;if(xK.fromBufferAttribute(W.attributes.skinIndex,J),gK.fromBufferAttribute(W.attributes.skinWeight,J),Q.isVector4)T7.copy(Q),Q.set(0,0,0,0);else T7.set(...Q,1),Q.set(0,0,0);T7.applyMatrix4(this.bindMatrix);for(let Z=0;Z<4;Z++){let K=gK.getComponent(Z);if(K!==0){let H=xK.getComponent(Z);pK.multiplyMatrices($.bones[H].matrixWorld,$.boneInverses[H]),Q.addScaledVector(gN.copy(T7).applyMatrix4(pK),K)}}if(Q.isVector4)Q.w=T7.w;return Q.applyMatrix4(this.bindMatrixInverse)}}class _Q extends ZJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class J9 extends LJ{constructor(J=null,Q=1,$=1,W,Z,K,H,Y,X=1003,U=1003,N,E){super(null,K,H,Y,X,U,W,Z,N,E);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var lK=new l0,pN=new l0;class PQ{constructor(J=[],Q=[]){this.uuid=eJ(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){N0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,W=this.bones.length;$<W;$++)this.boneInverses.push(new l0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new l0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,W=this.boneTexture;for(let Z=0,K=J.length;Z<K;Z++){let H=J[Z]?J[Z].matrixWorld:pN;lK.multiplyMatrices(H,Q[Z]),lK.toArray($,Z*16)}if(W!==null)W.needsUpdate=!0}clone(){return new PQ(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new J9(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let W=this.bones[Q];if(W.name===J)return W}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,W=J.bones.length;$<W;$++){let Z=J.bones[$],K=Q[Z];if(K===void 0)N0("Skeleton: No bone found with UUID:",Z),K=new _Q;this.bones.push(K),this.boneInverses.push(new l0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let W=0,Z=Q.length;W<Z;W++){let K=Q[W];J.bones.push(K.uuid);let H=$[W];J.boneInverses.push(H.toArray())}return J}}class B8 extends qJ{constructor(J,Q,$,W=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=W}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var t8=new l0,dK=new l0,x6=[],uK=new yJ,mN=new l0,S7=new zJ,j7=new SJ;class HZ extends zJ{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new B8(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let W=0;W<$;W++)this.setMatrixAt(W,mN)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new yJ;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,t8),uK.copy(J.boundingBox).applyMatrix4(t8),this.boundingBox.union(uK)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new SJ;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,t8),j7.copy(J.boundingSphere).applyMatrix4(t8),this.boundingSphere.union(j7)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,W=this.morphTexture.source.data.data,Z=$.length+1,K=J*Z+1;for(let H=0;H<$.length;H++)$[H]=W[K+H]}raycast(J,Q){let $=this.matrixWorld,W=this.count;if(S7.geometry=this.geometry,S7.material=this.material,S7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(j7.copy(this.boundingSphere),j7.applyMatrix4($),J.ray.intersectsSphere(j7)===!1)return;for(let Z=0;Z<W;Z++){this.getMatrixAt(Z,t8),dK.multiplyMatrices($,t8),S7.matrixWorld=dK,S7.raycast(J,x6);for(let K=0,H=x6.length;K<H;K++){let Y=x6[K];Y.instanceId=Z,Y.object=this,Q.push(Y)}x6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new B8(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,W=$.length+1;if(this.morphTexture===null)this.morphTexture=new J9(new Float32Array(W*this.count),W,this.count,1028,1015);let Z=this.morphTexture.source.data.data,K=0;for(let X=0;X<$.length;X++)K+=$[X];let H=this.geometry.morphTargetsRelative?1:1-K,Y=W*J;return Z[Y]=H,Z.set($,Y+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var U8=new SJ,lN=new e(0.5,0.5),g6=new P;class e9{constructor(J=new k9,Q=new k9,$=new k9,W=new k9,Z=new k9,K=new k9){this.planes=[J,Q,$,W,Z,K]}set(J,Q,$,W,Z,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(W),H[4].copy(Z),H[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let W=this.planes,Z=J.elements,K=Z[0],H=Z[1],Y=Z[2],X=Z[3],U=Z[4],N=Z[5],E=Z[6],G=Z[7],q=Z[8],O=Z[9],R=Z[10],D=Z[11],F=Z[12],V=Z[13],A=Z[14],M=Z[15];if(W[0].setComponents(X-K,G-U,D-q,M-F).normalize(),W[1].setComponents(X+K,G+U,D+q,M+F).normalize(),W[2].setComponents(X+H,G+N,D+O,M+V).normalize(),W[3].setComponents(X-H,G-N,D-O,M-V).normalize(),$)W[4].setComponents(Y,E,R,A).normalize(),W[5].setComponents(X-Y,G-E,D-R,M-A).normalize();else if(W[4].setComponents(X-Y,G-E,D-R,M-A).normalize(),Q===2000)W[5].setComponents(X+Y,G+E,D+R,M+A).normalize();else if(Q===2001)W[5].setComponents(Y,E,R,A).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();U8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();U8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(U8)}intersectsSprite(J){U8.center.set(0,0,0);let Q=lN.distanceTo(J.center);return U8.radius=0.7071067811865476+Q,U8.applyMatrix4(J.matrixWorld),this.intersectsSphere(U8)}intersectsSphere(J){let Q=this.planes,$=J.center,W=-J.radius;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint($)<W)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let W=Q[$];if(g6.x=W.normal.x>0?J.max.x:J.min.x,g6.y=W.normal.y>0?J.max.y:J.min.y,g6.z=W.normal.z>0?J.max.z:J.min.z,W.distanceToPoint(g6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var cK=new l0;class TQ{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(J){let Q=J.cameras,$=this._frustums;for(let W=0;W<Q.length;W++){let Z=Q[W];if(cK.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),$[W]===void 0)$[W]=new e9;$[W].setFromProjectionMatrix(cK,Z.coordinateSystem,Z.reversedDepth)}return this._count=Q.length,this}intersectsObject(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsObject(J))return!0;return!1}intersectsSprite(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsSprite(J))return!0;return!1}intersectsSphere(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsSphere(J))return!0;return!1}intersectsBox(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].intersectsBox(J))return!0;return!1}containsPoint(J){let Q=this._frustums;for(let $=0;$<this._count;$++)if(Q[$].containsPoint(J))return!0;return!1}copy(J){this.coordinateSystem=J.coordinateSystem;let Q=this._frustums,$=J._frustums;for(let W=0;W<J._count;W++){if(Q[W]===void 0)Q[W]=new e9;Q[W].copy($[W])}return this._count=J._count,this}clone(){return new TQ().copy(this)}}function h$(J,Q){return J-Q}function dN(J,Q){return J.z-Q.z}function uN(J,Q){return Q.z-J.z}class cY{constructor(){this.index=0,this.pool=[],this.list=[]}push(J,Q,$,W){let Z=this.pool,K=this.list;if(this.index>=Z.length)Z.push({start:-1,count:-1,z:-1,index:-1});let H=Z[this.index];K.push(H),this.index++,H.start=J,H.count=Q,H.z=$,H.index=W}reset(){this.list.length=0,this.index=0}}var nJ=new l0,cN=new B0(1,1,1),nN=new e9,sN=new TQ,p6=new yJ,G8=new SJ,y7=new P,nK=new P,iN=new P,b$=new cY,bJ=new zJ,m6=[];function oN(J,Q,$=0){let W=Q.itemSize;if(J.isInterleavedBufferAttribute||J.array.constructor!==Q.array.constructor){let Z=J.count;for(let K=0;K<Z;K++)for(let H=0;H<W;H++)Q.setComponent(K+$,H,J.getComponent(K,H))}else Q.array.set(J.array,$*W);Q.needsUpdate=!0}function N8(J,Q){if(J.constructor!==Q.constructor){let $=Math.min(J.length,Q.length);for(let W=0;W<$;W++)Q[W]=J[W]}else{let $=Math.min(J.length,Q.length);Q.set(new J.constructor(J.buffer,0,$))}}class YZ extends zJ{constructor(J,Q,$=Q*2,W){super(new c0,W);this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=J,this._maxVertexCount=Q,this._maxIndexCount=$,this._multiDrawCounts=new Int32Array(J),this._multiDrawStarts=new Int32Array(J),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let J=Math.sqrt(this._maxInstanceCount*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4),$=new J9(Q,J,J,1023,1015);this._matricesTexture=$}_initIndirectTexture(){let J=Math.sqrt(this._maxInstanceCount);J=Math.ceil(J);let Q=new Uint32Array(J*J),$=new J9(Q,J,J,1029,1014);this._indirectTexture=$}_initColorsTexture(){let J=Math.sqrt(this._maxInstanceCount);J=Math.ceil(J);let Q=new Float32Array(J*J*4).fill(1),$=new J9(Q,J,J,1023,1015);$.colorSpace=QJ.workingColorSpace,this._colorsTexture=$}_initializeGeometry(J){let Q=this.geometry,$=this._maxVertexCount,W=this._maxIndexCount;if(this._geometryInitialized===!1){for(let Z in J.attributes){let K=J.getAttribute(Z),{array:H,itemSize:Y,normalized:X}=K,U=new H.constructor($*Y),N=new qJ(U,Y,X);Q.setAttribute(Z,N)}if(J.getIndex()!==null){let Z=$>65535?new Uint32Array(W):new Uint16Array(W);Q.setIndex(new qJ(Z,1))}this._geometryInitialized=!0}}_validateGeometry(J){let Q=this.geometry;if(Boolean(J.getIndex())!==Boolean(Q.getIndex()))throw Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let $ in Q.attributes){if(!J.hasAttribute($))throw Error(`THREE.BatchedMesh: Added geometry missing "${$}". All geometries must have consistent attributes.`);let W=J.getAttribute($),Z=Q.getAttribute($);if(W.itemSize!==Z.itemSize||W.normalized!==Z.normalized)throw Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(J){let Q=this._instanceInfo;if(J<0||J>=Q.length||Q[J].active===!1)throw Error(`THREE.BatchedMesh: Invalid instanceId ${J}. Instance is either out of range or has been deleted.`)}validateGeometryId(J){let Q=this._geometryInfo;if(J<0||J>=Q.length||Q[J].active===!1)throw Error(`THREE.BatchedMesh: Invalid geometryId ${J}. Geometry is either out of range or has been deleted.`)}setCustomSort(J){return this.customSort=J,this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new yJ;let J=this.boundingBox,Q=this._instanceInfo;J.makeEmpty();for(let $=0,W=Q.length;$<W;$++){if(Q[$].active===!1)continue;let Z=Q[$].geometryIndex;this.getMatrixAt($,nJ),this.getBoundingBoxAt(Z,p6).applyMatrix4(nJ),J.union(p6)}}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new SJ;let J=this.boundingSphere,Q=this._instanceInfo;J.makeEmpty();for(let $=0,W=Q.length;$<W;$++){if(Q[$].active===!1)continue;let Z=Q[$].geometryIndex;this.getMatrixAt($,nJ),this.getBoundingSphereAt(Z,G8).applyMatrix4(nJ),J.union(G8)}}addInstance(J){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw Error("THREE.BatchedMesh: Maximum item count reached.");let $={visible:!0,active:!0,geometryIndex:J},W=null;if(this._availableInstanceIds.length>0)this._availableInstanceIds.sort(h$),W=this._availableInstanceIds.shift(),this._instanceInfo[W]=$;else W=this._instanceInfo.length,this._instanceInfo.push($);let Z=this._matricesTexture;nJ.identity().toArray(Z.image.data,W*16),Z.needsUpdate=!0;let K=this._colorsTexture;if(K)cN.toArray(K.image.data,W*4),K.needsUpdate=!0;return this._visibilityChanged=!0,W}addGeometry(J,Q=-1,$=-1){this._initializeGeometry(J),this._validateGeometry(J);let W={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},Z=this._geometryInfo;W.vertexStart=this._nextVertexStart,W.reservedVertexCount=Q===-1?J.getAttribute("position").count:Q;let K=J.getIndex();if(K!==null)W.indexStart=this._nextIndexStart,W.reservedIndexCount=$===-1?K.count:$;if(W.indexStart!==-1&&W.indexStart+W.reservedIndexCount>this._maxIndexCount||W.vertexStart+W.reservedVertexCount>this._maxVertexCount)throw Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let Y;if(this._availableGeometryIds.length>0)this._availableGeometryIds.sort(h$),Y=this._availableGeometryIds.shift(),Z[Y]=W;else Y=this._geometryCount,this._geometryCount++,Z.push(W);return this.setGeometryAt(Y,J),this._nextIndexStart=W.indexStart+W.reservedIndexCount,this._nextVertexStart=W.vertexStart+W.reservedVertexCount,Y}setGeometryAt(J,Q){if(J>=this._geometryCount)throw Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(Q);let $=this.geometry,W=$.getIndex()!==null,Z=$.getIndex(),K=Q.getIndex(),H=this._geometryInfo[J];if(W&&K.count>H.reservedIndexCount||Q.attributes.position.count>H.reservedVertexCount)throw Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let{vertexStart:Y,reservedVertexCount:X}=H;H.vertexCount=Q.getAttribute("position").count;for(let U in $.attributes){let N=Q.getAttribute(U),E=$.getAttribute(U);oN(N,E,Y);let G=N.itemSize;for(let q=N.count,O=X;q<O;q++){let R=Y+q;for(let D=0;D<G;D++)E.setComponent(R,D,0)}E.needsUpdate=!0,E.addUpdateRange(Y*G,X*G)}if(W){let{indexStart:U,reservedIndexCount:N}=H;H.indexCount=Q.getIndex().count;for(let E=0;E<K.count;E++)Z.setX(U+E,Y+K.getX(E));for(let E=K.count,G=N;E<G;E++)Z.setX(U+E,Y);Z.needsUpdate=!0,Z.addUpdateRange(U,H.reservedIndexCount)}if(H.start=W?H.indexStart:H.vertexStart,H.count=W?H.indexCount:H.vertexCount,H.boundingBox=null,Q.boundingBox!==null)H.boundingBox=Q.boundingBox.clone();if(H.boundingSphere=null,Q.boundingSphere!==null)H.boundingSphere=Q.boundingSphere.clone();return this._visibilityChanged=!0,J}deleteGeometry(J){let Q=this._geometryInfo;if(J>=Q.length||Q[J].active===!1)return this;let $=this._instanceInfo;for(let W=0,Z=$.length;W<Z;W++)if($[W].active&&$[W].geometryIndex===J)this.deleteInstance(W);return Q[J].active=!1,this._availableGeometryIds.push(J),this._visibilityChanged=!0,this}deleteInstance(J){return this.validateInstanceId(J),this._instanceInfo[J].active=!1,this._availableInstanceIds.push(J),this._visibilityChanged=!0,this}optimize(){let J=0,Q=0,$=this._geometryInfo,W=$.map((K,H)=>H).sort((K,H)=>{return $[K].vertexStart-$[H].vertexStart}),Z=this.geometry;for(let K=0,H=$.length;K<H;K++){let Y=W[K],X=$[Y];if(X.active===!1)continue;if(Z.index!==null){if(X.indexStart!==Q){let{indexStart:U,vertexStart:N,reservedIndexCount:E}=X,G=Z.index,q=G.array,O=J-N;for(let R=U;R<U+E;R++)q[R]=q[R]+O;G.array.copyWithin(Q,U,U+E),G.addUpdateRange(Q,E),G.needsUpdate=!0,X.indexStart=Q}Q+=X.reservedIndexCount}if(X.vertexStart!==J){let{vertexStart:U,reservedVertexCount:N}=X,E=Z.attributes;for(let G in E){let q=E[G],{array:O,itemSize:R}=q;O.copyWithin(J*R,U*R,(U+N)*R),q.addUpdateRange(J*R,N*R),q.needsUpdate=!0}X.vertexStart=J}J+=X.reservedVertexCount,X.start=Z.index?X.indexStart:X.vertexStart}return this._nextIndexStart=Q,this._nextVertexStart=J,this._visibilityChanged=!0,this}getBoundingBoxAt(J,Q){if(J>=this._geometryCount)return null;let $=this.geometry,W=this._geometryInfo[J];if(W.boundingBox===null){let Z=new yJ,K=$.index,H=$.attributes.position;for(let Y=W.start,X=W.start+W.count;Y<X;Y++){let U=Y;if(K)U=K.getX(U);Z.expandByPoint(y7.fromBufferAttribute(H,U))}W.boundingBox=Z}return Q.copy(W.boundingBox),Q}getBoundingSphereAt(J,Q){if(J>=this._geometryCount)return null;let $=this.geometry,W=this._geometryInfo[J];if(W.boundingSphere===null){let Z=new SJ;this.getBoundingBoxAt(J,p6),p6.getCenter(Z.center);let K=$.index,H=$.attributes.position,Y=0;for(let X=W.start,U=W.start+W.count;X<U;X++){let N=X;if(K)N=K.getX(N);y7.fromBufferAttribute(H,N),Y=Math.max(Y,Z.center.distanceToSquared(y7))}Z.radius=Math.sqrt(Y),W.boundingSphere=Z}return Q.copy(W.boundingSphere),Q}setMatrixAt(J,Q){this.validateInstanceId(J);let $=this._matricesTexture,W=this._matricesTexture.image.data;return Q.toArray(W,J*16),$.needsUpdate=!0,this}getMatrixAt(J,Q){return this.validateInstanceId(J),Q.fromArray(this._matricesTexture.image.data,J*16)}setColorAt(J,Q){if(this.validateInstanceId(J),this._colorsTexture===null)this._initColorsTexture();return Q.toArray(this._colorsTexture.image.data,J*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(J,Q){if(this.validateInstanceId(J),this._colorsTexture===null)if(Q.isVector4)return Q.set(1,1,1,1);else return Q.setRGB(1,1,1);else return Q.fromArray(this._colorsTexture.image.data,J*4)}setVisibleAt(J,Q){if(this.validateInstanceId(J),this._instanceInfo[J].visible===Q)return this;return this._instanceInfo[J].visible=Q,this._visibilityChanged=!0,this}getVisibleAt(J){return this.validateInstanceId(J),this._instanceInfo[J].visible}setGeometryIdAt(J,Q){return this.validateInstanceId(J),this.validateGeometryId(Q),this._instanceInfo[J].geometryIndex=Q,this._visibilityChanged=!0,this}getGeometryIdAt(J){return this.validateInstanceId(J),this._instanceInfo[J].geometryIndex}getGeometryRangeAt(J,Q={}){this.validateGeometryId(J);let $=this._geometryInfo[J];return Q.vertexStart=$.vertexStart,Q.vertexCount=$.vertexCount,Q.reservedVertexCount=$.reservedVertexCount,Q.indexStart=$.indexStart,Q.indexCount=$.indexCount,Q.reservedIndexCount=$.reservedIndexCount,Q.start=$.start,Q.count=$.count,Q}setInstanceCount(J){let Q=this._availableInstanceIds,$=this._instanceInfo;Q.sort(h$);while(Q[Q.length-1]===$.length-1)$.pop(),Q.pop();if(J<$.length)throw Error(`THREE.BatchedMesh: Instance ids outside the range ${J} are being used. Cannot shrink instance count.`);let W=new Int32Array(J),Z=new Int32Array(J);N8(this._multiDrawCounts,W),N8(this._multiDrawStarts,Z),this._multiDrawCounts=W,this._multiDrawStarts=Z,this._maxInstanceCount=J;let K=this._indirectTexture,H=this._matricesTexture,Y=this._colorsTexture;if(K.dispose(),this._initIndirectTexture(),N8(K.image.data,this._indirectTexture.image.data),H.dispose(),this._initMatricesTexture(),N8(H.image.data,this._matricesTexture.image.data),Y)Y.dispose(),this._initColorsTexture(),N8(Y.image.data,this._colorsTexture.image.data)}setGeometrySize(J,Q){let $=[...this._geometryInfo].filter((H)=>H.active);if(Math.max(...$.map((H)=>H.vertexStart+H.reservedVertexCount))>J)throw Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${Q}. Cannot shrink further.`);if(this.geometry.index){if(Math.max(...$.map((Y)=>Y.indexStart+Y.reservedIndexCount))>Q)throw Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${Q}. Cannot shrink further.`)}let Z=this.geometry;if(Z.dispose(),this._maxVertexCount=J,this._maxIndexCount=Q,this._geometryInitialized)this._geometryInitialized=!1,this.geometry=new c0,this._initializeGeometry(Z);let K=this.geometry;if(Z.index)N8(Z.index.array,K.index.array);for(let H in Z.attributes)N8(Z.attributes[H].array,K.attributes[H].array)}raycast(J,Q){let $=this._instanceInfo,W=this._geometryInfo,Z=this.matrixWorld,K=this.geometry;if(bJ.material=this.material,bJ.geometry.index=K.index,bJ.geometry.attributes=K.attributes,bJ.geometry.boundingBox===null)bJ.geometry.boundingBox=new yJ;if(bJ.geometry.boundingSphere===null)bJ.geometry.boundingSphere=new SJ;for(let H=0,Y=$.length;H<Y;H++){if(!$[H].visible||!$[H].active)continue;let X=$[H].geometryIndex,U=W[X];bJ.geometry.setDrawRange(U.start,U.count),this.getMatrixAt(H,bJ.matrixWorld).premultiply(Z),this.getBoundingBoxAt(X,bJ.geometry.boundingBox),this.getBoundingSphereAt(X,bJ.geometry.boundingSphere),bJ.raycast(J,m6);for(let N=0,E=m6.length;N<E;N++){let G=m6[N];G.object=this,G.batchId=H,Q.push(G)}m6.length=0}bJ.material=null,bJ.geometry.index=null,bJ.geometry.attributes={},bJ.geometry.setDrawRange(0,1/0)}copy(J){if(super.copy(J),this.geometry=J.geometry.clone(),this.perObjectFrustumCulled=J.perObjectFrustumCulled,this.sortObjects=J.sortObjects,this.boundingBox=J.boundingBox!==null?J.boundingBox.clone():null,this.boundingSphere=J.boundingSphere!==null?J.boundingSphere.clone():null,this._geometryInfo=J._geometryInfo.map((Q)=>({...Q,boundingBox:Q.boundingBox!==null?Q.boundingBox.clone():null,boundingSphere:Q.boundingSphere!==null?Q.boundingSphere.clone():null})),this._instanceInfo=J._instanceInfo.map((Q)=>({...Q})),this._availableInstanceIds=J._availableInstanceIds.slice(),this._availableGeometryIds=J._availableGeometryIds.slice(),this._nextIndexStart=J._nextIndexStart,this._nextVertexStart=J._nextVertexStart,this._geometryCount=J._geometryCount,this._maxInstanceCount=J._maxInstanceCount,this._maxVertexCount=J._maxVertexCount,this._maxIndexCount=J._maxIndexCount,this._geometryInitialized=J._geometryInitialized,this._multiDrawCounts=J._multiDrawCounts.slice(),this._multiDrawStarts=J._multiDrawStarts.slice(),this._multiDrawBytesPerElement=J._multiDrawBytesPerElement,this._indirectTexture=J._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=J._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null)this._colorsTexture=J._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice();return this}dispose(){if(super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null)this._colorsTexture.dispose(),this._colorsTexture=null}onBeforeRender(J,Q,$,W,Z){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let K=W.getIndex(),H=K===null?1:K.array.BYTES_PER_ELEMENT,Y=1;if(Z.wireframe)Y=2,H=W.attributes.position.count>65535?4:2;let X=this._instanceInfo,U=this._multiDrawStarts,N=this._multiDrawCounts,E=this._geometryInfo,G=this.perObjectFrustumCulled,q=this._indirectTexture,O=q.image.data,R=$.isArrayCamera?sN:nN;if(G)if($.isArrayCamera)R.setFromArrayCamera($);else nJ.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse).multiply(this.matrixWorld),R.setFromProjectionMatrix(nJ,$.coordinateSystem,$.reversedDepth);let D=0;if(this.sortObjects){nJ.copy(this.matrixWorld).invert(),y7.setFromMatrixPosition($.matrixWorld).applyMatrix4(nJ),nK.set(0,0,-1).transformDirection($.matrixWorld).transformDirection(nJ);for(let A=0,M=X.length;A<M;A++)if(X[A].visible&&X[A].active){let z=X[A].geometryIndex;this.getMatrixAt(A,nJ),this.getBoundingSphereAt(z,G8).applyMatrix4(nJ);let _=!1;if(G)_=!R.intersectsSphere(G8);if(!_){let w=E[z],k=iN.subVectors(G8.center,y7).dot(nK);b$.push(w.start,w.count,k,A)}}let F=b$.list,V=this.customSort;if(V===null)F.sort(Z.transparent?uN:dN);else V.call(this,F,$);for(let A=0,M=F.length;A<M;A++){let z=F[A];U[D]=z.start*H*Y,N[D]=z.count*Y,O[D]=z.index,D++}b$.reset()}else for(let F=0,V=X.length;F<V;F++)if(X[F].visible&&X[F].active){let A=X[F].geometryIndex,M=!1;if(G)this.getMatrixAt(F,nJ),this.getBoundingSphereAt(A,G8).applyMatrix4(nJ),M=!R.intersectsSphere(G8);if(!M){let z=E[A];U[D]=z.start*H*Y,N[D]=z.count*Y,O[D]=F,D++}}q.needsUpdate=!0,this._multiDrawCount=D,this._multiDrawBytesPerElement=H,this._visibilityChanged=!1}onBeforeShadow(J,Q,$,W,Z,K){this.onBeforeRender(J,null,W,Z,K)}}class gJ extends jJ{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new B0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var HQ=new P,YQ=new P,sK=new l0,v7=new T8,l6=new SJ,x$=new P,iK=new P;class g9 extends ZJ{constructor(J=new c0,Q=new gJ){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let W=1,Z=Q.count;W<Z;W++)HQ.fromBufferAttribute(Q,W-1),YQ.fromBufferAttribute(Q,W),$[W]=$[W-1],$[W]+=HQ.distanceTo(YQ);J.setAttribute("lineDistance",new A0($,1))}else N0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Line.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(l6.copy($.boundingSphere),l6.applyMatrix4(W),l6.radius+=Z,J.ray.intersectsSphere(l6)===!1)return;sK.copy(W).invert(),v7.copy(J.ray).applyMatrix4(sK);let H=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=this.isLineSegments?2:1,U=$.index,E=$.attributes.position;if(U!==null){let G=Math.max(0,K.start),q=Math.min(U.count,K.start+K.count);for(let O=G,R=q-1;O<R;O+=X){let D=U.getX(O),F=U.getX(O+1),V=d6(this,J,v7,Y,D,F,O);if(V)Q.push(V)}if(this.isLineLoop){let O=U.getX(q-1),R=U.getX(G),D=d6(this,J,v7,Y,O,R,q-1);if(D)Q.push(D)}}else{let G=Math.max(0,K.start),q=Math.min(E.count,K.start+K.count);for(let O=G,R=q-1;O<R;O+=X){let D=d6(this,J,v7,Y,O,O+1,O);if(D)Q.push(D)}if(this.isLineLoop){let O=d6(this,J,v7,Y,q-1,G,q-1);if(O)Q.push(O)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}}function d6(J,Q,$,W,Z,K,H){let Y=J.geometry.attributes.position;if(HQ.fromBufferAttribute(Y,Z),YQ.fromBufferAttribute(Y,K),$.distanceSqToSegment(HQ,YQ,x$,iK)>W)return;x$.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(x$);if(U<Q.near||U>Q.far)return;return{distance:U,point:iK.clone().applyMatrix4(J.matrixWorld),index:H,face:null,faceIndex:null,barycoord:null,object:J}}var oK=new P,aK=new P;class D9 extends g9{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let W=0,Z=Q.count;W<Z;W+=2)oK.fromBufferAttribute(Q,W),aK.fromBufferAttribute(Q,W+1),$[W]=W===0?0:$[W-1],$[W+1]=$[W]+oK.distanceTo(aK);J.setAttribute("lineDistance",new A0($,1))}else N0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class XZ extends g9{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class SQ extends jJ{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new B0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var rK=new l0,a$=new T8,u6=new SJ,c6=new P;class UZ extends ZJ{constructor(J=new c0,Q=new SQ){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Points.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(u6.copy($.boundingSphere),u6.applyMatrix4(W),u6.radius+=Z,J.ray.intersectsSphere(u6)===!1)return;rK.copy(W).invert(),a$.copy(J.ray).applyMatrix4(rK);let H=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=$.index,N=$.attributes.position;if(X!==null){let E=Math.max(0,K.start),G=Math.min(X.count,K.start+K.count);for(let q=E,O=G;q<O;q++){let R=X.getX(q);c6.fromBufferAttribute(N,R),tK(c6,R,Y,W,J,Q,this)}}else{let E=Math.max(0,K.start),G=Math.min(N.count,K.start+K.count);for(let q=E,O=G;q<O;q++)c6.fromBufferAttribute(N,q),tK(c6,q,Y,W,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}}function tK(J,Q,$,W,Z,K,H){let Y=a$.distanceSqToPoint(J);if(Y<$){let X=new P;a$.closestPointToPoint(J,X),X.applyMatrix4(W);let U=Z.ray.origin.distanceTo(X);if(U<Z.near||U>Z.far)return;K.push({distance:U,distanceToRay:Math.sqrt(Y),point:X,index:Q,face:null,faceIndex:null,barycoord:null,object:H})}}class GZ extends LJ{constructor(J,Q,$,W,Z=1006,K=1006,H,Y,X){super(J,Q,$,W,Z,K,H,Y,X);this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let U=this;function N(){U.needsUpdate=!0,U._requestVideoFrameCallbackId=J.requestVideoFrameCallback(N)}if("requestVideoFrameCallback"in J)this._requestVideoFrameCallbackId=J.requestVideoFrameCallback(N)}clone(){return new this.constructor(this.image).copy(this)}update(){let J=this.image;if("requestVideoFrameCallback"in J===!1&&J.readyState>=J.HAVE_CURRENT_DATA)this.needsUpdate=!0}dispose(){if(this._requestVideoFrameCallbackId!==0)this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0;super.dispose()}}class nY extends GZ{constructor(J,Q,$,W,Z,K,H,Y){super({},J,Q,$,W,Z,K,H,Y);this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(J){this.image=J,this.needsUpdate=!0}}class sY extends LJ{constructor(J,Q){super({width:J,height:Q});this.isFramebufferTexture=!0,this.magFilter=1003,this.minFilter=1003,this.generateMipmaps=!1,this.needsUpdate=!0}}class Q6 extends LJ{constructor(J,Q,$,W,Z,K,H,Y,X,U,N,E){super(null,K,H,Y,X,U,W,Z,N,E);this.isCompressedTexture=!0,this.image={width:Q,height:$},this.mipmaps=J,this.flipY=!1,this.generateMipmaps=!1}}class iY extends Q6{constructor(J,Q,$,W,Z,K){super(J,Q,$,Z,K);this.isCompressedArrayTexture=!0,this.image.depth=W,this.wrapR=1001,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class oY extends Q6{constructor(J,Q,$){super(void 0,J[0].width,J[0].height,Q,$,301);this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=J}}class O7 extends LJ{constructor(J=[],Q=301,$,W,Z,K,H,Y,X,U){super(J,Q,$,W,Z,K,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class aY extends LJ{constructor(J,Q,$,W,Z,K,H,Y,X){super(J,Q,$,W,Z,K,H,Y,X);this.isCanvasTexture=!0,this.needsUpdate=!0}}class rY extends LJ{constructor(J,Q,$,W,Z,K,H,Y,X){super(J,Q,$,W,Z,K,H,Y,X);this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let U=J?J.parentNode:null;if(U!==null&&"requestPaint"in U)U.onpaint=()=>{this.needsUpdate=!0},U.requestPaint()}dispose(){let J=this.image?this.image.parentNode:null;if(J!==null&&"onpaint"in J)J.onpaint=null;super.dispose()}}class S8 extends LJ{constructor(J,Q,$=1014,W,Z,K,H=1003,Y=1003,X,U=1026,N=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:Q,depth:N};super(E,W,Z,K,H,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new L9(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class NZ extends S8{constructor(J,Q=1014,$=301,W,Z,K=1003,H=1003,Y,X=1026){let U={width:J,height:J,depth:1},N=[U,U,U,U,U,U];super(J,J,Q,$,W,Z,K,H,Y,X);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class jQ extends LJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class j8 extends c0{constructor(J=1,Q=1,$=1,W=1,Z=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:W,heightSegments:Z,depthSegments:K};let H=this;W=Math.floor(W),Z=Math.floor(Z),K=Math.floor(K);let Y=[],X=[],U=[],N=[],E=0,G=0;q("z","y","x",-1,-1,$,Q,J,K,Z,0),q("z","y","x",1,-1,$,Q,-J,K,Z,1),q("x","z","y",1,1,J,$,Q,W,K,2),q("x","z","y",1,-1,J,$,-Q,W,K,3),q("x","y","z",1,-1,J,Q,$,W,Z,4),q("x","y","z",-1,-1,J,Q,-$,W,Z,5),this.setIndex(Y),this.setAttribute("position",new A0(X,3)),this.setAttribute("normal",new A0(U,3)),this.setAttribute("uv",new A0(N,2));function q(O,R,D,F,V,A,M,z,_,w,k){let I=A/_,b=M/w,j=A/2,h=M/2,i=z/2,S=_+1,p=w+1,o=0,m=0,K0=new P;for(let u=0;u<p;u++){let r=u*b-h;for(let $0=0;$0<S;$0++){let v0=$0*I-j;K0[O]=v0*F,K0[R]=r*V,K0[D]=i,X.push(K0.x,K0.y,K0.z),K0[O]=0,K0[R]=0,K0[D]=z>0?1:-1,U.push(K0.x,K0.y,K0.z),N.push($0/_),N.push(1-u/w),o+=1}}for(let u=0;u<w;u++)for(let r=0;r<_;r++){let $0=E+r+S*u,v0=E+r+S*(u+1),f0=E+(r+1)+S*(u+1),XJ=E+(r+1)+S*u;Y.push($0,v0,XJ),Y.push(v0,f0,XJ),m+=6}H.addGroup(G,m,k),G+=m,E+=o}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new j8(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class yQ extends c0{constructor(J=1,Q=1,$=4,W=8,Z=1){super();this.type="CapsuleGeometry",this.parameters={radius:J,height:Q,capSegments:$,radialSegments:W,heightSegments:Z},Q=Math.max(0,Q),$=Math.max(1,Math.floor($)),W=Math.max(3,Math.floor(W)),Z=Math.max(1,Math.floor(Z));let K=[],H=[],Y=[],X=[],U=Q/2,N=Math.PI/2*J,E=Q,G=2*N+E,q=$*2+Z,O=W+1,R=new P,D=new P;for(let F=0;F<=q;F++){let V=0,A=0,M=0,z=0;if(F<=$){let k=F/$,I=k*Math.PI/2;A=-U-J*Math.cos(I),M=J*Math.sin(I),z=-J*Math.cos(I),V=k*N}else if(F<=$+Z){let k=(F-$)/Z;A=-U+k*Q,M=J,z=0,V=N+k*E}else{let k=(F-$-Z)/$,I=k*Math.PI/2;A=U+J*Math.sin(I),M=J*Math.cos(I),z=J*Math.sin(I),V=N+E+k*N}let _=Math.max(0,Math.min(1,V/G)),w=0;if(F===0)w=0.5/W;else if(F===q)w=-0.5/W;for(let k=0;k<=W;k++){let I=k/W,b=I*Math.PI*2,j=Math.sin(b),h=Math.cos(b);D.x=-M*h,D.y=A,D.z=M*j,H.push(D.x,D.y,D.z),R.set(-M*h,z,M*j),R.normalize(),Y.push(R.x,R.y,R.z),X.push(I+w,_)}if(F>0){let k=(F-1)*O;for(let I=0;I<W;I++){let b=k+I,j=k+I+1,h=F*O+I,i=F*O+I+1;K.push(b,j,h),K.push(j,i,h)}}}this.setIndex(K),this.setAttribute("position",new A0(H,3)),this.setAttribute("normal",new A0(Y,3)),this.setAttribute("uv",new A0(X,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new yQ(J.radius,J.height,J.capSegments,J.radialSegments,J.heightSegments)}}class vQ extends c0{constructor(J=1,Q=32,$=0,W=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:W},Q=Math.max(3,Q);let Z=[],K=[],H=[],Y=[],X=new P,U=new e;K.push(0,0,0),H.push(0,0,1),Y.push(0.5,0.5);for(let N=0,E=3;N<=Q;N++,E+=3){let G=$+N/Q*W;X.x=J*Math.cos(G),X.y=J*Math.sin(G),K.push(X.x,X.y,X.z),H.push(0,0,1),U.x=(K[E]/J+1)/2,U.y=(K[E+1]/J+1)/2,Y.push(U.x,U.y)}for(let N=1;N<=Q;N++)Z.push(N,N+1,0);this.setIndex(Z),this.setAttribute("position",new A0(K,3)),this.setAttribute("normal",new A0(H,3)),this.setAttribute("uv",new A0(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new vQ(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class $6 extends c0{constructor(J=1,Q=1,$=1,W=32,Z=1,K=!1,H=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:W,heightSegments:Z,openEnded:K,thetaStart:H,thetaLength:Y};let X=this;W=Math.floor(W),Z=Math.floor(Z);let U=[],N=[],E=[],G=[],q=0,O=[],R=$/2,D=0;if(F(),K===!1){if(J>0)V(!0);if(Q>0)V(!1)}this.setIndex(U),this.setAttribute("position",new A0(N,3)),this.setAttribute("normal",new A0(E,3)),this.setAttribute("uv",new A0(G,2));function F(){let A=new P,M=new P,z=0,_=(Q-J)/$;for(let w=0;w<=Z;w++){let k=[],I=w/Z,b=I*(Q-J)+J;for(let j=0;j<=W;j++){let h=j/W,i=h*Y+H,S=Math.sin(i),p=Math.cos(i);M.x=b*S,M.y=-I*$+R,M.z=b*p,N.push(M.x,M.y,M.z),A.set(S,_,p).normalize(),E.push(A.x,A.y,A.z),G.push(h,1-I),k.push(q++)}O.push(k)}for(let w=0;w<W;w++)for(let k=0;k<Z;k++){let I=O[k][w],b=O[k+1][w],j=O[k+1][w+1],h=O[k][w+1];if(J>0||k!==0)U.push(I,b,h),z+=3;if(Q>0||k!==Z-1)U.push(b,j,h),z+=3}X.addGroup(D,z,0),D+=z}function V(A){let M=q,z=new e,_=new P,w=0,k=A===!0?J:Q,I=A===!0?1:-1;for(let j=1;j<=W;j++)N.push(0,R*I,0),E.push(0,I,0),G.push(0.5,0.5),q++;let b=q;for(let j=0;j<=W;j++){let i=j/W*Y+H,S=Math.cos(i),p=Math.sin(i);_.x=k*p,_.y=R*I,_.z=k*S,N.push(_.x,_.y,_.z),E.push(0,I,0),z.x=S*0.5+0.5,z.y=p*0.5*I+0.5,G.push(z.x,z.y),q++}for(let j=0;j<W;j++){let h=M+j,i=b+j;if(A===!0)U.push(i,i+1,h);else U.push(i+1,i,h);w+=3}X.addGroup(D,w,A===!0?1:2),D+=w}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new $6(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class W6 extends $6{constructor(J=1,Q=1,$=32,W=1,Z=!1,K=0,H=Math.PI*2){super(0,J,Q,$,W,Z,K,H);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:W,openEnded:Z,thetaStart:K,thetaLength:H}}static fromJSON(J){return new W6(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class $8 extends c0{constructor(J=[],Q=[],$=1,W=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:$,detail:W};let Z=[],K=[];if(H(W),X($),U(),this.setAttribute("position",new A0(Z,3)),this.setAttribute("normal",new A0(Z.slice(),3)),this.setAttribute("uv",new A0(K,2)),W===0)this.computeVertexNormals();else this.normalizeNormals();function H(F){let V=new P,A=new P,M=new P;for(let z=0;z<Q.length;z+=3)G(Q[z+0],V),G(Q[z+1],A),G(Q[z+2],M),Y(V,A,M,F)}function Y(F,V,A,M){let z=M+1,_=[];for(let w=0;w<=z;w++){_[w]=[];let k=F.clone().lerp(A,w/z),I=V.clone().lerp(A,w/z),b=z-w;for(let j=0;j<=b;j++)if(j===0&&w===z)_[w][j]=k;else _[w][j]=k.clone().lerp(I,j/b)}for(let w=0;w<z;w++)for(let k=0;k<2*(z-w)-1;k++){let I=Math.floor(k/2);if(k%2===0)E(_[w][I+1]),E(_[w+1][I]),E(_[w][I]);else E(_[w][I+1]),E(_[w+1][I+1]),E(_[w+1][I])}}function X(F){let V=new P;for(let A=0;A<Z.length;A+=3)V.x=Z[A+0],V.y=Z[A+1],V.z=Z[A+2],V.normalize().multiplyScalar(F),Z[A+0]=V.x,Z[A+1]=V.y,Z[A+2]=V.z}function U(){let F=new P;for(let V=0;V<Z.length;V+=3){F.x=Z[V+0],F.y=Z[V+1],F.z=Z[V+2];let A=R(F)/2/Math.PI+0.5,M=D(F)/Math.PI+0.5;K.push(A,1-M)}q(),N()}function N(){for(let F=0;F<K.length;F+=6){let V=K[F+0],A=K[F+2],M=K[F+4],z=Math.max(V,A,M),_=Math.min(V,A,M);if(z>0.9&&_<0.1){if(V<0.2)K[F+0]+=1;if(A<0.2)K[F+2]+=1;if(M<0.2)K[F+4]+=1}}}function E(F){Z.push(F.x,F.y,F.z)}function G(F,V){let A=F*3;V.x=J[A+0],V.y=J[A+1],V.z=J[A+2]}function q(){let F=new P,V=new P,A=new P,M=new P,z=new e,_=new e,w=new e;for(let k=0,I=0;k<Z.length;k+=9,I+=6){F.set(Z[k+0],Z[k+1],Z[k+2]),V.set(Z[k+3],Z[k+4],Z[k+5]),A.set(Z[k+6],Z[k+7],Z[k+8]),z.set(K[I+0],K[I+1]),_.set(K[I+2],K[I+3]),w.set(K[I+4],K[I+5]),M.copy(F).add(V).add(A).divideScalar(3);let b=R(M);O(z,I+0,F,b),O(_,I+2,V,b),O(w,I+4,A,b)}}function O(F,V,A,M){if(M<0&&F.x===1)K[V]=F.x-1;if(A.x===0&&A.z===0)K[V]=M/2/Math.PI+0.5}function R(F){return Math.atan2(F.z,-F.x)}function D(F){return Math.atan2(-F.y,Math.sqrt(F.x*F.x+F.z*F.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new $8(J.vertices,J.indices,J.radius,J.detail)}}class fQ extends $8{constructor(J=1,Q=0){let $=(1+Math.sqrt(5))/2,W=1/$,Z=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-W,-$,0,-W,$,0,W,-$,0,W,$,-W,-$,0,-W,$,0,W,-$,0,W,$,0,-$,0,-W,$,0,-W,-$,0,W,$,0,W],K=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(Z,K,J,Q);this.type="DodecahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new fQ(J.radius,J.detail)}}var n6=new P,s6=new P,g$=new P,i6=new iJ;class EZ extends c0{constructor(J=null,Q=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:J,thresholdAngle:Q},J!==null){let W=Math.pow(10,4),Z=Math.cos(k8*Q),K=J.getIndex(),H=J.getAttribute("position"),Y=K?K.count:H.count,X=[0,0,0],U=["a","b","c"],N=[,,,],E={},G=[];for(let q=0;q<Y;q+=3){if(K)X[0]=K.getX(q),X[1]=K.getX(q+1),X[2]=K.getX(q+2);else X[0]=q,X[1]=q+1,X[2]=q+2;let{a:O,b:R,c:D}=i6;if(O.fromBufferAttribute(H,X[0]),R.fromBufferAttribute(H,X[1]),D.fromBufferAttribute(H,X[2]),i6.getNormal(g$),N[0]=`${Math.round(O.x*W)},${Math.round(O.y*W)},${Math.round(O.z*W)}`,N[1]=`${Math.round(R.x*W)},${Math.round(R.y*W)},${Math.round(R.z*W)}`,N[2]=`${Math.round(D.x*W)},${Math.round(D.y*W)},${Math.round(D.z*W)}`,N[0]===N[1]||N[1]===N[2]||N[2]===N[0])continue;for(let F=0;F<3;F++){let V=(F+1)%3,A=N[F],M=N[V],z=i6[U[F]],_=i6[U[V]],w=`${A}_${M}`,k=`${M}_${A}`;if(k in E&&E[k]){if(g$.dot(E[k].normal)<=Z)G.push(z.x,z.y,z.z),G.push(_.x,_.y,_.z);E[k]=null}else if(!(w in E))E[w]={index0:X[F],index1:X[V],normal:g$.clone()}}}for(let q in E)if(E[q]){let{index0:O,index1:R}=E[q];n6.fromBufferAttribute(H,O),s6.fromBufferAttribute(H,R),G.push(n6.x,n6.y,n6.z),G.push(s6.x,s6.y,s6.z)}this.setAttribute("position",new A0(G,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}class H9{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){N0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,W=this.getPoint(0),Z=0;Q.push(0);for(let K=1;K<=J;K++)$=this.getPoint(K/J),Z+=$.distanceTo(W),Q.push(Z),W=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),W=0,Z=$.length,K;if(Q)K=Q;else K=J*$[Z-1];let H=0,Y=Z-1,X;while(H<=Y)if(W=Math.floor(H+(Y-H)/2),X=$[W]-K,X<0)H=W+1;else if(X>0)Y=W-1;else{Y=W;break}if(W=Y,$[W]===K)return W/(Z-1);let U=$[W],E=$[W+1]-U,G=(K-U)/E;return(W+G)/(Z-1)}getTangent(J,Q){let W=J-0.0001,Z=J+0.0001;if(W<0)W=0;if(Z>1)Z=1;let K=this.getPoint(W),H=this.getPoint(Z),Y=Q||(K.isVector2?new e:new P);return Y.copy(H).sub(K).normalize(),Y}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new P,W=[],Z=[],K=[],H=new P,Y=new l0;for(let G=0;G<=J;G++){let q=G/J;W[G]=this.getTangentAt(q,new P)}Z[0]=new P,K[0]=new P;let X=Number.MAX_VALUE,U=Math.abs(W[0].x),N=Math.abs(W[0].y),E=Math.abs(W[0].z);if(U<=X)X=U,$.set(1,0,0);if(N<=X)X=N,$.set(0,1,0);if(E<=X)$.set(0,0,1);H.crossVectors(W[0],$).normalize(),Z[0].crossVectors(W[0],H),K[0].crossVectors(W[0],Z[0]);for(let G=1;G<=J;G++){if(Z[G]=Z[G-1].clone(),K[G]=K[G-1].clone(),H.crossVectors(W[G-1],W[G]),H.length()>Number.EPSILON){H.normalize();let q=Math.acos(m0(W[G-1].dot(W[G]),-1,1));Z[G].applyMatrix4(Y.makeRotationAxis(H,q))}K[G].crossVectors(W[G],Z[G])}if(Q===!0){let G=Math.acos(m0(Z[0].dot(Z[J]),-1,1));if(G/=J,W[0].dot(H.crossVectors(Z[0],Z[J]))>0)G=-G;for(let q=1;q<=J;q++)Z[q].applyMatrix4(Y.makeRotationAxis(W[q],G*q)),K[q].crossVectors(W[q],Z[q])}return{tangents:W,normals:Z,binormals:K}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class Z6 extends H9{constructor(J=0,Q=0,$=1,W=1,Z=0,K=Math.PI*2,H=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=W,this.aStartAngle=Z,this.aEndAngle=K,this.aClockwise=H,this.aRotation=Y}getPoint(J,Q=new e){let $=Q,W=Math.PI*2,Z=this.aEndAngle-this.aStartAngle,K=Math.abs(Z)<Number.EPSILON;while(Z<0)Z+=W;while(Z>W)Z-=W;if(Z<Number.EPSILON)if(K)Z=0;else Z=W;if(this.aClockwise===!0&&!K)if(Z===W)Z=-W;else Z=Z-W;let H=this.aStartAngle+J*Z,Y=this.aX+this.xRadius*Math.cos(H),X=this.aY+this.yRadius*Math.sin(H);if(this.aRotation!==0){let U=Math.cos(this.aRotation),N=Math.sin(this.aRotation),E=Y-this.aX,G=X-this.aY;Y=E*U-G*N+this.aX,X=E*N+G*U+this.aY}return $.set(Y,X)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class qZ extends Z6{constructor(J,Q,$,W,Z,K){super(J,Q,$,$,W,Z,K);this.isArcCurve=!0,this.type="ArcCurve"}}function FZ(){let J=0,Q=0,$=0,W=0;function Z(K,H,Y,X){J=K,Q=Y,$=-3*K+3*H-2*Y-X,W=2*K-2*H+Y+X}return{initCatmullRom:function(K,H,Y,X,U){Z(H,Y,U*(Y-K),U*(X-H))},initNonuniformCatmullRom:function(K,H,Y,X,U,N,E){let G=(H-K)/U-(Y-K)/(U+N)+(Y-H)/N,q=(Y-H)/N-(X-H)/(N+E)+(X-Y)/E;G*=N,q*=N,Z(H,Y,G,q)},calc:function(K){let H=K*K,Y=H*K;return J+Q*K+$*H+W*Y}}}var eK=new P,JH=new P,p$=new FZ,m$=new FZ,l$=new FZ;class DZ extends H9{constructor(J=[],Q=!1,$="centripetal",W=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=W}getPoint(J,Q=new P){let $=Q,W=this.points,Z=W.length,K=(Z-(this.closed?0:1))*J,H=Math.floor(K),Y=K-H;if(this.closed)H+=H>0?0:(Math.floor(Math.abs(H)/Z)+1)*Z;else if(Y===0&&H===Z-1)H=Z-2,Y=1;let X,U;if(this.closed||H>0)X=W[(H-1)%Z];else JH.subVectors(W[0],W[1]).add(W[0]),X=JH;let N=W[H%Z],E=W[(H+1)%Z];if(this.closed||H+2<Z)U=W[(H+2)%Z];else eK.subVectors(W[Z-1],W[Z-2]).add(W[Z-1]),U=eK;if(this.curveType==="centripetal"||this.curveType==="chordal"){let G=this.curveType==="chordal"?0.5:0.25,q=Math.pow(X.distanceToSquared(N),G),O=Math.pow(N.distanceToSquared(E),G),R=Math.pow(E.distanceToSquared(U),G);if(O<0.0001)O=1;if(q<0.0001)q=O;if(R<0.0001)R=O;p$.initNonuniformCatmullRom(X.x,N.x,E.x,U.x,q,O,R),m$.initNonuniformCatmullRom(X.y,N.y,E.y,U.y,q,O,R),l$.initNonuniformCatmullRom(X.z,N.z,E.z,U.z,q,O,R)}else if(this.curveType==="catmullrom")p$.initCatmullRom(X.x,N.x,E.x,U.x,this.tension),m$.initCatmullRom(X.y,N.y,E.y,U.y,this.tension),l$.initCatmullRom(X.z,N.z,E.z,U.z,this.tension);return $.set(p$.calc(Y),m$.calc(Y),l$.calc(Y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(W.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let W=this.points[Q];J.points.push(W.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(new P().fromArray(W))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function QH(J,Q,$,W,Z){let K=(W-Q)*0.5,H=(Z-$)*0.5,Y=J*J,X=J*Y;return(2*$-2*W+K+H)*X+(-3*$+3*W-2*K-H)*Y+K*J+$}function aN(J,Q){let $=1-J;return $*$*Q}function rN(J,Q){return 2*(1-J)*J*Q}function tN(J,Q){return J*J*Q}function x7(J,Q,$,W){return aN(J,Q)+rN(J,$)+tN(J,W)}function eN(J,Q){let $=1-J;return $*$*$*Q}function J5(J,Q){let $=1-J;return 3*$*$*J*Q}function Q5(J,Q){return 3*(1-J)*J*J*Q}function $5(J,Q){return J*J*J*Q}function g7(J,Q,$,W,Z){return eN(J,Q)+J5(J,$)+Q5(J,W)+$5(J,Z)}class hQ extends H9{constructor(J=new e,Q=new e,$=new e,W=new e){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=W}getPoint(J,Q=new e){let $=Q,W=this.v0,Z=this.v1,K=this.v2,H=this.v3;return $.set(g7(J,W.x,Z.x,K.x,H.x),g7(J,W.y,Z.y,K.y,H.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class OZ extends H9{constructor(J=new P,Q=new P,$=new P,W=new P){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=W}getPoint(J,Q=new P){let $=Q,W=this.v0,Z=this.v1,K=this.v2,H=this.v3;return $.set(g7(J,W.x,Z.x,K.x,H.x),g7(J,W.y,Z.y,K.y,H.y),g7(J,W.z,Z.z,K.z,H.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class bQ extends H9{constructor(J=new e,Q=new e){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new e){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new e){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class RZ extends H9{constructor(J=new P,Q=new P){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new P){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new P){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class xQ extends H9{constructor(J=new e,Q=new e,$=new e){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new e){let $=Q,W=this.v0,Z=this.v1,K=this.v2;return $.set(x7(J,W.x,Z.x,K.x),x7(J,W.y,Z.y,K.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class gQ extends H9{constructor(J=new P,Q=new P,$=new P){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new P){let $=Q,W=this.v0,Z=this.v1,K=this.v2;return $.set(x7(J,W.x,Z.x,K.x),x7(J,W.y,Z.y,K.y),x7(J,W.z,Z.z,K.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class pQ extends H9{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new e){let $=Q,W=this.points,Z=(W.length-1)*J,K=Math.floor(Z),H=Z-K,Y=W[K===0?K:K-1],X=W[K],U=W[K>W.length-2?W.length-1:K+1],N=W[K>W.length-3?W.length-1:K+2];return $.set(QH(H,Y.x,X.x,U.x,N.x),QH(H,Y.y,X.y,U.y,N.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(W.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let W=this.points[Q];J.points.push(W.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(new e().fromArray(W))}return this}}var XQ=Object.freeze({__proto__:null,ArcCurve:qZ,CatmullRomCurve3:DZ,CubicBezierCurve:hQ,CubicBezierCurve3:OZ,EllipseCurve:Z6,LineCurve:bQ,LineCurve3:RZ,QuadraticBezierCurve:xQ,QuadraticBezierCurve3:gQ,SplineCurve:pQ});class MZ extends H9{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new XQ[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),W=this.getCurveLengths(),Z=0;while(Z<W.length){if(W[Z]>=$){let K=W[Z]-$,H=this.curves[Z],Y=H.getLength(),X=Y===0?0:1-K/Y;return H.getPointAt(X,Q)}Z++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,W=this.curves.length;$<W;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let W=0,Z=this.curves;W<Z.length;W++){let K=Z[W],H=K.isEllipseCurve?J*2:K.isLineCurve||K.isLineCurve3?1:K.isSplineCurve?J*K.points.length:J,Y=K.getPoints(H);for(let X=0;X<Y.length;X++){let U=Y[X];if($&&$.equals(U))continue;Q.push(U),$=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let W=J.curves[Q];this.curves.push(W.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let W=this.curves[Q];J.curves.push(W.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let W=J.curves[Q];this.curves.push(new XQ[W.type]().fromJSON(W))}return this}}class Y7 extends MZ{constructor(J){super();if(this.type="Path",this.currentPoint=new e,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new bQ(this.currentPoint.clone(),new e(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,W){let Z=new xQ(this.currentPoint.clone(),new e(J,Q),new e($,W));return this.curves.push(Z),this.currentPoint.set($,W),this}bezierCurveTo(J,Q,$,W,Z,K){let H=new hQ(this.currentPoint.clone(),new e(J,Q),new e($,W),new e(Z,K));return this.curves.push(H),this.currentPoint.set(Z,K),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new pQ(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,W,Z,K){let H=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+H,Q+Y,$,W,Z,K),this}absarc(J,Q,$,W,Z,K){return this.absellipse(J,Q,$,$,W,Z,K),this}ellipse(J,Q,$,W,Z,K,H,Y){let X=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+X,Q+U,$,W,Z,K,H,Y),this}absellipse(J,Q,$,W,Z,K,H,Y){let X=new Z6(J,Q,$,W,Z,K,H,Y);if(this.curves.length>0){let N=X.getPoint(0);if(!N.equals(this.currentPoint))this.lineTo(N.x,N.y)}this.curves.push(X);let U=X.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class R7 extends Y7{constructor(J){super(J);this.uuid=eJ(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,W=this.holes.length;$<W;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let W=J.holes[Q];this.holes.push(W.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let W=this.holes[Q];J.holes.push(W.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let W=J.holes[Q];this.holes.push(new Y7().fromJSON(W))}return this}}function W5(J,Q,$=2){let W=Q&&Q.length,Z=W?Q[0]*$:J.length,K=tY(J,0,Z,$,!0),H=[];if(!K||K.next===K.prev)return H;let Y,X,U;if(W)K=X5(J,Q,K,$);if(J.length>80*$){Y=J[0],X=J[1];let N=Y,E=X;for(let G=$;G<Z;G+=$){let q=J[G],O=J[G+1];if(q<Y)Y=q;if(O<X)X=O;if(q>N)N=q;if(O>E)E=O}U=Math.max(N-Y,E-X),U=U!==0?32767/U:0}return l7(K,H,$,Y,X,U,0),H}function tY(J,Q,$,W,Z){let K;if(Z===k5(J,Q,$,W)>0)for(let H=Q;H<$;H+=W)K=$H(H/W|0,J[H],J[H+1],K);else for(let H=$-W;H>=Q;H-=W)K=$H(H/W|0,J[H],J[H+1],K);if(K&&X7(K,K.next))u7(K),K=K.next;return K}function I8(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,W;do if(W=!1,!$.steiner&&(X7($,$.next)||kJ($.prev,$,$.next)===0)){if(u7($),$=Q=$.prev,$===$.next)break;W=!0}else $=$.next;while(W||$!==Q);return Q}function l7(J,Q,$,W,Z,K,H){if(!J)return;if(!H&&K)q5(J,W,Z,K);let Y=J;while(J.prev!==J.next){let{prev:X,next:U}=J;if(K?K5(J,W,Z,K):Z5(J)){Q.push(X.i,J.i,U.i),u7(J),J=U.next,Y=U.next;continue}if(J=U,J===Y){if(!H)l7(I8(J),Q,$,W,Z,K,1);else if(H===1)J=H5(I8(J),Q),l7(J,Q,$,W,Z,K,2);else if(H===2)Y5(J,Q,$,W,Z,K);break}}}function Z5(J){let Q=J.prev,$=J,W=J.next;if(kJ(Q,$,W)>=0)return!1;let Z=Q.x,K=$.x,H=W.x,Y=Q.y,X=$.y,U=W.y,N=Math.min(Z,K,H),E=Math.min(Y,X,U),G=Math.max(Z,K,H),q=Math.max(Y,X,U),O=W.next;while(O!==Q){if(O.x>=N&&O.x<=G&&O.y>=E&&O.y<=q&&h7(Z,Y,K,X,H,U,O.x,O.y)&&kJ(O.prev,O,O.next)>=0)return!1;O=O.next}return!0}function K5(J,Q,$,W){let Z=J.prev,K=J,H=J.next;if(kJ(Z,K,H)>=0)return!1;let Y=Z.x,X=K.x,U=H.x,N=Z.y,E=K.y,G=H.y,q=Math.min(Y,X,U),O=Math.min(N,E,G),R=Math.max(Y,X,U),D=Math.max(N,E,G),F=r$(q,O,Q,$,W),V=r$(R,D,Q,$,W),A=J.prevZ,M=J.nextZ;while(A&&A.z>=F&&M&&M.z<=V){if(A.x>=q&&A.x<=R&&A.y>=O&&A.y<=D&&A!==Z&&A!==H&&h7(Y,N,X,E,U,G,A.x,A.y)&&kJ(A.prev,A,A.next)>=0)return!1;if(A=A.prevZ,M.x>=q&&M.x<=R&&M.y>=O&&M.y<=D&&M!==Z&&M!==H&&h7(Y,N,X,E,U,G,M.x,M.y)&&kJ(M.prev,M,M.next)>=0)return!1;M=M.nextZ}while(A&&A.z>=F){if(A.x>=q&&A.x<=R&&A.y>=O&&A.y<=D&&A!==Z&&A!==H&&h7(Y,N,X,E,U,G,A.x,A.y)&&kJ(A.prev,A,A.next)>=0)return!1;A=A.prevZ}while(M&&M.z<=V){if(M.x>=q&&M.x<=R&&M.y>=O&&M.y<=D&&M!==Z&&M!==H&&h7(Y,N,X,E,U,G,M.x,M.y)&&kJ(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function H5(J,Q){let $=J;do{let W=$.prev,Z=$.next.next;if(!X7(W,Z)&&JX(W,$,$.next,Z)&&d7(W,Z)&&d7(Z,W))Q.push(W.i,$.i,Z.i),u7($),u7($.next),$=J=Z;$=$.next}while($!==J);return I8($)}function Y5(J,Q,$,W,Z,K){let H=J;do{let Y=H.next.next;while(Y!==H.prev){if(H.i!==Y.i&&O5(H,Y)){let X=QX(H,Y);H=I8(H,H.next),X=I8(X,X.next),l7(H,Q,$,W,Z,K,0),l7(X,Q,$,W,Z,K,0);return}Y=Y.next}H=H.next}while(H!==J)}function X5(J,Q,$,W){let Z=[];for(let K=0,H=Q.length;K<H;K++){let Y=Q[K]*W,X=K<H-1?Q[K+1]*W:J.length,U=tY(J,Y,X,W,!1);if(U===U.next)U.steiner=!0;Z.push(D5(U))}Z.sort(U5);for(let K=0;K<Z.length;K++)$=G5(Z[K],$);return $}function U5(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let W=(J.next.y-J.y)/(J.next.x-J.x),Z=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=W-Z}}return $}function G5(J,Q){let $=N5(J,Q);if(!$)return Q;let W=QX($,J);return I8(W,W.next),I8($,$.next)}function N5(J,Q){let $=Q,W=J.x,Z=J.y,K=-1/0,H;if(X7(J,$))return $;do{if(X7(J,$.next))return $.next;else if(Z<=$.y&&Z>=$.next.y&&$.next.y!==$.y){let E=$.x+(Z-$.y)*($.next.x-$.x)/($.next.y-$.y);if(E<=W&&E>K){if(K=E,H=$.x<$.next.x?$:$.next,E===W)return H}}$=$.next}while($!==Q);if(!H)return null;let Y=H,X=H.x,U=H.y,N=1/0;$=H;do{if(W>=$.x&&$.x>=X&&W!==$.x&&eY(Z<U?W:K,Z,X,U,Z<U?K:W,Z,$.x,$.y)){let E=Math.abs(Z-$.y)/(W-$.x);if(d7($,J)&&(E<N||E===N&&($.x>H.x||$.x===H.x&&E5(H,$))))H=$,N=E}$=$.next}while($!==Y);return H}function E5(J,Q){return kJ(J.prev,J,Q.prev)<0&&kJ(Q.next,J,J.next)<0}function q5(J,Q,$,W){let Z=J;do{if(Z.z===0)Z.z=r$(Z.x,Z.y,Q,$,W);Z.prevZ=Z.prev,Z.nextZ=Z.next,Z=Z.next}while(Z!==J);Z.prevZ.nextZ=null,Z.prevZ=null,F5(Z)}function F5(J){let Q,$=1;do{let W=J,Z;J=null;let K=null;Q=0;while(W){Q++;let H=W,Y=0;for(let U=0;U<$;U++)if(Y++,H=H.nextZ,!H)break;let X=$;while(Y>0||X>0&&H){if(Y!==0&&(X===0||!H||W.z<=H.z))Z=W,W=W.nextZ,Y--;else Z=H,H=H.nextZ,X--;if(K)K.nextZ=Z;else J=Z;Z.prevZ=K,K=Z}W=H}K.nextZ=null,$*=2}while(Q>1);return J}function r$(J,Q,$,W,Z){return J=(J-$)*Z|0,Q=(Q-W)*Z|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function D5(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function eY(J,Q,$,W,Z,K,H,Y){return(Z-H)*(Q-Y)>=(J-H)*(K-Y)&&(J-H)*(W-Y)>=($-H)*(Q-Y)&&($-H)*(K-Y)>=(Z-H)*(W-Y)}function h7(J,Q,$,W,Z,K,H,Y){return!(J===H&&Q===Y)&&eY(J,Q,$,W,Z,K,H,Y)}function O5(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!R5(J,Q)&&(d7(J,Q)&&d7(Q,J)&&M5(J,Q)&&(kJ(J.prev,J,Q.prev)||kJ(J,Q.prev,Q))||X7(J,Q)&&kJ(J.prev,J,J.next)>0&&kJ(Q.prev,Q,Q.next)>0)}function kJ(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function X7(J,Q){return J.x===Q.x&&J.y===Q.y}function JX(J,Q,$,W){let Z=a6(kJ(J,Q,$)),K=a6(kJ(J,Q,W)),H=a6(kJ($,W,J)),Y=a6(kJ($,W,Q));if(Z!==K&&H!==Y)return!0;if(Z===0&&o6(J,$,Q))return!0;if(K===0&&o6(J,W,Q))return!0;if(H===0&&o6($,J,W))return!0;if(Y===0&&o6($,Q,W))return!0;return!1}function o6(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function a6(J){return J>0?1:J<0?-1:0}function R5(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&JX($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function d7(J,Q){return kJ(J.prev,J,J.next)<0?kJ(J,Q,J.next)>=0&&kJ(J,J.prev,Q)>=0:kJ(J,Q,J.prev)<0||kJ(J,J.next,Q)<0}function M5(J,Q){let $=J,W=!1,Z=(J.x+Q.x)/2,K=(J.y+Q.y)/2;do{if($.y>K!==$.next.y>K&&$.next.y!==$.y&&Z<($.next.x-$.x)*(K-$.y)/($.next.y-$.y)+$.x)W=!W;$=$.next}while($!==J);return W}function QX(J,Q){let $=t$(J.i,J.x,J.y),W=t$(Q.i,Q.x,Q.y),Z=J.next,K=Q.prev;return J.next=Q,Q.prev=J,$.next=Z,Z.prev=$,W.next=$,$.prev=W,K.next=W,W.prev=K,W}function $H(J,Q,$,W){let Z=t$(J,Q,$);if(!W)Z.prev=Z,Z.next=Z;else Z.next=W.next,Z.prev=W,W.next.prev=Z,W.next=Z;return Z}function u7(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function t$(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function k5(J,Q,$,W){let Z=0;for(let K=Q,H=$-W;K<$;K+=W)Z+=(J[H]-J[K])*(J[K+1]+J[H+1]),H=K;return Z}class $X{static triangulate(J,Q,$=2){return W5(J,Q,$)}}class N9{static area(J){let Q=J.length,$=0;for(let W=Q-1,Z=0;Z<Q;W=Z++)$+=J[W].x*J[Z].y-J[Z].x*J[W].y;return $*0.5}static isClockWise(J){return N9.area(J)<0}static triangulateShape(J,Q){let $=[],W=[],Z=[];WH(J),ZH($,J);let K=J.length;Q.forEach(WH);for(let Y=0;Y<Q.length;Y++)W.push(K),K+=Q[Y].length,ZH($,Q[Y]);let H=$X.triangulate($,W);for(let Y=0;Y<H.length;Y+=3)Z.push(H.slice(Y,Y+3));return Z}}function WH(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function ZH(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class mQ extends c0{constructor(J=new R7([new e(0.5,0.5),new e(-0.5,0.5),new e(-0.5,-0.5),new e(0.5,-0.5)]),Q={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:J,options:Q},J=Array.isArray(J)?J:[J];let $=this,W=[],Z=[];for(let H=0,Y=J.length;H<Y;H++){let X=J[H];K(X)}this.setAttribute("position",new A0(W,3)),this.setAttribute("uv",new A0(Z,2)),this.computeVertexNormals();function K(H){let Y=[],X=Q.curveSegments!==void 0?Q.curveSegments:12,U=Q.steps!==void 0?Q.steps:1,N=Q.depth!==void 0?Q.depth:1,E=Q.bevelEnabled!==void 0?Q.bevelEnabled:!0,G=Q.bevelThickness!==void 0?Q.bevelThickness:0.2,q=Q.bevelSize!==void 0?Q.bevelSize:G-0.1,O=Q.bevelOffset!==void 0?Q.bevelOffset:0,R=Q.bevelSegments!==void 0?Q.bevelSegments:3,D=Q.extrudePath,F=Q.UVGenerator!==void 0?Q.UVGenerator:L5,V,A=!1,M,z,_,w;if(D){V=D.getSpacedPoints(U),A=!0,E=!1;let t=D.isCatmullRomCurve3?D.closed:!1;M=D.computeFrenetFrames(U,t),z=new P,_=new P,w=new P}if(!E)R=0,G=0,q=0,O=0;let k=H.extractPoints(X),I=k.shape,b=k.holes;if(!N9.isClockWise(I)){I=I.reverse();for(let t=0,W0=b.length;t<W0;t++){let H0=b[t];if(N9.isClockWise(H0))b[t]=H0.reverse()}}function h(t){let X0=t[0];for(let k0=1;k0<=t.length;k0++){let j0=k0%t.length,b0=t[j0],u0=b0.x-X0.x,n0=b0.y-X0.y,T=u0*u0+n0*n0,NJ=Math.max(Math.abs(b0.x),Math.abs(b0.y),Math.abs(X0.x),Math.abs(X0.y)),t0=0.000000000000000000010000000000000001*NJ*NJ;if(T<=t0){t.splice(j0,1),k0--;continue}X0=b0}}h(I),b.forEach(h);let i=b.length,S=I;for(let t=0;t<i;t++){let W0=b[t];I=I.concat(W0)}function p(t,W0,H0){if(!W0)S0("ExtrudeGeometry: vec does not exist");return t.clone().addScaledVector(W0,H0)}let o=I.length;function m(t,W0,H0){let X0,k0,j0,b0=t.x-W0.x,u0=t.y-W0.y,n0=H0.x-t.x,T=H0.y-t.y,NJ=b0*b0+u0*u0,t0=b0*T-u0*n0;if(Math.abs(t0)>Number.EPSILON){let e0=Math.sqrt(NJ),C=Math.sqrt(n0*n0+T*T),L=W0.x-u0/e0,y=W0.y+b0/e0,l=H0.x-T/C,J0=H0.y+n0/C,U0=((l-L)*T-(J0-y)*n0)/(b0*T-u0*n0);X0=L+b0*U0-t.x,k0=y+u0*U0-t.y;let E0=X0*X0+k0*k0;if(E0<=2)return new e(X0,k0);else j0=Math.sqrt(E0/2)}else{let e0=!1;if(b0>Number.EPSILON){if(n0>Number.EPSILON)e0=!0}else if(b0<-Number.EPSILON){if(n0<-Number.EPSILON)e0=!0}else if(Math.sign(u0)===Math.sign(T))e0=!0;if(e0)X0=-u0,k0=b0,j0=Math.sqrt(NJ);else X0=b0,k0=u0,j0=Math.sqrt(NJ/2)}return new e(X0/j0,k0/j0)}let K0=[];for(let t=0,W0=S.length,H0=W0-1,X0=t+1;t<W0;t++,H0++,X0++){if(H0===W0)H0=0;if(X0===W0)X0=0;K0[t]=m(S[t],S[H0],S[X0])}let u=[],r,$0=K0.concat();for(let t=0,W0=i;t<W0;t++){let H0=b[t];r=[];for(let X0=0,k0=H0.length,j0=k0-1,b0=X0+1;X0<k0;X0++,j0++,b0++){if(j0===k0)j0=0;if(b0===k0)b0=0;r[X0]=m(H0[X0],H0[j0],H0[b0])}u.push(r),$0=$0.concat(r)}let v0;if(R===0)v0=N9.triangulateShape(S,b);else{let t=[],W0=[];for(let H0=0;H0<R;H0++){let X0=H0/R,k0=G*Math.cos(X0*Math.PI/2),j0=q*Math.sin(X0*Math.PI/2)+O;for(let b0=0,u0=S.length;b0<u0;b0++){let n0=p(S[b0],K0[b0],j0);if(Z0(n0.x,n0.y,-k0),X0===0)t.push(n0)}for(let b0=0,u0=i;b0<u0;b0++){let n0=b[b0];r=u[b0];let T=[];for(let NJ=0,t0=n0.length;NJ<t0;NJ++){let e0=p(n0[NJ],r[NJ],j0);if(Z0(e0.x,e0.y,-k0),X0===0)T.push(e0)}if(X0===0)W0.push(T)}}v0=N9.triangulateShape(t,W0)}let f0=v0.length,XJ=q+O;for(let t=0;t<o;t++){let W0=E?p(I[t],$0[t],XJ):I[t];if(!A)Z0(W0.x,W0.y,0);else _.copy(M.normals[0]).multiplyScalar(W0.x),z.copy(M.binormals[0]).multiplyScalar(W0.y),w.copy(V[0]).add(_).add(z),Z0(w.x,w.y,w.z)}for(let t=1;t<=U;t++)for(let W0=0;W0<o;W0++){let H0=E?p(I[W0],$0[W0],XJ):I[W0];if(!A)Z0(H0.x,H0.y,N/U*t);else _.copy(M.normals[t]).multiplyScalar(H0.x),z.copy(M.binormals[t]).multiplyScalar(H0.y),w.copy(V[t]).add(_).add(z),Z0(w.x,w.y,w.z)}for(let t=R-1;t>=0;t--){let W0=t/R,H0=G*Math.cos(W0*Math.PI/2),X0=q*Math.sin(W0*Math.PI/2)+O;for(let k0=0,j0=S.length;k0<j0;k0++){let b0=p(S[k0],K0[k0],X0);Z0(b0.x,b0.y,N+H0)}for(let k0=0,j0=b.length;k0<j0;k0++){let b0=b[k0];r=u[k0];for(let u0=0,n0=b0.length;u0<n0;u0++){let T=p(b0[u0],r[u0],X0);if(!A)Z0(T.x,T.y,N+H0);else Z0(T.x,T.y+V[U-1].y,V[U-1].x+H0)}}}o0(),n();function o0(){let t=W.length/3;if(E){let W0=0,H0=o*W0;for(let X0=0;X0<f0;X0++){let k0=v0[X0];h0(k0[2]+H0,k0[1]+H0,k0[0]+H0)}W0=U+R*2,H0=o*W0;for(let X0=0;X0<f0;X0++){let k0=v0[X0];h0(k0[0]+H0,k0[1]+H0,k0[2]+H0)}}else{for(let W0=0;W0<f0;W0++){let H0=v0[W0];h0(H0[2],H0[1],H0[0])}for(let W0=0;W0<f0;W0++){let H0=v0[W0];h0(H0[0]+o*U,H0[1]+o*U,H0[2]+o*U)}}$.addGroup(t,W.length/3-t,0)}function n(){let t=W.length/3,W0=0;Y0(S,W0),W0+=S.length;for(let H0=0,X0=b.length;H0<X0;H0++){let k0=b[H0];Y0(k0,W0),W0+=k0.length}$.addGroup(t,W.length/3-t,1)}function Y0(t,W0){let H0=t.length;while(--H0>=0){let X0=H0,k0=H0-1;if(k0<0)k0=t.length-1;for(let j0=0,b0=U+R*2;j0<b0;j0++){let u0=o*j0,n0=o*(j0+1),T=W0+X0+u0,NJ=W0+k0+u0,t0=W0+k0+n0,e0=W0+X0+n0;g0(T,NJ,t0,e0)}}}function Z0(t,W0,H0){Y.push(t),Y.push(W0),Y.push(H0)}function h0(t,W0,H0){w0(t),w0(W0),w0(H0);let X0=W.length/3,k0=F.generateTopUV($,W,X0-3,X0-2,X0-1);UJ(k0[0]),UJ(k0[1]),UJ(k0[2])}function g0(t,W0,H0,X0){w0(t),w0(W0),w0(X0),w0(W0),w0(H0),w0(X0);let k0=W.length/3,j0=F.generateSideWallUV($,W,k0-6,k0-3,k0-2,k0-1);UJ(j0[0]),UJ(j0[1]),UJ(j0[3]),UJ(j0[1]),UJ(j0[2]),UJ(j0[3])}function w0(t){W.push(Y[t*3+0]),W.push(Y[t*3+1]),W.push(Y[t*3+2])}function UJ(t){Z.push(t.x),Z.push(t.y)}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes,$=this.parameters.options;return V5(Q,$,J)}static fromJSON(J,Q){let $=[];for(let Z=0,K=J.shapes.length;Z<K;Z++){let H=Q[J.shapes[Z]];$.push(H)}let W=J.options.extrudePath;if(W!==void 0)J.options.extrudePath=new XQ[W.type]().fromJSON(W);return new mQ($,J.options)}}var L5={generateTopUV:function(J,Q,$,W,Z){let K=Q[$*3],H=Q[$*3+1],Y=Q[W*3],X=Q[W*3+1],U=Q[Z*3],N=Q[Z*3+1];return[new e(K,H),new e(Y,X),new e(U,N)]},generateSideWallUV:function(J,Q,$,W,Z,K){let H=Q[$*3],Y=Q[$*3+1],X=Q[$*3+2],U=Q[W*3],N=Q[W*3+1],E=Q[W*3+2],G=Q[Z*3],q=Q[Z*3+1],O=Q[Z*3+2],R=Q[K*3],D=Q[K*3+1],F=Q[K*3+2];if(Math.abs(Y-N)<Math.abs(H-U))return[new e(H,1-X),new e(U,1-E),new e(G,1-O),new e(R,1-F)];else return[new e(Y,1-X),new e(N,1-E),new e(q,1-O),new e(D,1-F)]}};function V5(J,Q,$){if($.shapes=[],Array.isArray(J))for(let W=0,Z=J.length;W<Z;W++){let K=J[W];$.shapes.push(K.uuid)}else $.shapes.push(J.uuid);if($.options=Object.assign({},Q),Q.extrudePath!==void 0)$.options.extrudePath=Q.extrudePath.toJSON();return $}class lQ extends $8{constructor(J=1,Q=0){let $=(1+Math.sqrt(5))/2,W=[-1,$,0,1,$,0,-1,-$,0,1,-$,0,0,-1,$,0,1,$,0,-1,-$,0,1,-$,$,0,-1,$,0,1,-$,0,-1,-$,0,1],Z=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(W,Z,J,Q);this.type="IcosahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new lQ(J.radius,J.detail)}}class dQ extends c0{constructor(J=[new e(0,-0.5),new e(0.5,0),new e(0,0.5)],Q=12,$=0,W=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:Q,phiStart:$,phiLength:W},Q=Math.floor(Q),W=m0(W,0,Math.PI*2);let Z=[],K=[],H=[],Y=[],X=[],U=1/Q,N=new P,E=new e,G=new P,q=new P,O=new P,R=0,D=0;for(let F=0;F<=J.length-1;F++)switch(F){case 0:R=J[F+1].x-J[F].x,D=J[F+1].y-J[F].y,G.x=D*1,G.y=-R,G.z=D*0,O.copy(G),G.normalize(),Y.push(G.x,G.y,G.z);break;case J.length-1:Y.push(O.x,O.y,O.z);break;default:R=J[F+1].x-J[F].x,D=J[F+1].y-J[F].y,G.x=D*1,G.y=-R,G.z=D*0,q.copy(G),G.x+=O.x,G.y+=O.y,G.z+=O.z,G.normalize(),Y.push(G.x,G.y,G.z),O.copy(q)}for(let F=0;F<=Q;F++){let V=$+F*U*W,A=Math.sin(V),M=Math.cos(V);for(let z=0;z<=J.length-1;z++){N.x=J[z].x*A,N.y=J[z].y,N.z=J[z].x*M,K.push(N.x,N.y,N.z),E.x=F/Q,E.y=z/(J.length-1),H.push(E.x,E.y);let _=Y[3*z+0]*A,w=Y[3*z+1],k=Y[3*z+0]*M;X.push(_,w,k)}}for(let F=0;F<Q;F++)for(let V=0;V<J.length-1;V++){let A=V+F*J.length,M=A,z=A+J.length,_=A+J.length+1,w=A+1;Z.push(M,z,w),Z.push(_,w,z)}this.setIndex(Z),this.setAttribute("position",new A0(K,3)),this.setAttribute("uv",new A0(H,2)),this.setAttribute("normal",new A0(X,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new dQ(J.points,J.segments,J.phiStart,J.phiLength)}}class K6 extends $8{constructor(J=1,Q=0){let $=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],W=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super($,W,J,Q);this.type="OctahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new K6(J.radius,J.detail)}}class M7 extends c0{constructor(J=1,Q=1,$=1,W=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:W};let Z=J/2,K=Q/2,H=Math.floor($),Y=Math.floor(W),X=H+1,U=Y+1,N=J/H,E=Q/Y,G=[],q=[],O=[],R=[];for(let D=0;D<U;D++){let F=D*E-K;for(let V=0;V<X;V++){let A=V*N-Z;q.push(A,-F,0),O.push(0,0,1),R.push(V/H),R.push(1-D/Y)}}for(let D=0;D<Y;D++)for(let F=0;F<H;F++){let V=F+X*D,A=F+X*(D+1),M=F+1+X*(D+1),z=F+1+X*D;G.push(V,A,z),G.push(A,M,z)}this.setIndex(G),this.setAttribute("position",new A0(q,3)),this.setAttribute("normal",new A0(O,3)),this.setAttribute("uv",new A0(R,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new M7(J.width,J.height,J.widthSegments,J.heightSegments)}}class uQ extends c0{constructor(J=0.5,Q=1,$=32,W=1,Z=0,K=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:J,outerRadius:Q,thetaSegments:$,phiSegments:W,thetaStart:Z,thetaLength:K},$=Math.max(3,$),W=Math.max(1,W);let H=[],Y=[],X=[],U=[],N=J,E=(Q-J)/W,G=new P,q=new e;for(let O=0;O<=W;O++){for(let R=0;R<=$;R++){let D=Z+R/$*K;G.x=N*Math.cos(D),G.y=N*Math.sin(D),Y.push(G.x,G.y,G.z),X.push(0,0,1),q.x=(G.x/Q+1)/2,q.y=(G.y/Q+1)/2,U.push(q.x,q.y)}N+=E}for(let O=0;O<W;O++){let R=O*($+1);for(let D=0;D<$;D++){let F=D+R,V=F,A=F+$+1,M=F+$+2,z=F+1;H.push(V,A,z),H.push(A,M,z)}}this.setIndex(H),this.setAttribute("position",new A0(Y,3)),this.setAttribute("normal",new A0(X,3)),this.setAttribute("uv",new A0(U,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new uQ(J.innerRadius,J.outerRadius,J.thetaSegments,J.phiSegments,J.thetaStart,J.thetaLength)}}class cQ extends c0{constructor(J=new R7([new e(0,0.5),new e(-0.5,-0.5),new e(0.5,-0.5)]),Q=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Q};let $=[],W=[],Z=[],K=[],H=0,Y=0;if(Array.isArray(J)===!1)X(J);else for(let U=0;U<J.length;U++)X(J[U]),this.addGroup(H,Y,U),H+=Y,Y=0;this.setIndex($),this.setAttribute("position",new A0(W,3)),this.setAttribute("normal",new A0(Z,3)),this.setAttribute("uv",new A0(K,2));function X(U){let N=W.length/3,E=U.extractPoints(Q),G=E.shape,q=E.holes;if(N9.isClockWise(G)===!1)G=G.reverse();for(let R=0,D=q.length;R<D;R++){let F=q[R];if(N9.isClockWise(F)===!0)q[R]=F.reverse()}let O=N9.triangulateShape(G,q);for(let R=0,D=q.length;R<D;R++){let F=q[R];G=G.concat(F)}for(let R=0,D=G.length;R<D;R++){let F=G[R];W.push(F.x,F.y,0),Z.push(0,0,1),K.push(F.x,F.y)}for(let R=0,D=O.length;R<D;R++){let F=O[R],V=F[0]+N,A=F[1]+N,M=F[2]+N;$.push(V,A,M),Y+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes;return B5(Q,J)}static fromJSON(J,Q){let $=[];for(let W=0,Z=J.shapes.length;W<Z;W++){let K=Q[J.shapes[W]];$.push(K)}return new cQ($,J.curveSegments)}}function B5(J,Q){if(Q.shapes=[],Array.isArray(J))for(let $=0,W=J.length;$<W;$++){let Z=J[$];Q.shapes.push(Z.uuid)}else Q.shapes.push(J.uuid);return Q}class H6 extends c0{constructor(J=1,Q=32,$=16,W=0,Z=Math.PI*2,K=0,H=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:W,phiLength:Z,thetaStart:K,thetaLength:H},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let Y=Math.min(K+H,Math.PI),X=0,U=[],N=new P,E=new P,G=[],q=[],O=[],R=[];for(let D=0;D<=$;D++){let F=[],V=D/$,A=K+V*H,M=J*Math.cos(A),z=Math.sqrt(J*J-M*M),_=0;if(D===0&&K===0)_=0.5/Q;else if(D===$&&Y===Math.PI)_=-0.5/Q;for(let w=0;w<=Q;w++){let k=w/Q,I=W+k*Z;N.x=-z*Math.cos(I),N.y=M,N.z=z*Math.sin(I),q.push(N.x,N.y,N.z),E.copy(N).normalize(),O.push(E.x,E.y,E.z),R.push(k+_,1-V),F.push(X++)}U.push(F)}for(let D=0;D<$;D++)for(let F=0;F<Q;F++){let V=U[D][F+1],A=U[D][F],M=U[D+1][F],z=U[D+1][F+1];if(D!==0||K>0)G.push(V,A,z);if(D!==$-1||Y<Math.PI)G.push(A,M,z)}this.setIndex(G),this.setAttribute("position",new A0(q,3)),this.setAttribute("normal",new A0(O,3)),this.setAttribute("uv",new A0(R,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new H6(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class nQ extends $8{constructor(J=1,Q=0){let $=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],W=[2,1,0,0,3,2,1,3,0,2,3,1];super($,W,J,Q);this.type="TetrahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new nQ(J.radius,J.detail)}}class sQ extends c0{constructor(J=1,Q=0.4,$=12,W=48,Z=Math.PI*2,K=0,H=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:W,arc:Z,thetaStart:K,thetaLength:H},$=Math.floor($),W=Math.floor(W);let Y=[],X=[],U=[],N=[],E=new P,G=new P,q=new P;for(let O=0;O<=$;O++){let R=K+O/$*H;for(let D=0;D<=W;D++){let F=D/W*Z;G.x=(J+Q*Math.cos(R))*Math.cos(F),G.y=(J+Q*Math.cos(R))*Math.sin(F),G.z=Q*Math.sin(R),X.push(G.x,G.y,G.z),E.x=J*Math.cos(F),E.y=J*Math.sin(F),q.subVectors(G,E).normalize(),U.push(q.x,q.y,q.z),N.push(D/W),N.push(O/$)}}for(let O=1;O<=$;O++)for(let R=1;R<=W;R++){let D=(W+1)*O+R-1,F=(W+1)*(O-1)+R-1,V=(W+1)*(O-1)+R,A=(W+1)*O+R;Y.push(D,F,A),Y.push(F,V,A)}this.setIndex(Y),this.setAttribute("position",new A0(X,3)),this.setAttribute("normal",new A0(U,3)),this.setAttribute("uv",new A0(N,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new sQ(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}class iQ extends c0{constructor(J=1,Q=0.4,$=64,W=8,Z=2,K=3){super();this.type="TorusKnotGeometry",this.parameters={radius:J,tube:Q,tubularSegments:$,radialSegments:W,p:Z,q:K},$=Math.floor($),W=Math.floor(W);let H=[],Y=[],X=[],U=[],N=new P,E=new P,G=new P,q=new P,O=new P,R=new P,D=new P;for(let V=0;V<=$;++V){let A=V/$*Z*Math.PI*2;F(A,Z,K,J,G),F(A+0.01,Z,K,J,q),R.subVectors(q,G),D.addVectors(q,G),O.crossVectors(R,D),D.crossVectors(O,R),O.normalize(),D.normalize();for(let M=0;M<=W;++M){let z=M/W*Math.PI*2,_=-Q*Math.cos(z),w=Q*Math.sin(z);N.x=G.x+(_*D.x+w*O.x),N.y=G.y+(_*D.y+w*O.y),N.z=G.z+(_*D.z+w*O.z),Y.push(N.x,N.y,N.z),E.subVectors(N,G).normalize(),X.push(E.x,E.y,E.z),U.push(V/$),U.push(M/W)}}for(let V=1;V<=$;V++)for(let A=1;A<=W;A++){let M=(W+1)*(V-1)+(A-1),z=(W+1)*V+(A-1),_=(W+1)*V+A,w=(W+1)*(V-1)+A;H.push(M,z,w),H.push(z,_,w)}this.setIndex(H),this.setAttribute("position",new A0(Y,3)),this.setAttribute("normal",new A0(X,3)),this.setAttribute("uv",new A0(U,2));function F(V,A,M,z,_){let w=Math.cos(V),k=Math.sin(V),I=M/A*V,b=Math.cos(I);_.x=z*(2+b)*0.5*w,_.y=z*(2+b)*k*0.5,_.z=z*Math.sin(I)*0.5}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new iQ(J.radius,J.tube,J.tubularSegments,J.radialSegments,J.p,J.q)}}class oQ extends c0{constructor(J=new gQ(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),Q=64,$=1,W=8,Z=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:Q,radius:$,radialSegments:W,closed:Z};let K=J.computeFrenetFrames(Q,Z);this.tangents=K.tangents,this.normals=K.normals,this.binormals=K.binormals;let H=new P,Y=new P,X=new e,U=new P,N=[],E=[],G=[],q=[];O(),this.setIndex(q),this.setAttribute("position",new A0(N,3)),this.setAttribute("normal",new A0(E,3)),this.setAttribute("uv",new A0(G,2));function O(){for(let V=0;V<Q;V++)R(V);R(Z===!1?Q:0),F(),D()}function R(V){U=J.getPointAt(V/Q,U);let A=K.normals[V],M=K.binormals[V];for(let z=0;z<=W;z++){let _=z/W*Math.PI*2,w=Math.sin(_),k=-Math.cos(_);Y.x=k*A.x+w*M.x,Y.y=k*A.y+w*M.y,Y.z=k*A.z+w*M.z,Y.normalize(),E.push(Y.x,Y.y,Y.z),H.x=U.x+$*Y.x,H.y=U.y+$*Y.y,H.z=U.z+$*Y.z,N.push(H.x,H.y,H.z)}}function D(){for(let V=1;V<=Q;V++)for(let A=1;A<=W;A++){let M=(W+1)*(V-1)+(A-1),z=(W+1)*V+(A-1),_=(W+1)*V+A,w=(W+1)*(V-1)+A;q.push(M,z,w),q.push(z,_,w)}}function F(){for(let V=0;V<=Q;V++)for(let A=0;A<=W;A++)X.x=V/Q,X.y=A/W,G.push(X.x,X.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new oQ(new XQ[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}class kZ extends c0{constructor(J=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:J},J!==null){let Q=[],$=new Set,W=new P,Z=new P;if(J.index!==null){let K=J.attributes.position,H=J.index,Y=J.groups;if(Y.length===0)Y=[{start:0,count:H.count,materialIndex:0}];for(let X=0,U=Y.length;X<U;++X){let N=Y[X],E=N.start,G=N.count;for(let q=E,O=E+G;q<O;q+=3)for(let R=0;R<3;R++){let D=H.getX(q+R),F=H.getX(q+(R+1)%3);if(W.fromBufferAttribute(K,D),Z.fromBufferAttribute(K,F),KH(W,Z,$)===!0)Q.push(W.x,W.y,W.z),Q.push(Z.x,Z.y,Z.z)}}}else{let K=J.attributes.position;for(let H=0,Y=K.count/3;H<Y;H++)for(let X=0;X<3;X++){let U=3*H+X,N=3*H+(X+1)%3;if(W.fromBufferAttribute(K,U),Z.fromBufferAttribute(K,N),KH(W,Z,$)===!0)Q.push(W.x,W.y,W.z),Q.push(Z.x,Z.y,Z.z)}}this.setAttribute("position",new A0(Q,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}function KH(J,Q,$){let W=`${J.x},${J.y},${J.z}-${Q.x},${Q.y},${Q.z}`,Z=`${Q.x},${Q.y},${Q.z}-${J.x},${J.y},${J.z}`;if($.has(W)===!0||$.has(Z)===!0)return!1;else return $.add(W),$.add(Z),!0}var HH=Object.freeze({__proto__:null,BoxGeometry:j8,CapsuleGeometry:yQ,CircleGeometry:vQ,ConeGeometry:W6,CylinderGeometry:$6,DodecahedronGeometry:fQ,EdgesGeometry:EZ,ExtrudeGeometry:mQ,IcosahedronGeometry:lQ,LatheGeometry:dQ,OctahedronGeometry:K6,PlaneGeometry:M7,PolyhedronGeometry:$8,RingGeometry:uQ,ShapeGeometry:cQ,SphereGeometry:H6,TetrahedronGeometry:nQ,TorusGeometry:sQ,TorusKnotGeometry:iQ,TubeGeometry:oQ,WireframeGeometry:kZ});class LZ extends jJ{constructor(J){super();this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new B0(0),this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.fog=J.fog,this}}function y8(J){let Q={};for(let $ in J){Q[$]={};for(let W in J[$]){let Z=J[$][W];if(YH(Z))if(Z.isRenderTargetTexture)N0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][W]=null;else Q[$][W]=Z.clone();else if(Array.isArray(Z))if(YH(Z[0])){let K=[];for(let H=0,Y=Z.length;H<Y;H++)K[H]=Z[H].clone();Q[$][W]=K}else Q[$][W]=Z.slice();else Q[$][W]=Z}}return Q}function pJ(J){let Q={};for(let $=0;$<J.length;$++){let W=y8(J[$]);for(let Z in W)Q[Z]=W[Z]}return Q}function YH(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function I5(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function VZ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return QJ.workingColorSpace}var WX={clone:y8,merge:pJ},z5=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A5=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Q9 extends jJ{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z5,this.fragmentShader=A5,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=y8(J.uniforms),this.uniformsGroups=I5(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let W in this.uniforms){let K=this.uniforms[W].value;if(K&&K.isTexture)Q.uniforms[W]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[W]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[W]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[W]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[W]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[W]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[W]={type:"m4",value:K.toArray()};else Q.uniforms[W]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let W in this.extensions)if(this.extensions[W]===!0)$[W]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let W=J.uniforms[$];switch(this.uniforms[$]={},W.type){case"t":this.uniforms[$].value=Q[W.value]||null;break;case"c":this.uniforms[$].value=new B0().setHex(W.value);break;case"v2":this.uniforms[$].value=new e().fromArray(W.value);break;case"v3":this.uniforms[$].value=new P().fromArray(W.value);break;case"v4":this.uniforms[$].value=new GJ().fromArray(W.value);break;case"m3":this.uniforms[$].value=new d0().fromArray(W.value);break;case"m4":this.uniforms[$].value=new l0().fromArray(W.value);break;default:this.uniforms[$].value=W.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class aQ extends Q9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rQ extends jJ{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new B0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new E9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class BZ extends rQ{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return m0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new B0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new B0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new B0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class IZ extends jJ{constructor(J){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new B0(16777215),this.specular=new B0(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new E9,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.specular.copy(J.specular),this.shininess=J.shininess,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.envMapIntensity=J.envMapIntensity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class zZ extends jJ{constructor(J){super();this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new B0(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.gradientMap=J.gradientMap,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.alphaMap=J.alphaMap,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}class AZ extends jJ{constructor(J){super();this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(J)}copy(J){return super.copy(J),this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.flatShading=J.flatShading,this}}class CZ extends jJ{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new B0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new E9,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.envMapIntensity=J.envMapIntensity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class tQ extends jJ{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class eQ extends jJ{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}class wZ extends jJ{constructor(J){super();this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new B0(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={MATCAP:""},this.color.copy(J.color),this.matcap=J.matcap,this.map=J.map,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.alphaMap=J.alphaMap,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.flatShading=J.flatShading,this.fog=J.fog,this}}class _Z extends gJ{constructor(J){super();this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(J)}copy(J){return super.copy(J),this.scale=J.scale,this.dashSize=J.dashSize,this.gapSize=J.gapSize,this}}function G9(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function p7(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function ZX(J){function Q(Z,K){return J[Z]-J[K]}let $=J.length,W=Array($);for(let Z=0;Z!==$;++Z)W[Z]=Z;return W.sort(Q),W}function e$(J,Q,$){let W=J.length,Z=new J.constructor(W);for(let K=0,H=0;H!==W;++K){let Y=$[K]*Q;for(let X=0;X!==Q;++X)Z[H++]=J[Y+X]}return Z}function KX(J,Q,$,W){let Z=1,K=J[0];while(K!==void 0&&K[W]===void 0)K=J[Z++];if(K===void 0)return;let H=K[W];if(H===void 0)return;if(Array.isArray(H))do{if(H=K[W],H!==void 0)Q.push(K.time),$.push(...H);K=J[Z++]}while(K!==void 0);else if(H.toArray!==void 0)do{if(H=K[W],H!==void 0)Q.push(K.time),H.toArray($,$.length);K=J[Z++]}while(K!==void 0);else do{if(H=K[W],H!==void 0)Q.push(K.time),$.push(H);K=J[Z++]}while(K!==void 0)}function C5(J,Q,$,W,Z=30){let K=J.clone();K.name=Q;let H=[];for(let X=0;X<K.tracks.length;++X){let U=K.tracks[X],N=U.getValueSize(),E=[],G=[];for(let q=0;q<U.times.length;++q){let O=U.times[q]*Z;if(O<$||O>=W)continue;E.push(U.times[q]);for(let R=0;R<N;++R)G.push(U.values[q*N+R])}if(E.length===0)continue;U.times=G9(E,U.times.constructor),U.values=G9(G,U.values.constructor),H.push(U)}K.tracks=H;let Y=1/0;for(let X=0;X<K.tracks.length;++X)if(Y>K.tracks[X].times[0])Y=K.tracks[X].times[0];for(let X=0;X<K.tracks.length;++X)K.tracks[X].shift(-1*Y);return K.resetDuration(),K}function w5(J,Q=0,$=J,W=30){if(W<=0)W=30;let Z=$.tracks.length,K=Q/W;for(let H=0;H<Z;++H){let Y=$.tracks[H],X=Y.ValueTypeName;if(X==="bool"||X==="string")continue;let U=J.tracks.find(function(F){return F.name===Y.name&&F.ValueTypeName===X});if(U===void 0)continue;let N=0,E=Y.getValueSize();if(Y.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)N=E/3;let G=0,q=U.getValueSize();if(U.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)G=q/3;let O=Y.times.length-1,R;if(K<=Y.times[0]){let F=N,V=E-N;R=Y.values.slice(F,V)}else if(K>=Y.times[O]){let F=O*E+N,V=F+E-N;R=Y.values.slice(F,V)}else{let F=Y.createInterpolant(),V=N,A=E-N;F.evaluate(K),R=F.resultBuffer.slice(V,A)}if(X==="quaternion")new xJ().fromArray(R).normalize().conjugate().toArray(R);let D=U.times.length;for(let F=0;F<D;++F){let V=F*q+G;if(X==="quaternion")xJ.multiplyQuaternionsFlat(U.values,V,R,0,U.values,V);else{let A=q-G*2;for(let M=0;M<A;++M)U.values[V+M]-=R[M]}}}return J.blendMode=2501,J}class HX{static convertArray(J,Q){return G9(J,Q)}static isTypedArray(J){return _Y(J)}static hasTangents(J){return p7(J)}static getKeyframeOrder(J){return ZX(J)}static sortedArray(J,Q,$){return e$(J,Q,$)}static flattenJSON(J,Q,$,W){KX(J,Q,$,W)}static subclip(J,Q,$,W,Z=30){return C5(J,Q,$,W,Z)}static makeClipAdditive(J,Q=0,$=J,W=30){return w5(J,Q,$,W)}}class v8{constructor(J,Q,$,W){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=W!==void 0?W:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,W=Q[$],Z=Q[$-1];J:{Q:{let K;$:{W:if(!(J<W)){for(let H=$+2;;){if(W===void 0){if(J<Z)break W;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(Z=W,W=Q[++$],J<W)break Q}K=Q.length;break $}if(!(J>=Z)){let H=Q[1];if(J<H)$=2,Z=H;for(let Y=$-2;;){if(Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(W=Z,Z=Q[--$-1],J>=Z)break Q}K=$,$=0;break $}break J}while($<K){let H=$+K>>>1;if(J<Q[H])K=H;else $=H+1}if(W=Q[$],Z=Q[$-1],Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,Z,W)}return this.interpolate_($,Z,J,W)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W;for(let K=0;K!==W;++K)Q[K]=$[Z+K];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class PZ extends v8{constructor(J,Q,$,W){super(J,Q,$,W);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let W=this.parameterPositions,Z=J-2,K=J+1,H=W[Z],Y=W[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:Z=J,H=2*Q-$;break;case 2402:Z=W.length-2,H=Q+W[Z]-W[Z+1];break;default:Z=J,H=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*$-Q;break;case 2402:K=1,Y=$+W[1]-W[0];break;default:K=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-$),this._offsetPrev=Z*U,this._offsetNext=K*U}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,N=this._offsetNext,E=this._weightPrev,G=this._weightNext,q=($-Q)/(W-Q),O=q*q,R=O*q,D=-E*R+2*E*O-E*q,F=(1+E)*R+(-1.5-2*E)*O+(-0.5+E)*q+1,V=(-1-G)*R+(1.5+G)*O+0.5*q,A=G*R-G*O;for(let M=0;M!==H;++M)Z[M]=D*K[U+M]+F*K[X+M]+V*K[Y+M]+A*K[N+M];return Z}}class J$ extends v8{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(W-Q),N=1-U;for(let E=0;E!==H;++E)Z[E]=K[X+E]*N+K[Y+E]*U;return Z}}class TZ extends v8{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J){return this.copySampleValue_(J-1)}}class SZ extends v8{interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this.inTangents,N=this.outTangents;if(!U||!N){let q=($-Q)/(W-Q),O=1-q;for(let R=0;R!==H;++R)Z[R]=K[X+R]*O+K[Y+R]*q;return Z}let E=H*2,G=J-1;for(let q=0;q!==H;++q){let O=K[X+q],R=K[Y+q],D=G*E+q*2,F=N[D],V=N[D+1],A=J*E+q*2,M=U[A],z=U[A+1],_=P5($,Q,F,M,W);Z[q]=YX(_,O,V,z,R)}return Z}}function YX(J,Q,$,W,Z){let K=1-J;return K*K*K*Q+3*K*K*J*$+3*K*J*J*W+J*J*J*Z}function _5(J,Q,$,W,Z){let K=1-J;return 3*K*K*($-Q)+6*K*J*(W-$)+3*J*J*(Z-W)}function P5(J,Q,$,W,Z){let K=(J-Q)/(Z-Q);for(let H=0;H<8;H++){let Y=YX(K,Q,$,W,Z)-J;if(Math.abs(Y)<0.0000000001)break;let X=_5(K,Q,$,W,Z);if(Math.abs(X)<0.0000000001)break;K=Math.max(0,Math.min(1,K-Y/X))}return K}class $9{constructor(J,Q,$,W){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=G9(Q,this.TimeBufferType),this.values=G9($,this.ValueBufferType),this.setInterpolation(W||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:G9(J.times,Array),values:G9(J.values,Array)};let W=J.getInterpolation();if(W!==J.DefaultInterpolation)$.interpolation=W;if(p7(J.settings))$.settings={inTangents:G9(J.settings.inTangents,Array),outTangents:G9(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new TZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new J$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new PZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new SZ(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return N0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]*=J;if(p7(this.settings))XH(this.settings.inTangents,J),XH(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,W=$.length,Z=0,K=W-1;while(Z!==W&&$[Z]<J)++Z;while(K!==-1&&$[K]>Q)--K;if(++K,Z!==0||K!==W){if(Z>=K)K=Math.max(K,1),Z=K-1;let H=this.getValueSize();this.times=$.slice(Z,K),this.values=this.values.slice(Z*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)S0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,W=this.values,Z=$.length;if(Z===0)S0("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==Z;H++){let Y=$[H];if(typeof Y==="number"&&isNaN(Y)){S0("KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){S0("KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if(W!==void 0){if(_Y(W))for(let H=0,Y=W.length;H!==Y;++H){let X=W[H];if(isNaN(X)){S0("KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),W=this.getInterpolation()===2302,Z=J.length-1,K=1;for(let H=1;H<Z;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!W){let N=H*$,E=N-$,G=N+$;for(let q=0;q!==$;++q){let O=Q[N+q];if(O!==Q[E+q]||O!==Q[G+q]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let N=H*$,E=K*$;for(let G=0;G!==$;++G)Q[E+G]=Q[N+G]}++K}}if(Z>0){J[K]=J[Z];for(let H=Z*$,Y=K*$,X=0;X!==$;++X)Q[Y+X]=Q[H+X];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),W=new this.constructor(this.name,J,Q);if(W.createInterpolant=this.createInterpolant,p7(this.settings))W.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return W}}function XH(J,Q){for(let $=0,W=J.length;$!==W;$+=2)J[$]*=Q}$9.prototype.ValueTypeName="";$9.prototype.TimeBufferType=Float32Array;$9.prototype.ValueBufferType=Float32Array;$9.prototype.DefaultInterpolation=2301;class W8 extends $9{constructor(J,Q,$){super(J,Q,$)}}W8.prototype.ValueTypeName="bool";W8.prototype.ValueBufferType=Array;W8.prototype.DefaultInterpolation=2300;W8.prototype.InterpolantFactoryMethodLinear=void 0;W8.prototype.InterpolantFactoryMethodSmooth=void 0;class Q$ extends $9{constructor(J,Q,$,W){super(J,Q,$,W)}}Q$.prototype.ValueTypeName="color";class Y6 extends $9{constructor(J,Q,$,W){super(J,Q,$,W)}}Y6.prototype.ValueTypeName="number";class jZ extends v8{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=($-Q)/(W-Q),X=J*H;for(let U=X+H;X!==U;X+=4)xJ.slerpFlat(Z,0,K,X-H,K,X,Y);return Z}}class X6 extends $9{constructor(J,Q,$,W){super(J,Q,$,W)}InterpolantFactoryMethodLinear(J){return new jZ(this.times,this.values,this.getValueSize(),J)}}X6.prototype.ValueTypeName="quaternion";X6.prototype.InterpolantFactoryMethodSmooth=void 0;class Z8 extends $9{constructor(J,Q,$){super(J,Q,$)}}Z8.prototype.ValueTypeName="string";Z8.prototype.ValueBufferType=Array;Z8.prototype.DefaultInterpolation=2300;Z8.prototype.InterpolantFactoryMethodLinear=void 0;Z8.prototype.InterpolantFactoryMethodSmooth=void 0;class $$ extends $9{constructor(J,Q,$,W){super(J,Q,$,W)}}$$.prototype.ValueTypeName="vector";class U7{constructor(J="",Q=-1,$=[],W=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=W,this.uuid=eJ(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,W=1/(J.fps||1);for(let K=0,H=$.length;K!==H;++K)Q.push(S5($[K]).scale(W));let Z=new this(J.name,J.duration,Q,J.blendMode);return Z.uuid=J.uuid,Z.userData=JSON.parse(J.userData||"{}"),Z}static toJSON(J){let Q=[],$=J.tracks,W={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let Z=0,K=$.length;Z!==K;++Z)Q.push($9.toJSON($[Z]));return W}static CreateFromMorphTargetSequence(J,Q,$,W){let Z=Q.length,K=[];for(let H=0;H<Z;H++){let Y=[],X=[];Y.push((H+Z-1)%Z,H,(H+1)%Z),X.push(0,1,0);let U=ZX(Y);if(Y=e$(Y,1,U),X=e$(X,1,U),!W&&Y[0]===0)Y.push(Z),X.push(X[0]);K.push(new Y6(".morphTargetInfluences["+Q[H].name+"]",Y,X).scale(1/$))}return new this(J,-1,K)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let W=J;$=W.geometry&&W.geometry.animations||W.animations}for(let W=0;W<$.length;W++)if($[W].name===Q)return $[W];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let W={},Z=/^([\w-]*?)([\d]+)$/;for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=X.name.match(Z);if(U&&U.length>1){let N=U[1],E=W[N];if(!E)W[N]=E=[];E.push(X)}}let K=[];for(let H in W)K.push(this.CreateFromMorphTargetSequence(H,W[H],Q,$));return K}resetDuration(){let J=this.tracks,Q=0;for(let $=0,W=J.length;$!==W;++$){let Z=this.tracks[$];Q=Math.max(Q,Z.times[Z.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function T5(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Y6;case"vector":case"vector2":case"vector3":case"vector4":return $$;case"color":return Q$;case"quaternion":return X6;case"bool":case"boolean":return W8;case"string":return Z8}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function S5(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=T5(J.type);if(J.times===void 0){let W=[],Z=[];KX(J.keys,W,Z,"value"),J.times=W,J.values=Z}let $;if(Q.parse!==void 0)$=Q.parse(J);else $=new Q(J.name,J.times,J.values,J.interpolation);if(p7(J.settings))$.settings={inTangents:G9(J.settings.inTangents,Float32Array),outTangents:G9(J.settings.outTangents,Float32Array)};return $}var V9={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(UH(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(UH(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function UH(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class W${constructor(J,Q,$){let W=this,Z=!1,K=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,Z===!1){if(W.onStart!==void 0)W.onStart(U,K,H)}Z=!0},this.itemEnd=function(U){if(K++,W.onProgress!==void 0)W.onProgress(U,K,H);if(K===H){if(Z=!1,W.onLoad!==void 0)W.onLoad()}},this.itemError=function(U){if(W.onError!==void 0)W.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,N){return X.push(U,N),this},this.removeHandler=function(U){let N=X.indexOf(U);if(N!==-1)X.splice(N,2);return this},this.getHandler=function(U){for(let N=0,E=X.length;N<E;N+=2){let G=X[N],q=X[N+1];if(G.global)G.lastIndex=0;if(G.test(U))return q}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var XX=new W$;class cJ{constructor(J){if(this.manager=J!==void 0?J:XX,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(W,Z){$.load(J,W,Q,Z)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}cJ.DEFAULT_MATERIAL_NAME="__DEFAULT";var f9={};class UX extends Error{constructor(J,Q){super(J);this.response=Q}}class B9 extends cJ{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=V9.get(`file:${J}`);if(Z!==void 0){this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(Z);this.manager.itemEnd(J)},0);return}if(f9[J]!==void 0){f9[J].push({onLoad:Q,onProgress:$,onError:W});return}f9[J]=[],f9[J].push({onLoad:Q,onProgress:$,onError:W});let K=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),H=this.mimeType,Y=this.responseType;fetch(K).then((X)=>{if(X.status===200||X.status===0){if(X.status===0)N0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||X.body===void 0||X.body.getReader===void 0)return X;let U=f9[J],N=X.body.getReader(),E=X.headers.get("X-File-Size")||X.headers.get("Content-Length"),G=E?parseInt(E):0,q=G!==0,O=0,R=new ReadableStream({start(D){F();function F(){N.read().then(({done:V,value:A})=>{if(V)D.close();else{O+=A.byteLength;let M=new ProgressEvent("progress",{lengthComputable:q,loaded:O,total:G});for(let z=0,_=U.length;z<_;z++){let w=U[z];if(w.onProgress)w.onProgress(M)}D.enqueue(A),F()}},(V)=>{D.error(V)})}}});return new Response(R)}else throw new UX(`fetch for "${X.url}" responded with ${X.status}: ${X.statusText}`,X)}).then((X)=>{switch(Y){case"arraybuffer":return X.arrayBuffer();case"blob":return X.blob();case"document":return X.text().then((U)=>{return new DOMParser().parseFromString(U,H)});case"json":return X.json();default:if(H==="")return X.text();else{let N=/charset="?([^;"\s]*)"?/i.exec(H),E=N&&N[1]?N[1].toLowerCase():void 0,G=new TextDecoder(E);return X.arrayBuffer().then((q)=>G.decode(q))}}}).then((X)=>{V9.add(`file:${J}`,X);let U=f9[J];delete f9[J];for(let N=0,E=U.length;N<E;N++){let G=U[N];if(G.onLoad)G.onLoad(X)}}).catch((X)=>{let U=f9[J];if(U===void 0)throw this.manager.itemError(J),X;delete f9[J];for(let N=0,E=U.length;N<E;N++){let G=U[N];if(G.onError)G.onError(X)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class GX extends cJ{constructor(J){super(J)}load(J,Q,$,W){let Z=this,K=new B9(this.manager);K.setPath(this.path),K.setRequestHeader(this.requestHeader),K.setWithCredentials(this.withCredentials),K.load(J,function(H){try{Q(Z.parse(JSON.parse(H)))}catch(Y){if(W)W(Y);else S0(Y);Z.manager.itemError(J)}},$,W)}parse(J){let Q=[];for(let $=0;$<J.length;$++){let W=U7.parse(J[$]);Q.push(W)}return Q}}class NX extends cJ{constructor(J){super(J)}load(J,Q,$,W){let Z=this,K=[],H=new Q6,Y=new B9(this.manager);Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(Z.withCredentials);let X=0;function U(N){Y.load(J[N],function(E){let G=Z.parse(E,!0);if(K[N]={width:G.width,height:G.height,format:G.format,mipmaps:G.mipmaps},X+=1,X===6){if(G.mipmapCount===1)H.minFilter=1006;if(H.image=K,H.format=G.format,H.needsUpdate=!0,Q)Q(H)}},$,W)}if(Array.isArray(J))for(let N=0,E=J.length;N<E;++N)U(N);else Y.load(J,function(N){let E=Z.parse(N,!0);if(E.isCubemap){let G=E.mipmaps.length/E.mipmapCount;for(let q=0;q<G;q++){K[q]={mipmaps:[]};for(let O=0;O<E.mipmapCount;O++)K[q].mipmaps.push(E.mipmaps[q*E.mipmapCount+O]),K[q].format=E.format,K[q].width=E.width,K[q].height=E.height}H.image=K}else H.image.width=E.width,H.image.height=E.height,H.mipmaps=E.mipmaps;if(E.mipmapCount===1)H.minFilter=1006;if(H.format=E.format,H.needsUpdate=!0,Q)Q(H)},$,W);return H}}var e8=new WeakMap;class G7 extends cJ{constructor(J){super(J)}load(J,Q,$,W){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,K=V9.get(`image:${J}`);if(K!==void 0){if(K.complete===!0)Z.manager.itemStart(J),setTimeout(function(){if(Q)Q(K);Z.manager.itemEnd(J)},0);else{let N=e8.get(K);if(N===void 0)N=[],e8.set(K,N);N.push({onLoad:Q,onError:W})}return K}let H=H7("img");function Y(){if(U(),Q)Q(this);let N=e8.get(this)||[];for(let E=0;E<N.length;E++){let G=N[E];if(G.onLoad)G.onLoad(this)}e8.delete(this),Z.manager.itemEnd(J)}function X(N){if(U(),W)W(N);V9.remove(`image:${J}`);let E=e8.get(this)||[];for(let G=0;G<E.length;G++){let q=E[G];if(q.onError)q.onError(N)}e8.delete(this),Z.manager.itemError(J),Z.manager.itemEnd(J)}function U(){H.removeEventListener("load",Y,!1),H.removeEventListener("error",X,!1)}if(H.addEventListener("load",Y,!1),H.addEventListener("error",X,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)H.crossOrigin=this.crossOrigin}return V9.add(`image:${J}`,H),Z.manager.itemStart(J),H.src=J,H}}class EX extends cJ{constructor(J){super(J)}load(J,Q,$,W){let Z=new O7;Z.colorSpace="srgb";let K=new G7(this.manager);K.setCrossOrigin(this.crossOrigin),K.setPath(this.path);let H=0;function Y(X){K.load(J[X],function(U){if(Z.images[X]=U,H++,H===6){if(Z.needsUpdate=!0,Q)Q(Z)}},void 0,W)}for(let X=0;X<J.length;++X)Y(X);return Z}}class qX extends cJ{constructor(J){super(J)}load(J,Q,$,W){let Z=this,K=new J9,H=new B9(this.manager);return H.setResponseType("arraybuffer"),H.setRequestHeader(this.requestHeader),H.setPath(this.path),H.setWithCredentials(Z.withCredentials),H.load(J,function(Y){let X;try{X=Z.parse(Y)}catch(U){if(W!==void 0)W(U);else S0(U);return}if(Z._applyTexData(K,X),Q)Q(K,X)},$,W),K}createDataTexture(J){let Q=new J9;return this._applyTexData(Q,this.parse(J)),Q}_applyTexData(J,Q){if(Q.image!==void 0)J.image=Q.image;else if(Q.data!==void 0)J.image.width=Q.width,J.image.height=Q.height,J.image.data=Q.data;if(J.wrapS=Q.wrapS!==void 0?Q.wrapS:1001,J.wrapT=Q.wrapT!==void 0?Q.wrapT:1001,J.magFilter=Q.magFilter!==void 0?Q.magFilter:1006,J.minFilter=Q.minFilter!==void 0?Q.minFilter:1006,J.anisotropy=Q.anisotropy!==void 0?Q.anisotropy:1,Q.colorSpace!==void 0)J.colorSpace=Q.colorSpace;if(Q.flipY!==void 0)J.flipY=Q.flipY;if(Q.format!==void 0)J.format=Q.format;if(Q.type!==void 0)J.type=Q.type;if(Q.mipmaps!==void 0)J.mipmaps=Q.mipmaps,J.minFilter=1008;if(Q.mipmapCount===1)J.minFilter=1006;if(Q.generateMipmaps!==void 0)J.generateMipmaps=Q.generateMipmaps;J.needsUpdate=!0}}class FX extends cJ{constructor(J){super(J)}load(J,Q,$,W){let Z=new LJ,K=new G7(this.manager);return K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load(J,function(H){if(Z.image=H,Z.needsUpdate=!0,Q!==void 0)Q(Z)},$,W),Z}}class l9 extends ZJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new B0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class yZ extends l9{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ZJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new B0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var d$=new l0,GH=new P,NH=new P;class U6{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new e(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new l0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new e9,this._frameExtents=new e(1,1),this._viewportCount=1,this._viewports=[new GJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;GH.setFromMatrixPosition(J.matrixWorld),Q.position.copy(GH),NH.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(NH),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,W){d$.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(d$,J.coordinateSystem,J.reversedDepth);let Z=this._frameExtents,K=W?W.z/Z.x:1,H=W?W.w/Z.y:1,Y=W?W.x/Z.x:0,X=W?W.y/Z.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,1,0,0,0,0,1);else Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,0.5,0.5,0,0,0,1);Q.multiply(d$)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var r6=new P,t6=new xJ,M9=new P;class G6 extends ZJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new l0,this.projectionMatrix=new l0,this.projectionMatrixInverse=new l0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(r6,t6,M9),M9.x===1&&M9.y===1&&M9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(r6,t6,M9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(r6,t6,M9),M9.x===1&&M9.y===1&&M9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(r6,t6,M9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var a9=new P,EH=new e,qH=new e;class TJ extends G6{constructor(J=50,Q=1,$=0.1,W=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=W,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=L8*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(k8*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return L8*2*Math.atan(Math.tan(k8*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){a9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(a9.x,a9.y).multiplyScalar(-J/a9.z),a9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(a9.x,a9.y).multiplyScalar(-J/a9.z)}getViewSize(J,Q){return this.getViewBounds(J,EH,qH),Q.subVectors(qH,EH)}setViewOffset(J,Q,$,W,Z,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(k8*0.5*this.fov)/this.zoom,$=2*Q,W=this.aspect*$,Z=-0.5*W,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=K;Z+=K.offsetX*W/Y,Q-=K.offsetY*$/X,W*=K.width/Y,$*=K.height/X}let H=this.filmOffset;if(H!==0)Z+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(Z,Z+W,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class DX extends U6{constructor(){super(new TJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=L8*2*J.angle*this.focus,W=this.mapSize.width/this.mapSize.height*this.aspect,Z=J.distance||Q.far;if($!==Q.fov||W!==Q.aspect||Z!==Q.far)Q.fov=$,Q.aspect=W,Q.far=Z,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class vZ extends l9{constructor(J,Q,$=0,W=Math.PI/3,Z=0,K=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ZJ.DEFAULT_UP),this.updateMatrix(),this.target=new ZJ,this.distance=$,this.angle=W,this.penumbra=Z,this.decay=K,this.map=null,this.shadow=new DX}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class OX extends U6{constructor(){super(new TJ(90,1,0.5,500));this.isPointLightShadow=!0}}class fZ extends l9{constructor(J,Q,$=0,W=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=W,this.shadow=new OX}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class k7 extends G6{constructor(J=-1,Q=1,$=1,W=-1,Z=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=W,this.near=Z,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,W,Z,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,W=(this.top+this.bottom)/2,Z=$-J,K=$+J,H=W+Q,Y=W-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Z+=X*this.view.offsetX,K=Z+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(Z,K,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class RX extends U6{constructor(){super(new k7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class hZ extends l9{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ZJ.DEFAULT_UP),this.updateMatrix(),this.target=new ZJ,this.shadow=new RX}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class bZ extends l9{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}class xZ extends l9{constructor(J,Q,$=10,W=10){super(J,Q);this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=$,this.height=W}get power(){return this.intensity*this.width*this.height*Math.PI}set power(J){this.intensity=J/(this.width*this.height*Math.PI)}copy(J){return super.copy(J),this.width=J.width,this.height=J.height,this}toJSON(J){let Q=super.toJSON(J);return Q.object.width=this.width,Q.object.height=this.height,Q}}class Z${constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let J=0;J<9;J++)this.coefficients.push(new P)}set(J){for(let Q=0;Q<9;Q++)this.coefficients[Q].copy(J[Q]);return this}zero(){for(let J=0;J<9;J++)this.coefficients[J].set(0,0,0);return this}getAt(J,Q){let{x:$,y:W,z:Z}=J,K=this.coefficients;return Q.copy(K[0]).multiplyScalar(0.282095),Q.addScaledVector(K[1],0.488603*W),Q.addScaledVector(K[2],0.488603*Z),Q.addScaledVector(K[3],0.488603*$),Q.addScaledVector(K[4],1.092548*($*W)),Q.addScaledVector(K[5],1.092548*(W*Z)),Q.addScaledVector(K[6],0.315392*(3*Z*Z-1)),Q.addScaledVector(K[7],1.092548*($*Z)),Q.addScaledVector(K[8],0.546274*($*$-W*W)),Q}getIrradianceAt(J,Q){let{x:$,y:W,z:Z}=J,K=this.coefficients;return Q.copy(K[0]).multiplyScalar(0.886227),Q.addScaledVector(K[1],1.023328*W),Q.addScaledVector(K[2],1.023328*Z),Q.addScaledVector(K[3],1.023328*$),Q.addScaledVector(K[4],0.858086*$*W),Q.addScaledVector(K[5],0.858086*W*Z),Q.addScaledVector(K[6],0.743125*Z*Z-0.247708),Q.addScaledVector(K[7],0.858086*$*Z),Q.addScaledVector(K[8],0.429043*($*$-W*W)),Q}add(J){for(let Q=0;Q<9;Q++)this.coefficients[Q].add(J.coefficients[Q]);return this}addScaledSH(J,Q){for(let $=0;$<9;$++)this.coefficients[$].addScaledVector(J.coefficients[$],Q);return this}scale(J){for(let Q=0;Q<9;Q++)this.coefficients[Q].multiplyScalar(J);return this}lerp(J,Q){for(let $=0;$<9;$++)this.coefficients[$].lerp(J.coefficients[$],Q);return this}equals(J){for(let Q=0;Q<9;Q++)if(!this.coefficients[Q].equals(J.coefficients[Q]))return!1;return!0}copy(J){return this.set(J.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(J,Q=0){let $=this.coefficients;for(let W=0;W<9;W++)$[W].fromArray(J,Q+W*3);return this}toArray(J=[],Q=0){let $=this.coefficients;for(let W=0;W<9;W++)$[W].toArray(J,Q+W*3);return J}static getBasisAt(J,Q){let{x:$,y:W,z:Z}=J;Q[0]=0.282095,Q[1]=0.488603*W,Q[2]=0.488603*Z,Q[3]=0.488603*$,Q[4]=1.092548*$*W,Q[5]=1.092548*W*Z,Q[6]=0.315392*(3*Z*Z-1),Q[7]=1.092548*$*Z,Q[8]=0.546274*($*$-W*W)}}class gZ extends l9{constructor(J=new Z$,Q=1){super(void 0,Q);this.isLightProbe=!0,this.sh=J}copy(J){return super.copy(J),this.sh.copy(J.sh),this}toJSON(J){let Q=super.toJSON(J);return Q.object.sh=this.sh.toArray(),Q}}var FH={};class K$ extends cJ{constructor(J){super(J);this.textures={}}load(J,Q,$,W){let Z=this,K=new B9(Z.manager);K.setPath(Z.path),K.setRequestHeader(Z.requestHeader),K.setWithCredentials(Z.withCredentials),K.load(J,function(H){try{Q(Z.parse(JSON.parse(H)))}catch(Y){if(W)W(Y);else S0(Y);Z.manager.itemError(J)}},$,W)}parse(J){let Q=this.createMaterialFromType(J.type);return Q.fromJSON(J,this.textures),Q}setTextures(J){return this.textures=J,this}createMaterialFromType(J){return K$.createMaterialFromType(J)}static createMaterialFromType(J){let $={ShadowMaterial:LZ,SpriteMaterial:wQ,RawShaderMaterial:aQ,ShaderMaterial:Q9,PointsMaterial:SQ,MeshPhysicalMaterial:BZ,MeshStandardMaterial:rQ,MeshPhongMaterial:IZ,MeshToonMaterial:zZ,MeshNormalMaterial:AZ,MeshLambertMaterial:CZ,MeshDepthMaterial:tQ,MeshDistanceMaterial:eQ,MeshBasicMaterial:m9,MeshMatcapMaterial:wZ,LineDashedMaterial:_Z,LineBasicMaterial:gJ,Material:jJ,...FH}[J],W;if($===void 0)b9(`MaterialLoader: Unknown material type "${J}". Use .registerMaterial() before starting the deserialization process.`),W=new jJ;else W=new $;return W}static registerMaterial(J,Q){FH[J]=Q}}class UQ{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}class pZ extends c0{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(J){return super.copy(J),this.instanceCount=J.instanceCount,this}toJSON(){let J=super.toJSON();return J.instanceCount=this.instanceCount,J.isInstancedBufferGeometry=!0,J}}class mZ extends cJ{constructor(J){super(J)}load(J,Q,$,W){let Z=this,K=new B9(Z.manager);K.setPath(Z.path),K.setRequestHeader(Z.requestHeader),K.setWithCredentials(Z.withCredentials),K.load(J,function(H){try{Q(Z.parse(JSON.parse(H)))}catch(Y){if(W)W(Y);else S0(Y);Z.manager.itemError(J)}},$,W)}parse(J){let Q={},$={};function W(G,q){if(Q[q]!==void 0)return Q[q];let R=G.interleavedBuffers[q],D=Z(G,R.buffer),F=Z7(R.type,D),V=new J6(F,R.stride);if(V.uuid=R.uuid,R.usage!==void 0)V.setUsage(R.usage);return Q[q]=V,V}function Z(G,q){if($[q]!==void 0)return $[q];let R=G.arrayBuffers[q],D=new Uint32Array(R).buffer;return $[q]=D,D}let K=J.isInstancedBufferGeometry?new pZ:new c0,H=J.data.index;if(H!==void 0){let G=Z7(H.type,H.array);K.setIndex(new qJ(G,1))}let Y=J.data.attributes;for(let G in Y){let q=Y[G],O;if(q.isInterleavedBufferAttribute){let R=W(J.data,q.data);O=new V8(R,q.itemSize,q.offset,q.normalized)}else{let R=Z7(q.type,q.array);O=new(q.isInstancedBufferAttribute?B8:qJ)(R,q.itemSize,q.normalized)}if(q.name!==void 0)O.name=q.name;if(q.usage!==void 0)O.setUsage(q.usage);if(q.gpuType!==void 0)O.gpuType=q.gpuType;K.setAttribute(G,O)}let X=J.data.morphAttributes;if(X)for(let G in X){let q=X[G],O=[];for(let R=0,D=q.length;R<D;R++){let F=q[R],V;if(F.isInterleavedBufferAttribute){let A=W(J.data,F.data);V=new V8(A,F.itemSize,F.offset,F.normalized)}else{let A=Z7(F.type,F.array);V=new qJ(A,F.itemSize,F.normalized)}if(F.name!==void 0)V.name=F.name;if(F.usage!==void 0)V.setUsage(F.usage);if(F.gpuType!==void 0)V.gpuType=F.gpuType;O.push(V)}K.morphAttributes[G]=O}if(J.data.morphTargetsRelative)K.morphTargetsRelative=!0;let N=J.data.groups||J.data.drawcalls||J.data.offsets;if(N!==void 0)for(let G=0,q=N.length;G!==q;++G){let O=N[G];K.addGroup(O.start,O.count,O.materialIndex)}let E=J.data.boundingSphere;if(E!==void 0)K.boundingSphere=new SJ().fromJSON(E);if(J.name)K.name=J.name;if(J.userData)K.userData=J.userData;return K}}var u$={};class MX extends cJ{constructor(J){super(J)}load(J,Q,$,W){let Z=this,K=this.path===""?UQ.extractUrlBase(J):this.path;this.resourcePath=this.resourcePath||K;let H=new B9(this.manager);H.setPath(this.path),H.setRequestHeader(this.requestHeader),H.setWithCredentials(this.withCredentials),H.load(J,function(Y){let X=null;try{X=JSON.parse(Y)}catch(N){if(W!==void 0)W(N);S0("ObjectLoader: Can't parse "+J+".",N.message);return}let U=X.metadata;if(U===void 0||U.type===void 0||U.type.toLowerCase()==="geometry"){if(W!==void 0)W(Error("THREE.ObjectLoader: Can't load "+J));S0("ObjectLoader: Can't load "+J);return}Z.parse(X,Q)},$,W)}async loadAsync(J,Q){let $=this,W=this.path===""?UQ.extractUrlBase(J):this.path;this.resourcePath=this.resourcePath||W;let Z=new B9(this.manager);Z.setPath(this.path),Z.setRequestHeader(this.requestHeader),Z.setWithCredentials(this.withCredentials);let K=await Z.loadAsync(J,Q),H;try{H=JSON.parse(K)}catch(X){throw Error("THREE.ObjectLoader: Can't parse "+J+". "+X.message)}let Y=H.metadata;if(Y===void 0||Y.type===void 0||Y.type.toLowerCase()==="geometry")throw Error("THREE.ObjectLoader: Can't load "+J);return await $.parseAsync(H)}parse(J,Q){let $=this.parseAnimations(J.animations),W=this.parseShapes(J.shapes),Z=this.parseGeometries(J.geometries,W),K=this.parseImages(J.images,function(){if(Q!==void 0)Q(X)}),H=this.parseTextures(J.textures,K),Y=this.parseMaterials(J.materials,H),X=this.parseObject(J.object,Z,Y,H,$),U=this.parseSkeletons(J.skeletons,X);if(this.bindSkeletons(X,U),this.bindLightTargets(X),Q!==void 0){let N=!1;for(let E in K)if(K[E].data instanceof HTMLImageElement){N=!0;break}if(N===!1)Q(X)}return X}async parseAsync(J){let Q=this.parseAnimations(J.animations),$=this.parseShapes(J.shapes),W=this.parseGeometries(J.geometries,$),Z=await this.parseImagesAsync(J.images),K=this.parseTextures(J.textures,Z),H=this.parseMaterials(J.materials,K),Y=this.parseObject(J.object,W,H,K,Q),X=this.parseSkeletons(J.skeletons,Y);return this.bindSkeletons(Y,X),this.bindLightTargets(Y),Y}static registerGeometry(J,Q){u$[J]=Q}parseShapes(J){let Q={};if(J!==void 0)for(let $=0,W=J.length;$<W;$++){let Z=new R7().fromJSON(J[$]);Q[Z.uuid]=Z}return Q}parseSkeletons(J,Q){let $={},W={};if(Q.traverse(function(Z){if(Z.isBone)W[Z.uuid]=Z}),J!==void 0)for(let Z=0,K=J.length;Z<K;Z++){let H=new PQ().fromJSON(J[Z],W);$[H.uuid]=H}return $}parseGeometries(J,Q){let $={};if(J!==void 0){let W=new mZ;for(let Z=0,K=J.length;Z<K;Z++){let H,Y=J[Z];switch(Y.type){case"BufferGeometry":case"InstancedBufferGeometry":H=W.parse(Y);break;default:if(Y.type in HH)H=HH[Y.type].fromJSON(Y,Q);else if(Y.type in u$)H=u$[Y.type].fromJSON(Y,Q);else N0(`ObjectLoader: Unknown geometry type "${Y.type}". Use .registerGeometry() before starting the deserialization process.`)}if(H.uuid=Y.uuid,Y.name!==void 0)H.name=Y.name;if(Y.userData!==void 0)H.userData=Y.userData;$[Y.uuid]=H}}return $}parseMaterials(J,Q){let $={},W={};if(J!==void 0){let Z=new K$;Z.setTextures(Q);for(let K=0,H=J.length;K<H;K++){let Y=J[K];if($[Y.uuid]===void 0)$[Y.uuid]=Z.parse(Y);W[Y.uuid]=$[Y.uuid]}}return W}parseAnimations(J){let Q={};if(J!==void 0)for(let $=0;$<J.length;$++){let W=J[$],Z=U7.parse(W);Q[Z.uuid]=Z}return Q}parseImages(J,Q){let $=this,W={},Z;function K(Y){return Y=$.manager.resolveURL(Y),$.manager.itemStart(Y),Z.load(Y,function(){$.manager.itemEnd(Y)},void 0,function(){$.manager.itemError(Y),$.manager.itemEnd(Y)})}function H(Y){if(typeof Y==="string"){let X=Y,U=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(X)?X:$.resourcePath+X;return K(U)}else if(Y.data)return{data:Z7(Y.type,Y.data),width:Y.width,height:Y.height};else return null}if(J!==void 0&&J.length>0){let Y=new W$(Q);Z=new G7(Y),Z.setCrossOrigin(this.crossOrigin);for(let X=0,U=J.length;X<U;X++){let N=J[X],E=N.url;if(Array.isArray(E)){let G=[];for(let q=0,O=E.length;q<O;q++){let R=E[q],D=H(R);if(D!==null)if(D instanceof HTMLImageElement)G.push(D);else G.push(new J9(D.data,D.width,D.height))}W[N.uuid]=new L9(G)}else{let G=H(N.url);W[N.uuid]=new L9(G)}}}return W}async parseImagesAsync(J){let Q=this,$={},W;async function Z(K){if(typeof K==="string"){let H=K,Y=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(H)?H:Q.resourcePath+H;return await W.loadAsync(Y)}else if(K.data)return{data:Z7(K.type,K.data),width:K.width,height:K.height};else return null}if(J!==void 0&&J.length>0){W=new G7(this.manager),W.setCrossOrigin(this.crossOrigin);for(let K=0,H=J.length;K<H;K++){let Y=J[K],X=Y.url;if(Array.isArray(X)){let U=[];for(let N=0,E=X.length;N<E;N++){let G=X[N],q=await Z(G);if(q!==null)if(q instanceof HTMLImageElement)U.push(q);else U.push(new J9(q.data,q.width,q.height))}$[Y.uuid]=new L9(U)}else{let U=await Z(Y.url);$[Y.uuid]=new L9(U)}}}return $}parseTextures(J,Q){function $(Z,K){if(typeof Z==="number")return Z;return N0("ObjectLoader.parseTexture: Constant should be in numeric form.",Z),K[Z]}let W={};if(J!==void 0)for(let Z=0,K=J.length;Z<K;Z++){let H=J[Z];if(H.image===void 0)N0('ObjectLoader: No "image" specified for',H.uuid);if(Q[H.image]===void 0)N0("ObjectLoader: Undefined image",H.image);let Y=Q[H.image],X=Y.data,U;if(Array.isArray(X)){if(U=new O7,X.length===6)U.needsUpdate=!0}else{if(X&&X.data)U=new J9;else U=new LJ;if(X)U.needsUpdate=!0}if(U.source=Y,U.uuid=H.uuid,H.name!==void 0)U.name=H.name;if(H.mapping!==void 0)U.mapping=$(H.mapping,j5);if(H.channel!==void 0)U.channel=H.channel;if(H.offset!==void 0)U.offset.fromArray(H.offset);if(H.repeat!==void 0)U.repeat.fromArray(H.repeat);if(H.center!==void 0)U.center.fromArray(H.center);if(H.rotation!==void 0)U.rotation=H.rotation;if(H.wrap!==void 0)U.wrapS=$(H.wrap[0],DH),U.wrapT=$(H.wrap[1],DH);if(H.format!==void 0)U.format=H.format;if(H.internalFormat!==void 0)U.internalFormat=H.internalFormat;if(H.type!==void 0)U.type=H.type;if(H.colorSpace!==void 0)U.colorSpace=H.colorSpace;if(H.minFilter!==void 0)U.minFilter=$(H.minFilter,OH);if(H.magFilter!==void 0)U.magFilter=$(H.magFilter,OH);if(H.anisotropy!==void 0)U.anisotropy=H.anisotropy;if(H.flipY!==void 0)U.flipY=H.flipY;if(H.generateMipmaps!==void 0)U.generateMipmaps=H.generateMipmaps;if(H.premultiplyAlpha!==void 0)U.premultiplyAlpha=H.premultiplyAlpha;if(H.unpackAlignment!==void 0)U.unpackAlignment=H.unpackAlignment;if(H.compareFunction!==void 0)U.compareFunction=H.compareFunction;if(H.normalized!==void 0)U.normalized=H.normalized;if(H.userData!==void 0)U.userData=H.userData;W[H.uuid]=U}return W}parseObject(J,Q,$,W,Z){let K;function H(E){if(Q[E]===void 0)N0("ObjectLoader: Undefined geometry",E);return Q[E]}function Y(E){if(E===void 0)return;if(Array.isArray(E)){let G=[];for(let q=0,O=E.length;q<O;q++){let R=E[q];if($[R]===void 0)N0("ObjectLoader: Undefined material",R);G.push($[R])}return G}if($[E]===void 0)N0("ObjectLoader: Undefined material",E);return $[E]}function X(E){if(W[E]===void 0)N0("ObjectLoader: Undefined texture",E);return W[E]}let U,N;switch(J.type){case"Scene":if(K=new $Z,J.background!==void 0)if(Number.isInteger(J.background))K.background=new B0(J.background);else K.background=X(J.background);if(J.environment!==void 0)K.environment=X(J.environment);if(J.fog!==void 0){if(J.fog.type==="Fog")K.fog=new zQ(J.fog.color,J.fog.near,J.fog.far);else if(J.fog.type==="FogExp2")K.fog=new IQ(J.fog.color,J.fog.density);if(J.fog.name!=="")K.fog.name=J.fog.name}if(J.backgroundBlurriness!==void 0)K.backgroundBlurriness=J.backgroundBlurriness;if(J.backgroundIntensity!==void 0)K.backgroundIntensity=J.backgroundIntensity;if(J.backgroundRotation!==void 0)K.backgroundRotation.fromArray(J.backgroundRotation);if(J.environmentIntensity!==void 0)K.environmentIntensity=J.environmentIntensity;if(J.environmentRotation!==void 0)K.environmentRotation.fromArray(J.environmentRotation);break;case"PerspectiveCamera":if(K=new TJ(J.fov,J.aspect,J.near,J.far),J.focus!==void 0)K.focus=J.focus;if(J.zoom!==void 0)K.zoom=J.zoom;if(J.filmGauge!==void 0)K.filmGauge=J.filmGauge;if(J.filmOffset!==void 0)K.filmOffset=J.filmOffset;if(J.view!==void 0)K.view=Object.assign({},J.view);break;case"OrthographicCamera":if(K=new k7(J.left,J.right,J.top,J.bottom,J.near,J.far),J.zoom!==void 0)K.zoom=J.zoom;if(J.view!==void 0)K.view=Object.assign({},J.view);break;case"AmbientLight":K=new bZ(J.color,J.intensity);break;case"DirectionalLight":K=new hZ(J.color,J.intensity),K.target=J.target||"";break;case"PointLight":K=new fZ(J.color,J.intensity,J.distance,J.decay);break;case"RectAreaLight":K=new xZ(J.color,J.intensity,J.width,J.height);break;case"SpotLight":K=new vZ(J.color,J.intensity,J.distance,J.angle,J.penumbra,J.decay),K.target=J.target||"";break;case"HemisphereLight":K=new yZ(J.color,J.groundColor,J.intensity);break;case"LightProbe":let E=new Z$().fromArray(J.sh);K=new gZ(E,J.intensity);break;case"SkinnedMesh":if(U=H(J.geometry),N=Y(J.material),K=new KZ(U,N),J.bindMode!==void 0)K.bindMode=J.bindMode;if(J.bindMatrix!==void 0)K.bindMatrix.fromArray(J.bindMatrix);if(J.skeleton!==void 0)K.skeleton=J.skeleton;break;case"Mesh":U=H(J.geometry),N=Y(J.material),K=new zJ(U,N);break;case"InstancedMesh":U=H(J.geometry),N=Y(J.material);let{count:G,instanceMatrix:q,instanceColor:O}=J;if(K=new HZ(U,N,G),K.instanceMatrix=new B8(new Float32Array(q.array),16),O!==void 0)K.instanceColor=new B8(new Float32Array(O.array),O.itemSize);break;case"BatchedMesh":if(U=H(J.geometry),N=Y(J.material),K=new YZ(J.maxInstanceCount,J.maxVertexCount,J.maxIndexCount,N),K.geometry=U,K.perObjectFrustumCulled=J.perObjectFrustumCulled,K.sortObjects=J.sortObjects,K._drawRanges=J.drawRanges,K._reservedRanges=J.reservedRanges,K._geometryInfo=J.geometryInfo.map((R)=>{let D=null,F=null;if(R.boundingBox!==void 0)D=new yJ().fromJSON(R.boundingBox);if(R.boundingSphere!==void 0)F=new SJ().fromJSON(R.boundingSphere);return{...R,boundingBox:D,boundingSphere:F}}),K._instanceInfo=J.instanceInfo,K._availableInstanceIds=J._availableInstanceIds,K._availableGeometryIds=J._availableGeometryIds,K._nextIndexStart=J.nextIndexStart,K._nextVertexStart=J.nextVertexStart,K._geometryCount=J.geometryCount,K._maxInstanceCount=J.maxInstanceCount,K._maxVertexCount=J.maxVertexCount,K._maxIndexCount=J.maxIndexCount,K._geometryInitialized=J.geometryInitialized,K._matricesTexture=X(J.matricesTexture.uuid),K._indirectTexture=X(J.indirectTexture.uuid),J.colorsTexture!==void 0)K._colorsTexture=X(J.colorsTexture.uuid);if(J.boundingSphere!==void 0)K.boundingSphere=new SJ().fromJSON(J.boundingSphere);if(J.boundingBox!==void 0)K.boundingBox=new yJ().fromJSON(J.boundingBox);break;case"LOD":K=new ZZ;break;case"Line":K=new g9(H(J.geometry),Y(J.material));break;case"LineLoop":K=new XZ(H(J.geometry),Y(J.material));break;case"LineSegments":K=new D9(H(J.geometry),Y(J.material));break;case"PointCloud":case"Points":K=new UZ(H(J.geometry),Y(J.material));break;case"Sprite":K=new WZ(Y(J.material));break;case"Group":K=new M8;break;case"Bone":K=new _Q;break;default:K=new ZJ}if(K.uuid=J.uuid,J.name!==void 0)K.name=J.name;if(J.matrix!==void 0){if(K.matrix.fromArray(J.matrix),J.matrixAutoUpdate!==void 0)K.matrixAutoUpdate=J.matrixAutoUpdate;if(K.matrixAutoUpdate)K.matrix.decompose(K.position,K.quaternion,K.scale)}else{if(J.position!==void 0)K.position.fromArray(J.position);if(J.rotation!==void 0)K.rotation.fromArray(J.rotation);if(J.quaternion!==void 0)K.quaternion.fromArray(J.quaternion);if(J.scale!==void 0)K.scale.fromArray(J.scale)}if(J.up!==void 0)K.up.fromArray(J.up);if(J.pivot!==void 0)K.pivot=new P().fromArray(J.pivot);if(J.morphTargetDictionary!==void 0)K.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);if(J.morphTargetInfluences!==void 0)K.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.castShadow!==void 0)K.castShadow=J.castShadow;if(J.receiveShadow!==void 0)K.receiveShadow=J.receiveShadow;if(J.shadow){if(J.shadow.intensity!==void 0)K.shadow.intensity=J.shadow.intensity;if(J.shadow.bias!==void 0)K.shadow.bias=J.shadow.bias;if(J.shadow.normalBias!==void 0)K.shadow.normalBias=J.shadow.normalBias;if(J.shadow.radius!==void 0)K.shadow.radius=J.shadow.radius;if(J.shadow.blurSamples!==void 0)K.shadow.blurSamples=J.shadow.blurSamples;if(J.shadow.focus!==void 0)K.shadow.focus=J.shadow.focus;if(J.shadow.aspect!==void 0)K.shadow.aspect=J.shadow.aspect;if(J.shadow.mapSize!==void 0)K.shadow.mapSize.fromArray(J.shadow.mapSize);if(J.shadow.camera!==void 0)K.shadow.camera=this.parseObject(J.shadow.camera)}if(J.visible!==void 0)K.visible=J.visible;if(J.frustumCulled!==void 0)K.frustumCulled=J.frustumCulled;if(J.renderOrder!==void 0)K.renderOrder=J.renderOrder;if(J.static!==void 0)K.static=J.static;if(J.userData!==void 0)K.userData=J.userData;if(J.layers!==void 0)K.layers.mask=J.layers;if(J.children!==void 0){let E=J.children;for(let G=0;G<E.length;G++)K.add(this.parseObject(E[G],Q,$,W,Z))}if(J.animations!==void 0){let E=J.animations;for(let G=0;G<E.length;G++){let q=E[G];K.animations.push(Z[q])}}if(J.type==="LOD"){if(J.autoUpdate!==void 0)K.autoUpdate=J.autoUpdate;let E=J.levels;for(let G=0;G<E.length;G++){let q=E[G],O=K.getObjectByProperty("uuid",q.object);if(O!==void 0)K.addLevel(O,q.distance,q.hysteresis)}}return K}bindSkeletons(J,Q){if(Object.keys(Q).length===0)return;J.traverse(function($){if($.isSkinnedMesh===!0&&$.skeleton!==void 0){let W=Q[$.skeleton];if(W===void 0)N0("ObjectLoader: No skeleton found with UUID:",$.skeleton);else $.bind(W,$.bindMatrix)}})}bindLightTargets(J){J.traverse(function(Q){if(Q.isDirectionalLight||Q.isSpotLight){let $=Q.target,W=J.getObjectByProperty("uuid",$);if(W!==void 0)Q.target=W;else Q.target=new ZJ}})}}var j5={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,CubeUVReflectionMapping:306},DH={RepeatWrapping:1000,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},OH={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,LinearFilter:1006,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:1008},c$=new WeakMap;class kX extends cJ{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")N0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")N0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,K=V9.get(`image-bitmap:${J}`);if(K!==void 0){if(Z.manager.itemStart(J),K.then){K.then((X)=>{if(c$.has(K)===!0){if(W)W(c$.get(K));Z.manager.itemError(J),Z.manager.itemEnd(J)}else{if(Q)Q(X);Z.manager.itemEnd(J)}});return}setTimeout(function(){if(Q)Q(K);Z.manager.itemEnd(J)},0);return}let H={};H.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",H.headers=this.requestHeader,H.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let Y=fetch(J,H).then(function(X){return X.blob()}).then(function(X){return createImageBitmap(X,Object.assign({},Z.options,{colorSpaceConversion:"none"}))}).then(function(X){if(V9.add(`image-bitmap:${J}`,X),Q)Q(X);return Z.manager.itemEnd(J),X}).catch(function(X){if(W)W(X);c$.set(Y,X),V9.remove(`image-bitmap:${J}`),Z.manager.itemError(J),Z.manager.itemEnd(J)});V9.add(`image-bitmap:${J}`,Y),Z.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var e6;class H${static getContext(){if(e6===void 0)e6=new(window.AudioContext||window.webkitAudioContext);return e6}static setContext(J){e6=J}}class LX extends cJ{constructor(J){super(J)}load(J,Q,$,W){let Z=this,K=new B9(this.manager);K.setResponseType("arraybuffer"),K.setPath(this.path),K.setRequestHeader(this.requestHeader),K.setWithCredentials(this.withCredentials),K.load(J,function(Y){try{let X=Y.slice(0),U=H$.getContext(),N=J+"#decode";Z.manager.itemStart(N),U.decodeAudioData(X,function(E){Q(E),Z.manager.itemEnd(N)}).catch(function(E){H(E),Z.manager.itemEnd(N)})}catch(X){H(X)}},$,W);function H(Y){if(W)W(Y);else S0(Y);Z.manager.itemError(J)}}}var RH=new l0,MH=new l0,E8=new l0;class VX{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=0.064,this.cameraL=new TJ,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new TJ,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(J){let Q=this._cache;if(Q.focus!==J.focus||Q.fov!==J.fov||Q.aspect!==J.aspect*this.aspect||Q.near!==J.near||Q.far!==J.far||Q.zoom!==J.zoom||Q.eyeSep!==this.eyeSep){Q.focus=J.focus,Q.fov=J.fov,Q.aspect=J.aspect*this.aspect,Q.near=J.near,Q.far=J.far,Q.zoom=J.zoom,Q.eyeSep=this.eyeSep,E8.copy(J.projectionMatrix);let W=Q.eyeSep/2,Z=W*Q.near/Q.focus,K=Q.near*Math.tan(k8*Q.fov*0.5)/Q.zoom,H,Y;MH.elements[12]=-W,RH.elements[12]=W,H=-K*Q.aspect+Z,Y=K*Q.aspect+Z,E8.elements[0]=2*Q.near/(Y-H),E8.elements[8]=(Y+H)/(Y-H),this.cameraL.projectionMatrix.copy(E8),H=-K*Q.aspect-Z,Y=K*Q.aspect-Z,E8.elements[0]=2*Q.near/(Y-H),E8.elements[8]=(Y+H)/(Y-H),this.cameraR.projectionMatrix.copy(E8)}this.cameraL.matrix.copy(J.matrixWorld).multiply(MH),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(J.matrixWorld).multiply(RH),this.cameraR.matrixWorldNeedsUpdate=!0}}var J7=-90,Q7=1;class lZ extends ZJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let W=new TJ(J7,Q7,J,Q);W.layers=this.layers,this.add(W);let Z=new TJ(J7,Q7,J,Q);Z.layers=this.layers,this.add(Z);let K=new TJ(J7,Q7,J,Q);K.layers=this.layers,this.add(K);let H=new TJ(J7,Q7,J,Q);H.layers=this.layers,this.add(H);let Y=new TJ(J7,Q7,J,Q);Y.layers=this.layers,this.add(Y);let X=new TJ(J7,Q7,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,W,Z,K,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),W.up.set(0,1,0),W.lookAt(-1,0,0),Z.up.set(0,0,-1),Z.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),W.up.set(0,-1,0),W.lookAt(1,0,0),Z.up.set(0,0,1),Z.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:W}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[Z,K,H,Y,X,U]=this.children,N=J.getRenderTarget(),E=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),q=J.xr.enabled;J.xr.enabled=!1;let O=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let R=!1;if(J.isWebGLRenderer===!0)R=J.state.buffers.depth.getReversed();else R=J.reversedDepthBuffer;if(J.setRenderTarget($,0,W),R&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Z),J.setRenderTarget($,1,W),R&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,2,W),R&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,W),R&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,W),R&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.generateMipmaps=O,J.setRenderTarget($,5,W),R&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(N,E,G),J.xr.enabled=q,$.texture.needsPMREMUpdate=!0}}class dZ extends TJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class uZ{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(J){if(this._document=J,J.hidden!==void 0)this._pageVisibilityHandler=y5.bind(this),J.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(J){return this._timescale=J,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(J){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(J!==void 0?J:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function y5(){if(this._document.hidden===!1)this.reset()}var q8=new P,n$=new xJ,v5=new P,F8=new P,D8=new P;class BX extends ZJ{constructor(){super();this.type="AudioListener",this.context=H$.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new uZ}getInput(){return this.gain}removeFilter(){if(this.filter!==null)this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null;return this}getFilter(){return this.filter}setFilter(J){if(this.filter!==null)this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination);else this.gain.disconnect(this.context.destination);return this.filter=J,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(J){return this.gain.gain.setTargetAtTime(J,this.context.currentTime,0.01),this}updateMatrixWorld(J){super.updateMatrixWorld(J),this._timer.update();let Q=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(q8,n$,v5),F8.set(0,0,-1).applyQuaternion(n$),D8.set(0,1,0).applyQuaternion(n$),Q.positionX){let $=this.context.currentTime+this.timeDelta;Q.positionX.linearRampToValueAtTime(q8.x,$),Q.positionY.linearRampToValueAtTime(q8.y,$),Q.positionZ.linearRampToValueAtTime(q8.z,$),Q.forwardX.linearRampToValueAtTime(F8.x,$),Q.forwardY.linearRampToValueAtTime(F8.y,$),Q.forwardZ.linearRampToValueAtTime(F8.z,$),Q.upX.linearRampToValueAtTime(D8.x,$),Q.upY.linearRampToValueAtTime(D8.y,$),Q.upZ.linearRampToValueAtTime(D8.z,$)}else Q.setPosition(q8.x,q8.y,q8.z),Q.setOrientation(F8.x,F8.y,F8.z,D8.x,D8.y,D8.z)}}class cZ extends ZJ{constructor(J){super();this.type="Audio",this.listener=J,this.context=J.context,this.gain=this.context.createGain(),this.gain.connect(J.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(J){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=J,this.connect(),this}setMediaElementSource(J){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(J),this.connect(),this}setMediaStreamSource(J){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(J),this.connect(),this}setBuffer(J){if(this.buffer=J,this.sourceType="buffer",this.autoplay)this.play();return this}play(J=0){if(this.isPlaying===!0){N0("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){N0("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+J;let Q=this.context.createBufferSource();return Q.buffer=this.buffer,Q.loop=this.loop,Q.loopStart=this.loopStart,Q.loopEnd=this.loopEnd,Q.onended=this.onEnded.bind(this),Q.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=Q,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){N0("Audio: this Audio has no playback control.");return}if(this.isPlaying===!0){if(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0)this._progress=this._progress%(this.duration||this.buffer.duration);this.source.stop(),this.source.onended=null,this.isPlaying=!1}return this}stop(J=0){if(this.hasPlaybackControl===!1){N0("Audio: this Audio has no playback control.");return}if(this._progress=0,this.source!==null)this.source.stop(this.context.currentTime+J),this.source.onended=null;return this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let J=1,Q=this.filters.length;J<Q;J++)this.filters[J-1].connect(this.filters[J]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected===!1)return;if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let J=1,Q=this.filters.length;J<Q;J++)this.filters[J-1].disconnect(this.filters[J]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(J){if(!J)J=[];if(this._connected===!0)this.disconnect(),this.filters=J.slice(),this.connect();else this.filters=J.slice();return this}setDetune(J){if(this.detune=J,this.isPlaying===!0&&this.source.detune!==void 0)this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,0.01);return this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(J){return this.setFilters(J?[J]:[])}setPlaybackRate(J){if(this.hasPlaybackControl===!1){N0("Audio: this Audio has no playback control.");return}if(this.playbackRate=J,this.isPlaying===!0)this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,0.01);return this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){if(this.hasPlaybackControl===!1)return N0("Audio: this Audio has no playback control."),!1;return this.loop}setLoop(J){if(this.hasPlaybackControl===!1){N0("Audio: this Audio has no playback control.");return}if(this.loop=J,this.isPlaying===!0)this.source.loop=this.loop;return this}setLoopStart(J){return this.loopStart=J,this}setLoopEnd(J){return this.loopEnd=J,this}getVolume(){return this.gain.gain.value}setVolume(J){return this.gain.gain.setTargetAtTime(J,this.context.currentTime,0.01),this}copy(J,Q){if(super.copy(J,Q),J.sourceType!=="buffer")return N0("Audio: Audio source type cannot be copied."),this;return this.autoplay=J.autoplay,this.buffer=J.buffer,this.detune=J.detune,this.loop=J.loop,this.loopStart=J.loopStart,this.loopEnd=J.loopEnd,this.offset=J.offset,this.duration=J.duration,this.playbackRate=J.playbackRate,this.hasPlaybackControl=J.hasPlaybackControl,this.sourceType=J.sourceType,this.filters=J.filters.slice(),this}clone(J){return new this.constructor(this.listener).copy(this,J)}}var O8=new P,kH=new xJ,f5=new P,R8=new P;class IX extends cZ{constructor(J){super(J);this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(J){return this.panner.refDistance=J,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(J){return this.panner.rolloffFactor=J,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(J){return this.panner.distanceModel=J,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(J){return this.panner.maxDistance=J,this}setDirectionalCone(J,Q,$){return this.panner.coneInnerAngle=J,this.panner.coneOuterAngle=Q,this.panner.coneOuterGain=$,this}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(O8,kH,f5),R8.set(0,0,1).applyQuaternion(kH);let Q=this.panner;if(Q.positionX){let $=this.context.currentTime+this.listener.timeDelta;Q.positionX.linearRampToValueAtTime(O8.x,$),Q.positionY.linearRampToValueAtTime(O8.y,$),Q.positionZ.linearRampToValueAtTime(O8.z,$),Q.orientationX.linearRampToValueAtTime(R8.x,$),Q.orientationY.linearRampToValueAtTime(R8.y,$),Q.orientationZ.linearRampToValueAtTime(R8.z,$)}else Q.setPosition(O8.x,O8.y,O8.z),Q.setOrientation(R8.x,R8.y,R8.z)}}class zX{constructor(J,Q=2048){this.analyser=J.context.createAnalyser(),this.analyser.fftSize=Q,this.data=new Uint8Array(this.analyser.frequencyBinCount),J.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let J=0,Q=this.getFrequencyData();for(let $=0;$<Q.length;$++)J+=Q[$];return J/Q.length}}class nZ{constructor(J,Q,$){this.binding=J,this.valueSize=$;let W,Z,K;switch(Q){case"quaternion":W=this._slerp,Z=this._slerpAdditive,K=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array($*6),this._workIndex=5;break;case"string":case"bool":W=this._select,Z=this._select,K=this._setAdditiveIdentityOther,this.buffer=Array($*5);break;default:W=this._lerp,Z=this._lerpAdditive,K=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array($*5)}this._mixBufferRegion=W,this._mixBufferRegionAdditive=Z,this._setIdentity=K,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,Q){let $=this.buffer,W=this.valueSize,Z=J*W+W,K=this.cumulativeWeight;if(K===0){for(let H=0;H!==W;++H)$[Z+H]=$[H];K=Q}else{K+=Q;let H=Q/K;this._mixBufferRegion($,Z,0,H,W)}this.cumulativeWeight=K}accumulateAdditive(J){let Q=this.buffer,$=this.valueSize,W=$*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(Q,W,0,J,$),this.cumulativeWeightAdditive+=J}apply(J){let Q=this.valueSize,$=this.buffer,W=J*Q+Q,Z=this.cumulativeWeight,K=this.cumulativeWeightAdditive,H=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,Z<1){let Y=Q*this._origIndex;this._mixBufferRegion($,W,Y,1-Z,Q)}if(K>0)this._mixBufferRegionAdditive($,W,this._addIndex*Q,1,Q);for(let Y=Q,X=Q+Q;Y!==X;++Y)if($[Y]!==$[Y+Q]){H.setValue($,W);break}}saveOriginalState(){let J=this.binding,Q=this.buffer,$=this.valueSize,W=$*this._origIndex;J.getValue(Q,W);for(let Z=$,K=W;Z!==K;++Z)Q[Z]=Q[W+Z%$];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,Q=J+this.valueSize;for(let $=J;$<Q;$++)this.buffer[$]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,Q=this._addIndex*this.valueSize;for(let $=0;$<this.valueSize;$++)this.buffer[Q+$]=this.buffer[J+$]}_select(J,Q,$,W,Z){if(W>=0.5)for(let K=0;K!==Z;++K)J[Q+K]=J[$+K]}_slerp(J,Q,$,W){xJ.slerpFlat(J,Q,J,Q,J,$,W)}_slerpAdditive(J,Q,$,W,Z){let K=this._workIndex*Z;xJ.multiplyQuaternionsFlat(J,K,J,Q,J,$),xJ.slerpFlat(J,Q,J,Q,J,K,W)}_lerp(J,Q,$,W,Z){let K=1-W;for(let H=0;H!==Z;++H){let Y=Q+H;J[Y]=J[Y]*K+J[$+H]*W}}_lerpAdditive(J,Q,$,W,Z){for(let K=0;K!==Z;++K){let H=Q+K;J[H]=J[H]+J[$+K]*W}}}var sZ="\\[\\]\\.:\\/",h5=new RegExp("["+sZ+"]","g"),iZ="[^"+sZ+"]",b5="[^"+sZ.replace("\\.","")+"]",x5=/((?:WC+[\/:])*)/.source.replace("WC",iZ),g5=/(WCOD+)?/.source.replace("WCOD",b5),p5=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iZ),m5=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iZ),l5=new RegExp("^"+x5+g5+p5+m5+"$"),d5=["material","materials","bones","map"];class AX{constructor(J,Q,$){let W=$||WJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,W)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,W=this._bindings[$];if(W!==void 0)W.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let W=this._targetGroup.nCachedObjects_,Z=$.length;W!==Z;++W)$[W].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class WJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||WJ.parseTrackName(Q),this.node=WJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new WJ(J,Q,$);else return new WJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(h5,"")}static parseTrackName(J){let Q=l5.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},W=$.nodeName&&$.nodeName.lastIndexOf(".");if(W!==void 0&&W!==-1){let Z=$.nodeName.substring(W+1);if(d5.indexOf(Z)!==-1)$.nodeName=$.nodeName.substring(0,W),$.objectName=Z}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(Z){for(let K=0;K<Z.length;K++){let H=Z[K];if(H.name===Q||H.uuid===Q)return H;let Y=$(H.children);if(Y)return Y}return null},W=$(J.children);if(W)return W}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)J[Q++]=$[W]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,W=Q.propertyName,Z=Q.propertyIndex;if(!J)J=WJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){N0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){S0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){S0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){S0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){S0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){S0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){S0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){S0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let K=J[W];if(K===void 0){let X=Q.nodeName;S0("PropertyBinding: Trying to update property for track: "+X+"."+W+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(Z!==void 0){if(W==="morphTargetInfluences"){if(!J.geometry){S0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){S0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[Z]!==void 0)Z=J.morphTargetDictionary[Z]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=Z}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=W;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}WJ.Composite=AX;WJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};WJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};WJ.prototype.GetterByBindingType=[WJ.prototype._getValue_direct,WJ.prototype._getValue_array,WJ.prototype._getValue_arrayElement,WJ.prototype._getValue_toArray];WJ.prototype.SetterByBindingTypeAndVersioning=[[WJ.prototype._setValue_direct,WJ.prototype._setValue_direct_setNeedsUpdate,WJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[WJ.prototype._setValue_array,WJ.prototype._setValue_array_setNeedsUpdate,WJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[WJ.prototype._setValue_arrayElement,WJ.prototype._setValue_arrayElement_setNeedsUpdate,WJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[WJ.prototype._setValue_fromArray,WJ.prototype._setValue_fromArray_setNeedsUpdate,WJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class CX{constructor(){this.isAnimationObjectGroup=!0,this.uuid=eJ(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let J={};this._indicesByUUID=J;for(let $=0,W=arguments.length;$!==W;++$)J[arguments[$].uuid]=$;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let Q=this;this.stats={objects:{get total(){return Q._objects.length},get inUse(){return this.total-Q.nCachedObjects_}},get bindingsPerObject(){return Q._bindings.length}}}add(){let J=this._objects,Q=this._indicesByUUID,$=this._paths,W=this._parsedPaths,Z=this._bindings,K=Z.length,H=void 0,Y=J.length,X=this.nCachedObjects_;for(let U=0,N=arguments.length;U!==N;++U){let E=arguments[U],G=E.uuid,q=Q[G];if(q===void 0){q=Y++,Q[G]=q,J.push(E);for(let O=0,R=K;O!==R;++O)Z[O].push(new WJ(E,$[O],W[O]))}else if(q<X){H=J[q];let O=--X,R=J[O];Q[R.uuid]=q,J[q]=R,Q[G]=O,J[O]=E;for(let D=0,F=K;D!==F;++D){let V=Z[D],A=V[O],M=V[q];if(V[q]=A,M===void 0)M=new WJ(E,$[D],W[D]);V[O]=M}}else if(J[q]!==H)S0("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=X}remove(){let J=this._objects,Q=this._indicesByUUID,$=this._bindings,W=$.length,Z=this.nCachedObjects_;for(let K=0,H=arguments.length;K!==H;++K){let Y=arguments[K],X=Y.uuid,U=Q[X];if(U!==void 0&&U>=Z){let N=Z++,E=J[N];Q[E.uuid]=U,J[U]=E,Q[X]=N,J[N]=Y;for(let G=0,q=W;G!==q;++G){let O=$[G],R=O[N],D=O[U];O[U]=R,O[N]=D}}}this.nCachedObjects_=Z}uncache(){let J=this._objects,Q=this._indicesByUUID,$=this._bindings,W=$.length,Z=this.nCachedObjects_,K=J.length;for(let H=0,Y=arguments.length;H!==Y;++H){let X=arguments[H],U=X.uuid,N=Q[U];if(N!==void 0)if(delete Q[U],N<Z){let E=--Z,G=J[E],q=--K,O=J[q];if(N!==E)Q[G.uuid]=N;if(J[N]=G,E!==q)Q[O.uuid]=E;J[E]=O,J.pop();for(let R=0,D=W;R!==D;++R){let F=$[R],V=F[E],A=F[q];F[N]=V,F[E]=A,F.pop()}}else{let E=--K,G=J[E];if(N!==E)Q[G.uuid]=N;J[N]=G,J.pop();for(let q=0,O=W;q!==O;++q){let R=$[q];R[N]=R[E],R.pop()}}}this.nCachedObjects_=Z}subscribe_(J,Q){let $=this._bindingsIndicesByPath,W=$[J],Z=this._bindings;if(W!==void 0)return Z[W];let K=this._paths,H=this._parsedPaths,Y=this._objects,X=Y.length,U=this.nCachedObjects_,N=Array(X);W=Z.length,$[J]=W,K.push(J),H.push(Q),Z.push(N);for(let E=U,G=Y.length;E!==G;++E){let q=Y[E];N[E]=new WJ(q,J,Q)}return N}unsubscribe_(J){let Q=this._bindingsIndicesByPath,$=Q[J];if($!==void 0){let W=this._paths,Z=this._parsedPaths,K=this._bindings,H=K.length-1,Y=K[H],X=W[H];Q[X]=$,K[$]=Y,K.pop(),Z[$]=Z[H],Z.pop(),W[$]=W[H],W.pop()}}}class oZ{constructor(J,Q,$=null,W=Q.blendMode){this._mixer=J,this._clip=Q,this._localRoot=$,this.blendMode=W;let Z=Q.tracks,K=Z.length,H=Array(K),Y={endingStart:2400,endingEnd:2400};for(let X=0;X!==K;++X){let U=Z[X].createInterpolant(null);H[X]=U,U.settings=Y}this._interpolantSettings=Y,this._interpolants=H,this._propertyBindings=Array(K),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,Q){return this.loop=J,this.repetitions=Q,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,Q,$=!1){if(J.fadeOut(Q),this.fadeIn(Q),$===!0){let W=this._clip.duration,Z=J._clip.duration,K=Z/W,H=W/Z;J._restoreTimeScale=J.timeScale,this._restoreTimeScale=this.timeScale,J.warp(1,K,Q),this.warp(H,1,Q)}return this}crossFadeTo(J,Q,$=!1){return J.crossFadeFrom(this,Q,$)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,Q,$){let W=this._mixer,Z=W.time,K=this.timeScale,H=this._timeScaleInterpolant;if(H===null)H=W._lendControlInterpolant(),this._timeScaleInterpolant=H;let{parameterPositions:Y,sampleValues:X}=H;return Y[0]=Z,Y[1]=Z+$,X[0]=J/K,X[1]=Q/K,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,Q,$,W){if(!this.enabled){this._updateWeight(J);return}let Z=this._startTime;if(Z!==null){let Y=(J-Z)*$;if(Y<0||$===0)Q=0;else this._startTime=null,Q=$*Y}Q*=this._updateTimeScale(J);let K=this._updateTime(Q),H=this._updateWeight(J);if(H>0){let Y=this._interpolants,X=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,N=Y.length;U!==N;++U)Y[U].evaluate(K),X[U].accumulateAdditive(H);break;case 2500:default:for(let U=0,N=Y.length;U!==N;++U)Y[U].evaluate(K),X[U].accumulate(W,H)}}}_updateWeight(J){let Q=0;if(this.enabled){Q=this.weight;let $=this._weightInterpolant;if($!==null){let W=$.evaluate(J)[0];if(Q*=W,J>$.parameterPositions[1]){if(this.stopFading(),W===0)this.enabled=!1}}}return this._effectiveWeight=Q,Q}_updateTimeScale(J){let Q=0;if(!this.paused){Q=this.timeScale;let $=this._timeScaleInterpolant;if($!==null){let W=$.evaluate(J)[0];if(Q*=W,J>$.parameterPositions[1]){if(Q===0)this.paused=!0;else{if(this._restoreTimeScale!==null)Q=this._restoreTimeScale;this.timeScale=Q}this.stopWarping()}}}return this._effectiveTimeScale=Q,Q}_updateTime(J){let Q=this._clip.duration,$=this.loop,W=this.time+J,Z=this._loopCount,K=$===2202;if(J===0){if(Z===-1)return W;return K&&(Z&1)===1?Q-W:W}if($===2200){if(Z===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if(W>=Q)W=Q;else if(W<0)W=0;else{this.time=W;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=W,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(Z===-1)if(J>=0)Z=0,this._setEndings(!0,this.repetitions===0,K);else this._setEndings(this.repetitions===0,!0,K);if(W>=Q||W<0){let H=Math.floor(W/Q);W-=Q*H,Z+=Math.abs(H);let Y=this.repetitions-Z;if(Y<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;W=J>0?Q:0,this.time=W,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(Y===1){let X=J<0;this._setEndings(X,!X,K)}else this._setEndings(!1,!1,K);this._loopCount=Z,this.time=W,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:H})}}else this._loopCount=Z,this.time=W;if(K&&(Z&1)===1)return Q-W}return W}_setEndings(J,Q,$){let W=this._interpolantSettings;if($)W.endingStart=2401,W.endingEnd=2401;else{if(J)W.endingStart=this.zeroSlopeAtStart?2401:2400;else W.endingStart=2402;if(Q)W.endingEnd=this.zeroSlopeAtEnd?2401:2400;else W.endingEnd=2402}}_scheduleFading(J,Q,$){let W=this._mixer,Z=W.time,K=this._weightInterpolant;if(K===null)K=W._lendControlInterpolant(),this._weightInterpolant=K;let{parameterPositions:H,sampleValues:Y}=K;return H[0]=Z,Y[0]=Q,H[1]=Z+J,Y[1]=$,this}}var u5=new Float32Array(1);class wX extends K9{constructor(J){super();if(this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(J,Q){let $=J._localRoot||this._root,W=J._clip.tracks,Z=W.length,K=J._propertyBindings,H=J._interpolants,Y=$.uuid,X=this._bindingsByRootAndName,U=X[Y];if(U===void 0)U={},X[Y]=U;for(let N=0;N!==Z;++N){let E=W[N],G=E.name,q=U[G];if(q!==void 0)++q.referenceCount,K[N]=q;else{if(q=K[N],q!==void 0){if(q._cacheIndex===null)++q.referenceCount,this._addInactiveBinding(q,Y,G);continue}let O=Q&&Q._propertyBindings[N].binding.parsedPath;q=new nZ(WJ.create($,G,O),E.ValueTypeName,E.getValueSize()),++q.referenceCount,this._addInactiveBinding(q,Y,G),K[N]=q}H[N].resultBuffer=q.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let $=(J._localRoot||this._root).uuid,W=J._clip.uuid,Z=this._actionsByClip[W];this._bindAction(J,Z&&Z.knownActions[0]),this._addInactiveAction(J,W,$)}let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(Z.useCount++===0)this._lendBinding(Z),Z.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(--Z.useCount===0)Z.restoreOriginalState(),this._takeBackBinding(Z)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let Q=J._cacheIndex;return Q!==null&&Q<this._nActiveActions}_addInactiveAction(J,Q,$){let W=this._actions,Z=this._actionsByClip,K=Z[Q];if(K===void 0)K={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,Z[Q]=K;else{let H=K.knownActions;J._byClipCacheIndex=H.length,H.push(J)}J._cacheIndex=W.length,W.push(J),K.actionByRoot[$]=J}_removeInactiveAction(J){let Q=this._actions,$=Q[Q.length-1],W=J._cacheIndex;$._cacheIndex=W,Q[W]=$,Q.pop(),J._cacheIndex=null;let Z=J._clip.uuid,K=this._actionsByClip,H=K[Z],Y=H.knownActions,X=Y[Y.length-1],U=J._byClipCacheIndex;X._byClipCacheIndex=U,Y[U]=X,Y.pop(),J._byClipCacheIndex=null;let N=H.actionByRoot,E=(J._localRoot||this._root).uuid;if(delete N[E],Y.length===0)delete K[Z];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(--Z.referenceCount===0)this._removeInactiveBinding(Z)}}_lendAction(J){let Q=this._actions,$=J._cacheIndex,W=this._nActiveActions++,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_takeBackAction(J){let Q=this._actions,$=J._cacheIndex,W=--this._nActiveActions,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_addInactiveBinding(J,Q,$){let W=this._bindingsByRootAndName,Z=this._bindings,K=W[Q];if(K===void 0)K={},W[Q]=K;K[$]=J,J._cacheIndex=Z.length,Z.push(J)}_removeInactiveBinding(J){let Q=this._bindings,$=J.binding,W=$.rootNode.uuid,Z=$.path,K=this._bindingsByRootAndName,H=K[W],Y=Q[Q.length-1],X=J._cacheIndex;if(Y._cacheIndex=X,Q[X]=Y,Q.pop(),delete H[Z],Object.keys(H).length===0)delete K[W]}_lendBinding(J){let Q=this._bindings,$=J._cacheIndex,W=this._nActiveBindings++,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_takeBackBinding(J){let Q=this._bindings,$=J._cacheIndex,W=--this._nActiveBindings,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_lendControlInterpolant(){let J=this._controlInterpolants,Q=this._nActiveControlInterpolants++,$=J[Q];if($===void 0)$=new J$(new Float32Array(2),new Float32Array(2),1,u5),$.__cacheIndex=Q,J[Q]=$;return $}_takeBackControlInterpolant(J){let Q=this._controlInterpolants,$=J.__cacheIndex,W=--this._nActiveControlInterpolants,Z=Q[W];J.__cacheIndex=W,Q[W]=J,Z.__cacheIndex=$,Q[$]=Z}clipAction(J,Q,$){let W=Q||this._root,Z=W.uuid,K=typeof J==="string"?U7.findByName(W,J):J,H=K!==null?K.uuid:J,Y=this._actionsByClip[H],X=null;if($===void 0)if(K!==null)$=K.blendMode;else $=2500;if(Y!==void 0){let N=Y.actionByRoot[Z];if(N!==void 0&&N.blendMode===$)return N;if(X=Y.knownActions[0],K===null)K=X._clip}if(K===null)return null;let U=new oZ(this,K,Q,$);return this._bindAction(U,X),this._addInactiveAction(U,H,Z),U}existingAction(J,Q){let $=Q||this._root,W=$.uuid,Z=typeof J==="string"?U7.findByName($,J):J,K=Z?Z.uuid:J,H=this._actionsByClip[K];if(H!==void 0)return H.actionByRoot[W]||null;return null}stopAllAction(){let J=this._actions,Q=this._nActiveActions;for(let $=Q-1;$>=0;--$)J[$].stop();return this}update(J){J*=this.timeScale;let Q=this._actions,$=this._nActiveActions,W=this.time+=J,Z=Math.sign(J),K=this._accuIndex^=1;for(let X=0;X!==$;++X)Q[X]._update(W,J,Z,K);let H=this._bindings,Y=this._nActiveBindings;for(let X=0;X!==Y;++X)H[X].apply(K);return this}setTime(J){this.time=0;for(let Q=0;Q<this._actions.length;Q++)this._actions[Q].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let Q=this._actions,$=J.uuid,W=this._actionsByClip,Z=W[$];if(Z!==void 0){let K=Z.knownActions;for(let H=0,Y=K.length;H!==Y;++H){let X=K[H];this._deactivateAction(X);let U=X._cacheIndex,N=Q[Q.length-1];X._cacheIndex=null,X._byClipCacheIndex=null,N._cacheIndex=U,Q[U]=N,Q.pop(),this._removeInactiveBindingsForAction(X)}delete W[$]}}uncacheRoot(J){let Q=J.uuid,$=this._actionsByClip;for(let K in $){let H=$[K].actionByRoot,Y=H[Q];if(Y!==void 0)this._deactivateAction(Y),this._removeInactiveAction(Y)}let W=this._bindingsByRootAndName,Z=W[Q];if(Z!==void 0)for(let K in Z){let H=Z[K];H.restoreOriginalState(),this._removeInactiveBinding(H)}}uncacheAction(J,Q){let $=this.existingAction(J,Q);if($!==null)this._deactivateAction($),this._removeInactiveAction($)}}class _X extends BQ{constructor(J=1,Q=1,$=1,W={}){super(J,Q,W);this.isRenderTarget3D=!0,this.depth=$;for(let Z=0;Z<this.textures.length;Z++){let K=new r7(null,J,Q,$);K.isRenderTargetTexture=!0,K.renderTarget=this,this.textures[Z]=K}this._setTextureOptions(W)}}class aZ{constructor(J){this.value=J}clone(){return new aZ(this.value.clone===void 0?this.value:this.value.clone())}}var c5=0;class PX extends K9{constructor(){super();this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:c5++}),this.name="",this.usage=35044,this.uniforms=[]}add(J){return this.uniforms.push(J),this}remove(J){let Q=this.uniforms.indexOf(J);if(Q!==-1)this.uniforms.splice(Q,1);return this}setName(J){return this.name=J,this}setUsage(J){return this.usage=J,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(J){this.name=J.name,this.usage=J.usage;let Q=J.uniforms;this.uniforms.length=0;for(let $=0,W=Q.length;$<W;$++){let Z=Array.isArray(Q[$])?Q[$]:[Q[$]];for(let K=0;K<Z.length;K++)this.uniforms.push(Z[K].clone())}return this}clone(){return new this.constructor().copy(this)}}class TX extends J6{constructor(J,Q,$=1){super(J,Q);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=$}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}clone(J){let Q=super.clone(J);return Q.meshPerAttribute=this.meshPerAttribute,Q}toJSON(J){let Q=super.toJSON(J);return Q.isInstancedInterleavedBuffer=!0,Q.meshPerAttribute=this.meshPerAttribute,Q}}class SX{constructor(J,Q,$,W,Z,K=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=J,this.type=Q,this.itemSize=$,this.elementSize=W,this.count=Z,this.normalized=K,this.version=0}set needsUpdate(J){if(J===!0)this.version++}setBuffer(J){return this.buffer=J,this}setType(J,Q){return this.type=J,this.elementSize=Q,this}setItemSize(J){return this.itemSize=J,this}setCount(J){return this.count=J,this}}var LH=new l0;class jX{constructor(J,Q,$=0,W=1/0){this.ray=new T8(J,Q),this.near=$,this.far=W,this.camera=null,this.layers=new t7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,Q.projectionMatrix.elements[14]).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else S0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return LH.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(LH),this}intersectObject(J,Q=!0,$=[]){return JW(J,this,$,Q),$.sort(VH),$}intersectObjects(J,Q=!0,$=[]){for(let W=0,Z=J.length;W<Z;W++)JW(J[W],this,$,Q);return $.sort(VH),$}}function VH(J,Q){return J.distance-Q.distance}function JW(J,Q,$,W){let Z=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,$)===!1)Z=!1}if(Z===!0&&W===!0){let K=J.children;for(let H=0,Y=K.length;H<Y;H++)JW(K[H],Q,$,!0)}}class yX{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,N0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}class vX{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=m0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(m0(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class fX{constructor(J=1,Q=0,$=0){this.radius=J,this.theta=Q,this.y=$}set(J,Q,$){return this.radius=J,this.theta=Q,this.y=$,this}copy(J){return this.radius=J.radius,this.theta=J.theta,this.y=J.y,this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){return this.radius=Math.sqrt(J*J+$*$),this.theta=Math.atan2(J,$),this.y=Q,this}clone(){return new this.constructor().copy(this)}}class rZ{static{rZ.prototype.isMatrix2=!0}constructor(J,Q,$,W){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,W)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,W){let Z=this.elements;return Z[0]=J,Z[2]=Q,Z[1]=$,Z[3]=W,this}}var BH=new e;class tZ{constructor(J=new e(1/0,1/0),Q=new e(-1/0,-1/0)){this.isBox2=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=BH.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(J){return this.isEmpty()?J.set(0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,BH).distanceTo(J)}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}}var IH=new P,JQ=new P,$7=new P,W7=new P,s$=new P,n5=new P,s5=new P;class hX{constructor(J=new P,Q=new P){this.start=J,this.end=Q}set(J,Q){return this.start.copy(J),this.end.copy(Q),this}copy(J){return this.start.copy(J.start),this.end.copy(J.end),this}getCenter(J){return J.addVectors(this.start,this.end).multiplyScalar(0.5)}delta(J){return J.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(J,Q){return this.delta(Q).multiplyScalar(J).add(this.start)}closestPointToPointParameter(J,Q){IH.subVectors(J,this.start),JQ.subVectors(this.end,this.start);let $=JQ.dot(JQ);if($===0)return 0;let Z=JQ.dot(IH)/$;if(Q)Z=m0(Z,0,1);return Z}closestPointToPoint(J,Q,$){let W=this.closestPointToPointParameter(J,Q);return this.delta($).multiplyScalar(W).add(this.start)}distanceSqToLine3(J,Q=n5,$=s5){let Z,K,H=this.start,Y=J.start,X=this.end,U=J.end;$7.subVectors(X,H),W7.subVectors(U,Y),s$.subVectors(H,Y);let N=$7.dot($7),E=W7.dot(W7),G=W7.dot(s$);if(N<=0.00000000000000010000000000000001&&E<=0.00000000000000010000000000000001)return Q.copy(H),$.copy(Y),Q.sub($),Q.dot(Q);if(N<=0.00000000000000010000000000000001)Z=0,K=G/E,K=m0(K,0,1);else{let q=$7.dot(s$);if(E<=0.00000000000000010000000000000001)K=0,Z=m0(-q/N,0,1);else{let O=$7.dot(W7),R=N*E-O*O;if(R!==0)Z=m0((O*G-q*E)/R,0,1);else Z=0;if(K=(O*Z+G)/E,K<0)K=0,Z=m0(-q/N,0,1);else if(K>1)K=1,Z=m0((O-q)/N,0,1)}}return Q.copy(H).addScaledVector($7,Z),$.copy(Y).addScaledVector(W7,K),Q.distanceToSquared($)}applyMatrix4(J){return this.start.applyMatrix4(J),this.end.applyMatrix4(J),this}equals(J){return J.start.equals(this.start)&&J.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}var zH=new P;class bX extends ZJ{constructor(J,Q){super();this.light=J,this.matrixAutoUpdate=!1,this.color=Q,this.type="SpotLightHelper";let $=new c0,W=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let K=0,H=1,Y=32;K<Y;K++,H++){let X=K/Y*Math.PI*2,U=H/Y*Math.PI*2;W.push(Math.cos(X),Math.sin(X),1,Math.cos(U),Math.sin(U),1)}$.setAttribute("position",new A0(W,3));let Z=new gJ({fog:!1,toneMapped:!1});this.cone=new D9($,Z),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){if(this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent)this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld);else this.matrix.copy(this.light.matrixWorld);this.matrixWorldNeedsUpdate=!0;let J=this.light.distance?this.light.distance:1000,Q=J*Math.tan(this.light.angle);if(this.cone.scale.set(Q,Q,J),zH.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(zH),this.color!==void 0)this.cone.material.color.set(this.color);else this.cone.material.color.copy(this.light.color)}}var r9=new P,QQ=new l0,i$=new l0;class xX extends D9{constructor(J){let Q=gX(J),$=new c0,W=[],Z=[];for(let X=0;X<Q.length;X++){let U=Q[X];if(U.parent&&U.parent.isBone)W.push(0,0,0),W.push(0,0,0),Z.push(0,0,0),Z.push(0,0,0)}$.setAttribute("position",new A0(W,3)),$.setAttribute("color",new A0(Z,3));let K=new gJ({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super($,K);this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=J,this.bones=Q,this.matrix=J.matrixWorld,this.matrixAutoUpdate=!1;let H=new B0(255),Y=new B0(65280);this.setColors(H,Y)}updateMatrixWorld(J){let Q=this.bones,$=this.geometry,W=$.getAttribute("position");i$.copy(this.root.matrixWorld).invert();for(let Z=0,K=0;Z<Q.length;Z++){let H=Q[Z];if(H.parent&&H.parent.isBone)QQ.multiplyMatrices(i$,H.matrixWorld),r9.setFromMatrixPosition(QQ),W.setXYZ(K,r9.x,r9.y,r9.z),QQ.multiplyMatrices(i$,H.parent.matrixWorld),r9.setFromMatrixPosition(QQ),W.setXYZ(K+1,r9.x,r9.y,r9.z),K+=2}$.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(J)}setColors(J,Q){let W=this.geometry.getAttribute("color");for(let Z=0;Z<W.count;Z+=2)W.setXYZ(Z,J.r,J.g,J.b),W.setXYZ(Z+1,Q.r,Q.g,Q.b);return W.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function gX(J){let Q=[];if(J.isBone===!0)Q.push(J);for(let $=0;$<J.children.length;$++)Q.push(...gX(J.children[$]));return Q}class pX extends zJ{constructor(J,Q,$){let W=new H6(Q,4,2),Z=new m9({wireframe:!0,fog:!1,toneMapped:!1});super(W,Z);this.light=J,this.color=$,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){if(this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0)this.material.color.set(this.color);else this.material.color.copy(this.light.color)}}var i5=new P,AH=new B0,CH=new B0;class mX extends ZJ{constructor(J,Q,$){super();this.light=J,this.matrix=J.matrixWorld,this.matrixAutoUpdate=!1,this.color=$,this.type="HemisphereLightHelper";let W=new K6(Q);if(W.rotateY(Math.PI*0.5),this.material=new m9({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0)this.material.vertexColors=!0;let Z=W.getAttribute("position"),K=new Float32Array(Z.count*3);W.setAttribute("color",new qJ(K,3)),this.add(new zJ(W,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let J=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let Q=J.geometry.getAttribute("color");AH.copy(this.light.color),CH.copy(this.light.groundColor);for(let $=0,W=Q.count;$<W;$++){let Z=$<W/2?AH:CH;Q.setXYZ($,Z.r,Z.g,Z.b)}Q.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),J.lookAt(i5.setFromMatrixPosition(this.light.matrixWorld).negate())}}class lX extends D9{constructor(J=10,Q=10,$=4473924,W=8947848){$=new B0($),W=new B0(W);let Z=Q/2,K=J/Q,H=J/2,Y=[],X=[];for(let E=0,G=0,q=-H;E<=Q;E++,q+=K){Y.push(-H,0,q,H,0,q),Y.push(q,0,-H,q,0,H);let O=E===Z?$:W;O.toArray(X,G),G+=3,O.toArray(X,G),G+=3,O.toArray(X,G),G+=3,O.toArray(X,G),G+=3}let U=new c0;U.setAttribute("position",new A0(Y,3)),U.setAttribute("color",new A0(X,3));let N=new gJ({vertexColors:!0,toneMapped:!1});super(U,N);this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class dX extends D9{constructor(J=10,Q=16,$=8,W=64,Z=4473924,K=8947848){Z=new B0(Z),K=new B0(K);let H=[],Y=[];if(Q>1)for(let N=0;N<Q;N++){let E=N/Q*(Math.PI*2),G=Math.sin(E)*J,q=Math.cos(E)*J;H.push(0,0,0),H.push(G,0,q);let O=N&1?Z:K;Y.push(O.r,O.g,O.b),Y.push(O.r,O.g,O.b)}for(let N=0;N<$;N++){let E=N&1?Z:K,G=J-J/$*N;for(let q=0;q<W;q++){let O=q/W*(Math.PI*2),R=Math.sin(O)*G,D=Math.cos(O)*G;H.push(R,0,D),Y.push(E.r,E.g,E.b),O=(q+1)/W*(Math.PI*2),R=Math.sin(O)*G,D=Math.cos(O)*G,H.push(R,0,D),Y.push(E.r,E.g,E.b)}}let X=new c0;X.setAttribute("position",new A0(H,3)),X.setAttribute("color",new A0(Y,3));let U=new gJ({vertexColors:!0,toneMapped:!1});super(X,U);this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}var wH=new P,$Q=new P,_H=new P;class uX extends ZJ{constructor(J,Q,$){super();if(this.light=J,this.matrix=J.matrixWorld,this.matrixAutoUpdate=!1,this.color=$,this.type="DirectionalLightHelper",Q===void 0)Q=1;let W=new c0;W.setAttribute("position",new A0([-Q,Q,0,Q,Q,0,Q,-Q,0,-Q,-Q,0,-Q,Q,0],3));let Z=new gJ({fog:!1,toneMapped:!1});this.lightPlane=new g9(W,Z),this.add(this.lightPlane),W=new c0,W.setAttribute("position",new A0([0,0,0,0,0,1],3)),this.targetLine=new g9(W,Z),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){if(this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),wH.setFromMatrixPosition(this.light.matrixWorld),$Q.setFromMatrixPosition(this.light.target.matrixWorld),_H.subVectors($Q,wH),this.lightPlane.lookAt($Q),this.color!==void 0)this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color);else this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color);this.targetLine.lookAt($Q),this.targetLine.scale.z=_H.length()}}var WQ=new P,VJ=new G6;class cX extends D9{constructor(J){let Q=new c0,$=new gJ({color:16777215,vertexColors:!0,toneMapped:!1}),W=[],Z=[],K={};H("n1","n2"),H("n2","n4"),H("n4","n3"),H("n3","n1"),H("f1","f2"),H("f2","f4"),H("f4","f3"),H("f3","f1"),H("n1","f1"),H("n2","f2"),H("n3","f3"),H("n4","f4"),H("p","n1"),H("p","n2"),H("p","n3"),H("p","n4"),H("u1","u2"),H("u2","u3"),H("u3","u1"),H("c","t"),H("p","c"),H("cn1","cn2"),H("cn3","cn4"),H("cf1","cf2"),H("cf3","cf4");function H(q,O){Y(q),Y(O)}function Y(q){if(W.push(0,0,0),Z.push(0,0,0),K[q]===void 0)K[q]=[];K[q].push(W.length/3-1)}Q.setAttribute("position",new A0(W,3)),Q.setAttribute("color",new A0(Z,3));super(Q,$);if(this.type="CameraHelper",this.camera=J,this.camera.updateProjectionMatrix)this.camera.updateProjectionMatrix();this.matrix=J.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=K,this.update();let X=new B0(16755200),U=new B0(16711680),N=new B0(43775),E=new B0(16777215),G=new B0(3355443);this.setColors(X,U,N,E,G)}setColors(J,Q,$,W,Z){let H=this.geometry.getAttribute("color");return H.setXYZ(0,J.r,J.g,J.b),H.setXYZ(1,J.r,J.g,J.b),H.setXYZ(2,J.r,J.g,J.b),H.setXYZ(3,J.r,J.g,J.b),H.setXYZ(4,J.r,J.g,J.b),H.setXYZ(5,J.r,J.g,J.b),H.setXYZ(6,J.r,J.g,J.b),H.setXYZ(7,J.r,J.g,J.b),H.setXYZ(8,J.r,J.g,J.b),H.setXYZ(9,J.r,J.g,J.b),H.setXYZ(10,J.r,J.g,J.b),H.setXYZ(11,J.r,J.g,J.b),H.setXYZ(12,J.r,J.g,J.b),H.setXYZ(13,J.r,J.g,J.b),H.setXYZ(14,J.r,J.g,J.b),H.setXYZ(15,J.r,J.g,J.b),H.setXYZ(16,J.r,J.g,J.b),H.setXYZ(17,J.r,J.g,J.b),H.setXYZ(18,J.r,J.g,J.b),H.setXYZ(19,J.r,J.g,J.b),H.setXYZ(20,J.r,J.g,J.b),H.setXYZ(21,J.r,J.g,J.b),H.setXYZ(22,J.r,J.g,J.b),H.setXYZ(23,J.r,J.g,J.b),H.setXYZ(24,Q.r,Q.g,Q.b),H.setXYZ(25,Q.r,Q.g,Q.b),H.setXYZ(26,Q.r,Q.g,Q.b),H.setXYZ(27,Q.r,Q.g,Q.b),H.setXYZ(28,Q.r,Q.g,Q.b),H.setXYZ(29,Q.r,Q.g,Q.b),H.setXYZ(30,Q.r,Q.g,Q.b),H.setXYZ(31,Q.r,Q.g,Q.b),H.setXYZ(32,$.r,$.g,$.b),H.setXYZ(33,$.r,$.g,$.b),H.setXYZ(34,$.r,$.g,$.b),H.setXYZ(35,$.r,$.g,$.b),H.setXYZ(36,$.r,$.g,$.b),H.setXYZ(37,$.r,$.g,$.b),H.setXYZ(38,W.r,W.g,W.b),H.setXYZ(39,W.r,W.g,W.b),H.setXYZ(40,Z.r,Z.g,Z.b),H.setXYZ(41,Z.r,Z.g,Z.b),H.setXYZ(42,Z.r,Z.g,Z.b),H.setXYZ(43,Z.r,Z.g,Z.b),H.setXYZ(44,Z.r,Z.g,Z.b),H.setXYZ(45,Z.r,Z.g,Z.b),H.setXYZ(46,Z.r,Z.g,Z.b),H.setXYZ(47,Z.r,Z.g,Z.b),H.setXYZ(48,Z.r,Z.g,Z.b),H.setXYZ(49,Z.r,Z.g,Z.b),H.needsUpdate=!0,this}update(){let J=this.geometry,Q=this.pointMap,$=1,W=1,Z,K;if(VJ.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)Z=1,K=0;else if(this.camera.coordinateSystem===2000)Z=-1,K=1;else if(this.camera.coordinateSystem===2001)Z=0,K=1;else throw Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);IJ("c",Q,J,VJ,0,0,Z),IJ("t",Q,J,VJ,0,0,K),IJ("n1",Q,J,VJ,-1,-1,Z),IJ("n2",Q,J,VJ,1,-1,Z),IJ("n3",Q,J,VJ,-1,1,Z),IJ("n4",Q,J,VJ,1,1,Z),IJ("f1",Q,J,VJ,-1,-1,K),IJ("f2",Q,J,VJ,1,-1,K),IJ("f3",Q,J,VJ,-1,1,K),IJ("f4",Q,J,VJ,1,1,K),IJ("u1",Q,J,VJ,0.7,1.1,Z),IJ("u2",Q,J,VJ,-0.7,1.1,Z),IJ("u3",Q,J,VJ,0,2,Z),IJ("cf1",Q,J,VJ,-1,0,K),IJ("cf2",Q,J,VJ,1,0,K),IJ("cf3",Q,J,VJ,0,-1,K),IJ("cf4",Q,J,VJ,0,1,K),IJ("cn1",Q,J,VJ,-1,0,Z),IJ("cn2",Q,J,VJ,1,0,Z),IJ("cn3",Q,J,VJ,0,-1,Z),IJ("cn4",Q,J,VJ,0,1,Z),J.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function IJ(J,Q,$,W,Z,K,H){WQ.set(Z,K,H).unproject(W);let Y=Q[J];if(Y!==void 0){let X=$.getAttribute("position");for(let U=0,N=Y.length;U<N;U++)X.setXYZ(Y[U],WQ.x,WQ.y,WQ.z)}}var ZQ=new yJ;class nX extends D9{constructor(J,Q=16776960){let $=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),W=new Float32Array(24),Z=new c0;Z.setIndex(new qJ($,1)),Z.setAttribute("position",new qJ(W,3));super(Z,new gJ({color:Q,toneMapped:!1}));this.object=J,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0)ZQ.setFromObject(this.object);if(ZQ.isEmpty())return;let{min:J,max:Q}=ZQ,$=this.geometry.attributes.position,W=$.array;W[0]=Q.x,W[1]=Q.y,W[2]=Q.z,W[3]=J.x,W[4]=Q.y,W[5]=Q.z,W[6]=J.x,W[7]=J.y,W[8]=Q.z,W[9]=Q.x,W[10]=J.y,W[11]=Q.z,W[12]=Q.x,W[13]=Q.y,W[14]=J.z,W[15]=J.x,W[16]=Q.y,W[17]=J.z,W[18]=J.x,W[19]=J.y,W[20]=J.z,W[21]=Q.x,W[22]=J.y,W[23]=J.z,$.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(J){return this.object=J,this.update(),this}copy(J,Q){return super.copy(J,Q),this.object=J.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class sX extends D9{constructor(J,Q=16776960){let $=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),W=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],Z=new c0;Z.setIndex(new qJ($,1)),Z.setAttribute("position",new A0(W,3));super(Z,new gJ({color:Q,toneMapped:!1}));this.box=J,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(J){let Q=this.box;if(Q.isEmpty())return;Q.getCenter(this.position),Q.getSize(this.scale),this.scale.multiplyScalar(0.5),super.updateMatrixWorld(J)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class iX extends g9{constructor(J,Q=1,$=16776960){let W=$,Z=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],K=new c0;K.setAttribute("position",new A0(Z,3)),K.computeBoundingSphere();super(K,new gJ({color:W,toneMapped:!1}));this.type="PlaneHelper",this.plane=J,this.size=Q;let H=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],Y=new c0;Y.setAttribute("position",new A0(H,3)),Y.computeBoundingSphere(),this.add(new zJ(Y,new m9({color:W,opacity:0.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(J){this.position.set(0,0,0),this.scale.set(0.5*this.size,0.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(J)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}var PH=new P,KQ,o$;class oX extends ZJ{constructor(J=new P(0,0,1),Q=new P(0,0,0),$=1,W=16776960,Z=$*0.2,K=Z*0.2){super();if(this.type="ArrowHelper",KQ===void 0)KQ=new c0,KQ.setAttribute("position",new A0([0,0,0,0,1,0],3)),o$=new W6(0.5,1,5,1),o$.translate(0,-0.5,0);this.position.copy(Q),this.line=new g9(KQ,new gJ({color:W,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new zJ(o$,new m9({color:W,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(J),this.setLength($,Z,K)}setDirection(J){if(J.y>0.99999)this.quaternion.set(0,0,0,1);else if(J.y<-0.99999)this.quaternion.set(1,0,0,0);else{PH.set(J.z,0,-J.x).normalize();let Q=Math.acos(J.y);this.quaternion.setFromAxisAngle(PH,Q)}}setLength(J,Q=J*0.2,$=Q*0.2){this.line.scale.set(1,Math.max(0.0001,J-Q),1),this.line.updateMatrix(),this.cone.scale.set($,Q,$),this.cone.position.y=J,this.cone.updateMatrix()}setColor(J){this.line.material.color.set(J),this.cone.material.color.set(J)}copy(J){return super.copy(J,!1),this.line.copy(J.line),this.cone.copy(J.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class aX extends D9{constructor(J=1){let Q=[0,0,0,J,0,0,0,0,0,0,J,0,0,0,0,0,0,J],$=[1,0,0,1,0.6,0,0,1,0,0.6,1,0,0,0,1,0,0.6,1],W=new c0;W.setAttribute("position",new A0(Q,3)),W.setAttribute("color",new A0($,3));let Z=new gJ({vertexColors:!0,toneMapped:!1});super(W,Z);this.type="AxesHelper"}setColors(J,Q,$){let W=new B0,Z=this.geometry.attributes.color.array;return W.set(J),W.toArray(Z,0),W.toArray(Z,3),W.set(Q),W.toArray(Z,6),W.toArray(Z,9),W.set($),W.toArray(Z,12),W.toArray(Z,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class rX{constructor(){this.type="ShapePath",this.color=new B0,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(J,Q){return this.currentPath=new Y7,this.subPaths.push(this.currentPath),this.currentPath.moveTo(J,Q),this}lineTo(J,Q){return this.currentPath.lineTo(J,Q),this}quadraticCurveTo(J,Q,$,W){return this.currentPath.quadraticCurveTo(J,Q,$,W),this}bezierCurveTo(J,Q,$,W,Z,K){return this.currentPath.bezierCurveTo(J,Q,$,W,Z,K),this}splineThru(J){return this.currentPath.splineThru(J),this}toShapes(){function J(Y,X){let U=!1,N=X.length;for(let E=0,G=N-1;E<N;G=E++){let q=X[E],O=X[G];if(q.y>Y.y!==O.y>Y.y&&Y.x<(O.x-q.x)*(Y.y-q.y)/(O.y-q.y)+q.x)U=!U}return U}function Q(Y,X){let U=X.getCenter(new e);if(J(U,Y))return U;let N=U.y,E=[],G=Y.length;for(let q=0;q<G;q++){let O=Y[q],R=Y[(q+1)%G];if(O.y>N!==R.y>N){let D=O.x+(N-O.y)*(R.x-O.x)/(R.y-O.y);E.push(D)}}if(E.length>1)E.sort((q,O)=>q-O),U.x=(E[0]+E[1])/2;return U}let $=this.userData.style&&this.userData.style.fillRule||"nonzero";if($!=="nonzero"&&$!=="evenodd")N0('Fill-rule "'+$+'" is not supported, falling back to "nonzero".'),$="nonzero";let W=$==="nonzero"?(Y)=>Y!==0:(Y)=>(Y&1)!==0,Z=[];for(let Y of this.subPaths){let X=Y.getPoints();if(X.length<3)continue;let U=N9.area(X);if(U===0)continue;let N=new tZ;for(let E=0;E<X.length;E++)N.expandByPoint(X[E]);Z.push({subPath:Y,points:X,boundingBox:N,interiorPoint:Q(X,N),absArea:Math.abs(U),winding:U<0?-1:1,container:null,exclude:!1,role:null})}Z.sort((Y,X)=>X.absArea-Y.absArea);for(let Y=0;Y<Z.length;Y++){let X=Z[Y],U=0;for(let N=Y-1;N>=0;N--){let E=Z[N];if(!E.boundingBox.containsBox(X.boundingBox))continue;if(!J(X.interiorPoint,E.points))continue;X.container=E.exclude?E.container:E,U=E.winding,X.winding+=U;break}if(W(X.winding)===W(U))X.exclude=!0}for(let Y of Z){if(Y.exclude)continue;Y.role=Y.container===null||Y.container.role==="hole"?"outer":"hole"}let K=[],H=new Map;for(let Y of Z){if(Y.exclude||Y.role!=="outer")continue;let X=new R7;X.curves=Y.subPath.curves,K.push(X),H.set(Y,X)}for(let Y of Z){if(Y.exclude||Y.role!=="hole")continue;let X=H.get(Y.container);if(!X)continue;let U=new Y7;U.curves=Y.subPath.curves,X.holes.push(U)}return K}}class tX extends K9{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function o5(J,Q){let $=J.image&&J.image.width?J.image.width/J.image.height:1;if($>Q)J.repeat.x=1,J.repeat.y=$/Q,J.offset.x=0,J.offset.y=(1-J.repeat.y)/2;else J.repeat.x=Q/$,J.repeat.y=1,J.offset.x=(1-J.repeat.x)/2,J.offset.y=0;return J}function a5(J,Q){let $=J.image&&J.image.width?J.image.width/J.image.height:1;if($>Q)J.repeat.x=Q/$,J.repeat.y=1,J.offset.x=(1-J.repeat.x)/2,J.offset.y=0;else J.repeat.x=1,J.repeat.y=$/Q,J.offset.x=0,J.offset.y=(1-J.repeat.y)/2;return J}function r5(J){return J.repeat.x=1,J.repeat.y=1,J.offset.x=0,J.offset.y=0,J}function Y$(J,Q,$,W){let Z=t5(W);switch($){case 1021:return J*Q;case 1028:return J*Q/Z.components*Z.byteLength;case 1029:return J*Q/Z.components*Z.byteLength;case 1030:return J*Q*2/Z.components*Z.byteLength;case 1031:return J*Q*2/Z.components*Z.byteLength;case 1022:return J*Q*3/Z.components*Z.byteLength;case 1023:return J*Q*4/Z.components*Z.byteLength;case 1033:return J*Q*4/Z.components*Z.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function t5(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}class eX{static contain(J,Q){return o5(J,Q)}static cover(J,Q){return a5(J,Q)}static fill(J){return r5(J)}static getByteLength(J,Q,$,W){return Y$(J,Q,$,W)}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)N0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function VU(){let J=null,Q=!1,$=null,W=null;function Z(K,H){W=J.requestAnimationFrame(Z),$(K,H)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;W=J.requestAnimationFrame(Z),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(W);Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function e5(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:N}=Y,E=U.byteLength,G=J.createBuffer();J.bindBuffer(X,G),J.bufferData(X,U,N),Y.onUploadCallback();let q;if(U instanceof Float32Array)q=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)q=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)q=J.HALF_FLOAT;else q=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)q=J.SHORT;else if(U instanceof Uint32Array)q=J.UNSIGNED_INT;else if(U instanceof Int32Array)q=J.INT;else if(U instanceof Int8Array)q=J.BYTE;else if(U instanceof Uint8Array)q=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)q=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:q,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:E}}function W(Y,X,U){let{array:N,updateRanges:E}=X;if(J.bindBuffer(U,Y),E.length===0)J.bufferSubData(U,0,N);else{E.sort((q,O)=>q.start-O.start);let G=0;for(let q=1;q<E.length;q++){let O=E[G],R=E[q];if(R.start<=O.start+O.count+1)O.count=Math.max(O.count,R.start+R.count-O.start);else++G,E[G]=R}E.length=G+1;for(let q=0,O=E.length;q<O;q++){let R=E[q];J.bufferSubData(U,R.start*N.BYTES_PER_ELEMENT,N,R.start,R.count)}X.clearUpdateRanges()}X.onUploadCallback()}function Z(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let N=Q.get(Y);if(!N||N.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");W(U.buffer,Y,X),U.version=Y.version}}return{get:Z,remove:K,update:H}}var JE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$E=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,YE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,UE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,LE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,VE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,BE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,IE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,AE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,CE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TE="gl_FragColor = linearToOutputTexel( gl_FragColor );",SE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,sE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jq=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qq=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$q=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Wq=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zq=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kq=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hq=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yq=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xq=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uq=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gq=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nq=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eq=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qq=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fq=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dq=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Oq=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rq=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mq=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kq=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lq=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vq=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bq=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Iq=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zq=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Aq=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cq=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wq=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_q=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pq=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Tq=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sq=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jq=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yq=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vq=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fq=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hq=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bq=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xq=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gq=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pq=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mq=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lq=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dq=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uq=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cq=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nq=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sq=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iq=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oq=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aq=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rq=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tq=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eq=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,JF=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QF=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$F=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WF=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KF=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HF=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YF=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XF=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UF=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,GF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NF=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EF=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qF=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FF=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DF=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OF=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RF=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MF=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kF=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LF=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VF=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BF=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IF=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zF=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AF=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CF=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wF=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_F=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PF=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TF=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SF=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jF=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yF=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,r0={alphahash_fragment:JE,alphahash_pars_fragment:QE,alphamap_fragment:$E,alphamap_pars_fragment:WE,alphatest_fragment:ZE,alphatest_pars_fragment:KE,aomap_fragment:HE,aomap_pars_fragment:YE,batching_pars_vertex:XE,batching_vertex:UE,begin_vertex:GE,beginnormal_vertex:NE,bsdfs:EE,iridescence_fragment:qE,bumpmap_pars_fragment:FE,clipping_planes_fragment:DE,clipping_planes_pars_fragment:OE,clipping_planes_pars_vertex:RE,clipping_planes_vertex:ME,color_fragment:kE,color_pars_fragment:LE,color_pars_vertex:VE,color_vertex:BE,common:IE,cube_uv_reflection_fragment:zE,defaultnormal_vertex:AE,displacementmap_pars_vertex:CE,displacementmap_vertex:wE,emissivemap_fragment:_E,emissivemap_pars_fragment:PE,colorspace_fragment:TE,colorspace_pars_fragment:SE,envmap_fragment:jE,envmap_common_pars_fragment:yE,envmap_pars_fragment:vE,envmap_pars_vertex:fE,envmap_physical_pars_fragment:nE,envmap_vertex:hE,fog_vertex:bE,fog_pars_vertex:xE,fog_fragment:gE,fog_pars_fragment:pE,gradientmap_pars_fragment:mE,lightmap_pars_fragment:lE,lights_lambert_fragment:dE,lights_lambert_pars_fragment:uE,lights_pars_begin:cE,lights_toon_fragment:sE,lights_toon_pars_fragment:iE,lights_phong_fragment:oE,lights_phong_pars_fragment:aE,lights_physical_fragment:rE,lights_physical_pars_fragment:tE,lights_fragment_begin:eE,lights_fragment_maps:Jq,lights_fragment_end:Qq,lightprobes_pars_fragment:$q,logdepthbuf_fragment:Wq,logdepthbuf_pars_fragment:Zq,logdepthbuf_pars_vertex:Kq,logdepthbuf_vertex:Hq,map_fragment:Yq,map_pars_fragment:Xq,map_particle_fragment:Uq,map_particle_pars_fragment:Gq,metalnessmap_fragment:Nq,metalnessmap_pars_fragment:Eq,morphinstance_vertex:qq,morphcolor_vertex:Fq,morphnormal_vertex:Dq,morphtarget_pars_vertex:Oq,morphtarget_vertex:Rq,normal_fragment_begin:Mq,normal_fragment_maps:kq,normal_pars_fragment:Lq,normal_pars_vertex:Vq,normal_vertex:Bq,normalmap_pars_fragment:Iq,clearcoat_normal_fragment_begin:zq,clearcoat_normal_fragment_maps:Aq,clearcoat_pars_fragment:Cq,iridescence_pars_fragment:wq,opaque_fragment:_q,packing:Pq,premultiplied_alpha_fragment:Tq,project_vertex:Sq,dithering_fragment:jq,dithering_pars_fragment:yq,roughnessmap_fragment:vq,roughnessmap_pars_fragment:fq,shadowmap_pars_fragment:hq,shadowmap_pars_vertex:bq,shadowmap_vertex:xq,shadowmask_pars_fragment:gq,skinbase_vertex:pq,skinning_pars_vertex:mq,skinning_vertex:lq,skinnormal_vertex:dq,specularmap_fragment:uq,specularmap_pars_fragment:cq,tonemapping_fragment:nq,tonemapping_pars_fragment:sq,transmission_fragment:iq,transmission_pars_fragment:oq,uv_pars_fragment:aq,uv_pars_vertex:rq,uv_vertex:tq,worldpos_vertex:eq,background_vert:JF,background_frag:QF,backgroundCube_vert:$F,backgroundCube_frag:WF,cube_vert:ZF,cube_frag:KF,depth_vert:HF,depth_frag:YF,distance_vert:XF,distance_frag:UF,equirect_vert:GF,equirect_frag:NF,linedashed_vert:EF,linedashed_frag:qF,meshbasic_vert:FF,meshbasic_frag:DF,meshlambert_vert:OF,meshlambert_frag:RF,meshmatcap_vert:MF,meshmatcap_frag:kF,meshnormal_vert:LF,meshnormal_frag:VF,meshphong_vert:BF,meshphong_frag:IF,meshphysical_vert:zF,meshphysical_frag:AF,meshtoon_vert:CF,meshtoon_frag:wF,points_vert:_F,points_frag:PF,shadow_vert:TF,shadow_frag:SF,sprite_vert:jF,sprite_frag:yF},O0={common:{diffuse:{value:new B0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new d0},alphaMap:{value:null},alphaMapTransform:{value:new d0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new d0}},envmap:{envMap:{value:null},envMapRotation:{value:new d0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new d0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new d0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new d0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new d0},normalScale:{value:new e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new d0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new d0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new d0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new d0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new B0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new B0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new d0},alphaTest:{value:0},uvTransform:{value:new d0}},sprite:{diffuse:{value:new B0(16777215)},opacity:{value:1},center:{value:new e(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new d0},alphaMap:{value:null},alphaMapTransform:{value:new d0},alphaTest:{value:0}}},_9={basic:{uniforms:pJ([O0.common,O0.specularmap,O0.envmap,O0.aomap,O0.lightmap,O0.fog]),vertexShader:r0.meshbasic_vert,fragmentShader:r0.meshbasic_frag},lambert:{uniforms:pJ([O0.common,O0.specularmap,O0.envmap,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.fog,O0.lights,{emissive:{value:new B0(0)},envMapIntensity:{value:1}}]),vertexShader:r0.meshlambert_vert,fragmentShader:r0.meshlambert_frag},phong:{uniforms:pJ([O0.common,O0.specularmap,O0.envmap,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.fog,O0.lights,{emissive:{value:new B0(0)},specular:{value:new B0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:r0.meshphong_vert,fragmentShader:r0.meshphong_frag},standard:{uniforms:pJ([O0.common,O0.envmap,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.roughnessmap,O0.metalnessmap,O0.fog,O0.lights,{emissive:{value:new B0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:r0.meshphysical_vert,fragmentShader:r0.meshphysical_frag},toon:{uniforms:pJ([O0.common,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.gradientmap,O0.fog,O0.lights,{emissive:{value:new B0(0)}}]),vertexShader:r0.meshtoon_vert,fragmentShader:r0.meshtoon_frag},matcap:{uniforms:pJ([O0.common,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.fog,{matcap:{value:null}}]),vertexShader:r0.meshmatcap_vert,fragmentShader:r0.meshmatcap_frag},points:{uniforms:pJ([O0.points,O0.fog]),vertexShader:r0.points_vert,fragmentShader:r0.points_frag},dashed:{uniforms:pJ([O0.common,O0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:r0.linedashed_vert,fragmentShader:r0.linedashed_frag},depth:{uniforms:pJ([O0.common,O0.displacementmap]),vertexShader:r0.depth_vert,fragmentShader:r0.depth_frag},normal:{uniforms:pJ([O0.common,O0.bumpmap,O0.normalmap,O0.displacementmap,{opacity:{value:1}}]),vertexShader:r0.meshnormal_vert,fragmentShader:r0.meshnormal_frag},sprite:{uniforms:pJ([O0.sprite,O0.fog]),vertexShader:r0.sprite_vert,fragmentShader:r0.sprite_frag},background:{uniforms:{uvTransform:{value:new d0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:r0.background_vert,fragmentShader:r0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new d0}},vertexShader:r0.backgroundCube_vert,fragmentShader:r0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:r0.cube_vert,fragmentShader:r0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:r0.equirect_vert,fragmentShader:r0.equirect_frag},distance:{uniforms:pJ([O0.common,O0.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:r0.distance_vert,fragmentShader:r0.distance_frag},shadow:{uniforms:pJ([O0.lights,O0.fog,{color:{value:new B0(0)},opacity:{value:1}}]),vertexShader:r0.shadow_vert,fragmentShader:r0.shadow_frag}};_9.physical={uniforms:pJ([_9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new d0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new d0},clearcoatNormalScale:{value:new e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new d0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new d0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new d0},sheen:{value:0},sheenColor:{value:new B0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new d0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new d0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new d0},transmissionSamplerSize:{value:new e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new d0},attenuationDistance:{value:0},attenuationColor:{value:new B0(0)},specularColor:{value:new B0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new d0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new d0},anisotropyVector:{value:new e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new d0}}]),vertexShader:r0.meshphysical_vert,fragmentShader:r0.meshphysical_frag};var X$={r:0,b:0,g:0},vF=new l0,BU=new d0;BU.set(-1,0,0,0,1,0,0,0,1);function fF(J,Q,$,W,Z,K){let H=new B0(0),Y=Z===!0?0:1,X,U,N=null,E=0,G=null;function q(V){let A=V.isScene===!0?V.background:null;if(A&&A.isTexture){let M=V.backgroundBlurriness>0;A=Q.get(A,M)}return A}function O(V){let A=!1,M=q(V);if(M===null)D(H,Y);else if(M&&M.isColor)D(M,1),A=!0;let z=J.xr.getEnvironmentBlendMode();if(z==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(z==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||A)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function R(V,A){let M=q(A);if(M&&(M.isCubeTexture||M.mapping===s7)){if(U===void 0)U=new zJ(new j8(1,1,1),new Q9({name:"BackgroundCubeMaterial",uniforms:y8(_9.backgroundCube.uniforms),vertexShader:_9.backgroundCube.vertexShader,fragmentShader:_9.backgroundCube.fragmentShader,side:oJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(z,_,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(U);if(U.material.uniforms.envMap.value=M,U.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(vF.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(BU);if(U.material.toneMapped=QJ.getTransfer(M.colorSpace)!==DJ,N!==M||E!==M.version||G!==J.toneMapping)U.material.needsUpdate=!0,N=M,E=M.version,G=J.toneMapping;U.layers.enableAll(),V.unshift(U,U.geometry,U.material,0,0,null)}else if(M&&M.isTexture){if(X===void 0)X=new zJ(new M7(2,2),new Q9({name:"BackgroundMaterial",uniforms:y8(_9.background.uniforms),vertexShader:_9.background.vertexShader,fragmentShader:_9.background.fragmentShader,side:E7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(X);if(X.material.uniforms.t2D.value=M,X.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,X.material.toneMapped=QJ.getTransfer(M.colorSpace)!==DJ,M.matrixAutoUpdate===!0)M.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(M.matrix),N!==M||E!==M.version||G!==J.toneMapping)X.material.needsUpdate=!0,N=M,E=M.version,G=J.toneMapping;X.layers.enableAll(),V.unshift(X,X.geometry,X.material,0,0,null)}}function D(V,A){V.getRGB(X$,VZ(J)),$.buffers.color.setClear(X$.r,X$.g,X$.b,A,K)}function F(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return H},setClearColor:function(V,A=1){H.set(V),Y=A,D(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(V){Y=V,D(H,Y)},render:O,addToRenderList:R,dispose:F}}function hF(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),W={},Z=G(null),K=Z,H=!1;function Y(j,h,i,S,p){let o=!1,m=E(j,S,i,h);if(K!==m)K=m,U(K.object);if(o=q(j,S,i,p),o)O(j,S,i,p);if(p!==null)Q.update(p,J.ELEMENT_ARRAY_BUFFER);if(o||H){if(H=!1,M(j,h,i,S),p!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(p).buffer)}}function X(){return J.createVertexArray()}function U(j){return J.bindVertexArray(j)}function N(j){return J.deleteVertexArray(j)}function E(j,h,i,S){let p=S.wireframe===!0,o=W[h.id];if(o===void 0)o={},W[h.id]=o;let m=j.isInstancedMesh===!0?j.id:0,K0=o[m];if(K0===void 0)K0={},o[m]=K0;let u=K0[i.id];if(u===void 0)u={},K0[i.id]=u;let r=u[p];if(r===void 0)r=G(X()),u[p]=r;return r}function G(j){let h=[],i=[],S=[];for(let p=0;p<$;p++)h[p]=0,i[p]=0,S[p]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:h,enabledAttributes:i,attributeDivisors:S,object:j,attributes:{},index:null}}function q(j,h,i,S){let p=K.attributes,o=h.attributes,m=0,K0=i.getAttributes();for(let u in K0)if(K0[u].location>=0){let $0=p[u],v0=o[u];if(v0===void 0){if(u==="instanceMatrix"&&j.instanceMatrix)v0=j.instanceMatrix;if(u==="instanceColor"&&j.instanceColor)v0=j.instanceColor}if($0===void 0)return!0;if($0.attribute!==v0)return!0;if(v0&&$0.data!==v0.data)return!0;m++}if(K.attributesNum!==m)return!0;if(K.index!==S)return!0;return!1}function O(j,h,i,S){let p={},o=h.attributes,m=0,K0=i.getAttributes();for(let u in K0)if(K0[u].location>=0){let $0=o[u];if($0===void 0){if(u==="instanceMatrix"&&j.instanceMatrix)$0=j.instanceMatrix;if(u==="instanceColor"&&j.instanceColor)$0=j.instanceColor}let v0={};if(v0.attribute=$0,$0&&$0.data)v0.data=$0.data;p[u]=v0,m++}K.attributes=p,K.attributesNum=m,K.index=S}function R(){let j=K.newAttributes;for(let h=0,i=j.length;h<i;h++)j[h]=0}function D(j){F(j,0)}function F(j,h){let{newAttributes:i,enabledAttributes:S,attributeDivisors:p}=K;if(i[j]=1,S[j]===0)J.enableVertexAttribArray(j),S[j]=1;if(p[j]!==h)J.vertexAttribDivisor(j,h),p[j]=h}function V(){let{newAttributes:j,enabledAttributes:h}=K;for(let i=0,S=h.length;i<S;i++)if(h[i]!==j[i])J.disableVertexAttribArray(i),h[i]=0}function A(j,h,i,S,p,o,m){if(m===!0)J.vertexAttribIPointer(j,h,i,p,o);else J.vertexAttribPointer(j,h,i,S,p,o)}function M(j,h,i,S){R();let p=S.attributes,o=i.getAttributes(),m=h.defaultAttributeValues;for(let K0 in o){let u=o[K0];if(u.location>=0){let r=p[K0];if(r===void 0){if(K0==="instanceMatrix"&&j.instanceMatrix)r=j.instanceMatrix;if(K0==="instanceColor"&&j.instanceColor)r=j.instanceColor}if(r!==void 0){let{normalized:$0,itemSize:v0}=r,f0=Q.get(r);if(f0===void 0)continue;let{buffer:XJ,type:o0,bytesPerElement:n}=f0,Y0=o0===J.INT||o0===J.UNSIGNED_INT||r.gpuType===qW;if(r.isInterleavedBufferAttribute){let Z0=r.data,h0=Z0.stride,g0=r.offset;if(Z0.isInstancedInterleavedBuffer){for(let w0=0;w0<u.locationSize;w0++)F(u.location+w0,Z0.meshPerAttribute);if(j.isInstancedMesh!==!0&&S._maxInstanceCount===void 0)S._maxInstanceCount=Z0.meshPerAttribute*Z0.count}else for(let w0=0;w0<u.locationSize;w0++)D(u.location+w0);J.bindBuffer(J.ARRAY_BUFFER,XJ);for(let w0=0;w0<u.locationSize;w0++)A(u.location+w0,v0/u.locationSize,o0,$0,h0*n,(g0+v0/u.locationSize*w0)*n,Y0)}else{if(r.isInstancedBufferAttribute){for(let Z0=0;Z0<u.locationSize;Z0++)F(u.location+Z0,r.meshPerAttribute);if(j.isInstancedMesh!==!0&&S._maxInstanceCount===void 0)S._maxInstanceCount=r.meshPerAttribute*r.count}else for(let Z0=0;Z0<u.locationSize;Z0++)D(u.location+Z0);J.bindBuffer(J.ARRAY_BUFFER,XJ);for(let Z0=0;Z0<u.locationSize;Z0++)A(u.location+Z0,v0/u.locationSize,o0,$0,v0*n,v0/u.locationSize*Z0*n,Y0)}}else if(m!==void 0){let $0=m[K0];if($0!==void 0)switch($0.length){case 2:J.vertexAttrib2fv(u.location,$0);break;case 3:J.vertexAttrib3fv(u.location,$0);break;case 4:J.vertexAttrib4fv(u.location,$0);break;default:J.vertexAttrib1fv(u.location,$0)}}}}V()}function z(){I();for(let j in W){let h=W[j];for(let i in h){let S=h[i];for(let p in S){let o=S[p];for(let m in o)N(o[m].object),delete o[m];delete S[p]}}delete W[j]}}function _(j){if(W[j.id]===void 0)return;let h=W[j.id];for(let i in h){let S=h[i];for(let p in S){let o=S[p];for(let m in o)N(o[m].object),delete o[m];delete S[p]}}delete W[j.id]}function w(j){for(let h in W){let i=W[h];for(let S in i){let p=i[S];if(p[j.id]===void 0)continue;let o=p[j.id];for(let m in o)N(o[m].object),delete o[m];delete p[j.id]}}}function k(j){for(let h in W){let i=W[h],S=j.isInstancedMesh===!0?j.id:0,p=i[S];if(p===void 0)continue;for(let o in p){let m=p[o];for(let K0 in m)N(m[K0].object),delete m[K0];delete p[o]}if(delete i[S],Object.keys(i).length===0)delete W[h]}}function I(){if(b(),H=!0,K===Z)return;K=Z,U(K.object)}function b(){Z.geometry=null,Z.program=null,Z.wireframe=!1}return{setup:Y,reset:I,resetDefaultState:b,dispose:z,releaseStatesOfGeometry:_,releaseStatesOfObject:k,releaseStatesOfProgram:w,initAttributes:R,enableAttribute:D,disableUnusedAttributes:V}}function bF(J,Q,$){let W;function Z(X){W=X}function K(X,U){J.drawArrays(W,X,U),$.update(U,W,1)}function H(X,U,N){if(N===0)return;J.drawArraysInstanced(W,X,U,N),$.update(U,W,N)}function Y(X,U,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(W,X,0,U,0,N);let G=0;for(let q=0;q<N;q++)G+=U[q];$.update(G,W,1)}this.setMode=Z,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y}function xF(J,Q,$,W){let Z;function K(){if(Z!==void 0)return Z;if(Q.has("EXT_texture_filter_anisotropic")===!0){let w=Q.get("EXT_texture_filter_anisotropic");Z=J.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else Z=0;return Z}function H(w){if(w!==C9&&W.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(w){let k=w===A9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(w!==F9&&w!==p9&&!k&&W.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function X(w){if(w==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";w="mediump"}if(w==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",N=X(U);if(N!==U)N0("WebGLRenderer:",U,"not supported, using",N,"instead."),U=N;let E=$.logarithmicDepthBuffer===!0,G=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&G===!1)N0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let q=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_TEXTURE_SIZE),D=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),F=J.getParameter(J.MAX_VERTEX_ATTRIBS),V=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),A=J.getParameter(J.MAX_VARYING_VECTORS),M=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),z=J.getParameter(J.MAX_SAMPLES),_=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:G,maxTextures:q,maxVertexTextures:O,maxTextureSize:R,maxCubemapSize:D,maxAttributes:F,maxVertexUniforms:V,maxVaryings:A,maxFragmentUniforms:M,maxSamples:z,samples:_}}function gF(J){let Q=this,$=null,W=0,Z=!1,K=!1,H=new k9,Y=new d0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(E,G){let q=E.length!==0||G||W!==0||Z;return Z=G,W=E.length,q},this.beginShadows=function(){K=!0,N(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(E,G){$=N(E,G,0)},this.setState=function(E,G,q){let{clippingPlanes:O,clipIntersection:R,clipShadows:D}=E,F=J.get(E);if(!Z||O===null||O.length===0||K&&!D)if(K)N(null);else U();else{let V=K?0:W,A=V*4,M=F.clippingState||null;X.value=M,M=N(O,G,A,q);for(let z=0;z!==A;++z)M[z]=$[z];F.clippingState=M,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=V}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=W>0;Q.numPlanes=W,Q.numIntersection=0}function N(E,G,q,O){let R=E!==null?E.length:0,D=null;if(R!==0){if(D=X.value,O!==!0||D===null){let F=q+R*4,V=G.matrixWorldInverse;if(Y.getNormalMatrix(V),D===null||D.length<F)D=new Float32Array(F);for(let A=0,M=q;A!==R;++A,M+=4)H.copy(E[A]).applyMatrix4(V,Y),H.normal.toArray(D,M),D[M+3]=H.constant}X.value=D,X.needsUpdate=!0}return Q.numPlanes=R,Q.numIntersection=0,D}}var V7=4,pF=6,mF=20,lF=256,N6=new k7,JU=new B0,eZ=null,JK=0,QK=0,$K=!1,dF=new P,f8=new P;class KK{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,W=100,Z={}){let{size:K=256,position:H=dF}=Z;eZ=this._renderer.getRenderTarget(),JK=this._renderer.getActiveCubeFace(),QK=this._renderer.getActiveMipmapLevel(),$K=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(K);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,W,Y,H),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=WU(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=$U(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(eZ,JK,QK),this._renderer.xr.enabled=$K,J.scissorTest=!1,L7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===F7||J.mapping===z8)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);eZ=this._renderer.getRenderTarget(),JK=this._renderer.getActiveCubeFace(),QK=this._renderer.getActiveMipmapLevel(),$K=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:aJ,minFilter:aJ,generateMipmaps:!1,type:A9,format:C9,colorSpace:aW,depthBuffer:!1},W=QU(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=QU(J,Q,$);let{_lodMax:Z}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=uF(Z)),this._blurMaterial=nF(Z,J,Q),this._ggxMaterial=cF(Z,J,Q)}return W}_compileMaterial(J){let Q=new zJ(new c0,J);this._renderer.compile(Q,N6)}_sceneToCubeUV(J,Q,$,W,Z){let Y=new TJ(90,1,Q,$),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],N=this._renderer,E=N.autoClear,G=N.toneMapping;if(N.getClearColor(JU),N.toneMapping=q9,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(W),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new zJ(new j8,new m9({name:"PMREM.Background",side:oJ,depthWrite:!1,depthTest:!1}));let O=this._backgroundBox,R=O.material,D=!1,F=J.background;if(F){if(F.isColor)R.color.copy(F),J.background=null,D=!0}else R.color.copy(JU),D=!0;for(let V=0;V<6;V++){let A=V%3;if(A===0)Y.up.set(0,X[V],0),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x+U[V],Z.y,Z.z);else if(A===1)Y.up.set(0,0,X[V]),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x,Z.y+U[V],Z.z);else Y.up.set(0,X[V],0),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x,Z.y,Z.z+U[V]);let M=this._cubeSize;if(L7(W,A*M,V>2?M:0,M,M),N.setRenderTarget(W),D)N.render(O,Y);N.render(J,Y)}N.toneMapping=G,N.autoClear=E,J.background=F}_textureToCubeUV(J,Q){let $=this._renderer,W=J.mapping===F7||J.mapping===z8;if(W){if(this._cubemapMaterial===null)this._cubemapMaterial=WU();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=$U();let Z=W?this._cubemapMaterial:this._equirectMaterial,K=this._lodMeshes[0];K.material=Z;let H=Z.uniforms;H.envMap.value=J;let Y=this._cubeSize;L7(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(K,N6)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let W=this._lodMeshes.length;for(let Z=1;Z<W;Z++)this._applyGGXFilter(J,Z-1,Z);Q.autoClear=$}_applyGGXFilter(J,Q,$){let W=this._renderer,Z=this._pingPongRenderTarget,K=this._ggxMaterial,H=this._lodMeshes[$];H.material=K;let Y=K.uniforms,X=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),N=Math.sqrt(X*X-U*U),E=X*1.25,G=N*E,{_lodMax:q}=this,O=this._sizeLods[$],R=3*O*($>q-V7?$-q+V7:0),D=4*(this._cubeSize-O);Y.envMap.value=J.texture,Y.roughness.value=G,Y.mipInt.value=q-Q,L7(Z,R,D,3*O,2*O),W.setRenderTarget(Z),W.render(H,N6),Y.envMap.value=Z.texture,Y.roughness.value=0,Y.mipInt.value=q-$,L7(J,R,D,3*O,2*O),W.setRenderTarget(J),W.render(H,N6)}_blur(J,Q,$,W){let Z=this._pingPongRenderTarget,K=Math.min(W,Math.PI)/Math.SQRT2;this._blurPass(J,Z,Q,$,K),this._blurPass(Z,J,$,$,K)}_blurPass(J,Q,$,W,Z){let K=this._renderer,H=this._blurMaterial,Y=this._lodMeshes[W];Y.material=H;let X=H.uniforms;X.envMap.value=J.texture,X.sigma.value=Z,X.mipInt.value=this._lodMax-$;let U=this._sizeLods[W],N=3*U*(W>this._lodMax-V7?W-this._lodMax+V7:0),E=4*(this._cubeSize-U);L7(Q,N,E,3*U,2*U),K.setRenderTarget(Q),K.render(Y,N6)}}function uF(J){let Q=[],$=[],W=J,Z=J-V7+1+pF;for(let K=0;K<Z;K++){let H=Math.pow(2,W);Q.push(H);let Y=1/(H-2),X=-Y,U=1+Y,N=[X,X,U,X,U,U,X,X,U,U,X,U],E=6,G=6,q=3,O=new Float32Array(q*G*E),R=new Float32Array(q*G*E);for(let F=0;F<E;F++){let V=F%3*2/3-1,A=F>2?0:-1,M=[V,A,0,V+0.6666666666666666,A,0,V+0.6666666666666666,A+1,0,V,A,0,V+0.6666666666666666,A+1,0,V,A+1,0];O.set(M,q*G*F);for(let z=0;z<G;z++){let _=N[z*2]*2-1,w=N[z*2+1]*2-1;if(F===0)f8.set(1,w,_);else if(F===1)f8.set(-_,1,-w);else if(F===2)f8.set(-_,w,1);else if(F===3)f8.set(-1,w,-_);else if(F===4)f8.set(-_,-1,w);else f8.set(_,w,-1);f8.toArray(R,(F*G+z)*q)}}let D=new c0;if(D.setAttribute("position",new qJ(O,q)),D.setAttribute("outputDirection",new qJ(R,q)),$.push(new zJ(D,null)),W>V7)W--}return{lodMeshes:$,sizeLods:Q}}function QU(J,Q,$){let W=new uJ(J,Q,$);return W.texture.mapping=s7,W.texture.name="PMREM.cubeUv",W.scissorTest=!0,W}function L7(J,Q,$,W,Z){J.viewport.set(Q,$,W,Z),J.scissor.set(Q,$,W,Z)}function cF(J,Q,$){return new Q9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lF,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:G$(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:z9,depthTest:!1,depthWrite:!1})}function nF(J,Q,$){return new Q9({name:"SphericalGaussianBlur",defines:{SAMPLES:mF,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:G$(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:z9,depthTest:!1,depthWrite:!1})}function $U(){return new Q9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:G$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:z9,depthTest:!1,depthWrite:!1})}function WU(){return new Q9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:G$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:z9,depthTest:!1,depthWrite:!1})}function G$(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class XK extends uJ{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},W=[$,$,$,$,$,$];this.texture=new O7(W),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},W=new j8(5,5,5),Z=new Q9({name:"CubemapFromEquirect",uniforms:y8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:oJ,blending:z9});Z.uniforms.tEquirect.value=Q;let K=new zJ(W,Z),H=Q.minFilter;if(Q.minFilter===A8)Q.minFilter=aJ;return new lZ(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,W=!0){let Z=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,W);J.setRenderTarget(Z)}}function sF(J){let Q=new WeakMap,$=new WeakMap,W=null;function Z(G,q=!1){if(G===null||G===void 0)return null;if(q)return H(G);return K(G)}function K(G){if(G&&G.isTexture){let q=G.mapping;if(q===GQ||q===NQ)if(Q.has(G)){let O=Q.get(G).texture;return Y(O,G.mapping)}else{let O=G.image;if(O&&O.height>0){let R=new XK(O.height);return R.fromEquirectangularTexture(J,G),Q.set(G,R),G.addEventListener("dispose",U),Y(R.texture,G.mapping)}else return null}}return G}function H(G){if(G&&G.isTexture){let q=G.mapping,O=q===GQ||q===NQ,R=q===F7||q===z8;if(O||R){let D=$.get(G),F=D!==void 0?D.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==F){if(W===null)W=new KK(J);return D=O?W.fromEquirectangular(G,D):W.fromCubemap(G,D),D.texture.pmremVersion=G.pmremVersion,$.set(G,D),D.texture}else if(D!==void 0)return D.texture;else{let V=G.image;if(O&&V&&V.height>0||R&&V&&X(V)){if(W===null)W=new KK(J);return D=O?W.fromEquirectangular(G):W.fromCubemap(G),D.texture.pmremVersion=G.pmremVersion,$.set(G,D),G.addEventListener("dispose",N),D.texture}else return null}}}return G}function Y(G,q){if(q===GQ)G.mapping=F7;else if(q===NQ)G.mapping=z8;return G}function X(G){let q=0,O=6;for(let R=0;R<O;R++)if(G[R]!==void 0)q++;return q===O}function U(G){let q=G.target;q.removeEventListener("dispose",U);let O=Q.get(q);if(O!==void 0)Q.delete(q),O.dispose()}function N(G){let q=G.target;q.removeEventListener("dispose",N);let O=$.get(q);if(O!==void 0)$.delete(q),O.dispose()}function E(){if(Q=new WeakMap,$=new WeakMap,W!==null)W.dispose(),W=null}return{get:Z,dispose:E}}function iF(J){let Q={};function $(W){if(Q[W]!==void 0)return Q[W];let Z=J.getExtension(W);return Q[W]=Z,Z}return{has:function(W){return $(W)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(W){let Z=$(W);if(Z===null)b9("WebGLRenderer: "+W+" extension not supported.");return Z}}}function oF(J,Q,$,W){let Z={},K=new WeakMap;function H(E){let G=E.target;if(G.index!==null)Q.remove(G.index);for(let O in G.attributes)Q.remove(G.attributes[O]);G.removeEventListener("dispose",H),delete Z[G.id];let q=K.get(G);if(q)Q.remove(q),K.delete(G);if(W.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;$.memory.geometries--}function Y(E,G){if(Z[G.id]===!0)return G;return G.addEventListener("dispose",H),Z[G.id]=!0,$.memory.geometries++,G}function X(E){let G=E.attributes;for(let q in G)Q.update(G[q],J.ARRAY_BUFFER)}function U(E){let G=[],q=E.index,O=E.attributes.position,R=0;if(O===void 0)return;if(q!==null){let V=q.array;R=q.version;for(let A=0,M=V.length;A<M;A+=3){let z=V[A+0],_=V[A+1],w=V[A+2];G.push(z,_,_,w,w,z)}}else{let V=O.array;R=O.version;for(let A=0,M=V.length/3-1;A<M;A+=3){let z=A+0,_=A+1,w=A+2;G.push(z,_,_,w,w,z)}}let D=new(O.count>=65535?CQ:AQ)(G,1);D.version=R;let F=K.get(E);if(F)Q.remove(F);K.set(E,D)}function N(E){let G=K.get(E);if(G){let q=E.index;if(q!==null){if(G.version<q.version)U(E)}}else U(E);return K.get(E)}return{get:Y,update:X,getWireframeAttribute:N}}function aF(J,Q,$){let W;function Z(E){W=E}let K,H;function Y(E){K=E.type,H=E.bytesPerElement}function X(E,G){J.drawElements(W,G,K,E*H),$.update(G,W,1)}function U(E,G,q){if(q===0)return;J.drawElementsInstanced(W,G,K,E*H,q),$.update(G,W,q)}function N(E,G,q){if(q===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(W,G,0,K,E,0,q);let R=0;for(let D=0;D<q;D++)R+=G[D];$.update(R,W,1)}this.setMode=Z,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=N}function rF(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function W(K,H,Y){switch($.calls++,H){case J.TRIANGLES:$.triangles+=Y*(K/3);break;case J.LINES:$.lines+=Y*(K/2);break;case J.LINE_STRIP:$.lines+=Y*(K-1);break;case J.LINE_LOOP:$.lines+=Y*K;break;case J.POINTS:$.points+=Y*K;break;default:S0("WebGLInfo: Unknown draw mode:",H);break}}function Z(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:Z,update:W}}function tF(J,Q,$){let W=new WeakMap,Z=new GJ;function K(H,Y,X){let U=H.morphTargetInfluences,N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,E=N!==void 0?N.length:0,G=W.get(Y);if(G===void 0||G.count!==E){let I=function(){w.dispose(),W.delete(Y),Y.removeEventListener("dispose",I)};if(G!==void 0)G.texture.dispose();let q=Y.morphAttributes.position!==void 0,O=Y.morphAttributes.normal!==void 0,R=Y.morphAttributes.color!==void 0,D=Y.morphAttributes.position||[],F=Y.morphAttributes.normal||[],V=Y.morphAttributes.color||[],A=0;if(q===!0)A=1;if(O===!0)A=2;if(R===!0)A=3;let M=Y.attributes.position.count*A,z=1;if(M>Q.maxTextureSize)z=Math.ceil(M/Q.maxTextureSize),M=Q.maxTextureSize;let _=new Float32Array(M*z*4*E),w=new a7(_,M,z,E);w.type=p9,w.needsUpdate=!0;let k=A*4;for(let b=0;b<E;b++){let j=D[b],h=F[b],i=V[b],S=M*z*4*b;for(let p=0;p<j.count;p++){let o=p*k;if(q===!0)Z.fromBufferAttribute(j,p),_[S+o+0]=Z.x,_[S+o+1]=Z.y,_[S+o+2]=Z.z,_[S+o+3]=0;if(O===!0)Z.fromBufferAttribute(h,p),_[S+o+4]=Z.x,_[S+o+5]=Z.y,_[S+o+6]=Z.z,_[S+o+7]=0;if(R===!0)Z.fromBufferAttribute(i,p),_[S+o+8]=Z.x,_[S+o+9]=Z.y,_[S+o+10]=Z.z,_[S+o+11]=i.itemSize===4?Z.w:1}}G={count:E,texture:w,size:new e(M,z)},W.set(Y,G),Y.addEventListener("dispose",I)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let q=0;for(let R=0;R<U.length;R++)q+=U[R];let O=Y.morphTargetsRelative?1:1-q;X.getUniforms().setValue(J,"morphTargetBaseInfluence",O),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",G.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:K}}function eF(J,Q,$,W,Z){let K=new WeakMap;function H(U){let N=Z.render.frame,E=U.geometry,G=Q.get(U,E);if(K.get(G)!==N)Q.update(G),K.set(G,N);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(K.get(U)!==N){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);K.set(U,N)}}if(U.isSkinnedMesh){let q=U.skeleton;if(K.get(q)!==N)q.update(),K.set(q,N)}return G}function Y(){K=new WeakMap}function X(U){let N=U.target;if(N.removeEventListener("dispose",X),W.releaseStatesOfObject(N),$.remove(N.instanceMatrix),N.instanceColor!==null)$.remove(N.instanceColor)}return{update:H,dispose:Y}}var JD={[HW]:"LINEAR_TONE_MAPPING",[YW]:"REINHARD_TONE_MAPPING",[XW]:"CINEON_TONE_MAPPING",[UW]:"ACES_FILMIC_TONE_MAPPING",[NW]:"AGX_TONE_MAPPING",[EW]:"NEUTRAL_TONE_MAPPING",[GW]:"CUSTOM_TONE_MAPPING"};function QD(J,Q,$,W,Z,K){let H=new uJ(Q,$,{type:J,depthBuffer:Z,stencilBuffer:K,samples:W?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,X=null,U=new c0;U.setAttribute("position",new A0([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new A0([0,2,0,0,2,0],2));let N=new aQ({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),E=new zJ(U,N),G=new k7(-1,1,1,-1,0,1),q=null,O=null,R=!1,D,F=null,V=[],A=!1;this.setSize=function(M,z){if(H.setSize(M,z),Y!==null)Y.setSize(M,z);if(X!==null)X.setSize(M,z);for(let _=0;_<V.length;_++){let w=V[_];if(w.setSize)w.setSize(M,z)}},this.setEffects=function(M){V=M,A=V.length>0&&V[0].isRenderPass===!0;let{width:z,height:_}=H;if(V.length>0&&Y===null)Y=new uJ(z,_,{type:A9,depthBuffer:!1,stencilBuffer:!1}),X=new uJ(z,_,{type:A9,depthBuffer:!1,stencilBuffer:!1});for(let w=0;w<V.length;w++){let k=V[w];if(k.setSize)k.setSize(z,_)}},this.begin=function(M,z){if(R)return!1;if(M.toneMapping===q9&&V.length===0)return!1;if(F=z,z!==null){let{width:_,height:w}=z;if(H.width!==_||H.height!==w)this.setSize(_,w)}if(A===!1)M.setRenderTarget(H);return D=M.toneMapping,M.toneMapping=q9,!0},this.hasRenderPass=function(){return A},this.end=function(M,z){M.toneMapping=D,R=!0;let _=H,w=Y;for(let k=0;k<V.length;k++){let I=V[k];if(I.enabled===!1)continue;if(I.render(M,w,_,z),I.needsSwap!==!1)_=w,w=w===Y?X:Y}if(q!==M.outputColorSpace||O!==M.toneMapping){if(q=M.outputColorSpace,O=M.toneMapping,N.defines={},QJ.getTransfer(q)===DJ)N.defines.SRGB_TRANSFER="";let k=JD[O];if(k)N.defines[k]="";N.needsUpdate=!0}N.uniforms.tDiffuse.value=_.texture,M.setRenderTarget(F),M.render(E,G),F=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){if(H.dispose(),Y!==null)Y.dispose();if(X!==null)X.dispose();U.dispose(),N.dispose()}}var IU=new LJ,HK=new S8(1,1),zU=new a7,AU=new r7,CU=new O7,ZU=[],KU=[],HU=new Float32Array(16),YU=new Float32Array(9),XU=new Float32Array(4);function B7(J,Q,$){let W=J[0];if(W<=0||W>0)return J;let Z=Q*$,K=ZU[Z];if(K===void 0)K=new Float32Array(Z),ZU[Z]=K;if(Q!==0){W.toArray(K,0);for(let H=1,Y=0;H!==Q;++H)Y+=$,J[H].toArray(K,Y)}return K}function wJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,W=J.length;$<W;$++)if(J[$]!==Q[$])return!1;return!0}function _J(J,Q){for(let $=0,W=Q.length;$<W;$++)J[$]=Q[$]}function N$(J,Q){let $=KU[Q];if($===void 0)$=new Int32Array(Q),KU[Q]=$;for(let W=0;W!==Q;++W)$[W]=J.allocateTextureUnit();return $}function $D(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function WD(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(wJ($,Q))return;J.uniform2fv(this.addr,Q),_J($,Q)}}function ZD(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(wJ($,Q))return;J.uniform3fv(this.addr,Q),_J($,Q)}}function KD(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(wJ($,Q))return;J.uniform4fv(this.addr,Q),_J($,Q)}}function HD(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(wJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),_J($,Q)}else{if(wJ($,W))return;XU.set(W),J.uniformMatrix2fv(this.addr,!1,XU),_J($,W)}}function YD(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(wJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),_J($,Q)}else{if(wJ($,W))return;YU.set(W),J.uniformMatrix3fv(this.addr,!1,YU),_J($,W)}}function XD(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(wJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),_J($,Q)}else{if(wJ($,W))return;HU.set(W),J.uniformMatrix4fv(this.addr,!1,HU),_J($,W)}}function UD(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function GD(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(wJ($,Q))return;J.uniform2iv(this.addr,Q),_J($,Q)}}function ND(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(wJ($,Q))return;J.uniform3iv(this.addr,Q),_J($,Q)}}function ED(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(wJ($,Q))return;J.uniform4iv(this.addr,Q),_J($,Q)}}function qD(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function FD(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(wJ($,Q))return;J.uniform2uiv(this.addr,Q),_J($,Q)}}function DD(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(wJ($,Q))return;J.uniform3uiv(this.addr,Q),_J($,Q)}}function OD(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(wJ($,Q))return;J.uniform4uiv(this.addr,Q),_J($,Q)}}function RD(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;let K;if(this.type===J.SAMPLER_2D_SHADOW)HK.compareFunction=$.isReversedDepthBuffer()?VQ:LQ,K=HK;else K=IU;$.setTexture2D(Q||K,Z)}function MD(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture3D(Q||AU,Z)}function kD(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTextureCube(Q||CU,Z)}function LD(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture2DArray(Q||zU,Z)}function VD(J){switch(J){case 5126:return $D;case 35664:return WD;case 35665:return ZD;case 35666:return KD;case 35674:return HD;case 35675:return YD;case 35676:return XD;case 5124:case 35670:return UD;case 35667:case 35671:return GD;case 35668:case 35672:return ND;case 35669:case 35673:return ED;case 5125:return qD;case 36294:return FD;case 36295:return DD;case 36296:return OD;case 35678:case 36198:case 36298:case 36306:case 35682:return RD;case 35679:case 36299:case 36307:return MD;case 35680:case 36300:case 36308:case 36293:return kD;case 36289:case 36303:case 36311:case 36292:return LD}}function BD(J,Q){J.uniform1fv(this.addr,Q)}function ID(J,Q){let $=B7(Q,this.size,2);J.uniform2fv(this.addr,$)}function zD(J,Q){let $=B7(Q,this.size,3);J.uniform3fv(this.addr,$)}function AD(J,Q){let $=B7(Q,this.size,4);J.uniform4fv(this.addr,$)}function CD(J,Q){let $=B7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function wD(J,Q){let $=B7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function _D(J,Q){let $=B7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function PD(J,Q){J.uniform1iv(this.addr,Q)}function TD(J,Q){J.uniform2iv(this.addr,Q)}function SD(J,Q){J.uniform3iv(this.addr,Q)}function jD(J,Q){J.uniform4iv(this.addr,Q)}function yD(J,Q){J.uniform1uiv(this.addr,Q)}function vD(J,Q){J.uniform2uiv(this.addr,Q)}function fD(J,Q){J.uniform3uiv(this.addr,Q)}function hD(J,Q){J.uniform4uiv(this.addr,Q)}function bD(J,Q,$){let W=this.cache,Z=Q.length,K=N$($,Z);if(!wJ(W,K))J.uniform1iv(this.addr,K),_J(W,K);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=HK;else H=IU;for(let Y=0;Y!==Z;++Y)$.setTexture2D(Q[Y]||H,K[Y])}function xD(J,Q,$){let W=this.cache,Z=Q.length,K=N$($,Z);if(!wJ(W,K))J.uniform1iv(this.addr,K),_J(W,K);for(let H=0;H!==Z;++H)$.setTexture3D(Q[H]||AU,K[H])}function gD(J,Q,$){let W=this.cache,Z=Q.length,K=N$($,Z);if(!wJ(W,K))J.uniform1iv(this.addr,K),_J(W,K);for(let H=0;H!==Z;++H)$.setTextureCube(Q[H]||CU,K[H])}function pD(J,Q,$){let W=this.cache,Z=Q.length,K=N$($,Z);if(!wJ(W,K))J.uniform1iv(this.addr,K),_J(W,K);for(let H=0;H!==Z;++H)$.setTexture2DArray(Q[H]||zU,K[H])}function mD(J){switch(J){case 5126:return BD;case 35664:return ID;case 35665:return zD;case 35666:return AD;case 35674:return CD;case 35675:return wD;case 35676:return _D;case 5124:case 35670:return PD;case 35667:case 35671:return TD;case 35668:case 35672:return SD;case 35669:case 35673:return jD;case 5125:return yD;case 36294:return vD;case 36295:return fD;case 36296:return hD;case 35678:case 36198:case 36298:case 36306:case 35682:return bD;case 35679:case 36299:case 36307:return xD;case 35680:case 36300:case 36308:case 36293:return gD;case 36289:case 36303:case 36311:case 36292:return pD}}class wU{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=VD(Q.type)}}class _U{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=mD(Q.type)}}class PU{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let W=this.seq;for(let Z=0,K=W.length;Z!==K;++Z){let H=W[Z];H.setValue(J,Q[H.id],$)}}}var WK=/(\w+)(\])?(\[|\.)?/g;function UU(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function lD(J,Q,$){let W=J.name,Z=W.length;WK.lastIndex=0;while(!0){let K=WK.exec(W),H=WK.lastIndex,Y=K[1],X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===Z){UU($,U===void 0?new wU(Y,J,Q):new _U(Y,J,Q));break}else{let E=$.map[Y];if(E===void 0)E=new PU(Y),UU($,E);$=E}}}class F6{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){let H=J.getActiveUniform(Q,K),Y=J.getUniformLocation(Q,H.name);lD(H,Y,this)}let W=[],Z=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)W.push(K);else Z.push(K);if(W.length>0)this.seq=W.concat(Z)}setValue(J,Q,$,W){let Z=this.map[Q];if(Z!==void 0)Z.setValue(J,$,W)}setOptional(J,Q,$){let W=Q[$];if(W!==void 0)this.setValue(J,$,W)}static upload(J,Q,$,W){for(let Z=0,K=Q.length;Z!==K;++Z){let H=Q[Z],Y=$[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,W)}}static seqWithValue(J,Q){let $=[];for(let W=0,Z=J.length;W!==Z;++W){let K=J[W];if(K.id in Q)$.push(K)}return $}}function GU(J,Q,$){let W=J.createShader(Q);return J.shaderSource(W,$),J.compileShader(W),W}var dD=37297,uD=0;function cD(J,Q){let $=J.split(`
`),W=[],Z=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let H=Z;H<K;H++){let Y=H+1;W.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return W.join(`
`)}var NU=new d0;function nD(J){QJ._getMatrix(NU,QJ.workingColorSpace,J);let Q=`mat3( ${NU.elements.map(($)=>$.toFixed(4))} )`;switch(QJ.getTransfer(J)){case rW:return[Q,"LinearTransferOETF"];case DJ:return[Q,"sRGBTransferOETF"];default:return N0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function EU(J,Q,$){let W=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(W&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let Y=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+cD(J.getShaderSource(Q),Y)}else return K}function sD(J,Q){let $=nD(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var iD={[HW]:"Linear",[YW]:"Reinhard",[XW]:"Cineon",[UW]:"ACESFilmic",[NW]:"AgX",[EW]:"Neutral",[GW]:"Custom"};function oD(J,Q){let $=iD[Q];if($===void 0)return N0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var U$=new P;function aD(){QJ.getLuminanceCoefficients(U$);let J=U$.x.toFixed(4),Q=U$.y.toFixed(4),$=U$.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function rD(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(q6).join(`
`)}function tD(J){let Q=[];for(let $ in J){let W=J[$];if(W===!1)continue;Q.push("#define "+$+" "+W)}return Q.join(`
`)}function eD(J,Q){let $={},W=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let Z=0;Z<W;Z++){let K=J.getActiveAttrib(Q,Z),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function q6(J){return J!==""}function qU(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function FU(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var J1=/^[ \t]*#include +<([\w\d./]+)>/gm;function YK(J){return J.replace(J1,$1)}var Q1=new Map;function $1(J,Q){let $=r0[Q];if($===void 0){let W=Q1.get(Q);if(W!==void 0)$=r0[W],N0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,W);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return YK($)}var W1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function DU(J){return J.replace(W1,Z1)}function Z1(J,Q,$,W){let Z="";for(let K=parseInt(Q);K<parseInt($);K++)Z+=W.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return Z}function OU(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var K1={[c7]:"SHADOWMAP_TYPE_PCF",[N7]:"SHADOWMAP_TYPE_VSM"};function H1(J){return K1[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Y1={[F7]:"ENVMAP_TYPE_CUBE",[z8]:"ENVMAP_TYPE_CUBE",[s7]:"ENVMAP_TYPE_CUBE_UV"};function X1(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return Y1[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var U1={[z8]:"ENVMAP_MODE_REFRACTION"};function G1(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return U1[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var N1={[YY]:"ENVMAP_BLENDING_MULTIPLY",[XY]:"ENVMAP_BLENDING_MIX",[UY]:"ENVMAP_BLENDING_ADD"};function E1(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return N1[J.combine]||"ENVMAP_BLENDING_NONE"}function q1(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,W=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:W,maxMip:$}}function F1(J,Q,$,W){let Z=J.getContext(),K=$.defines,H=$.vertexShader,Y=$.fragmentShader,X=H1($),U=X1($),N=G1($),E=E1($),G=q1($),q=rD($),O=tD(K),R=Z.createProgram(),D,F,V=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(D=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(q6).join(`
`),D.length>0)D+=`
`;if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(q6).join(`
`),F.length>0)F+=`
`}else D=[OU($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(q6).join(`
`),F=[OU($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+N:"",$.envMap?"#define "+E:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==q9?"#define TONE_MAPPING":"",$.toneMapping!==q9?r0.tonemapping_pars_fragment:"",$.toneMapping!==q9?oD("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",r0.colorspace_pars_fragment,sD("linearToOutputTexel",$.outputColorSpace),aD(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(q6).join(`
`);if(H=YK(H),H=qU(H,$),H=FU(H,$),Y=YK(Y),Y=qU(Y,$),Y=FU(Y,$),H=DU(H),Y=DU(Y),$.isRawShaderMaterial!==!0)V=`#version 300 es
`,D=[q,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+D,F=["#define varying in",$.glslVersion===tW?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===tW?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F;let A=V+D+H,M=V+F+Y,z=GU(Z,Z.VERTEX_SHADER,A),_=GU(Z,Z.FRAGMENT_SHADER,M);if(Z.attachShader(R,z),Z.attachShader(R,_),$.index0AttributeName!==void 0)Z.bindAttribLocation(R,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)Z.bindAttribLocation(R,0,"position");Z.linkProgram(R);function w(j){if(J.debug.checkShaderErrors){let h=Z.getProgramInfoLog(R)||"",i=Z.getShaderInfoLog(z)||"",S=Z.getShaderInfoLog(_)||"",p=h.trim(),o=i.trim(),m=S.trim(),K0=!0,u=!0;if(Z.getProgramParameter(R,Z.LINK_STATUS)===!1)if(K0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(Z,R,z,_);else{let r=EU(Z,z,"vertex"),$0=EU(Z,_,"fragment");S0("WebGLProgram: Shader Error "+Z.getError()+" - VALIDATE_STATUS "+Z.getProgramParameter(R,Z.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+p+`
`+r+`
`+$0)}else if(p!=="")N0("WebGLProgram: Program Info Log:",p);else if(o===""||m==="")u=!1;if(u)j.diagnostics={runnable:K0,programLog:p,vertexShader:{log:o,prefix:D},fragmentShader:{log:m,prefix:F}}}Z.deleteShader(z),Z.deleteShader(_),k=new F6(Z,R),I=eD(Z,R)}let k;this.getUniforms=function(){if(k===void 0)w(this);return k};let I;this.getAttributes=function(){if(I===void 0)w(this);return I};let b=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(b===!1)b=Z.getProgramParameter(R,dD);return b},this.destroy=function(){W.releaseStatesOfProgram(this),Z.deleteProgram(R),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=uD++,this.cacheKey=Q,this.usedTimes=1,this.program=R,this.vertexShader=z,this.fragmentShader=_,this}var D1=0;class TU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let W=this._getShaderCacheForMaterial(J);if(W.has(Q)===!1)W.add(Q),Q.usedTimes++;if(W.has($)===!1)W.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new SU(J),Q.set(J,$);return $}}class SU{constructor(J){this.id=D1++,this.code=J,this.usedTimes=0}}function O1(J){return J===_8||J===MQ||J===kQ}function R1(J,Q,$,W,Z,K){let H=new t7,Y=new TU,X=new Set,U=[],N=new Map,E=W.logarithmicDepthBuffer,G=W.precision,q={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(k){if(X.add(k),k===0)return"uv";return`uv${k}`}function R(k,I,b,j,h,i){let S=j.fog,p=h.geometry,o=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?j.environment:null,m=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,K0=Q.get(k.envMap||o,m),u=!!K0&&K0.mapping===s7?K0.image.height:null,r=q[k.type];if(k.precision!==null){if(G=W.getMaxPrecision(k.precision),G!==k.precision)N0("WebGLProgram.getParameters:",k.precision,"not supported, using",G,"instead.")}let $0=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v0=$0!==void 0?$0.length:0,f0=0;if(p.morphAttributes.position!==void 0)f0=1;if(p.morphAttributes.normal!==void 0)f0=2;if(p.morphAttributes.color!==void 0)f0=3;let XJ,o0,n,Y0;if(r){let OJ=_9[r];XJ=OJ.vertexShader,o0=OJ.fragmentShader}else{XJ=k.vertexShader,o0=k.fragmentShader;let OJ=Y.getVertexShaderStage(k),HJ=Y.getFragmentShaderStage(k);Y.update(k,OJ,HJ),n=OJ.id,Y0=HJ.id}let Z0=J.getRenderTarget(),h0=J.state.buffers.depth.getReversed(),g0=h.isInstancedMesh===!0,w0=h.isBatchedMesh===!0,UJ=!!k.map,t=!!k.matcap,W0=!!K0,H0=!!k.aoMap,X0=!!k.lightMap,k0=!!k.bumpMap&&k.wireframe===!1,j0=!!k.normalMap,b0=!!k.displacementMap,u0=!!k.emissiveMap,n0=!!k.metalnessMap,T=!!k.roughnessMap,NJ=k.anisotropy>0,t0=k.clearcoat>0,e0=k.dispersion>0,C=k.retroreflectivity>0,L=k.iridescence>0,y=k.sheen>0,l=k.transmission>0,J0=NJ&&!!k.anisotropyMap,U0=t0&&!!k.clearcoatMap,E0=t0&&!!k.clearcoatNormalMap,c=t0&&!!k.clearcoatRoughnessMap,a=L&&!!k.iridescenceMap,V0=L&&!!k.iridescenceThicknessMap,y0=y&&!!k.sheenColorMap,D0=y&&!!k.sheenRoughnessMap,G0=!!k.specularMap,x0=!!k.specularColorMap,p0=!!k.specularIntensityMap,KJ=l&&!!k.transmissionMap,f=l&&!!k.thicknessMap,q0=!!k.gradientMap,s=!!k.alphaMap,F0=k.alphaTest>0,I0=!!k.alphaHash,Q0=!!k.extensions,R0=q9;if(k.toneMapped){if(Z0===null||Z0.isXRRenderTarget===!0)R0=J.toneMapping}let s0={shaderID:r,shaderType:k.type,shaderName:k.name,vertexShader:XJ,fragmentShader:o0,defines:k.defines,customVertexShaderID:n,customFragmentShaderID:Y0,isRawShaderMaterial:k.isRawShaderMaterial===!0,glslVersion:k.glslVersion,precision:G,batching:w0,batchingColor:w0&&h._colorsTexture!==null,instancing:g0,instancingColor:g0&&h.instanceColor!==null,instancingMorph:g0&&h.morphTexture!==null,outputColorSpace:Z0===null?J.outputColorSpace:Z0.isXRRenderTarget===!0?Z0.texture.colorSpace:QJ.workingColorSpace,alphaToCoverage:!!k.alphaToCoverage,map:UJ,matcap:t,envMap:W0,envMapMode:W0&&K0.mapping,envMapCubeUVHeight:u,aoMap:H0,lightMap:X0,bumpMap:k0,normalMap:j0,displacementMap:b0,emissiveMap:u0,normalMapObjectSpace:j0&&k.normalMapType===LY,normalMapTangentSpace:j0&&k.normalMapType===oW,packedNormalMap:j0&&k.normalMapType===oW&&O1(k.normalMap.format),metalnessMap:n0,roughnessMap:T,anisotropy:NJ,anisotropyMap:J0,clearcoat:t0,clearcoatMap:U0,clearcoatNormalMap:E0,clearcoatRoughnessMap:c,dispersion:e0,retroreflection:C,iridescence:L,iridescenceMap:a,iridescenceThicknessMap:V0,sheen:y,sheenColorMap:y0,sheenRoughnessMap:D0,specularMap:G0,specularColorMap:x0,specularIntensityMap:p0,transmission:l,transmissionMap:KJ,thicknessMap:f,gradientMap:q0,opaque:k.transparent===!1&&k.blending===n7&&k.alphaToCoverage===!1,alphaMap:s,alphaTest:F0,alphaHash:I0,combine:k.combine,mapUv:UJ&&O(k.map.channel),aoMapUv:H0&&O(k.aoMap.channel),lightMapUv:X0&&O(k.lightMap.channel),bumpMapUv:k0&&O(k.bumpMap.channel),normalMapUv:j0&&O(k.normalMap.channel),displacementMapUv:b0&&O(k.displacementMap.channel),emissiveMapUv:u0&&O(k.emissiveMap.channel),metalnessMapUv:n0&&O(k.metalnessMap.channel),roughnessMapUv:T&&O(k.roughnessMap.channel),anisotropyMapUv:J0&&O(k.anisotropyMap.channel),clearcoatMapUv:U0&&O(k.clearcoatMap.channel),clearcoatNormalMapUv:E0&&O(k.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:c&&O(k.clearcoatRoughnessMap.channel),iridescenceMapUv:a&&O(k.iridescenceMap.channel),iridescenceThicknessMapUv:V0&&O(k.iridescenceThicknessMap.channel),sheenColorMapUv:y0&&O(k.sheenColorMap.channel),sheenRoughnessMapUv:D0&&O(k.sheenRoughnessMap.channel),specularMapUv:G0&&O(k.specularMap.channel),specularColorMapUv:x0&&O(k.specularColorMap.channel),specularIntensityMapUv:p0&&O(k.specularIntensityMap.channel),transmissionMapUv:KJ&&O(k.transmissionMap.channel),thicknessMapUv:f&&O(k.thicknessMap.channel),alphaMapUv:s&&O(k.alphaMap.channel),vertexTangents:!!p.attributes.tangent&&(j0||NJ),vertexNormals:!!p.attributes.normal,vertexColors:k.vertexColors,vertexAlphas:k.vertexColors===!0&&!!p.attributes.color&&p.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!p.attributes.uv&&(UJ||s),fog:!!S,useFog:k.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:k.wireframe===!1&&(k.flatShading===!0||p.attributes.normal===void 0&&j0===!1&&(k.isMeshLambertMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isMeshPhysicalMaterial)),sizeAttenuation:k.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:h0,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:p.attributes.position!==void 0,morphTargets:p.morphAttributes.position!==void 0,morphNormals:p.morphAttributes.normal!==void 0,morphColors:p.morphAttributes.color!==void 0,morphTargetsCount:v0,morphTextureStride:f0,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:i.length,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:k.dithering,shadowMapEnabled:J.shadowMap.enabled&&b.length>0,shadowMapType:J.shadowMap.type,toneMapping:R0,decodeVideoTexture:UJ&&k.map.isVideoTexture===!0&&QJ.getTransfer(k.map.colorSpace)===DJ,decodeVideoTextureEmissive:u0&&k.emissiveMap.isVideoTexture===!0&&QJ.getTransfer(k.emissiveMap.colorSpace)===DJ,premultipliedAlpha:k.premultipliedAlpha,doubleSided:k.side===I9,flipSided:k.side===oJ,useDepthPacking:k.depthPacking>=0,depthPacking:k.depthPacking||0,index0AttributeName:k.index0AttributeName,extensionClipCullDistance:Q0&&k.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Q0&&k.extensions.multiDraw===!0||w0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:k.customProgramCacheKey()};return s0.vertexUv1s=X.has(1),s0.vertexUv2s=X.has(2),s0.vertexUv3s=X.has(3),X.clear(),s0}function D(k){let I=[];if(k.shaderID)I.push(k.shaderID);else I.push(k.customVertexShaderID),I.push(k.customFragmentShaderID);if(k.defines!==void 0)for(let b in k.defines)I.push(b),I.push(k.defines[b]);if(k.isRawShaderMaterial===!1)F(I,k),V(I,k),I.push(J.outputColorSpace);return I.push(k.customProgramCacheKey),I.join()}function F(k,I){k.push(I.precision),k.push(I.outputColorSpace),k.push(I.envMapMode),k.push(I.envMapCubeUVHeight),k.push(I.mapUv),k.push(I.alphaMapUv),k.push(I.lightMapUv),k.push(I.aoMapUv),k.push(I.bumpMapUv),k.push(I.normalMapUv),k.push(I.displacementMapUv),k.push(I.emissiveMapUv),k.push(I.metalnessMapUv),k.push(I.roughnessMapUv),k.push(I.anisotropyMapUv),k.push(I.clearcoatMapUv),k.push(I.clearcoatNormalMapUv),k.push(I.clearcoatRoughnessMapUv),k.push(I.iridescenceMapUv),k.push(I.iridescenceThicknessMapUv),k.push(I.sheenColorMapUv),k.push(I.sheenRoughnessMapUv),k.push(I.specularMapUv),k.push(I.specularColorMapUv),k.push(I.specularIntensityMapUv),k.push(I.transmissionMapUv),k.push(I.thicknessMapUv),k.push(I.combine),k.push(I.fogExp2),k.push(I.sizeAttenuation),k.push(I.morphTargetsCount),k.push(I.morphAttributeCount),k.push(I.numSunLights),k.push(I.numDirLights),k.push(I.numPointLights),k.push(I.numSpotLights),k.push(I.numSpotLightMaps),k.push(I.numHemiLights),k.push(I.numRectAreaLights),k.push(I.numSunLightShadows),k.push(I.numDirLightShadows),k.push(I.numPointLightShadows),k.push(I.numSpotLightShadows),k.push(I.numSpotLightShadowsWithMaps),k.push(I.numLightProbes),k.push(I.shadowMapType),k.push(I.toneMapping),k.push(I.numClippingPlanes),k.push(I.numClipIntersection),k.push(I.depthPacking)}function V(k,I){if(H.disableAll(),I.instancing)H.enable(0);if(I.instancingColor)H.enable(1);if(I.instancingMorph)H.enable(2);if(I.matcap)H.enable(3);if(I.envMap)H.enable(4);if(I.normalMapObjectSpace)H.enable(5);if(I.normalMapTangentSpace)H.enable(6);if(I.clearcoat)H.enable(7);if(I.iridescence)H.enable(8);if(I.alphaTest)H.enable(9);if(I.vertexColors)H.enable(10);if(I.vertexAlphas)H.enable(11);if(I.vertexUv1s)H.enable(12);if(I.vertexUv2s)H.enable(13);if(I.vertexUv3s)H.enable(14);if(I.vertexTangents)H.enable(15);if(I.anisotropy)H.enable(16);if(I.alphaHash)H.enable(17);if(I.batching)H.enable(18);if(I.dispersion)H.enable(19);if(I.retroreflection)H.enable(24);if(I.batchingColor)H.enable(20);if(I.gradientMap)H.enable(21);if(I.packedNormalMap)H.enable(22);if(I.vertexNormals)H.enable(23);if(k.push(H.mask),H.disableAll(),I.fog)H.enable(0);if(I.useFog)H.enable(1);if(I.flatShading)H.enable(2);if(I.logarithmicDepthBuffer)H.enable(3);if(I.reversedDepthBuffer)H.enable(4);if(I.skinning)H.enable(5);if(I.morphTargets)H.enable(6);if(I.morphNormals)H.enable(7);if(I.morphColors)H.enable(8);if(I.premultipliedAlpha)H.enable(9);if(I.shadowMapEnabled)H.enable(10);if(I.doubleSided)H.enable(11);if(I.flipSided)H.enable(12);if(I.useDepthPacking)H.enable(13);if(I.dithering)H.enable(14);if(I.transmission)H.enable(15);if(I.sheen)H.enable(16);if(I.opaque)H.enable(17);if(I.pointsUvs)H.enable(18);if(I.decodeVideoTexture)H.enable(19);if(I.decodeVideoTextureEmissive)H.enable(20);if(I.alphaToCoverage)H.enable(21);if(I.numLightProbeGrids>0)H.enable(22);if(I.hasPositionAttribute)H.enable(23);k.push(H.mask)}function A(k){let I=q[k.type],b;if(I){let j=_9[I];b=WX.clone(j.uniforms)}else b=k.uniforms;return b}function M(k,I){let b=N.get(I);if(b!==void 0)++b.usedTimes;else b=new F1(J,I,k,Z),U.push(b),N.set(I,b);return b}function z(k){if(--k.usedTimes===0){let I=U.indexOf(k);U[I]=U[U.length-1],U.pop(),N.delete(k.cacheKey),k.destroy()}}function _(k){Y.remove(k)}function w(){Y.dispose()}return{getParameters:R,getProgramCacheKey:D,getUniforms:A,acquireProgram:M,releaseProgram:z,releaseShaderCache:_,programs:U,dispose:w}}function M1(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function W(H){J.delete(H)}function Z(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:Q,get:$,remove:W,update:Z,dispose:K}}function k1(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function RU(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function MU(){let J=[],Q=0,$=[],W=[],Z=[];function K(){Q=0,$.length=0,W.length=0,Z.length=0}function H(G){let q=0;if(G.isInstancedMesh)q+=2;if(G.isSkinnedMesh)q+=1;return q}function Y(G,q,O,R,D,F){let V=J[Q];if(V===void 0)V={id:G.id,object:G,geometry:q,material:O,materialVariant:H(G),groupOrder:R,renderOrder:G.renderOrder,z:D,group:F},J[Q]=V;else V.id=G.id,V.object=G,V.geometry=q,V.material=O,V.materialVariant=H(G),V.groupOrder=R,V.renderOrder=G.renderOrder,V.z=D,V.group=F;return Q++,V}function X(G,q,O,R,D,F,V){if(V.reversedDepth===!0)D=-D;let A=Y(G,q,O,R,D,F);if(O.transmission>0)W.push(A);else if(O.transparent===!0)Z.push(A);else $.push(A)}function U(G,q,O,R,D,F){let V=Y(G,q,O,R,D,F);if(O.transmission>0)W.unshift(V);else if(O.transparent===!0)Z.unshift(V);else $.unshift(V)}function N(G,q){if($.length>1)$.sort(G||k1);if(W.length>1)W.sort(q||RU);if(Z.length>1)Z.sort(q||RU)}function E(){for(let G=Q,q=J.length;G<q;G++){let O=J[G];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:$,transmissive:W,transparent:Z,init:K,push:X,unshift:U,finish:E,sort:N}}function L1(){let J=new WeakMap;function Q(W,Z){let K=J.get(W),H;if(K===void 0)H=new MU,J.set(W,[H]);else if(Z>=K.length)H=new MU,K.push(H);else H=K[Z];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function V1(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new P,color:new B0};break;case"SpotLight":$={position:new P,direction:new P,color:new B0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new P,color:new B0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new P,skyColor:new B0,groundColor:new B0};break;case"RectAreaLight":$={color:new B0,position:new P,halfWidth:new P,halfHeight:new P};break}return J[Q.id]=$,$}}}function B1(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new e};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new e};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new e,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var I1=0;function z1(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function A1(J){let Q=new V1,$=B1(),W={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)W.probe.push(new P);let Z=new P,K=new l0,H=new l0;function Y(U){let N=0,E=0,G=0;for(let h=0;h<9;h++)W.probe[h].set(0,0,0);let q=0,O=0,R=0,D=0,F=0,V=0,A=0,M=0,z=0,_=0,w=0,k=0,I=0,b=0;U.sort(z1);for(let h=0,i=U.length;h<i;h++){let S=U[h],p=S.color,o=S.intensity,m=S.distance,K0=null;if(S.shadow&&S.shadow.map)if(S.shadow.map.texture.format===_8)K0=S.shadow.map.texture;else K0=S.shadow.map.depthTexture||S.shadow.map.texture;if(S.isAmbientLight)N+=p.r*o,E+=p.g*o,G+=p.b*o;else if(S.isLightProbe){for(let u=0;u<9;u++)W.probe[u].addScaledVector(S.sh.coefficients[u],o);b++}else if(S.isSunLight){let u=Q.get(S);if(u.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let r=S.shadow,$0=$.get(S);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize.copy(r.mapSize).multiply(r.getFrameExtents()),W.sunShadow[O]=$0,W.sunShadowMap[O]=K0;let v0=r.getViewportCount();for(let f0=0;f0<v0;f0++)W.sunShadowMatrix[R+f0]=r.getMatrix(f0),W.sunShadowCascade[R+f0]=r._cascadeData[f0];R+=v0,O++}W.sun[q]=u,q++}else if(S.isDirectionalLight){let u=Q.get(S);if(u.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let r=S.shadow,$0=$.get(S);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize=r.mapSize,W.directionalShadow[D]=$0,W.directionalShadowMap[D]=K0,W.directionalShadowMatrix[D]=S.shadow.matrix,z++}W.directional[D]=u,D++}else if(S.isSpotLight){let u=Q.get(S);u.position.setFromMatrixPosition(S.matrixWorld),u.color.copy(p).multiplyScalar(o),u.distance=m,u.coneCos=Math.cos(S.angle),u.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),u.decay=S.decay,W.spot[V]=u;let r=S.shadow;if(S.map){if(W.spotLightMap[k]=S.map,k++,r.updateMatrices(S),S.castShadow)I++}if(W.spotLightMatrix[V]=r.matrix,S.castShadow){let $0=$.get(S);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize=r.mapSize,W.spotShadow[V]=$0,W.spotShadowMap[V]=K0,w++}V++}else if(S.isRectAreaLight){let u=Q.get(S);u.color.copy(p).multiplyScalar(o),u.halfWidth.set(S.width*0.5,0,0),u.halfHeight.set(0,S.height*0.5,0),W.rectArea[A]=u,A++}else if(S.isPointLight){let u=Q.get(S);if(u.color.copy(S.color).multiplyScalar(S.intensity),u.distance=S.distance,u.decay=S.decay,S.castShadow){let r=S.shadow,$0=$.get(S);$0.shadowIntensity=r.intensity,$0.shadowBias=r.bias,$0.shadowNormalBias=r.normalBias,$0.shadowRadius=r.radius,$0.shadowMapSize=r.mapSize,$0.shadowCameraNear=r.camera.near,$0.shadowCameraFar=r.camera.far,W.pointShadow[F]=$0,W.pointShadowMap[F]=K0,W.pointShadowMatrix[F]=S.shadow.matrix,_++}W.point[F]=u,F++}else if(S.isHemisphereLight){let u=Q.get(S);u.skyColor.copy(S.color).multiplyScalar(o),u.groundColor.copy(S.groundColor).multiplyScalar(o),W.hemi[M]=u,M++}}if(A>0)if(J.has("OES_texture_float_linear")===!0)W.rectAreaLTC1=O0.LTC_FLOAT_1,W.rectAreaLTC2=O0.LTC_FLOAT_2;else W.rectAreaLTC1=O0.LTC_HALF_1,W.rectAreaLTC2=O0.LTC_HALF_2;W.ambient[0]=N,W.ambient[1]=E,W.ambient[2]=G;let j=W.hash;if(j.sunLength!==q||j.directionalLength!==D||j.pointLength!==F||j.spotLength!==V||j.rectAreaLength!==A||j.hemiLength!==M||j.numSunShadows!==O||j.numDirectionalShadows!==z||j.numPointShadows!==_||j.numSpotShadows!==w||j.numSpotMaps!==k||j.numLightProbes!==b)W.sun.length=q,W.directional.length=D,W.spot.length=V,W.rectArea.length=A,W.point.length=F,W.hemi.length=M,W.sunShadow.length=O,W.sunShadowMap.length=O,W.sunShadowMatrix.length=R,W.sunShadowCascade.length=R,W.directionalShadow.length=z,W.directionalShadowMap.length=z,W.directionalShadowMatrix.length=z,W.pointShadow.length=_,W.pointShadowMap.length=_,W.pointShadowMatrix.length=_,W.spotShadow.length=w,W.spotShadowMap.length=w,W.spotLightMatrix.length=w+k-I,W.spotLightMap.length=k,W.numSpotLightShadowsWithMaps=I,W.numLightProbes=b,j.sunLength=q,j.directionalLength=D,j.pointLength=F,j.spotLength=V,j.rectAreaLength=A,j.hemiLength=M,j.numSunShadows=O,j.numDirectionalShadows=z,j.numPointShadows=_,j.numSpotShadows=w,j.numSpotMaps=k,j.numLightProbes=b,W.version=I1++}function X(U,N){let E=0,G=0,q=0,O=0,R=0,D=0,F=N.matrixWorldInverse;for(let V=0,A=U.length;V<A;V++){let M=U[V];if(M.isSunLight){let z=W.sun[E];z.direction.setFromMatrixPosition(M.matrixWorld),z.direction.transformDirection(F),E++}else if(M.isDirectionalLight){let z=W.directional[G];z.direction.setFromMatrixPosition(M.matrixWorld),Z.setFromMatrixPosition(M.target.matrixWorld),z.direction.sub(Z),z.direction.transformDirection(F),G++}else if(M.isSpotLight){let z=W.spot[O];z.position.setFromMatrixPosition(M.matrixWorld),z.position.applyMatrix4(F),z.direction.setFromMatrixPosition(M.matrixWorld),Z.setFromMatrixPosition(M.target.matrixWorld),z.direction.sub(Z),z.direction.transformDirection(F),O++}else if(M.isRectAreaLight){let z=W.rectArea[R];z.position.setFromMatrixPosition(M.matrixWorld),z.position.applyMatrix4(F),H.identity(),K.copy(M.matrixWorld),K.premultiply(F),H.extractRotation(K),z.halfWidth.set(M.width*0.5,0,0),z.halfHeight.set(0,M.height*0.5,0),z.halfWidth.applyMatrix4(H),z.halfHeight.applyMatrix4(H),R++}else if(M.isPointLight){let z=W.point[q];z.position.setFromMatrixPosition(M.matrixWorld),z.position.applyMatrix4(F),q++}else if(M.isHemisphereLight){let z=W.hemi[D];z.direction.setFromMatrixPosition(M.matrixWorld),z.direction.transformDirection(F),D++}}}return{setup:Y,setupView:X,state:W}}function kU(J){let Q=new A1(J),$=[],W=[],Z=[];function K(G){E.camera=G,$.length=0,W.length=0,Z.length=0}function H(G){$.push(G)}function Y(G){W.push(G)}function X(G){Z.push(G)}function U(){Q.setup($)}function N(G){Q.setupView($,G)}let E={lightsArray:$,shadowsArray:W,lightProbeGridArray:Z,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:K,state:E,setupLights:U,setupLightsView:N,pushLight:H,pushShadow:Y,pushLightProbeGrid:X}}function C1(J){let Q=new WeakMap;function $(Z,K=0){let H=Q.get(Z),Y;if(H===void 0)Y=new kU(J),Q.set(Z,[Y]);else if(K>=H.length)Y=new kU(J),H.push(Y);else Y=H[K];return Y}function W(){Q=new WeakMap}return{get:$,dispose:W}}var w1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,P1=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],T1=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],LU=new l0,E6=new P,ZK=new P;function S1(J,Q,$){let W=new e9,Z=new e,K=new e,H=new GJ,Y=new tQ,X=new eQ,U={},N=$.maxTextureSize,E={[E7]:oJ,[oJ]:E7,[I9]:I9},G=new Q9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new e},radius:{value:4}},vertexShader:w1,fragmentShader:_1}),q=G.clone();q.defines.HORIZONTAL_PASS=1;let O=new c0;O.setAttribute("position",new qJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let R=new zJ(O,G),D=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=c7;let F=this.type;this.render=function(_,w,k){if(D.enabled===!1)return;if(D.autoUpdate===!1&&D.needsUpdate===!1)return;if(_.length===0)return;if(this.type===yH)N0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=c7;let I=J.getRenderTarget(),b=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),h=J.state;if(h.setBlending(z9),h.buffers.depth.getReversed()===!0)h.buffers.color.setClear(0,0,0,0);else h.buffers.color.setClear(1,1,1,1);h.buffers.depth.setTest(!0),h.setScissorTest(!1);let i=F!==this.type;if(i)w.traverse(function(S){if(S.material)if(Array.isArray(S.material))S.material.forEach((p)=>p.needsUpdate=!0);else S.material.needsUpdate=!0});for(let S=0,p=_.length;S<p;S++){let o=_[S],m=o.shadow;if(m===void 0){N0("WebGLShadowMap:",o,"has no shadow.");continue}if(m.autoUpdate===!1&&m.needsUpdate===!1)continue;Z.copy(m.mapSize);let K0=m.getFrameExtents();if(Z.multiply(K0),K.copy(m.mapSize),Z.x>N||Z.y>N){if(Z.x>N)K.x=Math.floor(N/K0.x),Z.x=K.x*K0.x,m.mapSize.x=K.x;if(Z.y>N)K.y=Math.floor(N/K0.y),Z.y=K.y*K0.y,m.mapSize.y=K.y}let u=J.state.buffers.depth.getReversed();if(m.camera._reversedDepth=u,m.map===null||i===!0){if(m.map!==null){if(m.map.depthTexture!==null)m.map.depthTexture.dispose(),m.map.depthTexture=null;m.map.dispose()}if(this.type===N7){if(o.isPointLight){N0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}m.map=new uJ(Z.x,Z.y,{format:_8,type:A9,minFilter:aJ,magFilter:aJ,generateMipmaps:!1}),m.map.texture.name=o.name+".shadowMap",m.map.depthTexture=new S8(Z.x,Z.y,p9),m.map.depthTexture.name=o.name+".shadowMapDepth",m.map.depthTexture.format=C8,m.map.depthTexture.compareFunction=null,m.map.depthTexture.minFilter=J8,m.map.depthTexture.magFilter=J8}else{if(o.isPointLight)m.map=new XK(Z.x),m.map.depthTexture=new NZ(Z.x,Q8);else m.map=new uJ(Z.x,Z.y),m.map.depthTexture=new S8(Z.x,Z.y,Q8);if(m.map.depthTexture.name=o.name+".shadowMap",m.map.depthTexture.format=C8,this.type===c7)m.map.depthTexture.compareFunction=u?VQ:LQ,m.map.depthTexture.minFilter=aJ,m.map.depthTexture.magFilter=aJ;else m.map.depthTexture.compareFunction=null,m.map.depthTexture.minFilter=J8,m.map.depthTexture.magFilter=J8}m.camera.updateProjectionMatrix()}if(m.map.isWebGLCubeRenderTarget!==!0&&(m.map.width!==Z.x||m.map.height!==Z.y))m.map.setSize(Z.x,Z.y);let r=m.map.isWebGLCubeRenderTarget?6:m.getViewportCount();if(o.isPointLight!==!0)m.updateMatrices(o,k);for(let $0=0;$0<r;$0++){let v0=m.getCamera($0);if(o.isPointLight){let{camera:f0,matrix:XJ}=m,o0=o.distance||f0.far;if(o0!==f0.far)f0.far=o0,f0.updateProjectionMatrix();E6.setFromMatrixPosition(o.matrixWorld),f0.position.copy(E6),ZK.copy(f0.position),ZK.add(P1[$0]),f0.up.copy(T1[$0]),f0.lookAt(ZK),f0.updateMatrixWorld(),XJ.makeTranslation(-E6.x,-E6.y,-E6.z),LU.multiplyMatrices(f0.projectionMatrix,f0.matrixWorldInverse),m._frustum.setFromProjectionMatrix(LU,f0.coordinateSystem,f0.reversedDepth)}if(m.map.isWebGLCubeRenderTarget)J.setRenderTarget(m.map,$0),J.clear();else{if($0===0)J.setRenderTarget(m.map),J.clear();let f0=m.getViewport($0);H.set(K.x*f0.x,K.y*f0.y,K.x*f0.z,K.y*f0.w),h.viewport(H)}W=m.getFrustum($0),M(w,k,v0,o,this.type)}if(m.isPointLightShadow!==!0&&this.type===N7)V(m,k);m.needsUpdate=!1}F=this.type,D.needsUpdate=!1,J.setRenderTarget(I,b,j)};function V(_,w){let k=Q.update(R);if(G.defines.VSM_SAMPLES!==_.blurSamples)G.defines.VSM_SAMPLES=_.blurSamples,q.defines.VSM_SAMPLES=_.blurSamples,G.needsUpdate=!0,q.needsUpdate=!0;if(_.mapPass===null)_.mapPass=new uJ(Z.x,Z.y,{format:_8,type:A9});else if(_.mapPass.width!==_.map.width||_.mapPass.height!==_.map.height)_.mapPass.setSize(_.map.width,_.map.height);G.uniforms.shadow_pass.value=_.map.depthTexture,G.uniforms.resolution.value.set(_.map.width,_.map.height),G.uniforms.radius.value=_.radius,J.setRenderTarget(_.mapPass),J.clear(),J.renderBufferDirect(w,null,k,G,R,null),q.uniforms.shadow_pass.value=_.mapPass.texture,q.uniforms.resolution.value.set(_.map.width,_.map.height),q.uniforms.radius.value=_.radius,J.setRenderTarget(_.map),J.clear(),J.renderBufferDirect(w,null,k,q,R,null)}function A(_,w,k,I){let b=null,j=k.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(j!==void 0)b=j;else if(b=k.isPointLight===!0?X:Y,J.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let h=b.uuid,i=w.uuid,S=U[h];if(S===void 0)S={},U[h]=S;let p=S[i];if(p===void 0)p=b.clone(),S[i]=p,w.addEventListener("dispose",z);b=p}if(b.visible=w.visible,b.wireframe=w.wireframe,I===N7)b.side=w.shadowSide!==null?w.shadowSide:w.side;else b.side=w.shadowSide!==null?w.shadowSide:E[w.side];if(b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?0.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,k.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let h=J.properties.get(b);h.light=k}return b}function M(_,w,k,I,b){if(_.visible===!1)return;if(_.layers.test(w.layers)&&(_.isMesh||_.isLine||_.isPoints)){if((_.castShadow||_.receiveShadow&&b===N7)&&(!_.frustumCulled||_.intersectsFrustum(W))){_.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,_.matrixWorld);let i=Q.update(_),S=_.material;if(Array.isArray(S)){let p=i.groups;for(let o=0,m=p.length;o<m;o++){let K0=p[o],u=S[K0.materialIndex];if(u&&u.visible){let r=A(_,u,I,b);_.onBeforeShadow(J,_,w,k,i,r,K0),J.renderBufferDirect(k,null,i,r,_,K0),_.onAfterShadow(J,_,w,k,i,r,K0)}}}else if(S.visible){let p=A(_,S,I,b);_.onBeforeShadow(J,_,w,k,i,p,null),J.renderBufferDirect(k,null,i,p,_,null),_.onAfterShadow(J,_,w,k,i,p,null)}}}let h=_.children;for(let i=0,S=h.length;i<S;i++)M(h[i],w,k,I,b)}function z(_){_.target.removeEventListener("dispose",z);for(let k in U){let I=U[k],b=_.target.uuid;if(b in I)I[b].dispose(),delete I[b]}}}function j1(J,Q){function $(){let f=!1,q0=new GJ,s=null,F0=new GJ(0,0,0,0);return{setMask:function(I0){if(s!==I0&&!f)J.colorMask(I0,I0,I0,I0),s=I0},setLocked:function(I0){f=I0},setClear:function(I0,Q0,R0,s0,OJ){if(OJ===!0)I0*=s0,Q0*=s0,R0*=s0;if(q0.set(I0,Q0,R0,s0),F0.equals(q0)===!1)J.clearColor(I0,Q0,R0,s0),F0.copy(q0)},reset:function(){f=!1,s=null,F0.set(-1,0,0,0)}}}function W(){let f=!1,q0=!1,s=null,F0=null,I0=null;return{setReversed:function(Q0){if(q0!==Q0){let R0=Q.get("EXT_clip_control");if(Q0)R0.clipControlEXT(R0.LOWER_LEFT_EXT,R0.ZERO_TO_ONE_EXT);else R0.clipControlEXT(R0.LOWER_LEFT_EXT,R0.NEGATIVE_ONE_TO_ONE_EXT);q0=Q0;let s0=I0;I0=null,this.setClear(s0)}},getReversed:function(){return q0},setTest:function(Q0){if(Q0)Z0(J.DEPTH_TEST);else h0(J.DEPTH_TEST)},setMask:function(Q0){if(s!==Q0&&!f)J.depthMask(Q0),s=Q0},setFunc:function(Q0){if(q0)Q0=jY[Q0];if(F0!==Q0){switch(Q0){case JY:J.depthFunc(J.NEVER);break;case QY:J.depthFunc(J.ALWAYS);break;case $Y:J.depthFunc(J.LESS);break;case KW:J.depthFunc(J.LEQUAL);break;case WY:J.depthFunc(J.EQUAL);break;case ZY:J.depthFunc(J.GEQUAL);break;case KY:J.depthFunc(J.GREATER);break;case HY:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}F0=Q0}},setLocked:function(Q0){f=Q0},setClear:function(Q0){if(I0!==Q0){if(I0=Q0,q0)Q0=1-Q0;J.clearDepth(Q0)}},reset:function(){f=!1,s=null,F0=null,I0=null,q0=!1}}}function Z(){let f=!1,q0=null,s=null,F0=null,I0=null,Q0=null,R0=null,s0=null,OJ=null;return{setTest:function(HJ){if(!f)if(HJ)Z0(J.STENCIL_TEST);else h0(J.STENCIL_TEST)},setMask:function(HJ){if(q0!==HJ&&!f)J.stencilMask(HJ),q0=HJ},setFunc:function(HJ,O9,P9){if(s!==HJ||F0!==O9||I0!==P9)J.stencilFunc(HJ,O9,P9),s=HJ,F0=O9,I0=P9},setOp:function(HJ,O9,P9){if(Q0!==HJ||R0!==O9||s0!==P9)J.stencilOp(HJ,O9,P9),Q0=HJ,R0=O9,s0=P9},setLocked:function(HJ){f=HJ},setClear:function(HJ){if(OJ!==HJ)J.clearStencil(HJ),OJ=HJ},reset:function(){f=!1,q0=null,s=null,F0=null,I0=null,Q0=null,R0=null,s0=null,OJ=null}}}let K=new $,H=new W,Y=new Z,X=new WeakMap,U=new WeakMap,N={},E={},G={},q=new WeakMap,O=[],R=null,D=!1,F=null,V=null,A=null,M=null,z=null,_=null,w=null,k=new B0(0,0,0),I=0,b=!1,j=null,h=null,i=null,S=null,p=null,o=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),m=!1,K0=0,u=J.getParameter(J.VERSION);if(u.indexOf("WebGL")!==-1)K0=parseFloat(/^WebGL (\d)/.exec(u)[1]),m=K0>=1;else if(u.indexOf("OpenGL ES")!==-1)K0=parseFloat(/^OpenGL ES (\d)/.exec(u)[1]),m=K0>=2;let r=null,$0={},v0=J.getParameter(J.SCISSOR_BOX),f0=J.getParameter(J.VIEWPORT),XJ=new GJ().fromArray(v0),o0=new GJ().fromArray(f0);function n(f,q0,s,F0){let I0=new Uint8Array(4),Q0=J.createTexture();J.bindTexture(f,Q0),J.texParameteri(f,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(f,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let R0=0;R0<s;R0++)if(f===J.TEXTURE_3D||f===J.TEXTURE_2D_ARRAY)J.texImage3D(q0,0,J.RGBA,1,1,F0,0,J.RGBA,J.UNSIGNED_BYTE,I0);else J.texImage2D(q0+R0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,I0);return Q0}let Y0={};Y0[J.TEXTURE_2D]=n(J.TEXTURE_2D,J.TEXTURE_2D,1),Y0[J.TEXTURE_CUBE_MAP]=n(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y0[J.TEXTURE_2D_ARRAY]=n(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),Y0[J.TEXTURE_3D]=n(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),Z0(J.DEPTH_TEST),H.setFunc(KW),k0(!1),j0(QW),Z0(J.CULL_FACE),H0(z9);function Z0(f){if(N[f]!==!0)J.enable(f),N[f]=!0}function h0(f){if(N[f]!==!1)J.disable(f),N[f]=!1}function g0(f,q0){if(G[f]!==q0){if(J.bindFramebuffer(f,q0),G[f]=q0,f===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=q0;if(f===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=q0;return!0}return!1}function w0(f,q0){let s=O,F0=!1;if(f){if(s=q.get(q0),s===void 0)s=[],q.set(q0,s);let I0=f.textures;if(s.length!==I0.length||s[0]!==J.COLOR_ATTACHMENT0){for(let Q0=0,R0=I0.length;Q0<R0;Q0++)s[Q0]=J.COLOR_ATTACHMENT0+Q0;s.length=I0.length,F0=!0}}else if(s[0]!==J.BACK)s[0]=J.BACK,F0=!0;if(F0)J.drawBuffers(s)}function UJ(f){if(R!==f)return J.useProgram(f),R=f,!0;return!1}let t={[q7]:J.FUNC_ADD,[fH]:J.FUNC_SUBTRACT,[hH]:J.FUNC_REVERSE_SUBTRACT};t[bH]=J.MIN,t[xH]=J.MAX;let W0={[gH]:J.ZERO,[pH]:J.ONE,[mH]:J.SRC_COLOR,[dH]:J.SRC_ALPHA,[oH]:J.SRC_ALPHA_SATURATE,[sH]:J.DST_COLOR,[cH]:J.DST_ALPHA,[lH]:J.ONE_MINUS_SRC_COLOR,[uH]:J.ONE_MINUS_SRC_ALPHA,[iH]:J.ONE_MINUS_DST_COLOR,[nH]:J.ONE_MINUS_DST_ALPHA,[aH]:J.CONSTANT_COLOR,[rH]:J.ONE_MINUS_CONSTANT_COLOR,[tH]:J.CONSTANT_ALPHA,[eH]:J.ONE_MINUS_CONSTANT_ALPHA};function H0(f,q0,s,F0,I0,Q0,R0,s0,OJ,HJ){if(f===z9){if(D===!0)h0(J.BLEND),D=!1;return}if(D===!1)Z0(J.BLEND),D=!0;if(f!==vH){if(f!==F||HJ!==b){if(V!==q7||z!==q7)J.blendEquation(J.FUNC_ADD),V=q7,z=q7;if(HJ)switch(f){case n7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case $W:J.blendFunc(J.ONE,J.ONE);break;case WW:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case ZW:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:S0("WebGLState: Invalid blending: ",f);break}else switch(f){case n7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case $W:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case WW:S0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ZW:S0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:S0("WebGLState: Invalid blending: ",f);break}A=null,M=null,_=null,w=null,k.set(0,0,0),I=0,F=f,b=HJ}return}if(I0=I0||q0,Q0=Q0||s,R0=R0||F0,q0!==V||I0!==z)J.blendEquationSeparate(t[q0],t[I0]),V=q0,z=I0;if(s!==A||F0!==M||Q0!==_||R0!==w)J.blendFuncSeparate(W0[s],W0[F0],W0[Q0],W0[R0]),A=s,M=F0,_=Q0,w=R0;if(s0.equals(k)===!1||OJ!==I)J.blendColor(s0.r,s0.g,s0.b,OJ),k.copy(s0),I=OJ;F=f,b=!1}function X0(f,q0){f.side===I9?h0(J.CULL_FACE):Z0(J.CULL_FACE);let s=f.side===oJ;if(q0)s=!s;k0(s),f.blending===n7&&f.transparent===!1?H0(z9):H0(f.blending,f.blendEquation,f.blendSrc,f.blendDst,f.blendEquationAlpha,f.blendSrcAlpha,f.blendDstAlpha,f.blendColor,f.blendAlpha,f.premultipliedAlpha),H.setFunc(f.depthFunc),H.setTest(f.depthTest),H.setMask(f.depthWrite),K.setMask(f.colorWrite);let F0=f.stencilWrite;if(Y.setTest(F0),F0)Y.setMask(f.stencilWriteMask),Y.setFunc(f.stencilFunc,f.stencilRef,f.stencilFuncMask),Y.setOp(f.stencilFail,f.stencilZFail,f.stencilZPass);u0(f.polygonOffset,f.polygonOffsetFactor,f.polygonOffsetUnits),f.alphaToCoverage===!0?Z0(J.SAMPLE_ALPHA_TO_COVERAGE):h0(J.SAMPLE_ALPHA_TO_COVERAGE)}function k0(f){if(j!==f){if(f)J.frontFace(J.CW);else J.frontFace(J.CCW);j=f}}function j0(f){if(f!==SH){if(Z0(J.CULL_FACE),f!==h)if(f===QW)J.cullFace(J.BACK);else if(f===jH)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else h0(J.CULL_FACE);h=f}function b0(f){if(f!==i){if(m)J.lineWidth(f);i=f}}function u0(f,q0,s){if(f){if(Z0(J.POLYGON_OFFSET_FILL),S!==q0||p!==s){if(S=q0,p=s,H.getReversed())q0=-q0;J.polygonOffset(q0,s)}}else h0(J.POLYGON_OFFSET_FILL)}function n0(f){if(f)Z0(J.SCISSOR_TEST);else h0(J.SCISSOR_TEST)}function T(f){if(f===void 0)f=J.TEXTURE0+o-1;if(r!==f)J.activeTexture(f),r=f}function NJ(f,q0,s){if(s===void 0)if(r===null)s=J.TEXTURE0+o-1;else s=r;let F0=$0[s];if(F0===void 0)F0={type:void 0,texture:void 0},$0[s]=F0;if(F0.type!==f||F0.texture!==q0){if(r!==s)J.activeTexture(s),r=s;J.bindTexture(f,q0||Y0[f]),F0.type=f,F0.texture=q0}}function t0(){let f=$0[r];if(f!==void 0&&f.type!==void 0)J.bindTexture(f.type,null),f.type=void 0,f.texture=void 0}function e0(){try{J.compressedTexImage2D(...arguments)}catch(f){S0("WebGLState:",f)}}function C(){try{J.compressedTexImage3D(...arguments)}catch(f){S0("WebGLState:",f)}}function L(){try{J.texSubImage2D(...arguments)}catch(f){S0("WebGLState:",f)}}function y(){try{J.texSubImage3D(...arguments)}catch(f){S0("WebGLState:",f)}}function l(){try{J.compressedTexSubImage2D(...arguments)}catch(f){S0("WebGLState:",f)}}function J0(){try{J.compressedTexSubImage3D(...arguments)}catch(f){S0("WebGLState:",f)}}function U0(){try{J.texStorage2D(...arguments)}catch(f){S0("WebGLState:",f)}}function E0(){try{J.texStorage3D(...arguments)}catch(f){S0("WebGLState:",f)}}function c(){try{J.texImage2D(...arguments)}catch(f){S0("WebGLState:",f)}}function a(){try{J.texImage3D(...arguments)}catch(f){S0("WebGLState:",f)}}function V0(f){if(E[f]!==void 0)return E[f];else return J.getParameter(f)}function y0(f,q0){if(E[f]!==q0)J.pixelStorei(f,q0),E[f]=q0}function D0(f){if(XJ.equals(f)===!1)J.scissor(f.x,f.y,f.z,f.w),XJ.copy(f)}function G0(f){if(o0.equals(f)===!1)J.viewport(f.x,f.y,f.z,f.w),o0.copy(f)}function x0(f,q0){let s=U.get(q0);if(s===void 0)s=new WeakMap,U.set(q0,s);let F0=s.get(f);if(F0===void 0)F0=J.getUniformBlockIndex(q0,f.name),s.set(f,F0)}function p0(f,q0){let F0=U.get(q0).get(f);if(X.get(q0)!==F0)J.uniformBlockBinding(q0,F0,f.__bindingPointIndex),X.set(q0,F0)}function KJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},E={},r=null,$0={},G={},q=new WeakMap,O=[],R=null,D=!1,F=null,V=null,A=null,M=null,z=null,_=null,w=null,k=new B0(0,0,0),I=0,b=!1,j=null,h=null,i=null,S=null,p=null,XJ.set(0,0,J.canvas.width,J.canvas.height),o0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:Z0,disable:h0,bindFramebuffer:g0,drawBuffers:w0,useProgram:UJ,setBlending:H0,setMaterial:X0,setFlipSided:k0,setCullFace:j0,setLineWidth:b0,setPolygonOffset:u0,setScissorTest:n0,activeTexture:T,bindTexture:NJ,unbindTexture:t0,compressedTexImage2D:e0,compressedTexImage3D:C,texImage2D:c,texImage3D:a,pixelStorei:y0,getParameter:V0,updateUBOMapping:x0,uniformBlockBinding:p0,texStorage2D:U0,texStorage3D:E0,texSubImage2D:L,texSubImage3D:y,compressedTexSubImage2D:l,compressedTexSubImage3D:J0,scissor:D0,viewport:G0,reset:KJ}}function y1(J,Q,$,W,Z,K,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new e,N=new WeakMap,E=new Set,G,q=new WeakMap,O=!1;try{O=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function R(C,L){return O?new OffscreenCanvas(C,L):H7("canvas")}function D(C,L,y){let l=1,J0=e0(C);if(J0.width>y||J0.height>y)l=y/Math.max(J0.width,J0.height);if(l<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let U0=Math.floor(l*J0.width),E0=Math.floor(l*J0.height);if(G===void 0)G=R(U0,E0);let c=L?R(U0,E0):G;return c.width=U0,c.height=E0,c.getContext("2d").drawImage(C,0,0,U0,E0),N0("WebGLRenderer: Texture has been resized from ("+J0.width+"x"+J0.height+") to ("+U0+"x"+E0+")."),c}else{if("data"in C)N0("WebGLRenderer: Image in DataTexture is too big ("+J0.width+"x"+J0.height+").");return C}return C}function F(C){return C.generateMipmaps}function V(C){J.generateMipmap(C)}function A(C){if(C.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(C.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function M(C,L,y,l,J0,U0=!1){if(C!==null){if(J[C]!==void 0)return J[C];N0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let E0;if(l){if(E0=Q.get("EXT_texture_norm16"),!E0)N0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let c=L;if(L===J.RED){if(y===J.FLOAT)c=J.R32F;if(y===J.HALF_FLOAT)c=J.R16F;if(y===J.UNSIGNED_BYTE)c=J.R8;if(y===J.UNSIGNED_SHORT&&E0)c=E0.R16_EXT;if(y===J.SHORT&&E0)c=E0.R16_SNORM_EXT}if(L===J.RED_INTEGER){if(y===J.UNSIGNED_BYTE)c=J.R8UI;if(y===J.UNSIGNED_SHORT)c=J.R16UI;if(y===J.UNSIGNED_INT)c=J.R32UI;if(y===J.BYTE)c=J.R8I;if(y===J.SHORT)c=J.R16I;if(y===J.INT)c=J.R32I}if(L===J.RG){if(y===J.FLOAT)c=J.RG32F;if(y===J.HALF_FLOAT)c=J.RG16F;if(y===J.UNSIGNED_BYTE)c=J.RG8;if(y===J.UNSIGNED_SHORT&&E0)c=E0.RG16_EXT;if(y===J.SHORT&&E0)c=E0.RG16_SNORM_EXT}if(L===J.RG_INTEGER){if(y===J.UNSIGNED_BYTE)c=J.RG8UI;if(y===J.UNSIGNED_SHORT)c=J.RG16UI;if(y===J.UNSIGNED_INT)c=J.RG32UI;if(y===J.BYTE)c=J.RG8I;if(y===J.SHORT)c=J.RG16I;if(y===J.INT)c=J.RG32I}if(L===J.RGB_INTEGER){if(y===J.UNSIGNED_BYTE)c=J.RGB8UI;if(y===J.UNSIGNED_SHORT)c=J.RGB16UI;if(y===J.UNSIGNED_INT)c=J.RGB32UI;if(y===J.BYTE)c=J.RGB8I;if(y===J.SHORT)c=J.RGB16I;if(y===J.INT)c=J.RGB32I}if(L===J.RGBA_INTEGER){if(y===J.UNSIGNED_BYTE)c=J.RGBA8UI;if(y===J.UNSIGNED_SHORT)c=J.RGBA16UI;if(y===J.UNSIGNED_INT)c=J.RGBA32UI;if(y===J.BYTE)c=J.RGBA8I;if(y===J.SHORT)c=J.RGBA16I;if(y===J.INT)c=J.RGBA32I}if(L===J.RGB){if(y===J.UNSIGNED_SHORT&&E0)c=E0.RGB16_EXT;if(y===J.SHORT&&E0)c=E0.RGB16_SNORM_EXT;if(y===J.UNSIGNED_INT_5_9_9_9_REV)c=J.RGB9_E5;if(y===J.UNSIGNED_INT_10F_11F_11F_REV)c=J.R11F_G11F_B10F}if(L===J.RGBA){let a=U0?rW:QJ.getTransfer(J0);if(y===J.FLOAT)c=J.RGBA32F;if(y===J.HALF_FLOAT)c=J.RGBA16F;if(y===J.UNSIGNED_BYTE)c=a===DJ?J.SRGB8_ALPHA8:J.RGBA8;if(y===J.UNSIGNED_SHORT&&E0)c=E0.RGBA16_EXT;if(y===J.SHORT&&E0)c=E0.RGBA16_SNORM_EXT;if(y===J.UNSIGNED_SHORT_4_4_4_4)c=J.RGBA4;if(y===J.UNSIGNED_SHORT_5_5_5_1)c=J.RGB5_A1}if(c===J.R16F||c===J.R32F||c===J.RG16F||c===J.RG32F||c===J.RGBA16F||c===J.RGBA32F)Q.get("EXT_color_buffer_float");return c}function z(C,L){let y;if(C){if(L===null||L===Q8||L===D7)y=J.DEPTH24_STENCIL8;else if(L===p9)y=J.DEPTH32F_STENCIL8;else if(L===o7)y=J.DEPTH24_STENCIL8,N0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(L===null||L===Q8||L===D7)y=J.DEPTH_COMPONENT24;else if(L===p9)y=J.DEPTH_COMPONENT32F;else if(L===o7)y=J.DEPTH_COMPONENT16;return y}function _(C,L){if(F(C)===!0||C.isFramebufferTexture&&C.minFilter!==J8&&C.minFilter!==aJ)return Math.log2(Math.max(L.width,L.height))+1;else if(C.mipmaps!==void 0&&C.mipmaps.length>0)return C.mipmaps.length;else if(C.isCompressedTexture&&Array.isArray(C.image))return L.mipmaps.length;else return 1}function w(C){let L=C.target;if(L.removeEventListener("dispose",w),I(L),L.isVideoTexture)N.delete(L);if(L.isHTMLTexture)E.delete(L)}function k(C){let L=C.target;L.removeEventListener("dispose",k),j(L)}function I(C){let L=W.get(C);if(L.__webglInit===void 0)return;let y=C.source,l=q.get(y);if(l){let J0=l[L.__cacheKey];if(J0.usedTimes--,J0.usedTimes===0)b(C);if(Object.keys(l).length===0)q.delete(y)}W.remove(C)}function b(C){let L=W.get(C);J.deleteTexture(L.__webglTexture);let y=C.source,l=q.get(y);delete l[L.__cacheKey],H.memory.textures--}function j(C){let L=W.get(C);if(C.depthTexture)C.depthTexture.dispose(),W.remove(C.depthTexture);if(C.isWebGLCubeRenderTarget)for(let l=0;l<6;l++){if(Array.isArray(L.__webglFramebuffer[l]))for(let J0=0;J0<L.__webglFramebuffer[l].length;J0++)J.deleteFramebuffer(L.__webglFramebuffer[l][J0]);else J.deleteFramebuffer(L.__webglFramebuffer[l]);if(L.__webglDepthbuffer)J.deleteRenderbuffer(L.__webglDepthbuffer[l])}else{if(Array.isArray(L.__webglFramebuffer))for(let l=0;l<L.__webglFramebuffer.length;l++)J.deleteFramebuffer(L.__webglFramebuffer[l]);else J.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer)J.deleteRenderbuffer(L.__webglDepthbuffer);if(L.__webglMultisampledFramebuffer)J.deleteFramebuffer(L.__webglMultisampledFramebuffer);if(L.__webglColorRenderbuffer){for(let l=0;l<L.__webglColorRenderbuffer.length;l++)if(L.__webglColorRenderbuffer[l])J.deleteRenderbuffer(L.__webglColorRenderbuffer[l])}if(L.__webglDepthRenderbuffer)J.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let y=C.textures;for(let l=0,J0=y.length;l<J0;l++){let U0=W.get(y[l]);if(U0.__webglTexture)J.deleteTexture(U0.__webglTexture),H.memory.textures--;W.remove(y[l])}W.remove(C)}let h=0;function i(){h=0}function S(){return h}function p(C){h=C}function o(){let C=h;if(C>=Z.maxTextures)N0("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+Z.maxTextures);return h+=1,C}function m(C){let L=[];return L.push(C.wrapS),L.push(C.wrapT),L.push(C.wrapR||0),L.push(C.magFilter),L.push(C.minFilter),L.push(C.anisotropy),L.push(C.internalFormat),L.push(C.format),L.push(C.type),L.push(C.generateMipmaps),L.push(C.premultiplyAlpha),L.push(C.flipY),L.push(C.unpackAlignment),L.push(C.colorSpace),L.join()}function K0(C,L){let y=W.get(C);if(C.isVideoTexture)NJ(C);if(C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&y.__version!==C.version){let l=C.image;if(l===null)N0("WebGLRenderer: Texture marked for update but no image data found.");else if(l.complete===!1)N0("WebGLRenderer: Texture marked for update but image is incomplete");else{h0(y,C,L);return}}else if(C.isExternalTexture)y.__webglTexture=C.sourceTexture?C.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,y.__webglTexture,J.TEXTURE0+L)}function u(C,L){let y=W.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&y.__version!==C.version){h0(y,C,L);return}else if(C.isExternalTexture)y.__webglTexture=C.sourceTexture?C.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,y.__webglTexture,J.TEXTURE0+L)}function r(C,L){let y=W.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&y.__version!==C.version){h0(y,C,L);return}$.bindTexture(J.TEXTURE_3D,y.__webglTexture,J.TEXTURE0+L)}function $0(C,L){let y=W.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&y.__version!==C.version){g0(y,C,L);return}$.bindTexture(J.TEXTURE_CUBE_MAP,y.__webglTexture,J.TEXTURE0+L)}let v0={[GY]:J.REPEAT,[EQ]:J.CLAMP_TO_EDGE,[NY]:J.MIRRORED_REPEAT},f0={[J8]:J.NEAREST,[EY]:J.NEAREST_MIPMAP_NEAREST,[i7]:J.NEAREST_MIPMAP_LINEAR,[aJ]:J.LINEAR,[qQ]:J.LINEAR_MIPMAP_NEAREST,[A8]:J.LINEAR_MIPMAP_LINEAR},XJ={[BY]:J.NEVER,[wY]:J.ALWAYS,[IY]:J.LESS,[LQ]:J.LEQUAL,[zY]:J.EQUAL,[VQ]:J.GEQUAL,[AY]:J.GREATER,[CY]:J.NOTEQUAL};function o0(C,L){if(L.type===p9&&Q.has("OES_texture_float_linear")===!1&&(L.magFilter===aJ||L.magFilter===qQ||L.magFilter===i7||L.magFilter===A8||L.minFilter===aJ||L.minFilter===qQ||L.minFilter===i7||L.minFilter===A8))N0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(C,J.TEXTURE_WRAP_S,v0[L.wrapS]),J.texParameteri(C,J.TEXTURE_WRAP_T,v0[L.wrapT]),C===J.TEXTURE_3D||C===J.TEXTURE_2D_ARRAY)J.texParameteri(C,J.TEXTURE_WRAP_R,v0[L.wrapR]);if(J.texParameteri(C,J.TEXTURE_MAG_FILTER,f0[L.magFilter]),J.texParameteri(C,J.TEXTURE_MIN_FILTER,f0[L.minFilter]),L.compareFunction)J.texParameteri(C,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(C,J.TEXTURE_COMPARE_FUNC,XJ[L.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===J8)return;if(L.minFilter!==i7&&L.minFilter!==A8)return;if(L.type===p9&&Q.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||W.get(L).__currentAnisotropy){let y=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(C,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,Z.getMaxAnisotropy())),W.get(L).__currentAnisotropy=L.anisotropy}}}function n(C,L){let y=!1;if(C.__webglInit===void 0)C.__webglInit=!0,L.addEventListener("dispose",w);let l=L.source,J0=q.get(l);if(J0===void 0)J0={},q.set(l,J0);let U0=m(L);if(U0!==C.__cacheKey){if(J0[U0]===void 0)J0[U0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,y=!0;J0[U0].usedTimes++;let E0=J0[C.__cacheKey];if(E0!==void 0){if(J0[C.__cacheKey].usedTimes--,E0.usedTimes===0)b(L)}C.__cacheKey=U0,C.__webglTexture=J0[U0].texture}return y}function Y0(C,L,y){return Math.floor(Math.floor(C/y)/L)}function Z0(C,L,y,l){let U0=C.updateRanges;if(U0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,L.width,L.height,y,l,L.data);else{U0.sort((y0,D0)=>y0.start-D0.start);let E0=0;for(let y0=1;y0<U0.length;y0++){let D0=U0[E0],G0=U0[y0],x0=D0.start+D0.count,p0=Y0(G0.start,L.width,4),KJ=Y0(D0.start,L.width,4);if(G0.start<=x0+1&&p0===KJ&&Y0(G0.start+G0.count-1,L.width,4)===p0)D0.count=Math.max(D0.count,G0.start+G0.count-D0.start);else++E0,U0[E0]=G0}U0.length=E0+1;let c=$.getParameter(J.UNPACK_ROW_LENGTH),a=$.getParameter(J.UNPACK_SKIP_PIXELS),V0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,L.width);for(let y0=0,D0=U0.length;y0<D0;y0++){let G0=U0[y0],x0=Math.floor(G0.start/4),p0=Math.ceil(G0.count/4),KJ=x0%L.width,f=Math.floor(x0/L.width),q0=p0,s=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,KJ),$.pixelStorei(J.UNPACK_SKIP_ROWS,f),$.texSubImage2D(J.TEXTURE_2D,0,KJ,f,q0,1,y,l,L.data)}C.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,c),$.pixelStorei(J.UNPACK_SKIP_PIXELS,a),$.pixelStorei(J.UNPACK_SKIP_ROWS,V0)}}function h0(C,L,y){let l=J.TEXTURE_2D;if(L.isDataArrayTexture||L.isCompressedArrayTexture)l=J.TEXTURE_2D_ARRAY;if(L.isData3DTexture)l=J.TEXTURE_3D;let J0=n(C,L),U0=L.source;$.bindTexture(l,C.__webglTexture,J.TEXTURE0+y);let E0=W.get(U0);if(U0.version!==E0.__version||J0===!0){if($.activeTexture(J.TEXTURE0+y),(typeof ImageBitmap<"u"&&L.image instanceof ImageBitmap)===!1){let s=QJ.getPrimaries(QJ.workingColorSpace),F0=L.colorSpace===P8?null:QJ.getPrimaries(L.colorSpace),I0=L.colorSpace===P8||s===F0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,L.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,I0)}$.pixelStorei(J.UNPACK_ALIGNMENT,L.unpackAlignment);let a=D(L.image,!1,Z.maxTextureSize);a=t0(L,a);let V0=K.convert(L.format,L.colorSpace),y0=K.convert(L.type),D0=M(L.internalFormat,V0,y0,L.normalized,L.colorSpace,L.isVideoTexture);o0(l,L);let G0,x0=L.mipmaps,p0=L.isVideoTexture!==!0,KJ=E0.__version===void 0||J0===!0,f=U0.dataReady,q0=_(L,a);if(L.isDepthTexture){if(D0=z(L.format===w8,L.type),KJ)if(p0)$.texStorage2D(J.TEXTURE_2D,1,D0,a.width,a.height);else $.texImage2D(J.TEXTURE_2D,0,D0,a.width,a.height,0,V0,y0,null)}else if(L.isDataTexture)if(x0.length>0){if(p0&&KJ)$.texStorage2D(J.TEXTURE_2D,q0,D0,x0[0].width,x0[0].height);for(let s=0,F0=x0.length;s<F0;s++)if(G0=x0[s],p0){if(f)$.texSubImage2D(J.TEXTURE_2D,s,0,0,G0.width,G0.height,V0,y0,G0.data)}else $.texImage2D(J.TEXTURE_2D,s,D0,G0.width,G0.height,0,V0,y0,G0.data);L.generateMipmaps=!1}else if(p0){if(KJ)$.texStorage2D(J.TEXTURE_2D,q0,D0,a.width,a.height);if(f)Z0(L,a,V0,y0)}else $.texImage2D(J.TEXTURE_2D,0,D0,a.width,a.height,0,V0,y0,a.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){if(p0&&KJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,q0,D0,x0[0].width,x0[0].height,a.depth);for(let s=0,F0=x0.length;s<F0;s++)if(G0=x0[s],L.format!==C9)if(V0!==null)if(p0){if(f)if(L.layerUpdates.size>0){let I0=Y$(G0.width,G0.height,L.format,L.type);for(let Q0 of L.layerUpdates){let R0=G0.data.subarray(Q0*I0/G0.data.BYTES_PER_ELEMENT,(Q0+1)*I0/G0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,s,0,0,Q0,G0.width,G0.height,1,V0,R0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,s,0,0,0,G0.width,G0.height,a.depth,V0,G0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,s,D0,G0.width,G0.height,a.depth,0,G0.data,0,0);else N0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(p0){if(f)$.texSubImage3D(J.TEXTURE_2D_ARRAY,s,0,0,0,G0.width,G0.height,a.depth,V0,y0,G0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,s,D0,G0.width,G0.height,a.depth,0,V0,y0,G0.data);if(L.layerUpdates.size>0)L.clearLayerUpdates()}else{if(p0&&KJ)$.texStorage2D(J.TEXTURE_2D,q0,D0,x0[0].width,x0[0].height);for(let s=0,F0=x0.length;s<F0;s++)if(G0=x0[s],L.format!==C9)if(V0!==null)if(p0){if(f)$.compressedTexSubImage2D(J.TEXTURE_2D,s,0,0,G0.width,G0.height,V0,G0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,s,D0,G0.width,G0.height,0,G0.data);else N0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(p0){if(f)$.texSubImage2D(J.TEXTURE_2D,s,0,0,G0.width,G0.height,V0,y0,G0.data)}else $.texImage2D(J.TEXTURE_2D,s,D0,G0.width,G0.height,0,V0,y0,G0.data)}else if(L.isDataArrayTexture)if(p0){if(KJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,q0,D0,a.width,a.height,a.depth);if(f)if(L.layerUpdates.size>0){let s=Y$(a.width,a.height,L.format,L.type);for(let F0 of L.layerUpdates){let I0=a.data.subarray(F0*s/a.data.BYTES_PER_ELEMENT,(F0+1)*s/a.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,F0,a.width,a.height,1,V0,y0,I0)}L.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,a.width,a.height,a.depth,V0,y0,a.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,D0,a.width,a.height,a.depth,0,V0,y0,a.data);else if(L.isData3DTexture)if(p0){if(KJ)$.texStorage3D(J.TEXTURE_3D,q0,D0,a.width,a.height,a.depth);if(f)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,a.width,a.height,a.depth,V0,y0,a.data)}else $.texImage3D(J.TEXTURE_3D,0,D0,a.width,a.height,a.depth,0,V0,y0,a.data);else if(L.isFramebufferTexture){if(KJ)if(p0)$.texStorage2D(J.TEXTURE_2D,q0,D0,a.width,a.height);else{let{width:s,height:F0}=a;for(let I0=0;I0<q0;I0++)$.texImage2D(J.TEXTURE_2D,I0,D0,s,F0,0,V0,y0,null),s>>=1,F0>>=1}}else if(L.isHTMLTexture){if("texElementImage2D"in J){let s=J.canvas;if(!s.hasAttribute("layoutsubtree"))s.setAttribute("layoutsubtree","true");if(a.parentNode!==s){s.appendChild(a),E.add(L),s.onpaint=(F0)=>{let I0=F0.changedElements;for(let Q0 of E)if(I0.includes(Q0.image))Q0.needsUpdate=!0},s.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,a);else{let{RGBA:I0,RGBA:Q0,UNSIGNED_BYTE:R0}=J;J.texElementImage2D(J.TEXTURE_2D,0,I0,Q0,R0,a)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(x0.length>0){if(p0&&KJ){let s=e0(x0[0]);$.texStorage2D(J.TEXTURE_2D,q0,D0,s.width,s.height)}for(let s=0,F0=x0.length;s<F0;s++)if(G0=x0[s],p0){if(f)$.texSubImage2D(J.TEXTURE_2D,s,0,0,V0,y0,G0)}else $.texImage2D(J.TEXTURE_2D,s,D0,V0,y0,G0);L.generateMipmaps=!1}else if(p0){if(KJ){let s=e0(a);$.texStorage2D(J.TEXTURE_2D,q0,D0,s.width,s.height)}if(f)$.texSubImage2D(J.TEXTURE_2D,0,0,0,V0,y0,a)}else $.texImage2D(J.TEXTURE_2D,0,D0,V0,y0,a);if(F(L))V(l);if(E0.__version=U0.version,L.onUpdate)L.onUpdate(L)}C.__version=L.version}function g0(C,L,y){if(L.image.length!==6)return;let l=n(C,L),J0=L.source;$.bindTexture(J.TEXTURE_CUBE_MAP,C.__webglTexture,J.TEXTURE0+y);let U0=W.get(J0);if(J0.version!==U0.__version||l===!0){$.activeTexture(J.TEXTURE0+y);let E0=QJ.getPrimaries(QJ.workingColorSpace),c=L.colorSpace===P8?null:QJ.getPrimaries(L.colorSpace),a=L.colorSpace===P8||E0===c?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,L.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,L.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,a);let V0=L.isCompressedTexture||L.image[0].isCompressedTexture,y0=L.image[0]&&L.image[0].isDataTexture,D0=[];for(let Q0=0;Q0<6;Q0++){if(!V0&&!y0)D0[Q0]=D(L.image[Q0],!0,Z.maxCubemapSize);else D0[Q0]=y0?L.image[Q0].image:L.image[Q0];D0[Q0]=t0(L,D0[Q0])}let G0=D0[0],x0=K.convert(L.format,L.colorSpace),p0=K.convert(L.type),KJ=M(L.internalFormat,x0,p0,L.normalized,L.colorSpace),f=L.isVideoTexture!==!0,q0=U0.__version===void 0||l===!0,s=J0.dataReady,F0=_(L,G0);o0(J.TEXTURE_CUBE_MAP,L);let I0;if(V0){if(f&&q0)$.texStorage2D(J.TEXTURE_CUBE_MAP,F0,KJ,G0.width,G0.height);for(let Q0=0;Q0<6;Q0++){I0=D0[Q0].mipmaps;for(let R0=0;R0<I0.length;R0++){let s0=I0[R0];if(L.format!==C9)if(x0!==null)if(f){if(s)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,R0,0,0,s0.width,s0.height,x0,s0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,R0,KJ,s0.width,s0.height,0,s0.data);else N0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(f){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,R0,0,0,s0.width,s0.height,x0,p0,s0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,R0,KJ,s0.width,s0.height,0,x0,p0,s0.data)}}}else{if(I0=L.mipmaps,f&&q0){if(I0.length>0)F0++;let Q0=e0(D0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,F0,KJ,Q0.width,Q0.height)}for(let Q0=0;Q0<6;Q0++)if(y0){if(f){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,0,0,0,D0[Q0].width,D0[Q0].height,x0,p0,D0[Q0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,0,KJ,D0[Q0].width,D0[Q0].height,0,x0,p0,D0[Q0].data);for(let R0=0;R0<I0.length;R0++){let OJ=I0[R0].image[Q0].image;if(f){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,R0+1,0,0,OJ.width,OJ.height,x0,p0,OJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,R0+1,KJ,OJ.width,OJ.height,0,x0,p0,OJ.data)}}else{if(f){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,0,0,0,x0,p0,D0[Q0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,0,KJ,x0,p0,D0[Q0]);for(let R0=0;R0<I0.length;R0++){let s0=I0[R0];if(f){if(s)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,R0+1,0,0,x0,p0,s0.image[Q0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,R0+1,KJ,x0,p0,s0.image[Q0])}}}if(F(L))V(J.TEXTURE_CUBE_MAP);if(U0.__version=J0.version,L.onUpdate)L.onUpdate(L)}C.__version=L.version}function w0(C,L,y,l,J0,U0){let E0=K.convert(y.format,y.colorSpace),c=K.convert(y.type),a=M(y.internalFormat,E0,c,y.normalized,y.colorSpace),V0=W.get(L),y0=W.get(y);if(y0.__renderTarget=L,!V0.__hasExternalTextures){let D0=Math.max(1,L.width>>U0),G0=Math.max(1,L.height>>U0);if(J0===J.TEXTURE_3D||J0===J.TEXTURE_2D_ARRAY)$.texImage3D(J0,U0,a,D0,G0,L.depth,0,E0,c,null);else $.texImage2D(J0,U0,a,D0,G0,0,E0,c,null)}if($.bindFramebuffer(J.FRAMEBUFFER,C),T(L))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,l,J0,y0.__webglTexture,0,n0(L));else if(J0===J.TEXTURE_2D||J0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&J0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,l,J0,y0.__webglTexture,U0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function UJ(C,L,y){if(J.bindRenderbuffer(J.RENDERBUFFER,C),L.depthBuffer){let l=L.depthTexture,J0=l&&l.isDepthTexture?l.type:null,U0=z(L.stencilBuffer,J0),E0=L.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(T(L))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,n0(L),U0,L.width,L.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,n0(L),U0,L.width,L.height);else J.renderbufferStorage(J.RENDERBUFFER,U0,L.width,L.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,E0,J.RENDERBUFFER,C)}else{let l=L.textures;for(let J0=0;J0<l.length;J0++){let U0=l[J0],E0=K.convert(U0.format,U0.colorSpace),c=K.convert(U0.type),a=M(U0.internalFormat,E0,c,U0.normalized,U0.colorSpace);if(T(L))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,n0(L),a,L.width,L.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,n0(L),a,L.width,L.height);else J.renderbufferStorage(J.RENDERBUFFER,a,L.width,L.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function t(C,L,y){let l=L.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,C),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J0=W.get(L.depthTexture);if(J0.__renderTarget=L,!J0.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0;if(l){if(J0.__webglInit===void 0)J0.__webglInit=!0,L.depthTexture.addEventListener("dispose",w);if(J0.__webglTexture===void 0){J0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,J0.__webglTexture),o0(J.TEXTURE_CUBE_MAP,L.depthTexture);let V0=K.convert(L.depthTexture.format),y0=K.convert(L.depthTexture.type),D0;if(L.depthTexture.format===C8)D0=J.DEPTH_COMPONENT24;else if(L.depthTexture.format===w8)D0=J.DEPTH24_STENCIL8;for(let G0=0;G0<6;G0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+G0,0,D0,L.width,L.height,0,V0,y0,null)}}else K0(L.depthTexture,0);let U0=J0.__webglTexture,E0=n0(L),c=l?J.TEXTURE_CUBE_MAP_POSITIVE_X+y:J.TEXTURE_2D,a=L.depthTexture.format===w8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(L.depthTexture.format===C8)if(T(L))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,c,U0,0,E0);else J.framebufferTexture2D(J.FRAMEBUFFER,a,c,U0,0);else if(L.depthTexture.format===w8)if(T(L))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,c,U0,0,E0);else J.framebufferTexture2D(J.FRAMEBUFFER,a,c,U0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function W0(C){let L=W.get(C),y=C.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==C.depthTexture){let l=C.depthTexture;if(L.__depthDisposeCallback)L.__depthDisposeCallback();if(l){let J0=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,l.removeEventListener("dispose",J0)};l.addEventListener("dispose",J0),L.__depthDisposeCallback=J0}L.__boundDepthTexture=l}if(C.depthTexture&&!L.__autoAllocateDepthBuffer)if(y)for(let l=0;l<6;l++)t(L.__webglFramebuffer[l],C,l);else{let l=C.texture.mipmaps;if(l&&l.length>0)t(L.__webglFramebuffer[0],C,0);else t(L.__webglFramebuffer,C,0)}else if(y){L.__webglDepthbuffer=[];for(let l=0;l<6;l++)if($.bindFramebuffer(J.FRAMEBUFFER,L.__webglFramebuffer[l]),L.__webglDepthbuffer[l]===void 0)L.__webglDepthbuffer[l]=J.createRenderbuffer(),UJ(L.__webglDepthbuffer[l],C,!1);else{let J0=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=L.__webglDepthbuffer[l];J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,J0,J.RENDERBUFFER,U0)}}else{let l=C.texture.mipmaps;if(l&&l.length>0)$.bindFramebuffer(J.FRAMEBUFFER,L.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,L.__webglFramebuffer);if(L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=J.createRenderbuffer(),UJ(L.__webglDepthbuffer,C,!1);else{let J0=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=L.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,J0,J.RENDERBUFFER,U0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function H0(C,L,y){let l=W.get(C);if(L!==void 0)w0(l.__webglFramebuffer,C,C.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(y!==void 0)W0(C)}function X0(C){let L=C.texture,y=W.get(C),l=W.get(L);C.addEventListener("dispose",k);let J0=C.textures,U0=C.isWebGLCubeRenderTarget===!0,E0=J0.length>1;if(!E0){if(l.__webglTexture===void 0)l.__webglTexture=J.createTexture();l.__version=L.version,H.memory.textures++}if(U0){y.__webglFramebuffer=[];for(let c=0;c<6;c++)if(L.mipmaps&&L.mipmaps.length>0){y.__webglFramebuffer[c]=[];for(let a=0;a<L.mipmaps.length;a++)y.__webglFramebuffer[c][a]=J.createFramebuffer()}else y.__webglFramebuffer[c]=J.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){y.__webglFramebuffer=[];for(let c=0;c<L.mipmaps.length;c++)y.__webglFramebuffer[c]=J.createFramebuffer()}else y.__webglFramebuffer=J.createFramebuffer();if(E0)for(let c=0,a=J0.length;c<a;c++){let V0=W.get(J0[c]);if(V0.__webglTexture===void 0)V0.__webglTexture=J.createTexture(),H.memory.textures++}if(C.samples>0&&T(C)===!1){y.__webglMultisampledFramebuffer=J.createFramebuffer(),y.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let c=0;c<J0.length;c++){let a=J0[c];y.__webglColorRenderbuffer[c]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,y.__webglColorRenderbuffer[c]);let V0=K.convert(a.format,a.colorSpace),y0=K.convert(a.type),D0=M(a.internalFormat,V0,y0,a.normalized,a.colorSpace,C.isXRRenderTarget===!0),G0=n0(C);J.renderbufferStorageMultisample(J.RENDERBUFFER,G0,D0,C.width,C.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+c,J.RENDERBUFFER,y.__webglColorRenderbuffer[c])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),C.depthBuffer)y.__webglDepthRenderbuffer=J.createRenderbuffer(),UJ(y.__webglDepthRenderbuffer,C,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(U0){$.bindTexture(J.TEXTURE_CUBE_MAP,l.__webglTexture),o0(J.TEXTURE_CUBE_MAP,L);for(let c=0;c<6;c++)if(L.mipmaps&&L.mipmaps.length>0)for(let a=0;a<L.mipmaps.length;a++)w0(y.__webglFramebuffer[c][a],C,L,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+c,a);else w0(y.__webglFramebuffer[c],C,L,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0);if(F(L))V(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(E0){for(let c=0,a=J0.length;c<a;c++){let V0=J0[c],y0=W.get(V0),D0=J.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)D0=C.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(D0,y0.__webglTexture),o0(D0,V0),w0(y.__webglFramebuffer,C,V0,J.COLOR_ATTACHMENT0+c,D0,0),F(V0))V(D0)}$.unbindTexture()}else{let c=J.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)c=C.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(c,l.__webglTexture),o0(c,L),L.mipmaps&&L.mipmaps.length>0)for(let a=0;a<L.mipmaps.length;a++)w0(y.__webglFramebuffer[a],C,L,J.COLOR_ATTACHMENT0,c,a);else w0(y.__webglFramebuffer,C,L,J.COLOR_ATTACHMENT0,c,0);if(F(L))V(c);$.unbindTexture()}if(C.depthBuffer)W0(C)}function k0(C){let L=C.textures;for(let y=0,l=L.length;y<l;y++){let J0=L[y];if(F(J0)){let U0=A(C),E0=W.get(J0).__webglTexture;$.bindTexture(U0,E0),V(U0),$.unbindTexture()}}}let j0=[],b0=[];function u0(C){if(C.samples>0){if(T(C)===!1){let{textures:L,width:y,height:l}=C,J0=J.COLOR_BUFFER_BIT,U0=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,E0=W.get(C),c=L.length>1;if(c)for(let V0=0;V0<L.length;V0++)$.bindFramebuffer(J.FRAMEBUFFER,E0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+V0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,E0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+V0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,E0.__webglMultisampledFramebuffer);let a=C.texture.mipmaps;if(a&&a.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglFramebuffer);for(let V0=0;V0<L.length;V0++){if(C.resolveDepthBuffer){if(C.depthBuffer)J0|=J.DEPTH_BUFFER_BIT;if(C.stencilBuffer&&C.resolveStencilBuffer)J0|=J.STENCIL_BUFFER_BIT}if(c){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,E0.__webglColorRenderbuffer[V0]);let y0=W.get(L[V0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,y0,0)}if(J.blitFramebuffer(0,0,y,l,0,0,y,l,J0,J.NEAREST),X===!0){if(j0.length=0,b0.length=0,j0.push(J.COLOR_ATTACHMENT0+V0),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1)j0.push(U0),b0.push(U0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,b0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,j0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),c)for(let V0=0;V0<L.length;V0++){$.bindFramebuffer(J.FRAMEBUFFER,E0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+V0,J.RENDERBUFFER,E0.__webglColorRenderbuffer[V0]);let y0=W.get(L[V0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,E0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+V0,J.TEXTURE_2D,y0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&X){let L=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[L])}}}function n0(C){return Math.min(Z.maxSamples,C.samples)}function T(C){let L=W.get(C);return C.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function NJ(C){let L=H.render.frame;if(N.get(C)!==L)N.set(C,L),C.update()}function t0(C,L){let{colorSpace:y,format:l,type:J0}=C;if(C.isCompressedTexture===!0||C.isVideoTexture===!0)return L;if(y!==aW&&y!==P8)if(QJ.getTransfer(y)===DJ){if(l!==C9||J0!==F9)N0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else S0("WebGLTextures: Unsupported texture color space:",y);return L}function e0(C){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement)U.width=C.naturalWidth||C.width,U.height=C.naturalHeight||C.height;else if(typeof VideoFrame<"u"&&C instanceof VideoFrame)U.width=C.displayWidth,U.height=C.displayHeight;else U.width=C.width,U.height=C.height;return U}this.allocateTextureUnit=o,this.resetTextureUnits=i,this.getTextureUnits=S,this.setTextureUnits=p,this.setTexture2D=K0,this.setTexture2DArray=u,this.setTexture3D=r,this.setTextureCube=$0,this.rebindTextures=H0,this.setupRenderTarget=X0,this.updateRenderTargetMipmap=k0,this.updateMultisampleRenderTarget=u0,this.setupDepthRenderbuffer=W0,this.setupFrameBufferTexture=w0,this.useMultisampledRTT=T,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function v1(J,Q){function $(W,Z=P8){let K,H=QJ.getTransfer(Z);if(W===F9)return J.UNSIGNED_BYTE;if(W===FW)return J.UNSIGNED_SHORT_4_4_4_4;if(W===DW)return J.UNSIGNED_SHORT_5_5_5_1;if(W===DY)return J.UNSIGNED_INT_5_9_9_9_REV;if(W===OY)return J.UNSIGNED_INT_10F_11F_11F_REV;if(W===qY)return J.BYTE;if(W===FY)return J.SHORT;if(W===o7)return J.UNSIGNED_SHORT;if(W===qW)return J.INT;if(W===Q8)return J.UNSIGNED_INT;if(W===p9)return J.FLOAT;if(W===A9)return J.HALF_FLOAT;if(W===RY)return J.ALPHA;if(W===MY)return J.RGB;if(W===C9)return J.RGBA;if(W===C8)return J.DEPTH_COMPONENT;if(W===w8)return J.DEPTH_STENCIL;if(W===kY)return J.RED;if(W===OW)return J.RED_INTEGER;if(W===_8)return J.RG;if(W===RW)return J.RG_INTEGER;if(W===MW)return J.RGBA_INTEGER;if(W===FQ||W===DQ||W===OQ||W===RQ)if(H===DJ)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(W===FQ)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(W===DQ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(W===OQ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(W===RQ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(W===FQ)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(W===DQ)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(W===OQ)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(W===RQ)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(W===kW||W===LW||W===VW||W===BW)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(W===kW)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(W===LW)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(W===VW)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(W===BW)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(W===IW||W===zW||W===AW||W===CW||W===wW||W===MQ||W===_W)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(W===IW||W===zW)return H===DJ?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(W===AW)return H===DJ?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(W===CW)return K.COMPRESSED_R11_EAC;if(W===wW)return K.COMPRESSED_SIGNED_R11_EAC;if(W===MQ)return K.COMPRESSED_RG11_EAC;if(W===_W)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(W===PW||W===TW||W===SW||W===jW||W===yW||W===vW||W===fW||W===hW||W===bW||W===xW||W===gW||W===pW||W===mW||W===lW)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(W===PW)return H===DJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(W===TW)return H===DJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(W===SW)return H===DJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(W===jW)return H===DJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(W===yW)return H===DJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(W===vW)return H===DJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(W===fW)return H===DJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(W===hW)return H===DJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(W===bW)return H===DJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(W===xW)return H===DJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(W===gW)return H===DJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(W===pW)return H===DJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(W===mW)return H===DJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(W===lW)return H===DJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(W===dW||W===uW||W===cW)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(W===dW)return H===DJ?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(W===uW)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(W===cW)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(W===nW||W===sW||W===kQ||W===iW)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(W===nW)return K.COMPRESSED_RED_RGTC1_EXT;if(W===sW)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(W===kQ)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(W===iW)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(W===D7)return J.UNSIGNED_INT_24_8;return J[W]!==void 0?J[W]:null}return{convert:$}}var f1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new jQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new Q9({vertexShader:f1,fragmentShader:h1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new zJ(new M7(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yU extends K9{constructor(J,Q){super();let $=this,W=null,Z=1,K=null,H="local-floor",Y=1,X=null,U=null,N=null,E=null,G=null,q=null,O=typeof XRWebGLBinding<"u",R=new jU,D={},F=Q.getContextAttributes(),V=null,A=null,M=[],z=[],_=new e,w=null,k=null,I=new TJ;I.viewport=new GJ;let b=new TJ;b.viewport=new GJ;let j=[I,b],h=new dZ,i=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(n){let Y0=M[n];if(Y0===void 0)Y0=new e7,M[n]=Y0;return Y0.getTargetRaySpace()},this.getControllerGrip=function(n){let Y0=M[n];if(Y0===void 0)Y0=new e7,M[n]=Y0;return Y0.getGripSpace()},this.getHand=function(n){let Y0=M[n];if(Y0===void 0)Y0=new e7,M[n]=Y0;return Y0.getHandSpace()};function p(n){let Y0=z.indexOf(n.inputSource);if(Y0===-1)return;let Z0=M[Y0];if(Z0!==void 0)Z0.update(n.inputSource,n.frame,X||K),Z0.dispatchEvent({type:n.type,data:n.inputSource})}function o(){W.removeEventListener("select",p),W.removeEventListener("selectstart",p),W.removeEventListener("selectend",p),W.removeEventListener("squeeze",p),W.removeEventListener("squeezestart",p),W.removeEventListener("squeezeend",p),W.removeEventListener("end",o),W.removeEventListener("inputsourceschange",m);for(let n=0;n<M.length;n++){let Y0=z[n];if(Y0===null)continue;z[n]=null,M[n].disconnect(Y0)}i=null,S=null,R.reset();for(let n in D)delete D[n];if(J.setRenderTarget(V),G=null,E=null,N=null,W=null,A=null,o0.stop(),$.isPresenting=!1,J.setPixelRatio(w),J.setSize(_.width,_.height,!1),k!==null){let n=k.camera;n.fov=k.fov,n.zoom=k.zoom,n.updateProjectionMatrix(),k=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(n){if(Z=n,$.isPresenting===!0)N0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(n){if(H=n,$.isPresenting===!0)N0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||K},this.setReferenceSpace=function(n){X=n},this.getBaseLayer=function(){return E!==null?E:G},this.getBinding=function(){if(N===null&&O)N=new XRWebGLBinding(W,Q);return N},this.getFrame=function(){return q},this.getSession=function(){return W},this.setSession=async function(n){if(W=n,W!==null){if(V=J.getRenderTarget(),W.addEventListener("select",p),W.addEventListener("selectstart",p),W.addEventListener("selectend",p),W.addEventListener("squeeze",p),W.addEventListener("squeezestart",p),W.addEventListener("squeezeend",p),W.addEventListener("end",o),W.addEventListener("inputsourceschange",m),F.xrCompatible!==!0)await Q.makeXRCompatible();if(w=J.getPixelRatio(),J.getSize(_),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Z0={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:Z};G=new XRWebGLLayer(W,Q,Z0),W.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),A=new uJ(G.framebufferWidth,G.framebufferHeight,{format:C9,type:F9,colorSpace:J.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let Z0=null,h0=null,g0=null;if(F.depth)g0=F.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,Z0=F.stencil?w8:C8,h0=F.stencil?D7:Q8;let w0={colorFormat:Q.RGBA8,depthFormat:g0,scaleFactor:Z};N=this.getBinding(),E=N.createProjectionLayer(w0),W.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),A=new uJ(E.textureWidth,E.textureHeight,{format:C9,type:F9,depthTexture:new S8(E.textureWidth,E.textureHeight,h0,void 0,void 0,void 0,void 0,void 0,void 0,Z0),stencilBuffer:F.stencil,colorSpace:J.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(Y),X=null,K=await W.requestReferenceSpace(H),o0.setContext(W),o0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(W!==null)return W.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function m(n){for(let Y0=0;Y0<n.removed.length;Y0++){let Z0=n.removed[Y0],h0=z.indexOf(Z0);if(h0>=0)z[h0]=null,M[h0].disconnect(Z0)}for(let Y0=0;Y0<n.added.length;Y0++){let Z0=n.added[Y0],h0=z.indexOf(Z0);if(h0===-1){for(let w0=0;w0<M.length;w0++)if(w0>=z.length){z.push(Z0),h0=w0;break}else if(z[w0]===null){z[w0]=Z0,h0=w0;break}if(h0===-1)break}let g0=M[h0];if(g0)g0.connect(Z0)}}let K0=new P,u=new P;function r(n,Y0,Z0){K0.setFromMatrixPosition(Y0.matrixWorld),u.setFromMatrixPosition(Z0.matrixWorld);let h0=K0.distanceTo(u),g0=Y0.projectionMatrix.elements,w0=Z0.projectionMatrix.elements,UJ=g0[14]/(g0[10]-1),t=g0[14]/(g0[10]+1),W0=(g0[9]+1)/g0[5],H0=(g0[9]-1)/g0[5],X0=(g0[8]-1)/g0[0],k0=(w0[8]+1)/w0[0],j0=UJ*X0,b0=UJ*k0,u0=h0/(-X0+k0),n0=u0*-X0;if(Y0.matrixWorld.decompose(n.position,n.quaternion,n.scale),n.translateX(n0),n.translateZ(u0),n.matrixWorld.compose(n.position,n.quaternion,n.scale),n.matrixWorldInverse.copy(n.matrixWorld).invert(),g0[10]===-1)n.projectionMatrix.copy(Y0.projectionMatrix),n.projectionMatrixInverse.copy(Y0.projectionMatrixInverse);else{let T=UJ+u0,NJ=t+u0,t0=j0-n0,e0=b0+(h0-n0),C=W0*t/NJ*T,L=H0*t/NJ*T;n.projectionMatrix.makePerspective(t0,e0,C,L,T,NJ),n.projectionMatrixInverse.copy(n.projectionMatrix).invert()}}function $0(n,Y0){if(Y0===null)n.matrixWorld.copy(n.matrix);else n.matrixWorld.multiplyMatrices(Y0.matrixWorld,n.matrix);n.matrixWorldInverse.copy(n.matrixWorld).invert()}this.updateCamera=function(n){if(W===null)return;let{near:Y0,far:Z0}=n;if(R.texture!==null){if(R.depthNear>0)Y0=R.depthNear;if(R.depthFar>0)Z0=R.depthFar}if(h.near=b.near=I.near=Y0,h.far=b.far=I.far=Z0,i!==h.near||S!==h.far)W.updateRenderState({depthNear:h.near,depthFar:h.far}),i=h.near,S=h.far;h.layers.mask=n.layers.mask|6,I.layers.mask=h.layers.mask&-5,b.layers.mask=h.layers.mask&-3;let h0=n.parent,g0=h.cameras;$0(h,h0);for(let w0=0;w0<g0.length;w0++)$0(g0[w0],h0);if(g0.length===2)r(h,I,b);else h.projectionMatrix.copy(I.projectionMatrix);if(k===null&&n.isPerspectiveCamera)k={camera:n,fov:n.fov,zoom:n.zoom};v0(n,h,h0)};function v0(n,Y0,Z0){if(Z0===null)n.matrix.copy(Y0.matrixWorld);else n.matrix.copy(Z0.matrixWorld),n.matrix.invert(),n.matrix.multiply(Y0.matrixWorld);if(n.matrix.decompose(n.position,n.quaternion,n.scale),n.updateMatrixWorld(!0),n.projectionMatrix.copy(Y0.projectionMatrix),n.projectionMatrixInverse.copy(Y0.projectionMatrixInverse),n.isPerspectiveCamera)n.fov=L8*2*Math.atan(1/n.projectionMatrix.elements[5]),n.zoom=1}this.getCamera=function(){return h},this.getFoveation=function(){if(E===null&&G===null)return;return Y},this.setFoveation=function(n){if(Y=n,E!==null)E.fixedFoveation=n;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=n},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(h)},this.getCameraTexture=function(n){return D[n]};let f0=null;function XJ(n,Y0){if(U=Y0.getViewerPose(X||K),q=Y0,U!==null){let Z0=U.views;if(G!==null)J.setRenderTargetFramebuffer(A,G.framebuffer),J.setRenderTarget(A);let h0=!1;if(Z0.length!==h.cameras.length)h.cameras.length=0,h0=!0;for(let t=0;t<Z0.length;t++){let W0=Z0[t],H0=null;if(G!==null)H0=G.getViewport(W0);else{let k0=N.getViewSubImage(E,W0);if(H0=k0.viewport,t===0)J.setRenderTargetTextures(A,k0.colorTexture,k0.depthStencilTexture),J.setRenderTarget(A)}let X0=j[t];if(X0===void 0)X0=new TJ,X0.layers.enable(t),X0.viewport=new GJ,j[t]=X0;if(X0.matrix.fromArray(W0.transform.matrix),X0.matrix.decompose(X0.position,X0.quaternion,X0.scale),X0.projectionMatrix.fromArray(W0.projectionMatrix),X0.projectionMatrixInverse.copy(X0.projectionMatrix).invert(),X0.viewport.set(H0.x,H0.y,H0.width,H0.height),t===0)h.matrix.copy(X0.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale);if(h0===!0)h.cameras.push(X0)}let g0=W.enabledFeatures;if(g0&&g0.includes("depth-sensing")&&W.depthUsage=="gpu-optimized"&&O){N=$.getBinding();let t=N.getDepthInformation(Z0[0]);if(t&&t.isValid&&t.texture)R.init(t,W.renderState)}if(g0&&g0.includes("camera-access")&&O){J.state.unbindTexture(),N=$.getBinding();for(let t=0;t<Z0.length;t++){let W0=Z0[t].camera;if(W0){let H0=D[W0];if(!H0)H0=new jQ,D[W0]=H0;let X0=N.getCameraImage(W0);H0.sourceTexture=X0}}}}for(let Z0=0;Z0<M.length;Z0++){let h0=z[Z0],g0=M[Z0];if(h0!==null&&g0!==void 0)g0.update(h0,Y0,X||K)}if(f0)f0(n,Y0);if(Y0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:Y0});q=null}let o0=new VU;o0.setAnimationLoop(XJ),this.setAnimationLoop=function(n){f0=n},this.dispose=function(){}}}var b1=new l0,vU=new d0;vU.set(-1,0,0,0,1,0,0,0,1);function x1(J,Q){function $(D,F){if(D.matrixAutoUpdate===!0)D.updateMatrix();F.value.copy(D.matrix)}function W(D,F){if(F.color.getRGB(D.fogColor.value,VZ(J)),F.isFog)D.fogNear.value=F.near,D.fogFar.value=F.far;else if(F.isFogExp2)D.fogDensity.value=F.density}function Z(D,F,V,A,M){if(F.isNodeMaterial)F.uniformsNeedUpdate=!1;else if(F.isMeshBasicMaterial)K(D,F);else if(F.isMeshLambertMaterial){if(K(D,F),F.envMap)D.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshToonMaterial)K(D,F),E(D,F);else if(F.isMeshPhongMaterial){if(K(D,F),N(D,F),F.envMap)D.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshStandardMaterial){if(K(D,F),G(D,F),F.isMeshPhysicalMaterial)q(D,F,M)}else if(F.isMeshMatcapMaterial)K(D,F),O(D,F);else if(F.isMeshDepthMaterial)K(D,F);else if(F.isMeshDistanceMaterial)K(D,F),R(D,F);else if(F.isMeshNormalMaterial)K(D,F);else if(F.isLineBasicMaterial){if(H(D,F),F.isLineDashedMaterial)Y(D,F)}else if(F.isPointsMaterial)X(D,F,V,A);else if(F.isSpriteMaterial)U(D,F);else if(F.isShadowMaterial)D.color.value.copy(F.color),D.opacity.value=F.opacity;else if(F.isShaderMaterial)F.uniformsNeedUpdate=!1}function K(D,F){if(D.opacity.value=F.opacity,F.color)D.diffuse.value.copy(F.color);if(F.emissive)D.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity);if(F.map)D.map.value=F.map,$(F.map,D.mapTransform);if(F.alphaMap)D.alphaMap.value=F.alphaMap,$(F.alphaMap,D.alphaMapTransform);if(F.bumpMap){if(D.bumpMap.value=F.bumpMap,$(F.bumpMap,D.bumpMapTransform),D.bumpScale.value=F.bumpScale,F.side===oJ)D.bumpScale.value*=-1}if(F.normalMap){if(D.normalMap.value=F.normalMap,$(F.normalMap,D.normalMapTransform),D.normalScale.value.copy(F.normalScale),F.side===oJ)D.normalScale.value.negate()}if(F.displacementMap)D.displacementMap.value=F.displacementMap,$(F.displacementMap,D.displacementMapTransform),D.displacementScale.value=F.displacementScale,D.displacementBias.value=F.displacementBias;if(F.emissiveMap)D.emissiveMap.value=F.emissiveMap,$(F.emissiveMap,D.emissiveMapTransform);if(F.specularMap)D.specularMap.value=F.specularMap,$(F.specularMap,D.specularMapTransform);if(F.alphaTest>0)D.alphaTest.value=F.alphaTest;let V=Q.get(F),A=V.envMap,M=V.envMapRotation;if(A){if(D.envMap.value=A,D.envMapRotation.value.setFromMatrix4(b1.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1)D.envMapRotation.value.premultiply(vU);D.reflectivity.value=F.reflectivity,D.ior.value=F.ior,D.refractionRatio.value=F.refractionRatio}if(F.lightMap)D.lightMap.value=F.lightMap,D.lightMapIntensity.value=F.lightMapIntensity,$(F.lightMap,D.lightMapTransform);if(F.aoMap)D.aoMap.value=F.aoMap,D.aoMapIntensity.value=F.aoMapIntensity,$(F.aoMap,D.aoMapTransform)}function H(D,F){if(D.diffuse.value.copy(F.color),D.opacity.value=F.opacity,F.map)D.map.value=F.map,$(F.map,D.mapTransform)}function Y(D,F){D.dashSize.value=F.dashSize,D.totalSize.value=F.dashSize+F.gapSize,D.scale.value=F.scale}function X(D,F,V,A){if(D.diffuse.value.copy(F.color),D.opacity.value=F.opacity,D.size.value=F.size*V,D.scale.value=A*0.5,F.map)D.map.value=F.map,$(F.map,D.uvTransform);if(F.alphaMap)D.alphaMap.value=F.alphaMap,$(F.alphaMap,D.alphaMapTransform);if(F.alphaTest>0)D.alphaTest.value=F.alphaTest}function U(D,F){if(D.diffuse.value.copy(F.color),D.opacity.value=F.opacity,D.rotation.value=F.rotation,F.map)D.map.value=F.map,$(F.map,D.mapTransform);if(F.alphaMap)D.alphaMap.value=F.alphaMap,$(F.alphaMap,D.alphaMapTransform);if(F.alphaTest>0)D.alphaTest.value=F.alphaTest}function N(D,F){D.specular.value.copy(F.specular),D.shininess.value=Math.max(F.shininess,0.0001)}function E(D,F){if(F.gradientMap)D.gradientMap.value=F.gradientMap}function G(D,F){if(D.metalness.value=F.metalness,F.metalnessMap)D.metalnessMap.value=F.metalnessMap,$(F.metalnessMap,D.metalnessMapTransform);if(D.roughness.value=F.roughness,F.roughnessMap)D.roughnessMap.value=F.roughnessMap,$(F.roughnessMap,D.roughnessMapTransform);if(F.envMap)D.envMapIntensity.value=F.envMapIntensity}function q(D,F,V){if(D.ior.value=F.ior,F.sheen>0){if(D.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),D.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap)D.sheenColorMap.value=F.sheenColorMap,$(F.sheenColorMap,D.sheenColorMapTransform);if(F.sheenRoughnessMap)D.sheenRoughnessMap.value=F.sheenRoughnessMap,$(F.sheenRoughnessMap,D.sheenRoughnessMapTransform)}if(F.clearcoat>0){if(D.clearcoat.value=F.clearcoat,D.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap)D.clearcoatMap.value=F.clearcoatMap,$(F.clearcoatMap,D.clearcoatMapTransform);if(F.clearcoatRoughnessMap)D.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,$(F.clearcoatRoughnessMap,D.clearcoatRoughnessMapTransform);if(F.clearcoatNormalMap){if(D.clearcoatNormalMap.value=F.clearcoatNormalMap,$(F.clearcoatNormalMap,D.clearcoatNormalMapTransform),D.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===oJ)D.clearcoatNormalScale.value.negate()}}if(F.dispersion>0)D.dispersion.value=F.dispersion;if(F.retroreflectivity>0)D.retroreflectivity.value=F.retroreflectivity;if(F.iridescence>0){if(D.iridescence.value=F.iridescence,D.iridescenceIOR.value=F.iridescenceIOR,D.iridescenceThicknessMinimum.value=F.iridescenceThicknessRange[0],D.iridescenceThicknessMaximum.value=F.iridescenceThicknessRange[1],F.iridescenceMap)D.iridescenceMap.value=F.iridescenceMap,$(F.iridescenceMap,D.iridescenceMapTransform);if(F.iridescenceThicknessMap)D.iridescenceThicknessMap.value=F.iridescenceThicknessMap,$(F.iridescenceThicknessMap,D.iridescenceThicknessMapTransform)}if(F.transmission>0){if(D.transmission.value=F.transmission,D.transmissionSamplerMap.value=V.texture,D.transmissionSamplerSize.value.set(V.width,V.height),F.transmissionMap)D.transmissionMap.value=F.transmissionMap,$(F.transmissionMap,D.transmissionMapTransform);if(D.thickness.value=F.thickness,F.thicknessMap)D.thicknessMap.value=F.thicknessMap,$(F.thicknessMap,D.thicknessMapTransform);D.attenuationDistance.value=F.attenuationDistance,D.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){if(D.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap)D.anisotropyMap.value=F.anisotropyMap,$(F.anisotropyMap,D.anisotropyMapTransform)}if(D.specularIntensity.value=F.specularIntensity,D.specularColor.value.copy(F.specularColor),F.specularColorMap)D.specularColorMap.value=F.specularColorMap,$(F.specularColorMap,D.specularColorMapTransform);if(F.specularIntensityMap)D.specularIntensityMap.value=F.specularIntensityMap,$(F.specularIntensityMap,D.specularIntensityMapTransform)}function O(D,F){if(F.matcap)D.matcap.value=F.matcap}function R(D,F){let V=Q.get(F).light;D.referencePosition.value.setFromMatrixPosition(V.matrixWorld),D.nearDistance.value=V.shadow.camera.near,D.farDistance.value=V.shadow.camera.far}return{refreshFogUniforms:W,refreshMaterialUniforms:Z}}function g1(J,Q,$,W){let Z={},K={},H=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(M,z){let _=z.program;W.uniformBlockBinding(M,_)}function U(M,z){let _=Z[M.id];if(_===void 0)D(M),_=N(M),Z[M.id]=_,M.addEventListener("dispose",V);let w=z.program;W.updateUBOMapping(M,w);let k=Q.render.frame;if(K[M.id]!==k)G(M),K[M.id]=k}function N(M){let z=E();M.__bindingPointIndex=z;let _=J.createBuffer(),w=M.__size,k=M.usage;return J.bindBuffer(J.UNIFORM_BUFFER,_),J.bufferData(J.UNIFORM_BUFFER,w,k),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,z,_),_}function E(){for(let M=0;M<Y;M++)if(H.indexOf(M)===-1)return H.push(M),M;return S0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(M){let z=Z[M.id],_=M.uniforms,w=M.__cache;J.bindBuffer(J.UNIFORM_BUFFER,z);for(let k=0,I=_.length;k<I;k++){let b=_[k];if(Array.isArray(b))for(let j=0,h=b.length;j<h;j++)q(b[j],k,j,w);else q(b,k,0,w)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function q(M,z,_,w){if(R(M,z,_,w)===!0){let{__offset:k,value:I}=M;if(Array.isArray(I)){let b=0;for(let j=0;j<I.length;j++){let h=I[j],i=F(h);if(O(h,M.__data,b),typeof h!=="number"&&typeof h!=="boolean"&&!h.isMatrix3&&!ArrayBuffer.isView(h))b+=i.storage/Float32Array.BYTES_PER_ELEMENT}}else O(I,M.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,k,M.__data)}}function O(M,z,_){if(typeof M==="number"||typeof M==="boolean")z[0]=M;else if(M.isMatrix3)z[0]=M.elements[0],z[1]=M.elements[1],z[2]=M.elements[2],z[3]=0,z[4]=M.elements[3],z[5]=M.elements[4],z[6]=M.elements[5],z[7]=0,z[8]=M.elements[6],z[9]=M.elements[7],z[10]=M.elements[8],z[11]=0;else if(ArrayBuffer.isView(M))z.set(new M.constructor(M.buffer,M.byteOffset,z.length));else M.toArray(z,_)}function R(M,z,_,w){let k=M.value,I=z+"_"+_;if(w[I]===void 0){if(typeof k==="number"||typeof k==="boolean")w[I]=k;else if(ArrayBuffer.isView(k))w[I]=k.slice();else w[I]=k.clone();return!0}else{let b=w[I];if(typeof k==="number"||typeof k==="boolean"){if(b!==k)return w[I]=k,!0}else if(ArrayBuffer.isView(k))return!0;else if(b.equals(k)===!1)return b.copy(k),!0}return!1}function D(M){let z=M.uniforms,_=0,w=16;for(let I=0,b=z.length;I<b;I++){let j=Array.isArray(z[I])?z[I]:[z[I]];for(let h=0,i=j.length;h<i;h++){let S=j[h],p=Array.isArray(S.value)?S.value:[S.value];for(let o=0,m=p.length;o<m;o++){let K0=p[o],u=F(K0),r=_%w,$0=r%u.boundary,v0=r+$0;if(_+=$0,v0!==0&&w-v0<u.storage)_+=w-v0;S.__data=new Float32Array(u.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=_,_+=u.storage}}}let k=_%w;if(k>0)_+=w-k;return M.__size=_,M.__cache={},this}function F(M){let z={boundary:0,storage:0};if(typeof M==="number"||typeof M==="boolean")z.boundary=4,z.storage=4;else if(M.isVector2)z.boundary=8,z.storage=8;else if(M.isVector3||M.isColor)z.boundary=16,z.storage=12;else if(M.isVector4)z.boundary=16,z.storage=16;else if(M.isMatrix3)z.boundary=48,z.storage=48;else if(M.isMatrix4)z.boundary=64,z.storage=64;else if(M.isTexture)N0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(M))z.boundary=16,z.storage=M.byteLength;else N0("WebGLRenderer: Unsupported uniform value type.",M);return z}function V(M){let z=M.target;z.removeEventListener("dispose",V);let _=H.indexOf(z.__bindingPointIndex);H.splice(_,1),J.deleteBuffer(Z[z.id]),delete Z[z.id],delete K[z.id]}function A(){for(let M in Z)J.deleteBuffer(Z[M]);H=[],Z={},K={}}return{bind:X,update:U,dispose:A}}var p1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),w9=null;function m1(){if(w9===null)w9=new J9(p1,16,16,_8,A9),w9.name="DFG_LUT",w9.minFilter=aJ,w9.magFilter=aJ,w9.wrapS=EQ,w9.wrapT=EQ,w9.generateMipmaps=!1,w9.needsUpdate=!0;return w9}class l1{constructor(J={}){let{canvas:Q=PY(),context:$=null,depth:W=!0,stencil:Z=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:E=!1,outputBufferType:G=F9}=J;this.isWebGLRenderer=!0;let q;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=$.getContextAttributes().alpha}else q=K;let O=G,R=new Set([MW,RW,OW]),D=new Set([F9,Q8,o7,D7,FW,DW]),F=new Uint32Array(4),V=new Int32Array(4),A=new P,M=null,z=null,_=[],w=[],k=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=q9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,b=!1,j=null,h=null,i=null,S=null;this._outputColorSpace=VY;let p=0,o=0,m=null,K0=-1,u=null,r=new GJ,$0=new GJ,v0=null,f0=new B0(0),XJ=0,o0=Q.width,n=Q.height,Y0=1,Z0=null,h0=null,g0=new GJ(0,0,o0,n),w0=new GJ(0,0,o0,n),UJ=!1,t=new e9,W0=!1,H0=!1,X0=new l0,k0=new P,j0=new GJ,b0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},u0=!1;function n0(){return m===null?Y0:1}let T=$;function NJ(B,v){return Q.getContext(B,v)}let t0,e0,C,L,y,l,J0,U0,E0,c,a,V0,y0,D0,G0,x0,p0,KJ,f,q0,s,F0,I0;try{let B={alpha:!0,depth:W,stencil:Z,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${TH}`);if(Q.addEventListener("webglcontextlost",s0,!1),Q.addEventListener("webglcontextrestored",OJ,!1),Q.addEventListener("webglcontextcreationerror",HJ,!1),T===null){if(T=NJ("webgl2",B),T===null)if(NJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Q0()}catch(B){throw Q.removeEventListener("webglcontextlost",s0,!1),Q.removeEventListener("webglcontextrestored",OJ,!1),Q.removeEventListener("webglcontextcreationerror",HJ,!1),S0("WebGLRenderer: "+B.message),B}function Q0(){if(t0=new iF(T),t0.init(),s=new v1(T,t0),e0=new xF(T,t0,J,s),C=new j1(T,t0),e0.reversedDepthBuffer&&E)C.buffers.depth.setReversed(!0);h=T.createFramebuffer(),i=T.createFramebuffer(),S=T.createFramebuffer(),L=new rF(T),y=new M1,l=new y1(T,t0,C,y,e0,s,L),J0=new sF(I),U0=new e5(T),F0=new hF(T,U0),E0=new oF(T,U0,L,F0),c=new eF(T,E0,U0,F0,L),KJ=new tF(T,e0,l),G0=new gF(y),a=new R1(I,J0,t0,e0,F0,G0),V0=new x1(I,y),y0=new L1,D0=new C1(t0),p0=new fF(I,J0,C,c,q,Y),x0=new S1(I,c,e0),I0=new g1(T,L,e0,C),f=new bF(T,t0,L),q0=new aF(T,t0,L),L.programs=a.programs,I.capabilities=e0,I.extensions=t0,I.properties=y,I.renderLists=y0,I.shadowMap=x0,I.state=C,I.info=L}if(O!==F9)k=new QD(O,Q.width,Q.height,H,W,Z);let R0=new yU(I,T);this.xr=R0,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let B=t0.get("WEBGL_lose_context");if(B)B.loseContext()},this.forceContextRestore=function(){let B=t0.get("WEBGL_lose_context");if(B)B.restoreContext()},this.getPixelRatio=function(){return Y0},this.setPixelRatio=function(B){if(B===void 0)return;Y0=B,this.setSize(o0,n,!1)},this.getSize=function(B){return B.set(o0,n)},this.setSize=function(B,v,d=!0){if(R0.isPresenting){N0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(o0=B,n=v,Q.width=Math.floor(B*Y0),Q.height=Math.floor(v*Y0),d===!0)Q.style.width=B+"px",Q.style.height=v+"px";if(k!==null)k.setSize(Q.width,Q.height);this.setViewport(0,0,B,v)},this.getDrawingBufferSize=function(B){return B.set(o0*Y0,n*Y0).floor()},this.setDrawingBufferSize=function(B,v,d){o0=B,n=v,Y0=d,Q.width=Math.floor(B*d),Q.height=Math.floor(v*d),this.setViewport(0,0,B,v)},this.setEffects=function(B){if(O===F9){S0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(B){for(let v=0;v<B.length;v++)if(B[v].isOutputPass===!0){N0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(B||[])},this.getCurrentViewport=function(B){return B.copy(r)},this.getViewport=function(B){return B.copy(g0)},this.setViewport=function(B,v,d,x){if(B.isVector4)g0.set(B.x,B.y,B.z,B.w);else g0.set(B,v,d,x);C.viewport(r.copy(g0).multiplyScalar(Y0).round())},this.getScissor=function(B){return B.copy(w0)},this.setScissor=function(B,v,d,x){if(B.isVector4)w0.set(B.x,B.y,B.z,B.w);else w0.set(B,v,d,x);C.scissor($0.copy(w0).multiplyScalar(Y0).round())},this.getScissorTest=function(){return UJ},this.setScissorTest=function(B){C.setScissorTest(UJ=B)},this.setOpaqueSort=function(B){Z0=B},this.setTransparentSort=function(B){h0=B},this.getClearColor=function(B){return B.copy(p0.getClearColor())},this.setClearColor=function(){p0.setClearColor(...arguments)},this.getClearAlpha=function(){return p0.getClearAlpha()},this.setClearAlpha=function(){p0.setClearAlpha(...arguments)},this.clear=function(B=!0,v=!0,d=!0){let x=0;if(B){let g=!1;if(m!==null){let L0=m.texture.format;g=R.has(L0)}if(g){let L0=m.texture.type,C0=D.has(L0),M0=p0.getClearColor(),_0=p0.getClearAlpha(),T0=M0.r,a0=M0.g,JJ=M0.b;if(C0)F[0]=T0,F[1]=a0,F[2]=JJ,F[3]=_0,T.clearBufferuiv(T.COLOR,0,F);else V[0]=T0,V[1]=a0,V[2]=JJ,V[3]=_0,T.clearBufferiv(T.COLOR,0,V)}else x|=T.COLOR_BUFFER_BIT}if(v)x|=T.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(d)x|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(x!==0)T.clear(x)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(B){B.setRenderer(this),j=B},this.dispose=function(){Q.removeEventListener("webglcontextlost",s0,!1),Q.removeEventListener("webglcontextrestored",OJ,!1),Q.removeEventListener("webglcontextcreationerror",HJ,!1),p0.dispose(),y0.dispose(),D0.dispose(),y.dispose(),J0.dispose(),c.dispose(),F0.dispose(),I0.dispose(),a.dispose(),R0.dispose(),R0.removeEventListener("sessionstart",GK),R0.removeEventListener("sessionend",NK),K8.stop()};function s0(B){B.preventDefault(),m7("WebGLRenderer: Context Lost."),b=!0}function OJ(){m7("WebGLRenderer: Context Restored."),b=!1;let B=L.autoReset,v=x0.enabled,d=x0.autoUpdate,x=x0.needsUpdate,g=x0.type;Q0(),L.autoReset=B,x0.enabled=v,x0.autoUpdate=d,x0.needsUpdate=x,x0.type=g}function HJ(B){S0("WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function O9(B){let v=B.target;v.removeEventListener("dispose",O9),P9(v)}function P9(B){fU(B),y.remove(B)}function fU(B){let v=y.get(B).programs;if(v!==void 0){if(v.forEach(function(d){a.releaseProgram(d)}),B.isShaderMaterial)a.releaseShaderCache(B)}}this.renderBufferDirect=function(B,v,d,x,g,L0){if(v===null)v=b0;let C0=g.isMesh&&g.matrixWorld.determinantAffine()<0,M0=xU(B,v,d,x,g);C.setMaterial(x,C0);let _0=d.index,T0=1;if(x.wireframe===!0){if(_0=E0.getWireframeAttribute(d),_0===void 0)return;T0=2}let a0=d.drawRange,JJ=d.attributes.position,P0=a0.start*T0,YJ=(a0.start+a0.count)*T0;if(L0!==null)P0=Math.max(P0,L0.start*T0),YJ=Math.min(YJ,(L0.start+L0.count)*T0);if(_0!==null)P0=Math.max(P0,0),YJ=Math.min(YJ,_0.count);else if(JJ!==void 0&&JJ!==null)P0=Math.max(P0,0),YJ=Math.min(YJ,JJ.count);let AJ=YJ-P0;if(AJ<0||AJ===1/0)return;F0.setup(g,x,M0,d,_0);let MJ,FJ=f;if(_0!==null)MJ=U0.get(_0),FJ=q0,FJ.setIndex(MJ);if(g.isMesh)if(x.wireframe===!0)C.setLineWidth(x.wireframeLinewidth*n0()),FJ.setMode(T.LINES);else FJ.setMode(T.TRIANGLES);else if(g.isLine){let vJ=x.linewidth;if(vJ===void 0)vJ=1;if(C.setLineWidth(vJ*n0()),g.isLineSegments)FJ.setMode(T.LINES);else if(g.isLineLoop)FJ.setMode(T.LINE_LOOP);else FJ.setMode(T.LINE_STRIP)}else if(g.isPoints)FJ.setMode(T.POINTS);else if(g.isSprite)FJ.setMode(T.TRIANGLES);if(g.isBatchedMesh)if(!t0.get("WEBGL_multi_draw")){let{_multiDrawStarts:vJ,_multiDrawCounts:z0,_multiDrawCount:mJ}=g,$J=_0?U0.get(_0).bytesPerElement:1,W9=y.get(x).currentProgram.getUniforms();for(let R9=0;R9<mJ;R9++)W9.setValue(T,"_gl_DrawID",R9),FJ.render(vJ[R9]/$J,z0[R9])}else FJ.renderMultiDraw(g._multiDrawStarts,g._multiDrawCounts,g._multiDrawCount);else if(g.isInstancedMesh)FJ.renderInstances(P0,AJ,g.count);else if(d.isInstancedBufferGeometry){let vJ=d._maxInstanceCount!==void 0?d._maxInstanceCount:1/0,z0=Math.min(d.instanceCount,vJ);FJ.renderInstances(P0,AJ,z0)}else FJ.render(P0,AJ)};function UK(B,v,d,x){if(j!==null&&B.isNodeMaterial)j.setObject(x,B);if(W0===!0)G0.setState(B,d,!1);if(B.transparent===!0&&B.side===I9&&B.forceSinglePass===!1)B.side=oJ,B.needsUpdate=!0,O6(B,v,x),B.side=E7,B.needsUpdate=!0,O6(B,v,x),B.side=I9;else O6(B,v,x)}this.compile=function(B,v,d=null){if(d===null)d=B;if(j!==null)j.renderStart(B,v,d);if(z=D0.get(d),z.init(v),w.push(z),d.traverseVisible(function(g){if(g.isLight&&g.layers.test(v.layers)){if(z.pushLight(g),g.castShadow)z.pushShadow(g)}}),B!==d)B.traverseVisible(function(g){if(g.isLight&&g.layers.test(v.layers)){if(z.pushLight(g),g.castShadow)z.pushShadow(g)}});if(z.setupLights(),j!==null)j.updateLights(z.state.lightsArray);if(H0=this.localClippingEnabled,W0=G0.init(this.clippingPlanes,H0),W0===!0)G0.setGlobalState(this.clippingPlanes,v);if(j!==null)x0.render(z.state.shadowsArray,d,v);let x=new Set;if(B.traverse(function(g){if(!(g.isMesh||g.isPoints||g.isLine||g.isSprite))return;let L0=g.material;if(L0)if(Array.isArray(L0))for(let C0=0;C0<L0.length;C0++){let M0=L0[C0];UK(M0,d,v,g),x.add(M0)}else UK(L0,d,v,g),x.add(L0)}),z=w.pop(),j!==null)j.renderEnd();return x},this.compileAsync=function(B,v,d=null){let x=this.compile(B,v,d);return new Promise((g)=>{function L0(){if(x.forEach(function(C0){let _0=y.get(C0).currentProgram;if(_0===void 0||_0.isReady())x.delete(C0)}),x.size===0){g(B);return}setTimeout(L0,10)}if(t0.get("KHR_parallel_shader_compile")!==null)L0();else setTimeout(L0,10)})};let E$=null;function hU(B){if(E$)E$(B)}function GK(){K8.stop()}function NK(){K8.start()}let K8=new VU;if(K8.setAnimationLoop(hU),typeof self<"u")K8.setContext(self);this.setAnimationLoop=function(B){E$=B,R0.setAnimationLoop(B),B===null?K8.stop():K8.start()},R0.addEventListener("sessionstart",GK),R0.addEventListener("sessionend",NK),this.render=function(B,v){if(v!==void 0&&v.isCamera!==!0){S0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(j!==null)j.renderStart(B,v);let d=R0.enabled===!0&&R0.isPresenting===!0,x=k!==null&&(m===null||d)&&k.begin(I,m);if(B.matrixWorldAutoUpdate===!0)B.updateMatrixWorld();if(v.parent===null&&v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(R0.enabled===!0&&R0.isPresenting===!0&&(k===null||k.isCompositing()===!1)){if(R0.cameraAutoUpdate===!0)R0.updateCamera(v);v=R0.getCamera()}if(B.isScene===!0)B.onBeforeRender(I,B,v,m);if(z=D0.get(B,w.length),z.init(v),z.state.textureUnits=l.getTextureUnits(),w.push(z),X0.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),t.setFromProjectionMatrix(X0,eW,v.reversedDepth),H0=this.localClippingEnabled,W0=G0.init(this.clippingPlanes,H0),M=y0.get(B,_.length),M.init(),_.push(M),R0.enabled===!0&&R0.isPresenting===!0){let C0=I.xr.getDepthSensingMesh();if(C0!==null)q$(C0,v,-1/0,I.sortObjects)}if(q$(B,v,0,I.sortObjects),M.finish(),j!==null)j.updateLights(z.state.lightsArray);if(I.sortObjects===!0)M.sort(Z0,h0);if(u0=R0.enabled===!1||R0.isPresenting===!1||R0.hasDepthSensing()===!1,u0)p0.addToRenderList(M,B);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(W0===!0)G0.beginShadows();let g=z.state.shadowsArray;if(x0.render(g,B,v),W0===!0)G0.endShadows();if((x&&k.hasRenderPass())===!1){let{opaque:C0,transmissive:M0}=M;if(z.setupLights(),v.isArrayCamera){let _0=v.cameras;if(M0.length>0)for(let T0=0,a0=_0.length;T0<a0;T0++){let JJ=_0[T0];qK(C0,M0,B,JJ)}if(u0)p0.render(B);for(let T0=0,a0=_0.length;T0<a0;T0++){let JJ=_0[T0];EK(M,B,JJ,JJ.viewport)}}else{if(M0.length>0)qK(C0,M0,B,v);if(u0)p0.render(B);EK(M,B,v)}}if(m!==null&&o===0)l.updateMultisampleRenderTarget(m),l.updateRenderTargetMipmap(m);if(x)k.end(I);if(B.isScene===!0)B.onAfterRender(I,B,v);if(F0.resetDefaultState(),K0=-1,u=null,w.pop(),w.length>0){if(z=w[w.length-1],l.setTextureUnits(z.state.textureUnits),W0===!0)G0.setGlobalState(I.clippingPlanes,z.state.camera)}else z=null;if(_.pop(),_.length>0)M=_[_.length-1];else M=null;if(j!==null)j.renderEnd()};function q$(B,v,d,x){if(B.visible===!1)return;if(B.layers.test(v.layers)){if(B.isGroup)d=B.renderOrder;else if(B.isLOD){if(B.autoUpdate===!0)B.update(v)}else if(B.isLightProbeGrid)z.pushLightProbeGrid(B);else if(B.isLight){if(z.pushLight(B),B.castShadow)z.pushShadow(B)}else if(B.isSprite){if(!B.frustumCulled||B.intersectsFrustum(t)){if(x)j0.setFromMatrixPosition(B.matrixWorld).applyMatrix4(X0);let C0=c.update(B),M0=B.material;if(M0.visible)M.push(B,C0,M0,d,j0.z,null,v)}}else if(B.isMesh||B.isLine||B.isPoints){if(!B.frustumCulled||B.intersectsFrustum(t)){let C0=c.update(B),M0=B.material;if(x){if(B.boundingSphere!==void 0){if(B.boundingSphere===null)B.computeBoundingSphere();j0.copy(B.boundingSphere.center)}else{if(C0.boundingSphere===null)C0.computeBoundingSphere();j0.copy(C0.boundingSphere.center)}j0.applyMatrix4(B.matrixWorld).applyMatrix4(X0)}if(Array.isArray(M0)){let _0=C0.groups;for(let T0=0,a0=_0.length;T0<a0;T0++){let JJ=_0[T0],P0=M0[JJ.materialIndex];if(P0&&P0.visible)M.push(B,C0,P0,d,j0.z,JJ,v)}}else if(M0.visible)M.push(B,C0,M0,d,j0.z,null,v)}}}let L0=B.children;for(let C0=0,M0=L0.length;C0<M0;C0++)q$(L0[C0],v,d,x)}function EK(B,v,d,x){let{opaque:g,transmissive:L0,transparent:C0}=B;if(z.setupLightsView(d),W0===!0)G0.setGlobalState(I.clippingPlanes,d);if(x)C.viewport(r.copy(x));if(g.length>0)D6(g,v,d);if(L0.length>0)D6(L0,v,d);if(C0.length>0)D6(C0,v,d);C.buffers.depth.setTest(!0),C.buffers.depth.setMask(!0),C.buffers.color.setMask(!0),C.setPolygonOffset(!1)}function qK(B,v,d,x){if((d.isScene===!0?d.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[x.id]===void 0){let P0=t0.has("EXT_color_buffer_half_float")||t0.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[x.id]=new uJ(1,1,{generateMipmaps:!0,type:P0?A9:F9,minFilter:A8,samples:Math.max(4,e0.samples),stencilBuffer:Z,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:QJ.workingColorSpace})}let L0=z.state.transmissionRenderTarget[x.id],C0=x.viewport||r;L0.setSize(C0.z*I.transmissionResolutionScale,C0.w*I.transmissionResolutionScale);let M0=I.getRenderTarget(),_0=I.getActiveCubeFace(),T0=I.getActiveMipmapLevel();if(I.setRenderTarget(L0),I.getClearColor(f0),XJ=I.getClearAlpha(),XJ<1)I.setClearColor(16777215,0.5);if(I.clear(),u0)p0.render(d);let a0=I.toneMapping;I.toneMapping=q9;let JJ=x.viewport;if(x.viewport!==void 0)x.viewport=void 0;if(z.setupLightsView(x),W0===!0)G0.setGlobalState(I.clippingPlanes,x);if(D6(B,d,x),l.updateMultisampleRenderTarget(L0),l.updateRenderTargetMipmap(L0),t0.has("WEBGL_multisampled_render_to_texture")===!1){let P0=!1;for(let YJ=0,AJ=v.length;YJ<AJ;YJ++){let MJ=v[YJ],{object:FJ,geometry:vJ,material:z0,group:mJ}=MJ;if(z0.side===I9&&FJ.layers.test(x.layers)){let $J=z0.side;z0.side=oJ,z0.needsUpdate=!0,FK(FJ,d,x,vJ,z0,mJ),z0.side=$J,z0.needsUpdate=!0,P0=!0}}if(P0===!0)l.updateMultisampleRenderTarget(L0),l.updateRenderTargetMipmap(L0)}if(I.setRenderTarget(M0,_0,T0),I.setClearColor(f0,XJ),JJ!==void 0)x.viewport=JJ;I.toneMapping=a0}function D6(B,v,d){let x=v.isScene===!0?v.overrideMaterial:null;for(let g=0,L0=B.length;g<L0;g++){let C0=B[g],{object:M0,geometry:_0,group:T0}=C0,a0=C0.material;if(a0.allowOverride===!0&&x!==null)a0=x;if(M0.layers.test(d.layers))FK(M0,v,d,_0,a0,T0)}}function FK(B,v,d,x,g,L0){if(j!==null&&g.isNodeMaterial)j.setObject(B,g);if(B.onBeforeRender(I,v,d,x,g,L0),B.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),g.onBeforeRender(I,v,d,x,B,L0),g.transparent===!0&&g.side===I9&&g.forceSinglePass===!1)g.side=oJ,g.needsUpdate=!0,I.renderBufferDirect(d,v,x,g,B,L0),g.side=E7,g.needsUpdate=!0,I.renderBufferDirect(d,v,x,g,B,L0),g.side=I9;else I.renderBufferDirect(d,v,x,g,B,L0);B.onAfterRender(I,v,d,x,g,L0)}function O6(B,v,d){if(v.isScene!==!0)v=b0;let x=y.get(B),g=z.state.lights,L0=z.state.shadowsArray,C0=g.state.version,M0=a.getParameters(B,g.state,L0,v,d,z.state.lightProbeGridArray),_0=a.getProgramCacheKey(M0),T0=x.programs;x.environment=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?v.environment:null,x.fog=v.fog;let a0=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap;if(x.envMap=J0.get(B.envMap||x.environment,a0),x.envMapRotation=x.environment!==null&&B.envMap===null?v.environmentRotation:B.envMapRotation,T0===void 0)B.addEventListener("dispose",O9),T0=new Map,x.programs=T0;let JJ=T0.get(_0);if(JJ!==void 0){if(x.currentProgram===JJ&&x.lightsStateVersion===C0)return OK(B,M0),JJ}else{if(M0.uniforms=a.getUniforms(B),j!==null&&B.isNodeMaterial)j.build(B,d,M0);B.onBeforeCompile(M0,I),JJ=a.acquireProgram(M0,_0),T0.set(_0,JJ),x.uniforms=M0.uniforms}let P0=x.uniforms;if(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)P0.clippingPlanes=G0.uniform;if(OK(B,M0),x.needsLights=pU(B),x.lightsStateVersion=C0,x.needsLights)P0.ambientLightColor.value=g.state.ambient,P0.lightProbe.value=g.state.probe,P0.sunLights.value=g.state.sun,P0.sunLightShadows.value=g.state.sunShadow,P0.directionalLights.value=g.state.directional,P0.directionalLightShadows.value=g.state.directionalShadow,P0.spotLights.value=g.state.spot,P0.spotLightShadows.value=g.state.spotShadow,P0.rectAreaLights.value=g.state.rectArea,P0.ltc_1.value=g.state.rectAreaLTC1,P0.ltc_2.value=g.state.rectAreaLTC2,P0.pointLights.value=g.state.point,P0.pointLightShadows.value=g.state.pointShadow,P0.hemisphereLights.value=g.state.hemi,P0.sunShadowMatrix.value=g.state.sunShadowMatrix,P0.sunShadowCascade.value=g.state.sunShadowCascade,P0.directionalShadowMatrix.value=g.state.directionalShadowMatrix,P0.spotLightMatrix.value=g.state.spotLightMatrix,P0.spotLightMap.value=g.state.spotLightMap,P0.pointShadowMatrix.value=g.state.pointShadowMatrix;return x.lightProbeGrid=z.state.lightProbeGridArray.length>0,x.currentProgram=JJ,x.uniformsList=null,JJ}function DK(B){if(B.uniformsList===null){let v=B.currentProgram.getUniforms();B.uniformsList=F6.seqWithValue(v.seq,B.uniforms)}return B.uniformsList}function OK(B,v){let d=y.get(B);d.outputColorSpace=v.outputColorSpace,d.batching=v.batching,d.batchingColor=v.batchingColor,d.instancing=v.instancing,d.instancingColor=v.instancingColor,d.instancingMorph=v.instancingMorph,d.skinning=v.skinning,d.morphTargets=v.morphTargets,d.morphNormals=v.morphNormals,d.morphColors=v.morphColors,d.morphTargetsCount=v.morphTargetsCount,d.numClippingPlanes=v.numClippingPlanes,d.numIntersection=v.numClipIntersection,d.vertexAlphas=v.vertexAlphas,d.vertexTangents=v.vertexTangents,d.toneMapping=v.toneMapping}function bU(B,v){if(B.length===0)return null;if(B.length===1)return B[0].texture!==null?B[0]:null;A.setFromMatrixPosition(v.matrixWorld);for(let d=0,x=B.length;d<x;d++){let g=B[d];if(g.texture!==null&&g.boundingBox.containsPoint(A))return g}return null}function xU(B,v,d,x,g){if(v.isScene!==!0)v=b0;l.resetTextureUnits();let L0=v.fog,C0=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?v.environment:null,M0=m===null?I.outputColorSpace:m.isXRRenderTarget===!0?m.texture.colorSpace:QJ.workingColorSpace,_0=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,T0=J0.get(x.envMap||C0,_0),a0=x.vertexColors===!0&&!!d.attributes.color&&d.attributes.color.itemSize===4,JJ=!!d.attributes.tangent&&(!!x.normalMap||x.anisotropy>0),P0=!!d.morphAttributes.position,YJ=!!d.morphAttributes.normal,AJ=!!d.morphAttributes.color,MJ=q9;if(x.toneMapped){if(m===null||m.isXRRenderTarget===!0)MJ=I.toneMapping}let FJ=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,vJ=FJ!==void 0?FJ.length:0,z0=y.get(x),mJ=z.state.lights;if(W0===!0){if(H0===!0||B!==u){let RJ=B===u&&x.id===K0;G0.setState(x,B,RJ)}}let $J=!1;if(x.version===z0.__version){if(z0.needsLights&&z0.lightsStateVersion!==mJ.state.version)$J=!0;else if(z0.outputColorSpace!==M0)$J=!0;else if(g.isBatchedMesh&&z0.batching===!1)$J=!0;else if(!g.isBatchedMesh&&z0.batching===!0)$J=!0;else if(g.isBatchedMesh&&z0.batchingColor===!0&&g._colorsTexture===null)$J=!0;else if(g.isBatchedMesh&&z0.batchingColor===!1&&g._colorsTexture!==null)$J=!0;else if(g.isInstancedMesh&&z0.instancing===!1)$J=!0;else if(!g.isInstancedMesh&&z0.instancing===!0)$J=!0;else if(g.isSkinnedMesh&&z0.skinning===!1)$J=!0;else if(!g.isSkinnedMesh&&z0.skinning===!0)$J=!0;else if(g.isInstancedMesh&&z0.instancingColor===!0&&g.instanceColor===null)$J=!0;else if(g.isInstancedMesh&&z0.instancingColor===!1&&g.instanceColor!==null)$J=!0;else if(g.isInstancedMesh&&z0.instancingMorph===!0&&g.morphTexture===null)$J=!0;else if(g.isInstancedMesh&&z0.instancingMorph===!1&&g.morphTexture!==null)$J=!0;else if(z0.envMap!==T0)$J=!0;else if(x.fog===!0&&z0.fog!==L0)$J=!0;else if(z0.numClippingPlanes!==void 0&&(z0.numClippingPlanes!==G0.numPlanes||z0.numIntersection!==G0.numIntersection))$J=!0;else if(z0.vertexAlphas!==a0)$J=!0;else if(z0.vertexTangents!==JJ)$J=!0;else if(z0.morphTargets!==P0)$J=!0;else if(z0.morphNormals!==YJ)$J=!0;else if(z0.morphColors!==AJ)$J=!0;else if(z0.toneMapping!==MJ)$J=!0;else if(z0.morphTargetsCount!==vJ)$J=!0;else if(!!z0.lightProbeGrid!==z.state.lightProbeGridArray.length>0)$J=!0}else $J=!0,z0.__version=x.version;let W9=z0.currentProgram;if($J===!0){if(W9=O6(x,v,g),j&&x.isNodeMaterial)j.onUpdateProgram(x,W9,z0)}let R9=!1,d9=!1,h8=!1,EJ=W9.getUniforms(),BJ=z0.uniforms;if(C.useProgram(W9.program))R9=!0,d9=!0,h8=!0;if(x.id!==K0)K0=x.id,d9=!0;if(z0.needsLights){let RJ=bU(z.state.lightProbeGridArray,g);if(z0.lightProbeGrid!==RJ)z0.lightProbeGrid=RJ,d9=!0}if(R9||u!==B){if(C.buffers.depth.getReversed()&&B.reversedDepth!==!0)B._reversedDepth=!0,B.updateProjectionMatrix();EJ.setValue(T,"projectionMatrix",B.projectionMatrix),EJ.setValue(T,"viewMatrix",B.matrixWorldInverse);let c9=EJ.map.cameraPosition;if(c9!==void 0)c9.setValue(T,k0.setFromMatrixPosition(B.matrixWorld));if(e0.logarithmicDepthBuffer)EJ.setValue(T,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2));if(x.isMeshPhongMaterial||x.isMeshToonMaterial||x.isMeshLambertMaterial||x.isMeshBasicMaterial||x.isMeshStandardMaterial||x.isShaderMaterial)EJ.setValue(T,"isOrthographic",B.isOrthographicCamera===!0);if(u!==B)u=B,d9=!0,h8=!0}if(z0.needsLights){if(mJ.state.sunShadowMap.length>0)EJ.setValue(T,"sunShadowMap",mJ.state.sunShadowMap,l);if(mJ.state.directionalShadowMap.length>0)EJ.setValue(T,"directionalShadowMap",mJ.state.directionalShadowMap,l);if(mJ.state.spotShadowMap.length>0)EJ.setValue(T,"spotShadowMap",mJ.state.spotShadowMap,l);if(mJ.state.pointShadowMap.length>0)EJ.setValue(T,"pointShadowMap",mJ.state.pointShadowMap,l)}if(g.isSkinnedMesh){EJ.setOptional(T,g,"bindMatrix"),EJ.setOptional(T,g,"bindMatrixInverse");let RJ=g.skeleton;if(RJ){if(RJ.boneTexture===null)RJ.computeBoneTexture();EJ.setValue(T,"boneTexture",RJ.boneTexture,l)}}if(g.isBatchedMesh){if(EJ.setOptional(T,g,"batchingTexture"),EJ.setValue(T,"batchingTexture",g._matricesTexture,l),EJ.setOptional(T,g,"batchingIdTexture"),EJ.setValue(T,"batchingIdTexture",g._indirectTexture,l),EJ.setOptional(T,g,"batchingColorTexture"),g._colorsTexture!==null)EJ.setValue(T,"batchingColorTexture",g._colorsTexture,l)}let u9=d.morphAttributes;if(u9.position!==void 0||u9.normal!==void 0||u9.color!==void 0)KJ.update(g,d,W9);if(d9||z0.receiveShadow!==g.receiveShadow)z0.receiveShadow=g.receiveShadow,EJ.setValue(T,"receiveShadow",g.receiveShadow);if((x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial)&&x.envMap===null&&v.environment!==null)BJ.envMapIntensity.value=v.environmentIntensity;if(BJ.dfgLUT!==void 0)BJ.dfgLUT.value=m1();if(d9){if(EJ.setValue(T,"toneMappingExposure",I.toneMappingExposure),z0.needsLights)gU(BJ,h8);if(L0&&x.fog===!0)V0.refreshFogUniforms(BJ,L0);if(V0.refreshMaterialUniforms(BJ,x,Y0,n,z.state.transmissionRenderTarget[B.id]),z0.needsLights&&z0.lightProbeGrid){let RJ=z0.lightProbeGrid;BJ.probesSH.value=RJ.texture,BJ.probesMin.value.copy(RJ.boundingBox.min),BJ.probesMax.value.copy(RJ.boundingBox.max),BJ.probesResolution.value.copy(RJ.resolution)}F6.upload(T,DK(z0),BJ,l)}if(x.isShaderMaterial&&x.uniformsNeedUpdate===!0)F6.upload(T,DK(z0),BJ,l),x.uniformsNeedUpdate=!1;if(x.isSpriteMaterial)EJ.setValue(T,"center",g.center);if(EJ.setValue(T,"modelViewMatrix",g.modelViewMatrix),EJ.setValue(T,"normalMatrix",g.normalMatrix),EJ.setValue(T,"modelMatrix",g.matrixWorld),x.uniformsGroups!==void 0){let RJ=x.uniformsGroups;for(let c9=0,b8=RJ.length;c9<b8;c9++){let MK=RJ[c9];I0.update(MK,W9),I0.bind(MK,W9)}}return W9}function gU(B,v){B.ambientLightColor.needsUpdate=v,B.lightProbe.needsUpdate=v,B.sunLights.needsUpdate=v,B.sunLightShadows.needsUpdate=v,B.directionalLights.needsUpdate=v,B.directionalLightShadows.needsUpdate=v,B.pointLights.needsUpdate=v,B.pointLightShadows.needsUpdate=v,B.spotLights.needsUpdate=v,B.spotLightShadows.needsUpdate=v,B.rectAreaLights.needsUpdate=v,B.hemisphereLights.needsUpdate=v}function pU(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return o},this.getRenderTarget=function(){return m},this.setRenderTargetTextures=function(B,v,d){let x=y.get(B);if(x.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,x.__autoAllocateDepthBuffer===!1)x.__useRenderToTexture=!1;y.get(B.texture).__webglTexture=v,y.get(B.depthTexture).__webglTexture=x.__autoAllocateDepthBuffer?void 0:d,x.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,v){let d=y.get(B);d.__webglFramebuffer=v,d.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(B,v=0,d=0){m=B,p=v,o=d;let x=null,g=!1,L0=!1;if(B){let M0=y.get(B);if(M0.__useDefaultFramebuffer!==void 0){C.bindFramebuffer(T.FRAMEBUFFER,M0.__webglFramebuffer),r.copy(B.viewport),$0.copy(B.scissor),v0=B.scissorTest,C.viewport(r),C.scissor($0),C.setScissorTest(v0),K0=-1;return}else if(M0.__webglFramebuffer===void 0)l.setupRenderTarget(B);else if(M0.__hasExternalTextures)l.rebindTextures(B,y.get(B.texture).__webglTexture,y.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let a0=B.depthTexture;if(M0.__boundDepthTexture!==a0){if(a0!==null&&y.has(a0)&&(B.width!==a0.image.width||B.height!==a0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");l.setupDepthRenderbuffer(B)}}let _0=B.texture;if(_0.isData3DTexture||_0.isDataArrayTexture||_0.isCompressedArrayTexture)L0=!0;let T0=y.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget){if(Array.isArray(T0[v]))x=T0[v][d];else x=T0[v];g=!0}else if(B.samples>0&&l.useMultisampledRTT(B)===!1)x=y.get(B).__webglMultisampledFramebuffer;else if(Array.isArray(T0))x=T0[d];else x=T0;r.copy(B.viewport),$0.copy(B.scissor),v0=B.scissorTest}else r.copy(g0).multiplyScalar(Y0).floor(),$0.copy(w0).multiplyScalar(Y0).floor(),v0=UJ;if(d!==0)x=h;if(C.bindFramebuffer(T.FRAMEBUFFER,x))C.drawBuffers(B,x);if(C.viewport(r),C.scissor($0),C.setScissorTest(v0),g){let M0=y.get(B.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+v,M0.__webglTexture,d)}else if(L0){let M0=v;for(let _0=0;_0<B.textures.length;_0++){let T0=y.get(B.textures[_0]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+_0,T0.__webglTexture,d,M0)}}else if(B!==null&&d!==0){let M0=y.get(B.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,M0.__webglTexture,d)}K0=-1};function RK(B){let v=y.get(B);if(v.__readFormat!==B.format||v.__readType!==B.type)v.__readFormat=B.format,v.__readType=B.type,v.__formatReadable=e0.textureFormatReadable(B.format),v.__typeReadable=e0.textureTypeReadable(B.type);return v}if(this.readRenderTargetPixels=function(B,v,d,x,g,L0,C0,M0=0){if(!(B&&B.isWebGLRenderTarget)){S0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _0=y.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&C0!==void 0)_0=_0[C0];if(_0){C.bindFramebuffer(T.FRAMEBUFFER,_0);try{let T0=B.textures[M0],a0=T0.format,JJ=T0.type;if(B.textures.length>1)T.readBuffer(T.COLOR_ATTACHMENT0+M0);let P0=RK(T0);if(P0.__formatReadable===!1){S0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(P0.__typeReadable===!1){S0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(v>=0&&v<=B.width-x&&(d>=0&&d<=B.height-g))T.readPixels(v,d,x,g,s.convert(a0),s.convert(JJ),L0)}finally{let T0=m!==null?y.get(m).__webglFramebuffer:null;C.bindFramebuffer(T.FRAMEBUFFER,T0)}}},this.readRenderTargetPixelsAsync=async function(B,v,d,x,g,L0,C0,M0=0){if(!(B&&B.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _0=y.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&C0!==void 0)_0=_0[C0];if(_0)if(v>=0&&v<=B.width-x&&(d>=0&&d<=B.height-g)){C.bindFramebuffer(T.FRAMEBUFFER,_0);let T0=B.textures[M0],a0=T0.format,JJ=T0.type;if(B.textures.length>1)T.readBuffer(T.COLOR_ATTACHMENT0+M0);let P0=RK(T0);if(P0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(P0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let YJ=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,YJ),T.bufferData(T.PIXEL_PACK_BUFFER,L0.byteLength,T.STREAM_READ),T.readPixels(v,d,x,g,s.convert(a0),s.convert(JJ),0),T.bindBuffer(T.PIXEL_PACK_BUFFER,null);let AJ=m!==null?y.get(m).__webglFramebuffer:null;C.bindFramebuffer(T.FRAMEBUFFER,AJ);let MJ=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await SY(T,MJ,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,YJ),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,L0),T.bindBuffer(T.PIXEL_PACK_BUFFER,null),T.deleteBuffer(YJ),T.deleteSync(MJ),L0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,v=null,d=0){let x=Math.pow(2,-d),g=Math.floor(B.image.width*x),L0=Math.floor(B.image.height*x),C0=v!==null?v.x:0,M0=v!==null?v.y:0;l.setTexture2D(B,0),T.copyTexSubImage2D(T.TEXTURE_2D,d,0,0,C0,M0,g,L0),C.unbindTexture()},this.copyTextureToTexture=function(B,v,d=null,x=null,g=0,L0=0){let C0,M0,_0,T0,a0,JJ,P0,YJ,AJ,MJ=B.isCompressedTexture?B.mipmaps[L0]:B.image;if(d!==null)C0=d.max.x-d.min.x,M0=d.max.y-d.min.y,_0=d.isBox3?d.max.z-d.min.z:1,T0=d.min.x,a0=d.min.y,JJ=d.isBox3?d.min.z:0;else{let BJ=Math.pow(2,-g);if(C0=Math.floor(MJ.width*BJ),M0=Math.floor(MJ.height*BJ),B.isDataArrayTexture)_0=MJ.depth;else if(B.isData3DTexture)_0=Math.floor(MJ.depth*BJ);else _0=1;T0=0,a0=0,JJ=0}if(x!==null)P0=x.x,YJ=x.y,AJ=x.z;else P0=0,YJ=0,AJ=0;let FJ=s.convert(v.format),vJ=s.convert(v.type),z0;if(v.isData3DTexture)l.setTexture3D(v,0),z0=T.TEXTURE_3D;else if(v.isDataArrayTexture||v.isCompressedArrayTexture)l.setTexture2DArray(v,0),z0=T.TEXTURE_2D_ARRAY;else l.setTexture2D(v,0),z0=T.TEXTURE_2D;C.activeTexture(T.TEXTURE0),C.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,v.flipY),C.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),C.pixelStorei(T.UNPACK_ALIGNMENT,v.unpackAlignment);let mJ=C.getParameter(T.UNPACK_ROW_LENGTH),$J=C.getParameter(T.UNPACK_IMAGE_HEIGHT),W9=C.getParameter(T.UNPACK_SKIP_PIXELS),R9=C.getParameter(T.UNPACK_SKIP_ROWS),d9=C.getParameter(T.UNPACK_SKIP_IMAGES);C.pixelStorei(T.UNPACK_ROW_LENGTH,MJ.width),C.pixelStorei(T.UNPACK_IMAGE_HEIGHT,MJ.height),C.pixelStorei(T.UNPACK_SKIP_PIXELS,T0),C.pixelStorei(T.UNPACK_SKIP_ROWS,a0),C.pixelStorei(T.UNPACK_SKIP_IMAGES,JJ);let h8=B.isDataArrayTexture||B.isData3DTexture,EJ=v.isDataArrayTexture||v.isData3DTexture;if(B.isDepthTexture){let BJ=y.get(B),u9=y.get(v),RJ=y.get(BJ.__renderTarget),c9=y.get(u9.__renderTarget);C.bindFramebuffer(T.READ_FRAMEBUFFER,RJ.__webglFramebuffer),C.bindFramebuffer(T.DRAW_FRAMEBUFFER,c9.__webglFramebuffer);for(let b8=0;b8<_0;b8++){if(h8)T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,y.get(B).__webglTexture,g,JJ+b8),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,y.get(v).__webglTexture,L0,AJ+b8);T.blitFramebuffer(T0,a0,C0,M0,P0,YJ,C0,M0,T.DEPTH_BUFFER_BIT,T.NEAREST)}C.bindFramebuffer(T.READ_FRAMEBUFFER,null),C.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(g!==0||B.isRenderTargetTexture||y.has(B)){let BJ=y.get(B),u9=y.get(v);C.bindFramebuffer(T.READ_FRAMEBUFFER,i),C.bindFramebuffer(T.DRAW_FRAMEBUFFER,S);for(let RJ=0;RJ<_0;RJ++){if(h8)T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,BJ.__webglTexture,g,JJ+RJ);else T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,BJ.__webglTexture,g);if(EJ)T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,u9.__webglTexture,L0,AJ+RJ);else T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,u9.__webglTexture,L0);if(g!==0)T.blitFramebuffer(T0,a0,C0,M0,P0,YJ,C0,M0,T.COLOR_BUFFER_BIT,T.NEAREST);else if(EJ)T.copyTexSubImage3D(z0,L0,P0,YJ,AJ+RJ,T0,a0,C0,M0);else T.copyTexSubImage2D(z0,L0,P0,YJ,T0,a0,C0,M0)}C.bindFramebuffer(T.READ_FRAMEBUFFER,null),C.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(EJ)if(B.isDataTexture||B.isData3DTexture)T.texSubImage3D(z0,L0,P0,YJ,AJ,C0,M0,_0,FJ,vJ,MJ.data);else if(v.isCompressedArrayTexture)T.compressedTexSubImage3D(z0,L0,P0,YJ,AJ,C0,M0,_0,FJ,MJ.data);else T.texSubImage3D(z0,L0,P0,YJ,AJ,C0,M0,_0,FJ,vJ,MJ);else if(B.isDataTexture)T.texSubImage2D(T.TEXTURE_2D,L0,P0,YJ,C0,M0,FJ,vJ,MJ.data);else if(B.isCompressedTexture)T.compressedTexSubImage2D(T.TEXTURE_2D,L0,P0,YJ,MJ.width,MJ.height,FJ,MJ.data);else T.texSubImage2D(T.TEXTURE_2D,L0,P0,YJ,C0,M0,FJ,vJ,MJ);if(C.pixelStorei(T.UNPACK_ROW_LENGTH,mJ),C.pixelStorei(T.UNPACK_IMAGE_HEIGHT,$J),C.pixelStorei(T.UNPACK_SKIP_PIXELS,W9),C.pixelStorei(T.UNPACK_SKIP_ROWS,R9),C.pixelStorei(T.UNPACK_SKIP_IMAGES,d9),L0===0&&v.generateMipmaps)T.generateMipmap(z0);C.unbindTexture()},this.initRenderTarget=function(B){if(y.get(B).__webglFramebuffer===void 0)l.setupRenderTarget(B)},this.initTexture=function(B){if(B.isCubeTexture)l.setTextureCube(B,0);else if(B.isData3DTexture)l.setTexture3D(B,0);else if(B.isDataArrayTexture||B.isCompressedArrayTexture)l.setTexture2DArray(B,0);else l.setTexture2D(B,0);C.unbindTexture()},this.resetState=function(){p=0,o=0,m=null,C.reset(),F0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return eW}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=QJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=QJ._getUnpackColorSpace()}}export{b9 as warnOnce,N0 as warn,$N as setConsoleFunction,m7 as log,WN as getConsoleFunction,S0 as error,PY as createCanvasElement,BG as ZeroStencilOp,XG as ZeroSlopeEnding,gH as ZeroFactor,YG as ZeroCurvatureEnding,UG as WrapAroundEnding,kZ as WireframeGeometry,e7 as WebXRController,iG as WebGPUCoordinateSystem,v1 as WebGLUtils,l1 as WebGLRenderer,uJ as WebGLRenderTarget,XK as WebGLCubeRenderTarget,eW as WebGLCoordinateSystem,vY as WebGLArrayRenderTarget,fY as WebGL3DRenderTarget,GZ as VideoTexture,nY as VideoFrameTexture,$$ as VectorKeyframeTrack,GJ as Vector4,P as Vector3,e as Vector2,N7 as VSMShadowMap,o7 as UnsignedShortType,DW as UnsignedShort5551Type,FW as UnsignedShort4444Type,Q8 as UnsignedIntType,DY as UnsignedInt5999Type,D7 as UnsignedInt248Type,OY as UnsignedInt101111Type,F9 as UnsignedByteType,WX as UniformsUtils,O0 as UniformsLib,PX as UniformsGroup,aZ as Uniform,pY as Uint8ClampedBufferAttribute,gY as Uint8BufferAttribute,CQ as Uint32BufferAttribute,AQ as Uint16BufferAttribute,iU as UVMapping,oQ as TubeGeometry,EG as TrianglesDrawMode,qG as TriangleStripDrawMode,FG as TriangleFanDrawMode,iJ as Triangle,iQ as TorusKnotGeometry,sQ as TorusGeometry,oG as TimestampQuery,uZ as Timer,eX as TextureUtils,L9 as TextureSource,FX as TextureLoader,LJ as Texture,nQ as TetrahedronGeometry,oW as TangentSpaceNormalMap,lU as TOUCH,WW as SubtractiveBlending,fH as SubtractEquation,Z8 as StringKeyframeTrack,dG as StreamReadUsage,pG as StreamDrawUsage,nG as StreamCopyUsage,VX as StereoCamera,mG as StaticReadUsage,xG as StaticDrawUsage,uG as StaticCopyUsage,mH as SrcColorFactor,oH as SrcAlphaSaturateFactor,dH as SrcAlphaFactor,wQ as SpriteMaterial,WZ as Sprite,bX as SpotLightHelper,vZ as SpotLight,pQ as SplineCurve,Z$ as SphericalHarmonics3,vX as Spherical,H6 as SphereGeometry,SJ as Sphere,yY as Source,KZ as SkinnedMesh,xX as SkeletonHelper,PQ as Skeleton,FY as ShortType,N9 as ShapeUtils,rX as ShapePath,cQ as ShapeGeometry,R7 as Shape,LZ as ShadowMaterial,Q9 as ShaderMaterial,_9 as ShaderLib,r0 as ShaderChunk,$Z as Scene,DJ as SRGBTransfer,VY as SRGBColorSpace,_W as SIGNED_RG11_EAC_Format,sW as SIGNED_RED_RGTC1_Format,iW as SIGNED_RED_GREEN_RGTC2_Format,wW as SIGNED_R11_EAC_Format,uQ as RingGeometry,hH as ReverseSubtractEquation,zG as ReplaceStencilOp,GY as RepeatWrapping,_X as RenderTarget3D,BQ as RenderTarget,eG as RenderObjectRefreshType,YW as ReinhardToneMapping,OW as RedIntegerFormat,kY as RedFormat,xZ as RectAreaLight,jX as Raycaster,T8 as Ray,aQ as RawShaderMaterial,RW as RGIntegerFormat,_8 as RGFormat,MG as RGDepthPacking,FQ as RGB_S3TC_DXT1_Format,kW as RGB_PVRTC_4BPPV1_Format,LW as RGB_PVRTC_2BPPV1_Format,zW as RGB_ETC2_Format,IW as RGB_ETC1_Format,cW as RGB_BPTC_UNSIGNED_Format,uW as RGB_BPTC_SIGNED_Format,eU as RGBIntegerFormat,MY as RGBFormat,RG as RGBDepthPacking,RQ as RGBA_S3TC_DXT5_Format,OQ as RGBA_S3TC_DXT3_Format,DQ as RGBA_S3TC_DXT1_Format,VW as RGBA_PVRTC_4BPPV1_Format,BW as RGBA_PVRTC_2BPPV1_Format,AW as RGBA_ETC2_EAC_Format,dW as RGBA_BPTC_Format,hW as RGBA_ASTC_8x8_Format,fW as RGBA_ASTC_8x6_Format,vW as RGBA_ASTC_8x5_Format,yW as RGBA_ASTC_6x6_Format,jW as RGBA_ASTC_6x5_Format,SW as RGBA_ASTC_5x5_Format,TW as RGBA_ASTC_5x4_Format,PW as RGBA_ASTC_4x4_Format,lW as RGBA_ASTC_12x12_Format,mW as RGBA_ASTC_12x10_Format,gW as RGBA_ASTC_10x8_Format,xW as RGBA_ASTC_10x6_Format,bW as RGBA_ASTC_10x5_Format,pW as RGBA_ASTC_10x10_Format,MW as RGBAIntegerFormat,C9 as RGBAFormat,OG as RGBADepthPacking,MQ as RG11_EAC_Format,TH as REVISION,nW as RED_RGTC1_Format,kQ as RED_GREEN_RGTC2_Format,CW as R11_EAC_Format,jZ as QuaternionLinearInterpolant,X6 as QuaternionKeyframeTrack,xJ as Quaternion,gQ as QuadraticBezierCurve3,xQ as QuadraticBezierCurve,nZ as PropertyMixer,WJ as PropertyBinding,IX as PositionalAudio,$8 as PolyhedronGeometry,dX as PolarGridHelper,SQ as PointsMaterial,UZ as Points,pX as PointLightHelper,fZ as PointLight,iX as PlaneHelper,M7 as PlaneGeometry,k9 as Plane,TJ as PerspectiveCamera,Y7 as Path,KK as PMREMGenerator,yH as PCFSoftShadowMap,c7 as PCFShadowMap,k7 as OrthographicCamera,lH as OneMinusSrcColorFactor,uH as OneMinusSrcAlphaFactor,iH as OneMinusDstColorFactor,nH as OneMinusDstAlphaFactor,rH as OneMinusConstantColorFactor,eH as OneMinusConstantAlphaFactor,pH as OneFactor,K6 as OctahedronGeometry,LY as ObjectSpaceNormalMap,MX as ObjectLoader,ZJ as Object3D,Y6 as NumberKeyframeTrack,fG as NotEqualStencilFunc,HY as NotEqualDepth,CY as NotEqualCompare,LG as NormalRGPacking,VG as NormalGAPacking,n7 as NormalBlending,GG as NormalAnimationBlendMode,q9 as NoToneMapping,kG as NoNormalPacking,P8 as NoColorSpace,z9 as NoBlending,TG as NeverStencilFunc,JY as NeverDepth,BY as NeverCompare,EW as NeutralToneMapping,EY as NearestMipmapNearestFilter,i7 as NearestMipmapLinearFilter,oU as NearestMipMapNearestFilter,aU as NearestMipMapLinearFilter,J8 as NearestFilter,YY as MultiplyOperation,ZW as MultiplyBlending,XY as MixOperation,NY as MirroredRepeatWrapping,bH as MinEquation,zZ as MeshToonMaterial,rQ as MeshStandardMaterial,BZ as MeshPhysicalMaterial,IZ as MeshPhongMaterial,AZ as MeshNormalMaterial,wZ as MeshMatcapMaterial,CZ as MeshLambertMaterial,eQ as MeshDistanceMaterial,tQ as MeshDepthMaterial,m9 as MeshBasicMaterial,zJ as Mesh,xH as MaxEquation,l0 as Matrix4,d0 as Matrix3,rZ as Matrix2,LN as MathUtils,K$ as MaterialLoader,cU as MaterialBlending,jJ as Material,mU as MOUSE,QG as LoopRepeat,$G as LoopPingPong,JG as LoopOnce,W$ as LoadingManager,UQ as LoaderUtils,cJ as Loader,rW as LinearTransfer,HW as LinearToneMapping,aW as LinearSRGBColorSpace,qQ as LinearMipmapNearestFilter,A8 as LinearMipmapLinearFilter,rU as LinearMipMapNearestFilter,tU as LinearMipMapLinearFilter,J$ as LinearInterpolant,aJ as LinearFilter,D9 as LineSegments,XZ as LineLoop,_Z as LineDashedMaterial,RZ as LineCurve3,bQ as LineCurve,gJ as LineBasicMaterial,hX as Line3,g9 as Line,U6 as LightShadow,gZ as LightProbe,l9 as Light,SG as LessStencilFunc,yG as LessEqualStencilFunc,KW as LessEqualDepth,LQ as LessEqualCompare,$Y as LessDepth,IY as LessCompare,t7 as Layers,dQ as LatheGeometry,ZZ as LOD,$9 as KeyframeTrack,IG as KeepStencilOp,PG as InvertStencilOp,aG as InterpolationSamplingType,rG as InterpolationSamplingMode,KG as InterpolateSmooth,ZG as InterpolateLinear,WG as InterpolateDiscrete,HG as InterpolateBezier,v8 as Interpolant,V8 as InterleavedBufferAttribute,J6 as InterleavedBuffer,qW as IntType,xY as Int8BufferAttribute,lY as Int32BufferAttribute,mY as Int16BufferAttribute,HZ as InstancedMesh,TX as InstancedInterleavedBuffer,pZ as InstancedBufferGeometry,B8 as InstancedBufferAttribute,wG as IncrementWrapStencilOp,AG as IncrementStencilOp,QZ as ImageUtils,G7 as ImageLoader,kX as ImageBitmapLoader,lQ as IcosahedronGeometry,mX as HemisphereLightHelper,yZ as HemisphereLight,A9 as HalfFloatType,rY as HTMLTexture,M8 as Group,lX as GridHelper,vG as GreaterStencilFunc,hG as GreaterEqualStencilFunc,ZY as GreaterEqualDepth,VQ as GreaterEqualCompare,KY as GreaterDepth,AY as GreaterCompare,tW as GLSL3,sG as GLSL1,SX as GLBufferAttribute,TQ as FrustumArray,e9 as Frustum,E7 as FrontSide,sY as FramebufferTexture,IQ as FogExp2,zQ as Fog,p9 as FloatType,A0 as Float32BufferAttribute,dY as Float16BufferAttribute,B9 as FileLoader,mQ as ExtrudeGeometry,jQ as ExternalTexture,K9 as EventDispatcher,E9 as Euler,NQ as EquirectangularRefractionMapping,GQ as EquirectangularReflectionMapping,jG as EqualStencilFunc,WY as EqualDepth,zY as EqualCompare,Z6 as EllipseCurve,EZ as EdgesGeometry,lG as DynamicReadUsage,gG as DynamicDrawUsage,cG as DynamicCopyUsage,sH as DstColorFactor,cH as DstAlphaFactor,I9 as DoubleSide,fQ as DodecahedronGeometry,TZ as DiscreteInterpolant,uX as DirectionalLightHelper,hZ as DirectionalLight,sU as DetachedBindMode,S8 as DepthTexture,w8 as DepthStencilFormat,C8 as DepthFormat,XX as DefaultLoadingManager,_G as DecrementWrapStencilOp,CG as DecrementStencilOp,bY as DataUtils,qX as DataTextureLoader,J9 as DataTexture,a7 as DataArrayTexture,r7 as Data3DTexture,fX as Cylindrical,$6 as CylinderGeometry,GW as CustomToneMapping,vH as CustomBlending,MZ as CurvePath,H9 as Curve,SH as CullFaceNone,dU as CullFaceFrontBack,jH as CullFaceFront,QW as CullFaceBack,PZ as CubicInterpolant,OZ as CubicBezierCurve3,hQ as CubicBezierCurve,s7 as CubeUVReflectionMapping,EX as CubeTextureLoader,O7 as CubeTexture,z8 as CubeRefractionMapping,F7 as CubeReflectionMapping,NZ as CubeDepthTexture,lZ as CubeCamera,tX as Controls,aH as ConstantColorFactor,tH as ConstantAlphaFactor,W6 as ConeGeometry,NX as CompressedTextureLoader,Q6 as CompressedTexture,oY as CompressedCubeTexture,iY as CompressedArrayTexture,tG as Compatibility,QJ as ColorManagement,Q$ as ColorKeyframeTrack,B0 as Color,yX as Clock,EQ as ClampToEdgeWrapping,vQ as CircleGeometry,XW as CineonToneMapping,DZ as CatmullRomCurve3,yQ as CapsuleGeometry,aY as CanvasTexture,cX as CameraHelper,G6 as Camera,V9 as Cache,qY as ByteType,mZ as BufferGeometryLoader,c0 as BufferGeometry,qJ as BufferAttribute,nX as BoxHelper,j8 as BoxGeometry,sX as Box3Helper,yJ as Box3,tZ as Box2,W8 as BooleanKeyframeTrack,_Q as Bone,SZ as BezierInterpolant,YZ as BatchedMesh,uU as BasicShadowMap,DG as BasicDepthPacking,oJ as BackSide,aX as AxesHelper,LX as AudioLoader,BX as AudioListener,H$ as AudioContext,zX as AudioAnalyser,cZ as Audio,nU as AttachedBindMode,oX as ArrowHelper,dZ as ArrayCamera,qZ as ArcCurve,HX as AnimationUtils,CX as AnimationObjectGroup,wX as AnimationMixer,GX as AnimationLoader,U7 as AnimationClip,oZ as AnimationAction,bZ as AmbientLight,bG as AlwaysStencilFunc,QY as AlwaysDepth,wY as AlwaysCompare,RY as AlphaFormat,NW as AgXToneMapping,$W as AdditiveBlending,NG as AdditiveAnimationBlendMode,UY as AddOperation,q7 as AddEquation,UW as ACESFilmicToneMapping};
