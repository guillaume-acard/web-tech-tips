const helloLoop = new Function("name", "x", `
    for(let i=0;i<x;i++){
        console.log("Hello "+name);
    }
`)

helloLoop("Scott", 5);

const helloLoop2 = (name, x) => {
    for(let i=0;i<x;i++){
        console.log("Hello "+name);
    }
}

console.log(helloLoop2.toString());

const funcContent = func => {
    const content = func.toString();
    return content.slice(content.indexOf("{")+1, content.lastIndexOf("}"));
}

console.log(funcContent(helloLoop2));

const helloLoop3 = new Function("name", "x", funcContent(helloLoop2));
helloLoop3("Tiger", 5);


console.log("=====");

const data = new Date();
console.log(data.constructor.name);
console.log(data.constructor.constructor.name);
console.log(helloLoop2.constructor.name);