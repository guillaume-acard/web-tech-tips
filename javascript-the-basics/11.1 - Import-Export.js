console.log("Math Initialized!");

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

module.exports = {
    add,
    sub,
    mult : (a, b) => a * b
}

module.exports.div = (a, b) => a / b;