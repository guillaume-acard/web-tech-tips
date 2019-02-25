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
 
//: Special argument: this
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