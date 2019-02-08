//#: SILENT ERROR!!!!
function test_theBadWay(){
	return; 					//; semicolon insertion
	{						// block
		ok : false			//; semicolon insertion + thinks its a label
	}; 						// empty statement...
}