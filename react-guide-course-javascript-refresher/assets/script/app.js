// // lesson 1
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
//-------------------------------------------

// // lesson 2
// const user = {
//     name: "Max",
//     age: 34,
// };

// const user = {
//     name: "Max",
//     age: 34,
//     greet() {
//         console.log("Hello!");
//         console.log(this.age);
//     },
// };

// console.log(user.name);
// user.greet();

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log("Hi!");
//     }
// }

// const user1 = new User("Manuel", 34);
// console.log(user1);
// user1.greet();
//-------------------------------------------

// // lesson 3
// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

// // const index = hobbies.findIndex((item) => {
// //   return item === "Sports";
// // });
// const index = hobbies.findIndex((item) => item === "Sports"); //isto kako pogore, samo najkratka verzija
// console.log(index);

// const editedHobbies = hobbies.map((item) => item + "!");
// const editedHobbies2 = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies, editedHobbies2);
//-------------------------------------------

// // lesson 4
//  const userNameData = ["Max", "Schwarzmuller"];
// // const fristName = userNameData[0];
// // const lastName = userNameData[1];
// const [fristName, lastName] = ["Max", "Schwarzmuller", 34];
// console.log(fristName);
// console.log(lastName);
// // console.log(age);

// const { name: userName, age } = {
//   name: "Max",
//   age: 34,
// };
// console.log(userName, age);
// const name = user.name;
// const age = user.age;
//-------------------------------------------


// // lesson 5
// const newHobbies = ["Working"];
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = {
//   isAdmin: true,
//   ...user,
// };

// console.log(extendedUser);
//-------------------------------------------


// // lesson 6
// const password = prompt("Your password");
// if (password === "Hello") {
//   console.log("Hello works!");
// } else if (password === "hello") {
//   console.log("hello works.");
// } else {
//   console.log("Acces not granted");
// }

// for (const hobby of hobbies) {
//     console.log(hobby);
// }
//-------------------------------------------


// // lesson 7
// function handleTimeout() {
//     console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//     console.log("TImed out... again!");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//     console.log("More timing out...");
// }, 4000);

// function greeter(greetFn) {
//     greetFn();
// }

// greeter(() => console.log("Hi!"));
//-------------------------------------------


// // lesson 8
// function init() {
//     function greet() {
//         console.log('Hi!');
//     }

//     greet();
// }

// init();

// const init2 = () => {
//     const greet2 = () => {
//         console.log("Hi! 2");
//     }
//     greet2();
// }

// setTimeout(() => { init2() }, 4000);
//-------------------------------------------


// // lesson 9 - Notebook
// let colors = ["red", "green", "blue"];
// let lastColor = colors.pop();

// console.log(colors.pop(), "cela niza");
// console.log(lastColor, "posledna boja");

// let a = 5;
// let b = 3;
// let suma = () => {
//     return console.log(a >= b);
//     return console.log(a <= b);
//     return console.log(a !== b);
//     return console.log(a != b);
//     return console.log(a = !b);
//     return console.log(a == !b);
// };
// suma();

// let arr = [5, 4, 2, 1, 6, 0, 8, 3, 9];
// let array = arr.map((x) => x * 2);
// console.log(arr, array);
//-------------------------------------------


// // lesson 10 - Notebook: Destructuring
// // Destructuring Arrays
// const numbers = [10, 20, 30];
// const [first, second, third] = numbers;
// console.log(first);  // 10
// console.log(second); // 20
// console.log(third);  // 30

// // Skipping elements in arrays
// const numbers = [1, 2, 3, 4, 5];
// const [first, , third] = numbers;
// console.log(first); // 1
// console.log(third); // 3

// // Destructuring with remaining (...rest) elements
// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log(first);  // 10
// console.log(second); // 20
// console.log(rest);   // [30, 40, 50]

// // Destructuring of objects
// const person = {
//     name: "Alice",
//     age: 25,
//     city: "New York"
// };
// const { name, age, city } = person;
// console.log(name); // Alice
// console.log(age);  // 25
// console.log(city); // New York

// // Renaming values
// const person = {
//     fullName: "Bob Marley",
//     age: 36
// };
// const { fullName: name, age: years } = person;
// console.log(name);  // Bob Marley
// console.log(years); // 36

// // Default values ​​during Destructuring
// const person = { name: "Charlie" };
// const { name, age = 30 } = person;
// console.log(name); // Charlie
// console.log(age);  // 30 (бидејќи age не постои во `person`)

// Destructuring in functions
// function greet({ name, age }) {
//     return `Hello, ${name}! You are ${age} years old.`;
// }
// const user = { name: "David", age: 40 };
// console.log(greet(user)); // Hello, David! You are 40 years old.

// // Destructuring Nested Objects
// const user = {
//     name: "Eve",
//     address: {
//         city: "Paris",
//         country: "France"
//     }
// };
// const { address: { city, country } } = user;
// console.log(city);    // Paris
// console.log(country); // France

// // Destructuring in a for-of loop
// const users = [
//     { name: "Anna", age: 28 },
//     { name: "Brian", age: 32 }
// ];
// for (const { name, age } of users) {
//     console.log(`${name} is ${age} years old.`);
// }
//-------------------------------------------
