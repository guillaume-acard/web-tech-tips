const { log } = console;

//#: Style is not a matter of taste in JS!!!
//: Works great!
function test_theGoodWay(){
    return {
        ok : false
	};
}
log(test_theGoodWay());

//: whats gonna happen? Another reason people hate JS...
function test_theBadWay(){
    return 					
	{						
        ok : false			
	};
}
log(test_theBadWay());
//: WTF?