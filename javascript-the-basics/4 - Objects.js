"use strict";
const { log } = console;

//#: JS objects are basically JSON! Actually... they inspired JSON!
//: A Object is a dynamic collection of properties
const test = {
    key1 : "value",
    key2 : 10
}
//: Get
log( test.key1 );
log( test["key2"] );

//: Set
test.key1 = "new-value";
test["key2"] = 100;
log( test );

//: Delete
delete test.key1;
delete test["key2"];
log( test );

//#: Many possible ways to init properties!
const name = "scott", lastName = "tiger";

const freak = {
    "cm": 100, // JSON strict way
    foo : a => a*a,
    //: New in ES6
    ["key3".toUpperCase()] : "VALUE", // Dynamic way
    lastName, // Property assignement with shortcut
    name : name
};

//#: A Property is a named Collection of attributes
Object.defineProperty(freak, "inch", {
    enumerable: true,
    get: function(){
        return this.cm / 2.54;
    },
    set: function(value){
        this.cm = value * 2.54
    }
});
freak.inch = 10;
log( `${freak.cm}cm = ${freak.inch}inch` );

//: More?
Object.defineProperty(freak, "nope", {
    value: "NOPE", // Initial value
    writable: false, // Allow value change
    enumerable: false, // Show property during enumeration of keys
    configurable: false, // Prevents delete
    // get / set // Override getter/setter
});

log( Object.keys(freak) );//for(let key in freak) log(key);

freak.nope = "PLEASE!";
delete freak.nope;
//: Exception in "use strict" mode
log(freak.nope);