console.time("print");
console.log("Detected %c5 warnings and %c10 errors", "color: orange", "color: red");
console.log("Detected %s5 warnings and %s10 errors%s", "\x1b[33m", "\x1b[31m", "\x1b[0m");
console.table([
    { a : "Test" }, 
    { a: "boood", te: 12, sub: "sdd"},
    { a: 5, te: 51, sub: "edzedz"}
])

console.timeEnd("print");