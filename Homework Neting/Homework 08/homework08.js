// 1. Replace the first character in a string using replace() and charAt() string methods
let decimalNumbers = [0, 1, 5, 4, 7, 6, 3, 2];
let binaryString = "0000";
let replacedBinary = binaryString.replace(binaryString.charAt(0), decimalNumbers[0]);
console.log(replacedBinary);

// Decimal number to Binary array
const decimalToBinaryArray = (decimalArray) => {
    const binaryArray = [];

    decimalArray.forEach(num => {
        binaryArray.push(num.toString(2));
    });

    return binaryArray;
}

const decimalNumbers = [0, 1, 5, 4, 7, 6, 3, 2];
const binaryNumbers = decimalToBinaryArray(decimalNumbers);
console.log(binaryNumbers);

