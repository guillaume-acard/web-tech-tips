// What will be logged?
function case1(){
    console.log("Me first!");
    setTimeout(() => console.log("Second"), 0);
    setTimeout(() => console.log("Third"), 0);
    console.log("Me last :(");
}

function case2(){
    console.log("Me first!");
    setTimeout(() => console.log("Second"), 0);
    Promise.resolve().then(() => console.log("Third"));
    console.log("Me Last :(");
}

// case1();
case2();