const { log } = console;

//#: Functions : The many ways to create one. 
// ES5
let hello = function() { log("hello") };
hello();

hello2();
function hello2(){ log("Hello! Wait what?") };

//: Confusing stuff - Reason #1502 People hate JS
// helloYou();
var helloMe = function helloYou(){ log("Hello me!") };
helloMe();
// helloYou(); => throws exeption

// Sell Calling methods
(function() { 
    log("Leave me alone!")
})();

//: ES6 brought Lambda! Pfeeewwww...
let helloES6 = () => log("hello");