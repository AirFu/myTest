(function(win){
    var document = win.document,
    APF = {//娴嬭瘯鏃跺�鐢紱
        log: function(v) {
            if (typeof console != 'undefined' && typeof console.log == 'function') {
                console.log(v);
            }
        }
    },

    Utils = {
        extend: function(objs, opts){
            for(var item in opts){
                if( opts.hasOwnProperty(item) ){
                    if(typeof opts[item] === 'object' && !opts[item].length && !opts[item].test){ // 濡傛灉鏄璞★紝骞朵笖涓嶆槸鏁扮粍, 骞朵笖涓嶆槸姝ｅ垯琛ㄨ揪寮�
                        objs[item] = arguments.callee(objs[item] || {}, opts[item]);
                    }else{
                        objs[item] = opts[item];
                    }
                }
            }
            return objs;
        },
        offset: function(elm){ //鍏冪礌褰撳墠浣嶇疆
            var x, y;
            x = elm.offsetLeft;
            y = elm.offsetTop;
            while (elm = elm.offsetParent) {
                y += elm.offsetTop;
                x += elm.offsetLeft;
            }

            return{x: x, y: y}
        }
    },

    /**鎻愮ず鏂囨湰妗�
     * @param txt{string} 鎻愮ず鐨勬枃瀛楀唴瀹�
     * @param elm{object} 寰呴獙璇佸璞＄殑ID
     * @param css{string} class鏍峰紡
     * @param type{string} 鎻愮ず妗嗗睍绀烘柟寮廩target 鎸囧畾瀵硅薄锛宭eft,right,above,under]
     */
    ShowTip = function(txt, elm, css, cfg){
        this.txt = txt;
        this.elm_str = elm;
        this.obj = $(elm);
        this.css= css;
        this.cfg = cfg;

        switch(cfg.mode.toLowerCase()){
            case 'target': //鎸囧畾瀵硅薄
                this.targetTip();
                break;
            case 'above': //褰撳墠涓婃柟
                this.aboveTip();
                break;
            case 'under': //褰撳墠涓嬫柟
                this.underTip();
                break;
            case 'left': //褰撳墠宸︽柟
                this.leftTip();
                break;
            case 'right':  //褰撳墠鍙虫柟
                this.rightTip();
                break;
            default:
                this.alertTip();
                break;
        }
    };
    ShowTip.prototype = {

        targetTip: function(){
            var o = this.elm_str + '_tip'; //target鏂瑰紡鏄剧ず, ID 涓�鍏冪礌 'ID_tip'锛�

            !o ? APF.log('ID涓�'+ this.elm_str + '_tip 鐨勫璞′笉瀛樺湪') : this.updateElm(o);
        },

        alertTip: function(){
            alert(this.txt);
        },

        aboveTip: function(){

            this.updateElm(this.createDiv());

            this.createDiv().setStyle({
                left: Utils.offset(this.obj).x + this.offset().x + 'px',
                top: Utils.offset(this.obj).y - this.offset().y - this.client().height + 'px'
            });

        },

        underTip: function(){

            this.updateElm(this.createDiv());

            this.createDiv().setStyle({
                left: Utils.offset(this.obj).x + this.offset().x + 'px',
                top: Utils.offset(this.obj).y + this.client().height + this.offset().y + 'px'
            });

        },

        leftTip: function(){

            this.updateElm(this.createDiv());

            this.createDiv().setStyle({
                left: Utils.offset(this.obj).x - this.offset().x - this.client().width + 'px',
                top: Utils.offset(this.obj).y + this.offset().y + 'px'
            });

        },

        rightTip: function(){

            this.updateElm(this.createDiv());

            this.createDiv().setStyle({
                left: Utils.offset(this.obj).x + this.client().width + this.offset().x + 'px',
                top: Utils.offset(this.obj).y + this.offset().y + 'px'
            });

        },

        updateElm: function(elm){
            var elm = $(elm);
            elm.update(this.txt);
            elm.writeAttribute('class',this.css);
        },

        client: function(){
            return {
                width : this.obj.getWidth(),
                height : this.obj.getHeight()
            }
        },

        offset: function(){ //鏍煎紡鍖栧亸绉婚噺
            return{
                x: typeof this.cfg.offset.x !== 'number' ? 0 : this.cfg.offset.x,
                y: typeof this.cfg.offset.y !== 'number' ? 0 : this.cfg.offset.y
            }
        },

        defCss : { //鎻愮ず妗嗛粯璁ゆ牱寮�
            position: 'absolute',
            display: 'inline',
            padding: '2px 5px'
        },

        createDiv: function(){ //鍒涘缓鎻愮ず妗�
            var obj = $('TIPID_' + this.elm_str);

            if(obj){ return obj } //鎻愮ず妗嗗瓨鍦ㄤ笉閲嶅鍒涘缓

            var div = $( document.createElement('div'));
            div.id = 'TIPID_' +  this.elm_str;

            Utils.extend(this.cfg.css, this.defCss);
            div.setStyle(this.cfg.css);

            document.body.appendChild(div);
            return div;

        }

    };



     /** 琛ㄥ崟瀛楁楠岃瘉鍣�
     * @param opts.config{Object} 鍩烘湰閰嶇疆
     * @param opts.fields{Object} 琛ㄥ崟寰呴獙璇佺殑瀛楁闆嗗悎
     */
    var MyValidate = function(frm, opts){
        this.from = $(frm);
        this.opts = opts;
        this.ajax_check = {};//寮傛楠岃瘉鐨勬爣璁�
        this.checking = {}; //鏄痶rue/鍚alse 姝ｅ湪杩涜寮傛楠岃瘉

        if(!this.from){
            APF.log('璇锋纭厤缃瓼rom鐨処D銆�);
            return;
        }

        this.toConfig();
    };

    MyValidate.prototype = {
        defConf: { //榛樿閰嶇疆
            tips: { //鎻愮ず淇℃伅
                mode: 'right', //鎻愮ず淇℃伅鏂瑰紡[target鎸囧畾瀵硅薄锛宭eft,right,above,under]
                offset: { //鎻愮ず淇℃伅鍋忕Щ閲忥紝瀵筶eft,right,above,under鏈夋晥锛�
                    x: 0,
                    y: 0
                },
                css: {}
            }
            //mode :'target'//, //鎻愮ず淇℃伅锛宼arget 鎸囧畾浣嶇疆锛宭eft,right,above,under
            //type : 0, //楠岃瘉鏂瑰紡锛�瀛楅潰閲忥紝鍏朵粬涓篬1]浼睘鎬э紝
            //realTime: true
        },

        defFields: { //瀛楁榛樿鍊�
            require: true,
            type: '', //鍐呯疆楠岃瘉绫诲瀷锛�
            min: [0, '杈撳叆鐨勫�杩囩煭'],
            max: [0, '杈撳叆鐨勫�杩囬暱'],
            reg: '',
            tips: {
                focusTip: '璇疯緭鏈夋晥鐨勫�',
                succTip: '杈撳叆鏈夋晥'
            },
            ajax: ''
        },
        /**
         * 寮傛楠岃瘉鏃讹紝楠岃瘉鍣ㄥ洖璋冨嚱鏁�鍛婅瘔楠岃瘉鏄槸鍚﹂�杩�
         * @params txt{string} 鎻愮ず鐨勬枃瀛楀唴瀹�
         * @params status{bool} 鎻愮ず鐨勬枃瀛楀唴瀹�         */
        feedBack: function(txt, status){

            var _is = status || false;
            this.ajax_check[this.ajax_tips.elm] = _is;

            return new ShowTip(txt, this.ajax_tips.elm, _is === true ? 'succTip' : 'errorTip', this.ajax_tips.cfg);
        },

        toConfig: function(){
            this.cfg = Utils.extend({}, this.defConf);
            Utils.extend(this.cfg, this.opts.config || {} ); //瑕嗙洊楠岃瘉缁勪欢鐨勯粯璁ら厤缃�

            !this.opts.fields ? APF.log('娌℃湁鍙獙璇佸瓧娈�) : this.getFields(this.opts.fields);

        },
        /**
         *鎻愬彇寰呴獙璇佺殑瀛楁
         * @param params{object}寰呴獙璇佺殑瀛楁闆嗗悎
         */
        getFields: function(params){
            for(var i in params){
                this.intValid(i, params[i]);// i鏄緟瀛楁鐨処D锛宲arams鏄楠岃瘉鐨勫弬鏁�
            }
        },
        /**
         *鍒ゆ柇寰呴獙璇佺殑瀛楁闆嗗悎鏄惁鍏ㄩ儴閫氳繃楠岃瘉
         */
        isPass: function(){

            for(var k in this.opts.fields){

                if(!this.opts.fields[k].ajax){ //闈炲紓姝ラ獙璇�

                    var para = this.initField(this.opts.fields[k]);

                    if(!this.toValidate(k, para)){ $(k).focus(); return false; }
                }else{ //寮傛楠岃瘉
                    if(!this.ajaxCheck()){ return false; }
                }
            }
            return true;
        },
        /**
         * 寮傛楠岃瘉鏄惁閮介�杩�
         * @param elm{string} 寰呴獙璇佸璞＄殑ID
         * @param pa{object} 寰呴獙璇佺殑鍙傛暟闆嗗悎
         */
        ajaxCheck: function(){
            for(var k in this.ajax_check){

                if(this.checking[k]){ return false; } //寮傛楠岃瘉杩樺湪杩涜锛岀洿鎺eturn锛�

                if(!this.ajax_check[k] ) { // 寮傛楠岃瘉涓嶉�杩囷紱
                    $(k).focus();
                    return false;
                }
            }
            return true;
        },

        submit: function(){ //鎻愪氦琛ㄥ崟锛�
            this.submiting = true; //鎻愪氦鍔ㄤ綔宸茶Е鍙戯紱

            if(this.isPass()){
                //this.from.submit();
                APF.log('Submit Form Success');
            }
        },

        /**
         * 鍒濆鍖栧瓧娈靛弬鏁帮紱
         */
        initField: function(opts){
            var data = Utils.extend({}, this.defFields); //鎷疯礉涓�唤榛樿鍊硷紱鐩殑鏄繚鐣欓粯璁ら厤缃殑鍊�

            Utils.extend( data, opts );

            return data;
        },

        /**
         * 鍒濆鍖栭獙璇�
         */
        intValid: function(elm, opts){
            var params = this.initField(opts);

            if(params.ajax){ this.ajax_check[elm] = false; }//鏄惁瑕佸紓姝ラ獙璇�

            this.mouseEvent(elm, params);
        },
        /**
         * 榧犳爣瑙﹀彂鍔ㄤ綔锛�         */
        mouseEvent: function(elm, params){
            var val, check;

            Event.observe($(elm), 'focus', function(){

                new ShowTip(params.tips.focusTip, elm, 'focusTip', this.cfg.tips);

                val = $F(elm).trim();
                this.submiting = false; //鍙栨秷鎻愪氦鍔ㄤ綔锛�

                if(params.ajax){
                    check = this.ajax_check[elm];
                    this.ajax_check[elm] = false;
                }

            }.bind(this));


            Event.observe($(elm), 'blur', function(){
                var v = $F(elm).trim();

                if(params.ajax && v === val && !!check){ //寮傛楠岃瘉锛屽�鐩哥瓑 骞朵笖check涓簍rue涓嶅啀杩涜楠岃瘉

                    new ShowTip(params.tips.succTip, elm, 'succTip', this.cfg.tips);
                    this.ajax_check[elm] = true;
                    return;
                }

                this.toValidate(elm, params);

            }.bind(this));

        },
        /** 璋冩暣鎴愪簩缁存暟缁�
         * @param t{string} 楠岃瘉涓嶆垚鍔熺殑鎻愮ず鏂囧瓧
         * @param pa{object} 寰呰皟鏁存垚浜岀淮鏁扮粍鐨勫璞�
         */
        toArray: function(pa, t){
            var len = pa.length;

            if(typeof pa ==='string'){
                return [pa, t];
            }else{
                if(len === 2){
                    return pa;
                }
                if(!len || len ===1){
                    return [pa[0] || pa, t];
                }
            }

        },
        /**楠岃瘉
         * @param elm{string} 寰呴獙璇佸璞＄殑ID
         * @param params{object} 寰呴獙璇佺殑鍙傛暟闆嗗悎
         */
        toValidate: function(elm, params){
            var val = $F(elm).trim(), len = val.length, tips = this.cfg.tips;

            if(len === 0) return;

            params.type = this.toArray(params.type, '璇ョ被鍨嬩笉瀛樺湪');
            if(params.type[0] && !this.validateByType(params.type[0], elm)){ //楠岃瘉榛樿绫诲瀷

                new ShowTip(params.type[1], elm, 'errorTip', tips);
                return false;
            }

            params.min = this.toArray(params.min, '杈撳叆鍊艰繃鐭�);
            if(params.min[0] > 0 && len < params.min[0]){ //鏈�皬鍊硷紱

                new ShowTip(params.min[1], elm, 'errorTip', tips);
                return false;
            }

            params.max = this.toArray(params.max, '杈撳叆鍊艰繃闀�);
            if(params.max[0] > 0 && len > params.max[0]){ //鏈�ぇ鍊硷紱

                new ShowTip(params.max[1], elm, 'errorTip', tips);
                return false;
            }

            params.reg = this.toArray(params.reg, '鏍煎紡涓嶆纭�);
            if(len > 0 && typeof params.reg[0] === 'object' && !params.reg[0].test(val)){ //楠岃瘉姝ｅ垯锛�

                new ShowTip(params.reg[1], elm, 'errorTip', tips);
                return false;
            }

            if(params.ajax && !this.ajax_check[elm]){ //寮傛楠岃瘉

                this.ajaxValidate(elm, params.ajax);

            }else{ //涓嶉渶瑕佸紓姝ラ獙璇佺殑鐩存帴閫氳繃
                new ShowTip(params.tips.succTip, elm, 'succTip', tips);
            }
            return true;
        },

        /**
         * 寮傛楠岃瘉
         * @param elm{string} 寰呴獙璇佸璞＄殑ID
         * @param pa{object} 寰呴獙璇佺殑鍙傛暟
         * @param opt{string} 寰呴獙璇佸璞＄殑ID
         */
        ajaxValidate: function(elm, pa){

            this.ajax_check[elm] = false;
            this.checking[elm] = true; //姝ｅ湪杩涜寮傛楠岃瘉
            var pas = pa.params ||{};

            pas.val = $F(elm).trim();//缁欒嚜瀹氫箟鍙傛暟鍔犱笂elm鐨剉alue鍊硷紱

            new ShowTip(pa.sending || '姝ｅ湪妫�祴', elm, 'focusTip', this.cfg.tips);
            new Ajax.Request(pa.url, {
                method: pa.method || 'post',
                parameters : pas,
                onSuccess:function(rp){

                    this.checking[elm] = false;
                    this.ajax_tips = { //渚�feedBack 浣跨敤锛�
                        elm: elm,
                        cfg: this.cfg.tips
                    };

                    pa.success(rp.responseText); //鎵ц楠岃瘉鍣ㄥ洖璋�

                    if(this.submiting && this.ajaxCheck()) { //瑙﹀彂浜嗘彁浜ゅ姩浣滐紝骞朵笖鎵�湁寮傛楠岃瘉閮介�杩�
                        this.submit();
                    }

                 }.bind(this)
           });
        },
        /**
         *鍐呯疆楠岃瘉绫诲瀷
         * @param elm{object} 寰呴獙璇佸璞＄殑ID
         * @param pa{object} 鍐呯疆楠岃瘉绫诲瀷
         */
        validateByType: function(pa, elm){
            var val= $F(elm).trim(), pa = pa.toLowerCase();

            switch (pa){
                case 'mail':
                    return (/^[a-z0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i).test(val);
                case 'url':
                    return (/^https?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/).test(val);
                case 'chinese':
                case 'cn':
                    return (/^[\u4E00-\u9FA5]+$/gi).test(val);
                default:
                    APF.log('璇ラ獙璇佺被鍨嬩笉瀛樺湪锛�);
                    return false;
            }
        }
    };

    if(!String.prototype.trim){
        String.prototype.trim = function() { return this.replace(/(^\s*)|(\s*$)/g, ''); }
    }

    win.MyValidate = MyValidate;
})(window);

