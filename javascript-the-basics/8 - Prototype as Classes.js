const { log } = console;

//#: Forget Classes! Js has prototypes! A superior design. 
//: You can simulate classes with Prototypes but you can't do the reverse.
// Classes
let Shape = function (x, y) {
    this.x = x;
    this.y = y;
    log(this);
};
Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};

const a = new Shape(1, 2);
a.move(10, 20);
log(a);

const b = Shape(3, 4); // convention is first letter UpperCase for functionthatneeds to be used with new
log(b);
// b.move(5, 10); // wont work: but why?

//: What new really does
function new_(func, ...arguments){
    const that = Object.create(func.prototype);
    func.apply(that, arguments);
    return that;
}
const a_ = new_(Shape, 1, 2);

// #: ES6: Ok... now you have classes but use them wisely 
class Square extends Shape{
    constructor(x, y, width, height){
        super(x, y);
        this.width = width;
        this.height = height;
    }

    getSurface(){
        return this.width * this.height;
    }
}
const box = new Square(2, 4, 5, 10);
log( box.getSurface() );

box.move(3, 3);
log( `${box.x}, ${box.y}` );

//: Syntax sugar: What Class its really doing
const Square_ = function(x, y, width, height){
    Shape.apply(this, [x, y]);
    this.width = width;
    this.height = height;
}
Square_.prototype = Object.create(Shape.prototype);
Square_.prototype.constructor = Square_;
Square_.prototype.getSurface = function(){
    return this.width + this.height;
}

const box_ = new_(Square_, 2, 4, 5, 10);
log(box.getSurface());

//#: Great for compatibility => Concept of Polyfill libraries, eg: Babel-Polyfill
if(typeof Array.prototype.first !== "function") {
    Array.prototype.first = function(){
        return this.length > 0? this[0] : null;
    }
}
log( [5, 8, 9].first() );