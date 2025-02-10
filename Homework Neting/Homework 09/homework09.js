// 1. found error: last two elements were incorrectly mapped as 6 instead of 2
let nums = [2, 6, 4, 4, 6, 2, 2]; //2 = 0010; 4 = 0100; 6 = 0110
let pins = [];

function myPin(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let pinInitial = "1000"; //fix: reset after each iteration
        if (numbers[i] % 2 === 0) {
            if (numbers[i] === 2) {
                pins[i] = "0010";
            } else {
                pinInitial = pinInitial.replace(pinInitial.charAt(1), "1");
                pinInitial = pinInitial.replace(pinInitial.charAt(0), "0");

                if (numbers[i] === 6) {
                    pinInitial = pinInitial.replace(pinInitial.charAt(0), "1");
                    pinInitial = pinInitial.replace(pinInitial.charAt(2), "1");
                    pinInitial = pinInitial.replace(pinInitial.charAt(0), "0");
                } else {
                    pinInitial = pinInitial.replace(pinInitial.charAt(2), "0");
                }
                pins[i] = pinInitial;
            }
            console.log(numbers[i], "is mapped as " + pins[i]);
        }
    }
    return "Binary list: " + pins;
}
console.log(myPin(nums));
//encountered errors: ReferenceError: not defined

// 2. Reverse function from binary to decimal using parseInt()
let oldPins = ["0010", "0110", "0100", "0100", "0110", "0010", "0010"];
let backToNums = [];

function myNumber(pins) {
    for (let i = 0; i < pins.length; i++) {
        backToNums[i] = parseInt(pins[i], 2);
    }
    return "Numbers list: " + backToNums;
}
console.log(myNumber(oldPins));