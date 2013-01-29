define(function(require, exports, module) {
  var $ = require('jquery');
  
    console.log(require.cache['http://hhfu.tudou.com/myTest/3rd/seajs/jquery.js']);
 
  exports.sayHello = function() {
    console.log('sayHello!', module);
  };
  
  
});