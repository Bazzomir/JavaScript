// lesson 1
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

// lesson 2
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

// lesson 3
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

// lesson 4
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


// lesson 5
// const newHobbies = ["Working"];
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = {
//   isAdmin: true,
//   ...user,
// };

// console.log(extendedUser);
//-------------------------------------------


// lesson 6
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


// lesson 7
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



// lesson 8
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


// lesson 9 - Notebook
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


let arr = [5, 4, 2, 1, 6, 0, 8, 3, 9];
let array = arr.map((x) => x * 2);
console.log(arr, array);