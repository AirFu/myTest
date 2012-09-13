var sliderTab = function(box, panel, args){      
    if(typeof box !== 'object'||  typeof panel !== 'object') return;
    
    var tweens = {
        Quart : {
            test: function(t, b, c , d){
                return (c - b)/ t + d
            },
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
    };
    
    var conf ={
        vertical : false, //false水平，true垂直；
        auto : true, //自动播放
        change : 1, //一次滑过的个数；
        pause : 5000, //停顿时间(auto为true时有效)
        animation : 0, //tween算子
        controlPanel: null,
        btnNex : null, //上一张
        btnPre : null, // 下一张
        visibleCount : 1, //容器里面可见滑动对象个数；
        onStart : function() {//开始转换时执行
        }
        
    };    
    $.extend(conf, args);
    
    
    var lis = panel.children();//
    var wh = conf.vertical ? 'height' : 'width';  
    var total = lis.length; // 总个数；    
    var timer = null; //定时器；
    var diff = $(lis[0])[wh]() * conf.change; //一次移动的距离
    var direction = conf.vertical ? 'scrollTop' : 'scrollLeft'; //方向；
    
    panel.css(wh, diff * total + 'px');

    //t: current time（当前时间）；
    //b: beginning value（初始值）；
    //c: change in value（变化量）；
    //d: duration（持续时间）。
    var d = 30, t = 0, b = 0, c = 0, index = 0;
    
       

    run();
    
    function run(i){        
        index = i || index;
        index < 0 && (index = total - 1) || index >= total && (index = 0);
        b =  box[direction]();
        c = diff + b;
        console.log(b, c);
        move();       
    }
   
    //移动
    function move () {
        clearTimeout(timer);
        
        timer = setTimeout(function(){             
            if(t < 30 ){
                moveTo(b + tweens.Quart.easeOut(t++, b, c, d));
                move();
            }else{
                t = 0;
                box[direction](diff);
                timer = setTimeout(function(){run()},  conf.pause);
            }
                
       }, 25);
    }
    
    function moveTo(x) {
        box[direction](x);
    }
    


           
    function slider(){ }
    
    slider.prototype = {
        next: function(){
            this.Run(++this.index);
        },
        prev: function(){
            this.Run(--this.index);
        },  
        run: run,
        stop: function(){            
            clearTimeout(timer);
            //this.MoveTo(this._target);
        }
    }
    
    var s = new slider();
    
    //s.run();
    if(conf.auto){ s.run()}
     
    
    return s;
}
