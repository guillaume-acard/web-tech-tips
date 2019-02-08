//#: Where does this all come from?

console.log("Hello");
parseInt("10");
Number(10);
Array(10);
const obj = JSON.parse('{ "name": "scott" }');

//: Meet the 'global' variable => window in a web-browser

console.log(global);

global.parseFix = fix => fix.split("|").reduce( (msg, item) => {
    const keyVal = item.split("=");
    msg[keyVal[0]] = keyVal[1];
    return msg;
}, {});

const order = parseFix("35=D|44=100|38=5");
console.log(order);