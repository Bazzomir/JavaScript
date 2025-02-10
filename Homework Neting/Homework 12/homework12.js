// 1. Accessing private properties
class Shape {
    #r;

    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.#r = r;
    }

    getR() {
        console.log("Accessing private area:", this.#r);
        return this.#r;
    }
}

let square = new Shape(5, 3, 4);

// 2. Access public fields
console.log(square.x);
console.log(square.y);

// 3. Access private field through the getter
let privateValue = square.getR();
console.log(privateValue);