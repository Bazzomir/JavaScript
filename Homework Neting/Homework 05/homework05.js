// 1.Ternary operator with numbers and strings
function checkNumber() {
    let numInput = parseFloat(prompt("Enter a number:"));
    if (!isNaN(numInput)) {
        let message = numInput > 0 ? "The number is positive" : numInput < 0 ? "The number is negative" : "Number is neutral AKA 0";
        alert(message);
    } else {
        alert("Please, enter a number.")
    }
}
checkNumber();

/***********************************************************************/

function bar() {
    let shoPiesh = prompt("Shopiesh").toLowerCase();
    let shankerot = shoPiesh === "nishto" ? "Chaoo" : "Izvolte, nazdravje"
    alert(shankerot);
}
bar();

//Without function
let shoPiesh = prompt("Shopiesh").toLowerCase();
let shankerot = shoPiesh === "nishto" ? "Chaoo" : "Izvolte, nazdravje"
alert(shankerot);

/***********************************************************************/

// 2.Use switch and if-else statements
let costumerAge = parseInt(prompt("What's your age?"));

function liquerAndTobaccoStore(age) {
    if (age >= 18) {
        return "You can buy tobacco and alcohol.";
    } else {
        return "Where are your parents, kid ?!";
    }
}

if (!isNaN(costumerAge)) {
    alert(liquerAndTobaccoStore(costumerAge));
} else {
    alert('I said: "What is your age ? \n That means you have to write your age with a number. \n Thank you ! (:');
}

/***********************************************************************/

let costumerAge = parseInt(prompt("What's your age?"));

function liquerAndTobaccoStore(age) {
    switch (true) {
        case age >= 18:
            return "You can buy tobacco and alcohol.";
        default:
            return "Where are your parents, kid ?!";
    }
}

switch (true) {
    case !isNaN(costumerAge):
        alert(liquerAndTobaccoStore(costumerAge));
        break;
    default:
        alert('I said: "What is your age ? \n That means you have to write your age with a number. \n Thank you ! (:');
        break;
}

/***********************************************************************/

// 3.Correct the code part1
let fullName = "mrs. Ana Velkovska";
let male = false;

if (fullName.charAt(2) == "s" && fullName.slice(0, 1) == "mr") {
    alert("female"); //name.slice(0,4) == "mrs."
} else if (fullName.slice(0, 1) == "mr" && fullName.charAt(2) == " ") {
    alert("It's fine");
    male = true; //not used
} else {
    alert("Bog da chuva");
}

// 4.Correct the code part2
let name2 = prompt("Your name:");
let firstThree = name2.slice(0, 2); //name.slice(0,3) starting index (inclusive), ending index (exclusive)
console.log(firstThree);
