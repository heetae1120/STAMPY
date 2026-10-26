var Q1=Object.create;var D_=Object.defineProperty;var j1=Object.getOwnPropertyDescriptor;var $1=Object.getOwnPropertyNames;var tE=Object.getPrototypeOf,eE=Object.prototype.hasOwnProperty;var Xi=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var nE=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of $1(t))!eE.call(e,s)&&s!==n&&D_(e,s,{get:()=>t[s],enumerable:!(i=j1(t,s))||i.enumerable});return e};var ps=(e,t,n)=>(n=e!=null?Q1(tE(e)):{},nE(t||!e||!e.__esModule?D_(n,"default",{value:e,enumerable:!0}):n,e));var X_=Xi(Pt=>{"use strict";var Gd=Symbol.for("react.transitional.element"),iE=Symbol.for("react.portal"),sE=Symbol.for("react.fragment"),aE=Symbol.for("react.strict_mode"),rE=Symbol.for("react.profiler"),oE=Symbol.for("react.consumer"),lE=Symbol.for("react.context"),cE=Symbol.for("react.forward_ref"),uE=Symbol.for("react.suspense"),hE=Symbol.for("react.memo"),P_=Symbol.for("react.lazy"),fE=Symbol.for("react.activity"),dE=Symbol.for("react.view_transition"),U_=Symbol.iterator;function pE(e){return e===null||typeof e!="object"?null:(e=U_&&e[U_]||e["@@iterator"],typeof e=="function"?e:null)}var B_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z_=Object.assign,F_={};function Tr(e,t,n){this.props=e,this.context=t,this.refs=F_,this.updater=n||B_}Tr.prototype.isReactComponent={};Tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function H_(){}H_.prototype=Tr.prototype;function kd(e,t,n){this.props=e,this.context=t,this.refs=F_,this.updater=n||B_}var Xd=kd.prototype=new H_;Xd.constructor=kd;z_(Xd,Tr.prototype);Xd.isPureReactComponent=!0;var L_=Array.isArray;function Vd(){}var Te={H:null,A:null,T:null,S:null},V_=Object.prototype.hasOwnProperty;function Wd(e,t,n){var i=n.ref;return{$$typeof:Gd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function mE(e,t){return Wd(e.type,t,e.props)}function qd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gd}function gE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var O_=/\/+/g;function Hd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gE(""+e.key):t.toString(36)}function _E(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Vd,Vd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Er(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Gd:case iE:r=!0;break;case P_:return r=e._init,Er(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Hd(e,0):i,L_(s)?(n="",r!=null&&(n=r.replace(O_,"$&/")+"/"),Er(s,t,n,"",function(c){return c})):s!=null&&(qd(s)&&(s=mE(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(O_,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(L_(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Hd(i,l),r+=Er(i,t,n,a,s);else if(l=pE(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Hd(i,l++),r+=Er(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Er(_E(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function qc(e,t,n){if(e==null)return e;var i=[],s=0;return Er(e,i,"","",function(a){return t.call(n,a,s++)}),i}function vE(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var I_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function G_(e){var t=Te.T,n={};n.types=t!==null?t.types:null,Te.T=n;try{var i=e(),s=Te.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Vd,I_)}catch(a){I_(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Te.T=t}}function k_(e){var t=Te.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else G_(k_.bind(null,e))}var yE={map:qc,forEach:function(e,t,n){qc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qc(e,function(){t++}),t},toArray:function(e){return qc(e,function(t){return t})||[]},only:function(e){if(!qd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Pt.Activity=fE;Pt.Children=yE;Pt.Component=Tr;Pt.Fragment=sE;Pt.Profiler=rE;Pt.PureComponent=kd;Pt.StrictMode=aE;Pt.Suspense=uE;Pt.ViewTransition=dE;Pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Te;Pt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Te.H.useMemoCache(e)}};Pt.addTransitionType=k_;Pt.cache=function(e){return function(){return e.apply(null,arguments)}};Pt.cacheSignal=function(){return null};Pt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=z_({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!V_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Wd(e.type,s,i)};Pt.createContext=function(e){return e={$$typeof:lE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:oE,_context:e},e};Pt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)V_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Wd(e,a,s)};Pt.createRef=function(){return{current:null}};Pt.forwardRef=function(e){return{$$typeof:cE,render:e}};Pt.isValidElement=qd;Pt.lazy=function(e){return{$$typeof:P_,_payload:{_status:-1,_result:e},_init:vE}};Pt.memo=function(e,t){return{$$typeof:hE,type:e,compare:t===void 0?null:t}};Pt.startTransition=G_;Pt.unstable_useCacheRefresh=function(){return Te.H.useCacheRefresh()};Pt.use=function(e){return Te.H.use(e)};Pt.useActionState=function(e,t,n){return Te.H.useActionState(e,t,n)};Pt.useCallback=function(e,t){return Te.H.useCallback(e,t)};Pt.useContext=function(e){return Te.H.useContext(e)};Pt.useDebugValue=function(){};Pt.useDeferredValue=function(e,t){return Te.H.useDeferredValue(e,t)};Pt.useEffect=function(e,t){return Te.H.useEffect(e,t)};Pt.useEffectEvent=function(e){return Te.H.useEffectEvent(e)};Pt.useId=function(){return Te.H.useId()};Pt.useImperativeHandle=function(e,t,n){return Te.H.useImperativeHandle(e,t,n)};Pt.useInsertionEffect=function(e,t){return Te.H.useInsertionEffect(e,t)};Pt.useLayoutEffect=function(e,t){return Te.H.useLayoutEffect(e,t)};Pt.useMemo=function(e,t){return Te.H.useMemo(e,t)};Pt.useOptimistic=function(e,t){return Te.H.useOptimistic(e,t)};Pt.useReducer=function(e,t,n){return Te.H.useReducer(e,t,n)};Pt.useRef=function(e){return Te.H.useRef(e)};Pt.useState=function(e){return Te.H.useState(e)};Pt.useSyncExternalStore=function(e,t,n){return Te.H.useSyncExternalStore(e,t,n)};Pt.useTransition=function(){return Te.H.useTransition()};Pt.version="19.3.1"});var Ar=Xi((bD,W_)=>{"use strict";W_.exports=X_()});var ev=Xi(Ue=>{"use strict";function Kd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Yc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Wi(e){return e.length===0?null:e[0]}function Jc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Yc(o,n))l<s&&0>Yc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Yc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Yc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ue.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(q_=performance,Ue.unstable_now=function(){return q_.now()}):(Yd=Date,Y_=Yd.now(),Ue.unstable_now=function(){return Yd.now()-Y_});var q_,Yd,Y_,ms=[],Xs=[],xE=1,li=null,mn=3,Qd=!1,el=!1,nl=!1,jd=!1,K_=typeof setTimeout=="function"?setTimeout:null,Q_=typeof clearTimeout=="function"?clearTimeout:null,Z_=typeof setImmediate<"u"?setImmediate:null;function Zc(e){for(var t=Wi(Xs);t!==null;){if(t.callback===null)Jc(Xs);else if(t.startTime<=e)Jc(Xs),t.sortIndex=t.expirationTime,Kd(ms,t);else break;t=Wi(Xs)}}function $d(e){if(nl=!1,Zc(e),!el)if(Wi(ms)!==null)el=!0,Cr||(Cr=!0,wr());else{var t=Wi(Xs);t!==null&&tp($d,t.startTime-e)}}var Cr=!1,il=-1,j_=5,$_=-1;function tv(){return jd?!0:!(Ue.unstable_now()-$_<j_)}function Zd(){if(jd=!1,Cr){var e=Ue.unstable_now();$_=e;var t=!0;try{t:{el=!1,nl&&(nl=!1,Q_(il),il=-1),Qd=!0;var n=mn;try{e:{for(Zc(e),li=Wi(ms);li!==null&&!(li.expirationTime>e&&tv());){var i=li.callback;if(typeof i=="function"){li.callback=null,mn=li.priorityLevel;var s=i(li.expirationTime<=e);if(e=Ue.unstable_now(),typeof s=="function"){li.callback=s,Zc(e),t=!0;break e}li===Wi(ms)&&Jc(ms),Zc(e)}else Jc(ms);li=Wi(ms)}if(li!==null)t=!0;else{var a=Wi(Xs);a!==null&&tp($d,a.startTime-e),t=!1}}break t}finally{li=null,mn=n,Qd=!1}t=void 0}}finally{t?wr():Cr=!1}}}var wr;typeof Z_=="function"?wr=function(){Z_(Zd)}:typeof MessageChannel<"u"?(Jd=new MessageChannel,J_=Jd.port2,Jd.port1.onmessage=Zd,wr=function(){J_.postMessage(null)}):wr=function(){K_(Zd,0)};var Jd,J_;function tp(e,t){il=K_(function(){e(Ue.unstable_now())},t)}Ue.unstable_IdlePriority=5;Ue.unstable_ImmediatePriority=1;Ue.unstable_LowPriority=4;Ue.unstable_NormalPriority=3;Ue.unstable_Profiling=null;Ue.unstable_UserBlockingPriority=2;Ue.unstable_cancelCallback=function(e){e.callback=null};Ue.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j_=0<e?Math.floor(1e3/e):5};Ue.unstable_getCurrentPriorityLevel=function(){return mn};Ue.unstable_next=function(e){switch(mn){case 1:case 2:case 3:var t=3;break;default:t=mn}var n=mn;mn=t;try{return e()}finally{mn=n}};Ue.unstable_requestPaint=function(){jd=!0};Ue.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=mn;mn=e;try{return t()}finally{mn=n}};Ue.unstable_scheduleCallback=function(e,t,n){var i=Ue.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:xE++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Kd(Xs,e),Wi(ms)===null&&e===Wi(Xs)&&(nl?(Q_(il),il=-1):nl=!0,tp($d,n-i))):(e.sortIndex=s,Kd(ms,e),el||Qd||(el=!0,Cr||(Cr=!0,wr()))),e};Ue.unstable_shouldYield=tv;Ue.unstable_wrapCallback=function(e){var t=mn;return function(){var n=mn;mn=t;try{return e.apply(this,arguments)}finally{mn=n}}}});var iv=Xi((TD,nv)=>{"use strict";nv.exports=ev()});var rv=Xi(gn=>{"use strict";var SE=Ar();function av(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ws(){}var bn={d:{f:Ws,r:function(){throw Error(av(522))},D:Ws,C:Ws,L:Ws,m:Ws,X:Ws,S:Ws,M:Ws},p:0,findDOMNode:null},ME=Symbol.for("react.portal"),bE=Symbol.for("react.recoverable"),sv=Symbol.for("react.optimistic_key");function EE(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ME,key:i==null?null:i===sv?sv:""+i,children:e,containerInfo:t,implementation:n}}var sl=SE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Kc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=bn;gn.browser=function(e){return{$$typeof:bE,_reason:e}};gn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(av(299));return EE(e,t,null,n)};gn.flushSync=function(e){var t=sl.T,n=bn.p;try{if(sl.T=null,bn.p=2,e)return e()}finally{sl.T=t,bn.p=n,bn.d.f()}};gn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,bn.d.C(e,t))};gn.prefetchDNS=function(e){typeof e=="string"&&bn.d.D(e)};gn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Kc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?bn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&bn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};gn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Kc(t.as,t.crossOrigin);bn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&bn.d.M(e)};gn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Kc(n,t.crossOrigin);bn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};gn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Kc(t.as,t.crossOrigin);bn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else bn.d.m(e)};gn.requestFormReset=function(e){bn.d.r(e)};gn.unstable_batchedUpdates=function(e,t){return e(t)};gn.useFormState=function(e,t,n){return sl.H.useFormState(e,t,n)};gn.useFormStatus=function(){return sl.H.useHostTransitionStatus()};gn.version="19.3.1"});var ep=Xi((wD,lv)=>{"use strict";function ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ov)}catch(e){console.error(e)}}ov(),lv.exports=rv()});var ZM=Xi(Dh=>{"use strict";var Ke=iv(),Yy=Ar(),TE=ep();function tt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Zy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wl(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function Jy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ky(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cv(e){if(Wl(e)!==e)throw Error(tt(188))}function AE(e){var t=e.alternate;if(!t){if(t=Wl(e),t===null)throw Error(tt(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return cv(s),e;if(a===i)return cv(s),t;a=a.sibling}throw Error(tt(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(tt(189))}}if(n.alternate!==i)throw Error(tt(190))}if(n.tag!==3)throw Error(tt(188));return n.stateNode.current===n?e:t}function Qy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Qy(e),t!==null)return t;e=e.sibling}return null}function zn(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&zn(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function rr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function uv(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function jy(e){var t=[null,null],n=rr(e);return n===null||$y(t,e,n.child,{foundSelf:!1}),t}function $y(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&$y(e,t,n.child,i))return!0;n=n.sibling}return!1}function Je(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(tt(559))}}var Ir=null,Lp=null;function wE(e,t,n){return e===n?!0:e===t?(Ir=e,!0):!1}function CE(e,t,n){return e===n?(Lp=e,!1):e===t?(Lp!==null&&(Ir=e),!0):!1}function hv(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Op(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var xe=Object.assign,RE=Symbol.for("react.element"),Qc=Symbol.for("react.transitional.element"),hl=Symbol.for("react.portal"),Pr=Symbol.for("react.fragment"),tx=Symbol.for("react.strict_mode"),Ip=Symbol.for("react.profiler"),ex=Symbol.for("react.consumer"),Qi=Symbol.for("react.context"),Xm=Symbol.for("react.forward_ref"),Pp=Symbol.for("react.suspense"),Bp=Symbol.for("react.suspense_list"),Wm=Symbol.for("react.memo"),Js=Symbol.for("react.lazy"),zp=Symbol.for("react.activity"),NE=Symbol.for("react.legacy_hidden"),DE=Symbol.for("react.memo_cache_sentinel"),Fp=Symbol.for("react.view_transition"),UE=Symbol.for("react.recoverable"),fv=Symbol.iterator;function al(e){return e===null||typeof e!="object"?null:(e=fv&&e[fv]||e["@@iterator"],typeof e=="function"?e:null)}var LE=Symbol.for("react.client.reference");function Hp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===LE?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pr:return"Fragment";case Ip:return"Profiler";case tx:return"StrictMode";case Pp:return"Suspense";case Bp:return"SuspenseList";case zp:return"Activity";case Fp:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case hl:return"Portal";case Qi:return e.displayName||"Context";case ex:return(e._context.displayName||"Context")+".Consumer";case Xm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wm:return t=e.displayName||null,t!==null?t:Hp(e.type)||"Memo";case Js:t=e._payload,e=e._init;try{return Hp(e(t))}catch{}}return null}var fl=Array.isArray,Lt=Yy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=TE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ya={pending:!1,data:null,method:null,action:null},Vp=[],Br=-1;function ss(e){return{current:e}}function un(e){0>Br||(e.current=Vp[Br],Vp[Br]=null,Br--)}function Ce(e,t){Br++,Vp[Br]=e.current,e.current=t}var es=ss(null),Rl=ss(null),sa=ss(null),Bu=ss(null);function zu(e,t){switch(Ce(sa,t),Ce(Rl,e),Ce(es,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ay(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ay(t),e=bM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}un(es),Ce(es,e)}function io(){un(es),un(Rl),un(sa)}function Gp(e){var t=e.memoizedState;t!==null&&(po._currentValue=t.memoizedState,Ce(Bu,e)),t=es.current;var n=bM(t,e.type);t!==n&&(Ce(Rl,e),Ce(es,n))}function Fu(e){Rl.current===e&&(un(es),un(Rl)),Bu.current===e&&(un(Bu),po._currentValue=Ya)}var np,dv;function Ys(e){if(np===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);np=t&&t[1]||"",dv=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+np+e+dv}var ip=!1;function sp(e,t){if(!e||ip)return"";ip=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(g){var u=g}Reflect.construct(e,[],p)}else{try{p.call()}catch(g){u=g}p=!1;try{var d=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(d!==void 0?Object.defineProperty(e.prototype,"props",d):delete e.prototype.props)}}}else{try{throw Error()}catch(g){u=g}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(g){if(g&&u&&typeof g.stack=="string")return[g.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{ip=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ys(n):""}function OE(e,t){switch(e.tag){case 26:case 27:case 5:return Ys(e.type);case 16:return Ys("Lazy");case 13:return e.child!==t&&t!==null?Ys("Suspense Fallback"):Ys("Suspense");case 19:return Ys("SuspenseList");case 0:case 15:return sp(e.type,!1);case 11:return sp(e.type.render,!1);case 1:return sp(e.type,!0);case 31:return Ys("Activity");case 30:return Ys("ViewTransition");default:return""}}function pv(e){try{var t="",n=null;do t+=OE(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var kp=Object.prototype.hasOwnProperty,qm=Ke.unstable_scheduleCallback,ap=Ke.unstable_cancelCallback,IE=Ke.unstable_shouldYield,PE=Ke.unstable_requestPaint,Yn=Ke.unstable_now,BE=Ke.unstable_getCurrentPriorityLevel,nx=Ke.unstable_ImmediatePriority,ix=Ke.unstable_UserBlockingPriority,Hu=Ke.unstable_NormalPriority,zE=Ke.unstable_LowPriority,sx=Ke.unstable_IdlePriority,FE=Ke.log,HE=Ke.unstable_setDisableYieldValue,ql=null,Zn=null;function js(e){if(typeof FE=="function"&&HE(e),Zn&&typeof Zn.setStrictMode=="function")try{Zn.setStrictMode(ql,e)}catch{}}var Jn=Math.clz32?Math.clz32:kE,VE=Math.log,GE=Math.LN2;function kE(e){return e>>>=0,e===0?32:31-(VE(e)/GE|0)|0}var jc=256,$c=262144,tu=4194304;function Ga(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function fh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Ga(i):(r&=o,r!==0?s=Ga(r):n||(n=o&~e,n!==0&&(s=Ga(n))))):(o=i&~a,o!==0?s=Ga(o):r!==0?s=Ga(r):n||(n=i&~e,n!==0&&(s=Ga(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Yl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ax(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Jn(n),s=1<<i;t|=e[i],n&=~s}return t}function XE(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rx(){var e=tu;return tu<<=1,(tu&62914560)===0&&(tu=4194304),e}function rp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function WE(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Jn(n),p=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var d=u[h];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&ox(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function ox(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Jn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function lx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Jn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function cx(e,t){var n=t&-t;return n=(n&42)!==0?1:Ym(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ym(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ux(){var e=se.p;return e!==0?e:(e=window.event,e===void 0?32:WM(e.type))}function mv(e,t){var n=se.p;try{return se.p=e,t()}finally{se.p=n}}var Cs=Math.random().toString(36).slice(2),ln="__reactFiber$"+Cs,Fn="__reactProps$"+Cs,_o="__reactContainer$"+Cs,gv="__reactEvents$"+Cs,qE="__reactListeners$"+Cs,YE="__reactHandles$"+Cs,_v="__reactResources$"+Cs,Jl="__reactMarker$"+Cs,Vu="__reactLoad$"+Cs;function dh(e){delete e[ln],delete e[Fn],delete e[qE],delete e[YE]}function Wa(e){var t;if(t=e[ln])return t;for(var n=e.parentNode;n;){if(t=n[_o]||n[ln]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Oy(e);e!==null;){if(n=e[ln])return n;e=Oy(e)}return t}e=n,n=e.parentNode}return null}function vo(e){if(e=e[ln]||e[_o]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function dl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(tt(33))}function Yr(e){var t=e[_v];return t||(t=e[_v]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nn(e){e[Jl]=!0}function hx(e){e[Vu]=void 0}var fx=new Set,dx={};function or(e,t){so(e,t),so(e+"Capture",t)}function so(e,t){for(dx[e]=t,e=0;e<t.length;e++)fx.add(t[e])}var ZE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vv={},yv={};function JE(e){return kp.call(yv,e)?!0:kp.call(vv,e)?!1:ZE.test(e)?yv[e]=!0:(vv[e]=!0,!1)}var ne=!1;function xv(){var e=ne;return ne=!1,e}function vu(e,t,n){if(JE(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function eu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function gs(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function kn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function px(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function KE(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xp(e){if(!e._valueTracker){var t=px(e)?"checked":"value";e._valueTracker=KE(e,t,""+e[t])}}function mx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=px(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var QE=/[\n"\\]/g;function di(e){return e.replace(QE,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Wp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+kn(t)):e.value!==""+kn(t)&&(e.value=""+kn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?op(e,kn(e.value)):op(e,kn(t)):n!=null?op(e,kn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+kn(o):e.removeAttribute("name")}function gx(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Xp(e);return}n=n!=null?""+kn(n):"",t=t!=null?""+kn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Xp(e)}function op(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Zr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+kn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function _x(e,t,n){if(t!=null&&(t=""+kn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+kn(n):""}function vx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(tt(92));if(fl(i)){if(1<i.length)throw Error(tt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=kn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Xp(e)}function ao(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sv(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||jE.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function yx(e,t,n){if(t!=null&&typeof t!="object")throw Error(tt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",ne=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(Sv(e,s,i),ne=!0)}else for(var a in t)t.hasOwnProperty(a)&&Sv(e,a,t[a])}function Jm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $E=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yu(e){return tT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var qp=null;function Km(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zr=null,Jr=null;function Mv(e){var t=vo(e);if(t&&(e=t.stateNode)){var n=e[Fn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Wp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+di(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Fn]||null;if(!s)throw Error(tt(90));Wp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&mx(i)}break t;case"textarea":_x(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Zr(e,!!n.multiple,t,!1)}}}var lp=!1;function xx(e,t,n){if(lp)return e(t,n);lp=!0;try{var i=e(t);return i}finally{if(lp=!1,(zr!==null||Jr!==null)&&(wh(),zr&&(t=zr,e=Jr,Jr=zr=null,Mv(t),e)))for(t=0;t<e.length;t++)Mv(e[t])}}function Nl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Fn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(tt(231,t,typeof n));return n}var Ms=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yp=!1;if(Ms)try{Rr={},Object.defineProperty(Rr,"passive",{get:function(){Yp=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{Yp=!1}var Rr,$s=null,Qm=null,xu=null;function Sx(){if(xu)return xu;var e,t=Qm,n=t.length,i,s="value"in $s?$s.value:$s.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return xu=s.slice(e,1<i?1-i:void 0)}function Su(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nu(){return!0}function bv(){return!1}function wn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?nu:bv,this.isPropagationStopped=bv,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nu)},persist:function(){},isPersistent:nu}),t}var ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ph=wn(ya),Kl=xe({},ya,{view:0,detail:0}),eT=wn(Kl),cp,up,rl,mh=xe({},Kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rl&&(rl&&e.type==="mousemove"?(cp=e.screenX-rl.screenX,up=e.screenY-rl.screenY):up=cp=0,rl=e),cp)},movementY:function(e){return"movementY"in e?e.movementY:up}}),Ev=wn(mh),nT=xe({},mh,{dataTransfer:0}),iT=wn(nT),sT=xe({},Kl,{relatedTarget:0}),hp=wn(sT),aT=xe({},ya,{animationName:0,elapsedTime:0,pseudoElement:0}),rT=wn(aT),oT=xe({},ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lT=wn(oT),cT=xe({},ya,{data:0}),Tv=wn(cT),uT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fT[e])?!!t[e]:!1}function jm(){return dT}var pT=xe({},Kl,{key:function(e){if(e.key){var t=uT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Su(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jm,charCode:function(e){return e.type==="keypress"?Su(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Su(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mT=wn(pT),gT=xe({},mh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Av=wn(gT),_T=xe({},ya,{submitter:0}),vT=wn(_T),yT=xe({},Kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jm}),xT=wn(yT),ST=xe({},ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),MT=wn(ST),bT=xe({},mh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ET=wn(bT),TT=xe({},ya,{newState:0,oldState:0,source:0}),AT=wn(TT),wT=[9,13,27,32],$m=Ms&&"CompositionEvent"in window,gl=null;Ms&&"documentMode"in document&&(gl=document.documentMode);var CT=Ms&&"TextEvent"in window&&!gl,Mx=Ms&&(!$m||gl&&8<gl&&11>=gl),wv=" ",Cv=!1;function bx(e,t){switch(e){case"keyup":return wT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ex(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fr=!1;function RT(e,t){switch(e){case"compositionend":return Ex(t);case"keypress":return t.which!==32?null:(Cv=!0,wv);case"textInput":return e=t.data,e===wv&&Cv?null:e;default:return null}}function NT(e,t){if(Fr)return e==="compositionend"||!$m&&bx(e,t)?(e=Sx(),xu=Qm=$s=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mx&&t.locale!=="ko"?null:t.data;default:return null}}var DT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!DT[e.type]:t==="textarea"}function Tx(e,t,n,i){zr?Jr?Jr.push(i):Jr=[i]:zr=i,t=ch(t,"onChange"),0<t.length&&(n=new ph("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var _l=null,Dl=null;function UT(e){xM(e,0)}function gh(e){var t=dl(e);if(mx(t))return e}function Nv(e,t){if(e==="change")return t}var Ax=!1;Ms&&(Ms?(su="oninput"in document,su||(fp=document.createElement("div"),fp.setAttribute("oninput","return;"),su=typeof fp.oninput=="function"),iu=su):iu=!1,Ax=iu&&(!document.documentMode||9<document.documentMode));var iu,su,fp;function Dv(){_l&&(_l.detachEvent("onpropertychange",wx),Dl=_l=null)}function wx(e){if(e.propertyName==="value"&&gh(Dl)){var t=[];Tx(t,Dl,e,Km(e)),xx(UT,t)}}function LT(e,t,n){e==="focusin"?(Dv(),_l=t,Dl=n,_l.attachEvent("onpropertychange",wx)):e==="focusout"&&Dv()}function OT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gh(Dl)}function IT(e,t){if(e==="click")return gh(t)}function PT(e,t){if(e==="input"||e==="change")return gh(t)}function BT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qn=typeof Object.is=="function"?Object.is:BT;function Ul(e,t){if(Qn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!kp.call(t,s)||!Qn(e[s],t[s]))return!1}return!0}function Zp(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lv(e,t){var n=Uv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Uv(n)}}function Cx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zp(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zp(e.document)}return t}function tg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var zT=Ms&&"documentMode"in document&&11>=document.documentMode,Hr=null,Jp=null,vl=null,Kp=!1;function Ov(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kp||Hr==null||Hr!==Zp(i)||(i=Hr,"selectionStart"in i&&tg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),vl&&Ul(vl,i)||(vl=i,i=ch(Jp,"onSelect"),0<i.length&&(t=new ph("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Hr)))}function Ha(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vr={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},dp={},Nx={};Ms&&(Nx=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function lr(e){if(dp[e])return dp[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nx)return dp[e]=t[n];return e}var Dx=lr("animationend"),Ux=lr("animationiteration"),Lx=lr("animationstart"),FT=lr("transitionrun"),HT=lr("transitionstart"),VT=lr("transitioncancel"),Ox=lr("transitionend"),Ix=new Map,Qp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qp.push("scrollEnd");function Ni(e,t){Ix.set(e,t),or(t,[e])}var GT=0;function bs(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ri.identifierPrefix;var n=GT++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function Iv(e){if(e==null||typeof e=="string")return e;var t=null,n=no;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function Rs(e,t){return e=Iv(e),t=Iv(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Gu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],Gr=0,eg=0;function _h(){for(var e=Gr,t=eg=Gr=0;t<e;){var n=ui[t];ui[t++]=null;var i=ui[t];ui[t++]=null;var s=ui[t];ui[t++]=null;var a=ui[t];if(ui[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Px(n,s,a)}}function vh(e,t,n,i){ui[Gr++]=e,ui[Gr++]=t,ui[Gr++]=n,ui[Gr++]=i,eg|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function ng(e,t,n,i){return vh(e,t,n,i),ku(e)}function cr(e,t){return vh(e,null,null,t),ku(e)}function Px(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Jn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function ku(e){if(50<Cl)throw Cl=0,Du=null,Error(tt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var kr={};function kT(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(e,t,n,i){return new kT(e,t,n,i)}function ig(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xs(e,t){var n=e.alternate;return n===null?(n=Pn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Bx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Mu(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")ig(i)&&(r=1);else if(typeof i=="string")r=mw(e,n,es.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case zp:return e=Pn(31,n,t,s),e.elementType=zp,e.lanes=a,e;case Pr:return Za(n.children,s,a,t);case tx:r=8,s|=24;break;case Ip:return e=Pn(12,n,t,s|2),e.elementType=Ip,e.lanes=a,e;case Pp:return e=Pn(13,n,t,s),e.elementType=Pp,e.lanes=a,e;case Bp:return e=Pn(19,n,t,s),e.elementType=Bp,e.lanes=a,e;case NE:case Fp:return e=s|32,e=Pn(30,n,t,e),e.elementType=Fp,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Qi:r=10;break t;case ex:r=9;break t;case Xm:r=11;break t;case Wm:r=14;break t;case Js:r=16,i=null;break t}r=29,n=Error(tt(130,e===null?"null":typeof e,"")),i=null}return t=Pn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Za(e,t,n,i){return e=Pn(7,e,i,t),e.lanes=n,e}function pp(e,t,n){return e=Pn(6,e,null,t),e.lanes=n,e}function zx(e){var t=Pn(18,null,null,0);return t.stateNode=e,t}function mp(e,t,n){return t=Pn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pv=new WeakMap;function pi(e,t){if(typeof e=="object"&&e!==null){var n=Pv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:pv(t)},Pv.set(e,t),t)}return{value:e,source:t,stack:pv(t)}}var Xr=[],Wr=0,Xu=null,Ll=0,hi=[],fi=0,pa=null,$i=1,ts="";function vs(e,t){Xr[Wr++]=Ll,Xr[Wr++]=Xu,Xu=e,Ll=t}function Fx(e,t,n){hi[fi++]=$i,hi[fi++]=ts,hi[fi++]=pa,pa=e;var i=$i;e=ts;var s=32-Jn(i)-1;i&=~(1<<s),n+=1;var a=32-Jn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,$i=1<<32-Jn(t)+s|n<<s|i,ts=a+e}else $i=1<<a|n<<s|i,ts=e}function yh(e){e.return!==null&&(vs(e,1),Fx(e,1,0))}function sg(e){for(;e===Xu;)Xu=Xr[--Wr],Xr[Wr]=null,Ll=Xr[--Wr],Xr[Wr]=null;for(;e===pa;)pa=hi[--fi],hi[fi]=null,ts=hi[--fi],hi[fi]=null,$i=hi[--fi],hi[fi]=null}function Hx(e,t){hi[fi++]=$i,hi[fi++]=ts,hi[fi++]=pa,$i=t.id,ts=t.overflow,pa=e}var sn=null,we=null,kt=!1,aa=null,mi=!1,jp=Error(tt(519));function ma(e){var t=Error(tt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ol(pi(t,e)),jp}function Bv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[ln]=e,t[Fn]=i,n){case"dialog":Yt("cancel",t),Yt("close",t);break;case"iframe":case"object":case"embed":Yt("load",t);break;case"video":case"audio":for(n=0;n<zl.length;n++)Yt(zl[n],t);break;case"source":Yt("error",t);break;case"img":case"image":case"link":Yt("error",t),Yt("load",t);break;case"details":Yt("toggle",t);break;case"input":Yt("invalid",t),gx(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Yt("invalid",t);break;case"textarea":Yt("invalid",t),vx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||MM(t.textContent,n)?(i.popover!=null&&(Yt("beforetoggle",t),Yt("toggle",t)),i.onScroll!=null&&Yt("scroll",t),i.onScrollEnd!=null&&Yt("scrollend",t),i.onClick!=null&&(t.onclick=ji),t=!0):t=!1,t||ma(e,!0)}function Wu(e){for(sn=e.return;sn;)switch(sn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:sn=sn.return}}function Nr(e){if(e!==sn)return!1;if(!kt)return Wu(e),kt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Pm(e.type,e.memoizedProps)),n=!n),n&&we&&ma(e),Wu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));we=Ly(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));we=Ly(e)}else t===27?(t=we,xa(e.type)?(e=Hm,Hm=null,we=e):we=t):we=sn?gi(e.stateNode.nextSibling):null;return!0}function ja(){we=sn=null,kt=!1}function gp(){var e=aa;return e!==null&&(On===null?On=e:On.push.apply(On,e),aa=null),e}function Ol(e){aa===null?aa=[e]:aa.push(e)}var $p=ss(null),ur=null,ys=null;function ta(e,t,n){Ce($p,t._currentValue),t._currentValue=n}function Ss(e){e._currentValue=$p.current,un($p)}function bu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function tm(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),bu(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(tt(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),bu(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),bu(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function $a(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(tt(387));if(r=r.memoizedProps,r!==null){var o=s.type;Qn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Bu.current){if(r=s.alternate,r===null)throw Error(tt(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(po):e=[po])}s=s.return}return e!==null&&tm(t,e,n,i),t.flags|=262144,e!==null}function qu(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function tr(e){ur=e,ys=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function cn(e){return Vx(ur,e)}function au(e,t){return ur===null&&tr(e),Vx(e,t)}function Vx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ys===null){if(e===null)throw Error(tt(308));ys=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ys=ys.next=t;return n}var XT=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},WT=Ke.unstable_scheduleCallback,qT=Ke.unstable_NormalPriority,Xe={$$typeof:Qi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ag(){return{controller:new XT,data:new Map,refCount:0}}function Ql(e){e.refCount--,e.refCount===0&&WT(qT,function(){e.controller.abort()})}function zv(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var pl=null;function YT(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var yl=null,em=0,er=0,Kr=null;function ZT(e,t){if(yl===null){var n=yl=[];em=0,er=Lg(),Kr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return em++,t.then(Fv,Fv),t}function Fv(){if(--em===0&&(pl=null,yl!==null)){Kr!==null&&(Kr.status="fulfilled");var e=yl;yl=null,er=0,Kr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function JT(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Hv=Lt.S;Lt.S=function(e,t){if(aM=Yn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ZT(e,t),pl!==null)for(var n=uo;n!==null;)zv(n,pl),n=n.next;if(n=e.types,n!==null){for(var i=uo;i!==null;)zv(i,n),i=i.next;if(er!==0){i=pl,i===null&&(i=pl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}Hv!==null&&Hv(e,t)};var Ja=ss(null);function rg(){var e=Ja.current;return e!==null?e:ye.pooledCache}function Eu(e,t){t===null?Ce(Ja,Ja.current):Ce(Ja,t.pool)}function Gx(){var e=rg();return e===null?null:{parent:Xe._currentValue,pool:e}}var yo=Error(tt(460)),og=Error(tt(474)),xh=Error(tt(542)),Yu={then:function(){}};function Vv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function kx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ji,ji),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kv(e),e===void 0&&!("reason"in t)?Error(tt(600)):e;default:if(typeof t.status=="string")t.then(ji,ji);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(tt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kv(e),e}throw Ka=t,yo}}function ka(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ka=n,yo):n}}var Ka=null;function Gv(){if(Ka===null)throw Error(tt(459));var e=Ka;return Ka=null,e}function kv(e){if(e===yo||e===xh)throw Error(tt(483))}var Qr=null,Il=0;function ru(e){var t=Il;return Il+=1,Qr===null&&(Qr=[]),kx(Qr,e,t)}function qs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ou(e,t){throw t.$$typeof===RE?Error(tt(525)):(e=Object.prototype.toString.call(t),Error(tt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Xx(e){function t(f,_){if(e){var S=f.deletions;S===null?(f.deletions=[_],f.flags|=16):S.push(_)}}function n(f,_){if(!e)return null;for(;_!==null;)t(f,_),_=_.sibling;return null}function i(f){for(var _=new Map;f!==null;)f.key===null?_.set(f.index,f):_.set(f.key,f),f=f.sibling;return _}function s(f,_){return f=xs(f,_),f.index=0,f.sibling=null,f}function a(f,_,S){return f.index=S,e?(S=f.alternate,S!==null?(S=S.index,S<_?(f.flags|=2,_):S):(f.flags|=134217730,_)):(f.flags|=1048576,_)}function r(f){return e&&f.alternate===null&&(f.flags|=134217730),f}function o(f,_,S,y){return _===null||_.tag!==6?(_=pp(S,f.mode,y),_.return=f,_):(_=s(_,S),_.return=f,_)}function l(f,_,S,y){var b=S.type;return b===Pr?(f=h(f,_,S.props.children,y,S.key),qs(f,S),f):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Js&&ka(b)===_.type)?(_=s(_,S.props),qs(_,S),_.return=f,_):(_=Mu(S.type,S.key,S.props,null,f.mode,y),qs(_,S),_.return=f,_)}function c(f,_,S,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=mp(S,f.mode,y),_.return=f,_):(_=s(_,S.children||[]),_.return=f,_)}function h(f,_,S,y,b){return _===null||_.tag!==7?(_=Za(S,f.mode,y,b),_.return=f,_):(_=s(_,S),_.return=f,_)}function p(f,_,S){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=pp(""+_,f.mode,S),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Qc:return S=Mu(_.type,_.key,_.props,null,f.mode,S),qs(S,_),S.return=f,S;case hl:return _=mp(_,f.mode,S),_.return=f,_;case Js:return _=ka(_),p(f,_,S)}if(fl(_)||al(_))return _=Za(_,f.mode,S,null),_.return=f,_;if(typeof _.then=="function")return p(f,ru(_),S);if(_.$$typeof===Qi)return p(f,au(f,_),S);ou(f,_)}return null}function u(f,_,S,y){var b=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return b!==null?null:o(f,_,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Qc:return S.key===b?l(f,_,S,y):null;case hl:return S.key===b?c(f,_,S,y):null;case Js:return S=ka(S),u(f,_,S,y)}if(fl(S)||al(S))return b!==null?null:h(f,_,S,y,null);if(typeof S.then=="function")return u(f,_,ru(S),y);if(S.$$typeof===Qi)return u(f,_,au(f,S),y);ou(f,S)}return null}function d(f,_,S,y,b){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return f=f.get(S)||null,o(_,f,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qc:return f=f.get(y.key===null?S:y.key)||null,l(_,f,y,b);case hl:return f=f.get(y.key===null?S:y.key)||null,c(_,f,y,b);case Js:return y=ka(y),d(f,_,S,y,b)}if(fl(y)||al(y))return f=f.get(S)||null,h(_,f,y,b,null);if(typeof y.then=="function")return d(f,_,S,ru(y),b);if(y.$$typeof===Qi)return d(f,_,S,au(_,y),b);ou(_,y)}return null}function g(f,_,S,y){for(var b=null,T=null,w=_,x=_=0,A=null;w!==null&&x<S.length;x++){w.index>x?(A=w,w=null):A=w.sibling;var R=u(f,w,S[x],y);if(R===null){w===null&&(w=A);break}e&&w&&R.alternate===null&&t(f,w),_=a(R,_,x),T===null?b=R:T.sibling=R,T=R,w=A}if(x===S.length)return n(f,w),kt&&vs(f,x),b;if(w===null){for(;x<S.length;x++)w=p(f,S[x],y),w!==null&&(_=a(w,_,x),T===null?b=w:T.sibling=w,T=w);return kt&&vs(f,x),b}for(w=i(w);x<S.length;x++)A=d(w,f,x,S[x],y),A!==null&&(e&&(R=A.alternate,R!==null&&w.delete(R.key===null?x:R.key)),_=a(A,_,x),T===null?b=A:T.sibling=A,T=A);return e&&w.forEach(function(I){return t(f,I)}),kt&&vs(f,x),b}function E(f,_,S,y){if(S==null)throw Error(tt(151));for(var b=null,T=null,w=_,x=_=0,A=null,R=S.next();w!==null&&!R.done;x++,R=S.next()){w.index>x?(A=w,w=null):A=w.sibling;var I=u(f,w,R.value,y);if(I===null){w===null&&(w=A);break}e&&w&&I.alternate===null&&t(f,w),_=a(I,_,x),T===null?b=I:T.sibling=I,T=I,w=A}if(R.done)return n(f,w),kt&&vs(f,x),b;if(w===null){for(;!R.done;x++,R=S.next())R=p(f,R.value,y),R!==null&&(_=a(R,_,x),T===null?b=R:T.sibling=R,T=R);return kt&&vs(f,x),b}for(w=i(w);!R.done;x++,R=S.next())R=d(w,f,x,R.value,y),R!==null&&(e&&(A=R.alternate,A!==null&&w.delete(A.key===null?x:A.key)),_=a(R,_,x),T===null?b=R:T.sibling=R,T=R);return e&&w.forEach(function(F){return t(f,F)}),kt&&vs(f,x),b}function m(f,_,S,y){if(typeof S=="object"&&S!==null&&S.type===Pr&&S.key===null&&S.props.ref===void 0&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Qc:t:{for(var b=S.key;_!==null;){if(_.key===b){if(b=S.type,b===Pr){if(_.tag===7){n(f,_.sibling),y=s(_,S.props.children),qs(y,S),y.return=f,f=y;break t}}else if(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Js&&ka(b)===_.type){n(f,_.sibling),y=s(_,S.props),qs(y,S),y.return=f,f=y;break t}n(f,_);break}else t(f,_);_=_.sibling}S.type===Pr?(y=Za(S.props.children,f.mode,y,S.key),qs(y,S),y.return=f,f=y):(y=Mu(S.type,S.key,S.props,null,f.mode,y),qs(y,S),y.return=f,f=y)}return r(f);case hl:t:{for(b=S.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(f,_.sibling),y=s(_,S.children||[]),y.return=f,f=y;break t}else{n(f,_);break}else t(f,_);_=_.sibling}y=mp(S,f.mode,y),y.return=f,f=y}return r(f);case Js:return S=ka(S),m(f,_,S,y)}if(fl(S))return g(f,_,S,y);if(al(S)){if(b=al(S),typeof b!="function")throw Error(tt(150));return S=b.call(S),E(f,_,S,y)}if(typeof S.then=="function")return m(f,_,ru(S),y);if(S.$$typeof===Qi)return m(f,_,au(f,S),y);ou(f,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,_!==null&&_.tag===6?(n(f,_.sibling),y=s(_,S),y.return=f,f=y):(n(f,_),y=pp(S,f.mode,y),y.return=f,f=y),r(f)):n(f,_)}return function(f,_,S,y){try{Il=0;var b=m(f,_,S,y);return Qr=null,b}catch(w){if(w===yo||w===xh)throw w;var T=Pn(29,w,null,f.mode);return T.lanes=y,T.return=f,T}}}var nr=Xx(!0),Wx=Xx(!1),Ks=!1;function lg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function oa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ie&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=ku(e),Px(e,null,n),t}return vh(e,i,t,n),ku(e)}function xl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,lx(e,n)}}function _p(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var im=!1;function Sl(){if(im){var e=Kr;if(e!==null)throw e}}function Ml(e,t,n,i){im=!1;var s=e.updateQueue;Ks=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,h=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(jt&u)===u:(i&u)===u){u!==0&&u===er&&(im=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,E=o;u=t;var m=n;switch(E.tag){case 1:if(g=E.payload,typeof g=="function"){p=g.call(m,p,u);break t}p=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=E.payload,u=typeof g=="function"?g.call(m,p,u):g,u==null)break t;p=xe({},p,u);break t;case 2:Ks=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=d,l=p):h=h.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);h===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),va|=r,e.lanes=r,e.memoizedState=p}}function qx(e,t){if(typeof e!="function")throw Error(tt(191,e));e.call(t)}function Yx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)qx(n[e],t)}var ga=ss(null),Zu=ss(0);function Xv(e,t){e=ws,Ce(Zu,e),Ce(ga,t),ws=e|t.baseLanes}function sm(){Ce(Zu,ws),Ce(ga,ga.current)}function cg(){ws=Zu.current,un(ga),un(Zu)}var dn=ss(null),_n=null;function la(e){var t=e.alternate;Ce(hn,hn.current&1),Ce(dn,e),_n===null&&(t===null||ga.current!==null||t.memoizedState!==null)&&(_n=e)}function am(e){Ce(hn,hn.current),Ce(dn,e),_n===null&&(_n=e)}function Zx(e){e.tag===22?(Ce(hn,hn.current),Ce(dn,e),_n===null&&(_n=e)):ca()}function ca(){Ce(hn,hn.current),Ce(dn,dn.current)}function Xn(e){un(dn),_n===e&&(_n=null),un(hn)}var hn=ss(0);function Pl(e,t){Ce(dn,dn.current),Ce(hn,t)}function ug(e){un(hn),un(dn),_n===e&&(_n=null)}function Ju(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Fm(n)||Bg(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Es=0,Ht=null,_e=null,ke=null,Ku=!1,jr=!1,ir=!1,Qu=0,Bl=0,$r=null,KT=0;function Be(){throw Error(tt(321))}function hg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qn(e[n],t[n]))return!1;return!0}function fg(e,t,n,i,s,a){return Es=a,Ht=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lt.H=e===null||e.memoizedState===null?TS:AS,ir=!1,a=n(i,s),ir=!1,jr&&(a=Kx(t,n,i,s)),Jx(e),a}function Jx(e){Lt.H=ju;var t=_e!==null&&_e.next!==null;if(Es=0,ke=_e=Ht=null,Ku=!1,Bl=0,$r=null,t)throw Error(tt(300));e===null||We||(e=e.dependencies,e!==null&&qu(e)&&(We=!0))}function Kx(e,t,n,i){Ht=e;var s=0;do{if(jr&&($r=null),Bl=0,jr=!1,25<=s)throw Error(tt(301));if(s+=1,ke=_e=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Lt.H=sA,a=t(n,i)}while(jr);return a}function QT(){var e=Lt.H,t=e.useState()[0];return t=typeof t.then=="function"?jl(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(Ht.flags|=1024),t}function dg(){var e=Qu!==0;return Qu=0,e}function pg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function mg(e){if(Ku){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ku=!1}Es=0,ke=_e=Ht=null,jr=!1,Bl=Qu=0,$r=null}function An(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?Ht.memoizedState=ke=e:ke=ke.next=e,ke}function Ve(){if(_e===null){var e=Ht.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=ke===null?Ht.memoizedState:ke.next;if(t!==null)ke=t,_e=e;else{if(e===null)throw Ht.alternate===null?Error(tt(467)):Error(tt(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},ke===null?Ht.memoizedState=ke=e:ke=ke.next=e}return ke}function Sh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jl(e){var t=Bl;return Bl+=1,$r===null&&($r=[]),e=kx($r,e,t),t=Ht,(ke===null?t.memoizedState:ke.next)===null&&(t=t.alternate,Lt.H=t===null||t.memoizedState===null?TS:AS),e}function Mh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jl(e);if(e.$$typeof===UE)return;if(e.$$typeof===Qi)return cn(e)}throw Error(tt(438,String(e)))}function gg(e){var t=null,n=Ht.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Ht.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Sh(),Ht.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=DE;return t.index++,n}function Ts(e,t){return typeof t=="function"?t(e):t}function Tu(e){var t=Ve();return _g(t,_e,e)}function _g(e,t,n){var i=e.queue;if(i===null)throw Error(tt(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(jt&p)===p:(Es&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===er&&(h=!0);else if((Es&u)===u){c=c.next,u===er&&(h=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,Ht.lanes|=u,va|=u;p=c.action,ir&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Ht.lanes|=p,va|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Qn(a,e.memoizedState)&&(We=!0,h&&(n=Kr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function vp(e){var t=Ve(),n=t.queue;if(n===null)throw Error(tt(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Qn(a,t.memoizedState)||(We=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Qx(e,t,n){var i=Ht,s=Ve(),a=kt;if(a){if(n===void 0)throw Error(tt(407));n=n()}else n=t();var r=!Qn((_e||s).memoizedState,n);if(r&&(s.memoizedState=n,We=!0),s=s.queue,vg(tS.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||ke!==null&&(ke.memoizedState.tag&1)!==0,ro(e?9:8,{destroy:void 0},$x.bind(null,i,s,n,t),null),e){if(i.flags|=2048,ye===null)throw Error(tt(349));a||(Es&127)!==0||jx(i,t,n)}return n}function jx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ht.updateQueue,t===null?(t=Sh(),Ht.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $x(e,t,n,i){t.value=n,t.getSnapshot=i,eS(t)&&nS(e)}function tS(e,t,n){return n(function(){eS(t)&&nS(e)})}function eS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qn(e,n)}catch{return!0}}function nS(e){var t=cr(e,2);t!==null&&Bn(t,e,2)}function rm(e){var t=An();if(typeof e=="function"){var n=e;if(e=n(),ir){js(!0);try{n()}finally{js(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ts,lastRenderedState:e},t}function iS(e,t,n,i){return e.baseState=n,_g(e,_e,typeof i=="function"?i:Ts)}function jT(e,t,n,i,s){if(Eh(e))throw Error(tt(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Lt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,sS(t,a)):(a.next=n.next,t.pending=n.next=a)}}function sS(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Lt.T,r={};r.types=a!==null?a.types:null,Lt.T=r;try{var o=n(s,i),l=Lt.S;l!==null&&l(r,o),Wv(e,t,o)}catch(c){om(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Lt.T=a}}else try{a=n(s,i),Wv(e,t,a)}catch(c){om(e,t,c)}}function Wv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){qv(e,t,i)},function(i){return om(e,t,i)}):qv(e,t,n)}function qv(e,t,n){t.status="fulfilled",t.value=n,aS(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,sS(e,n)))}function om(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,aS(t),t=t.next;while(t!==i)}e.action=null}function aS(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rS(e,t){return t}function Yv(e,t){if(kt){var n=ye.formState;if(n!==null){t:{var i=Ht;if(kt){if(we){e:{for(var s=we,a=mi;s.nodeType!==8;){if(!a){s=null;break e}if(s=gi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){we=gi(s.nextSibling),i=s.data==="F!";break t}}ma(i)}i=!1}i&&(t=n[0])}}return n=An(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rS,lastRenderedState:t},n.queue=i,n=MS.bind(null,Ht,i),i.dispatch=n,i=rm(!1),a=Mg.bind(null,Ht,!1,i.queue),i=An(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=jT.bind(null,Ht,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Zv(e){var t=Ve();return oS(t,_e,e)}function oS(e,t,n){if(t=_g(e,t,rS)[0],e=Tu(Ts)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=jl(t)}catch(r){throw r===yo?xh:r}else i=t;t=Ve();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Ht.flags|=2048,ro(9,{destroy:void 0},$T.bind(null,s,n),null)),[i,a,e]}function $T(e,t){e.action=t}function Jv(e){var t=Ve(),n=_e;if(n!==null)return oS(t,n,e);Ve(),t=t.memoizedState,n=Ve();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function ro(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Ht.updateQueue,t===null&&(t=Sh(),Ht.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function lS(){return Ve().memoizedState}function Au(e,t,n,i){var s=An();Ht.flags|=e,s.memoizedState=ro(1|t,{destroy:void 0},n,i===void 0?null:i)}function bh(e,t,n,i){var s=Ve();i=i===void 0?null:i;var a=s.memoizedState.inst;_e!==null&&i!==null&&hg(i,_e.memoizedState.deps)?s.memoizedState=ro(t,a,n,i):(Ht.flags|=e,s.memoizedState=ro(1|t,a,n,i))}function Kv(e,t){Au(8390656,8,e,t)}function vg(e,t){bh(2048,8,e,t)}function tA(e){Ht.flags|=4;var t=Ht.updateQueue;if(t===null)t=Sh(),Ht.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function cS(e){var t=Ve().memoizedState;return tA({ref:t,nextImpl:e}),function(){if((ie&2)!==0)throw Error(tt(440));return t.impl.apply(void 0,arguments)}}function uS(e,t){return bh(4,2,e,t)}function hS(e,t){return bh(4,4,e,t)}function fS(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dS(e,t,n){n=n!=null?n.concat([e]):null,bh(4,4,fS.bind(null,t,e),n)}function yg(){}function pS(e,t){var n=Ve();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&hg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function mS(e,t){var n=Ve();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&hg(t,i[1]))return i[0];if(i=e(),ir){js(!0);try{e()}finally{js(!1)}}return n.memoizedState=[i,t],i}function xg(e,t,n){return n===void 0||(Es&1073741824)!==0&&(jt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=oM(),Ht.lanes|=e,va|=e,n)}function gS(e,t,n,i){return Qn(n,t)?n:ga.current!==null?(e=xg(e,n,i),Qn(e,t)||(We=!0),e):(Es&106)===0||(Es&1073741824)!==0&&(jt&261930)===0?(We=!0,e.memoizedState=n):(e=oM(),Ht.lanes|=e,va|=e,t)}function _S(e,t,n,i,s){var a=se.p;se.p=a!==0&&8>a?a:8;var r=Lt.T,o={};o.types=r!==null?r.types:null,Lt.T=o,Mg(e,!1,t,n);try{var l=s(),c=Lt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=JT(l,i);bl(e,t,h,Kn(e))}else bl(e,t,i,Kn(e))}catch(p){bl(e,t,{then:function(){},status:"rejected",reason:p},Kn())}finally{se.p=a,r!==null&&o.types!==null&&(r.types=o.types),Lt.T=r}}function eA(){}function lm(e,t,n,i){if(e.tag!==5)throw Error(tt(476));var s=vS(e).queue;_S(e,s,t,Ya,n===null?eA:function(){return yS(e),n(i)})}function vS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ya,baseState:Ya,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ts,lastRenderedState:Ya},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ts,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function yS(e){var t=vS(e);t.next===null&&(t=e.alternate.memoizedState),bl(e,t.next.queue,{},Kn())}function Sg(){return cn(po)}function xS(){return Ve().memoizedState}function SS(){return Ve().memoizedState}function nA(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Kn();e=ra(n);var i=oa(t,e,n);i!==null&&(Bn(i,t,n),xl(i,t,n)),t={cache:ag()},e.payload=t;return}t=t.return}}function iA(e,t,n){var i=Kn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Eh(e)?bS(t,n):(n=ng(e,t,n,i),n!==null&&(Bn(n,e,i),ES(n,t,i)))}function MS(e,t,n){var i=Kn();bl(e,t,n,i)}function bl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Eh(e))bS(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Qn(o,r))return vh(e,t,s,0),ye===null&&_h(),!1}catch{}if(n=ng(e,t,s,i),n!==null)return Bn(n,e,i),ES(n,t,i),!0}return!1}function Mg(e,t,n,i){if(i={lane:2,revertLane:Lg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Eh(e)){if(t)throw Error(tt(479))}else t=ng(e,n,i,2),t!==null&&Bn(t,e,2)}function Eh(e){var t=e.alternate;return e===Ht||t!==null&&t===Ht}function bS(e,t){jr=Ku=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ES(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,lx(e,n)}}var ju={readContext:cn,use:Mh,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be,useEffectEvent:Be},TS={readContext:cn,use:Mh,useCallback:function(e,t){return An().memoizedState=[e,t===void 0?null:t],e},useContext:cn,useEffect:Kv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Au(4194308,4,fS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Au(4194308,4,e,t)},useInsertionEffect:function(e,t){Au(4,2,e,t)},useMemo:function(e,t){var n=An();t=t===void 0?null:t;var i=e();if(ir){js(!0);try{e()}finally{js(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=An();if(n!==void 0){var s=n(t);if(ir){js(!0);try{n(t)}finally{js(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=iA.bind(null,Ht,e),[i.memoizedState,e]},useRef:function(e){var t=An();return e={current:e},t.memoizedState=e},useState:function(e){e=rm(e);var t=e.queue,n=MS.bind(null,Ht,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:yg,useDeferredValue:function(e,t){var n=An();return xg(n,e,t)},useTransition:function(){var e=rm(!1);return e=_S.bind(null,Ht,e.queue,!0,!1),An().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Ht,s=An();if(kt){if(n===void 0)throw Error(tt(407));n=n()}else{if(n=t(),ye===null)throw Error(tt(349));(jt&127)!==0||jx(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Kv(tS.bind(null,i,a,e),[e]),i.flags|=2048,ro(9,{destroy:void 0},$x.bind(null,i,a,n,t),null),n},useId:function(){var e=An(),t=ye.identifierPrefix;if(kt){var n=ts,i=$i;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Qu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=KT++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Sg,useFormState:Yv,useActionState:Yv,useOptimistic:function(e){var t=An();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Mg.bind(null,Ht,!0,n),n.dispatch=t,[e,t]},useMemoCache:gg,useCacheRefresh:function(){return An().memoizedState=nA.bind(null,Ht)},useEffectEvent:function(e){var t=An(),n={impl:e};return t.memoizedState=n,function(){if((ie&2)!==0)throw Error(tt(440));return n.impl.apply(void 0,arguments)}}},AS={readContext:cn,use:Mh,useCallback:pS,useContext:cn,useEffect:vg,useImperativeHandle:dS,useInsertionEffect:uS,useLayoutEffect:hS,useMemo:mS,useReducer:Tu,useRef:lS,useState:function(){return Tu(Ts)},useDebugValue:yg,useDeferredValue:function(e,t){var n=Ve();return gS(n,_e.memoizedState,e,t)},useTransition:function(){var e=Tu(Ts)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:jl(e),t]},useSyncExternalStore:Qx,useId:xS,useHostTransitionStatus:Sg,useFormState:Zv,useActionState:Zv,useOptimistic:function(e,t){var n=Ve();return iS(n,_e,e,t)},useMemoCache:gg,useCacheRefresh:SS,useEffectEvent:cS},sA={readContext:cn,use:Mh,useCallback:pS,useContext:cn,useEffect:vg,useImperativeHandle:dS,useInsertionEffect:uS,useLayoutEffect:hS,useMemo:mS,useReducer:vp,useRef:lS,useState:function(){return vp(Ts)},useDebugValue:yg,useDeferredValue:function(e,t){var n=Ve();return _e===null?xg(n,e,t):gS(n,_e.memoizedState,e,t)},useTransition:function(){var e=vp(Ts)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:jl(e),t]},useSyncExternalStore:Qx,useId:xS,useHostTransitionStatus:Sg,useFormState:Jv,useActionState:Jv,useOptimistic:function(e,t){var n=Ve();return _e!==null?iS(n,_e,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:gg,useCacheRefresh:SS,useEffectEvent:cS};function yp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Kn(),s=ra(i);s.payload=t,n!=null&&(s.callback=n),t=oa(e,s,i),t!==null&&(Bn(t,e,i),xl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Kn(),s=ra(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=oa(e,s,i),t!==null&&(Bn(t,e,i),xl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Kn(),i=ra(n);i.tag=2,t!=null&&(i.callback=t),t=oa(e,i,n),t!==null&&(Bn(t,e,n),xl(t,e,n))}};function Qv(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Ul(n,i)||!Ul(s,a):!0}function jv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&cm.enqueueReplaceState(t,t.state,null)}function sr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=xe({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function wS(e){Gu(e)}function CS(e){console.error(e)}function RS(e){Gu(e)}function $u(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function $v(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function um(e,t,n){return n=ra(n),n.tag=3,n.payload={element:null},n.callback=function(){$u(e,t)},n}function NS(e){return e=ra(e),e.tag=3,e}function DS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){$v(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){$v(t,n,i),typeof s!="function"&&(ua===null?ua=new Set([this]):ua.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function aA(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&$a(t,n,s,!0),n=dn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return _n===null?oh():n.alternate===null&&ze===0&&(ze=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Yu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Ap(e,i,s)),!1;case 22:return n.flags|=65536,i===Yu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Ap(e,i,s)),!1}throw Error(tt(435,n.tag))}return Ap(e,i,s),oh(),!1}if(kt)return t=dn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==jp&&(e=Error(tt(422),{cause:i}),Ol(pi(e,n)))):(i!==jp&&(t=Error(tt(423),{cause:i}),Ol(pi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=pi(i,n),s=um(e.stateNode,i,s),_p(e,s),ze!==4&&(ze=2)),!1;var a=Error(tt(520),{cause:i});if(a=pi(a,n),wl===null?wl=[a]:wl.push(a),ze!==4&&(ze=2),t===null)return!0;i=pi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=um(n.stateNode,i,e),_p(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(ua===null||!ua.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=NS(s),DS(s,e,n,i),_p(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var bg=Error(tt(461)),We=!1;function Ze(e,t,n,i){t.child=e===null?Wx(t,null,n,i):nr(t,e.child,n,i)}function ty(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return tr(t),i=fg(e,t,n,r,a,s),o=dg(),e!==null&&!We?(pg(e,t,s),As(e,t,s)):(kt&&o&&yh(t),t.flags|=1,Ze(e,t,i,s),t.child)}function ey(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!ig(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,US(e,t,a,i,s)):(e=Mu(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Tg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ul,n(r,i)&&e.ref===t.ref)return As(e,t,s)}return t.flags|=1,e=xs(a,i),e.ref=t.ref,e.return=t,t.child=e}function US(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Ul(a,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=a,Tg(e,s))(e.flags&131072)!==0&&(We=!0);else return t.lanes=e.lanes,As(e,t,s)}return hm(e,t,n,i,s)}function LS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return ny(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Eu(t,a!==null?a.cachePool:null),a!==null?Xv(t,a):sm(),Zx(t);else return i=t.lanes=536870912,ny(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Eu(t,a.cachePool),Xv(t,a),ca(),t.memoizedState=null):(e!==null&&Eu(t,null),sm(),ca());return Ze(e,t,s,n),t.child}function El(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ny(e,t,n,i,s){var a=rg();return a=a===null?null:{parent:Xe._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Eu(t,null),sm(),Zx(t),e!==null&&$a(e,t,i,!0),t.childLanes=s,null}function wu(e,t){return t=Th({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function iy(e,t,n){return nr(t,e.child,null,n),e=wu(t,t.pendingProps),e.flags|=2,Xn(t),t.memoizedState=null,e}function rA(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(kt){if(i.mode==="hidden")return e=wu(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},El(null,e);if(am(t),(e=we)?(e=LM(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:pa!==null?{id:$i,overflow:ts}:null,retryLane:536870912,hydrationErrors:null},n=zx(e),n.return=t,t.child=n,sn=t,we=null)):e=null,e===null)throw ma(t);return t.lanes=536870912,null}return wu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(am(t),s)if(t.flags&256)t.flags&=-257,t=iy(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(tt(558));else if(We||$a(e,t,n,!1),s=(n&e.childLanes)!==0,We||s){if(ga.current===null){if(i=ye,i!==null&&(r=cx(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,cr(e,r),Bn(i,e,r),bg;oh()}t=iy(e,t,n)}else e=a.treeContext,we=gi(r.nextSibling),sn=t,kt=!0,aa=null,mi=!1,e!==null&&Hx(t,e),t=wu(t,i),t.flags|=134221824;return t}return e=xs(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ur(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(tt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hm(e,t,n,i,s){return tr(t),n=fg(e,t,n,i,void 0,s),i=dg(),e!==null&&!We?(pg(e,t,s),As(e,t,s)):(kt&&i&&yh(t),t.flags|=1,Ze(e,t,n,s),t.child)}function sy(e,t,n,i,s,a){return tr(t),t.updateQueue=null,n=Kx(t,i,n,s),Jx(e),i=dg(),e!==null&&!We?(pg(e,t,a),As(e,t,a)):(kt&&i&&yh(t),t.flags|=1,Ze(e,t,n,a),t.child)}function ay(e,t,n,i,s){if(tr(t),t.stateNode===null){var a=kr,r=n.contextType;typeof r=="object"&&r!==null&&(a=cn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=cm,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},lg(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?cn(r):kr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(yp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&cm.enqueueReplaceState(a,a.state,null),Ml(t,i,a,s),Sl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=sr(n,o);a.props=l;var c=a.context,h=n.contextType;r=kr,typeof h=="object"&&h!==null&&(r=cn(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&jv(t,a,i,r),Ks=!1;var u=t.memoizedState;a.state=u,Ml(t,i,a,s),Sl(),c=t.memoizedState,o||u!==c||Ks?(typeof p=="function"&&(yp(t,n,p,i),c=t.memoizedState),(l=Ks||Qv(t,n,l,i,u,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,nm(e,t),r=t.memoizedProps,h=sr(n,r),a.props=h,p=t.pendingProps,u=a.context,c=n.contextType,l=kr,typeof c=="object"&&c!==null&&(l=cn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&jv(t,a,i,l),Ks=!1,u=t.memoizedState,a.state=u,Ml(t,i,a,s),Sl();var d=t.memoizedState;r!==p||u!==d||Ks||e!==null&&e.dependencies!==null&&qu(e.dependencies)?(typeof o=="function"&&(yp(t,n,o,i),d=t.memoizedState),(h=Ks||Qv(t,n,h,i,u,d,l)||e!==null&&e.dependencies!==null&&qu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Ur(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=nr(t,e.child,null,s),t.child=nr(t,null,n,s)):Ze(e,t,n,s),t.memoizedState=a.state,e=t.child):e=As(e,t,s),e}function ry(e,t,n,i){return ja(),t.flags|=256,Ze(e,t,n,i),t.child}var fm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dm(e){return{baseLanes:e,cachePool:Gx()}}function pm(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=qn),e}function OS(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(kt){if(s?la(t):ca(),(e=we)?(e=LM(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:pa!==null?{id:$i,overflow:ts}:null,retryLane:536870912,hydrationErrors:null},n=zx(e),n.return=t,t.child=n,sn=t,we=null)):e=null,e===null)throw ma(t);return Bg(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(ca(),s=t.mode,a=Th({mode:"hidden",children:a},s),i=Za(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=dm(n),i.childLanes=pm(e,r,n),t.memoizedState=fm,El(null,i)):(la(t),Eg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return oA(e,t,a,r,i,l,o,n)}return s?(ca(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=xs(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=xs(l,s):(s=Za(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,El(null,i),i=t.child,s=e.child.memoizedState,s===null?s=dm(n):(a=s.cachePool,a!==null?(o=Xe._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Gx(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=pm(e,r,n),t.memoizedState=fm,El(e.child,i)):(la(t),n=e.child,e=n.sibling,n=xs(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Eg(e,t){return t=Th({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Th(e,t){return e=Pn(22,e,null,t),e.lanes=0,e}function lu(e,t,n){return nr(t,e.child,null,n),e=Eg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oA(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(la(t),t.flags&=-257,lu(e,t,o)):t.memoizedState!==null?(ca(),t.child=e.child,t.flags|=128,null):(ca(),a=s.fallback,r=t.mode,s=Th({mode:"visible",children:s.children},r),a=Za(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,nr(t,e.child,null,o),s=t.child,s.memoizedState=dm(o),s.childLanes=pm(e,i,o),t.memoizedState=fm,El(null,s));if(la(t),Bg(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(tt(419)),s.stack="",s.digest=i,Ol({value:s,source:null,stack:null})),lu(e,t,o)}if(We||$a(e,t,o,!1),i=(o&e.childLanes)!==0,We||i){if(ga.current!==null)return lu(e,t,o);if(i=ye,i!==null&&(s=cx(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,cr(e,s),Bn(i,e,s),bg;return Fm(a)||oh(),lu(e,t,o)}return Fm(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,we=gi(a.nextSibling),sn=t,kt=!0,aa=null,mi=!1,e!==null&&Hx(t,e),t=Eg(t,s.children),t.flags|=134221824,t)}function oy(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),bu(e.return,t,n)}function ly(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Ju(n)===null&&(t=e),e=e.sibling}return t}function cu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function xp(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function mm(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=hn.current;if(t.flags&128)return Pl(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Pl(t,r),s==="backwards"&&e!==null?(xp(e),Ze(e,t,i,n),xp(e)):Ze(e,t,i,n),i=kt?Ll:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oy(e,n,t);else if(e.tag===19)oy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=ly(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,xp(t)),cu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Ju(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}cu(t,!0,n,null,a,i);break;case"together":cu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=ly(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),cu(t,!1,s,n,a,i)}return t.child}function cy(e,t,n){var i=t.pendingProps;return ta(t,t.type,i.value),Ze(e,t,i.children,n),t.child}function As(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),va|=t.lanes,(n&t.childLanes)===0)if(e!==null){if($a(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(tt(153));if(t.child!==null){for(e=t.child,n=xs(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xs(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&qu(e)))}function lA(e,t,n){switch(t.tag){case 3:zu(t,t.stateNode.containerInfo),ta(t,Xe,e.memoizedState.cache),ja();break;case 27:case 5:Gp(t);break;case 4:zu(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,am(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return la(t),t.flags|=128,null;i=$a(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?OS(e,t,n):(la(t),e=As(e,t,n),e!==null?e.sibling:null)}la(t);break;case 19:if(t.flags&128)return mm(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||($a(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return mm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Pl(t,hn.current),i)break;return null;case 22:return t.lanes=0,LS(e,t,n,t.pendingProps);case 24:ta(t,Xe,e.memoizedState.cache)}return As(e,t,n)}function IS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!Tg(e,n)&&(t.flags&128)===0)return We=!1,lA(e,t,n);We=(e.flags&131072)!==0}else We=!1,kt&&(t.flags&1048576)!==0&&Fx(t,Ll,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e=="function")ig(e)?(i=sr(e,i),t.tag=1,t=ay(null,t,e,i,n)):(t.tag=0,t=hm(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Xm){t.tag=11,t=ty(null,t,e,i,n);break t}else if(s===Wm){t.tag=14,t=ey(null,t,e,i,n);break t}else if(s===Qi){t.tag=10,t.type=e,t=cy(null,t,n);break t}}throw t=Hp(e)||e,Error(tt(306,t,""))}}return t;case 0:return hm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=sr(i,t.pendingProps),ay(e,t,i,s,n);case 3:t:{if(zu(t,t.stateNode.containerInfo),e===null)throw Error(tt(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,nm(e,t),Ml(t,i,null,n);var r=t.memoizedState;if(i=r.cache,ta(t,Xe,i),i!==a.cache&&tm(t,[Xe],n,!0),Sl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=ry(e,t,i,n);break t}else if(i!==s){s=pi(Error(tt(424)),t),Ol(s),t=ry(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,we=gi(e.firstChild),sn=t,kt=!0,aa=null,mi=!0,n=Wx(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(ja(),i===s){t=As(e,t,n);break t}Ze(e,t,i,n)}t=t.child}return t;case 26:return Ur(e,t),e===null?(n=Py(t.type,null,t.pendingProps,null))?t.memoizedState=n:kt||(t.stateNode=EM(t.type,t.pendingProps,sa.current,t)):t.memoizedState=Py(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gp(t),e===null&&kt&&(i=t.stateNode=OM(t.type,t.pendingProps,sa.current),sn=t,mi=!0,s=we,xa(t.type)?(Hm=s,we=gi(i.firstChild)):we=s),Ze(e,t,t.pendingProps.children,n),Ur(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&kt&&((s=i=we)&&(i=tw(i,t.type,t.pendingProps,mi),i!==null?(t.stateNode=i,sn=t,we=gi(i.firstChild),mi=!1,s=!0):s=!1),s||ma(t)),Gp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Pm(s,a)?i=null:r!==null&&Pm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=fg(e,t,QT,null,null,n),po._currentValue=s),Ur(e,t),Ze(e,t,i,n),t.child;case 6:return e===null&&kt&&((e=n=we)&&(n=ew(n,t.pendingProps,mi),n!==null?(t.stateNode=n,sn=t,we=null,e=!0):e=!1),e||ma(t)),null;case 13:return OS(e,t,n);case 4:return zu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=nr(t,null,i,n):Ze(e,t,i,n),t.child;case 11:return ty(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Ur(e,t),Ze(e,t,i,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:return cy(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,tr(t),s=cn(s),i=i(s),t.flags|=1,Ze(e,t,i,n),t.child;case 14:return ey(e,t,t.type,t.pendingProps,n);case 15:return US(e,t,t.type,t.pendingProps,n);case 19:return mm(e,t,n);case 31:return rA(e,t,n);case 22:return LS(e,t,n,t.pendingProps);case 24:return tr(t),i=cn(Xe),e===null?(s=rg(),s===null&&(s=ye,a=ag(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},lg(t),ta(t,Xe,s)):((e.lanes&n)!==0&&(nm(e,t),Ml(t,null,null,n),Sl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ta(t,Xe,i)):(i=a.cache,ta(t,Xe,i),i!==s.cache&&tm(t,[Xe],n,!0))),Ze(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:kt&&yh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Ur(e,t),Ze(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(tt(156,t.tag))}function _s(e){e.flags|=4}function Sp(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Fy(t,i):Fy(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(uM())e.flags|=8192;else throw Ka=Yu,og}else e.flags&=-16777217}function uy(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zM(t))if(uM())e.flags|=8192;else throw Ka=Yu,og}function uu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?rx():536870912,e.lanes|=t,oo|=t)}function ol(e,t){if(!kt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function cA(e,t,n){var i=t.pendingProps;switch(sg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ae(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ss(Xe),io(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Nr(t)?_s(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,gp())),Ae(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(_s(t),a!==null?(Ae(t),uy(t,a)):(Ae(t),Sp(t,s,null,i,n))):a?a!==e.memoizedState?(_s(t),Ae(t),uy(t,a)):(Ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&_s(t),Ae(t),Sp(t,s,e,i,n)),null;case 27:if(Fu(t),n=sa.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&_s(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return Ae(t),t.subtreeFlags&=-33554433,null}e=es.current,Nr(t)?Bv(t,e):(e=OM(s,i,n),t.stateNode=e,_s(t))}return Ae(t),t.subtreeFlags&=-33554433,null;case 5:if(Fu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&_s(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return Ae(t),t.subtreeFlags&=-33554433,null}if(a=es.current,Nr(t))Bv(t,a);else{var r=Hl(sa.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[ln]=t,a[Fn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(fn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&_s(t)}}return Ae(t),t.subtreeFlags&=-33554433,Sp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&_s(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(tt(166));if(e=sa.current,Nr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=sn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[ln]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||MM(e.nodeValue,n)),e||ma(t,!0)}else e=Hl(e).createTextNode(i),e[ln]=t,t.stateNode=e}return Ae(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Nr(t),n!==null){if(e===null){if(!i)throw Error(tt(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(557));e[ln]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),e=!1}else n=gp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Xn(t),t):(Xn(t),null);if((t.flags&128)!==0)throw Error(tt(558))}return Ae(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Nr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(tt(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(tt(317));s[ln]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),s=!1}else s=gp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Xn(t),t):(Xn(t),null)}return Xn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),uu(t,t.updateQueue),Ae(t),null);case 4:return io(),e===null&&Og(t.stateNode.containerInfo),t.flags|=67108864,Ae(t),null;case 10:return Ss(t.type),Ae(t),null;case 19:if(ug(t),i=t.memoizedState,i===null)return Ae(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)ol(i,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Ju(e),a!==null){for(t.flags|=128,ol(i,!1),e=a.updateQueue,t.updateQueue=e,uu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Bx(n,e),n=n.sibling;return Pl(t,hn.current&1|2),kt&&vs(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Yn()>ah&&(t.flags|=128,s=!0,ol(i,!1),t.lanes=4194304)}else{if(!s)if(e=Ju(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,uu(t,e),ol(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!kt)return Ae(t),null}else 2*Yn()-i.renderingStartTime>ah&&n!==536870912&&(t.flags|=128,s=!0,ol(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Yn(),e.sibling=null,a=hn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||kt?Pl(t,a):(n=a,Ce(dn,t),Ce(hn,n),_n===null&&(_n=t)),kt&&vs(t,i.treeForkCount),e}return Ae(t),null;case 22:case 23:return Xn(t),cg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),n=t.updateQueue,n!==null&&uu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&un(Ja),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ss(Xe),Ae(t),null;case 25:return null;case 30:return t.flags|=33554432,Ae(t),null}throw Error(tt(156,t.tag))}function uA(e,t){switch(sg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ss(Xe),io(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Fu(t),null;case 31:if(t.memoizedState!==null){if(Xn(t),t.alternate===null)throw Error(tt(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Xn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(tt(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ug(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return io(),null;case 10:return Ss(t.type),null;case 22:case 23:return Xn(t),cg(),e!==null&&un(Ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ss(Xe),null;case 25:return null;default:return null}}function PS(e,t){switch(sg(t),t.tag){case 3:Ss(Xe),io();break;case 26:case 27:case 5:Fu(t);break;case 4:io();break;case 31:t.memoizedState!==null&&Xn(t);break;case 13:Xn(t);break;case 19:ug(t);break;case 10:Ss(t.type);break;case 22:case 23:Xn(t),cg(),e!==null&&un(Ja);break;case 24:Ss(Xe)}}function $l(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){pe(t,t.return,o)}}function _a(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){pe(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){pe(t,t.return,h)}}function BS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Yx(t,n)}catch(i){pe(e,e.return,i)}}}function zS(e,t,n){n.props=sr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){pe(e,t,i)}}function Ji(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=bs(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=CM(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new jn(e);zn(e.child,!1,jA,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){pe(e,t,o)}}function on(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){pe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){pe(e,t,s)}else n.current=null}function th(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)UM(e.stateNode,t[n])}function hy(e){for(var t=e.return;t!==null&&(wg(t)&&UM(e.stateNode,t.stateNode),!Ag(t));)t=t.return}function Tl(e){for(var t=e.return;t!==null&&(wg(t)&&$A(e.stateNode,t.stateNode),!Ag(t));)t=t.return}function Ag(e){return e.tag===5||e.tag===3||e.tag===27}function wg(e){return e&&e.tag===7&&e.stateNode!==null}function gm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){pe(e,e.return,s)}}function Mp(e,t,n){try{var i=e.stateNode;OA(i,e.type,n,t),i[Fn]=t}catch(s){pe(e,e.return,s)}}function FS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xa(e.type)||e.tag===4}function bp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||FS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _m(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ji)),th(e,i),ne=!0;else if(s!==4&&(s===27&&(th(e,i),i=null,xa(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(_m(e,t,n,i),e=e.sibling;e!==null;)_m(e,t,n,i),e=e.sibling}function eh(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),th(e,i),ne=!0;else if(s!==4&&(s===27&&(th(e,i),i=null,xa(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(eh(e,t,n,i),e=e.sibling;e!==null;)eh(e,t,n,i),e=e.sibling}function HS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);fn(t,i,n),t[ln]=e,t[Fn]=n}catch(a){pe(e,e.return,a)}}var nh=!1,Wn=null;function fy(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(nh=!0)}var Ki=null;function dy(){var e=Ki;return Ki=null,e}var In=0;function xo(e,t,n,i,s){return In=0,VS(e.child,t,n,i,s)}function VS(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=Bm(r);i.push(o),o.view&&(a=!0)}else a||Bm(r).view&&(a=!0);nh=!0,TM(r,In===0?t:t+"_"+In,n),In++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||VS(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function is(e,t){for(;e!==null;)e.tag===5?AM(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||is(e.child,t)),e=e.sibling}function Cu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Cu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(tt(544));var n=t.name;t=Rs(t.default,t.share),t!=="none"&&(xo(e,n,t,null,!1)||is(e.child,!1))}e=e.sibling}}function vm(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=bs(i,n),a=Rs(i.default,n.paired?i.share:i.enter);a!=="none"?xo(e,s,a,null,!1)?(Cu(e),n.paired||t||lo(e,i.onEnter)):is(e.child,!1):Cu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)vm(e,t),e=e.sibling;else Cu(e)}function ym(e){if(Wn!==null&&Wn.size!==0){var t=Wn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=Rs(n.default,n.share);if(a!=="none"&&(xo(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,lo(e,n.onShare)):is(e.child,!1)),t.delete(i),t.size===0)break}}}ym(e)}e=e.sibling}}}function xm(e){if(e.tag===30){var t=e.memoizedProps,n=bs(t,e.stateNode),i=Wn!==null?Wn.get(n):void 0,s=Rs(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(xo(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,Wn.delete(n),lo(e,t.onShare)):lo(e,t.onExit):is(e.child,!1)),Wn!==null&&ym(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)xm(e),e=e.sibling;else Wn!==null&&ym(e)}function GS(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=bs(t,e.stateNode);t=Rs(t.default,t.update),e.flags&=-5,t!=="none"&&xo(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&GS(e);e=e.sibling}}function Sm(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,is(e.child,!1))}Sm(e)}e=e.sibling}}function Ru(e){if(e.tag===30)e.stateNode.paired=null,is(e.child,!1),Sm(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ru(e),e=e.sibling;else Sm(e)}function kS(e){for(e=e.child;e!==null;)e.tag===30?is(e.child,!1):(e.subtreeFlags&33554432)!==0&&kS(e),e=e.sibling}function Cg(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&In<a.length){var c=a[In],h=Bm(l);(c.view||h.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(h.clip)p=!0;else{p=c.rect;var u=h.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&TM(l,In===0?n:n+"_"+In,s),o&&(e.flags&4)!==0||(Ki===null&&(Ki=[]),Ki.push(l,In===0?i:i+"_"+In,t.memoizedProps)),In++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Cg(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function XS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=bs(n,i),a=Rs(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(HA)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;In=0,s=Cg(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||lo(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&XS(e,t);e=e.sibling}}var tn=!1,le=!1,qi=!1,Ep=!1,py=typeof WeakSet=="function"?WeakSet:Set,en=null,Yi=!1,ml=!1,ih=!1,Mm=!1;function hA(e,t,n){if(e=e.containerInfo,Om=mo,e=Rx(e),tg(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,h=0,p=0,u=e,d=null;e:for(;;){for(var g;u!==i||a!==0&&u.nodeType!==3||(l=o+a),u!==r||s!==0&&u.nodeType!==3||(c=o+s),u.nodeType===3&&(o+=u.nodeValue.length),(g=u.firstChild)!==null;)d=u,u=g;for(;;){if(u===e)break e;if(d===i&&++h===a&&(l=o),d===r&&++p===s&&(c=o),(g=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=g}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Im={focusedElem:e,selectionRange:i},mo=!1,n=(n&335544064)===n,en=t,t=n?9270:1024;en!==null;){if(e=en,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&xm(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&fy(e),hu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&xm(i),hu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&fy(e),hu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,en=i):(n&&GS(e),hu(n))}}Wn=null}function hu(e){for(;en!==null;){var t=en,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=sr(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){pe(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)zm(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":zm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=bs(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=Rs(s.default,s.update),s!=="none"&&xo(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(tt(163))}if(i=t.sibling,i!==null){i.return=t.return,en=i;break}en=t.return}}function WS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Zi(e,n),i&4&&$l(5,n);break;case 1:if(Zi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){pe(n,n.return,r)}else{var s=sr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){pe(n,n.return,r)}}i&64&&BS(n),i&512&&Ji(n,n.return);break;case 3:if(Zi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Yx(e,t)}catch(r){pe(n,n.return,r)}}break;case 27:t===null&&i&4&&HS(n);case 26:case 5:Zi(e,n),t===null&&i&4&&gm(n),i&512&&Ji(n,n.return);break;case 12:Zi(e,n);break;case 31:Zi(e,n),i&4&&JS(e,n);break;case 13:Zi(e,n),i&4&&KS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=bA.bind(null,n),nw(e,n))));break;case 22:if(i=n.memoizedState!==null||tn,!i){var a=t!==null&&t.memoizedState!==null||le;t=tn,s=le,tn=i,(le=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Ai(e,n,i)):Zi(e,n),tn=t,le=s}break;case 30:Zi(e,n),i&512&&Ji(n,n.return);break;case 7:i&512&&Ji(n,n.return);default:Zi(e,n)}}function bm(e,t){for(e=e.child;e!==null;)qS(e,t),e=e.sibling}function qS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){pe(e,e.return,l)}Em(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,ne=!0}catch(l){pe(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Ny(o,!0):Ny(e.stateNode,!1)}catch(l){pe(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&bm(e,t);break;default:bm(e,t)}}function Em(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:qS(n,i);break t;case 22:n.memoizedState===null&&Em(n,i);break t;default:Em(n,i)}}e=e.sibling}}function YS(e){var t=e.alternate;t!==null&&(e.alternate=null,YS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&dh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,Ln=!1;function Ti(e,t,n){for(n=n.child;n!==null;)ZS(e,t,n),n=n.sibling}function ZS(e,t,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(ql,n)}catch{}switch(n.tag){case 26:le||on(n,t),Ti(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!le&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:le||on(n,t),Tl(n);var i=Le,s=Ln;xa(n.type)&&(Le=n.stateNode,Ln=!1),Ti(e,t,n),IM(n.stateNode,n.type,n.memoizedProps),Le=i,Ln=s;break;case 5:le||on(n,t),Tl(n);case 6:if(n.tag===6&&Tl(n),i=Le,s=Ln,Le=null,Ti(e,t,n),Le=i,Ln=s,Le!==null)if(Ln)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(n.stateNode),ne=!0}catch(a){pe(n,t,a)}else try{Le.removeChild(n.stateNode),ne=!0}catch(a){pe(n,t,a)}break;case 18:Le!==null&&(Ln?(e=Le,Ry(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),go(e)):Ry(Le,n.stateNode));break;case 4:i=Le,s=Ln,Le=n.stateNode.containerInfo,Ln=!0,Ti(e,t,n),Le=i,Ln=s;break;case 0:case 11:case 14:case 15:_a(2,n,t),le||_a(4,n,t),Ti(e,t,n);break;case 1:le||(on(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&zS(n,t,i)),Ti(e,t,n);break;case 21:Ti(e,t,n);break;case 22:le=(i=le)||n.memoizedState!==null,Ti(e,t,n),le=i;break;case 30:on(n,t),Ti(e,t,n);break;case 7:le||on(n,t),Ti(e,t,n);break;default:Ti(e,t,n)}}function JS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{go(e)}catch(n){pe(t,t.return,n)}}}function KS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{go(e)}catch(n){pe(t,t.return,n)}}function fA(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new py),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new py),t;default:throw Error(tt(435,e.tag))}}function fu(e,t){var n=fA(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=EA.bind(null,e,i);i.then(s,s)}})}function En(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(xa(l.type)){Le=l.stateNode,Ln=!1;break t}break;case 5:Le=l.stateNode,Ln=!1;break t;case 3:case 4:Le=l.stateNode.containerInfo,Ln=!0;break t}l=l.return}if(Le===null)throw Error(tt(160));ZS(r,o,a),Le=null,Ln=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)QS(t,e,n),t=t.sibling}var wi=null;function QS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}En(t,e,n),Tn(e),s&4&&(_a(3,e,e.return),$l(3,e),_a(5,e,e.return));break;case 1:En(t,e,n),Tn(e),s&512&&(le||i===null||on(i,i.return)),s&64&&tn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=wi,En(t,e,n),Tn(e),s&512&&(le||i===null||on(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(tn)e.stateNode=EM(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Jl]||i[ln]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),fn(i,t,n),i[ln]=e,nn(i),t=i;break t;case"link":if(a=zy("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),fn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=zy("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),fn(i,t,n),s.head.appendChild(i);break;default:throw Error(tt(468,t))}i[ln]=e,nn(i),t=i}e.stateNode=t}else tn||Vm(a,e.type,e.stateNode);else e.stateNode=By(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||le||t.parentNode.removeChild(t)):s.count--,n===null?tn||Vm(a,e.type,e.stateNode):By(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Mp(e,e.memoizedProps,i.memoizedProps);break;case 27:En(t,e,n),Tn(e),s&512&&(le||i===null||on(i,i.return)),i!==null&&s&4&&Mp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=qi,qi=!1,En(t,e,n),qi=a,Tn(e),s&512&&(le||i===null||on(i,i.return)),e.flags&32){t=e.stateNode;try{ao(t,""),ne=!0}catch(h){pe(e,e.return,h)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Mp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Ep=!0);break;case 6:if(En(t,e,n),Tn(e),s&4){if(e.stateNode===null)throw Error(tt(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,ne=!0}catch(h){pe(e,e.return,h)}}break;case 3:if(ne=!1,Lu=null,a=wi,wi=Vl(t.containerInfo),En(t,e,n),wi=a,Tn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{go(t.containerInfo)}catch(h){pe(e,e.return,h)}Ep&&(Ep=!1,jS(e)),ne=!1;break;case 4:s=qi,qi=tn,i=xv(),a=wi,wi=Vl(e.stateNode.containerInfo),En(t,e,n),Tn(e),wi=a,ne&&ml&&(ih=!0),ne=i,qi=s;break;case 12:En(t,e,n),Tn(e);break;case 31:En(t,e,n),Tn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,fu(e,t)));break;case 13:En(t,e,n),Tn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Ah=Yn()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,fu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=tn,l=le,c=qi;tn=o||a,qi=c||a,le=l||r,En(t,e,n),le=l,qi=c,tn=o,Tn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||tn||le||(t=r||le,n=tn,i=le,tn=a||tn,le=t,Zs(e,2),tn=n,le=i),!a&&qi||bm(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,fu(e,n))));break;case 19:En(t,e,n),Tn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,fu(e,t)));break;case 30:s&512&&(le||i===null||on(i,i.return)),s=xv(),a=ml,r=(n&335544064)===n,o=e.memoizedProps,ml=r&&Rs(o.default,o.update)!=="none",En(t,e,n),Tn(e),r&&i!==null&&ne&&(e.flags|=4),ml=a,ne=s;break;case 21:break;case 7:s&512&&(le||i===null||on(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:En(t,e,n),Tn(e)}}function Tn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(FS(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(wg(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(Ag(s))break;s=s.return}var r=i;if(n==null)throw Error(tt(160));switch(n.tag){case 27:var o=n.stateNode,l=bp(e);eh(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(ao(c,""),n.flags&=-33);var h=bp(e);eh(e,h,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=bp(e);_m(e,u,p,r);break;default:throw Error(tt(161))}}catch(d){pe(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;jS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,mo=!0,t.reset(),mo=!1),e=e.sibling}}function Dr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)$S(t,e),t=t.sibling;else XS(t,!1)}function $S(e,t){var n=e.alternate;if(n===null)vm(e,!1);else switch(e.tag){case 3:if(Mm=Yi=!1,dy(),Dr(t,e),!Yi&&!ih){if(e=Ki,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];AM(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Mm=!0}Ki=null;break;case 5:Dr(t,e);break;case 4:i=Yi,Yi=!1,Dr(t,e),Yi&&(ih=!0),Yi=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?vm(e,!1):Dr(t,e));break;case 30:i=Yi,s=dy(),Yi=!1,Dr(t,e),Yi&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=bs(a,r),r=bs(n.memoizedProps,r);var o=Rs(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,In=0,t=Cg(e,n,t,r,o,a,!0),In!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(lo(e,e.memoizedProps.onUpdate),Ki=s):s!==null&&(s.push.apply(s,Ki),Ki=s),Yi=(e.flags&32)!==0?!0:i;break;default:Dr(t,e)}}function Zi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)WS(e,t.alternate,t),t=t.sibling}function Zs(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),Zs(n,i);break;case 1:on(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&zS(n,n.return,s),Zs(n,i);break;case 27:(i&2)!==0&&IM(n.stateNode,n.type,n.memoizedProps);case 5:on(n,n.return),n.tag!==5&&n.tag!==27||Tl(n),Zs(n,i);break;case 6:Tl(n);break;case 26:on(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||le||s.parentNode.removeChild(s),Zs(n,i);break;case 22:n.memoizedState===null&&Zs(n,i);break;case 30:on(n,n.return),Zs(n,i);break;case 7:on(n,n.return);default:Zs(n,i)}e=e.sibling}}function Ai(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Ai(s,a,n),$l(4,a);break;case 1:if(Ai(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(h){pe(i,i.return,h)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)qx(c[s],l)}catch(h){pe(i,i.return,h)}}o&&r&64&&BS(a),Ji(a,a.return);break;case 27:(n&2)!==0&&HS(a);case 5:a.tag!==5&&a.tag!==27||hy(a),Ai(s,a,n),o&&i===null&&r&4&&gm(a),Ji(a,a.return);break;case 6:hy(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||tn||Vm(Vl(l.ownerDocument),a.type,l),Ai(s,a,n),o&&i===null&&r&4&&gm(a),Ji(a,a.return);break;case 12:Ai(s,a,n);break;case 31:Ai(s,a,n),o&&r&4&&JS(s,a);break;case 13:Ai(s,a,n),o&&r&4&&KS(s,a);break;case 22:a.memoizedState===null&&Ai(s,a,n),Ji(a,a.return);break;case 30:Ai(s,a,n),Ji(a,a.return);break;case 7:Ji(a,a.return);default:Ai(s,a,n)}t=t.sibling}}function Rg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ql(n))}function Ng(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ql(e))}function ci(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)tM(e,t,n,i),t=t.sibling;else s&&kS(t)}function tM(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Ru(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:ci(e,t,n,i),a&2048&&$l(9,t);break;case 1:ci(e,t,n,i);break;case 3:ci(e,t,n,i),s&&Mm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ql(a)));break;case 12:if(a&2048){ci(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){pe(t,t.return,c)}}else ci(e,t,n,i);break;case 31:ci(e,t,n,i);break;case 13:ci(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&Ru(o),r._visibility&2?ci(e,t,n,i):Al(e,t)):(s&&o!==null&&o.memoizedState!==null&&Ru(t),r._visibility&2?ci(e,t,n,i):(r._visibility|=2,Lr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&Rg(o,t);break;case 24:ci(e,t,n,i),a&2048&&Ng(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(is(a.child,!0),is(t.child,!0))),ci(e,t,n,i);break;default:ci(e,t,n,i)}}function Lr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Lr(a,r,o,l,s),$l(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?Lr(a,r,o,l,s):Al(a,r):(h._visibility|=2,Lr(a,r,o,l,s)),s&&c&2048&&Rg(r.alternate,r);break;case 24:Lr(a,r,o,l,s),s&&c&2048&&Ng(r.alternate,r);break;default:Lr(a,r,o,l,s)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Al(n,i),s&2048&&Rg(i.alternate,i);break;case 24:Al(n,i),s&2048&&Ng(i.alternate,i);break;default:Al(n,i)}t=t.sibling}}var Xa=8192;function Va(e,t,n){if(e.subtreeFlags&Xa)for(e=e.child;e!==null;)eM(e,t,n),e=e.sibling}function eM(e,t,n){switch(e.tag){case 26:Va(e,t,n),e.flags&Xa&&(e.memoizedState!==null?gw(n,wi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Hy(n,e)));break;case 5:Va(e,t,n),e.flags&Xa&&(e=e.stateNode,(t&335544128)===t&&Hy(n,e));break;case 3:case 4:var i=wi;wi=Vl(e.stateNode.containerInfo),Va(e,t,n),wi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Xa,Xa=16777216,Va(e,t,n),Xa=i):Va(e,t,n));break;case 30:if((e.flags&Xa)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,Wn===null&&(Wn=new Map),Wn.set(i,s)}Va(e,t,n);break;default:Va(e,t,n)}}function nM(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ll(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];en=i,sM(i,e)}nM(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)iM(e),e=e.sibling}function iM(e){switch(e.tag){case 0:case 11:case 15:ll(e),e.flags&2048&&_a(9,e,e.return);break;case 3:ll(e);break;case 12:ll(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Nu(e)):ll(e);break;default:ll(e)}}function Nu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];en=i,sM(i,e)}nM(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:_a(8,t,t.return),Nu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Nu(t));break;default:Nu(t)}e=e.sibling}}function sM(e,t){for(;en!==null;){var n=en;switch(n.tag){case 0:case 11:case 15:_a(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ql(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,en=i;else t:for(n=e;en!==null;){i=en;var s=i.sibling,a=i.return;if(YS(i),i===n){en=null;break t}if(s!==null){s.return=a,en=s;break t}en=a}}}var dA={getCacheForType:function(e){var t=cn(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return cn(Xe).controller.signal}},pA=typeof WeakMap=="function"?WeakMap:Map,ie=0,ye=null,Zt=null,jt=0,fe=0,Gn=null,ea=!1,So=!1,Dg=!1,ws=0,ze=0,va=0,Qa=0,sh=0,qn=0,oo=0,wl=null,On=null,Tm=!1,Ah=0,aM=0,ah=1/0,rh=null,ua=null,Oe=0,Ri=null,ar=null,ns=0,Am=0,wm=null,rM=null,to=null,eo=null,no=null,Cl=0,Du=null;function Kn(){return(ie&2)!==0&&jt!==0?jt&-jt:Lt.T!==null?Lg():ux()}function oM(){if(qn===0)if((jt&536870912)===0||kt){var e=$c;$c<<=1,($c&3932160)===0&&($c=262144),qn=e}else qn=536870912;return e=dn.current,e!==null&&(e.flags|=32),qn}function lo(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=CM(bs(e.memoizedProps,n))),eo===null&&(eo=[]),eo.push(t.bind(null,i))}}function Bn(e,t,n){(e===ye&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(co(e,0),na(e,jt,qn,!1)),Zl(e,n),((ie&2)===0||e!==ye)&&(e===ye&&((ie&2)===0&&(Qa|=n),ze===4&&na(e,jt,qn,!1)),as(e))}function lM(e,t,n){if((ie&6)!==0)throw Error(tt(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Yl(e,t),s=i?_A(e,t):Tp(e,t,!0),a=i;do{if(s===0){So&&!i&&na(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!mA(n)){s=Tp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=wl;var l=o.current.memoizedState.isDehydrated;if(l&&(co(o,r).flags|=256),r=Tp(o,r,!1),r!==2&&r!==6){if(Dg&&!l){o.errorRecoveryDisabledLanes|=a,Qa|=a,s=4;break t}a=On,On=s,a!==null&&(On===null?On=a:On.push.apply(On,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){co(e,0),na(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(tt(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:na(i,t,qn,!ea);break t;case 2:On=null;break;case 3:case 5:break;default:throw Error(tt(329))}if((t&62914560)===t&&(s=Ah+300-Yn(),10<s)){if(na(i,t,qn,!ea),fh(i,0,!0)!==0)break t;ns=t,i.timeoutHandle=Ig(my.bind(null,i,n,On,rh,Tm,t,qn,Qa,oo,ea,a,"Throttled",-0,0),s);break t}my(i,n,On,rh,Tm,t,qn,Qa,oo,ea,a,null,-0,0)}}break}while(!0);as(e)}function my(e,t,n,i,s,a,r,o,l,c,h,p,u,d){e.timeoutHandle=-1;var g=t.subtreeFlags,E=(a&335544064)===a;if(p=null,(E||g&8192||(g&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Wn=null,eM(t,a,p),E&&(g=p,E=e.containerInfo,E=(E.nodeType===9?E:E.ownerDocument).__reactViewTransition,E!=null&&(g.count++,g.waitingForViewTransition=!0,g=Gl.bind(g),E.finished.then(g,g))),g=(a&62914560)===a?Ah-Yn():(a&4194048)===a?aM-Yn():0,g=_w(p,g),g!==null)){ns=a,e.cancelPendingCommit=g(_y.bind(null,e,t,a,n,i,s,r,o,l,c,h,p,null,u,d)),na(e,a,r,!c);return}_y(e,t,a,n,i,s,r,o,l,c,h,p)}function mA(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Qn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t,n,i){t=ax(e,t),t&=~sh,t&=~Qa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Jn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&ox(e,n,t)}function wh(){return(ie&6)===0?(tc(0,!1),!1):!0}function Ug(){if(Zt!==null){if(fe===0)var e=Zt.return;else e=Zt,ys=ur=null,mg(e),Qr=null,Il=0,e=Zt;for(;e!==null;)PS(e.alternate,e),e=e.return;Zt=null}}function co(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,BA(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ns=0,Ug(),ye=e,Zt=n=xs(e.current,null),jt=t,fe=0,Gn=null,ea=!1,So=Yl(e,t),Dg=!1,oo=qn=sh=Qa=va=ze=0,On=wl=null,Tm=!1,ws=ax(e,t),_h(),n}function cM(e,t){Ht=null,Lt.H=ju,t===yo||t===xh?(t=Gv(),fe=3):t===og?(t=Gv(),fe=4):fe=t===bg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gn=t,Zt===null&&(ze=1,$u(e,pi(t,e.current)))}function uM(){var e=dn.current;return e===null?!0:(jt&4194048)===jt?_n===null:(jt&62914560)===jt||(jt&536870912)!==0?e===_n:!1}function hM(){var e=Lt.H;return Lt.H=ju,e===null?ju:e}function fM(){var e=Lt.A;return Lt.A=dA,e}function oh(){ze=4,ea||(jt&4194048)!==jt&&dn.current!==null||(So=!0),(va&134217727)===0&&(Qa&134217727)===0||ye===null||na(ye,jt,qn,!1)}function Tp(e,t,n){var i=ie;ie|=2;var s=hM(),a=fM();(ye!==e||jt!==t)&&(rh=null,co(e,t)),t=!1;var r=ze;t:do try{if(fe!==0&&Zt!==null){var o=Zt,l=Gn;switch(fe){case 8:Ug(),r=6;break t;case 3:case 2:case 9:case 6:dn.current===null&&(t=!0);var c=fe;if(fe=0,Gn=null,qr(e,o,l,c),n&&So){r=0;break t}break;default:c=fe,fe=0,Gn=null,qr(e,o,l,c)}}gA(),r=ze;break}catch(h){cM(e,h)}while(!0);return t&&e.shellSuspendCounter++,ys=ur=null,ie=i,Lt.H=s,Lt.A=a,Zt===null&&(ye=null,jt=0,_h()),r}function gA(){for(;Zt!==null;)dM(Zt)}function _A(e,t){var n=ie;ie|=2;var i=hM(),s=fM();ye!==e||jt!==t?(rh=null,ah=Yn()+500,co(e,t)):So=Yl(e,t);t:do try{if(fe!==0&&Zt!==null){t=Zt;var a=Gn;e:switch(fe){case 1:fe=0,Gn=null,qr(e,t,a,1);break;case 2:case 9:if(Vv(a)){fe=0,Gn=null,gy(t);break}t=function(){fe!==2&&fe!==9||ye!==e||(fe=7),as(e)},a.then(t,t);break t;case 3:fe=7;break t;case 4:fe=5;break t;case 7:Vv(a)?(fe=0,Gn=null,gy(t)):(fe=0,Gn=null,qr(e,t,a,7));break;case 5:var r=null;switch(Zt.tag){case 26:r=Zt.memoizedState;case 5:case 27:var o=Zt;if(r?zM(r):o.stateNode.complete){fe=0,Gn=null;var l=o.sibling;if(l!==null)Zt=l;else{var c=o.return;c!==null?(Zt=c,Ch(c)):Zt=null}break e}}fe=0,Gn=null,qr(e,t,a,5);break;case 6:fe=0,Gn=null,qr(e,t,a,6);break;case 8:Ug(),ze=6;break t;default:throw Error(tt(462))}}vA();break}catch(h){cM(e,h)}while(!0);return ys=ur=null,Lt.H=i,Lt.A=s,ie=n,Zt!==null?0:(ye=null,jt=0,_h(),ze)}function vA(){for(;Zt!==null&&!IE();)dM(Zt)}function dM(e){var t=IS(e.alternate,e,ws);e.memoizedProps=e.pendingProps,t===null?Ch(e):Zt=t}function gy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=sy(n,t,t.pendingProps,t.type,void 0,jt);break;case 11:t=sy(n,t,t.pendingProps,t.type.render,t.ref,jt);break;case 5:mg(t);var i=t;i===sn&&(kt?(Wu(i),i.tag===5&&i.stateNode!=null&&(we=i.stateNode)):(Wu(i),kt=!0));default:PS(n,t),t=Zt=Bx(t,ws),t=IS(n,t,ws)}e.memoizedProps=e.pendingProps,t===null?Ch(e):Zt=t}function qr(e,t,n,i){ys=ur=null,mg(t),Qr=null,Il=0;var s=t.return;try{if(aA(e,s,t,n,jt)){ze=1,$u(e,pi(n,e.current)),Zt=null;return}}catch(a){if(s!==null)throw Zt=s,a;ze=1,$u(e,pi(n,e.current)),Zt=null;return}t.flags&32768?(kt||i===1?e=!0:So||(jt&536870912)!==0?e=!1:(ea=e=!0,(i===2||i===9||i===3||i===6)&&(i=dn.current,i!==null&&i.tag===13&&(i.flags|=16384))),pM(t,e)):Ch(t)}function Ch(e){var t=e;do{if((t.flags&32768)!==0){pM(t,ea);return}e=t.return;var n=cA(t.alternate,t,ws);if(n!==null){Zt=n;return}if(t=t.sibling,t!==null){Zt=t;return}Zt=t=e}while(t!==null);ze===0&&(ze=5)}function pM(e,t){do{var n=uA(e.alternate,e);if(n!==null){n.flags&=32767,Zt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Zt=e;return}Zt=e=n}while(e!==null);ze=6,Zt=null}function _y(e,t,n,i,s,a,r,o,l,c,h,p){e.cancelPendingCommit=null;do Rh();while(Oe!==0);if((ie&6)!==0)throw Error(tt(327));if(t!==null){if(t===e.current)throw Error(tt(177));e===ye&&(Zt=ye=null,jt=0),ar=t,Ri=e,ns=n,wm=s,rM=i,yA(e,t,n,r,o,l,p)}}function yA(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(Am=o,o|=eg,WE(e,n,o,i,s,a),eo=null,(n&335544064)===n?(no=YT(e),i=10262):(no=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,TA(Hu,function(){return Dm(),null})):(e.callbackNode=null,e.callbackPriority=0),nh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Lt.T,Lt.T=null,s=se.p,se.p=2,a=ie,ie|=4;try{hA(e,t,n)}finally{ie=a,se.p=s,Lt.T=i}}Oe=1,nh?to=kA(r,e.containerInfo,no,Cm,Rm,SA,Nm,Dm,xA,null,null):(Cm(),Rm(),Nm())}function xA(e){if(Oe!==0){var t=Ri.onRecoverableError;t(e,{componentStack:null})}}function SA(){Oe===3&&(Oe=0,$S(ar,Ri),Oe=4)}function Cm(){if(Oe===1){Oe=0;var e=Ri,t=ar,n=ns,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Lt.T,Lt.T=null;var s=se.p;se.p=2;var a=ie;ie|=4;try{ml=ih=!1,QS(t,e,n),n=Im;var r=Rx(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Cx(o.ownerDocument.documentElement,o)){if(l!==null&&tg(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),g=o.textContent.length,E=Math.min(l.start,g),m=l.end===void 0?E:Math.min(l.end,g);!d.extend&&E>m&&(r=m,m=E,E=r);var f=Lv(o,E),_=Lv(o,m);if(f&&_&&(d.rangeCount!==1||d.anchorNode!==f.node||d.anchorOffset!==f.offset||d.focusNode!==_.node||d.focusOffset!==_.offset)){var S=p.createRange();S.setStart(f.node,f.offset),d.removeAllRanges(),E>m?(d.addRange(S),d.extend(_.node,_.offset)):(S.setEnd(_.node,_.offset),d.addRange(S))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}mo=!!Om,Im=Om=null}finally{ie=a,se.p=s,Lt.T=i}}e.current=t,Oe=2}}function Rm(){if(Oe===2){Oe=0;var e=Ri,t=ar,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Lt.T,Lt.T=null;var i=se.p;se.p=2;var s=ie;ie|=4;try{WS(e,t.alternate,t)}finally{ie=s,se.p=i,Lt.T=n}}Oe=3}}function Nm(){if(Oe===4||Oe===3){Oe=0;var e=to;to=null,PE();var t=Ri,n=ar,i=ns,s=rM,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Oe=5:(Oe=0,ar=Ri=null,mM(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(ua=null),Zm(i),n=n.stateNode,Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(ql,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Lt.T,a=se.p,se.p=2,Lt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Lt.T=n,se.p=a}}if(s=eo,r=no,no=null,s!==null&&(eo=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(ns&3)!==0&&Rh(),as(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===Du?Cl++:(Cl=0,Du=t):(Cl=0,Du=null),tc(0,!1)}}function mM(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ql(t)))}function Rh(){return to!==null&&(to.skipTransition(),to=null),Cm(),Rm(),Nm(),Dm()}function Dm(){if(Oe!==5)return!1;var e=Ri,t=Am;Am=0;var n=Zm(ns),i=Lt.T,s=se.p;try{se.p=32>n?32:n,Lt.T=null,n=wm,wm=null;var a=Ri,r=ns;if(Oe=0,ar=Ri=null,ns=0,(ie&6)!==0)throw Error(tt(331));var o=ie;if(ie|=4,iM(a.current),tM(a,a.current,r,n),ie=o,tc(0,!1),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(ql,a)}catch{}return!0}finally{se.p=s,Lt.T=i,mM(e,t)}}function vy(e,t,n){t=pi(n,t),t=um(e.stateNode,t,2),e=oa(e,t,2),e!==null&&(Zl(e,2),as(e))}function pe(e,t,n){if(e.tag===3)vy(e,e,n);else for(;t!==null;){if(t.tag===3){vy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ua===null||!ua.has(i))){e=pi(n,e),n=NS(2),i=oa(t,n,2),i!==null&&(DS(n,i,t,e),Zl(i,2),as(i));break}}t=t.return}}function Ap(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new pA;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Dg=!0,s.add(n),e=MA.bind(null,e,t,n),t.then(e,e))}function MA(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ye===e&&(jt&n)===n&&((ze===4||ze===3&&(jt&62914560)===jt&&300>Yn()-Ah)&&(ie&2)===0?co(e,0):sh|=n,oo===jt&&(oo=0)),as(e)}function gM(e,t){t===0&&(t=rx()),e=cr(e,t),e!==null&&(Zl(e,t),as(e))}function bA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gM(e,n)}function EA(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(tt(314))}i!==null&&i.delete(t),gM(e,n)}function TA(e,t){return qm(e,t)}var uo=null,Or=null,Um=!1,lh=!1,wp=!1,ia=0;function as(e){e!==Or&&e.next===null&&(Or===null?uo=Or=e:Or=Or.next=e),lh=!0,Um||(Um=!0,wA())}function tc(e,t){if(!wp&&lh){wp=!0;do for(var n=!1,i=uo;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Jn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,yy(i,a))}else a=jt,a=fh(i,i===ye?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Yl(i,a)||(n=!0,yy(i,a));i=i.next}while(n);wp=!1}}function AA(){_M()}function _M(){lh=Um=!1;var e=0;ia!==0&&PA()&&(e=ia);for(var t=Yn(),n=null,i=uo;i!==null;){var s=i.next,a=vM(i,t);a===0?(i.next=null,n===null?uo=s:n.next=s,s===null&&(Or=n)):(n=i,(e!==0||(a&3)!==0)&&(lh=!0)),i=s}Oe!==0&&Oe!==5||tc(e,!1),ia!==0&&(ia=0)}function vM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Jn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=XE(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=ye,n=jt,n=fh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ap(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Yl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&ap(i),Zm(n)){case 2:case 8:n=ix;break;case 32:n=Hu;break;case 268435456:n=sx;break;default:n=Hu}return i=yM.bind(null,e),n=qm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&ap(i),e.callbackPriority=2,e.callbackNode=null,2}function yM(e,t){if(Oe!==0&&Oe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Rh()&&e.callbackNode!==n)return null;var i=jt;return i=fh(e,e===ye?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(lM(e,i,t),vM(e,Yn()),e.callbackNode!=null&&e.callbackNode===n?yM.bind(null,e):null)}function yy(e,t){if(Rh())return null;lM(e,t,!0)}function wA(){zA(function(){(ie&6)!==0?qm(nx,AA):_M()})}function Lg(){if(ia===0){var e=er;e===0&&(e=jc,jc<<=1,(jc&261888)===0&&(jc=256)),ia=e}return ia}function xy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yu(e)}function CA(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=xy((s[Fn]||null).action),r=i.submitter;r&&(t=(t=r[Fn]||null)?xy(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new ph("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ia!==0){var l=new FormData(s,r);lm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),lm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(du=0;du<Qp.length;du++)pu=Qp[du],Sy=pu.toLowerCase(),My=pu[0].toUpperCase()+pu.slice(1),Ni(Sy,"on"+My);var pu,Sy,My,du;Ni(Dx,"onAnimationEnd");Ni(Ux,"onAnimationIteration");Ni(Lx,"onAnimationStart");Ni("dblclick","onDoubleClick");Ni("focusin","onFocus");Ni("focusout","onBlur");Ni(FT,"onTransitionRun");Ni(HT,"onTransitionStart");Ni(VT,"onTransitionCancel");Ni(Ox,"onTransitionEnd");so("onMouseEnter",["mouseout","mouseover"]);so("onMouseLeave",["mouseout","mouseover"]);so("onPointerEnter",["pointerout","pointerover"]);so("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zl));function xM(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Gu(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Gu(h)}s.currentTarget=null,a=l}}}}function Yt(e,t){var n=t[gv];n===void 0&&(n=t[gv]=new Set);var i=e+"__bubble";n.has(i)||(SM(t,e,2,!1),n.add(i))}function Cp(e,t,n){var i=0;t&&(i|=4),SM(n,e,i,t)}var mu="_reactListening"+Math.random().toString(36).slice(2);function Og(e){if(!e[mu]){e[mu]=!0,fx.forEach(function(n){n!=="selectionchange"&&(RA.has(n)||Cp(n,!1,e),Cp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mu]||(t[mu]=!0,Cp("selectionchange",!1,t))}}function SM(e,t,n,i){switch(WM(t)){case 2:var s=Sw;break;case 8:s=Mw;break;default:s=Vg}n=s.bind(null,t,n,e),s=void 0,!Yp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Rp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Wa(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}xx(function(){var c=a,h=Km(n),p=[];t:{var u=Ix.get(e);if(u!==void 0){var d=ph,g=e;switch(e){case"keypress":if(Su(n)===0)break t;case"keydown":case"keyup":d=mT;break;case"focusin":g="focus",d=hp;break;case"focusout":g="blur",d=hp;break;case"beforeblur":case"afterblur":d=hp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Ev;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=iT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=xT;break;case Dx:case Ux:case Lx:d=rT;break;case Ox:d=MT;break;case"scroll":case"scrollend":d=eT;break;case"wheel":d=ET;break;case"copy":case"cut":case"paste":d=lT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Av;break;case"submit":d=vT;break;case"toggle":case"beforetoggle":d=AT}var E=(t&4)!==0,m=!E&&(e==="scroll"||e==="scrollend"),f=E?u!==null?u+"Capture":null:u;E=[];for(var _=c,S;_!==null;){var y=_;if(S=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||S===null||f===null||(y=Nl(_,f),y!=null&&E.push(Fl(_,y,S))),m)break;_=_.return}0<E.length&&(u=new d(u,g,null,n,h),p.push({event:u,listeners:E}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",d&&n!==qp&&(g=n.relatedTarget||n.fromElement)&&(Wa(g)||g[_o]))break t;(u||d)&&(g=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=c,d=d?Wa(d):null,d!==null&&(m=Wl(d),E=d.tag,d!==m||E!==5&&E!==27&&E!==6)&&(d=null)):(u=null,d=c),u!==d&&(E=Ev,y="onMouseLeave",f="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(E=Av,y="onPointerLeave",f="onPointerEnter",_="pointer"),m=u==null?g:dl(u),S=d==null?g:dl(d),g=new E(y,_+"leave",u,n,h),g.target=m,g.relatedTarget=S,y=null,Wa(h)===c&&(E=new E(f,_+"enter",d,n,h),E.target=S,E.relatedTarget=m,y=E),m=y,E=u&&d?Op(u,d,NA):null,u!==null&&by(p,g,u,E,!1),d!==null&&m!==null&&by(p,m,d,E,!0)))}t:{if(u=c?dl(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var b=Nv;else if(Rv(u))if(Ax)b=PT;else{b=OT;var T=LT}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Jm(c.elementType)&&(b=Nv):b=IT;if(b&&(b=b(e,c))){Tx(p,b,n,h);break t}T&&T(e,u,c)}switch(T=c?dl(c):window,e){case"focusin":(Rv(T)||T.contentEditable==="true")&&(Hr=T,Jp=c,vl=null);break;case"focusout":vl=Jp=Hr=null;break;case"mousedown":Kp=!0;break;case"contextmenu":case"mouseup":case"dragend":Kp=!1,Ov(p,n,h);break;case"selectionchange":if(zT)break;case"keydown":case"keyup":Ov(p,n,h)}var w;if($m)t:{switch(e){case"compositionstart":var x="onCompositionStart";break t;case"compositionend":x="onCompositionEnd";break t;case"compositionupdate":x="onCompositionUpdate";break t}x=void 0}else Fr?bx(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Mx&&n.locale!=="ko"&&(Fr||x!=="onCompositionStart"?x==="onCompositionEnd"&&Fr&&(w=Sx()):($s=h,Qm="value"in $s?$s.value:$s.textContent,Fr=!0)),T=ch(c,x),0<T.length&&(x=new Tv(x,e,null,n,h),p.push({event:x,listeners:T}),w?x.data=w:(w=Ex(n),w!==null&&(x.data=w)))),(w=CT?RT(e,n):NT(e,n))&&(x=ch(c,"onBeforeInput"),0<x.length&&(T=new Tv("onBeforeInput","beforeinput",null,n,h),p.push({event:T,listeners:x}),T.data=w)),CA(p,e,c,n,h)}xM(p,t)})}function Fl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ch(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Nl(e,n),s!=null&&i.unshift(Fl(e,s,a)),s=Nl(e,t),s!=null&&i.push(Fl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function NA(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function by(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Nl(n,a),c!=null&&r.unshift(Fl(n,c,l))):s||(c=Nl(n,a),c!=null&&r.push(Fl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var DA=/\r\n?/g,UA=/\u0000|\uFFFD/g;function Ey(e){return(typeof e=="string"?e:""+e).replace(DA,`
`).replace(UA,"")}function MM(e,t){return t=Ey(t),Ey(e)===t}function de(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||ao(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&ao(e,""+i);else return;break;case"className":eu(e,"class",i);break;case"tabIndex":eu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":eu(e,n,i);break;case"style":yx(e,i,a);return;case"data":if(t!=="object"){eu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=yu(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&de(e,t,"name",s.name,s,null),de(e,t,"formEncType",s.formEncType,s,null),de(e,t,"formMethod",s.formMethod,s,null),de(e,t,"formTarget",s.formTarget,s,null)):(de(e,t,"encType",s.encType,s,null),de(e,t,"method",s.method,s,null),de(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=yu(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ji);return;case"onScroll":i!=null&&Yt("scroll",e);return;case"onScrollEnd":i!=null&&Yt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(tt(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=yu(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Yt("beforetoggle",e),Yt("toggle",e),vu(e,"popover",i);break;case"xlinkActuate":gs(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":gs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":gs(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":gs(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":gs(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":gs(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":gs(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":gs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":gs(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":vu(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=$E.get(n)||n,vu(e,n,i);else return}ne=!0}function Lm(e,t,n,i,s,a){switch(n){case"style":yx(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(tt(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")ao(e,i);else if(typeof i=="number"||typeof i=="bigint")ao(e,""+i);else return;break;case"onScroll":i!=null&&Yt("scroll",e);return;case"onScrollEnd":i!=null&&Yt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=ji);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!dx.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[Fn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}ne=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):vu(e,n,i)}return}ne=!0}function fn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Yt("error",e),Yt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:de(e,t,a,r,n,null)}}s&&de(e,t,"srcSet",n.srcSet,n,null),i&&de(e,t,"src",n.src,n,null);return;case"input":Yt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(tt(137,t));break;default:de(e,t,i,h,n,null)}}gx(e,a,o,l,c,r,s,!1);return;case"select":Yt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:de(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Zr(e,!!i,t,!1):n!=null&&Zr(e,!!i,n,!0);return;case"textarea":Yt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(tt(91));break;default:de(e,t,r,o,n,null)}vx(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":de(e,t,l,i,n,null));return;case"dialog":Yt("beforetoggle",e),Yt("toggle",e),Yt("cancel",e),Yt("close",e);break;case"iframe":case"object":Yt("load",e);break;case"video":case"audio":for(i=0;i<zl.length;i++)Yt(zl[i],e);break;case"image":Yt("error",e),Yt("load",e);break;case"details":Yt("toggle",e);break;case"embed":case"source":case"link":Yt("error",e),Yt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:de(e,t,c,i,n,null)}return;default:if(Jm(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Lm(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&de(e,t,o,i,n,null))}var LA={};function OA(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||de(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":d!==p&&(ne=!0),a=d;break;case"name":d!==p&&(ne=!0),s=d;break;case"checked":d!==p&&(ne=!0),c=d;break;case"defaultChecked":d!==p&&(ne=!0),h=d;break;case"value":d!==p&&(ne=!0),r=d;break;case"defaultValue":d!==p&&(ne=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(tt(137,t));break;default:d!==p&&de(e,t,u,d,i,p)}}Wp(e,r,o,l,c,h,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||de(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(ne=!0),u=a;break;case"defaultValue":a!==l&&(ne=!0),o=a;break;case"multiple":a!==l&&(ne=!0),r=a;default:a!==l&&de(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?Zr(e,!!n,u,!1):!!i!=!!n&&(t!=null?Zr(e,!!n,t,!0):Zr(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:de(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(ne=!0),u=s;break;case"defaultValue":s!==a&&(ne=!0),d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(tt(91));break;default:s!==a&&de(e,t,r,s,i,a)}_x(e,u,d);return;case"option":for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!=null&&!i.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:de(e,t,g,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?(u!==d&&(ne=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):de(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var E in n)u=n[E],n.hasOwnProperty(E)&&u!=null&&!i.hasOwnProperty(E)&&de(e,t,E,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(tt(137,t));break;default:de(e,t,c,u,i,d)}return;default:if(Jm(t)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&Lm(e,t,m,void 0,i,u);for(h in i)u=i[h],d=n[h],!i.hasOwnProperty(h)||u===d||u===void 0&&d===void 0||Lm(e,t,h,u,i,d);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&de(e,t,f,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||de(e,t,p,u,i,d)}function Ty(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function IA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Ty(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,p=l.initiatorType;h&&Ty(p)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Om=null,Im=null;function Hl(e){return e.nodeType===9?e:e.ownerDocument}function Ay(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function EM(e,t,n,i){return n=Hl(n).createElement(e),n[ln]=i,n[Fn]=t,fn(n,e,t),nn(n),n}function Pm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Np=null;function PA(){var e=window.event;return e&&e.type==="popstate"?e===Np?!1:(Np=e,!0):(Np=null,!1)}var Ig=typeof setTimeout=="function"?setTimeout:void 0,BA=typeof clearTimeout=="function"?clearTimeout:void 0,wy=typeof Promise=="function"?Promise:void 0,Cy=typeof requestAnimationFrame=="function"?requestAnimationFrame:Ig,zA=typeof queueMicrotask=="function"?queueMicrotask:typeof wy<"u"?function(e){return wy.resolve(null).then(e).catch(FA)}:Ig;function FA(e){setTimeout(function(){throw e})}function xa(e){return e==="head"}function Ry(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),go(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Up(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Up(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Jl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Up(e.ownerDocument.body);n=s}while(n);go(t)}function Ny(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function TM(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function AM(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function wM(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Bm(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return wM(t,n,e)}function HA(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return wM(t,n,e)}function VA(e){return e.documentElement.clientHeight}function GA(e){this.addEventListener("load",e),this.addEventListener("error",e)}function kA(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var h=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,g=c.fonts.status;i();var E=[];if(g==="loaded"&&(VA(c),c.fonts.status==="loading"&&E.push(c.fonts.ready)),g=E.length,e!==null)for(var m=e.suspenseyImages,f=0,_=0;_<m.length;_++){var S=m[_];if(!S.complete){var y=S.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<u.innerHeight&&y.left<u.innerWidth){if(f+=FM(S),f>Ou){E.length=g;break}S=new Promise(GA.bind(S)),E.push(S)}}}if(0<E.length)return u=Promise.race([Promise.all(E),new Promise(function(b){return setTimeout(b,500)})]).then(s,s),(d?Promise.allSettled([d.finished,u]):u).then(a,a);if(s(),d)return d.finished.then(a,a);a()},types:n});c.__reactViewTransition=h;var p=[];return h.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var g=u[d],E=g.effect,m=E.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){p.push(g),g=E.getKeyframes();for(var f=m=void 0,_=!0,S=0;S<g.length;S++){var y=g[S],b=y.width;if(m===void 0)m=b;else if(m!==b){_=!1;break}if(b=y.height,f===void 0)f=b;else if(f!==b){_=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}_&&m!==void 0&&f!==void 0&&(E.setKeyframes(g),_=getComputedStyle(E.target,E.pseudoElement),_.width!==m||_.height!==f)&&(_=g[0],_.width=m,_.height=f,_=g[g.length-1],_.width=m,_.height=f,E.setKeyframes(g))}}r()},function(u){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),s(),r()}}),h.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),s(),r(),null}}function qa(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}qa.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:xe({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};qa.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};qa.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function CM(e){return{name:e,group:new qa("group",e),imagePair:new qa("image-pair",e),old:new qa("old",e),new:new qa("new",e)}}function jn(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}jn.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(RM(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=ho(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),zn(this._fragmentFiber.child,!1,XA,e,o,i)}this._eventListeners=a}};function XA(e,t,n,i){return Je(e).addEventListener(t,n,i),!1}jn.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=RM(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=ho(s.optionsOrUseCapture),zn(this._fragmentFiber.child,!1,WA,e,n,s),i.splice(t,1),a!==null&&a()}};function WA(e,t,n,i){return Je(e).removeEventListener(t,n,i),!1}function ho(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Dy(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function RM(e,t,n,i){if(e.length===0)return-1;i=Dy(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&Dy(a.optionsOrUseCapture)===i)return s}return-1}jn.prototype.dispatchEvent=function(e){var t=rr(this._fragmentFiber);if(t===null)return!0;t=Je(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,ho(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,ho(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};jn.prototype.focus=function(e){zn(this._fragmentFiber.child,!0,NM,e,void 0,void 0)};function NM(e,t){return e.tag===6?!1:(e=Je(e),iw(e,t))}jn.prototype.focusLast=function(e){var t=[];zn(this._fragmentFiber.child,!0,Pg,t,void 0,void 0);for(var n=t.length-1;0<=n&&!NM(t[n],e);n--);};function Pg(e,t){return t.push(e),!1}jn.prototype.blur=function(){var e=rr(this._fragmentFiber);e!==null&&(e=Je(e),e=Hl(e).activeElement,e!==null&&zn(this._fragmentFiber.child,!1,qA,e,void 0,void 0))};function qA(e,t){return e.tag===6?!1:(e=Je(e),e===t||e.contains(t)?(t.blur(),!0):!1)}jn.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),zn(this._fragmentFiber.child,!1,YA,e,void 0,void 0)};function YA(e,t){return e.tag===6||(e=Je(e),t.observe(e)),!1}jn.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),zn(this._fragmentFiber.child,!1,ZA,e,void 0,void 0);for(var n=t=0;n<Ci.length;n++){var i=Ci[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Ci[t++]=i}Ci.length=t}};function ZA(e,t){return e.tag===6||(e=Je(e),t.unobserve(e)),!1}var Ci=[],Dp=!1;function JA(e,t,n){Ci.push({fragmentInstance:e,observer:t,instance:n}),Dp||(Dp=!0,sw(function(){Dp=!1;var i=Ci;Ci=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}jn.prototype.getClientRects=function(){var e=[];return zn(this._fragmentFiber.child,!1,KA,e,void 0,void 0),e};function KA(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=Je(e),t.push.apply(t,e.getClientRects());return!1}jn.prototype.getRootNode=function(e){var t=rr(this._fragmentFiber);return t===null?this:Je(t).getRootNode(e)};jn.prototype.compareDocumentPosition=function(e){var t=rr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];zn(this._fragmentFiber.child,!1,Pg,n,void 0,void 0);var i=Je(t);if(n.length===0){if(n=i,uv(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=jy(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=Je(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=Je(n[0]),s=Je(n[n.length-1]);var a=uv(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||QA(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function QA(e,t,n,i,s){var a=Wa(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=rr(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=Op(n,a,hv),t===null?t=!1:(zn(t,!0,wE,a,n),a=Ir,Ir=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=Op(i,a,hv),t===null?t=!1:(zn(t,!0,CE,a,i),a=Ir,Lp=Ir=null,t=a!==null)),t):!1}function Uy(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}jn.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(tt(566));var t=[];zn(this._fragmentFiber.child,!1,Pg,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=jy(this._fragmentFiber);if(i=n?i[1]||i[0]||rr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=Je(i),Uy(e,n);return}if(i=Je(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=Je(s),Uy(s,n)):Je(s).scrollIntoView(e),i+=n?-1:1}};function jA(e,t){return e=Je(e),DM(e,t),!1}function DM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function UM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,ho(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Ci.length;o++){var l=Ci[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Ci[r++]=l)}Ci.length=r,a.observe(e)}),DM(e,t))}function $A(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,ho(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?JA(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function zm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":zm(n),dh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function tw(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Jl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function ew(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gi(e.nextSibling),e===null))return null;return e}function LM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=gi(e.nextSibling),e===null))return null;return e}function Fm(e){return e.data==="$?"||e.data==="$~"}function Bg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function nw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function gi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Hm=null;function Ly(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return gi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Oy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function iw(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function sw(e){Cy(function(){Cy(function(t){return e(t)})})}function OM(e,t,n){switch(t=Hl(n),e){case"html":if(e=t.documentElement,!e)throw Error(tt(452));return e;case"head":if(e=t.head,!e)throw Error(tt(453));return e;case"body":if(e=t.body,!e)throw Error(tt(454));return e;default:throw Error(tt(451))}}function IM(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&de(e,t,i,null,LA,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ji&&(e.onclick=null),dh(e)}function Up(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);dh(e)}var _i=new Map,Iy=new Set;function Vl(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Ns=se.d;se.d={f:aw,r:rw,D:ow,C:lw,L:cw,m:uw,X:fw,S:hw,M:dw};function aw(){var e=Ns.f(),t=wh();return e||t}function rw(e){var t=vo(e);t!==null&&t.tag===5&&t.type==="form"?yS(t):Ns.r(e)}var Mo=typeof document>"u"?null:document;function PM(e,t,n){var i=Mo;if(i&&typeof t=="string"&&t){var s=di(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Iy.has(s)||(Iy.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),fn(t,"link",e),nn(t),i.head.appendChild(t)))}}function ow(e){Ns.D(e),PM("dns-prefetch",e,null)}function lw(e,t){Ns.C(e,t),PM("preconnect",e,t)}function cw(e,t,n){Ns.L(e,t,n);var i=Mo;if(i&&e&&t){var s='link[rel="preload"][as="'+di(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+di(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+di(n.imageSizes)+'"]')):s+='[href="'+di(e)+'"]';var a=s;switch(t){case"style":a=fo(e);break;case"script":a=bo(e)}if(!(_i.has(a)||(e=xe({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),_i.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(ec(a))||t==="script"&&i.querySelector(nc(a))))){var r=i.createElement("link");fn(r,"link",e),t==="style"&&(r[Vu]=!0,r.onload=r.onerror=function(){hx(r)}),nn(r),i.head.appendChild(r)}}}function uw(e,t){Ns.m(e,t);var n=Mo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+di(i)+'"][href="'+di(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=bo(e)}if(!_i.has(a)&&(e=xe({rel:"modulepreload",href:e},t),_i.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(nc(a)))return}i=n.createElement("link"),fn(i,"link",e),nn(i),n.head.appendChild(i)}}}function hw(e,t,n){Ns.S(e,t,n);var i=Mo;if(i&&e){var s=Yr(i).hoistableStyles,a=fo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(ec(a)))o.loading=5;else{e=xe({rel:"stylesheet",href:e,"data-precedence":t},n),(n=_i.get(a))&&zg(e,n);var l=r=i.createElement("link");nn(l),fn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Uu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function fw(e,t){Ns.X(e,t);var n=Mo;if(n&&e){var i=Yr(n).hoistableScripts,s=bo(e),a=i.get(s);a||(a=n.querySelector(nc(s)),a||(e=xe({src:e,async:!0},t),(t=_i.get(s))&&Fg(e,t),a=n.createElement("script"),nn(a),fn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function dw(e,t){Ns.M(e,t);var n=Mo;if(n&&e){var i=Yr(n).hoistableScripts,s=bo(e),a=i.get(s);a||(a=n.querySelector(nc(s)),a||(e=xe({src:e,async:!0,type:"module"},t),(t=_i.get(s))&&Fg(e,t),a=n.createElement("script"),nn(a),fn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Py(e,t,n,i){var s=(s=sa.current)?Vl(s):null;if(!s)throw Error(tt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=fo(n.href),t=Yr(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=fo(n.href);var a=Yr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(ec(e)))?a._p||(r.instance=a,r.state.loading=5):(a=_i.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},_i.set(e,a)),pw(s,e,a,r.state))),t&&i===null)throw Error(tt(528,""));return r}if(t&&i!==null)throw Error(tt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=bo(n),t=Yr(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(tt(444,e))}}function fo(e){return'href="'+di(e)+'"'}function ec(e){return'link[rel="stylesheet"]['+e+"]"}function BM(e){return xe({},e,{"data-precedence":e.precedence,precedence:null})}function pw(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Vu]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Vu]=!0,t.onload=t.onerror=hx.bind(null,t),fn(t,"link",n),nn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function bo(e){return'[src="'+di(e)+'"]'}function nc(e){return"script[async]"+e}function By(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+di(n.href)+'"]');if(i)return t.instance=i,nn(i),i;var s=xe({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),nn(i),fn(i,"style",s),Uu(i,n.precedence,e),t.instance=i;case"stylesheet":s=fo(n.href);var a=e.querySelector(ec(s));if(a)return t.state.loading|=4,t.instance=a,nn(a),a;i=BM(n),(s=_i.get(s))&&zg(i,s),a=(e.ownerDocument||e).createElement("link"),nn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),fn(a,"link",i),t.state.loading|=4,Uu(a,n.precedence,e),t.instance=a;case"script":return a=bo(n.src),(s=e.querySelector(nc(a)))?(t.instance=s,nn(s),s):(i=n,(s=_i.get(a))&&(i=xe({},n),Fg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),nn(s),fn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(tt(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Uu(i,n.precedence,e));return t.instance}function Uu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Fg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Lu=null;function zy(e,t,n){if(Lu===null){var i=new Map,s=Lu=new Map;s.set(n,i)}else s=Lu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Jl]||a[ln]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function Vm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function mw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Fy(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function zM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function FM(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Hy(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=FM(t),e.suspenseyImages.push(t)),e=vw.bind(e),t.decode().then(e,e))}function gw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=fo(i.href),a=t.querySelector(ec(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Gl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,nn(a);return}a=t.ownerDocument||t,i=BM(i),(s=_i.get(s))&&zg(i,s),a=a.createElement("link"),nn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),fn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Gl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ou=0;function _w(e,t){return e.stylesheets&&e.count===0&&Iu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Iu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Ou===0&&(Ou=62500*IA());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Iu(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Ou?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function HM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Iu(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Gl(){this.count--,HM(this)}function vw(){this.imgCount--,HM(this)}var uh=null;function Iu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uh=new Map,t.forEach(yw,e),uh=null,Gl.call(e))}function yw(e,t){if(!(t.state.loading&4)){var n=uh.get(e);if(n)var i=n.get(null);else{n=new Map,uh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Gl.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var po={$$typeof:Qi,Provider:null,Consumer:null,_currentValue:Ya,_currentValue2:Ya,_threadCount:0};function xw(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rp(0),this.hiddenUpdates=rp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function VM(e,t,n,i,s,a,r,o,l,c,h,p){return e=new xw(e,t,n,r,l,c,h,p,o),t=1,a===!0&&(t|=24),a=Pn(3,null,null,t),e.current=a,a.stateNode=e,t=ag(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},lg(a),e}function GM(e){return e?(e=kr,e):kr}function kM(e,t,n,i,s,a){s=GM(s),i.context===null?i.context=s:i.pendingContext=s,i=ra(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=oa(e,i,t),n!==null&&(Bn(n,e,t),xl(n,e,t))}function Vy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hg(e,t){Vy(e,t),(e=e.alternate)&&Vy(e,t)}function XM(e){if(e.tag===13||e.tag===31){var t=cr(e,67108864);t!==null&&Bn(t,e,67108864),Hg(e,67108864)}}function Gy(e){if(e.tag===13||e.tag===31){var t=Kn();t=Ym(t);var n=cr(e,t);n!==null&&Bn(n,e,t),Hg(e,t)}}var mo=!0;function Sw(e,t,n,i){var s=Lt.T;Lt.T=null;var a=se.p;try{se.p=2,Vg(e,t,n,i)}finally{se.p=a,Lt.T=s}}function Mw(e,t,n,i){var s=Lt.T;Lt.T=null;var a=se.p;try{se.p=8,Vg(e,t,n,i)}finally{se.p=a,Lt.T=s}}function Vg(e,t,n,i){if(mo){var s=Gm(i);if(s===null)Rp(e,t,i,hh,n),ky(e,i);else if(Ew(s,e,t,n,i))i.stopPropagation();else if(ky(e,i),t&4&&-1<bw.indexOf(e)){for(;s!==null;){var a=vo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Ga(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Jn(r);o.entanglements[1]|=l,r&=~l}as(a),(ie&6)===0&&(ah=Yn()+500,tc(0,!1))}}break;case 31:case 13:o=cr(a,2),o!==null&&Bn(o,a,2),wh(),Hg(a,2)}if(a=Gm(i),a===null&&Rp(e,t,i,hh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Rp(e,t,i,null,n)}}function Gm(e){return e=Km(e),Gg(e)}var hh=null;function Gg(e){if(hh=null,e=Wa(e),e!==null){var t=Wl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Jy(t),e!==null)return e;e=null}else if(n===31){if(e=Ky(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return hh=e,null}function WM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(BE()){case nx:return 2;case ix:return 8;case Hu:case zE:return 32;case sx:return 268435456;default:return 32}default:return 32}}var km=!1,ha=null,fa=null,da=null,kl=new Map,Xl=new Map,Qs=[],bw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ky(e,t){switch(e){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":fa=null;break;case"mouseover":case"mouseout":da=null;break;case"pointerover":case"pointerout":kl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xl.delete(t.pointerId)}}function cl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=vo(t),t!==null&&XM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Ew(e,t,n,i,s){switch(t){case"focusin":return ha=cl(ha,e,t,n,i,s),!0;case"dragenter":return fa=cl(fa,e,t,n,i,s),!0;case"mouseover":return da=cl(da,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return kl.set(a,cl(kl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Xl.set(a,cl(Xl.get(a)||null,e,t,n,i,s)),!0}return!1}function qM(e){var t=Wa(e.target);if(t!==null){var n=Wl(t);if(n!==null){if(t=n.tag,t===13){if(t=Jy(n),t!==null){e.blockedOn=t,mv(e.priority,function(){Gy(n)});return}}else if(t===31){if(t=Ky(n),t!==null){e.blockedOn=t,mv(e.priority,function(){Gy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gm(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);qp=i,n.target.dispatchEvent(i),qp=null}else return t=vo(n),t!==null&&XM(t),e.blockedOn=n,!1;t.shift()}return!0}function Xy(e,t,n){Pu(e)&&n.delete(t)}function Tw(){km=!1,ha!==null&&Pu(ha)&&(ha=null),fa!==null&&Pu(fa)&&(fa=null),da!==null&&Pu(da)&&(da=null),kl.forEach(Xy),Xl.forEach(Xy)}function gu(e,t){e.blockedOn===t&&(e.blockedOn=null,km||(km=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Tw)))}var _u=null;function Wy(e){_u!==e&&(_u=e,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,function(){_u===e&&(_u=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Gg(i||n)===null)continue;break}var a=vo(n);a!==null&&(e.splice(t,3),t-=3,lm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function go(e){function t(l){return gu(l,e)}ha!==null&&gu(ha,e),fa!==null&&gu(fa,e),da!==null&&gu(da,e),kl.forEach(t),Xl.forEach(t);for(var n=0;n<Qs.length;n++){var i=Qs[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Qs.length&&(n=Qs[0],n.blockedOn===null);)qM(n),n.blockedOn===null&&Qs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Fn]||null;if(typeof a=="function")r||Wy(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Fn]||null)o=r.formAction;else if(Gg(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Wy(n)}}}function YM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function kg(e){this._internalRoot=e}Nh.prototype.render=kg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(tt(409));var n=t.current,i=Kn();kM(n,i,e,t,null,null)};Nh.prototype.unmount=kg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kM(e.current,2,null,e,null,null),wh(),t[_o]=null}};function Nh(e){this._internalRoot=e}Nh.prototype.unstable_scheduleHydration=function(e){if(e){var t=ux();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qs.length&&t!==0&&t<Qs[n].priority;n++);Qs.splice(n,0,e),n===0&&qM(e)}};var qy=Yy.version;if(qy!=="19.3.1")throw Error(tt(527,qy,"19.3.1"));se.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(tt(188)):(e=Object.keys(e).join(","),Error(tt(268,e)));return e=AE(t),e=e!==null?Qy(e):null,e=e===null?null:e.stateNode,e};var Aw={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Lt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ul=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ul.isDisabled&&ul.supportsFiber))try{ql=ul.inject(Aw),Zn=ul}catch{}var ul;Dh.createRoot=function(e,t){if(!Zy(e))throw Error(tt(299));var n=!1,i="",s=wS,a=CS,r=RS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=VM(e,1,!1,null,null,n,i,null,s,a,r,YM),e[_o]=t.current,Og(e),new kg(t)};Dh.hydrateRoot=function(e,t,n){if(!Zy(e))throw Error(tt(299));var i=!1,s="",a=wS,r=CS,o=RS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=VM(e,1,!0,t,n??null,i,s,l,a,r,o,YM),t.context=GM(null),n=t.current,i=Kn(),i=Ym(i),s=ra(i),s.callback=null,oa(n,s,i),n=i,t.current.lanes=n,Zl(t,n),as(t),e[_o]=t.current,Og(e),new Nh(t)};Dh.version="19.3.1"});var QM=Xi((RD,KM)=>{"use strict";function JM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(JM)}catch(e){console.error(e)}}JM(),KM.exports=ZM()});var z1=Xi(Id=>{"use strict";var oD=Symbol.for("react.transitional.element"),lD=Symbol.for("react.fragment");function B1(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:oD,type:e,key:i,ref:t!==void 0?t:null,props:n}}Id.Fragment=lD;Id.jsx=B1;Id.jsxs=B1});var Gc=Xi((rI,F1)=>{"use strict";F1.exports=z1()});var bi=ps(Ar()),G1=ps(QM()),k1=ps(ep());var Hs=ps(Ar());var Sb=0,S0=1,Mb=2;var Rc=1,bb=2,Yo=3,Oa=0,Un=1,si=2,hs=0,Zo=1,M0=2,b0=3,E0=4,Eb=5;var vr=100,Tb=101,Ab=102,wb=103,Cb=104,Rb=200,Nb=201,Db=202,Ub=203,T0=204,A0=205,Lb=206,Ob=207,Ib=208,Pb=209,Bb=210,zb=211,Fb=212,Hb=213,Vb=214,tf=0,ef=1,nf=2,Fo=3,sf=4,af=5,rf=6,of=7,w0=0,Gb=1,kb=2,Bi=0,C0=1,R0=2,N0=3,D0=4,U0=5,L0=6,O0=7;var I0=300,Ia=301,yr=302,Vf=303,Gf=304,Nc=306,lf=1e3,os=1001,cf=1002,rn=1003,Xb=1004;var Dc=1005;var Qe=1006,kf=1007;var Pa=1008;var ai=1009,P0=1010,B0=1011,Jo=1012,Xf=1013,zi=1014,Fi=1015,Hi=1016,Wf=1017,qf=1018,Ko=1020,z0=35902,F0=35899,H0=1021,V0=1022,Mi=1023,ls=1026,Ba=1027,G0=1028,Yf=1029,za=1030,Zf=1031;var Jf=1033,Uc=33776,Lc=33777,Oc=33778,Ic=33779,Kf=35840,Qf=35841,jf=35842,$f=35843,td=36196,ed=37492,nd=37496,id=37488,sd=37489,Pc=37490,ad=37491,rd=37808,od=37809,ld=37810,cd=37811,ud=37812,hd=37813,fd=37814,dd=37815,pd=37816,md=37817,gd=37818,_d=37819,vd=37820,yd=37821,xd=36492,Sd=36494,Md=36495,bd=36283,Ed=36284,Bc=36285,Td=36286;var uc=2300,uf=2301,Qh=2302,m0=2303,g0=2400,_0=2401,v0=2402;var Wb=3200;var k0=0,qb=1,Fs="",Cn="srgb",hc="srgb-linear",fc="linear",ce="srgb";var jh=7680;var Yb=519,Zb=512,Jb=513,Kb=514,Ad=515,Qb=516,jb=517,wd=518,$b=519,t1=35044;var X0="300 es",Ii=2e3,dc=2001;function ww(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Cw(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ho(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function e1(){let e=Ho("canvas");return e.style.display="block",e}var jM={},Vo=null;function W0(...e){let t="THREE."+e.shift();Vo?Vo("log",t,...e):console.log(t,...e)}function n1(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ut(...e){e=n1(e);let t="THREE."+e.shift();if(Vo)Vo("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ot(...e){e=n1(e);let t="THREE."+e.shift();if(Vo)Vo("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function mr(...e){let t=e.join(" ");t in jM||(jM[t]=!0,Ut(...e))}function i1(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var s1={[tf]:ef,[nf]:rf,[sf]:of,[Fo]:af,[ef]:tf,[rf]:nf,[of]:sf,[af]:Fo},cs=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xg=Math.PI/180,hf=180/Math.PI;function zc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[e&255]+vn[e>>8&255]+vn[e>>16&255]+vn[e>>24&255]+"-"+vn[t&255]+vn[t>>8&255]+"-"+vn[t>>16&15|64]+vn[t>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function Jt(e,t,n){return Math.max(t,Math.min(n,e))}function Rw(e,t){return(e%t+t)%t}function Wg(e,t,n){return(1-n)*e+n*t}function ic(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Hn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Q0=class Q0{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Jt(this.x,t.x,n.x),this.y=Jt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Jt(this.x,t,n),this.y=Jt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Q0.prototype.isVector2=!0;var Dt=Q0,us=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],g=a[r+2],E=a[r+3];if(p!==E||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+p*E;m<0&&(u=-u,d=-d,g=-g,E=-E,m=-m);let f=1-o;if(m<.9995){let _=Math.acos(m),S=Math.sin(_);f=Math.sin(f*_)/S,o=Math.sin(o*_)/S,l=l*f+u*o,c=c*f+d*o,h=h*f+g*o,p=p*f+E*o}else{l=l*f+u*o,c=c*f+d*o,h=h*f+g*o,p=p*f+E*o;let _=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=_,c*=_,h*=_,p*=_}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],p=a[r],u=a[r+1],d=a[r+2],g=a[r+3];return t[n]=o*g+h*p+l*d-c*u,t[n+1]=l*g+h*u+c*p-o*d,t[n+2]=c*g+h*d+o*u-l*p,t[n+3]=h*g-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=u*h*p+c*d*g,this._y=c*d*p-u*h*g,this._z=c*h*g+u*d*p,this._w=c*h*p-u*d*g;break;case"YXZ":this._x=u*h*p+c*d*g,this._y=c*d*p-u*h*g,this._z=c*h*g-u*d*p,this._w=c*h*p+u*d*g;break;case"ZXY":this._x=u*h*p-c*d*g,this._y=c*d*p+u*h*g,this._z=c*h*g+u*d*p,this._w=c*h*p-u*d*g;break;case"ZYX":this._x=u*h*p-c*d*g,this._y=c*d*p+u*h*g,this._z=c*h*g-u*d*p,this._w=c*h*p+u*d*g;break;case"YZX":this._x=u*h*p+c*d*g,this._y=c*d*p+u*h*g,this._z=c*h*g-u*d*p,this._w=c*h*p-u*d*g;break;case"XZY":this._x=u*h*p-c*d*g,this._y=c*d*p-u*h*g,this._z=c*h*g+u*d*p,this._w=c*h*p+u*d*g;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},j0=class j0{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion($M.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion($M.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*h,this.y=i+l*h+o*c-a*p,this.z=s+l*p+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Jt(this.x,t.x,n.x),this.y=Jt(this.y,t.y,n.y),this.z=Jt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Jt(this.x,t,n),this.y=Jt(this.y,t,n),this.z=Jt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return qg.copy(this).projectOnVector(t),this.sub(qg)}reflect(t){return this.sub(qg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};j0.prototype.isVector3=!0;var O=j0,qg=new O,$M=new us,$0=class $0{constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],d=i[5],g=i[8],E=s[0],m=s[3],f=s[6],_=s[1],S=s[4],y=s[7],b=s[2],T=s[5],w=s[8];return a[0]=r*E+o*_+l*b,a[3]=r*m+o*S+l*T,a[6]=r*f+o*y+l*w,a[1]=c*E+h*_+p*b,a[4]=c*m+h*S+p*T,a[7]=c*f+h*y+p*w,a[2]=u*E+d*_+g*b,a[5]=u*m+d*S+g*T,a[8]=u*f+d*y+g*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*r-o*c,u=o*l-h*a,d=c*a-r*l,g=n*p+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return t[0]=p*E,t[1]=(s*c-h*i)*E,t[2]=(o*i-s*r)*E,t[3]=u*E,t[4]=(h*n-s*l)*E,t[5]=(s*a-o*n)*E,t[6]=d*E,t[7]=(i*l-c*n)*E,t[8]=(r*n-i*a)*E,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yg.makeScale(t,n)),this}rotate(t){return mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yg.makeRotation(-t)),this}translate(t,n){return mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};$0.prototype.isMatrix3=!0;var Bt=$0,Yg=new Bt,tb=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eb=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nw(){let e={enabled:!0,workingColorSpace:hc,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ce&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ce&&(s.r=zo(s.r),s.g=zo(s.g),s.b=zo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fs?fc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[hc]:{primaries:t,whitePoint:i,transfer:fc,toXYZ:tb,fromXYZ:eb,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:i,transfer:ce,toXYZ:tb,fromXYZ:eb,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),e}var $t=Nw();function Bs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function zo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Eo,ff=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Eo===void 0&&(Eo=Ho("canvas")),Eo.width=t.width,Eo.height=t.height;let s=Eo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Eo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Ho("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Bs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bs(n[i]/255)*255):n[i]=Bs(n[i]);return{data:n,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dw=0,Go=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Dw++}),this.uuid=zc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Zg(s[r].image)):a.push(Zg(s[r]))}else a=Zg(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Zg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?ff.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}var Uw=0,Jg=new O,Nn=class e extends cs{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=os,s=os,a=Qe,r=Pa,o=Mi,l=ai,c=e.DEFAULT_ANISOTROPY,h=Fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uw++}),this.uuid=zc(),this.name="",this.source=new Go(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jg).x}get height(){return this.source.getSize(Jg).y}get depth(){return this.source.getSize(Jg).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Ut(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ut(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==I0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lf:t.x=t.x-Math.floor(t.x);break;case os:t.x=t.x<0?0:1;break;case cf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lf:t.y=t.y-Math.floor(t.y);break;case os:t.y=t.y<0?0:1;break;case cf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=I0;Nn.DEFAULT_ANISOTROPY=1;var t_=class t_{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],g=l[9],E=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(c+1)/2,y=(d+1)/2,b=(f+1)/2,T=(h+u)/4,w=(p+E)/4,x=(g+m)/4;return S>y&&S>b?S<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(S),s=T/i,a=w/i):y>b?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=T/s,a=x/s):b<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(b),i=w/a,s=x/a),this.set(i,s,a,n),this}let _=Math.sqrt((m-g)*(m-g)+(p-E)*(p-E)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(p-E)/_,this.z=(u-h)/_,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Jt(this.x,t.x,n.x),this.y=Jt(this.y,t.y,n.y),this.z=Jt(this.z,t.z,n.z),this.w=Jt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Jt(this.x,t,n),this.y=Jt(this.y,t,n),this.z=Jt(this.z,t,n),this.w=Jt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};t_.prototype.isVector4=!0;var Ie=t_,df=class extends cs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ie(0,0,t,n),this.scissorTest=!1,this.viewport=new Ie(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new Nn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Go(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends df{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},pc=class extends Nn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pf=class extends Nn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Hf=class Hf{constructor(t,n,i,s,a,r,o,l,c,h,p,u,d,g,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,p,u,d,g,E,m)}set(t,n,i,s,a,r,o,l,c,h,p,u,d,g,E,m){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=d,f[7]=g,f[11]=E,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hf().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/To.setFromMatrixColumn(t,0).length(),a=1/To.setFromMatrixColumn(t,1).length(),r=1/To.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*h,d=r*p,g=o*h,E=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=d+g*c,n[5]=u-E*c,n[9]=-o*l,n[2]=E-u*c,n[6]=g+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*h,d=l*p,g=c*h,E=c*p;n[0]=u+E*o,n[4]=g*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*h,n[9]=-o,n[2]=d*o-g,n[6]=E+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*h,d=l*p,g=c*h,E=c*p;n[0]=u-E*o,n[4]=-r*p,n[8]=g+d*o,n[1]=d+g*o,n[5]=r*h,n[9]=E-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*h,d=r*p,g=o*h,E=o*p;n[0]=l*h,n[4]=g*c-d,n[8]=u*c+E,n[1]=l*p,n[5]=E*c+u,n[9]=d*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,g=o*l,E=o*c;n[0]=l*h,n[4]=E-u*p,n[8]=g*p+d,n[1]=p,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=d*p+g,n[10]=u-E*p}else if(t.order==="XZY"){let u=r*l,d=r*c,g=o*l,E=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=u*p+E,n[5]=r*h,n[9]=d*p-g,n[2]=g*p-d,n[6]=o*h,n[10]=E*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lw,t,Ow)}lookAt(t,n,i){let s=this.elements;return $n.subVectors(t,n),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Sa.crossVectors(i,$n),Sa.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Sa.crossVectors(i,$n)),Sa.normalize(),Uh.crossVectors($n,Sa),s[0]=Sa.x,s[4]=Uh.x,s[8]=$n.x,s[1]=Sa.y,s[5]=Uh.y,s[9]=$n.y,s[2]=Sa.z,s[6]=Uh.z,s[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],d=i[13],g=i[2],E=i[6],m=i[10],f=i[14],_=i[3],S=i[7],y=i[11],b=i[15],T=s[0],w=s[4],x=s[8],A=s[12],R=s[1],I=s[5],F=s[9],k=s[13],L=s[2],V=s[6],j=s[10],K=s[14],at=s[3],Z=s[7],nt=s[11],it=s[15];return a[0]=r*T+o*R+l*L+c*at,a[4]=r*w+o*I+l*V+c*Z,a[8]=r*x+o*F+l*j+c*nt,a[12]=r*A+o*k+l*K+c*it,a[1]=h*T+p*R+u*L+d*at,a[5]=h*w+p*I+u*V+d*Z,a[9]=h*x+p*F+u*j+d*nt,a[13]=h*A+p*k+u*K+d*it,a[2]=g*T+E*R+m*L+f*at,a[6]=g*w+E*I+m*V+f*Z,a[10]=g*x+E*F+m*j+f*nt,a[14]=g*A+E*k+m*K+f*it,a[3]=_*T+S*R+y*L+b*at,a[7]=_*w+S*I+y*V+b*Z,a[11]=_*x+S*F+y*j+b*nt,a[15]=_*A+S*k+y*K+b*it,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],d=t[14],g=t[3],E=t[7],m=t[11],f=t[15],_=l*d-c*u,S=o*d-c*p,y=o*u-l*p,b=r*d-c*h,T=r*u-l*h,w=r*p-o*h;return n*(E*_-m*S+f*y)-i*(g*_-m*b+f*T)+s*(g*S-E*b+f*w)-a*(g*y-E*T+m*w)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return n*(r*h-o*c)-i*(a*h-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],d=t[11],g=t[12],E=t[13],m=t[14],f=t[15],_=n*o-i*r,S=n*l-s*r,y=n*c-a*r,b=i*l-s*o,T=i*c-a*o,w=s*c-a*l,x=h*E-p*g,A=h*m-u*g,R=h*f-d*g,I=p*m-u*E,F=p*f-d*E,k=u*f-d*m,L=_*k-S*F+y*I+b*R-T*A+w*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/L;return t[0]=(o*k-l*F+c*I)*V,t[1]=(s*F-i*k-a*I)*V,t[2]=(E*w-m*T+f*b)*V,t[3]=(u*T-p*w-d*b)*V,t[4]=(l*R-r*k-c*A)*V,t[5]=(n*k-s*R+a*A)*V,t[6]=(m*y-g*w-f*S)*V,t[7]=(h*w-u*y+d*S)*V,t[8]=(r*F-o*R+c*x)*V,t[9]=(i*R-n*F-a*x)*V,t[10]=(g*T-E*y+f*_)*V,t[11]=(p*y-h*T-d*_)*V,t[12]=(o*A-r*I-l*x)*V,t[13]=(n*I-i*A+s*x)*V,t[14]=(E*S-g*b-m*_)*V,t[15]=(h*b-p*S+u*_)*V,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,p=o+o,u=a*c,d=a*h,g=a*p,E=r*h,m=r*p,f=o*p,_=l*c,S=l*h,y=l*p,b=i.x,T=i.y,w=i.z;return s[0]=(1-(E+f))*b,s[1]=(d+y)*b,s[2]=(g-S)*b,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(u+f))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(g+S)*w,s[9]=(m-_)*w,s[10]=(1-(u+E))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=To.set(s[0],s[1],s[2]).length(),o=To.set(s[4],s[5],s[6]).length(),l=To.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Di.copy(this);let c=1/r,h=1/o,p=1/l;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=h,Di.elements[5]*=h,Di.elements[6]*=h,Di.elements[8]*=p,Di.elements[9]*=p,Di.elements[10]*=p,n.setFromRotationMatrix(Di),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=Ii,l=!1){let c=this.elements,h=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),g,E;if(l)g=a/(r-a),E=r*a/(r-a);else if(o===Ii)g=-(r+a)/(r-a),E=-2*r*a/(r-a);else if(o===dc)g=-r/(r-a),E=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Ii,l=!1){let c=this.elements,h=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),g,E;if(l)g=1/(r-a),E=r/(r-a);else if(o===Ii)g=-2/(r-a),E=-(r+a)/(r-a);else if(o===dc)g=-1/(r-a),E=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Hf.prototype.isMatrix4=!0;var Fe=Hf,To=new O,Di=new Fe,Lw=new O(0,0,0),Ow=new O(1,1,1),Sa=new O,Uh=new O,$n=new O,nb=new Fe,ib=new us,ei=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Jt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return nb.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nb,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ib.setFromEuler(this),this.setFromQuaternion(ib,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var mc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Iw=0,sb=new O,Ao=new us,Ds=new Fe,Lh=new O,sc=new O,Pw=new O,Bw=new us,ab=new O(1,0,0),rb=new O(0,1,0),ob=new O(0,0,1),lb={type:"added"},zw={type:"removed"},wo={type:"childadded",child:null},Kg={type:"childremoved",child:null},xi=class e extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iw++}),this.uuid=zc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new O,n=new ei,i=new us,s=new O(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Bt}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ao.setFromAxisAngle(t,n),this.quaternion.multiply(Ao),this}rotateOnWorldAxis(t,n){return Ao.setFromAxisAngle(t,n),this.quaternion.premultiply(Ao),this}rotateX(t){return this.rotateOnAxis(ab,t)}rotateY(t){return this.rotateOnAxis(rb,t)}rotateZ(t){return this.rotateOnAxis(ob,t)}translateOnAxis(t,n){return sb.copy(t).applyQuaternion(this.quaternion),this.position.add(sb.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(ab,t)}translateY(t){return this.translateOnAxis(rb,t)}translateZ(t){return this.translateOnAxis(ob,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ds.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Lh.copy(t):Lh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),sc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ds.lookAt(sc,Lh,this.up):Ds.lookAt(Lh,sc,this.up),this.quaternion.setFromRotationMatrix(Ds),s&&(Ds.extractRotation(s.matrixWorld),Ao.setFromRotationMatrix(Ds),this.quaternion.premultiply(Ao.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lb),wo.child=t,this.dispatchEvent(wo),wo.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(zw),Kg.child=t,this.dispatchEvent(Kg),Kg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ds.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ds.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ds),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lb),wo.child=t,this.dispatchEvent(wo),wo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sc,t,Pw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sc,Bw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xi.DEFAULT_UP=new O(0,1,0);xi.DEFAULT_MATRIX_AUTO_UPDATE=!0;xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ps=class extends xi{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fw={type:"move"},ko=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let E of t.hand.values()){let m=n.getJointPose(E,i),f=this._getHandJoint(c,E);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fw)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Ps;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},a1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ma={h:0,s:0,l:0},Oh={h:0,s:0,l:0};function Qg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Xt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=$t.workingColorSpace){return this.r=t,this.g=n,this.b=i,$t.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=$t.workingColorSpace){if(t=Rw(t,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Qg(r,a,t+1/3),this.g=Qg(r,a,t),this.b=Qg(r,a,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,n=Cn){function i(a){a!==void 0&&parseFloat(a)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Cn){let i=a1[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}copyLinearToSRGB(t){return this.r=zo(t.r),this.g=zo(t.g),this.b=zo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return $t.workingToColorSpace(yn.copy(this),t),Math.round(Jt(yn.r*255,0,255))*65536+Math.round(Jt(yn.g*255,0,255))*256+Math.round(Jt(yn.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=$t.workingColorSpace){$t.workingToColorSpace(yn.copy(this),n);let i=yn.r,s=yn.g,a=yn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=$t.workingColorSpace){return $t.workingToColorSpace(yn.copy(this),n),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=Cn){$t.workingToColorSpace(yn.copy(this),t);let n=yn.r,i=yn.g,s=yn.b;return t!==Cn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Ma),this.setHSL(Ma.h+t,Ma.s+n,Ma.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ma),t.getHSL(Oh);let i=Wg(Ma.h,Oh.h,n),s=Wg(Ma.s,Oh.s,n),a=Wg(Ma.l,Oh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new Xt;Xt.NAMES=a1;var gc=class e{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=n,this.far=i}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},_c=class extends xi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Ui=new O,Us=new O,jg=new O,Ls=new O,Co=new O,Ro=new O,cb=new O,$g=new O,t0=new O,e0=new O,n0=new Ie,i0=new Ie,s0=new Ie,Aa=class e{constructor(t=new O,n=new O,i=new O){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Ui.subVectors(t,n),s.cross(Ui);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Ui.subVectors(s,n),Us.subVectors(i,n),jg.subVectors(t,n);let r=Ui.dot(Ui),o=Ui.dot(Us),l=Ui.dot(jg),c=Us.dot(Us),h=Us.dot(jg),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*h)*u,g=(r*h-o*l)*u;return a.set(1-d-g,g,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ls)===null?!1:Ls.x>=0&&Ls.y>=0&&Ls.x+Ls.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ls)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ls.x),l.addScaledVector(r,Ls.y),l.addScaledVector(o,Ls.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return n0.setScalar(0),i0.setScalar(0),s0.setScalar(0),n0.fromBufferAttribute(t,n),i0.fromBufferAttribute(t,i),s0.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(n0,a.x),r.addScaledVector(i0,a.y),r.addScaledVector(s0,a.z),r}static isFrontFacing(t,n,i,s){return Ui.subVectors(i,n),Us.subVectors(t,n),Ui.cross(Us).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),Us.subVectors(this.a,this.b),Ui.cross(Us).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Co.subVectors(s,i),Ro.subVectors(a,i),$g.subVectors(t,i);let l=Co.dot($g),c=Ro.dot($g);if(l<=0&&c<=0)return n.copy(i);t0.subVectors(t,s);let h=Co.dot(t0),p=Ro.dot(t0);if(h>=0&&p<=h)return n.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(Co,r);e0.subVectors(t,a);let d=Co.dot(e0),g=Ro.dot(e0);if(g>=0&&d<=g)return n.copy(a);let E=d*c-l*g;if(E<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Ro,o);let m=h*g-d*p;if(m<=0&&p-h>=0&&d-g>=0)return cb.subVectors(a,s),o=(p-h)/(p-h+(d-g)),n.copy(s).addScaledVector(cb,o);let f=1/(m+E+u);return r=E*f,o=u*f,n.copy(i).addScaledVector(Co,r).addScaledVector(Ro,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wa=class{constructor(t=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Li.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Li.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Li.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Li):Li.fromBufferAttribute(a,r),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ih.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ih.copy(i.boundingBox)),Ih.applyMatrix4(t.matrixWorld),this.union(Ih)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ac),Ph.subVectors(this.max,ac),No.subVectors(t.a,ac),Do.subVectors(t.b,ac),Uo.subVectors(t.c,ac),ba.subVectors(Do,No),Ea.subVectors(Uo,Do),hr.subVectors(No,Uo);let n=[0,-ba.z,ba.y,0,-Ea.z,Ea.y,0,-hr.z,hr.y,ba.z,0,-ba.x,Ea.z,0,-Ea.x,hr.z,0,-hr.x,-ba.y,ba.x,0,-Ea.y,Ea.x,0,-hr.y,hr.x,0];return!a0(n,No,Do,Uo,Ph)||(n=[1,0,0,0,1,0,0,0,1],!a0(n,No,Do,Uo,Ph))?!1:(Bh.crossVectors(ba,Ea),n=[Bh.x,Bh.y,Bh.z],a0(n,No,Do,Uo,Ph))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Os),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Os=[new O,new O,new O,new O,new O,new O,new O,new O],Li=new O,Ih=new wa,No=new O,Do=new O,Uo=new O,ba=new O,Ea=new O,hr=new O,ac=new O,Ph=new O,Bh=new O,fr=new O;function a0(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){fr.fromArray(e,a);let o=s.x*Math.abs(fr.x)+s.y*Math.abs(fr.y)+s.z*Math.abs(fr.z),l=t.dot(fr),c=n.dot(fr),h=i.dot(fr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var qe=new O,zh=new Dt,Hw=0,yi=class extends cs{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hw++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=t1,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)zh.fromBufferAttribute(this,n),zh.applyMatrix3(t),this.setXY(n,zh.x,zh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.applyMatrix3(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.applyMatrix4(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.applyNormalMatrix(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.transformDirection(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=ic(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ic(n,this.array)),n}setX(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ic(n,this.array)),n}setY(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ic(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ic(n,this.array)),n}setW(t,n){return this.normalized&&(n=Hn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Hn(n,this.array),i=Hn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Hn(n,this.array),i=Hn(i,this.array),s=Hn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Hn(n,this.array),i=Hn(i,this.array),s=Hn(s,this.array),a=Hn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var vc=class extends yi{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var yc=class extends yi{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Rn=class extends yi{constructor(t,n,i){super(new Float32Array(t),n,i)}},Vw=new wa,rc=new O,r0=new O,Xo=class{constructor(t=new O,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):Vw.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rc.subVectors(t,this.center);let n=rc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(rc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(r0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rc.copy(t.center).add(r0)),this.expandByPoint(rc.copy(t.center).sub(r0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gw=0,vi=new Fe,o0=new xi,Lo=new O,ti=new wa,oc=new wa,an=new O,Pi=class e extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gw++}),this.uuid=zc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ww(t)?yc:vc)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Bt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,n,i){return vi.makeTranslation(t,n,i),this.applyMatrix4(vi),this}scale(t,n,i){return vi.makeScale(t,n,i),this.applyMatrix4(vi),this}lookAt(t){return o0.lookAt(t),o0.updateMatrix(),this.applyMatrix4(o0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lo).negate(),this.translate(Lo.x,Lo.y,Lo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Rn(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];oc.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(ti.min,oc.min),ti.expandByPoint(an),an.addVectors(ti.max,oc.max),ti.expandByPoint(an)):(ti.expandByPoint(oc.min),ti.expandByPoint(oc.max))}ti.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)an.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(an));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)an.fromBufferAttribute(o,c),l&&(Lo.fromBufferAttribute(t,c),an.add(Lo)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new yi(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new O,l[x]=new O;let c=new O,h=new O,p=new O,u=new Dt,d=new Dt,g=new Dt,E=new O,m=new O;function f(x,A,R){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,A),p.fromBufferAttribute(i,R),u.fromBufferAttribute(a,x),d.fromBufferAttribute(a,A),g.fromBufferAttribute(a,R),h.sub(c),p.sub(c),d.sub(u),g.sub(u);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(I),m.copy(p).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),o[x].add(E),o[A].add(E),o[R].add(E),l[x].add(m),l[A].add(m),l[R].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let x=0,A=_.length;x<A;++x){let R=_[x],I=R.start,F=R.count;for(let k=I,L=I+F;k<L;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let S=new O,y=new O,b=new O,T=new O;function w(x){b.fromBufferAttribute(s,x),T.copy(b);let A=o[x];S.copy(A),S.sub(b.multiplyScalar(b.dot(A))).normalize(),y.crossVectors(T,A);let I=y.dot(l[x])<0?-1:1;r.setXYZW(x,S.x,S.y,S.z,I)}for(let x=0,A=_.length;x<A;++x){let R=_[x],I=R.start,F=R.count;for(let k=I,L=I+F;k<L;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new yi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new O,a=new O,r=new O,o=new O,l=new O,c=new O,h=new O,p=new O;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),E=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,E),r.fromBufferAttribute(n,m),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)an.fromBufferAttribute(t,n),an.normalize(),t.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let E=0,m=l.length;E<m;E++){o.isInterleavedBufferAttribute?d=l[E]*o.data.stride+o.offset:d=l[E]*h;for(let f=0;f<h;f++)u[g++]=c[d++]}return new yi(u,h,p)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],p=a[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var l0=new O,kw=new O,Xw=new Bt,Oi=class{constructor(t=new O(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=l0.subVectors(i,n).cross(kw.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(l0),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||Xw.getNormalMatrix(t),s=this.coplanarPoint(l0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ww=0,gr=class extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ww++}),this.uuid=zc(),this.name="",this.type="Material",this.blending=Zo,this.side=Oa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=T0,this.blendDst=A0,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jh,this.stencilZFail=jh,this.stencilZPass=jh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Ut(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ut(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Oi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Dt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Is=new O,c0=new O,Fh=new O,Hh=new O,mf=class{constructor(t=new O,n=new O(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Is)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Is.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Is.copy(this.origin).addScaledVector(this.direction,n),Is.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){c0.copy(t).add(n).multiplyScalar(.5),Fh.copy(n).sub(t).normalize(),Hh.copy(this.origin).sub(c0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Fh),o=Hh.dot(this.direction),l=-Hh.dot(Fh),c=Hh.lengthSq(),h=Math.abs(1-r*r),p,u,d,g;if(h>0)if(p=r*l-o,u=r*o-l,g=a*h,p>=0)if(u>=-g)if(u<=g){let E=1/h;p*=E,u*=E,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(c0).addScaledVector(Fh,u),d}intersectSphere(t,n){if(t.radius<0)return null;Is.subVectors(t.center,this.origin);let i=Is.dot(this.direction),s=Is.dot(Is)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Is)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-r.x,u=t.y-r.y,d=t.z-r.z,g=n.x-r.x,E=n.y-r.y,m=n.z-r.z,f=i.x-r.x,_=i.y-r.y,S=i.z-r.z,y=Math.abs(l),b=Math.abs(c),T=Math.abs(h),w,x,A,R,I,F,k,L,V,j,K,at;if(y>=b&&y>=T?(A=l,F=p,V=g,at=f,l>=0?(w=c,x=h,R=u,I=d,k=E,L=m,j=_,K=S):(w=h,x=c,R=d,I=u,k=m,L=E,j=S,K=_)):b>=T?(A=c,F=u,V=E,at=_,c>=0?(w=h,x=l,R=d,I=p,k=m,L=g,j=S,K=f):(w=l,x=h,R=p,I=d,k=g,L=m,j=f,K=S)):(A=h,F=d,V=m,at=S,h>=0?(w=l,x=c,R=p,I=u,k=g,L=E,j=f,K=_):(w=c,x=l,R=u,I=p,k=E,L=g,j=_,K=f)),A===0)return null;let Z=w/A,nt=x/A,it=1/A,Ct=R-Z*F,Et=I-nt*F,ue=k-Z*V,Wt=L-nt*V,te=j-Z*at,Y=K-nt*at,et=te*Wt-Y*ue,dt=Ct*Y-Et*te,Nt=ue*Et-Wt*Ct;if(s){if(et<0||dt<0||Nt<0)return null}else if((et<0||dt<0||Nt<0)&&(et>0||dt>0||Nt>0))return null;let mt=et+dt+Nt;if(mt===0)return null;let It=it*(et*F+dt*V+Nt*at);return(mt>0?It<0:It>0)?null:this.at(It/mt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zs=class extends gr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=w0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ub=new Fe,dr=new mf,Vh=new Xo,hb=new O,Gh=new O,kh=new O,Xh=new O,u0=new O,Wh=new O,fb=new O,qh=new O,Dn=class extends xi{constructor(t=new Pi,n=new zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Wh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],p=a[l];h!==0&&(u0.fromBufferAttribute(p,t),r?Wh.addScaledVector(u0,h):Wh.addScaledVector(u0.sub(n),h))}n.add(Wh)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vh.copy(i.boundingSphere),Vh.applyMatrix4(a),dr.copy(t.ray).recast(t.near),!(Vh.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Vh,hb)===null||dr.origin.distanceToSquared(hb)>(t.far-t.near)**2))&&(ub.copy(a).invert(),dr.copy(t.ray).applyMatrix4(ub),!(i.boundingBox!==null&&dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,dr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,E=u.length;g<E;g++){let m=u[g],f=r[m.materialIndex],_=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=_,b=S;y<b;y+=3){let T=o.getX(y),w=o.getX(y+1),x=o.getX(y+2);s=Yh(this,f,t,i,c,h,p,T,w,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,d.start),E=Math.min(o.count,d.start+d.count);for(let m=g,f=E;m<f;m+=3){let _=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);s=Yh(this,r,t,i,c,h,p,_,S,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,E=u.length;g<E;g++){let m=u[g],f=r[m.materialIndex],_=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=_,b=S;y<b;y+=3){let T=y,w=y+1,x=y+2;s=Yh(this,f,t,i,c,h,p,T,w,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,d.start),E=Math.min(l.count,d.start+d.count);for(let m=g,f=E;m<f;m+=3){let _=m,S=m+1,y=m+2;s=Yh(this,r,t,i,c,h,p,_,S,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function qw(e,t,n,i,s,a,r,o){let l;if(t.side===Un?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Oa,o),l===null)return null;qh.copy(o),qh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(qh);return c<n.near||c>n.far?null:{distance:c,point:qh.clone(),object:e}}function Yh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Gh),e.getVertexPosition(l,kh),e.getVertexPosition(c,Xh);let h=qw(e,t,n,i,Gh,kh,Xh,fb);if(h){let p=new O;Aa.getBarycoord(fb,Gh,kh,Xh,p),s&&(h.uv=Aa.getInterpolatedAttribute(s,o,l,c,p,new Dt)),a&&(h.uv1=Aa.getInterpolatedAttribute(a,o,l,c,p,new Dt)),r&&(h.normal=Aa.getInterpolatedAttribute(r,o,l,c,p,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new O,materialIndex:0};Aa.getNormal(Gh,kh,Xh,u.normal),h.face=u,h.barycoord=p}return h}var gf=class extends Nn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=rn,h=rn,p,u){super(null,r,o,l,c,h,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=new Xo,Yw=new Dt(.5,.5),Zh=new O,xc=class{constructor(t=new Oi,n=new Oi,i=new Oi,s=new Oi,a=new Oi,r=new Oi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ii,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],p=a[5],u=a[6],d=a[7],g=a[8],E=a[9],m=a[10],f=a[11],_=a[12],S=a[13],y=a[14],b=a[15];if(s[0].setComponents(c-r,d-h,f-g,b-_).normalize(),s[1].setComponents(c+r,d+h,f+g,b+_).normalize(),s[2].setComponents(c+o,d+p,f+E,b+S).normalize(),s[3].setComponents(c-o,d-p,f-E,b-S).normalize(),i)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,d-u,f-m,b-y).normalize();else if(s[4].setComponents(c-l,d-u,f-m,b-y).normalize(),n===Ii)s[5].setComponents(c+l,d+u,f+m,b+y).normalize();else if(n===dc)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(t){pr.center.set(0,0,0);let n=Yw.distanceTo(t.center);return pr.radius=.7071067811865476+n,pr.applyMatrix4(t.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Zh.x=s.normal.x>0?t.max.x:t.min.x,Zh.y=s.normal.y>0?t.max.y:t.min.y,Zh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Sc=class extends Nn{constructor(t=[],n=Ia,i,s,a,r,o,l,c,h){super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ca=class extends Nn{constructor(t,n,i=zi,s,a,r,o=rn,l=rn,c,h=ls,p=1){if(h!==ls&&h!==Ba)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Go(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},_f=class extends Ca{constructor(t,n=zi,i=Ia,s,a,r=rn,o=rn,l,c=ls){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Mc=class extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Wo=class e extends Pi{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],p=[],u=0,d=0;g("z","y","x",-1,-1,i,n,t,r,a,0),g("z","y","x",1,-1,i,n,-t,r,a,1),g("x","z","y",1,1,t,i,n,s,r,2),g("x","z","y",1,-1,t,i,-n,s,r,3),g("x","y","z",1,-1,t,n,i,s,a,4),g("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(h,3)),this.setAttribute("uv",new Rn(p,2));function g(E,m,f,_,S,y,b,T,w,x,A){let R=y/w,I=b/x,F=y/2,k=b/2,L=T/2,V=w+1,j=x+1,K=0,at=0,Z=new O;for(let nt=0;nt<j;nt++){let it=nt*I-k;for(let Ct=0;Ct<V;Ct++){let Et=Ct*R-F;Z[E]=Et*_,Z[m]=it*S,Z[f]=L,c.push(Z.x,Z.y,Z.z),Z[E]=0,Z[m]=0,Z[f]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),p.push(Ct/w),p.push(1-nt/x),K+=1}}for(let nt=0;nt<x;nt++)for(let it=0;it<w;it++){let Ct=u+it+V*nt,Et=u+it+V*(nt+1),ue=u+(it+1)+V*(nt+1),Wt=u+(it+1)+V*nt;l.push(Ct,Et,Wt),l.push(Et,ue,Wt),at+=6}o.addGroup(d,at,A),d+=at,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ut("Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),a=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),n.push(a),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),s=0,a=i.length,r;n?r=n:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);let h=i[s],u=i[s+1]-h,d=(r-h)/u;return(s+d)/(a-1)}getTangent(t,n){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=n||(r.isVector2?new Dt:new O);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new O,s=[],a=[],r=[],o=new O,l=new Fe;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new O)}a[0]=new O,r[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let d=1;d<=t;d++){if(a[d]=a[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Jt(s[d-1].dot(s[d]),-1,1));a[d].applyMatrix4(l.makeRotationAxis(o,g))}r[d].crossVectors(s[d],a[d])}if(n===!0){let d=Math.acos(Jt(a[0].dot(a[t]),-1,1));d/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(d=-d);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},bc=class extends Si{constructor(t=0,n=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new Dt){let i=n,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+t*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*p+this.aX,c=u*p+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},vf=class extends bc{constructor(t,n,i,s,a,r){super(t,n,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function q0(){let e=0,t=0,n=0,i=0;function s(a,r,o,l){e=a,t=o,n=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,p){let u=(r-a)/c-(o-a)/(c+h)+(o-r)/h,d=(o-r)/h-(l-r)/(h+p)+(l-o)/p;u*=h,d*=h,s(r,o,u,d)},calc:function(a){let r=a*a,o=r*a;return e+t*a+n*r+i*o}}}var db=new O,pb=new O,h0=new q0,f0=new q0,d0=new q0,yf=class extends Si{constructor(t=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=s}getPoint(t,n=new O){let i=n,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%a]:(pb.subVectors(s[0],s[1]).add(s[0]),c=pb);let p=s[o%a],u=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(db.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=db),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),d),E=Math.pow(p.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),h0.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,g,E,m),f0.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,g,E,m),d0.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(h0.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),f0.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),d0.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return i.set(h0.calc(l),f0.calc(l),d0.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function mb(e,t,n,i,s){let a=(i-t)*.5,r=(s-n)*.5,o=e*e,l=e*o;return(2*n-2*i+a+r)*l+(-3*n+3*i-2*a-r)*o+a*e+n}function Zw(e,t){let n=1-e;return n*n*t}function Jw(e,t){return 2*(1-e)*e*t}function Kw(e,t){return e*e*t}function lc(e,t,n,i){return Zw(e,t)+Jw(e,n)+Kw(e,i)}function Qw(e,t){let n=1-e;return n*n*n*t}function jw(e,t){let n=1-e;return 3*n*n*e*t}function $w(e,t){return 3*(1-e)*e*e*t}function tC(e,t){return e*e*e*t}function cc(e,t,n,i,s){return Qw(e,t)+jw(e,n)+$w(e,i)+tC(e,s)}var xf=class extends Si{constructor(t=new Dt,n=new Dt,i=new Dt,s=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new Dt){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(cc(t,s.x,a.x,r.x,o.x),cc(t,s.y,a.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Sf=class extends Si{constructor(t=new O,n=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new O){let i=n,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(cc(t,s.x,a.x,r.x,o.x),cc(t,s.y,a.y,r.y,o.y),cc(t,s.z,a.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Mf=class extends Si{constructor(t=new Dt,n=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Dt){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Dt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ra=class extends Si{constructor(t=new O,n=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new O){let i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new O){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bf=class extends Si{constructor(t=new Dt,n=new Dt,i=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new Dt){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(lc(t,s.x,a.x,r.x),lc(t,s.y,a.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ec=class extends Si{constructor(t=new O,n=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new O){let i=n,s=this.v0,a=this.v1,r=this.v2;return i.set(lc(t,s.x,a.x,r.x),lc(t,s.y,a.y,r.y),lc(t,s.z,a.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ef=class extends Si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Dt){let i=n,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],p=s[r>s.length-3?s.length-1:r+2];return i.set(mb(o,l.x,c.x,h.x,p.x),mb(o,l.y,c.y,h.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){let s=t.points[n];this.points.push(new Dt().fromArray(s))}return this}},eC=Object.freeze({__proto__:null,ArcCurve:vf,CatmullRomCurve3:yf,CubicBezierCurve:xf,CubicBezierCurve3:Sf,EllipseCurve:bc,LineCurve:Mf,LineCurve3:Ra,QuadraticBezierCurve:bf,QuadraticBezierCurve3:Ec,SplineCurve:Ef});var Na=class e extends Pi{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,p=t/o,u=n/l,d=[],g=[],E=[],m=[];for(let f=0;f<h;f++){let _=f*u-r;for(let S=0;S<c;S++){let y=S*p-a;g.push(y,-_,0),E.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){let S=_+c*f,y=_+c*(f+1),b=_+1+c*(f+1),T=_+1+c*f;d.push(S,y,T),d.push(y,b,T)}this.setIndex(d),this.setAttribute("position",new Rn(g,3)),this.setAttribute("normal",new Rn(E,3)),this.setAttribute("uv",new Rn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var _r=class e extends Pi{constructor(t=new Ec(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),n=64,i=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:i,radialSegments:s,closed:a};let r=t.computeFrenetFrames(n,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let o=new O,l=new O,c=new Dt,h=new O,p=[],u=[],d=[],g=[];E(),this.setIndex(g),this.setAttribute("position",new Rn(p,3)),this.setAttribute("normal",new Rn(u,3)),this.setAttribute("uv",new Rn(d,2));function E(){for(let S=0;S<n;S++)m(S);m(a===!1?n:0),_(),f()}function m(S){h=t.getPointAt(S/n,h);let y=r.normals[S],b=r.binormals[S];for(let T=0;T<=s;T++){let w=T/s*Math.PI*2,x=Math.sin(w),A=-Math.cos(w);l.x=A*y.x+x*b.x,l.y=A*y.y+x*b.y,l.z=A*y.z+x*b.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,p.push(o.x,o.y,o.z)}}function f(){for(let S=1;S<=n;S++)for(let y=1;y<=s;y++){let b=(s+1)*(S-1)+(y-1),T=(s+1)*S+(y-1),w=(s+1)*S+y,x=(s+1)*(S-1)+y;g.push(b,T,x),g.push(T,w,x)}}function _(){for(let S=0;S<=n;S++)for(let y=0;y<=s;y++)c.x=S/n,c.y=y/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new e(new eC[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function xr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(gb(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(gb(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Sn(e){let t={};for(let n=0;n<e.length;n++){let i=xr(e[n]);for(let s in i)t[s]=i[s]}return t}function gb(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function nC(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Y0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var r1={clone:xr,merge:Sn},iC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends gr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iC,this.fragmentShader=sC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xr(t.uniforms),this.uniformsGroups=nC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Xt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Dt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ie().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Bt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Fe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Tf=class extends ni{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Af=class extends gr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wf=class extends gr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Oo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function p0(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Da=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Cf=class extends Da{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:g0,endingEnd:g0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case _0:a=t,o=2*n-i;break;case v0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case _0:r=t,l=2*i-n;break;case v0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-n)/(s-n),E=g*g,m=E*g,f=-u*m+2*u*E-u*g,_=(1+u)*m+(-1.5-2*u)*E+(-.5+u)*g+1,S=(-1-d)*m+(1.5+d)*E+.5*g,y=d*m-d*E;for(let b=0;b!==o;++b)a[b]=f*r[h+b]+_*r[c+b]+S*r[l+b]+y*r[p+b];return a}},Rf=class extends Da{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),p=1-h;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*h;return a}},Nf=class extends Da{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Df=class extends Da{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(i-n)/(s-n),E=1-g;for(let m=0;m!==o;++m)a[m]=r[c+m]*E+r[l+m]*g;return a}let u=o*2,d=t-1;for(let g=0;g!==o;++g){let E=r[c+g],m=r[l+g],f=d*u+g*2,_=p[f],S=p[f+1],y=t*u+g*2,b=h[y],T=h[y+1],w=rC(i,n,_,b,s);a[g]=o1(w,E,S,T,m)}return a}};function o1(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function aC(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function rC(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=o1(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=aC(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var ii=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Oo(n,this.TimeBufferType),this.values=Oo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Oo(t.times,Array),values:Oo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),p0(t.settings)&&(i.settings={inTangents:Oo(t.settings.inTangents,Array),outTangents:Oo(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Nf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Rf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Cf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Df(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case uc:n=this.InterpolantFactoryMethodDiscrete;break;case uf:n=this.InterpolantFactoryMethodLinear;break;case Qh:n=this.InterpolantFactoryMethodSmooth;break;case m0:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ut("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return uc;case this.InterpolantFactoryMethodLinear:return uf;case this.InterpolantFactoryMethodSmooth:return Qh;case this.InterpolantFactoryMethodBezier:return m0}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;p0(this.settings)&&(_b(this.settings.inTangents,t),_b(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ot("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Ot("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&Cw(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ot("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Qh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let g=0;g!==i;++g){let E=n[p+g];if(E!==n[u+g]||E!==n[d+g]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,p0(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function _b(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=uf;var Ua=class extends ii{constructor(t,n,i){super(t,n,i)}};Ua.prototype.ValueTypeName="bool";Ua.prototype.ValueBufferType=Array;Ua.prototype.DefaultInterpolation=uc;Ua.prototype.InterpolantFactoryMethodLinear=void 0;Ua.prototype.InterpolantFactoryMethodSmooth=void 0;var Uf=class extends ii{constructor(t,n,i,s){super(t,n,i,s)}};Uf.prototype.ValueTypeName="color";var Lf=class extends ii{constructor(t,n,i,s){super(t,n,i,s)}};Lf.prototype.ValueTypeName="number";var Of=class extends Da{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)us.slerpFlat(a,0,r,c-o,r,c,l);return a}},Tc=class extends ii{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Of(this.times,this.values,this.getValueSize(),t)}};Tc.prototype.ValueTypeName="quaternion";Tc.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends ii{constructor(t,n,i){super(t,n,i)}};La.prototype.ValueTypeName="string";La.prototype.ValueBufferType=Array;La.prototype.DefaultInterpolation=uc;La.prototype.InterpolantFactoryMethodLinear=void 0;La.prototype.InterpolantFactoryMethodSmooth=void 0;var If=class extends ii{constructor(t,n,i,s){super(t,n,i,s)}};If.prototype.ValueTypeName="vector";var $h={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(vb(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!vb(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function vb(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Pf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],g=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},l1=new Pf,qo=class{constructor(t){this.manager=t!==void 0?t:l1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};qo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Io=new WeakMap,Bf=class extends qo{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=this,r=$h.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(t),setTimeout(function(){n&&n(r),a.manager.itemEnd(t)},0);else{let p=Io.get(r);p===void 0&&(p=[],Io.set(r,p)),p.push({onLoad:n,onError:s})}return r}let o=Ho("img");function l(){h(),n&&n(this);let p=Io.get(this)||[];for(let u=0;u<p.length;u++){let d=p[u];d.onLoad&&d.onLoad(this)}Io.delete(this),a.manager.itemEnd(t)}function c(p){h(),s&&s(p),$h.remove(`image:${t}`);let u=Io.get(this)||[];for(let d=0;d<u.length;d++){let g=u[d];g.onError&&g.onError(p)}Io.delete(this),a.manager.itemError(t),a.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$h.add(`image:${t}`,o),a.manager.itemStart(t),o.src=t,o}};var Ac=class extends qo{constructor(t){super(t)}load(t,n,i,s){let a=new Nn,r=new Bf(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,n!==void 0&&n(a)},i,s),a}};var Jh=new O,Kh=new us,rs=new O,wc=class extends xi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Jh,Kh,rs),rs.x===1&&rs.y===1&&rs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jh,Kh,rs.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Jh,Kh,rs),rs.x===1&&rs.y===1&&rs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jh,Kh,rs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ta=new O,yb=new Dt,xb=new Dt,xn=class extends wc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=hf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xg*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hf*2*Math.atan(Math.tan(Xg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ta.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ta.x,Ta.y).multiplyScalar(-t/Ta.z),Ta.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ta.x,Ta.y).multiplyScalar(-t/Ta.z)}getViewSize(t,n){return this.getViewBounds(t,yb,xb),n.subVectors(xb,yb)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Xg*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Cc=class extends wc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Po=-90,Bo=1,zf=class extends xi{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(Po,Bo,t,n);s.layers=this.layers,this.add(s);let a=new xn(Po,Bo,t,n);a.layers=this.layers,this.add(a);let r=new xn(Po,Bo,t,n);r.layers=this.layers,this.add(r);let o=new xn(Po,Bo,t,n);o.layers=this.layers,this.add(o);let l=new xn(Po,Bo,t,n);l.layers=this.layers,this.add(l);let c=new xn(Po,Bo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(p,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ff=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Z0="\\[\\]\\.:\\/",oC=new RegExp("["+Z0+"]","g"),J0="[^"+Z0+"]",lC="[^"+Z0.replace("\\.","")+"]",cC=/((?:WC+[\/:])*)/.source.replace("WC",J0),uC=/(WCOD+)?/.source.replace("WCOD",lC),hC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",J0),fC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",J0),dC=new RegExp("^"+cC+uC+hC+fC+"$"),pC=["material","materials","bones","map"],y0=class{constructor(t,n,i){let s=i||Ne.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ne=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(oC,"")}static parseTrackName(t){let n=dC.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);pC.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=y0;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ND=new Float32Array(1);var e_=class e_{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};e_.prototype.isMatrix2=!0;var x0=e_;function K0(e,t,n,i){let s=mC(i);switch(n){case H0:return e*t;case G0:return e*t/s.components*s.byteLength;case Yf:return e*t/s.components*s.byteLength;case za:return e*t*2/s.components*s.byteLength;case Zf:return e*t*2/s.components*s.byteLength;case V0:return e*t*3/s.components*s.byteLength;case Mi:return e*t*4/s.components*s.byteLength;case Jf:return e*t*4/s.components*s.byteLength;case Uc:case Lc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Oc:case Ic:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Qf:case $f:return Math.max(e,16)*Math.max(t,8)/4;case Kf:case jf:return Math.max(e,8)*Math.max(t,8)/2;case td:case ed:case id:case sd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case nd:case Pc:case ad:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case rd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case od:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ld:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case cd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ud:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case hd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case fd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case dd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case pd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case md:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case gd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case _d:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case vd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case yd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case xd:case Sd:case Md:return Math.ceil(e/4)*Math.ceil(t/4)*16;case bd:case Ed:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Bc:case Td:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function mC(e){switch(e){case ai:case P0:return{byteLength:1,components:1};case Jo:case B0:case Hi:return{byteLength:2,components:1};case Wf:case qf:return{byteLength:2,components:4};case zi:case Xf:case Fi:return{byteLength:4,components:1};case z0:case F0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function N1(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function _C(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<p.length;d++){let g=p[u],E=p[d];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,p[u]=E)}p.length=u+1;for(let d=0,g=p.length;d<g;d++){let E=p[d];e.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var vC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yC=`#ifdef USE_ALPHAHASH
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
#endif`,xC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EC=`#ifdef USE_AOMAP
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
#endif`,TC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AC=`#ifdef USE_BATCHING
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
#endif`,wC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DC=`#ifdef USE_IRIDESCENCE
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
#endif`,UC=`#ifdef USE_BUMPMAP
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
#endif`,LC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,OC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,FC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,HC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,VC=`#define PI 3.141592653589793
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
} // validated`,GC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kC=`vec3 transformedNormal = objectNormal;
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
#endif`,XC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZC="gl_FragColor = linearToOutputTexel( gl_FragColor );",JC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KC=`#ifdef USE_ENVMAP
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
#endif`,QC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jC=`#ifdef USE_ENVMAP
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
#endif`,$C=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tR=`#ifdef USE_ENVMAP
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
#endif`,eR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aR=`#ifdef USE_GRADIENTMAP
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
}`,rR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cR=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,uR=`#ifdef USE_ENVMAP
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
#endif`,hR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mR=`PhysicalMaterial material;
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
#endif`,gR=`uniform sampler2D dfgLUT;
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
}`,_R=`
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
#endif`,vR=`#if defined( RE_IndirectDiffuse )
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
#endif`,yR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xR=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,SR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ER=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CR=`#if defined( USE_POINTS_UV )
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
#endif`,RR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OR=`#ifdef USE_MORPHTARGETS
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
#endif`,IR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,VR=`#ifdef USE_NORMALMAP
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
#endif`,GR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$R=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i3=`float getShadowMask() {
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
}`,s3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a3=`#ifdef USE_SKINNING
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
#endif`,r3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o3=`#ifdef USE_SKINNING
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
#endif`,l3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f3=`#ifdef USE_TRANSMISSION
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
#endif`,d3=`#ifdef USE_TRANSMISSION
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
#endif`,p3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,v3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y3=`uniform sampler2D t2D;
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
}`,x3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E3=`#include <common>
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
}`,T3=`#if DEPTH_PACKING == 3200
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
}`,A3=`#define DISTANCE
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
}`,w3=`#define DISTANCE
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
}`,C3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N3=`uniform float scale;
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
}`,D3=`uniform vec3 diffuse;
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
}`,U3=`#include <common>
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
}`,L3=`uniform vec3 diffuse;
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
}`,O3=`#define LAMBERT
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
}`,I3=`#define LAMBERT
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
}`,P3=`#define MATCAP
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
}`,B3=`#define MATCAP
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
}`,z3=`#define NORMAL
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
}`,F3=`#define NORMAL
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
}`,H3=`#define PHONG
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
}`,V3=`#define PHONG
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
}`,G3=`#define STANDARD
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
}`,k3=`#define STANDARD
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
}`,X3=`#define TOON
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
}`,W3=`#define TOON
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
}`,q3=`uniform float size;
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
}`,Y3=`uniform vec3 diffuse;
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
}`,Z3=`#include <common>
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
}`,J3=`uniform vec3 color;
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
}`,K3=`uniform float rotation;
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
}`,Q3=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:vC,alphahash_pars_fragment:yC,alphamap_fragment:xC,alphamap_pars_fragment:SC,alphatest_fragment:MC,alphatest_pars_fragment:bC,aomap_fragment:EC,aomap_pars_fragment:TC,batching_pars_vertex:AC,batching_vertex:wC,begin_vertex:CC,beginnormal_vertex:RC,bsdfs:NC,iridescence_fragment:DC,bumpmap_pars_fragment:UC,clipping_planes_fragment:LC,clipping_planes_pars_fragment:OC,clipping_planes_pars_vertex:IC,clipping_planes_vertex:PC,color_fragment:BC,color_pars_fragment:zC,color_pars_vertex:FC,color_vertex:HC,common:VC,cube_uv_reflection_fragment:GC,defaultnormal_vertex:kC,displacementmap_pars_vertex:XC,displacementmap_vertex:WC,emissivemap_fragment:qC,emissivemap_pars_fragment:YC,colorspace_fragment:ZC,colorspace_pars_fragment:JC,envmap_fragment:KC,envmap_common_pars_fragment:QC,envmap_pars_fragment:jC,envmap_pars_vertex:$C,envmap_physical_pars_fragment:uR,envmap_vertex:tR,fog_vertex:eR,fog_pars_vertex:nR,fog_fragment:iR,fog_pars_fragment:sR,gradientmap_pars_fragment:aR,lightmap_pars_fragment:rR,lights_lambert_fragment:oR,lights_lambert_pars_fragment:lR,lights_pars_begin:cR,lights_toon_fragment:hR,lights_toon_pars_fragment:fR,lights_phong_fragment:dR,lights_phong_pars_fragment:pR,lights_physical_fragment:mR,lights_physical_pars_fragment:gR,lights_fragment_begin:_R,lights_fragment_maps:vR,lights_fragment_end:yR,lightprobes_pars_fragment:xR,logdepthbuf_fragment:SR,logdepthbuf_pars_fragment:MR,logdepthbuf_pars_vertex:bR,logdepthbuf_vertex:ER,map_fragment:TR,map_pars_fragment:AR,map_particle_fragment:wR,map_particle_pars_fragment:CR,metalnessmap_fragment:RR,metalnessmap_pars_fragment:NR,morphinstance_vertex:DR,morphcolor_vertex:UR,morphnormal_vertex:LR,morphtarget_pars_vertex:OR,morphtarget_vertex:IR,normal_fragment_begin:PR,normal_fragment_maps:BR,normal_pars_fragment:zR,normal_pars_vertex:FR,normal_vertex:HR,normalmap_pars_fragment:VR,clearcoat_normal_fragment_begin:GR,clearcoat_normal_fragment_maps:kR,clearcoat_pars_fragment:XR,iridescence_pars_fragment:WR,opaque_fragment:qR,packing:YR,premultiplied_alpha_fragment:ZR,project_vertex:JR,dithering_fragment:KR,dithering_pars_fragment:QR,roughnessmap_fragment:jR,roughnessmap_pars_fragment:$R,shadowmap_pars_fragment:t3,shadowmap_pars_vertex:e3,shadowmap_vertex:n3,shadowmask_pars_fragment:i3,skinbase_vertex:s3,skinning_pars_vertex:a3,skinning_vertex:r3,skinnormal_vertex:o3,specularmap_fragment:l3,specularmap_pars_fragment:c3,tonemapping_fragment:u3,tonemapping_pars_fragment:h3,transmission_fragment:f3,transmission_pars_fragment:d3,uv_pars_fragment:p3,uv_pars_vertex:m3,uv_vertex:g3,worldpos_vertex:_3,background_vert:v3,background_frag:y3,backgroundCube_vert:x3,backgroundCube_frag:S3,cube_vert:M3,cube_frag:b3,depth_vert:E3,depth_frag:T3,distance_vert:A3,distance_frag:w3,equirect_vert:C3,equirect_frag:R3,linedashed_vert:N3,linedashed_frag:D3,meshbasic_vert:U3,meshbasic_frag:L3,meshlambert_vert:O3,meshlambert_frag:I3,meshmatcap_vert:P3,meshmatcap_frag:B3,meshnormal_vert:z3,meshnormal_frag:F3,meshphong_vert:H3,meshphong_frag:V3,meshphysical_vert:G3,meshphysical_frag:k3,meshtoon_vert:X3,meshtoon_frag:W3,points_vert:q3,points_frag:Y3,shadow_vert:Z3,shadow_frag:J3,sprite_vert:K3,sprite_frag:Q3},pt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},ds={basic:{uniforms:Sn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Sn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Sn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Sn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Sn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Sn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Sn([pt.points,pt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Sn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Sn([pt.common,pt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Sn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Sn([pt.sprite,pt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:Sn([pt.common,pt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:Sn([pt.lights,pt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};ds.physical={uniforms:Sn([ds.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var Cd={r:0,b:0,g:0},j3=new Fe,D1=new Bt;D1.set(-1,0,0,0,1,0,0,0,1);function $3(e,t,n,i,s,a){let r=new Xt(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function d(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let y=_.backgroundBlurriness>0;S=t.get(S,y)}return S}function g(_){let S=!1,y=d(_);y===null?m(r,o):y&&y.isColor&&(m(y,1),S=!0);let b=e.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function E(_,S){let y=d(S);y&&(y.isCubeTexture||y.mapping===Nc)?(c===void 0&&(c=new Dn(new Wo(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:xr(ds.backgroundCube.uniforms),vertexShader:ds.backgroundCube.vertexShader,fragmentShader:ds.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(j3.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(D1),c.material.toneMapped=$t.getTransfer(y.colorSpace)!==ce,(h!==y||p!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=y,p=y.version,u=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Dn(new Na(2,2),new ni({name:"BackgroundMaterial",uniforms:xr(ds.background.uniforms),vertexShader:ds.background.vertexShader,fragmentShader:ds.background.fragmentShader,side:Oa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=$t.getTransfer(y.colorSpace)!==ce,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=y,p=y.version,u=e.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,S){_.getRGB(Cd,Y0(e)),n.buffers.color.setClear(Cd.r,Cd.g,Cd.b,S,a)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,S=1){r.set(_),o=S,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(r,o)},render:g,addToRenderList:E,dispose:f}}function t2(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(I,F,k,L,V){let j=!1,K=p(I,L,k,F);a!==K&&(a=K,c(a.object)),j=d(I,L,k,V),j&&g(I,L,k,V),V!==null&&t.update(V,e.ELEMENT_ARRAY_BUFFER),(j||r)&&(r=!1,y(I,F,k,L),V!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return e.createVertexArray()}function c(I){return e.bindVertexArray(I)}function h(I){return e.deleteVertexArray(I)}function p(I,F,k,L){let V=L.wireframe===!0,j=i[F.id];j===void 0&&(j={},i[F.id]=j);let K=I.isInstancedMesh===!0?I.id:0,at=j[K];at===void 0&&(at={},j[K]=at);let Z=at[k.id];Z===void 0&&(Z={},at[k.id]=Z);let nt=Z[V];return nt===void 0&&(nt=u(l()),Z[V]=nt),nt}function u(I){let F=[],k=[],L=[];for(let V=0;V<n;V++)F[V]=0,k[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:L,object:I,attributes:{},index:null}}function d(I,F,k,L){let V=a.attributes,j=F.attributes,K=0,at=k.getAttributes();for(let Z in at)if(at[Z].location>=0){let it=V[Z],Ct=j[Z];if(Ct===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(Ct=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(Ct=I.instanceColor)),it===void 0||it.attribute!==Ct||Ct&&it.data!==Ct.data)return!0;K++}return a.attributesNum!==K||a.index!==L}function g(I,F,k,L){let V={},j=F.attributes,K=0,at=k.getAttributes();for(let Z in at)if(at[Z].location>=0){let it=j[Z];it===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(it=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(it=I.instanceColor));let Ct={};Ct.attribute=it,it&&it.data&&(Ct.data=it.data),V[Z]=Ct,K++}a.attributes=V,a.attributesNum=K,a.index=L}function E(){let I=a.newAttributes;for(let F=0,k=I.length;F<k;F++)I[F]=0}function m(I){f(I,0)}function f(I,F){let k=a.newAttributes,L=a.enabledAttributes,V=a.attributeDivisors;k[I]=1,L[I]===0&&(e.enableVertexAttribArray(I),L[I]=1),V[I]!==F&&(e.vertexAttribDivisor(I,F),V[I]=F)}function _(){let I=a.newAttributes,F=a.enabledAttributes;for(let k=0,L=F.length;k<L;k++)F[k]!==I[k]&&(e.disableVertexAttribArray(k),F[k]=0)}function S(I,F,k,L,V,j,K){K===!0?e.vertexAttribIPointer(I,F,k,V,j):e.vertexAttribPointer(I,F,k,L,V,j)}function y(I,F,k,L){E();let V=L.attributes,j=k.getAttributes(),K=F.defaultAttributeValues;for(let at in j){let Z=j[at];if(Z.location>=0){let nt=V[at];if(nt===void 0&&(at==="instanceMatrix"&&I.instanceMatrix&&(nt=I.instanceMatrix),at==="instanceColor"&&I.instanceColor&&(nt=I.instanceColor)),nt!==void 0){let it=nt.normalized,Ct=nt.itemSize,Et=t.get(nt);if(Et===void 0)continue;let ue=Et.buffer,Wt=Et.type,te=Et.bytesPerElement,Y=Wt===e.INT||Wt===e.UNSIGNED_INT||nt.gpuType===Xf;if(nt.isInterleavedBufferAttribute){let et=nt.data,dt=et.stride,Nt=nt.offset;if(et.isInstancedInterleavedBuffer){for(let mt=0;mt<Z.locationSize;mt++)f(Z.location+mt,et.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let mt=0;mt<Z.locationSize;mt++)m(Z.location+mt);e.bindBuffer(e.ARRAY_BUFFER,ue);for(let mt=0;mt<Z.locationSize;mt++)S(Z.location+mt,Ct/Z.locationSize,Wt,it,dt*te,(Nt+Ct/Z.locationSize*mt)*te,Y)}else{if(nt.isInstancedBufferAttribute){for(let et=0;et<Z.locationSize;et++)f(Z.location+et,nt.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let et=0;et<Z.locationSize;et++)m(Z.location+et);e.bindBuffer(e.ARRAY_BUFFER,ue);for(let et=0;et<Z.locationSize;et++)S(Z.location+et,Ct/Z.locationSize,Wt,it,Ct*te,Ct/Z.locationSize*et*te,Y)}}else if(K!==void 0){let it=K[at];if(it!==void 0)switch(it.length){case 2:e.vertexAttrib2fv(Z.location,it);break;case 3:e.vertexAttrib3fv(Z.location,it);break;case 4:e.vertexAttrib4fv(Z.location,it);break;default:e.vertexAttrib1fv(Z.location,it)}}}}_()}function b(){A();for(let I in i){let F=i[I];for(let k in F){let L=F[k];for(let V in L){let j=L[V];for(let K in j)h(j[K].object),delete j[K];delete L[V]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;let F=i[I.id];for(let k in F){let L=F[k];for(let V in L){let j=L[V];for(let K in j)h(j[K].object),delete j[K];delete L[V]}}delete i[I.id]}function w(I){for(let F in i){let k=i[F];for(let L in k){let V=k[L];if(V[I.id]===void 0)continue;let j=V[I.id];for(let K in j)h(j[K].object),delete j[K];delete V[I.id]}}}function x(I){for(let F in i){let k=i[F],L=I.isInstancedMesh===!0?I.id:0,V=k[L];if(V!==void 0){for(let j in V){let K=V[j];for(let at in K)h(K[at].object),delete K[at];delete V[j]}delete k[L],Object.keys(k).length===0&&delete i[F]}}}function A(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:E,enableAttribute:m,disableUnusedAttributes:_}}function e2(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function n2(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==Mi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let x=w===Hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ai&&w!==Fi&&!x&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(Ut("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:y,maxSamples:b,samples:T}}function i2(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Oi,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=h(p,u,0)},this.setState=function(p,u,d){let g=p.clippingPlanes,E=p.clipIntersection,m=p.clipShadows,f=e.get(p);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{let _=a?0:i,S=_*4,y=f.clippingState||null;l.value=y,y=h(g,u,S,d);for(let b=0;b!==S;++b)y[b]=n[b];f.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,u,d,g){let E=p!==null?p.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let f=d+E*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,y=d;S!==E;++S,y+=4)r.copy(p[S]).applyMatrix4(_,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,m}}var jo=4,s2=6,a2=20,r2=256,Fc=new Cc,c1=new Xt,n_=null,i_=0,s_=0,a_=!1,o2=new O,Sr=new O,Nd=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=o2}=a;n_=this._renderer.getRenderTarget(),i_=this._renderer.getActiveCubeFace(),s_=this._renderer.getActiveMipmapLevel(),a_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=f1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(n_,i_,s_),this._renderer.xr.enabled=a_,t.scissorTest=!1,Qo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ia||t.mapping===yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),n_=this._renderer.getRenderTarget(),i_=this._renderer.getActiveCubeFace(),s_=this._renderer.getActiveMipmapLevel(),a_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Hi,format:Mi,colorSpace:hc,depthBuffer:!1},s=u1(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=u1(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=l2(a)),this._blurMaterial=u2(a,t,n),this._ggxMaterial=c2(a,t,n)}return s}_compileMaterial(t){let n=new Dn(new Pi,t);this._renderer.compile(n,Fc)}_sceneToCubeUV(t,n,i,s,a){let l=new xn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(c1),p.toneMapping=Bi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dn(new Wo,new zs({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,m=E.material,f=!1,_=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,f=!0):(m.color.copy(c1),f=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[S],a.y,a.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[S],a.z)):(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[S]));let b=this._cubeSize;Qo(s,y*b,S>2?b:0,b,b),p.setRenderTarget(s),f&&p.render(E,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=_}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Ia||t.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=f1()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=h1());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Qo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Fc)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,d=p*u,{_lodMax:g}=this,E=this._sizeLods[i],m=3*E*(i>g-jo?i-g+jo:0),f=4*(this._cubeSize-E);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-n,Qo(a,m,f,3*E,2*E),s.setRenderTarget(a),s.render(o,Fc),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-i,Qo(t,m,f,3*E,2*E),s.setRenderTarget(t),s.render(o,Fc)}_blur(t,n,i,s){let a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,a,n,i,r),this._blurPass(a,t,i,i,r)}_blurPass(t,n,i,s,a){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-jo?s-this._lodMax+jo:0),u=4*(this._cubeSize-h);Qo(n,p,u,3*h,2*h),r.setRenderTarget(n),r.render(l,Fc)}};function l2(e){let t=[],n=[],i=e,s=e-jo+1+s2;for(let a=0;a<s;a++){let r=Math.pow(2,i);t.push(r);let o=1/(r-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,d=3,g=new Float32Array(d*u*p),E=new Float32Array(d*u*p);for(let f=0;f<p;f++){let _=f%3*2/3-1,S=f>2?0:-1,y=[_,S,0,_+2/3,S,0,_+2/3,S+1,0,_,S,0,_+2/3,S+1,0,_,S+1,0];g.set(y,d*u*f);for(let b=0;b<u;b++){let T=h[b*2]*2-1,w=h[b*2+1]*2-1;f===0?Sr.set(1,w,T):f===1?Sr.set(-T,1,-w):f===2?Sr.set(-T,w,1):f===3?Sr.set(-1,w,-T):f===4?Sr.set(-T,-1,w):Sr.set(T,w,-1),Sr.toArray(E,(f*u+b)*d)}}let m=new Pi;m.setAttribute("position",new yi(g,d)),m.setAttribute("outputDirection",new yi(E,d)),n.push(new Dn(m,null)),i>jo&&i--}return{lodMeshes:n,sizeLods:t}}function u1(e,t,n){let i=new Vn(e,t,n);return i.texture.mapping=Nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qo(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function c2(e,t,n){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:r2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:hs,depthTest:!1,depthWrite:!1})}function u2(e,t,n){return new ni({name:"SphericalGaussianBlur",defines:{SAMPLES:a2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:hs,depthTest:!1,depthWrite:!1})}function h1(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:hs,depthTest:!1,depthWrite:!1})}function f1(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function Ld(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Dd=class extends Vn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Sc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wo(5,5,5),a=new ni({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Un,blending:hs});a.uniforms.tEquirect.value=n;let r=new Dn(s,a),o=n.minFilter;return n.minFilter===Pa&&(n.minFilter=Qe),new zf(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};function h2(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===Vf||d===Gf)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let E=new Dd(g.height);return E.fromEquirectangularTexture(e,u),t.set(u,E),u.addEventListener("dispose",c),o(E.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,g=d===Vf||d===Gf,E=d===Ia||d===yr;if(g||E){let m=n.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Nd(e)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let _=u.image;return g&&_&&_.height>0||E&&_&&l(_)?(i===null&&(i=new Nd(e)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===Vf?u.mapping=Ia:d===Gf&&(u.mapping=yr),u}function l(u){let d=0,g=6;for(let E=0;E<g;E++)u[E]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=n.get(d);g!==void 0&&(n.delete(d),g.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function f2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&mr("WebGLRenderer: "+i+" extension not supported."),s}}}function d2(e,t,n,i){let s={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete s[u.id];let d=a.get(u);d&&(t.remove(d),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,g=p.attributes.position,E=0;if(g===void 0)return;if(d!==null){let _=d.array;E=d.version;for(let S=0,y=_.length;S<y;S+=3){let b=_[S+0],T=_[S+1],w=_[S+2];u.push(b,T,T,w,w,b)}}else{let _=g.array;E=g.version;for(let S=0,y=_.length/3-1;S<y;S+=3){let b=S+0,T=S+1,w=S+2;u.push(b,T,T,w,w,b)}}let m=new(g.count>=65535?yc:vc)(u,1);m.version=E;let f=a.get(p);f&&t.remove(f),a.set(p,m)}function h(p){let u=a.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function p2(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function h(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let E=0;for(let m=0;m<d;m++)E+=u[m];n.update(E,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function m2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Ot("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function g2(e,t,n){let i=new WeakMap,s=new Ie;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==p){let A=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],S=0;d===!0&&(S=1),g===!0&&(S=2),E===!0&&(S=3);let y=o.attributes.position.count*S,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*b*4*p),w=new pc(T,y,b,p);w.type=Fi,w.needsUpdate=!0;let x=S*4;for(let R=0;R<p;R++){let I=m[R],F=f[R],k=_[R],L=y*b*4*R;for(let V=0;V<I.count;V++){let j=V*x;d===!0&&(s.fromBufferAttribute(I,V),T[L+j+0]=s.x,T[L+j+1]=s.y,T[L+j+2]=s.z,T[L+j+3]=0),g===!0&&(s.fromBufferAttribute(F,V),T[L+j+4]=s.x,T[L+j+5]=s.y,T[L+j+6]=s.z,T[L+j+7]=0),E===!0&&(s.fromBufferAttribute(k,V),T[L+j+8]=s.x,T[L+j+9]=s.y,T[L+j+10]=s.z,T[L+j+11]=k.itemSize===4?s.w:1)}}u={count:p,texture:w,size:new Dt(y,b)},i.set(o,u),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let E=0;E<c.length;E++)d+=c[E];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function _2(e,t,n,i,s){let a=new WeakMap;function r(c){let h=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function o(){a=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}var v2={[C0]:"LINEAR_TONE_MAPPING",[R0]:"REINHARD_TONE_MAPPING",[N0]:"CINEON_TONE_MAPPING",[D0]:"ACES_FILMIC_TONE_MAPPING",[L0]:"AGX_TONE_MAPPING",[O0]:"NEUTRAL_TONE_MAPPING",[U0]:"CUSTOM_TONE_MAPPING"};function y2(e,t,n,i,s,a){let r=new Vn(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Pi;c.setAttribute("position",new Rn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Rn([0,2,0,0,2,0],2));let h=new Tf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Dn(c,h),u=new Cc(-1,1,1,-1,0,1),d=null,g=null,E=!1,m,f=null,_=[],S=!1;this.setSize=function(y,b){r.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let T=0;T<_.length;T++){let w=_[T];w.setSize&&w.setSize(y,b)}},this.setEffects=function(y){_=y,S=_.length>0&&_[0].isRenderPass===!0;let b=r.width,T=r.height;_.length>0&&o===null&&(o=new Vn(b,T,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),l=new Vn(b,T,{type:Hi,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<_.length;w++){let x=_[w];x.setSize&&x.setSize(b,T)}},this.begin=function(y,b){if(E||y.toneMapping===Bi&&_.length===0)return!1;if(f=b,b!==null){let T=b.width,w=b.height;(r.width!==T||r.height!==w)&&this.setSize(T,w)}return S===!1&&y.setRenderTarget(r),m=y.toneMapping,y.toneMapping=Bi,!0},this.hasRenderPass=function(){return S},this.end=function(y,b){y.toneMapping=m,E=!0;let T=r,w=o;for(let x=0;x<_.length;x++){let A=_[x];A.enabled!==!1&&(A.render(y,w,T,b),A.needsSwap!==!1&&(T=w,w=w===o?l:o))}if(d!==y.outputColorSpace||g!==y.toneMapping){d=y.outputColorSpace,g=y.toneMapping,h.defines={},$t.getTransfer(d)===ce&&(h.defines.SRGB_TRANSFER="");let x=v2[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(f),y.render(p,u),f=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var U1=new Nn,l_=new Ca(1,1),L1=new pc,O1=new pf,I1=new Sc,d1=[],p1=[],m1=new Float32Array(16),g1=new Float32Array(9),_1=new Float32Array(4);function tl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=d1[s];if(a===void 0&&(a=new Float32Array(s),d1[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function je(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function $e(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Od(e,t){let n=p1[t];n===void 0&&(n=new Int32Array(t),p1[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function x2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function S2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2fv(this.addr,t),$e(n,t)}}function M2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(je(n,t))return;e.uniform3fv(this.addr,t),$e(n,t)}}function b2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4fv(this.addr,t),$e(n,t)}}function E2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),$e(n,t)}else{if(je(n,i))return;_1.set(i),e.uniformMatrix2fv(this.addr,!1,_1),$e(n,i)}}function T2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),$e(n,t)}else{if(je(n,i))return;g1.set(i),e.uniformMatrix3fv(this.addr,!1,g1),$e(n,i)}}function A2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(je(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),$e(n,t)}else{if(je(n,i))return;m1.set(i),e.uniformMatrix4fv(this.addr,!1,m1),$e(n,i)}}function w2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function C2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2iv(this.addr,t),$e(n,t)}}function R2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3iv(this.addr,t),$e(n,t)}}function N2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4iv(this.addr,t),$e(n,t)}}function D2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function U2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(je(n,t))return;e.uniform2uiv(this.addr,t),$e(n,t)}}function L2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(je(n,t))return;e.uniform3uiv(this.addr,t),$e(n,t)}}function O2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(je(n,t))return;e.uniform4uiv(this.addr,t),$e(n,t)}}function I2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(l_.compareFunction=n.isReversedDepthBuffer()?wd:Ad,a=l_):a=U1,n.setTexture2D(t||a,s)}function P2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||O1,s)}function B2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||I1,s)}function z2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||L1,s)}function F2(e){switch(e){case 5126:return x2;case 35664:return S2;case 35665:return M2;case 35666:return b2;case 35674:return E2;case 35675:return T2;case 35676:return A2;case 5124:case 35670:return w2;case 35667:case 35671:return C2;case 35668:case 35672:return R2;case 35669:case 35673:return N2;case 5125:return D2;case 36294:return U2;case 36295:return L2;case 36296:return O2;case 35678:case 36198:case 36298:case 36306:case 35682:return I2;case 35679:case 36299:case 36307:return P2;case 35680:case 36300:case 36308:case 36293:return B2;case 36289:case 36303:case 36311:case 36292:return z2}}function H2(e,t){e.uniform1fv(this.addr,t)}function V2(e,t){let n=tl(t,this.size,2);e.uniform2fv(this.addr,n)}function G2(e,t){let n=tl(t,this.size,3);e.uniform3fv(this.addr,n)}function k2(e,t){let n=tl(t,this.size,4);e.uniform4fv(this.addr,n)}function X2(e,t){let n=tl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function W2(e,t){let n=tl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function q2(e,t){let n=tl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Y2(e,t){e.uniform1iv(this.addr,t)}function Z2(e,t){e.uniform2iv(this.addr,t)}function J2(e,t){e.uniform3iv(this.addr,t)}function K2(e,t){e.uniform4iv(this.addr,t)}function Q2(e,t){e.uniform1uiv(this.addr,t)}function j2(e,t){e.uniform2uiv(this.addr,t)}function $2(e,t){e.uniform3uiv(this.addr,t)}function tN(e,t){e.uniform4uiv(this.addr,t)}function eN(e,t,n){let i=this.cache,s=t.length,a=Od(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=l_:r=U1;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function nN(e,t,n){let i=this.cache,s=t.length,a=Od(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||O1,a[r])}function iN(e,t,n){let i=this.cache,s=t.length,a=Od(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||I1,a[r])}function sN(e,t,n){let i=this.cache,s=t.length,a=Od(n,s);je(i,a)||(e.uniform1iv(this.addr,a),$e(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||L1,a[r])}function aN(e){switch(e){case 5126:return H2;case 35664:return V2;case 35665:return G2;case 35666:return k2;case 35674:return X2;case 35675:return W2;case 35676:return q2;case 5124:case 35670:return Y2;case 35667:case 35671:return Z2;case 35668:case 35672:return J2;case 35669:case 35673:return K2;case 5125:return Q2;case 36294:return j2;case 36295:return $2;case 36296:return tN;case 35678:case 36198:case 36298:case 36306:case 35682:return eN;case 35679:case 36299:case 36307:return nN;case 35680:case 36300:case 36308:case 36293:return iN;case 36289:case 36303:case 36311:case 36292:return sN}}var c_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=F2(n.type)}},u_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=aN(n.type)}},h_=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},r_=/(\w+)(\])?(\[|\.)?/g;function v1(e,t){e.seq.push(t),e.map[t.id]=t}function rN(e,t,n){let i=e.name,s=i.length;for(r_.lastIndex=0;;){let a=r_.exec(i),r=r_.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){v1(n,c===void 0?new c_(o,e,t):new u_(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new h_(o),v1(n,p)),n=p}}}var $o=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);rN(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function y1(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var oN=37297,lN=0;function cN(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var x1=new Bt;function uN(e){$t._getMatrix(x1,$t.workingColorSpace,e);let t=`mat3( ${x1.elements.map(n=>n.toFixed(4))} )`;switch($t.getTransfer(e)){case fc:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function S1(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+cN(e.getShaderSource(t),o)}else return a}function hN(e,t){let n=uN(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var fN={[C0]:"Linear",[R0]:"Reinhard",[N0]:"Cineon",[D0]:"ACESFilmic",[L0]:"AgX",[O0]:"Neutral",[U0]:"Custom"};function dN(e,t){let n=fN[t];return n===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Rd=new O;function pN(){$t.getLuminanceCoefficients(Rd);let e=Rd.x.toFixed(4),t=Rd.y.toFixed(4),n=Rd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mN(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vc).join(`
`)}function gN(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function _N(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Vc(e){return e!==""}function M1(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function b1(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vN=/^[ \t]*#include +<([\w\d./]+)>/gm;function f_(e){return e.replace(vN,xN)}var yN=new Map;function xN(e,t){let n=Gt[t];if(n===void 0){let i=yN.get(t);if(i!==void 0)n=Gt[i],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return f_(n)}var SN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function E1(e){return e.replace(SN,MN)}function MN(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function T1(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var bN={[Rc]:"SHADOWMAP_TYPE_PCF",[Yo]:"SHADOWMAP_TYPE_VSM"};function EN(e){return bN[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var TN={[Ia]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[Nc]:"ENVMAP_TYPE_CUBE_UV"};function AN(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":TN[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var wN={[yr]:"ENVMAP_MODE_REFRACTION"};function CN(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":wN[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var RN={[w0]:"ENVMAP_BLENDING_MULTIPLY",[Gb]:"ENVMAP_BLENDING_MIX",[kb]:"ENVMAP_BLENDING_ADD"};function NN(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":RN[e.combine]||"ENVMAP_BLENDING_NONE"}function DN(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function UN(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=EN(n),c=AN(n),h=CN(n),p=NN(n),u=DN(n),d=mN(n),g=gN(a),E=s.createProgram(),m,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Vc).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Vc).join(`
`),f.length>0&&(f+=`
`)):(m=[T1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vc).join(`
`),f=[T1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bi?"#define TONE_MAPPING":"",n.toneMapping!==Bi?Gt.tonemapping_pars_fragment:"",n.toneMapping!==Bi?dN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,hN("linearToOutputTexel",n.outputColorSpace),pN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vc).join(`
`)),r=f_(r),r=M1(r,n),r=b1(r,n),o=f_(o),o=M1(o,n),o=b1(o,n),r=E1(r),o=E1(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===X0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===X0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=_+m+r,y=_+f+o,b=y1(s,s.VERTEX_SHADER,S),T=y1(s,s.FRAGMENT_SHADER,y);s.attachShader(E,b),s.attachShader(E,T),n.index0AttributeName!==void 0?s.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function w(I){if(e.debug.checkShaderErrors){let F=s.getProgramInfoLog(E)||"",k=s.getShaderInfoLog(b)||"",L=s.getShaderInfoLog(T)||"",V=F.trim(),j=k.trim(),K=L.trim(),at=!0,Z=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(at=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,E,b,T);else{let nt=S1(s,b,"vertex"),it=S1(s,T,"fragment");Ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+nt+`
`+it)}else V!==""?Ut("WebGLProgram: Program Info Log:",V):(j===""||K==="")&&(Z=!1);Z&&(I.diagnostics={runnable:at,programLog:V,vertexShader:{log:j,prefix:m},fragmentShader:{log:K,prefix:f}})}s.deleteShader(b),s.deleteShader(T),x=new $o(s,E),A=_N(s,E)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(E,oN)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lN++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=b,this.fragmentShader=T,this}var LN=0,d_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new p_(t),n.set(t,i)),i}},p_=class{constructor(t){this.id=LN++,this.code=t,this.usedTimes=0}};function ON(e){return e===za||e===Pc||e===Bc}function IN(e,t,n,i,s,a){let r=new mc,o=new d_,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function E(x,A,R,I,F,k){let L=I.fog,V=F.geometry,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,at=t.get(x.envMap||j,K),Z=at&&at.mapping===Nc?at.image.height:null,nt=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ut("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let it=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ct=it!==void 0?it.length:0,Et=0;V.morphAttributes.position!==void 0&&(Et=1),V.morphAttributes.normal!==void 0&&(Et=2),V.morphAttributes.color!==void 0&&(Et=3);let ue,Wt,te,Y;if(nt){let be=ds[nt];ue=be.vertexShader,Wt=be.fragmentShader}else{ue=x.vertexShader,Wt=x.fragmentShader;let be=o.getVertexShaderStage(x),re=o.getFragmentShaderStage(x);o.update(x,be,re),te=be.id,Y=re.id}let et=e.getRenderTarget(),dt=e.state.buffers.depth.getReversed(),Nt=F.isInstancedMesh===!0,mt=F.isBatchedMesh===!0,It=!!x.map,De=!!x.matcap,zt=!!at,Kt=!!x.aoMap,ae=!!x.lightMap,Ft=!!x.bumpMap&&x.wireframe===!1,me=!!x.normalMap,Pe=!!x.displacementMap,Ye=!!x.emissiveMap,Se=!!x.metalnessMap,he=!!x.roughnessMap,U=x.anisotropy>0,Me=x.clearcoat>0,Qt=x.dispersion>0,C=x.retroreflectivity>0,v=x.iridescence>0,P=x.sheen>0,H=x.transmission>0,q=U&&!!x.anisotropyMap,lt=Me&&!!x.clearcoatMap,ut=Me&&!!x.clearcoatNormalMap,J=Me&&!!x.clearcoatRoughnessMap,$=v&&!!x.iridescenceMap,ht=v&&!!x.iridescenceThicknessMap,Tt=P&&!!x.sheenColorMap,X=P&&!!x.sheenRoughnessMap,Q=!!x.specularMap,ot=!!x.specularColorMap,ft=!!x.specularIntensityMap,St=H&&!!x.transmissionMap,N=H&&!!x.thicknessMap,rt=!!x.gradientMap,W=!!x.alphaMap,ct=x.alphaTest>0,vt=!!x.alphaHash,st=!!x.extensions,Rt=Bi;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Rt=e.toneMapping);let At={shaderID:nt,shaderType:x.type,shaderName:x.name,vertexShader:ue,fragmentShader:Wt,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:mt,batchingColor:mt&&F._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&F.instanceColor!==null,instancingMorph:Nt&&F.morphTexture!==null,outputColorSpace:et===null?e.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:It,matcap:De,envMap:zt,envMapMode:zt&&at.mapping,envMapCubeUVHeight:Z,aoMap:Kt,lightMap:ae,bumpMap:Ft,normalMap:me,displacementMap:Pe,emissiveMap:Ye,normalMapObjectSpace:me&&x.normalMapType===qb,normalMapTangentSpace:me&&x.normalMapType===k0,packedNormalMap:me&&x.normalMapType===k0&&ON(x.normalMap.format),metalnessMap:Se,roughnessMap:he,anisotropy:U,anisotropyMap:q,clearcoat:Me,clearcoatMap:lt,clearcoatNormalMap:ut,clearcoatRoughnessMap:J,dispersion:Qt,retroreflection:C,iridescence:v,iridescenceMap:$,iridescenceThicknessMap:ht,sheen:P,sheenColorMap:Tt,sheenRoughnessMap:X,specularMap:Q,specularColorMap:ot,specularIntensityMap:ft,transmission:H,transmissionMap:St,thicknessMap:N,gradientMap:rt,opaque:x.transparent===!1&&x.blending===Zo&&x.alphaToCoverage===!1,alphaMap:W,alphaTest:ct,alphaHash:vt,combine:x.combine,mapUv:It&&g(x.map.channel),aoMapUv:Kt&&g(x.aoMap.channel),lightMapUv:ae&&g(x.lightMap.channel),bumpMapUv:Ft&&g(x.bumpMap.channel),normalMapUv:me&&g(x.normalMap.channel),displacementMapUv:Pe&&g(x.displacementMap.channel),emissiveMapUv:Ye&&g(x.emissiveMap.channel),metalnessMapUv:Se&&g(x.metalnessMap.channel),roughnessMapUv:he&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:lt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ut&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:X&&g(x.sheenRoughnessMap.channel),specularMapUv:Q&&g(x.specularMap.channel),specularColorMapUv:ot&&g(x.specularColorMap.channel),specularIntensityMapUv:ft&&g(x.specularIntensityMap.channel),transmissionMapUv:St&&g(x.transmissionMap.channel),thicknessMapUv:N&&g(x.thicknessMap.channel),alphaMapUv:W&&g(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(me||U),vertexNormals:!!V.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(It||W),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||V.attributes.normal===void 0&&me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:dt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Et,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Rt,decodeVideoTexture:It&&x.map.isVideoTexture===!0&&$t.getTransfer(x.map.colorSpace)===ce,decodeVideoTextureEmissive:Ye&&x.emissiveMap.isVideoTexture===!0&&$t.getTransfer(x.emissiveMap.colorSpace)===ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===si,flipSided:x.side===Un,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function m(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)A.push(R),A.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(f(A,x),_(A,x),A.push(e.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function f(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function _(x,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.retroreflection&&r.enable(24),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),A.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function S(x){let A=d[x.type],R;if(A){let I=ds[A];R=r1.clone(I.uniforms)}else R=x.uniforms;return R}function y(x,A){let R=h.get(A);return R!==void 0?++R.usedTimes:(R=new UN(e,A,x,s),c.push(R),h.set(A,R)),R}function b(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function w(){o.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:S,acquireProgram:y,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:w}}function PN(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function BN(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function A1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function w1(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,E,m,f){let _=e[t];return _===void 0?(_={id:u.id,object:u,geometry:d,material:g,materialVariant:r(u),groupOrder:E,renderOrder:u.renderOrder,z:m,group:f},e[t]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=g,_.materialVariant=r(u),_.groupOrder=E,_.renderOrder=u.renderOrder,_.z=m,_.group=f),t++,_}function l(u,d,g,E,m,f,_){_.reversedDepth===!0&&(m=-m);let S=o(u,d,g,E,m,f);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):n.push(S)}function c(u,d,g,E,m,f){let _=o(u,d,g,E,m,f);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):n.unshift(_)}function h(u,d){n.length>1&&n.sort(u||BN),i.length>1&&i.sort(d||A1),s.length>1&&s.sort(d||A1)}function p(){for(let u=t,d=e.length;u<d;u++){let g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:h}}function zN(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new w1,e.set(i,[r])):s>=a.length?(r=new w1,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function FN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new O,color:new Xt};break;case"SpotLight":n={position:new O,direction:new O,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":n={color:new Xt,position:new O,halfWidth:new O,halfHeight:new O};break}return e[t.id]=n,n}}}function HN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var VN=0;function GN(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function kN(e){let t=new FN,n=HN(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let s=new O,a=new Fe,r=new Fe;function o(c){let h=0,p=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let d=0,g=0,E=0,m=0,f=0,_=0,S=0,y=0,b=0,T=0,w=0,x=0,A=0,R=0;c.sort(GN);for(let F=0,k=c.length;F<k;F++){let L=c[F],V=L.color,j=L.intensity,K=L.distance,at=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===za?at=L.shadow.map.texture:at=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=V.r*j,p+=V.g*j,u+=V.b*j;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],j);R++}else if(L.isSunLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let nt=L.shadow,it=n.get(L);it.shadowIntensity=nt.intensity,it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),i.sunShadow[g]=it,i.sunShadowMap[g]=at;let Ct=nt.getViewportCount();for(let Et=0;Et<Ct;Et++)i.sunShadowMatrix[E+Et]=nt.getMatrix(Et),i.sunShadowCascade[E+Et]=nt._cascadeData[Et];E+=Ct,g++}i.sun[d]=Z,d++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let nt=L.shadow,it=n.get(L);it.shadowIntensity=nt.intensity,it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,i.directionalShadow[m]=it,i.directionalShadowMap[m]=at,i.directionalShadowMatrix[m]=L.shadow.matrix,b++}i.directional[m]=Z,m++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(V).multiplyScalar(j),Z.distance=K,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[_]=Z;let nt=L.shadow;if(L.map&&(i.spotLightMap[x]=L.map,x++,nt.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[_]=nt.matrix,L.castShadow){let it=n.get(L);it.shadowIntensity=nt.intensity,it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,i.spotShadow[_]=it,i.spotShadowMap[_]=at,w++}_++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(V).multiplyScalar(j),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=Z,S++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let nt=L.shadow,it=n.get(L);it.shadowIntensity=nt.intensity,it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,it.shadowCameraNear=nt.camera.near,it.shadowCameraFar=nt.camera.far,i.pointShadow[f]=it,i.pointShadowMap[f]=at,i.pointShadowMatrix[f]=L.shadow.matrix,T++}i.point[f]=Z,f++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(j),Z.groundColor.copy(L.groundColor).multiplyScalar(j),i.hemi[y]=Z,y++}}S>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;let I=i.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==f||I.spotLength!==_||I.rectAreaLength!==S||I.hemiLength!==y||I.numSunShadows!==g||I.numDirectionalShadows!==b||I.numPointShadows!==T||I.numSpotShadows!==w||I.numSpotMaps!==x||I.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=m,i.spot.length=_,i.rectArea.length=S,i.point.length=f,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+x-A,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,I.sunLength=d,I.directionalLength=m,I.pointLength=f,I.spotLength=_,I.rectAreaLength=S,I.hemiLength=y,I.numSunShadows=g,I.numDirectionalShadows=b,I.numPointShadows=T,I.numSpotShadows=w,I.numSpotMaps=x,I.numLightProbes=R,i.version=VN++)}function l(c,h){let p=0,u=0,d=0,g=0,E=0,m=0,f=h.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){let y=c[_];if(y.isSunLight){let b=i.sun[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(f),p++}else if(y.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),u++}else if(y.isSpotLight){let b=i.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),g++}else if(y.isRectAreaLight){let b=i.rectArea[E];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),r.identity(),a.copy(y.matrixWorld),a.premultiply(f),r.extractRotation(a),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),E++}else if(y.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),d++}else if(y.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function C1(e){let t=new kN(e),n=[],i=[],s=[];function a(u){p.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function h(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function XN(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new C1(e),t.set(s,[o])):a>=r.length?(o=new C1(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var WN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qN=`uniform sampler2D shadow_pass;
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
}`,YN=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],ZN=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],R1=new Fe,Hc=new O,o_=new O;function JN(e,t,n){let i=new xc,s=new Dt,a=new Dt,r=new Ie,o=new Af,l=new wf,c={},h=n.maxTextureSize,p={[Oa]:Un,[Un]:Oa,[si]:si},u=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:WN,fragmentShader:qN}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Pi;g.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new Dn(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc;let f=this.type;this.render=function(T,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===bb&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rc);let A=e.getRenderTarget(),R=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),F=e.state;F.setBlending(hs),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=f!==this.type;k&&w.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(V=>V.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,V=T.length;L<V;L++){let j=T[L],K=j.shadow;if(K===void 0){Ut("WebGLShadowMap:",j,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let at=K.getFrameExtents();s.multiply(at),a.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/at.x),s.x=a.x*at.x,K.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/at.y),s.y=a.y*at.y,K.mapSize.y=a.y));let Z=e.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Z,K.map===null||k===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Yo){if(j.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Vn(s.x,s.y,{format:za,type:Hi,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),K.map.texture.name=j.name+".shadowMap",K.map.depthTexture=new Ca(s.x,s.y,Fi),K.map.depthTexture.name=j.name+".shadowMapDepth",K.map.depthTexture.format=ls,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=rn,K.map.depthTexture.magFilter=rn}else j.isPointLight?(K.map=new Dd(s.x),K.map.depthTexture=new _f(s.x,zi)):(K.map=new Vn(s.x,s.y),K.map.depthTexture=new Ca(s.x,s.y,zi)),K.map.depthTexture.name=j.name+".shadowMap",K.map.depthTexture.format=ls,this.type===Rc?(K.map.depthTexture.compareFunction=Z?wd:Ad,K.map.depthTexture.minFilter=Qe,K.map.depthTexture.magFilter=Qe):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=rn,K.map.depthTexture.magFilter=rn);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let nt=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();j.isPointLight!==!0&&K.updateMatrices(j,x);for(let it=0;it<nt;it++){let Ct=K.getCamera(it);if(j.isPointLight){let Et=K.camera,ue=K.matrix,Wt=j.distance||Et.far;Wt!==Et.far&&(Et.far=Wt,Et.updateProjectionMatrix()),Hc.setFromMatrixPosition(j.matrixWorld),Et.position.copy(Hc),o_.copy(Et.position),o_.add(YN[it]),Et.up.copy(ZN[it]),Et.lookAt(o_),Et.updateMatrixWorld(),ue.makeTranslation(-Hc.x,-Hc.y,-Hc.z),R1.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),K._frustum.setFromProjectionMatrix(R1,Et.coordinateSystem,Et.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)e.setRenderTarget(K.map,it),e.clear();else{it===0&&(e.setRenderTarget(K.map),e.clear());let Et=K.getViewport(it);r.set(a.x*Et.x,a.y*Et.y,a.x*Et.z,a.y*Et.w),F.viewport(r)}i=K.getFrustum(it),y(w,x,Ct,j,this.type)}K.isPointLightShadow!==!0&&this.type===Yo&&_(K,x),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(A,R,I)};function _(T,w){let x=t.update(E);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Vn(s.x,s.y,{format:za,type:Hi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(w,null,x,u,E,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(w,null,x,d,E,null)}function S(T,w,x,A){let R=null,I=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)R=I;else if(R=x.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let F=R.uuid,k=w.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let V=L[k];V===void 0&&(V=R.clone(),L[k]=V,w.addEventListener("dispose",b)),R=V}if(R.visible=w.visible,R.wireframe=w.wireframe,A===Yo?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:p[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=e.properties.get(R);F.light=x}return R}function y(T,w,x,A,R){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Yo)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let k=t.update(T),L=T.material;if(Array.isArray(L)){let V=k.groups;for(let j=0,K=V.length;j<K;j++){let at=V[j],Z=L[at.materialIndex];if(Z&&Z.visible){let nt=S(T,Z,A,R);T.onBeforeShadow(e,T,w,x,k,nt,at),e.renderBufferDirect(x,null,k,nt,T,at),T.onAfterShadow(e,T,w,x,k,nt,at)}}}else if(L.visible){let V=S(T,L,A,R);T.onBeforeShadow(e,T,w,x,k,V,null),e.renderBufferDirect(x,null,k,V,T,null),T.onAfterShadow(e,T,w,x,k,V,null)}}let F=T.children;for(let k=0,L=F.length;k<L;k++)y(F[k],w,x,A,R)}function b(T){T.target.removeEventListener("dispose",b);for(let x in c){let A=c[x],R=T.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function KN(e,t){function n(){let N=!1,rt=new Ie,W=null,ct=new Ie(0,0,0,0);return{setMask:function(vt){W!==vt&&!N&&(e.colorMask(vt,vt,vt,vt),W=vt)},setLocked:function(vt){N=vt},setClear:function(vt,st,Rt,At,be){be===!0&&(vt*=At,st*=At,Rt*=At),rt.set(vt,st,Rt,At),ct.equals(rt)===!1&&(e.clearColor(vt,st,Rt,At),ct.copy(rt))},reset:function(){N=!1,W=null,ct.set(-1,0,0,0)}}}function i(){let N=!1,rt=!1,W=null,ct=null,vt=null;return{setReversed:function(st){if(rt!==st){let Rt=t.get("EXT_clip_control");st?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),rt=st;let At=vt;vt=null,this.setClear(At)}},getReversed:function(){return rt},setTest:function(st){st?et(e.DEPTH_TEST):dt(e.DEPTH_TEST)},setMask:function(st){W!==st&&!N&&(e.depthMask(st),W=st)},setFunc:function(st){if(rt&&(st=s1[st]),ct!==st){switch(st){case tf:e.depthFunc(e.NEVER);break;case ef:e.depthFunc(e.ALWAYS);break;case nf:e.depthFunc(e.LESS);break;case Fo:e.depthFunc(e.LEQUAL);break;case sf:e.depthFunc(e.EQUAL);break;case af:e.depthFunc(e.GEQUAL);break;case rf:e.depthFunc(e.GREATER);break;case of:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ct=st}},setLocked:function(st){N=st},setClear:function(st){vt!==st&&(vt=st,rt&&(st=1-st),e.clearDepth(st))},reset:function(){N=!1,W=null,ct=null,vt=null,rt=!1}}}function s(){let N=!1,rt=null,W=null,ct=null,vt=null,st=null,Rt=null,At=null,be=null;return{setTest:function(re){N||(re?et(e.STENCIL_TEST):dt(e.STENCIL_TEST))},setMask:function(re){rt!==re&&!N&&(e.stencilMask(re),rt=re)},setFunc:function(re,Ei,Gi){(W!==re||ct!==Ei||vt!==Gi)&&(e.stencilFunc(re,Ei,Gi),W=re,ct=Ei,vt=Gi)},setOp:function(re,Ei,Gi){(st!==re||Rt!==Ei||At!==Gi)&&(e.stencilOp(re,Ei,Gi),st=re,Rt=Ei,At=Gi)},setLocked:function(re){N=re},setClear:function(re){be!==re&&(e.clearStencil(re),be=re)},reset:function(){N=!1,rt=null,W=null,ct=null,vt=null,st=null,Rt=null,At=null,be=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},p={},u={},d=new WeakMap,g=[],E=null,m=!1,f=null,_=null,S=null,y=null,b=null,T=null,w=null,x=new Xt(0,0,0),A=0,R=!1,I=null,F=null,k=null,L=null,V=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,at=0,Z=e.getParameter(e.VERSION);Z.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=at>=1):Z.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=at>=2);let nt=null,it={},Ct=e.getParameter(e.SCISSOR_BOX),Et=e.getParameter(e.VIEWPORT),ue=new Ie().fromArray(Ct),Wt=new Ie().fromArray(Et);function te(N,rt,W,ct){let vt=new Uint8Array(4),st=e.createTexture();e.bindTexture(N,st),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Rt=0;Rt<W;Rt++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(rt,0,e.RGBA,1,1,ct,0,e.RGBA,e.UNSIGNED_BYTE,vt):e.texImage2D(rt+Rt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,vt);return st}let Y={};Y[e.TEXTURE_2D]=te(e.TEXTURE_2D,e.TEXTURE_2D,1),Y[e.TEXTURE_CUBE_MAP]=te(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[e.TEXTURE_2D_ARRAY]=te(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Y[e.TEXTURE_3D]=te(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),et(e.DEPTH_TEST),r.setFunc(Fo),Ft(!1),me(S0),et(e.CULL_FACE),Kt(hs);function et(N){h[N]!==!0&&(e.enable(N),h[N]=!0)}function dt(N){h[N]!==!1&&(e.disable(N),h[N]=!1)}function Nt(N,rt){return u[N]!==rt?(e.bindFramebuffer(N,rt),u[N]=rt,N===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=rt),N===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=rt),!0):!1}function mt(N,rt){let W=g,ct=!1;if(N){W=d.get(rt),W===void 0&&(W=[],d.set(rt,W));let vt=N.textures;if(W.length!==vt.length||W[0]!==e.COLOR_ATTACHMENT0){for(let st=0,Rt=vt.length;st<Rt;st++)W[st]=e.COLOR_ATTACHMENT0+st;W.length=vt.length,ct=!0}}else W[0]!==e.BACK&&(W[0]=e.BACK,ct=!0);ct&&e.drawBuffers(W)}function It(N){return E!==N?(e.useProgram(N),E=N,!0):!1}let De={[vr]:e.FUNC_ADD,[Tb]:e.FUNC_SUBTRACT,[Ab]:e.FUNC_REVERSE_SUBTRACT};De[wb]=e.MIN,De[Cb]=e.MAX;let zt={[Rb]:e.ZERO,[Nb]:e.ONE,[Db]:e.SRC_COLOR,[T0]:e.SRC_ALPHA,[Bb]:e.SRC_ALPHA_SATURATE,[Ib]:e.DST_COLOR,[Lb]:e.DST_ALPHA,[Ub]:e.ONE_MINUS_SRC_COLOR,[A0]:e.ONE_MINUS_SRC_ALPHA,[Pb]:e.ONE_MINUS_DST_COLOR,[Ob]:e.ONE_MINUS_DST_ALPHA,[zb]:e.CONSTANT_COLOR,[Fb]:e.ONE_MINUS_CONSTANT_COLOR,[Hb]:e.CONSTANT_ALPHA,[Vb]:e.ONE_MINUS_CONSTANT_ALPHA};function Kt(N,rt,W,ct,vt,st,Rt,At,be,re){if(N===hs){m===!0&&(dt(e.BLEND),m=!1);return}if(m===!1&&(et(e.BLEND),m=!0),N!==Eb){if(N!==f||re!==R){if((_!==vr||b!==vr)&&(e.blendEquation(e.FUNC_ADD),_=vr,b=vr),re)switch(N){case Zo:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case M0:e.blendFunc(e.ONE,e.ONE);break;case b0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case E0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ot("WebGLState: Invalid blending: ",N);break}else switch(N){case Zo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case M0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case b0:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case E0:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",N);break}S=null,y=null,T=null,w=null,x.set(0,0,0),A=0,f=N,R=re}return}vt=vt||rt,st=st||W,Rt=Rt||ct,(rt!==_||vt!==b)&&(e.blendEquationSeparate(De[rt],De[vt]),_=rt,b=vt),(W!==S||ct!==y||st!==T||Rt!==w)&&(e.blendFuncSeparate(zt[W],zt[ct],zt[st],zt[Rt]),S=W,y=ct,T=st,w=Rt),(At.equals(x)===!1||be!==A)&&(e.blendColor(At.r,At.g,At.b,be),x.copy(At),A=be),f=N,R=!1}function ae(N,rt){N.side===si?dt(e.CULL_FACE):et(e.CULL_FACE);let W=N.side===Un;rt&&(W=!W),Ft(W),N.blending===Zo&&N.transparent===!1?Kt(hs):Kt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);let ct=N.stencilWrite;o.setTest(ct),ct&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ye(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?et(e.SAMPLE_ALPHA_TO_COVERAGE):dt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(N){I!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),I=N)}function me(N){N!==Sb?(et(e.CULL_FACE),N!==F&&(N===S0?e.cullFace(e.BACK):N===Mb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):dt(e.CULL_FACE),F=N}function Pe(N){N!==k&&(K&&e.lineWidth(N),k=N)}function Ye(N,rt,W){N?(et(e.POLYGON_OFFSET_FILL),(L!==rt||V!==W)&&(L=rt,V=W,r.getReversed()&&(rt=-rt),e.polygonOffset(rt,W))):dt(e.POLYGON_OFFSET_FILL)}function Se(N){N?et(e.SCISSOR_TEST):dt(e.SCISSOR_TEST)}function he(N){N===void 0&&(N=e.TEXTURE0+j-1),nt!==N&&(e.activeTexture(N),nt=N)}function U(N,rt,W){W===void 0&&(nt===null?W=e.TEXTURE0+j-1:W=nt);let ct=it[W];ct===void 0&&(ct={type:void 0,texture:void 0},it[W]=ct),(ct.type!==N||ct.texture!==rt)&&(nt!==W&&(e.activeTexture(W),nt=W),e.bindTexture(N,rt||Y[N]),ct.type=N,ct.texture=rt)}function Me(){let N=it[nt];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Qt(){try{e.compressedTexImage2D(...arguments)}catch(N){Ot("WebGLState:",N)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(N){Ot("WebGLState:",N)}}function v(){try{e.texSubImage2D(...arguments)}catch(N){Ot("WebGLState:",N)}}function P(){try{e.texSubImage3D(...arguments)}catch(N){Ot("WebGLState:",N)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(N){Ot("WebGLState:",N)}}function q(){try{e.compressedTexSubImage3D(...arguments)}catch(N){Ot("WebGLState:",N)}}function lt(){try{e.texStorage2D(...arguments)}catch(N){Ot("WebGLState:",N)}}function ut(){try{e.texStorage3D(...arguments)}catch(N){Ot("WebGLState:",N)}}function J(){try{e.texImage2D(...arguments)}catch(N){Ot("WebGLState:",N)}}function $(){try{e.texImage3D(...arguments)}catch(N){Ot("WebGLState:",N)}}function ht(N){return p[N]!==void 0?p[N]:e.getParameter(N)}function Tt(N,rt){p[N]!==rt&&(e.pixelStorei(N,rt),p[N]=rt)}function X(N){ue.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),ue.copy(N))}function Q(N){Wt.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),Wt.copy(N))}function ot(N,rt){let W=c.get(rt);W===void 0&&(W=new WeakMap,c.set(rt,W));let ct=W.get(N);ct===void 0&&(ct=e.getUniformBlockIndex(rt,N.name),W.set(N,ct))}function ft(N,rt){let ct=c.get(rt).get(N);l.get(rt)!==ct&&(e.uniformBlockBinding(rt,ct,N.__bindingPointIndex),l.set(rt,ct))}function St(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},p={},nt=null,it={},u={},d=new WeakMap,g=[],E=null,m=!1,f=null,_=null,S=null,y=null,b=null,T=null,w=null,x=new Xt(0,0,0),A=0,R=!1,I=null,F=null,k=null,L=null,V=null,ue.set(0,0,e.canvas.width,e.canvas.height),Wt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:et,disable:dt,bindFramebuffer:Nt,drawBuffers:mt,useProgram:It,setBlending:Kt,setMaterial:ae,setFlipSided:Ft,setCullFace:me,setLineWidth:Pe,setPolygonOffset:Ye,setScissorTest:Se,activeTexture:he,bindTexture:U,unbindTexture:Me,compressedTexImage2D:Qt,compressedTexImage3D:C,texImage2D:J,texImage3D:$,pixelStorei:Tt,getParameter:ht,updateUBOMapping:ot,uniformBlockBinding:ft,texStorage2D:lt,texStorage3D:ut,texSubImage2D:v,texSubImage3D:P,compressedTexSubImage2D:H,compressedTexSubImage3D:q,scissor:X,viewport:Q,reset:St}}function QN(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,h=new WeakMap,p=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(C,v){return g?new OffscreenCanvas(C,v):Ho("canvas")}function m(C,v,P){let H=1,q=Qt(C);if((q.width>P||q.height>P)&&(H=P/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let lt=Math.floor(H*q.width),ut=Math.floor(H*q.height);u===void 0&&(u=E(lt,ut));let J=v?E(lt,ut):u;return J.width=lt,J.height=ut,J.getContext("2d").drawImage(C,0,0,lt,ut),Ut("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+lt+"x"+ut+")."),J}else return"data"in C&&Ut("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),C;return C}function f(C){return C.generateMipmaps}function _(C){e.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(C,v,P,H,q,lt=!1){if(C!==null){if(e[C]!==void 0)return e[C];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ut;H&&(ut=t.get("EXT_texture_norm16"),ut||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===e.RED&&(P===e.FLOAT&&(J=e.R32F),P===e.HALF_FLOAT&&(J=e.R16F),P===e.UNSIGNED_BYTE&&(J=e.R8),P===e.UNSIGNED_SHORT&&ut&&(J=ut.R16_EXT),P===e.SHORT&&ut&&(J=ut.R16_SNORM_EXT)),v===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(J=e.R8UI),P===e.UNSIGNED_SHORT&&(J=e.R16UI),P===e.UNSIGNED_INT&&(J=e.R32UI),P===e.BYTE&&(J=e.R8I),P===e.SHORT&&(J=e.R16I),P===e.INT&&(J=e.R32I)),v===e.RG&&(P===e.FLOAT&&(J=e.RG32F),P===e.HALF_FLOAT&&(J=e.RG16F),P===e.UNSIGNED_BYTE&&(J=e.RG8),P===e.UNSIGNED_SHORT&&ut&&(J=ut.RG16_EXT),P===e.SHORT&&ut&&(J=ut.RG16_SNORM_EXT)),v===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(J=e.RG8UI),P===e.UNSIGNED_SHORT&&(J=e.RG16UI),P===e.UNSIGNED_INT&&(J=e.RG32UI),P===e.BYTE&&(J=e.RG8I),P===e.SHORT&&(J=e.RG16I),P===e.INT&&(J=e.RG32I)),v===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(J=e.RGB8UI),P===e.UNSIGNED_SHORT&&(J=e.RGB16UI),P===e.UNSIGNED_INT&&(J=e.RGB32UI),P===e.BYTE&&(J=e.RGB8I),P===e.SHORT&&(J=e.RGB16I),P===e.INT&&(J=e.RGB32I)),v===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(J=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(J=e.RGBA16UI),P===e.UNSIGNED_INT&&(J=e.RGBA32UI),P===e.BYTE&&(J=e.RGBA8I),P===e.SHORT&&(J=e.RGBA16I),P===e.INT&&(J=e.RGBA32I)),v===e.RGB&&(P===e.UNSIGNED_SHORT&&ut&&(J=ut.RGB16_EXT),P===e.SHORT&&ut&&(J=ut.RGB16_SNORM_EXT),P===e.UNSIGNED_INT_5_9_9_9_REV&&(J=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(J=e.R11F_G11F_B10F)),v===e.RGBA){let $=lt?fc:$t.getTransfer(q);P===e.FLOAT&&(J=e.RGBA32F),P===e.HALF_FLOAT&&(J=e.RGBA16F),P===e.UNSIGNED_BYTE&&(J=$===ce?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT&&ut&&(J=ut.RGBA16_EXT),P===e.SHORT&&ut&&(J=ut.RGBA16_SNORM_EXT),P===e.UNSIGNED_SHORT_4_4_4_4&&(J=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(J=e.RGB5_A1)}return(J===e.R16F||J===e.R32F||J===e.RG16F||J===e.RG32F||J===e.RGBA16F||J===e.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function b(C,v){let P;return C?v===null||v===zi||v===Ko?P=e.DEPTH24_STENCIL8:v===Fi?P=e.DEPTH32F_STENCIL8:v===Jo&&(P=e.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===zi||v===Ko?P=e.DEPTH_COMPONENT24:v===Fi?P=e.DEPTH_COMPONENT32F:v===Jo&&(P=e.DEPTH_COMPONENT16),P}function T(C,v){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==rn&&C.minFilter!==Qe?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function w(C){let v=C.target;v.removeEventListener("dispose",w),A(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&p.delete(v)}function x(C){let v=C.target;v.removeEventListener("dispose",x),I(v)}function A(C){let v=i.get(C);if(v.__webglInit===void 0)return;let P=C.source,H=d.get(P);if(H){let q=H[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&R(C),Object.keys(H).length===0&&d.delete(P)}i.remove(C)}function R(C){let v=i.get(C);e.deleteTexture(v.__webglTexture);let P=C.source,H=d.get(P);delete H[v.__cacheKey],r.memory.textures--}function I(C){let v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(v.__webglFramebuffer[H]))for(let q=0;q<v.__webglFramebuffer[H].length;q++)e.deleteFramebuffer(v.__webglFramebuffer[H][q]);else e.deleteFramebuffer(v.__webglFramebuffer[H]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[H])}else{if(Array.isArray(v.__webglFramebuffer))for(let H=0;H<v.__webglFramebuffer.length;H++)e.deleteFramebuffer(v.__webglFramebuffer[H]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let H=0;H<v.__webglColorRenderbuffer.length;H++)v.__webglColorRenderbuffer[H]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[H]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let P=C.textures;for(let H=0,q=P.length;H<q;H++){let lt=i.get(P[H]);lt.__webglTexture&&(e.deleteTexture(lt.__webglTexture),r.memory.textures--),i.remove(P[H])}i.remove(C)}let F=0;function k(){F=0}function L(){return F}function V(C){F=C}function j(){let C=F;return C>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,C}function K(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function at(C,v){let P=i.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&P.__version!==C.version){let H=C.image;if(H===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(P,C,v);return}}else C.isExternalTexture&&(P.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+v)}function Z(C,v){let P=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){dt(P,C,v);return}else C.isExternalTexture&&(P.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+v)}function nt(C,v){let P=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){dt(P,C,v);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+v)}function it(C,v){let P=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&P.__version!==C.version){Nt(P,C,v);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+v)}let Ct={[lf]:e.REPEAT,[os]:e.CLAMP_TO_EDGE,[cf]:e.MIRRORED_REPEAT},Et={[rn]:e.NEAREST,[Xb]:e.NEAREST_MIPMAP_NEAREST,[Dc]:e.NEAREST_MIPMAP_LINEAR,[Qe]:e.LINEAR,[kf]:e.LINEAR_MIPMAP_NEAREST,[Pa]:e.LINEAR_MIPMAP_LINEAR},ue={[Zb]:e.NEVER,[$b]:e.ALWAYS,[Jb]:e.LESS,[Ad]:e.LEQUAL,[Kb]:e.EQUAL,[wd]:e.GEQUAL,[Qb]:e.GREATER,[jb]:e.NOTEQUAL};function Wt(C,v){if(v.type===Fi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Qe||v.magFilter===kf||v.magFilter===Dc||v.magFilter===Pa||v.minFilter===Qe||v.minFilter===kf||v.minFilter===Dc||v.minFilter===Pa)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,Ct[v.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,Ct[v.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,Ct[v.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,Et[v.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,Et[v.minFilter]),v.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===rn||v.minFilter!==Dc&&v.minFilter!==Pa||v.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function te(C,v){let P=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",w));let H=v.source,q=d.get(H);q===void 0&&(q={},d.set(H,q));let lt=K(v);if(lt!==C.__cacheKey){q[lt]===void 0&&(q[lt]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),q[lt].usedTimes++;let ut=q[C.__cacheKey];ut!==void 0&&(q[C.__cacheKey].usedTimes--,ut.usedTimes===0&&R(v)),C.__cacheKey=lt,C.__webglTexture=q[lt].texture}return P}function Y(C,v,P){return Math.floor(Math.floor(C/P)/v)}function et(C,v,P,H){let lt=C.updateRanges;if(lt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,v.width,v.height,P,H,v.data);else{lt.sort((Tt,X)=>Tt.start-X.start);let ut=0;for(let Tt=1;Tt<lt.length;Tt++){let X=lt[ut],Q=lt[Tt],ot=X.start+X.count,ft=Y(Q.start,v.width,4),St=Y(X.start,v.width,4);Q.start<=ot+1&&ft===St&&Y(Q.start+Q.count-1,v.width,4)===ft?X.count=Math.max(X.count,Q.start+Q.count-X.start):(++ut,lt[ut]=Q)}lt.length=ut+1;let J=n.getParameter(e.UNPACK_ROW_LENGTH),$=n.getParameter(e.UNPACK_SKIP_PIXELS),ht=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,v.width);for(let Tt=0,X=lt.length;Tt<X;Tt++){let Q=lt[Tt],ot=Math.floor(Q.start/4),ft=Math.ceil(Q.count/4),St=ot%v.width,N=Math.floor(ot/v.width),rt=ft,W=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,St),n.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,St,N,rt,W,P,H,v.data)}C.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,J),n.pixelStorei(e.UNPACK_SKIP_PIXELS,$),n.pixelStorei(e.UNPACK_SKIP_ROWS,ht)}}function dt(C,v,P){let H=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(H=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(H=e.TEXTURE_3D);let q=te(C,v),lt=v.source;n.bindTexture(H,C.__webglTexture,e.TEXTURE0+P);let ut=i.get(lt);if(lt.version!==ut.__version||q===!0){if(n.activeTexture(e.TEXTURE0+P),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let W=$t.getPrimaries($t.workingColorSpace),ct=v.colorSpace===Fs?null:$t.getPrimaries(v.colorSpace),vt=v.colorSpace===Fs||W===ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}n.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment);let $=m(v.image,!1,s.maxTextureSize);$=Me(v,$);let ht=a.convert(v.format,v.colorSpace),Tt=a.convert(v.type),X=y(v.internalFormat,ht,Tt,v.normalized,v.colorSpace,v.isVideoTexture);Wt(H,v);let Q,ot=v.mipmaps,ft=v.isVideoTexture!==!0,St=ut.__version===void 0||q===!0,N=lt.dataReady,rt=T(v,$);if(v.isDepthTexture)X=b(v.format===Ba,v.type),St&&(ft?n.texStorage2D(e.TEXTURE_2D,1,X,$.width,$.height):n.texImage2D(e.TEXTURE_2D,0,X,$.width,$.height,0,ht,Tt,null));else if(v.isDataTexture)if(ot.length>0){ft&&St&&n.texStorage2D(e.TEXTURE_2D,rt,X,ot[0].width,ot[0].height);for(let W=0,ct=ot.length;W<ct;W++)Q=ot[W],ft?N&&n.texSubImage2D(e.TEXTURE_2D,W,0,0,Q.width,Q.height,ht,Tt,Q.data):n.texImage2D(e.TEXTURE_2D,W,X,Q.width,Q.height,0,ht,Tt,Q.data);v.generateMipmaps=!1}else ft?(St&&n.texStorage2D(e.TEXTURE_2D,rt,X,$.width,$.height),N&&et(v,$,ht,Tt)):n.texImage2D(e.TEXTURE_2D,0,X,$.width,$.height,0,ht,Tt,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ft&&St&&n.texStorage3D(e.TEXTURE_2D_ARRAY,rt,X,ot[0].width,ot[0].height,$.depth);for(let W=0,ct=ot.length;W<ct;W++)if(Q=ot[W],v.format!==Mi)if(ht!==null)if(ft){if(N)if(v.layerUpdates.size>0){let vt=K0(Q.width,Q.height,v.format,v.type);for(let st of v.layerUpdates){let Rt=Q.data.subarray(st*vt/Q.data.BYTES_PER_ELEMENT,(st+1)*vt/Q.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,st,Q.width,Q.height,1,ht,Rt)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,0,Q.width,Q.height,$.depth,ht,Q.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,W,X,Q.width,Q.height,$.depth,0,Q.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?N&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,0,Q.width,Q.height,$.depth,ht,Tt,Q.data):n.texImage3D(e.TEXTURE_2D_ARRAY,W,X,Q.width,Q.height,$.depth,0,ht,Tt,Q.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ft&&St&&n.texStorage2D(e.TEXTURE_2D,rt,X,ot[0].width,ot[0].height);for(let W=0,ct=ot.length;W<ct;W++)Q=ot[W],v.format!==Mi?ht!==null?ft?N&&n.compressedTexSubImage2D(e.TEXTURE_2D,W,0,0,Q.width,Q.height,ht,Q.data):n.compressedTexImage2D(e.TEXTURE_2D,W,X,Q.width,Q.height,0,Q.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?N&&n.texSubImage2D(e.TEXTURE_2D,W,0,0,Q.width,Q.height,ht,Tt,Q.data):n.texImage2D(e.TEXTURE_2D,W,X,Q.width,Q.height,0,ht,Tt,Q.data)}else if(v.isDataArrayTexture)if(ft){if(St&&n.texStorage3D(e.TEXTURE_2D_ARRAY,rt,X,$.width,$.height,$.depth),N)if(v.layerUpdates.size>0){let W=K0($.width,$.height,v.format,v.type);for(let ct of v.layerUpdates){let vt=$.data.subarray(ct*W/$.data.BYTES_PER_ELEMENT,(ct+1)*W/$.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ct,$.width,$.height,1,ht,Tt,vt)}v.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ht,Tt,$.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,X,$.width,$.height,$.depth,0,ht,Tt,$.data);else if(v.isData3DTexture)ft?(St&&n.texStorage3D(e.TEXTURE_3D,rt,X,$.width,$.height,$.depth),N&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ht,Tt,$.data)):n.texImage3D(e.TEXTURE_3D,0,X,$.width,$.height,$.depth,0,ht,Tt,$.data);else if(v.isFramebufferTexture){if(St)if(ft)n.texStorage2D(e.TEXTURE_2D,rt,X,$.width,$.height);else{let W=$.width,ct=$.height;for(let vt=0;vt<rt;vt++)n.texImage2D(e.TEXTURE_2D,vt,X,W,ct,0,ht,Tt,null),W>>=1,ct>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in e){let W=e.canvas;if(W.hasAttribute("layoutsubtree")||W.setAttribute("layoutsubtree","true"),$.parentNode!==W){W.appendChild($),p.add(v),W.onpaint=ct=>{let vt=ct.changedElements;for(let st of p)vt.includes(st.image)&&(st.needsUpdate=!0)},W.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,$);else{let vt=e.RGBA,st=e.RGBA,Rt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,vt,st,Rt,$)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(ot.length>0){if(ft&&St){let W=Qt(ot[0]);n.texStorage2D(e.TEXTURE_2D,rt,X,W.width,W.height)}for(let W=0,ct=ot.length;W<ct;W++)Q=ot[W],ft?N&&n.texSubImage2D(e.TEXTURE_2D,W,0,0,ht,Tt,Q):n.texImage2D(e.TEXTURE_2D,W,X,ht,Tt,Q);v.generateMipmaps=!1}else if(ft){if(St){let W=Qt($);n.texStorage2D(e.TEXTURE_2D,rt,X,W.width,W.height)}N&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ht,Tt,$)}else n.texImage2D(e.TEXTURE_2D,0,X,ht,Tt,$);f(v)&&_(H),ut.__version=lt.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Nt(C,v,P){if(v.image.length!==6)return;let H=te(C,v),q=v.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+P);let lt=i.get(q);if(q.version!==lt.__version||H===!0){n.activeTexture(e.TEXTURE0+P);let ut=$t.getPrimaries($t.workingColorSpace),J=v.colorSpace===Fs?null:$t.getPrimaries(v.colorSpace),$=v.colorSpace===Fs||ut===J?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let ht=v.isCompressedTexture||v.image[0].isCompressedTexture,Tt=v.image[0]&&v.image[0].isDataTexture,X=[];for(let st=0;st<6;st++)!ht&&!Tt?X[st]=m(v.image[st],!0,s.maxCubemapSize):X[st]=Tt?v.image[st].image:v.image[st],X[st]=Me(v,X[st]);let Q=X[0],ot=a.convert(v.format,v.colorSpace),ft=a.convert(v.type),St=y(v.internalFormat,ot,ft,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,rt=lt.__version===void 0||H===!0,W=q.dataReady,ct=T(v,Q);Wt(e.TEXTURE_CUBE_MAP,v);let vt;if(ht){N&&rt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ct,St,Q.width,Q.height);for(let st=0;st<6;st++){vt=X[st].mipmaps;for(let Rt=0;Rt<vt.length;Rt++){let At=vt[Rt];v.format!==Mi?ot!==null?N?W&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,0,0,At.width,At.height,ot,At.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,St,At.width,At.height,0,At.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?W&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,0,0,At.width,At.height,ot,ft,At.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,St,At.width,At.height,0,ot,ft,At.data)}}}else{if(vt=v.mipmaps,N&&rt){vt.length>0&&ct++;let st=Qt(X[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ct,St,st.width,st.height)}for(let st=0;st<6;st++)if(Tt){N?W&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,X[st].width,X[st].height,ot,ft,X[st].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,St,X[st].width,X[st].height,0,ot,ft,X[st].data);for(let Rt=0;Rt<vt.length;Rt++){let be=vt[Rt].image[st].image;N?W&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,0,0,be.width,be.height,ot,ft,be.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,St,be.width,be.height,0,ot,ft,be.data)}}else{N?W&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ot,ft,X[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,St,ot,ft,X[st]);for(let Rt=0;Rt<vt.length;Rt++){let At=vt[Rt];N?W&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,0,0,ot,ft,At.image[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,St,ot,ft,At.image[st])}}}f(v)&&_(e.TEXTURE_CUBE_MAP),lt.__version=q.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function mt(C,v,P,H,q,lt){let ut=a.convert(P.format,P.colorSpace),J=a.convert(P.type),$=y(P.internalFormat,ut,J,P.normalized,P.colorSpace),ht=i.get(v),Tt=i.get(P);if(Tt.__renderTarget=v,!ht.__hasExternalTextures){let X=Math.max(1,v.width>>lt),Q=Math.max(1,v.height>>lt);q===e.TEXTURE_3D||q===e.TEXTURE_2D_ARRAY?n.texImage3D(q,lt,$,X,Q,v.depth,0,ut,J,null):n.texImage2D(q,lt,$,X,Q,0,ut,J,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),he(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,H,q,Tt.__webglTexture,0,Se(v)):(q===e.TEXTURE_2D||q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,H,q,Tt.__webglTexture,lt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function It(C,v,P){if(e.bindRenderbuffer(e.RENDERBUFFER,C),v.depthBuffer){let H=v.depthTexture,q=H&&H.isDepthTexture?H.type:null,lt=b(v.stencilBuffer,q),ut=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;he(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(v),lt,v.width,v.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(v),lt,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,lt,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ut,e.RENDERBUFFER,C)}else{let H=v.textures;for(let q=0;q<H.length;q++){let lt=H[q],ut=a.convert(lt.format,lt.colorSpace),J=a.convert(lt.type),$=y(lt.internalFormat,ut,J,lt.normalized,lt.colorSpace);he(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Se(v),$,v.width,v.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,Se(v),$,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,$,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function De(C,v,P){let H=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=i.get(v.depthTexture);if(q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H){if(q.__webglInit===void 0&&(q.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),q.__webglTexture===void 0){q.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),Wt(e.TEXTURE_CUBE_MAP,v.depthTexture);let ht=a.convert(v.depthTexture.format),Tt=a.convert(v.depthTexture.type),X;v.depthTexture.format===ls?X=e.DEPTH_COMPONENT24:v.depthTexture.format===Ba&&(X=e.DEPTH24_STENCIL8);for(let Q=0;Q<6;Q++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,X,v.width,v.height,0,ht,Tt,null)}}else at(v.depthTexture,0);let lt=q.__webglTexture,ut=Se(v),J=H?e.TEXTURE_CUBE_MAP_POSITIVE_X+P:e.TEXTURE_2D,$=v.depthTexture.format===Ba?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(v.depthTexture.format===ls)he(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,J,lt,0,ut):e.framebufferTexture2D(e.FRAMEBUFFER,$,J,lt,0);else if(v.depthTexture.format===Ba)he(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,J,lt,0,ut):e.framebufferTexture2D(e.FRAMEBUFFER,$,J,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function zt(C){let v=i.get(C),P=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let H=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),H){let q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),v.__depthDisposeCallback=q}v.__boundDepthTexture=H}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(P)for(let H=0;H<6;H++)De(v.__webglFramebuffer[H],C,H);else{let H=C.texture.mipmaps;H&&H.length>0?De(v.__webglFramebuffer[0],C,0):De(v.__webglFramebuffer,C,0)}else if(P){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]===void 0)v.__webglDepthbuffer[H]=e.createRenderbuffer(),It(v.__webglDepthbuffer[H],C,!1);else{let q=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=v.__webglDepthbuffer[H];e.bindRenderbuffer(e.RENDERBUFFER,lt),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,lt)}}else{let H=C.texture.mipmaps;if(H&&H.length>0?n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=e.createRenderbuffer(),It(v.__webglDepthbuffer,C,!1);else{let q=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=v.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,lt),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,lt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Kt(C,v,P){let H=i.get(C);v!==void 0&&mt(H.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&zt(C)}function ae(C){let v=C.texture,P=i.get(C),H=i.get(v);C.addEventListener("dispose",x);let q=C.textures,lt=C.isWebGLCubeRenderTarget===!0,ut=q.length>1;if(ut||(H.__webglTexture===void 0&&(H.__webglTexture=e.createTexture()),H.__version=v.version,r.memory.textures++),lt){P.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer[J]=[];for(let $=0;$<v.mipmaps.length;$++)P.__webglFramebuffer[J][$]=e.createFramebuffer()}else P.__webglFramebuffer[J]=e.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){P.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)P.__webglFramebuffer[J]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(ut)for(let J=0,$=q.length;J<$;J++){let ht=i.get(q[J]);ht.__webglTexture===void 0&&(ht.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&he(C)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let J=0;J<q.length;J++){let $=q[J];P.__webglColorRenderbuffer[J]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[J]);let ht=a.convert($.format,$.colorSpace),Tt=a.convert($.type),X=y($.internalFormat,ht,Tt,$.normalized,$.colorSpace,C.isXRRenderTarget===!0),Q=Se(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,Q,X,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+J,e.RENDERBUFFER,P.__webglColorRenderbuffer[J])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),It(P.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(lt){n.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture),Wt(e.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)mt(P.__webglFramebuffer[J][$],C,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else mt(P.__webglFramebuffer[J],C,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);f(v)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ut){for(let J=0,$=q.length;J<$;J++){let ht=q[J],Tt=i.get(ht),X=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(X=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(X,Tt.__webglTexture),Wt(X,ht),mt(P.__webglFramebuffer,C,ht,e.COLOR_ATTACHMENT0+J,X,0),f(ht)&&_(X)}n.unbindTexture()}else{let J=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(J,H.__webglTexture),Wt(J,v),v.mipmaps&&v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)mt(P.__webglFramebuffer[$],C,v,e.COLOR_ATTACHMENT0,J,$);else mt(P.__webglFramebuffer,C,v,e.COLOR_ATTACHMENT0,J,0);f(v)&&_(J),n.unbindTexture()}C.depthBuffer&&zt(C)}function Ft(C){let v=C.textures;for(let P=0,H=v.length;P<H;P++){let q=v[P];if(f(q)){let lt=S(C),ut=i.get(q).__webglTexture;n.bindTexture(lt,ut),_(lt),n.unbindTexture()}}}let me=[],Pe=[];function Ye(C){if(C.samples>0){if(he(C)===!1){let v=C.textures,P=C.width,H=C.height,q=e.COLOR_BUFFER_BIT,lt=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=i.get(C),J=v.length>1;if(J)for(let ht=0;ht<v.length;ht++)n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let $=C.texture.mipmaps;$&&$.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ht=0;ht<v.length;ht++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(q|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(q|=e.STENCIL_BUFFER_BIT)),J){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ut.__webglColorRenderbuffer[ht]);let Tt=i.get(v[ht]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Tt,0)}e.blitFramebuffer(0,0,P,H,0,0,P,H,q,e.NEAREST),l===!0&&(me.length=0,Pe.length=0,me.push(e.COLOR_ATTACHMENT0+ht),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(me.push(lt),Pe.push(lt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Pe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,me))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),J)for(let ht=0;ht<v.length;ht++){n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,ut.__webglColorRenderbuffer[ht]);let Tt=i.get(v[ht]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ut.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,Tt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let v=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function Se(C){return Math.min(s.maxSamples,C.samples)}function he(C){let v=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(C){let v=r.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function Me(C,v){let P=C.colorSpace,H=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||P!==hc&&P!==Fs&&($t.getTransfer(P)===ce?(H!==Mi||q!==ai)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",P)),v}function Qt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=k,this.getTextureUnits=L,this.setTextureUnits=V,this.setTexture2D=at,this.setTexture2DArray=Z,this.setTexture3D=nt,this.setTextureCube=it,this.rebindTextures=Kt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function jN(e,t){function n(i,s=Fs){let a,r=$t.getTransfer(s);if(i===ai)return e.UNSIGNED_BYTE;if(i===Wf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===qf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===z0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===F0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===P0)return e.BYTE;if(i===B0)return e.SHORT;if(i===Jo)return e.UNSIGNED_SHORT;if(i===Xf)return e.INT;if(i===zi)return e.UNSIGNED_INT;if(i===Fi)return e.FLOAT;if(i===Hi)return e.HALF_FLOAT;if(i===H0)return e.ALPHA;if(i===V0)return e.RGB;if(i===Mi)return e.RGBA;if(i===ls)return e.DEPTH_COMPONENT;if(i===Ba)return e.DEPTH_STENCIL;if(i===G0)return e.RED;if(i===Yf)return e.RED_INTEGER;if(i===za)return e.RG;if(i===Zf)return e.RG_INTEGER;if(i===Jf)return e.RGBA_INTEGER;if(i===Uc||i===Lc||i===Oc||i===Ic)if(r===ce)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Uc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Uc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ic)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kf||i===Qf||i===jf||i===$f)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Kf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$f)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===td||i===ed||i===nd||i===id||i===sd||i===Pc||i===ad)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===td||i===ed)return r===ce?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===nd)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===id)return a.COMPRESSED_R11_EAC;if(i===sd)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Pc)return a.COMPRESSED_RG11_EAC;if(i===ad)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rd||i===od||i===ld||i===cd||i===ud||i===hd||i===fd||i===dd||i===pd||i===md||i===gd||i===_d||i===vd||i===yd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===rd)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===od)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ld)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cd)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ud)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hd)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fd)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dd)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pd)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===md)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gd)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_d)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vd)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yd)return r===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xd||i===Sd||i===Md)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===xd)return r===ce?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Md)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bd||i===Ed||i===Bc||i===Td)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===bd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Ed)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Td)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ko?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var $N=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tD=`
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

}`,m_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Mc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new ni({vertexShader:$N,fragmentShader:tD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Dn(new Na(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},g_=class extends cs{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,g=null,E=typeof XRWebGLBinding<"u",m=new m_,f={},_=n.getContextAttributes(),S=null,y=null,b=[],T=[],w=new Dt,x=null,A=null,R=new xn;R.viewport=new Ie;let I=new xn;I.viewport=new Ie;let F=[R,I],k=new Ff,L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=b[Y];return et===void 0&&(et=new ko,b[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=b[Y];return et===void 0&&(et=new ko,b[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=b[Y];return et===void 0&&(et=new ko,b[Y]=et),et.getHandSpace()};function j(Y){let et=T.indexOf(Y.inputSource);if(et===-1)return;let dt=b[et];dt!==void 0&&(dt.update(Y.inputSource,Y.frame,c||r),dt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function K(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",at);for(let Y=0;Y<b.length;Y++){let et=T[Y];et!==null&&(T[Y]=null,b[Y].disconnect(et))}L=null,V=null,m.reset();for(let Y in f)delete f[Y];if(t.setRenderTarget(S),d=null,u=null,p=null,s=null,y=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),A!==null){let Y=A.camera;Y.fov=A.fov,Y.zoom=A.zoom,Y.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",K),s.addEventListener("inputsourceschange",at),_.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Nt=null,mt=null;_.depth&&(mt=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,dt=_.stencil?Ba:ls,Nt=_.stencil?Ko:zi);let It={colorFormat:n.RGBA8,depthFormat:mt,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(It),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Vn(u.textureWidth,u.textureHeight,{format:Mi,type:ai,depthTexture:new Ca(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let dt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,dt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Vn(d.framebufferWidth,d.framebufferHeight,{format:Mi,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at(Y){for(let et=0;et<Y.removed.length;et++){let dt=Y.removed[et],Nt=T.indexOf(dt);Nt>=0&&(T[Nt]=null,b[Nt].disconnect(dt))}for(let et=0;et<Y.added.length;et++){let dt=Y.added[et],Nt=T.indexOf(dt);if(Nt===-1){for(let It=0;It<b.length;It++)if(It>=T.length){T.push(dt),Nt=It;break}else if(T[It]===null){T[It]=dt,Nt=It;break}if(Nt===-1)break}let mt=b[Nt];mt&&mt.connect(dt)}}let Z=new O,nt=new O;function it(Y,et,dt){Z.setFromMatrixPosition(et.matrixWorld),nt.setFromMatrixPosition(dt.matrixWorld);let Nt=Z.distanceTo(nt),mt=et.projectionMatrix.elements,It=dt.projectionMatrix.elements,De=mt[14]/(mt[10]-1),zt=mt[14]/(mt[10]+1),Kt=(mt[9]+1)/mt[5],ae=(mt[9]-1)/mt[5],Ft=(mt[8]-1)/mt[0],me=(It[8]+1)/It[0],Pe=De*Ft,Ye=De*me,Se=Nt/(-Ft+me),he=Se*-Ft;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(he),Y.translateZ(Se),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),mt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let U=De+Se,Me=zt+Se,Qt=Pe-he,C=Ye+(Nt-he),v=Kt*zt/Me*U,P=ae*zt/Me*U;Y.projectionMatrix.makePerspective(Qt,C,v,P,U,Me),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ct(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,dt=Y.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),k.near=I.near=R.near=et,k.far=I.far=R.far=dt,(L!==k.near||V!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,V=k.far),k.layers.mask=Y.layers.mask|6,R.layers.mask=k.layers.mask&-5,I.layers.mask=k.layers.mask&-3;let Nt=Y.parent,mt=k.cameras;Ct(k,Nt);for(let It=0;It<mt.length;It++)Ct(mt[It],Nt);mt.length===2?it(k,R,I):k.projectionMatrix.copy(R.projectionMatrix),A===null&&Y.isPerspectiveCamera&&(A={camera:Y,fov:Y.fov,zoom:Y.zoom}),Et(Y,k,Nt)};function Et(Y,et,dt){dt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(dt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=hf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Y){return f[Y]};let ue=null;function Wt(Y,et){if(h=et.getViewerPose(c||r),g=et,h!==null){let dt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Nt=!1;dt.length!==k.cameras.length&&(k.cameras.length=0,Nt=!0);for(let zt=0;zt<dt.length;zt++){let Kt=dt[zt],ae=null;if(d!==null)ae=d.getViewport(Kt);else{let me=p.getViewSubImage(u,Kt);ae=me.viewport,zt===0&&(t.setRenderTargetTextures(y,me.colorTexture,me.depthStencilTexture),t.setRenderTarget(y))}let Ft=F[zt];Ft===void 0&&(Ft=new xn,Ft.layers.enable(zt),Ft.viewport=new Ie,F[zt]=Ft),Ft.matrix.fromArray(Kt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Kt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(ae.x,ae.y,ae.width,ae.height),zt===0&&(k.matrix.copy(Ft.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Nt===!0&&k.cameras.push(Ft)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){p=i.getBinding();let zt=p.getDepthInformation(dt[0]);zt&&zt.isValid&&zt.texture&&m.init(zt,s.renderState)}if(mt&&mt.includes("camera-access")&&E){t.state.unbindTexture(),p=i.getBinding();for(let zt=0;zt<dt.length;zt++){let Kt=dt[zt].camera;if(Kt){let ae=f[Kt];ae||(ae=new Mc,f[Kt]=ae);let Ft=p.getCameraImage(Kt);ae.sourceTexture=Ft}}}}for(let dt=0;dt<b.length;dt++){let Nt=T[dt],mt=b[dt];Nt!==null&&mt!==void 0&&mt.update(Nt,et,c||r)}ue&&ue(Y,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}let te=new N1;te.setAnimationLoop(Wt),this.setAnimationLoop=function(Y){ue=Y},this.dispose=function(){}}},eD=new Fe,P1=new Bt;P1.set(-1,0,0,0,1,0,0,0,1);function nD(e,t){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Y0(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,S,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(m,f):f.isMeshLambertMaterial?(a(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(m,f),p(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&d(m,f,y)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),E(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,_,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Un&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Un&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _=t.get(f),S=_.envMap,y=_.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(eD.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(P1),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=S*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Un&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function E(m,f){let _=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iD(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let T=b.program;i.uniformBlockBinding(y,T)}function c(y,b){let T=s[y.id];T===void 0&&(m(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",_));let w=b.program;i.updateUBOMapping(y,w);let x=t.render.frame;a[y.id]!==x&&(u(y),a[y.id]=x)}function h(y){let b=p();y.__bindingPointIndex=b;let T=e.createBuffer(),w=y.__size,x=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,w,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,T),T}function p(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let b=s[y.id],T=y.uniforms,w=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let x=0,A=T.length;x<A;x++){let R=T[x];if(Array.isArray(R))for(let I=0,F=R.length;I<F;I++)d(R[I],x,I,w);else d(R,x,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(y,b,T,w){if(E(y,b,T,w)===!0){let x=y.__offset,A=y.value;if(Array.isArray(A)){let R=0;for(let I=0;I<A.length;I++){let F=A[I],k=f(F);g(F,y.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,y.__data)}}function g(y,b,T){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,T)}function E(y,b,T,w){let x=y.value,A=b+"_"+T;if(w[A]===void 0)return typeof x=="number"||typeof x=="boolean"?w[A]=x:ArrayBuffer.isView(x)?w[A]=x.slice():w[A]=x.clone(),!0;{let R=w[A];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return w[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(y){let b=y.uniforms,T=0,w=16;for(let A=0,R=b.length;A<R;A++){let I=Array.isArray(b[A])?b[A]:[b[A]];for(let F=0,k=I.length;F<k;F++){let L=I[F],V=Array.isArray(L.value)?L.value:[L.value];for(let j=0,K=V.length;j<K;j++){let at=V[j],Z=f(at),nt=T%w,it=nt%Z.boundary,Ct=nt+it;T+=it,Ct!==0&&w-Ct<Z.storage&&(T+=w-Ct),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=Z.storage}}}let x=T%w;return x>0&&(T+=w-x),y.__size=T,y.__cache={},this}function f(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",y),b}function _(y){let b=y.target;b.removeEventListener("dispose",_);let T=r.indexOf(b.__bindingPointIndex);r.splice(T,1),e.deleteBuffer(s[b.id]),delete s[b.id],delete a[b.id]}function S(){for(let y in s)e.deleteBuffer(s[y]);r=[],s={},a={}}return{bind:l,update:c,dispose:S}}var sD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fs=null;function aD(){return fs===null&&(fs=new gf(sD,16,16,za,Hi),fs.name="DFG_LUT",fs.minFilter=Qe,fs.magFilter=Qe,fs.wrapS=os,fs.wrapT=os,fs.generateMipmaps=!1,fs.needsUpdate=!0),fs}var Ud=class{constructor(t={}){let{canvas:n=e1(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=ai}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;let E=d,m=new Set([Jf,Zf,Yf]),f=new Set([ai,zi,Jo,Ko,Wf,qf]),_=new Uint32Array(4),S=new Int32Array(4),y=new O,b=null,T=null,w=[],x=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,F=null,k=null,L=null,V=null;this._outputColorSpace=Cn;let j=0,K=0,at=null,Z=-1,nt=null,it=new Ie,Ct=new Ie,Et=null,ue=new Xt(0),Wt=0,te=n.width,Y=n.height,et=1,dt=null,Nt=null,mt=new Ie(0,0,te,Y),It=new Ie(0,0,te,Y),De=!1,zt=new xc,Kt=!1,ae=!1,Ft=new Fe,me=new O,Pe=new Ie,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function he(){return at===null?et:1}let U=i;function Me(M,D){return n.getContext(M,D)}let Qt,C,v,P,H,q,lt,ut,J,$,ht,Tt,X,Q,ot,ft,St,N,rt,W,ct,vt,st;try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",be,!1),n.addEventListener("webglcontextrestored",re,!1),n.addEventListener("webglcontextcreationerror",Ei,!1),U===null){let D="webgl2";if(U=Me(D,M),U===null)throw Me(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Rt()}catch(M){throw n.removeEventListener("webglcontextlost",be,!1),n.removeEventListener("webglcontextrestored",re,!1),n.removeEventListener("webglcontextcreationerror",Ei,!1),Ot("WebGLRenderer: "+M.message),M}function Rt(){Qt=new f2(U),Qt.init(),ct=new jN(U,Qt),C=new n2(U,Qt,t,ct),v=new KN(U,Qt),C.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),k=U.createFramebuffer(),L=U.createFramebuffer(),V=U.createFramebuffer(),P=new m2(U),H=new PN,q=new QN(U,Qt,v,H,C,ct,P),lt=new h2(R),ut=new _C(U),vt=new t2(U,ut),J=new d2(U,ut,P,vt),$=new _2(U,J,ut,vt,P),N=new g2(U,C,q),ot=new i2(H),ht=new IN(R,lt,Qt,C,vt,ot),Tt=new nD(R,H),X=new zN,Q=new XN(Qt),St=new $3(R,lt,v,$,g,l),ft=new JN(R,$,C),st=new iD(U,P,C,v),rt=new e2(U,Qt,P),W=new p2(U,Qt,P),P.programs=ht.programs,R.capabilities=C,R.extensions=Qt,R.properties=H,R.renderLists=X,R.shadowMap=ft,R.state=v,R.info=P}E!==ai&&(A=new y2(E,n.width,n.height,o,s,a));let At=new g_(R,U);this.xr=At,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=Qt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Qt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(M){M!==void 0&&(et=M,this.setSize(te,Y,!1))},this.getSize=function(M){return M.set(te,Y)},this.setSize=function(M,D,G=!0){if(At.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}te=M,Y=D,n.width=Math.floor(M*et),n.height=Math.floor(D*et),G===!0&&(n.style.width=M+"px",n.style.height=D+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(te*et,Y*et).floor()},this.setDrawingBufferSize=function(M,D,G){te=M,Y=D,et=G,n.width=Math.floor(M*G),n.height=Math.floor(D*G),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(E===ai){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(it)},this.getViewport=function(M){return M.copy(mt)},this.setViewport=function(M,D,G,B){M.isVector4?mt.set(M.x,M.y,M.z,M.w):mt.set(M,D,G,B),v.viewport(it.copy(mt).multiplyScalar(et).round())},this.getScissor=function(M){return M.copy(It)},this.setScissor=function(M,D,G,B){M.isVector4?It.set(M.x,M.y,M.z,M.w):It.set(M,D,G,B),v.scissor(Ct.copy(It).multiplyScalar(et).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(M){v.setScissorTest(De=M)},this.setOpaqueSort=function(M){dt=M},this.setTransparentSort=function(M){Nt=M},this.getClearColor=function(M){return M.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,G=!0){let B=0;if(M){let z=!1;if(at!==null){let _t=at.texture.format;z=m.has(_t)}if(z){let _t=at.texture.type,xt=f.has(_t),gt=St.getClearColor(),Mt=St.getClearAlpha(),wt=gt.r,Vt=gt.g,qt=gt.b;xt?(_[0]=wt,_[1]=Vt,_[2]=qt,_[3]=Mt,U.clearBufferuiv(U.COLOR,0,_)):(S[0]=wt,S[1]=Vt,S[2]=qt,S[3]=Mt,U.clearBufferiv(U.COLOR,0,S))}else B|=U.COLOR_BUFFER_BIT}D&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){n.removeEventListener("webglcontextlost",be,!1),n.removeEventListener("webglcontextrestored",re,!1),n.removeEventListener("webglcontextcreationerror",Ei,!1),St.dispose(),X.dispose(),Q.dispose(),H.dispose(),lt.dispose(),$.dispose(),vt.dispose(),st.dispose(),ht.dispose(),At.dispose(),At.removeEventListener("sessionstart",M_),At.removeEventListener("sessionend",b_),Fa.stop()};function be(M){M.preventDefault(),W0("WebGLRenderer: Context Lost."),I=!0}function re(){W0("WebGLRenderer: Context Restored."),I=!1;let M=P.autoReset,D=ft.enabled,G=ft.autoUpdate,B=ft.needsUpdate,z=ft.type;Rt(),P.autoReset=M,ft.enabled=D,ft.autoUpdate=G,ft.needsUpdate=B,ft.type=z}function Ei(M){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Gi(M){let D=M.target;D.removeEventListener("dispose",Gi),X1(D)}function X1(M){W1(M),H.remove(M)}function W1(M){let D=H.get(M).programs;D!==void 0&&(D.forEach(function(G){ht.releaseProgram(G)}),M.isShaderMaterial&&ht.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,G,B,z,_t){D===null&&(D=Ye);let xt=z.isMesh&&z.matrixWorld.determinantAffine()<0,gt=Z1(M,D,G,B,z);v.setMaterial(B,xt);let Mt=G.index,wt=1;if(B.wireframe===!0){if(Mt=J.getWireframeAttribute(G),Mt===void 0)return;wt=2}let Vt=G.drawRange,qt=G.attributes.position,bt=Vt.start*wt,oe=(Vt.start+Vt.count)*wt;_t!==null&&(bt=Math.max(bt,_t.start*wt),oe=Math.min(oe,(_t.start+_t.count)*wt)),Mt!==null?(bt=Math.max(bt,0),oe=Math.min(oe,Mt.count)):qt!=null&&(bt=Math.max(bt,0),oe=Math.min(oe,qt.count));let Ge=oe-bt;if(Ge<0||Ge===1/0)return;vt.setup(z,B,gt,G,Mt);let Re,ve=rt;if(Mt!==null&&(Re=ut.get(Mt),ve=W,ve.setIndex(Re)),z.isMesh)B.wireframe===!0?(v.setLineWidth(B.wireframeLinewidth*he()),ve.setMode(U.LINES)):ve.setMode(U.TRIANGLES);else if(z.isLine){let pn=B.linewidth;pn===void 0&&(pn=1),v.setLineWidth(pn*he()),z.isLineSegments?ve.setMode(U.LINES):z.isLineLoop?ve.setMode(U.LINE_LOOP):ve.setMode(U.LINE_STRIP)}else z.isPoints?ve.setMode(U.POINTS):z.isSprite&&ve.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))ve.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let pn=z._multiDrawStarts,yt=z._multiDrawCounts,Mn=z._multiDrawCount,ee=Mt?ut.get(Mt).bytesPerElement:1,oi=H.get(B).currentProgram.getUniforms();for(let ki=0;ki<Mn;ki++)oi.setValue(U,"_gl_DrawID",ki),ve.render(pn[ki]/ee,yt[ki])}else if(z.isInstancedMesh)ve.renderInstances(bt,Ge,z.count);else if(G.isInstancedBufferGeometry){let pn=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,yt=Math.min(G.instanceCount,pn);ve.renderInstances(bt,Ge,yt)}else ve.render(bt,Ge)};function S_(M,D,G,B){F!==null&&M.isNodeMaterial&&F.setObject(B,M),Kt===!0&&ot.setState(M,G,!1),M.transparent===!0&&M.side===si&&M.forceSinglePass===!1?(M.side=Un,M.needsUpdate=!0,Wc(M,D,B),M.side=Oa,M.needsUpdate=!0,Wc(M,D,B),M.side=si):Wc(M,D,B)}this.compile=function(M,D,G=null){G===null&&(G=M),F!==null&&F.renderStart(M,D,G),T=Q.get(G),T.init(D),x.push(T),G.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),M!==G&&M.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),ae=this.localClippingEnabled,Kt=ot.init(this.clippingPlanes,ae),Kt===!0&&ot.setGlobalState(this.clippingPlanes,D),F!==null&&ft.render(T.state.shadowsArray,G,D);let B=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let _t=z.material;if(_t)if(Array.isArray(_t))for(let xt=0;xt<_t.length;xt++){let gt=_t[xt];S_(gt,G,D,z),B.add(gt)}else S_(_t,G,D,z),B.add(_t)}),T=x.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(M,D,G=null){let B=this.compile(M,D,G);return new Promise(z=>{function _t(){if(B.forEach(function(xt){let Mt=H.get(xt).currentProgram;(Mt===void 0||Mt.isReady())&&B.delete(xt)}),B.size===0){z(M);return}setTimeout(_t,10)}Qt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let zd=null;function q1(M){zd&&zd(M)}function M_(){Fa.stop()}function b_(){Fa.start()}let Fa=new N1;Fa.setAnimationLoop(q1),typeof self<"u"&&Fa.setContext(self),this.setAnimationLoop=function(M){zd=M,At.setAnimationLoop(M),M===null?Fa.stop():Fa.start()},At.addEventListener("sessionstart",M_),At.addEventListener("sessionend",b_),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(M,D);let G=At.enabled===!0&&At.isPresenting===!0,B=A!==null&&(at===null||G)&&A.begin(R,at);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(D),D=At.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,D,at),T=Q.get(M,x.length),T.init(D),T.state.textureUnits=q.getTextureUnits(),x.push(T),Ft.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),zt.setFromProjectionMatrix(Ft,Ii,D.reversedDepth),ae=this.localClippingEnabled,Kt=ot.init(this.clippingPlanes,ae),b=X.get(M,w.length),b.init(),w.push(b),At.enabled===!0&&At.isPresenting===!0){let xt=R.xr.getDepthSensingMesh();xt!==null&&Fd(xt,D,-1/0,R.sortObjects)}Fd(M,D,0,R.sortObjects),b.finish(),F!==null&&F.updateLights(T.state.lightsArray),R.sortObjects===!0&&b.sort(dt,Nt),Se=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Se&&St.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Kt===!0&&ot.beginShadows();let z=T.state.shadowsArray;if(ft.render(z,M,D),Kt===!0&&ot.endShadows(),(B&&A.hasRenderPass())===!1){let xt=b.opaque,gt=b.transmissive;if(T.setupLights(),D.isArrayCamera){let Mt=D.cameras;if(gt.length>0)for(let wt=0,Vt=Mt.length;wt<Vt;wt++){let qt=Mt[wt];T_(xt,gt,M,qt)}Se&&St.render(M);for(let wt=0,Vt=Mt.length;wt<Vt;wt++){let qt=Mt[wt];E_(b,M,qt,qt.viewport)}}else gt.length>0&&T_(xt,gt,M,D),Se&&St.render(M),E_(b,M,D)}at!==null&&K===0&&(q.updateMultisampleRenderTarget(at),q.updateRenderTargetMipmap(at)),B&&A.end(R),M.isScene===!0&&M.onAfterRender(R,M,D),vt.resetDefaultState(),Z=-1,nt=null,x.pop(),x.length>0?(T=x[x.length-1],q.setTextureUnits(T.state.textureUnits),Kt===!0&&ot.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?b=w[w.length-1]:b=null,F!==null&&F.renderEnd()};function Fd(M,D,G,B){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(zt)){B&&Pe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ft);let xt=$.update(M),gt=M.material;gt.visible&&b.push(M,xt,gt,G,Pe.z,null,D)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(zt))){let xt=$.update(M),gt=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pe.copy(M.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Pe.copy(xt.boundingSphere.center)),Pe.applyMatrix4(M.matrixWorld).applyMatrix4(Ft)),Array.isArray(gt)){let Mt=xt.groups;for(let wt=0,Vt=Mt.length;wt<Vt;wt++){let qt=Mt[wt],bt=gt[qt.materialIndex];bt&&bt.visible&&b.push(M,xt,bt,G,Pe.z,qt,D)}}else gt.visible&&b.push(M,xt,gt,G,Pe.z,null,D)}}let _t=M.children;for(let xt=0,gt=_t.length;xt<gt;xt++)Fd(_t[xt],D,G,B)}function E_(M,D,G,B){let{opaque:z,transmissive:_t,transparent:xt}=M;T.setupLightsView(G),Kt===!0&&ot.setGlobalState(R.clippingPlanes,G),B&&v.viewport(it.copy(B)),z.length>0&&Xc(z,D,G),_t.length>0&&Xc(_t,D,G),xt.length>0&&Xc(xt,D,G),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function T_(M,D,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){let bt=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new Vn(1,1,{generateMipmaps:!0,type:bt?Hi:ai,minFilter:Pa,samples:Math.max(4,C.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$t.workingColorSpace})}let _t=T.state.transmissionRenderTarget[B.id],xt=B.viewport||it;_t.setSize(xt.z*R.transmissionResolutionScale,xt.w*R.transmissionResolutionScale);let gt=R.getRenderTarget(),Mt=R.getActiveCubeFace(),wt=R.getActiveMipmapLevel();R.setRenderTarget(_t),R.getClearColor(ue),Wt=R.getClearAlpha(),Wt<1&&R.setClearColor(16777215,.5),R.clear(),Se&&St.render(G);let Vt=R.toneMapping;R.toneMapping=Bi;let qt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),Kt===!0&&ot.setGlobalState(R.clippingPlanes,B),Xc(M,G,B),q.updateMultisampleRenderTarget(_t),q.updateRenderTargetMipmap(_t),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let oe=0,Ge=D.length;oe<Ge;oe++){let Re=D[oe],{object:ve,geometry:pn,material:yt,group:Mn}=Re;if(yt.side===si&&ve.layers.test(B.layers)){let ee=yt.side;yt.side=Un,yt.needsUpdate=!0,A_(ve,G,B,pn,yt,Mn),yt.side=ee,yt.needsUpdate=!0,bt=!0}}bt===!0&&(q.updateMultisampleRenderTarget(_t),q.updateRenderTargetMipmap(_t))}R.setRenderTarget(gt,Mt,wt),R.setClearColor(ue,Wt),qt!==void 0&&(B.viewport=qt),R.toneMapping=Vt}function Xc(M,D,G){let B=D.isScene===!0?D.overrideMaterial:null;for(let z=0,_t=M.length;z<_t;z++){let xt=M[z],{object:gt,geometry:Mt,group:wt}=xt,Vt=xt.material;Vt.allowOverride===!0&&B!==null&&(Vt=B),gt.layers.test(G.layers)&&A_(gt,D,G,Mt,Vt,wt)}}function A_(M,D,G,B,z,_t){F!==null&&z.isNodeMaterial&&F.setObject(M,z),M.onBeforeRender(R,D,G,B,z,_t),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(R,D,G,B,M,_t),z.transparent===!0&&z.side===si&&z.forceSinglePass===!1?(z.side=Un,z.needsUpdate=!0,R.renderBufferDirect(G,D,B,z,M,_t),z.side=Oa,z.needsUpdate=!0,R.renderBufferDirect(G,D,B,z,M,_t),z.side=si):R.renderBufferDirect(G,D,B,z,M,_t),M.onAfterRender(R,D,G,B,z,_t)}function Wc(M,D,G){D.isScene!==!0&&(D=Ye);let B=H.get(M),z=T.state.lights,_t=T.state.shadowsArray,xt=z.state.version,gt=ht.getParameters(M,z.state,_t,D,G,T.state.lightProbeGridArray),Mt=ht.getProgramCacheKey(gt),wt=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;let Vt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=lt.get(M.envMap||B.environment,Vt),B.envMapRotation=B.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,wt===void 0&&(M.addEventListener("dispose",Gi),wt=new Map,B.programs=wt);let qt=wt.get(Mt);if(qt!==void 0){if(B.currentProgram===qt&&B.lightsStateVersion===xt)return C_(M,gt),qt}else gt.uniforms=ht.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,G,gt),M.onBeforeCompile(gt,R),qt=ht.acquireProgram(gt,Mt),wt.set(Mt,qt),B.uniforms=gt.uniforms;let bt=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(bt.clippingPlanes=ot.uniform),C_(M,gt),B.needsLights=K1(M),B.lightsStateVersion=xt,B.needsLights&&(bt.ambientLightColor.value=z.state.ambient,bt.lightProbe.value=z.state.probe,bt.sunLights.value=z.state.sun,bt.sunLightShadows.value=z.state.sunShadow,bt.directionalLights.value=z.state.directional,bt.directionalLightShadows.value=z.state.directionalShadow,bt.spotLights.value=z.state.spot,bt.spotLightShadows.value=z.state.spotShadow,bt.rectAreaLights.value=z.state.rectArea,bt.ltc_1.value=z.state.rectAreaLTC1,bt.ltc_2.value=z.state.rectAreaLTC2,bt.pointLights.value=z.state.point,bt.pointLightShadows.value=z.state.pointShadow,bt.hemisphereLights.value=z.state.hemi,bt.sunShadowMatrix.value=z.state.sunShadowMatrix,bt.sunShadowCascade.value=z.state.sunShadowCascade,bt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,bt.spotLightMatrix.value=z.state.spotLightMatrix,bt.spotLightMap.value=z.state.spotLightMap,bt.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=T.state.lightProbeGridArray.length>0,B.currentProgram=qt,B.uniformsList=null,qt}function w_(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=$o.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function C_(M,D){let G=H.get(M);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function Y1(M,D){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let G=0,B=M.length;G<B;G++){let z=M[G];if(z.texture!==null&&z.boundingBox.containsPoint(y))return z}return null}function Z1(M,D,G,B,z){D.isScene!==!0&&(D=Ye),q.resetTextureUnits();let _t=D.fog,xt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,gt=at===null?R.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:$t.workingColorSpace,Mt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,wt=lt.get(B.envMap||xt,Mt),Vt=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,qt=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),bt=!!G.morphAttributes.position,oe=!!G.morphAttributes.normal,Ge=!!G.morphAttributes.color,Re=Bi;B.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Re=R.toneMapping);let ve=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pn=ve!==void 0?ve.length:0,yt=H.get(B),Mn=T.state.lights;if(Kt===!0&&(ae===!0||M!==nt)){let Ee=M===nt&&B.id===Z;ot.setState(B,M,Ee)}let ee=!1;B.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Mn.state.version||yt.outputColorSpace!==gt||z.isBatchedMesh&&yt.batching===!1||!z.isBatchedMesh&&yt.batching===!0||z.isBatchedMesh&&yt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&yt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&yt.instancing===!1||!z.isInstancedMesh&&yt.instancing===!0||z.isSkinnedMesh&&yt.skinning===!1||!z.isSkinnedMesh&&yt.skinning===!0||z.isInstancedMesh&&yt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&yt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&yt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&yt.instancingMorph===!1&&z.morphTexture!==null||yt.envMap!==wt||B.fog===!0&&yt.fog!==_t||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==ot.numPlanes||yt.numIntersection!==ot.numIntersection)||yt.vertexAlphas!==Vt||yt.vertexTangents!==qt||yt.morphTargets!==bt||yt.morphNormals!==oe||yt.morphColors!==Ge||yt.toneMapping!==Re||yt.morphTargetsCount!==pn||!!yt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,yt.__version=B.version);let oi=yt.currentProgram;ee===!0&&(oi=Wc(B,D,z),F&&B.isNodeMaterial&&F.onUpdateProgram(B,oi,yt));let ki=!1,Vs=!1,Mr=!1,ge=oi.getUniforms(),He=yt.uniforms;if(v.useProgram(oi.program)&&(ki=!0,Vs=!0,Mr=!0),B.id!==Z&&(Z=B.id,Vs=!0),yt.needsLights){let Ee=Y1(T.state.lightProbeGridArray,z);yt.lightProbeGrid!==Ee&&(yt.lightProbeGrid=Ee,Vs=!0)}if(ki||nt!==M){v.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ge.setValue(U,"projectionMatrix",M.projectionMatrix),ge.setValue(U,"viewMatrix",M.matrixWorldInverse);let ks=ge.map.cameraPosition;ks!==void 0&&ks.setValue(U,me.setFromMatrixPosition(M.matrixWorld)),C.logarithmicDepthBuffer&&ge.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ge.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),nt!==M&&(nt=M,Vs=!0,Mr=!0)}if(yt.needsLights&&(Mn.state.sunShadowMap.length>0&&ge.setValue(U,"sunShadowMap",Mn.state.sunShadowMap,q),Mn.state.directionalShadowMap.length>0&&ge.setValue(U,"directionalShadowMap",Mn.state.directionalShadowMap,q),Mn.state.spotShadowMap.length>0&&ge.setValue(U,"spotShadowMap",Mn.state.spotShadowMap,q),Mn.state.pointShadowMap.length>0&&ge.setValue(U,"pointShadowMap",Mn.state.pointShadowMap,q)),z.isSkinnedMesh){ge.setOptional(U,z,"bindMatrix"),ge.setOptional(U,z,"bindMatrixInverse");let Ee=z.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),ge.setValue(U,"boneTexture",Ee.boneTexture,q))}z.isBatchedMesh&&(ge.setOptional(U,z,"batchingTexture"),ge.setValue(U,"batchingTexture",z._matricesTexture,q),ge.setOptional(U,z,"batchingIdTexture"),ge.setValue(U,"batchingIdTexture",z._indirectTexture,q),ge.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&ge.setValue(U,"batchingColorTexture",z._colorsTexture,q));let Gs=G.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&N.update(z,G,oi),(Vs||yt.receiveShadow!==z.receiveShadow)&&(yt.receiveShadow=z.receiveShadow,ge.setValue(U,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(He.envMapIntensity.value=D.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=aD()),Vs){if(ge.setValue(U,"toneMappingExposure",R.toneMappingExposure),yt.needsLights&&J1(He,Mr),_t&&B.fog===!0&&Tt.refreshFogUniforms(He,_t),Tt.refreshMaterialUniforms(He,B,et,Y,T.state.transmissionRenderTarget[M.id]),yt.needsLights&&yt.lightProbeGrid){let Ee=yt.lightProbeGrid;He.probesSH.value=Ee.texture,He.probesMin.value.copy(Ee.boundingBox.min),He.probesMax.value.copy(Ee.boundingBox.max),He.probesResolution.value.copy(Ee.resolution)}$o.upload(U,w_(yt),He,q)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&($o.upload(U,w_(yt),He,q),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ge.setValue(U,"center",z.center),ge.setValue(U,"modelViewMatrix",z.modelViewMatrix),ge.setValue(U,"normalMatrix",z.normalMatrix),ge.setValue(U,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let Ee=B.uniformsGroups;for(let ks=0,br=Ee.length;ks<br;ks++){let N_=Ee[ks];st.update(N_,oi),st.bind(N_,oi)}}return oi}function J1(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.sunLights.needsUpdate=D,M.sunLightShadows.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function K1(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(M,D,G){let B=H.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=D,H.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){let G=H.get(M);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,G=0){at=M,j=D,K=G;let B=null,z=!1,_t=!1;if(M){let gt=H.get(M);if(gt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,gt.__webglFramebuffer),it.copy(M.viewport),Ct.copy(M.scissor),Et=M.scissorTest,v.viewport(it),v.scissor(Ct),v.setScissorTest(Et),Z=-1;return}else if(gt.__webglFramebuffer===void 0)q.setupRenderTarget(M);else if(gt.__hasExternalTextures)q.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Vt=M.depthTexture;if(gt.__boundDepthTexture!==Vt){if(Vt!==null&&H.has(Vt)&&(M.width!==Vt.image.width||M.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(M)}}let Mt=M.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(_t=!0);let wt=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(wt[D])?B=wt[D][G]:B=wt[D],z=!0):M.samples>0&&q.useMultisampledRTT(M)===!1?B=H.get(M).__webglMultisampledFramebuffer:Array.isArray(wt)?B=wt[G]:B=wt,it.copy(M.viewport),Ct.copy(M.scissor),Et=M.scissorTest}else it.copy(mt).multiplyScalar(et).floor(),Ct.copy(It).multiplyScalar(et).floor(),Et=De;if(G!==0&&(B=k),v.bindFramebuffer(U.FRAMEBUFFER,B)&&v.drawBuffers(M,B),v.viewport(it),v.scissor(Ct),v.setScissorTest(Et),z){let gt=H.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,gt.__webglTexture,G)}else if(_t){let gt=D;for(let Mt=0;Mt<M.textures.length;Mt++){let wt=H.get(M.textures[Mt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Mt,wt.__webglTexture,G,gt)}}else if(M!==null&&G!==0){let gt=H.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,gt.__webglTexture,G)}Z=-1};function R_(M){let D=H.get(M);return(D.__readFormat!==M.format||D.__readType!==M.type)&&(D.__readFormat=M.format,D.__readType=M.type,D.__formatReadable=C.textureFormatReadable(M.format),D.__typeReadable=C.textureTypeReadable(M.type)),D}this.readRenderTargetPixels=function(M,D,G,B,z,_t,xt,gt=0){if(!(M&&M.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt){v.bindFramebuffer(U.FRAMEBUFFER,Mt);try{let wt=M.textures[gt],Vt=wt.format,qt=wt.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+gt);let bt=R_(wt);if(bt.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-B&&G>=0&&G<=M.height-z&&U.readPixels(D,G,B,z,ct.convert(Vt),ct.convert(qt),_t)}finally{let wt=at!==null?H.get(at).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(M,D,G,B,z,_t,xt,gt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt)if(D>=0&&D<=M.width-B&&G>=0&&G<=M.height-z){v.bindFramebuffer(U.FRAMEBUFFER,Mt);let wt=M.textures[gt],Vt=wt.format,qt=wt.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+gt);let bt=R_(wt);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,oe),U.bufferData(U.PIXEL_PACK_BUFFER,_t.byteLength,U.STREAM_READ),U.readPixels(D,G,B,z,ct.convert(Vt),ct.convert(qt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ge=at!==null?H.get(at).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Ge);let Re=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await i1(U,Re,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,oe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,_t),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(oe),U.deleteSync(Re),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,G=0){let B=Math.pow(2,-G),z=Math.floor(M.image.width*B),_t=Math.floor(M.image.height*B),xt=D!==null?D.x:0,gt=D!==null?D.y:0;q.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,xt,gt,z,_t),v.unbindTexture()},this.copyTextureToTexture=function(M,D,G=null,B=null,z=0,_t=0){let xt,gt,Mt,wt,Vt,qt,bt,oe,Ge,Re=M.isCompressedTexture?M.mipmaps[_t]:M.image;if(G!==null)xt=G.max.x-G.min.x,gt=G.max.y-G.min.y,Mt=G.isBox3?G.max.z-G.min.z:1,wt=G.min.x,Vt=G.min.y,qt=G.isBox3?G.min.z:0;else{let He=Math.pow(2,-z);xt=Math.floor(Re.width*He),gt=Math.floor(Re.height*He),M.isDataArrayTexture?Mt=Re.depth:M.isData3DTexture?Mt=Math.floor(Re.depth*He):Mt=1,wt=0,Vt=0,qt=0}B!==null?(bt=B.x,oe=B.y,Ge=B.z):(bt=0,oe=0,Ge=0);let ve=ct.convert(D.format),pn=ct.convert(D.type),yt;D.isData3DTexture?(q.setTexture3D(D,0),yt=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(q.setTexture2DArray(D,0),yt=U.TEXTURE_2D_ARRAY):(q.setTexture2D(D,0),yt=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let Mn=v.getParameter(U.UNPACK_ROW_LENGTH),ee=v.getParameter(U.UNPACK_IMAGE_HEIGHT),oi=v.getParameter(U.UNPACK_SKIP_PIXELS),ki=v.getParameter(U.UNPACK_SKIP_ROWS),Vs=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,Re.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Re.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,wt),v.pixelStorei(U.UNPACK_SKIP_ROWS,Vt),v.pixelStorei(U.UNPACK_SKIP_IMAGES,qt);let Mr=M.isDataArrayTexture||M.isData3DTexture,ge=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){let He=H.get(M),Gs=H.get(D),Ee=H.get(He.__renderTarget),ks=H.get(Gs.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,Ee.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,ks.__webglFramebuffer);for(let br=0;br<Mt;br++)Mr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(M).__webglTexture,z,qt+br),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(D).__webglTexture,_t,Ge+br)),U.blitFramebuffer(wt,Vt,xt,gt,bt,oe,xt,gt,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||H.has(M)){let He=H.get(M),Gs=H.get(D);v.bindFramebuffer(U.READ_FRAMEBUFFER,L),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,V);for(let Ee=0;Ee<Mt;Ee++)Mr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,He.__webglTexture,z,qt+Ee):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,He.__webglTexture,z),ge?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Gs.__webglTexture,_t,Ge+Ee):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Gs.__webglTexture,_t),z!==0?U.blitFramebuffer(wt,Vt,xt,gt,bt,oe,xt,gt,U.COLOR_BUFFER_BIT,U.NEAREST):ge?U.copyTexSubImage3D(yt,_t,bt,oe,Ge+Ee,wt,Vt,xt,gt):U.copyTexSubImage2D(yt,_t,bt,oe,wt,Vt,xt,gt);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ge?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(yt,_t,bt,oe,Ge,xt,gt,Mt,ve,pn,Re.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(yt,_t,bt,oe,Ge,xt,gt,Mt,ve,Re.data):U.texSubImage3D(yt,_t,bt,oe,Ge,xt,gt,Mt,ve,pn,Re):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,_t,bt,oe,xt,gt,ve,pn,Re.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,_t,bt,oe,Re.width,Re.height,ve,Re.data):U.texSubImage2D(U.TEXTURE_2D,_t,bt,oe,xt,gt,ve,pn,Re);v.pixelStorei(U.UNPACK_ROW_LENGTH,Mn),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ee),v.pixelStorei(U.UNPACK_SKIP_PIXELS,oi),v.pixelStorei(U.UNPACK_SKIP_ROWS,ki),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Vs),_t===0&&D.generateMipmaps&&U.generateMipmap(yt),v.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?q.setTextureCube(M,0):M.isData3DTexture?q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?q.setTexture2DArray(M,0):q.setTexture2D(M,0),v.unbindTexture()},this.resetState=function(){j=0,K=0,at=null,v.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),n.unpackColorSpace=$t._getUnpackColorSpace()}};var kc=ps(Gc()),cD=[],ri={background:"#000000",lineColor:"#B0B0B0",lineOpacity:50,grid:4,tunnelSize:10,speed:100,boost:100,fade:100,label:!0,labelText:"Press to Start",labelFill:"#FFFFFF",labelColor:"#000000",labelFont:{fontFamily:"Pretendard",fontSize:14,fontWeight:500}},uD=2,hD=1.8,Vi=1,v_=15,__=.003,fD=.05,dD=.1,pD=1,mD=v_*Vi*.95,gD=e=>typeof e=="string"?e:e?.src??"";function y_(e){let{images:t,background:n=ri.background,lineColor:i=ri.lineColor,lineOpacity:s=ri.lineOpacity,grid:a=ri.grid,tunnelSize:r=ri.tunnelSize,speed:o=ri.speed,boost:l=ri.boost,fade:c=ri.fade,label:h=ri.label,labelText:p=ri.labelText,labelFill:u=ri.labelFill,labelColor:d=ri.labelColor,labelFont:g=ri.labelFont,style:E}=e,m=(0,Hs.useRef)(null),f=(0,Hs.useRef)(null),_=(0,Hs.useRef)(null),S=(0,Hs.useMemo)(()=>{let b=(t??[]).map(gD).filter(Boolean);return b.length?b:cD},[t]),y=(0,Hs.useRef)({speed:1,boost:1});return y.current={speed:Math.max(0,o)/100,boost:Math.max(0,l)/10},(0,Hs.useEffect)(()=>{let b=m.current,T=f.current;if(!b||!T)return;let w=Math.max(1,r)/10,x=uD*w,A=hD*w,R=new _c;R.background=new Xt(n);let I=Math.min(100,Math.max(0,c))/100,F=Math.max(2.5,mD*(1.2-.65*Math.min(w,1.25))),k=Math.min(F*(1-I),F-.01);R.fog=new gc(new Xt(n),k,F);let L=new xn(45,1,1,1e3);L.position.set(0,0,0);let V=new Ud({canvas:T,antialias:!0,alpha:!1,powerPreference:"low-power"});V.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));let j=new zs({color:new Xt(i),transparent:!0,opacity:Math.min(100,Math.max(0,s))/100}),K=new Ac;K.setCrossOrigin("anonymous");let at=[],Z=0,nt=0,it=0,Ct=0,Et=0,ue=0,Wt=!0,te=new IntersectionObserver(([X])=>{Wt=X.isIntersecting});te.observe(b);let Y=!1,et=!0,dt=x/2,Nt=A/2,mt=Math.max(1,Math.round(a)),It=Math.max(1,Math.round(a)),De=x/mt,zt=A/It,Kt=new Na(De,Vi),ae=new Na(Vi,zt),Ft=new _r(new Ra(new O(0,0,0),new O(0,0,-Vi)),1,__,8),me=new _r(new Ra(new O(0,0,0),new O(x,0,0)),1,__,8),Pe=new _r(new Ra(new O(0,0,0),new O(0,A,0)),1,__,8),Ye=S.map(X=>{let Q=new zs({transparent:!0,opacity:0,side:si});return K.load(X,ot=>{if(!et){ot.dispose();return}ot.minFilter=Qe,ot.generateMipmaps=!1,ot.colorSpace=Cn,Q.map=ot,Q.needsUpdate=!0,at.push(Q)},void 0,()=>{}),Q}),Se=new zs({transparent:!0,opacity:0,side:si}),he=(X,Q,ot,ft=0)=>{let St=new Dn(X,j);return St.position.set(Q,ot,ft),St},U=[];{let X=-Vi/2;for(let Q=0;Q<mt;Q++){let ot=-dt+Q*De+De/2;U.push({geo:Kt,pos:new O(ot,-Nt,X),rot:new ei(-Math.PI/2,0,0)}),U.push({geo:Kt,pos:new O(ot,Nt,X),rot:new ei(Math.PI/2,0,0)})}for(let Q=0;Q<It;Q++){let ot=-Nt+Q*zt+zt/2;U.push({geo:ae,pos:new O(-dt,ot,X),rot:new ei(0,Math.PI/2,0)}),U.push({geo:ae,pos:new O(dt,ot,X),rot:new ei(0,-Math.PI/2,0)})}}let Me=Array.from({length:2*mt+2*It},()=>[]);for(let X=0;X<mt;X++){let Q=2*X,ot=2*X+1;X>0&&(Me[Q].push(2*(X-1)),Me[ot].push(2*(X-1)+1)),X<mt-1&&(Me[Q].push(2*(X+1)),Me[ot].push(2*(X+1)+1))}let Qt=2*mt;for(let X=0;X<It;X++){let Q=Qt+2*X,ot=Qt+2*X+1;X>0&&(Me[Q].push(Qt+2*(X-1)),Me[ot].push(Qt+2*(X-1)+1)),X<It-1&&(Me[Q].push(Qt+2*(X+1)),Me[ot].push(Qt+2*(X+1)+1))}function C(X){let Q=nt%2===0;nt++;let ot=X.userData.slabs;for(let N of ot)N.visible=!1;if(!Q||Ye.length===0)return;let ft=ot.map((N,rt)=>rt);for(let N=ft.length-1;N>0;N--){let rt=Math.floor(Math.random()*(N+1)),W=ft[N];ft[N]=ft[rt],ft[rt]=W}let St=new Set;for(let N of ft){if(Me[N].some(ct=>St.has(ct)))continue;St.add(N);let W=ot[N];W.visible=!0,W.material=Ye[3*Z%Ye.length],Z++}}function v(X){let Q=new Ps;Q.position.z=X;for(let ft=0;ft<=mt;ft++){let St=-dt+ft*De;Q.add(he(Ft,St,-Nt)),Q.add(he(Ft,St,Nt))}for(let ft=1;ft<It;ft++){let St=-Nt+ft*zt;Q.add(he(Ft,-dt,St)),Q.add(he(Ft,dt,St))}Q.add(he(me,-dt,-Nt)),Q.add(he(me,-dt,Nt)),Q.add(he(Pe,-dt,-Nt)),Q.add(he(Pe,dt,-Nt));let ot=U.map(ft=>{let St=new Dn(ft.geo,Se);return St.position.copy(ft.pos),St.rotation.copy(ft.rot),St.visible=!1,Q.add(St),St});return Q.userData.slabs=ot,C(Q),Q}let P=[];for(let X=0;X<v_;X++){let Q=v(-X*Vi);R.add(Q),P.push(Q)}let H=()=>{let X=Math.max(1,b.clientWidth),Q=Math.max(1,b.clientHeight);L.aspect=X/Q,L.updateProjectionMatrix(),V.setSize(X,Q,!1)},q=new ResizeObserver(H);q.observe(b),H();let lt=X=>{if(!et)return;if(Ct=requestAnimationFrame(lt),document.hidden||!Wt){Et=0;return}if(X-ue<1e3/30)return;ue=X;let Q=Et?Math.min((X-Et)/1e3,1/30):1/60;Et=X;let ot=y.current;it+=(Y&&ot.boost>0?ot.boost:ot.speed)*Q*60;let ft=-fD*it;L.position.z+=dD*(ft-L.position.z);let St=v_*Vi,N=L.position.z;for(let rt of P)if(rt.position.z>N+Vi){let W=0;for(let ct of P)W=Math.min(W,ct.position.z);rt.position.z=W-Vi,C(rt)}else if(rt.position.z<N-St-Vi){let W=-999999;for(let ct of P)W=Math.max(W,ct.position.z);rt.position.z=W+Vi,C(rt)}for(let rt=at.length-1;rt>=0;rt--){let W=at[rt];W.opacity=Math.min(1,W.opacity+Q/pD),W.opacity>=1&&at.splice(rt,1)}V.render(R,L)};Ct=requestAnimationFrame(lt);let ut=X=>{let Q=_.current;if(!Q)return;let ot=b.getBoundingClientRect(),ft=ot.width>0?b.clientWidth/ot.width:1,St=ot.height>0?b.clientHeight/ot.height:1;Q.style.left=`${(X.clientX-ot.left)*ft}px`,Q.style.top=`${(X.clientY-ot.top)*St}px`},J=()=>{let X=_.current;X&&(X.style.opacity="1")},$=()=>{Y=!1;let X=_.current;X&&(X.style.opacity="0",X.style.transform="translate(0%, -100%) scale(1)")},ht=()=>{Y=!0;let X=_.current;X&&(X.style.transform="translate(0%, -100%) scale(0.85)")},Tt=()=>{Y=!1;let X=_.current;X&&(X.style.transform="translate(0%, -100%) scale(1)")};return b.addEventListener("pointermove",ut),b.addEventListener("pointerenter",J),b.addEventListener("pointerleave",$),b.addEventListener("pointerdown",ht),window.addEventListener("pointerup",Tt),()=>{et=!1,cancelAnimationFrame(Ct),q.disconnect(),te.disconnect(),b.removeEventListener("pointermove",ut),b.removeEventListener("pointerenter",J),b.removeEventListener("pointerleave",$),b.removeEventListener("pointerdown",ht),window.removeEventListener("pointerup",Tt),Kt.dispose(),ae.dispose(),Ft.dispose(),me.dispose(),Pe.dispose(),Se.dispose();for(let X of Ye)X.map?.dispose(),X.dispose();j.dispose(),V.dispose()}},[S,n,i,s,a,r,c]),(0,kc.jsxs)("div",{ref:m,style:{...E,position:"relative",width:"100%",height:"100%",overflow:"hidden",cursor:h?"none":"default"},children:[(0,kc.jsx)("canvas",{ref:f,style:{display:"block",width:"100%",height:"100%"}}),h&&(0,kc.jsx)("div",{ref:_,style:{position:"absolute",top:0,left:0,transform:"translate(0%, -100%) scale(1)",pointerEvents:"none",opacity:0,background:u,borderRadius:9999,padding:"10px 20px",transition:"transform 0.1s ease, opacity 0.2s ease",whiteSpace:"nowrap",userSelect:"none",...g,color:d},children:p})]})}var Pd=ps(Ar()),_D=768,vD=1280,H1=()=>{let[e,t]=(0,Pd.useState)({tunnelSize:5,fade:88,boost:30});return(0,Pd.useEffect)(()=>{let n=()=>{let i=window.innerWidth;if(i<_D){t({tunnelSize:5,fade:88,boost:30});return}if(i<vD){t({tunnelSize:6,fade:96,boost:30});return}t({tunnelSize:10,fade:100,boost:30})};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e};var Bd=ps(Gc()),yD=[1,2,3,4,6].map(e=>({src:new URL(`./store-${e}-product.png`,import.meta.url).href,alt:"\uC2A4\uD0EC\uD53C \uC608\uC2DC \uCCB4\uD5D8 \uC81C\uD488 \uC77C\uB7EC\uC2A4\uD2B8"})),x_=class extends bi.Component{constructor(){super(...arguments);this.state={failed:!1}}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(){document.querySelectorAll("[data-hero-status]").forEach(n=>{n.textContent="\uAE30\uAE30\uC5D0\uC11C 3D\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC544 \uC815\uC801\uC778 \uC608\uC2DC \uAC24\uB7EC\uB9AC\uB97C \uBCF4\uC5EC\uB4DC\uB824\uC694."})}render(){return this.state.failed?null:this.props.children}};function xD(){let{tunnelSize:e,fade:t,boost:n}=H1(),[i,s]=(0,bi.useState)(matchMedia("(prefers-reduced-motion: reduce)").matches),[a,r]=(0,bi.useState)(i),[o,l]=(0,bi.useState)(!1),[c,h]=(0,bi.useState)(!0);(0,bi.useEffect)(()=>{let u=matchMedia("(prefers-reduced-motion: reduce)"),d=()=>{s(u.matches),r(u.matches)};return u.addEventListener("change",d),()=>u.removeEventListener("change",d)},[]),(0,bi.useEffect)(()=>{let u=document.querySelector("#hero03-gallery"),d=document.querySelector("#hero03-explore"),g=document.querySelector("#hero03-close"),E=document.querySelector("#hero03-motion"),m=document.querySelector("#hero03-gallery-motion");d.disabled=!1,E.hidden=!1;let f=()=>{u.showModal(),l(!0)},_=()=>u.close(),S=()=>l(!1),y=x=>{x.target===u&&u.close()},b=()=>r(x=>!x);d.addEventListener("click",f),g.addEventListener("click",_),u.addEventListener("close",S),u.addEventListener("click",y),E.addEventListener("click",b),m.addEventListener("click",b);let T=document.querySelector("#hero03"),w=new IntersectionObserver(([x])=>h(x.isIntersecting));return w.observe(T),()=>{d.removeEventListener("click",f),g.removeEventListener("click",_),u.removeEventListener("close",S),u.removeEventListener("click",y),E.removeEventListener("click",b),m.removeEventListener("click",b),w.disconnect()}},[]),(0,bi.useEffect)(()=>{document.querySelectorAll("#hero03-motion, #hero03-gallery-motion").forEach(u=>{u.textContent=a?"\uBC30\uACBD \uC6C0\uC9C1\uC784 \uC7AC\uC0DD":"\uBC30\uACBD \uC6C0\uC9C1\uC784 \uC815\uC9C0",u.setAttribute("aria-pressed",String(a))})},[a]),(0,bi.useEffect)(()=>{if(!o)return;let u=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=u}},[o]);let p=(0,Bd.jsx)(x_,{children:(0,Bd.jsx)(y_,{background:"#FFFBE1",lineColor:"#D7CFA4",lineOpacity:50,grid:4,tunnelSize:e,speed:a||!c&&!o?0:9,boost:a||i?0:n,fade:t,label:!1,images:yD})});return o?(0,k1.createPortal)(p,document.querySelector("#hero03-gallery-canvas")):p}var V1=document.querySelector("#hero03-scene");V1&&(0,G1.createRoot)(V1).render((0,Bd.jsx)(xD,{}));
/*! For license information please see hero.js.LEGAL.txt */
