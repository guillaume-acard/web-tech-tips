"use strict";
// Hacks
if(~"hello world".indexOf("world")){
    console.log("Yes, world has been found the hacky way");
}

if("hello world".indexOf("world") !== -1){
    console.log("The world has been found the old fashion way");
}

// ~~ same as Math.floor
console.log(~~4.7 === Math.floor(4.7));

console.log(42..toFixed(2));

// Bang! Bang! 
const user = {
    first: "Scott",
    last: ""
}
if(!!user.last){
    console.log(`Hello: ${user.last}`)
}

///// Weird

// Accidental Global variable assignement
void function(){
    const x = y = 42;
    console.log(`x=${x}`);
}();
console.log(`y=${y}`);
