const { log } = console;

//#: ES5 - They will do whatever you want them to do.
//: One of the (many?) reasons people hated JS

var a = 10;
log( a );
 
a = "hello";
log( a );
 
a = [a, "world"];
log( a );
 
a = function(){ return a; };
log( a() );
log( a()()()() ); // Looper
 
b = "Haha, fuck it."; // Implicit declaration of "b"
log( b );
 
log( c );
var c = "done"; // Initialization done here but c was actually declared at the top.

// log( d ); // Whats gonna happen?

var scope = "outter";
if(true) {
    var scope = "inner";
    var hidden = "ha...";
    log( scope );
}
log( scope );
log( hidden );

// #: ES6 finally... Bye bye var!

let scopeES6 = "ES6 outter";
if(true) {
    let scopeES6 = "Finally it makes sense...";
    log( scopeES6 );
}
log( scopeES6 );

const Answer_to_the_Ultimate_Question_of_Life = 42;
Answer_to_the_Ultimate_Question_of_Life = "beer?"; // Throws a exception