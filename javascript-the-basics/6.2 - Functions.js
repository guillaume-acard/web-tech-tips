const { log } = console;

//: ES Arguments: They do whatever you want them to do
const show = (a, b) => log(`${a} ${b}`);
show(1, 2, 3, 4); // More arguments? Don't care
show(1); // less arguments? Still don't care

//: Special argument: arguments
const sum = function(first) {
	let total = first;
	for(let i = 1; i < arguments.length; i += 1){ // Argument is always provided and gives the list of all arguments of the method.
		total += arguments[i];
	}
	return total;
};
 
log( sum(1, 2, 3) );
log( sum("one ", "two ", "three ", "four") );

// Only available for functions declared using "function" so be carefull with lambda...
const sumLambda = (first) => {
	let total = first;
	for(let i = 1; i < arguments.length; i += 1){ // Argument is always provided and gives the list of all arguments of the method.
		total += arguments[i];
	}
	return total;
}

log(sumLambda(1, 2, 3));
 
//: Special argument: this
global.state = "global-state";
const defaultFunctionThis = function() {
	log(`this=${this} state=${this.state}`);
}
defaultFunctionThis.prototype.state = "object-state";
// Lets call the functions now!
defaultFunctionThis();
new defaultFunctionThis();
// And with lambdas?
const lambdaFunctionThis = () => {
	this.state = "lamda-state";
	log(`this=${this} state=${this.state}`);
}
// lambdaFunctionThis.prototype.state = "lanbda-state" => error
lambdaFunctionThis();

const smiley = {
	state : ":)",
	showState : function(){
		log( this + " = " + this.state );
    }
};
smiley.showState();
 
// Context switch
let otherState = smiley.showState;
global.state = " LOL ";
otherState();
otherState = otherState.bind(smiley);
otherState();

//: Few other default properties
const doubleMe = (value) => {
	log(this.__proto__.toString());
	return value + value;
}

doulbeMe();