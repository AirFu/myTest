var APF = {
    log : function(A) {
    }
};
APF.Namespace = {
    register : function(D) {
        var C = D.split(".");
        var A = window;
        for (var B = 0; B < C.length; B++) {
            if ( typeof A[C[B]] == "undefined") {
                A[C[B]] = new Object()
            }
            A = A[C[B]]
        }
    }
};
APF.Utils = {
    getWindowSize : function() {
        var B = 0, A = 0;
        if ( typeof (window.innerWidth) == "number") {
            B = window.innerWidth;
            A = window.innerHeight
        } else {
            if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
                B = document.documentElement.clientWidth;
                A = document.documentElement.clientHeight
            } else {
                if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
                    B = document.body.clientWidth;
                    A = document.body.clientHeight
                }
            }
        }
        return {
            width : B,
            height : A
        }
    },
    getScroll : function() {
        var B = 0, A = 0;
        if ( typeof (window.pageYOffset) == "number") {
            A = window.pageYOffset;
            B = window.pageXOffset
        } else {
            if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                A = document.body.scrollTop;
                B = document.body.scrollLeft
            } else {
                if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                    A = document.documentElement.scrollTop;
                    B = document.documentElement.scrollLeft
                }
            }
        }
        return {
            left : B,
            top : A
        }
    },
    setCookie : function(C, E, A, H, D, G) {
        var B = new Date();
        B.setTime(B.getTime());
        if (A) {
            A = A * 1000 * 60 * 60 * 24
        }
        var F = new Date(B.getTime() + (A));
        document.cookie = C + "=" + escape(E) + ((A) ? ";expires=" + F.toGMTString() : "") + ((H) ? ";path=" + H : "") + ((D) ? ";domain=" + D : "") + ((G) ? ";secure" : "")
    },
    getCookie : function(A) {
        var F = document.cookie.split(";");
        var B = "";
        var D = "";
        var E = "";
        var C = false;
        for ( i = 0; i < F.length; i++) {
            B = F[i].split("=");
            D = B[0].replace(/^\s+|\s+$/g, "");
            if (D == A) {
                C = true;
                if (B.length > 1) {
                    E = decodeURIComponent(B[1].replace(/^\s+|\s+$/g, ""))
                }
                return E;
                break
            }
            B = null;
            D = ""
        }
        if (!C) {
            return null
        }
    },
    deleteCookie : function(A, C, B) {
        if (this.getCookie(A)) {
            document.cookie = A + "=" + ((C) ? ";path=" + C : "") + ((B) ? ";domain=" + B : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT"
        }
    },
    setScrollTop : function(A) {
        if (document.body) {
            document.body.scrollTop = A;
            if (document.body.scrollTop == 0) {
                if (document.documentElement) {
                    document.documentElement.scrollTop = A
                }
            }
        } else {
            if (document.documentElement) {
                document.documentElement.scrollTop = A
            }
        }
    },
    getScrollTop : function() {
        return document.body ? document.body.scrollTop || document.documentElement.scrollTop : document.documentElement.scrollTop
    },
    gotoScrollTop : function(D, C) {
        var B = APF.Utils.getScrollTop(), F = 0, E = 0;
        var C = C || 1;
        var D = D || 0;
        var A = B > D ? 1 : 0;
        (function() {
            B = APF.Utils.getScrollTop();
            F = A ? B - D : D - B;
            E = A ? B - F / 15 * C : B + 1 + F / 15 * C;
            APF.Utils.setScrollTop(E);
            if (F <= 0 || B == APF.Utils.getScrollTop()) {
                return
            }
            setTimeout(arguments.callee, 10)
        })()
    }
};
var soj = function(F, J) {
    var C = /^http:\/\//;
    var G = (document.getElementById(F) || document).getElementsByTagName("a"), I, B, H, D, A, E = G.length, J = J || "soj";
    while (E--) {
        if (null !== G[E].getAttribute(J)) {
            G[E].onclick = function() {
                B = this.href;
                if (!B.match(C)) {
                    return
                }
                if (-1 !== B.indexOf("from=")) {
                    return
                }
                I = encodeURIComponent(this.getAttribute(J));
                H = B.split("#");
                if (-1 !== B.indexOf("?")) {
                    A = H[0] + "&from=" + I
                } else {
                    A = H[0] + "?from=" + I
                }
                D = H.length;
                if (D > 1) {
                    for (var K = 1; K < D; K++) {
                        A += "#" + H[K]
                    }
                }
                this.href = A
            }
        }
    }
};
APF.Namespace.register("aifang.global.header");
aifang.global.header.CitySelector = Class.create({
    initialize : function(D, C, A) {
        this.selector = $(D);
        this.panelId = C;
        this.hideTimeout = A;
        var B = $(C);
        if (B) {
            this.iframe = B.select("iframe").first();
            this.iframe.setStyle({
                width : B.getWidth() + "px",
                height : B.getHeight() + "px"
            });
            this.selector.observe("mouseover", function() {
                window.clearTimeout(this.timeoutHandle);
                $(this.panelId).show()
            }.bind(this));
            B.observe("mouseover", function() {
                window.clearTimeout(this.timeoutHandle);
                $(this.panelId).show()
            }.bind(this));
            B.observe("mouseout", function() {
                window.clearTimeout(this.timeoutHandle);
                this.timeoutHandle = window.setTimeout("$('" + this.panelId + "').hide()", this.hideTimeout)
            }.bind(this));
            this.selector.observe("mouseout", function() {
                window.clearTimeout(this.timeoutHandle);
                this.timeoutHandle = window.setTimeout("$('" + this.panelId + "').hide()", this.hideTimeout)
            }.bind(this));
            var E = this.selector.select("a").first();
            if (E != undefined) {
                E.observe("click", function(F) {
                    F.preventDefault()
                })
            }
        }
    }
});
APF.Namespace.register("anjuke.global.search");
anjuke.global.search.Autocompleter = Class.create(Ajax.Autocompleter, {
    initialize : function($super, C, D, B, A) {
        $super(C, D, B, A);
        this.index = -1;
        this._fixChineseInputMethodProblem()
    },
    _fixChineseInputMethodProblem : function() {
        var A = window.setInterval( function() {
            if (this.oldElementValue == this.element.value) {
                return
            }
            this.oldElementValue = this.element.value;
            if (this.observer) {
                clearTimeout(this.observer)
            }
            this.observer = setTimeout(this.onObserverEvent.bind(this), 0)
        }.bind(this), this.options.frequency * 1000)
    },
    selectEntry : function($super) {
        this.oldElementValue = this.element.value;
        if (this.observer) {
            clearTimeout(this.observer)
        }
        $super()
    },
    updateChoices : function($super, C) {
        if (!this.changed && this.hasFocus) {
            this.update.innerHTML = C;
            Element.cleanWhitespace(this.update);
            Element.cleanWhitespace(this.update.down());
            if (this.update.firstChild && this.update.down().childNodes) {
                this.entryCount = this.update.down().childNodes.length;
                for (var A = 0; A < this.entryCount; A++) {
                    var B = this.getEntry(A);
                    B.autocompleteIndex = A;
                    this.addObservers(B)
                }
            } else {
                this.entryCount = 0
            }
            this.stopIndicator();
            this.index = -1;
            if (this.entryCount == 1 && this.options.autoSelect) {
                this.selectEntry();
                this.hide()
            } else {
                this.render()
            }
        }
    },
    onKeyPress : function(A) {
        if (this.observer) {
            clearTimeout(this.observer);
            this.observer = null
        }
        if (this.active) {
            switch(A.keyCode) {
                case Event.KEY_RETURN:
                    if (this.index < 0) {
                        return
                    }
                    this.selectEntry();
                    Event.stop(A);
                case Event.KEY_TAB:
                case Event.KEY_ESC:
                    this.hide();
                    this.active = false;
                    Event.stop(A);
                    return;
                case Event.KEY_LEFT:
                case Event.KEY_RIGHT:
                    return;
                case Event.KEY_UP:
                    this.markPrevious();
                    this.render();
                    Event.stop(A);
                    return;
                case Event.KEY_DOWN:
                    this.markNext();
                    this.render();
                    Event.stop(A);
                    return
            }
        } else {
            if (A.keyCode == Event.KEY_TAB || A.keyCode == Event.KEY_RETURN || (Prototype.Browser.WebKit > 0 && A.keyCode == 0)) {
                return
            }
        }
        this.changed = true;
        this.hasFocus = true
    },
    markPrevious : function() {
        if (this.index > 0) {
            this.index--
        } else {
            this.index = this.entryCount - 1
        }
        this.getEntry(this.index).scrollIntoView(false)
    },
    getUpdatedChoices : function($super) {
        this.startIndicator();
        var B = encodeURIComponent(this.options.paramName) + "=" + encodeURIComponent(this.getToken());
        this.options.parameters = this.options.callback ? this.options.callback(this.element, B) : B;
        if (this.options.defaultParams) {
            this.options.parameters += "&" + this.options.defaultParams
        }
        var A = new Ajax.Request(this.url, this.options);
        this.requestingURL = A.url
    },
    onComplete : function(A) {
        if (this.requestingURL == A.request.url) {
            this.requestingURL = null;
            this.updateChoices(A.responseText)
        }
    }
});
anjuke.global.search.SearchSuggestion = Class.create({
    initialize : function(C, B, A) {
        this.options = A || {};
        this.element = $(C);
        this.update = this.options.update ? $(this.options.update) : this._createUpdateElement();
        this.url = B;
        this.pageName = this.options.pageName || "";
        this.useSuggestion = false;
        this.autocompleter = new anjuke.global.search.Autocompleter(this.element, this.update, this.url, {
            method : "GET",
            frequency : 0.2,
            minChars : 1,
            afterUpdateElement : function(D, G) {
                var F = G.firstDescendant().innerHTML;
                F = F.replace(/<em.*?>(.*?)<\/em\s*>/ig, "$1");
                D.value = F;
                var E = this._findParentForm(D);
                if (E) {
                    E.submit()
                }
            }.bind(this),
            callback : function(D, E) {
                if (!this.options.onParameters) {
                    return E
                }
                var F = this.options.onParameters(E);
                if (F && "function" == typeof (F.toQueryString)) {
                    return F.toQueryString()
                } else {
                    return F
                }
            }.bind(this),
            onShow : function(D, E) {
                if (!E.style.position || E.style.position == "absolute") {
                    E.style.position = "absolute";
                    Position.clone(D, E, {
                        setHeight : false,
                        offsetTop : D.offsetHeight
                    });
                    if (this.pageName != "home") {
                        E.style.left = parseInt(E.style.left) - 1 + "px"
                    }
                    E.style.width = parseInt(E.style.width) - 2 + "px"
                }
                Effect.Appear(E, {
                    duration : 0.15
                })
            }.bind(this)
        })
    },
    _findParentForm : function(A) {
        var B = A;
        while (B) {
            if (B.tagName == "FORM") {
                break
            }
            B = B.parentNode
        }
        return B
    },
    _createUpdateElement : function() {
        var A = $(document.createElement("div"));
        this.options.className = this.options.className || "SearchSuggestion";
        A.addClassName(this.options.className);
        var B = this._getInternetExplorerVersion();
        if (B > 0 && B <= 7) {
            Element.insert(this.element.getOffsetParent(), {
                after : A
            })
        } else {
            Element.insert(document.body, {
                top : A
            })
        }
        return A
    },
    _getInternetExplorerVersion : function() {
        var C = -1;
        if (navigator.appName == "Microsoft Internet Explorer") {
            var A = navigator.userAgent;
            var B = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
            if (B.exec(A) != null) {
                C = parseFloat(RegExp.$1)
            }
        }
        return C
    }
});
var Base64 = {
    _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode : function(J) {
        var I = "", H, G, F, E, D, C, B, A = 0;
        J = Base64._utf8_encode(J);
        while (A < J.length) {
            H = J.charCodeAt(A++), G = J.charCodeAt(A++), F = J.charCodeAt(A++), E = H >> 2, D = (H & 3) << 4 | G >> 4, C = (G & 15) << 2 | F >> 6, B = F & 63, isNaN(G) ? C = B = 64 : isNaN(F) && ( B = 64), I = I + this._keyStr.charAt(E) + this._keyStr.charAt(D) + this._keyStr.charAt(C) + this._keyStr.charAt(B)
        }
        return I
    },
    decode : function(J) {
        var I = "", H, G, F, E, D, C, B, A = 0;
        J = J.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (A < J.length) {
            E = this._keyStr.indexOf(J.charAt(A++)), D = this._keyStr.indexOf(J.charAt(A++)), C = this._keyStr.indexOf(J.charAt(A++)), B = this._keyStr.indexOf(J.charAt(A++)), H = E << 2 | D >> 4, G = (D & 15) << 4 | C >> 2, F = (C & 3) << 6 | B, I += String.fromCharCode(H), C != 64 && (I += String.fromCharCode(G)), B != 64 && (I += String.fromCharCode(F))
        }
        return I = Base64._utf8_decode(I), I
    },
    _utf8_encode : function(B) {
        B = B.replace(/\r\n/g, "\n");
        var A = "";
        for (var D = 0; D < B.length; D++) {
            var C = B.charCodeAt(D);
            C < 128 ? A += String.fromCharCode(C) : C > 127 && C < 2048 ? (A += String.fromCharCode(C >> 6 | 192), A += String.fromCharCode(C & 63 | 128)) : (A += String.fromCharCode(C >> 12 | 224), A += String.fromCharCode(C >> 6 & 63 | 128), A += String.fromCharCode(C & 63 | 128))
        }
        return A
    },
    _utf8_decode : function(B) {
        var A = "", D = 0, C = c1 = c2 = 0;
        while (D < B.length) {
            C = B.charCodeAt(D), C < 128 ? (A += String.fromCharCode(C), D++) : C > 191 && C < 224 ? ( c2 = B.charCodeAt(D + 1), A += String.fromCharCode((C & 31) << 6 | c2 & 63), D += 2) : ( c2 = B.charCodeAt(D + 1), c3 = B.charCodeAt(D + 2), A += String.fromCharCode((C & 15) << 12 | (c2 & 63) << 6 | c3 & 63), D += 3)
        }
        return A
    }
};
var AFisLoginCookie;
APF.Namespace.register("aifang.web.global");
aifang.web.global.UserInfo = Class.create({
    initialize : function(D, F, B, A, H, G, E, C) {
        this.login_elem = $(D);
        this.my_info = $("my_info");
        this.base_url = G;
        this.base_url_marked = "http://my.aifang.com/marked";
        this.my_base_domain = C;
        this.city_id = E;
        this.cookie_value = APF.Utils.getCookie(F);
        AFisLoginCookie = this.cookie_value ? true : false;
        APF.log("this.cookie_value:" + this.cookie_value);
        if (this.cookie_value) {
            this.render_login_html(B, A, H, C)
        } else {
            this.render_html(A, H, E, C)
        }
    },
    show_my_info : function(D, A) {
        var C = '<a class="sc" href="' + this.base_url_marked + '" rel="nofollow">我收藏的楼盘</a>', B;
        if (D && A != "") {
            B = '<a class="gz" href="' + this.my_base_domain + '" rel="nofollow">最近更新的楼盘<i>' + A + "</i></a>"
        } else {
            B = '<a class="gz" href="' + this.my_base_domain + '" rel="nofollow">我关注的楼盘</a>'
        }
        if (this.my_info) {
            this.my_info.update(B + C)
        }
    },
    render_html : function(A, E, D, B) {
        A += "/?sid=aifang&url=" + Base64.encode(document.location.href) + "&cityid=" + D;
        E += "/?sid=aifang&url=" + Base64.encode(document.location.href) + "&cityid=" + D;
        var C = '<span>您好，欢迎来到爱房网！</span><span class="lr">[<a href="' + A + '" rel="nofollow">登录</a>] &nbsp;&nbsp;[<a class="b33" href="' + E + '" target="_blank" rel="nofollow">注册</a>]</span>|<a href="' + B + '" class="my">我的爱房</a>';
        this.login_elem.update(C);
        this.show_my_info(false)
    },
    render_login_html : function(ajax_url, login_url, register_url, my_base_domain) {
        ajax_url += "?v=" + encodeURIComponent(this.cookie_value);
        new Ajax.Request(ajax_url, {
            method : "get",
            onSuccess : function(transport) {
                var p = eval("(" + transport.responseText + ")");
                if (p.is_login == 1) {
                    var refer = document.location.href;
                    if ((refer).substr(0, 9) == "http://my") {
                        refer = this.base_url
                    }
                    var logout_url = p.logout_url + "/?sid=aifang&url=" + Base64.encode(refer) + "&u=" + Math.random();
                    var html = '<span>您好，<a href="' + p.user_url + '">' + p.user_name + '</a>，欢迎来到爱房网！</span><span class="lr">[<a href="' + logout_url + '">退出</a>]</span>|<a href="' + my_base_domain + '" class="my">我的爱房<i>' + p.my_latest_loupan + "</i></a>";
                    this.login_elem.update(html);
                    this.show_my_info(true, p.my_latest_loupan)
                } else {
                    this.render_html(login_url, register_url, this.city_id, my_base_domain)
                }
            }.bind(this)
        })
    },
    _thend : undefined
});
(function() {
    var A = A || {
        DISPLAY_BAR : true,
        IS_DEV : document.location.href.indexOf(".dev.") !== -1,
        show_bete_info : function() {
            var B = document.getElementsByTagName("body")[0];
            var D = document.createElement("div"), C = [];
            D.style.width = "180px";
            D.style.height = "45px";
            D.style.border = "1px solid red";
            D.style.background = "#ff9";
            D.style.position = "fixed";
            D.style.right = "5px";
            if (Prototype && Prototype.Browser.IE) {
                D.style.position = "absolute";
                (function() {
                    var E = "stage_line_" + Math.round(Math.random() * 10000), F = document.getElementsByTagName("head")[0], G = document.createElement("style"), H = document.createTextNode("body{background-image:url(about:blank);background-attachment:fixed;} #" + E + '{filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=3, OffY=3, Color="gray", Positive=true);  background-image:url(about:blank);overflow:hidden; zoom:1; bottom:auto;margin-bottom:5px;top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));}');
                    G.type = "text/css";
                    if (G.styleSheet) {
                        G.styleSheet.cssText = H.nodeValue
                    } else {
                        G.appendChild(H)
                    }
                    F.appendChild(G);
                    D.id = E
                })()
            } else {
                D.style.bottom = "5px"
            }
            D.style.padding = "8px";
            D.style.lineHeight = "22px";
            D.style.fontSize = "14px";
            D.style.fontFamily = " \5FAE\8F6F\96C5\9ED1 , \9ED1\4F53";
            D.style.color = "red";
            D.style.borderRadius = "3px";
            D.style.boxShadow = "0px 0px 16px #333";
            D.style.opacity = "0.7";
            C.push("<div>★ 当前状态为测试环境 ★</div>");
            C.push('<div><a id="sw_online_standard" href="javascript:;">立即切换到正式环境 &gt;&gt;</a></div>');
            D.innerHTML = C.join("");
            B.appendChild(D);
            Event.observe($("sw_online_standard"), "click", function() {
                APF.Utils.deleteCookie("beta_auth_token", "/", "aifang.com");
                window.location = "/"
            })
        }
    };
    Event.observe(window, "load", function() {
        var B = APF.Utils.getCookie("beta_auth_token");
        if (A.DISPLAY_BAR && B && !A.IS_DEV) {
            A.show_bete_info()
        }
    })
})();
APF.Utils.htmlspecialchars_decode = function(A) {
    A = A.replace(/&amp;/g, "&");
    A = A.replace(/&quot;/g, '"');
    A = A.replace(/&#039;/g, "'");
    A = A.replace(/&lt;/g, "<");
    A = A.replace(/&gt;/g, ">");
    return A
};
APF.Utils.get_sapan_base_url = function(A) {
    var B = "http://pic{{host_id}}.ajkimg.com/display/aifang";
    B = B.replace(/{{host_id}}/, A);
    return B
};
APF.Namespace.register("aifang.web.home");
aifang.web.home.web = Class.create({
    initialize : function(C, B) {
        this.init_search();
        var A = this;
        setTimeout(function() {
            A.set_album_play()
        }, 10000);
        this.kaipan_zhekou();
        if ($("fz_p")) {
            this.fz_play()
        }
        if (B) {
            this.get_viewed(C, B)
        }
        this.length = $$("#imgSlider .img_box").length;
        this.index = 0;
        this.timer = null;
        if ($("imgSlider")) {
            this.load();
            this.autoPlay()
        }
        this.times_start();
        this.TimerTuan = null;
        this.flag = 0;
        this.cindex = 0;
        if ($("tg_box")) {
            this.box = $("tg_box").select(".box_di");
            A.set_tuangou_play()
        }
        this.tuangou = HOME.tuangou;
        this.more_box_link()
    },
    load : function() {
        var A = this.length;
        if (A === 0) {
            return false
        }
        this.bindEvent()
    },
    bindEvent : function() {
        var B = $("i_pr"), A = $("i_ne");
        if (this.length <= 1) {
            return false
        }
        Event.observe(B, "click", function() {
            this.index >= 1 ? this.index-- : this.index = this.length - 1;
            this.play()
        }.bind(this));
        Event.observe(A, "click", function() {
            this.index < this.length - 1 ? this.index++ : this.index = 0;
            this.play()
        }.bind(this))
    },
    play : function() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null
        }
        if (this.index >= this.length) {
            this.index = 0
        }
        var A = $$("#imgSlider .img_box");
        A.each(function(B) {
            B.hide()
        });
        A[this.index].show();
        this.autoPlay()
    },
    autoPlay : function() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null
        }
        this.timer = setTimeout( function() {
            this.index++;
            this.play()
        }.bind(this), 6000)
    },
    times_start : function() {
        var A = this;
        $$('input[name="leave"]').each(function(G, F) {
            var I = parseInt($F(G)), E = null, H = null, B = [], D = I - +new Date(), C = G.readAttribute("v");
            B[F] = parseInt(D / 1000);
            (function() {
                if (B[F] > 0) {
                    B[F]--
                } else {
                    if (H) {
                        clearTimeout(H)
                    }
                    return
                }
                var J = A.cal_time(B[F]);
                if (C == 1) {
                    G.next("em").update("<b>" + J.days + "</b>天<b><b>" + J.hours + "</b>时<b>" + J.minutes + "</b>分<b>" + J.seconds + "</b>秒")
                } else {
                    if (parseInt(J.days, 10) > 0) {
                        G.next("em").update("<b>" + J.days + "</b>天<b>" + J.hours + "</b>时<b>" + J.minutes + "</b>分<b>")
                    } else {
                        G.next("em").update("<b>" + J.hours + "</b>时<b>" + J.minutes + "</b>分<b>" + J.seconds + "</b>秒")
                    }
                }
                H = setTimeout(arguments.callee, 1000)
            })()
        })
    },
    cal_time : function(C) {
        var D = C, E = 3600 * 24;
        var G, B, F, H, A;
        G = parseInt(D / E);
        B = parseInt((D % E) / 3600);
        A = parseInt(D % 3600);
        F = parseInt(A / 60);
        H = parseInt(A % 60);
        G = G < 10 ? "0" + G : G;
        B = B < 10 ? "0" + B : B;
        F = F < 10 ? "0" + F : F;
        H = H < 10 ? "0" + H : H;
        return {
            days : G,
            hours : B,
            minutes : F,
            seconds : H
        }
    },
    get_viewed : function(E, C) {
        var B = APF.Utils.getCookie("ved_loupans");
        APF.log("cookie:" + B);
        APF.log("ids:" + C);
        if (B == null) {
            return
        }
        var D = function(H, I) {
            if (I.indexOf) {
                return I.indexOf(H)
            }
            for (var F = 0, G = I.length; F < G; F++) {
                if (I[F] === H) {
                    return F
                }
            }
            return -1
        }, A = (B == null) ? C : (function() {
            var H = [], F = B.split(",");
            for (var G = 0; G < F.length && G < 4; G++) {
                var I = F[G].split("|")[0];
                if (parseInt(D(I, H)) < 0) {
                    H.push(I)
                }
            }
            return H.length == 4 ? H.join(",") : (function() {
                var K = C.split(",");
                for (var J = 0; J < K.length && H.length < 4; J++) {
                    var L = K[J];
                    if (parseInt(D(L, H)) < 0) {
                        H.push(L)
                    }
                }
                return H.join(",")
            })()
        })();
        APF.log("new_ids:" + A);
        this.loadViewdLoupans(E + A)
    },
    fz_play : function() {
        var E = $("fz_l"), C = $("fz_r"), J = $("fz_p"), G = J.innerHTML, I = $$("#fz_p a"), D = I[0].getWidth(), H = I.length, B = D * (H - 1), F = document.createElement("div"), K = this, A = null;
        F.style.width = D * H + "px";
        F.style.marginLeft = 0 + "px";
        F.innerHTML = G;
        J.innerHTML = "";
        J.appendChild(F);
        if (!!A) {
            clearInterval(A)
        }
        E.onclick = function() {
            if (!!A) {
                clearInterval(A)
            }
            var L = parseInt(F.style.marginLeft);
            L >= 0 ? F.style.marginLeft = -B + "px" : F.style.marginLeft = L + D + "px";
            A = setInterval(function() {
                K.fz_go(F, D, B)
            }, 5000)
        };
        C.onclick = function() {
            if (!!A) {
                clearInterval(A)
            }
            var L = parseInt(F.style.marginLeft);
            L <= (-B) ? F.style.marginLeft = 0 + "px" : F.style.marginLeft = L - D + "px";
            A = setInterval(function() {
                K.fz_go(F, D, B)
            }, 5000)
        };
        A = setInterval(function() {
            K.fz_go(F, D, B)
        }, 5000)
    },
    fz_go : function(C, A, B) {
        var D = parseInt(C.style.marginLeft);
        D === (-B) ? C.style.marginLeft = 0 + "px" : C.style.marginLeft = D - A + "px"
    },
    loadViewdLoupans : function(ajaxUrl) {
        new Ajax.Request(ajaxUrl, {
            method : "get",
            onSuccess : function(transport) {
                var p = eval("(" + transport.responseText + ")");
                var html = [];
                for (var n = 0; n < p.length; n++) {
                    var item = p[n];
                    html.push("<li>");
                    html.push("<a href=" + item.loupan_url + " class='aImg' target='_blank' soj='AFC_Home_JJKP'>");
                    html.push("<img src=" + item.img + " alt='" + item.loupan_name + "' width='133px' height='100px' />");
                    html.push("</a>");
                    html.push("<span class='span1'>");
                    html.push("<a href=" + item.loupan_url + " title='" + item.loupan_name + "' class='aName' target='_blank' soj='AFC_Home_JJKP'>" + item.loupan_name + "</a>");
                    html.push("<i>" + item.avg_price + "</i>");
                    html.push("</span>");
                    html.push("</li>")
                }
                var r = html.join("");
                if ($("tablp_ul0")) {
                    var btn = $("show_my_lp");
                    $("loadMyContent").update(r);
                    $("tabLp").select("em").each(function(p, k) {
                        p.removeClassName("active");
                        if ($("tablp_ul" + k)) {
                            $("tablp_ul" + k).hide()
                        }
                    });
                    btn.addClassName("active");
                    $("tablp_ul0").show();
                    btn.show()
                }
            }.bind(this)
        })
    },
    set_album_play : function() {
        var A = HOME.album;
        if (A.length == 0) {
            return
        }
        var G = $("elm_album");
        var E = [], J = [];
        for (var D = 4, B = A.length; D < B; D++) {
            J.push('<li class="m6_li"><a class="li_a_img" href="' + A[D].article_url + '" target="_blank" title="' + A[D].article_title + '"><img src="' + A[D].img_url + '" width="144px" height="108px" /></a><span class="li_span"><a href="' + A[D].article_url + '" target="_blank" title="' + A[D].article_title + '">' + A[D].article_title + "</a></span></li>");
            if ((D + 1) % 4 == 0 && D < B) {
                E.push(J.join(""));
                J = []
            }
        }
        if (J.length > 0) {
            E.push(J.join(""))
        }
        for (var C = 0, B = E.length; C < B; C++) {
            var F = document.createElement("ul");
            F.innerHTML = E[C];
            F.className = "m6_ul";
            G.appendChild(F)
        }
        var H = 0;
        var I = this;
        I._todu_album();
        setInterval(function() {
            I._todu_album()
        }, 10000)
    },
    _todu_album : function() {
        var A = $("elm_album");
        setTimeout(function() {
            new Effect.Move(A, {
                x : 0,
                y : -134,
                mode : "absolute",
                duration : 0.8,
                afterFinishInternal : function() {
                    var C = A.getElementsByTagName("ul"), B = C[0];
                    A.removeChild(B);
                    A.appendChild(B);
                    A.style.top = "0"
                }
            })
        }, 0)
    },
    get_myinfos : function() {
        var B = APF.Utils.getCookie("aQQ_ajkauthinfos"), A = "/a/home/u/?a=";
        var C = B == null ? false : true;
        A += C ? "1" : "0";
        new Ajax.Request(A, {
            method : "get",
            onSuccess : function(I) {
                var H = $("my_infos"), G = I.responseText.evalJSON(true), F = "";
                F += '<b class="bh">我的爱房</b><br/>';
                F += '<span class="s1"><a class="a1" href="' + G.collect_url + '">' + G.collect_desc + '</a><a class="a2" href="' + G.tuangou_url + '">' + G.tuangou_desc + "</a></span>";
                F += '<span class="s2"><em>' + G.browse_desc + "</em><br/>";
                for (var E = 0, D = G.browse_loupan.length; E < D; E++) {
                    F += '<a target="_blank" href="' + G.browse_loupan[E].loupan_url + '">' + G.browse_loupan[E].loupan_name + "</a>"
                }
                F += '<a target="_blank" href="' + G.browse_more_url + '">\u66F4\u591A...</a>';
                H.setStyle("background:none");
                H.update(F)
            }
        })
    },
    set_tuangou_play : function() {
        var A = HOME.tuangou, G = [], F = [], D = [];
        if (A.length == 0) {
            return
        }
        var I = A.splice(0, 2), E = A.concat(I);
        for (var C = 0, B = E.length; C < B; C++) {
            G.push('<div class="box_info" link="' + E[C].tuangou_url + '">');
            G.push('<a href="javascript:void(0);" class="b b1"><em>');
            if (E[C]["tag_name"]) {
                G.push("[" + E[C].tag_name + "]")
            }
            G.push("</em>");
            if (E[C].idx_intro != null) {
                G.push("<i>" + E[C].idx_intro + "</i>")
            }
            G.push("</a>");
            G.push('<a class="b b2" rel="nofollow" href="javascript:void(0);"><img src="' + E[C].image_url + '" width="290px" height="179px" /></a>');
            G.push('<div class="b b3"><div>');
            if (E[C].idx_desc != undefined) {
                G.push("<b>" + E[C].idx_desc + "</b>")
            }
            G.push('</div><a class="di3_a" href="javascript:void(0);"></a><em><span class="li_left"></span><span class="li_right"></span></em></div>');
            if (E[C].cat_id != 3) {
                G.push('<div class="b b4"><div></div><span class="timer">' + (parseInt(E[C].join_num) + parseInt(E[C].fake_num)) + "人已报名</span></div>")
            }
            G.push("</div>");
            F.push(G.join(""));
            D.push(E[C].image_url);
            G = []
        }
        var H = this;
        if (E.length > 2) {
            setInterval(function() {
                H.do_tuangou(F, D)
            }, 6000)
        }
    },
    more_box_link : function() {
        $$(".box_event").each(function(A) {
            A.observe("click", function() {
                var B = A.select("div")[0].getAttribute("link");
                window.open(B, "_blank")
            })
        })
    },
    do_tuangou : function(F, G) {
        var C = this, A = F.length, D = (A - 1 == C.cindex) ? 0 : C.cindex + 1, B = C.box[C.flag];
        var E = new Image();
        E.src = G[C.cindex];
        new Effect.Fade(B, {
            duration : 1,
            from : 1,
            to : 0,
            afterFinishInternal : function() {
                B.update(F[C.cindex]);
                new Effect.Fade(B, {
                    duration : 1,
                    from : 0,
                    to : 1
                });
                C.cindex = D;
                C.flag = C.flag ? 0 : 1
            }
        })
    },
    init_search : function() {
        (function() {
            var C = $("s_kw"), B = 0, A = "请输入楼盘地址或楼盘名...";
            Event.observe(C, "focus", function() {
                if (B == 0 && C.value == A) {
                    C.value = "";
                    C.style.color = "#333"
                }
                B = 1
            })
        })()
    },
    kaipan_zhekou : function() {
        if ($("tabLp")) {
            $("tabLp").select("em").each(function(B, A) {
                B.observe("mouseover", function() {
                    $("tabLp").select("em").each(function(D, C) {
                        D.removeClassName("active");
                        if ($("tablp_ul" + C)) {
                            $("tablp_ul" + C).hide()
                        }
                    });
                    B.addClassName("active");
                    if ($("tablp_ul" + A)) {
                        $("tablp_ul" + A).show()
                    }
                })
            })
        }
        if ($("tabLouping")) {
            $("tabLouping").select("em").each(function(B, A) {
                B.observe("mouseover", function() {
                    $("tabLouping").select("em").each(function(D, C) {
                        D.removeClassName("active");
                        if ($("tab_content_" + C)) {
                            $("tab_content_" + C).hide()
                        }
                    });
                    B.addClassName("active");
                    if ($("tab_content_" + A)) {
                        $("tab_content_" + A).show()
                    }
                })
            })
        }
        if ($("tab_loupan")) {
            $("tab_loupan").select("em").each(function(B, A) {
                B.observe("mouseover", function() {
                    $("tab_loupan").select("em").each(function(D, C) {
                        D.removeClassName("active");
                        if ($("tab_loupan_" + C)) {
                            $("tab_loupan_" + C).hide()
                        }
                    });
                    B.addClassName("active");
                    if ($("tab_loupan_" + A)) {
                        $("tab_loupan_" + A).show()
                    }
                })
            })
        }
    },
    _thend : undefined
}); 