const { log } = console;

//#: ES6 - Syntax sugar
//: Array Destructuring
const numbers = [1, 2, 3, 4, 5];
let [a, , , b] = numbers;
log(`${a} ${b}`);

[b, a] = [a, b];
log(`${a} ${b}`);

// Also works with arrays
const sumFirstTwo = ([a, b]) => a + b;
log( sumFirstTwo(numbers) );

//: Object Destructuring
const user = { name: "scott", last : "tiger", active : false };
const { name, active, role = "admin" } = user;
log(`${name} ${active} ${role}`);

// Also works in functions
const fullName = ({ name, last }) => `${name} ${last}`;
log( fullName(user) );

// Array Spreads
const negativeNumbers = [-5, -4, -3, -2, -1];
const allNumbers = [-6, ...negativeNumbers, ...numbers, 6];
log( allNumbers );
log( ..."Hello" );

// Object Spreads
const activeUser = {
    ...user,
    active: true
}
log( activeUser );