// A class combines related data (properties) with related actions and behaviors (methods).
// Objects are instances of classes.
// Eg. Math object
// Write a class Vec that represents a vector in two-dimensional space. 
//It takes x and y parameters (numbers), which it should save to properties of the same name.
// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.
// Add a length method that computes the length of the vector — that is, the distance of the point (x, y) from the origin (0, 0).

let cursor;
function setup() {
    createCanvas(800,600);
    background(204);
    cursor = new Generator(width/2, height/2);
    pen = new Generator(width/4,height/4);
}

function draw() { 
    cursor.move(map(mouseX,0,width,0,10)); 
    cursor.display();
    pen.move(map(mouseX-1000,0,width,0,10)); 
    pen.display();
}

class Generator {

    constructor(currentX,currentY){
        this.x = currentX;
        this.y = currentY;
        this.diameter = 20;
    }

    move(speed) {
        this.x += random(-speed, speed); 
        this.y += random(-speed, speed);
    };
    
    display() {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }; 
}

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
  
    plus(other) {
        return new Vec(this.x + other.x, this.y + other.y);
    }
  
    minus(other) {
        return new Vec(this.x - other.x, this.y - other.y);
    }
  
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)).minus(new Vec(2, 3)));


console.log(new Vec(3, 4).length());
