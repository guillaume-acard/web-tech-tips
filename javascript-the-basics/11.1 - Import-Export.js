console.log("Math Initialized!");

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

//: NodeJS uses module.exports (CommonJS)
module.exports = {
    add,
    sub,
    mult : (a, b) => a * b
}

module.exports.div = (a, b) => a / b;