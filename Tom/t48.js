/***
 * Sandbox 
 */
function Sandbox() {
    // ������תΪ����
    var args = Array.prototype.slice.call(arguments),
    // ���һ������Ϊcallback
        callback = args.pop(),
        // �����һ�������⣬������ΪҪѡ���ģ��
        modules = (args[0] && typeof args[0] === "string") ? args : args[0];

    // ǿ��ʹ��new������
    if (!(this instanceof Sandbox)) {
        return new Sandbox(modules, callback);
    }

    // �������
    this.a = 1;
    this.b = 2;

    // ��this�������������ģ��
    // ���û��ģ�����Ĳ���Ϊ "*" ������Ϊ�Ŵ�������ģ��
    if (!modules || modules == '*') {
        modules = [];
        for (i in Sandbox.modules) {
            if (Sandbox.modules.hasOwnProperty(i)) {
                modules.push(i);
            }
        }
    }

    // ��ʼ����Ҫ��ģ��
    for (var i = 0, l = modules.length; i < l; i += 1) {
        Sandbox.modules[modules[i]](this);
    }

    // ���� callback
    callback(this);
}

// Ĭ�����ԭ�Ͷ���
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



// ���÷�ʽ
Sandbox(['ajax', 'event'], function (box) {
    console.log(typeof (box.foo), box);
    // û��ѡ��dom������box.foo������
});

Sandbox('ajax', 'dom', function (box) {
    console.log(typeof (box.attachEvent), box);
    // û��ѡ��event,����event�ﶨ���attachEventҲ������
});

Sandbox('*', function (box) {
    console.log(box, box); // ���涨������з������ɷ���
});

//////////////////////��̬��Ա//////////////////////////////////////////////////////


// ���캯��
var Gadget = function () {
};

// ���о�̬����
Gadget.isShiny = function () {
    return "you bet";
};

// ԭ������ӵ���������
Gadget.prototype.setPrice = function (price) {
    this.price = price;
};

// ���þ�̬����
console.log(Gadget.isShiny()); // "you bet"

// ����ʵ����Ȼ����÷���
var iphone = new Gadget();
iphone.setPrice(500);

console.log(typeof Gadget.setPrice); // "undefined"
console.log(typeof iphone.isShiny); // "undefined"
Gadget.prototype.isShiny = Gadget.isShiny;
console.log(iphone.isShiny()); // "you bet"

/**
 *  ˽�о�̬��Ա
 */
var Gadget = (function () {
    // ��̬����/����
    var counter = 0;

    // �հ����ع��캯������ʵ��
    return function () {
        console.log(counter += 1);
    };
} ()); // ����ִ��

var g1 = new Gadget(); // logs 1
var g2 = new Gadget(); // logs 2
var g3 = new Gadget(); // logs 3
