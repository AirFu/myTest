seajs.config({
  alias: {
    'jquery': 'http://hhfu.tudou.com/myTest/3rd/seajs/jquery.js'
  }
});

// seajs.use(['hello', 'jquery'], function(hello, $) {
  // hello.sayHello();
// });

define(function(require, exports, module){
    var $ = require('jquery');       
    var data = require('data');
    require('css.css');
     
    
    var btn = document.getElementById('btn');
    var btn = $('#btn');
    
    btn.bind('click', function(){
        require.async('hello', function(hello){
            hello.sayHello();
            
            $('.author').html(data.author);
            $('.blog a').attr('href', data.blog);     
            
        });
        
    });

    
});

