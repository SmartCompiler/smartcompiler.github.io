"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{2777:function(e,t,n){n.d(t,{Z:function(){return i}});function i(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}},2262:function(e,t,n){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}n.d(t,{Z:function(){return r}})},7247:function(e,t,n){n.d(t,{Z:function(){return i}});function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}},1531:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(607);function r(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,i.Z)(e,t)}},2179:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(4027);function r(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}},607:function(e,t,n){n.d(t,{Z:function(){return i}});function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}},6576:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(7247),r=n(607);function o(e,t,n){return(o=!function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()?function(e,t,n){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return n&&(0,r.Z)(o,n.prototype),o}:Reflect.construct).apply(null,arguments)}function a(e){var t="function"==typeof Map?new Map:void 0;return(a=function(e){var n;if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return o(e,arguments,(0,i.Z)(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),(0,r.Z)(a,e)})(e)}},9365:function(e,t,n){n.d(t,{z:function(){return u}});var i=n(9477);let r={type:"change"},o={type:"start"},a={type:"end"},s=new i.zHn,l=new i.JOQ,c=Math.cos(70*i.M8C.DEG2RAD);class u extends i.pBf{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new i.Pa4,this.cursor=new i.Pa4,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:i.RsA.ROTATE,MIDDLE:i.RsA.DOLLY,RIGHT:i.RsA.PAN},this.touches={ONE:i.QmN.ROTATE,TWO:i.QmN.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return p.phi},this.getAzimuthalAngle=function(){return p.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",en),this._domElementKeyEvents=e},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",en),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(r),n.update(),h=u.NONE},this.update=function(){let t=new i.Pa4,o=new i._fP().setFromUnitVectors(e.up,new i.Pa4(0,1,0)),a=o.clone().invert(),g=new i.Pa4,v=new i._fP,y=new i.Pa4,E=2*Math.PI;return function(w=null){var T;let x=n.object.position;t.copy(x).sub(n.target),t.applyQuaternion(o),p.setFromVector3(t),n.autoRotate&&h===u.NONE&&L((T=w,null!==T?2*Math.PI/60*n.autoRotateSpeed*T:2*Math.PI/60/60*n.autoRotateSpeed)),n.enableDamping?(p.theta+=f.theta*n.dampingFactor,p.phi+=f.phi*n.dampingFactor):(p.theta+=f.theta,p.phi+=f.phi);let P=n.minAzimuthAngle,R=n.maxAzimuthAngle;isFinite(P)&&isFinite(R)&&(P<-Math.PI?P+=E:P>Math.PI&&(P-=E),R<-Math.PI?R+=E:R>Math.PI&&(R-=E),P<=R?p.theta=Math.max(P,Math.min(R,p.theta)):p.theta=p.theta>(P+R)/2?Math.max(P,p.theta):Math.min(R,p.theta)),p.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,p.phi)),p.makeSafe(),!0===n.enableDamping?n.target.addScaledVector(b,n.dampingFactor):n.target.add(b),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let _=!1;if(n.zoomToCursor&&C||n.object.isOrthographicCamera)p.radius=K(p.radius);else{let S=p.radius;p.radius=K(p.radius*m),_=S!=p.radius}if(t.setFromSpherical(p),t.applyQuaternion(a),x.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(f.theta*=1-n.dampingFactor,f.phi*=1-n.dampingFactor,b.multiplyScalar(1-n.dampingFactor)):(f.set(0,0,0),b.set(0,0,0)),n.zoomToCursor&&C){let A=null;if(n.object.isPerspectiveCamera){let M=t.length();A=K(M*m);let k=M-A;n.object.position.addScaledVector(O,k),n.object.updateMatrixWorld(),_=!!k}else if(n.object.isOrthographicCamera){let D=new i.Pa4(j.x,j.y,0);D.unproject(n.object);let N=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/m)),n.object.updateProjectionMatrix(),_=N!==n.object.zoom;let z=new i.Pa4(j.x,j.y,0);z.unproject(n.object),n.object.position.sub(z).add(D),n.object.updateMatrixWorld(),A=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;null!==A&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(A).add(n.object.position):(s.origin.copy(n.object.position),s.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(s.direction))<c?e.lookAt(n.target):(l.setFromNormalAndCoplanarPoint(n.object.up,n.target),s.intersectPlane(l,n.target))))}else if(n.object.isOrthographicCamera){let Y=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/m)),Y!==n.object.zoom&&(n.object.updateProjectionMatrix(),_=!0)}return m=1,C=!1,!!(_||g.distanceToSquared(n.object.position)>d||8*(1-v.dot(n.object.quaternion))>d||y.distanceToSquared(n.target)>d)&&(n.dispatchEvent(r),g.copy(n.object.position),v.copy(n.object.quaternion),y.copy(n.target),!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",er),n.domElement.removeEventListener("pointerdown",W),n.domElement.removeEventListener("pointercancel",$),n.domElement.removeEventListener("wheel",J),n.domElement.removeEventListener("pointermove",q),n.domElement.removeEventListener("pointerup",$);let e=n.domElement.getRootNode();e.removeEventListener("keydown",ee,{capture:!0}),null!==n._domElementKeyEvents&&(n._domElementKeyEvents.removeEventListener("keydown",en),n._domElementKeyEvents=null)};let n=this,u={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},h=u.NONE,d=1e-6,p=new i.$V,f=new i.$V,m=1,b=new i.Pa4,g=new i.FM8,v=new i.FM8,y=new i.FM8,E=new i.FM8,w=new i.FM8,T=new i.FM8,x=new i.FM8,P=new i.FM8,R=new i.FM8,O=new i.Pa4,j=new i.FM8,C=!1,_=[],S={},A=!1;function M(e){return Math.pow(.95,n.zoomSpeed*Math.abs(.01*e))}function L(e){f.theta-=e}function k(e){f.phi-=e}let D=function(){let e=new i.Pa4;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),b.add(e)}}(),N=function(){let e=new i.Pa4;return function(t,i){!0===n.screenSpacePanning?e.setFromMatrixColumn(i,1):(e.setFromMatrixColumn(i,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),b.add(e)}}(),z=function(){let e=new i.Pa4;return function(t,i){let r=n.domElement;if(n.object.isPerspectiveCamera){let o=n.object.position;e.copy(o).sub(n.target);let a=e.length();D(2*t*(a*=Math.tan(n.object.fov/2*Math.PI/180))/r.clientHeight,n.object.matrix),N(2*i*a/r.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(t*(n.object.right-n.object.left)/n.object.zoom/r.clientWidth,n.object.matrix),N(i*(n.object.top-n.object.bottom)/n.object.zoom/r.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(e){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?m/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function I(e){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?m*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(e,t){if(!n.zoomToCursor)return;C=!0;let i=n.domElement.getBoundingClientRect(),r=e-i.left,o=t-i.top,a=i.width,s=i.height;j.x=r/a*2-1,j.y=-(2*(o/s))+1,O.set(j.x,j.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(e){return Math.max(n.minDistance,Math.min(n.maxDistance,e))}function Z(e){g.set(e.clientX,e.clientY)}function H(e){E.set(e.clientX,e.clientY)}function U(e){if(1===_.length)g.set(e.pageX,e.pageY);else{let t=ea(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);g.set(n,i)}}function B(e){if(1===_.length)E.set(e.pageX,e.pageY);else{let t=ea(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);E.set(n,i)}}function X(e){let t=ea(e),n=e.pageX-t.x,i=e.pageY-t.y;x.set(0,Math.sqrt(n*n+i*i))}function Q(e){if(1==_.length)v.set(e.pageX,e.pageY);else{let t=ea(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);v.set(i,r)}y.subVectors(v,g).multiplyScalar(n.rotateSpeed);let o=n.domElement;L(2*Math.PI*y.x/o.clientHeight),k(2*Math.PI*y.y/o.clientHeight),g.copy(v)}function V(e){if(1===_.length)w.set(e.pageX,e.pageY);else{let t=ea(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);w.set(i,r)}T.subVectors(w,E).multiplyScalar(n.panSpeed),z(T.x,T.y),E.copy(w)}function G(e){let t=ea(e),i=e.pageX-t.x,r=e.pageY-t.y;P.set(0,Math.sqrt(i*i+r*r)),R.set(0,Math.pow(P.y/x.y,n.zoomSpeed)),Y(R.y),x.copy(P);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;F(o,a)}function W(e){if(!1!==n.enabled){var t;0===_.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",q),n.domElement.addEventListener("pointerup",$)),!function(e){for(let t=0;t<_.length;t++)if(_[t]==e.pointerId)return!0;return!1}(e)&&(t=e,_.push(t.pointerId),"touch"===e.pointerType?ei(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case i.RsA.DOLLY:var r;if(!1===n.enableZoom)return;F(e.clientX,e.clientX),x.set(e.clientX,e.clientY),h=u.DOLLY;break;case i.RsA.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;H(e),h=u.PAN}else{if(!1===n.enableRotate)return;Z(e),h=u.ROTATE}break;case i.RsA.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;Z(e),h=u.ROTATE}else{if(!1===n.enablePan)return;H(e),h=u.PAN}break;default:h=u.NONE}h!==u.NONE&&n.dispatchEvent(o)}(e))}}function q(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){var t,i;switch(eo(e),h){case u.TOUCH_ROTATE:if(!1===n.enableRotate)return;Q(e),n.update();break;case u.TOUCH_PAN:if(!1===n.enablePan)return;V(e),n.update();break;case u.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&G(e),n.enablePan&&V(e),n.update();break;case u.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&G(e),n.enableRotate&&Q(e),n.update();break;default:h=u.NONE}}(e):function(e){var t,i;switch(h){case u.ROTATE:if(!1===n.enableRotate)return;!function(e){v.set(e.clientX,e.clientY),y.subVectors(v,g).multiplyScalar(n.rotateSpeed);let t=n.domElement;L(2*Math.PI*y.x/t.clientHeight),k(2*Math.PI*y.y/t.clientHeight),g.copy(v),n.update()}(e);break;case u.DOLLY:if(!1===n.enableZoom)return;P.set(e.clientX,e.clientY),R.subVectors(P,x),R.y>0?Y(M(R.y)):R.y<0&&I(M(R.y)),x.copy(P),n.update();break;case u.PAN:if(!1===n.enablePan)return;w.set(e.clientX,e.clientY),T.subVectors(w,E).multiplyScalar(n.panSpeed),z(T.x,T.y),E.copy(w),n.update()}}(e))}function $(e){switch(function(e){delete S[e.pointerId];for(let t=0;t<_.length;t++)if(_[t]==e.pointerId){_.splice(t,1);return}}(e),_.length){case 0:n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",q),n.domElement.removeEventListener("pointerup",$),n.dispatchEvent(a),h=u.NONE;break;case 1:let t=_[0],i=S[t];ei({pointerId:t,pageX:i.x,pageY:i.y})}}function J(e){if(!1!==n.enabled&&!1!==n.enableZoom&&h===u.NONE){var t;e.preventDefault(),n.dispatchEvent(o),F((t=function(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!A&&(n.deltaY*=10),n}(e)).clientX,t.clientY),t.deltaY<0?I(M(t.deltaY)):t.deltaY>0&&Y(M(t.deltaY)),n.update(),n.dispatchEvent(a)}}function ee(e){if("Control"===e.key){A=!0;let t=n.domElement.getRootNode();t.addEventListener("keyup",et,{passive:!0,capture:!0})}}function et(e){if("Control"===e.key){A=!1;let t=n.domElement.getRootNode();t.removeEventListener("keyup",et,{passive:!0,capture:!0})}}function en(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function ei(e){switch(eo(e),_.length){case 1:switch(n.touches.ONE){case i.QmN.ROTATE:if(!1===n.enableRotate)return;U(e),h=u.TOUCH_ROTATE;break;case i.QmN.PAN:if(!1===n.enablePan)return;B(e),h=u.TOUCH_PAN;break;default:h=u.NONE}break;case 2:var t,r;switch(n.touches.TWO){case i.QmN.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&X(e),n.enablePan&&B(e),h=u.TOUCH_DOLLY_PAN;break;case i.QmN.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&X(e),n.enableRotate&&U(e),h=u.TOUCH_DOLLY_ROTATE;break;default:h=u.NONE}break;default:h=u.NONE}h!==u.NONE&&n.dispatchEvent(o)}function er(e){!1!==n.enabled&&e.preventDefault()}function eo(e){let t=S[e.pointerId];void 0===t&&(t=new i.FM8,S[e.pointerId]=t),t.set(e.pageX,e.pageY)}function ea(e){let t=e.pointerId===_[0]?_[1]:_[0];return S[t]}n.domElement.addEventListener("contextmenu",er),n.domElement.addEventListener("pointerdown",W),n.domElement.addEventListener("pointercancel",$),n.domElement.addEventListener("wheel",J,{passive:!1});let es=n.domElement.getRootNode();es.addEventListener("keydown",ee,{passive:!0,capture:!0}),this.update()}}},8606:function(e,t,n){n.d(t,{x:function(){return c}});var i=n(9477),r=n(1154),o=n(7531),a=n(8304);class s extends a.w{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class l extends a.w{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class c{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),void 0===t){let n=e.getSize(new i.FM8);this._width=n.width,this._height=n.height,(t=new i.dd2(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:i.cLu})).texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new o.T(r.C),this.copyPass.material.blending=i.jFi,this.clock=new i.SUY}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){void 0===e&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(!1!==o.enabled){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==s&&(o instanceof s?n=!0:o instanceof l&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let t=this.renderer.getSize(new i.FM8);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}},8304:function(e,t,n){n.d(t,{T:function(){return l},w:function(){return r}});var i=n(9477);class r{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let o=new i.iKG(-1,1,1,-1,0,1);class a extends i.u9r{constructor(){super(),this.setAttribute("position",new i.a$l([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new i.a$l([0,2,0,0,2,0],2))}}let s=new a;class l{constructor(e){this._mesh=new i.Kj0(s,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,o)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}},4458:function(e,t,n){n.d(t,{C:function(){return o}});var i=n(9477),r=n(8304);class o extends r.w{constructor(e,t,n=null,r=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new i.Ilk}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;null!==this.overrideMaterial&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),null!==this.clearColor&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),null!==this.clearAlpha&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),!0==this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),!0===this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),null!==this.clearColor&&e.setClearColor(this._oldClearColor),null!==this.clearAlpha&&e.setClearAlpha(r),null!==this.overrideMaterial&&(this.scene.overrideMaterial=o),e.autoClear=i}}},5184:function(e,t,n){n.d(t,{o:function(){return a}});var i=n(9477),r=n(8304),o=n(1154);class a extends r.w{constructor(e){super();let t=o.C;this.textureID="tDiffuse",this.uniforms=i.rDY.clone(t.uniforms),this.material=new i.jyz({uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,blending:i.jFi}),this.renderTarget=e,void 0===this.renderTarget&&(this.renderTarget=new i.dd2(1,1,{type:i.cLu}),this.renderTarget.texture.name="SavePass.rt"),this.needsSwap=!1,this.fsQuad=new r.T(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),e.setRenderTarget(this.renderTarget),this.clear&&e.clear(),this.fsQuad.render(e)}setSize(e,t){this.renderTarget.setSize(e,t)}dispose(){this.renderTarget.dispose(),this.material.dispose(),this.fsQuad.dispose()}}},7531:function(e,t,n){n.d(t,{T:function(){return o}});var i=n(9477),r=n(8304);class o extends r.w{constructor(e,t){super(),this.textureID=void 0!==t?t:"tDiffuse",e instanceof i.jyz?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=i.rDY.clone(e.uniforms),this.material=new i.jyz({name:void 0!==e.name?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new r.T(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}},9907:function(e,t,n){n.d(t,{V:function(){return i}});let i={name:"BlendShader",uniforms:{tDiffuse1:{value:null},tDiffuse2:{value:null},mixRatio:{value:.5},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;
		uniform float mixRatio;

		uniform sampler2D tDiffuse1;
		uniform sampler2D tDiffuse2;

		varying vec2 vUv;

		void main() {

			vec4 texel1 = texture2D( tDiffuse1, vUv );
			vec4 texel2 = texture2D( tDiffuse2, vUv );
			gl_FragColor = opacity * mix( texel1, texel2, mixRatio );

		}`}},1154:function(e,t,n){n.d(t,{C:function(){return i}});let i={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}}}]);