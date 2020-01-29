console.log(void 0);
console.log(void true);

// Before ES5 you could actually assign a value to "undefined" in most browsers. So defining the undefined...
// In those days, using void was a way to ensure you are actually returning the undefined value.

// Modern use-cases
(function(){
    console.log("Do this now!");
})();

void function(){
    console.log("Better way of doing this now!")
}();

// Side-Notes...
+function(){
    console.log("Heu....Better way of doing this now?")
}();

console.log(function(){
    return "Yeah... actually you just need to read the result of the function call...";
}());


// Can be used to remove possible lambda side effect
const htmlElement = { background: "white" };
const setBackground = color => htmlElement.background = color;

const onClick = () => void setBackground("red");
if(onClick()){
    console.log("Stop event bubbling!");
}
// => Can also be helpful in TypeScript 