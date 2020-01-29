// 1 of the 7 Primitive types
// Quiz: What are the 7 types?
const activeAnim = Symbol("activeAnim");

const activeAnim2 = Symbol("activeAnim");

console.log(activeAnim === activeAnim2);

const myDivElement = { 
    type: "div",
    text: "Hello"
};

const handleFadeOutAnimation = element => {
    // Can be used as a object property key
    if(!element[activeAnim]){
        element.css = "great-fade-out-anim";
        element[activeAnim] = "fadeOut";
    }
}
const handleFadeInAnimation = element => {
    if(!element[activeAnim]){
        element.css = "great-fade-in-anim";
        element[activeAnim] = "fadeIn";
    }
}
handleFadeOutAnimation(myDivElement);
handleFadeInAnimation(myDivElement);

for(const key in myDivElement){
    console.log(`${key} = ${myDivElement[key]}`);
}

// Internal ID for your framework 
const id = Symbol("id");
const divElement = {
    type: "div",
    [id] : 42
}
const getElementColor = element => {
    const colors = { 42 : "red "};
    if(element[id]){
        return colors[element[id]];
    }
}
console.log(getElementColor(divElement));

// Can be used for a enum

const DIRECTIONS = {
    UP   : Symbol( "UP" ),
    DOWN : Symbol( "DOWN" ),
    LEFT : Symbol( "LEFT" ),
    RIGHT: Symbol( "RIGHT" )
};

// system Symbols
const Vector = function(x, y){
    return {
        x,
        y,
        [Symbol.toPrimitive]: function(hint){
            if(hint === "string"){
                return `[${this.x}, ${this.y}]`;
            }
            return Math.sqrt(this.x**2 + this.y**2);
        }
    }
}

const a = new Vector(5, 8);
const b = new Vector(10, 3);
const c = a + b;
console.log(c); 

// Other system symbold
const values = {};
values[Symbol.iterator] = () => ({ next: () => ({ done: true}) });

for(const x of values){
    console.log(x);
}

// JS can now introduce extension hooks via certain methods that you can put on objects (e.g. to define their iteration protocol) without risking them to clash with user names.