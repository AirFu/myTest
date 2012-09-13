(function(window, undefined) {

    var Bind = function(object, fun) {
        var args = Array.prototype.slice.call(arguments).slice(2);
        return function() {
            return fun.apply(object, args.concat(Array.prototype.slice.call(arguments)));
        }
    }
    var Tween = {
        Quart : {
            easeOut : function(t, b, c, d) {
                return -c * (( t = t / d - 1) * t * t * t - 1) + b;
            }
        },
        Back : {
            easeOut : function(t, b, c, d, s) {
                if (s == undefined)
                    s = 1.70158;
                return c * (( t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            }
        }
    }

    //容器对象,滑动对象,切换个数
    var Sliders = function(container, slider, count, options) {
        this._slider = slider;
        this._container = container;
        //容器对象
        this._count = Math.abs(count);
        //切换数量
        this._timer = null;
        //定时器
        this._target = 0;
        //目标值
        this._t = this._b = this._c = 0;
        //tween参数
        this.index = 0;
        //当前索引

        this.SetOptions(options);

        this.auto = !!this.options.auto;
        var bVertical = !!this.options.vertical;
        this.duration = Math.abs(this.options.duration);
        this.time = Math.abs(this.options.time);
        this.pause = Math.abs(this.options.pause);
        this.Tween = this.getTween();
        this.onStart = this.options.onStart;
        this.btnNex = this.options.btnNex;
        this.btnPre = this.options.btnPre;
        this.visibleCount = this.options.visibleCount;

        this.direction = bVertical ? 'top' : 'left';
        //方向
        this._wh = bVertical ? 'height' : 'width';

        //样式设置
        var p = this._container.css('position');
        p == 'relative' || p == 'absolute' || (this._container.css('position', 'relative'));
        this._container.css({'overflow':'hidden'});
        this._slider.css('position', 'absolute');

        // change一次移动距离,在没有值的情况下 取默认容器的值；
        this.change = this.options.change != 0 ? this.options.change : this._container[ bVertical ? 'offsetHeight' : 'offsetWidth'];
        this._slider.css(this._wh, this.change * this._count + 'px');

        var self = this;
        this.btnNex && this.btnNex.bind('click', function() {
            self.Next();
            return false;
        });

        this.btnPre && this.btnPre.bind('click', function() {
            self.Previous();
            return false;
        });
        this.auto && this.Run();
    };

    Sliders.prototype = {
        //设置默认属性
        SetOptions : function(options) {
            this.options = {//默认值
                vertical : true,
                auto : false,
                change : 0,
                duration : 30, //滑动持续时间,帧数
                time : 10, //滑动延时，帧数间隔
                pause : 5000, //停顿时间(auto为true时有效)
                tween : 0, //tween算子
                btnNex : null,
                btnPre : null,
                visibleCount : 1, //容器里面可见滑动对象个数；
                onStart : function() {
                }//开始转换时执行
            };
            jQuery.extend(this.options, options || {});
        },
        getTween : function() {
            switch(this.options.tween) {
                case 0:
                    return Tween.Quart.easeOut;
                    break;
                case 1:
                    return Tween.Back.easeOut;
                    break;
                default:
                    return Tween.Quart.easeOut
            }
        },
        //开始切换
        Run : function(index) {
            index == undefined && ( index = this.index);

            index < 0 && ( index = this._count - this.visibleCount) || (index > this._count - this.visibleCount) && ( index = 0);

            //设置参数
            var self = this;
            this._target = -Math.abs(this.change) * (this.index = index);
            //目标位置；
            this._t = 0;
            this._b = parseInt(this._slider.position()[this.options.vertical ? 'top' : 'left']);
            //当前位置；
            this._c = this._target - this._b;
            //需要移动的距离；
            this.onStart();
            this.Move();

        },
        //移动
        Move : function() {
            clearTimeout(this._timer);

            if (this._c && this._t < this.duration) {
                this.MoveTo(Math.round(this.Tween(this._t++, this._b, this._c, this.duration)));
                this._timer = setTimeout(Bind(this, this.Move), this.time);
            } else {
                this.MoveTo(this._target);
                //移动到指定位置，防止动画产生的误差；
                this.auto && (this._timer = setTimeout(Bind(this, this.Next), this.pause));
            }
        },
        //移动到
        MoveTo : function(i) {
            this._slider.css(this.direction, i + 'px');

        },
        //下一个
        Next : function() {
            this.Run(++this.index);
        },
        //上一个
        Previous : function() {
            this.Run(--this.index);
        },
        //停止
        Stop : function() {
            clearTimeout(this._timer);
            this.MoveTo(this._target);
        }
    };

    window.Sliders = Sliders;
})(window);