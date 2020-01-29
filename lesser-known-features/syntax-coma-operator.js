const { ArcherCharacters } = require("./data");

let x = 40;
let answerToLifeAndEverything = (x++, ++x, x);
console.log(answerToLifeAndEverything);


let keyBy = (items, key, valueKey) => items.reduce((result, next) => (result[next[key]] = next[valueKey]) && result, {});
console.log(keyBy(ArcherCharacters, "first", "seasons"));

keyBy = (items, key, valueKey) => items.reduce((result, next) => (result[next[key]] = next[valueKey], result), {});
console.log(keyBy(ArcherCharacters, "first", "seasons"));

const count = (items, key) => items.reduce((index, next) => (index[next[key]]? index[next[key]]++ : index[next[key]] = 1, index), {});
console.log(count(ArcherCharacters, "last"));

let counter = 0;
while(counter++, counter < 10){
    console.log(`Count=${counter}`);
}

const isPCR = jiraKey => (console.log(jiraKey), jiraKey.startsWith("PCR-"));
isPCR("PCR-455");