/***
 * Sandbox 
 */
function Sandbox() {
    // 将参数转为数组
    var args = Array.prototype.slice.call(arguments),
    // 最后一个参数为callback
        callback = args.pop(),
        // 除最后一个参数外，其它均为要选择的模块
        modules = (args[0] && typeof args[0] === "string") ? args : args[0];

    // 强制使用new操作符
    if (!(this instanceof Sandbox)) {
        return new Sandbox(modules, callback);
    }

    // 添加属性
    this.a = 1;
    this.b = 2;

    // 向this对象上需想添加模块
    // 如果没有模块或传入的参数为 "*" ，则以为着传入所有模块
    if (!modules || modules == '*') {
        modules = [];
        for (i in Sandbox.modules) {
            if (Sandbox.modules.hasOwnProperty(i)) {
                modules.push(i);
            }
        }
    }

    // 初始化需要的模块
    for (var i = 0, l = modules.length; i < l; i += 1) {
        Sandbox.modules[modules[i]](this);
    }

    // 调用 callback
    callback(this);
}

// 默认添加原型对象
Sandbox.prototype = {
    name: "My Application",
    version: "1.0",
    getName: function () {
        return this.name;
    }
};

Sandbox.modules = {};
//dom
Sandbox.modules.dom = function (box) {
    box.getElement = function () {
    };
    box.getStyle = function () {
    };
    box.foo = "bar";
};

//event;
Sandbox.modules.event = function (box) {
    // access to the Sandbox prototype if needed:
    // box.constructor.prototype.m = "mmm";
    box.attachEvent = function () {
    };
    box.detachEvent = function () {
    };
};
//ajax;
Sandbox.modules.ajax = function (box) {
    box.makeRequest = function () {
    };
    box.getResponse = function () {
    };
};



// 调用方式
Sandbox(['ajax', 'event'], function (box) {
    console.log(typeof (box.foo), box);
    // 没有选择dom，所以box.foo不存在
});

Sandbox('ajax', 'dom', function (box) {
    console.log(typeof (box.attachEvent), box);
    // 没有选择event,所以event里定义的attachEvent也不存在
});

Sandbox('*', function (box) {
    console.log(box, box); // 上面定义的所有方法都可访问
});

//////////////////////静态成员//////////////////////////////////////////////////////


// 构造函数
var Gadget = function () {
};

// 公有静态方法
Gadget.isShiny = function () {
    return "you bet";
};

// 原型上添加的正常方法
Gadget.prototype.setPrice = function (price) {
    this.price = price;
};

// 调用静态方法
console.log(Gadget.isShiny()); // "you bet"

// 创建实例，然后调用方法
var iphone = new Gadget();
iphone.setPrice(500);

console.log(typeof Gadget.setPrice); // "undefined"
console.log(typeof iphone.isShiny); // "undefined"
Gadget.prototype.isShiny = Gadget.isShiny;
console.log(iphone.isShiny()); // "you bet"

/**
 *  私有静态成员
 */
var Gadget = (function () {
    // 静态变量/属性
    var counter = 0;

    // 闭包返回构造函数的新实现
    return function () {
        console.log(counter += 1);
    };
} ()); // 立即执行

var g1 = new Gadget(); // logs 1
var g2 = new Gadget(); // logs 2
var g3 = new Gadget(); // logs 3
