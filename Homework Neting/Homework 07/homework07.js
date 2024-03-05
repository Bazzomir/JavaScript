// 1. Sum of all odd numbers from an array (array function)
const arrayOfNumbers = [1, 2, 3, 4, 5, 7, 9, 16, 15, 23, 26, 30, 37, 45, 58, 73, 96, 108];

const sumOddNumbers = () => {
  return arrayOfNumbers.reduce((sum, num) => {
    return num % 2 !== 0 ? sum + num : sum;
  }, 0);
};

console.log("The sum of all odd numbers is: " + sumOddNumbers());


// 2. Form a new array from strings with length <5 (array function)
let typesOfTea = ["chamomile", "mint", "forest fruit", "thyme", "sobbing", "mountainous", "green", "black"];

const cupsOfTea = (teaArray, maxLength) => {
  return teaArray.filter(tea => tea.length <= maxLength);
};

console.log("Types of teas with 5 or fewer characters: " + cupsOfTea(typesOfTea, 5));


//3. Find strings which contain the string "aba" (array function)
let stringArray = ["baba", "kvaka", "zaba", "banana", "babajko", "teletabis", "babalak", "voda", "babar", "berikjet", "babachko"];

const findTheWords = () => {
  return stringArray.filter(word => word.includes("aba"));
};

console.log(findTheWords());

/***************************************************************/

let stringArray = ["baba", "kvaka", "zaba", "banana", "babajko", "teletabis", "babalak", "voda", "babar", "berikjet", "babachko"];

const findTheWords = () => {
  return stringArray.filter(word => word.indexOf("aba") !== -1);
};

console.log(findTheWords());
