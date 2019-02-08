const log = x => console.log(JSON.stringify(x, null, 2));

// #: Tricky Stuff - Lets count words!
//: The common practice - the dangerous one
let wordCount = { };
 
let countWord = text => text.split(" ").forEach( word => {
	if(!wordCount[word]){
		wordCount[word] = 0;
	} 
	wordCount[word] += 1;
});
 
countWord("hello again and again");
log( wordCount );
 
countWord("hello constructor toString");
log( wordCount );
// log( wordCount + " meh?");

//: ES6 Way - Use a Map

wordCount = new Map();

countWord = text => text.split(" ").forEach( word => {
	if(!wordCount.get(word)){
		wordCount.set(word, 0);
	} 
	wordCount.set(word, wordCount.get(word)+1);
});

countWord("hello again and again");
countWord("hello constructor toString");
wordCount.forEach( (value, key) => log(`${key}=${value}`)); // Note: The unexpected order of value/key...
