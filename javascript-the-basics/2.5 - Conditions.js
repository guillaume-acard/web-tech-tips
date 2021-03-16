const { log } = console;

//: If statement
let a = "hello";
if(a) {
    log("hello!");
}
// What its actually doing
if(a === true || a !== undefined || a !== null || a !== 0 || a !== -0 || a !== NaN) {
    log("hello again :)");
}

//: Switch case
const getValueCategory = (value) => {
    switch (true) {
        case value === "": return "Empty";
        case /[0-9]+/.test(value) : return "Number";
        case value === "42": return "Answer to the Ultimate Question of Life, the Universe and Everything";
        case value.length > 100: return "Boring text";
        default: return "Meh..."
    }
}

//: If exist return else...
const user = {
    first: "Scott",
    last: null
};

log(user.first ?? "Kirk");
log(user.last ?? "Tiger");

//: Ternary 
log(user.last ? user.last : user.first);

//: && || operator
log(user.first && user.last); // Very used in ReactJS
log(user.last && user.first);

log(user.last || user.first);
log(user.first || user.last);
