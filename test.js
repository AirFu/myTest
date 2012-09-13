var name = 'a';
(function() {
    
    var name = 'b';
    console.log(this, this.name);
    
})(); 