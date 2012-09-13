seajs.config({
  alias: {
    'jquery': 'http://hhfu.tudouui.com/js/lib/jquery-1.7.2.js'
  }
});

// seajs.use(['hello', 'jquery'], function(hello, $) {
  // hello.sayHello();
// });

define(function(require, exports,module){
    var h = require('hello');
    
    h.sayHello();
    
    
});

