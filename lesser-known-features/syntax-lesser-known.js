#! Did you know this would work?
// "use strict";
const user = {
    first: "Scott",
    last: "Tiger"
};

// Parenthethis or opational 
let now = new Date();
console.log(now);

now = new Date
console.log(now);

// Force debuggers
debugger;
// With statement
with(user){
    const fullName = first + " "+ last;
    console.log(`Hello ${fullName}!`);
}

// The use of the with statement is generally discouraged, as it was deprecated. 
// It is completely forbidden in strict mode.
// Turns out, with blocks adds some performance and security problems in the language. Bummer!

// reserved key words
// Always
const enum = "Nope...";
// Strict mode
const interface = "Nope...";
const implements = "Nope...";
const package = "Nope...";
const private = "Nope...";
const public = "Nope...";
const static = "Nope...";
const protected = "Nope...";