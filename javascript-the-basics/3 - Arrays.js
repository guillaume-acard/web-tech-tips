const { log } = console;

// #: These aren't the arrays you're looking for...
let simpson = ["Marge", "Bart", "Lisa"];
log( typeof(simpson) );

// Add to the start & end of list
simpson.unshift("Homer");
simpson.push("Krusty");
log( simpson );
  
// Access specific index
log( simpson[2] );
simpson.index = 2;
log( simpson[simpson.index] );
 
// Be carfull with remove
delete simpson[1];
log( simpson );
 
// The good way to remove
simpson.splice(1, 1);
log( simpson );
 
// Sort methods
log( simpson.sort() );
// Sort method beware...
const numbers = [4, 10, 1, 42];
log( numbers.sort() );

// Lets screw things up....
simpson.length = 20;
simpson[10] = "Marge";
log(simpson);


//: ES6 functional style
// Functional style
log( simpson.map( x => "#" + x ).findIndex( x => x === "#Marge") );