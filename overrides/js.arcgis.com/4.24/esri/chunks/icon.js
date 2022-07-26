// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./dom","./observers"],function(m,e,n,u){async function v({icon:a,scale:c}){c=p[c];a=w(a);const d="F"===a.charAt(a.length-1),b=`${d?a.substring(0,a.length-1):a}${c}${d?"F":""}`;if(h[b])return h[b];k[b]||(k[b]=fetch(e.getAssetPath(`./assets/icon/${b}.json`)).then(f=>f.json()).catch(()=>{console.error(`"${b}" is not a valid calcite-ui-icon name`);return""}));c=await k[b];return h[b]=c}function w(a){const c=!isNaN(Number(a.charAt(0))),d=a.split("-");return 1===d.length?
c?`i${a}`:a:d.map((b,f)=>0===f?c?`i${b.toUpperCase()}`:b:b.charAt(0).toUpperCase()+b.slice(1)).join("")}function q(){"undefined"!==typeof customElements&&["calcite-icon"].forEach(a=>{switch(a){case "calcite-icon":customElements.get(a)||customElements.define(a,r)}})}const h={},k={},p={s:16,m:24,l:32},r=e.proxyCustomElement(class extends e.H{constructor(){super();this.__registerHost();this.__attachShadow();this.icon=null;this.flipRtl=!1;this.scale="m";this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>
{this.visible=!0;this.loadIconPathData()})}disconnectedCallback(){var a;null===(a=this.intersectionObserver)||void 0===a?void 0:a.disconnect();this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const {el:a,flipRtl:c,pathData:d,scale:b,textLabel:f}=this,x=n.getElementDir(a),t=p[b],l=!!f,y=[].concat(d||"");return e.h(e.Host,{"aria-hidden":n.toAriaBoolean(!l),"aria-label":l?f:null,role:l?"img":null},e.h("svg",{class:{["flip-rtl"]:"rtl"===x&&c,svg:!0},fill:"currentColor",
height:"100%",viewBox:`0 0 ${t} ${t}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},y.map(g=>"string"===typeof g?e.h("path",{d:g}):e.h("path",{d:g.d,opacity:"opacity"in g?g.opacity:1}))))}async loadIconPathData(){const {icon:a,scale:c,visible:d}=this;e.Build.isBrowser&&a&&d&&(this.pathData=await v({icon:a,scale:c}))}waitUntilVisible(a){(this.intersectionObserver=u.createObserver("intersection",c=>{c.forEach(d=>{d.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=
null,a())})},{rootMargin:"50px"}))?this.intersectionObserver.observe(this.el):a()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale\x3ds]){height:1rem;width:1rem;min-width:1rem;min-height:1rem}:host([scale\x3dm]){height:1.5rem;width:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale\x3dl]){height:2rem;width:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}"}},
[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);q();m.Icon=r;m.defineCustomElement=q});