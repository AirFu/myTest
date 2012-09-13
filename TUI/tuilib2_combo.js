/*!
 * @modified $Author: lhluo $
 * @version $Rev: 24282 $
 * @path STATIC/js/lib/tuilib.js
 * TUI JavaScript Library
 * @charset gb18030
 */

/**
 * @path js/lib/jquery-1.6.4.min.js
 * @version 21898
 */
(function(o,l){function ra(a,b,d){if(d===l&&1===a.nodeType)if(d="data-"+b.replace(cb,"-$1").toLowerCase(),d=a.getAttribute(d),"string"===typeof d){try{d="true"===d?!0:"false"===d?!1:"null"===d?null:!c.isNaN(d)?parseFloat(d):db.test(d)?c.parseJSON(d):d}catch(e){}c.data(a,b,d)}else d=l;return d}function ca(a){for(var b in a)if("toJSON"!==b)return!1;return!0}function sa(a,b,d){var e=b+"defer",f=b+"queue",g=b+"mark",h=c.data(a,e,l,!0);h&&("queue"===d||!c.data(a,f,l,!0))&&("mark"===d||!c.data(a,g,l,!0))&&
setTimeout(function(){!c.data(a,f,l,!0)&&!c.data(a,g,l,!0)&&(c.removeData(a,e,!0),h.resolve())},0)}function C(){return!1}function Q(){return!0}function ta(a,b,d){var e=c.extend({},d[0]);e.type=a;e.originalEvent={};e.liveFired=l;c.event.handle.call(b,e);e.isDefaultPrevented()&&d[0].preventDefault()}function eb(a){var b,d,e,f,g,h,i,j,m,n,l,k=[];f=[];g=c._data(this,"events");if(!(a.liveFired===this||!g||!g.live||a.target.disabled||a.button&&"click"===a.type)){a.namespace&&(l=RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+
"(\\.|$)"));a.liveFired=this;var p=g.live.slice(0);for(i=0;i<p.length;i++)g=p[i],g.origType.replace(da,"")===a.type?f.push(g.selector):p.splice(i--,1);f=c(a.target).closest(f,a.currentTarget);for(j=0,m=f.length;j<m;j++){n=f[j];for(i=0;i<p.length;i++)if(g=p[i],n.selector===g.selector&&(!l||l.test(g.namespace))&&!n.elem.disabled){h=n.elem;e=null;if("mouseenter"===g.preType||"mouseleave"===g.preType)a.type=g.preType,(e=c(a.relatedTarget).closest(g.selector)[0])&&c.contains(h,e)&&(e=h);(!e||e!==h)&&k.push({elem:h,
handleObj:g,level:n.level})}}for(j=0,m=k.length;j<m;j++){f=k[j];if(d&&f.level>d)break;a.currentTarget=f.elem;a.data=f.handleObj.data;a.handleObj=f.handleObj;l=f.handleObj.origHandler.apply(f.elem,arguments);if(!1===l||a.isPropagationStopped())if(d=f.level,!1===l&&(b=!1),a.isImmediatePropagationStopped())break}return b}}function V(a,b){return(a&&"*"!==a?a+".":"")+b.replace(fb,"`").replace(gb,"&")}function ua(a,b,d){b=b||0;if(c.isFunction(b))return c.grep(a,function(a,c){return!!b.call(a,c,a)===d});
if(b.nodeType)return c.grep(a,function(a){return a===b===d});if("string"===typeof b){var e=c.grep(a,function(a){return 1===a.nodeType});if(hb.test(b))return c.filter(b,e,!d);b=c.filter(b,e)}return c.grep(a,function(a){return 0<=c.inArray(a,b)===d})}function va(a,b){if(1===b.nodeType&&c.hasData(a)){var d=c.expando,e=c.data(a),f=c.data(b,e);if(e=e[d]){var g=e.events,f=f[d]=c.extend({},e);if(g){delete f.handle;f.events={};for(var h in g){d=0;for(e=g[h].length;d<e;d++)c.event.add(b,h+(g[h][d].namespace?
".":"")+g[h][d].namespace,g[h][d],g[h][d].data)}}}}}function wa(a,b){var d;if(1===b.nodeType){b.clearAttributes&&b.clearAttributes();b.mergeAttributes&&b.mergeAttributes(a);d=b.nodeName.toLowerCase();if("object"===d)b.outerHTML=a.outerHTML;else if("input"===d&&("checkbox"===a.type||"radio"===a.type)){if(a.checked)b.defaultChecked=b.checked=a.checked;if(b.value!==a.value)b.value=a.value}else if("option"===d)b.selected=a.defaultSelected;else if("input"===d||"textarea"===d)b.defaultValue=a.defaultValue;
b.removeAttribute(c.expando)}}function W(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function xa(a){if("checkbox"===a.type||"radio"===a.type)a.defaultChecked=a.checked}function ya(a){c.nodeName(a,"input")?xa(a):"getElementsByTagName"in a&&c.grep(a.getElementsByTagName("input"),xa)}function ib(a,b){b.src?c.ajax({url:b.src,async:!1,dataType:"script"}):c.globalEval((b.text||b.textContent||b.innerHTML||"").replace(jb,"/*$0*/"));b.parentNode&&
b.parentNode.removeChild(b)}function za(a,b,d){var e="width"===b?a.offsetWidth:a.offsetHeight,f="width"===b?kb:lb;if(0<e)return"border"!==d&&c.each(f,function(){d||(e-=parseFloat(c.css(a,"padding"+this))||0);e="margin"===d?e+(parseFloat(c.css(a,d+this))||0):e-(parseFloat(c.css(a,"border"+this+"Width"))||0)}),e+"px";e=F(a,b,b);if(0>e||null==e)e=a.style[b]||0;e=parseFloat(e)||0;d&&c.each(f,function(){e+=parseFloat(c.css(a,"padding"+this))||0;"padding"!==d&&(e+=parseFloat(c.css(a,"border"+this+"Width"))||
0);"margin"===d&&(e+=parseFloat(c.css(a,d+this))||0)});return e+"px"}function Aa(a){return function(b,d){var j;"string"!==typeof b&&(d=b,b="*");if(c.isFunction(d))for(var e=b.toLowerCase().split(Ba),f=0,g=e.length,h,i;f<g;f++)h=e[f],(i=/^\+/.test(h))&&(h=h.substr(1)||"*"),j=a[h]=a[h]||[],h=j,h[i?"unshift":"push"](d)}}function X(a,b,c,e,f,g){f=f||b.dataTypes[0];g=g||{};g[f]=!0;for(var f=a[f],h=0,i=f?f.length:0,j=a===ea,m;h<i&&(j||!m);h++)m=f[h](b,c,e),"string"===typeof m&&(!j||g[m]?m=l:(b.dataTypes.unshift(m),
m=X(a,b,c,e,m,g)));if((j||!m)&&!g["*"])m=X(a,b,c,e,"*",g);return m}function Ca(a,b){var d,e,f=c.ajaxSettings.flatOptions||{};for(d in b)b[d]!==l&&((f[d]?a:e||(e={}))[d]=b[d]);e&&c.extend(!0,a,e)}function fa(a,b,d,e){if(c.isArray(b))c.each(b,function(b,f){d||mb.test(a)?e(a,f):fa(a+"["+("object"===typeof f||c.isArray(f)?b:"")+"]",f,d,e)});else if(!d&&null!=b&&"object"===typeof b)for(var f in b)fa(a+"["+f+"]",b[f],d,e);else e(a,b)}function Da(){try{return new o.XMLHttpRequest}catch(a){}}function Ea(){setTimeout(nb,
0);return Y=c.now()}function nb(){Y=l}function L(a,b){var d={};c.each(Fa.concat.apply([],Fa.slice(0,b)),function(){d[this]=a});return d}function Ga(a){if(!ga[a]){var b=k.body,d=c("<"+a+">").appendTo(b),e=d.css("display");d.remove();if("none"===e||""===e){if(!u)u=k.createElement("iframe"),u.frameBorder=u.width=u.height=0;b.appendChild(u);if(!G||!u.createElement)G=(u.contentWindow||u.contentDocument).document,G.write(("CSS1Compat"===k.compatMode?"<!doctype html>":"")+"<html><body>"),G.close();d=G.createElement(a);
G.body.appendChild(d);e=c.css(d,"display");b.removeChild(u)}ga[a]=e}return ga[a]}function ha(a){return c.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}var k=o.document,ob=o.navigator,pb=o.location,c=function(){function a(){if(!b.isReady){try{k.documentElement.doScroll("left")}catch(c){setTimeout(a,1);return}b.ready()}}var b=function(a,c){return new b.fn.init(a,c,f)},c=o.jQuery,e=o.$,f,g=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,h=/\S/,i=/^\s+/,j=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,
B=/^[\],:{}\s]*$/,J=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,s=/(?:^|:|,)(?:\s*\[)+/g,w=/(webkit)[ \/]([\w.]+)/,v=/(opera)(?:.*version)?[ \/]([\w.]+)/,x=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,t=/-([a-z]|[0-9])/ig,q=/^-ms-/,qb=function(a,b){return(b+"").toUpperCase()},z=ob.userAgent,Z,R,rb=Object.prototype.toString,ia=Object.prototype.hasOwnProperty,ja=Array.prototype.push,T=Array.prototype.slice,U=String.prototype.trim,
O=Array.prototype.indexOf,r={};b.fn=b.prototype={constructor:b,init:function(a,c,d){var e;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if("body"===a&&!c&&k.body)return this.context=k,this[0]=k.body,this.selector=a,this.length=1,this;if("string"===typeof a){if((e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&3<=a.length?[null,a,null]:g.exec(a))&&(e[1]||!c)){if(e[1])return d=(c=c instanceof b?c[0]:c)?c.ownerDocument||c:k,(a=n.exec(a))?b.isPlainObject(c)?(a=[k.createElement(a[1])],
b.fn.attr.call(a,c,!0)):a=[d.createElement(a[1])]:(a=b.buildFragment([e[1]],[d]),a=(a.cacheable?b.clone(a.fragment):a.fragment).childNodes),b.merge(this,a);if((c=k.getElementById(e[2]))&&c.parentNode){if(c.id!==e[2])return d.find(a);this.length=1;this[0]=c}this.context=k;this.selector=a;return this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}if(b.isFunction(a))return d.ready(a);if(a.selector!==l)this.selector=a.selector,this.context=a.context;return b.makeArray(a,this)},selector:"",
jquery:"1.6.4",length:0,size:function(){return this.length},toArray:function(){return T.call(this,0)},get:function(a){return null==a?this.toArray():0>a?this[this.length+a]:this[a]},pushStack:function(a,c,d){var e=this.constructor();b.isArray(a)?ja.apply(e,a):b.merge(e,a);e.prevObject=this;e.context=this.context;if("find"===c)e.selector=this.selector+(this.selector?" ":"")+d;else if(c)e.selector=this.selector+"."+c+"("+d+")";return e},each:function(a,c){return b.each(this,a,c)},ready:function(a){b.bindReady();
Z.done(a);return this},eq:function(a){return-1===a?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(T.apply(this,arguments),"slice",T.call(arguments).join(","))},map:function(a){return this.pushStack(b.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:ja,sort:[].sort,splice:[].splice};b.fn.init.prototype=b.fn;b.extend=b.fn.extend=function(){var a,
c,d,e,f,g=arguments[0]||{},t=1,h=arguments.length,q=!1;"boolean"===typeof g&&(q=g,g=arguments[1]||{},t=2);"object"!==typeof g&&!b.isFunction(g)&&(g={});h===t&&(g=this,--t);for(;t<h;t++)if(null!=(a=arguments[t]))for(c in a)d=g[c],e=a[c],g!==e&&(q&&e&&(b.isPlainObject(e)||(f=b.isArray(e)))?(f?(f=!1,d=d&&b.isArray(d)?d:[]):d=d&&b.isPlainObject(d)?d:{},g[c]=b.extend(q,d,e)):e!==l&&(g[c]=e));return g};b.extend({noConflict:function(a){if(o.$===b)o.$=e;if(a&&o.jQuery===b)o.jQuery=c;return b},isReady:!1,
readyWait:1,holdReady:function(a){a?b.readyWait++:b.ready(!0)},ready:function(a){if(!0===a&&!--b.readyWait||!0!==a&&!b.isReady){if(!k.body)return setTimeout(b.ready,1);b.isReady=!0;!0!==a&&0<--b.readyWait||(Z.resolveWith(k,[b]),b.fn.trigger&&b(k).trigger("ready").unbind("ready"))}},bindReady:function(){if(!Z){Z=b._Deferred();if("complete"===k.readyState)return setTimeout(b.ready,1);if(k.addEventListener)k.addEventListener("DOMContentLoaded",R,!1),o.addEventListener("load",b.ready,!1);else if(k.attachEvent){k.attachEvent("onreadystatechange",
R);o.attachEvent("onload",b.ready);var c=!1;try{c=null==o.frameElement}catch(d){}k.documentElement.doScroll&&c&&a()}}},isFunction:function(a){return"function"===b.type(a)},isArray:Array.isArray||function(a){return"array"===b.type(a)},isWindow:function(a){return a&&"object"===typeof a&&"setInterval"in a},isNaN:function(a){return null==a||!m.test(a)||isNaN(a)},type:function(a){return null==a?""+a:r[rb.call(a)]||"object"},isPlainObject:function(a){if(!a||"object"!==b.type(a)||a.nodeType||b.isWindow(a))return!1;
try{if(a.constructor&&!ia.call(a,"constructor")&&!ia.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var d in a);return d===l||ia.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a;},parseJSON:function(a){if("string"!==typeof a||!a)return null;a=b.trim(a);if(o.JSON&&o.JSON.parse)return o.JSON.parse(a);if(B.test(a.replace(J,"@").replace(p,"]").replace(s,"")))return(new Function("return "+a))();b.error("Invalid JSON: "+a)},parseXML:function(a){var c,
d;try{o.DOMParser?(d=new DOMParser,c=d.parseFromString(a,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(a))}catch(e){c=l}(!c||!c.documentElement||c.getElementsByTagName("parsererror").length)&&b.error("Invalid XML: "+a);return c},noop:function(){},globalEval:function(a){a&&h.test(a)&&(o.execScript||function(a){o.eval.call(o,a)})(a)},camelCase:function(a){return a.replace(q,"ms-").replace(t,qb)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},
each:function(a,c,d){var e,f=0,g=a.length,t=g===l||b.isFunction(a);if(d)if(t)for(e in a){if(!1===c.apply(a[e],d))break}else for(;f<g&&!(!1===c.apply(a[f++],d)););else if(t)for(e in a){if(!1===c.call(a[e],e,a[e]))break}else for(;f<g&&!(!1===c.call(a[f],f,a[f++])););return a},trim:U?function(a){return null==a?"":U.call(a)}:function(a){return null==a?"":a.toString().replace(i,"").replace(j,"")},makeArray:function(a,c){var d=c||[];if(null!=a){var e=b.type(a);null==a.length||"string"===e||"function"===
e||"regexp"===e||b.isWindow(a)?ja.call(d,a):b.merge(d,a)}return d},inArray:function(a,b){if(!b)return-1;if(O)return O.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,b){var c=a.length,d=0;if("number"===typeof b.length)for(var e=b.length;d<e;d++)a[c++]=b[d];else for(;b[d]!==l;)a[c++]=b[d++];a.length=c;return a},grep:function(a,b,c){for(var d=[],e,c=!!c,f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var e,f,g=[],t=0,h=
a.length;if(a instanceof b||h!==l&&"number"===typeof h&&(0<h&&a[0]&&a[h-1]||0===h||b.isArray(a)))for(;t<h;t++)e=c(a[t],t,d),null!=e&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),null!=e&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){if("string"===typeof c)var d=a[c],c=a,a=d;if(!b.isFunction(a))return l;var e=T.call(arguments,2),d=function(){return a.apply(c,e.concat(T.call(arguments)))};d.guid=a.guid=a.guid||d.guid||b.guid++;return d},access:function(a,c,d,e,f,g){var t=
a.length;if("object"===typeof c){for(var h in c)b.access(a,h,c[h],e,f,d);return a}if(d!==l){e=!g&&e&&b.isFunction(d);for(h=0;h<t;h++)f(a[h],c,e?d.call(a[h],h,f(a[h],c)):d,g);return a}return t?f(a[0],c):l},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();a=w.exec(a)||v.exec(a)||x.exec(a)||0>a.indexOf("compatible")&&u.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}b.extend(!0,a,this);a.superclass=this;
a.fn=a.prototype=this();a.fn.constructor=a;a.sub=this.sub;a.fn.init=function(d,e){e&&e instanceof b&&!(e instanceof a)&&(e=a(e));return b.fn.init.call(this,d,e,c)};a.fn.init.prototype=a.fn;var c=a(k);return a},browser:{}});b.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){r["[object "+b+"]"]=b.toLowerCase()});z=b.uaMatch(z);if(z.browser)b.browser[z.browser]=!0,b.browser.version=z.version;if(b.browser.webkit)b.browser.safari=!0;h.test("\u00a0")&&(i=/^[\s\xA0]+/,
j=/[\s\xA0]+$/);f=b(k);k.addEventListener?R=function(){k.removeEventListener("DOMContentLoaded",R,!1);b.ready()}:k.attachEvent&&(R=function(){"complete"===k.readyState&&(k.detachEvent("onreadystatechange",R),b.ready())});return b}(),ka="done fail isResolved isRejected promise then always pipe".split(" "),Ha=[].slice;c.extend({_Deferred:function(){var a=[],b,d,e,f={done:function(){if(!e){var d=arguments,h,i,j,m,n;b&&(n=b,b=0);for(h=0,i=d.length;h<i;h++)j=d[h],m=c.type(j),"array"===m?f.done.apply(f,
j):"function"===m&&a.push(j);n&&f.resolveWith(n[0],n[1])}return this},resolveWith:function(c,f){if(!e&&!b&&!d){f=f||[];d=1;try{for(;a[0];)a.shift().apply(c,f)}finally{b=[c,f],d=0}}return this},resolve:function(){f.resolveWith(this,arguments);return this},isResolved:function(){return!(!d&&!b)},cancel:function(){e=1;a=[];return this}};return f},Deferred:function(a){var b=c._Deferred(),d=c._Deferred(),e;c.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,
arguments).fail.apply(this,arguments)},fail:d.done,rejectWith:d.resolveWith,reject:d.resolve,isRejected:d.isResolved,pipe:function(a,d){return c.Deferred(function(e){c.each({done:[a,"resolve"],fail:[d,"reject"]},function(a,d){var f=d[0],g=d[1],l;if(c.isFunction(f))b[a](function(){if((l=f.apply(this,arguments))&&c.isFunction(l.promise))l.promise().then(e.resolve,e.reject);else e[g+"With"](this===b?e:this,[l])});else b[a](e[g])})}).promise()},promise:function(a){if(null==a){if(e)return e;e=a={}}for(var c=
ka.length;c--;)a[ka[c]]=b[ka[c]];return a}});b.done(d.cancel).fail(b.cancel);delete b.cancel;a&&a.call(b,b);return b},when:function(a){function b(a){return function(b){d[a]=1<arguments.length?Ha.call(arguments,0):b;--g||h.resolveWith(h,Ha.call(d,0))}}var d=arguments,e=0,f=d.length,g=f,h=1>=f&&a&&c.isFunction(a.promise)?a:c.Deferred();if(1<f){for(;e<f;e++)d[e]&&c.isFunction(d[e].promise)?d[e].promise().then(b(e),h.reject):--g;g||h.resolveWith(h,d)}else h!==a&&h.resolveWith(h,f?[a]:[]);return h.promise()}});
c.support=function(){var a=k.createElement("div"),b=k.documentElement,d,e,f,g,h,i;a.setAttribute("className","t");a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";d=a.getElementsByTagName("*");e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};f=k.createElement("select");g=f.appendChild(k.createElement("option"));d=a.getElementsByTagName("input")[0];h={leadingWhitespace:3===a.firstChild.nodeType,tbody:!a.getElementsByTagName("tbody").length,
htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:"/a"===e.getAttribute("href"),opacity:/^0.55$/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:"on"===d.value,optSelected:g.selected,getSetAttribute:"t"!==a.className,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0};d.checked=!0;h.noCloneChecked=d.cloneNode(!0).checked;f.disabled=
!0;h.optDisabled=!g.disabled;try{delete a.test}catch(j){h.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function(){h.noCloneEvent=!1}),a.cloneNode(!0).fireEvent("onclick"));d=k.createElement("input");d.value="t";d.setAttribute("type","radio");h.radioValue="t"===d.value;d.setAttribute("checked","checked");a.appendChild(d);e=k.createDocumentFragment();e.appendChild(a.firstChild);h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked;a.innerHTML="";
a.style.width=a.style.paddingLeft="1px";f=k.getElementsByTagName("body")[0];e=k.createElement(f?"div":"body");g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};f&&c.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(i in g)e.style[i]=g[i];e.appendChild(a);b=f||b;b.insertBefore(e,b.firstChild);h.appendChecked=d.checked;h.boxModel=2===a.offsetWidth;if("zoom"in a.style)a.style.display="inline",a.style.zoom=1,h.inlineBlockNeedsLayout=2===a.offsetWidth,a.style.display=
"",a.innerHTML="<div style='width:4px;'></div>",h.shrinkWrapBlocks=2!==a.offsetWidth;a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";f=a.getElementsByTagName("td");d=0===f[0].offsetHeight;f[0].style.display="";f[1].style.display="none";h.reliableHiddenOffsets=d&&0===f[0].offsetHeight;a.innerHTML="";if(k.defaultView&&k.defaultView.getComputedStyle)d=k.createElement("div"),d.style.width="0",d.style.marginRight="0",a.appendChild(d),h.reliableMarginRight=
0===(parseInt((k.defaultView.getComputedStyle(d,null)||{marginRight:0}).marginRight,10)||0);e.innerHTML="";b.removeChild(e);if(a.attachEvent)for(i in{submit:1,change:1,focusin:1})b="on"+i,d=b in a,d||(a.setAttribute(b,"return;"),d="function"===typeof a[b]),h[i+"Bubbles"]=d;e=e=f=g=f=d=a=d=null;return h}();c.boxModel=c.support.boxModel;var db=/^(?:\{.*\}|\[.*\])$/,cb=/([A-Z])/g;c.extend({cache:{},uuid:0,expando:"jQuery"+(c.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
applet:!0},hasData:function(a){a=a.nodeType?c.cache[a[c.expando]]:a[c.expando];return!!a&&!ca(a)},data:function(a,b,d,e){if(c.acceptData(a)){var f=c.expando,g="string"===typeof b,h=a.nodeType,i=h?c.cache:a,j=h?a[c.expando]:a[c.expando]&&c.expando;if(j&&(!e||!j||!i[j]||i[j][f])||!(g&&d===l)){if(!j)h?a[c.expando]=j=++c.uuid:j=c.expando;if(!i[j]&&(i[j]={},!h))i[j].toJSON=c.noop;if("object"===typeof b||"function"===typeof b)e?i[j][f]=c.extend(i[j][f],b):i[j]=c.extend(i[j],b);a=i[j];e&&(a[f]||(a[f]={}),
a=a[f]);d!==l&&(a[c.camelCase(b)]=d);if("events"===b&&!a[b])return a[f]&&a[f].events;g?(d=a[b],null==d&&(d=a[c.camelCase(b)])):d=a;return d}}},removeData:function(a,b,d){if(c.acceptData(a)){var e,f=c.expando,g=a.nodeType,h=g?c.cache:a,i=g?a[c.expando]:c.expando;if(h[i]){if(b&&(e=d?h[i][f]:h[i]))if(e[b]||(b=c.camelCase(b)),delete e[b],!ca(e))return;if(d&&(delete h[i][f],!ca(h[i])))return;b=h[i][f];c.support.deleteExpando||!h.setInterval?delete h[i]:h[i]=null;if(b){h[i]={};if(!g)h[i].toJSON=c.noop;
h[i][f]=b}else g&&(c.support.deleteExpando?delete a[c.expando]:a.removeAttribute?a.removeAttribute(c.expando):a[c.expando]=null)}}},_data:function(a,b,d){return c.data(a,b,d,!0)},acceptData:function(a){if(a.nodeName){var b=c.noData[a.nodeName.toLowerCase()];if(b)return!(!0===b||a.getAttribute("classid")!==b)}return!0}});c.fn.extend({data:function(a,b){var d=null;if("undefined"===typeof a){if(this.length&&(d=c.data(this[0]),1===this[0].nodeType))for(var e=this[0].attributes,f,g=0,h=e.length;g<h;g++)f=
e[g].name,0===f.indexOf("data-")&&(f=c.camelCase(f.substring(5)),ra(this[0],f,d[f]));return d}if("object"===typeof a)return this.each(function(){c.data(this,a)});var i=a.split(".");i[1]=i[1]?"."+i[1]:"";return b===l?(d=this.triggerHandler("getData"+i[1]+"!",[i[0]]),d===l&&this.length&&(d=c.data(this[0],a),d=ra(this[0],a,d)),d===l&&i[1]?this.data(i[0]):d):this.each(function(){var d=c(this),e=[i[0],b];d.triggerHandler("setData"+i[1]+"!",e);c.data(this,a,b);d.triggerHandler("changeData"+i[1]+"!",e)})},
removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",c.data(a,b,(c.data(a,b,l,!0)||0)+1,!0))},_unmark:function(a,b,d){!0!==a&&(d=b,b=a,a=!1);if(b){var d=d||"fx",e=d+"mark";(a=a?0:(c.data(b,e,l,!0)||1)-1)?c.data(b,e,a,!0):(c.removeData(b,e,!0),sa(b,d,"mark"))}},queue:function(a,b,d){if(a){var b=(b||"fx")+"queue",e=c.data(a,b,l,!0);d&&(!e||c.isArray(d)?e=c.data(a,b,c.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,
b){var b=b||"fx",d=c.queue(a,b),e=d.shift();"inprogress"===e&&(e=d.shift());e&&("fx"===b&&d.unshift("inprogress"),e.call(a,function(){c.dequeue(a,b)}));d.length||(c.removeData(a,b+"queue",!0),sa(a,b,"queue"))}});c.fn.extend({queue:function(a,b){"string"!==typeof a&&(b=a,a="fx");return b===l?c.queue(this[0],a):this.each(function(){var d=c.queue(this,a,b);"fx"===a&&"inprogress"!==d[0]&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?
c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a){function b(){--g||d.resolveWith(e,[e])}"string"!==typeof a&&(a=l);for(var a=a||"fx",d=c.Deferred(),e=this,f=e.length,g=1,h=a+"defer",i=a+"queue",a=a+"mark",j;f--;)if(j=c.data(e[f],h,l,!0)||(c.data(e[f],i,l,!0)||c.data(e[f],a,l,!0))&&c.data(e[f],h,c._Deferred(),!0))g++,j.done(b);b();return d.promise()}});var Ia=
/[\n\t\r]/g,la=/\s+/,sb=/\r/g,tb=/^(?:button|input)$/i,ub=/^(?:button|input|object|select|textarea)$/i,vb=/^a(?:rea)?$/i,Ja=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,H,Ka;c.fn.extend({attr:function(a,b){return c.access(this,a,b,!0,c.attr)},removeAttr:function(a){return this.each(function(){c.removeAttr(this,a)})},prop:function(a,b){return c.access(this,a,b,!0,c.prop)},removeProp:function(a){a=c.propFix[a]||a;return this.each(function(){try{this[a]=
l,delete this[a]}catch(b){}})},addClass:function(a){var b,d,e,f,g,h,i;if(c.isFunction(a))return this.each(function(b){c(this).addClass(a.call(this,b,this.className))});if(a&&"string"===typeof a){b=a.split(la);for(d=0,e=this.length;d<e;d++)if(f=this[d],1===f.nodeType)if(!f.className&&1===b.length)f.className=a;else{g=" "+f.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");f.className=c.trim(g)}}return this},removeClass:function(a){var b,d,e,f,g,h,i;if(c.isFunction(a))return this.each(function(b){c(this).removeClass(a.call(this,
b,this.className))});if(a&&"string"===typeof a||a===l){b=(a||"").split(la);for(d=0,e=this.length;d<e;d++)if(f=this[d],1===f.nodeType&&f.className)if(a){g=(" "+f.className+" ").replace(Ia," ");for(h=0,i=b.length;h<i;h++)g=g.replace(" "+b[h]+" "," ");f.className=c.trim(g)}else f.className=""}return this},toggleClass:function(a,b){var d=typeof a,e="boolean"===typeof b;return c.isFunction(a)?this.each(function(d){c(this).toggleClass(a.call(this,d,this.className,b),b)}):this.each(function(){if("string"===
d)for(var f,g=0,h=c(this),i=b,j=a.split(la);f=j[g++];)i=e?i:!h.hasClass(f),h[i?"addClass":"removeClass"](f);else if("undefined"===d||"boolean"===d)this.className&&c._data(this,"__className__",this.className),this.className=this.className||!1===a?"":c._data(this,"__className__")||""})},hasClass:function(a){for(var a=" "+a+" ",b=0,c=this.length;b<c;b++)if(1===this[b].nodeType&&-1<(" "+this[b].className+" ").replace(Ia," ").indexOf(a))return!0;return!1},val:function(a){var b,d,e=this[0];if(!arguments.length){if(e){if((b=
c.valHooks[e.nodeName.toLowerCase()]||c.valHooks[e.type])&&"get"in b&&(d=b.get(e,"value"))!==l)return d;d=e.value;return"string"===typeof d?d.replace(sb,""):null==d?"":d}return l}var f=c.isFunction(a);return this.each(function(d){var e=c(this);if(1===this.nodeType&&(d=f?a.call(this,d,e.val()):a,null==d?d="":"number"===typeof d?d+="":c.isArray(d)&&(d=c.map(d,function(a){return null==a?"":a+""})),b=c.valHooks[this.nodeName.toLowerCase()]||c.valHooks[this.type],!b||!("set"in b)||b.set(this,d,"value")===
l))this.value=d})}});c.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,d=a.selectedIndex,e=[],f=a.options,a="select-one"===a.type;if(0>d)return null;for(var g=a?d:0,h=a?d+1:f.length;g<h;g++)if(b=f[g],b.selected&&(c.support.optDisabled?!b.disabled:null===b.getAttribute("disabled"))&&(!b.parentNode.disabled||!c.nodeName(b.parentNode,"optgroup"))){b=c(b).val();if(a)return b;e.push(b)}return a&&!e.length&&f.length?
c(f[d]).val():e},set:function(a,b){var d=c.makeArray(b);c(a).find("option").each(function(){this.selected=0<=c.inArray(c(this).val(),d)});if(!d.length)a.selectedIndex=-1;return d}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,b,d,e){var f=a.nodeType;if(!a||3===f||8===f||2===f)return l;if(e&&b in c.attrFn)return c(a)[b](d);if(!("getAttribute"in a))return c.prop(a,b,d);var g,h;if(e=1!==f||!c.isXMLDoc(a))b=c.attrFix[b]||b,
(h=c.attrHooks[b])||(Ja.test(b)?h=Ka:H&&(h=H));if(d!==l){if(null===d)return c.removeAttr(a,b),l;if(h&&"set"in h&&e&&(g=h.set(a,d,b))!==l)return g;a.setAttribute(b,""+d);return d}if(h&&"get"in h&&e&&null!==(g=h.get(a,b)))return g;g=a.getAttribute(b);return null===g?l:g},removeAttr:function(a,b){var d;if(1===a.nodeType&&(b=c.attrFix[b]||b,c.attr(a,b,""),a.removeAttribute(b),Ja.test(b)&&(d=c.propFix[b]||b)in a))a[d]=!1},attrHooks:{type:{set:function(a,b){if(tb.test(a.nodeName)&&a.parentNode)c.error("type property can't be changed");
else if(!c.support.radioValue&&"radio"===b&&c.nodeName(a,"input")){var d=a.value;a.setAttribute("type",b);if(d)a.value=d;return b}}},value:{get:function(a,b){return H&&c.nodeName(a,"button")?H.get(a,b):b in a?a.value:null},set:function(a,b,d){if(H&&c.nodeName(a,"button"))return H.set(a,b,d);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",
frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,b,d){var e=a.nodeType;if(!a||3===e||8===e||2===e)return l;var f,g;if(1!==e||!c.isXMLDoc(a))b=c.propFix[b]||b,g=c.propHooks[b];return d!==l?g&&"set"in g&&(f=g.set(a,d,b))!==l?f:a[b]=d:g&&"get"in g&&null!==(f=g.get(a,b))?f:a[b]},propHooks:{tabIndex:{get:function(a){var b=a.getAttributeNode("tabindex");return b&&b.specified?parseInt(b.value,10):ub.test(a.nodeName)||vb.test(a.nodeName)&&a.href?0:l}}}});c.attrHooks.tabIndex=c.propHooks.tabIndex;
Ka={get:function(a,b){var d;return!0===c.prop(a,b)||(d=a.getAttributeNode(b))&&!1!==d.nodeValue?b.toLowerCase():l},set:function(a,b,d){!1===b?c.removeAttr(a,d):(b=c.propFix[d]||d,b in a&&(a[b]=!0),a.setAttribute(d,d.toLowerCase()));return d}};if(!c.support.getSetAttribute)H=c.valHooks.button={get:function(a,b){var c;return(c=a.getAttributeNode(b))&&""!==c.nodeValue?c.nodeValue:l},set:function(a,b,c){var e=a.getAttributeNode(c);e||(e=k.createAttribute(c),a.setAttributeNode(e));return e.nodeValue=b+
""}},c.each(["width","height"],function(a,b){c.attrHooks[b]=c.extend(c.attrHooks[b],{set:function(a,c){if(""===c)return a.setAttribute(b,"auto"),c}})});c.support.hrefNormalized||c.each(["href","src","width","height"],function(a,b){c.attrHooks[b]=c.extend(c.attrHooks[b],{get:function(a){a=a.getAttribute(b,2);return null===a?l:a}})});if(!c.support.style)c.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||l},set:function(a,b){return a.style.cssText=""+b}};if(!c.support.optSelected)c.propHooks.selected=
c.extend(c.propHooks.selected,{get:function(){return null}});c.support.checkOn||c.each(["radio","checkbox"],function(){c.valHooks[this]={get:function(a){return null===a.getAttribute("value")?"on":a.value}}});c.each(["radio","checkbox"],function(){c.valHooks[this]=c.extend(c.valHooks[this],{set:function(a,b){if(c.isArray(b))return a.checked=0<=c.inArray(c(a).val(),b)}})});var da=/\.(.*)$/,ma=/^(?:textarea|input|select)$/i,fb=/\./g,gb=/ /g,wb=/[^\w\s.|`]/g,xb=function(a){return a.replace(wb,"\\$&")};
c.event={add:function(a,b,d,e){if(!(3===a.nodeType||8===a.nodeType)){if(!1===d)d=C;else if(!d)return;var f,g;if(d.handler)f=d,d=f.handler;if(!d.guid)d.guid=c.guid++;if(g=c._data(a)){var h=g.events,i=g.handle;if(!h)g.events=h={};if(!i)g.handle=i=function(a){return"undefined"!==typeof c&&(!a||c.event.triggered!==a.type)?c.event.handle.apply(i.elem,arguments):l};i.elem=a;for(var b=b.split(" "),j,m=0,n;j=b[m++];){g=f?c.extend({},f):{handler:d,data:e};-1<j.indexOf(".")?(n=j.split("."),j=n.shift(),g.namespace=
n.slice(0).sort().join(".")):(n=[],g.namespace="");g.type=j;if(!g.guid)g.guid=d.guid;var k=h[j],o=c.event.special[j]||{};if(!k&&(k=h[j]=[],!o.setup||!1===o.setup.call(a,e,n,i)))a.addEventListener?a.addEventListener(j,i,!1):a.attachEvent&&a.attachEvent("on"+j,i);if(o.add&&(o.add.call(a,g),!g.handler.guid))g.handler.guid=d.guid;k.push(g);c.event.global[j]=!0}a=null}}},global:{},remove:function(a,b,d,e){if(!(3===a.nodeType||8===a.nodeType)){!1===d&&(d=C);var f,g,h=0,i,j,m,n,k,o,p=c.hasData(a)&&c._data(a),
s=p&&p.events;if(p&&s){if(b&&b.type)d=b.handler,b=b.type;if(!b||"string"===typeof b&&"."===b.charAt(0))for(f in b=b||"",s)c.event.remove(a,f+b);else{for(b=b.split(" ");f=b[h++];)if(n=f,i=0>f.indexOf("."),j=[],i||(j=f.split("."),f=j.shift(),m=RegExp("(^|\\.)"+c.map(j.slice(0).sort(),xb).join("\\.(?:.*\\.)?")+"(\\.|$)")),k=s[f])if(d){n=c.event.special[f]||{};for(g=e||0;g<k.length;g++)if(o=k[g],d.guid===o.guid){if(i||m.test(o.namespace))null==e&&k.splice(g--,1),n.remove&&n.remove.call(a,o);if(null!=
e)break}if(0===k.length||null!=e&&1===k.length)(!n.teardown||!1===n.teardown.call(a,j))&&c.removeEvent(a,f,p.handle),delete s[f]}else for(g=0;g<k.length;g++)if(o=k[g],i||m.test(o.namespace))c.event.remove(a,n,o.handler,g),k.splice(g--,1);if(c.isEmptyObject(s)){if(b=p.handle)b.elem=null;delete p.events;delete p.handle;c.isEmptyObject(p)&&c.removeData(a,l,!0)}}}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(a,b,d,e){var f=a.type||a,g=[],h;0<=f.indexOf("!")&&(f=f.slice(0,-1),h=
!0);0<=f.indexOf(".")&&(g=f.split("."),f=g.shift(),g.sort());if(d&&!c.event.customEvent[f]||c.event.global[f]){a="object"===typeof a?a[c.expando]?a:new c.Event(f,a):new c.Event(f);a.type=f;a.exclusive=h;a.namespace=g.join(".");a.namespace_re=RegExp("(^|\\.)"+g.join("\\.(?:.*\\.)?")+"(\\.|$)");if(e||!d)a.preventDefault(),a.stopPropagation();if(d){if(!(3===d.nodeType||8===d.nodeType)){a.result=l;a.target=d;b=null!=b?c.makeArray(b):[];b.unshift(a);g=d;e=0>f.indexOf(":")?"on"+f:"";do{h=c._data(g,"handle");
a.currentTarget=g;h&&h.apply(g,b);if(e&&c.acceptData(g)&&g[e]&&!1===g[e].apply(g,b))a.result=!1,a.preventDefault();g=g.parentNode||g.ownerDocument||g===a.target.ownerDocument&&o}while(g&&!a.isPropagationStopped());if(!a.isDefaultPrevented()){var i,g=c.event.special[f]||{};if((!g._default||!1===g._default.call(d.ownerDocument,a))&&!("click"===f&&c.nodeName(d,"a"))&&c.acceptData(d)){try{if(e&&d[f])(i=d[e])&&(d[e]=null),c.event.triggered=f,d[f]()}catch(j){}i&&(d[e]=i);c.event.triggered=l}}return a.result}}else c.each(c.cache,
function(){var d=this[c.expando];d&&d.events&&d.events[f]&&c.event.trigger(a,b,d.handle.elem)})}},handle:function(a){var a=c.event.fix(a||o.event),b=((c._data(this,"events")||{})[a.type]||[]).slice(0),d=!a.exclusive&&!a.namespace,e=Array.prototype.slice.call(arguments,0);e[0]=a;a.currentTarget=this;for(var f=0,g=b.length;f<g;f++){var h=b[f];if(d||a.namespace_re.test(h.namespace)){a.handler=h.handler;a.data=h.data;a.handleObj=h;h=h.handler.apply(this,e);if(h!==l)a.result=h,!1===h&&(a.preventDefault(),
a.stopPropagation());if(a.isImmediatePropagationStopped())break}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[c.expando])return a;for(var b=a,a=c.Event(b),d=this.props.length,
e;d;)e=this.props[--d],a[e]=b[e];if(!a.target)a.target=a.srcElement||k;if(3===a.target.nodeType)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(null==a.pageX&&null!=a.clientX)d=a.target.ownerDocument||k,b=d.documentElement,d=d.body,a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0),a.pageY=a.clientY+(b&&b.scrollTop||d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0);
if(null==a.which&&(null!=a.charCode||null!=a.keyCode))a.which=null!=a.charCode?a.charCode:a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==l)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,V(a.origType,a.selector),c.extend({},a,{handler:eb,guid:a.handler.guid}))},remove:function(a){c.event.remove(this,V(a.origType,a.selector),a)}},beforeunload:{setup:function(a,
b,d){if(c.isWindow(this))this.onbeforeunload=d},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};c.removeEvent=k.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)};c.Event=function(a,b){if(!this.preventDefault)return new c.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||!1===a.returnValue||a.getPreventDefault&&a.getPreventDefault()?
Q:C):this.type=a;b&&c.extend(this,b);this.timeStamp=c.now();this[c.expando]=!0};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Q;var a=this.originalEvent;if(a)a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=Q;var a=this.originalEvent;if(a)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Q;this.stopPropagation()},isDefaultPrevented:C,isPropagationStopped:C,
isImmediatePropagationStopped:C};var La=function(a){var b=a.relatedTarget,d=!1,e=a.type;a.type=a.data;if(b!==this&&(b&&(d=c.contains(this,b)),!d))c.event.handle.apply(this,arguments),a.type=e},Ma=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ma:La,a)},teardown:function(a){c.event.remove(this,b,a&&a.selector?Ma:La)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(c.nodeName(this,"form"))return!1;c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=c.nodeName(b,"input")||c.nodeName(b,"button")?b.type:"";("submit"===d||"image"===d)&&c(b).closest("form").length&&ta("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=c.nodeName(b,"input")||c.nodeName(b,"button")?b.type:"";("text"===d||"password"===d)&&c(b).closest("form").length&&13===a.keyCode&&ta("submit",this,arguments)})},teardown:function(){c.event.remove(this,
".specialSubmit")}};if(!c.support.changeBubbles){var K,Na=function(a){var b=c.nodeName(a,"input")?a.type:"",d=a.value;if("radio"===b||"checkbox"===b)d=a.checked;else if("select-multiple"===b)d=-1<a.selectedIndex?c.map(a.options,function(a){return a.selected}).join("-"):"";else if(c.nodeName(a,"select"))d=a.selectedIndex;return d},$=function(a,b){var d=a.target,e,f;if(ma.test(d.nodeName)&&!d.readOnly&&(e=c._data(d,"_change_data"),f=Na(d),("focusout"!==a.type||"radio"!==d.type)&&c._data(d,"_change_data",
f),!(e===l||f===e)))if(null!=e||f)a.type="change",a.liveFired=l,c.event.trigger(a,b,d)};c.event.special.change={filters:{focusout:$,beforedeactivate:$,click:function(a){var b=a.target,d=c.nodeName(b,"input")?b.type:"";("radio"===d||"checkbox"===d||c.nodeName(b,"select"))&&$.call(this,a)},keydown:function(a){var b=a.target,d=c.nodeName(b,"input")?b.type:"";(13===a.keyCode&&!c.nodeName(b,"textarea")||32===a.keyCode&&("checkbox"===d||"radio"===d)||"select-multiple"===d)&&$.call(this,a)},beforeactivate:function(a){a=
a.target;c._data(a,"_change_data",Na(a))}},setup:function(){if("file"===this.type)return!1;for(var a in K)c.event.add(this,a+".specialChange",K[a]);return ma.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return ma.test(this.nodeName)}};K=c.event.special.change.filters;K.focus=K.beforeactivate}c.support.focusinBubbles||c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(a){var d=c.event.fix(a);d.type=b;d.originalEvent={};c.event.trigger(d,null,d.target);
d.isDefaultPrevented()&&a.preventDefault()}var e=0;c.event.special[b]={setup:function(){0===e++&&k.addEventListener(a,d,!0)},teardown:function(){0===--e&&k.removeEventListener(a,d,!0)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(a,e,f){var g;if("object"===typeof a){for(var h in a)this[b](h,e,a[h],f);return this}if(2===arguments.length||!1===e)f=e,e=l;"one"===b?(g=function(a){c(this).unbind(a,g);return f.apply(this,arguments)},g.guid=f.guid||c.guid++):g=f;if("unload"===a&&"one"!==b)this.one(a,
e,f);else{h=0;for(var i=this.length;h<i;h++)c.event.add(this[h],a,g,e)}return this}});c.fn.extend({unbind:function(a,b){if("object"===typeof a&&!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var e=this.length;d<e;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,c,e){return this.live(b,c,e,a)},undelegate:function(a,b,c){return 0===arguments.length?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},
triggerHandler:function(a,b){if(this[0])return c.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,d=a.guid||c.guid++,e=0,f=function(d){var f=(c.data(this,"lastToggle"+a.guid)||0)%e;c.data(this,"lastToggle"+a.guid,f+1);d.preventDefault();return b[f].apply(this,arguments)||!1};for(f.guid=d;e<b.length;)b[e++].guid=d;return this.click(f)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var na={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};
c.each(["live","die"],function(a,b){c.fn[b]=function(a,e,f,g){var h=0,i,j,m=g||this.selector,n=g?this:c(this.context);if("object"===typeof a&&!a.preventDefault){for(i in a)n[b](i,e,a[i],m);return this}if("die"===b&&!a&&g&&"."===g.charAt(0))return n.unbind(g),this;if(!1===e||c.isFunction(e))f=e||C,e=l;for(a=(a||"").split(" ");null!=(g=a[h++]);)if(i=da.exec(g),j="",i&&(j=i[0],g=g.replace(da,"")),"hover"===g)a.push("mouseenter"+j,"mouseleave"+j);else if(i=g,na[g]?(a.push(na[g]+j),g+=j):g=(na[g]||g)+
j,"live"===b){j=0;for(var k=n.length;j<k;j++)c.event.add(n[j],"live."+V(g,m),{data:e,selector:m,handler:f,origType:g,origHandler:f,preType:i})}else n.unbind("live."+V(g,m),f);return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){c.fn[b]=function(a,c){null==c&&(c=a,a=null);return 0<arguments.length?this.bind(b,a,c):this.trigger(b)};
c.attrFn&&(c.attrFn[b]=!0)});(function(){function a(a,b,c,d,e,f){for(var e=0,g=d.length;e<g;e++){var h=d[e];if(h){for(var i=!1,h=h[a];h;){if(h.sizcache===c){i=d[h.sizset];break}if(1===h.nodeType&&!f)h.sizcache=c,h.sizset=e;if(h.nodeName.toLowerCase()===b){i=h;break}h=h[a]}d[e]=i}}}function b(a,b,c,d,e,f){for(var e=0,g=d.length;e<g;e++){var h=d[e];if(h){for(var i=!1,h=h[a];h;){if(h.sizcache===c){i=d[h.sizset];break}if(1===h.nodeType){if(!f)h.sizcache=c,h.sizset=e;if("string"!==typeof b){if(h===b){i=
!0;break}}else if(0<m.filter(b,[h]).length){i=h;break}}h=h[a]}d[e]=i}}}var d=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var m=function(a,b,c,e){var c=c||[],g=b=b||k;if(1!==b.nodeType&&9!==b.nodeType)return[];if(!a||"string"!==typeof a)return c;var h,i,j,l,p,U=!0,O=m.isXML(b),r=[],J=a;do if(d.exec(""),h=d.exec(J))if(J=
h[3],r.push(h[1]),h[2]){l=h[3];break}while(h);if(1<r.length&&o.exec(a))if(2===r.length&&n.relative[r[0]])i=u(r[0]+r[1],b);else for(i=n.relative[r[0]]?[b]:m(r.shift(),b);r.length;)a=r.shift(),n.relative[a]&&(a+=r.shift()),i=u(a,i);else if(!e&&1<r.length&&9===b.nodeType&&!O&&n.match.ID.test(r[0])&&!n.match.ID.test(r[r.length-1])&&(h=m.find(r.shift(),b,O),b=h.expr?m.filter(h.expr,h.set)[0]:h.set[0]),b){h=e?{expr:r.pop(),set:s(e)}:m.find(r.pop(),1===r.length&&("~"===r[0]||"+"===r[0])&&b.parentNode?b.parentNode:
b,O);i=h.expr?m.filter(h.expr,h.set):h.set;for(0<r.length?j=s(i):U=!1;r.length;)h=p=r.pop(),n.relative[p]?h=r.pop():p="",null==h&&(h=b),n.relative[p](j,h,O)}else j=[];j||(j=i);j||m.error(p||a);if("[object Array]"===f.call(j))if(U)if(b&&1===b.nodeType)for(a=0;null!=j[a];a++)j[a]&&(!0===j[a]||1===j[a].nodeType&&m.contains(b,j[a]))&&c.push(i[a]);else for(a=0;null!=j[a];a++)j[a]&&1===j[a].nodeType&&c.push(i[a]);else c.push.apply(c,j);else s(j,c);l&&(m(l,g,c,e),m.uniqueSort(c));return c};m.uniqueSort=
function(a){if(v&&(g=h,a.sort(v),g))for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1);return a};m.matches=function(a,b){return m(a,null,null,b)};m.matchesSelector=function(a,b){return 0<m(b,null,null,[a]).length};m.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=n.order.length;e<f;e++){var g,h=n.order[e];if(g=n.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if("\\"!==j.substr(j.length-1)&&(g[1]=(g[1]||"").replace(i,""),d=n.find[h](g,b,c),null!=d)){a=a.replace(n.match[h],"");break}}}d||
(d="undefined"!==typeof b.getElementsByTagName?b.getElementsByTagName("*"):[]);return{set:d,expr:a}};m.filter=function(a,b,c,d){for(var e,f,g=a,h=[],i=b,j=b&&b[0]&&m.isXML(b[0]);a&&b.length;){for(var k in n.filter)if(null!=(e=n.leftMatch[k].exec(a))&&e[2]){var o,r,p=n.filter[k];r=e[1];f=!1;e.splice(1,1);if("\\"!==r.substr(r.length-1)){i===h&&(h=[]);if(n.preFilter[k])if(e=n.preFilter[k](e,i,c,h,d,j)){if(!0===e)continue}else f=o=!0;if(e)for(var s=0;null!=(r=i[s]);s++)if(r){o=p(r,e,s,i);var B=d^!!o;
c&&null!=o?B?f=!0:i[s]=!1:B&&(h.push(r),f=!0)}if(o!==l){c||(i=h);a=a.replace(n.match[k],"");if(!f)return[];break}}}if(a===g)if(null==f)m.error(a);else break;g=a}return i};m.error=function(a){throw"Syntax error, unrecognized expression: "+a;};var n=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=
"string"===typeof b,d=c&&!j.test(b),c=c&&!d;d&&(b=b.toLowerCase());for(var d=0,e=a.length,f;d<e;d++)if(f=a[d]){for(;(f=f.previousSibling)&&1!==f.nodeType;);a[d]=c||f&&f.nodeName.toLowerCase()===b?f||!1:f===b}c&&m.filter(b,a,!0)},">":function(a,b){var c,d="string"===typeof b,e=0,f=a.length;if(d&&!j.test(b))for(b=b.toLowerCase();e<f;e++){if(c=a[e])c=c.parentNode,a[e]=c.nodeName.toLowerCase()===b?c:!1}else{for(;e<f;e++)(c=a[e])&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(c,
d,f){var g,h=e++,i=b;"string"===typeof d&&!j.test(d)&&(g=d=d.toLowerCase(),i=a);i("parentNode",d,h,c,g,f)},"~":function(c,d,f){var g,h=e++,i=b;"string"===typeof d&&!j.test(d)&&(g=d=d.toLowerCase(),i=a);i("previousSibling",d,h,c,g,f)}},find:{ID:function(a,b,c){if("undefined"!==typeof b.getElementById&&!c)return(a=b.getElementById(a[1]))&&a.parentNode?[a]:[]},NAME:function(a,b){if("undefined"!==typeof b.getElementsByName){for(var c=[],d=b.getElementsByName(a[1]),e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===
a[1]&&c.push(d[e]);return 0===c.length?null:c}},TAG:function(a,b){if("undefined"!==typeof b.getElementsByTagName)return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var f=0,g;null!=(g=b[f]);f++)g&&(e^(g.className&&0<=(" "+g.className+" ").replace(/[\t\n\r]/g," ").indexOf(a))?c||d.push(g):c&&(b[f]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if("nth"===
a[1]){a[2]||m.error(a[0]);a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even"===a[2]&&"2n"||"odd"===a[2]&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0;a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){b=a[1]=a[1].replace(i,"");!f&&n.attrMap[b]&&(a[1]=n.attrMap[b]);a[4]=(a[4]||a[5]||"").replace(i,"");"~="===a[2]&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(a,b,c,e,f){if("not"===a[1])if(1<(d.exec(a[3])||"").length||
/^\w/.test(a[3]))a[3]=m(a[3],null,null,b);else return a=m.filter(a[3],b,c,1^f),c||e.push.apply(e,a),!1;else if(n.match.POS.test(a[0])||n.match.CHILD.test(a[0]))return!0;return a},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return!1===a.disabled&&"hidden"!==a.type},disabled:function(a){return!0===a.disabled},checked:function(a){return!0===a.checked},selected:function(a){return!0===a.selected},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},
has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return"input"===a.nodeName.toLowerCase()&&"text"===c&&(b===c||null===b)},radio:function(a){return"input"===a.nodeName.toLowerCase()&&"radio"===a.type},checkbox:function(a){return"input"===a.nodeName.toLowerCase()&&"checkbox"===a.type},file:function(a){return"input"===a.nodeName.toLowerCase()&&"file"===a.type},password:function(a){return"input"===a.nodeName.toLowerCase()&&
"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return("input"===b||"button"===b)&&"submit"===a.type},image:function(a){return"input"===a.nodeName.toLowerCase()&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return("input"===b||"button"===b)&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===
a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return 0===b},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return 0===b%2},odd:function(a,b){return 1===b%2},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=n.filters[e];if(f)return f(a,c,b,d);if("contains"===e)return 0<=(a.textContent||a.innerText||m.getText([a])||"").indexOf(b[3]);
if("not"===e){b=b[3];c=0;for(d=b.length;c<d;c++)if(b[c]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case "only":case "first":for(;d=d.previousSibling;)if(1===d.nodeType)return!1;if("first"===c)return!0;d=a;case "last":for(;d=d.nextSibling;)if(1===d.nodeType)return!1;return!0;case "nth":var c=b[2],e=b[3];if(1===c&&0===e)return!0;var f=b[0],g=a.parentNode;if(g&&(g.sizcache!==f||!a.nodeIndex)){for(var h=0,d=g.firstChild;d;d=d.nextSibling)if(1===d.nodeType)d.nodeIndex=
++h;g.sizcache=f}d=a.nodeIndex-e;return 0===c?0===d:0===d%c&&0<=d/c}},ID:function(a,b){return 1===a.nodeType&&a.getAttribute("id")===b},TAG:function(a,b){return"*"===b&&1===a.nodeType||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return-1<(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)},ATTR:function(a,b){var c=b[1],c=n.attrHandle[c]?n.attrHandle[c](a):null!=a[c]?a[c]:a.getAttribute(c),d=c+"",e=b[2],f=b[4];return null==c?"!="===e:"="===e?d===f:"*="===e?0<=d.indexOf(f):"~="===e?0<=
(" "+d+" ").indexOf(f):!f?d&&!1!==c:"!="===e?d!==f:"^="===e?0===d.indexOf(f):"$="===e?d.substr(d.length-f.length)===f:"|="===e?d===f||d.substr(0,f.length+1)===f+"-":!1},POS:function(a,b,c,d){var e=n.setFilters[b[2]];if(e)return e(a,c,b,d)}}},o=n.match.POS,J=function(a,b){return"\\"+(b-0+1)},p;for(p in n.match)n.match[p]=RegExp(n.match[p].source+/(?![^\[]*\])(?![^\(]*\))/.source),n.leftMatch[p]=RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[p].source.replace(/\\(\d+)/g,J));var s=function(a,b){a=Array.prototype.slice.call(a,
0);return b?(b.push.apply(b,a),b):a};try{Array.prototype.slice.call(k.documentElement.childNodes,0)}catch(w){s=function(a,b){var c=0,d=b||[];if("[object Array]"===f.call(a))Array.prototype.push.apply(d,a);else if("number"===typeof a.length)for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var v,x;k.documentElement.compareDocumentPosition?v=function(a,b){return a===b?(g=!0,0):!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition?-1:1:a.compareDocumentPosition(b)&
4?-1:1}:(v=function(a,b){if(a===b)return g=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[];c=a.parentNode;d=b.parentNode;var h=c;if(c===d)return x(a,b);if(c){if(!d)return 1}else return-1;for(;h;)e.unshift(h),h=h.parentNode;for(h=d;h;)f.unshift(h),h=h.parentNode;c=e.length;d=f.length;for(h=0;h<c&&h<d;h++)if(e[h]!==f[h])return x(e[h],f[h]);return h===c?x(a,f[h],-1):x(e[h],b,1)},x=function(a,b,c){if(a===b)return c;for(a=a.nextSibling;a;){if(a===b)return-1;a=
a.nextSibling}return 1});m.getText=function(a){for(var b="",c,d=0;a[d];d++)c=a[d],3===c.nodeType||4===c.nodeType?b+=c.nodeValue:8!==c.nodeType&&(b+=m.getText(c.childNodes));return b};(function(){var a=k.createElement("div"),b="script"+(new Date).getTime(),c=k.documentElement;a.innerHTML="<a name='"+b+"'/>";c.insertBefore(a,c.firstChild);if(k.getElementById(b))n.find.ID=function(a,b,c){if("undefined"!==typeof b.getElementById&&!c)return(b=b.getElementById(a[1]))?b.id===a[1]||"undefined"!==typeof b.getAttributeNode&&
b.getAttributeNode("id").nodeValue===a[1]?[b]:l:[]},n.filter.ID=function(a,b){var c="undefined"!==typeof a.getAttributeNode&&a.getAttributeNode("id");return 1===a.nodeType&&c&&c.nodeValue===b};c.removeChild(a);c=a=null})();(function(){var a=k.createElement("div");a.appendChild(k.createComment(""));if(0<a.getElementsByTagName("*").length)n.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if("*"===a[1]){for(var d=[],e=0;c[e];e++)1===c[e].nodeType&&d.push(c[e]);c=d}return c};a.innerHTML="<a href='#'></a>";
if(a.firstChild&&"undefined"!==typeof a.firstChild.getAttribute&&"#"!==a.firstChild.getAttribute("href"))n.attrHandle.href=function(a){return a.getAttribute("href",2)};a=null})();k.querySelectorAll&&function(){var a=m,b=k.createElement("div");b.innerHTML="<p class='TEST'></p>";if(!(b.querySelectorAll&&0===b.querySelectorAll(".TEST").length)){m=function(b,c,d,e){c=c||k;if(!e&&!m.isXML(c)){var f=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(f&&(1===c.nodeType||9===c.nodeType)){if(f[1])return s(c.getElementsByTagName(b),
d);if(f[2]&&n.find.CLASS&&c.getElementsByClassName)return s(c.getElementsByClassName(f[2]),d)}if(9===c.nodeType){if("body"===b&&c.body)return s([c.body],d);if(f&&f[3]){var g=c.getElementById(f[3]);if(g&&g.parentNode){if(g.id===f[3])return s([g],d)}else return s([],d)}try{return s(c.querySelectorAll(b),d)}catch(h){}}else if(1===c.nodeType&&"object"!==c.nodeName.toLowerCase()){var f=c,i=(g=c.getAttribute("id"))||"__sizzle__",j=c.parentNode,l=/^\s*[+~]/.test(b);g?i=i.replace(/'/g,"\\$&"):c.setAttribute("id",
i);if(l&&j)c=c.parentNode;try{if(!l||j)return s(c.querySelectorAll("[id='"+i+"'] "+b),d)}catch(q){}finally{g||f.removeAttribute("id")}}}return a(b,c,d,e)};for(var c in a)m[c]=a[c];b=null}}();(function(){var a=k.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var c=!b.call(k.createElement("div"),"div"),d=!1;try{b.call(k.documentElement,"[test!='']:sizzle")}catch(e){d=!0}m.matchesSelector=function(a,e){e=e.replace(/\=\s*([^'"\]]*)\s*\]/g,
"='$1']");if(!m.isXML(a))try{if(d||!n.match.PSEUDO.test(e)&&!/!=/.test(e)){var f=b.call(a,e);if(f||!c||a.document&&11!==a.document.nodeType)return f}}catch(g){}return 0<m(e,null,null,[a]).length}}})();(function(){var a=k.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&0!==a.getElementsByClassName("e").length&&(a.lastChild.className="e",1!==a.getElementsByClassName("e").length))n.order.splice(1,0,"CLASS"),n.find.CLASS=function(a,b,
c){if("undefined"!==typeof b.getElementsByClassName&&!c)return b.getElementsByClassName(a[1])},a=null})();m.contains=k.documentElement.contains?function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:k.documentElement.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:function(){return!1};m.isXML=function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?"HTML"!==a.nodeName:!1};var u=function(a,b){for(var c,d=[],e="",f=b.nodeType?[b]:b;c=n.match.PSEUDO.exec(a);)e+=
c[0],a=a.replace(n.match.PSEUDO,"");a=n.relative[a]?a+"*":a;c=0;for(var g=f.length;c<g;c++)m(a,f[c],d);return m.filter(e,d)};c.find=m;c.expr=m.selectors;c.expr[":"]=c.expr.filters;c.unique=m.uniqueSort;c.text=m.getText;c.isXMLDoc=m.isXML;c.contains=m.contains})();var yb=/Until$/,zb=/^(?:parents|prevUntil|prevAll)/,Ab=/,/,hb=/^.[^:#\[\.,]*$/,Bb=Array.prototype.slice,Oa=c.expr.match.POS,Cb={children:!0,contents:!0,next:!0,prev:!0};c.fn.extend({find:function(a){var b=this,d,e;if("string"!==typeof a)return c(a).filter(function(){for(d=
0,e=b.length;d<e;d++)if(c.contains(b[d],this))return!0});var f=this.pushStack("","find",a),g,h,i;for(d=0,e=this.length;d<e;d++)if(g=f.length,c.find(a,this[d],f),0<d)for(h=g;h<f.length;h++)for(i=0;i<g;i++)if(f[i]===f[h]){f.splice(h--,1);break}return f},has:function(a){var b=c(a);return this.filter(function(){for(var a=0,e=b.length;a<e;a++)if(c.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(ua(this,a,!1),"not",a)},filter:function(a){return this.pushStack(ua(this,a,!0),"filter",
a)},is:function(a){return!!a&&("string"===typeof a?0<c.filter(a,this).length:0<this.filter(a).length)},closest:function(a,b){var d=[],e,f,g=this[0];if(c.isArray(a)){var h,i={},j=1;if(g&&a.length){for(e=0,f=a.length;e<f;e++)h=a[e],i[h]||(i[h]=Oa.test(h)?c(h,b||this.context):h);for(;g&&g.ownerDocument&&g!==b;){for(h in i)e=i[h],(e.jquery?-1<e.index(g):c(g).is(e))&&d.push({selector:h,elem:g,level:j});g=g.parentNode;j++}}return d}h=Oa.test(a)||"string"!==typeof a?c(a,b||this.context):0;for(e=0,f=this.length;e<
f;e++)for(g=this[e];g;)if(h?-1<h.index(g):c.find.matchesSelector(g,a)){d.push(g);break}else if(g=g.parentNode,!g||!g.ownerDocument||g===b||11===g.nodeType)break;d=1<d.length?c.unique(d):d;return this.pushStack(d,"closest",a)},index:function(a){return!a?this[0]&&this[0].parentNode?this.prevAll().length:-1:"string"===typeof a?c.inArray(this[0],c(a)):c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var d="string"===typeof a?c(a,b):c.makeArray(a&&a.nodeType?[a]:a),e=c.merge(this.get(),d);return this.pushStack(!d[0]||
!d[0].parentNode||11===d[0].parentNode.nodeType||!e[0]||!e[0].parentNode||11===e[0].parentNode.nodeType?e:c.unique(e))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},
prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,e){var f=c.map(this,b,d),g=Bb.call(arguments);yb.test(a)||
(e=d);e&&"string"===typeof e&&(f=c.filter(e,f));f=1<this.length&&!Cb[a]?c.unique(f):f;if((1<this.length||Ab.test(e))&&zb.test(a))f=f.reverse();return this.pushStack(f,a,g.join(","))}});c.extend({filter:function(a,b,d){d&&(a=":not("+a+")");return 1===b.length?c.find.matchesSelector(b[0],a)?[b[0]]:[]:c.find.matches(a,b)},dir:function(a,b,d){for(var e=[],a=a[b];a&&9!==a.nodeType&&(d===l||1!==a.nodeType||!c(a).is(d));)1===a.nodeType&&e.push(a),a=a[b];return e},nth:function(a,b,c){for(var b=b||1,e=0;a&&
!(1===a.nodeType&&++e===b);a=a[c]);return a},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}});var Db=/ jQuery\d+="(?:\d+|null)"/g,oa=/^\s+/,Pa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Qa=/<([\w:]+)/,Eb=/<tbody/i,Fb=/<|&#?\w+;/,Ra=/<(?:script|object|embed|option|style)/i,Sa=/checked\s*(?:[^=]|=\s*.checked.)/i,Gb=/\/(java|ecma)script/i,jb=/^\s*<!(?:\[CDATA\[|\-\-)/,w={option:[1,"<select multiple='multiple'>","</select>"],
legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};w.optgroup=w.option;w.tbody=w.tfoot=w.colgroup=w.caption=w.thead;w.th=w.td;if(!c.support.htmlSerialize)w._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){return c.isFunction(a)?this.each(function(b){var d=c(this);
d.text(a.call(this,b,d.text()))}):"object"!==typeof a&&a!==l?this.empty().append((this[0]&&this[0].ownerDocument||k).createTextNode(a)):c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapAll(a.call(this,b))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return c.isFunction(a)?
this.each(function(b){c(this).wrapInner(a.call(this,b))}):this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){1===this.nodeType&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){1===
this.nodeType&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,
"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,e;null!=(e=this[d]);d++)if(!a||c.filter(a,[e]).length)!b&&1===e.nodeType&&(c.cleanData(e.getElementsByTagName("*")),c.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;null!=(b=this[a]);a++)for(1===b.nodeType&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);return this},clone:function(a,b){a=null==a?!1:a;b=null==
b?a:b;return this.map(function(){return c.clone(this,a,b)})},html:function(a){if(a===l)return this[0]&&1===this[0].nodeType?this[0].innerHTML.replace(Db,""):null;if("string"===typeof a&&!Ra.test(a)&&(c.support.leadingWhitespace||!oa.test(a))&&!w[(Qa.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Pa,"<$1></$2>");try{for(var b=0,d=this.length;b<d;b++)if(1===this[b].nodeType)c.cleanData(this[b].getElementsByTagName("*")),this[b].innerHTML=a}catch(e){this.empty().append(a)}}else c.isFunction(a)?this.each(function(b){var d=
c(this);d.html(a.call(this,b,d.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),e=d.html();d.replaceWith(a.call(this,b,e))});"string"!==typeof a&&(a=c(a).detach());return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}return this.length?this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,
!0)},domManip:function(a,b,d){var e,f,g,h=a[0],i=[];if(!c.support.checkClone&&3===arguments.length&&"string"===typeof h&&Sa.test(h))return this.each(function(){c(this).domManip(a,b,d,!0)});if(c.isFunction(h))return this.each(function(e){var f=c(this);a[0]=h.call(this,e,b?f.html():l);f.domManip(a,b,d)});if(this[0]){e=h&&h.parentNode;e=c.support.parentNode&&e&&11===e.nodeType&&e.childNodes.length===this.length?{fragment:e}:c.buildFragment(a,this,i);g=e.fragment;if(f=1===g.childNodes.length?g=g.firstChild:
g.firstChild){b=b&&c.nodeName(f,"tr");f=0;for(var j=this.length,m=j-1;f<j;f++)d.call(b?c.nodeName(this[f],"table")?this[f].getElementsByTagName("tbody")[0]||this[f].appendChild(this[f].ownerDocument.createElement("tbody")):this[f]:this[f],e.cacheable||1<j&&f<m?c.clone(g,!0,!0):g)}i.length&&c.each(i,ib)}return this}});c.buildFragment=function(a,b,d){var e,f,g,h;b&&b[0]&&(h=b[0].ownerDocument||b[0]);h.createDocumentFragment||(h=k);if(1===a.length&&"string"===typeof a[0]&&512>a[0].length&&h===k&&"<"===
a[0].charAt(0)&&!Ra.test(a[0])&&(c.support.checkClone||!Sa.test(a[0])))f=!0,(g=c.fragments[a[0]])&&1!==g&&(e=g);e||(e=h.createDocumentFragment(),c.clean(a,h,e,d));f&&(c.fragments[a[0]]=g?e:1);return{fragment:e,cacheable:f}};c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var e=[],d=c(d),f=1===this.length&&this[0].parentNode;if(f&&11===f.nodeType&&1===f.childNodes.length&&1===d.length)return d[b](this[0]),
this;for(var f=0,g=d.length;f<g;f++){var h=(0<f?this.clone(!0):this).get();c(d[f])[b](h);e=e.concat(h)}return this.pushStack(e,a,d.selector)}});c.extend({clone:function(a,b,d){var e=a.cloneNode(!0),f,g,h;if((!c.support.noCloneEvent||!c.support.noCloneChecked)&&(1===a.nodeType||11===a.nodeType)&&!c.isXMLDoc(a)){wa(a,e);f=W(a);g=W(e);for(h=0;f[h];++h)g[h]&&wa(f[h],g[h])}if(b&&(va(a,e),d)){f=W(a);g=W(e);for(h=0;f[h];++h)va(f[h],g[h])}return e},clean:function(a,b,d,e){b=b||k;"undefined"===typeof b.createElement&&
(b=b.ownerDocument||b[0]&&b[0].ownerDocument||k);for(var f=[],g,h=0,i;null!=(i=a[h]);h++)if("number"===typeof i&&(i+=""),i){if("string"===typeof i)if(Fb.test(i)){i=i.replace(Pa,"<$1></$2>");g=(Qa.exec(i)||["",""])[1].toLowerCase();var j=w[g]||w._default,m=j[0],l=b.createElement("div");for(l.innerHTML=j[1]+i+j[2];m--;)l=l.lastChild;if(!c.support.tbody){m=Eb.test(i);j="table"===g&&!m?l.firstChild&&l.firstChild.childNodes:"<table>"===j[1]&&!m?l.childNodes:[];for(g=j.length-1;0<=g;--g)c.nodeName(j[g],
"tbody")&&!j[g].childNodes.length&&j[g].parentNode.removeChild(j[g])}!c.support.leadingWhitespace&&oa.test(i)&&l.insertBefore(b.createTextNode(oa.exec(i)[0]),l.firstChild);i=l.childNodes}else i=b.createTextNode(i);var o;if(!c.support.appendChecked)if(i[0]&&"number"===typeof(o=i.length))for(g=0;g<o;g++)ya(i[g]);else ya(i);i.nodeType?f.push(i):f=c.merge(f,i)}if(d){a=function(a){return!a.type||Gb.test(a.type)};for(h=0;f[h];h++)e&&c.nodeName(f[h],"script")&&(!f[h].type||"text/javascript"===f[h].type.toLowerCase())?
e.push(f[h].parentNode?f[h].parentNode.removeChild(f[h]):f[h]):(1===f[h].nodeType&&(b=c.grep(f[h].getElementsByTagName("script"),a),f.splice.apply(f,[h+1,0].concat(b))),d.appendChild(f[h]))}return f},cleanData:function(a){for(var b,d,e=c.cache,f=c.expando,g=c.event.special,h=c.support.deleteExpando,i=0,j;null!=(j=a[i]);i++)if(!j.nodeName||!c.noData[j.nodeName.toLowerCase()])if(d=j[c.expando]){if((b=e[d]&&e[d][f])&&b.events){for(var m in b.events)g[m]?c.event.remove(j,m):c.removeEvent(j,m,b.handle);
if(b.handle)b.handle.elem=null}h?delete j[c.expando]:j.removeAttribute&&j.removeAttribute(c.expando);delete e[d]}}});var pa=/alpha\([^)]*\)/i,Hb=/opacity=([^)]*)/,Ib=/([A-Z]|^ms)/g,Ta=/^-?\d+(?:px)?$/i,Jb=/^-?\d/,Kb=/^([\-+])=([\-+.\de]+)/,Lb={position:"absolute",visibility:"hidden",display:"block"},kb=["Left","Right"],lb=["Top","Bottom"],F,Ua,Va;c.fn.css=function(a,b){return 2===arguments.length&&b===l?this:c.access(this,a,b,!0,function(a,b,f){return f!==l?c.style(a,b,f):c.css(a,b)})};c.extend({cssHooks:{opacity:{get:function(a,
b){if(b){var c=F(a,"opacity","opacity");return""===c?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":c.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,d,e){if(a&&!(3===a.nodeType||8===a.nodeType||!a.style)){var f,g=c.camelCase(b),h=a.style,i=c.cssHooks[g],b=c.cssProps[g]||g;if(d!==l){e=typeof d;if("string"===e&&(f=Kb.exec(d)))d=+(f[1]+1)*+f[2]+parseFloat(c.css(a,b)),e="number";if(!(null==
d||"number"===e&&isNaN(d)))if("number"===e&&!c.cssNumber[g]&&(d+="px"),!i||!("set"in i)||(d=i.set(a,d))!==l)try{h[b]=d}catch(j){}}else return i&&"get"in i&&(f=i.get(a,!1,e))!==l?f:h[b]}},css:function(a,b,d){var e,f,b=c.camelCase(b);f=c.cssHooks[b];b=c.cssProps[b]||b;"cssFloat"===b&&(b="float");if(f&&"get"in f&&(e=f.get(a,!0,d))!==l)return e;if(F)return F(a,b)},swap:function(a,b,c){var e={},f;for(f in b)e[f]=a.style[f],a.style[f]=b[f];c.call(a);for(f in b)a.style[f]=e[f]}});c.curCSS=c.css;c.each(["height",
"width"],function(a,b){c.cssHooks[b]={get:function(a,e,f){var g;if(e){if(0!==a.offsetWidth)return za(a,b,f);c.swap(a,Lb,function(){g=za(a,b,f)});return g}},set:function(a,b){if(Ta.test(b)){if(b=parseFloat(b),0<=b)return b+"px"}else return b}}});if(!c.support.opacity)c.cssHooks.opacity={get:function(a,b){return Hb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var d=a.style,e=a.currentStyle,f=c.isNaN(b)?"":"alpha(opacity="+
100*b+")",g=e&&e.filter||d.filter||"";d.zoom=1;if(1<=b&&""===c.trim(g.replace(pa,""))&&(d.removeAttribute("filter"),e&&!e.filter))return;d.filter=pa.test(g)?g.replace(pa,f):g+" "+f}};c(function(){if(!c.support.reliableMarginRight)c.cssHooks.marginRight={get:function(a,b){var d;c.swap(a,{display:"inline-block"},function(){d=b?F(a,"margin-right","marginRight"):a.style.marginRight});return d}}});k.defaultView&&k.defaultView.getComputedStyle&&(Ua=function(a,b){var d,e,b=b.replace(Ib,"-$1").toLowerCase();
if(!(e=a.ownerDocument.defaultView))return l;if(e=e.getComputedStyle(a,null))d=e.getPropertyValue(b),""===d&&!c.contains(a.ownerDocument.documentElement,a)&&(d=c.style(a,b));return d});k.documentElement.currentStyle&&(Va=function(a,b){var c,e=a.currentStyle&&a.currentStyle[b],f=a.runtimeStyle&&a.runtimeStyle[b],g=a.style;if(!Ta.test(e)&&Jb.test(e)){c=g.left;if(f)a.runtimeStyle.left=a.currentStyle.left;g.left="fontSize"===b?"1em":e||0;e=g.pixelLeft+"px";g.left=c;if(f)a.runtimeStyle.left=f}return""===
e?"auto":e});F=Ua||Va;if(c.expr&&c.expr.filters)c.expr.filters.hidden=function(a){var b=a.offsetHeight;return 0===a.offsetWidth&&0===b||!c.support.reliableHiddenOffsets&&"none"===(a.style.display||c.css(a,"display"))},c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)};var Mb=/%20/g,mb=/\[\]$/,Wa=/\r?\n/g,Nb=/#.*$/,Ob=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,Pb=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Qb=/^(?:GET|HEAD)$/,
Rb=/^\/\//,Xa=/\?/,Sb=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Tb=/^(?:select|textarea)/i,Ba=/\s+/,Ub=/([?&])_=[^&]*/,Ya=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,Za=c.fn.load,ea={},$a={},I,D,ab=["*/"]+["*"];try{I=pb.href}catch($b){I=k.createElement("a"),I.href="",I=I.href}D=Ya.exec(I.toLowerCase())||[];c.fn.extend({load:function(a,b,d){if("string"!==typeof a&&Za)return Za.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(0<=e)var f=a.slice(e,a.length),
a=a.slice(0,e);e="GET";b&&(c.isFunction(b)?(d=b,b=l):"object"===typeof b&&(b=c.param(b,c.ajaxSettings.traditional),e="POST"));var g=this;c.ajax({url:a,type:e,dataType:"html",data:b,complete:function(a,b,e){e=a.responseText;a.isResolved()&&(a.done(function(a){e=a}),g.html(f?c("<div>").append(e.replace(Sb,"")).find(f):e));d&&g.each(d,[e,b,a])}});return this},serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):
this}).filter(function(){return this.name&&!this.disabled&&(this.checked||Tb.test(this.nodeName)||Pb.test(this.type))}).map(function(a,b){var d=c(this).val();return null==d?null:c.isArray(d)?c.map(d,function(a){return{name:b.name,value:a.replace(Wa,"\r\n")}}):{name:b.name,value:d.replace(Wa,"\r\n")}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){c.fn[b]=function(a){return this.bind(b,a)}});c.each(["get","post"],function(a,b){c[b]=function(a,
e,f,g){c.isFunction(e)&&(g=g||f,f=e,e=l);return c.ajax({type:b,url:a,data:e,success:f,dataType:g})}});c.extend({getScript:function(a,b){return c.get(a,l,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},ajaxSetup:function(a,b){b?Ca(a,c.ajaxSettings):(b=a,a=c.ajaxSettings);Ca(a,b);return a},ajaxSettings:{url:I,isLocal:/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(D[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",
html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":ab},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":o.String,"text html":!0,"text json":c.parseJSON,"text xml":c.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Aa(ea),ajaxTransport:Aa($a),ajax:function(a,b){function d(a,b,d,k){if(2!==x){x=2;w&&clearTimeout(w);s=l;J=k||"";q.readyState=0<a?4:0;var n,o,p,k=b;if(d){var t=e,r=q,v=t.contents,
B=t.dataTypes,C=t.responseFields,A,y,z,H;for(y in C)y in d&&(r[C[y]]=d[y]);for(;"*"===B[0];)B.shift(),A===l&&(A=t.mimeType||r.getResponseHeader("content-type"));if(A)for(y in v)if(v[y]&&v[y].test(A)){B.unshift(y);break}if(B[0]in d)z=B[0];else{for(y in d){if(!B[0]||t.converters[y+" "+B[0]]){z=y;break}H||(H=y)}z=z||H}z?(z!==B[0]&&B.unshift(z),d=d[z]):d=void 0}else d=l;if(200<=a&&300>a||304===a){if(e.ifModified){if(A=q.getResponseHeader("Last-Modified"))c.lastModified[m]=A;if(A=q.getResponseHeader("Etag"))c.etag[m]=
A}if(304===a)k="notmodified",n=!0;else try{A=e;A.dataFilter&&(d=A.dataFilter(d,A.dataType));var I=A.dataTypes;y={};var D,F,L=I.length,G,M=I[0],E,K,N,P,S;for(D=1;D<L;D++){if(1===D)for(F in A.converters)"string"===typeof F&&(y[F.toLowerCase()]=A.converters[F]);E=M;M=I[D];if("*"===M)M=E;else if("*"!==E&&E!==M){K=E+" "+M;N=y[K]||y["* "+M];if(!N)for(P in S=l,y)if(G=P.split(" "),G[0]===E||"*"===G[0])if(S=y[G[1]+" "+M]){P=y[P];!0===P?N=S:!0===S&&(N=P);break}!N&&!S&&c.error("No conversion from "+K.replace(" ",
" to "));!0!==N&&(d=N?N(d):S(P(d)))}}o=d;k="success";n=!0}catch(Q){k="parsererror",p=Q}}else if(p=k,!k||a)k="error",0>a&&(a=0);q.status=a;q.statusText=""+(b||k);n?h.resolveWith(f,[o,k,q]):h.rejectWith(f,[q,k,p]);q.statusCode(j);j=l;u&&g.trigger("ajax"+(n?"Success":"Error"),[q,e,n?o:p]);i.resolveWith(f,[q,k]);u&&(g.trigger("ajaxComplete",[q,e]),--c.active||c.event.trigger("ajaxStop"))}}"object"===typeof a&&(b=a,a=l);var b=b||{},e=c.ajaxSetup({},b),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof c)?
c(f):c.event,h=c.Deferred(),i=c._Deferred(),j=e.statusCode||{},m,k={},o={},J,p,s,w,v,x=0,u,t,q={readyState:0,setRequestHeader:function(a,b){if(!x){var c=a.toLowerCase(),a=o[c]=o[c]||a;k[a]=b}return this},getAllResponseHeaders:function(){return 2===x?J:null},getResponseHeader:function(a){var b;if(2===x){if(!p)for(p={};b=Ob.exec(J);)p[b[1].toLowerCase()]=b[2];b=p[a.toLowerCase()]}return b===l?null:b},overrideMimeType:function(a){if(!x)e.mimeType=a;return this},abort:function(a){a=a||"abort";s&&s.abort(a);
d(0,a);return this}};h.promise(q);q.success=q.done;q.error=q.fail;q.complete=i.done;q.statusCode=function(a){if(a){var b;if(2>x)for(b in a)j[b]=[j[b],a[b]];else b=a[q.status],q.then(b,b)}return this};e.url=((a||e.url)+"").replace(Nb,"").replace(Rb,D[1]+"//");e.dataTypes=c.trim(e.dataType||"*").toLowerCase().split(Ba);if(null==e.crossDomain)v=Ya.exec(e.url.toLowerCase()),e.crossDomain=!(!v||!(v[1]!=D[1]||v[2]!=D[2]||(v[3]||("http:"===v[1]?80:443))!=(D[3]||("http:"===D[1]?80:443))));if(e.data&&e.processData&&
"string"!==typeof e.data)e.data=c.param(e.data,e.traditional);X(ea,e,b,q);if(2===x)return!1;u=e.global;e.type=e.type.toUpperCase();e.hasContent=!Qb.test(e.type);u&&0===c.active++&&c.event.trigger("ajaxStart");if(!e.hasContent&&(e.data&&(e.url+=(Xa.test(e.url)?"&":"?")+e.data,delete e.data),m=e.url,!1===e.cache)){v=c.now();var C=e.url.replace(Ub,"$1_="+v);e.url=C+(C===e.url?(Xa.test(e.url)?"&":"?")+"_="+v:"")}(e.data&&e.hasContent&&!1!==e.contentType||b.contentType)&&q.setRequestHeader("Content-Type",
e.contentType);e.ifModified&&(m=m||e.url,c.lastModified[m]&&q.setRequestHeader("If-Modified-Since",c.lastModified[m]),c.etag[m]&&q.setRequestHeader("If-None-Match",c.etag[m]));q.setRequestHeader("Accept",e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+("*"!==e.dataTypes[0]?", "+ab+"; q=0.01":""):e.accepts["*"]);for(t in e.headers)q.setRequestHeader(t,e.headers[t]);if(e.beforeSend&&(!1===e.beforeSend.call(f,q,e)||2===x))return q.abort(),!1;for(t in{success:1,error:1,complete:1})q[t](e[t]);
if(s=X($a,e,b,q)){q.readyState=1;u&&g.trigger("ajaxSend",[q,e]);e.async&&0<e.timeout&&(w=setTimeout(function(){q.abort("timeout")},e.timeout));try{x=1,s.send(k,d)}catch(z){2>x?d(-1,z):c.error(z)}}else d(-1,"No Transport");return q},param:function(a,b){var d=[],e=function(a,b){b=c.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(b===l)b=c.ajaxSettings.traditional;if(c.isArray(a)||a.jquery&&!c.isPlainObject(a))c.each(a,function(){e(this.name,this.value)});else for(var f in a)fa(f,
a[f],b,e);return d.join("&").replace(Mb,"+")}});c.extend({active:0,lastModified:{},etag:{}});var Vb=c.now(),aa=/(\=)\?(&|$)|\?\?/i;c.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return c.expando+"_"+Vb++}});c.ajaxPrefilter("json jsonp",function(a,b,d){b="application/x-www-form-urlencoded"===a.contentType&&"string"===typeof a.data;if("jsonp"===a.dataTypes[0]||!1!==a.jsonp&&(aa.test(a.url)||b&&aa.test(a.data))){var e,f=a.jsonpCallback=c.isFunction(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,
g=o[f],h=a.url,i=a.data,j="$1"+f+"$2";!1!==a.jsonp&&(h=h.replace(aa,j),a.url===h&&(b&&(i=i.replace(aa,j)),a.data===i&&(h+=(/\?/.test(h)?"&":"?")+a.jsonp+"="+f)));a.url=h;a.data=i;o[f]=function(a){e=[a]};d.always(function(){o[f]=g;if(e&&c.isFunction(g))o[f](e[0])});a.converters["script json"]=function(){e||c.error(f+" was not called");return e[0]};a.dataTypes[0]="json";return"script"}});c.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){c.globalEval(a);return a}}});c.ajaxPrefilter("script",function(a){if(a.cache===l)a.cache=!1;if(a.crossDomain)a.type="GET",a.global=!1});c.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=k.head||k.getElementsByTagName("head")[0]||k.documentElement;return{send:function(e,f){b=k.createElement("script");b.async="async";if(a.scriptCharset)b.charset=a.scriptCharset;b.src=a.url;b.onload=b.onreadystatechange=function(a,
e){if(e||!b.readyState||/loaded|complete/.test(b.readyState))b.onload=b.onreadystatechange=null,c&&b.parentNode&&c.removeChild(b),b=l,e||f(200,"success")};c.insertBefore(b,c.firstChild)},abort:function(){if(b)b.onload(0,1)}}}});var qa=o.ActiveXObject?function(){for(var a in E)E[a](0,1)}:!1,Wb=0,E;c.ajaxSettings.xhr=o.ActiveXObject?function(){var a;if(!(a=!this.isLocal&&Da()))a:{try{a=new o.ActiveXObject("Microsoft.XMLHTTP");break a}catch(b){}a=void 0}return a}:Da;(function(a){c.extend(c.support,{ajax:!!a,
cors:!!a&&"withCredentials"in a})})(c.ajaxSettings.xhr());c.support.ajax&&c.ajaxTransport(function(a){if(!a.crossDomain||c.support.cors){var b;return{send:function(d,e){var f=a.xhr(),g,h;a.username?f.open(a.type,a.url,a.async,a.username,a.password):f.open(a.type,a.url,a.async);if(a.xhrFields)for(h in a.xhrFields)f[h]=a.xhrFields[h];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType);!a.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");try{for(h in d)f.setRequestHeader(h,
d[h])}catch(i){}f.send(a.hasContent&&a.data||null);b=function(d,h){var i,k,o,p,s;try{if(b&&(h||4===f.readyState)){b=l;if(g)f.onreadystatechange=c.noop,qa&&delete E[g];if(h)4!==f.readyState&&f.abort();else{i=f.status;o=f.getAllResponseHeaders();p={};if((s=f.responseXML)&&s.documentElement)p.xml=s;p.text=f.responseText;try{k=f.statusText}catch(u){k=""}!i&&a.isLocal&&!a.crossDomain?i=p.text?200:404:1223===i&&(i=204)}}}catch(v){h||e(-1,v)}p&&e(i,k,p,o)};!a.async||4===f.readyState?b():(g=++Wb,qa&&(E||
(E={},c(o).unload(qa)),E[g]=b),f.onreadystatechange=b)},abort:function(){b&&b(0,1)}}}});var ga={},u,G,Xb=/^(?:toggle|show|hide)$/,Yb=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,ba,Fa=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],Y;c.fn.extend({show:function(a,b,d){if(a||0===a)return this.animate(L("show",3),a,b,d);for(var d=0,e=this.length;d<e;d++)if(a=this[d],a.style){b=a.style.display;if(!c._data(a,"olddisplay")&&
"none"===b)b=a.style.display="";""===b&&"none"===c.css(a,"display")&&c._data(a,"olddisplay",Ga(a.nodeName))}for(d=0;d<e;d++)if(a=this[d],a.style&&(b=a.style.display,""===b||"none"===b))a.style.display=c._data(a,"olddisplay")||"";return this},hide:function(a,b,d){if(a||0===a)return this.animate(L("hide",3),a,b,d);a=0;for(b=this.length;a<b;a++)this[a].style&&(d=c.css(this[a],"display"),"none"!==d&&!c._data(this[a],"olddisplay")&&c._data(this[a],"olddisplay",d));for(a=0;a<b;a++)if(this[a].style)this[a].style.display=
"none";return this},_toggle:c.fn.toggle,toggle:function(a,b,d){var e="boolean"===typeof a;c.isFunction(a)&&c.isFunction(b)?this._toggle.apply(this,arguments):null==a||e?this.each(function(){var b=e?a:c(this).is(":hidden");c(this)[b?"show":"hide"]()}):this.animate(L("toggle",3),a,b,d);return this},fadeTo:function(a,b,c,e){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,e)},animate:function(a,b,d,e){var f=c.speed(b,d,e);if(c.isEmptyObject(a))return this.each(f.complete,
[!1]);a=c.extend({},a);return this[!1===f.queue?"each":"queue"](function(){var g;!1===f.queue&&c._mark(this);var b=c.extend({},f),d=1===this.nodeType,e=d&&c(this).is(":hidden"),j,m,k,l,o;b.animatedProperties={};for(k in a){j=c.camelCase(k);k!==j&&(a[j]=a[k],delete a[k]);m=a[j];c.isArray(m)?(b.animatedProperties[j]=m[1],g=a[j]=m[0],m=g):b.animatedProperties[j]=b.specialEasing&&b.specialEasing[j]||b.easing||"swing";if("hide"===m&&e||"show"===m&&!e)return b.complete.call(this);if(d&&("height"===j||"width"===
j))if(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],"inline"===c.css(this,"display")&&"none"===c.css(this,"float"))c.support.inlineBlockNeedsLayout?(m=Ga(this.nodeName),"inline"===m?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"}if(null!=b.overflow)this.style.overflow="hidden";for(k in a)if(d=new c.fx(this,b,k),m=a[k],Xb.test(m))d["toggle"===m?e?"show":"hide":m]();else j=Yb.exec(m),l=d.cur(),j?(m=parseFloat(j[2]),
o=j[3]||(c.cssNumber[k]?"":"px"),"px"!==o&&(c.style(this,k,(m||1)+o),l*=(m||1)/d.cur(),c.style(this,k,l+o)),j[1]&&(m=("-="===j[1]?-1:1)*m+l),d.custom(l,m,o)):d.custom(l,m,"");return!0})},stop:function(a,b){a&&this.queue([]);this.each(function(){var a=c.timers,e=a.length;for(b||c._unmark(!0,this);e--;)if(a[e].elem===this){if(b)a[e](!0);a.splice(e,1)}});b||this.dequeue();return this}});c.each({slideDown:L("show",1),slideUp:L("hide",1),slideToggle:L("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},
fadeToggle:{opacity:"toggle"}},function(a,b){c.fn[a]=function(a,c,f){return this.animate(b,a,c,f)}});c.extend({speed:function(a,b,d){var e=a&&"object"===typeof a?c.extend({},a):{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};e.duration=c.fx.off?0:"number"===typeof e.duration?e.duration:e.duration in c.fx.speeds?c.fx.speeds[e.duration]:c.fx.speeds._default;e.old=e.complete;e.complete=function(a){c.isFunction(e.old)&&e.old.call(this);!1!==e.queue?c.dequeue(this):
!1!==a&&c._unmark(this)};return e},easing:{linear:function(a,b,c,e){return c+e*a},swing:function(a,b,c,e){return(-Math.cos(a*Math.PI)/2+0.5)*e+c}},timers:[],fx:function(a,b,c){this.options=b;this.elem=a;this.prop=c;b.orig=b.orig||{}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||c.fx.step._default)(this)},cur:function(){if(null!=this.elem[this.prop]&&(!this.elem.style||null==this.elem.style[this.prop]))return this.elem[this.prop];
var a,b=c.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||"auto"===b?0:b:a},custom:function(a,b,d){function e(a){return f.step(a)}var f=this,g=c.fx;this.startTime=Y||Ea();this.start=a;this.end=b;this.unit=d||this.unit||(c.cssNumber[this.prop]?"":"px");this.now=this.start;this.pos=this.state=0;e.elem=this.elem;e()&&c.timers.push(e)&&!ba&&(ba=setInterval(g.tick,g.interval))},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=!0;this.custom("width"===
this.prop||"height"===this.prop?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=!0;this.custom(this.cur(),0)},step:function(a){var b=Y||Ea(),d=!0,e=this.elem,f=this.options,g;if(a||b>=f.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();f.animatedProperties[this.prop]=!0;for(g in f.animatedProperties)!0!==f.animatedProperties[g]&&(d=!1);if(d){null!=f.overflow&&!c.support.shrinkWrapBlocks&&
c.each(["","X","Y"],function(a,b){e.style["overflow"+b]=f.overflow[a]});f.hide&&c(e).hide();if(f.hide||f.show)for(var h in f.animatedProperties)c.style(e,h,f.orig[h]);f.complete.call(e)}return!1}Infinity==f.duration?this.now=b:(a=b-this.startTime,this.state=a/f.duration,this.pos=c.easing[f.animatedProperties[this.prop]](this.state,a,0,1,f.duration),this.now=this.start+(this.end-this.start)*this.pos);this.update();return!0}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;++b)a[b]()||
a.splice(b--,1);a.length||c.fx.stop()},interval:13,stop:function(){clearInterval(ba);ba=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&null!=a.elem.style[a.prop]?a.elem.style[a.prop]=("width"===a.prop||"height"===a.prop?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};var Zb=
/^t(?:able|d|h)$/i,bb=/^(?:body|html)$/i;c.fn.offset="getBoundingClientRect"in k.documentElement?function(a){var b=this[0],d;if(a)return this.each(function(b){c.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);try{d=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!d||!c.contains(g,b))return d?{top:d.top,left:d.left}:{top:0,left:0};b=f.body;f=ha(f);return{top:d.top+(f.pageYOffset||c.support.boxModel&&
g.scrollTop||b.scrollTop)-(g.clientTop||b.clientTop||0),left:d.left+(f.pageXOffset||c.support.boxModel&&g.scrollLeft||b.scrollLeft)-(g.clientLeft||b.clientLeft||0)}}:function(a){var b=this[0];if(a)return this.each(function(b){c.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d,e=b.offsetParent,f=b.ownerDocument,g=f.documentElement,h=f.body;d=(f=f.defaultView)?f.getComputedStyle(b,null):b.currentStyle;
for(var i=b.offsetTop,j=b.offsetLeft;(b=b.parentNode)&&b!==h&&b!==g&&!(c.offset.supportsFixedPosition&&"fixed"===d.position);){d=f?f.getComputedStyle(b,null):b.currentStyle;i-=b.scrollTop;j-=b.scrollLeft;if(b===e){i+=b.offsetTop;j+=b.offsetLeft;if(c.offset.doesNotAddBorder&&(!c.offset.doesAddBorderForTableAndCells||!Zb.test(b.nodeName)))i+=parseFloat(d.borderTopWidth)||0,j+=parseFloat(d.borderLeftWidth)||0;e=b.offsetParent}c.offset.subtractsBorderForOverflowNotVisible&&"visible"!==d.overflow&&(i+=
parseFloat(d.borderTopWidth)||0,j+=parseFloat(d.borderLeftWidth)||0)}if("relative"===d.position||"static"===d.position)i+=h.offsetTop,j+=h.offsetLeft;c.offset.supportsFixedPosition&&"fixed"===d.position&&(i+=Math.max(g.scrollTop,h.scrollTop),j+=Math.max(g.scrollLeft,h.scrollLeft));return{top:i,left:j}};c.offset={initialize:function(){var a=k.body,b=k.createElement("div"),d,e,f,g=parseFloat(c.css(a,"marginTop"))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",
visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";a.insertBefore(b,a.firstChild);d=b.firstChild;e=d.firstChild;f=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=5!==e.offsetTop;this.doesAddBorderForTableAndCells=5===
f.offsetTop;e.style.position="fixed";e.style.top="20px";this.supportsFixedPosition=20===e.offsetTop||15===e.offsetTop;e.style.position=e.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=-5===e.offsetTop;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==g;a.removeChild(b);c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();c.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(c.css(a,
"marginTop"))||0,d+=parseFloat(c.css(a,"marginLeft"))||0);return{top:b,left:d}},setOffset:function(a,b,d){var e=c.css(a,"position");if("static"===e)a.style.position="relative";var f=c(a),g=f.offset(),h=c.css(a,"top"),i=c.css(a,"left"),j={},k={};("absolute"===e||"fixed"===e)&&-1<c.inArray("auto",[h,i])?(k=f.position(),e=k.top,i=k.left):(e=parseFloat(h)||0,i=parseFloat(i)||0);c.isFunction(b)&&(b=b.call(a,d,g));if(null!=b.top)j.top=b.top-g.top+e;if(null!=b.left)j.left=b.left-g.left+i;"using"in b?b.using.call(a,
j):f.css(j)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),e=bb.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.css(a,"marginTop"))||0;d.left-=parseFloat(c.css(a,"marginLeft"))||0;e.top+=parseFloat(c.css(b[0],"borderTopWidth"))||0;e.left+=parseFloat(c.css(b[0],"borderLeftWidth"))||0;return{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||k.body;a&&!bb.test(a.nodeName)&&
"static"===c.css(a,"position");)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(b){var f,g;if(b===l){f=this[0];return!f?null:(g=ha(f))?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:c.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:f[d]}return this.each(function(){(g=ha(this))?g.scrollTo(!a?b:c(g).scrollLeft(),a?b:c(g).scrollTop()):this[d]=b})}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+
b]=function(){var a=this[0];return a&&a.style?parseFloat(c.css(a,d,"padding")):null};c.fn["outer"+b]=function(a){var b=this[0];return b&&b.style?parseFloat(c.css(b,d,a?"margin":"border")):null};c.fn[d]=function(a){var f=this[0];if(!f)return null==a?null:this;if(c.isFunction(a))return this.each(function(b){var f=c(this);f[d](a.call(this,b,f[d]()))});if(c.isWindow(f)){var g=f.document.documentElement["client"+b],h=f.document.body;return"CSS1Compat"===f.document.compatMode&&g||h&&h["client"+b]||g}if(9===
f.nodeType)return Math.max(f.documentElement["client"+b],f.body["scroll"+b],f.documentElement["scroll"+b],f.body["offset"+b],f.documentElement["offset"+b]);return a===l?(f=c.css(f,d),g=parseFloat(f),c.isNaN(g)?f:g):this.css(d,"string"===typeof a?a:a+"px")}});o.jQuery=o.$=c})(window);

/**
 * @path js/tui/v2/core/head.js
 * @version 19734
 * TUI JavaScript Library
 */
(function(window, $){
	
/**
 * @private 浏览器字符串（全小写）
 */
var userAgent = navigator.userAgent.toLowerCase();
var cssCompat = document.compatMode == 'CSS1Compat';
var doc = cssCompat ? document.documentElement : document.body;

/**
 * @path js/tui/v2/core/fix.js
 * @version 23766
 * TUI::core::fix
 * @created Dexter.Yy
 * @modified  dexteryy $ 
 */

//补充ECMAScript5里的方法, 除ie外都有native实现
var arrayMethod = Array.prototype
	, OP = Object.prototype
if (!arrayMethod.filter)
	arrayMethod.filter = function(fn, sc){
		var r = [];
		for(var i = 0, l = this.length; i < l; i++){
			if( (i in this) && fn.call(sc, this[i], i, this) )
				r.push(this[i]);
		}
		return r;
	};
	
if (!arrayMethod.forEach) 
	arrayMethod.forEach = function(fn, sc){
		for(var i = 0, l = this.length; i < l; i++){
			if (i in this)
				fn.call(sc, this[i], i, this);
		}
	};

/* issues:
 * var array = ['a'];
 * array.length = 2;
 * array.map(function(value) { return value }).length
 **/
if (!arrayMethod.map) 
	arrayMethod.map = function(fn, sc){
		for(var i = 0, l = this.length, copy = new Array(l); i < l; i++){
			if (i in this)
				copy[i] = fn.call(sc, this[i], i, this);
		}
		return copy;
	};

if (!arrayMethod.indexOf) 
	arrayMethod.indexOf = function(elt, from){
		var l = this.length;
		from = parseInt(from) || 0;
		if (from < 0)
			from += l;
		for (; from < l; from++) {
			if (from in this && this[from] === elt)
				return from;
		}
		return -1;
	};

if ($) 
	$.fn.forEach = arrayMethod.forEach;

if(!String.prototype.trim) {
	String.prototype.trim = function() {
		return $.trim(this);
	};
}
Array.isArray || (Array.isArray = function(obj) {
	return OP.toString.call(obj) === '[object Array]';
});
Date.now || (Date.now = function () {
	return +new Date;
});
Object.keys || (Object.keys = function(o) {
	var ret=[],p;
	for(p in o)
		if(OP.hasOwnProperty.call(o,p))
			ret.push(p);
	return ret;
});
Object.create || (Object.create = function (o) {
	function F() {}
	F.prototype = o;
	return new F();
});
Function.prototype.bind || (Function.prototype.bind = function(oThis) {
	var fSlice = arrayMethod.slice,
		aArgs = fSlice.call(arguments, 1), 
		fToBind = this, 
		fNOP = function () {},
		fBound = function () {
			return fToBind.apply(this instanceof fNOP
								 ? this
								 : oThis || window,
								 aArgs.concat(fSlice.call(arguments)));
		};

	fNOP.prototype = this.prototype;
	fBound.prototype = new fNOP();

	return fBound;
});

/**
 * @path js/tui/v2/core/base.js
 * @version 23649
 * TUI::core::base
 * @created Dexter.Yy
 * @modified  lxhao $ 
 */
var TUI = window.TUI = {	
	
	mix: $.extend,

	juid: function(){
		return ( +new Date()*10000 + Math.random(1)*10000 ).toString(32);
	},
	
	/**
	 * @public 生成随机数
	 * @note 最小为0
	 * @param {number} max是随机数的范围
	 * @return {int} 返回大于或等于0，小于范围的整数
	 */
	rand: function( max ) {
		return Math.floor( Math.random() * max );
	},

	/**
	 * 对目标数字进行0补齐处理
	 * @param {number} source 需要处理的数字
	 * @param {number} length 需要输出的长度
	 *             
	 * @returns {string} 对目标数字进行0补齐处理后的结果
	 * @reference http://tangram.baidu.com/api.html#baidu.number.pad
	 */
	pad: function (source, length) {
		var pre = "",
			negative = (source < 0),
			string = String(Math.abs(source));

		if (string.length < length) {
			pre = (new Array(length - string.length + 1)).join('0');
		}

		return (negative ?  "-" : "") + pre + string;
	},

	/**
	 * @public 跳到到指定地址，相对于open或location=，但是可以避免IE里location跳转时获取不到referrer的问题
	 * @reference http://webbugtrack.blogspot.com/2008/11/bug-421-ie-fails-to-pass-http-referer.html
	 * @TODO 会引起点击统计无法获得正确的位置编码
	 */ 
	openURL: function(url, target){
		if (!TUI.browser.ie) {
			if ('_blank' == target)
				window.open(url);
			else if (target)
				window[target.replace(/^_/, '')].location.href = url;
			else
				location.href = url;
		} else {
			var a = $(TUI.renderTpl('<a href="<%=url%>" target="<%=target%>" data-openurl="true">      </a>', {
					url: url,
					target: target || '_self'
				}))[0];
			document.body.appendChild(a);
			a.click();
		}
	},
	
	/**
	 * @public 把文本复制到剪贴板
	 * @note 考虑到性价比，目前只支持ie
	 * @param {string} url是文本内容
	 * @param {function} succ是回调函数
	 */
	copyToClip : function(url,succ){
		succ = succ || function(){};
		if (window.clipboardData) {
			if(window.clipboardData.setData('text', url))
				succ(true, "已经复制到你的剪贴板");
			else
				succ(false, '请允许复制到剪贴板');
		} else {
			succ(false, '抱歉，在你使用的浏览器里不能自动复制到剪贴板～请使用CTRL+C或鼠标右键菜单复制地址');
		}
	}
	
};


/**
 * @public 浏览器嗅探方法
 */
var browserUA = TUI.browser = {
	// 是否为mobile safari浏览器（iphone, ipod touch, ipad）
	mobilesafari: /applewebkit.*mobile/.test(userAgent),
	// webkit（注意不是safari）版本号，如果不是webkit则为0
	webkit: /webkit/.test(userAgent) ? (userAgent.match(/webkit\/(\d+)/) || [])[1] : 0,
	opera: (/opera\/(\d+)/.exec(userAgent) || [])[1],
	// ie版本号，如果不是ie则为0
	ie: /msie/.test(userAgent) && !this.opera ? (userAgent.match(/msie\D*(\d+)/) || [])[1] : 0,
	// html5相关特性
	html5: function(){
		var input = document.createElement('input');
		var video = document.createElement('video');
		return {
			// 支持video标签，支持h264
			'h264': !!(video.canPlayType && video.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, '')),
			'history': !!(window.history && window.history.pushState && window.history.popState),
			'placeholder': "placeholder" in input
		};
	},
	//语言特性
	lang: (navigator.language || navigator.systemLanguage).toLowerCase(),
	iOS: (userAgent.match(/(ipad|iphone|ipod)/) || [])[0],
	android: parseFloat((userAgent.match(/android\s([\d.]+)/) || ['','0'])[1])
};
/**
 * @path js/tui/v2/core/lang.js
 * @version 19966
 * TUI::core::lang
 * @created Dexter.Yy
 * @modified  dexteryy $ 
 */
TUI.mix(TUI, {

	/**
	 * @public 可以直接调用和增删的函数队列
	 * @return {array} 返回一个增加了apply, call, clear方法的数组
	 */
	fnQueue: function(){
		var queue= [], dup = false;
		
		function getCallMethod(type){
			return function(){
				var re, fn;
				dup = this.concat([]).reverse();
				while (fn = dup.pop()) {
					re = fn[type].apply(fn, arguments);
				}
				dup = false;
				return re;
			};
		}

		TUI.mix(queue, {
			call: getCallMethod('call'),
			apply: getCallMethod('apply'),
			clear: function(func){
				if (!func) {
					this.length = 0;
				} else {
					var size = this.length,
						popsize = size - dup.length;
					for (var i = this.length - 1; i >= 0; i--) {
						if (this[i] === func) {
							this.splice(i, 1);
							if (dup && i >= popsize)
								dup.splice(size - i - 1, 1);
						}
					}
					if (i < 0)
						return false;
				}
				return true;
			}
		});
		return queue;
	}
});

/**
 * @path js/tui/v2/core/oop.js
 * @version 22686
 * TUI::core::oop
 * @created Dexter.Yy
 * @modified  fzhang $ 
 */

var obj_uuid = 0;

TUI.mix(TUI, {
	/**
	 * @public 为指定的命名空间
	 */
	ns: function(namespace, v, parent, isMixed){
        var i, p = parent || window, n = namespace.split(".").reverse();
        while ((i = n.pop()) && n.length > 0) {
            if (typeof p[i] === 'undefined') {
                p[i] = {};
            } else if (typeof p[i] !== "object") {
                return false;
            }
            p = p[i];
        }
        if (typeof v != "undefined"){
        	if(typeof p[i] != 'object'){//TODO 用isPlainObject替换，讨论
        		p[i] = v;
        	}else{
				$.extend(p[i], v);
        	}
        }
        return p[i];
    },

	/**
	 * @public 创建新类
	 * @note TUI.clone的封装，好处只是少写一个参数
	 * @param {function} * father是父类, 不需要继承时可忽略这个参数
	 * @param {object|function} ex是类的方法，其中initialize方法为构造函数, mixin为混入的超类
	 */ 
	newClass: function(father, ex){
		return !ex ? TUI.clone(false, father) : TUI.clone(father, ex);
	},
	/**
	 * @public 创建新模块
	 * @note TUI.module.create的封装
	 * @param {string} ns是模块的完整命名
	 * @param {function} wrap是代码块
	 */ 
	newModule: function(ns, wrap, args){
		TUI.namespace(ns, TUI.module.create(wrap, { 'args': args }));
	},
	/**
	 * @public 继承一个类或复制一个对象
	 * @note 
	 * @param {object|function} oldone是需要继承的构造函数或需要复制的对象
	 * @param {object|function} ex为函数时，是子类的构造函数，或者用来加工新对象
	 * 							ex为对象时，为子类的方法, 其中initialize方法为构造函数, mixin为混入的超类
	 * @return {object|function} 
	 */
	clone: function(oldone, ex){
		var newobj,
			isClass = !oldone || $.isFunction(oldone), //继承操作
			constructorFn = ex && !$.isFunction(ex) && ex.initialize || ex; //子类构造函数
		if (!isClass) {
			newobj = function(){
				if(constructorFn)
					constructorFn.apply(this, arguments);
			};
			newobj.prototype = oldone;
			return new newobj();	
		} else {
			 //为module内部定义的类提供相关方法
			var c = { _sandbox: ex.sandbox, _default: ex.attr };
			newobj = function(){ //构造函数
				if (this.constructor === newobj) { // 如果this指向子类实例，已经执行过以下的初始化代码
					this.objectId = "TUI-object-" + ++obj_uuid; //实例的唯一ID
					var p = c;
					if (p._sandbox && p._default)
						this.attr(p._sandbox, p._default); //初始化私有属性的默认值
				}
				if(constructorFn) //执行构造函数的自定义部分
					constructorFn.apply(this, arguments);
			};
			// 原型继承, 子类构造函数里需要显示调用父类构造函数
			var newproto = oldone ? this.clone(oldone.prototype) : {};
			// 混入其他超类方法
			if (ex.mixin) 
				this.mix.apply(this, ([newproto]).concat(ex.mixin)); 
			// 加入子类方法, 覆盖混入和继承
			this.mix(newproto, ex, { 
				constructor: newobj, // 恢复
				superClass: oldone || Object //在子类的构造函数中可以用this.superClass访问父类
			});
			delete newproto.initialize;
			if (c._sandbox) {
				delete newproto.sandbox; //沙盒一定要删除，不能暴露出去
				newproto.attr = function(sandbox, attrname, value){ //通过sandbox参数杜绝来自外部的访问
					return sandbox.attr.call(this, attrname, value);
				};
			}
			newobj.prototype = newproto;
			return newobj;
		}
	}
});

/**
 * 兼容旧版本
 */ 
TUI.namespace = TUI.ns;
window.__eventDebug = /eventdebug/.test(location.href);
window.__track = false;
TUI.footprint = [['awake', window.rqtime || 0]];
$(function(){
	TUI.footprint.push(['domready', window._jqueryDOMReady]);
});

/**
 * 自定义事件/消息系统，用于mixin其他类
 */
TUI.eventClass = TUI.newClass({
	initialize: function(){
		this.queue = {};
		this.status = {};
		this.evObjCache = {};
	},
	alone: function(type){
		var cache = this.evObjCache[type];
		if (cache)
			return cache;
		var self = this, newEv = {},
			override = { 'bind': 1, 'unbind': 1, 'fire': 1, 'enable': 1, 'disable': 1, 'wait': 1 };
		for (var i in self) {
			if (override[i]) {
				newEv[i] = (function(origin){
					return function(){
						return origin.apply(self, [].concat.apply([type], arguments));
					};
				})(self[i]);
			}
		}
		return this.evObjCache[type] = newEv;
	},
	bind: function(type, handler){
		if (typeof type !== 'string') {
			var bind = arguments.callee;
			for (var p in type) {
				bind.call(this, p, type[p]);
			}
			return this;
		}
		var data = this.queue,
			status = this.status[type];
		if (!data[type])
			data[type] = TUI.fnQueue();
		if (status)
			handler.apply(this, status);
		data[type].push(handler);
		return this;
	},
	unbind: function(type, handler){
		var data = this.queue;
		if(data[type]) 
			data[type].clear(handler);
		return this;			
	},
	fire: function(type, params, returnLast){
		if(__eventDebug){
			console.log(type + '|' + params);
		}
		if(__track){
			TUI.footprint.push([type, +new Date()]);
		}
		var data = this.queue, last;
		if (data[type])
			last = data[type].apply(this, params || []);
		if(returnLast)
			return last
		return this;
	},
	enable: function(type, params, returnLast){
		if(__eventDebug){
			console.log(type + '|' + params);
		}
		if(__track){
			TUI.footprint.push([type, +new Date()]);
		}
		var data = this.queue,
			args = params || [], last;
		this.status[type] = args;
		// ie bug，下面的循环执行不是阻塞的，可能会被插入其他异步回调
		// 所以必须在这之前先更新状态
		if (data[type]) {
			last = data[type].apply(this, args);
		}
		if(returnLast)
			return last;
		return this;
	},
	disable: function(type){
		delete this.status[type];
		return this;
	},
	wait: function(type, fn){
		var self = this;
		this.bind(type, function(){
			self.unbind(type, arguments.callee);
			fn.apply(self, arguments);
		});
		return this;
	}
});

/**
 * 存放实例的私有状态
 * @private
 */ 
var privateAttr = {};
/**
 * module的抽象类
 * @note 可以继承到其他应用上, 构造独有的sandbox
 */ 
TUI.moduleClass = TUI.newClass({
	initialize: function(){
		this.notify = new TUI.eventClass();
		this._sandbox.notify = this.notify; //被继承的时候，notify可以另外指向到别处
	},
	_sandbox: {
		attr: function(name, value){ //this指向调用它的实例
			if (typeof name === "object") {
				privateAttr[this.objectId] = TUI.clone(name); //初始化私有变量的默认值
				return true;
			}
			var p = privateAttr[this.objectId];
			if (!p) //尽量在module里初始化
				p = privateAttr[this.objectId] = {};
			if (value)
				p[name] = value;
			return p[name];
		}
	},
	/**
	 * 创建一个模块，提供封闭的代码作用域和沙盒
	 * @public
	 * @param {function}
	 * @param {object} args参数 
	 */ 
	create: function(wrap, op){
		var sandbox = TUI.clone(this._sandbox),
			args = op.args || [],
			ns = {};
		args.unshift(sandbox);
		return wrap.apply(ns, args) || ns;
	}
});

/**
 * private 已注册的模块
 */ 
var moduleLib = {};

TUI.module = TUI.mix(new TUI.moduleClass(), {
	join: function(url, opt){
		var keyname = url.match(/\/js(\/.*?)([^\/]+?)_?(\d*)\.js/);
		if(!keyname)
			return false;
		var n = keyname[1] + keyname[2]; //路径＋文件名作为键名
		var k = moduleLib[n];
		if(!k)
			k = moduleLib[n] = {};
		k.path = keyname[1];
		k.version = keyname[3] || 0;
		k.domain = url.match(/https?:\/\/[^\/]+/)[0];
		k.callback = TUI.fnQueue();
		if (opt)
			TUI.mix(k, opt);
		k.url = [k.domain, "/js", k.path, keyname[2], ( k.version ? ( "_" + k.version ) : "" ), ".js"].join('');
		return k;
	},
	use: function(n, cb){
		var k = moduleLib[n];
		if(!k || !k.url)
			return false;
		if($.isFunction(cb))
			k.callback.push(cb);
		else
			cb = function(){};
		if(!k.loaded) {
			if (!k.loading) {
				k.loading = true;
				$(function(){
					var o = k;
					TUI.getScript(o.url, {
						charset: o.charset,
						callback: function(){
							o.loaded = true;
							o.callback.call(window, o);
						}
					});
				});
			}
		} else
			cb(k);
		return true;
	},
	info: function(n){
		return moduleLib[n];
	}
});

if(window.preModuleLib) {
	preModuleLib.forEach(function(k) {
		TUI.module.join(k);
	});
}
/**
 * @path js/tui/v2/core/dom.js
 * @version 20124
 * @public 用一个容器的单一事件代理容器内的其他事件，批量绑定
 * @note 频繁的dom操作，比如事件绑定会减慢页面速度，对于一个交互操作比较集中的区域，建议用这个方法对整个父容器绑定一个代理方法
 * @note 对于内部html会被重写，需要重新绑定事件的页面元素，也推荐用这个方法
 * @param {string|DOM} box 绑定事件的父容器，如果参数是选择器，会自动延迟到页面加载完之后再绑定
 * @param {string} event是事件名称，如"click"
 * @param {object} proxyObj 包含对各个子元素触发事件的chu'l处理函数，支持基本的选择器
 * @param {int} * type如果为0，则不对回调函数做任何补充，如果缺少这个参数，会默认调用preventDefault
 * @return {object} 返回对象提供bind和unbind方法
 * @example 
 * var proxy = TUI.eventProxy("#toolbar", 'click', {
 * ".btn": function(){},
 * ".btn.hover": function(){},
 * "#dig":  function(){},
 * "span": function(){}
 * @href function(){},
 * @rel function(){}
 * });
 * proxy.bind(".hover", function(){});
 */
TUI.eventProxy = (function($, TUI){
	var typeTable = {
		"NODENAME": "hasTag",
		".": "hasClass",
		"#": "hasId",
		"@": "hasAttr"
	};
	TUI.eventProxyClass = TUI.newClass({
		initialize: function(proxyObj){
			// 默认不包含hasAttr
			this._table = { hasClass: {}, hasId: {}, hasTag: {} };
			if (proxyObj)
				this.parseProxyObj(proxyObj);
		},
		parseProxyObj: function(proxyObj){
			var checked = false, v;
			for (var n in proxyObj) {
				v  = proxyObj[n];
				if (!checked) { //检查代理对象格式
					checked = true;
					if (!$.isFunction(v)) {
						//直接覆盖
						TUI.mix(this._table, proxyObj);
						break;
					}
				}
				n.split(',').forEach(function(k){
					this.matchEvent(k, v);
				}, this);
			}
		},
		matchEvent: function(n, v){
			var name,
				table = this._table,
				prefix = n.match(/^[\.#]/);
			if (prefix) {
				prefix = prefix[0];
				name = n.substr(1);
				if ('.' == prefix)
					name = name.split('.').join(' ');//TODO classNames顺序BUG
				else if ('@' == prefix && !table.hasAttr)
					table.hasAttr = {};
			} else {
				prefix = "NODENAME";
				name = n;
			}
			if (v)
				table[typeTable[prefix]][name] = v;
			else if (v === false)
				delete table[typeTable[prefix]][name];
			else
				return table[typeTable[prefix]][name];
		},

		dispatchEvent: function(e){
			var t = e.target, table = this._table;
			var handler = table.hasId[t.id] || table.hasClass[t.className] || table.hasTag[t.nodeName.toLowerCase()] || null;
			if (!handler && table.hasAttr) {
				var a, value, attr;
				for (var n in table.hasAttr) {
					a = n.split('=');
					attr = $(t).attr(a[0]);
					value = a[1];
					if (value && attr == value || !value && attr)
						handler = table.hasAttr[n];
				}
			}
			if (handler) 
				return handler.call(t, e);
			else
				return 'NOMATCH';
		},
		/**
		 * @param {obj} 只允许传用选择器做键名的对象
		 */ 
		bind: function(name, handler){
			var proxyObj = name;
			if (typeof name === 'string') {
				proxyObj = {};
				proxyObj[name] = handler;
			}
			this.parseProxyObj(proxyObj);
		},
		/**
		 * @param {string} name 选择器
		 */ 
		unbind: function(name){
			if (name)
				this.matchEvent(name, false);
			else
				this._table = { hasClass: {}, hasId: {}, hasTag: {} };
		}
	});
	
	return function(box, event, proxyObj, type) {
		var newproxy = new TUI.eventProxyClass(proxyObj);
		$(box).bind(event, handler);
		var unbind = newproxy.unbind;
		newproxy.unbind = function(name){
			if (!name)
				$(box).unbind(event, handler);
			unbind.call(newproxy, name);
		};
		return newproxy;
		function handler(e){
			var result = newproxy.dispatchEvent(e);
			if (result !== "NOMATCH") {
				if (type === 0) 
					return result;
				else if (result === undefined)
					e.preventDefault();
				else
					return result || false;
			}
		}
	};
})(jQuery, TUI);

$.fn.eventProxy = function(event, op, type) {
	return this.each(function(){
		TUI.eventProxy(this, event, op, type);
	});
};
/**
 * @path js/tui/v2/view/template.js
 * @version 21452
 * TUI::view::template
 * @created Dexter.Yy
 * @modified  fzhang $ 
 */
var tplCache = {};

TUI.mix({

	escapeHTML: function(str){
		str = str || '';
		var xmlchar = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"'": "&#39;",
			'"': "&quot;",
			"{": "&#123;",
			"}": "&#125;",
			"@": "&#64;"
		};
		return str.replace(/[<>'"\{\}&@]/g, function($1){
			return xmlchar[$1];
		});
	},

	/**
	 * @public 按字节长度截取字符串
	 * @param {string} str是包含中英文的字符串
	 * @param {int} limit是长度限制（按英文字符的长度计算）
	 * @param {function} cb返回的字符串会被方法返回
	 * @return {string} 返回截取后的字符串,默认末尾带有"..."
	 */
	substr: function(str, limit, cb){
		if(!str || typeof str !== "string")
			return '';
		var sub = str.substr(0, limit).replace(/([^\x00-\xff])/g, '$1 ').substr(0, limit).replace(/([^\x00-\xff])\s/g, '$1');
		return cb ? cb.call(sub, sub) : (str.length > sub.length ? sub + '...' : sub);
	},

	/**
	 * @public 把JS模板转换成最终的html
	 * @note 模板中的变量格式：<%=xxx%>
	 * @param {string} tpl是模板文本
	 * @param {object} op是模板中的变量
	 * @return {string} 返回可使用的html
	 */
	format: function(tpl, op){
		return tpl.replace(/<%\=(\w+)%>/g, function(e1,e2){
		    return op[e2] != null ? op[e2] : "";
		});		
	},

	// Simple JavaScript Templating
	// John Resig - http://ejohn.org/ - MIT Licensed
	convertTpl: function(str, data){
		// Generate a reusable function that will serve as a template
		// generator (and which will be cached).
		var fn = tplCache[str] = tplCache[str] || new Function("obj",
			"var p=[],print=function(){p.push.apply(p,arguments);};" +
			"obj.escapeHTML=TUI.escapeHTML;obj.substr=TUI.substr;" +
			// Introduce the data as local variables using with(){}
			"with(obj){p.push('" +
			// Convert the template into pure JavaScript
			str
			.replace(/[\r\t\n]/g, " ")
			.split("<%").join("\t")
			.replace(/((^|%>)[^\t]*)'/g, "$1\r")
			.replace(/\t=(.*?)%>/g, "',$1,'")
			.split("\t").join("');")
			.split("%>").join("p.push('")
			.split("\r").join("\\'")
		+ "');}return p.join('');");
		// Provide some basic currying to the user
		return data ? fn( data ) : fn;
	}
});

TUI.renderTpl = TUI.format;

//针对开发环境的和发布时的模板系统
//开发环境用同步的xhr去获取模板文件，模板文件必须为utf-8编码
//发布时直接打包进源码
//TODO xhr返回的内容
(function(){
	var render = TUI.convertTpl;
	TUI.convertTpl = function(str, data){
		var ret = '';
		if(str.indexOf('.tpl') > 0){
			//尝试获取打包后生成的全局模板变量
			var tpl = window['tpl_' + str.replace(/\//g, '_').replace('.tpl', '')];
			if(!tpl){
				str = '/js/' + str;
				$.ajax({
					url: str,
					dataType: 'text',
					method: 'GET',
					async: false,
					success: function(tpl){
						ret = render(tpl, data);
					}
				});
				return ret;
			}else{
				return render(tpl, data);
			}
		}else
			return render(str, data);
	};
})();

/**
 * @path js/tui/v2/view/animate.js
 * @version 21481
 * TUI::view::animate
 * @created Dexter.Yy
 * @modified  dexteryy $ 
 */

/**
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * @note jQuery动画方法的缓冲效果
 */
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend( jQuery.easing,{
	// t: current time, b: begInnIng value, c: change In value, d: duration
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) { //减速
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) { //===easeInOutCubic
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInBack: function (x, t, b, c, d, s) { //先后退再前进
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) { //超出边缘后缩回
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeOutBounce: function (x, t, b, c, d) { //碰撞边缘后反弹
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	}
});

/**
 * @path js/tui/v2/io/request.js
 * @version 19734
 * TUI::io::request
 * @created Dexter.Yy
 * @modified  dexteryy $ 
 */
var uuid4jsonp = 0;

TUI.mix({
	/**
	 * @public 对任意一个url发送GET请求，忽略返回的内容
	 * @note 主要用于发送统计请求
	 * @requires jQuery.param, jQuery(document).ready, TUI.addElm
	 * @param {string} url是请求的地址
	 * @param {param||string} * param是url里的query参数，可以写成对象的形式，也可以用&连成字符串
	 */
	getRequest: function(url, params){
		var img = new Image();
		//阻止IE下的自动垃圾回收引起的请求未发出状况
		img.onload = function(){};
		img.src = !params ? url : [url, url.match(/\?/) ? "&" : "?", typeof params == "string" ? params : $.param(params)].join('');
	},

	/**
	 * 在页面里动态嵌入js最轻量的方法
	 * @param {string} url get请求的参数，防止缓存的随机数，jsoncallback都应该手动加在这里
	 * @param {Object|function} op 配置参数或回调函数，op.charset表示js文件的编码
	 */
	getScript: function(url, op){			
		var s = document.createElement("script");
		s.type = "text/javascript";
		s.async = true; //for firefox3.6
		if (!op)
			op = {};
		else if ($.isFunction(op))
			op = { callback: op };
		if (op.charset)
			s.charset = op.charset;
		s.src = url;
		h = document.getElementsByTagName("head")[0];
		var done = false;
		s.onload = s.onreadystatechange = function(){
			if ( !done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") ) {
				done = true;
				//防止ie内存泄漏
				s.onload = s.onreadystatechange = null;
				h.removeChild(s);
				if (op.callback)
					op.callback();
			}
		};
		h.appendChild(s);
	},


	/**
	 * 请求json数据，自动判断跨域。注意：不会自动加随机参数
	 * @param {string} url 请求地址，包含参数，不需要加jsoncallback
	 * @param {object} data
	 * @param {function} fn 回调函数，如果跨域，通过op.callback给它指定全局名称
	 * @param {object} op 配置参数
	 * 					 op.charset指定编码
	 * 					 op.random指定随机参数，必须是字符串
	 * 					 如果跨域而没有op.callback，自动生成随机函数名
	 */ 
	getJSON: function(url, data, fn, op){
		var domain = url.match(/https?\:\/\/(.+?)\//);
		if (fn) {
			if ((!op || !op.isScript) && (!domain || domain[1] === window.location.host)) {
				$.ajax({
					url: url,
					data: data,
					success: fn,
					dataType: "json"
				});
				return true;
			}
		}
		op = TUI.mix({
			charset: "gbk",
			callback: "tuijsonp" + ++uuid4jsonp
		}, op || {});
		if (op.random)
			data[op.random] = +new Date();
		var cbName = op.callbackName || 'jsoncallback';
		data[cbName] = op.callback;
		url = [url, /\?/.test(url) ? "&" : "?", $.param(data)].join("");
		if (fn)
			TUI.ns(op.callback, fn);
		delete op.callback;
		TUI.getScript(url, op);
	}
	
});


/**
 * @path js/tui/v2/io/cookie.js
 * @version 23737
 * TUI::io::cookie
 * @created Dexter.Yy
 * @modified  lhluo $ 
 */

/**
 * @public 设置或获取cookie
 * 调用方式一：（获取cookie）
 * @param {string} name是cookie名称
 * @return {string} 返回cookie的值
 * 
 * 调用方式二：
 * @param {string} name是cookie名称
 * @param {string} value是需要设置的cookie值
 * @param {object} options是cookie的配置，包括expires（单位是天）, path（通常为"/"）, domain, secure
 */
$.cookie = TUI.cookie = function(win, n, v, op){
	if(typeof win == "string") {
		op = v;
		v = n;
		n = win;
		win = window;
	}
	if(v !== undefined) {
		op = op || {};
		var date, expires = "";
		if(op.expires) {
			if(op.expires.constructor == Date) {
				date = op.expires;
			} else {
				date = new Date();
				date.setTime(date.getTime() + (op.expires * 24 * 60 * 60 * 1000));
			}
			expires = '; expires=' + date.toGMTString();
		}
		var path = op.path ? '; path=' + op.path : '';
		var domain = op.domain ? '; domain=' + op.domain : '';
		var secure = op.secure ? '; secure' : '';
		win.document.cookie = [n, '=', encodeURIComponent(v), expires, path, domain, secure].join('');
	} else {
		v = win.document.cookie.match( new RegExp( "(?:\\s|^)" + n + "\\=([^;]*)") );
		return v ? decodeURIComponent(v[1]) : null;
	}
};

/**
 * 在一个Cookie上设置多个key-value数据。
 * 设置: oneCookie('statdata', 'key1', 'val1', config);
 * 获取: oneCookie('statdata', 'key1');
 */
// 目前不使用
/*
TUI.groupCookie = function(cookieName, key, value, config, separator, subSeparator) {
	separator = separator || '*_*';
	subSeparator = subSeparator || '!_!';
	// set cookie
	var data = TUI.cookie(cookieName);
	if (value !== undefined) {
		var cookieValue;
		if (data) {
			var parts = data.split(separator);
			var newParts = parts.filter(function(v) {
				return (v.split(subSeparator)[0] !== key);
			});
			if (value !== null) {
				newParts.push(key + subSeparator + value);
			}
			cookieValue = newParts.join(separator);
		} else {
			cookieValue = value !== null ? key + subSeparator + value : '';
		}
		return TUI.cookie(cookieName, cookieValue, config);
	}
	// get cookie
	var result = '';
	if (data) {
		var parts = data.split(separator);
		parts.forEach(function(v) {
			var arr = v.split(subSeparator);
			if (arr[0] === key) {
				result = arr[1];
				return false;
			}
		});
	}
	return result;
};
*/
/**
 * @path js/tui/v2/utilities/domain.js
 * @version 19734
 * TUI::utilities::domain
 * @created Dexter.Yy
 * @modified  dexteryy $ 
 */

TUI.domain = {
	/**
	 * @public 生成全局命名空间里的域名常量
	 * @note 常量的命名方式为[name]_domain，在非线上环境可以被autodomain.js脚本自动替换
	 * @param {string} domains是包含常量前缀和URL的键值对，如{programstat: 'istat.tudou.com'}，注意URL里不能包含"http://"
	 */
	join: function(domains){
		for(var n in domains){
			window[n+"_domain"] = window[n+"_domain"] || ( "http://" + domains[n] );
		}
	}
};

/**
 * @path js/tui/v2/io/storage.js
 * @version 24123
 * TUI::io::storage
 * @created Dexter.Yy
 * @modified  lhluo $ 
 */

/**
 * 离线存储,HTML5 DOM storage的封装，兼容ie6和firefox2
 */ 
TUI.storageClass = (function($, TUI){

	var firstLoad = true;

	var receiveEvent = new TUI.eventClass();

	var messageId = 0;

	/**
	 * @private 根据浏览器生成相应的存取方法
	 */ 
	function setOperator(self){
		var win = self.win,
			doc = self.doc = win.document.documentElement;

		if (self.usePostMessage) {
			if (firstLoad) {
				firstLoad = false;
				$(window).bind('message', function(event){
					event = event.originalEvent;
					if (event.origin == self.origin){
						var data = JSON.parse(event.data);
						var eventKey = data.key + '@' + data.id;
						receiveEvent.fire(eventKey, [data.val]);
						receiveEvent.unbind(eventKey);
					}
				});
			}
			self.setItem = function(key, val) {
				self.win.postMessage(JSON.stringify({key : key, val : val}), self.origin);
			};
			self.originGetItem = function(key, fn) {
				var self = this;
				messageId++;
				receiveEvent.bind(key + '@' + messageId, function(val) {
					fn.call(self, val);
				});
				self.win.postMessage(JSON.stringify({id : messageId, key : key}), self.origin);
			};
			self.removeItem = function(key) {
				self.setItem(key, false);
			};
			return;
		}

		if (win.localStorage) { //firefox3.5, ie8, safari4
			self.setItem = function(n, v){
				win.localStorage.setItem(n, v);
			};
			self.getItem = function(n){
				return win.localStorage.getItem(n);
			};
			self.removeItem = function(n){
				win.localStorage.removeItem(n);
			};
		} else if (win.globalStorage) { //firefox2
			self.setItem = function(n, v){
				win.globalStorage[win.document.domain].setItem(n, v);
			};
			self.getItem = function(n){
				return (win.globalStorage[win.document.domain].getItem(n) || {}).value;
			};
			self.removeItem = function(n){
				win.globalStorage[win.document.domain].removeItem(n);
			};
		} else if (win.ActiveXObject) { //ie5.0+
			doc.addBehavior("#default#userdata");
			self.setItem = function(n, v){
				doc.setAttribute("tui", v);
				doc.save(n);
			};
			self.getItem = function(n){
				try {
					doc.load(n);
					return doc.getAttribute("tui");
				} catch (ex) {
					return null;
				}
			};
			self.removeItem = function(n){
				try {
					doc.load(n);
					doc.expires = (new Date(315532799000)).toUTCString();
					doc.save(n);
				} catch (ex) {}
			};
		}
		if (win !== window) {  // 跨域时getItem返回带ready方法的对象
			self.originGetItem = self.getItem;
			self.getItem = function(n){
				return {
					ready: function(fn){
						var _self = self;
						fn.call(_self, _self.originGetItem.call(_self, n));	
					}
				};
			};
		}
	}

	/**
	 * @private  生成装饰器，在跨域的情况下，把存取操作都延迟执行，等待iframe加载完
	 */ 
	function getWrap(methodname){
		return function(){ // this指向storageClass
			var self = this, args = arguments;
			function fn(){
				self[methodname].apply(self, args);
			}
			self.cache.push(fn);
		};
	}

	/**
	 * @private 已加载完成的iframe
	 */ 
	var load_history = {};

	var remotes = new TUI.eventClass();

	var cache = {};

	/**
	 * @static
	 * @public 路径别名
	 */ 
	var alias = {
		'global': '/' 	// 默认的跨域存储路径
	};

	var storageClass = TUI.newClass({
		initialize: function(opt){
			var self = this;

			self.usePostMessage = false;

			if (!opt || !opt.path) {
				self.win = window;
				self.path = 'default';
				setOperator(self);
			} else {
				if (!/^(\/|http)/.test(opt.path))
					opt.path = alias[opt.path];

				var path = self.path = opt.path;
				if (!cache[path]) {
					cache[path] = TUI.fnQueue();
				}

				if (!load_history[path]) {
					load_history[path] = true;
					$(function(){
						var frame = $('<iframe width="0" height="0" frameborder="0" src="' + path + '" style="visibility:hidden; position: absolute"></iframe>');
						frame.load(function(){
							remotes.enable(path, [this]);
							cache[path].call(self); // 执行延迟的存取操作
						});
						document.body.appendChild(frame[0]);
					});
				}

				self.usePostMessage = $.browser.mozilla && $.browser.version >= 13;

				var match = /https?:\/\/[^\/]+/.exec(path);
				self.origin = match ? match[0] : '';

				remotes.bind(path, function(myloader){
					self.win = myloader.contentWindow;
					setOperator(self);
				});
			}
		},
		/**
		 * @public 存数据
		 * @params {string} n 键名
		 * @params {*} v 值
		 */ 
		setItem: getWrap('setItem'),
		/**
		 * @public 获取数据
		 * @params {string} n 键名
		 * @return {string|object} 跨域的时候返回带有ready方法的对象
		 */ 
		getItem: function(n){
			var self = this;
			return {
				ready: function(fn){
					if (self.usePostMessage) {
						if (self.originGetItem) {
							self.originGetItem.call(self, n, fn);
						} else {
							function newfn(){
								self.originGetItem.call(self, n, fn);
							}
							cache[self.path].push(newfn);
						}
						return;
					}
					if (self.originGetItem) {
						fn.call(self, self.originGetItem.call(self, n));	
					} else {
						function newfn(){
							var _self = self;
							fn.call(_self, _self.originGetItem.call(_self, n));	
						}
						cache[self.path].push(newfn);
					}
				}
			};
		},
		/**
		 * @public 删除数据
		 * @params {string} n 键名
		 */ 
		removeItem: getWrap('removeItem')
	});

	storageClass.alias = alias;

	return storageClass;

})(jQuery, TUI);

TUI.domain.join({
	ui : 'ui.tudou.com'
});

function initGlobalStorage() {
	var db = {
		'default': new TUI.storageClass()
	};
	/**
	 * @public 访问存储类的接口
	 * @params {string} n 键名@域名路径
	 * @params {*} v 值
	 * @return {string|object|undefined} 除取值外没有访问值
	 */ 
	TUI.storage = function(n, v){
		var mydb,
			m = n.split('@'),
			url = m[1];
		n = m[0];
		if (!url) { 			  // 当前域名和路径下的存取
			mydb = db['default'];
		} else { 				  // 跨域存取
			mydb = db[url];
			if (!mydb)
				mydb = db[url] = new TUI.storageClass({ path: url });
		}
		if (typeof v === "undefined")
			return mydb.getItem(n);
		else if (v === false)
			mydb.removeItem(n);
		else
			mydb.setItem(n, v);
	}

	TUI.storageClass.alias['global'] = ui_domain + '/js/embed/xstorage/storage.html';
}
initGlobalStorage();
/**
 * @path js/tui/v2/utilities/flash.js
 * @version 21429
 * TUI::utilities::flash
 * @created Dexter.Yy
 * @modified  dexteryy $ 
 */

/**
 * @public 获取指定的flash对象
 * @note 用于调用flash里提供的方法
 * @param {string} m是flash元素的id
 * @requires jQuery.browser
 */
TUI.getFlashMC = function(m){
	return TUI.browser.ie ? window[m] : document[m];
};

/**
 * 加载swf的通用方法
 */	
TUI.swfobject = (function(TUI){
	var uuid = 0;
	var isie = !(navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length);
	var webkit = TUI.browser.webkit;
	var flashMC = TUI.getFlashMC;
	var template = {
		'object': '<object id="<%=id%>" <%=classid%> width="<%=width%>" height="<%=height%>" name="<%=name%>" <%=data%> style="<%=style%>" <%=mimetype%> >',
		'embed': '<embed id="<%=id%>" width="<%=width%>" height="<%=height%>" flashvars="<%=flashvars%>" quality="high" name="<%=name%>" src="<%=src%>" style="<%=style%>" <%=mimetype%> ',
		'pluginspage': '<a id=<%=id%> class="tui_noflash" href="#" style="width:<%=width%>;height:<%=height%>;display:block;overflow:hidden;cursor:pointer;<%=style%>" onclick="<%=fn%>()">需要flashplayer插件，点击安装</a>'
	};
	var FLASH_MIME_TYPE = "application/x-shockwave-flash";

	/**
	 * @public
	 */ 
	var SwfObj = TUI.swfClass = TUI.newClass({
		/**
		 * @constructor
		 */ 
		initialize: function(opt){
			var self = this;
			uuid++;
			TUI.mix(this, opt);
			// 默认属性
			var attrs = opt.attrs;
			var flashId = attrs.id;
			if (!flashId)
		   		flashId = attrs.id = 'TUI_flashObj_' + uuid;
			/**
			 * @public flashId
			 */ 
			this.flashId = flashId;
			if (!attrs.name)
				attrs.name = attrs.id;

			this.pluginspage = opt.pluginspage || pluginspage;
			this.pluginspageTpl = opt.pluginspageTpl || pluginspageTpl;

			var ver = getVersion();
			this.isSupport = ver && ver[0] > 0;
			// 给flash提供通用交互接口
			/**
			 * @public jsapiName
			 */ 
			var jsapiName = this.jsapiName = opt.flashvars.jsapi = '_TUI_flashObj_' + uuid;
			/**
			 * flash调用的js方法
			 * @public jsapi
			 */ 
			var jsapi = this.jsapi = window[jsapiName] = {};
			var allowscript = opt.params.allowscriptaccess || opt.params.allowScriptAccess;
			if (allowscript && allowscript != 'never') {
				this.event = new TUI.eventClass();
				TUI.mix(jsapi, {
					// flash接口初始化之后触发这个方法
					flashReady: function(args){
						self.event.enable('load', args);
					},
					// 取值
					getValue: function(fullname){
						return TUI.ns(fullname);
					},
					// 供flash调用任意js方法，获取返回值
					callFunc: function(fullname, args){try{
						return TUI.ns(fullname).apply(TUI.ns(fullname.replace(/\.[^\.]+$/, '')), args);
					}catch(ex){return false;}},
					// 用来处理所有flash事件
					notify: function(eventName, args){
						self.event.fire(eventName, args);
					}
				});
			}
		},
		/**
		 * public 嵌入flash标签
		 * @param {String} * objid是用来替换的页面元素的id，在没有id的时候使用document.write
		 */
		load: function(objid){
			var box = objid ? $('#' + objid)[0] : false;
			if (box) { //用flash标签替换指定id的页面元素
				if (box.outerHTML && !TUI.browser.opera) { // for ie
					box.outerHTML = this.getHTML();
				} else {
					/*var self = this, f = TUI.addElm(this.getHTML(), function(){
						box.parentNode.replaceChild(this, box);
						//this.setAttribute("data", self.attrs.src); //防止重复加载 @TODO 此方法无效
					});*/
					var self = this, f = $(this.getHTML())[0];
					box.parentNode.replaceChild(f, box);
				}
			} else { //在没有提供替换的页面元素时，在load方法执行的地方直接写入flash标签
				document.write(this.getHTML());
			}
		},
		/**
		 * 针对ie或其他浏览器生成相应的flash标签的html代码
		 */
		getHTML: function() {
			var n, k, self = this, html = [], vars = [],
				attrs = this.attrs, flashvars = this.flashvars, params = this.params;
			if (this.isSupport) {
				if (webkit && webkit < 312 || !isie && this.type === "embed") {
					for (n in flashvars) 
						vars.push(n + "=" + flashvars[n]);
					attrs.flashvars = vars.join("&");
					attrs.mimetype = 'type="' + FLASH_MIME_TYPE + '"';
					html.push(TUI.renderTpl(template['embed'], attrs));
					for (k in params) 
						html.push(k + '="' + params[k] + '" ');
					html.push(' ></embed>');
				} else {
					if (isie) {
						attrs.classid = 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';
					} else {
						attrs.data = 'data="' + attrs.src + '"';
						attrs.mimetype = 'type="' + FLASH_MIME_TYPE + '"';
					}
					html.push(TUI.renderTpl(template['object'], attrs));
					if(isie)
						params["movie"] = attrs.src;
					params["quality"] = "high";
					for (k in params) 
						html.push('<param name="', k, '" value="', params[k], '" />');

					for (n in flashvars) 
						vars.push(n + "=" + flashvars[n]);
					if (vars.length > 0) 
						html.push('<param name="flashvars" value="', vars.join("&"), '" />');
					html.push("</object>");
				}
			} else { // 没安装flash插件
				var w = attrs.width, h = attrs.height;
				html.push(TUI.renderTpl(this.pluginspageTpl(), TUI.mix(attrs, {
					width: !w && 'auto' || /%$/.test(w) && w || w + "px",
					height: !h && 'auto' || /%$/.test(h) && h || h + "px",
					fn: this.jsapiName + ".pluginspage" // 点击事件
				})));
				this.jsapi.pluginspage = function(){
					return self.pluginspage.call(self);
				};
			}
			return html.join("");
		},

		// 以下是调用flash接口的方法
		
		/**
		 * onload之后
		 */ 
		ready: function(fn){
			this.event.bind('load', fn);
		},
		/**
		 * 申请监听flash的事件，必须等onload后执行
		 */ 
		bind: function(eventName, handler){
			this.event.bind(eventName, handler);
			flashMC(this.flashId)._addEventListener(eventName, this.jsapiName + '.notify');
		},
		/**
		 * 直接调用flash内部的方法，有返回值，必须等onload后执行
		 */ 
		callMethod: function(methodName, args){
			return flashMC(this.flashId)._call(methodName, args);
		}
	});
	
	/**
	 * @factory 初始化flash对象
	 * @param {Object} url是swf地址
	 * @param {Object} w是flash宽度
	 * @param {Object} h是flash高度
	 * @param {Object} vars是flashvars属性
	 * @param {Object} params是flash元素里的param标签
	 * @param {Object} attrs是flash标签本身的属性
	 */
	function swfobject(url,w,h,vars,params,attrs){
		attrs = TUI.mix(attrs || {}, {
			src: url,
			width: w,
			height: h
		});
		var tagType = attrs.tagType;
		delete attrs.tagType;
		return new SwfObj({
			type: tagType,
			attrs: attrs,
			params: params,
			flashvars: vars,
			pluginspage: pluginspage,
			pluginspageTpl: pluginspageTpl
		});
	}

	TUI.mix(swfobject, {
		getVersion: getVersion,
		setPluginspage: function(fn){
			var oldfn = pluginspage;
			pluginspage = function(){
				return fn.call(this, oldfn);
			};
		},
		setPluginspageTpl: function(fn){
			var oldfn = pluginspageTpl;
			pluginspageTpl = function(){
				return fn.call(this, oldfn);
			};
		}
	});

	return swfobject;
	
	/**
	 * @static 获取flashplayer的版本
	 * @return {Array}
	 */
	function getVersion() {
		var ver = [0,0,0];
		if (navigator.plugins && navigator.mimeTypes.length) {
			var x = navigator.plugins["Shockwave Flash"];
			if (x && x.description) //"10.0 r115", "10.0 d51", "10.0 b51"
				ver = x.description.replace(/^\D+/, '').replace(/\s*r/, '.').replace(/\s*[a-z]+\d*/, '.0').split('.');
		} else {
			if (navigator.userAgent && navigator.userAgent.indexOf("Windows CE") >= 0) {
				var axo = 1;
				var n = 3;
				while (axo) {
					try {
						n++;
						axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + n);
						ver = [n, 0, 0];
					} catch(e) {
						axo = null;
					}
				}
			} else {
				try {
					var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
				} catch(e) {
					try {
						var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
						ver = [6, 0, 21];
						axo.AllowScriptAccess = "always";
					} catch(e) {
						if (ver.major == 6)
							return ver;
					}
					try {
						axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
					} catch(e) {}
				}
				if (axo != null) {
					ver = axo.GetVariable("$version").split(" ")[1].split(",");
				}
			}
		}
		return ver;
	}

	function pluginspage(){
		TUI.panel('安装完flashplayer之后，要记得先重新启动浏览器，再访问土豆喔', function(){
			TUI.openURL('http://get.adobe.com/flashplayer/', '_blank');
		});
		return false;
	}

	function pluginspageTpl(){
		return template['pluginspage'];
	}

})(TUI);

/**
 * @path js/tui/v2/utilities/performance.js
 * @version 21481
 * TUI::utilities::performance
 * @created Feng, Dexter.Yy
 * @modified  dexteryy $ 
 */

/**
 * 预加载静态资源
 * @method TUI.preload
 * @param CSSImageSelector {Array} 需要预加载的CSS图片所在的CSS表达式，支持tagName .className #id及其组合，.className1.className2不支持
 * @param otherFiles {Array} 其他需要预加载的文件，.js,.css,.png,.jpg,.gif
 */
TUI.preload = function(CSSImageSelector, otherFiles){
	if(TUI.cookie('preload'))return;
	otherFiles = otherFiles || [];
	window.preloadFiles = window.preloadFiles || [];
	preloadFiles = preloadFiles.concat(otherFiles);
	$(document.body).append('<iframe width="1" height="1" frameborder="0" style="visibility:hidden" src="' + js_domain + '/js/embed/preload.html?' + preloadFiles.join(',') + '&' + CSSImageSelector.join(',') + '"></iframe>');
	setTimeout(function(){
		TUI.cookie('preload', 1, { path: "/" });
	}, 1000);
};

/**
 * @public 延迟加载图片
 * @note 用来节约不必要的图片下载。需要在html里把图片实际地址写在alt属性里，在src里写入一个空白图片（比如/skin/play/img/b.gif）
 * @param {string} * name是存放图片地址的属性，默认为alt
 * @return {DOMNodelist}
 */
TUI.lazyImg = function(nodelist, name){
	var img, src, cname;
	name = name || "alt";
	nodelist.forEach(function(item){
		img = $(item);
		src = img.attr(name);
		if(src) {
			img.attr('src', src).removeAttr(name);
			cname = item.className;
			if (cname.indexOf('lazyImg') !== -1)
				//item.className = cname.replace(/lazyImg\S*/, "")
				img.removeClass('lazyImg');
		}
	});
	return nodelist;
};

$.fn.loadImgSrc = function(name){
	TUI.lazyImg(this, name);
	return this;
};


TUI.lazyLoader = (function(TUI){
	var FIRSTSCREEN_HEIGHT = 800;
	var lazy = TUI.fnQueue(), win = $(window), body = $(document.body);
	
	function triggerSecondScreen(){
		return win.scrollTop() + win.height() > FIRSTSCREEN_HEIGHT;
	}
	
	/**
	 * 添加函数到延迟加载队列
	 * @method add
	 * @public
	 * @param {Function} exec 需要执行的函数
	 * @param {Boolean} multiEntries 是否能重复调用
	 * @return {Function} 包装过的原始函数
	 */
	function add(exec, multiEntries){
		if (triggerSecondScreen()){
			exec();
			return;
		}
		
		if (!lazy.length){
			body.bind('resize', onEvent);
			win.bind('scroll', onEvent);
		}
		lazy.push(exec);
		
		//用来选择性覆盖原始引用
		//以便直接调用的时候从队列中注销此函数
		return function(){
			if (!multiEntries && !lazyLoader.length)
				return;
			run(exec);
		};
	}

	function unbindAll(){
		body.unbind('resize', onEvent);
		win.unbind('scroll', onEvent);
	}
	
	function onEvent(){
		if(triggerSecondScreen()){
			unbindAll();
			run();
		}
	}
	
	/**
	 * 执行函数队列
	 * @method run
	 * @private
	 * @param {Function} exec[optional]
	 */
	function run(exec){
		if (exec === undefined){
			lazy.call();
			lazy.length = 0;
		} else {
			if(lazy.clear(exec) && !lazy.length)
				unbindAll();
			exec();
		}
	}
	
	return {
		add: add
	};

})(TUI);


/**
 * @path js/tui/v2/utilities/urlkit.js
 * @version 21898
 * TUI::utilities::urlkit
 * @created Dexter.Yy
 * @modified $Author: lhluo $ 
 */
TUI.urlkit = (function(O, undefined){
	var encode = encodeURIComponent, decode = decodeURIComponent;

	var urlObject = O.newClass({
		initialize: function(win){
			this.win = win || window;
			this.hashObj = urlkit.parseHash(this.win.location.href);
		},
		hash: function(name, value, disableBack){
			var params, data,
				isMuti = typeof name === 'object',
				hash = this.hashObj,
				loc = this.win.location,
				l = hash.length;
			if (isMuti) {
				data = name;
				disableBack = value;
			} else {
				data = {};
				data[name] = value;
			}
			if (isMuti || value !== undefined) {
				params = hash.pop();
				for (var i in data) {
					name = encode(i);
					value = encode(data[i]);
					if (parseInt(name) != name) {
						params[name] = value;
					} else {
						hash[name] = value;
					}
				}
				hash.push(params);
				var hashstr = urlkit.param(hash);
				if (disableBack) {
					loc.replace('#' + hashstr);
				} else {
					loc.hash = hashstr;
				}
			} else {
				if (parseInt(name) != name) {
					return decode(hash[l - 1][name]);
				} else {
					return decode(hash[name]);
				}
			}
		}
	});

	O.mix(urlkit, {
		/**
		 * @public 把一个链接的href里#后面的部分解析成更容易处理的对象形式
		 * @note 用于那些会触发ajax事件的假链接
		 * @param {string||DOM} s可以是链接的url，也可以是链接本身，例如"#page/1/?name=yy&no=3"，也可以写作"#page/1?name=yy&no=3"，"#page/1/name=yy&no=3"，但是要求#后面不能紧跟"/"
		 * @return {array} ，对上面的例子，返回值为[ "page", "1", { "name": "yy", "no": "3" } ]
		 */
		parseHash: function(s){
			if (typeof s != "string") {
				s = s.href;
			}
			s = /#.+/.exec(s);
			if (!s)
				return [{}];
			s = s[0].substr(1).split('/');
			var kv, p = {}, hasParam,
				o = s.pop(),
				prule = /\?.*/,
				kvrule = /([^&=\?]+)(=[^&=]*)/g;
			if (o) {
				var end = o.replace(prule, '');
				if (/=/.test(o)) {
					if (end && prule.test(o)) {
						s.push(end);
					}
					while (kv = kvrule.exec(o)) {
						p[kv[1]] = kv[2].substr(1);
					}
				} else {
					s.push(end);
					p = {};
				}
				s.push(p);
			}
			return s;
		},

		param: function(obj){
			obj = $.isArray(obj) ? obj.slice() : [obj];
			var s = obj.pop(), o = [];
			for (var k in s) {
				o.push(k + '=' + s[k]);
			}
			if (o.length) {
				obj.push('?' + o.join("&"));
			}
			return obj.join('/');
		}
	});

	function urlkit(win){
		return new urlObject(win);
	}

	return urlkit;

})(TUI);

/**
 * @path js/tui/v2/ui/switchTab.js
 * @version 21700
 * TUI::ui::switchTab
 * @created Dexter.Yy
 * @modified  dexteryy $ 
 */

/**
 * @class 翻页/标签切换效果
 * @note 适用于无ajax的情况，需要切换的内容已经包括在html里（css里设置隐藏）
 * @param {object} op是配置参数
 * @return {object} 返回一个实例对象
 */
TUI.ns('TUI.widget.switchTab', function(op){
	var tab = op.tab,                       // @param {DOM nodeList} 点击的标签元素
		list = op.list,                     // @param {DOM nodeList} 被切换的内容层
		noDefaultTag = op.noDefaultTag,     // @param {boolean} 是否存在默认显示的标签，通常把class="current"的元素，或者标签列表里第一个元素，作为默认标签
		noIgnoreRepeat = op.noIgnoreRepeat, // @param {boolean} 重复点击标签的时候是否忽略，如果为true则隐藏内容层
		fade = op.fade,                     // @param {int} 当提供这个参数而没有action参数时，采用淡入淡出的动画，这个参数表示动画的速度
		action = op.action,                 // @param {function} 自定义显示/隐藏内容层的动画
		ct = null,                          // @private {DOM} 上次/当前已选中的标签
		c = 0;							    // @private {int/string} 上次/当前已显示的内容层的序号或id
	if(!tab[0]) 
		return false;
	
	//初始化默认标签
	$.each(tab, function(){
		if(this.className.indexOf("current")!=-1)
			ct = this;
	});
	if(!ct){
		ct = tab[0];
		if (!noDefaultTag)
			$(ct).addClass("current");
	}	
			
	if (!noDefaultTag) {
		c = TUI.parseUrlHash( ct.nodeName == "A" ? ct : ct.getElementsByTagName("A")[0] )[0];
		
		//显示默认标签对应的内容层
		var tt = list ? list[c-1] : document.getElementById(c);
		if(action) 
			action(tt, tt, true);
		else 
			$(tt).show();
	}
	
	return {
		/**
		 * @public 显示某标签对应的内容层的方法
		 * @param {DOM} t是A标签，它的href属性会被用来解析出内容层的序号或id
		 * @param {function} cb是伴随切换动作的回调函数
		 * @return 返回false
		 */
		go: function(t, cb){
			var n = TUI.parseUrlHash(t)[0];
			var t1 = list ? list[n-1] : document.getElementById(n);                 //t1是需要显示的内容层
			var t2 = c ? ( list ? list[c-1] : document.getElementById(c) ) : null;  //t2是之前显示的内容层
			if(!t1)
				return false;
			if( c == n ) { //重复点击当前选中的标签，流程结束
				if(noIgnoreRepeat)
					this.back(t1); //如果设置过noIgnoreRepeat，在流程结束前隐藏当前显示的内容层
				return false;
			}
			
			if(cb) 
				cb.call(t, ct, t2, t1);
			
			c = n; //更新私有属性，注意：n可能是int，也可能是string
			
			if(/current/.test(ct.className))
				$(ct).removeClass("current");
				
			if(ct.nodeName != "A") 
				t = t.parentNode; //标签元素支持两种形式：A，或是被容器嵌套的A
			ct = t; //更新私有属性
			$(t).addClass("current");
			
			if(action) {
				action(t1,t2);
			} else {
				if(t2) //如果不允许默认标签，第一次调用go方法时t2不存在
					$(t2).hide();
					
				if(fade)
					$(t1).fadeIn(fade);
				else
					$(t1).show();
			}
			return false;
		},
		/**
		 * @public 隐藏某标签对应的内容层的方法
		 * @param {DOM} t是A标签，它的href属性会被用来解析出内容层的序号或id
		 * @param {function} cb是伴随切换动作的回调函数
		 * @return 返回false
		 */
		back: function(t, cb){
			if(!t){
				var n = TUI.parseUrlHash( ct.nodeName == "A" ? ct : ct.getElementsByTagName("A")[0] )[0];
				t = list ? list[n-1] : document.getElementById(n);
			}
			if(/current/.test(ct.className))
				$(ct).removeClass("current");
			c = 0; //重置私有属性
			if(cb) 
				cb.call(t, ct);
			if(action)
				action(t,t,true); //第3个参数用来让自定义动画更方便的区分出只有一个对象的情况
			else 
				$(t).hide();
			return false;
		}
	};
});

TUI.switchTabNoAjax = TUI.widget.switchTab;


/**
 * @path js/tui/v2/core/foot.js
 * @version 19734
 */
})(window, jQuery);

/**
 * @path js/lib/tui2.js
 * @version 24079
 * @path STATIC/js/lib/tui2.js
 * TUI JavaScript Library
 * @modified  lhluo $ 
 * @!note TUI build script
 * @!note 不包含plugin和业务逻辑
 * @charset gb18030
 */

/**
 * @path js/tui/v2/plugins/loginBox.js
 * @version 23528
 * TUI::plugins::loginBox
 * @created Dexter.Yy
 * @modified  lxhao $ 
 */

TUI.loginBox = {
	show: function(fn, cname, op){
		var tipbox = $('#TUI_tipbox');
		if (tipbox[0])
			tipbox[0].style.display = "none";
		var self = this;
		this.callback = function(){
			self.complete();
			fn();
		};
		var mypanel = TUI.panelBackup || TUI.panel;
		mypanel('<!--noicon,nobutton--><div id="loginInfo" style="display:none"></div><iframe id="TUI_loginWin" src="'+ login_domain + '/login.do?mini=ok&service='+ login_domain + '/login.do?act=mini_login_form" scrolling="no" frameborder="0" width="100%" height="290"></iframe>','先用你的帐号登录', op);
		
		var $panel = $('#tudou_panel');
		$panel.addClass('login_panel');
		
		if(cname)
			$panel.addClass(cname);
		
		return false;
	},
	complete: function(){
		setUserInfo();
		initLogined();
	}
};

TUI.needLogin = function needLogin(fn, op){
	if (!isLogined(fn))
		return TUI.loginBox.show.apply(TUI.loginBox, arguments);
	return true;
};


/**
 * @path js/tui/v2/plugins/quickPlaylist.js
 * @version 24091
 * TUI::plugins::quickPlaylist
 * @created Dexter.Yy
 * @modified  lhluo $ 
 */
document.domain = 'tudou.com';
TUI.storageClass.alias['global0'] = ui_domain + '/js/embed/xstorage/storage.html';
/**
 * @static TUI.widget.quickPlaylist
 * 便利豆单
 * @note 绑定了两个全局函数：initQuick, toggleQuick，用于兼容旧代码
 */ 
TUI.newModule("TUI.widget.quickPlaylist", function(sandbox, $, TUI){
	var data,
		lib = {},
		loadCache = TUI.fnQueue(),
		lazyQueue = [], //延迟加载的节目封面图片
		isInit = true; 	//是否是第一次加载便利豆单

	var olddata = TUI.cookie('quickListClips'); // 旧数据
	if (olddata) {
		init(olddata);
		// 迁移旧数据
		TUI.cookie('quickListClips', '', { expires: -1, domain: 'tudou.com', path: '/' });
		TUI.storage("quicklist@global0", data.join(','));
	} else {
		TUI.storage("quicklist@global0").ready(function(v){
			init(v);
			if (loadCache.length) {
				loadCache.apply();
				loadCache.length = 0;
			}
		});
	}

	function init(v){
		data = (v || "").split(',');
		data.reverse();
		var i, newdata = [];
		while (i = data.pop()) {
			if (i) {
				newdata.push(i);
				lib[i]= true;
			}
		}
		data = newdata;
	}

	//初始化便利豆单按钮
	function load(target){
		if (!data) {
			loadCache.push(function(){
				load(target);
			});
			return;
		}
		var dom; //注意！这个dom只能当作数组使用（而不是jquery对象）
		if (!target) { //全局代码里的初始化
			if (isInit) {
				dom = $(".pack_clipImg");
				isInit = false;

				$(document.body).click(function(e){
					var t = e.target;
					if (t.className == 'quick_hook') {
						var p = t.parentNode,
							tt = $(t);
						//因为同一个页面上的节目有可能重复，增加override模式
						if (toggle(tt.attr('icode'), p.className === "quick" ? "override" : false)) {
							p.className += " quickAdded";
							tt.attr("title","播放点播单");
						}
						e.preventDefault();
					}
				});

			} else {
				dom = lazyQueue;
				lazyQueue = [];
				$(dom).loadImgSrc(); //是否加载由loadImgSrc决定
			}
		} else {
			dom = $(target).find(".pack_clipImg");
		}

		updateCount();

		dom.forEach(function(elm, i){
			if (elm.className.indexOf('lazyImg') !== -1) {
				lazyQueue.push(elm); //通过lazyImg来判断是否需要加载便利豆单
				return true; //跳过延迟加载的图片
			}
			var link = $(elm).prev()[0] || elm.parentNode; // seo优化结构（a标签与img标签分离，非嵌套）兼容旧结构
			var box = link.parentNode;
			var code = ($(link).attr("href") || "").match(/\/view\/[\w-]{11}/);
			if (!code)
				return true;
			else
				code = code[0].substring(6);

			var btn = document.createElement('DIV');
			if (!lib[code]) {
				btn.className = "quick";
				btn.innerHTML = '<a href="#" icode="' + code + '" title="添加到点播单" class="quick_hook"></a>';
			} else {
				btn.className = "quick quickAdded";
				btn.innerHTML = '<a href="#" icode="' + code + '" title="播放点播单" class="quick_hook"></a>';
			}
			box.insertBefore(btn, link);
		});
		target = null;
	}
	//切换单个节目的便利豆单状态
	function toggle(code, isremove){
		if (!/^[\w-]{11}$/.test(code))
			return false;
		if (lib[code]) {
			if (!isremove) { // 播放
				// 跳转之前，把数据作为会话cookie存在豆单播放页路径下，播放后不删除
				TUI.cookie('quickListTemp', data.join(','), { path:'/playlist', domain:'tudou.com' });
				TUI.openURL(main_domain +"/playlist/quick.do?code=" + code);
				return false;
			}
			for (var i = 0, l = data.length; i < l; i++) {
				if (data[i] === code) {
					data.splice(i, 1);
					break;
				}
			}
			delete lib[code];
		}
		if (data.length >= 40) {
			TUI.confirm("你只能在便利豆单中暂存40个节目，你可以删除一些，然后再继续添加。\n想去便利豆单删除一些节目吗？", function(){
				setTimeout(function(){
					window.location = main_domain + "/my/playlist/list/quicklist.html";
				},100);
			});
			return false;
		} else if (!isremove || isremove === "override") {
			data.push(code);
			lib[code] = true;
		}
		TUI.storage("quicklist@global0", data.length ? data.join(',') : false);
		updateCount();
		return true;
	}
	
	function set(code){
		if(lib[code]){
			TUI.cookie('quickListTemp', data.join(','), { path:'/playlist', domain:'tudou.com' })
			return {status: -1, message: '已经存在'};
		}else{
			if(data.length > 40)
				return {status: -2, message: '超出长度'};
			data.push(code);
			lib[code] = true;
			TUI.storage("quicklist@global0", data.length ? data.join(',') : false);
			TUI.cookie('quickListTemp', data.join(','), { path:'/playlist', domain:'tudou.com' })
			return {status: 1};
		}
	}
	
	function has(code){
        return lib[code] ? true : false;
    }

	function updateCount(){
		$("#quickNum").html(data.length);
	}

	var quickPlaylist = {
		lazyQueue: lazyQueue,
		load: load,
		toggle: toggle,
		add: set,
		has: has
	};

	window.initQuick = load;
	window.toggleQuick = toggle;

	return quickPlaylist;
}, [jQuery, TUI]);

/**
 * @path js/tui/v2/plugins/searchHint.js
 * @version 24199
 * TUI::plugins::searchHint
 * @created Dexter.Yy
 * @modified  jyan $ 
 */

/**
 * @public 搜索提示组件
 * @note 主要用于顶部和底部的搜索框
 * 
 * @TODO 补充注释
 */
TUI.searchHint = (function(){
	var hintQueryToken = '', form, act;
	var pmethods = {
		_control: function(e){
			var list, n, l, op = this.op, that = this, kc = e.keyCode;
			if( this.loaded && ( kc == 38 || kc == 40 ) ) {
				if(!this.tipbox)
					return true;
				list = $(this.tipbox).find('li a');
				l = list.length;
				
				if(!l)return;
				
				if( this.lastn !== null ){
					n = (kc == 38) ? ( (this.lastn - 1 < 0) ? l - 1 : this.lastn - 1 ) 
											: ( ( this.lastn + 1 < l ) ? this.lastn + 1 
																		: this.lastn - l + 1 );
					
					$(list[this.lastn]).parent().removeClass('chosen');
				} else {
					n = kc == 38 ? l - 1 : 0; 
				}
				$(list[n]).parent().addClass('chosen');
				this.lastn = n;
				var kw = $(list[n]).attr('keyv');
				op.input.value = kw;
				if(hintQueryToken != kw)
					form.attr('hint', '1');//在最终的请求中加标记来统计从hint发起的搜索请求
				else
					form.removeAttr('hint');
				
				//XXX
				//form.attr('action', search_domain + ($(list[n]).parent().hasClass('search_user_hint') ? '/usearch.do' : $(list[n]).parent().hasClass('search_item_hint')?'/nisearch.do':act));
				form.attr('action', search_domain + ($(list[n]).parent().hasClass('search_item_hint')?'/nisearch.do':act));
				//op.input.select();
			} else if (kc == 13 || kc == 27) {
				this.hide();
			} else {
				if(this.timer) 
					clearTimeout(this.timer);
				this.loaded = false;
				this.lastn = null;
				this.timer = setTimeout(function(){ 
					that.getData(); 
				}, 100);
			}
		},
		_toggleList: function(){
			var that = this, list = $(this.tipbox).find('li a');
			
			$(list).mouseover(function(e){
				var t = this;
				if(that.lastn !== null)
					$(list[that.lastn]).parent().removeClass('chosen');
				$(t).parent().addClass('chosen');
				that.lastn = parseInt( $(t).attr("ord") );
			}).click(function(e){
				var t = this, kw = $(t).attr('keyv');
				that.op.input.value = kw;
				clearTimeout(that.timer);
				setTimeout(function(){
					that.hide();
				}, 200);
				if($(e.target).closest('.search_hint').length)return true;
			});
			
			this.loaded = true;
		}
	};
	var methods = {
		show: function(data){
			var service, text, c, content = [], op = this.op, val = TUI.escapeHTML(op.input.value);
			if (op.type == "programs") {
				text = "视频";
				service = 'nisearch';
			} else if (op.type == "playlist") {
				text = "豆单";
				service = 'npsearch';
			} else if (op.type == 'card'){
				text = "单视频";
				service = 'nitemsearch';
			}
			data.forEach(function(v, o){
				c = v.split(/#(?=\d+$)/);
				c[0] = c[1] ? c[0] : c[0].replace(/#$/, '');
				content.push( TUI.renderTpl('<li><a href="<%=url%>" target="<%=target%>" ord="<%=order%>" keyv="<%=key%>"><span><%=key%></span><em><%=count%></em></a></li>', {
					url: search_domain + '/' + service + '/' + c[0] + '/?f=hint',
					order: o || "0",
					key: c[0],
					count: c[1] ? ((c[0] + c[1] || "").replace(/[^\x00-\x80]/g, 'aa').length < 24 ? (c[1] + '个' + text) : c[1]) : '',
					target:pageId && /1000[1234]/.test(pageId)?'_self':'_blank'
				}));
			});
			if(!data.length){
				if(!pageId || !/1000[1234]/.test(pageId)){
					content.push('<li class="search_hint search_item_hint"><a ord="0" keyv="' + val + '" href="'+ search_domain + '/' + service + '/' + val + '/" target="_blank"><b></b>找到标题包含<strong>‘' + val + '’</strong>的' + text + '</a></li>');
				}else{
					return this.hide()
				}
			}
			/*
			content.push('<li class="search_hint search_user_hint"><a ord="' + (data.length || 1) + '" keyv="' + val + '" href="'+ search_domain  +"/usearch/"+ val +'/" target="_blank"><b></b>查找名为<strong>‘'+ val + '’</strong>的人</a></div>')
			*/
			this.tipbox = TUI.tipbox(op.parent || op.input.parentNode.parentNode, function(){
				this.innerHTML = '<ul>' + content.join('') + '</ul>';
			}, "gst", {fade: false});
			pmethods._toggleList.call(this);
			TUI.event.fire('searchhint:open');
		},
		getData: function(){
			var op = this.op, that = this;
			if( !op.type || op.type=='u' || !/\S+/.test(op.input.value) )
				return this.hide();
			hintQueryToken = op.input.value;
			TUI.getJSON(op.url, { q: hintQueryToken, type: op.type=='card'? 'playlist': op.type}, function(data){
				if( !data || data.length == 0 ) 
					that.show([]);
//					return that.hide();
				that.show(data);
			}, { callback: "tui_searchHint_handler" });
		},
		hide: function(){
			if(this.tipbox){
				this.tipbox.innerHTML = '';
				this.tipbox.style.display = "none";
			}
			this.loaded = false;
			this.lastn = null;
			clearTimeout(this.timer);
			TUI.event.fire('searchhint:close');
			return false;
		}
	};

	return function(op){
		var publicobj = TUI.clone(methods, function(){
			this.lastn = null;
			this.op = op;			
		});

		$(op.input).keyup(function(e){
			pmethods._control.call(publicobj, e);
		}).click(function(e){
			pmethods._control.call(publicobj, e);
		}).blur(function(){
			op.timer = setTimeout(function(){
				publicobj.hide();
			}, 200);
		});
		
		form = $('.g-search form');
		var t = form.attr('action').split('com');
		act = t[1] || t[0];
		
		return publicobj;
	};
})();


/**
 * @path js/fn/global/domain.js
 * @version 19749
 */
//初始化域名变量（在测试环境里可以被autodomain.js替换），生成的全局变量的形式如：main_domain, login_domain
TUI.domain.join({
	leshi: "tudou.letv.com",
	main: "www.tudou.com",
	css: "css.tudouui.com",
	js: "js.tudouui.com",
	login: "login.tudou.com",
	dig: "dig.tudou.com",
	message: "message.tudou.com",
	hint: "hint.tudou.com/hint",
	hd: "hd.tudou.com",
	search: "so.tudou.com",
	tui: 'www.tudou.com/my/tui',
	programstat: 'istat.tudou.com'
});

try{
	//判断css文件的域名是否为"css.tudouui.com"，如果不是则视作非线上环境(dev/test/wwwtest)，加载autodomain.js
	var uiurl = document.styleSheets[0].href.match(/http:\/\/[^\/]+/);
	if( uiurl && uiurl[0] != "http://css.tudouui.com" )
		document.write("<scri" + "pt type='text/javascript' src='" + uiurl + "/autodomain.js?r=" + Math.random() + "'><\/s"+"cript>");
}catch(e){}
/**
 * @path js/fn/MRG32k3a.js
 * @version 20637
 */
function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = data.toString();
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  mash.version = 'Mash 0.9';
  return mash;
}

//From http://baagoe.com/en/RandomMusings/javascript/
function MRG32k3a() {
  return (function(args) {
    // Copyright (c) 1998, 2002 Pierre L'Ecuyer, DIRO, Universit茅 de Montr茅al.
    // http://www.iro.umontreal.ca/~lecuyer/
    var m1 = 4294967087;
    var m2 = 4294944443;
    var s10 = 12345,
        s11 = 12345,
        s12 = 123,
        s20 = 12345,
        s21 = 12345,
        s22 = 123;

    if (args.length === 0) {
      args = [+new Date()];
    }
    var mash = Mash();
    for (var i = 0; i < args.length; i++) {
      s10 += mash(args[i]) * 0x100000000; // 2 ^ 32
      s11 += mash(args[i]) * 0x100000000;
      s12 += mash(args[i]) * 0x100000000;
      s20 += mash(args[i]) * 0x100000000;
      s21 += mash(args[i]) * 0x100000000;
      s22 += mash(args[i]) * 0x100000000;
    }
    s10 %= m1;
    s11 %= m1;
    s12 %= m1;
    s20 %= m2;
    s21 %= m2;
    s22 %= m2;
    mash = null;

    var uint32 = function() {
      var m1 = 4294967087;
      var m2 = 4294944443;
      var a12 = 1403580;
      var a13n = 810728;
      var a21 = 527612;
      var a23n = 1370589;

      var k, p1, p2;

      /* Component 1 */
      p1 = a12 * s11 - a13n * s10;
      k = p1 / m1 | 0;
      p1 -= k * m1;
      if (p1 < 0) p1 += m1;
      s10 = s11;
      s11 = s12;
      s12 = p1;

      /* Component 2 */
      p2 = a21 * s22 - a23n * s20;
      k = p2 / m2 | 0;
      p2 -= k * m2;
      if (p2 < 0) p2 += m2;
      s20 = s21;
      s21 = s22;
      s22 = p2;

      /* Combination */
      if (p1 <= p2) return p1 - p2 + m1;
      else return p1 - p2;
    };

    var random = function() {
      return uint32() * 2.3283064365386963e-10; // 2^-32
    };
    random.uint32 = uint32;
    random.fract53 = function() {
      return random() +
        (uint32() & 0x1fffff) * 1.1102230246251565e-16; // 2^-53
    };
    random.version = 'MRG32k3a 0.9';
    random.args = args;

    return random;
  } (Array.prototype.slice.call(arguments)));
}
/**
 * @path js/fn/global/stat.js
 * @version 24280
 */


if(!window.initTimestamp) // 有些页面需要精确的记录打开的时间，会在页面顶部定义这个变量
	initTimestamp = +new Date();				//时间戳，在tudouStat里有用到

var pvid = window.pvid || TUI.juid();

var PRNGran, juidStr, seid;

//一个更好的随机数生成器
PRNGran = new MRG32k3a(uid || 0, location.href, initTimestamp);

/**
 * @public 生成juid字符串
 */
function juid(){
	//第一位的0为标志位，区分新旧juid
	return '0' + (+new Date()).toString(32) + (parseInt(PRNGran() * 100000)).toString(32);
}

function initJuid(){
	//用户唯一标志
	juidStr = TUI.cookie('juid');
	if (!juidStr) {
		juidStr = juid(); // @public 标记每个用户会话的流水号
		//这个juidStr会缓存在cookie里，在用户的浏览会话中保持不变, 发送统计请求时统一使用这个变量，而不要重复调用juid()
		TUI.cookie('juid', juidStr, {expires:365*100, domain:'tudou.com', path:'/'});
		juidStr = TUI.cookie('juid') || 1;
	}
	//会话id
	seid = TUI.cookie('seid');
	if (!seid || +new Date()  > (parseInt(TUI.cookie('seidtimeout')) || 0)) {
		seid = juid();
		TUI.cookie('seid', seid, {domain:'tudou.com', path:'/'});
		seid = TUI.cookie('seid') || 1;
	}
	//刷新会话id过期时间
	TUI.cookie('seidtimeout', +new Date() + 30 * 60000, {domain:'tudou.com', path:'/'});
}

/**
	全站点击统计 (V1)
	@author: lhluo@tudou.com
	@created: 2012-05-03 
	@reference: http://wiki.corp.tudou.com:8080/confluence/display/DataInsight/ck-request-v1
*/
var tudouClickStat = (function(TUI, $) {
	var window = this;
	var TAG_ABBR = {
		// 缩写常用标签
		"UL": 1, "OL": 2, "LI": 3, "INPUT": 4, "DIV": 5, "BODY": 6, "STRONG": 7, "SPAN": 8, "FORM": 9, "BUTTON": 10, "CAPTION": 11,
		"FIELDSET": 12, "COLGROUP": 13, "TFOOT": 14, "LABEL": 15, "LEGEND": 16, "THEAD": 17, "OPTGROUP": 18, "OPTION": 19, "SELECT": 20, "TABLE": 21, "TBODY": 22,
		// 过滤非布局标签和闭合标签（不会出现在父节点里，也不会记录点击）
		"IFRAME": 0, "SCRIPT": 0, "OBJECT": 0, "EMBED": 0, "IMG": 0
	};

	return {
		// 播放器将重置这个属性
		pvid : juid(),
		// 发送统计
		send : function(data) {
			var winWidth = $(window).width(),
				winHeight = $(window).height(),
				docWidth = $(document).width();

			var eventId = data.eventId, // 点击事件类型ID：1(点击后会跳转页面) ；2(点击后不会跳转页面，页面内的ajax点击)
				pvid = data.pvid, // 页面ID，采用36位UUID格式。 
				channelId = data.channelId, // 页面所属频道ID，未知频道此值为0。
				userId = uid, // 用户ID，未登录用户为0
				screenW = data.screenW, // 显示器分辨率宽，单位为像素点
				screenH = data.screenH, // 显示器分辨率高，单位为像素点
				browserW = winWidth, // 浏览器内容区域实际尺寸宽，单位为像素点
				browserH = winHeight, // 浏览器内容区域实际尺寸高，单位为像素点
				browserPX = data.pageX - data.scrollLeft - Math.round(winWidth / 2), // 点击位置距离浏览器内容区域中间线的横向坐标，左侧为负值，单位为像素点
				browserPY = data.pageY - data.scrollTop, // 点击位置距离浏览器内容区域顶端的纵向坐标，单位为像素点
				pagePX = data.pageX - Math.round(docWidth / 2), // 点击位置距离页面中间线的横向坐标，左侧为负值，单位为像素点
				pagePY = data.pageY, // 点击位置距离页面顶端的纵向坐标，单位为像素点
				juid = juidStr, // 由js代码加入cookie的唯一标识，用以标识唯一用户
				sessionId = seid, // 由js代码加入cookie的唯一标识，用以标识唯一用户的一次访问过程
				positionCode = encodeURIComponent(data.positionCode || ''), // 表示页面内点击发生的位置的标识(css selecter + xpath混合结构)
				targetUrl = encodeURIComponent(data.targetUrl || ''), // 点击后跳转的目标页面url，必须是UTF-8 url encode的格式。若eventId=2，此值为空
				appData = ''; // 产品应用数据，若有多个参数可使用|分隔。

			// 获取 appData
			var result = TUI.event.fire('tudouClickStat:send', [eventId, positionCode], true) || {};
			var appDataList = [];
			$.each(result, function(key, val) {
				appDataList.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
			});
			appData = appDataList.join('|');

			// 拼接参数
			var paramStr = [eventId, pvid, channelId, userId, screenW, screenH, browserW, browserH, browserPX, browserPY,
				pagePX, pagePY, juid, sessionId, positionCode, targetUrl, appData].join('|');
			// 发送 HTTP 请求
			TUI.getRequest("http://stats.tudou.com/ck/?s=" + paramStr + "&r=" + +new Date());
		},
		init : function(){
			var self = this;
			//self.isButton = false;
			// 为了提高性能，页面初始化时计算
			var screenWidth = screen.width,
				screenHeight = screen.height;
			// Bugfix: Chrome上页面跳转，click事件不发送CK统计，改成mousedown事件
			$(document.body).mousedown(function(e) {
				// 通过JS触发事件时，不应该发送CK统计
				if (typeof e.pageX == 'undefined') {
					return;
				}
				//var isButton = self.isButton;
				//self.isButton = false;
				var p = getStatTarget(e.target);
				if (!p) {
					return;
				}
				// 过滤用 TUI.openURL 打开时产生的CK统计
				if (p.nodeName == 'A' && $(p).attr('data-openurl')) {
					return;
				}
				var isButton = false;
				var targetUrl = getTrueLink(p);
				if (p.nodeName !== 'A' || targetUrl === '' || equalUrl(targetUrl, location.href)) {
					isButton = true;
				}
				self.send({
					eventId : isButton ? 2 : 1,
					pvid : self.pvid,
					channelId : window.cid || 0,
					positionCode : getPositionCode(p),
					targetUrl : isButton ? '' : targetUrl,
					pageX : e.pageX,
					pageY : e.pageY,
					scrollLeft : $(window).scrollLeft(),
					scrollTop : $(window).scrollTop(),
					screenW : screenWidth,
					screenH : screenHeight
				});
				// 跳转到播放页前保存当前页面的pvid和点击时间，1%概率
				if (!isButton) {
					// 判断目标页面是否播放页
					if (/^https?:\/\/[^\/]+\/(?:programs\/view|playlist\/p|listplay)\//i.test(targetUrl)) {
						var cookieName = 'timestatdata';
						var config = {expires: 0.0006944444444444444, path: "/", domain: "tudou.com"};
						if (Math.random() < 0.01 || /timestat=1$/i.test(location.href)) {
							TUI.cookie(cookieName, window.pvid + '|' + new Date().getTime(), config);
						} else if (TUI.cookie(cookieName)) {
							TUI.cookie(cookieName, '', config);
						}
					}
				}
			});
		}
	};

	// 判断两个 URL 是否相等
	function equalUrl(urlA, urlB) {
		// Remove anchor, last slash
		return urlA.replace(/\/?#.*|\/$/, '') === urlB.replace(/\/?#.*|\/$/, '');
	}

	function getTrueLink(p){
		var link = $(p).attr('href');
		if (!link) {
			return '';
		}
		if (/^(javascript:|#)/i.test(link)) {
			return '';
		}
		var url = location.href;
		var domain = url.replace(/(https?:\/\/[^\/]+).*/, "$1");
		var path = domain === url ? domain + '/'
							: url.replace(/[#?].*/, "").replace(/[^\/]*$/, "");
		return link.replace(/^\.[\.\/]+/g, function(s){
			var n = (s.match(/\.\.\//g) || []).length;
			for (var i = 0; i < n; i++)
				path = path.replace(/[^\/]+\/$/, '');
			return path;
		}).replace(/&amp;/g, "&")
			.replace(/^\//, domain + "\/")
			.replace(/^[^\h\/]/, path + "$&");
	}

	function getStatTarget(p){
		var check = {'A': 1, 'INPUT': 1, 'BUTTON': 1};
		// label包含input，或label有for属性时，发送input点击统计
		if (p.nodeName == 'LABEL') {
			var input;
			var $p = $(p);
			var forName = $p.attr('for');
			if (forName) {
				input = $('input#' + forName).get(0);
			}
			if (!input) {
				var $input = $p.find('input:first');
				if ($input.length > 0) {
					input = $input.get(0);
				}
			}
			if (input) {
				p = input;
			}
		}
		if (!check[p.nodeName]) { // 只记录链接和按钮的点击
			p = p.parentNode || {}; // 链接里可能有子元素，比如img
			if (!check[p.nodeName])
				return false;
		}
		return p;
	}

	function getPositionCode(element) {
		var paths = [];

		if(element.id)
			return '#' + element.id;

		for (; element; element = element.parentNode)
		{
			var tagName = element.nodeName.toUpperCase();
			if(tagName == 'BODY')break;
			if(element.id && element.getAttribute('cs') != 'i'){
				paths.splice(0, 0, '#' + element.id);
				return paths.join('~');
			}
			var index = 0;
			for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling)
			{
				var sTagName = sibling.nodeName.toUpperCase();
				// Ignore document type declaration.
				if (TAG_ABBR[sTagName] === 0)
					continue;
				if (sTagName == tagName)
					++index;
			}
			tagName = TAG_ABBR[tagName] || tagName;
			var pathIndex = (index ? "!" + (index+1) : "");
			paths.splice(0, 0, tagName + pathIndex);
		}

		return paths.length ? paths.join("~") : null;
	}

})(TUI, $);

/**
 * @public 用户点击事件统计
 * @requires juid, TUI.cookie, jQuery.bind, jQuery.attr
 */
var tudouStat = (function(TUI, $){
	var window = this;
	var TAG_ABBR = {
		// 缩写常用标签
		"UL": 1, "OL": 2, "LI": 3, "INPUT": 4, "DIV": 5, "BODY": 6, "STRONG": 7, "SPAN": 8, "FORM": 9, "BUTTON": 10, "CAPTION": 11, "FIELDSET": 12, "COLGROUP": 13, "TFOOT": 14, "LABEL": 15, "LEGEND": 16, "THEAD": 17, "OPTGROUP": 18, "OPTION": 19, "SELECT": 20, "TABLE": 21, "TBODY": 22,
		// 过滤非布局标签和闭合标签（不会出现在父节点里，也不会记录点击）
		"IFRAME": 0, "SCRIPT": 0, "OBJECT": 0, "EMBED": 0, "IMG": 0
	};

	return {
		pvid: juid(), // 播放器会获取这个属性，不要变动
		/**
		 * 钩子
		 */
		getPageFlag: function(flagBit){
			return flagBit;
		},
		/**
		 * @public 全站pv统计
		 * @requires initTimestamp, juidStr, TUI.getScript, TUI.cookie, jQuery.getScript
		 */
		send: function(statObj){
			// 包含点击统计
			var ispv = !statObj; //PV统计无参数，纯点击统计有参数
			if (ispv){
				statObj = this.pop();						// 取出并删除上次点击的记录
				statObj.type = 1;
			} else {
				statObj.type = 2;
			}
			var subdomain = window.SUBDOMAIN,
				pageFlag = 0;

			var initDate = +new Date 									//统计发送时间
				,timeOfRef = 0											//停留时间
				,expr = encodeURIComponent(statObj.expr || "")			//新的点击统计，字符串，记录dom路径
				,viewTime = statObj.date || initDate 					//上次点击的时间(用于计算页面打开时间)
				,pvPageStep = TUI.cookie('pageStep') 					//用户点击的步骤
				,pageStep = pvPageStep ? Math.max(1, pvPageStep) : 1
				,referrer = encodeURIComponent(document.referrer || ""); 	//上个页面的地址，当前页面的地址包含在统计请求的head里

			//往PV中注入一些自定义的统计需求，利用废弃字段。
			//后期考虑扩展为一个通用自定义统计对象
			var extInfo = (TUI.event.fire('sendpv', [statObj.type, expr], true) || {});
			pageFlag = extInfo.pageFlag || 0;
			
			/*
				timeOnRefer字段修改为：
				1ABCDEFGHIJ
				A：当前页abtest
				B：来源页abtest
				CDE：当前页cid
				FGH：来源页cid
				IJ: 当前页是否被嵌套，00未嵌套，01嵌套
				Reference: http://jira.intra.tudou.com/browse/TUILIB-15
			*/
			timeOfRef = '1' + (window.abtest || 0) + (statObj && statObj.abtest ? statObj.abtest : 0) +
				TUI.pad(window.cid || 0, 3) + TUI.pad(statObj && statObj.cid ? statObj.cid : 0, 3) + (window.top == window ? '00' : '01') + (extInfo.timeOfRef || '');

			//新pv统计
			TUI.getRequest("http://stats.tudou.com/pv3/?s=" + [statObj.type, uid, pageStep, '', timeOfRef, juidStr, seid, pageFlag, expr, referrer || ""].join('*_*') + "&r=" + +new Date());

			// @TODO 新pv统计稳定后，以下的旧统计应该删除
			if (ispv) {
				oldPvStat([1, juidStr, encodeURIComponent(location.href), referrer, pageStep, initDate, uid, (initTimestamp ? (initDate - initTimestamp) : 0)]);
			}

			if(statObj.type === 1){
				TUI.event.enable('pv:send');
			}
		},

		getCode: function(nums){
			var n = nums.toString().split("-"), a = [], code;
			for(var i = 0; i < 4; i++){ //4个数字，每个数字两位，不超过60
				code = String.fromCharCode( parseInt(n[i] || 0) + 64 );
				a.push(code !== "\\" ? code : "\\\\");
			}
			return a.join("");
		},
		getNum: function(code){
			if (!code)
				return 0;
			var n = code.split(''), a = [], c;
			for(var i = 0; i < 4; i++){ //4个数字，每个数字两位，不超过60
				c = (n[i] || "@").charCodeAt() - 64;
				a.push(c < 10 ? ("0" + c) : c);
			}
			return a.join("");
		},
		getPCode: getPositionCode2,
		getTrueLink: getTrueLink, // @TODO 临时
		getStatTarget: getStatTarget,  // @TODO 临时
		record: function(abtest, expr, nextUrl, cprefix){
			refStat([this.pvid, abtest, +new Date(), expr, nextUrl || '0', window.cid || 0].join('!_!'), cprefix);
		},
		pop: function(cprefix){
			var v = refStat(false, cprefix);
			return {
				pvid: v[0],
				abtest: v[1],
				date: v[2],
				expr: v[3],
				cid: v[5]
			};
		},
		initCatch: function(){
			var self = this;
			$(document.body).bind("click", function(e){
				var isButton = self.isButton;
				self.isButton = false;
				var p = getStatTarget(e.target);
				if (p) {
					if (p.nodeName !== "A" ||
						p.href.replace(/#.*/, "") === location.href.replace(/#.*/, "")) {
						isButton = true;
					}
					catchHandler(p, self, isButton);
				}
			});
		},
		sendFootprint: function(){
			var ua = TUI.browser.ie ? ('ie' + TUI.browser.ie) : $.browser.mozilla ?  'ff' : TUI.browser.webkit ? 'wk' : 0;
			TUI.getRequest('http://stats.tudou.com/e/user/pageload/?v=1&s=' + [uid, juidStr, TUI.footprint.map(function(i){return i.join('*')}).join('_'), ua].join('|'));
		}
	};

	function catchHandler(p, self, isButton){
		// 旧点击统计，依赖编号
		var abtest = window.abtest || 0,
			expr = getPositionCode2(p);
		if (isButton) {  //不包含pv的点击
			self.send({
				abtest: abtest,
				expr: expr
			}); //单独发送点击的统计请求
		} else {
			self.record(abtest, expr, getTrueLink(p)); 	//记录在cookie里，跟pv统计一起发
		}
	}

	function getTrueLink(p){
		var link = $(p).attr('href');
		if (!link)
			return;
		var url = location.href;
		var domain = url.replace(/(https?:\/\/[^\/]+).*/, "$1");
		var path = domain === url ? domain + '/'
							: url.replace(/[#?].*/, "").replace(/[^\/]*$/, "");
		return link.replace(/^\.[\.\/]+/g, function(s){
			var n = (s.match(/\.\.\//g) || []).length;
			for (var i = 0; i < n; i++)
				path = path.replace(/[^\/]+\/$/, '');
			return path;
		}).replace(/&amp;/g, "&")
			.replace(/^\//, domain + "\/")
			.replace(/^[^\h\/]/, path + "$&");
	}

	function getStatTarget(p){
		var check = {'A': 1, 'INPUT': 1, 'BUTTON': 1};
		if (!check[p.nodeName]) { // 只记录链接和按钮的点击
			p = p.parentNode || {}; // 链接里可能有子元素，比如img
			if (!check[p.nodeName])
				return false;
		}
		return p;
	}


	function getPositionCode2(element){
	    var paths = [];

	    if(element.id)
	    	return '#' + element.id;

	    for (; element; element = element.parentNode)
	    {
	    	var tagName = element.nodeName.toUpperCase();
	    	if(tagName == 'BODY')break;
	    	if(element.id && element.getAttribute('cs') != 'i'){
	    		paths.splice(0, 0, '#' + element.id);
	    		return paths.join('~');
	    	}
	        var index = 0;
	        for (var sibling = element.previousSibling; sibling; sibling = sibling.previousSibling)
	        {
	        	var sTagName = sibling.nodeName.toUpperCase();
	            // Ignore document type declaration.
	            if (TAG_ABBR[sTagName] === 0)
	            	continue;
	            if (sTagName == tagName)
	                ++index;
	        }
	        tagName = TAG_ABBR[tagName] || tagName;
	        var pathIndex = (index ? "!" + (index+1) : "");
	        paths.splice(0, 0, tagName + pathIndex);
	    }

	    return paths.length ? paths.join("~") : null;
	}

	function refStat(value, cprefix){
		var kv, v = [], config = { expires: 0.0006944444444444444, path: "/", domain: "tudou.com" };
		cprefix = cprefix || "yps";
		if (value)  // 保存新记录
			return TUI.cookie(cprefix + (+new Date()).toString(32), value, config);
		config.expires = -1;
		var re1 = new RegExp("^" + cprefix + "\\w+$"), re2 = new RegExp("^" + cprefix);

		var refs = document.cookie.split(/;\s+/).map(function(str){
			if (str) {
				var kv = str.split('=');
				if (re1.test(kv[0])) {
					return kv;
				}
			}
			return false;
		});
		var url = location.href;
		for (var i = 0, l = refs.length; i < l; i++) {
			kv = refs[i];
			if (kv) {
				v = decodeURIComponent(kv[1]).split('!_!');
				if (v[4] == url) { // 找到对应当前URL的点击记录
					TUI.cookie(kv[0], '', config);
					break;
				}
			}
		}
		return v;
	}

	function oldPvStat(statStr){
		var pageStep = statStr[4];
		//步骤+1
		TUI.cookie('pageStep', (pageStep + 1).toString(), {path: "/", domain: 'tudou.com'});

		window["pageUUID"] = '';

		$.getScript('http://stat.tudou.com/newstat/pv?s=' + statStr.join('~_~'), function(){
			TUI.cookie('pageUUID', window["pageUUID"] + '~_~' + (+new Date() - statStr[5]), {
				path: "/",
				domain: 'tudou.com'
			});
			window["pageUUID"] = '';
		});

		var pvPageUUID = TUI.cookie('pageUUID');
		if (pvPageUUID) {
			$.getScript('http://stat.tudou.com/newstat/pv?s=2~_~' + pvPageUUID);
			TUI.cookie('pageUUID', '', {
				expires: -1,
				path: "/",
				domain: "tudou.com"
			});
		}
	}

})(TUI, $);

//捕获jquery点击事件的preventDefault调用，让点击统计能分辨出不跳转的链接
//@param isButton: 用于点击统计，true为不跳转的链接，false为跳转链接，默认值为true
var _jQ_preventDefault = $.Event.prototype.preventDefault;
$.Event.prototype.preventDefault = function(isButton) {
	if (this.type === "click") {
		tudouStat.isButton = true;
		tudouClickStat.isButton = typeof isButton == 'undefined' ? true : isButton;
	}
	return _jQ_preventDefault.apply(this, arguments);
};

/**
	优酷PV统计
	@author: lhluo@tudou.com
	@created: 2012-05-10
	@reference: http://jira.intra.tudou.com/browse/TUILIB-20
*/
var youkuStat = {
	send : function() {
		var params = [
			'tc=' + window.juidStr || '', // .tudou.com下的cookie中的guid
			'tu=' + window.uid || 0, // .tudou.com下的登陆用户的userid
			'burl=' + encodeURIComponent(location.href), // 当前浏览.tudou.com的页面地址
			'rurl=' + encodeURIComponent(document.referrer), // 当前浏览.tudou.com的页面之前的地址
			'time=' + new Date().getTime() // 时间戳
		];
		// t.stat.youku.com/pvlog?参数名=参数值
		TUI.getRequest('http://t.stat.youku.com/pvlog?' + params.join('&'));
	}
};

//错误统计
window.onerror = (function(){
	var enc = encodeURIComponent,
		url = enc(location.href),
		ua = enc(navigator.userAgent);
	return function(msg){
		if(Math.random() < 0.01)
			TUI.getRequest('http://stats.tudou.com/e/page/js/fail/?v=1&s=' + [enc(msg), url, (window.juidStr || '') + '_' + (window.uid || 0), ua].join('|'));
	};
})();

/**
 * @path js/fn/global/comscore.js
 * @version 19749
 * 第三方统计comscore
 */
var COMSCORE = {
	beacon: function(d) {
		var a = 1.7, e = document, h = e.location, g = 512, c = function(i, j){
			if (i == null)
				return "";
			i = (encodeURIComponent || escape)(i);
			if (j)
				i = i.substr(0, j);
			return i;
		}, f = [(h.protocol=="https:"?"https://sb":"http://b"),".scorecardresearch.com/b?","c1=",c(d.c1),"&c2=",c(d.c2),"&rn=",Math.random(),"&c7=",c(h.href,g),"&c3=",c(d.c3),"&c4=",c(d.c4,g),"&c5=",c(d.c5),"&c6=",c(d.c6),"&c10=",c(d.c10),"&c15=",c(d.c15),"&c16=",c(d.c16),"&c8=",c(e.title),"&c9=",c(e.referrer,g),"&cv=",a,d.r?"&r="+c(d.r,g):""].join("");
		f = f.length > 2080 ? f.substr(0, 2075) + "&ct=1" : f;
		var b = new Image();
		b.onload = function(){};
		b.src = f;
		return f;
	},
	send: function(){
		COMSCORE.beacon({
			c1:2,
			c2:6035715,
			c3:"",
			c4:window.location.href,
			c5:"",
			c6:window.comscore_c6||'',//特定统计
			c10: juidStr,
			c11: uid,		
			c15:""
		});
	}
};
/**
 * @path js/fn/global/iwt.js
 * @version $Rev: 24282 $
 * 通过全局变量_iwt_no_flash=1设置为不使用flash
 */
// 第三方艾瑞统计

_iwt_no_flash=0; //默认为0开启flash cookie；可以修改为1关闭flash cookie
var _iwt_UA="UA-tudou-000001"; //客户项目编号,根据实际生成

(function (G,D,undefined) {

var
DEBUG=false,
ie=!-[1,],
JSONURL="http://irs01.com/irt?_iwt_id=",
SWF_URL='http://irs01.net/MTFlashStore.swf#',//"#"加在后面2B360就不会从缓存中读取了
dataHandler_video= 'http://irs01.com/_iwt.gif', // track handler URL for video
key_iwt_id='_iwt_id',
key_iwt_cid='_iwt_cid',
_iwt_id='', //iwt sessionId
_u_eventid= '', //unique event id
req_url = "",//最终请求url
head=D.getElementsByTagName('head')[0],
FC={
    /**
     * Flash Local Storage是否可用,
     * 值为false时表示不能使用Flash本地存储,
     ******************************************
     * 使用时需要判断此属性是否为true,
     * 仅当available属性为true时才可以使用!!!
     ******************************************
     * @name FC.available
     * @type Boolean
     */
    available:false,
    /**
     * 生成一个guid
     * @name FC.guid
     * @return {String} 返回一个生成的GUID
     */
    guid:function () {
        return ['MT',
            ((+new Date) + (_idg++)).toString(36),
            (Math.random() * 1E18).toString(36)
            ].join('').slice(0, 16).toUpperCase();
    },
    /**
     * 通过名称获取FlashLocalStore中的值
     * @name FC.get
     * @param {String} name 存储时指定的键名
     * @param {Function(value:String):void} callback 接收cookie值的回调函数
     * @return {Object} FC.
     */
    get:function (name,callback) {
        return FC._sendFlashMsg(callback,'jGetItem',name);
    },
    /**
     * 设置FlashLocalStore中的值
     * @name FC.set
     * @param {String} name 存储的键名
     * @param {String} value 存储的键值
     * @param {Function} [callback] 存储成功后的回调函数
     * @return {Object} FC.
     */
    set:function (name,value,callback) {
        return FC._sendFlashMsg(callback,'jSetItem',name,value);
    },
    /**
     * 删除一个值
     * @name FC.clear
     * @param {String} name 键名
     * @param {Function} [callback] 删除成功后的回调函数
     * @param {Object} FC.
     */
    clear:function (name,callback) {
        return FC._sendFlashMsg(callback,'jClearItem',name);
    },
    /**
     * 删除所有的Flash Local Data
     * @name FC.clearAll
     * @param {Function} [callback] 删除完成后的回调函数
     * @param {Object} FC.
     */
    clearAll:function (callback) {
        return FC._sendFlashMsg(callback,'jClearAllItems');
    },
    _sendFlashMsg:function (callback,method,name,value) {
        callback=callback || noop;
        var cbname=FC.guid();
        G[cbname]=callback;
        switch (arguments.length) {
            case 2:
                swf[method](cbname);break;
            case 3:
                swf[method](name,cbname);break;
            case 4:
                swf[method](name,value,cbname);break;
        }
    },
    /**
     * 初始化SWF文件
     * @name FC.initSWF
     * @param {Function} success 成功之后的回调函数
     * @param {Function} fail 失败之后的回调函数
     */
    initSWF: function (success, fail) {
        if (!FC.available) {
            return fail && fail();
        }
    	if (FC.inited) {
    		return success && setTimeout(success,0);
    	}
    	success && _flashSuccessCallback.push(success);
    	fail && _flashFailCallback.push(fail);

    }
},
_idg=1,
_flashSuccessCallback=[],
_flashFailCallback=[],
flashVersion='',
Plugin,
swf,
tmp,
ct=D.createElement('DIV'),
jsProxyFunction=FC.guid()
;

function noop() {}

function log(msg) {
    if (DEBUG) {
        if (G.console && G.console.log) {
            G.console.log('MTFlashStore:'+msg);
        }
    }
}

if (!G._iwt_no_flash) {//设置为不使用FLASH
    try {
        Plugin=G.navigator.plugins['Shockwave Flash'] || G.ActiveXObject;
        flashVersion = Plugin.description || (function () {
            return (
                new Plugin('ShockwaveFlash.ShockwaveFlash')
            ).GetVariable('$version');
        }());
    } catch (e) {}

    flashVersion=(flashVersion.match(/\d+/g) || [0])[0];
    if (flashVersion < 9 ) {//Flash播放器版本小于9的不支持
        FC.available=false;

    } else {//支持Flash
        FC.available=true;
        /**
         * JS与Flash的代理函数
         * @param {String} signal 信号名称
         */
        G[jsProxyFunction]=function (signal,msg) {
            switch (signal) {
                case 'onecall'://调用一个全局函数,然后将它删除
                    if (!G[msg]) return;
                    G[msg].apply(G,[].slice.call(arguments,2));
                    delete G[msg];
                    break;
                case 'error'://报告错误
                    FC.available=false;
                    while (tmp=_flashFailCallback.shift()) {
                        tmp();
                    }
                    log(msg);
                    break;
                case 'load'://Flash加载正常完成
                    log('Flash load success!');
                    FC.inited=true;
                    FC.available=true;
                    while (tmp=_flashSuccessCallback.shift()) {
                        setTimeout(tmp,0);
                    }


            }
        };
        function createSWF() {
            ct.setAttribute("style","display:block;clear:both;float:none;position:absolute;right:0;bottom:0;border:none;");
            if (D.body.firstChild) {
                D.body.insertBefore(ct,D.body.firstChild);
            } else {
                D.body.appendChild(ct);
            }
            ct.innerHTML='<object id="'+FC.guid()
                +(ie?' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ':'')
                +'" data="'+SWF_URL+'" type="application/x-shockwave-flash" '
                +' width="10" height="10" style="position:absolute;right:0;bottom:0;border:none;" >'+
                '<param name="movie" value="'+SWF_URL+'" />'+
                '<param name="wmode" value="transparent" />'+
                '<param name="version" value="10" />'+
                '<param name="allowScriptAccess" value="always" />'+
                '<param name="flashvars" value="jsproxyfunction='+jsProxyFunction+'" />'+
            '</object>';
            swf=ct.firstChild;
            FC.swf=swf;
        }
        var _tid=setInterval(function () {
            if (D.body) {
                createSWF();
                clearInterval(_tid);
            }
        },100);

    }

}



/***********End FlashStore接口代码************/




/***************Begin IWT 代码************/



var
iwt = {
    track : function(){
        if (!FC.available) {//不支持Flash
        	if(this._getQueryStrByName(key_iwt_cid)!=""){
        		req_url=JSONURL+"&_iwt_cid="+this._getQueryStrByName(key_iwt_cid)+"&_iwt_UA="+this._getUAId();
        	}else{
        		req_url=JSONURL+"&_iwt_UA="+this._getUAId();
        	}
        	getJSONP(req_url, function(v){var vv=v;_iwt_id=v;});
        } else {
            FC.initSWF(trackBaseFlash);
            setTimeout(function () {
                    if (!FC.inited) {
                        FC.available=false;
                        G[jsProxyFunction]=noop;
                        iwt.track();
                    }
            },3000); //3s后如果SWF没有回应，则认为SWF不可用
        }

    },
    /**
	 * api for recording video statics
	 * @param {String} video_id 影片独立编号
	 * @param {String} duration 影片总时长
	 * @param {String} video_category_label 分类标签
	 * @param {String} tag   "0":开始播放，"1"表示结束播放
	 */
	record_video_api: function(video_id,duration,video_category_label,tag){
		//开始播放
		if(tag+""=="0"){
			_u_eventid=this._getHashId(); //生成事件唯一ID
			this._feedBack_video(video_id,duration,video_category_label,tag);
			return;
		}
		//结束播放
		this._feedBack_video(video_id,duration,video_category_label,tag);
	},

	_feedBack_video: function(video_id,duration,video_category_label,tag) {
		// collect information
		var _m = ["ta=" + tag, // 开始结束标志
		"eid=" + _u_eventid, // 事件唯一ID
		"pt=" + encodeURIComponent(document.title), // 页面Title标签
		"vid=" + video_id, // 影片独立编号
		"du=" + duration, // 影片总时长
		"la=" + video_category_label, // 分类标签
		"_iwt_id=" + _iwt_id, // iwt sessionId
		"_iwt_UA="+this._getUAId(), //客户项目ID
		"r=" + new Date().getTime() // 随机字符串
		].join('&');

		// return as img request
		var _imgURL = dataHandler_video + '?' + _m;
		// return as image http request
		this._img = new Image();
		this._img.src = _imgURL;
	},

    _getHashId: function(){
		//get unique id
		var _pageUrl = location.href,
			_timeStamp = (new Date()).valueOf(),
			_ua = navigator.userAgent,
			_sid = '';
		_sid = this._md5([location.host, _pageUrl, _ua, _timeStamp,Math.random()].join(''));
		return _sid;
	},

	_getUAId:function(){
		//获取客户项目Id
	    if(typeof(_iwt_UA)=='undefined'){
	    	return "";
	    }
	    return _iwt_UA;
	},

	//根据QueryString参数名称获取值
	_getQueryStrByName: function(name){
	     var result = location.search.match(new RegExp("[\?\&]" + name+ "=([^\&]+)","i"));
	     if(result == null || result.length < 1){
	         return "";
	     }
	     return result[1];
	},

	_getCookie: function(c_name) {
		var i, x, y, ARRcookies = document.cookie.split(";");
		for (i = 0; i < ARRcookies.length; i++) {
			x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
			y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
			x = x.replace(/^\s+|\s+$/g, "");
			if (x == c_name) {
				return unescape(y);
			}
		}
	},

	//get referrer
	getReferrer: function() {
	    var referrer = '';
	    try {
	        referrer = window.top.document.referrer;
	    } catch(e) {
	        if(window.parent) {
	            try {
	                referrer = window.parent.document.referrer;
	            } catch(e2) {
	                referrer = '';
	            }
	        }
	    }
	    if(referrer == '') {
	        referrer = document.referrer;
	    }
	    return referrer;
	},

	_md5: function (string) {

		function RotateLeft(lValue, iShiftBits) {
			return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
		}

		function AddUnsigned(lX,lY) {
			var lX4,lY4,lX8,lY8,lResult;
			lX8 = (lX & 0x80000000);
			lY8 = (lY & 0x80000000);
			lX4 = (lX & 0x40000000);
			lY4 = (lY & 0x40000000);
			lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
			if (lX4 & lY4) {
				return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
			}
			if (lX4 | lY4) {
				if (lResult & 0x40000000) {
					return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
				} else {
					return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
				}
			} else {
				return (lResult ^ lX8 ^ lY8);
			}
		}

		function F(x,y,z) { return (x & y) | ((~x) & z); }
		function G(x,y,z) { return (x & z) | (y & (~z)); }
		function H(x,y,z) { return (x ^ y ^ z); }
		function I(x,y,z) { return (y ^ (x | (~z))); }

		function FF(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};

		function GG(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};

		function HH(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};

		function II(a,b,c,d,x,s,ac) {
			a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
			return AddUnsigned(RotateLeft(a, s), b);
		};

		function ConvertToWordArray(string) {
			var lWordCount;
			var lMessageLength = string.length;
			var lNumberOfWords_temp1=lMessageLength + 8;
			var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
			var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
			var lWordArray=Array(lNumberOfWords-1);
			var lBytePosition = 0;
			var lByteCount = 0;
			while ( lByteCount < lMessageLength ) {
				lWordCount = (lByteCount-(lByteCount % 4))/4;
				lBytePosition = (lByteCount % 4)*8;
				lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
				lByteCount++;
			}
			lWordCount = (lByteCount-(lByteCount % 4))/4;
			lBytePosition = (lByteCount % 4)*8;
			lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
			lWordArray[lNumberOfWords-2] = lMessageLength<<3;
			lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
			return lWordArray;
		};

		function WordToHex(lValue) {
			var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
			for (lCount = 0;lCount<=3;lCount++) {
				lByte = (lValue>>>(lCount*8)) & 255;
				WordToHexValue_temp = "0" + lByte.toString(16);
				WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
			}
			return WordToHexValue;
		};

		function Utf8Encode(string) {
			string = string.replace(/\r\n/g,"\n");
			var utftext = "";

			for (var n = 0; n < string.length; n++) {

				var c = string.charCodeAt(n);

				if (c < 128) {
					utftext += String.fromCharCode(c);
				}
				else if((c > 127) && (c < 2048)) {
					utftext += String.fromCharCode((c >> 6) | 192);
					utftext += String.fromCharCode((c & 63) | 128);
				}
				else {
					utftext += String.fromCharCode((c >> 12) | 224);
					utftext += String.fromCharCode(((c >> 6) & 63) | 128);
					utftext += String.fromCharCode((c & 63) | 128);
				}

			}

			return utftext;
		};

		var x=Array();
		var k,AA,BB,CC,DD,a,b,c,d;
		var S11=7, S12=12, S13=17, S14=22;
		var S21=5, S22=9 , S23=14, S24=20;
		var S31=4, S32=11, S33=16, S34=23;
		var S41=6, S42=10, S43=15, S44=21;

		string = Utf8Encode(string);

		x = ConvertToWordArray(string);

		a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

		for (k=0;k<x.length;k+=16) {
			AA=a; BB=b; CC=c; DD=d;
			a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
			d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
			c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
			b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
			a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
			d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
			c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
			b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
			a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
			d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
			c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
			b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
			a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
			d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
			c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
			b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
			a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
			d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
			c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
			b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
			a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
			d=GG(d,a,b,c,x[k+10],S22,0x2441453);
			c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
			b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
			a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
			d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
			c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
			b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
			a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
			d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
			c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
			b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
			a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
			d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
			c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
			b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
			a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
			d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
			c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
			b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
			a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
			d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
			c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
			b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
			a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
			d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
			c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
			b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
			a=II(a,b,c,d,x[k+0], S41,0xF4292244);
			d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
			c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
			b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
			a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
			d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
			c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
			b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
			a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
			d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
			c=II(c,d,a,b,x[k+6], S43,0xA3014314);
			b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
			a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
			d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
			c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
			b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
			a=AddUnsigned(a,AA);
			b=AddUnsigned(b,BB);
			c=AddUnsigned(c,CC);
			d=AddUnsigned(d,DD);
		}

		var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);

		return temp.toLowerCase();
	}

},
readyList,
isDomReady=false,
topWindow=false;


//将下列的函数作为局部函数便于压缩重命名为更短的名称

function trackBaseFlash() {
    //Flash加载成功
    FC.get(key_iwt_id,function (v) {
        //正常获取值
        if(!v){
            //获取到空值
        	if(iwt._getQueryStrByName(key_iwt_cid)!=""){
        		req_url=JSONURL+"&_iwt_cid="+iwt._getQueryStrByName(key_iwt_cid)+"&_iwt_UA="+iwt._getUAId();
        	}else{
        		req_url=JSONURL+"&_iwt_UA="+iwt._getUAId();
        	}
            getJSONP(req_url, function(v){FC.set(key_iwt_id,v);_iwt_id=v;});
        }else{
        	if(iwt._getQueryStrByName(key_iwt_cid)!=""){
        		req_url=JSONURL+v+"&_iwt_cid="+iwt._getQueryStrByName(key_iwt_cid)+"&_iwt_UA="+iwt._getUAId();
        	}else{
        		req_url=JSONURL+v+"&_iwt_UA="+iwt._getUAId();
        	}
            getJSONP(req_url, function(v){FC.set(key_iwt_id,v);_iwt_id=v;});
        }
    });
}

function getJSONP(url, callback){
    var s = D.createElement('script'),
        gid=FC.guid();
    G[gid]=function () {
        try{
            callback.apply(G,arguments);
            head.removeChild(s);
        }catch(e) {}
        G[gid]=undefined;
    };
    s.setAttribute('type','text/javascript');
    //注意服务器返回的JS的编码需与这里的设置一致
    s.setAttribute('charset','utf-8');
    var newurl=url + '&jsonp='+gid+'&';

    //加入3个自定义参数
    if(typeof(_iwt_p1)=='undefined'){
    	newurl=newurl+'_iwt_p1=&';
    }else{
    	newurl=newurl+'_iwt_p1='+_iwt_p1+'&';
    }

    if(typeof(_iwt_p2)=='undefined'){
    	newurl=newurl+'_iwt_p2=&';
    }else{
    	newurl=newurl+'_iwt_p2='+_iwt_p2+'&';
    }

    if(typeof(_iwt_p3)=='undefined'){
    	newurl=newurl+'_iwt_p3=&';
    }else{
    	newurl=newurl+'_iwt_p3='+_iwt_p3+'&';
    }


    //add referrer to url
    if(typeof(_iwt_no_referrer)!='undefined'&&!_iwt_no_referrer){
    	var ref=iwt.getReferrer();
    	if(ref!=''){
    		newurl=newurl+'ref='+encodeURIComponent(ref)+'&';
    	}
    }

    s.setAttribute('src' ,newurl);
    if (head.firstChild) {
        head.insertBefore(s,head.firstChild);
    } else {
        head.appendChild(s);
    }

}

//将iwt注册到全局
G._iwt=iwt;
iwt.FC=FC;


//直接运行
_iwt.track();


})(window,document);

/**
 * @path js/fn/global/login.js
 * @version 22836
 * @public 判断是否登陆的方法, 在初始化uid时这个函数还负责更新自动登陆
 * @note 在其他代码里可以不用直接调用这个函数，用uid来判断
 * @note u_login没有过期时间，关闭浏览器后失效
 * @note 这个函数跟flashloader里的版本有差异
 * @param {function} * cb是在已登陆状态下触发的回调函数
 */
var uid, _usr, _nic, isGuest, isXN, isSINA, isQZONE, isMSN, isTWEIBO, isKAIXIN, isFEIXIN, isYOUKU, ulvl;


function isLogined(cb){
	var cookie = TUI.cookie;
	if ( cookie("u_user") && cookie("u_id") ) {
		if ( cookie("u_login") ) {
			if (cb)
				cb(true);
		} else if ( cookie("u_passport_info") ) { // cookie失效，但勾选过记住我
			var ev = TUI.event, LOGINED = 'autoLogined';
			if (ev.status[LOGINED] || !ev.queue[LOGINED] || !ev.queue[LOGINED].length) {
				ev.disable(LOGINED).unbind(LOGINED).bind(LOGINED, cb || (function(){}));
				$(function(){
					$.getJSON(login_domain + '/login.do?act=ajaxAutoLogin&jsoncallback=?', function(e){
						ev.enable(LOGINED, [e]);
						//自动登录统计
						TUI.getRequest('http://stats.tudou.com/e/user/login/?v=1&s=' + juidStr + '|' + cookie("u_id") + '|2|1|-1|-1|1|1|' + new Date().getTime());
					});
				});
			} else if (cb) {
				ev.bind(LOGINED, cb);
			}
		} else {
			return false;
		}
		return true;
	}
	return false;
}

/**
 * 设置登陆用户信息（都是全局变量）
 */ 
function setUserInfo(){
	uid = isLogined() ? ( TUI.cookie("u_id") || 0 ) : 0;	//用户的唯一id，只要登陆后就一定会是非0的整数，可以用它来判断是否为登陆用户
	_usr = TUI.cookie("u_user");							//用户名，登陆后cookie里一定会存在
	_nic = TUI.cookie("u_nick") || window["_usr"];			//用户的昵称，cookie里没有时用_usr代替
	_ico = TUI.cookie("u_pic") || '';
	isGuest = !!uid; // isGuest用于一些旧页面，新页面不要用这个变量来判断登陆，统一用uid
	isXN = uid.toString() === (TUI.cookie('xn') || "").split('_')[0]; //校内绑定
	isSINA = !!TUI.cookie('sinawb'); //sina帐号？
	isQZONE = !!TUI.cookie('qzone'); //qz帐号
	isMSN = !!TUI.cookie('msn'); //qz帐号
	isTWEIBO = !!TUI.cookie('tweibo'); //腾讯微博帐号
	isKAIXIN = !!TUI.cookie('kaixin'); //开心网帐号
	isFEIXIN = !!TUI.cookie('feixin'); //飞信帐号
	isYOUKU = !!TUI.cookie('youku'); //优酷帐号
	ulvl = (uid ? TUI.cookie("u_l") : 0) || 0; //用户的豆花等级，兼容未登录用户
}

/**
 * @public 对未登陆用户弹出提示，自动跳转到登陆页并返回原页面
 * @note 不包含是否登陆的判断，请在调用前通过uid来判断
 * @param {string} * loginURL是当前页面的完整地址
 */
function needLogin(loginURL){
	TUI.confirm("只有注册用户才能使用这个小功能喔，你想要现在就去注册或者登录么？", function(){
		if(loginURL)
			setTimeout(function(){location = login_domain + '/login.do?service=' + encodeURIComponent(loginURL); },100);
		else
			setTimeout(function(){location = login_domain + '/login.do'; },100);
	});
	return false;
}

/**
 * @TODO 以下函数不再使用，需要逐步清理，看到使用它们的地方记得删除/修改
 */
function redirectSignIn(){
	return needLogin();
}
/**
 * @path js/fn/global/nav.js
 * @version 24115
 * @public 搜索框内视频数请求的回调函数
 * @note 因为请求的是缓存文件，url里不能有随机数，所以使用固定名称的回调函数
 */
if(!TUI.module.info('/fn/global/viewRecord')) {
	TUI.module.join(js_domain + "/js/fn/global/viewRecord_15.js");
	TUI.getRequest('http://istat.tudou.com/test.srv?r=' + Math.random() + '&url=' + encodeURIComponent(location.href));
}

function initNav(){
	//二级导航
	var tmSub = {}, subnav = $('#gTop .g-link-more'), t
	subnav.mouseenter(function(){
		var me = this;
		t && clearTimeout(t);
		t = setTimeout(function(){
			$(me).addClass('active');
		}, 100);
	}).mouseleave(function(){
		var me = this;
		t && clearTimeout(t);
		t = setTimeout(function(){
			$(me).removeClass('active');
		}, 200);
	});
	
	//导航观看记录
	var timer, viewRecord;
	if (!uid) {
		TUI.storage('logged-view-records@global').ready(function(data){
			TUI.storage('logged-view-records@global', '[]');			//用'[]'而不是false是为了fix ie6
		})
	};
	$('#uInfo').mouseover(function(e){
		var el = $(e.target).closest('#viewRecordNav');
		if (el.length) {
			if(timer) clearTimeout(timer);
			if(el.hasClass('active')) return;
			el.addClass('active');
			TUI.module.use("/fn/global/viewRecord", function(){
				if(!viewRecord) viewRecord = TUI.viewRecord();
				viewRecord.load();
			});
		}
	}).mouseout(function(e){
		var el = $(e.target).closest('#viewRecordNav');
		if (el.length) {
			timer = setTimeout(function(){
				el.removeClass('active');
			}, 200);
		}
	});
	
	//初始化搜索框上的下拉菜单（顶部和底部）
	var sub_domain = window.SUBDOMAIN || 'www';
	if($('#gTop')[0])
		TUI.getScript(main_domain + '/util/tools/' + sub_domain + '_hd.txt');
	
	var searchHint = window.TUI_searchHint = [];
	$('.g-search').forEach(function(box){
		box = $(box);
		//初始化搜索提示组件
		//TODO 移至html
		$('#gTop .g-search-text').addClass('tui_searchint');
		var input = box.find(".tui_searchint");
		if (input[0]) {
			var isPlaylist = input.hasClass('tui_searchint_playlist');
			var isCard = input.hasClass('tui_searchint_card');
			var args = {
				input : input[0],
				url : hint_domain,
				type: isPlaylist ? 'playlist' : isCard ? 'card':'programs',
				parent: box[0]
			};
			searchHint.push(TUI.searchHint(args));
		}
	});	

	// 底部导航sitemap折叠
	var cateTab = $('#gBot .g-category a'),
		cateItem = $('#gBot .g-cateitem');

	cateTab.click(function(){
		var t = $(this),
			n = parseInt(t.attr('rel')) - 1;

		if (!t.hasClass('current')) {
			cateTab.removeClass('current');
			t.addClass('current');
			cateItem.hide();
			cateItem.eq(n).show();
		} else {
			t.removeClass('current');
			cateItem.hide();
		}

		return false;
	});
	
	//用户信息
	if(uid){
		showLoginStatus();
	}
	
	//用户登录
	$('#login').click(function(){
		if(isLogined()){ //多标签页状态同步
			setUserInfo();
			showLoginStatus();
		}else{
			TUI.module.use("/fn/tuidefer2", function(){
				TUI.needLogin(function(){});
			});
		}
		return false;
	});
	
}



function _initHeader(data){
	try{
		//通常应用于顶部和底部两个搜索框
	    $('.g-search-text').each(function(){
	    	var cache= '搜视频', me=this, hotwords = [];
	    	
	    	$(this).parents('form').submit(function(){
	    		if(me.value==cache)return false;
				return keySearch(this);
	    	});
			
	    	$(this).blur(function(){
	    		if( $(this).val().match(/\S/)==null ){
	    			$(this).val(cache);
	    			$(this).addClass("g-search-focus");
	    		}
	    	});
	    	$(this).focus(function(){
	    		if( $(this).val()==cache ){
	    			$(this).val('');
	    		}
	    		$(this).removeClass("g-search-focus");
	    	});
			//必须在以上事件绑定之后再作下面这些初始化
	    	$(function() {
				if( !me["_gs_focus"] && ( !me.value || me.value == cache ) ){
					$(me).val(cache);
					$(me).addClass("g-search-focus");
				}
			});
			// 搜索框关键热词
			if (data && data.sk) {
				data.sk.forEach(function(t, i){
					if (i > 1) return false;
					hotwords.push('<li><a target="_blank" href="' + t[1] + '">' + TUI.escapeHTML(t[0]) + '</a></li>');
				});
				$('.g-hotwords').html(hotwords.join(''));
			}
	    });
	}catch(e){}	
}
/**
 * @public 生成搜索表单提交的地址
 * @note  生成这样形式的地址："http://so.tudou.com/isearch/keyword/"
 * @requires jQuery.fn.attr
 * @param {DOM} f是搜索框所在的form
 */
function keySearch(f, p){
	//通过form上的自定义属性“searchtype”来判断是否为google/baidu搜索的状态
	/* if( $(f).attr("searchtype") == "web" ) return true; */
	
	var kw = "", params = [], inputs =  $(f).find('input');
	inputs.each(function(n){
		//带有name，但是不希望被提交的input，请加上disabled
		var dis = $(this).attr("disabled");
		if( dis || dis == "disabled" )
			return true;
			
		var a = $(this).attr("name");
		
		if( a == "kw" ){
			//搜索框的值，需要过滤"/","\","#","%"
			kw = encodeURIComponent( this.value.replace(/[\/\\#%]/g, ' ') );
		}else if(a){
			//form里其他有name和value的input，转化为用"_"连接的字符串
			params.push(a);
			params.push(this.value);
		}
	});
	//html里的action属性，要求必须包含搜索请求的域名和路径，比如"http://so.tudou.com/isearch.do", js只转换后面的部分
	var link = $(f).attr("action").replace(/(\/\w+?search).*$/,"$1/" + ( kw ? ( kw + ($(f).attr('hint') ? '/?f=hint' : '/') ) : "" ) + params.join("_") );
	TUI.openURL(link, $(f).attr("target"));
	$(f).removeAttr('hint').attr("action", search_domain + '/nisearch.do');
	
	return false;
}

/**
 * @public 修改导航栏上的登陆信息
 * @note 对于有特殊需求的页面，增加usr.js覆盖这个方法
 */
function showLoginStatus(){
	var prefix = (isXN && 'xn') || (isSINA && 'sina') || (isQZONE && 'qzone') || (isMSN && 'msn') || (isTWEIBO && 'tweibo') || (isYOUKU && 'youku') || (isKAIXIN && 'kaixin')|| (isFEIXIN && 'feixin') || '';
	$("#uInfo").html(TUI.convertTpl('fn/loginedNav.tpl', {
		prefix: prefix,
		nic: _nic,
		usr: _usr,
		ico: _ico,
		random: Math.random(),
		login_domain: login_domain,
		main_domain: main_domain
	}));
	
	//我的土豆
	var el = $('#myTudouNav'), timer; 
	el.mouseover(function(){
		if(timer)clearTimeout(timer);
		el.addClass('active');
	}).mouseout(function(){
		 timer = setTimeout(function(){
			el.removeClass('active');
		}, 200);
	});	
}

function initLogined() {
	if( uid )
		showLoginStatus();
}

/**
 * @path js/fn/global/notify.tpl
 * @version 21548
 */
var tpl_fn_global_notify ='<div class="tui_mesbox_wrap"> <table class="tui_mesbox"> <tr> <td class="round left_top"></td> <td class="line top"></td> <td class="round right_top"></td> </tr> <tr> <td class="line left"></td> <td class="center"> <div class="container"> <ul id="globalNotifier"> <%content.forEach(function(item){%> <li><a href="<%=item.url%>" target="<%=item.target%>"><%=item.num%><%=item.label%></a></li> <%});%> </ul> <a href="#" class="close"></a> </div> </td> <td class="line right"></td> </tr> <tr> <td class="round left_bottom"></td> <td class="line bottom"></td> <td class="round right_bottom"></td> </tr> </table> </div>  ';
/**
 * @path js/fn/global/notify.js
 * @version 22295
 */

function initNotify(){
	var wrap, $win = $(window), tpl = 'fn/global/notify.tpl',
		msgType = {
			'unrdsysmsg': {url: message_domain + '/sysMsgList.html', label: '条新系统消息'},
			'fans': {url: tui_domain + '/fans/', label: '个新粉丝'},
			'groupinv': {url: main_domain + '/my/groups/myInvites.html', label: '个小组邀请'},
			'groupnot': {url: main_domain + '/my/groups/myMsgs.html', label: '条小组公告'},
			'plistupd': {url: tui_domain + '/got/playlists.html', label: '个豆单更新'},
			'unrdmsg': {url: message_domain + '/msgList.html', label: '条未读私信'},
			'atme':{url: tui_domain + '/atme/', label: '条提到我'},
			'comment':{url: tui_domain + '/comment/', label: '条给我的评论'},
			'upvideomsg':{url: main_domain + '/my/programs/?t=3#itemList/?page=1&sort=1&desc=true&re=true', label: '个视频的画质更新'}
		};
	if(!isLogined()) {
		return;
	}
	TUI.domain.join({
		message: 'message.tudou.com'
	});
	TUI.storage('notify_time@global').ready(function(v) {
		var now = +new Date();
		//4小时之内不再显示
		if(v && now < 14400000 + parseInt(v, 10)) {
			return;
		}
		
		//转移加载的控制权
		TUI.event.bind('readyLoadNotify', function(op){
			loadNotify(op);
		});	
		if(TUI.event.fire('beforeLoadNotify', [loadNotify], true) !== false){
			loadNotify();
		}
	});
	
	var positionNotify = (function(TUI){
		var timer, fixed = false, scrollTop = $(window).scrollTop(), ie6 = TUI.browser.ie == 6;
		return function(e){
			var cur = $(window).scrollTop();
			if(ie6){
				if(timer)
					clearTimeout(timer);
				timer = setTimeout(function(){
					wrap[cur > scrollTop ? 'animate' : 'css']({ top: cur > 30 ? cur: 30 });
					scrollTop = cur;
				}, 300);
			}else{
				if (cur > 30) {
					if (!fixed) {
						wrap.parent().css({ position: 'fixed' });
						wrap.css({ top: 0 });
						fixed = true;
					}
				} else {
					if (fixed) {
						wrap.parent().css({ position: 'absolute' });
						wrap.css({ top: 30 });
						fixed = false;
					}
				}
				scrollTop = cur;
			}
		};
	})(TUI);
	
	function loadNotify(op){
		op = $.extend({
			target: '_blank'
		}, op || {});
		$.get(message_domain + '/getMsgNum.html', { _: +new Date() }, function(data) {
			if(!data.has)return;
			var el = $('#globalNotifier'), content = [];
			
			for(var i in data){
				if($.type(msgType[i]) === 'undefined') continue;
				msgType[i].num = data[i];
				msgType[i].target = op.target;
				content.push(msgType[i]);
			}
			
			if(!el.length){
				content = $(TUI.convertTpl(tpl, {content: content}));
				$win.scroll(positionNotify).resize(positionNotify);
				content.find('a.close').click(function() {
					content.remove();
					TUI.storage('notify_time@global', +new Date());
					return false;
				});
				content.find('ul').delegate('a', 'click', function(){
					$(this).remove();
					if(content.find('ul a').length == 0) {
						content.remove();
					}
					return true;
				});
				if(window['douwan'] && document.title == '豆丸') {
					$(document.body).append(content);
				} else {
					$('#gTop').append(content);
				}
				wrap = $('#gTop .tui_mesbox');
				positionNotify();
			}else{
				el.html(content);
			}
		}, 'jsonp');
	}
}

/**
 * @path js/fn/global/translate.js
 * @version 22595
 */
function initTranslate(){
	if(!TUI.module.info('/fn/translate'))
		TUI.module.join(js_domain + "/js/fn/translate_4.js");
	var cur = parseInt($.cookie('lang')),
		handler = $('#translate_s2t');
	handler.html(cur ? '简体版' : '繁體版').click(cur ? toSimplify : toTranditional);

	function toTranditional(e){
		var self = this;
		TUI.module.use('/fn/translate', function(){
			$.cookie('lang', 1, {domain: 'tudou.com', path: '/', expires: 1000});
			TUI.translate.traditionalized();
			self.innerHTML = '简体版';
			$('.g_notify').hide();
			handler.unbind().click(toSimplify);
		});
		e.preventDefault();
	}
	function toSimplify(e){
		$.cookie('lang', 1, {domain: 'tudou.com', path: '/', expires: -1});
		e.preventDefault();
		location.reload();
	}		
}
/**
 * @path js/fn/global/ios.js
 * @version 21483
 */
function initIOS(){
	if (TUI.browser.iOS != 'ipad') {
		var userAgent = navigator.userAgent.toLowerCase();
		var ios_version = (userAgent.match(/os\s+([\d_]+)\s+like\s+mac\s+os/) || [])[1].split('_');
		if (!ios_version[0] || ios_version[0] < 4) {
			location.replace('http://m.tudou.com');
			return;
		}
	}
	
	TUI.swfobject.setPluginspageTpl(function(oldfn){
		var video = findVideo(this);
		if (!video.iid && !video.code || !video.iOSType)
			return oldfn();
		return '<a id=<%=id%> class="tui_noflashPlayer" href="#" style="width:<%=width%>;height:<%=height%>;display:block;overflow:hidden;cursor:pointer;<%=style%>" onclick="<%=fn%>(this)">' +
					'<div class="play_btn"></div>' + (video.frame1 ? '<img src="' + video.frame1 + '"/>' : '点击播放') + '</a>';
	});

	TUI.swfobject.setPluginspage(function(oldfn){
		var video = findVideo(this), myiid = video.iid, mycode = video.code, attrs = this.attrs;
		var data = { type: video.iOSType };
		if (!myiid && !mycode || !data.type)
			return oldfn.apply(TUI.swfClass, arguments);
		if (myiid)
			data.iid = myiid;
		if (mycode)
			data.code = mycode;
		var me = $('#' + attrs.id)[0];
		me.innerHTML = '';
		me.style.background = "#000";
		$.getJSON("http://v.tudou.com/RealtimeDecodeDispatcher/DispatchServlet?jsoncallback=?", data, function(json){
			//var html = TUI.renderTpl('<embed src="' + json.src + '" name="<%=name%>_qk" id="<%=id%>_qk" height="<%=height%>" width="<%=width%>" type="video/quicktime" AUTOPLAY="true" BGCOLOR="#000000" CONTROLLER="true" ENABLEJAVASCRIPT="true" LOOP="true" />', attrs);
			var html = TUI.renderTpl('<video id="<%=id%>_ts" name="<%=name%>_ts" controls="controls" height="<%=height%>" width="<%=width%>"></video>', attrs);
			me.innerHTML = html;
			var video = $('#' + attrs.id + '_ts')[0];
			video.src = json.src;
			if (TUI.browser.iOS == 'ipad') {
				video.load();
				video.play();
			}
		});
		return false;
	});
	
	
	if (!window.isPlayPage) {
		showFavor();
	}	
	

	function findVideo(self){
		var attrs = self.attrs, flashvars = self.flashvars, src = attrs.src;
		// 焦点播放器
		var myiid = (src.match(/\?.*iid\=(\d+)/) || [])[1] || flashvars.iid;
		// 站外播放器
		var mycode = (src.match(/tudou\.com\/v\/([\w-]{11})\//) || [])[1] || flashvars.code || flashvars.tui_code;
		var frame1 = flashvars.tui_frame1;
		var type = ({ 'ipad': 9, 'iphone': 8, 'ipod': 10 })[TUI.browser.iOS];
		return { iid: myiid, code: mycode, frame1: frame1, iOSType: type };
	}
	
	// ios平台上显示收藏提示
	function showFavor(){
		TUI.module.use('/fn/tuidefer2', function(){
			var iostype = TUI.browser.iOS;
			if (iostype && !navigator.standalone) {
				TUI.storage('ios-bubble-disable@global').ready(function(v){
					if (!v) {
						TUI.getScript('http://js.tudouui.com/js/fn/iosbubble_1.js');
					}
				});
			}
		});
	}
}
/**
 * @path js/fn/global/tuidefer.js
 * @version 22595
 */
if(!TUI.module.info('/fn/tuidefer2'))
	TUI.module.join(js_domain + "/js/fn/tuidefer2_2.js");
function initTuidefer(){
	TUI.module.use("/fn/tuidefer2", function(){
		TUI.panelBackup = TUI.panel; //防止其他页面覆盖panel
	});
}

/**
 * @path js/fn/loginedNav.tpl
 * @version 21960
 */
var tpl_fn_loginedNav ='<% var isNeedBlank = false; if(window.isPlayPage) isNeedBlank = true; %> <% if (prefix) { %> <li class="ulogo <%=prefix%>"><b></b></li> <% } else if (ico) { %> <li class="ulogo"><a href="<%=main_domain%>/home/<%=usr%>" target="_blank"><img src="<%=ico%>" width="21" height="21" alt="" /></a></li> <% } %> <li class="uname"><% if (!ico) { %><b></b><% } %><a href="<%=main_domain%>/home/<%=usr%>" target="_blank"><%=TUI.substr(nic,12)%></a></li> <li class="g-viewlist view_record" id="viewRecordNav"> <span class="handle"><b></b><a href="<%=main_domain%>/my/programs/afertLogInWatched.html#watched" <%if(isNeedBlank){%>target="_blank"<%}%>>我看过的</a></span> <div class="g-viewlist-nav" id="viewRecordWrap"> <div class="sub_tp"></div> <div class="sub_bd"> <p id="viewRecordNotify" class="viewRecord_notify"><img src="http://css.tudouui.com/skin/__g/img/loading3.gif"></p> <div id="viewRecordContainer" class="viewRecord_container"></div> <div id="viewRecordDo" class="viewRecord_do"><a href="<%=main_domain%>/my/programs/afertLogInWatched.html#watched/?page=1&sort=1&desc=true&save=true" id="viewRecordImport" class="import" <%if(isNeedBlank){%>target="_blank"<%}%>>导入本地观看记录</a><a class="more" href="<%=main_domain%>/my/programs/afertLogInWatched.html" <%if(isNeedBlank){%>target="_blank"<%}%>>更多&gt;&gt;</a></div> </div> <div class="sub_ft"> <a href="<%=main_domain%>/my/playlist/list/quicklist.html" <%if(isNeedBlank){%>target="_blank"<%}%>>我的点播单(<em id="quickNum">0</em>)</a> </div> </div> </li> <li class="g-mytudou" id="myTudouNav"> <span class="handle"><b></b><a href="<%=main_domain%>/my/tui/got/" <%if(isNeedBlank){%>target="_blank"<%}%>>我的土豆</a></span> <div class="g-user-nav"> <ul> <li class="i_1"><b></b><a href="<%=main_domain%>/my/tui/follow/" <%if(isNeedBlank){%>target="_blank"<%}%>>我关注的</a></li> <li class="i_2"><b></b><a href="<%=main_domain%>/my/tui/atme/" <%if(isNeedBlank){%>target="_blank"<%}%>>提到我的</a></li> <li class="i_3"><b></b><a href="<%=main_domain%>/my/tui/comment/" <%if(isNeedBlank){%>target="_blank"<%}%>>我的评论</a></li> <li class="i_4"><b></b><a href="<%=main_domain%>/my/tui/act/" <%if(isNeedBlank){%>target="_blank"<%}%>>我推过的</a></li> <li class="i_5"><b></b><a href="<%=main_domain%>/my/programs/#itemList" <%if(isNeedBlank){%>target="_blank"<%}%>>我上传的</a></li> <li class="i_6"><b></b><a href="<%=main_domain%>/my/playlist/#getMyPlaylists" <%if(isNeedBlank){%>target="_blank"<%}%>>我编辑的</a></li> <li class="i_7"><b></b><a href="<%=main_domain%>/my/programs/#favorite" <%if(isNeedBlank){%>target="_blank"<%}%>>我私藏的</a></li> <li class="i_8"><b></b><a href="<%=main_domain%>/my/groups/" <%if(isNeedBlank){%>target="_blank"<%}%>>我的小组</a></li> <li class="i_9"><b></b><a href="http://payment.tudou.com/payment/myOrder.html" <%if(isNeedBlank){%>target="_blank"<%}%>>我的订单</a></li> <li class="i_10"><b></b><a href="<%=main_domain%>/my/setting/info.action" <%if(isNeedBlank){%>target="_blank"<%}%>>个人设置</a></li> <li class="i_11"><b></b><a href="http://message.tudou.com/msgList.html" <%if(isNeedBlank){%>target="_blank"<%}%>>私信</a></li> <li class="logout"><a href="<%=login_domain%>/loginOut.do?r=<%=random%>">退出</a></li> </ul> </div> </li> <li class="g-upload"><b></b><a href="<%=main_domain%>/my/program/publish.html" <%if(isNeedBlank){%>target="_blank"<%}%>>上传视频</a></li> <li class="g-help"><b></b><a href="<%=main_domain%>/service/?type=feedback" <%if(isNeedBlank){%>target="_blank"<%}%>>帮助反馈</a></li> ';
/**
 * @path js/fn/global/global.js
 * @version $Rev: 24282 $
 * @path STATIC/js/fn/global/global.js
 * @modified  $
 */


//不能直接使用alert，防止误操作
TUI.howl = function(s){
	alert(s);
};

initTuidefer();
TUI.event = new TUI.eventClass();
initJuid();
setUserInfo();

$(function(){
	COMSCORE.send();
	tudouStat.send();
	tudouStat.initCatch();
	tudouClickStat.init();
	youkuStat.send();
	
	initNav();
	TUI.widget.quickPlaylist.load();
	initTranslate();
	setTimeout(function(){
		initNotify();
	}, 1000);
	
	if(TUI.browser.iOS)
		initIOS();
	

	// fix flash bug 
	// @link http://bugs.adobe.com/jira/browse/FP-240)

	// 备份标题栏内容，防止被FLASH BUG覆盖
	if (!window._originTitle) {
		window._originTitle = document.title;
	}

	TUI.setTitle = function(v){
		document.title = v;
		window._originTitle = v;
	};

	if (TUI.browser.ie) {
		document.title = window._originTitle;
		$(document).bind('mouseup', function(ev){
			var t = ev.target;
			if (({'EMBED':1,'OBJECT':1})[t.nodeName]) {
				document.title = window._originTitle;
			}
		});
	}
	// fix flash bug end
	
});

TUI.type = $.type;
TUI.isPlainObject = $.isPlainObject;

TUI.prompt = function(text, target, clock, any){
	TUI.module.use("/fn/tuidefer2", function(){
		TUI.prompt(text, target, clock, any);	
	});
};

TUI.fixPosition = function(elm, op){
	TUI.module.use("/fn/tuidefer2", function(){
		TUI.fixPosition(elm, op);
	});
};

TUI.parseUrlHash = function(s){
	var r = TUI.urlkit.parseHash(s), o = r.pop(), empty = 1;
	for (var i in o) {
		empty = 0;
	}
	if (!empty) {
		r.push(o);
	}
	return r;
};

//ie6缓存背景图
if($.browser.version == '6.0') {
	document.execCommand('BackgroundImageCache', false, true);
}
window.console = window.console || function(){}
/**
 * @path js/model/common.js
 * @version 23924
 * @path STATIC/js/model/common.js
 * @modified  $
 */
TUI.ns('TUI.model.common', {
	getProgramUrl: function(icode){
		return main_domain + '/programs/view/' + icode + '/';
	},
	getPlaylistUrl: function(lid, op){
		if(!lid)return '';
		op = op || {};
		var tpl = main_domain + (op.lcode ? '/listplay/<%=lcode%><%=icode%>.html<%=params%>' : lid != -1 ? '/playlist/p/l<%=lid%><%=iid%>.html<%=params%>' : '/playlist/play/quicklist.html<%=params%>'), 
			data = {lid: lid}, 
			iid,
			lcode,
			icode,
			params;
		if(TUI.isPlainObject(op)){
			iid = op.iid;
			lcode = op.lcode;
			icode = op.icode;
			delete op.iid;
			delete op.lcode;
			delete op.icode;
		}else{
			iid = op;
			op = {};
		}
		if(iid && lid != -1){
			data.iid = 'i' + iid;
		}
		if(lcode){
			data.lcode = lcode;
		}
		if(icode){
			data.icode = '/' + icode;
		}
		if(lid == -1){//便利豆单
			op.iid = iid;
		}
		params = $.param(op);
		if(params)
			data.params = '?' + params;
		return TUI.renderTpl(tpl, data);
	},
	getPlayalbumUrl: function(aid, op){
		if(!aid)return '';
		op = op || {};
		var tpl = main_domain + (op.acode ? '/albumplay/<%=acode%><%=icode%>.html<%=params%>' : '/playlist/p/a<%=aid%><%=iid%>.html<%=params%>'), data = {aid: aid}, iid, acode, icode, params;
		if(TUI.isPlainObject(op)){
			iid = op.iid;
			acode = op.acode;
			icode = op.icode;
			delete op.acode;
			delete op.icode;
			delete op.iid;
		}else{
			iid = op;
			op = {};
		}
		if(iid){
			data.iid = 'i' + iid;
		}	
		if(acode){
			data.acode = acode;
		}
		if(icode){
			data.icode = '/' + icode;
		}
		params = $.param(op);
		if(params)
			data.params = '?' + params;
		return TUI.renderTpl(tpl, data);
	},
	getPlayOtherUrl: function(ocode, op){
		if(!ocode)return '';
		op = op || {};
		var tpl = main_domain + '/oplay/<%=ocode%><%=icode%><%=params%>',data = {ocode: ocode}, icode, params;
		if(TUI.isPlainObject(op)){
			icode = op.icode;
			delete op.icode;
		}else{
			icode = op;
			op = {};
		}
		if(icode){
			data.icode = '/' + icode + '.html';
		}
		params = $.param(op);
		if(params)
			data.params = '?' + params;
		return TUI.renderTpl(tpl, data);
	},
	getUserHomeUrl: function(uname){
		return main_domain + '/home/' + uname;
	},
	parseUrl: function(url){
		var matched = url.match(/programs\/view\/([\w-]{11})\/?/);
		if (matched) 
			return { type: 'program', code: matched[1] };
			
		matched = url.match(/playlist\/p\/l(\d+)(i(\d+)){0,1}\.html/);
		if (matched) 
			return { type: 'playlist', lid: matched[1], iid: matched[3] }
		
		matched = url.match(/playlist\/p\/a(\d+)(i(\d+)){0,1}\.html/);
		if (matched) 
			return { type: 'album', aid: matched[1], iid: matched[3] }
			
		return {type: '', code: ''};
	}
});

TUI.ns('TUI.Model.common', TUI.model.common); 

/**
 * @path js/lib/tuilib2.js
 * @version 21898
 */
