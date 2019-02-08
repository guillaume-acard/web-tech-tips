const { log } = console;

//#: NEVER use == unless you hate whoever is going to maintain your code
//: Another reason people hate JS :)
log( 0 == "" );
log( 0 == "0" );
log( "" == "0" );
log( true == "1");
log( true == "001");
log( false == "0" );
log( false == "000" );
log( false == 0 );
log( false == undefined );
log( false == null ); // Avoid using null - prefer undefined
log( null == undefined );
log( " \t\r\n "	== 0 );
log( NaN == NaN);

//#: Still not convinced? http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
//: So ALWAYS use '===' ok?

log( "" === "0" );
log( 0 === "" );
log( 0 === "0" );
log( true === "1");
log( true === "001");
log( false === "0" );
log( false === 0 );
log( false === undefined );
log( false === null );
log( null === undefined );
log( " \t\r\n "	=== 0 );
log( NaN === NaN); // Shit... here too...

// For reference: http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6
