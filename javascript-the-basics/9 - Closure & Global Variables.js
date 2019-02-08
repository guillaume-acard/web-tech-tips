const { log } = console;
//#: Closure issue 
let showLater = [];
for(var i = 0; i < 10; i += 1){
	showLater.push({
		display : () => log(i)
	});
}
showLater.forEach( item => item.display());


//#: Global variables - The global variable issue
//: The bad way
let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
const dayName = n => days[n];

log( dayName(4) ); 
days = 'Haha!';         // Meanwhile, in some other file or later in the code...
log( dayName(4) );      // "!" => note how the array is now a string and it still works.


//: The ok but slow way
const dayName2 = n => {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    return days[n];
};
log( dayName2(4) );

//: The good way
const dayName3 = (() => {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    return n => days[n];
})();
log( dayName3(4) );

//: One of the best part of JavaScript! It's key to understand the closure concept
