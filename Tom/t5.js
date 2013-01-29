var partialAny = (function(aps) {

    // �ú�����������ִ�к������ʽ�Ľ�������Ҹ�ֵ����partialAny����
    function func(fn) {
        console.log('arguments1:', arguments);
        var argsOrig = aps.call(arguments, 1);
        return function() {

            var args = [], argsPartial = aps.call(arguments), i = 0;
            console.log('arguments2:', argsPartial);
            // �������е�ԭʼ��������
            // ���������partialAny._ ռλ������ʹ����һ������������Ӧ��ֵ
            // ����ʹ��ԭʼ�������ֵ
            for (; i < argsOrig.length; i++) {
                args[i] = argsOrig[i] === func._ ? argsPartial.shift() : argsOrig[i];
            }

            // ������κζ���Ĳ���������ӵ�β��
            return fn.apply(this, args.concat(argsPartial));
        };
    }

    // ����ռλ������
    func._ = {};

    return func;
})(Array.prototype.slice);

// ���崦����
function hex(r, g, b) {
    return '#' + r + g + b;
}

//����ƫ����, ��hex�ĵ�һ������r��Ϊ����Ĳ���ֵff
//var redMax = partialAny(hex, 'ff', partialAny._, partialAny._);

// �º���redMax�ĵ��÷�ʽ���£�ֻ��Ҫ����2�������ˣ�
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
 * @param {Object} func ��һ������ΪҪӦ�õ�function��
 * @param {Object} minArgs �ڶ�����������Ҫ��������ٲ�������
 */
function curry(func, minArgs) {
    if (minArgs == undefined) {
        minArgs = 1;
    }
console.log('minArgs:',minArgs);
    function funcWithArgsFrozen(frozenargs) {
        return function() {
            // �Ż������������ʱû�в��������ظú�������
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
console.log(plus(3)(2)) // ��������
//console.log(plus(3)) // ƫӦ�ã�����һ������������ֵΪ3+����ֵ��
// console.log(plus(3)(2) )// ����Ӧ�ã�����5��
// console.log(plus()(3)()()(2) )// ���� 5
// console.log(plus(3, 2, 4, 5)) // ���Խ��ն������
// console.log(plus(3)(2, 3, 5)) // ͬ��

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