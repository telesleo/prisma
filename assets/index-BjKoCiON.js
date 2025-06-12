(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))U(D);new MutationObserver(D=>{for(const W of D)if(W.type==="childList")for(const K of W.addedNodes)K.tagName==="LINK"&&K.rel==="modulepreload"&&U(K)}).observe(document,{childList:!0,subtree:!0});function O(D){const W={};return D.integrity&&(W.integrity=D.integrity),D.referrerPolicy&&(W.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?W.credentials="include":D.crossOrigin==="anonymous"?W.credentials="omit":W.credentials="same-origin",W}function U(D){if(D.ep)return;D.ep=!0;const W=O(D);fetch(D.href,W)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$2=globalThis,e$4=t$2.ShadowRoot&&(t$2.ShadyCSS===void 0||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$4=new WeakMap;let n$3=class{constructor(w,O,U){if(this._$cssResult$=!0,U!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=w,this.t=O}get styleSheet(){let w=this.o;const O=this.t;if(e$4&&w===void 0){const U=O!==void 0&&O.length===1;U&&(w=o$4.get(O)),w===void 0&&((this.o=w=new CSSStyleSheet).replaceSync(this.cssText),U&&o$4.set(O,w))}return w}toString(){return this.cssText}};const r$4=q=>new n$3(typeof q=="string"?q:q+"",void 0,s$2),i$3=(q,...w)=>{const O=q.length===1?q[0]:w.reduce((U,D,W)=>U+(K=>{if(K._$cssResult$===!0)return K.cssText;if(typeof K=="number")return K;throw Error("Value passed to 'css' function must be a 'css' function result: "+K+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(D)+q[W+1],q[0]);return new n$3(O,q,s$2)},S$1=(q,w)=>{if(e$4)q.adoptedStyleSheets=w.map(O=>O instanceof CSSStyleSheet?O:O.styleSheet);else for(const O of w){const U=document.createElement("style"),D=t$2.litNonce;D!==void 0&&U.setAttribute("nonce",D),U.textContent=O.cssText,q.appendChild(U)}},c$2=e$4?q=>q:q=>q instanceof CSSStyleSheet?(w=>{let O="";for(const U of w.cssRules)O+=U.cssText;return r$4(O)})(q):q;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$3,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$3,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(q,w)=>q,u$1={toAttribute(q,w){switch(w){case Boolean:q=q?l$1:null;break;case Object:case Array:q=q==null?q:JSON.stringify(q)}return q},fromAttribute(q,w){let O=q;switch(w){case Boolean:O=q!==null;break;case Number:O=q===null?null:Number(q);break;case Object:case Array:try{O=JSON.parse(q)}catch{O=null}}return O}},f$1=(q,w)=>!i$2(q,w),b={attribute:!0,type:String,converter:u$1,reflect:!1,useDefault:!1,hasChanged:f$1};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),a$1.litPropertyMetadata??(a$1.litPropertyMetadata=new WeakMap);let y$1=class extends HTMLElement{static addInitializer(w){this._$Ei(),(this.l??(this.l=[])).push(w)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(w,O=b){if(O.state&&(O.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(w)&&((O=Object.create(O)).wrapped=!0),this.elementProperties.set(w,O),!O.noAccessor){const U=Symbol(),D=this.getPropertyDescriptor(w,U,O);D!==void 0&&e$3(this.prototype,w,D)}}static getPropertyDescriptor(w,O,U){const{get:D,set:W}=h$1(this.prototype,w)??{get(){return this[O]},set(K){this[O]=K}};return{get:D,set(K){const X=D==null?void 0:D.call(this);W==null||W.call(this,K),this.requestUpdate(w,X,U)},configurable:!0,enumerable:!0}}static getPropertyOptions(w){return this.elementProperties.get(w)??b}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const w=n$2(this);w.finalize(),w.l!==void 0&&(this.l=[...w.l]),this.elementProperties=new Map(w.elementProperties)}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const O=this.properties,U=[...r$3(O),...o$3(O)];for(const D of U)this.createProperty(D,O[D])}const w=this[Symbol.metadata];if(w!==null){const O=litPropertyMetadata.get(w);if(O!==void 0)for(const[U,D]of O)this.elementProperties.set(U,D)}this._$Eh=new Map;for(const[O,U]of this.elementProperties){const D=this._$Eu(O,U);D!==void 0&&this._$Eh.set(D,O)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(w){const O=[];if(Array.isArray(w)){const U=new Set(w.flat(1/0).reverse());for(const D of U)O.unshift(c$2(D))}else w!==void 0&&O.push(c$2(w));return O}static _$Eu(w,O){const U=O.attribute;return U===!1?void 0:typeof U=="string"?U:typeof w=="string"?w.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var w;this._$ES=new Promise(O=>this.enableUpdating=O),this._$AL=new Map,this._$E_(),this.requestUpdate(),(w=this.constructor.l)==null||w.forEach(O=>O(this))}addController(w){var O;(this._$EO??(this._$EO=new Set)).add(w),this.renderRoot!==void 0&&this.isConnected&&((O=w.hostConnected)==null||O.call(w))}removeController(w){var O;(O=this._$EO)==null||O.delete(w)}_$E_(){const w=new Map,O=this.constructor.elementProperties;for(const U of O.keys())this.hasOwnProperty(U)&&(w.set(U,this[U]),delete this[U]);w.size>0&&(this._$Ep=w)}createRenderRoot(){const w=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(w,this.constructor.elementStyles),w}connectedCallback(){var w;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(w=this._$EO)==null||w.forEach(O=>{var U;return(U=O.hostConnected)==null?void 0:U.call(O)})}enableUpdating(w){}disconnectedCallback(){var w;(w=this._$EO)==null||w.forEach(O=>{var U;return(U=O.hostDisconnected)==null?void 0:U.call(O)})}attributeChangedCallback(w,O,U){this._$AK(w,U)}_$ET(w,O){var W;const U=this.constructor.elementProperties.get(w),D=this.constructor._$Eu(w,U);if(D!==void 0&&U.reflect===!0){const K=(((W=U.converter)==null?void 0:W.toAttribute)!==void 0?U.converter:u$1).toAttribute(O,U.type);this._$Em=w,K==null?this.removeAttribute(D):this.setAttribute(D,K),this._$Em=null}}_$AK(w,O){var W,K;const U=this.constructor,D=U._$Eh.get(w);if(D!==void 0&&this._$Em!==D){const X=U.getPropertyOptions(D),F=typeof X.converter=="function"?{fromAttribute:X.converter}:((W=X.converter)==null?void 0:W.fromAttribute)!==void 0?X.converter:u$1;this._$Em=D,this[D]=F.fromAttribute(O,X.type)??((K=this._$Ej)==null?void 0:K.get(D))??null,this._$Em=null}}requestUpdate(w,O,U){var D;if(w!==void 0){const W=this.constructor,K=this[w];if(U??(U=W.getPropertyOptions(w)),!((U.hasChanged??f$1)(K,O)||U.useDefault&&U.reflect&&K===((D=this._$Ej)==null?void 0:D.get(w))&&!this.hasAttribute(W._$Eu(w,U))))return;this.C(w,O,U)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(w,O,{useDefault:U,reflect:D,wrapped:W},K){U&&!(this._$Ej??(this._$Ej=new Map)).has(w)&&(this._$Ej.set(w,K??O??this[w]),W!==!0||K!==void 0)||(this._$AL.has(w)||(this.hasUpdated||U||(O=void 0),this._$AL.set(w,O)),D===!0&&this._$Em!==w&&(this._$Eq??(this._$Eq=new Set)).add(w))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(O){Promise.reject(O)}const w=this.scheduleUpdate();return w!=null&&await w,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var U;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[W,K]of this._$Ep)this[W]=K;this._$Ep=void 0}const D=this.constructor.elementProperties;if(D.size>0)for(const[W,K]of D){const{wrapped:X}=K,F=this[W];X!==!0||this._$AL.has(W)||F===void 0||this.C(W,void 0,K,F)}}let w=!1;const O=this._$AL;try{w=this.shouldUpdate(O),w?(this.willUpdate(O),(U=this._$EO)==null||U.forEach(D=>{var W;return(W=D.hostUpdate)==null?void 0:W.call(D)}),this.update(O)):this._$EM()}catch(D){throw w=!1,this._$EM(),D}w&&this._$AE(O)}willUpdate(w){}_$AE(w){var O;(O=this._$EO)==null||O.forEach(U=>{var D;return(D=U.hostUpdated)==null?void 0:D.call(U)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(w)),this.updated(w)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(w){return!0}update(w){this._$Eq&&(this._$Eq=this._$Eq.forEach(O=>this._$ET(O,this[O]))),this._$EM()}updated(w){}firstUpdated(w){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1==null||p$1({ReactiveElement:y$1}),(a$1.reactiveElementVersions??(a$1.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t$1=globalThis,i$1=t$1.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:q=>q}):void 0,e$2="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$2="?"+h,n$1=`<${o$2}>`,r$2=document,l=()=>r$2.createComment(""),c=q=>q===null||typeof q!="object"&&typeof q!="function",a=Array.isArray,u=q=>a(q)||typeof(q==null?void 0:q[Symbol.iterator])=="function",d=`[ 	
\f\r]`,f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=q=>(w,...O)=>({_$litType$:q,strings:w,values:O}),x=y(1),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$2.createTreeWalker(r$2,129);function P(q,w){if(!a(q)||!q.hasOwnProperty("raw"))throw Error("invalid template strings array");return s$1!==void 0?s$1.createHTML(w):w}const V=(q,w)=>{const O=q.length-1,U=[];let D,W=w===2?"<svg>":w===3?"<math>":"",K=f;for(let X=0;X<O;X++){const F=q[X];let J,Z,G=-1,Q=0;for(;Q<F.length&&(K.lastIndex=Q,Z=K.exec(F),Z!==null);)Q=K.lastIndex,K===f?Z[1]==="!--"?K=v:Z[1]!==void 0?K=_:Z[2]!==void 0?($.test(Z[2])&&(D=RegExp("</"+Z[2],"g")),K=m):Z[3]!==void 0&&(K=m):K===m?Z[0]===">"?(K=D??f,G=-1):Z[1]===void 0?G=-2:(G=K.lastIndex-Z[2].length,J=Z[1],K=Z[3]===void 0?m:Z[3]==='"'?g:p):K===g||K===p?K=m:K===v||K===_?K=f:(K=m,D=void 0);const Y=K===m&&q[X+1].startsWith("/>")?" ":"";W+=K===f?F+n$1:G>=0?(U.push(J),F.slice(0,G)+e$2+F.slice(G)+h+Y):F+h+(G===-2?X:Y)}return[P(q,W+(q[O]||"<?>")+(w===2?"</svg>":w===3?"</math>":"")),U]};class N{constructor({strings:w,_$litType$:O},U){let D;this.parts=[];let W=0,K=0;const X=w.length-1,F=this.parts,[J,Z]=V(w,O);if(this.el=N.createElement(J,U),C.currentNode=this.el.content,O===2||O===3){const G=this.el.content.firstChild;G.replaceWith(...G.childNodes)}for(;(D=C.nextNode())!==null&&F.length<X;){if(D.nodeType===1){if(D.hasAttributes())for(const G of D.getAttributeNames())if(G.endsWith(e$2)){const Q=Z[K++],Y=D.getAttribute(G).split(h),tt=/([.?@])?(.*)/.exec(Q);F.push({type:1,index:W,name:tt[2],strings:Y,ctor:tt[1]==="."?H:tt[1]==="?"?I:tt[1]==="@"?L:k}),D.removeAttribute(G)}else G.startsWith(h)&&(F.push({type:6,index:W}),D.removeAttribute(G));if($.test(D.tagName)){const G=D.textContent.split(h),Q=G.length-1;if(Q>0){D.textContent=i$1?i$1.emptyScript:"";for(let Y=0;Y<Q;Y++)D.append(G[Y],l()),C.nextNode(),F.push({type:2,index:++W});D.append(G[Q],l())}}}else if(D.nodeType===8)if(D.data===o$2)F.push({type:2,index:W});else{let G=-1;for(;(G=D.data.indexOf(h,G+1))!==-1;)F.push({type:7,index:W}),G+=h.length-1}W++}}static createElement(w,O){const U=r$2.createElement("template");return U.innerHTML=w,U}}function S(q,w,O=q,U){var K,X;if(w===T)return w;let D=U!==void 0?(K=O._$Co)==null?void 0:K[U]:O._$Cl;const W=c(w)?void 0:w._$litDirective$;return(D==null?void 0:D.constructor)!==W&&((X=D==null?void 0:D._$AO)==null||X.call(D,!1),W===void 0?D=void 0:(D=new W(q),D._$AT(q,O,U)),U!==void 0?(O._$Co??(O._$Co=[]))[U]=D:O._$Cl=D),D!==void 0&&(w=S(q,D._$AS(q,w.values),D,U)),w}class M{constructor(w,O){this._$AV=[],this._$AN=void 0,this._$AD=w,this._$AM=O}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(w){const{el:{content:O},parts:U}=this._$AD,D=((w==null?void 0:w.creationScope)??r$2).importNode(O,!0);C.currentNode=D;let W=C.nextNode(),K=0,X=0,F=U[0];for(;F!==void 0;){if(K===F.index){let J;F.type===2?J=new R(W,W.nextSibling,this,w):F.type===1?J=new F.ctor(W,F.name,F.strings,this,w):F.type===6&&(J=new z(W,this,w)),this._$AV.push(J),F=U[++X]}K!==(F==null?void 0:F.index)&&(W=C.nextNode(),K++)}return C.currentNode=r$2,D}p(w){let O=0;for(const U of this._$AV)U!==void 0&&(U.strings!==void 0?(U._$AI(w,U,O),O+=U.strings.length-2):U._$AI(w[O])),O++}}class R{get _$AU(){var w;return((w=this._$AM)==null?void 0:w._$AU)??this._$Cv}constructor(w,O,U,D){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=w,this._$AB=O,this._$AM=U,this.options=D,this._$Cv=(D==null?void 0:D.isConnected)??!0}get parentNode(){let w=this._$AA.parentNode;const O=this._$AM;return O!==void 0&&(w==null?void 0:w.nodeType)===11&&(w=O.parentNode),w}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(w,O=this){w=S(this,w,O),c(w)?w===E||w==null||w===""?(this._$AH!==E&&this._$AR(),this._$AH=E):w!==this._$AH&&w!==T&&this._(w):w._$litType$!==void 0?this.$(w):w.nodeType!==void 0?this.T(w):u(w)?this.k(w):this._(w)}O(w){return this._$AA.parentNode.insertBefore(w,this._$AB)}T(w){this._$AH!==w&&(this._$AR(),this._$AH=this.O(w))}_(w){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=w:this.T(r$2.createTextNode(w)),this._$AH=w}$(w){var W;const{values:O,_$litType$:U}=w,D=typeof U=="number"?this._$AC(w):(U.el===void 0&&(U.el=N.createElement(P(U.h,U.h[0]),this.options)),U);if(((W=this._$AH)==null?void 0:W._$AD)===D)this._$AH.p(O);else{const K=new M(D,this),X=K.u(this.options);K.p(O),this.T(X),this._$AH=K}}_$AC(w){let O=A.get(w.strings);return O===void 0&&A.set(w.strings,O=new N(w)),O}k(w){a(this._$AH)||(this._$AH=[],this._$AR());const O=this._$AH;let U,D=0;for(const W of w)D===O.length?O.push(U=new R(this.O(l()),this.O(l()),this,this.options)):U=O[D],U._$AI(W),D++;D<O.length&&(this._$AR(U&&U._$AB.nextSibling,D),O.length=D)}_$AR(w=this._$AA.nextSibling,O){var U;for((U=this._$AP)==null?void 0:U.call(this,!1,!0,O);w&&w!==this._$AB;){const D=w.nextSibling;w.remove(),w=D}}setConnected(w){var O;this._$AM===void 0&&(this._$Cv=w,(O=this._$AP)==null||O.call(this,w))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(w,O,U,D,W){this.type=1,this._$AH=E,this._$AN=void 0,this.element=w,this.name=O,this._$AM=D,this.options=W,U.length>2||U[0]!==""||U[1]!==""?(this._$AH=Array(U.length-1).fill(new String),this.strings=U):this._$AH=E}_$AI(w,O=this,U,D){const W=this.strings;let K=!1;if(W===void 0)w=S(this,w,O,0),K=!c(w)||w!==this._$AH&&w!==T,K&&(this._$AH=w);else{const X=w;let F,J;for(w=W[0],F=0;F<W.length-1;F++)J=S(this,X[U+F],O,F),J===T&&(J=this._$AH[F]),K||(K=!c(J)||J!==this._$AH[F]),J===E?w=E:w!==E&&(w+=(J??"")+W[F+1]),this._$AH[F]=J}K&&!D&&this.j(w)}j(w){w===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,w??"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(w){this.element[this.name]=w===E?void 0:w}}class I extends k{constructor(){super(...arguments),this.type=4}j(w){this.element.toggleAttribute(this.name,!!w&&w!==E)}}class L extends k{constructor(w,O,U,D,W){super(w,O,U,D,W),this.type=5}_$AI(w,O=this){if((w=S(this,w,O,0)??E)===T)return;const U=this._$AH,D=w===E&&U!==E||w.capture!==U.capture||w.once!==U.once||w.passive!==U.passive,W=w!==E&&(U===E||D);D&&this.element.removeEventListener(this.name,this,U),W&&this.element.addEventListener(this.name,this,w),this._$AH=w}handleEvent(w){var O;typeof this._$AH=="function"?this._$AH.call(((O=this.options)==null?void 0:O.host)??this.element,w):this._$AH.handleEvent(w)}}class z{constructor(w,O,U){this.element=w,this.type=6,this._$AN=void 0,this._$AM=O,this.options=U}get _$AU(){return this._$AM._$AU}_$AI(w){S(this,w)}}const j=t$1.litHtmlPolyfillSupport;j==null||j(N,R),(t$1.litHtmlVersions??(t$1.litHtmlVersions=[])).push("3.3.0");const B=(q,w,O)=>{const U=(O==null?void 0:O.renderBefore)??w;let D=U._$litPart$;if(D===void 0){const W=(O==null?void 0:O.renderBefore)??null;U._$litPart$=D=new R(w.insertBefore(l(),W),W,void 0,O??{})}return D._$AI(q),D};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var O;const w=super.createRenderRoot();return(O=this.renderOptions).renderBefore??(O.renderBefore=w.firstChild),w}update(w){const O=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(w),this._$Do=B(O,this.renderRoot,this.renderOptions)}connectedCallback(){var w;super.connectedCallback(),(w=this._$Do)==null||w.setConnected(!0)}disconnectedCallback(){var w;super.disconnectedCallback(),(w=this._$Do)==null||w.setConnected(!1)}render(){return T}}var et;i._$litElement$=!0,i.finalized=!0,(et=s.litElementHydrateSupport)==null||et.call(s,{LitElement:i});const o$1=s.litElementPolyfillSupport;o$1==null||o$1({LitElement:i});(s.litElementVersions??(s.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t=q=>(w,O)=>{O!==void 0?O.addInitializer(()=>{customElements.define(q,w)}):customElements.define(q,w)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1},r$1=(q=o,w,O)=>{const{kind:U,metadata:D}=O;let W=globalThis.litPropertyMetadata.get(D);if(W===void 0&&globalThis.litPropertyMetadata.set(D,W=new Map),U==="setter"&&((q=Object.create(q)).wrapped=!0),W.set(O.name,q),U==="accessor"){const{name:K}=O;return{set(X){const F=w.get.call(this);w.set.call(this,X),this.requestUpdate(K,F,q)},init(X){return X!==void 0&&this.C(K,void 0,q,X),X}}}if(U==="setter"){const{name:K}=O;return function(X){const F=this[K];w.call(this,X),this.requestUpdate(K,F,q)}}throw Error("Unsupported decorator location: "+U)};function n(q){return(w,O)=>typeof O=="object"?r$1(q,w,O):((U,D,W)=>{const K=D.hasOwnProperty(W);return D.constructor.createProperty(W,U),K?Object.getOwnPropertyDescriptor(D,W):void 0})(q,w,O)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(q){return n({...q,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$1=(q,w,O)=>(O.configurable=!0,O.enumerable=!0,Reflect.decorate&&typeof w!="object"&&Object.defineProperty(q,w,O),O);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e(q,w){return(O,U,D)=>{const W=K=>{var X;return((X=K.renderRoot)==null?void 0:X.querySelector(q))??null};return e$1(O,U,{get(){return W(this)}})}}function splitByValue(q,w){const O=[];let U=[];for(let D=0;D<q.length;D++){const W=q[D];W===w?(O.push(U),U=[]):U.push(W)}return U.length>0&&(O.push(U),U=[]),O}function tokenize(q){return[...q.matchAll(/"[^"]*"|[^\s]+/g)].map(w=>w[0].replace(/^"(.*)"$/,"$1"))}function invalidPath(q){return`"${q}" is not a valid path`}function notAnEntry(q){return`"${q}" is not an entry`}function alreadyExists(q){return`entry "${q}" already exists`}function doesNotExist(q){return`entry "${q}" does not exist`}function notADirectory(q){return`"${q}" is not a directory`}function notACommand(q){return`"${q}" is not a command`}function curruptedCommand(q){return`command "${q}" is currupted`}const messages={invalidPath,notAnEntry,alreadyExists,doesNotExist,notADirectory,notACommand,curruptedCommand};function segmentPath(q){const w=q.trim().replace(/^\/+|\/+$/g,"");return w?w.split("/"):[]}function pathBranch(q){return segmentPath(q).slice(0,-1).join("/")}function pathLeaf(q){const w=segmentPath(q);return w[w.length-1]}const _CommandCore=class _CommandCore{constructor(){this.path="/"}executeSegments([segment,...remainingSegments],input,finalOutput,storage){if(!segment)return;const[key,...args]=segment,commandCode=storage.getEntry(`/commands/${key}`);if(typeof commandCode!="string"){finalOutput(messages.notACommand(key));return}const nextOutput=remainingSegments.length?q=>this.executeSegments(remainingSegments,q,finalOutput,storage):finalOutput;try{const command=eval(commandCode.replace(/^#.*$/gm,""));command.call(this,[...args,input],nextOutput)}catch(q){console.error(q),finalOutput(messages.curruptedCommand(key));return}}executeGroup(q,w,O){const U=splitByValue(q,_CommandCore.segmentSeparator);this.executeSegments(U,"",w,O)}executeGroups(q,w,O){for(let U=0;U<q.length;U++){const D=q[U];this.executeGroup(D,w,O)}}execute(q,w,O){const U=tokenize(q),D=splitByValue(U,_CommandCore.groupSeparator);this.executeGroups(D,w,O)}};_CommandCore.groupSeparator="&&",_CommandCore.segmentSeparator=">>";let CommandCore=_CommandCore;const stampHandlers={clear:(q,w)=>{const O=q.indexOf(w);return q.substring(O+w.length)}};function processStamps(q){let w=!1;const O=Object.keys(stampHandlers);for(let U=0;U<O.length;U++){const D=O[U],W=`**${D}**`;q.includes(W)&&(w=!0,q=stampHandlers[D](q,W))}return w&&(q=processStamps(q)),q}var __defProp$1=Object.defineProperty,__getOwnPropDesc$1=Object.getOwnPropertyDescriptor,__decorateClass$1=(q,w,O,U)=>{for(var D=U>1?void 0:U?__getOwnPropDesc$1(w,O):w,W=q.length-1,K;W>=0;W--)(K=q[W])&&(D=(U?K(w,O,D):K(D))||D);return U&&D&&__defProp$1(w,O,D),D};let Terminal=class extends i{constructor(){super(...arguments),this.commandCore=new CommandCore,this.logs="",this.input=""}write(q,w=!1){q=w?`<span class="input">${q}</span>`:q,this.logs=this.logs?this.logs+`
`+q:q,this.logs=processStamps(this.logs)}runCommand(){this.write(`> ${this.input}`,!0),this.commandCore.execute(this.input,this.write.bind(this),this.storage),this.input=""}onClick(){this.inputElement.focus()}onInput(q){this.input=q.target.value}onKeyDown(q){q.key==="Enter"&&this.runCommand()}render(){return x`<div
      id="terminal"
      @click=${this.onClick}
      @keydown=${this.onKeyDown}
    >
      <p id="logs" .innerHTML=${this.logs}></p>
      <div id="query-and-input">
        <p id="query">${"> "}</p>
        <input
          id="input"
          autocomplete="off"
          .value=${this.input}
          @input=${this.onInput}
        />
      </div>
    </div>`}};Terminal.styles=i$3`
    #terminal {
      box-sizing: border-box;
      min-width: 100%;
      min-height: 100%;
      height: fit-content;
      padding: var(--padding);
    }

    #logs {
      margin: 0;
      white-space: pre-wrap;
      color: var(--gray);
    }

    #logs .input {
      color: var(--white);
    }

    #query-and-input {
      display: flex;
      direction: row;
    }

    #query {
      margin: 0;
      white-space: pre-wrap;
    }

    #input {
      width: 100%;
      padding: 0;
      outline: 0;
      border: 0;
    }

    #terminal,
    #input {
      color: var(--white);
      background-color: var(--black);
      font-family: var(--font-family);
      font-size: var(--font-size);
    }
  `;__decorateClass$1([e("#input")],Terminal.prototype,"inputElement",2);__decorateClass$1([r()],Terminal.prototype,"logs",2);__decorateClass$1([r()],Terminal.prototype,"input",2);__decorateClass$1([n({type:Object})],Terminal.prototype,"storage",2);Terminal=__decorateClass$1([t("prisma-terminal")],Terminal);class Storage{constructor(){this.storage={commands:{echo:`(function (args, output) {
  output(args.join(" "));
})

# output the given arguments
#
# EXAMPLES
#   input: echo "Hello, World!"
#   output: Hello, World!
  `,clear:`(function (args, output) {
  output("**" + "clear" + "**");
})

# remove all terminal logs
`,doc:`(function (args, output) {
  const commandKey = args[0];
  const commandFile = storage.getEntry(\`/commands/\${commandKey}\`);

  if (commandFile === null) {
    output(messages.notACommand(commandKey));
    return;
  }

  const documentation = commandFile.match(/^#.*$/gm).map((line) => line.substring(2)).join("\\n");

  output(documentation);
})
  
# show the documentation of a given command
`,peek:`(function (args, output) {
  const relativePath = args[0] || "./";
  const path = resolvePath(this.path, relativePath);
  const entry = storage.getEntry(path);

  if (entry === null) {
    output(messages.notAnEntry(path));
    return;
  }

  if (typeof entry === "object") {
    output(Object.keys(entry).join(" "));
    return;
  }

  output(entry);
})
  
# show the content of a given entry
#
# EXAMPLES
#   input: peek greetings/hello-world
#   output: Hello, World!
`,dir:`(function (args, output) {
  const relativePath = args[0] || "./";
  const path = resolvePath(this.path, relativePath);

  const directory = storage.getEntry(path);

  if (directory === null || typeof directory === "string") {
    output(messages.notADirectory(path));
    return;
  }

  this.path = path;
  output(this.path);
})

# change and display the current directory
`,new:`(function (args, output) {
  const isDirectory = args.includes("-directory") || args.includes("-d");

  args = args.filter((arg) => !arg.startsWith("-"));

  const relativePath = args[0] || "./";
  const path = resolvePath(this.path, relativePath);

  const content = isDirectory ? [] : args[1] || "";

  const status = storage.createEntry(path, content);

  if (status === 1) {
    output(messages.invalidPath(path));
    return;
  }

  if (status === 2) {
    output(messages.alreadyExists(path));
    return;
  }
})
  
# create a new file or directory
#
# EXAMPLES
#   input: new new-file "Content of the file"
#
#   input: new -d new-directory
`,remove:`(function (args, output) {
  const relativePath = args[0] || "./";
  const path = resolvePath(this.path, relativePath);
  const status = storage.removeEntry(path);

  if ([1, 2].includes(status)) {
    output(messages.doesNotExist(path));
    return;
  }
})

# remove a given entry
`,edit:`(function (args, output) {
  const relativePath = args[0] || "./";
  const path = resolvePath(this.path, relativePath);
  const content = args[1] || "";
  const status = storage.editFile(path, content);

  if ([1, 2].includes(status)) {
    output(messages.doesNotExist(path));
    return;
  }
})

# edit a given file
#
# EXAMPLE
#   input: edit /greetings/hi "Hey!"
`,prisma:`(function (args, output) {
  output(\`<span style="color: var(--white);"  >  /\\\\                 </span>
<span style="color: var(--cyan);"  > /  \\\\   Prisma Web OS</span>
<span style="color: var(--magenta);"   >/____\\\\               </span>

Platform: \${navigator.platform}
CPU Cores: \${navigator.hardwareConcurrency}

Resolution: \${window.innerWidth}x\${window.innerHeight}
Language: \${navigator.language}
Cookies: \${navigator.cookieEnabled}\`);
})

# display information about the system
`,calc:`(function (args, output) {
  try {
    const expression = args.join(" ") || "0";
    const result = mathjs.evaluate(expression);
    output(result.toString());
  } catch {
    output(\`expression "\${expression}" is not valid\`);
  }
})

# evaluate a given expression
#
# EXAMPLES
#   input: calc 1 + 1
#   output: 2
`}}}getStorage(){return this.storage}setStorage(w){this.storage=w}getEntry(w){const O=segmentPath(w);let U=this.storage;for(const D of O){if(typeof U!="object"||U===null||!(D in U))return null;U=U[D]}return U}createEntry(w,O){if(w==="/")return 2;const U=pathBranch(w),D=this.getEntry(U);if(D===null)return 1;const W=pathLeaf(w);return W in D?2:(D[W]=O,0)}removeEntry(w){if(w==="/")return this.storage={},0;const O=pathBranch(w),U=this.getEntry(O);if(U===null)return 1;const D=pathLeaf(w);return D in U?(delete U[D],0):2}editFile(w,O){const U=pathBranch(w),D=this.getEntry(U);if(D===null)return 1;const W=pathLeaf(w);return W in D?(D[W]=O,0):2}}var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(q,w,O,U)=>{for(var D=U>1?void 0:U?__getOwnPropDesc(w,O):w,W=q.length-1,K;W>=0;W--)(K=q[W])&&(D=(U?K(w,O,D):K(D))||D);return U&&D&&__defProp(w,O,D),D};let OS=class extends i{constructor(){super(...arguments),this.storage=new Storage}render(){return x`<prisma-terminal .storage=${this.storage}></prisma-terminal>`}};__decorateClass([r()],OS.prototype,"storage",2);OS=__decorateClass([t("prisma-os")],OS);
