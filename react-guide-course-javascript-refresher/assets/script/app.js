// import { export1, export2 as content2 } from "./util";
// import export3 from "./util";
// import * as until from "./util"; // kreira object od se

// console.log(export1 + " and " + content2 + "..." + export3);
// console.log(until);

// import { export1, export2 as content2 } from "./util";
// import export3 from "./util";
// import * as until from "./util"; // kreira object od se
// import greating from "./util";

// console.log(export1 + " and " + content2 + "..." + export3);
// console.log(until);
// console.log(greating);

const user = {
    name: "Max",
    age: 34,
    greet() {
        console.log("Hello!");
        console.log(this.age);
    },
};

console.log(user.name);
user.greet();

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hi!");
    }
}

const user1 = new User("Manuel", 34);
console.log(user1);
user1.greet();
