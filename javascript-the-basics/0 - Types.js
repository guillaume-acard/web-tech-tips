const { log } = console;

//#: Simple types
//: One number to rule them all! (=Java double)
var int = Number(1);
var float = 3.1419; // Implicit => Number(3.1419)
log( typeof(int) );
log( typeof(float) );
log( Number.MAX_VALUE );
log( 0.1 + 0.2 === 0.3 ); // Common issue to all floating numbers
log( 1 / 0 );
log( 0 / 0 )
log( typeof(NaN) );
//: Numbers are objects
log( float.toFixed(2) );
log( + "25" ); // Convert string to int
log( + "5" + + "25" + + "10" ); // This can led to fun syntax...

//: Strings => no Chars
log( typeof( "hello" ) );
log( typeof( 'h' ) );
log( 'why?' == "why?"); // Both caracters can be used, but just use " else this wont work => 'Don't try this at home'
log("Multi line \
Second line"); // Be careful to extra spaces...
log( `Key=${float}` ); // Template notation

//: Bools
log( typeof(false) );

//: 2 Empty types
var obj = { key : null };

log( obj.scott === undefined );
log( typeof(null) );
log( typeof(undefined) );
