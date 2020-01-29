const { ArcherCharacters } = require("./data");

// Custom iterator - Standard
const fullNameIterator = {};
fullNameIterator[Symbol.iterator] = function(){
    let index = -1;
    return {
        next: () => {
            index++;
            if(index < ArcherCharacters.length){
                const { first, last } = ArcherCharacters[index];
                return { value: `${first} ${last}`, done: false }
            }
            return { done: true };
        }
    }
}

for(const fullName of fullNameIterator){
    console.log(fullName);
}

// Iterator - Using Generators
const getFullNames = function* (characters){
    for(const { first, last } of characters){
        yield `${first} ${last}`;
    }
}
for(const fullName of getFullNames(ArcherCharacters)){
    console.log(fullName);
}
// Memory efficient and potentially faster if break 

// Generators in depth
function* stateMachineRunner(){
    let state = "→";
    let steps = [];
    while(state !== "stop"){
        steps.push(state);
        const newState = yield steps;
        state = newState || state;
    }
}

const coyote = stateMachineRunner();
console.log(coyote.next());
console.log(coyote.next());
console.log(coyote.next("↓"));
console.log(coyote.next());
console.log(coyote.next("←"));
console.log(coyote.next());
console.log(coyote.next("stop"));

/////////////////////////////////////////////////////////////////////////
// Async - under the hood
const bar = (source) => {
    console.log(`Bar called by: ${source}`);
    return Promise.resolve(`${source}: BAR!!!`);
}

async function foo(){
    let result = await bar("Async - 1");
    result += await bar("Async - 2");
    return result;
}

void async function(){
    const result = await foo();
    console.log(result);
}();

// Using gnerators
function* genFoo(){
    console.log("gen#1")
    let result = yield bar("Generator - 1");
    console.log("gen#2")
    result += yield bar("Generator - 2");
    console.log("gen#3")
    return result;
}

// Async With generators
function asyncRunner(generatorFunc){
    const itr = generatorFunc();

    function run(arg){
        const result = itr.next(arg);
        if(result.done){
            return result.value;
        }else{
            return Promise.resolve(result.value).then(run);
        }
    }
    return run();
}

asyncRunner(genFoo)
    .then( result => console.log(result));


    
// const test = async () => {
//     for await(const lien of []){
//         console.log(lien);
//     }
// }