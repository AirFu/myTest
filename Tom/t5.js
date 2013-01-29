var partialAny = (function(aps) {

    // 该函数是你们自执行函数表达式的结果，并且赋值给了partialAny变量
    function func(fn) {
        console.log('arguments1:', arguments);
        var argsOrig = aps.call(arguments, 1);
        return function() {

            var args = [], argsPartial = aps.call(arguments), i = 0;
            console.log('arguments2:', argsPartial);
            // 变量所有的原始参数集，
            // 如果参数是partialAny._ 占位符，则使用下一个函数参数对应的值
            // 否则使用原始参数里的值
            for (; i < argsOrig.length; i++) {
                args[i] = argsOrig[i] === func._ ? argsPartial.shift() : argsOrig[i];
            }

            // 如果有任何多余的参数，则添加到尾部
            return fn.apply(this, args.concat(argsPartial));
        };
    }

    // 用于占位符设置
    func._ = {};

    return func;
})(Array.prototype.slice);

// 定义处理函数
function hex(r, g, b) {
    return '#' + r + g + b;
}

//定义偏函数, 将hex的第一个参数r作为不变的参数值ff
//var redMax = partialAny(hex, 'ff', partialAny._, partialAny._);

// 新函数redMax的调用方式如下，只需要传入2个参数了：
//console.log('Color=>',redMax('11', '22')); // "#ff1122"

/*******************************************/
/*
var __ = partialAny._;

var greenMax = partialAny(hex, __, 'ff');
console.log(greenMax('33', '44'));

var blueMax = partialAny(hex, __, __, 'ff');
console.log(blueMax('55', '66'));

var magentaMax = partialAny(hex, 'ff', __, 'ff');
console.log(magentaMax('77')); */

/**
 *
 * @param {Object} func 第一个参数为要应用的function，
 * @param {Object} minArgs 第二个参数是需要传入的最少参数个数
 */
function curry(func, minArgs) {
    if (minArgs == undefined) {
        minArgs = 1;
    }
console.log('minArgs:',minArgs);
    function funcWithArgsFrozen(frozenargs) {
        return function() {
            // 优化处理，如果调用时没有参数，返回该函数本身
            var args = Array.prototype.slice.call(arguments);
            var newArgs = frozenargs.concat(args);
            console.log('args:', args, newArgs);
            
            if (newArgs.length >= minArgs) {
                return func.apply(this, newArgs);
            } else {
                return funcWithArgsFrozen(newArgs);
            }
        };
    }

    return funcWithArgsFrozen([]);
}

var plus = curry(function() {
    var result = 0;
    for (var i = 0; i < arguments.length; ++i) {
        result += arguments[i];
    }
    return result;
}, 2);
console.log(plus(3)(2)) // 正常调用
//console.log(plus(3)) // 偏应用，返回一个函数（返回值为3+参数值）
// console.log(plus(3)(2) )// 完整应用（返回5）
// console.log(plus()(3)()()(2) )// 返回 5
// console.log(plus(3, 2, 4, 5)) // 可以接收多个参数
// console.log(plus(3)(2, 3, 5)) // 同理

function currying(fn) {
    var args = [];
    for  (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    return function() {
        for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        if (args.length >= fn.length) {
            return fn.apply(window, args);
        }
        else {
            return curry2.apply(window, [fn].concat(args));
        }
    }
}
function add(x, y) {
    return x + y;
}

//console.log('currying:' + currying(add)(2,3));
// console.log('curry(add, 2)(3) == ' + curry(add, 2)(3));
// console.log('curry(add, 2, 3)() == ' + curry(add, 2, 3)());