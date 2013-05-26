/*
Copyright 2013, KISSY UI Library v1.40dev
MIT Licensed
build time: Apr 17 00:21
*/
KISSY.add("event/dom/base/api",function(i,g,a,b,j,m,n){function l(c,a){var h=b[a]||{},d;if(!c.originalType&&(d=h.typeFix))c.originalType=a,a=d;return a}function o(c,a,h){var d,f,k,h=i.merge(h),a=l(h,a);d=m.getCustomEvents(c,1);if(!(k=d.handle))k=d.handle=function(c){var a=c.type,d=k.currentTarget;if(!(m.triggeredEvent==a||"undefined"==typeof KISSY))if(a=m.getCustomEvent(d,a))return c.currentTarget=d,c=new n(c),a.notify(c)},k.currentTarget=c;if(!(f=d.events))f=d.events={};d=f[a];d||(d=f[a]=new m({type:a,
currentTarget:c}),d.setup());d.on(h);c=null}function f(c,a,f){var f=i.merge(f),a=l(f,a),c=m.getCustomEvents(c),d=(c||{}).events;if(c&&d)if(a)(a=d[a])&&a.detach(f);else for(a in d)d[a].detach(f)}var p=g._Utils;i.mix(g,{add:function(c,f,h,d){c=a.query(c);p.batchForType(function(c,a,f,d){for(var f=p.normalizeParam(a,f,d),h,a=f.type,d=c.length-1;0<=d;d--)h=c[d],o(h,a,f)},1,c,f,h,d);return c},remove:function(c,b,h,d){c=a.query(c);p.batchForType(function(c,a,d,h){for(var d=p.normalizeParam(a,d,h),b,q,a=
d.type,h=c.length-1;0<=h;h--)if(b=c[h],f(b,a,d),d.deep&&b.getElementsByTagName){q=b.getElementsByTagName("*");for(b=q.length-1;0<=b;b--)f(q[b],a,d)}},1,c,b,h,d);return c},delegate:function(a,f,h,d,b){return g.add(a,f,{fn:d,context:b,selector:h})},undelegate:function(a,f,h,d,b){return g.remove(a,f,{fn:d,context:b,selector:h})},fire:function(c,f,h,d){var g=void 0,h=h||{};h.synthetic=1;p.splitAndRun(f,function(f){var q,j,i;p.fillGroupsForEvent(f,h);f=h.type;if((j=b[f])&&j.typeFix)f=j.typeFix;c=a.query(c);
for(j=c.length-1;0<=j;j--)q=c[j],i=m.getCustomEvent(q,f),!d&&!i&&(i=new m({type:f,currentTarget:q})),i&&(q=i.fire(h,d),!1!==g&&(g=q))});return g},fireHandler:function(a,f,h){return g.fire(a,f,h,1)},_clone:function(a,f){var h;(h=m.getCustomEvents(a))&&i.each(h.events,function(a,c){i.each(a.observers,function(a){o(f,c,a)})})},_ObservableDOMEvent:m});g.on=g.add;g.detach=g.remove;return g},{requires:"event/base,dom,./special,./utils,./observable,./object".split(",")});
KISSY.add("event/dom/base",function(i,g,a,b,j,m){i.mix(g,{KeyCodes:a,_DOMUtils:b,Gesture:j,_Special:m});return g},{requires:"event/base,./base/key-codes,./base/utils,./base/gesture,./base/special,./base/api,./base/mouseenter,./base/valuechange".split(",")});KISSY.add("event/dom/base/gesture",function(){return{start:"mousedown",move:"mousemove",end:"mouseup",tap:"click",doubleTap:"dblclick"}});
KISSY.add("event/dom/base/key-codes",function(i){var g=i.UA,a={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,
Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,
WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(b){if(b.altKey&&!b.ctrlKey||b.metaKey||b.keyCode>=a.F1&&b.keyCode<=a.F12)return!1;switch(b.keyCode){case a.ALT:case a.CAPS_LOCK:case a.CONTEXT_MENU:case a.CTRL:case a.DOWN:case a.END:case a.ESC:case a.HOME:case a.INSERT:case a.LEFT:case a.MAC_FF_META:case a.META:case a.NUMLOCK:case a.NUM_CENTER:case a.PAGE_DOWN:case a.PAGE_UP:case a.PAUSE:case a.PRINT_SCREEN:case a.RIGHT:case a.SHIFT:case a.UP:case a.WIN_KEY:case a.WIN_KEY_RIGHT:return!1;
default:return!0}},isCharacterKey:function(b){if(b>=a.ZERO&&b<=a.NINE||b>=a.NUM_ZERO&&b<=a.NUM_MULTIPLY||b>=a.A&&b<=a.Z||g.webkit&&0==b)return!0;switch(b){case a.SPACE:case a.QUESTION_MARK:case a.NUM_PLUS:case a.NUM_MINUS:case a.NUM_PERIOD:case a.NUM_DIVISION:case a.SEMICOLON:case a.DASH:case a.EQUALS:case a.COMMA:case a.PERIOD:case a.SLASH:case a.APOSTROPHE:case a.SINGLE_QUOTE:case a.OPEN_SQUARE_BRACKET:case a.BACKSLASH:case a.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};return a});
KISSY.add("event/dom/base/mouseenter",function(i,g,a,b){i.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(g){b[g.name]={typeFix:g.fix,handle:function(b,g,j){var i=b.currentTarget,f=b.relatedTarget;if(!f||f!==i&&!a.contains(i,f))return[g.simpleNotify(b,j)]}}});return g},{requires:["./api","dom","./special"]});
KISSY.add("event/dom/base/object",function(i,g,a){function b(){return l}function j(){return o}function m(c){var q=c.type;m.superclass.constructor.call(this);this.originalEvent=c;this.isDefaultPrevented=c.defaultPrevented||c.returnValue===o||c.getPreventDefault&&c.getPreventDefault()?b:j;var h=null,d,g,k=f.concat();i.each(p,function(c){return q.match(c.reg)?(k=k.concat(c.props),h=c.fix,!1):a});for(d=k.length;d;)g=k[--d],this[g]=c[g];this.target||(this.target=c.srcElement||n);3===this.target.nodeType&&
(this.target=this.target.parentNode);h&&h(this,c)}var n=i.Env.host.document,l=!0,o=!1,f="altKey,bubbles,cancelable,ctrlKey,currentTarget,eventPhase,metaKey,shiftKey,target,timeStamp,view,type".split(","),p=[{reg:/^key/,props:["char","charCode","key","keyCode","which"],fix:function(c,f){null==c.which&&(c.which=null!=f.charCode?f.charCode:f.keyCode);c.metaKey===a&&(c.metaKey=c.ctrlKey)}},{reg:/^touch/,props:["touches","changedTouches","targetTouches"]},{reg:/^gesturechange$/i,props:["rotation","scale"]},
{reg:/^mousewheel$/,props:[],fix:function(c,f){var h,d,b,k=f.wheelDelta,g=f.axis,p=f.wheelDeltaY,j=f.wheelDeltaX,i=f.detail;k&&(b=k/120);i&&(b=-(0==i%3?i/3:i));g!==a&&(g===e.HORIZONTAL_AXIS?(d=0,h=-1*b):g===e.VERTICAL_AXIS&&(h=0,d=b));p!==a&&(d=p/120);j!==a&&(h=-1*j/120);!h&&!d&&(d=b);h!==a&&(c.deltaX=h);d!==a&&(c.deltaY=d);b!==a&&(c.delta=b)}},{reg:/^mouse|contextmenu|click/,props:"buttons,clientX,clientY,button,offsetX,relatedTarget,which,fromElement,toElement,offsetY,pageX,pageY,screenX,screenY".split(","),
fix:function(c,f){var b,d,g=c.target,k=f.button;null==c.pageX&&null!=f.clientX&&(b=g.ownerDocument||n,d=b.documentElement,b=b.body,c.pageX=f.clientX+(d&&d.scrollLeft||b&&b.scrollLeft||0)-(d&&d.clientLeft||b&&b.clientLeft||0),c.pageY=f.clientY+(d&&d.scrollTop||b&&b.scrollTop||0)-(d&&d.clientTop||b&&b.clientTop||0));!c.which&&k!==a&&(c.which=k&1?1:k&2?3:k&4?2:0);!c.relatedTarget&&c.fromElement&&(c.relatedTarget=c.fromElement===g?c.toElement:c.fromElement);return c}}];i.extend(m,g._Object,{constructor:m,
preventDefault:function(){var a=this.originalEvent;a.preventDefault?a.preventDefault():a.returnValue=o;m.superclass.preventDefault.call(this)},stopPropagation:function(){var a=this.originalEvent;a.stopPropagation?a.stopPropagation():a.cancelBubble=l;m.superclass.stopPropagation.call(this)}});return g.DOMEventObject=m},{requires:["event/base"]});
KISSY.add("event/dom/base/observable",function(i,g,a,b,j,m,n){function l(a){i.mix(this,a);this.reset()}var o=n._Utils;i.extend(l,n._ObservableEvent,{setup:function(){var f=this.type,g=a[f]||{},c=this.currentTarget,j=b.data(c).handle;(!g.setup||!1===g.setup.call(c,f))&&b.simpleAdd(c,f,j)},constructor:l,reset:function(){l.superclass.reset.call(this);this.lastCount=this.delegateCount=0},notify:function(a){var b=a.target,c=a.type,j=this.currentTarget,h=this.observers,d=[],i,k,m=this.delegateCount||0,
l,n;if(m&&b.nodeType)for(;b!=j;){if(!0!==b.disabled||"click"!==c){var o={},s,t,u;l=[];for(k=0;k<m;k++)n=h[k],u=n.selector,t=u+"",s=o[t],void 0===s&&(s=o[t]=g.test(b,u)),s&&l.push(n);l.length&&d.push({currentTarget:b,currentTargetObservers:l})}b=b.parentNode||j}m<h.length&&d.push({currentTarget:j,currentTargetObservers:h.slice(m)});k=0;for(b=d.length;!a.isPropagationStopped()&&k<b;++k){c=d[k];l=c.currentTargetObservers;c=c.currentTarget;a.currentTarget=c;for(c=0;!a.isImmediatePropagationStopped()&&
c<l.length;c++)j=l[c],j=j.notify(a,this),!1!==i&&(i=j)}return i},fire:function(f,b){var f=f||{},c=""+this.type,j,h,d=a[c]||{};j=!1!==d.bubbles;var n=this.currentTarget;if(!(d.fire&&!1===d.fire.call(n,b))&&(f instanceof m||(h=f,f=new m({currentTarget:n,type:c,target:n}),i.mix(f,h)),!(d.preFire&&!1===d.preFire.call(n,f,b)))){var k=n,o=g.getWindow(k.ownerDocument||k),w=o.document;h=[];d=0;do h.push(k),k=k.parentNode||k.ownerDocument||k===w&&o;while(!b&&k&&j);k=h[d];do f.currentTarget=k,(j=l.getCustomEvent(k,
c))&&j.notify(f),k=h[++d];while(!b&&k&&!f.isPropagationStopped());if(!b&&!f.isDefaultPrevented()){try{n[c]&&!i.isWindow(n)&&(l.triggeredEvent=c,n[c]())}catch(x){}l.triggeredEvent=""}}},on:function(b){var g=this.observers,c=a[this.type]||{},b=b instanceof j?b:new j(b);-1==this.findObserver(b)&&(b.selector?(g.splice(this.delegateCount,0,b),this.delegateCount++):b.last?(g.push(b),this.lastCount++):g.splice(g.length-this.lastCount,0,b),c.add&&c.add.call(this.currentTarget,b))},detach:function(b){var g,
c=a[this.type]||{},j="selector"in b,h=b.selector,d=b.context,i=b.fn,k=this.currentTarget,m=this.observers,b=b.groups;if(m.length){b&&(g=o.getGroupsRe(b));var n,l,r,s,t=m.length;if(i||j||g){d=d||k;n=b=0;for(l=[];b<t;++b)r=m[b],s=r.context||k,d!=s||i&&i!=r.fn||j&&(h&&h!=r.selector||!h&&!r.selector)||g&&!r.groups.match(g)?l[n++]=r:(r.selector&&this.delegateCount&&this.delegateCount--,r.last&&this.lastCount&&this.lastCount--,c.remove&&c.remove.call(k,r));this.observers=l}else this.reset();this.checkMemory()}},
checkMemory:function(){var f=this.type,g,c,j=a[f]||{},h=this.currentTarget,d=b.data(h);if(d&&(g=d.events,this.hasObserver()||(c=d.handle,(!j.tearDown||!1===j.tearDown.call(h,f))&&b.simpleRemove(h,f,c),delete g[f]),i.isEmptyObject(g)))d.handle=null,b.removeData(h)}});l.triggeredEvent="";l.getCustomEvent=function(a,g){var c=b.data(a),j;c&&(j=c.events);return j?j[g]:null};l.getCustomEvents=function(a,g){var c=b.data(a);!c&&g&&b.data(a,c={});return c};return l},{requires:"dom,./special,./utils,./observer,./object,event/base".split(",")});
KISSY.add("event/dom/base/observer",function(i,g,a){function b(a){b.superclass.constructor.apply(this,arguments)}i.extend(b,a._Observer,{keys:"fn,selector,data,context,originalType,groups,last".split(","),notifyInternal:function(a,b){var i,l,o=a.type,f;(f=this.originalType)?a.type=f:f=o;(i=g[f])&&i.handle?(i=i.handle(a,this,b))&&0<i.length&&(l=i[0]):l=this.simpleNotify(a,b);a.type=o;return l}});return b},{requires:["./special","event/base"]});
KISSY.add("event/dom/base/special",function(i,g){var a=a;return{mousewheel:{typeFix:i.UA.gecko?"DOMMouseScroll":"mousewheel"},load:{bubbles:!1},click:{fire:function(b){return!b&&"checkbox"===""+this.type&&this.click&&"input"==this.nodeName.toLowerCase()?(this.click(),!1):a}},focus:{bubbles:!1,preFire:function(a,j){j||g.fire(this,"focusin")},fire:function(b){return!b&&this.ownerDocument&&this!==this.ownerDocument.activeElement&&this.focus?(this.focus(),!1):a}},blur:{bubbles:!1,preFire:function(a,j){j||
g.fire(this,"focusout")},fire:function(b){return!b&&this.ownerDocument&&this===this.ownerDocument.activeElement&&this.blur?(this.blur(),!1):a}}}},{requires:["event/base"]});
KISSY.add("event/dom/base/utils",function(i,g){var a=i.Env.host.document;return{simpleAdd:a&&a.addEventListener?function(a,g,i,n){a.addEventListener&&a.addEventListener(g,i,!!n)}:function(a,g,i){a.attachEvent&&a.attachEvent("on"+g,i)},simpleRemove:a&&a.removeEventListener?function(a,g,i,n){a.removeEventListener&&a.removeEventListener(g,i,!!n)}:function(a,g,i){a.detachEvent&&a.detachEvent("on"+g,i)},data:function(a,i){return g.data(a,"ksEventTargetId_1.30",i)},removeData:function(a){return g.removeData(a,
"ksEventTargetId_1.30")}}},{requires:["dom"]});
KISSY.add("event/dom/base/valuechange",function(i,g,a,b){function j(b){if(a.hasData(b,d)){var c=a.data(b,d);clearTimeout(c);a.removeData(b,d)}}function m(a){j(a.target)}function n(b){var d=b.value,f=a.data(b,h);d!==f&&(g.fireHandler(b,c,{prevVal:f,newVal:d}),a.data(b,h,d))}function l(b){a.hasData(b,d)||a.data(b,d,setTimeout(function(){n(b);a.data(b,d,setTimeout(arguments.callee,v))},v))}function o(b){var c=b.target;"focus"==b.type&&a.data(c,h,c.value);l(c)}function f(a){n(a.target)}function p(b){a.removeData(b,
h);j(b);g.remove(b,"blur",m);g.remove(b,"webkitspeechchange",f);g.remove(b,"mousedown keyup keydown focus",o)}var c="valuechange",q=a.nodeName,h="event/valuechange/history",d="event/valuechange/poll",v=50;b[c]={setup:function(){var a=q(this);if("input"==a||"textarea"==a)p(this),g.on(this,"blur",m),g.on(this,"webkitspeechchange",f),g.on(this,"mousedown keyup keydown focus",o)},tearDown:function(){p(this)}};return g},{requires:["./api","dom","./special"]});