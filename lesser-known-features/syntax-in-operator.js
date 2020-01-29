const user = {
    first: "Scott",
    last: "Tiger"
};

// "in" Key word
if("first" in user){
    console.log("Yes user has first!");
}

console.log("toString" in {});

for(const key of ["first", "last", "middle"]){
    if(key in user){
        console.log(`user has ${key}`);
    }
}