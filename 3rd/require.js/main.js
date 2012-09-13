require.config({
    baseUrl: 'js'
});
 
require(['selector', 'event'], function($, E) {
console.log($,E);
});

require(['selector', 'event'], function(Y, E) {
console.log(Y,E);
});