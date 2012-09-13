$(function(){    
   
    window.Dragdrop = function(window) {
        var document = window.document,
            _event = function(e){ return e|| window.event},
            noDragElm = ['a', 'input', 'select'],
            getTarget =  function(event) {
                return event.target || event.srcElement;
            },
            
            getWindowSize = function() {
                var w = 0, h = 0;
                if ( typeof (window.innerWidth) == "number") {
                    w = window.innerWidth;
                    h = window.innerHeight
                } else {
                    w = document.documentElement.clientWidth || document.body.clientWidth;
                    h = document.documentElement.clientHeight || document.body.clientHeight;
                    
                }
                return {
                    width : w,
                    height : h
                };
            },
            
            getScroll = function() {
                var x = 0, y = 0;
                if ( typeof (window.pageYOffset) == "number") {
                    y = window.pageYOffset;
                    x = window.pageXOffset
                } else {
                    y = document.body.scrollTop ||  document.documentElement.scrollTop;
                    x = document.body.scrollLeft ||  document.documentElement.scrollLeft;
                }
                return {
                    left : x,
                    top : y
                }
            };
    
        
        return function(obj) {
            var conf = null, defaultConf, diffX, diffY,  minX, maxX, minY, maxY;
            
            function Config(obj) {
                //要拖动的对象
                this.target = obj.target;
                //可触发拖动的对象
                this.dragbar = obj.dragbar;
                this.dragable = obj.dragable || true;
                this.dragX = obj.dragX || true;
                this.dragY = obj.dragY || true;
                //拖动的范围
                this.area = obj.area || []; // minX, maxX, minY, maxY
                //回调函数
                this.callback = obj.callback;
            }
    
            function Dragdrop(obj) {
                if (!obj || !obj.target) {
                    alert('配置不正确或要拖动的对象不存在。');
                    return;
                }
                
                conf = new Config(obj);
                defaultConf = new Config(obj);
                
                (conf.dragbar || conf.target).bind('mousedown', mousedown);
            }
    
    
            Dragdrop.prototype = {
                dragAll : function() {
                    conf.dragX = true;
                    conf.dragY = true;
                },
                // [minX, maxX, minY, maxY]
                setArea : function(a) {
                    conf.area = a;
                },
                setDragbar : function(b) {
                    conf.dragbar = b;
                },
                setDragable : function(b) {
                    conf.dragable = b;
                },
                reSet : function() {
                    conf = new Config(defaultConf);
                    conf.target.css({
                        'top': '0',
                        'left': '0'
                    });
                },
                getDragX : function() {
                    return conf.dragX;
                },
                getDragY : function() {
                    return conf.dragY;
                }
            };
            
            function mousedown(e) {
                var node = getTarget(e).nodeName.toLowerCase(), _goon= true;
                e = _event(e);
                    
                $.each(noDragElm, function(k, item){
                    if(node === item){
                        _goon = false;
                        return false;
                    }
                });
                //默认的元素可以进行默认操作，去除拖动绑定；
                if(!_goon){
                    return;
                }
                
                var el = conf.target;
                el.css({
                    'position': 'absolute',
                    'cursor': 'move'
                });
                
                if (el.setCapture) {//IE
                    $.bind(el, "losecapture", mouseup);
                    el.setCapture();
                    e.cancelBubble = true;
                } else if (window.captureEvents) {//标准DOM
                    e.stopPropagation();
                    $.bind(window, "blur", mouseup);
                    e.preventDefault();
                }
                diffX = e.clientX -  el.offset().left;
                diffY = e.clientY -  el.offset().top;            
                minX = conf.area[0] || getScroll().left;
                maxX = conf.area[1] || getWindowSize().width + getScroll().left - el.width();
                minY = conf.area[2] || getScroll().top;
                maxY = conf.area[3] || getWindowSize().height + getScroll().top - el.height();
                
                var sl_top = document.body.scrollTop || document.documentElement.scrollTop;
                
                $(document).bind('mousemove', mousemove);
                $(document).bind('mouseup', mouseup);
                
                
            }
    
            function mousemove(e) {
                if (!conf.dragable){ return;}
                
                var el = conf.target, e = _event(e), moveX = e.clientX - diffX, moveY = e.clientY - diffY;
    
                moveX < minX && ( moveX = minX);            
                moveX > maxX && ( moveX = maxX);            
                moveY < minY && ( moveY = minY);            
                moveY > maxY && ( moveY = maxY);            
                              
                conf.dragX && el.css({'left': moveX + 'px'});
                conf.dragY && el.css({'top': moveY + 'px'});
                conf.callback && conf.callback.call(conf, {
                    moveX : moveX,
                    moveY : moveY
                });
                
            }
    
            function mouseup(e) {
                var el = conf.target;
                el.css({'cursor': 'default'});
                
                $(document).unbind('mousemove', mousemove);
                $(document).unbind('mouseup', mouseup);
                if (el.releaseCapture) {//IE
                    $.unbind(el, "losecapture", mouseup);
                    el.releaseCapture();
                }
                if (window.releaseEvents) {//标准DOM
                    $(window).unbind("blur", mouseup);
                }
            }
    
            return new Dragdrop(obj);
        }
    }(window);
 
});