//此文件仅为合并入口文件，请不要写任何代码

    /*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.2",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)
}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});




// THIS FILE IS GENERATED - DO NOT EDIT!
/*!mobile-detect v1.3.3 2016-07-31*/
/*global module:false, define:false*/
/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
(function (define, undefined) {
define(function () {
    'use strict';

    var impl = {};

    impl.mobileDetectRules = {
    "phones": {
        "iPhone": "\\biPhone\\b|\\biPod\\b",
        "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+",
        "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
        "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
        "Dell": "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
        "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
        "Samsung": "Samsung|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F",
        "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
        "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
        "Asus": "Asus.*Galaxy|PadFone.*Mobile",
        "NokiaLumia": "Lumia [0-9]{3,4}",
        "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
        "Palm": "PalmSource|Palm",
        "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
        "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
        "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
        "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
        "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
        "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
        "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
        "Alcatel": "Alcatel",
        "Nintendo": "Nintendo 3DS",
        "Amoi": "Amoi",
        "INQ": "INQ",
        "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
    },
    "tablets": {
        "iPad": "iPad|iPad.*Mobile",
        "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)",
        "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561",
        "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI)\\b",
        "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
        "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
        "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K017 |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA",
        "BlackBerryTablet": "PlayBook|RIM Tablet",
        "HTCtablet": "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
        "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
        "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
        "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20",
        "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
        "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
        "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
        "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
        "LenovoTablet": "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
        "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
        "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
        "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
        "ArnovaTablet": "AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
        "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
        "IRUTablet": "M702pro",
        "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
        "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
        "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
        "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
        "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
        "NokiaLumiaTablet": "Lumia 2520",
        "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
        "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
        "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
        "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
        "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
        "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
        "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
        "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
        "FlyTablet": "IQ310|Fly Vision",
        "bqTablet": "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris E10)|Maxwell.*Lite|Maxwell.*Plus",
        "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
        "NecTablet": "\\bN-06D|\\bN-08D",
        "PantechTablet": "Pantech.*P4100",
        "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
        "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
        "ZyncTablet": "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
        "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
        "NabiTablet": "Android.*\\bNabi",
        "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
        "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
        "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
        "PlaystationTablet": "Playstation.*(Portable|Vita)",
        "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
        "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
        "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
        "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
        "GalapadTablet": "Android.*\\bG1\\b",
        "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
        "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
        "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
        "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
        "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
        "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
        "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
        "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
        "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
        "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
        "DPSTablet": "DPS Dream 9|DPS Dual 7",
        "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
        "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
        "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
        "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
        "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
        "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
        "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
        "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
        "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
        "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
        "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
        "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
        "iMobileTablet": "i-mobile i-note",
        "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
        "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
        "AMPETablet": "Android.* A78 ",
        "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
        "TecnoTablet": "TECNO P9",
        "JXDTablet": "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
        "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
        "FX2Tablet": "FX2 PAD7|FX2 PAD10",
        "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
        "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
        "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
        "CaptivaTablet": "CAPTIVA PAD",
        "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
        "TeclastTablet": "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
        "OndaTablet": "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
        "JaytechTablet": "TPC-PA762",
        "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
        "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
        "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
        "LavaTablet": "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
        "AocTablet": "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
        "MpmanTablet": "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
        "CelkonTablet": "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
        "WolderTablet": "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
        "MiTablet": "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
        "NibiruTablet": "Nibiru M1|Nibiru Jupiter One",
        "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
        "LeaderTablet": "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
        "UbislateTablet": "UbiSlate[\\s]?7C",
        "PocketBookTablet": "Pocketbook",
        "KocasoTablet": "\\b(TB-1207)\\b",
        "Hudl": "Hudl HT7S3|Hudl 2",
        "TelstraTablet": "T-Hub2",
        "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bJolla\\b|\\bTP750\\b"
    },
    "oss": {
        "AndroidOS": "Android",
        "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
        "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
        "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
        "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
        "WindowsPhoneOS": "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
        "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad",
        "MeeGoOS": "MeeGo",
        "MaemoOS": "Maemo",
        "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
        "webOS": "webOS|hpwOS",
        "badaOS": "\\bBada\\b",
        "BREWOS": "BREW"
    },
    "uas": {
        "Vivaldi": "Vivaldi",
        "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
        "Dolfin": "\\bDolfin\\b",
        "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+|Coast\/[0-9.]+",
        "Skyfire": "Skyfire",
        "Edge": "Mobile Safari\/[.0-9]* Edge",
        "IE": "IEMobile|MSIEMobile",
        "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
        "Bolt": "bolt",
        "TeaShark": "teashark",
        "Blazer": "Blazer",
        "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
        "Tizen": "Tizen",
        "UCBrowser": "UC.*Browser|UCWEB",
        "baiduboxapp": "baiduboxapp",
        "baidubrowser": "baidubrowser",
        "DiigoBrowser": "DiigoBrowser",
        "Puffin": "Puffin",
        "Mercury": "\\bMercury\\b",
        "ObigoBrowser": "Obigo",
        "NetFront": "NF-Browser",
        "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
        "PaleMoon": "Android.*PaleMoon|Mobile.*PaleMoon"
    },
    "props": {
        "Mobile": "Mobile\/[VER]",
        "Build": "Build\/[VER]",
        "Version": "Version\/[VER]",
        "VendorID": "VendorID\/[VER]",
        "iPad": "iPad.*CPU[a-z ]+[VER]",
        "iPhone": "iPhone.*CPU[a-z ]+[VER]",
        "iPod": "iPod.*CPU[a-z ]+[VER]",
        "Kindle": "Kindle\/[VER]",
        "Chrome": [
            "Chrome\/[VER]",
            "CriOS\/[VER]",
            "CrMo\/[VER]"
        ],
        "Coast": [
            "Coast\/[VER]"
        ],
        "Dolfin": "Dolfin\/[VER]",
        "Firefox": "Firefox\/[VER]",
        "Fennec": "Fennec\/[VER]",
        "Edge": "Edge\/[VER]",
        "IE": [
            "IEMobile\/[VER];",
            "IEMobile [VER]",
            "MSIE [VER];",
            "Trident\/[0-9.]+;.*rv:[VER]"
        ],
        "NetFront": "NetFront\/[VER]",
        "NokiaBrowser": "NokiaBrowser\/[VER]",
        "Opera": [
            " OPR\/[VER]",
            "Opera Mini\/[VER]",
            "Version\/[VER]"
        ],
        "Opera Mini": "Opera Mini\/[VER]",
        "Opera Mobi": "Version\/[VER]",
        "UC Browser": "UC Browser[VER]",
        "MQQBrowser": "MQQBrowser\/[VER]",
        "MicroMessenger": "MicroMessenger\/[VER]",
        "baiduboxapp": "baiduboxapp\/[VER]",
        "baidubrowser": "baidubrowser\/[VER]",
        "Iron": "Iron\/[VER]",
        "Safari": [
            "Version\/[VER]",
            "Safari\/[VER]"
        ],
        "Skyfire": "Skyfire\/[VER]",
        "Tizen": "Tizen\/[VER]",
        "Webkit": "webkit[ \/][VER]",
        "PaleMoon": "PaleMoon\/[VER]",
        "Gecko": "Gecko\/[VER]",
        "Trident": "Trident\/[VER]",
        "Presto": "Presto\/[VER]",
        "Goanna": "Goanna\/[VER]",
        "iOS": " \\bi?OS\\b [VER][ ;]{1}",
        "Android": "Android [VER]",
        "BlackBerry": [
            "BlackBerry[\\w]+\/[VER]",
            "BlackBerry.*Version\/[VER]",
            "Version\/[VER]"
        ],
        "BREW": "BREW [VER]",
        "Java": "Java\/[VER]",
        "Windows Phone OS": [
            "Windows Phone OS [VER]",
            "Windows Phone [VER]"
        ],
        "Windows Phone": "Windows Phone [VER]",
        "Windows CE": "Windows CE\/[VER]",
        "Windows NT": "Windows NT [VER]",
        "Symbian": [
            "SymbianOS\/[VER]",
            "Symbian\/[VER]"
        ],
        "webOS": [
            "webOS\/[VER]",
            "hpwOS\/[VER];"
        ]
    },
    "utils": {
        "Bot": "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
        "MobileBot": "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker\/M1A1-R2D2",
        "DesktopMode": "WPDesktop",
        "TV": "SonyDTV|HbbTV",
        "WebKit": "(webkit)[ \/]([\\w.]+)",
        "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
        "Watch": "SM-V700"
    }
};

    // following patterns come from http://detectmobilebrowsers.com/
    impl.detectMobileBrowsers = {
        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        tabletPattern: /android|ipad|playbook|silk/i
    };

    var hasOwnProp = Object.prototype.hasOwnProperty,
        isArray;

    impl.FALLBACK_PHONE = 'UnknownPhone';
    impl.FALLBACK_TABLET = 'UnknownTablet';
    impl.FALLBACK_MOBILE = 'UnknownMobile';

    isArray = ('isArray' in Array) ?
        Array.isArray : function (value) { return Object.prototype.toString.call(value) === '[object Array]'; };

    function equalIC(a, b) {
        return a != null && b != null && a.toLowerCase() === b.toLowerCase();
    }

    function containsIC(array, value) {
        var valueLC, i, len = array.length;
        if (!len || !value) {
            return false;
        }
        valueLC = value.toLowerCase();
        for (i = 0; i < len; ++i) {
            if (valueLC === array[i].toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    function convertPropsToRegExp(object) {
        for (var key in object) {
            if (hasOwnProp.call(object, key)) {
                object[key] = new RegExp(object[key], 'i');
            }
        }
    }

    (function init() {
        var key, values, value, i, len, verPos, mobileDetectRules = impl.mobileDetectRules;
        for (key in mobileDetectRules.props) {
            if (hasOwnProp.call(mobileDetectRules.props, key)) {
                values = mobileDetectRules.props[key];
                if (!isArray(values)) {
                    values = [values];
                }
                len = values.length;
                for (i = 0; i < len; ++i) {
                    value = values[i];
                    verPos = value.indexOf('[VER]');
                    if (verPos >= 0) {
                        value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
                    }
                    values[i] = new RegExp(value, 'i');
                }
                mobileDetectRules.props[key] = values;
            }
        }
        convertPropsToRegExp(mobileDetectRules.oss);
        convertPropsToRegExp(mobileDetectRules.phones);
        convertPropsToRegExp(mobileDetectRules.tablets);
        convertPropsToRegExp(mobileDetectRules.uas);
        convertPropsToRegExp(mobileDetectRules.utils);

        // copy some patterns to oss0 which are tested first (see issue#15)
        mobileDetectRules.oss0 = {
            WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
            WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
        };
    }());

    /**
     * Test userAgent string against a set of rules and find the first matched key.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {String|null} the matched key if found, otherwise <tt>null</tt>
     * @private
     */
    impl.findMatch = function(rules, userAgent) {
        for (var key in rules) {
            if (hasOwnProp.call(rules, key)) {
                if (rules[key].test(userAgent)) {
                    return key;
                }
            }
        }
        return null;
    };

    /**
     * Test userAgent string against a set of rules and return an array of matched keys.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {Array} an array of matched keys, may be empty when there is no match, but not <tt>null</tt>
     * @private
     */
    impl.findMatches = function(rules, userAgent) {
        var result = [];
        for (var key in rules) {
            if (hasOwnProp.call(rules, key)) {
                if (rules[key].test(userAgent)) {
                    result.push(key);
                }
            }
        }
        return result;
    };

    /**
     * Check the version of the given property in the User-Agent.
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {String} version or <tt>null</tt> if version not found
     * @private
     */
    impl.getVersionStr = function (propertyName, userAgent) {
        var props = impl.mobileDetectRules.props, patterns, i, len, match;
        if (hasOwnProp.call(props, propertyName)) {
            patterns = props[propertyName];
            len = patterns.length;
            for (i = 0; i < len; ++i) {
                match = patterns[i].exec(userAgent);
                if (match !== null) {
                    return match[1];
                }
            }
        }
        return null;
    };

    /**
     * Check the version of the given property in the User-Agent.
     * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {Number} version or <tt>NaN</tt> if version not found
     * @private
     */
    impl.getVersion = function (propertyName, userAgent) {
        var version = impl.getVersionStr(propertyName, userAgent);
        return version ? impl.prepareVersionNo(version) : NaN;
    };

    /**
     * Prepare the version number.
     *
     * @param {String} version
     * @return {Number} the version number as a floating number
     * @private
     */
    impl.prepareVersionNo = function (version) {
        var numbers;

        numbers = version.split(/[a-z._ \/\-]/i);
        if (numbers.length === 1) {
            version = numbers[0];
        }
        if (numbers.length > 1) {
            version = numbers[0] + '.';
            numbers.shift();
            version += numbers.join('');
        }
        return Number(version);
    };

    impl.isMobileFallback = function (userAgent) {
        return impl.detectMobileBrowsers.fullPattern.test(userAgent) ||
            impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0,4));
    };

    impl.isTabletFallback = function (userAgent) {
        return impl.detectMobileBrowsers.tabletPattern.test(userAgent);
    };

    impl.prepareDetectionCache = function (cache, userAgent, maxPhoneWidth) {
        if (cache.mobile !== undefined) {
            return;
        }
        var phone, tablet, phoneSized;

        // first check for stronger tablet rules, then phone (see issue#5)
        tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent);
        if (tablet) {
            cache.mobile = cache.tablet = tablet;
            cache.phone = null;
            return; // unambiguously identified as tablet
        }

        phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent);
        if (phone) {
            cache.mobile = cache.phone = phone;
            cache.tablet = null;
            return; // unambiguously identified as phone
        }

        // our rules haven't found a match -> try more general fallback rules
        if (impl.isMobileFallback(userAgent)) {
            phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);
            if (phoneSized === undefined) {
                cache.mobile = impl.FALLBACK_MOBILE;
                cache.tablet = cache.phone = null;
            } else if (phoneSized) {
                cache.mobile = cache.phone = impl.FALLBACK_PHONE;
                cache.tablet = null;
            } else {
                cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
                cache.phone = null;
            }
        } else if (impl.isTabletFallback(userAgent)) {
            cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
            cache.phone = null;
        } else {
            // not mobile at all!
            cache.mobile = cache.tablet = cache.phone = null;
        }
    };

    // t is a reference to a MobileDetect instance
    impl.mobileGrade = function (t) {
        // impl note:
        // To keep in sync w/ Mobile_Detect.php easily, the following code is tightly aligned to the PHP version.
        // When changes are made in Mobile_Detect.php, copy this method and replace:
        //     $this-> / t.
        //     self::MOBILE_GRADE_(.) / '$1'
        //     , self::VERSION_TYPE_FLOAT / (nothing)
        //     isIOS() / os('iOS')
        //     [reg] / (nothing)   <-- jsdelivr complaining about unescaped unicode character U+00AE
        var $isMobile = t.mobile() !== null;

        if (
            // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
            t.os('iOS') && t.version('iPad')>=4.3 ||
            t.os('iOS') && t.version('iPhone')>=3.1 ||
            t.os('iOS') && t.version('iPod')>=3.1 ||

            // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
            // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
            // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
            // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
            ( t.version('Android')>2.1 && t.is('Webkit') ) ||

            // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
            t.version('Windows Phone OS')>=7.0 ||

            // Blackberry 7 - Tested on BlackBerry Torch 9810
            // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
            t.is('BlackBerry') && t.version('BlackBerry')>=6.0 ||
            // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
            t.match('Playbook.*Tablet') ||

            // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
            ( t.version('webOS')>=1.4 && t.match('Palm|Pre|Pixi') ) ||
            // Palm WebOS 3.0  - Tested on HP TouchPad
            t.match('hp.*TouchPad') ||

            // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
            ( t.is('Firefox') && t.version('Firefox')>=12 ) ||

            // Chrome for Android - Tested on Android 4.0, 4.1 device
            ( t.is('Chrome') && t.is('AndroidOS') && t.version('Android')>=4.0 ) ||

            // Skyfire 4.1 - Tested on Android 2.3 device
            ( t.is('Skyfire') && t.version('Skyfire')>=4.1 && t.is('AndroidOS') && t.version('Android')>=2.3 ) ||

            // Opera Mobile 11.5-12: Tested on Android 2.3
            ( t.is('Opera') && t.version('Opera Mobi')>11 && t.is('AndroidOS') ) ||

            // Meego 1.2 - Tested on Nokia 950 and N9
            t.is('MeeGoOS') ||

            // Tizen (pre-release) - Tested on early hardware
            t.is('Tizen') ||

            // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
            // @todo: more tests here!
            t.is('Dolfin') && t.version('Bada')>=2.0 ||

            // UC Browser - Tested on Android 2.3 device
            ( (t.is('UC Browser') || t.is('Dolfin')) && t.version('Android')>=2.3 ) ||

            // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
            ( t.match('Kindle Fire') ||
                t.is('Kindle') && t.version('Kindle')>=3.0 ) ||

            // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
            t.is('AndroidOS') && t.is('NookTablet') ||

            // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
            t.version('Chrome')>=11 && !$isMobile ||

            // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
            t.version('Safari')>=5.0 && !$isMobile ||

            // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
            t.version('Firefox')>=4.0 && !$isMobile ||

            // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
            t.version('MSIE')>=7.0 && !$isMobile ||

            // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
            // @reference: http://my.opera.com/community/openweb/idopera/
            t.version('Opera')>=10 && !$isMobile

            ){
            return 'A';
        }

        if (
            t.os('iOS') && t.version('iPad')<4.3 ||
            t.os('iOS') && t.version('iPhone')<3.1 ||
            t.os('iOS') && t.version('iPod')<3.1 ||

            // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
            t.is('Blackberry') && t.version('BlackBerry')>=5 && t.version('BlackBerry')<6 ||

            //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
            ( t.version('Opera Mini')>=5.0 && t.version('Opera Mini')<=6.5 &&
                (t.version('Android')>=2.3 || t.is('iOS')) ) ||

            // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
            t.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') ||

            // @todo: report this (tested on Nokia N71)
            t.version('Opera Mobi')>=11 && t.is('SymbianOS')
            ){
            return 'B';
        }

        if (
        // Blackberry 4.x - Tested on the Curve 8330
            t.version('BlackBerry')<5.0 ||
            // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
            t.match('MSIEMobile|Windows CE.*Mobile') || t.version('Windows Mobile')<=5.2

            ){
            return 'C';
        }

        //All older smartphone platforms and featurephones - Any device that doesn't support media queries
        //will receive the basic, C grade experience.
        return 'C';
    };

    impl.detectOS = function (ua) {
        return impl.findMatch(impl.mobileDetectRules.oss0, ua) ||
            impl.findMatch(impl.mobileDetectRules.oss, ua);
    };

    impl.getDeviceSmallerSide = function () {
        return window.screen.width < window.screen.height ?
            window.screen.width :
            window.screen.height;
    };

    /**
     * Constructor for MobileDetect object.
     * <br>
     * Such an object will keep a reference to the given user-agent string and cache most of the detect queries.<br>
     * <div style="background-color: #d9edf7; border: 1px solid #bce8f1; color: #3a87ad; padding: 14px; border-radius: 2px; margin-top: 20px">
     *     <strong>Find information how to download and install:</strong>
     *     <a href="https://github.com/hgoebl/mobile-detect.js/">github.com/hgoebl/mobile-detect.js/</a>
     * </div>
     *
     * @example <pre>
     *     var md = new MobileDetect(window.navigator.userAgent);
     *     if (md.mobile()) {
     *         location.href = (md.mobileGrade() === 'A') ? '/mobile/' : '/lynx/';
     *     }
     * </pre>
     *
     * @param {string} userAgent typically taken from window.navigator.userAgent or http_header['User-Agent']
     * @param {number} [maxPhoneWidth=600] <strong>only for browsers</strong> specify a value for the maximum
     *        width of smallest device side (in logical "CSS" pixels) until a device detected as mobile will be handled
     *        as phone.
     *        This is only used in cases where the device cannot be classified as phone or tablet.<br>
     *        See <a href="http://developer.android.com/guide/practices/screens_support.html">Declaring Tablet Layouts
     *        for Android</a>.<br>
     *        If you provide a value < 0, then this "fuzzy" check is disabled.
     * @constructor
     * @global
     */
    function MobileDetect(userAgent, maxPhoneWidth) {
        this.ua = userAgent || '';
        this._cache = {};
        //600dp is typical 7" tablet minimum width
        this.maxPhoneWidth = maxPhoneWidth || 600;
    }

    MobileDetect.prototype = {
        constructor: MobileDetect,

        /**
         * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
         * <br>
         * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
         * <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>UnknownMobile</code> here.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
         * @function MobileDetect#mobile
         */
        mobile: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.mobile;
        },

        /**
         * Returns the detected phone type/family string or <tt>null</tt>.
         * <br>
         * The returned tablet (family or producer) is one of following keys:<br>
         * <br><tt>iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
         * NokiaLumia, Micromax, Palm, Vertu, Pantech, Fly, Wiko, iMobile, SimValley,
         * Wolfgang, Alcatel, Nintendo, Amoi, INQ, GenericPhone</tt><br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
         * will return <code>UnknownMobile</code>.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key of the phone family or producer, e.g. "iPhone"
         * @function MobileDetect#phone
         */
        phone: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.phone;
        },

        /**
         * Returns the detected tablet type/family string or <tt>null</tt>.
         * <br>
         * The returned tablet (family or producer) is one of following keys:<br>
         * <br><tt>iPad, NexusTablet, SamsungTablet, Kindle, SurfaceTablet, HPTablet, AsusTablet,
         * BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet, AcerTablet,
         * ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet, LenovoTablet,
         * DellTablet, YarvikTablet, MedionTablet, ArnovaTablet, IntensoTablet, IRUTablet,
         * MegafonTablet, EbodaTablet, AllViewTablet, ArchosTablet, AinolTablet,
         * NokiaLumiaTablet, SonyTablet, PhilipsTablet, CubeTablet, CobyTablet, MIDTablet,
         * MSITablet, SMiTTablet, RockChipTablet, FlyTablet, bqTablet, HuaweiTablet,
         * NecTablet, PantechTablet, BronchoTablet, VersusTablet, ZyncTablet,
         * PositivoTablet, NabiTablet, KoboTablet, DanewTablet, TexetTablet,
         * PlaystationTablet, TrekstorTablet, PyleAudioTablet, AdvanTablet,
         * DanyTechTablet, GalapadTablet, MicromaxTablet, KarbonnTablet, AllFineTablet,
         * PROSCANTablet, YONESTablet, ChangJiaTablet, GUTablet, PointOfViewTablet,
         * OvermaxTablet, HCLTablet, DPSTablet, VistureTablet, CrestaTablet,
         * MediatekTablet, ConcordeTablet, GoCleverTablet, ModecomTablet, VoninoTablet,
         * ECSTablet, StorexTablet, VodafoneTablet, EssentielBTablet, RossMoorTablet,
         * iMobileTablet, TolinoTablet, AudioSonicTablet, AMPETablet, SkkTablet,
         * TecnoTablet, JXDTablet, iJoyTablet, FX2Tablet, XoroTablet, ViewsonicTablet,
         * OdysTablet, CaptivaTablet, IconbitTablet, TeclastTablet, OndaTablet,
         * JaytechTablet, BlaupunktTablet, DigmaTablet, EvolioTablet, LavaTablet,
         * AocTablet, MpmanTablet, CelkonTablet, WolderTablet, MiTablet, NibiruTablet,
         * NexoTablet, LeaderTablet, UbislateTablet, PocketBookTablet, KocasoTablet, Hudl,
         * TelstraTablet, GenericTablet</tt><br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
         * will return <code>UnknownMobile</code>.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
         * @function MobileDetect#tablet
         */
        tablet: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.tablet;
        },

        /**
         * Returns the (first) detected user-agent string or <tt>null</tt>.
         * <br>
         * The returned user-agent is one of following keys:<br>
         * <br><tt>Vivaldi, Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark,
         * Blazer, Safari, Tizen, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser,
         * Puffin, Mercury, ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
         * <br>
         * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
         * cases where a mobile device pretends to be more than one particular browser. You can get the
         * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
         * providing one of the defined keys as first argument to {@link MobileDetect#is}.
         *
         * @returns {String} the key for the detected user-agent or <tt>null</tt>
         * @function MobileDetect#userAgent
         */
        userAgent: function () {
            if (this._cache.userAgent === undefined) {
                this._cache.userAgent = impl.findMatch(impl.mobileDetectRules.uas, this.ua);
            }
            return this._cache.userAgent;
        },

        /**
         * Returns all detected user-agent strings.
         * <br>
         * The array is empty or contains one or more of following keys:<br>
         * <br><tt>Vivaldi, Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark,
         * Blazer, Safari, Tizen, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser,
         * Puffin, Mercury, ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
         * <br>
         * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
         * cases where a mobile device pretends to be more than one particular browser. You can get the
         * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
         * providing one of the defined keys as first argument to {@link MobileDetect#is}.
         *
         * @returns {Array} the array of detected user-agent keys or <tt>[]</tt>
         * @function MobileDetect#userAgents
         */
        userAgents: function () {
            if (this._cache.userAgents === undefined) {
                this._cache.userAgents = impl.findMatches(impl.mobileDetectRules.uas, this.ua);
            }
            return this._cache.userAgents;
        },

        /**
         * Returns the detected operating system string or <tt>null</tt>.
         * <br>
         * The operating system is one of following keys:<br>
         * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
         * iOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
         *
         * @returns {String} the key for the detected operating system.
         * @function MobileDetect#os
         */
        os: function () {
            if (this._cache.os === undefined) {
                this._cache.os = impl.detectOS(this.ua);
            }
            return this._cache.os;
        },

        /**
         * Get the version (as Number) of the given property in the User-Agent.
         * <br>
         * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
         *
         * @param {String} key a key defining a thing which has a version.<br>
         *        You can use one of following keys:<br>
         * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
         * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
         * Opera Mobi, UC Browser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
         * Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident, Presto, Goanna,
         * iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows Phone, Windows
         * CE, Windows NT, Symbian, webOS</tt><br>
         *
         * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
         *          Be careful when comparing this value with '==' operator!
         * @function MobileDetect#version
         */
        version: function (key) {
            return impl.getVersion(key, this.ua);
        },

        /**
         * Get the version (as String) of the given property in the User-Agent.
         * <br>
         *
         * @param {String} key a key defining a thing which has a version.<br>
         *        You can use one of following keys:<br>
         * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
         * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
         * Opera Mobi, UC Browser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
         * Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident, Presto, Goanna,
         * iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows Phone, Windows
         * CE, Windows NT, Symbian, webOS</tt><br>
         *
         * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
         *
         * @function MobileDetect#versionStr
         */
        versionStr: function (key) {
            return impl.getVersionStr(key, this.ua);
        },

        /**
         * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
         *
         * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
         *        tablet family.<br>
         *        For a complete list of possible values, see {@link MobileDetect#userAgent},
         *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
         *        Additionally you have following keys:<br>
         * <br><tt>Bot, MobileBot, DesktopMode, TV, WebKit, Console, Watch</tt><br>
         *
         * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
         *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
         * @function MobileDetect#is
         */
        is: function (key) {
            return containsIC(this.userAgents(), key) ||
                   equalIC(key, this.os()) ||
                   equalIC(key, this.phone()) ||
                   equalIC(key, this.tablet()) ||
                   containsIC(impl.findMatches(impl.mobileDetectRules.utils, this.ua), key);
        },

        /**
         * Do a quick test against navigator::userAgent.
         *
         * @param {String|RegExp} pattern the pattern, either as String or RegExp
         *                        (a string will be converted to a case-insensitive RegExp).
         * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
         * @function MobileDetect#match
         */
        match: function (pattern) {
            if (!(pattern instanceof RegExp)) {
                pattern = new RegExp(pattern, 'i');
            }
            return pattern.test(this.ua);
        },

        /**
         * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
         * <br>
         * Obviously this method makes sense in browser environments only (not for Node.js)!
         * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
         *        The argument is optional and if not present or falsy, the value of the constructor is taken.
         * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
         *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
         *          Will always return <code>undefined</code> server-side.
         */
        isPhoneSized: function (maxPhoneWidth) {
            return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
        },

        /**
         * Returns the mobile grade ('A', 'B', 'C').
         *
         * @returns {String} one of the mobile grades ('A', 'B', 'C').
         * @function MobileDetect#mobileGrade
         */
        mobileGrade: function () {
            if (this._cache.grade === undefined) {
                this._cache.grade = impl.mobileGrade(this);
            }
            return this._cache.grade;
        }
    };

    // environment-dependent
    if (typeof window !== 'undefined' && window.screen) {
        MobileDetect.isPhoneSized = function (maxPhoneWidth) {
            return maxPhoneWidth < 0 ? undefined : impl.getDeviceSmallerSide() <= maxPhoneWidth;
        };
    } else {
        MobileDetect.isPhoneSized = function () {};
    }

    // should not be replaced by a completely new object - just overwrite existing methods
    MobileDetect._impl = impl;
    
    MobileDetect.version = '1.3.3 2016-07-31';

    return MobileDetect;
}); // end of call of define()
})((function (undefined) {
    if (typeof module !== 'undefined' && module.exports) {
        return function (factory) { module.exports = factory(); };
    } else if (typeof define === 'function' && define.amd) {
        return define;
    } else if (typeof window !== 'undefined') {
        return function (factory) { window.MobileDetect = factory(); };
    } else {
        // please file a bug if you get this error!
        throw new Error('unknown environment');
    }
})());
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.5
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.5'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.5
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.5'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.5
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.5'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.5
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.5'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.5
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.5'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================
  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.5
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.5'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this;
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))
    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : '',
    })

    // 是弹出框居中。。。
    var $modal_dialog = $(this.$element[0]).find('.modal-dialog');
    var m_top = -($modal_dialog.height() )/2;
    var m_left = -($modal_dialog.width() )/2;
    $modal_dialog.css({
      'position':'absolute',
      "top": "50%",
      "left": "50%",
      'margin-top': m_top + 'px',
      'margin-left': m_left + 'px',
    });
  };

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.5
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.5'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.5
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.5'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.5
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.5'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.5
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.5'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.5
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.5'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], factory); // AMD
  } else {
    global.Mustache = {};
    factory(global.Mustache); // script, wsh, asp
  }
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty(value, names[index]);

            value = value[names[index++]];
          }
        } else {
          value = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.2.1';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

}));

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*!
 * JavaScript Cookie v2.1.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
					attributes.path    && '; path=' + attributes.path,
					attributes.domain  && '; domain=' + attributes.domain,
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var name = parts[0].replace(rdecode, decodeURIComponent);
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api(key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));

//
// 和php的number_format一样功能的js实现
//@from: https://github.com/kvz/locutus/blob/master/src/php/strings/number_format.js
//
//@manual: http://php.net/manual/zh/function.number-format.php
//module.exports = 
//

function number_format (number, decimals, decPoint, thousandsSep) { // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/number_format/
  // original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: davook
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Theriault (https://github.com/Theriault)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // bugfixed by: Michael White (http://getsprink.com)
  // bugfixed by: Benjamin Lupton
  // bugfixed by: Allan Jensen (http://www.winternet.no)
  // bugfixed by: Howard Yeend
  // bugfixed by: Diogo Resende
  // bugfixed by: Rival
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //  revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  //  revised by: Luke Smith (http://lucassmith.name)
  //    input by: Kheang Hok Chin (http://www.distantia.ca/)
  //    input by: Jay Klehr
  //    input by: Amir Habibi (http://www.residence-mixte.com/)
  //    input by: Amirouche
  //   example 1: number_format(1234.56)
  //   returns 1: '1,235'
  //   example 2: number_format(1234.56, 2, ',', ' ')
  //   returns 2: '1 234,56'
  //   example 3: number_format(1234.5678, 2, '.', '')
  //   returns 3: '1234.57'
  //   example 4: number_format(67, 2, ',', '.')
  //   returns 4: '67,00'
  //   example 5: number_format(1000)
  //   returns 5: '1,000'
  //   example 6: number_format(67.311, 2)
  //   returns 6: '67.31'
  //   example 7: number_format(1000.55, 1)
  //   returns 7: '1,000.6'
  //   example 8: number_format(67000, 5, ',', '.')
  //   returns 8: '67.000,00000'
  //   example 9: number_format(0.9, 0)
  //   returns 9: '1'
  //  example 10: number_format('1.20', 2)
  //  returns 10: '1.20'
  //  example 11: number_format('1.20', 4)
  //  returns 11: '1.2000'
  //  example 12: number_format('1.2000', 3)
  //  returns 12: '1.200'
  //  example 13: number_format('1 000,50', 2, '.', ' ')
  //  returns 13: '100 050.00'
  //  example 14: number_format(1e-8, 8, '.', '')
  //  returns 14: '0.00000001'

  number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
  var n = !isFinite(+number) ? 0 : +number
  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  var sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
  var dec = (typeof decPoint === 'undefined') ? '.' : decPoint
  var s = ''

  var toFixedFix = function (n, prec) {
    var k = Math.pow(10, prec)
    return '' + (Math.round(n * k) / k)
      .toFixed(prec)
  }

  // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }

  return s.join(dec)
}

/*! WOW - v1.1.2 - 2015-08-19
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);
/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.7
 *
 */

(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : false,
            appear          : null,
            load            : null,
            placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function() {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {

                            var original = $self.attr("data-" + settings.data_attribute);
                            $self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            $self[settings.effect](settings.effect_speed);

                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.attr("data-" + settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);

function __assignFn(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
    }
    return t;
}
function __extendsFn(d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __decorateFn(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __metadataFn(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
}
function __paramFn(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
function __awaiterFn(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            var e;
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            var e;
            try {
                step(generator['throw'](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
}
// hook global helpers
(function (__global) {
    __global.__assign = (__global && __global.__assign) || Object.assign || __assignFn;
    __global.__extends = (__global && __global.__extends) || __extendsFn;
    __global.__decorate = (__global && __global.__decorate) || __decorateFn;
    __global.__metadata = (__global && __global.__metadata) || __metadataFn;
    __global.__param = (__global && __global.__param) || __paramFn;
    __global.__awaiter = (__global && __global.__awaiter) || __awaiterFn;
})(typeof window !== "undefined" ? window :
    typeof WorkerGlobalScope !== "undefined" ? self :
        typeof global !== "undefined" ? global :
            Function("return this;")());


var __webpackBootstrap = (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
            /******/
        };

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
        /******/
    }


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
    /******/
});
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["potato2"] = factory();
	else
		root["potato2"] = factory();
})(this, function() {
return __webpackBootstrap
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, cache) {
	    "use strict";
	    exports.cache = cache;
	    var namespace = 'potato';
	    exports.namespace = namespace;
	    exports.TaskCountEvent = {
	        Added: "TaskCountEvent.Added",
	        Completed: "TaskCountEvent.Completed",
	        Busy: "TaskCountEvent.Busy",
	        Free: "TaskCountEvent.Free"
	    };
	    Object.freeze(exports.TaskCountEvent);
	    exports.VPresenterEvent = {
	        Installed: "CPresenterEvent.Installed",
	        Uninstalled: "CPresenterEvent.Uninstalled",
	        ChildAppended: "CPresenterEvent.ChildAppended",
	        ChildRemoved: "CPresenterEvent.ChildRemoved",
	    };
	    exports.VPresenterTransaction = {
	        AllowInstall: "AllowInstall"
	    };
	    exports.DialogEvent = {
	        Focused: "DialogEvent.Focused",
	        Blured: "DialogEvent.Blured",
	        Closed: "DialogEvent.Closed",
	    };
	    Object.freeze(exports.VPresenterEvent);
	    var PEvent = (function () {
	        function PEvent(name, data, bubbling) {
	            if (bubbling === void 0) { bubbling = false; }
	            this.name = name;
	            this.data = data;
	            this.bubbling = bubbling;
	        }
	        PEvent.prototype._setTarget = function (target) {
	            this.target = target;
	            return this;
	        };
	        return PEvent;
	    }());
	    exports.PEvent = PEvent;
	    var PError = (function () {
	        function PError(name, note, data) {
	            if (note === void 0) { note = "potato.PError"; }
	            this.name = name;
	            this.note = note;
	            this.data = data;
	        }
	        PError.prototype.getNamespace = function () {
	            return namespace;
	        };
	        return PError;
	    }());
	    exports.PError = PError;
	    function emptyObject(obj) {
	        Object.keys(obj).forEach(function (key) {
	            delete obj[key];
	        });
	        return obj;
	    }
	    var PDispatcher = (function () {
	        function PDispatcher(parent) {
	            this.parent = parent;
	            this._handlers = {};
	        }
	        PDispatcher.prototype.addListener = function (ename, handler) {
	            var dictionary = this._handlers[ename];
	            if (!dictionary) {
	                this._handlers[ename] = dictionary = [];
	            }
	            dictionary.push(handler);
	            return this;
	        };
	        PDispatcher.prototype.removeListener = function (ename, handler) {
	            if (!ename) {
	                emptyObject(this._handlers);
	            }
	            else {
	                var handlers = this._handlers;
	                if (handlers.propertyIsEnumerable(ename)) {
	                    var dictionary = handlers[ename];
	                    if (!handler) {
	                        delete handlers[ename];
	                    }
	                    else {
	                        var n = dictionary.indexOf(handler);
	                        if (n > -1) {
	                            dictionary.splice(n, 1);
	                        }
	                        if (dictionary.length == 0) {
	                            delete handlers[ename];
	                        }
	                    }
	                }
	            }
	            return this;
	        };
	        PDispatcher.prototype.dispatch = function (e) {
	            if (!e.target) {
	                e._setTarget(this);
	            }
	            var dictionary = this._handlers[e.name];
	            if (dictionary) {
	                for (var i = 0, k = dictionary.length; i < k; i++) {
	                    dictionary[i](e);
	                }
	            }
	            if (this.parent && e.bubbling) {
	                this.parent.dispatch(e);
	            }
	            return this;
	        };
	        PDispatcher.prototype.setParent = function (parent) {
	            this.parent = parent;
	            return this;
	        };
	        return PDispatcher;
	    }());
	    exports.PDispatcher = PDispatcher;
	    (function (TaskCounterState) {
	        TaskCounterState[TaskCounterState["Free"] = 0] = "Free";
	        TaskCounterState[TaskCounterState["Busy"] = 1] = "Busy";
	    })(exports.TaskCounterState || (exports.TaskCounterState = {}));
	    var TaskCounterState = exports.TaskCounterState;
	    ;
	    var TaskCounter = (function (_super) {
	        __extends(TaskCounter, _super);
	        function TaskCounter(deferSecond) {
	            _super.call(this);
	            this.deferSecond = deferSecond;
	            this.list = [];
	            this.state = TaskCounterState.Free;
	        }
	        TaskCounter.prototype.addItem = function (promise, note) {
	            var _this = this;
	            if (!this.list.find(function (item) { return item.promise === promise; })) {
	                this.list.push({ promise: promise, note: note });
	                promise.then(function (value) { return _this._completeItem(promise); }, function (reason) { return _this._completeItem(promise); });
	                this.dispatch(new PEvent(exports.TaskCountEvent.Added));
	                if (!this._timer) {
	                    this._timer = window.setTimeout(function () {
	                        _this._timer = 0;
	                        if (_this.list.length > 0 && _this.state == TaskCounterState.Free) {
	                            _this.state = exports.TaskCountEvent.Busy;
	                            _this.dispatch(new PEvent(exports.TaskCountEvent.Busy));
	                        }
	                    }, this.deferSecond * 1000);
	                }
	            }
	            return this;
	        };
	        TaskCounter.prototype._completeItem = function (promise) {
	            var i = this.list.findIndex(function (item) { return item.promise === promise; });
	            if (i > -1) {
	                this.list.splice(i, 1);
	                this.dispatch(new PEvent(exports.TaskCountEvent.Completed));
	                if (this.list.length == 0) {
	                    if (this._timer) {
	                        clearTimeout(this._timer);
	                        this._timer = 0;
	                    }
	                    if (this.state == TaskCounterState.Busy) {
	                        this.state = exports.TaskCountEvent.Free;
	                        this.dispatch(new PEvent(exports.TaskCountEvent.Free));
	                    }
	                }
	            }
	            return this;
	        };
	        return TaskCounter;
	    }(PDispatcher));
	    exports.TaskCounter = TaskCounter;
	    var taskCounter = new TaskCounter(3);
	    exports.taskCounter = taskCounter;
	    var VPresenter = (function (_super) {
	        __extends(VPresenter, _super);
	        function VPresenter(view, parent) {
	            _super.call(this, parent);
	            this.view = view;
	        }
	        VPresenter.prototype._allowInstallTo = function (parent) {
	            return true;
	        };
	        VPresenter.prototype._allowUninstallTo = function (parent) {
	            return true;
	        };
	        VPresenter.prototype._allowAppendChild = function (child) {
	            return true;
	        };
	        VPresenter.prototype._allowRemoveChild = function (child) {
	            return true;
	        };
	        VPresenter.prototype._installTo = function (parent) {
	            _super.prototype.setParent.call(this, parent);
	            this.dispatch(new PEvent(exports.VPresenterEvent.Installed));
	        };
	        VPresenter.prototype._uninstallTo = function (parent) {
	            _super.prototype.setParent.call(this, undefined);
	            this.dispatch(new PEvent(exports.VPresenterEvent.Uninstalled));
	        };
	        VPresenter.prototype._afterRemoveChild = function (member) {
	            this.view.removeChild(member.view);
	        };
	        VPresenter.prototype._afterAppendChild = function (member) {
	            this.view.appendChild(member.view);
	        };
	        VPresenter.prototype._beforeRemoveChild = function (member) {
	        };
	        VPresenter.prototype._beforeAppendChild = function (member) {
	        };
	        VPresenter.prototype._checkRemoveChild = function (member) {
	            if (member.parent != this) {
	                return true;
	            }
	            if (!member._allowUninstallTo(this) ||
	                !this._allowRemoveChild(member)) {
	                return false;
	            }
	            return true;
	        };
	        VPresenter.prototype.removeChild = function (member, checked) {
	            if (member.parent != this) {
	                return false;
	            }
	            if (!checked && !this._checkRemoveChild(member)) {
	                return false;
	            }
	            this._beforeRemoveChild(member);
	            member._uninstallTo(this);
	            this._afterRemoveChild(member);
	            this.dispatch(new PEvent(exports.VPresenterEvent.ChildRemoved));
	            return true;
	        };
	        VPresenter.prototype._checkAppendChild = function (member) {
	            if (member.parent == this) {
	                return true;
	            }
	            if (!member._allowInstallTo(this) ||
	                !this._allowAppendChild(member) ||
	                (member.parent && (!member._allowUninstallTo(this) || !member.parent._allowRemoveChild(member)))) {
	                return false;
	            }
	            return true;
	        };
	        VPresenter.prototype.appendChild = function (member, checked) {
	            if (member.parent == this) {
	                return false;
	            }
	            if (!checked && !this._checkAppendChild(member)) {
	                return false;
	            }
	            if (member.parent) {
	                member.parent.removeChild(member, true);
	            }
	            this._beforeAppendChild(member);
	            member._installTo(this);
	            this._afterAppendChild(member);
	            this.dispatch(new PEvent(exports.VPresenterEvent.ChildAppended));
	            return true;
	        };
	        VPresenter.prototype._update = function () {
	            return Promise.resolve(this);
	        };
	        return VPresenter;
	    }(PDispatcher));
	    exports.VPresenter = VPresenter;
	    var alert = window.alert;
	    exports.alert = alert;
	    var request = function (request) {
	        return Promise.resolve('foo');
	    };
	    function load(requestOptions) {
	        var cacheResult = cache.getItem(requestOptions.url);
	        if (cacheResult && !cacheResult.version) {
	            return Promise.resolve(cacheResult.toData());
	        }
	        else {
	            if (cacheResult && cacheResult.version) {
	                requestOptions.version = cacheResult.version;
	            }
	            return request(requestOptions).then(function (requestResult) {
	                var data, dataType, type, expired, version, encryption;
	                var cacheData = requestResult.cache;
	                var result;
	                if (cacheData) {
	                    type = cacheData.type;
	                    expired = cacheData.expired;
	                    version = cacheData.version;
	                    encryption = cacheData.encryption;
	                    if (type === undefined && requestResult.notModified && cacheResult) {
	                        type = cacheResult.from;
	                    }
	                }
	                if (!requestResult.notModified) {
	                    data = requestResult.data;
	                    dataType = requestResult.dataType;
	                    if (typeof data == 'string') {
	                        result = cache.parseContent(dataType, data);
	                    }
	                    else {
	                        result = data;
	                    }
	                }
	                else if (cacheResult) {
	                    result = cacheResult.toData();
	                }
	                else {
	                    result = null;
	                }
	                if (type !== undefined) {
	                    cache.setItem(requestOptions.url, new cache.CacheContent(data, dataType, expired, version, encryption), type);
	                }
	                return result;
	            });
	        }
	    }
	    exports.load = load;
	    var requireJS;
	    function getVPresenter(url) {
	        var vpm, vp, promise;
	        try {
	            vpm = requireJS(url);
	            vp = vpm.main;
	            promise = Promise.resolve(vp);
	        }
	        catch (e) {
	            promise = new Promise(function (resolve, reject) {
	                requireJS([url], function (vpm) {
	                    vp = vpm.main;
	                    resolve(vp);
	                }, function (error) {
	                    reject(error);
	                });
	            });
	        }
	        return promise.then(function (vp) {
	            return vp._update();
	        });
	    }
	    exports.getVPresenter = getVPresenter;
	    (function (DialogState) {
	        DialogState[DialogState["Focused"] = 0] = "Focused";
	        DialogState[DialogState["Blured"] = 1] = "Blured";
	        DialogState[DialogState["Closed"] = 2] = "Closed";
	    })(exports.DialogState || (exports.DialogState = {}));
	    var DialogState = exports.DialogState;
	    ;
	    (function (DialogPosition) {
	        DialogPosition[DialogPosition["Left"] = 0] = "Left";
	        DialogPosition[DialogPosition["Center"] = 1] = "Center";
	        DialogPosition[DialogPosition["Right"] = 2] = "Right";
	        DialogPosition[DialogPosition["Top"] = 3] = "Top";
	        DialogPosition[DialogPosition["Middle"] = 4] = "Middle";
	        DialogPosition[DialogPosition["Bottom"] = 5] = "Bottom";
	    })(exports.DialogPosition || (exports.DialogPosition = {}));
	    var DialogPosition = exports.DialogPosition;
	    (function (DialogSize) {
	        DialogSize[DialogSize["Content"] = 0] = "Content";
	        DialogSize[DialogSize["Full"] = 1] = "Full";
	    })(exports.DialogSize || (exports.DialogSize = {}));
	    var DialogSize = exports.DialogSize;
	    var Dialog = (function (_super) {
	        __extends(Dialog, _super);
	        function Dialog(els, config) {
	            _super.call(this, els.view, undefined);
	            this.state = DialogState.Closed;
	            this.content = null;
	            this._dialogList = [];
	            this._zindex = -1;
	            this.config = {
	                className: '',
	                masked: true,
	                position: { x: DialogPosition.Center, y: DialogPosition.Middle },
	                size: { width: "50%", height: "50%" },
	                fixed: true,
	                offset: { x: 0, y: 0 },
	                effect: "",
	                asideOnRight: false,
	                asideInBody: false,
	                headerEffect: undefined,
	                footerEffect: undefined,
	                asideEffect: undefined,
	                bodyEffect: undefined
	            };
	            this.dialog = els.dialog;
	            this.mask = els.mask;
	            this.body = els.body;
	            this.header = els.header;
	            this.footer = els.footer;
	            this.aside = els.aside;
	            this.view.addClass("pt-" + DialogState[this.state]);
	            if (config) {
	                this.setConfig(config);
	            }
	        }
	        Dialog.prototype.setConfig = function (config) {
	            var oldConfig = this.config;
	            this.config = Object.assign({}, this.config, config);
	            this._afterConfigChange(oldConfig);
	        };
	        Dialog.prototype.getZIndex = function () {
	            return this._zindex;
	        };
	        Dialog.prototype._afterConfigChange = function (oldConfig) {
	            this.view.removeClass([oldConfig.className, oldConfig.effect, oldConfig.masked ? "pt-masked" : "", oldConfig.asideOnRight ? "pt-asideOnRight" : "pt-asideOnLeft", oldConfig.asideInBody ? "pt-asideInBody" : "pt-asideOutBody"].join(" "));
	            this.view.addClass([this.config.className, this.config.effect, this.config.masked ? "pt-masked" : "", this.config.asideOnRight ? "pt-asideOnRight" : "pt-asideOnLeft", this.config.asideInBody ? "pt-asideInBody" : "pt-asideOutBody"].join(" "));
	        };
	        Dialog.prototype._setZIndex = function (i) {
	            this._zindex = i;
	            this.view.setZIndex(i);
	        };
	        Dialog.prototype._countIndex = function () {
	            this._dialogList.forEach(function (dialog, index) {
	                dialog._setZIndex(index);
	            });
	        };
	        Dialog.prototype._beforeFocus = function () {
	        };
	        Dialog.prototype._afterFocus = function () {
	        };
	        Dialog.prototype._beforeClose = function () {
	        };
	        Dialog.prototype._afterClose = function () {
	        };
	        Dialog.prototype._beforeBlur = function () {
	        };
	        Dialog.prototype._afterBlur = function () {
	        };
	        Dialog.prototype._allowFocus = function (closeAction) {
	            /*
	            close{
	                需要将第2个focus{
	                    不需要将第1个blur
	                    不需要将父focus
	                }
	                不需要将第2个focus
	            }
	            focus{
	                新加入的{
	                    将第一个blur
	                    将父focus
	                }
	                已存在的{
	                    将第一个blur
	                    将父focus
	                }
	            }
	            */
	            return true;
	        };
	        Dialog.prototype._allowBlur = function () {
	            return true;
	        };
	        Dialog.prototype._allowClose = function () {
	            return true;
	        };
	        Dialog.prototype._checkFocus = function () {
	            if (this == application) {
	                return true;
	            }
	            if (!this.parent) {
	                return false;
	            }
	            var parentDialog = this.parent;
	            if (this.state != DialogState.Focused) {
	                if (!this._allowFocus()) {
	                    return false;
	                }
	                var list = parentDialog._dialogList;
	                var dialog = list[list.length - 1];
	                if (dialog && dialog != this && !dialog._allowBlur()) {
	                    return false;
	                }
	            }
	            return parentDialog._checkFocus();
	        };
	        Dialog.prototype._checkClose = function () {
	            if (this.state == DialogState.Closed) {
	                return true;
	            }
	            if (!this.parent) {
	                return false;
	            }
	            if (!this._allowClose()) {
	                return false;
	            }
	            var parentDialog = this.parent;
	            if (this.state == DialogState.Focused) {
	                var list = parentDialog._dialogList;
	                var dialog = list[list.length - 2];
	                if (dialog && !dialog._allowFocus()) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        Dialog.prototype.focus = function (checked) {
	            /* 三种调用场景：1.由close()上文调用；2.当前为closed状态; 3.当前为blured状态 */
	            //if (this.state == DialogState.Focused) { return false; }
	            if (!checked && !this._checkFocus()) {
	                return false;
	            }
	            var parentDialog = this.parent;
	            var list = parentDialog._dialogList;
	            var blurDialog = list[list.length - 1];
	            var initiative = true;
	            if (this.state != DialogState.Focused) {
	                if (blurDialog == this) {
	                    blurDialog = undefined;
	                    initiative = false;
	                }
	                this._beforeFocus();
	                if (initiative) {
	                    if (this.state == DialogState.Blured) {
	                        var i = list.indexOf(this);
	                        (i > -1) && list.splice(i, 1);
	                    }
	                    list.push(this);
	                    parentDialog._countIndex();
	                }
	            }
	            if (initiative) {
	                parentDialog.focus();
	            }
	            if (this.state != DialogState.Focused) {
	                blurDialog && blurDialog._blur();
	                var curState = this.state;
	                this._setState(DialogState.Focused);
	                if (curState == DialogState.Closed) {
	                    this.refreshSize();
	                    this.refreshPosition();
	                    this.refreshLayout();
	                }
	                this._afterFocus();
	                this.dispatch(new PEvent(exports.DialogEvent.Focused));
	            }
	            return true;
	        };
	        Dialog.prototype.close = function () {
	            if (this.state == DialogState.Closed || !this._checkClose()) {
	                return false;
	            }
	            this._beforeClose();
	            var parentDialog = this.parent;
	            var list = parentDialog._dialogList;
	            var focusDialog = null;
	            if (list[list.length - 1] == this) {
	                list.pop();
	                focusDialog = list[list.length - 1];
	            }
	            else {
	                var i = list.indexOf(this);
	                (i > -1) && list.splice(i, 1);
	                this._countIndex();
	            }
	            this._setZIndex(-1);
	            this._setState(DialogState.Closed);
	            this.refreshSize();
	            this.refreshPosition();
	            this.refreshLayout();
	            this._afterClose();
	            this.dispatch(new PEvent(exports.DialogEvent.Closed));
	            focusDialog && focusDialog.focus(true);
	            return true;
	        };
	        Dialog.prototype._blur = function () {
	            if (this.state == DialogState.Blured) {
	                return;
	            }
	            this._beforeBlur();
	            this._setState(DialogState.Blured);
	            this._afterBlur();
	            this.dispatch(new PEvent(exports.DialogEvent.Blured));
	        };
	        Dialog.prototype._setState = function (state) {
	            this.view.removeClass("pt-" + DialogState[this.state]);
	            this.state = state;
	            this.view.addClass("pt-" + DialogState[this.state]);
	        };
	        Dialog.prototype._allowAppendChild = function (member) {
	            if (member instanceof Dialog) {
	                if (member.state != DialogState.Closed) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        Dialog.prototype.appendChild = function (child) {
	            if (child.parent == this) {
	                return false;
	            }
	            if (!this._checkAppendChild(child)) {
	                return false;
	            }
	            if (!(child instanceof Dialog)) {
	                var oldContent = this.content;
	                if (this.content) {
	                    var member = this.content;
	                    if (member.parent != this) {
	                        return false;
	                    }
	                    if (!this._checkRemoveChild(member)) {
	                        return false;
	                    }
	                    this.removeChild(member, true);
	                }
	                this.content = child;
	            }
	            return _super.prototype.appendChild.call(this, child, true);
	        };
	        Dialog.prototype._afterAppendChild = function (member) {
	            if (member instanceof Dialog) {
	                this.view.appendChild(member.view);
	            }
	            else {
	                if (this.body) {
	                    this.body.appendChild(member.view);
	                }
	                else {
	                    this.dialog.appendChild(member.view);
	                }
	                if (member instanceof WholeVPresenter) {
	                    var view = member.getHeader();
	                    if (view && this.header) {
	                        this.header.appendChild(view);
	                    }
	                    view = member.getFooter();
	                    if (view && this.footer) {
	                        this.footer.appendChild(view);
	                    }
	                    view = member.getAside();
	                    if (view && this.aside) {
	                        this.aside.appendChild(view);
	                    }
	                }
	                if (this.state != DialogState.Closed) {
	                    if (this.config.size.width == DialogSize.Content || this.config.size.height == DialogSize.Content) {
	                        this.refreshSize();
	                        this.refreshPosition();
	                        this.refreshLayout();
	                    }
	                    else {
	                        this.refreshLayout();
	                    }
	                }
	            }
	        };
	        Dialog.prototype._afterRemoveChild = function (member) {
	            if (member instanceof Dialog) {
	                this.view.removeChild(member.view);
	            }
	            else {
	                if (this.body) {
	                    this.body.removeChild(member.view);
	                }
	                else {
	                    this.dialog.removeChild(member.view);
	                }
	                if (member instanceof WholeVPresenter) {
	                    var view = member.getHeader();
	                    if (view && this.header) {
	                        this.header.removeChild(view);
	                    }
	                    view = member.getFooter();
	                    if (view && this.footer) {
	                        this.footer.removeChild(view);
	                    }
	                    view = member.getAside();
	                    if (view && this.aside) {
	                        this.aside.removeChild(view);
	                    }
	                }
	            }
	        };
	        Dialog.prototype.refreshSize = function () {
	        };
	        Dialog.prototype.refreshPosition = function () {
	        };
	        Dialog.prototype.refreshLayout = function () {
	        };
	        return Dialog;
	    }(VPresenter));
	    exports.Dialog = Dialog;
	    // export interface WholeVPresenter {
	    //     getHeader: ()=>View|null;
	    //     getFooter: ()=>View|null;
	    //     getAside: ()=>View|null;
	    // }
	    var WholeVPresenter = (function (_super) {
	        __extends(WholeVPresenter, _super);
	        function WholeVPresenter() {
	            _super.apply(this, arguments);
	        }
	        WholeVPresenter.prototype.getHeader = function () { return null; };
	        WholeVPresenter.prototype.getFooter = function () { return null; };
	        WholeVPresenter.prototype.getAside = function () { return null; };
	        return WholeVPresenter;
	    }(VPresenter));
	    exports.WholeVPresenter = WholeVPresenter;
	    function emptyFun(arg) {
	    }
	    exports.emptyFun = emptyFun;
	    var Application = (function (_super) {
	        __extends(Application, _super);
	        function Application(els) {
	            _super.call(this, els);
	            this._setZIndex(0);
	            this._setState(DialogState.Focused);
	        }
	        Application.prototype.close = function () {
	            return false;
	        };
	        Application.prototype.focus = function (checked) {
	            return false;
	        };
	        return Application;
	    }(Dialog));
	    exports.Application = Application;
	    var application;
	    exports.application = application;
	    function include() {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        //console.log(resource);
	    }
	    exports.include = include;
	    function setConfig(data) {
	        if (data.namespace) {
	            exports.namespace = namespace = data.namespace;
	        }
	        if (data.alert) {
	            exports.alert = alert = data.alert;
	        }
	        if (data.request) {
	            request = data.request;
	        }
	        if (data.requireJS) {
	            requireJS = data.requireJS;
	        }
	        if (data.application) {
	            exports.application = application = data.application;
	        }
	    }
	    exports.setConfig = setConfig;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var CacheDataProps = ['cipher', 'expired', 'version', 'encryption', 'wtime', 'rtime'];
	    var CacheOptionsProps = ['value', 'expired', 'version', 'encryption'];
	    function nowTime() {
	        return Math.floor(Date.now() / 1000);
	    }
	    var CacheResult = (function () {
	        /**
	         * Comment for method ´doSomething´.
	         * @param value  Comment for parameter ´target´.
	         * @returns       Comment for return value.
	         */
	        function CacheResult(value, version, from) {
	            this.value = value;
	            this.version = version;
	            this.from = from;
	        }
	        CacheResult.prototype.toData = function () {
	            if (this._data === undefined) {
	                var n = this.value.indexOf(",");
	                var code = this.value.substr(n + 1);
	                var type = this.value.substr(0, n);
	                this._data = parseContent(type, code);
	            }
	            return this._data;
	        };
	        return CacheResult;
	    }());
	    exports.CacheResult = CacheResult;
	    function parseContent(contentType, content) {
	        var serialization = config.serializations[contentType];
	        return serialization ? serialization.decode(content) : content;
	    }
	    exports.parseContent = parseContent;
	    var CacheContent = (function () {
	        function CacheContent(data, dataType, expired, version, encryption) {
	            this.data = data;
	            this.dataType = dataType;
	            this.expired = expired;
	            this.version = version;
	            this.encryption = encryption;
	        }
	        CacheContent.prototype.toValue = function () {
	            if (this._str === undefined && this.data !== undefined) {
	                var dataType = this.dataType || 'text';
	                if (typeof (this.data) == 'string') {
	                    this._str = dataType + "," + this.data;
	                }
	                else {
	                    var serialization = config.serializations[dataType];
	                    this._str = dataType + "," + (serialization ? serialization.encode(this.data) : this.data.toString());
	                }
	            }
	            return this._str;
	        };
	        CacheContent.prototype.toOptions = function () {
	            var options = assign(CacheOptionsProps, {}, this);
	            options.value = this.toValue();
	            return options;
	        };
	        return CacheContent;
	    }());
	    exports.CacheContent = CacheContent;
	    var CacheItem = (function () {
	        function CacheItem(item) {
	            this._checkValidTime = -1;
	            this.expired = '20';
	            this.version = '';
	            this.encryption = false;
	            this.wtime = '0';
	            this.rtime = '0';
	            if (item) {
	                if (item instanceof CacheItem) {
	                    assign(CacheItem.Props, this, item.toPropsData());
	                }
	                else {
	                    this.expired = item.expired;
	                    this.version = item.version;
	                    this.encryption = item.encryption;
	                    this.wtime = item.wtime;
	                    this.rtime = item.rtime;
	                    this._cipher = item.cipher;
	                }
	            }
	        }
	        CacheItem.prototype.getValue = function () {
	            if (this._value === undefined) {
	                if (this.encryption && this._cipher) {
	                    this._value = config.encryption.decrypt(this._cipher);
	                }
	                else {
	                    this._value = this._cipher + '';
	                }
	            }
	            return this._value;
	        };
	        CacheItem.prototype.getCipher = function () {
	            if (this._cipher === undefined) {
	                if (this.encryption && this._value) {
	                    this._cipher = config.encryption.encrypt(this._value);
	                }
	                else {
	                    this._cipher = this._value + '';
	                }
	            }
	            return this._cipher;
	        };
	        CacheItem.prototype.getValid = function () {
	            var now = Date.now();
	            if (now - this._checkValidTime > 1000) {
	                this._valid = this._countValid();
	                this._checkValidTime = now;
	            }
	            return this._valid;
	        };
	        CacheItem.prototype._countValid = function () {
	            var valid = true;
	            var num = parseInt(this.expired);
	            if (!isNaN(num)) {
	                if (num > 0) {
	                    valid = (nowTime() - parseInt(this.wtime)) < parseInt(this.expired);
	                }
	                else if (num = 0) {
	                    valid = false;
	                }
	                else {
	                    valid = true;
	                }
	            }
	            else {
	                valid = new Date() < new Date(this.expired);
	            }
	            if (!valid && !this.version) {
	                return -1;
	            }
	            return valid ? 1 : 0;
	        };
	        CacheItem.prototype.toObject = function () {
	            var valid = this.getValid();
	            if (valid == -1) {
	                return null;
	            }
	            else if (valid == 0) {
	                return { value: this.getValue(), version: this.version };
	            }
	            else {
	                return { value: this.getValue(), version: '' };
	            }
	        };
	        CacheItem.prototype.toCacheData = function () {
	            return {
	                cipher: this.getCipher(),
	                expired: this.expired,
	                version: this.version,
	                encryption: this.encryption,
	                wtime: this.wtime,
	                rtime: this.rtime
	            };
	        };
	        CacheItem.prototype.toPropsData = function () {
	            return assign(CacheItem.Props, {}, this);
	        };
	        CacheItem.prototype.setCacheOptions = function (options) {
	            this.rtime = this.wtime = nowTime() + '';
	            if (options.value !== undefined) {
	                if (options.value != this._value) {
	                    this._value = options.value;
	                    this._cipher = undefined;
	                }
	            }
	            if (options.encryption !== undefined) {
	                if (options.encryption != this.encryption) {
	                    this.encryption = options.encryption;
	                    this._cipher = undefined;
	                }
	            }
	            if (options.expired !== undefined) {
	                this.expired = options.expired;
	            }
	            if (options.version !== undefined) {
	                this.version = options.version;
	            }
	        };
	        CacheItem.prototype.clone = function () {
	            return new CacheItem(this);
	        };
	        CacheItem.prototype.updateReadTime = function () {
	            this.rtime = nowTime() + '';
	        };
	        CacheItem.Props = ['_value', '_cipher', '_valid', '_checkValidTime', 'expired', 'version', 'encryption', 'wtime', 'rtime'];
	        return CacheItem;
	    }());
	    function assign(props, target) {
	        var objs = [];
	        for (var _i = 2; _i < arguments.length; _i++) {
	            objs[_i - 2] = arguments[_i];
	        }
	        for (var _a = 0, objs_1 = objs; _a < objs_1.length; _a++) {
	            var obj = objs_1[_a];
	            for (var _b = 0, props_1 = props; _b < props_1.length; _b++) {
	                var key = props_1[_b];
	                if (obj.hasOwnProperty(key)) {
	                    target[key] = obj[key];
	                }
	            }
	        }
	        return target;
	    }
	    function objectAssign(target) {
	        var objs = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            objs[_i - 1] = arguments[_i];
	        }
	        for (var _a = 0, objs_2 = objs; _a < objs_2.length; _a++) {
	            var obj = objs_2[_a];
	            for (var key in obj) {
	                if (obj.hasOwnProperty(key)) {
	                    target[key] = obj[key];
	                }
	            }
	        }
	        return target;
	    }
	    var RamEntity = (function () {
	        function RamEntity() {
	            this._data = {};
	        }
	        RamEntity.prototype.getItem = function (key) {
	            var data = this._data[key];
	            if (!data) {
	                return null;
	            }
	            return assign(CacheDataProps, {}, data);
	        };
	        RamEntity.prototype.setItem = function (key, data) {
	            this._data[key] = assign(CacheDataProps, {}, data);
	        };
	        RamEntity.prototype.removeItem = function (key) {
	            delete this._data[key];
	        };
	        RamEntity.prototype.keys = function () {
	            return Object.keys(this._data);
	        };
	        RamEntity.prototype.clear = function () {
	            this._data = {};
	        };
	        return RamEntity;
	    }());
	    var StorageEntity = (function () {
	        function StorageEntity(storage) {
	            this.storage = storage;
	        }
	        StorageEntity.prototype.keys = function () {
	            var list = [];
	            for (var i = 0, k = this.storage.length; i < k; i++) {
	                var key = this.storage.key(i) || '';
	                if (key.indexOf(config.namespace) == 0) {
	                    list.push(key.substr(config.namespace.length));
	                }
	            }
	            return list;
	        };
	        StorageEntity.prototype.clear = function () {
	            for (var _i = 0, _a = this.keys(); _i < _a.length; _i++) {
	                var key = _a[_i];
	                this.removeItem(key);
	            }
	        };
	        StorageEntity.prototype.getItem = function (key) {
	            var str = this.storage.getItem(config.namespace + key);
	            if (!str) {
	                return null;
	            }
	            var n = str.indexOf("|");
	            var _a = str.substr(0, n).split(','), expired = _a[0], version = _a[1], encryptionString = _a[2], wtime = _a[3], rtime = _a[4];
	            var encryption = encryptionString ? true : false;
	            var cipher = str.substr(n + 1);
	            return { cipher: cipher, expired: expired, version: version, encryption: encryption, wtime: wtime, rtime: rtime };
	        };
	        StorageEntity.prototype.setItem = function (key, data) {
	            key = config.namespace + key;
	            var value = data.expired + "," + data.version + "," + (data.encryption ? '1' : '') + "," + data.wtime + "," + data.rtime + "|" + data.cipher;
	            this.storage.setItem(key, value);
	        };
	        StorageEntity.prototype.removeItem = function (key) {
	            this.storage.removeItem(config.namespace + key);
	        };
	        return StorageEntity;
	    }());
	    var Shim = (function () {
	        function Shim(enity) {
	            this.enity = enity;
	            this._data = {};
	            this._clearUpUnitNum = 1 * 1024 * 1024;
	        }
	        Shim.prototype.clear = function () {
	            this._data = {};
	            this.enity.clear();
	        };
	        Shim.prototype._clearUp = function (size) {
	            var keys = this.enity.keys();
	            var free = 0;
	            var recover = function (item) {
	                free += item.getCipher().length;
	            };
	            var list = [];
	            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
	                var key = keys_1[_i];
	                var item = this._getItem(key, recover);
	                if (item) {
	                    list.push({ key: key, rtime: parseInt(item.rtime), item: item });
	                }
	            }
	            if (free - size < this._clearUpUnitNum) {
	                list.sort(function (o, p) {
	                    var a = o.rtime;
	                    var b = p.rtime;
	                    if (a == b) {
	                        return 0;
	                    }
	                    return (a < b ? -1 : 1);
	                });
	                for (var _a = 0, list_1 = list; _a < list_1.length; _a++) {
	                    var obj = list_1[_a];
	                    var key = obj.key;
	                    this._data[key] = null;
	                    this.enity.removeItem(key);
	                    recover(obj.item);
	                    if (free - size >= this._clearUpUnitNum) {
	                        return;
	                    }
	                }
	            }
	        };
	        Shim.prototype.getItem = function (key) {
	            var item = this._getItem(key);
	            if (item) {
	                item.updateReadTime();
	                this._setItem(key, item);
	                return item.toObject();
	            }
	            else {
	                return null;
	            }
	        };
	        Shim.prototype._getItem = function (key, recover) {
	            if (!this._data.hasOwnProperty(key)) {
	                var item_1 = this.enity.getItem(key);
	                this._data[key] = item_1 ? new CacheItem(item_1) : null;
	            }
	            var item = this._data[key];
	            if (!item) {
	                return null;
	            }
	            var valid = item.getValid();
	            if (valid == -1) {
	                this._data[key] = null;
	                this.enity.removeItem(key);
	                recover && recover(item);
	                return null;
	            }
	            return item.clone();
	        };
	        Shim.prototype.setItem = function (key, options) {
	            var item = this._getItem(key);
	            if (!item) {
	                item = new CacheItem();
	            }
	            item.setCacheOptions(options);
	            return this._setItem(key, item);
	        };
	        Shim.prototype._setItem = function (key, item) {
	            var cacheData = item.toCacheData();
	            try {
	                this.enity.setItem(key, cacheData);
	            }
	            catch (error) {
	                this._clearUp(cacheData.cipher.length);
	                try {
	                    this.enity.setItem(key, cacheData);
	                }
	                catch (error) {
	                    return false;
	                }
	            }
	            this._data[key] = item;
	            return true;
	        };
	        Shim.prototype.removeItem = function (key) {
	            this.enity.removeItem(key);
	        };
	        return Shim;
	    }());
	    var config = {
	        namespace: '_pt_',
	        encryption: {
	            encrypt: function (str) { return str; },
	            decrypt: function (str) { return str; }
	        },
	        serializations: {
	            json: {
	                encode: function (data) { return JSON.stringify(data); },
	                decode: function (str) { return JSON.parse(str); }
	            },
	            text: {
	                encode: function (data) { return data; },
	                decode: function (str) { return str; }
	            }
	        },
	        mappingKey: function (key) { return key; },
	    };
	    (function (CacheType) {
	        CacheType[CacheType["Ram"] = 0] = "Ram";
	        CacheType[CacheType["Session"] = 1] = "Session";
	        CacheType[CacheType["Local"] = 2] = "Local";
	    })(exports.CacheType || (exports.CacheType = {}));
	    var CacheType = exports.CacheType;
	    ;
	    var pool = {};
	    pool[CacheType.Ram] = new Shim(new RamEntity());
	    pool[CacheType.Session] = new Shim(new StorageEntity(sessionStorage));
	    pool[CacheType.Local] = new Shim(new StorageEntity(localStorage));
	    function setConfig(options) {
	        if (options.namespace) {
	            config.namespace = options.namespace;
	        }
	        if (options.encryption) {
	            config.encryption = options.encryption;
	        }
	        if (options.mappingKey) {
	            config.mappingKey = options.mappingKey;
	        }
	        if (options.serializations) {
	            objectAssign(config.serializations, options.serializations);
	        }
	    }
	    exports.setConfig = setConfig;
	    function getItem(key, type) {
	        key = config.mappingKey(key);
	        var cacheObject;
	        if (type !== undefined) {
	            cacheObject = pool[type].getItem(key);
	        }
	        else {
	            type = CacheType.Ram;
	            cacheObject = pool[type].getItem(key);
	            if (!cacheObject) {
	                type = CacheType.Session;
	                cacheObject = pool[type].getItem(key);
	            }
	            if (!cacheObject) {
	                type = CacheType.Local;
	                cacheObject = pool[type].getItem(key);
	            }
	        }
	        if (cacheObject) {
	            return new CacheResult(cacheObject.value, cacheObject.version, type);
	        }
	        else {
	            return null;
	        }
	    }
	    exports.getItem = getItem;
	    function setItem(key, content, type) {
	        key = config.mappingKey(key);
	        var options = content.toOptions();
	        if (type === undefined) {
	            type = CacheType.Ram;
	        }
	        return pool[type].setItem(key, options);
	    }
	    exports.setItem = setItem;
	    function removeItem(key, type) {
	        key = config.mappingKey(key);
	        if (type !== undefined) {
	            pool[type].removeItem(key);
	        }
	        else {
	            pool[CacheType.Ram].removeItem(key);
	            pool[CacheType.Session].removeItem(key);
	            pool[CacheType.Local].removeItem(key);
	        }
	    }
	    exports.removeItem = removeItem;
	    function clear(type) {
	        if (type !== undefined) {
	            pool[type].clear();
	        }
	        else {
	            pool[CacheType.Ram].clear();
	            pool[CacheType.Session].clear();
	            pool[CacheType.Local].clear();
	        }
	    }
	    exports.clear = clear;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	// Cache.setConfig(encryption:
	//     {
	//         encode : function(str){
	//             var key = 'dsfsdfsdfe';
	//             var iv = key.substr(0,16);
	//             key = CryptoJS.enc.Utf8.parse(key);
	//             iv = CryptoJS.enc.Utf8.parse(iv);
	//             str = CryptoJS.AES.encrypt(str,key,{iv:iv,padding:CryptoJS.pad.ZeroPadding});
	//             return str.ciphertext.toString(CryptoJS.enc.Base64);
	//         },
	//         decode : function(str){
	//             var key = 'dsfsdfsdfe';
	//             var iv = key.substr(0,16);
	//             key = CryptoJS.enc.Utf8.parse(key);
	//             iv = CryptoJS.enc.Utf8.parse(iv);
	//             str = CryptoJS.AES.decrypt(str,key,{iv:iv,padding:CryptoJS.pad.ZeroPadding});
	//             return CryptoJS.enc.Utf8.stringify(str);
	//         }
	//     }
	// )


/***/ }
/******/ ])
});
;
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("potato2"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["potato2", "jquery"], factory);
	else if(typeof exports === 'object')
		exports["pdom"] = factory(require("potato2"), require("jquery"));
	else
		root["pdom"] = factory(root["potato2"], root["jquery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return __webpackBootstrap
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(4), __webpack_require__(8), __webpack_require__(9), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, potato, $, css, tpl_CommonDialog, tpl_Application, tpl_TurnContainer) {
	    "use strict";
	    var $ = jQuery;
	    potato.include(css, tpl_CommonDialog);
	    var jdomMethods = {
	        groupBy: function (attr) {
	            var dlist = {};
	            var key, i, k, o;
	            attr = attr || "data-dom";
	            for (i = 0, k = this.length; i < k; i++) {
	                o = this[i];
	                key = o.getAttribute(attr);
	                if (key) {
	                    if (dlist[key]) {
	                        dlist[key].push(o);
	                    }
	                    else {
	                        dlist[key] = [o];
	                    }
	                }
	            }
	            return dlist;
	        },
	        removeChild: function (child) {
	            child.remove();
	        },
	        appendChild: $.fn.append,
	        setZIndex: function (index) {
	            this.css('z-index', index + 100);
	        }
	    };
	    for (var p in jdomMethods) {
	        if ($.fn.hasOwnProperty(p)) {
	            console.log(p + " is override!");
	        }
	        else {
	            $.fn[p] = jdomMethods[p];
	        }
	    }
	    // let commandTemplate = potato.includeResource('html!./tpl.html') ;
	    // console.log(commandTemplate);
	    // export interface $View extends JQuery {
	    //     removeChild(view: $View): void;
	    //     appendChild(view: $View): void;
	    // }
	    // export interface $Layer extends $View {
	    //     
	    // }
	    // export function view(...args): $View {
	    //     let result: $View = ($ as any)(...args);
	    //     (result as any).removeChild = function (view: $View) { view.remove(); };
	    //     (result as any).appendChild = result.append;
	    //     return result;
	    // }
	    // export function layer(...args): $Layer {
	    //     let result: $Layer = ($ as any)(...args);
	    //     (result as any).removeChild = function (view: $View) { view.remove(); };
	    //     (result as any).appendChild = result.append;
	    //     (result as any).setZIndex = function (index: number): void {
	    //         $(this).css('z-index', index);
	    //     }
	    //     return result;
	    // }
	    exports.DialogEffect = {
	        scale: "pdom-scale",
	        swipeUp: "pdom-swipeUp",
	        swipeDown: "pdom-swipeDown",
	        swipeLeft: "pdom-swipeLeft",
	        swipeRight: "pdom-swipeRight",
	        slideUp: "pdom-slideUp",
	        slideDown: "pdom-slideDown",
	        slideLeft: "pdom-slideLeft",
	        slideRight: "pdom-slideRight",
	    };
	    exports.TurnEffect = {
	        slid: "pdom-slid",
	        fade: "pdom-fade",
	    };
	    var AnimationEnd = (function () {
	        var style = document.documentElement.style;
	        if ('animation' in style) {
	            return 'animationend';
	        }
	        if ('WebkitAnimation' in style) {
	            return 'webkitAnimationEnd';
	        }
	        return '';
	    })();
	    function getWindowSize() {
	        return { width: window.innerWidth || $(window).width(), height: window.innerHeight || $(window).height() };
	        //var zoomLevel:number = document.documentElement.clientWidth / window.innerWidth;
	        //return {width:document.documentElement.clientWidth,height:zoomLevel?Math.round(window.innerHeight * zoomLevel):document.documentElement.clientHeight};
	    }
	    exports.getWindowSize = getWindowSize;
	    var DomApplication = (function (_super) {
	        __extends(DomApplication, _super);
	        function DomApplication(els) {
	            var _this = this;
	            if (!els) {
	                var dialog = $(tpl_Application).appendTo(document.body);
	                var comps = dialog.find("[data-dom]").groupBy();
	                els = { view: $(document.body), dialog: dialog, body: $(comps['body']), header: $(comps['header']), footer: $(comps['footer']), aside: $(comps['aside']) };
	            }
	            _super.call(this, els);
	            this.globalLoadingLayer = $('<div class="pdom-globalLoadingLayer"></div>');
	            this.view.append(this.globalLoadingLayer);
	            potato.taskCounter.addListener(potato.TaskCountEvent.Added, function (e) {
	                _this.globalLoadingLayer.show();
	            }).addListener(potato.TaskCountEvent.Busy, function (e) {
	                _this.globalLoadingLayer.addClass("pdom-busy");
	            }).addListener(potato.TaskCountEvent.Free, function (e) {
	                _this.globalLoadingLayer.removeClass("pdom-busy");
	                _this.globalLoadingLayer.hide();
	            });
	        }
	        return DomApplication;
	    }(potato.Application));
	    exports.DomApplication = DomApplication;
	    var CommonDialog = (function (_super) {
	        __extends(CommonDialog, _super);
	        function CommonDialog(config, els) {
	            var _this = this;
	            if (!els) {
	                var view = $(tpl_CommonDialog);
	                var comps = view.find("[data-dom]").groupBy();
	                els = { view: view, dialog: $(comps['dialog']), mask: $(comps['mask']), body: $(comps['body']), header: $(comps['header']), footer: $(comps['footer']), aside: $(comps['aside']) };
	            }
	            _super.call(this, els, config);
	            if (this.config.headerEffect && this.header) {
	                turnContainer(this.header).addClass(this.config.headerEffect);
	            }
	            if (this.config.footerEffect && this.footer) {
	                turnContainer(this.footer).addClass(this.config.footerEffect);
	            }
	            if (this.config.asideEffect && this.aside) {
	                turnContainer(this.aside).addClass(this.config.asideEffect);
	            }
	            if (this.config.bodyEffect && this.body) {
	                turnContainer(this.body).addClass(this.config.bodyEffect);
	            }
	            $(window).on("resize", function () {
	                if (_this.state != potato.DialogState.Closed) {
	                    _this.refreshSize();
	                    _this.refreshPosition();
	                    _this.refreshLayout();
	                }
	            });
	            this.mask && this.mask.on("click", function () {
	                _this.close();
	            });
	            var that = this;
	            AnimationEnd && this.view.on(AnimationEnd, function () {
	                that._animationEnd();
	            });
	        }
	        CommonDialog.prototype._animationEnd = function () {
	            this.view.removeClass("pdom-transiting");
	            if (this.state == potato.DialogState.Closed) {
	                this.view.hide();
	            }
	        };
	        CommonDialog.prototype._afterConfigChange = function (oldConfig) {
	            _super.prototype._afterConfigChange.call(this, oldConfig);
	            this.dialog.css({
	                position: this.config.fixed ? "fixed" : "absolute"
	            });
	        };
	        CommonDialog.prototype._setState = function (state) {
	            if (this.state == potato.DialogState.Closed) {
	                this.view.show();
	                this.view[0].offsetHeight;
	            }
	            _super.prototype._setState.call(this, state);
	            this.view.addClass("pdom-transiting");
	            !AnimationEnd && this._animationEnd();
	        };
	        CommonDialog.prototype._parseExpr = function (value, worh) {
	            var target = undefined, expr = '';
	            var els, multiple, multipleNum, increment, incrementNum;
	            if (typeof value == "function") {
	                return value(this);
	            }
	            else if (typeof value == "number") {
	                return value;
	            }
	            else if (Array.isArray(value)) {
	                target = value[0], expr = value[1];
	                expr = 'target' + expr;
	            }
	            else if (typeof value == "object") {
	                target = value;
	            }
	            else if (typeof value == "string") {
	                if (/^\d+.*$/.test(value)) {
	                    return parseInt(value);
	                }
	                else {
	                    expr = value;
	                }
	            }
	            if (expr) {
	                var arr = expr.match(/^([^*/+-]+)(([*/])([\d.]+))?(([+-])(\d+))?$/);
	                if (arr) {
	                    els = arr[1], multiple = arr[3], multipleNum = arr[4], increment = arr[6], incrementNum = arr[7];
	                    if (!target) {
	                        target = $(els);
	                    }
	                }
	            }
	            if (target && target.length) {
	                var methon = { "width": "outerWidth", "height": "outerHeight" };
	                var outerWorH = methon[worh];
	                var value_1 = (worh == "width" || worh == "height") ? target[outerWorH]() : target.offset()[worh];
	                if (multiple) {
	                    multipleNum = parseFloat(multipleNum);
	                    if (multiple == '*') {
	                        value_1 *= multipleNum;
	                    }
	                    else {
	                        value_1 /= multipleNum;
	                    }
	                }
	                if (increment) {
	                    incrementNum = parseInt(incrementNum);
	                    if (increment == '+') {
	                        value_1 += incrementNum;
	                    }
	                    else {
	                        value_1 -= incrementNum;
	                    }
	                }
	                return value_1;
	            }
	            else {
	                return NaN;
	            }
	        };
	        CommonDialog.prototype.refreshSize = function () {
	            var _this = this;
	            if (this.state == potato.DialogState.Closed) {
	                return;
	            }
	            var dialogSize = { width: 0, height: 0 };
	            var obj = getWindowSize();
	            ['width', 'height'].forEach(function (worh) {
	                var value = _this.config.size[worh];
	                if (typeof value == "number") {
	                    if (value == potato.DialogSize.Full) {
	                        dialogSize[worh] = "100%";
	                        return;
	                    }
	                    else if (value == potato.DialogSize.Content) {
	                    }
	                }
	                else if (typeof value == "string" && /^\d{1,3}%$/.test(value)) {
	                    dialogSize[worh] = parseInt(value) / 100 * obj[worh];
	                    return;
	                }
	                dialogSize[worh] = _this._parseExpr(value, worh);
	            });
	            this._setSize(dialogSize.width || 100, dialogSize.height || 100);
	        };
	        CommonDialog.prototype._setSize = function (width, height) {
	            this.dialog.css({ width: Math.round(width), height: Math.round(height) });
	        };
	        CommonDialog.prototype.refreshLayout = function () {
	            if (this.state == potato.DialogState.Closed) {
	                return;
	            }
	            var headerHeight = 0, footerHeight = 0, asideWidth = 0;
	            if (this.content instanceof potato.WholeVPresenter) {
	                var view = void 0;
	                view = this.content.getHeader();
	                if (view) {
	                    headerHeight = Math.ceil(view.outerHeight(true));
	                }
	                view = this.content.getFooter();
	                if (view) {
	                    footerHeight = Math.ceil(view.outerHeight(true));
	                }
	                view = this.content.getAside();
	                if (view) {
	                    asideWidth = Math.ceil(view.outerWidth(true));
	                }
	            }
	            this.header && (headerHeight ? this.header.height(headerHeight).show() : this.header.hide());
	            this.footer && (footerHeight ? this.footer.height(footerHeight).show() : this.footer.hide());
	            this.aside && (asideWidth ? this.aside.width(asideWidth).show() : this.aside.hide());
	            var width = this.dialog.width();
	            var height = this.dialog.height();
	            if (this.config.asideInBody) {
	                this.body && this.body.css({ width: width - asideWidth, height: height - headerHeight - footerHeight, marginLeft: this.config.asideOnRight ? 0 : asideWidth });
	                this.aside && this.aside.height(height - headerHeight - footerHeight);
	            }
	            else {
	                this.header && this.header.css(this.config.asideOnRight ? "margin-right" : "margin-left", asideWidth);
	                this.footer && this.footer.css(this.config.asideOnRight ? "margin-right" : "margin-left", asideWidth);
	                this.body && this.body.css(this.config.asideOnRight ? "margin-right" : "margin-left", asideWidth).height(height - headerHeight - footerHeight);
	            }
	        };
	        CommonDialog.prototype.refreshPosition = function () {
	            var _this = this;
	            if (this.state == potato.DialogState.Closed) {
	                return;
	            }
	            var obj = getWindowSize();
	            var dialogSize = { x: this.dialog.outerWidth(), y: this.dialog.outerHeight() };
	            var windowSize = { x: obj.width, y: obj.height };
	            var offset = this.config.offset;
	            var dialogPos = { x: 0, y: 0 };
	            var offsetPos = { x: 0, y: 0 };
	            var minPos = { x: 0, y: 0 };
	            var maxPos = { x: windowSize.x - dialogSize.x, y: windowSize.y - dialogSize.y };
	            var dialogOffset;
	            var dialogPosition;
	            var parentOffset;
	            var pageScroll = { x: $(window).scrollLeft(), y: $(window).scrollTop() };
	            ;
	            if (!this.config.fixed) {
	                dialogOffset = this.dialog.offset();
	                dialogPosition = this.dialog.position();
	                parentOffset = { x: dialogOffset.left - dialogPosition.left, y: dialogOffset.top - dialogPosition.top };
	                minPos = { x: -parentOffset.x, y: -parentOffset.y };
	                maxPos = { x: NaN, y: NaN };
	            }
	            ['x', 'y'].forEach(function (xory) {
	                var lort = xory == "x" ? "left" : "top";
	                var positionValue = _this.config.position[xory];
	                var element = null;
	                if (typeof positionValue == "number") {
	                    if (_this.config.fixed) {
	                        switch (positionValue) {
	                            case potato.DialogPosition.Left:
	                                dialogPos.x = 0;
	                                return;
	                            case potato.DialogPosition.Right:
	                                dialogPos.x = windowSize.x - dialogSize.x;
	                                return;
	                            case potato.DialogPosition.Center:
	                                dialogPos.x = (windowSize.x - dialogSize.x) / 2;
	                                return;
	                            case potato.DialogPosition.Top:
	                                dialogPos.y = 0;
	                                return;
	                            case potato.DialogPosition.Bottom:
	                                dialogPos.y = windowSize.y - dialogSize.y;
	                                return;
	                            case potato.DialogPosition.Middle:
	                                dialogPos.y = (windowSize.y - dialogSize.y) / 2;
	                                return;
	                        }
	                    }
	                    else {
	                        switch (positionValue) {
	                            case potato.DialogPosition.Left:
	                                dialogPos.x = pageScroll.x - parentOffset.x;
	                                return;
	                            case potato.DialogPosition.Right:
	                                dialogPos.x = pageScroll.x - parentOffset.x + windowSize.x - dialogSize.x;
	                                return;
	                            case potato.DialogPosition.Center:
	                                dialogPos.x = pageScroll.x - parentOffset.x + (windowSize.x - dialogSize.x) / 2;
	                                return;
	                            case potato.DialogPosition.Top:
	                                dialogPos.y = pageScroll.y - parentOffset.y;
	                                return;
	                            case potato.DialogPosition.Bottom:
	                                dialogPos.y = pageScroll.y - parentOffset.y + windowSize.y - dialogSize.y;
	                                return;
	                            case potato.DialogPosition.Middle:
	                                dialogPos.y = pageScroll.y - parentOffset.y + (windowSize.y - dialogSize.y) / 2;
	                                return;
	                        }
	                    }
	                }
	                else if (typeof positionValue == "string" && /^\d{1,3}%$/.test(positionValue)) {
	                    if (_this.config.fixed) {
	                        dialogPos[xory] = parseInt(positionValue) / 100 * windowSize[xory];
	                    }
	                    else {
	                        dialogPos[xory] = parseInt(positionValue) / 100 * windowSize[xory] + pageScroll[xory] - parentOffset[xory];
	                    }
	                    return;
	                }
	                var value = _this._parseExpr(positionValue, lort);
	                if (_this.config.fixed) {
	                    dialogPos[xory] = value - pageScroll[xory];
	                }
	                else {
	                    dialogPos[xory] = value - parentOffset[xory];
	                }
	            });
	            ['x', 'y'].forEach(function (xory) {
	                var offsetValue = _this.config.offset[xory];
	                var worh = xory == "x" ? "width" : "height";
	                if (typeof offsetValue == "string" && /^\d{1,3}%$/.test(offsetValue)) {
	                    offsetPos[xory] = dialogSize[xory] * parseInt(offsetValue) / 100;
	                    return;
	                }
	                offsetPos[xory] = _this._parseExpr(offsetValue, worh);
	            });
	            ['x', 'y'].forEach(function (xory) {
	                dialogPos[xory] += offsetPos[xory];
	                if (!isNaN(minPos[xory]) && dialogPos[xory] < minPos[xory]) {
	                    dialogPos[xory] = minPos[xory];
	                }
	                if (!isNaN(maxPos[xory]) && (dialogPos[xory] > maxPos[xory])) {
	                    dialogPos[xory] = maxPos[xory];
	                }
	            });
	            this._setPosition(dialogPos.x, dialogPos.y);
	        };
	        CommonDialog.prototype._setPosition = function (left, top) {
	            this.dialog.css({ left: left, top: top });
	        };
	        return CommonDialog;
	    }(potato.Dialog));
	    exports.CommonDialog = CommonDialog;
	    function turnContainer(container) {
	        console.log(tpl_TurnContainer);
	        var comps = container.html(tpl_TurnContainer).addClass("pdom-turnContainer").find("[data-dom]").groupBy();
	        var content;
	        container.removeChild = function (view) {
	        };
	        container.appendChild = function (view) {
	            var pos, page, panel, scroller, inOrOut = "pdom-in", outOrIn = "pdom-out";
	            if (content) {
	                if (content[0] == view[0]) {
	                    //this.reload();
	                    return;
	                }
	                page = content.parent();
	                scroller = page[0];
	                content.attr("data-pos", scroller.scrollLeft + "," + scroller.scrollTop);
	            }
	            else {
	                page = $(comps['page'][0]);
	            }
	            page.removeClass("pdom-current").addClass("pdom-previous");
	            pos = (view.attr("data-pos") || "0,0").split(",");
	            page = comps['page'][0] == page[0] ? $(comps['page'][1]) : $(comps['page'][0]);
	            panel = $(comps['panel']);
	            var oview = page[0].firstChild;
	            if (oview == view[0]) {
	                if (panel.hasClass("pdom-in")) {
	                    inOrOut = "pdom-out";
	                    outOrIn = "pdom-in";
	                }
	                else {
	                    inOrOut = "pdom-in";
	                    outOrIn = "pdom-out";
	                }
	            }
	            $(oview).detach();
	            page.append(view);
	            content = view;
	            page.removeClass("pdom-previous").addClass("pdom-current");
	            panel.removeClass(outOrIn).addClass(inOrOut + " pdom-transform");
	            panel[0].offsetWidth;
	            panel.removeClass("pdom-transform");
	            scroller = page[0];
	            scroller.scrollLeft = parseInt(pos[0]);
	            scroller.scrollTop = parseInt(pos[1]);
	        };
	        return container;
	    }
	    exports.turnContainer = turnContainer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./css.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./css.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".pdom-commonDialog.pdom-slideDown > .pdom-dialog, .pdom-commonDialog.pdom-slideUp > .pdom-dialog, .pdom-commonDialog.pdom-slideLeft > .pdom-dialog, .pdom-commonDialog.pdom-slideRight > .pdom-dialog {\n  box-shadow: none;\n  transition: none; }\n\n.pdom-globalLoadingLayer {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.1);\n  left: 0;\n  top: 0;\n  display: none;\n  z-index: 100000; }\n\n.pdom-commonDialog {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n  .pdom-commonDialog.pt-masked > .pdom-mask {\n    display: block; }\n  .pdom-commonDialog.pt-asideOnRight > .pdom-dialog > .pdom-container > .pdom-aside {\n    right: 0; }\n  .pdom-commonDialog.pt-asideOnLeft > .pdom-dialog > .pdom-container > .pdom-aside {\n    left: 0; }\n  .pdom-commonDialog.pt-Closed {\n    display: none; }\n    .pdom-commonDialog.pt-Closed.pdom-scale > .pdom-dialog {\n      transform: scale(0, 0);\n      opacity: 0; }\n    .pdom-commonDialog.pt-Closed.pdom-swipeDown > .pdom-dialog {\n      transform: translateY(-50%);\n      opacity: 0; }\n    .pdom-commonDialog.pt-Closed.pdom-swipeUp > .pdom-dialog {\n      transform: translateY(50%);\n      opacity: 0; }\n    .pdom-commonDialog.pt-Closed.pdom-swipeLeft > .pdom-dialog {\n      transform: translateX(50%);\n      opacity: 0; }\n    .pdom-commonDialog.pt-Closed.pdom-swipeRight > .pdom-dialog {\n      transform: translateX(-50%);\n      opacity: 0; }\n    .pdom-commonDialog.pt-Closed.pdom-slideDown > .pdom-dialog > .pdom-container {\n      -webkit-transform: translateY(-100%);\n      transform: translateY(-100%); }\n    .pdom-commonDialog.pt-Closed.pdom-slideUp > .pdom-dialog > .pdom-container {\n      -webkit-transform: translateY(100%);\n      transform: translateY(100%); }\n    .pdom-commonDialog.pt-Closed.pdom-slideLeft > .pdom-dialog > .pdom-container {\n      -webkit-transform: translateX(100%);\n      transform: translateX(100%); }\n    .pdom-commonDialog.pt-Closed.pdom-slideRight > .pdom-dialog > .pdom-container {\n      -webkit-transform: translateX(-100%);\n      transform: translateX(-100%); }\n    .pdom-commonDialog.pt-Closed > .pdom-mask {\n      opacity: 0; }\n  .pdom-commonDialog.pt-asideOutBody > .pdom-dialog > .pdom-container > .pdom-aside {\n    top: 0; }\n  .pdom-commonDialog.pdom-transiting {\n    animation: dialogEffect 200ms;\n    -webkit-animation: dialogEffect 200ms; }\n  .pdom-commonDialog > .pdom-mask {\n    display: none;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background: #000;\n    left: 0;\n    top: 0;\n    opacity: 0.5;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(opacity=60)\";\n    transition: opacity 200ms ease-out; }\n  .pdom-commonDialog > .pdom-dialog {\n    position: fixed;\n    transition: opacity 200ms ease-out;\n    transition-property: transform, opacity;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);\n    background: transparent;\n    overflow: hidden;\n    width: 100px;\n    height: 100px; }\n    .pdom-commonDialog > .pdom-dialog > .pdom-container {\n      height: 100%;\n      width: 100%;\n      position: relative;\n      transition: transform 200ms ease-out; }\n      .pdom-commonDialog > .pdom-dialog > .pdom-container > .pdom-component {\n        overflow: hidden;\n        position: relative; }\n      .pdom-commonDialog > .pdom-dialog > .pdom-container > .pdom-aside {\n        height: 100%;\n        position: absolute; }\n\n@keyframes dialogEffect {\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes dialogEffect {\n  to {\n    opacity: 1; } }\n\n.pdom-turnContainer {\n  position: relative; }\n  .pdom-turnContainer.pdom-fade > .pdom-panel > .pdom-page {\n    position: absolute;\n    overflow-x: hidden;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    transition: opacity 300ms ease-in; }\n  .pdom-turnContainer.pdom-fade > .pdom-panel > .pdom-current {\n    opacity: 1;\n    z-index: 2; }\n  .pdom-turnContainer.pdom-fade > .pdom-panel > .pdom-previous {\n    opacity: 0;\n    z-index: 1; }\n  .pdom-turnContainer.pdom-slid {\n    overflow: hidden; }\n    .pdom-turnContainer.pdom-slid > .pdom-panel {\n      position: absolute;\n      width: 200%;\n      height: 100%;\n      transform: none;\n      transition: transform 300ms ease-in; }\n      .pdom-turnContainer.pdom-slid > .pdom-panel > .pdom-page {\n        position: absolute;\n        width: 50%;\n        height: 100%;\n        overflow-x: hidden;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch; }\n    .pdom-turnContainer.pdom-slid > .pdom-in {\n      left: -100%; }\n      .pdom-turnContainer.pdom-slid > .pdom-in > .pdom-current {\n        left: 50%; }\n      .pdom-turnContainer.pdom-slid > .pdom-in.pdom-transform {\n        transition: none;\n        transform: translateX(50%); }\n    .pdom-turnContainer.pdom-slid > .pdom-out > .pdom-previous {\n      left: 50%; }\n    .pdom-turnContainer.pdom-slid > .pdom-out.pdom-transform {\n      transition: none;\n      transform: translateX(-50%); }\n\n.pdom-transiting .pdom-transition {\n  transition: none !important; }\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"pdom-commonDialog\">\r\n\t<div class=\"pdom-mask\" data-dom=\"mask\"></div>\r\n\t<div class=\"pdom-dialog\" data-dom=\"dialog\">\r\n\t\t<div class=\"pdom-container\">\r\n\t\t\t<div class=\"pdom-header pdom-component\" data-dom=\"header\"></div>\r\n\t\t\t<div class=\"pdom-aside pdom-component\" data-dom=\"aside\"></div>\r\n\t\t\t<div class=\"pdom-body pdom-component\" data-dom=\"body\"></div>\r\n\t\t\t<div class=\"pdom-footer pdom-component\" data-dom=\"footer\"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class=\"pdom-application\">\r\n\t<div class=\"pdom-header\" data-dom=\"header\"></div>\r\n\t<div class=\"pdom-body\" data-dom=\"body\"></div>\r\n\t<div class=\"pdom-aside\" data-dom=\"aside\"></div>\r\n\t<div class=\"pdom-footer\" data-dom=\"footer\"></div>\r\n</div>";

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div data-dom=\"panel\" class=\"pdom-panel pdom-transition\">\r\n\t<div data-dom=\"page\" class=\"pdom-page pdom-current pdom-transition\"></div>\r\n\t<div data-dom=\"page\" class=\"pdom-page pdom-previous pdom-transition\"></div>\r\n</div>";

/***/ }
/******/ ])
});
;
/*
 RequireJS 2.2.0 Copyright jQuery Foundation and other contributors.
 Released under MIT license, http://github.com/requirejs/requirejs/LICENSE
 */
var requirejs,require,define;
(function(ga){function ka(b,c,d,g){return g||""}function K(b){return"[object Function]"===Q.call(b)}function L(b){return"[object Array]"===Q.call(b)}function y(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function X(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));--d);}}function x(b,c){return la.call(b,c)}function e(b,c){return x(b,c)&&b[c]}function D(b,c){for(var d in b)if(x(b,d)&&c(b[d],d))break}function Y(b,c,d,g){c&&D(c,function(c,e){if(d||!x(b,e))!g||"object"!==
typeof c||!c||L(c)||K(c)||c instanceof RegExp?b[e]=c:(b[e]||(b[e]={}),Y(b[e],c,d,g))});return b}function z(b,c){return function(){return c.apply(b,arguments)}}function ha(b){throw b;}function ia(b){if(!b)return b;var c=ga;y(b.split("."),function(b){c=c[b]});return c}function F(b,c,d,g){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=g;d&&(c.originalError=d);return c}function ma(b){function c(a,n,b){var h,k,f,c,d,l,g,r;n=n&&n.split("/");var q=p.map,m=q&&q["*"];
    if(a){a=a.split("/");k=a.length-1;p.nodeIdCompat&&U.test(a[k])&&(a[k]=a[k].replace(U,""));"."===a[0].charAt(0)&&n&&(k=n.slice(0,n.length-1),a=k.concat(a));k=a;for(f=0;f<k.length;f++)c=k[f],"."===c?(k.splice(f,1),--f):".."===c&&0!==f&&(1!==f||".."!==k[2])&&".."!==k[f-1]&&0<f&&(k.splice(f-1,2),f-=2);a=a.join("/")}if(b&&q&&(n||m)){k=a.split("/");f=k.length;a:for(;0<f;--f){d=k.slice(0,f).join("/");if(n)for(c=n.length;0<c;--c)if(b=e(q,n.slice(0,c).join("/")))if(b=e(b,d)){h=b;l=f;break a}!g&&m&&e(m,d)&&
    (g=e(m,d),r=f)}!h&&g&&(h=g,l=r);h&&(k.splice(0,l,h),a=k.join("/"))}return(h=e(p.pkgs,a))?h:a}function d(a){E&&y(document.getElementsByTagName("script"),function(n){if(n.getAttribute("data-requiremodule")===a&&n.getAttribute("data-requirecontext")===l.contextName)return n.parentNode.removeChild(n),!0})}function m(a){var n=e(p.paths,a);if(n&&L(n)&&1<n.length)return n.shift(),l.require.undef(a),l.makeRequire(null,{skipMap:!0})([a]),!0}function r(a){var n,b=a?a.indexOf("!"):-1;-1<b&&(n=a.substring(0,
    b),a=a.substring(b+1,a.length));return[n,a]}function q(a,n,b,h){var k,f,d=null,g=n?n.name:null,p=a,q=!0,m="";a||(q=!1,a="_@r"+(Q+=1));a=r(a);d=a[0];a=a[1];d&&(d=c(d,g,h),f=e(v,d));a&&(d?m=f&&f.normalize?f.normalize(a,function(a){return c(a,g,h)}):-1===a.indexOf("!")?c(a,g,h):a:(m=c(a,g,h),a=r(m),d=a[0],m=a[1],b=!0,k=l.nameToUrl(m)));b=!d||f||b?"":"_unnormalized"+(T+=1);return{prefix:d,name:m,parentMap:n,unnormalized:!!b,url:k,originalName:p,isDefine:q,id:(d?d+"!"+m:m)+b}}function u(a){var b=a.id,
    c=e(t,b);c||(c=t[b]=new l.Module(a));return c}function w(a,b,c){var h=a.id,k=e(t,h);if(!x(v,h)||k&&!k.defineEmitComplete)if(k=u(a),k.error&&"error"===b)c(k.error);else k.on(b,c);else"defined"===b&&c(v[h])}function A(a,b){var c=a.requireModules,h=!1;if(b)b(a);else if(y(c,function(b){if(b=e(t,b))b.error=a,b.events.error&&(h=!0,b.emit("error",a))}),!h)g.onError(a)}function B(){V.length&&(y(V,function(a){var b=a[0];"string"===typeof b&&(l.defQueueMap[b]=!0);G.push(a)}),V=[])}function C(a){delete t[a];
    delete Z[a]}function J(a,b,c){var h=a.map.id;a.error?a.emit("error",a.error):(b[h]=!0,y(a.depMaps,function(h,f){var d=h.id,g=e(t,d);!g||a.depMatched[f]||c[d]||(e(b,d)?(a.defineDep(f,v[d]),a.check()):J(g,b,c))}),c[h]=!0)}function H(){var a,b,c=(a=1E3*p.waitSeconds)&&l.startTime+a<(new Date).getTime(),h=[],k=[],f=!1,g=!0;if(!aa){aa=!0;D(Z,function(a){var l=a.map,e=l.id;if(a.enabled&&(l.isDefine||k.push(a),!a.error))if(!a.inited&&c)m(e)?f=b=!0:(h.push(e),d(e));else if(!a.inited&&a.fetched&&l.isDefine&&
    (f=!0,!l.prefix))return g=!1});if(c&&h.length)return a=F("timeout","Load timeout for modules: "+h,null,h),a.contextName=l.contextName,A(a);g&&y(k,function(a){J(a,{},{})});c&&!b||!f||!E&&!ja||ba||(ba=setTimeout(function(){ba=0;H()},50));aa=!1}}function I(a){x(v,a[0])||u(q(a[0],null,!0)).init(a[1],a[2])}function O(a){a=a.currentTarget||a.srcElement;var b=l.onScriptLoad;a.detachEvent&&!ca?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=l.onScriptError;a.detachEvent&&!ca||a.removeEventListener("error",
    b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}function P(){var a;for(B();G.length;){a=G.shift();if(null===a[0])return A(F("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));I(a)}l.defQueueMap={}}var aa,da,l,R,ba,p={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},t={},Z={},ea={},G=[],v={},W={},fa={},Q=1,T=1;R={require:function(a){return a.require?a.require:a.require=l.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?
    v[a.map.id]=a.exports:a.exports=v[a.map.id]={}},module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return e(p.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}};da=function(a){this.events=e(ea,a.id)||{};this.map=a;this.shim=e(p.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};da.prototype={init:function(a,b,c,h){h=h||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&
(c=z(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.errback=c;this.inited=!0;this.ignore=h.ignore;h.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,--this.depCount,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;l.startTime=(new Date).getTime();var a=this.map;if(this.shim)l.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],z(this,function(){return a.prefix?this.callPlugin():
    this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=this.map.url;W[a]||(W[a]=!0,l.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var h=this.exports,k=this.factory;if(!this.inited)x(l.defQueueMap,c)||this.fetch();else if(this.error)this.emit("error",this.error);else if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(K(k)){if(this.events.error&&this.map.isDefine||g.onError!==
    ha)try{h=l.execCb(c,k,b,h)}catch(d){a=d}else h=l.execCb(c,k,b,h);this.map.isDefine&&void 0===h&&((b=this.module)?h=b.exports:this.usingExports&&(h=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",A(this.error=a)}else h=k;this.exports=h;if(this.map.isDefine&&!this.ignore&&(v[c]=h,g.onResourceLoad)){var f=[];y(this.depMaps,function(a){f.push(a.normalizedMap||a)});g.onResourceLoad(l,this.map,f)}C(c);
    this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}},callPlugin:function(){var a=this.map,b=a.id,d=q(a.prefix);this.depMaps.push(d);w(d,"defined",z(this,function(h){var k,f,d=e(fa,this.map.id),M=this.map.name,r=this.map.parentMap?this.map.parentMap.name:null,m=l.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(h.normalize&&(M=h.normalize(M,function(a){return c(a,r,!0)})||
        ""),f=q(a.prefix+"!"+M,this.map.parentMap),w(f,"defined",z(this,function(a){this.map.normalizedMap=f;this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),h=e(t,f.id)){this.depMaps.push(f);if(this.events.error)h.on("error",z(this,function(a){this.emit("error",a)}));h.enable()}}else d?(this.map.url=l.nameToUrl(d),this.load()):(k=z(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),k.error=z(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];D(t,function(a){0===
a.map.id.indexOf(b+"_unnormalized")&&C(a.map.id)});A(a)}),k.fromText=z(this,function(h,c){var d=a.name,f=q(d),M=S;c&&(h=c);M&&(S=!1);u(f);x(p.config,b)&&(p.config[d]=p.config[b]);try{g.exec(h)}catch(e){return A(F("fromtexteval","fromText eval for "+b+" failed: "+e,e,[b]))}M&&(S=!0);this.depMaps.push(f);l.completeLoad(d);m([d],k)}),h.load(a.name,m,k,p))}));l.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){Z[this.map.id]=this;this.enabling=this.enabled=!0;y(this.depMaps,z(this,function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   b){var c,h;if("string"===typeof a){a=q(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=e(R,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;w(a,"defined",z(this,function(a){this.undefed||(this.defineDep(b,a),this.check())}));this.errback?w(a,"error",z(this,this.errback)):this.events.error&&w(a,"error",z(this,function(a){this.emit("error",a)}))}c=a.id;h=t[c];x(R,c)||!h||h.enabled||l.enable(a,this)}));D(this.pluginMaps,z(this,function(a){var b=e(t,a.id);
    b&&!b.enabled&&l.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){y(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};l={config:p,contextName:b,registry:t,defined:v,urlFetched:W,defQueue:G,defQueueMap:{},Module:da,makeModuleMap:q,nextTick:g.nextTick,onError:A,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");if("string"===typeof a.urlArgs){var b=
    a.urlArgs;a.urlArgs=function(a,c){return(-1===c.indexOf("?")?"?":"&")+b}}var c=p.shim,h={paths:!0,bundles:!0,config:!0,map:!0};D(a,function(a,b){h[b]?(p[b]||(p[b]={}),Y(p[b],a,!0,!0)):p[b]=a});a.bundles&&D(a.bundles,function(a,b){y(a,function(a){a!==b&&(fa[a]=b)})});a.shim&&(D(a.shim,function(a,b){L(a)&&(a={deps:a});!a.exports&&!a.init||a.exportsFn||(a.exportsFn=l.makeShimExports(a));c[b]=a}),p.shim=c);a.packages&&y(a.packages,function(a){var b;a="string"===typeof a?{name:a}:a;b=a.name;a.location&&
(p.paths[b]=a.location);p.pkgs[b]=a.name+"/"+(a.main||"main").replace(na,"").replace(U,"")});D(t,function(a,b){a.inited||a.map.unnormalized||(a.map=q(b,null,!0))});(a.deps||a.callback)&&l.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(ga,arguments));return b||a.exports&&ia(a.exports)}},makeRequire:function(a,n){function m(c,d,f){var e,r;n.enableBuildCallback&&d&&K(d)&&(d.__requireJsBuild=!0);if("string"===typeof c){if(K(d))return A(F("requireargs",
    "Invalid require call"),f);if(a&&x(R,c))return R[c](t[a.id]);if(g.get)return g.get(l,c,a,m);e=q(c,a,!1,!0);e=e.id;return x(v,e)?v[e]:A(F("notloaded",'Module name "'+e+'" has not been loaded yet for context: '+b+(a?"":". Use require([])")))}P();l.nextTick(function(){P();r=u(q(null,a));r.skipMap=n.skipMap;r.init(c,d,f,{enabled:!0});H()});return m}n=n||{};Y(m,{isBrowser:E,toUrl:function(b){var d,f=b.lastIndexOf("."),g=b.split("/")[0];-1!==f&&("."!==g&&".."!==g||1<f)&&(d=b.substring(f,b.length),b=b.substring(0,
    f));return l.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){return x(v,q(b,a,!1,!0).id)},specified:function(b){b=q(b,a,!1,!0).id;return x(v,b)||x(t,b)}});a||(m.undef=function(b){B();var c=q(b,a,!0),f=e(t,b);f.undefed=!0;d(b);delete v[b];delete W[c.url];delete ea[b];X(G,function(a,c){a[0]===b&&G.splice(c,1)});delete l.defQueueMap[b];f&&(f.events.defined&&(ea[b]=f.events),C(b))});return m},enable:function(a){e(t,a.id)&&u(a).enable()},completeLoad:function(a){var b,c,d=e(p.shim,a)||{},g=d.exports;
    for(B();G.length;){c=G.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);I(c)}l.defQueueMap={};c=e(t,a);if(!b&&!x(v,a)&&c&&!c.inited)if(!p.enforceDefine||g&&ia(g))I([a,d.deps||[],d.exportsFn]);else return m(a)?void 0:A(F("nodefine","No define call for "+a,null,[a]));H()},nameToUrl:function(a,b,c){var d,k,f,m;(d=e(p.pkgs,a))&&(a=d);if(d=e(fa,a))return l.nameToUrl(d,b,c);if(g.jsExtRegExp.test(a))d=a+(b||"");else{d=p.paths;k=a.split("/");for(f=k.length;0<f;--f)if(m=k.slice(0,f).join("/"),
        m=e(d,m)){L(m)&&(m=m[0]);k.splice(0,f,m);break}d=k.join("/");d+=b||(/^data\:|^blob\:|\?/.test(d)||c?"":".js");d=("/"===d.charAt(0)||d.match(/^[\w\+\.\-]+:/)?"":p.baseUrl)+d}return p.urlArgs&&!/^blob\:/.test(d)?d+p.urlArgs(a,d):d},load:function(a,b){g.load(l,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||oa.test((a.currentTarget||a.srcElement).readyState))N=null,a=O(a),l.completeLoad(a.id)},onScriptError:function(a){var b=O(a);if(!m(b.id)){var c=[];
    D(t,function(a,d){0!==d.indexOf("_@r")&&y(a.depMaps,function(a){if(a.id===b.id)return c.push(d),!0})});return A(F("scripterror",'Script error for "'+b.id+(c.length?'", needed by: '+c.join(", "):'"'),a,[b.id]))}}};l.require=l.makeRequire();return l}function pa(){if(N&&"interactive"===N.readyState)return N;X(document.getElementsByTagName("script"),function(b){if("interactive"===b.readyState)return N=b});return N}var g,B,C,H,O,I,N,P,u,T,qa=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ra=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
    U=/\.js$/,na=/^\.\//;B=Object.prototype;var Q=B.toString,la=B.hasOwnProperty,E=!("undefined"===typeof window||"undefined"===typeof navigator||!window.document),ja=!E&&"undefined"!==typeof importScripts,oa=E&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,ca="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),J={},w={},V=[],S=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(K(requirejs))return;w=requirejs;requirejs=void 0}"undefined"===typeof require||
K(require)||(w=require,require=void 0);g=requirejs=function(b,c,d,m){var r,q="_";L(b)||"string"===typeof b||(r=b,L(c)?(b=c,c=d,d=m):b=[]);r&&r.context&&(q=r.context);(m=e(J,q))||(m=J[q]=g.s.newContext(q));r&&m.configure(r);return m.require(b,c,d)};g.config=function(b){return g(b)};g.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=g);g.version="2.2.0";g.jsExtRegExp=/^\/|:|\?|\.js$/;g.isBrowser=E;B=g.s={contexts:J,newContext:ma};g({});y(["toUrl",
    "undef","defined","specified"],function(b){g[b]=function(){var c=J._;return c.require[b].apply(c,arguments)}});E&&(C=B.head=document.getElementsByTagName("head")[0],H=document.getElementsByTagName("base")[0])&&(C=B.head=H.parentNode);g.onError=ha;g.createNode=function(b,c,d){c=b.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");c.type=b.scriptType||"text/javascript";c.charset="utf-8";c.async=!0;return c};g.load=function(b,c,d){var m=b&&b.config||
    {},e;if(E){e=g.createNode(m,c,d);e.setAttribute("data-requirecontext",b.contextName);e.setAttribute("data-requiremodule",c);!e.attachEvent||e.attachEvent.toString&&0>e.attachEvent.toString().indexOf("[native code")||ca?(e.addEventListener("load",b.onScriptLoad,!1),e.addEventListener("error",b.onScriptError,!1)):(S=!0,e.attachEvent("onreadystatechange",b.onScriptLoad));e.src=d;if(m.onNodeCreated)m.onNodeCreated(e,m,c,d);P=e;H?C.insertBefore(e,H):C.appendChild(e);P=null;return e}if(ja)try{setTimeout(function(){},
    0),importScripts(d),b.completeLoad(c)}catch(q){b.onError(F("importscripts","importScripts failed for "+c+" at "+d,q,[c]))}};E&&!w.skipDataMain&&X(document.getElementsByTagName("script"),function(b){C||(C=b.parentNode);if(O=b.getAttribute("data-main"))return u=O,w.baseUrl||-1!==u.indexOf("!")||(I=u.split("/"),u=I.pop(),T=I.length?I.join("/")+"/":"./",w.baseUrl=T),u=u.replace(U,""),g.jsExtRegExp.test(u)&&(u=O),w.deps=w.deps?w.deps.concat(u):[u],!0});define=function(b,c,d){var e,g;"string"!==typeof b&&
(d=c,c=b,b=null);L(c)||(d=c,c=null);!c&&K(d)&&(c=[],d.length&&(d.toString().replace(qa,ka).replace(ra,function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));S&&(e=P||pa())&&(b||(b=e.getAttribute("data-requiremodule")),g=J[e.getAttribute("data-requirecontext")]);g?(g.defQueue.push([b,c,d]),g.defQueueMap[b]=!0):V.push([b,c,d])};define.amd={jQuery:!0};g.exec=function(b){return eval(b)};g(w)}})(this);
"use strict";

// 暂时注释，看能否解决地图上的屏不出来的毛病
if(!Date.now){
    Date.now = function() {
        return new Date().getTime();
    };
}
if(!Array.isArray){
    Array.isArray = function(o){
        return $.isArray(o);
        // Object.prototype.toString.call(o) == "[object Array]";
    }
}
if(!Array.prototype.indexOf){
    Array.prototype.indexOf = function(sought, fromIndex){
        var length = this.length;
        if(!length){return -1;}
        fromIndex = fromIndex || 0;
        if(fromIndex < 0){fromIndex = length+fromIndex;}
        if(fromIndex < 0){fromIndex = 0;}
        for(; fromIndex<length; fromIndex++){
            if(this[fromIndex] === sought){
                return fromIndex;
            }
        }
        return -1;
    }
}
if(!Array.prototype.lastIndexOf){
    Array.prototype.lastIndexOf = function(sought, fromIndex){
        var length = this.length;
        if(!length){return -1;}
        fromIndex = fromIndex || length-1;
        if(fromIndex < 0){fromIndex = length+fromIndex;}
        if(fromIndex > length-1){fromIndex = length-1;}
        for (; fromIndex>=0; fromIndex--) {
            if(this[fromIndex] === sought){
                return fromIndex;
            }
        }
        return -1;
    }
}
if(!Array.prototype.forEach){
    Array.prototype.forEach = function(fun, thisp){
        var i=-1,length=this.length;
        thisp = thisp || null;
        while(++i<length) {
            if(i in this){
                fun.call(thisp, this[i], i, this);
            }
        }
    }
}
if(!Array.prototype.map){
    Array.prototype.map = function(fun, thisp){
        var i=-1,length=this.length;
        var result = Array(length);
        thisp = thisp || null;
        while(++i<length){
            if(i in this){
                result[i] = fun.call(thisp, this[i], i, this);
            }
        }
        return result;
    }
}
if(!Array.prototype.filter){
    Array.prototype.filter = function(fun, thisp){
        var i=-1,length=this.length;
        var result = [];
        var value;
        thisp = thisp || null;
        while(++i<length){
            if(i in this){
                value = this[i];
                if(fun.call(thisp, value, i, this)) {
                    result.push(value);
                }
            }
        }
        return result;
    }
}
if(!Array.prototype.every){
    Array.prototype.every = function(fun, thisp){
        var i=-1,length=this.length;
        thisp = thisp || null;
        while(++i<length){
            if(i in this && !fun.call(thisp, this[i], i, this)){
                return false;
            }
        }
        return true;
    }
}
if(!Array.prototype.some){
    Array.prototype.some = function(fun, thisp){
        var i=-1,length=this.length;
        thisp = thisp || null;
        while(++i<length){
            if(i in this && fun.call(thisp, this[i], i, this)){
                return true;
            }
        }
        return false;
    }
}

if(!String.prototype.trim){
    String.prototype.trim = function(){
        var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
        var wsRegexChars = '[' + ws + ']';
        var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');
        var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');
        return String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
    };
}


if(!window.FormData){
    window.FormData = function(){

    };
}

(function () {
    var _pt = {
        "__CID__" : 0,
        "__UID__" : 0
    };
    var CreateClass = function (A, B) {
        _pt.__CID__++;
        var CID = "__"+_pt.__CID__+"__";
        A.__CID__ = CID;
        if(B){
            var fun = function(){this.constructor = A;};
            fun.prototype = B.prototype;
            A.prototype = new fun();
            A.prototype[CID] = B.prototype;
        }
        fun = null;
        return CID;
    };
    var DefineReadOnly = function(o){
        if(Object.defineProperties){
            var opts = {};
            for(var i=1,k=arguments.length; i<k; i++){
                opts[arguments[i]] = {writable : false};
            }
            Object.defineProperties(o, opts);
        }
    };
    var SetReadOnly = function(o, prop, value){
        if(Object.defineProperties){
            Object.defineProperty(o, prop, {value:value,writable:false});
        }else{
            o[prop] = value;
        }
    };
    var potato,newFun,newCls,temp;
    var bindEventListener = function(tag, type, fun){
        if(window.addEventListener){
            tag.addEventListener(type, fun, false);
        }else{
            tag.attachEvent("on"+type, fun);
        }
    };
    var unbindEventListener = function(tag, type, fun){
        if(window.addEventListener){
            tag.removeEventListener(type, fun, false);
        }else{
            tag.detachEvent("on"+type, fun);
        }
    };

    newCls = (function(){
        function CON(){
            this[CID] = {
                _handlers : {}
            };
        }
        var CID = CreateClass(CON);
        CON.prototype.addListener = function (type, handler) {
            var _this = this[CID];
            var dictionary = _this._handlers[type];
            if (!dictionary) {
                _this._handlers[type] = dictionary = [];
            }
            dictionary.push(handler);
            return this;
        };
        CON.prototype.removeListener = function (type, handler) {
            var _this = this[CID];
            if(!type) {
                _this._handlers = {};
            }else{
                var _handlers = _this._handlers;
                var dictionary = _handlers[type];
                if (dictionary != null) {
                    if (!handler) {
                        delete _handlers[type];
                    } else {
                        var n = dictionary.indexOf(handler);
                        if(n > -1){
                            dictionary.splice(n, 1);
                        }
                        if (dictionary.length == 0) {
                            delete _handlers[type];
                        }
                    }
                }
            }
            return this;
        };
        CON.prototype.dispatch = function (event) {
            // console.log('event emitted: ' + event.type);
            var _this = this[CID];
            var dictionary = _this._handlers[event.type];
            var i,k,f;
            if (dictionary != null) {
                for (i = 0, k = dictionary.length; i < k; i++) {
                    dictionary[i](event);
                }
            }
            return this;
        };
        return CON;
    })();
    potato = window.potato = new newCls();
    potato.Dispatcher = newCls;

    potato.alert = window.alert;

    newCls = (function(){
        function CON(type, data){
            this.type = type;
            this.data = data;
            DefineReadOnly(this,"type","data");
        }
        var CID = CreateClass(CON);
        return CON;
    })();
    potato.Event = newCls;

    newCls = (function(){
        function CON(id, data){
            this.id = id;
            data = data || {};
            this.note = data.note;
            this.detail = data.detail;
            this.file = data.file;
            this.line = data.line;
            this.source = data.source;
            this.nid = data.nid;
            DefineReadOnly(this,"id","note","detail","file","line", "source", "nid");
        }
        var CID = CreateClass(CON, window.Error);
        CON.prototype.format = function () {
            return (this.note||potato.errors[this.id])+"["+this.id+"]";
        };
        return CON;
    })();
    potato.Error = newCls;

    newCls = (function(){
        function CON(options){
            this.url = options.url;
            this.method = options.method;
            this.data = options.data;
            this.send = options.send;
            this.header = options.header;
            this.timeout = options.timeout;
            this.cache = options.cache;
            this.async = true;
            this.disableCommonFailureCaller = options.disableCommonFailureCaller;
        }
        var CID = CreateClass(CON);
        return CON;
    })();
    potato.RequestOptions = newCls;


    newCls = (function(){
        function CON(connection,options){
            this[CID] = {
                _completeCallbacks : [],
                _successCallbacks : [],
                _failureCallbacks : [],
                _stopPropagation : false,
                _redata : undefined,
                _result : undefined
            };
            this.options = options;
            this.connection = connection;
            DefineReadOnly(this,"options","connection");
        }
        var CID = CreateClass(CON);
        var PT = {
            _setResultData : function(callbacks){
                var _this = this[CID];
                _this._stopPropagation = false;
                _this._redata = undefined;
                var i, k, item;
                for (i = 0, k = callbacks.length; i < k; i++) {
                    item = callbacks[i];
                    if(item.past) {continue;}
                    item.past = true;
                    item.fun.apply(this, [_this._result, item.args]);
                    if(_this._redata!==undefined){return false;}
                }
                callbacks.length = 0;
                return true;
            }
        };
        CON.prototype.addCompleteCaller = function (callback, reverse, args) {
            var _this = this[CID];
            if (reverse) {
                _this._completeCallbacks.unshift({ "fun": callback, "args": args, "past":false });
            } else {
                _this._completeCallbacks.push({ "fun": callback, "args": args, "past":false});
            }
            return this;
        };
        CON.prototype.addSuccessCaller = function (callback, reverse, args) {
            var _this = this[CID];
            if (reverse) {
                _this._successCallbacks.unshift({ "fun": callback, "args": args, "past":false});
            } else {
                _this._successCallbacks.push({ "fun": callback, "args": args, "past":false});
            }
            return this;
        };
        CON.prototype.addFailureCaller = function (callback, reverse, args) {
            var _this = this[CID];
            if (reverse) {
                _this._failureCallbacks.unshift({ "fun": callback, "args": args, "past":false});
            } else {
                _this._failureCallbacks.push({ "fun": callback, "args": args, "past":false});
            }
            return this;
        };
        CON.prototype.setConnection = function(connection){
            SetReadOnly(this, "connection", connection);
        };
        CON.prototype.success = function (data) {
            if(data instanceof window.Error){throw new potato.Error("b3.2");}
            var _this = this[CID];
            this.setConnection(null);
            _this._result = data;
            if(PT._setResultData.call(this, _this._completeCallbacks)){
                PT._setResultData.call(this, _this._successCallbacks);
            }
            if(_this._redata === undefined || _this._stopPropagation){
                this.clearAllCaller();
            }else{
                this.complete(_this._redata);
            }
        };
        CON.prototype.failure = function (error) {
            if(!(error instanceof window.Error)){throw new potato.Error("b3.2");}
            var _this = this[CID];
            this.setConnection(null);
            _this._result = error;
            if(PT._setResultData.call(this, _this._completeCallbacks)){
                PT._setResultData.call(this, _this._failureCallbacks);
            }
            if(_this._redata === undefined || _this._stopPropagation){
                this.clearAllCaller();
            }else{
                this.complete(_this._redata);
            }
        };
        CON.prototype.complete = function (data) {
            if(data instanceof window.Error){
                this.failure(data);
            }else{
                this.success(data);
            }
        };
        CON.prototype.stopPropagation = function () {
            var _this = this[CID];
            _this._redata = true;
            _this._stopPropagation = true;
        };
        CON.prototype.replaceResult = function (data) {
            var _this = this[CID];
            _this._redata = data;
            _this._stopPropagation = false;
        };
        
        CON.prototype.clearAllCaller = function () {
            var _this = this[CID];
            _this._completeCallbacks.length = 0;
            _this._successCallbacks.length = 0;
            _this._failureCallbacks.length = 0;
            _this._redata = undefined;
            _this._stopPropagation = false;
            _this._result = undefined;
        };
        CON.prototype.abort = function () {
            if(Array.isArray(this.connection)){
                this.connection.forEach(function(o,i){
                    o.abort();
                });
            }else{
                this.connection && this.connection.abort();
            }
        };
        return CON;
    })();
    potato.Proxy = newCls;

    newCls = (function(){
        function CON(busyDelay){
            potato.Dispatcher.call(this);
            this[CID] = {
                _loadingItems : 0,
                _loadingTimer : 0,
                _loadingTimeout : busyDelay,
                _itemList : []
            };
        }
        var CID = CreateClass(CON, potato.Dispatcher);
        var PT = {
            _count : function(bool){
                var _this = this[CID];
                if(bool){
                    _this._loadingItems++;
                }else{
                    _this._loadingItems--;
                }
                //console.log(_this._loadingItems,'++++');
                if(_this._loadingItems<0){
                    _this._loadingItems = 0;
                }
                this.dispatch(new potato.Event("change",_this._loadingItems));
                var that = this;
                if(_this._loadingItems && !_this._loadingTimer){
                    _this._loadingTimer = window.setTimeout(function(){
                        if(_this._loadingItems){
                            that.dispatch(new potato.Event("busy"));
                        }
                        _this._loadingTimer = 0;
                    },_this._loadingTimeout);
                }
                if(!_this._loadingItems){
                    if(_this._loadingTimer){
                        clearTimeout(_this._loadingTimer);
                        _this._loadingTimer = 0;
                    }
                    _this._itemList = [];
                    that.dispatch(new potato.Event("free"));
                }
            }
        };
        CON.prototype.add = function (item) {
            item = item || true;
            var _this = this[CID];
            _this._itemList.push(item);
            PT._count.call(this, true);
        };
        CON.prototype.remove = function (item) {
            item = item || true;
            var _this = this[CID];
            var i = _this._itemList.indexOf(item);
            if(i>-1){
                _this._itemList.splice(i,1);
            }
            PT._count.call(this, false);
        };
        return CON;
    })();
    potato.LoadingDelay = newCls;

    newCls = (function(){
        function CON(dom,parent,options){
            potato.Dispatcher.call(this);
            this.dom = dom;
            this.parent = parent==window?null:parent;
            this.options = options;
            DefineReadOnly(this,"dom","parent");
        }
        var CID = CreateClass(CON, potato.Dispatcher);
        CON.prototype.setParent = function (parent){
            SetReadOnly(this, "parent", parent);
        };
        CON.prototype._uninstall = function () {
            this.dispatch(new potato.Event("uninstalled"));
            this.parent.dispatch(new potato.Event("removed"));
            this.setParent(null);
        };
        CON.prototype._install = function (parent) {
            this.setParent(parent);
            this.dispatch(new potato.Event("installed"));
            this.parent.dispatch(new potato.Event("appended"));
        };
        return CON;
    })();
    potato.Widget = newCls;


    newCls = (function(){
        function CON(dom,parent,options){
            potato.Widget.call(this,dom,parent,options);
        }
        var CID = CreateClass(CON, potato.Widget);
        
        return CON;
    })();
    potato.UModule = newCls;


    newCls = (function(){
        function CON(){
            potato.Dispatcher.call(this);
            this.queue = null;
            DefineReadOnly(this,"queue");
        }
        var CID = CreateClass(CON, potato.Dispatcher);
        CON.prototype._addToQueue = function (queue){
            SetReadOnly(this, "queue", queue);
        };
        CON.prototype._destroy = function () {
            return true;
        };
        CON.prototype._execute = function(){
            this._success();
        };
        CON.prototype._redo = function(){
            this._success();
        };
        CON.prototype._undo = function(){
            this._success();
        };
        CON.prototype._success = function () {
            if(this.queue){this.queue._success();}
        };
        CON.prototype._failure = function () {
            if(this.queue){this.queue._failure();}
        };
        return CON;
    })();
    potato.Cmd = newCls;


    newCls = (function(){
        function CON(historyMax, firstCmd){
            potato.Dispatcher.call(this);
            this.historyMax = historyMax;
            this.firstCmd = firstCmd;
            this.history = [];
            this.cache = [];
            this.cur = -1;
            this.goto = -1;
            this.curItem = null;
            if(firstCmd){
                firstCmd._addToQueue(this);
            }
            var that = this;
            DefineReadOnly(this,"historyMax","firstCmd","history","cache","cur","goto","curItem");
        }
        var CID = CreateClass(CON, potato.Dispatcher);
        
        var PT = {
            _next : function(bool){
                var history = this.history;
                var h = history.length;
                var c = this.cur;
                var g = this.goto;
                var m = this.historyMax;
                var cmd,del,index;
                if(c != g){
                    if(this.firstCmd && g==-1){
                        cmd = this.firstCmd;
                        SetReadOnly(this, "curItem", {cmd:cmd,method:"undo",index:g});
                        cmd._undo();
                    }else if(g < c){
                        if(this.firstCmd){
                            cmd = history[g];
                            index = g;
                        }else{
                            cmd = history[c];
                            index = c-1;
                        }
                        SetReadOnly(this, "curItem", {cmd:cmd,method:"undo",index:index});
                        cmd._undo();
                    }else{
                        if(this.firstCmd){
                            cmd = history[g];
                            index = g;
                        }else{
                            cmd = history[c+1];
                            index = c+1;
                        }
                        SetReadOnly(this, "curItem", {cmd:cmd,method:"redo",index:c+1});
                        cmd._redo();
                    }
                }else if(this.cache.length){
                    cmd = this.cache.shift();
                    if(c < (h-1)){
                        del = history.slice(c+1);
                        history.length = h = c+1;
                    }
                    history.push(cmd);
                    if(m < (h+1)){
                        del = [history.shift()];
                        SetReadOnly(this, "cur", c-1);
                    }else{
                        SetReadOnly(this, "goto", g+1);
                    }
                    PT._delItems.call(this, del);
                    SetReadOnly(this, "curItem", {cmd:cmd,method:"execute",index:this.goto});
                    cmd._addToQueue(this);
                    cmd._execute();
                }else{
                    SetReadOnly(this, "curItem", null);
                    this.dispatch(new potato.Event("success"));
                    this.dispatch(new potato.Event("complete"));
                }
            },
            _delItems : function(arr){
                if(arr && arr.length>0){
                    for(var i=0,k=arr.length; i<k; i++){
                        arr[i]._destroy();
                    }    
                }
            }
        };
        CON.prototype.push = function (cmd){
            var cache = this.cache;
            if(this.firstCmd){
                PT._delItems.call(this, cache);
                cache.length = 0;
                cache[0] = cmd;
            }else{
                cache.push(cmd);
            }
            if(!this.curItem){
                 PT._next.call(this);
            }
        };
        CON.prototype.add = function (arr){
            var cache = this.cache;
            if(this.firstCmd){
                PT._delItems.call(this, cache);
                cache.length = 0;
                cache[0] = arr.pop();
                PT._delItems.call(this, arr);
            }else{
                cache.push.apply(cache, arr);
            }
            if(!this.curItem){
                PT._next.call(this);
            }
        };
        CON.prototype.empty = function(){
            this.cancel(true);
            PT._delItems.call(this, this.cache);
            PT._delItems.call(this, this.history);
            this.history.length = 0;
            this.cache.length = 0;
            SetReadOnly(this, "cur", -1);
            SetReadOnly(this, "goto", -1);
            if(this.curItem){
                this.curItem.cmd._addToQueue(null);
            }
            SetReadOnly(this, "curItem", null);
        };
        CON.prototype.cancel = function (abort){
            PT._delItems.call(this, this.cache);
            this.cache.length = 0;
            if(this.curItem){
                var curItem = this.curItem;
                var index = curItem.index;
                SetReadOnly(this, "goto", index);
                if(abort){
                    var cmd = curItem.cmd;
                    var method = "abort_"+curItem.method;
                    if(cmd[method]){
                        SetReadOnly(this, "goto", this.cur);
                        if(!curItem.aborted){
                            curItem.aborted = true;
                            cmd[method]();
                        }
                    }
                }
            }
        };
        CON.prototype._success = function (){
            SetReadOnly(this, "cur", this.curItem.index);
            PT._next.call(this);
        };
        CON.prototype._failure = function (){
            if(this.curItem && this.curItem.aborted){
                PT._next.call(this);
            }else{
                PT._delItems.call(this, this.cache);
                this.cache.length = 0;
                SetReadOnly(this, "goto", this.cur);
                SetReadOnly(this, "curItem", null);
                this.dispatch(new potato.Event("failure"));
                this.dispatch(new potato.Event("complete"));
            }
        };
        CON.prototype.to = function(n){
            var arr = [this.goto, 0];
            if(n==0){return arr;}
            n = this.goto+n;
            var l = this.history.length-1;
            if(n < -1){
                arr[0] = -1;
                arr[1] = n+1;
            }else if(n > l){
                arr[0] = l;
                arr[1] = n-l;
            }else{
                arr[0] = n;
                arr[1] = 0;
            }
            return arr;
        };
        CON.prototype.go = function(n){
            var l = this.history.length-1;
            if(n < -1){
                n = -1;
            }else if(n > l){
                n = l;
            }
            if(n==-1 && this.goto==-1){
                this.dispatch(new potato.Event("overflow"));
                return false;
            }
            SetReadOnly(this, "goto", n);
            if(!this.curItem){
                PT._next.call(this);
            }
        };
        CON.prototype.isRunning = function(){
            return this.curItem!=null;
        };
        return CON;
    })();
    potato.Queue = newCls;


    newCls = (function(){
        function CON(uriMax, actMax, firstUriCmd, exitCallback){
            this.uriQueue = new potato.Queue(uriMax, firstUriCmd);
            this.actQueue = new potato.Queue(actMax);
            this.uriCache = [];
            this.actCache = [];
            var that = this;
            this.uriQueue.addListener("complete", function(){
                PT._onUriComplete.call(that);
            });
            this.actQueue.addListener("complete", function(){
                PT._onActComplete.call(that);
            });
            this.uriQueue.addListener("overflow", function(){
                exitCallback();
            });
            DefineReadOnly(this,"uriQueue","actQueue","uriCache","actCache");
        }
        var CID = CreateClass(CON);
        var PT = {
            _delItems : function(arr){
                if(arr && arr.length>0){
                    for(var i=0,k=arr.length; i<k; i++){
                        arr[i]._destroy();
                    }    
                }
            },
            _onUriComplete : function(){
                this.actQueue.empty();
                if(this.actCache.length){
                    this.actQueue.add(this.actCache);
                    this.actCache.length = 0;
                }
            },
            _onActComplete : function(){
                if(this.uriCache.length){
                    this.uriQueue.add(this.uriCache);
                    this.uriCache.length = 0;
                }
            }
        };
        
        CON.prototype.uriPush = function(cmd){
            this.actQueue.cancel(true);
            this.uriQueue.cancel(true);
            PT._delItems.call(this, this.actCache);
            this.actCache.length = 0;
            if(this.actQueue.isRunning()){
                PT._delItems.call(this, this.uriCache);
                this.uriCache.length = 0;
                this.uriCache[0] = cmd;
            }else{
                this.uriQueue.push(cmd);
            }
        };
        CON.prototype.actPush = function(cmd){
            if(this.uriQueue.isRunning() || this.uriCache.length){
                this.actCache.push(cmd);
            }else{
                this.actQueue.push(cmd);
            }
        };
        CON.prototype.go = function(n){
            var arr = this.actQueue.to(n);
            if(arr[1]){
                arr = this.uriQueue.to(arr[1]);
                this.uriQueue.go(arr[0]);
            }else{
                this.actQueue.go(arr[0]);
            }
        };
        CON.prototype.uriGo = function(n){
            var arr = this.uriQueue.to(n);
            this.uriQueue.go(arr[0]);
        };
        CON.prototype.empty = function(){
            this.actQueue.empty();
            this.uriQueue.empty();
        };
        return CON;
    })();
    potato.ViewHistory = newCls;


    newCls = (function(){
        function CON(expires, etag, encryption, data, update){
            this.expires = expires
            this.etag = etag;
            this.data = data;
            this.encryption = encryption;
            this.update = update;
            DefineReadOnly(this,"expires","etag","data","encryption","update");
        }
        var CID = CreateClass(CON);
        return CON;
    })();
    _pt.UncertainCache = newCls;


    newCls = (function(){
        function CON(){
            this.storage = {};
            var that = this;
            var k;
            setInterval(function(){
                PT._recoverExpired.call(this);
                var i=0;
                for(k in that.storage){
                    i++;
                }
                if(i>150){
                    pt._recoverRate.call(this, i-150);
                }
            },3600*1000*5);
            DefineReadOnly(this,"storage");
        }
        var CID = CreateClass(CON);
        var PT = {
            _recoverExpired : function(){
                var head,key,dels={},nowTime=PT._nowTime.call(this),time;
                for(key in this.storage){
                    head = this.storage[key][0];
                    time = parseInt(head[2]) || 0;
                    if(time && (nowTime-head[1])>time && !head[3]){
                        dels[key] = 1;
                    }
                }
                for(key in dels){
                    PT._removeItem.call(this, key);
                }
            },
            _recoverRate : function(k){
                var key,i,arr=[];
                for(key in this.storage){
                    arr.push({key:key,time:parseInt(this.storage[key][0][0])||0});
                }
                if(!arr.length){return false;}
                arr.sort(potato.sortNumericBy("time"));
                for(i=0; i<k; i++){
                    PT._removeItem.call(this, arr[i].key);
                }
                return true;
            },
            _removeItem : function(key){
                var storage = this.storage;
                if(storage[key]){
                    var data = storage[key][1];
                    if(typeof(data.removeFormCache) == "function"){
                        data.removeFormCache(key);
                    }
                    delete storage[key];
                }
            },
            _nowTime : function(){
                return Math.floor(Date.now()/1000);
            }
        };
        
        CON.prototype.clear = function(namespace){
            var key,data,storage = this.storage;
            if(namespace===undefined){
                for(key in storage){
                    data = storage[key][1];
                    if(typeof(data.removeFormCache) == "function"){
                        data.removeFormCache(key);
                    }
                }
                SetReadOnly(this, "storage", {});
            }else{
                var str = namespace+"_";
                var len = str.length;
                var dels = {};
                for(key in storage){
                    if(key.substr(0,len) == str){
                        dels[key] = 1;
                    }
                }
                for(key in dels){
                    data = storage[key][1];
                    if(typeof(data.removeFormCache) == "function"){
                        data.removeFormCache(key);
                    }
                    delete storage[key];
                }
            };
        };
        CON.prototype.removeItem = function(key, namespace){
            namespace = namespace || "";
            key = namespace+"_"+key;
            PT._removeItem.call(this, key);
        };
        CON.prototype.setItem = function(key, value, expired, tag, encryption, namespace){
            value = potato.deepJsonClone(value);
            expired = parseInt(expired) || 0;
            tag = tag || "";
            namespace = namespace || "";
            key = namespace+"_"+key;
            var nowTime = PT._nowTime.call(this);
            var storage = this.storage;
            var data = storage[key]?storage[key][1]:null;
            if(data!=value){
                if(data && typeof(data.removeFormCache)=="function"){
                    data.removeFormCache(key);
                }
                if(value && typeof(value.addToCache)=="function"){
                    value.addToCache(key);
                }
            }
            storage[key] = [[(namespace=="sys"?9999999999:nowTime),nowTime,expired,tag],value]; 
        };
        CON.prototype.updateItem = function(key, data, namespace){
            data = potato.deepJsonClone(data);
            namespace = namespace || "";
            key = namespace+"_"+key;
            var item = this.storage[key];
            if(item){
                item[1] = data;
            }
        };
        CON.prototype.getItem = function(key, namespace){
            namespace = namespace || "";
            key = namespace+"_"+key;
            var item = this.storage[key];
            if(item){
                var that = this;
                var head = item[0];
                var content = potato.deepJsonClone(item[1]);
                var nowTime = PT._nowTime.call(this);
                if(head[0] < nowTime){
                    head[0] = nowTime;
                }
                if(head[2]==0){
                    if(head[3]){
                        return new _pt.UncertainCache(head[2], head[3], head[4], content, function(expired,etag){
                            head[1] = nowTime;
                            head[2] = expired;
                            head[3] = etag;
                            that.storage[key][0] = head;
                        });
                    }else{
                        return content;
                    }
                }else if((nowTime-head[1])<=head[2]){
                    return content;
                }else{
                    if(head[3]){
                        return new _pt.UncertainCache(head[2], head[3], head[4], content, function(expired){
                            head[1] = nowTime;
                            head[2] = expired;
                            that.storage[key][0] = head;
                        });
                    }else{
                        PT._removeItem.call(this, key);
                        return undefined;
                    }
                }
            }else{
                return undefined;
            }
        };
        return CON;
    })();
    _pt.Cache = newCls;


    newCls = (function(){
        function CON(storage){
            this[CID] = {
                _shimAllCompleted : false,
                _shim : {}
            };
            this.storage = storage;
            var i,k,key,item,_this=this[CID];
            var shim = _this._shim;
            for(i=0,k=storage.length; i<k; i++){
                key = storage.key(i);
                if(key.substr(0,3) == '_b_'){
                    shim[key.substr(3)] = null;
                }
            }
            DefineReadOnly(this,"storage");
        }
        var CID = CreateClass(CON);
        var PT = {
            _recoverExpired : function(){
                var _this = this[CID];
                var head,key,dels={},nowTime=PT._nowTime.call(this),time;
                PT._shimAll.call(this);
                for(key in _this._shim){
                    if(_this._shim[key]){
                        head = _this._shim[key][0];
                        time = parseInt(head[2]) || 0;
                        if(time && (nowTime-head[1])>time && !head[3]){
                            dels[key] = 1;
                        }   
                    }
                }
                for(key in dels){
                    PT._removeItem.call(this, key);
                }
            },
            _recoverRate : function(){
                var _this = this[CID];
                var key,i,k,arr=[];
                _this._shimAll();
                for(key in _this._shim){
                    if(_this._shim[key]){
                        arr.push({key:key,time:parseInt(_this._shim[key][0][0])||0});
                    }
                }
                if(!arr.length){return false;}
                arr.sort(potato.sortNumericBy("time"));
                k = Math.min(10, arr.length);
                for(i=0; i<k; i++){
                    PT._removeItem.call(this, arr[i].key);
                }
                return true;
            },
            _removeItem : function(key){
                var _this = this[CID];
                this.storage.removeItem('_b_'+key);
                delete _this._shim[key];
            },
            _updateItemHead : function(key,head){
                var _this = this[CID];
                var item = this.storage.getItem('_b_'+key);
                var content = item.substr(item.indexOf("|")+1);
                if(PT._write.call(this,'_b_'+key, head.join(",")+"|"+content)){
                    _this._shim[key][0] = head;
                }else{
                    throw(this.storage+"is full!");
                }
            },
            _setItem : function(key,head,content){
                var _this = this[CID];
                var ocontent = potato.deepJsonClone(content);
                content = potato.cacheEncode(content);
                if(head[4]){content = potato.cacheEncrypt(content);}
                if(PT._write.call(this,'_b_'+key, head.join(",")+"|"+content)){
                    _this._shim[key] = [head,ocontent];//0访问时间，1写入时间，2过期时间，3版本, 4是否加密
                }else{
                    throw(this.storage+"is full!");
                }
            },
            _getItem : function(key, primeval){
                var _this = this[CID];
                if(_this._shim[key]===undefined){return undefined;}
                if(_this._shim[key]===null){
                    var arr;
                    var item = this.storage.getItem('_b_'+key);
                    if(item){
                        var p = item.indexOf("|");
                        var head = item.substr(0,p).split(",");
                        var content = item.substr(p+1);
                        head[0] = parseInt(head[0]);
                        head[1] = parseInt(head[1]);
                        head[4] = parseInt(head[4]);
                        if(!primeval){
                            if(head[4]){
                                content = potato.cacheDecrypt(content);
                            }
                            content = potato.cacheDecode(content);
                            arr = [head, content];
                        }else{
                            arr = [head, content, 1];
                        }
                        _this._shim[key] = arr;
                    }
                }
                return _this._shim[key];
            },
            _nowTime : function(){
                return Math.floor(Date.now()/1000);
            },
            _write : function(key,value){
                var _this = this[CID];
                var e,error;
                try{
                    error = false;
                    this.storage.setItem(key,value);
                }catch(e){
                    error = true;
                    PT._recoverExpired.call(this);
                }
                while(error){
                    try{
                        error = false;
                        this.storage.setItem(key,value);
                    }catch(e){
                        error = PT._recoverRate.call(this);
                        if(!error){return false;}
                    }
                }
                return true;
            },
            _shimAll : function(){
                var _this = this[CID];
                if(!_this._shimAllCompleted){
                    var shim = _this._shim;
                    for(var key in shim){
                        if(shim[key] === null){
                            PT._getItem.call(this, key, true);
                        }
                    }
                    _this._shimAllCompleted = true;
                }
            }
        };
        CON.prototype.clear = function(namespace){
            var _this = this[CID];
            var i,k,key,dels={},storage=this.storage;
            if(namespace===undefined){
                for(i=0,k=storage.length; i<k; i++){
                    key = storage.key(i);
                    if(key.substr(0,3) == '_b_'){
                        dels[key] = 1;
                    }
                }
                for(key in dels){
                    storage.removeItem(key);
                }
                _this._shim = {};
            }else{
                var str = '_b_'+namespace+"_";
                var len = str.length;
                for(i=0,k=storage.length; i<k; i++){
                    key = storage.key(i);
                    if(key.substr(0,len) == str){
                        dels[key.substr(3)] = 1;
                    }
                }
                for(key in dels){
                    delete _this._shim[key];
                    this.storage.removeItem('_b_'+key);
                }
            }
        };
        CON.prototype.removeItem = function(key, namespace){
            namespace = namespace || "";
            key = namespace+"_"+key;
            PT._removeItem.call(this, key);
        };
        CON.prototype.setItem = function(key, value, expired, tag, encryption, namespace){
            expired = expired || 0;
            tag = tag || "";
            encryption = encryption?1:0;
            namespace = namespace || "";
            key = namespace+"_"+key;
            var nowTime = PT._nowTime.call(this);
            PT._setItem.call(this,key,[(namespace=="sys"?9999999999:nowTime),nowTime,expired,tag,encryption],value);
        };
        CON.prototype.updateItem = function(key, data, namespace){
            namespace = namespace || "";
            key = namespace+"_"+key;
            var item = PT._getItem.call(this,key,true);
            if(item){
                PT._setItem.call(this,key,item[0],data);
            }
        };
        CON.prototype.getItem = function(key, namespace){
            /*
                0,0 永不过期
                0,1 每次需验证，验证304可重设过期时间和etag
                1,0 没过期直接返回，过期直接删除
                1,1 没过期直接返回，过期验证304可重设过期时间
            */
            namespace = namespace || "";
            key = namespace+"_"+key;
            var item = PT._getItem.call(this, key);
            if(!item){return undefined;}
            var nowTime = PT._nowTime.call(this);
            var that = this;
            var head = item[0];
            var content = potato.deepJsonClone(item[1]);
            if(item.length==3){
                if(head[4]){
                    content = potato.cacheDecrypt(content);
                }
                content = potato.cacheDecode(content);
                item[1] = content;
                item.length = 2;
            }
            if(head[0] < nowTime){
                head[0] = nowTime;
                PT._updateItemHead.call(this,key,head);
            }
            var type = head[2].substr(-1,1);
            var time = parseInt(head[2]) || 0;
            if(time==0||type=="r"||type=="s"){
                if(head[3]){
                    return new _pt.UncertainCache(head[2], head[3], head[4], content, function(expired,etag){
                        head[1] = head[0];
                        head[2] = expired;
                        head[3] = etag;
                        PT._updateItemHead.call(that,key,head);
                    });
                }else{
                    return content;
                }
            }else if((head[0]-head[1])<=time){
                return content;
            }else{
                if(head[3]){
                    return new _pt.UncertainCache(head[2], head[3], head[4], content, function(expired){
                        head[1] = head[0];
                        head[2] = expired;
                        PT._updateItemHead.call(that,key,head);
                    });
                }else{
                    PT._removeItem.call(this, key);
                    return undefined;
                }
            }
        };

        return CON;
    })();
    _pt.Storage = newCls;

    newCls = (function(){
        function CON(body,mask,container,defaultState,history,loader){
            container = container || document.documentElement;
            this[CID] = {
                _undo : function(){
                    that.undo();
                },
                _redo : function(){
                    that.redo();
                },
                _resizeHandler : function(){
                    that.refreshSize();
                },
                _scrollHandler : function(){
                    that.refreshPos();
                },
                _layout : container==document.documentElement?window:container
            };
            this.body = body;
            this.mask = mask;
            this.container = container;
            this.history = history;
            this.loader = loader;
            this.dialogState = defaultState || "closed";
            this.index = 0;
            var that = this;
            var _this = this[CID];
            if(this.dialogState == "focused"){
                if(potato.history){
                    potato.addListener("historyUndo",_this._undo);
                    potato.addListener("historyRedo",_this._redo);
                }
            }
            if(this.dialogState != "closed"){
                bindEventListener(_this._layout,"resize",_this._resizeHandler);
                bindEventListener(_this._layout,"scroll",_this._scrollHandler);
                _this._resizeHandler();
            }
            DefineReadOnly(this,"dialogState","index","history","loader","container","body","mask");
        }
        var CID = CreateClass(CON);
        var PT = {
            _setState : function(state,data){
                var _this = this[CID];
                var ostate = this.dialogState;
                SetReadOnly(this, "dialogState", state);
                if(potato.history){
                    if(state=="focused"){
                        potato.addListener("historyUndo",_this._undo);
                        potato.addListener("historyRedo",_this._redo);
                    }else{
                        potato.removeListener("historyUndo",_this._undo);
                        potato.removeListener("historyRedo",_this._redo);
                    }
                }
                if(state == "closed"){
                    if(this.history){
                        this.history.empty();
                    }
                    document.body.removeChild(this.body);
                    document.body.removeChild(this.mask);
                    unbindEventListener(_this._layout,"resize",_this._resizeHandler);
                    unbindEventListener(_this._layout,"scroll",_this._scrollHandler);
                }else{
                    if(ostate == "closed"){
                        document.body.appendChild(this.body);
                        document.body.appendChild(this.mask);
                    
                        bindEventListener(_this._layout,"resize",_this._resizeHandler);
                        bindEventListener(_this._layout,"scroll",_this._scrollHandler);
                        _this._resizeHandler();
                    }
                }
                var states = {from:ostate, to:state};
                this._onSetState(states,data);
                if(this.loader){
                    var mod = this.loader.widget;
                    if(mod){mod.dispatch(new potato.Event("stateChanged",states));}
                }
                this.dispatch(new potato.Event("stateChanged",states));
            }
        };
        CON.prototype.focus = function (data, exit) {
            if(this.dialogState == "focused"){return true;}
            if(!this._onFocus(data)){return false;}
            var list = potato.dialogs;
            var dialog = list[list.length-1];
            if(!exit){
                var o = dialog._blur(data);
                if(!o){return false;}
            }
            var index =  dialog.index;
            if(this.dialogState == "blured"){
                var n = list.indexOf(this);
                list.splice(n, 1);
            }
            index++;
            SetReadOnly(this, "index", index);
            this._setIndex(index);
            list.push(this);
            PT._setState.call(this, "focused",data);
            return true;           
        };
        CON.prototype.close = function (data) {
            if(this.dialogState == "closed"){return true;}
            if(!this._onClose(data)){return false;}
            var list = potato.dialogs;
            if(this.dialogState == "focused"){
                var dialog = list[list.length-2];
                if(dialog){
                    var rs = dialog.focus(data, true);
                    if(!rs){return false;}
                }else{
                    this.exit(data);
                    return false;
                }
            }
            var n = list.indexOf(this);
            list.splice(n, 1);
            SetReadOnly(this, "index", 0);
            this._setIndex(0);
            PT._setState.call(this, "closed",data);
            this.removeListener();
            return true;
        };
        CON.prototype._blur = function (data) {
            if(this.dialogState == "blured"){return true;}
            if(!this._onBlur(data)){return false;}
            PT._setState.call(this,"blured",data);
            return true;
        };
        CON.prototype.refreshSize = function(){
        };
        CON.prototype.refreshPos = function(){
        };
        CON.prototype._setIndex = function(n){
        };
        CON.prototype.undo = function (uri) {
            if(this.history){
                if(uri){
                    this.history.uriGo(-1);
                }else{
                    this.history.go(-1);
                }
            }else{
                this.close();
            }
        };
        CON.prototype.redo = function (uri) {
            if(this.history){
                if(uri){
                    this.history.uriGo(1);
                }else{
                    this.history.go(1);
                }
            }else{
                this.focus();
            }
        };
        CON.prototype.exit = function (data) {
        };
        CON.prototype._onFocus = function (data) {
            return true;
        };
        CON.prototype._onBlur = function (data) {
            return true;
        };
        CON.prototype._onClose = function (data) {
            return true;
        };
        CON.prototype._onSetState = function (states,data) {
        };
        CON.prototype.load = function(widget,options){
            if(this.loader){
                var that = this;
                var cmd = new potato.Cmd();
                var load = function(flag, action){
                    that.loader.load(widget, flag);
                    cmd._success();
                    that.refreshSize();
                };
                cmd._execute = function(){
                    load(false, "execute");
                };
                cmd._undo = function(){
                    load(true, "undo");
                };
                cmd._redo = function(){
                    load(false, "redo");
                };
                this.history.uriPush(cmd);
            }
        };

        return CON;
    })();
    potato.Dialog = newCls;

    potato.load = function(options, async) {
        if(!(options instanceof potato.RequestOptions)){
            options = new potato.RequestOptions(options);
        }
        var cache,url,result,returned,request,connection;
        url = options.url;
        options.method = options.method ? options.method.toLowerCase() : "get";
        if(options.method == "get"){
            cache = potato.getCache(potato._remoteRoute(url));
        }
        if(async === undefined){
            async = options.async;
        }
        var callback = function(result, end){
            if(async && !request){
                window.setTimeout(function(){
                    callback(result, end);
                },0);             
            }else{
                if(!end && !(result instanceof window.Error)) {
                    var cachePlan = result.cache;
                    result = result.data;
                    if(result !== undefined){
                        if(cachePlan){
                            cachePlan = cachePlan.split("/");
                            potato.setCache(url, result, cachePlan[0], cachePlan[1], cachePlan[2], cachePlan[3]);
                        }
                    }else{
                        result = cache.data;
                        if(cachePlan.etag==""){cachePlan.etag = cache.etag;}
                        if(cachePlan.expires==""){cachePlan.expires = cache.expires;}
                        cache.update(cachePlan.expires, cachePlan.etag);
                        var type = cachePlan.expires.substr(-1,1);
                        var time = parseInt(cachePlan.expires) || 0;
                        if(type == "r"){
                            potato.ramStorage.setItem(url, result, time, '', cache.encryption);
                        }else if(type == "s"){
                            potato.sessionStorage.setItem(url, result, time, '', cache.encryption);
                        }
                    }
                }
                result = potato._remoteRenderer(url, result);
                if(result instanceof window.Error){
                    if(!options.disableCommonFailureCaller){
                        potato.commonFailureCaller(result,options);
                    }
                }
                if(request){
                    request.complete(result);
                }else{
                    returned = result;
                }
            }
        };
        
        if(cache!==undefined && !(cache instanceof _pt.UncertainCache)){
            callback(cache, true);
        }else{
            result = potato.loadData(options, cache?cache.etag:undefined);
            if(result instanceof potato.Proxy){
                result.addCompleteCaller(callback);
                connection = result;
            }else{
                callback(result);
            }
        }
        if(returned === undefined){
            request = new potato.Proxy(connection, options);
            return request;
        }else{
            return returned;
        }
    };
    potato.parseResult = function(node, callback){        
        var type = node.getAttribute("type");
        var children,data,key,child,i,k,n,root,list,arr,proxy,value;
        if(type=="list"){
            if(!callback){
                root = true;
                callback = function(result, path){
                    path.obj[path.key] = result;
                    callback.proxy --;
                    if(callback.proxy == 0){
                        console.log(data);
                        proxy.setConnection(null);
                        proxy.complete(data);
                    }
                }
                callback.proxy = 0;
                callback.proxys = [];
            }
            children = node.childNodes;
            list = {};
            arr = [];
            n = 0;
            i = 0;           
            for(n=0,k=children.length; n<k; n++){
                child = children[n];
                if(child.nodeType != 1){continue;}
                key = child.nodeName;
                arr[i] = potato.parseResult(child, callback);
                if(list){
                    if(list[key]){
                        list = null;
                    }else{
                        list[key] = arr[i];
                    }
                }
                i++;
            }
            data = list || arr;
            for(i in data){
                if(data[i] instanceof potato.Proxy){
                    callback.proxy ++;
                    callback.proxys.push(data[i]);
                    data[i].addCompleteCaller(callback,'',{obj:data, key:i});
                }
            }
            if(root && callback.proxy){
                proxy = new potato.Proxy(callback.proxys);
                return proxy;
            }else{
                return data;
            }
        }else{
            value = node.textContent || node.text || "";
            switch (type){
                case "text" :
                    return value;
                    break;
                case "number" :
                    return parseFloat(value);
                    break;
                case "json" : 
                    return JSON.parse(value);
                    break;
                case "eval" :
                    return eval(value);
                    break;
                case "request" :
                    value = new potato.RequestOptions(JSON.parse(value));
                    return potato.load(value, async);
                    break;
                case "function" :
                    value = new Function(value);
                    return value();
                    break;
                case "script" :
                    var script = document.createElement("script");
                    script.text = value;
                    document.head.appendChild(script);
                    return true;
                    break;
                case "require" :
                    return potato.loadList(JSON.parse(value),async);
                    break;
            }
            return "";
        }
    };
    potato.loadList = function(list, async) {
        var key,rs=[],connection,cur,returned,request;
        var result = Array.isArray(list)?[]:{};
        for (key in list) {
            rs.push([key, list[key]]);
        }
        var complete = function(data){
            if(data instanceof window.Error){
                callback(data);
            }else{
                var key = cur[0];
                result[key] = data;
                if(rs.length){
                    next();
                }else{
                    callback(result);
                }
            }
        };
        var callback = function(result){
            if(async && !request){
                window.setTimeout(function(){
                    callback(result, end);
                },0);             
            }else{
                if(request){
                    request.complete(result);
                }else{
                    returned = result;
                }
            }
        };
        var next = function () {
            if(request){
                request.setConnection(null);
            }
            cur = rs.shift();
            var key = cur[0];
            var item = cur[1];
            var data;
            if(item instanceof potato.RequestOptions){
                item.disableCommonFailureCaller = true;
                data = potato.load(item, async);
            }else if(typeof(item) == "function"){
                try{
                    data = item(result);
                }catch(e){
                    console.log(e);
                    data = new potato.Error("d9", e.message);
                }
            }else{
                data = item;
            }
            if(data instanceof potato.Proxy){
                if(returned === undefined){
                    connection = data;
                }else{
                    returned.setConnection(data);
                }
                data.addCompleteCaller(complete);
            }else{
                complete(data);
            }
        };
        next();
        if(returned === undefined){
            request = new proxy.Proxy(connection);
            return request;
        }else{
            return returned;
        }
    };

    potato.setHash = function(hash){
        var supportState = window.history.pushState?true:false;
        if(supportState){
            window.history.replaceState("","","#"+hash);
        }else{
            window.location.replace("#"+hash);
        }
    };

    potato.setCache = function(url, data, expired, etag, encryption, namespace){
        expired = expired+"";
        var type = expired.substr(-1,1);
        var time = parseInt(expired) || 0;
        if(type=="r"||type=="s"){
            if(etag){
                potato.localStorage.setItem(url, data, expired, etag, encryption, namespace);
            }
            if(type == "r"){
                potato.ramStorage.setItem(url, data, time, '', encryption, namespace);
            }else if(type == "s"){
                potato.sessionStorage.setItem(url, data, time, '', encryption, namespace);
            }
        }else{
            potato.localStorage.setItem(url, data, expired, etag, encryption, namespace);
        }
    };
    potato.updateCache = function(url, data, namespace){
        potato.ramStorage.updateItem(url, data, namespace);
        potato.sessionStorage.updateItem(url, data, namespace);
        potato.localStorage.updateItem(url, data, namespace);
    };
    potato.getCache = function(url, namespace){
        return potato.ramStorage.getItem(url, namespace) || potato.sessionStorage.getItem(url, namespace) || potato.localStorage.getItem(url, namespace);
    };
    potato.delCache = function(url, namespace){
        potato.ramStorage.removeItem(url, namespace);
        potato.sessionStorage.removeItem(url, namespace);
        potato.localStorage.removeItem(url, namespace);
    };
    potato.clearCache = function(namespace){
        potato.ramStorage.clear(namespace);
        potato.sessionStorage.clear(namespace);
        potato.localStorage.clear(namespace);
    };
    _pt.countLayoutSize = function(){
        var doc = document.documentElement;
        var body = document.body;
        /*var maxH = Math.max(document.body.parentNode.offsetHeight, document.body.offsetHeight, doc.clientHeight);
        var maxW = document.body.parentNode.offsetWidth;*/
        var layoutSize = {bodyHeight:body.offsetHeight, bodyWidth:body.offsetWidth, clientHeight:doc.clientHeight, clientWidth:doc.clientWidth, scrollLeft:doc.scrollLeft||window.pageXOffset, scrollTop:doc.scrollTop||window.pageYOffset, left:0, top:0};
        return layoutSize;
    };
    potato.countPageSize = _pt.countLayoutSize;
    _pt.initResizeDelay = function(){
        SetReadOnly(_pt,"initResizeDelay",null);
        var resizeTimer;
        bindEventListener(window,"resize",function(){
            if (!resizeTimer) {
                resizeTimer = window.setTimeout(function () {
                    resizeTimer = 0;
                    potato.dispatch(new potato.Event("resize", _pt.countLayoutSize()));
                },  potato.resizeDelay);
            }
        });
    };
    _pt.initHistory = function(){
        SetReadOnly(_pt,"initHistory",null);
        var curHash = window.location.hash;
        curHash = curHash?curHash:"#";
        var disableChange = 0;
        var cid = Date.now();
        var undoHash = "#undo@"+cid;
        var redoHash = "#redo@"+cid;
        var supportState = window.history.pushState?true:false;
        var ready = false;
        var evt = null;
        if(supportState){
            window.history.replaceState("","",undoHash);
            window.history.pushState("","",curHash);
            window.history.pushState("","",redoHash);
        }else{
            window.location.replace(undoHash);
            window.location.href = curHash;
            window.location.href = redoHash;
        }
        var dispatchEvent = function(e){
            window.setTimeout(function(){//避免在dispatch过程中再次引起hashchange事件
                potato.dispatch(new potato.Event(e));
                if(e=="historyReady"){
                    SetReadOnly(potato, "historyReady", true);
                }
            },0);
        };
        var handler = function(e){
            if(ready){
                ready = false;
                dispatchEvent("historyReady");
                return true;
            }
            if(disableChange){
                disableChange--;
                if(evt){
                    dispatchEvent(evt);
                    evt = null;
                }
                return true;
            }
            var hash = window.location.hash;
            hash = hash?hash:"#";
            if(hash == undoHash){
                disableChange++;
                window.history.go(1);
                evt = "historyUndo";
            }else if(hash == redoHash){
                disableChange++;
                window.history.go(-1);
                evt = "historyRedo";
            }else{
                potato.alert(potato.errors.a10);
                potato.setHash(redoHash.substr(1));
                disableChange++;
                window.history.go(-1);
            }
        }
        window.setTimeout(function(){
            bindEventListener(window, 'hashchange', handler);
            ready = true;
            window.history.go(-1);                    
        },0);
        SetReadOnly(potato, "setHash", function(hash){
            var curhash = window.location.hash;
            curhash = curhash?curhash:"#";
            if(curhash=="#"+hash){return true;}
            if(supportState){
                window.history.replaceState("","","#"+hash);
            }else{
                disableChange++;
                window.location.replace("#"+hash);
            }
        });
    };

    DefineReadOnly(_pt,"Cache","Storage","UncertainCache","initHistory","initResizeDelay","countLayoutSize");

    potato.ramStorage = new _pt.Cache();
    potato.sessionStorage = new _pt.Storage(window.sessionStorage);
    potato.localStorage = new _pt.Storage(window.localStorage);
    potato.application = {focus:function(){return true;},_blur:function(){return true;},close:function(){return true;},addLoadingItem:function(){},removeLoadingItem:function(){},setLoadingNote:function(){}};
    potato.dialogs = [potato.application];
    potato.lang = {};
    potato.errors = {"a10":"a10","a1":"a1","a8":"a8"};
    potato.loadData = null;
    potato.history = false;
    potato.historyReady = false;
    potato.resizeDelay = 0;
    potato.commonFailureCaller = function(error){potato.alert(error.format());}
    
    potato.cacheEncode = function(data){return data.toString();}
    potato.cacheDecode = function(data){return data;}
    potato.cacheEncrypt = function(str){return str;}
    potato.cacheDecrypt = function(str){return str;}
    potato.getCurDialog = function(){
        var list = potato.dialogs;
        return list[list.length-1];
    }
    potato.extendPrototype = function (A, B) {
        for(var key in B.prototype){
            A.prototype[key] = B.prototype[key];
        }
    };
    potato.embString = function(template, data, splitter) {
        if (!splitter) {
            splitter = { start: "{", end: "}" };
        }
        var re = new RegExp("\\" + splitter.start + "([^\\" + splitter.start + "\\" + splitter.end + "]*)\\" + splitter.end, "gm");
        if (re.test(template)) {
            template = template.replace(re, function (substring) {
                var args = [];
                for (var _i = 0; _i < (arguments.length - 1); _i++) {
                    args[_i] = arguments[_i + 1];
                }
                var value = data[arguments[1]];
                return (value !== undefined) ? value : substring;
            });
        }
        return template;
    };
    potato.parseXML = function(xmlString){
        xmlString = xmlString.trim();
        if(!xmlString){return null;}
        var xmlDoc=null;
        if(window.DOMParser){
            try{
                var domParser = new  DOMParser();
                xmlDoc = domParser.parseFromString(xmlString, 'text/xml');
            }catch(e){
                console.log(e);
            }
        }else{
            var arr = ['MSXML.2.DOMDocument.6.0','Microsoft.XMLDOM'];
            for(var i=0,k=arr.length; i<k; i++){
                try{
                    xmlDoc = new ActiveXObject(arr[i]);
                    xmlDoc.async = false;
                    xmlDoc.loadXML(xmlString);
                }catch(e){
                    
                }
            }
        }
        return xmlDoc;
    };
    potato.deepJsonClone = function(data){
        if(!data){return data;}
        var con = data.constructor;
        var i,k,obj;
        if(con==Array || con==Object){
            if(con == Array){
                obj = [];
                for(i=0,k=data.length; i<k; i++){
                    obj[i] = potato.deepJsonClone(data[i]);
                }
            }else if(con == Object){
                obj = {};
                for(i in data){
                    obj[i] = potato.deepJsonClone(data[i]);
                }
            }
            return obj;
        }else{
            return data;
        }
    };
    potato.sortNumericBy = function(name){
        return function(o, p){  
            var a, b;  
            a = o[name];  
            b = p[name];  
            if (a === b) { return 0; }
            return (a < b ? -1 : 1);
        };
    };
    potato.copy = function(obj) {
        var i, k, key, item, deep;
        if(typeof(obj)=="boolean"){
            deep = true;
            obj = arguments[1];
            i = 2;
        }else{
            i = 1;
        }
        for(i,k=arguments.length; i<k; i++){
            item = arguments[i];
            if(!item){
                continue;
            }
            for(key in obj){
                if(item[key] !== undefined){
                    if(deep){
                        var type = typeof(obj[key]);
                        if(type=="object" && obj[key]!=null){
                            potato.copy(true,obj[key],item[key]);
                        }else{
                            obj[key] = item[key]; 
                        }
                    }else{
                       obj[key] = item[key]; 
                    }
                }
            }
        }
        return obj;
    };
    potato.createClass = CreateClass;
    potato.getUniqueID = function () {
        _pt.__UID__++;
        return 'u'+_pt.__UID__;
    };
    //potato.defineReadOnly = DefineReadOnly;
    //potato.setReadOnly = SetReadOnly;
    potato._remoteRoute = function(url){return url;}
    potato._ajaxRoute = function(options){return options;}
    potato._ajaxRenderer = function(url, content){return content;}
    potato._remoteRenderer = function(url, data){return data;}
    potato.setConfig = function(options){
        var allow = {"application":1,"_remoteRoute":1,"_ajaxRoute":1,"loadData":1,"lang":1,"errors":1,"alert":1,"commonFailureCaller":1,"history":1,"resizeDelay":1,"_ajaxRenderer":1,"_remoteRenderer":1,"cacheEncode":1,"cacheEncrypt":1,"cacheDecode":1,"cacheDecrypt":1,"parseResult":1};
        var key,item;
        for(key in options){
            item = options[key];
            if(!allow[key]){continue;}
            if(key=="application"){
                potato.dialogs[0] =  item;
            }else if(key=="history" && item && _pt.initHistory){
                _pt.initHistory();
            }else if(key=="resizeDelay" && item && _pt.initResizeDelay){
                _pt.initResizeDelay();
            }
            SetReadOnly(potato,key,item);
        }
    };

    temp = [potato,"Dispatcher","Event","Error","Result","RequestOptions","Proxy","LoadingDelay","Widget","UModule","Cmd","Queue","ViewHistory","cacheDecrypt","Dialog","load","loadData","lang","errors","commonFailureCaller","history","historyReady","cacheEncode","cacheDecode","alert","setHash","setCache","updateCache","getCache","delCache","clearCache","ramStorage","sessionStorage","localStorage","cacheEncrypt","_remoteRoute","_ajaxRoute","application","dialogs","resizeDelay","setConfig","createClass","defineReadOnly","setReadOnly","extendPrototype","embString","parseXML","deepJsonClone","sortNumericBy","_ajaxRenderer","_remoteRenderer","parseResult","loadList","getCurDialog"];
    DefineReadOnly.apply(null,temp);
})();


(function () {
    var CreateClass = potato.createClass;
    var DefineReadOnly = potato.defineReadOnly;
    var SetReadOnly = potato.setReadOnly;
    var FormData = window.FormData;
    var newFun,newCls;

    function toParam(data) {
        if(typeof(data)=="object"){
            var str = [];
            for(var key in data){
                str.push(key+"="+encodeURI(data[key]));
            }
            return str.join("&");
        }else{
            return data;
        }
    }

    function onprogress (evt){
        var loaded = evt.loaded;  
        var tot = evt.total;  
        var per = (Math.floor(100*loaded/tot) || 10)+"%";
        potato.application.setLoadingNote(per);
    }

    function ajax(options, cache) {
        //decodeURIComponent(_$.param(get)));encodeURI(url)
        var XHR = new XMLHttpRequest();
        try{
            XHR.timeout = 30000;
        }catch(e){

        }
        var uri = options.url;
        options = potato._ajaxRoute(options);
        var method = options.method ? options.method.toLowerCase() : "get";
        var url = options.url;
        var header = options.header || {};
        var contentType = header.contentType;
        var send = options.send;
        if(method == "put"){ method = "post";}
        var args,i,callback,connection,request,returned;
        if (method == "get" && send) {
            args = toParam(send);
            url += ((url.indexOf("?") > -1) ? "&" : "?") + args;
            args = null;
        }
        potato.application.addLoadingItem(XHR);
        XHR.open(method, url, options.async);
        XHR.setRequestHeader("X-Requested-With", "Ajax");
        XHR.withCredentials = true;
        for(i in header){
            XHR.setRequestHeader(i, header[i]);
        }
        if(cache){
            XHR.setRequestHeader("If-None-Match", cache);
        }
        if (send && method=="post") {
            if(window.FormData && send instanceof window.FormData){
                args = send;
            }else{
                if(contentType===undefined){
                    contentType = "application/json";
                }
                if(contentType){
                    XHR.setRequestHeader("Content-Type", contentType);
                }
                if(contentType == "application/json"){
                    args = JSON.stringify(send);
                }else{
                    args = send;
                }
            }
        }
        if(XHR.upload){
            XHR.upload.onprogress = onprogress;
        }
        XHR.onreadystatechange = function () {
            if (this.readyState == 4){
                var response,complete,result,cachePlan,expires;
                potato.application.removeLoadingItem(this);
                response = {status:0,text:"",xml:"",cache:this.getResponseHeader("X-Cache"),uri:uri};
                try{
                    response.status = this.status;
                    response.text = this.responseText;
                    response.xml = this.responseXML;
                }catch(e){
                    console.log(e);
                    response.status = 0;
                    response.text = "";
                    response.xml = null;
                }
                if(this.aborted){response.status = -1;}
                if(response.status == 1223){response.status = 204;}

                if(response.status == -1){
                    callback(new potato.Error("c7"));
                }else if(response.status == 404){
                    callback(new potato.Error("c1"));
                }else if(response.status == 304 && cache){
                    cachePlan ={etag:this.getResponseHeader("Etag")||"", expires:""};
                    expires = this.getResponseHeader("Cache-Control");
                    if(expires){
                        expires = expires.split("=");
                        expires = parseInt(expires[1]);
                        cachePlan.expires = isNaN(expires)?"":expires;
                    }
                    callback({cache:cachePlan});
                }else if(!response.text){
                    callback(new potato.Error("d9"));
                }else{
                    result = potato._ajaxRenderer(uri, response.text);
                    result = potato.parseXML(result);
                    if(!result){
                        callback(new potato.Error("d9"));
                    }else{
                        complete = function(result){
                            if(result.error){
                                var eid = result.error.id;
                                if(eid.substring(0,1)=='a'){
                                    eid = 'c'+ eid.substring(1);
                                }else{
                                    eid = 'd'+ eid.substring(1);
                                }
                                result.error.id = eid;
                                callback(new potato.Error(result.error.id, {detail:result.data, note:result.error.note}));
                            }else{
                                if(response.cache){result.cache = response.cache;}
                                callback(result);
                            }
                        };
                        result = potato.parseResult(result.lastChild);
                        if(!result){
                            callback(new potato.Error("d9"));
                        }else if(result instanceof potato.Proxy){
                            result.addCompleteCaller(complete);
                            if(request){
                                request.setConnection(result);
                            }else{
                                connection = result;
                            }
                        }else{
                            complete(result);
                        }
                    }
                }
                XHR = null;
            }
        };
        callback = function(result){
            if(request){
                request.complete(result);
            }else{
                returned = result;
            }
        }
        connection = XHR;
        XHR.send(args);
        if(returned === undefined){
            request = new potato.Proxy(connection, options);
            return request;
        }else{
            return returned;
        }
    }

    potato.setConfig({
        loadData:function(options, cache) {
            return ajax(options, cache);
        }
    });

})();

"use strict";
(function () {
    var project = window.project = {

        autoCreateIModules: function () {
            var page = $("body[imodule]")[0]
            project._addInitLoading();
            if (page) {
                project.getIModule(page);
            }
            project._removeInitLoading();
            $("*[imodule]").each(function (index, element) {
                if (element.nodeName == "BODY") {
                    return true;
                }
                project._addInitLoading();
                project.getIModule(element);
                project._removeInitLoading();
            });
        },
        getIModule: function (obj, options, success, failure) {
            var imid, dom;
            if (typeof(obj) == "string") {
                imid = obj;
            } else {
                if (obj instanceof potato.UModule) {
                    dom = obj.dom;
                } else {
                    dom = obj;
                }
                dom.id = dom.id || "imodule_" + potato.getUniqueID();
                imid = dom.getAttribute("imid") || "imodule://" + dom.id;
            }
            var cache = potato.getCache(imid);
            if (cache instanceof potato.Proxy) {
                success && cache.addSuccessCaller(success);
                failure && cache.addFailureCaller(failure);
                return cache;
            } else if (cache instanceof potato.UModule) {
                obj = cache;
            }
            var ins = this._getIModule(obj, options, success, failure);
            if (ins instanceof potato.Proxy) {
                ins.addSuccessCaller(function (ins) {
                    potato.setCache(imid, ins, "r");
                });
            }
            potato.setCache(imid, ins, "r");
            return ins;
        },
        _getIModule: function (imid, options, success, failure) {
            options = options || {};
            var dom, ins, proxy, cls = options.con;
            if (imid instanceof potato.UModule) {
                return updateIModule(imid);
            } else if (typeof(imid) == "object") {
                dom = imid;
                dom.id = dom.id || "imodule_" + potato.getUniqueID();
                imid = dom.getAttribute("imid") || "imodule://" + dom.id;
            }
            dom = dom || $("div[imid='" + imid + "']")[0];
            if (!dom) {
                var htmlRequest = potato.load({url: imid});
                htmlRequest.addSuccessCaller(createIModule);
                if (!proxy) {
                    proxy = new potato.Proxy();
                }
                return proxy;
            } else {
                return createIModule();
            }

            function createIModule(html) {
                if (html) {
                    dom = $(html).appendTo(project._hideDiv).get(0);
                }
                if (!cls) {
                    if (dom.hasAttribute("imodule")) {
                        var conName = dom.getAttribute("imodule") || "imodules/" + dom.id;
                    } else {
                        cls = project.baseIModules.BaseIModule;
                    }
                }
                try {
                    var con = cls || require(conName);
                } catch (e) {
                    setTimeout(function () {
                        project._addInitLoading();
                        require([conName], function (con) {
                            initIModule(con);
                            project._removeInitLoading();
                        }, function (error) {
                            initIModule(project.baseIModules.BaseIModule);
                            project._removeInitLoading();
                            //endResult(new potato.Error("b3"));
                        });
                    }, 10);

                }
                if (!con) {
                    if (!proxy) {
                        proxy = new potato.Proxy();
                    }
                    return proxy;
                } else {
                    return initIModule(con);
                }
            };
            function initIModule(con) {
                var ins = new con(dom, null, options);
                dom.setAttribute("imid", imid);
                return updateIModule(ins);
            };
            function updateIModule(imodule) {
                ins = imodule;
                var result = imodule._update(options);
                if (result instanceof potato.Proxy) {
                    result.addCompleteCaller(endResult);
                    if (!proxy) {
                        proxy = new potato.Proxy();
                    }
                    return proxy;
                } else {
                    return endResult(result);
                }
            };
            function endResult(result) {
                if (result instanceof window.Error) {
                    potato.commonFailureCaller(result);
                    failure && failure(result);
                    if (proxy) {
                        proxy.failure(result);
                    } else {
                        return result;
                    }
                } else {
                    success && success(ins);
                    if (proxy) {
                        proxy.success(ins);
                    } else {
                        return ins;
                    }
                }

            }
        },
        tip: function (title, icon, text, timer) {
            var html, img, args, dom;
            //如果参数是对象
            if (typeof(title) == "object") {
                args = title;
                title = args.title;
                text = args.text;
                timer = args.timer;
                img = args.img || '/images/ui/no_upload.png';
            }
            if (typeof (text) == "string") {
                if (img) {

                    //拼接字符串
                    html = '<div class="-immy-tip-img text-left">' +
                        '<img src="' + img + '" alt="屏幕图片">' +
                        '<div class="-immy-tip-info">' +
                        '<h1 class="-immy-tip-title">' + title +
                        '</h1>' +
                        '<p class="-immy-tip-note">' + text +
                        '</p></div></div>'

                } else {
                    var p = '';
                    var i = 'hide';
                    //如果有text
                    if (text) {
                        p = '<p class="-immy-tip-note">' + text + '</p>'
                    }
                    //如果有图标就显示
                    if (icon) {
                        i = icon;
                    }
                    //拼接字符串
                    html = '<div class="-immy-tip"><h1 class="-immy-tip-title">' +
                        '<i class="' + i + '"></i>' +
                        '<span>' + title + '</span></h1>' +
                        p + '</div>';

                }
                dom = $(html).appendTo(project._hideDiv);
            } else {
                dom = text;
            }

            //自动消失
            if (timer) {
                setTimeout(function () {
                    tip.close();
                }, 2000)
            }

            var tip = project.open(dom[0], "_blank", "slideUp");
        },

        embedCss: function (cssText) {
            if (document.createStyleSheet) {//兼容ie8
                var c = document.createElement("p");
                c.innerHTML = "x<style>" + cssText + "</style>";
                var cssStyle = c.lastChild;
            } else {
                var cssStyle = document.createElement('style');
                cssStyle.type = 'text/css';
                cssStyle.innerHTML = cssText;
            }
            try {
                var head = document.getElementsByTagName('head')[0];
                document.getElementsByTagName('head')[0].appendChild(cssStyle);
            } catch (e) {
                console.log(e);
            }

        },
        _addInitLoading: function () {
            this._globalLoading.add();
            if (this._initLoading === null) {
                this._initLoading = 1;
                this._globalLoading.add();
                setTimeout(function () {
                    project._removeInitLoading();
                }, 0);
            }
            this._initLoading++;
        },
        _removeInitLoading: function () {
            this._globalLoading.remove();
            this._initLoading--;
            if (this._initLoading == 0) {
                document.documentElement.className = "";
            }
        },
        isLogin: function () {
            return cookie_utils.is_loggedin();
        },
        /*open : function(data){//module,options,updateIModule,open,target
         var dialog;
         if(data.target=='cur'){
         dialog = potato.getCurDialog();
         }else if(data.target=='new'){
         var list = project.loaderDialogRecycle;
         for(var i=0,k=list.length; i<k; i++){
         if(list[i].dialogState == "closed"){
         break;
         }
         }
         if(i==k){
         var div = document.createElement("div");
         dialog = project.createIModule($(div), project.umods.Base_LoaderDialog);
         list.push(dialog);
         }else{
         dialog = list[i];
         }
         }else{
         dialog = potato.application;
         }
         dialog.loadUri(data);
         return dialog;
         },*/
        findData: function (view) {
            var data;
            var script = view.find("script[data-name='data']");
            if (script.length) {
                data = potato.parseXML(script[0].text);
                data = potato.parseResult(data.lastChild);
            }
            return data;
        },
        getCurCity: function () {
            return $.when(
                $.ajax({
                    crossDomain: true,
                    url: 'https://restapi.amap.com/v3/ip?key=' + '1c6b7d0e376ddb2744867aae0aed627c'
                })/*,
                 $.ajax({
                 crossDomain:true,
                 url: 'http://api.map.baidu.com/location/ip?ak=' + 'x6GD4iE5RqXCEO0lTbZpvyfjYHkg6Dpm'
                 })*/
            ).done(function (amap, baidu) {
                console.log(amap.city);
            });


            // .then(function (result) {
            //     if (result.status) {
            //         return $.ajax({
            //             'url': 'http://restapi.amap.com/v3/config/district?key=' + key + '&keywords=' + result.adcode + '&subdistrict=0&extensions=base',
            //         })
            //     } else {
            //         return $.ajax({
            //             url: 'http://restapi.amap.com/v3/geocode/regeo?key=1c6b7d0e376ddb2744867aae0aed627c&location=116.481488,39.990464&extensions=base',
            //         });
            //     }
            // })
            // function reject(reason) {//构造处在错误状态的promise对象
            //     var dfr = $.Deferred();
            //     dfr.reject(reason);
            //     return dfr.promise();
            // }
        },
        // getCurCity: function () {
        //     var key = ;
        //     return $.ajax({url: 'http://api.map.baidu.com/location/ip?ak=' + key})
        // },
        path: null,
        baseIWidgets: null,
        baseIModules: null,
        _dialogRecycle: [],
        _activeTarget: null,
        _hideDiv: $('<div class="-immy-hide"></div>').appendTo(document.body),
        _initLoading: null,
        _globalLoading: new potato.LoadingDelay(500),
        open: null
    };

    potato.setConfig({
        "application": {
            focus: function () {
                return true;
            }, _blur: function () {
                return true;
            }, close: function () {
                return true;
            }, addLoadingItem: function () {
                project._addInitLoading();
            }, removeLoadingItem: function () {
                project._removeInitLoading();
            }, setLoadingNote: function () {
            }
        }
    });

    $(document).ready(function () {
        project.autoCreateIModules();
    });
})();

"use strict";
(function($){
    var tempTextarea = document.createElement("textarea");
    var staticMethods = {
        supports: (function(){
            var list = {};
            list.supportsTouch = false;
            return list;
        })(),
        addClass: function (dom, cls) {
            if(!cls){return dom;}
            var rclass = /\s+/g;
            var c = dom.className.replace(rclass, " ");
            if ((" " + c + " ").indexOf(" " + cls + " ") < 0) {
                dom.className = c + (c == "" ? "" : " ") + cls;
            }
            return dom;
        },
        removeClass: function (dom, cls) {
            if(!cls){return dom;}
            var dclass = new RegExp(cls, "g");
            var rclass = /\s+/g;
            var s = /^\s*|\s*$/g;
            dom.className = dom.className.replace(dclass, " ").replace(rclass, " ").replace(s, "");
            return dom;
        },
        hasClass: function (dom, cls) {
            var rclass = /\s+/g;
            var c = dom.className.replace(rclass, " ");
            if ((" " + c + " ").indexOf(" " + cls + " ") >= 0) {
                return true;
            }
            return false;
        },
        /*replaceFirstChild: function (parent, child) {
            var away = parent.children[0];
            if(!away){
                parent.appendChild(child);
            }else if(away != child){
                parent.removeChild(away);
                parent.appendChild(child);
            }
            return away;
        },
        nextSibling: function (dom) {
            var node = dom.nextSibling;
            return node.nodeType==1?node:node.nextSibling;
        },*/
        base64Encode: function(str){
            if(window.btoa){
                return window.btoa(unescape(encodeURIComponent(str)));
            }else{
                var enc = CryptoJS.enc;
                return enc.Base64.stringify(enc.Utf8.parse(str));
            }
        },
        base64Decode: function(str){
            if(window.atob){
                return decodeURIComponent(escape(window.atob(str)));
            }else{
                var enc = CryptoJS.enc;
                return enc.Base64.parse(str).toString(enc.Utf8);
            }
        },
        md5 : function(str){
            return CryptoJS.MD5(str).toString();
        },
        setUrl : function(url, args){
            var pattern = /^([^?#]+)\??([^#]+)?#?(.*)/;
            var arr = pattern.exec(url);
            var key;
            arr.shift();
            var parames = {};
            if(arr[1]){
                var pattern = /([^&]+)=([^&]*)/ig;
                arr[1].replace(pattern, function(a, b, c){
                    parames[b] = c;
                });
            }
            for(key in args){
                parames[key] = encodeURIComponent(args[key]);
            }
            var list = [];
            for(key in parames){
                list.push(key+"="+parames[key]);
            }
            arr[1] = list.join("&");
            return arr[0]+(arr[1]?"?"+arr[1]:"")+(arr[2]?"#"+arr[2]:"");
        },
        parseUrl : function(url){
            var arr;
            var fields = {  
                'Username' : 4,   
                'Password' : 5,   
                'Port' : 7,   
                'Protocol' : 2,   
                'Host' : 6,   
                'Pathname' : 8,   
                'URL' : 0,   
                'Querystring' : 9,   
                'Fragment' : 10  
            };
            var pattern = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(.*)/;
            var arr = pattern.exec(url);
            var result = {};
            for(var key in fields){
                result[key] = arr[fields[key]];
            }
            if(result.Querystring){
                var obj = {};
                result.Querystring.split("&").forEach(function (o) {
                    var arr = o.split("=");
                    obj[arr[0]] = decodeURI(arr[1]);
                });
                result.Query = obj;
            }
            return result; 
        },
        render: function (tpl, data) {
            if (typeof (tpl) != "string") {
                tpl = tpl.text;
            }
            var render = template.compile(tpl);
            return render(data);
        },
        fillSelect : function(select, data){
            var html = [];
            for(var i=0,k=data.length; i<k; i++){
                html.push("<option value='"+data[i].value+"'>"+data[i].text+"</option>");
            }
            select.innerHTML = html.join("");
        },
        getText : function(select){
            var option = select.options[select.selectedIndex];
            return option.text;
        },
        /*proxyDom: function (dom) {
            var name = dom.getAttribute('proxy');
            if(name){
                if(name == "parent"){
                    dom = dom.parentNode;
                }else{
                    dom = $(dom).closest(name).get(0);
                }
            }
            return dom;
        },*/
        searchArray: function(arr,key,value){
            if(!arr || !key){return -1;}
            for(var i=0,k=arr.length; i<k; i++){
                if(arr[i][key] == value){
                    return i;
                }
            }
            return -1;
        },
        /*copyEach: function(obj,list){
            var arr = [];
            for(var i=0,k=list.length; i<k; i++){
                arr[i] = $.extend(true,{},obj);
                window.copy(true, arr[i], list[i]);
            }
            return arr;
        },
        equalData: function(data, odata){
            var type = typeof(data);
            var i,k;
            if(data===odata){return true;}
            if(type!="object" || data==null || odata==null){return false;}
            if(data.constructor == Array){
                if(data.length != odata.length){return false;}
                for(i=0,k=data.length; i<k; i++){
                    if(!$.equalData(data[i], odata[i])){
                        return false;
                    }
                }
            }else{
                for(i in data){
                    if(!$.equalData(data[i], odata[i])){
                        return false;
                    }
                }
            }
            return true;
        },*/
        uniqueObjects: function(arr) {
            var sid = "__$__" + new Date().getTime();
            var list = [];
            var item;
            for (var i = 0, k = arr.length; i < k; i++) {
                item = arr[i];
                if (!item.hasOwnProperty(sid)) {
                    item[sid] = 1;
                    list.push(item);
                }
            }
            for (var i = 0, k = arr.length; i < k; i++) {
                item = arr[i];
                delete item[sid];
            }
            return list;
        },
        decodeEntities : function(str){
            tempTextarea.innerHTML = str;
            return tempTextarea.textContent.replace(/<br \/>/g,"\r");
        },
        fillForm: function(form, data){
            for(var name in data){
                var item = form[name];
                var value = data[name];
                if(item){
                    switch(item.nodeName){
                        case 'TEXTAREA':
                        case 'INPUT':
                            if(item.getAttribute("genre")){
                                var ins = $(item).data("ins");
                                ins.setValue(value);
                            }else if(item.type=="text"){
                                item.value = $.decodeEntities(value);
                            }else{
                                item.value = value;
                            }
                        break;
                        case "SELECT":
                        item.value = value;
                        break;
                    }
                }
            }
        },
        serializeForm: function (form, format) {
          var i,j,q=[],n,f;
          for(i=form.elements.length-1; i>=0; i--){
            f = form.elements[i];
            n = f.name;
            if(n==""){continue;}
            switch(f.nodeName){
              case 'INPUT':
                switch(f.type){
                  case 'text':
                  case 'hidden':
                  case 'number':
                  case 'password':
                    q.push({"name":n,"value":f.value});
                    break;
                  case 'checkbox':
                  case 'radio':
                    if(f.checked){
                      q.push({"name":n,"value":f.value});
                    }           
                    break;
                }
                break;
              case 'TEXTAREA':
                q.push({"name":n,"value":f.value});
                break;
              case 'SELECT':
                switch (f.type){
                  case 'select-one':
                    q.push({"name":n,"value":f.value});
                    break;
                  case 'select-multiple':
                    for(j=f.options.length-1; j>=0; j--) {
                      if(f.options[j].selected) {
                        q.push({"name":n,"value":f.options[j].value});
                      }
                    }
                    break;
                }
                break;
            }
          }
          if(format=="string"){
            return q;
          }else if(format=="array"){
            return q;
          }else{
            var obj = {};
            for(i=q.length-1; i>=0; i--){
              var key = q[i].name;
              var value = q[i].value;
              if(obj.hasOwnProperty(key)){
                if(typeof obj[key] == "object"){
                  obj[key].push(value);
                }else{
                  obj[key] = [obj[key],value];
                }
              }else{
                obj[key] = value;
              }
            }
            return obj;
          }
        },
        /*getInputValue : function (els){
            if(els.nodeName){els=[els];}
            for(var i=0,k=els.length; i<k; i++){
                if(els[i].checked){
                    return els[i].value;
                }
            }
        },
        getInputSelected : function (els){
            if(els.nodeName){els=[els];}
            for(var i=0,k=els.length; i<k; i++){
                if(els[i].checked){
                    return els[i];
                }
            }
        },
        getSelectValue : function (select){
            var vals = [];
            if(select.type == 'select-one'){
                vals.push(select.value);
            }else{
                var options = select.options;
                for(var i=0,k=options.length; i>k; i++){
                    if(options[i].selected) {
                        vals.push(options[i].value);
                    }
                }
            }
            return vals;
        }*/
    };
    staticMethods.mevent = {
        "click": "click",
        "mousedown": staticMethods.supports.supportsTouch ? "touchstart" : "mousedown",
        "mouseup": staticMethods.supports.supportsTouch ? "touchend" : "mouseup",
        "mousemove": staticMethods.supports.supportsTouch ? "touchmove" : "mousemove"
    };
    for(var p in staticMethods){
        if($.hasOwnProperty(p)){
            $[p] = staticMethods[p];
            console.log(p + " is override!")
        }else{
            $[p] = staticMethods[p];
        }
    }

    var jdomMethods = {
        groupBy: function (attr) {
            var dlist = {}, key, i, k, o;
            attr = attr || "dom";
            for (i = 0, k = this.length; i < k; i++) {
                o = this[i];
                key = o.getAttribute(attr);
                if (key) {
                    if (dlist[key]) {
                        dlist[key].push(o);
                    } else {
                        dlist[key] = [o];
                    }
                }
            }
            return dlist;
        }
    };
    for(var p in jdomMethods){
        if($.fn.hasOwnProperty(p)){
            console.log(p + " is override!")
        }else{
            $.fn[p] = jdomMethods[p];
        }
    }
})($)

"use strict";
(function () {

    var BaseIWidget = (function(){
        function CON(dom, parent){
            potato.Widget.call(this, dom, parent);
            this._$dom = $(dom);
            this._els = {};
            this._watchEvent();
            this._els = this._getElements();
        }
        var CID = potato.createClass(CON, potato.Widget);

        CON.prototype.find = function (expr, obj, ele) {
            return this._$dom.find(expr, obj, ele);
        };
        CON.prototype._getElements = function () {
            return $(this.dom).find("[idom]").groupBy("idom");
        };
        CON.prototype._watchEvent = function (actions, dom) {
            actions = actions || this;
            var that = this;
            var callAction = function (action, type, target, hit) {
                //console.log(type,target,hit);
                var arr = action.split("@");
                var action = arr[0];
                var data = arr[1];
                var fun, s, e;
                fun = actions["_ievent_" + action];
                if (fun) {
                    if (data) {
                        s = data.substr(0, 1);
                        e = data.substr(data.length - 1, 1);
                        if ((s == "{" && e == "}") || (s == "[" && e == "]")) {
                            data = JSON.parse(data);
                        }
                    }
                    //project.addActive(target);
                    return fun.call(that, data, target, hit);
                } else {
                    return true;
                }
            };
            var handler = function (e) {
                var type = e.type;
                var hit = e.target;
                var target = e.target;
                var nodeName = target.nodeName;
                var propagation = true;
                var i, k;
                if (type == "focusin" && nodeName != "INPUT" && nodeName != "TEXTARE") {
                    return true;
                }
                if (type == "click" && (nodeName == "FORM" || nodeName == "SELECT" || nodeName == "OPTION" || nodeName == "TEXTARE" || nodeName == "INPUT" || (nodeName == "LABEL" && target.htmlFor))) {
                    return true;
                }
                if (type == "change" && (nodeName == "FORM" || nodeName == "TEXTARE" || nodeName == "INPUT")) {
                    return true;
                }
                var root = this;
                while (target && target != root) {
                    var action = target.getAttribute("ievent");
                    if (action) {
                        var arr = action.split("|");
                        for (i = 0, k = arr.length; i < k; i++) {
                            propagation = (callAction(arr[i], type, target, hit) === true ? true : false) && propagation;
                        }
                        return propagation;
                    }
                    target = target.parentNode;
                    if (target.nodeName == "FORM") {
                        return true;
                    }
                }
                return true;
            };
            $(dom || this.dom).on("click focusin submit change", handler);
        };
        return CON;
    })();

    var IWidgetLoader = (function(){
        function CON(dom, parent){
            potato.Widget.call(this, dom, parent);
            $.addClass(dom,"-immy-loader");
            dom.innerHTML = '<div idom="panel" class="-immy-loader-panel -immy-loader-in">'+
                '<div idom="page" class="-immy-loader-page -immy-loader-cur"></div>'+
                '<div idom="page" class="-immy-loader-page -immy-loader-old"></div>'+
                '</div>';
            var els = $(dom).find("[idom]").groupBy("idom");
            this[CID] = {
                _page : els['page'],
                _panel : els['panel'][0]
            };
            this.widget = null;
            els = null;
        }
        var CID = potato.createClass(CON, potato.Widget);
        CON.prototype.load = function(widget, forward){
            var _this = this[CID];
            var pos,page,dom,div,scroller;
            if(this.widget){
                if(this.widget == widget){
                    this.reload();
                    return true;
                }
                dom = this.widget.dom;
                page = dom.parentNode;
                scroller = page;
                pos = scroller.scrollLeft+","+scroller.scrollTop;
                dom.setAttribute("data-pos",pos);
                this.widget._uninstall();
                if(!dom.parentNode){
                    page.appendChild(dom);//uninstall有可能调用remove消毁
                }
            }else{
                page = _this._page[0];
            }
            page.className = "-immy-loader-page -immy-loader-old";
            this.widget = widget;
            dom = this.widget.dom;
            pos = (dom.getAttribute("data-pos") || "0,0").split(",");
            page = _this._page[0]==page?_this._page[1]:_this._page[0];
            if(page.firstChild){page.removeChild(page.firstChild);}
            page.appendChild(dom);
            this.widget._install(this.parent);
            page.className = "-immy-loader-page -immy-loader-cur";
            div = _this._panel;
            if(forward){
                div.className = "-immy-loader-panel -immy-loader-out -immy-loader-transform";
            }else{
                div.className = "-immy-loader-panel -immy-loader-in -immy-loader-transform";
            }
            div.offsetHeight;
            $.removeClass(div, "-immy-loader-transform");
            scroller = page;
            scroller.scrollLeft = pos[0];
            scroller.scrollTop = pos[1];
        };
        CON.prototype.reload = function(){
            var _this = this[CID];
            var div = _this._panel;
            $.addClass(div, "-immy-loader-reload");
            div.offsetHeight;
            $.removeClass(div, "-immy-loader-reload");
        };
        /*CON.prototype.empty = function () {


            this.widget = null;
            var _this = this[CID];
            var pos,page,dom,div,scroller;
            if(this.widget){
                dom = this.widget.dom;
                page = dom.parentNode;
                scroller = page;
                pos = scroller.scrollLeft+","+scroller.scrollTop;
                dom.setAttribute("data-pos",pos);
                this.widget._uninstall();
                if(!dom.parentNode){
                    page.appendChild(dom);//uninstall有可能调用remove消毁
                }
            }else{
                page = _this._page[0];
            }
            page.className = "-immy-loader-page -immy-loader-old";
            this.widget = widget;
            dom = this.widget.dom;
            pos = (dom.getAttribute("data-pos") || "0,0").split(",");
            page = _this._page[0]==page?_this._page[1]:_this._page[0];
            if(page.firstChild){page.removeChild(page.firstChild);}
            page.appendChild(dom);
            this.widget._install(this.parent);
            page.className = "-immy-loader-page -immy-loader-cur";
            div = _this._panel;
            if(forward){
                div.className = "-immy-loader-panel -immy-loader-out -immy-loader-transform";
            }else{
                div.className = "-immy-loader-panel -immy-loader-in -immy-loader-transform";
            }
            div.offsetHeight;
            $.removeClass(div, "-immy-loader-transform");
            scroller = page;
            scroller.scrollLeft = pos[0];
            scroller.scrollTop = pos[1];
        };*/
        return CON;
    })();

    project.baseIWidgets = {
        IWidgetLoader: IWidgetLoader,
        BaseIWidget: BaseIWidget
    };

})();
"use strict";
(function () {

    var baseIWidgets = project.baseIWidgets;

    var BaseIModule = (function () {
        var CON = function (dom, parent, options) {
            options = options || {};
            potato.UModule.call(this, dom, parent, options);
            this._$dom = $(dom);
            this._els = {};
            if (!options.container) {
                this._watchEvent();
                this._els = this._getElements();
            }
        };
        var CID = potato.createClass(CON, potato.UModule);

        CON.prototype._update = function () {

        };
        CON.prototype.find = function (expr, obj, ele) {
            return this._$dom.find(expr, obj, ele);
        };
        CON.prototype._getTpl = function () {
            if (this._tpls) {
                var map = {};
                var html;
                for (var k in this._tpls) {
                    html = this._tpls[k].toString();
                    html = html.substring(html.indexOf("/*") + 2, html.lastIndexOf("*/"));
                    map[k] = html.trim();
                }
            }
            return map;
        };
        CON.prototype._getElements = function () {
            return $(this.dom).find("[idom]").groupBy("idom");
        };
        CON.prototype._watchEvent = function (actions, dom) {
            actions = actions || this;
            var that = this;
            var callAction = function (action, type, target, hit) {
                //console.log(type,target,hit);
                var arr = action.split("@");
                var action = arr[0];
                var data = arr[1];
                var fun, s, e;
                fun = actions["_ievent_" + action];
                if (fun) {
                    if (data) {
                        s = data.substr(0, 1);
                        e = data.substr(data.length - 1, 1);
                        if ((s == "{" && e == "}") || (s == "[" && e == "]")) {
                            data = JSON.parse(data);
                        }
                    }
                    //project.addActive(target);
                    return fun.call(that, data, target, hit);
                } else {
                    return true;
                }
            };
            var handler = function (e) {
                var type = e.type;
                var hit = e.target;
                var target = e.target;
                var nodeName = target.nodeName;
                var propagation = true;
                var i, k;
                if (type == "focusin" && nodeName != "INPUT" && nodeName != "TEXTARE") {
                    return true;
                }
                if (type == "click" && (nodeName == "FORM" || nodeName == "SELECT" || nodeName == "OPTION" || nodeName == "TEXTARE" || nodeName == "INPUT" || (nodeName == "LABEL" && target.htmlFor))) {
                    return true;
                }
                if (type == "change" && (nodeName == "FORM" || nodeName == "TEXTARE" || nodeName == "INPUT")) {
                    return true;
                }
                var root = this;
                while (target && target != root) {
                    var action = target.getAttribute("ievent");
                    if (action && (!target.hasAttribute("disabled") || target.getAttribute("disabled")=='false')) {
                        var arr = action.split("|");
                        for (i = 0, k = arr.length; i < k; i++) {
                            propagation = (callAction(arr[i], type, target, hit) === false ? false : true) && propagation;
                        }
                        return propagation;
                    }
                    target = target.parentNode;
                    if (target.nodeName == "FORM") {
                        return true;
                    }
                }
                return true;
            };
            $(dom || this.dom).on("click focusin submit change", handler);
        };
        /*CON.prototype._ievent_layer = function(options){
         var imodule = project.getIModule(options.umid);
         var target = options.target || "_blank";
         switch(target){
         case "_blank":
         break;
         case "_self":
         var dialog = potato.getCurDialog();
         dialog.setData(imodule, options);
         break;
         }
         return false;
         };*/
        CON.prototype._ievent_open = function (options) {
            if (options.url.indexOf("idom://") == 0) {
                var id = options.url.substr(7);
                options.url = this._els[id][0];
            }
            project.open(options.url, options.target, options.dialog, options.data);
            return false;
        };

        CON.prototype._ievent_qqTalk = function (arr) {
            window.open("http://wpa.qq.com/msgrd?v=3&uin=4009929033&site=qq&menu=yes");
        };
        CON.prototype._ievent_track = function (arr) {
            var methon = arr[0];
            var args = arr[1];
            var track = project.getIModule('imodule://Track');
            track[methon](args);
        };
        return CON;
    })();

    var BaseIPage = (function () {
        var CON = function (dom, options) {
            options = options || {container: true};
            BaseIModule.call(this, dom, null, options);
            potato.Dialog.call(this, dom, null, null, "focused");
            this._createSubModule();
            this._globalLoadingMask = $('<div class="-immy-loading-mask"><div class="icon"><img width="40px" height="40px" src="/global/images/loading.gif" /></div></div>').appendTo(document.body);
            potato.setConfig({
                "application": this
            });
            var that = this;
            project._globalLoading.addListener("change",function (e) {
                if(e.data>0){
                    that._globalLoadingMask.removeClass('busy').show();
                }
            });
            project._globalLoading.addListener("busy",function () {
                that._globalLoadingMask.addClass('busy').show();
            });
            project._globalLoading.addListener("free",function () {
                that._globalLoadingMask.hide();
            });
        };
        var CID = potato.createClass(CON, BaseIModule);
        potato.extendPrototype(CON, potato.Dialog);


        CON.prototype._createSubModule = function () {
        };

        CON.prototype.addLoadingItem = function (btn) {
            if(btn && btn.addClass){
                btn.addClass('btn-loading');
            }
            project._addInitLoading();
        };
        CON.prototype.removeLoadingItem = function (btn) {
            if(btn && btn.removeClass){
                btn.removeClass('btn-loading');
            }
            project._removeInitLoading();
        };
        CON.prototype.setLoadingNote = function () {

        };
        return CON;
    })();

    var BaseDialog = (function () {
        function CON(dom, opts) {
            var options = potato.copy({
                container: true,
                fixed: true,
                offset: null,
                pos: "clientCenterCenter",
                mask: true,
                size: "content",
                title: "",
                controls: ["close"],
                closeAble: true,
                tools: [],
                buttons: [],
                history: [3, 4],
                className: ''
            }, opts);
            BaseIModule.call(this, dom, null, options);
            potato.Dialog.call(this, document.createElement("div"), document.createElement("div"), "", "closed", PT._createHistory.call(this, options.history), new baseIWidgets.IWidgetLoader(dom, this));
            $.addClass(this.body, "-immy-dialog-window " + this.options.className);
            $.addClass(this.mask, "-immy-dialog-mask " + this.options.className);
            this.mask.innerHTML = '<span class="tool-close icon-cross"></span>';

            var lang = potato.lang;
            var str = '<div class="-immy-dialog-header" idom="header">';
            str += '<div class="controls" idom="controls">' +
                '<a class="tool-refresh button" ievent="dialog@refresh" title="refresh"></a>' +
                '<a class="tool-redo button" ievent="dialog@redo" title="redo"></a>' +
                '<a class="tool-close button" idom="close" ievent="dialog@close" title="close"><span class="icon-cross"></span></a>' +
                '</div><div class="tools" idom="tools">' +
                '<a class="tool-undo button" idom="undo" ievent="dialog@undo" title="undo"></a>' +
                '<a class="tool-config button" idom="config" ievent="dialog@config"></a>' +
                '<a class="tool-option button" idom="option" ievent="dialog@option"></a>' +
                '<a class="tool-edit button" idom="edit" ievent="dialog@edit"></a>' +
                '<a class="tool-add button" idom="add" ievent="dialog@add"></a>' +
                '<a class="tool-complete button" idom="complete" ievent="dialog@complete"></a>' +
                '<a class="tool-delete button" idom="deleteItem" ievent="dialog@deleteItem"></a></div>' +
                '<h3 class="subject" idom="title">Dialog</h3></div><div class="-immy-dialog-content" idom="content"></div>';
            this.body.innerHTML = str;
            var els = $(this.body).find("[idom]").groupBy("idom");
            this.header = els["header"][0];
            this.content = els["content"][0];
            this.content.appendChild(dom);
            this.title = els["title"][0];
            this.tools = els['tools'][0];
            this.controls = els['controls'][0];
            this.buttons = {
                "close": els["close"][0],
                "undo": els["undo"][0],
                "config": els["config"][0],
                "option": els["option"][0],
                "edit": els["edit"][0],
                "add": els["add"][0],
                "deleteItem": els["deleteItem"][0],
                "complete": els["complete"][0]
            };
            PT._setFixed.call(this);
            PT._setTitle.call(this);
            PT._setControls.call(this);
            PT._setTools.call(this);
            PT._setMask.call(this);
            var that = this;
            $(this.mask).on("click", function (e) {
                that.close();
                return false;
            });
            this._tempData = null;
            this._watchEvent(PT, this.header);
            els = null;
        }

        var CID = potato.createClass(CON, BaseIModule);
        potato.extendPrototype(CON, potato.Dialog);

        var PT = {
            _refreshSizeByFixed: function (rect) {
                var max = PT._setWindowSzie.call(this, rect);
                var pos = this.options.pos;
                switch (pos) {
                    case "leftTop" :
                        PT._setWindowPos.call(this, rect.left, rect.top, max[0], max[1]);
                        break;
                    case "leftTop2" :
                        PT._setWindowPos.call(this, rect.left + rect.scrollLeft, rect.top + rect.scrollTop, max[0], max[1]);
                        break;
                    case "rightBottom":
                        this.posRightBottom();
                        break;
                    case "clientCenterCenter":
                        var top = (rect.clientHeight - this.body.offsetHeight) / 2;
                        var left = (rect.clientWidth - this.body.offsetWidth) / 2;
                        PT._setWindowPos.call(this, left, top, max[0], max[1]);
                        break;
                    case "clientCenterBottom":
                        var bottom = 0;
                        var left = (rect.clientWidth - this.body.offsetWidth) / 2;
                        PT._setWindowPos.call(this, left, null, max[0], max[1], null, bottom);
                        break;
                    default :
                        pos = pos.offset();
                        PT._setWindowPos.call(this, pos.left, pos.top, max[0], max[1]);
                }
            },
            _refreshSizeByScroll: function (rect) {
                this.body.style.position = "absolute";
                var max = PT._setWindowSzie.call(this, rect);
                var pos = this.options.pos;
                switch (pos) {
                    case "leftTop" :
                        PT._setWindowPos.call(this, rect.left, rect.top, max[0], max[1]);
                        break;
                    case "leftTop2" :
                        PT._setWindowPos.call(this, rect.left + rect.scrollLeft, rect.top + rect.scrollTop, max[0], max[1]);
                        break;
                    case "rightBottom":
                        this.posRightBottom();
                        break;
                    case "clientCenterCenter":
                        var top = (rect.clientHeight - this.body.offsetHeight) / 2;
                        var left = (rect.clientWidth - this.body.offsetWidth) / 2;
                        PT._setWindowPos.call(this, left, top, max[0], max[1]);
                        break;
                    case "bodyCenter":
                        var top = (rect.clientHeight - this.body.offsetHeight) / 2 + rect.scrollTop;
                        var left = (rect.clientWidth - this.body.offsetWidth) / 2 + rect.scrollLeft;
                        PT._setWindowPos.call(this, left, top, max[0], max[1]);
                        break;
                    case "centerTop":
                        var left = rect.left + (rect.clientWidth - this.body.offsetWidth) / 2;
                        PT._setWindowPos.call(this, left, rect.top, max[0], max[1]);
                        break;
                    default :
                        var offset = $(pos).offset();
                        PT._setWindowPos.call(this, offset.left, offset.top + pos.offsetHeight, max[0], max[1]);
                }
            },
            _createHistory: function (history) {
                var cmd = new potato.Cmd();
                var that = this;
                cmd._undo = function () {
                    that.close();
                };
                return new potato.ViewHistory(history[0], history[1], cmd, function () {
                });
            },
            _ievent_dialog: function (data, target) {
                var mod = this.loader.widget || {};
                if (mod[data]) {
                    mod[data]();
                } else {
                    this[data]();
                }
                return false;
            },
            _setWindowSzie: function (rect) {
                var headerHeight = this.header.offsetHeight;
                var maxLeft, maxTop, size = this.options.size;
                var dom = this.loader.widget.dom;
                var panel = dom.parentNode;
                if(size == "content" || size[0] == "content" || size[1] == "content"){
                    dom.style.position = "absolute";
                    project._hideDiv.appendChild(dom);
                    var offsetWidth = dom.offsetWidth;
                    var offsetHeight = dom.offsetHeight;
                    panel.appendChild(dom);
                }
                if (size == "content") {
                    this.dom.style.height = offsetHeight + "px";
                    this.dom.style.width = offsetWidth + "px";
                } else if (size == "full") {
                    this.content.style.height = (rect.clientHeight - headerHeight - 10) + "px";
                    this.content.style.width = (rect.clientWidth) + "px";
                } else {
                    if (size[0] == "content") {
                        this.dom.style.width = offsetWidth + "px";
                    } else {
                        this.dom.style.width = (size[0].substr(-1) == "%" ? (rect.clientWidth * parseFloat(size[0]) / 100) + "px" : size[0]);
                    }
                    if (size[1] == "content") {
                        this.dom.style.height = offsetHeight + "px";
                    } else {
                        this.dom.style.height = (size[1].substr(-1) == "%" ? (rect.clientHeight * parseFloat(size[1]) / 100) + "px" : size[1]);
                    }
                }
                var bodyWidth = this.body.offsetWidth;
                var bodyHeight = this.body.offsetHeight;
                if (this.body.style.position == "absolute") {
                    if (bodyWidth > rect.bodyWidth) {
                        this.content.style.width = rect.bodyWidth + "px";
                    }else{
                        this.content.style.width = 'auto';
                    }
                    if (bodyHeight > rect.bodyHeight) {
                        this.content.style.height = (rect.bodyHeight - headerHeight - 10) + "px";
                    }else{
                        this.content.style.height = 'auto';
                    }
                    maxLeft = rect.bodyWidth - this.body.offsetWidth;
                    maxTop = rect.bodyHeight - this.body.offsetHeight;
                    this.mask.style.width = rect.bodyWidth + 'px';
                    this.mask.style.height = rect.bodyHeight + 'px';
                } else {
                    if (bodyWidth > rect.clientWidth) {
                        this.content.style.width = rect.clientWidth + "px";
                    }else{
                        this.content.style.width = 'auto';
                    }
                    if (bodyHeight > rect.clientHeight) {
                        this.content.style.height = (rect.clientHeight - headerHeight - 10) + "px";
                    }else{
                        this.content.style.height = 'auto';
                    }
                    maxLeft = rect.clientWidth - this.body.offsetWidth;
                    maxTop = rect.clientHeight - this.body.offsetHeight;
                    this.mask.style.width = '100%';
                    this.mask.style.height = '100%';
                }
                return [maxLeft, maxTop];
            },
            _setWindowPos: function (left, top, maxLeft, maxTop, right, bottom) {
                var offset = this.options.offset;
                if (offset) {
                    if (left !== null) {
                        left += offset[0];
                    } else {
                        right += offset[0];
                    }
                    if (top !== null) {
                        top += offset[1];
                    } else {
                        bottom += offset[1];
                    }

                }
                var style = this.body.style;
                if (left !== null) {
                    if (left < 0) {
                        left = 0;
                    }
                    if (left > maxLeft) {
                        left = maxLeft;
                    }
                    style.left = Math.round(left) + 'px';
                    style.right = "inherit";
                } else {
                    style.right = Math.round(right) + 'px';
                    style.left = "inherit";
                }
                if (top !== null) {
                    if (top < 0) {
                        top = 0;
                    }
                    if (top > maxTop) {
                        top = maxTop;
                    }
                    style.top = Math.round(top) + 'px';
                    style.bottom = "inherit";
                } else {
                    style.bottom = Math.round(bottom) + 'px';
                    style.top = "inherit";
                }
            },
            _setFixed: function () {
                var style = this.body.style;
                var style2 = this.mask.style;
                if (this.options.fixed) {
                    if (this.container == document.documentElement) {
                        style.position = "fixed";
                        style2.position = "fixed";
                    } else {
                        style.position = "absolute";
                        style2.position = "absolute";
                    }
                } else {
                    style.position = "absolute";
                }
            },
            _setTitle: function () {
                this.title.innerHTML = this.options.title;
            },
            _setControls: function (arr) {
                var div = this.controls;
                var btns = this.buttons;
                var childs = div.childNodes;
                for (var i = childs.length - 1; i >= 0; i--) {
                    div.removeChild(childs[i]);
                }
                this.options.controls && this.options.controls.forEach(function (str) {
                    div.appendChild(btns[str]);
                });
            },
            _setTools: function () {
                var div = this.tools;
                var btns = this.buttons;
                var childs = div.childNodes;
                for (var i = childs.length - 1; i >= 0; i--) {
                    div.removeChild(childs[i]);
                }
                this.options.tools && this.options.tools.forEach(function (str) {
                    div.appendChild(btns[str]);
                });
            },
            _setMask: function () {
                if (this.options.mask) {
                    $(this.mask).show();
                } else {
                    $(this.mask).hide();
                }
            },
            _setClassName: function () {
                $.addClass(this.body, this.options.className);
                $.addClass(this.mask, this.options.className);
            }
        };
        CON.prototype._onFocus = function(data){
        	var list = potato.dialogs;
        	if(list.length==1){
	            $('html').css("height","100%").css("overflow","hidden");
        	}
            return this.options.closeAble;
        }
        CON.prototype._onClose = function(data){
        	if(this.options.closeAble){
        		var list = potato.dialogs;
	        	if(list.length==2){
	                $('html').css("height","auto").css("overflow", "auto");
	        	}
        	}
        	return this.options.closeAble;
        }
        CON.prototype._onSetState = function (states, data) {
            $.removeClass(this.mask, "-potato-dialog-" + states.from);
            $.removeClass(this.body, "-potato-dialog-" + states.from);
            $.addClass(this.mask, "-potato-dialog-" + states.to);
            $.addClass(this.body, "-potato-dialog-" + states.to);
            if (states.to == "closed") {
                this.setOptions({
                    fixed: true,
                    offset: null,
                    pos: "clientCenterCenter",
                    mask: true,
                    size: "content",
                    title: "",
                    controls: ["close"],
                    tools: [],
                    buttons: [],
                    className: ''
                });
                if (states.from == "closed") {

                }
            }
        };
        CON.prototype._setIndex = function (index) {
            $(this.mask).css("z-index", (index * 2 - 1) + 1000);
            $(this.body).css("z-index", index * 2 + 1000);
        };
        CON.prototype.refreshSize = function (rect) {
            var container = this.container;
            rect = rect || {
                    bodyHeight: container.scrollHeight,
                    bodyWidth: container.scrollWidth,
                    clientHeight: container.clientHeight,
                    clientWidth: container.clientWidth,
                    scrollLeft: container.scrollLeft || window.pageXOffset || 0,
                    scrollTop: container.scrollTop || window.pageYOffset || 0
                };
            if (this.options.fixed) {
                PT._refreshSizeByFixed.call(this, rect);
            } else {
                PT._refreshSizeByScroll.call(this, rect);
            }
        };
        CON.prototype.refreshPos = function () {
            if (!this.options.fixed) {
                return true;
            }
            if (this.container == document.documentElement) {
                return true;
            }
            console.log("scroll");
        };

        /*CON.prototype.setHeader = function(title, tools){
         if(title!==null){
         this.header.style.display = "block";
         this.title.innerHTML = title;
         if(this.tools){
         var div = this.tools;
         var childs = div.childNodes;
         for(var i = childs.length - 1; i >= 0; i--) {
         div.removeChild(childs[i]);
         }
         if(tools){
         for(var key in tools){
         var item = tools[key];
         var btn;
         if(typeof(item)=="boolean"){
         btn = this.buttons[key];
         btn.innerHTML = potato.lang.Button[key];
         }else if(typeof(item)=="string"){
         btn = this.buttons[key];
         btn.innerHTML = item;
         }
         div.appendChild(btn);
         }
         }
         }
         }else{
         this.header.style.display = "none";
         }
         };*/
        /*CON.prototype._onSetState = function (states,data) {
         BaseDialog.prototype._onSetState.call(this,states,data);
         if(states.to=="closed"){
         if(this._callback){
         console.log(data);
         this._callback(data);

         }
         }
         };*/
        CON.prototype.setOptions = function (opts) {
            opts = opts || {};
            if (opts.hasOwnProperty("className")) {
                $.removeClass(this.body, this.options.className);
                $.removeClass(this.mask, this.options.className);
            }
            this.options = potato.copy(this.options, opts);
            if (opts.hasOwnProperty("fixed")) {
                PT._setFixed.call(this);
            }
            if (opts.hasOwnProperty("title")) {
                PT._setTitle.call(this);
            }
            if (opts.hasOwnProperty("controls")) {
                PT._setControls.call(this);
            }
            if (opts.hasOwnProperty("tools")) {
                PT._setTools.call(this);
            }
            if (opts.hasOwnProperty("mask")) {
                PT._setMask.call(this);
            }
            if (opts.hasOwnProperty("className")) {
                PT._setClassName.call(this);
            }
        };
        return CON;
    }());

    /*var BaseAlert = (function() {
     function CON(dom){
     BaseDialog.call(this,dom,{className:"-potato-alert"});
     var els = $(dom).find("[idom]").groupBy("idom");
     this._textDiv = els["text"][0];
     this._conDiv = els["con"][0];
     this._callback = null;
     var that = this;
     $(this._conDiv).on("click",function(e){
     if(e.target.nodeName == "BUTTON"){
     that.close(e.target.innerHTML);
     }
     return false;
     });
     els = null;
     }
     var CID = potato.createClass(CON, BaseDialog);

     CON.prototype._onSetState = function (states,data) {
     BaseDialog.prototype._onSetState.call(this,states,data);
     if(states.to=="closed"){
     if(this._callback){
     console.log(data);
     this._callback(data);

     }
     }
     };
     CON.prototype.setData = function(text, callback, buttons, selected){
     this._textDiv.innerHTML = text;
     var btns = buttons.map(function(item,i){
     return "<button class='btn3"+(i===selected?" on":"")+"' type='button'>"+item+"</button>"
     });
     this._conDiv.innerHTML = btns.join(" ");
     this._callback = callback;
     };
     return CON;
     }());*/

    var open = function (content, target, dialogOptions, data) {
        target = target || "_blank";
        var getDialog = function () {
            var dialog;
            if (target == "_self") {
                dialog = potato.getCurDialog();
            } else if (target == "_blank") {
                var list = project._dialogRecycle;
                for (var i = 0, k = list.length; i < k; i++) {
                    if (list[i].dialogState == "closed") {
                        break;
                    }
                }
                if (i == k) {
                    var div = document.createElement("div");
                    dialog = project.getIModule(div, {con: BaseDialog});
                    list.push(dialog);
                } else {
                    dialog = list[i];
                }
            }
            return dialog;
        };
        
        var pop = function (iwidget) {
            var dialog = getDialog();
            if (dialogOptions) {
                var opts;
                if (typeof(dialogOptions) == "string") {
                    dialogOptions = {type: dialogOptions};
                }
                if (dialogOptions.type == "slideUp") {
                    dialogOptions = $.extend({"pos": "clientCenterBottom", "offset": [0, 20], "className": "slideUp"},dialogOptions);
                } else if (dialogOptions.type == "maxWidth") {
                    dialogOptions = $.extend({"pos": "clientCenterCenter", "size": ["84%", "content"]},dialogOptions);
                } else if (dialogOptions.type == "maxWidthHeight") {
                    dialogOptions = $.extend({"pos": "clientCenterCenter", "size": ["84%", "90%"]},dialogOptions);
                }
                dialog.setOptions(dialogOptions);
            }
            dialog.load(iwidget, data);
            dialog.focus();
            this.replaceResult && this.replaceResult(dialog);
            return dialog;
        };
        
        if (!(content instanceof potato.Widget)) {
            if (content.nodeType === 1 && !content.hasAttribute("imodule")) {
                content = new potato.Widget(content);
            } else {
                content = project.getIModule(content, data);
            }
        }
        if (content instanceof potato.Proxy) {
            content.addSuccessCaller(pop);
            return content;
        } else {
            return pop(content);
        }
    };

    project.open = open;

    project.baseIModules = {
        BaseIPage: BaseIPage,
        BaseIModule: BaseIModule,
        BaseDialog: BaseDialog
    };

    potato2.setConfig({
        requireJS: require,
        application: new pdom.DomApplication(),
    });

})();





"use strict";
(function () {
    project.data = {
        gname : 'SITE1',
        user : null,
        uid : "",
        uname : "",
        ukey : "",
        serverRoot : null,
        isGuestIM: false,
        demand: {},
        currentItem: false
    };
    var opts = {
        lang : {"Errors":{"illegalRequest":"illegalRequest","500.1":"result format error","404":"not found","405":"request aborted"}},
        _ajaxRoute : function (options) {
            var arr = options.url.split("://");
            switch (arr[0]){
                case 'imodule':
                    options.url = '/imodules/'+arr[1]+'.html';
                    break;
            }
            return options;
        },
        _ajaxRenderer : function(url, str){
            var arr = url.split("://");
            switch (arr[0]){
                case 'imodule':
                    str = '<?xml version="1.0" encoding="utf-8"?><root type="list"><error type="text"><![CDATA[]]></error><data type="text"><![CDATA['+str+']]></data><cache type="text"><![CDATA[]]></cache></root>';
                    break;
            }
            return str;
        },
        commonFailureCaller : function (error, opts) {
            if(error.id=="c3"){
                project.showLoginForm();
            }
        }
    };
    potato.setConfig(opts);

    require.config({
        // enforceDefine: true,
        paths:{
          'jquery': '/global/iscripts/libs/jquery.shim',

        },
        waitSeconds : 30
    });
    requirejs.onError = function(error){
        throw error;
    };

})();

/**
 * Created by jacques on 16/7/8.
 */
var server = {

    //着陆页 发送登记的用户信息到后台
    send_landing_phone:function (data,successCallback, failCallback) {
        var defaultData = {
            who: "着陆页",
            user_type: "1",
            phone: ''
        };
        var tpl_data = $.extend({}, defaultData, data);

		var tpl = make_api_origin() + '/index.php?r=user/dengji&who={{who}}&phone={{phone}}&user_type={{user_type}}';
        $.ajax({
            type: 'GET',
            dataType: "jsonp",
            jsonp: "jsoncallback",
            url: Mustache.render(tpl,tpl_data),
            success: function(json) {
                var date = json.now;
                if (json.succ == "1" ) {
                    successCallback(json, date);
                } else if (failCallback){
                    failCallback(json, date);
                }
            },

            error: function() {
                alert('请求错误')
            }
        })
    }
};


// AUTHOR:   SongErwei
// ROLE:    	
// CREATED:  2017-01-12 13:57:31
 
// loglevel如下，递增
// DEBUG   调试    
// INFO    数据，用于模块接口
// WARN    警告
// ERROR   错误

// NONE    什么也不输出

// 重要：IE8下，typeof console[m] 为 'object'，此为IE8的bug。故，IE8下debug另行实现
// https://connect.microsoft.com/IE/feedback/details/585896/console-log-typeof-is-object-instead-of-function
        
function Debugger(gLevel) {
    this.debug = {}

    var isIE8 = (typeof console.log === 'object');

    if (!isIE8) {
        for (var m in console) {
            var bFunc = false;
            if (typeof console[m] == 'function') {
                switch (m) {
                    case 'debug':
                    case 'log':
                        bFunc = (gLevel === 'DEBUG');
                        break;
                    case 'info':
                        bFunc = (gLevel === 'DEBUG' || gLevel === 'INFO');
                        break;
                    case 'warn':
                        bFunc = (gLevel === 'DEBUG' || gLevel === 'INFO' || gLevel === 'WARN');
                        break;
                    case 'error':
                        bFunc = (gLevel === 'DEBUG' || gLevel === 'INFO' || gLevel === 'WARN' || gLevel === 'ERROR');
                        break;
                    default:
                        break;
                }
            }

            this.debug[m] = bFunc ? console[m].bind(window.console) : function(){}
        }
    } else {
        // IE下策略简单一些：要么有，要么没有。统一用console.log();
        var doLog = (gLevel === 'DEBUG');
        var fake = function(x) { if (doLog) console.log(x); };
        this.debug = {
            debug: fake,
            log: fake,
            info: fake,
            warn: fake,
            error: fake
        };
    }

    return this.debug;
}

//
// 使用: 
//      logLevel设为NONE，什么也不输出       --适用于生产环境
//      logLevel设为DEBUG，各级别log都输出   --适用于开发环境
//      logLevel设为INFO/WARN/ERROR级别，输出自己及更严重级别的log。如：设为INFO，则输出INFO、DEBUG、ERROR三级
//
//      生产环境，为了重现某个问题，只能在console中先执行debug = Debugger('DEBUG'); 这句，后续js执行将输出log

logLevel = 'DEBUG';
//logLevel = 'INFO';
//logLevel = 'WARN';
//logLevel = 'ERROR';
//logLevel = 'NONE';

debug = Debugger(logLevel);


// Javascript File
// AUTHOR:   SongErwei
// ROLE:     api基础、公用方法和对象 

var api = {
	url: (function() {
		var url = 'http://zmoa.bxland.com/';
		tlog(url);
		return url;
	})(),
}; 

function api_ajax(uri, cb, config) {
	_api_ajax('get', uri, null, cb, {}, config);
}

function api_ajax_with_query(uri, q, cb, config) {
	_api_ajax('get', uri, q, cb, {}, config);
}

function api_ajax_post(uri, data, cb, config) {
	_api_ajax('post', uri, data, cb, {}, config);
}

function _api_ajax(method, uri, data, cb, ext, config) {
	var url = api.url + uri;
	olog("[>" + method + "](" + uri + "): ", data);
	$.ajax(url, $.extend({
		method: method,
		data: data,
		dataType: "json",
		timeout: 30000,
		xhrFields: {
			withCredentials: true
		},
		success: function(json, status, xhr) {
			olog("[<resp](" + uri + "): ", json);

			cb && cb.always && cb.always(json, json.now);
			var ec = json.errCode;
			if (null == ec || 0 == ec) {
				cb && cb.succ && cb.succ(json);
			} else {
				cb && cb.fail && cb.fail(json);
			}
		},

		error: function(xhr, status, thrown) {
			// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
			if (status == "timeout") {
				tlog(uri + ' 请求超时!');
			}
			var code = as_int(xhr.status);
			var body = xhr.responseJSON;
			tlog("[!err!](" + uri + "): status: " + code + ", msg: " + thrown);
			olog("body: ", body);
			cb && cb.always && cb.always();

			var ecb = (cb.error || cb.fail);
			ecb && ecb(body);
		}
	}, ext || {}));
}



// AUTHOR:   SongErwei
// ROLE:    	
// CREATED:  2016-06-03 09:39:43
 
// 为了兼容（目前只有ie8），也为了代码保持统一，基本原则：如果ie8不支持某方法，那就统一都不用；定义统一的方法，都用
// 如，forEach，ie8不支持，那就统一用自己定义的一个方法。"x"，作为一个统一的前缀，标识是我们自己定义的

// 有人说forEach慢，而且ie8也不支持它，那就不统一都不用它了，自己定义
Array.prototype.xForEach = function(cb) {
	for (var i = 0; i < this.length; i++){
		cb.apply(this, [this[i], i, this]);
	}
}

// AUTHOR:   SongErwei
// ROLE:    	
// CREATED:  2016-03-24 17:20:11
 
//note: 此方法基于高德服务，故需先引入高德api，即 
// <script src="https://webapi.amap.com/maps?v=1.3&key=your-key&plugin=AMap.CitySearch"></script>
//
function amap_ip_in_city(cb) {
	var cs = new AMap.CitySearch();
	cs.getLocalCity(function(status, result) {
		if (status === 'complete' && result.info === 'OK') {
			var city = std_city_name(result.city);
			tlog('cur city(ip by amap): ' + city);	
			cb && cb.succ && cb.succ(city);
		} else {
			tlog('ip to city failed(by amap), status: ' + status + ', result: ' + result);
            tlog('default, use bj');
			cb && cb.succ && cb.succ('北京');
			//cb && cb.fail && cb.fail();
		}
	});
}

function std_city_name(raw) {
    if (raw.length < 4) {
        return raw.replace('市', '');
    }

    var tb = '特别行政区';
    if (raw.indexOf(tb) != -1) {
        return raw.replace(tb, '');
    }

    if (raw.indexOf('自治') != -1) {
        return raw.replace(/([蒙古朝鲜土家布依哈尼景颇满藏回黎彝羌壮苗傣白侗瑶僳]族?)+自治[州县区]/, '');
    }

    var dq = '地区';
    if (raw.indexOf(dq) != -1) {
        return raw.replace(dq, '');
    }

    var res = raw.replace('市', '');
    return (res.length <= 4) ? res : res.substr(0, 4);
}

assert('北京' === std_city_name('北京市'));
assert('香港' === std_city_name('香港特别行政区'));
assert('阿里' === std_city_name('阿里地区'));

assert('博尔塔拉' === std_city_name('博尔塔拉蒙古自治州'));
assert('阿坝' === std_city_name('阿坝藏族羌族自治州'));
assert('延边' === std_city_name('延边朝鲜族自治州'));
assert('恩施' === std_city_name('恩施土家族苗族自治州'));
assert('凉山' === std_city_name('凉山彝族自治州'));
assert('黔东南' === std_city_name('黔东南苗族侗族自治州'));
assert('黔南' === std_city_name('黔南布依族苗族自治州'));
assert('德宏' === std_city_name('德宏傣族景颇族自治州'));
assert('怒江' === std_city_name('怒江僳僳族自治州'));
assert('红河' === std_city_name('红河哈尼族彝族自治州'));

assert('不知道是' === std_city_name('不知道是什么市'));

// AUTHOR:   SongErwei
// ROLE:    	
// CREATED:  2016-03-31 11:45:56

// includes 方法还不是标准，IE不支持，故不能用，自己定义吧

String.prototype.contains = function(it) { 
	return this.indexOf(it) != -1;  
}
Array.prototype.contains = function(it) { 
	//return this.indexOf(it) != -1;  
	// IE8没有indexOf，暂时先用jquery的，先跑起来
	return ($.inArray(it, this) != -1);
}

// 在数字前补0，保证长度为n
//copyfrom: http://stackoverflow.com/questions/8513032/less-than-10-add-0-to-number
Number.prototype.pad = function(n) {
	return (new Array(n).join('0') + this).slice((n || 2) * -1);
}

$.prototype.is_visible = function() {
	return this.is(':visible');
}
$.prototype.is_not = function(sel) {
	return (!this.is(sel));
}

// 适用于只能点击一次的，以防连续点击
$.prototype.one_click = function(handler) {
	return this.one('click', function() {
		tlog('You clicked me, and can not click me any more');
		handler();
	});
}

// hide是我们convention.css中定义的标准class，js中应尽量用addHide()/removeHide()方式来隐藏/显示。
// 若用show()/hide()，有时会因为inline的问题，出现非预期结果
$.prototype.addHide = function() {
	return this.addClass('hide');
}
$.prototype.removeHide = function() {
	return this.removeClass('hide');
}
// $.prototype.rmHide = function() {
// 	return this.removeHide(); 
// }
$.prototype.hasHide = function() {
	return this.hasClass('hide');
}

$.prototype.addActive = function() {
	return this.addClass('active');
}
$.prototype.removeActive = function() {
	return this.removeClass('active');
}
// $.prototype.rmActive = function() {
//     return this.removeActive();
// }
$.prototype.hasActive = function() {
	return this.hasClass('active');
}

$.prototype.tplToObj = function() {
	if (this.hasClass('tpl')) {
		return this.removeClass('tpl').addClass('obj');
	} else {
		alert('not tpl element');
	}
}

// 下面这些是我还不会prototype时的扩展策略，未来有时间再改成prototype方式 

function $has(sel) {
	return ($(sel).length > 0)	
}

// 常常忘记 .
function $c(name) {
	return ('.' == name[0] ? $(name) : $('.' + name))
}

function $t(sel) {
	return $(sel).text()
}

function $v(sel) {
	return $(sel).val()
}

function $has_t(sel) {
	return $t(sel).length > 0
}
function $has_v(sel) {
	return $v(sel).length > 0
}

// AUTHOR:   SongErwei
// ROLE:    	
// CREATED:  2016-04-29 16:52:27
 
//brief: “刚刚” “n分钟前” 等给人看的时间。 
function time_ago(then, now) {
	var ie = isIE();

	//由于ie8不兼容"2016-05-20T23:42:00"，而chrome不兼容"2016/05/20T23:42:00"写法，故分别判断
	if (ie) {
	    return date_ago(new Date(Date.parse(then.replace(/-/g,"/"))), new Date(Date.parse(now.replace(/-/g,"/"))));
	} else {
	   return date_ago(new Date(then), new Date(now));
	}
}

var isIE = function(ver){
    var b = document.createElement('b')
    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
    return b.getElementsByTagName('i').length === 1
}

//arg: then and now should be Date(), and now should be better server time, not local time
function date_ago(then, now) {
	var ms = (now - then);
	var sec = Math.floor(ms / 1000);
	if (sec < 60) {
		return '刚刚';
	} else {
		var m = Math.floor(sec / 60);
		if (m < 60) {
			return (m + '分钟前');
		} else {
			var h = Math.floor(m / 60);
			if (h < 24) {
				return (h + '小时前');
			} else {
				var d = Math.floor(h / 24);
				if (d < 10) {
					return (d + '天前');
				} else {
					var day = month_day(then); 
					return day; 
				}
			}
		}
	}
}

function month_day(date) {
	return ((date.getMonth() + 1) + '月' + date.getDate() + '日')
}

function year_month_day(date) {
	return (date.getFullYear() + '年' + month_day(date))
}

function time_ago2(then, now) {
	var y_then = then.getFullYear();
	var y_now = now.getFullYear();
	if (y_then !== y_now) {
		// 不是同一年，就直接显示 年/月/日
		return year_month_day(then);
	} else {
		var m_then = then.getMonth();
		var m_now = now.getMonth();
		if (m_then !== m_now) {
			// 不是同一月，就直接显示 月/日
			return month_day(then); 
		} else {
			var d_then = then.getDate();
			var d_now = now.getDate();
			if (d_then !== d_now) {
				var d_delta = d_now - d_then;
				switch (d_delta) {
					case 1:
						return '昨天'
					case 2:
						return '前天'
					case 3:
						return '3天前'
				}
			}

		}
	}
}


// Javascript File
// AUTHOR:   SongErwei
// FILE:     utils.js
// ROLE:     some common basic utilities 
// CREATED:  2015-12-17 10:14:02

var config = {
	supplier: 's',
	client: 'c'
};

function tlog(text) {
    debug ? debug.log(text) : console.log(text);
    // console.log(text);
}

function todo(text) {
	tlog("@@todo: " + text);	
}

function olog(pre, obj) {
	var t = pre + JSON.stringify(obj);
	var max = 500;
	if (t.length < max) {
		tlog(t)
	} else {
		tlog(t.substring(0, max) + ' ... [total: ' + t.length + ']')
	}
}

function assert(expr) {
	assert1(expr, "I'm warning you!!!");
}

function assert1(expr, msg) {
	console.assert(expr, msg);
}

function being(obj) {
	return (obj != undefined)
}

// if it is not empty, can be used for array, string, etc, has  .length
function has(s) {
	return (being(s) && s.length > 0)
}


/* get query string */
function qs(name) {
	var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

/*
 * 我们约定：若有N部分取后面的N-1部分，例：
 * 		www.xxtao.com  取：xxtao.com
 *      www.some.xxtao.com  取：some.xxtao.com
 */
function get_top_domain_name() {
	var host = location.hostname;
	return host.substring(host.indexOf('.') + 1);
}

/* 
gulp会把把下面的return值替换为如'https://www.xxtao.com:80'的值
*/
function make_api_origin() {
 	return 'http://api.xxtao.com';
}

function is_www(){
	var host_name = location.hostname;
	if(host_name.split('.')[0].contains('m')){
		return false;
	}else{
		return true;
	}
}
function is_on_mobile() {
	return !is_www();
}

function is_wph() {
    return (location.hostname.indexOf('wanpinghui.com') != -1);
}

function as_int(s) {
	return parseInt(s);
}

/* 仅保留整数部分 */
function int_only(num) {
    return Math.floor(num);
}

function all_hanzi(t) {
	// ^表示NOT
	var re = /[^\u4e00-\u9fa5]/;
	return !re.test(t); 
}

// cookie 1-------------

function get_cookies() {
	var pairs = document.cookie.split(";");
	var cookies = {};
	for (var i = 0; i < pairs.length; i++){
		var pair = pairs[i].split("=");
		cookies[pair[0]] = unescape(pair[1]);
	}

	return cookies;
}

function get_cookie(name) {
	return get_cookies()[name];
}

function has_cookie(name) {
	var val = get_cookie(name);
	return (val !== undefined && val.length > 0);
}


// cookie 2-------------
//
// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.

function getCookie(name)
{
	var re = new RegExp(name + "=([^;]+)");
	var value = re.exec(document.cookie);
	return (value != null) ? unescape(value[1]) : null;
}
function setCookie(c_name,value,expiredays)
{
	var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+';path=/;'+
                ((expiredays==null) ? "" : "expires="+exdate.toGMTString());

}
function hasCookie(name) {
	var val = getCookie(name);
	return (val !== null); 
}


function is_phone_valid(phone) {
	//var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
	var reg = /^1\d{10}$/; // 放宽手机号的检验，只要以1打头的11位数字即可
	return reg.test(phone);
}

assert(is_phone_valid('13712345678'));
assert(is_phone_valid('10123456789'));
assert(is_phone_valid('10000000000'));
assert(!is_phone_valid('20000000000'));
assert(!is_phone_valid('101234567891'));
assert(!is_phone_valid('010123456789'));
assert(!is_phone_valid('10000000000a'));
assert(!is_phone_valid('+10123456789'));

/* wph specific */

function role_to_num(role) {
	return (config.supplier == role) ? "100" : "1";
}

function num_to_role(num) {
	return ("100" == num) ? config.supplier : config.client; 
}


var cookie_utils = {
	// 登录了？（不管身份）
	is_loggedin: function() {
		//return has_cookie('_identity');
		return hasCookie('_identity');
	},

	// 未登录？（未登录即为游客）
	is_guest: function() {
		return !this.is_loggedin();
	},

	// 登录且是普通用户？
	is_client: function() {
		return (this.is_loggedin() && (num_to_role(getCookie('user_type')) == config.client));
	},
	
	// 登录且是工程商？
	is_supplier: function() {
		return (this.is_loggedin() && (num_to_role(getCookie('user_type')) == config.supplier));
	},

	// （如果登录了），返回身份('100' or '1')
	logged_role: function() {
		assert(this.is_loggedin())
		return (this.is_supplier() ? config.supplier : config.client)	
	}
};

function safe_func(func) {
	if (func != undefined) {
		return func
	} else {
		return function(x) {}
	}
}
//
function can_click_now(cla){
	if($(cla).attr("work")==undefined){
		$(cla).attr("work","yes");
		tlog("can`t click for 5s")
		setTimeout(function(){
			$(cla).removeAttr("work");
			tlog("can click")
		},3000)
		return true;
	}else{
		return false;
	}

}
$("input").focus(function(){
	$(this).parent().css("border-bottom-color","#4785f9")
})
$("input").blur(function(){
	$(this).parent().css("border-bottom-color","#efefef")
})
// 有时，只能用px值。故，需自己将rem转换为px
function rem_to_px(rem) {                                   
      return rem * parseFloat($('html').css('font-size'));
}
function is_supplier_map(){
	return location.pathname.contains('maintenance');
}


// 
// 标准规则：
// 0. 加上逗号分隔符(三位一分隔)
// 1. 最多保留两位小数(即, 可出现1, 1.3, 1.32型; 不应出现1.00, 1.10型)
function std_num_format(num) {
	num += '';
	var parts = num.split('.');
	var float_cnt = 0;
	if (parts.length > 1) {
		var deci = parts[1];
		float_cnt = (parseInt(deci) > 0) ? deci.length : 0;
	}

	var pureRes = number_format(num, Math.min(2, float_cnt));
    var ptIndex = pureRes.indexOf('.');
    if (ptIndex === -1) {
        // 整数
        return pureRes;
    } else {
        // 下面这些处理，是为了死也要保证小数点后末尾不能为0。即使这是不科学的四舍五入，产品及相关人员也认为这比科学要更好。好吧，我妥协
        var num = parseInt(pureRes.substr(ptIndex + 1));
        if (0 === num) {
            // 123.00型
            return pureRes.substr(0, ptIndex);
        } else if (0 === num % 10) {
            // 123.40型
            return pureRes.substr(0, pureRes.length - 1);
        } else {
            return pureRes;
        }
    }
}

// 多么伟大的单元测试!
assert('100' === std_num_format('100'));
assert('100' === std_num_format('100.0'));
assert('100' === std_num_format('100.00'));
assert('100' === std_num_format(100));
assert('100' === std_num_format(100.0));
assert('100' === std_num_format(100.00));

assert('100.1' === std_num_format(100.1));
assert('100.6' === std_num_format(100.6));
assert('100.12' === std_num_format(100.12));
assert('100.16' === std_num_format(100.16));
assert('100.12' === std_num_format(100.124));
assert('100.13' === std_num_format(100.125));
assert('10,000.13' === std_num_format(10000.125));

assert('100.01' === std_num_format(100.009));
assert('100' === std_num_format(100.0009));
assert('100' === std_num_format(99.9999));
assert('100' === std_num_format('99.9999'));
assert('99.1' === std_num_format('99.099'));
assert('1,099.1' === std_num_format('1099.099'));

// 标准金额（最多保留2位小数）
// 暂和std_num_format无差别，名字取成不一样的，方便未来扩展
function std_money_format(money) {
	return std_num_format(money);
}

// 标准预算（以万或者千为单位），仅保留整数(michael认为，如此才合理 2017/1/14对bug会议决定)
function std_budget_format(money) {
    assert(money != undefined);

    var num = parseFloat(money);
    if (num < 100) {
		return {"budget": number_format(num),"unit":""};
    } else if (Math.round(num / 100) < 10) {
		return {"budget": number_format(num / 100),"unit":"百"}
    } else if (Math.round(num / 1000) < 10) {
		return {"budget": number_format(num / 1000),"unit":"千"}
    } else {
		return {"budget": number_format(num / 10000),"unit":"万"}
    }
}

(function() {
    var res; 
    res = std_budget_format('999999');
    assert('100' === res.budget);
    assert('万' === res.unit);
    
    res = std_budget_format('9999');
    assert('1' === res.budget);
    assert('万' === res.unit);

    res = std_budget_format('9500');
    assert('1' === res.budget);
    assert('万' === res.unit);

    res = std_budget_format('9499');
    assert('9' === res.budget);
    assert('千' === res.unit);

    res = std_budget_format('4500');
    assert('5' === res.budget);
    assert('千' === res.unit);

    res = std_budget_format('999');
    assert('1' === res.budget);
    assert('千' === res.unit);

    res = std_budget_format('950');
    assert('1' === res.budget);
    assert('千' === res.unit);

    res = std_budget_format('949');
    assert('9' === res.budget);
    assert('百' === res.unit);

    res = std_budget_format('99');
    assert('99' === res.budget);
    assert('' === res.unit);

    res = std_budget_format('10.99');
    assert('11' === res.budget);
    assert('' === res.unit);

    res = std_budget_format('1');
    assert('1' === res.budget);
    assert('' === res.unit);
})();

// 检查IE版本; 如果非IE，返回false
// http://stackoverflow.com/questions/19999388/check-if-user-is-using-ie-with-jquery
function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
	  // IE 10 or older => return version number
	  return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
	  // IE 11 => return version number
	  var rv = ua.indexOf('rv:');
	  return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
	  // IE 12 => return version number
	  return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}

/*   功能: 计算某个时间与现在的间隔, 并返回文本
*    参数: 传入的时间格式为 "1479475441" 标准
*    说明: 已经和服务端约定好: _init/_uptm 等以后均须以"1479475441"格式返回。曾经的"2016-11-18T21:24:01"格式，恕前端不支持
*/
function count_date_gap(startTime) {
	startTime = startTime + '';
  assert(-1 == startTime.indexOf('-'));

	var text;
	// var stime = new Date(startTime).getTime();//转换
	var stime = startTime * 1000;
	var date = new Date().getTime();
	var gapMin = parseInt((date - stime)/1000/60);
	if(gapMin <= 0){
		//防止偶尔出现的js取时间不准确
		gapMin = 1;
	}
	var gapHour = parseInt((date - stime)/1000/60/60);

	if(gapHour <= 24){
		text = gapHour + '小时前';
		if(gapMin < 60){
			text = gapMin + '分钟前';
		}
	}else if(gapHour <= 24*30){
		gapHour = parseInt(gapHour/24);
		text = gapHour + '天前'
	}else if(gapHour <= 24*30*12){
		gapHour = parseInt(gapHour/24/30);
		text = gapHour + '个月前'
	}else{
		//防止意外情况，暂时如此处理
		text = '刚刚'
	}
	return text;
}
function to_count_data_gap(time){
	time = time * 1000;
	var date = new Date(time);
	Y = date.getFullYear() + '-';
	M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
	D = date.getDate() + 'T';
	h = date.getHours() + ':';
	m = date.getMinutes() + ':';
	s = date.getSeconds();
	if (date.getSeconds()<10) {
		s = "0" + s;
	} 
	if(date.getMinutes()<10){
		m = "0"+m;
	}
	return Y+M+D+h+m+s;
}

function thin_address(raw) {
 	var rgx = new RegExp(/^中国.{2,3}[省市]/g);
	var val = rgx.exec(raw);
	return (val) ? raw.replace(val[0], '') : raw;
}

assert('郑州市' === thin_address('中国河南省郑州市'));
assert('北京市朝阳区' === thin_address('中国北京市北京市朝阳区'));
assert('哈尔滨市' === thin_address('中国黑龙江省哈尔滨市'));
assert('郑州市三七区' === thin_address('郑州市三七区'));


function isAndroid() {
    var md = new MobileDetect(window.navigator.userAgent);
    tlog(md.os());
    return /android/i.test(md.os());
}

// AUTHOR:   SongErwei
// ROLE:    	
// CREATED:  2016-04-28 15:05:57
 
// 意图：因为浏览器不在前台（后tab不是当前时），setInterval/setTimeout会变慢，甚至暂停。故，
//       一些计时（如轮询）不能依赖于时间叠加，而是每次执行时取当前时间，跟终止时间做差，来得到剩余时间

// 单位：秒
function VTimer(sec) {
	var now = new Date().getTime();
	this.end = (sec * 1000 + now);
	this.start = now;
}

VTimer.prototype.passed = function() {
	var now = new Date().getTime();
	return Math.round((now - this.start) / 1000);
}

VTimer.prototype.remains = function() {
	var now = new Date().getTime();
	var r = (this.end - now);
	return (r > 0) ? Math.round(r / 1000) : 0;
}

VTimer.prototype.ended = function() {
	return (this.remains() <= 0);
}



