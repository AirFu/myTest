/**
 * @url $URL: https://player.svn.intra.tudou.com/svn/static/trunk/js/ai/Ai_combo.js $
 * @modified $Author: lxhao $
 * @version $Rev: 24083 $
 */
/**
 * @url https://player.svn.intra.tudou.com/svn/static/trunk/js/ai/base/fix.js $
 * @modified lxhao $
 * @version 22516 $
 */
(function() {

	//����ECMAScript5��ķ���
	var arrayMethod = Array.prototype;
	if(!arrayMethod.filter) {
		arrayMethod.filter = function(fn, sc){
			var r = [], val;
			for(var i = 0, l = this.length >>> 0; i < l; i++) {
				if(i in this) {
					val = this[i];
					if(fn.call(sc, val, i, this)) {
						r.push(val);
					}
				}
			}
			return r;
		};
	}
	if(!arrayMethod.forEach) {
		arrayMethod.forEach = function(fn, sc){
			for(var i = 0, l = this.length >>> 0; i < l; i++){
				if (i in this)
					fn.call(sc, this[i], i, this);
			}
		};
	}
	if(!arrayMethod.map) {
		arrayMethod.map = function(fn, sc){
			for(var i = 0, copy = [], l = this.length >>> 0; i < l; i++){
				if (i in this)
					copy[i] = fn.call(sc, this[i], i, this);
			}
			return copy;
		};
	}
	if(!arrayMethod.indexOf) {
		arrayMethod.indexOf = function(value, from){
			var len = this.length >>> 0;

			from = Number(from) || 0;
			from = Math[from < 0 ? 'ceil' : 'floor'](from);
			if(from < 0) {
				from = Math.max(from + len, 0);
			}

			for(; from < len; from++) {
				if(from in this && this[from] === value) {
					return from;
				}
			}

			return -1;
		};
	}
	if(!arrayMethod.every) {
		arrayMethod.every = function(fn, context) {
			for(var i = 0, len = this.length >>> 0; i < len; i++) {
				if(i in this && !fn.call(context, this[i], i, this)) {
					return false;
				}
			}
			return true;
		}
	}
	if(!arrayMethod.some) {
		arrayMethod.some = function(fn, context) {
			for(var i = 0, len = this.length >>> 0; i < len; i++) {
				if(i in this && fn.call(context, this[i], i, this)) {
					return true;
				}
			}
			return false;
		}
	}
	if(!arrayMethod.reduce) {
		arrayMethod.reduce = function (fn /*, initial*/) {
			var len = this.length >>> 0, i = 0, result;

			if(arguments.length > 1) {
				result = arguments[1];
			}
			else {
				do {
					if(i in this) {
						result = this[i++];
						break;
					}
					// if array contains no values, no initial value to return
					if(++i >= len) {
						throw new TypeError('reduce of empty array with on initial value');
					}
				}
				while(true);
			}

			for(; i < len; i++) {
				if (i in this) {
					result = fn.call(null, result, this[i], i, this);
				}
			}

			return result;
		}
	}
	if(!String.prototype.trim) {
		String.prototype.trim = function() {
			return String(this).replace(/^\s+/, '').replace(/\s+$/, '');
		};
	}
	Array.isArray || (Array.isArray = function(obj) {
		return Object.prototype.toString.call(obj) === '[object Array]';
	});
	Date.now || (Date.now = function () {
		return +new Date;
	});
	Object.keys || (Object.keys = function(o) {
		var ret=[],p;
		for(p in o)
			if(Object.prototype.hasOwnProperty.call(o,p))
				ret.push(p);
		return ret;
	});
	Object.create || (Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	});
	Function.prototype.bind || (Function.prototype.bind = function(oThis) {
		var fSlice = Array.prototype.slice,
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

})();
/**
 * @url https://player.svn.intra.tudou.com/svn/static/trunk/js/ai/base/lang.js $
 * @modified lxhao $
 * @version 24081 $
 */
var $$ = (function() {
	var lib = {},
		state = {},
		list = {},
		LOADING = 1,
		LOADED = 2,
		h = document.head || document.getElementsByTagName('head')[0],
		baseUrl = location.href.replace(/\/[^/]*$/, '/');
	/**
	 * @public ����script��url��ӳ���ϵ��Ϊ�汾�Զ�����׼��
	 * @note url������xxx.8735.js��ʽ��Ϊ�汾���Ʒ������߲�������������Ϊ�汾�ţ���ȥ���汾�ŵ���ȷurl��Ӧ��������
	 * @param {url} script��url
	 * @param {boolean} �Ƿ�ǿ�Ƹ���
	 */
	function join(url, force) {
		//joinʱ���ܲ��Ǿ���·��������Ը�·�����ɹ�����������
		url = path(url);
		var key = url.replace(/_\d+\.js$/, '.js');
		if(force || !lib[key])
			lib[key] = url;
	}
	/**
	 * @public �ɲ��м���script�ļ����ҽ�����һ��
	 * @param {url} script��url
	 * @param {Function} �ص�
	 * @param {String} script���룬��ʡ��
	 * @param {Boolean} �����棬ÿ�α����¼��أ���ʡ��
	 */
	function load(url, cb, charset, noCache) {
		cb = cb || function(){};
		if(charset === true) {
			noCache = true;
			charset = null;
		}
		url = path(url);
		if(!noCache && state[url] == LOADED) {
			cb();
		}
		else if(!noCache && state[url] == LOADING) {
			list[url].push(cb);
		}
		else {
			//����noCache�����������loading״̬
			if(!noCache) {
				state[url] = LOADING;
				list[url] = [cb];
			}
			//����script
			var s = document.createElement('script');
			s.async = true;
			if(charset)
				s.charset = charset;
			//�汾�Զ���
			s.src = lib[url] || url;
			function ol() {
				s.onload = s.onreadystatechange = null;
				state[url] = LOADED;
				//����noCache���������Ƿ񻺴��¼
				if(!noCache) {
					list[url].forEach(function(cb) {
						cb();
					});
					list[url] = [];
				}
				else
					cb();
				h.removeChild(s);
			}
			if(s.addEventListener)
				s.onload = ol;
			else {
				s.onreadystatechange = function() {
					if(/loaded|complete/.test(this.readyState))
						ol();
				};
			}
			h.appendChild(s);
		}
	}
	/**
	 * @public ��ȡӳ���
	 * @return {Object} hashmap
	 */
	function map() {
		return lib;
	}
	/**
	 * @public ��ȡ/����ȫ�ָ�·��
	 * @param {String} ���õ�·��
	 * @return {String} ��·��
	 */
	function base(url) {
		if(url)
			baseUrl = url;
		return baseUrl;
	}
	/**
	 * @public ��ȡ����·��
	 * @param {string} url ��Ҫת����url
	 * @param {string} ������url
	 * @return {String} ת���Ľ��
	 */
	function path(url, depend) {
		if(/^https?:\/\//.test(url))
			return url;
		depend = depend || baseUrl;
		var temp = depend.slice(8).split('/');
		temp.pop();
		temp[0] = depend.slice(0, 8) + temp[0];
		if(url.charAt(0) == '/')
			return temp.join('/') + url;
		else if(url.indexOf('../') == 0) {
			while(url.indexOf('../') == 0) {
				url = url.slice(3);
				temp.pop();
			}
			return temp.join('/') + '/' + url;
		}
		else if(url.indexOf('./') == 0)
			url = url.slice(2);
		return temp.join('/') + '/' + url;
	}

	return {
		join: join,
		load: load,
		map: map,
		head: h,
		base: base,
		path: path
	}
})();
/**
 * @url https://player.svn.intra.tudou.com/svn/static/trunk/js/ai/base/amd.js $
 * @modified lxhao $
 * @version 23037 $
 */
var require,
	define;

(function() {

	var toString = Object.prototype.toString,
		lib = {},
		relation = {},
		finishUrl,
		defQueue,
		delay,
		delayCount = 0,
		delayQueue = [],
		interactive = document.attachEvent && !window['opera'];

	function isString(o) {
        return toString.call(o) == '[object String]';
	}
	function isFunction(o) {
        return toString.call(o) == '[object Function]';
	}

	/**
	 * @public amd����ӿ�
	 * @param {string} ģ��id����ѡ��ʡ��Ϊscript�ļ�url
	 * @param {array} ����ģ��id����ѡ
	 * @param {Function/object} ��ʼ������
	 */
	define = function(id, dependencies, factory) {
		if(!isString(id)) {
			factory = dependencies;
			dependencies = id;
			id = null;
		}
		if(!Array.isArray(dependencies)) {
			factory = dependencies;
			dependencies = null;
		}
		//��û�ж�������������£�ͨ��factory.toString()��ʽƥ���������ܻ�ȡ�����б�
		if(!dependencies && isFunction(factory)) {
			var res = /(?:^|[^.])\brequire\s*\(\s*(["'])([^"'\s\)]+)\1\s*\)/g.exec(factory.toString());
			if(res)
				dependencies = res.slice(2);
		}
		var module = {
			id: id,
			dependencies: dependencies,
			factory: factory
		};
		//����ģ��
		if(id)
			lib[id] = module;
		//��¼factory��module��hash��Ӧ��ϵ
		if(isFunction(factory))
			record(factory, module);
		//�������ߺϲ���ģ����������url������ֱ�������Ժ������߼�
		if(finishUrl) {
			fetch(module, finishUrl);
			return;
		}
		//ie������interactive���Խ��Ͳ�������·�һ���Դ�����
		if(interactive) {
			var s = $$.head.getElementsByTagName('script'),
				i = 0,
				len = s.length;
			for(; i < len; i++) {
				if(s[i].readyState == 'interactive') {
					fetch(module, s[i].hasAttribute ? s[i].src : s[i].getAttribute('src', 4));
					return;
				}
			}
		}
		//�������߼�������def����
		if(defQueue)
			defQueue.push(module);
		finishUrl = null;
	}
	define.amd = { jQuery: true };
	define.url = function(url) {
		finishUrl = getAbsUrl(url);
	}
	function fetch(mod, url) {
		mod.uri = url;
		mod.id = mod.id || url;
		lib[url] = mod;
		finishUrl = null;
	}
	function record(factory, mod, callee) {
		var ts = getFunKey(factory);
		(relation[ts] = relation[ts] || []).push({
			f: factory,
			m: mod
		});
	}
	function getFunKey(factory) {
		return factory.toString().slice(0, 32);
	}
	/**
	 * @public ����ʹ��ģ�鷽��
	 * @param {string/array} ģ��id��url
	 * @param {Function} ���سɹ���ص�
	 * @param {string} ģ���ǿ�Ʊ��룬��ʡ��
	 * @param {Boolean} �Ƿ񻺴���أ���ʡ��
	 */
	function use(ids, cb, charset, noCache) {
		if(charset === true) {
			noCache = true;
			charset = null;
		}
		defQueue = defQueue || []; //use֮ǰ��ģ��Ϊ�ֶ������ҳ��script��ǩ��ģ���ϲ����ܿ��е�ģ�飬�����豻�ų�����
		var idList = isString(ids) ? [ids] : ids, wrap = function() {
			var keys = idList.map(function(v) {
				return lib[v] ? v : getAbsUrl(v);
			}), mods = [];
			keys.forEach(function(k) {
				var mod = getMod(k);
				if(!mod.exports) {
					var deps = [];
					mod.exports = {};
					//����������Ϊ������ģ�飬����Ĭ��Ϊrequire, exports, module3��Ĭ��ģ��
					if(mod.dependencies) {
						mod.dependencies.forEach(function(d) {
							//ʹ��exportsģ����������
							if(d == 'exports')
								deps.push(mod.exports);
							//ʹ��moduleģ�鼴Ϊ����
							else if(d == 'module')
								deps.push(mod);
							else {
								var m = lib[d] || getMod(getAbsUrl(d, mod.uri));
								deps.push(m.exports);
							}
						});
					}
					else
						deps = [require, mod.exports, mod];
					mod.exports = isFunction(mod.factory) ? (mod.factory.apply(null, deps) || mod.exports) : (mod.factory || {});
					delete mod.factory;
				}
				mods.push(mod.exports);
			});
			cb.apply(null, mods);
		}, recursion = function() {
			var urls = idList.map(function(v) {
				return lib[v] ? v : getAbsUrl(v);
			}), deps = [];
			urls.forEach(function(url) {
				var mod = getMod(url),
					d = mod.dependencies;
				//��δ��ʼ����ģ����ѭ��������ͳ������
				if(!mod.exports) {
					checkCyclic(mod, {}, []);
					d && d.forEach(function(id) {
						deps.push(lib[id] ? id : getAbsUrl(id, mod.uri));
					});
				}
			});
			//������������ȼ�������������ֱ�ӻص�
			if(deps.length)
				use(deps, wrap, charset, noCache);
			else
				wrap();
		};
		if(isString(ids)) {
			var url = getAbsUrl(ids);
			//noCacheʱÿ�α����¼���script
			if(!noCache && (lib[ids] || lib[url]))
				recursion();
			else {
				$$.load(url, function() {
					//�ӳ�ģʽ��onload����exec������2�����ӳ��㷨�ȴ�
					if(delay)
						delayQueue.push(cb);
					else
						cb();
					function cb() {
						//�����ж��ظ�����ֹ2��use�̼߳���ͬһ��scriptͬʱ����2��callback����noCacheʱ��������������Ϊÿ�μ��ض����µ�script��
						if(noCache || !lib[url]) {
							if(defQueue.length) {
								var mod = defQueue.shift();
								fetch(mod, url);
							}
							else {
								d2();
								return;
							}
						}
						recursion();
					}
					function d2() {
						//�ȴ���defQueue�����˵�ʱ�򼴿�ֹͣ�ӳ٣����⵱lib[url]���˵�ʱ��Ҳ���ԣ���Ϊ�����Ǵ���ϲ���ģ���ļ�onload�����ˣ���ʱ�ϲ����ļ���ģ��û�д���defQueue������define.finish�д���url������lib[url]��ע��noCache������жϡ�
						if(defQueue.length || (!noCache && lib[url])) {
							delayCount = 0;
							cb();
							if(delayQueue.length)
								delayQueue.shift()();
							else
								delay = false;
						}
						else {
							delay = true;
							if(delayCount > 5)
								throw new Error('2^ delay is too long to wait:\n' + url);
							setTimeout(d2, Math.pow(2, delayCount++) << 4); //2 ^ n * 16��ʱ��ȱ��ۼ�
						}
					}
				}, charset, noCache);
			}
		}
		else {
			var remote = ids.length;
			ids.forEach(function(id) {
				use(id, function() {
					if(--remote == 0)
						recursion();
				}, charset, noCache);
			});
		}
	}
	/**
	 * private ���ѭ������
	 * @param {object} ģ��
	 * @param {hashmap} ��ʷ��¼
	 * @param {array} ����˳��
	 */
	function checkCyclic(mod, history, list) {
		if(!mod)
			return;
		var id = mod.id;
		list.push(id);
		if(history[id])
			throw new Error('cyclic dependencies:\n' + list.join('\n'));
		history[id] = true;
		mod.dependencies && mod.dependencies.forEach(function(dep) {
			checkCyclic(lib[dep] || lib[getAbsUrl(dep, mod.uri)], Object.create(history), Object.create(list));
		});
	}
	/**
	 * private ���ݴ����id��url��ȡģ��
	 * @param {string} ģ��id��url
	 */
	function getMod(s) {
		var mod = lib[s];
		if(!mod)
			throw new Error('module undefined:\n' + s);
		return mod;
	}
	/**
	 * ��������script��url��ȡ����·��
	 * @param {string} url ��Ҫת����url
	 * @param {string} ������url
	 */
	function getAbsUrl(url, depend) {
		//�Զ�ĩβ����.js
		if(!/\.(php|html|srv|jsp|action|asp|do)/.test(url) && url.indexOf('.js') != url.length - 3)
			url += '.js';
		if(url.charAt(0) == '/')
			depend = $$.base();
		return $$.path(url, depend);
	}
	//Ĭ�ϵ�require����ģ��
	require = function(id) {
		if(arguments.length == 1) {
			if(lib[id])
				return lib[id].exports;
			var caller = arguments.callee.caller,
				ts = getFunKey(caller),
				mod;
			relation[ts].forEach(function(o) {
				if(caller == o.f)
					mod = o.m;
			});
			return getMod(getAbsUrl(id, mod.uri)).exports;
		}
		else {
			use.apply(null, Array.prototype.slice.call(arguments));
		}
	};
	define('require', require);
	//exports��module
	define('exports', {});
	define('module', {});

	$$.mod = function(id) {
		return id ? lib[id] : lib;
	};

})();
/**
 * @url $URL: https://player.svn.intra.tudou.com/svn/static/trunk/js/ai/Ai_combo.js $
 * @modified $Author: lxhao $
 * @version $Rev: 24083 $
 */