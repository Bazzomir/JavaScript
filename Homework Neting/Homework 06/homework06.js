// 1. Sum of all odd numbers from an array
var arrayOfNumbers = [1, 2, 3, 4, 5, 7, 9, 16, 15, 23, 26, 30, 37, 45, 58, 73, 96, 108];

function sumOddNumbers() {
    let sum = 0;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] % 2 !== 0) {
            sum += arrayOfNumbers[i];
        }
    }

    return sum;
}

console.log("The sum of all odd numbers is: " + sumOddNumbers());

// 2. Form a new array from strings with length <5
let typesOfTea = ["chamomile", "mint", "forest fruit", "thyme", "sobbing", "mountainous", "green", "black"];

function cupsOfTea() {
    let newTypesOfTea = [];
    let typesOfTeaIndex = 0;
    
    for (let i = 0; i < typesOfTea.length; i++) {
        // if (typesOfTea[i].length < 5) {
        if (typesOfTea[i].length <= 5) {
            newTypesOfTea[typesOfTeaIndex] = typesOfTea[i];
            typesOfTeaIndex++;
        } 
    }
    return newTypesOfTea;
}

console.log("Types of teas with less than 5: " + characterscupsOfTea(typesOfTea, 5));

// 3. Find strings which contain the string "aba"
let stringArray = ["baba", "kvaka", "zaba", "banana", "babajko", "teletabis", "babalak", "voda", "babar", "berikjet", "babachko"];

function findTheWords() {
    let wordsAba = [];
    
    for(let i = 0; i < stringArray.length; i++) {
        if(stringArray[i].includes("aba")) {
            wordsAba.push(stringArray[i]);
        }
    }
    return wordsAba;
}

console.log(findTheWords());

/***************************************************************/

let stringArray = ["baba", "zaba", "babajko", "babalak", "babar", "babachko"];

function findTheWords() {
    let wordsAba = [];
    
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].indexOf("aba") !== -1) {
            wordsAba.push(stringArray[i]);
        }
    }
    
    return wordsAba;
}

console.log(findTheWords());