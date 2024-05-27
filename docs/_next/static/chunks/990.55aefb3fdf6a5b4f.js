"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[990],{25990:function(t,e,i){i.r(e),i.d(e,{GiscusWidget:function(){return tI}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=globalThis,r=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap,l=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(r&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}},h=t=>new l("string"==typeof t?t:t+"",void 0,n),a=(t,e)=>{if(r)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let i of e){let e=document.createElement("style"),r=s.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}},d=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return h(e)})(t):t,{is:c,defineProperty:u,getOwnPropertyDescriptor:p,getOwnPropertyNames:_,getOwnPropertySymbols:$,getPrototypeOf:g}=Object,f=globalThis,m=f.trustedTypes,v=m?m.emptyScript:"",A=f.reactiveElementPolyfillSupport,y=(t,e)=>t,S={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},E=(t,e)=>!c(t,e),b={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:E};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),f.litPropertyMetadata??(f.litPropertyMetadata=new WeakMap);class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&u(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=p(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==s?void 0:s.call(this)},set(e){let n=null==s?void 0:s.call(this);r.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;let t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){let t=this.properties;for(let e of[..._(t),...$(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(d(i));else void 0!==t&&e.push(d(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach(t=>t(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var i;let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(void 0!==r&&!0===s.reflect){let n=((null==(i=s.converter)?void 0:i.toAttribute)!==void 0?s.converter:S).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var i;let s=this.constructor,r=s._$Eh.get(t);if(void 0!==r&&this._$Em!==r){let t=s.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:(null==(i=t.converter)?void 0:i.fromAttribute)!==void 0?t.converter:S;this._$Em=r,this[r]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??E)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let e=!1,i=this._$AL;try{(e=this.shouldUpdate(i))?(this.willUpdate(i),null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)}),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach(t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,null==A||A({ReactiveElement:w}),(f.reactiveElementVersions??(f.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let C=globalThis,U=C.trustedTypes,P=U?U.createPolicy("lit-html",{createHTML:t=>t}):void 0,O="$lit$",M=`lit$${(Math.random()+"").slice(9)}$`,N="?"+M,T=`<${N}>`,R=document,I=()=>R.createComment(""),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,k=t=>H(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),L=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,z=/>/g,Y=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),G=/'/g,B=/"/g,W=/^(?:script|style|textarea|title)$/i,V=(t,...e)=>({_$litType$:1,strings:t,values:e}),q=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),J=new WeakMap,F=R.createTreeWalker(R,129);function Q(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(e):e}let Z=(t,e)=>{let i=t.length-1,s=[],r,n=2===e?"<svg>":"",o=D;for(let e=0;e<i;e++){let i=t[e],l,h,a=-1,d=0;for(;d<i.length&&(o.lastIndex=d,null!==(h=o.exec(i)));)d=o.lastIndex,o===D?"!--"===h[1]?o=j:void 0!==h[1]?o=z:void 0!==h[2]?(W.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=Y):void 0!==h[3]&&(o=Y):o===Y?">"===h[0]?(o=r??D,a=-1):void 0===h[1]?a=-2:(a=o.lastIndex-h[2].length,l=h[1],o=void 0===h[3]?Y:'"'===h[3]?B:G):o===B||o===G?o=Y:o===j||o===z?o=D:(o=Y,r=void 0);let c=o===Y&&t[e+1].startsWith("/>")?" ":"";n+=o===D?i+T:a>=0?(s.push(l),i.slice(0,a)+O+i.slice(a)+M+c):i+M+(-2===a?e:c)}return[Q(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class X{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0,o=t.length-1,l=this.parts,[h,a]=Z(t,e);if(this.el=X.createElement(h,i),F.currentNode=this.el.content,2===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=F.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(let t of s.getAttributeNames())if(t.endsWith(O)){let e=a[n++],i=s.getAttribute(t).split(M),o=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?tr:"?"===o[1]?tn:"@"===o[1]?to:ts}),s.removeAttribute(t)}else t.startsWith(M)&&(l.push({type:6,index:r}),s.removeAttribute(t));if(W.test(s.tagName)){let t=s.textContent.split(M),e=t.length-1;if(e>0){s.textContent=U?U.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],I()),F.nextNode(),l.push({type:2,index:++r});s.append(t[e],I())}}}else if(8===s.nodeType){if(s.data===N)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(M,t+1));)l.push({type:7,index:r}),t+=M.length-1}}r++}}static createElement(t,e){let i=R.createElement("template");return i.innerHTML=t,i}}function tt(t,e,i=t,s){var r,n;if(e===q)return e;let o=void 0!==s?null==(r=i._$Co)?void 0:r[s]:i._$Cl,l=x(e)?void 0:e._$litDirective$;return(null==o?void 0:o.constructor)!==l&&(null==(n=null==o?void 0:o._$AO)||n.call(o,!1),void 0===l?o=void 0:(o=new l(t))._$AT(t,i,s),void 0!==s?(i._$Co??(i._$Co=[]))[s]=o:i._$Cl=o),void 0!==o&&(e=tt(t,o._$AS(t,e.values),o,s)),e}let te=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=((null==t?void 0:t.creationScope)??R).importNode(e,!0);F.currentNode=s;let r=F.nextNode(),n=0,o=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new ti(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new tl(r,this,t)),this._$AV.push(e),l=i[++o]}n!==(null==l?void 0:l.index)&&(r=F.nextNode(),n++)}return F.currentNode=R,s}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class ti{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(null==s?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&(null==t?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){x(t=tt(this,t,e))?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):k(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==K&&x(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){var e;let{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=X.createElement(Q(s.h,s.h[0]),this.options)),s);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.p(i);else{let t=new te(r,this),e=t.u(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new X(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new ti(this.S(I()),this.S(I()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null==(i=this._$AP)||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class ts{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(void 0===r)(n=!x(t=tt(this,t,e,0))||t!==this._$AH&&t!==q)&&(this._$AH=t);else{let s,o;let l=t;for(t=r[0],s=0;s<r.length-1;s++)(o=tt(this,l[i+s],e,s))===q&&(o=this._$AH[s]),n||(n=!x(o)||o!==this._$AH[s]),o===K?t=K:t!==K&&(t+=(o??"")+r[s+1]),this._$AH[s]=o}n&&!s&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tr extends ts{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class tn extends ts{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class to extends ts{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=tt(this,t,e,0)??K)===q)return;let i=this._$AH,s=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==K&&(i===K||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class tl{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}}let th=C.litHtmlPolyfillSupport;null==th||th(X,ti),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.1.2");let ta=(t,e,i)=>{let s=(null==i?void 0:i.renderBefore)??e,r=s._$litPart$;if(void 0===r){let t=(null==i?void 0:i.renderBefore)??null;s._$litPart$=r=new ti(e.insertBefore(I(),t),t,void 0,i??{})}return r._$AI(t),r},td=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;let e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ta(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return q}};td._$litElement$=!0,td.finalized=!0,null==(tM=globalThis.litElementHydrateSupport)||tM.call(globalThis,{LitElement:td});let tc=globalThis.litElementPolyfillSupport;null==tc||tc({LitElement:td}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tu={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:E},tp=(t=tu,e,i)=>{let{kind:s,metadata:r}=i,n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(i.name,t),"accessor"===s){let{name:s}=i;return{set(i){let r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){let{name:s}=i;return function(i){let r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function t_(t){return(e,i)=>"object"==typeof i?tp(t,e,i):((t,e,i)=>{let s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let t$=t=>void 0===t.strings,tg=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},tf=(t,e)=>{var i;let s=t._$AN;if(void 0===s)return!1;for(let t of s)null==(i=t._$AO)||i.call(t,e,!1),tf(t,e);return!0},tm=t=>{let e,i;do{if(void 0===(e=t._$AM))break;(i=e._$AN).delete(t),t=e}while((null==i?void 0:i.size)===0)},tv=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),tS(e)}};function tA(t){void 0!==this._$AN?(tm(this),this._$AM=t,tv(this)):this._$AM=t}function ty(t,e=!1,i=0){let s=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size){if(e){if(Array.isArray(s))for(let t=i;t<s.length;t++)tf(s[t],!1),tm(s[t]);else null!=s&&(tf(s,!1),tm(s))}else tf(this,t)}}let tS=t=>{2==t.type&&(t._$AP??(t._$AP=ty),t._$AQ??(t._$AQ=tA))};class tE extends tg{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),tv(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null==(i=this.reconnected)||i.call(this):null==(s=this.disconnected)||s.call(this)),e&&(tf(this,t),tm(this))}setValue(t){if(t$(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tb=()=>new tw;class tw{}let tC=new WeakMap,tU=(tO=class extends tE{render(t){return K}update(t,[e]){var i;let s=e!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.ht=null==(i=t.options)?void 0:i.host,this.rt(this.ct=t.element)),K}rt(t){if("function"==typeof this.Y){let e=this.ht??globalThis,i=tC.get(e);void 0===i&&(i=new WeakMap,tC.set(e,i)),void 0!==i.get(this.Y)&&this.Y.call(this.ht,void 0),i.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return"function"==typeof this.Y?null==(t=tC.get(this.ht??globalThis))?void 0:t.get(this.Y):null==(e=this.Y)?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}},(...t)=>({_$litDirective$:tO,values:t}));var tP,tO,tM,tN=Object.defineProperty,tT=Object.getOwnPropertyDescriptor,tR=(t,e,i,s)=>{for(var r,n=s>1?void 0:s?tT(e,i):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s?r(e,i,n):r(n))||n);return s&&n&&tN(e,i,n),n};let tI=class extends td{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=tb(),this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var t;return null==(t=this._iframeRef)?void 0:t.value}get _host(){try{return new URL(this.host),this.host}catch{return this.GISCUS_DEFAULT_HOST}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(t){return`[giscus] An error occurred. Error message: "${t}".`}setupSession(){let t=location.href,e=new URL(t),i=localStorage.getItem(this.GISCUS_SESSION_KEY),s=e.searchParams.get("giscus")??"";if(this.__session="",s){localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(s)),this.__session=s,e.searchParams.delete("giscus"),e.hash="",history.replaceState(void 0,document.title,e.toString());return}if(i)try{this.__session=JSON.parse(i)}catch(t){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==t?void 0:t.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(t){if(t.origin!==this._host)return;let{data:e}=t;if(!("object"==typeof e&&e.giscus))return;if(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height=`${e.giscus.resizeHeight}px`),e.giscus.signOut){console.info("[giscus] User has logged out. Session has been cleared."),this.signOut();return}if(!e.giscus.error)return;let i=e.giscus.error;if(i.includes("Bad credentials")||i.includes("Invalid state value")||i.includes("State has expired")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY)){console.warn(`${this._formatError(i)} Session has been cleared.`),this.signOut();return}console.error(`${this._formatError(i)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}if(i.includes("Discussion not found")){console.warn(`[giscus] ${i}. A new discussion will be created if a comment/reaction is submitted.`);return}console.error(`${this._formatError(i)} ${this.ERROR_SUGGESTION}`)}sendMessage(t){var e;null!=(e=this.iframeRef)&&e.contentWindow&&this.hasLoaded&&this.iframeRef.contentWindow.postMessage({giscus:t},this._host)}updateConfig(){let t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}firstUpdated(){var t;null==(t=this.iframeRef)||t.addEventListener("load",()=>{var t;null==(t=this.iframeRef)||t.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()})}requestUpdate(t,e,i){if(!this.hasUpdated||"host"===t){super.requestUpdate(t,e,i);return}this.updateConfig()}getMetaContent(t,e=!1){let i=e?`meta[property='og:${t}'],`:"",s=document.querySelector(i+`meta[name='${t}']`);return s?s.content:""}_getCleanedUrl(){let t=new URL(location.href);return t.searchParams.delete("giscus"),t.hash="",t}getTerm(){switch(this.mapping){case"url":return this._getCleanedUrl().toString();case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term??"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping?this.term??"":""}getIframeSrc(){let t=this._getCleanedUrl().toString(),e=`${t}${this.id?"#"+this.id:""}`,i=this.getMetaContent("description",!0),s=this.getMetaContent("giscus:backlink")||t,r={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId??"",category:this.category??"",categoryId:this.categoryId??"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:i,backLink:s},n=this._host,o=this.lang?`/${this.lang}`:"",l=new URLSearchParams(r);return`${n}${o}/widget?${l.toString()}`}render(){return V`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${tU(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}};tI.styles=((t,...e)=>new l(1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]),t,n))`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `,tR([t_({reflect:!0})],tI.prototype,"host",2),tR([t_({reflect:!0})],tI.prototype,"repo",2),tR([t_({reflect:!0})],tI.prototype,"repoId",2),tR([t_({reflect:!0})],tI.prototype,"category",2),tR([t_({reflect:!0})],tI.prototype,"categoryId",2),tR([t_({reflect:!0})],tI.prototype,"mapping",2),tR([t_({reflect:!0})],tI.prototype,"term",2),tR([t_({reflect:!0})],tI.prototype,"strict",2),tR([t_({reflect:!0})],tI.prototype,"reactionsEnabled",2),tR([t_({reflect:!0})],tI.prototype,"emitMetadata",2),tR([t_({reflect:!0})],tI.prototype,"inputPosition",2),tR([t_({reflect:!0})],tI.prototype,"theme",2),tR([t_({reflect:!0})],tI.prototype,"lang",2),tR([t_({reflect:!0})],tI.prototype,"loading",2),tI=tR([(tP="giscus-widget",customElements.get(tP)?t=>t:(t,e)=>{void 0!==e?e.addInitializer(()=>{customElements.define(tP,t)}):customElements.define(tP,t)})],tI)}}]);