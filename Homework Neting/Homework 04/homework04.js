// 1.Conditions, logical operators, string methods & added prompt, confirm, alert dialogs
function getBeer(bottleStatus) {
    if (bottleStatus === "No") {
        return alert("Please bring me a new one!");
    } else {
        let confirmation = confirm("This beer bottle is still full. Do you want to cheers?");
        if (confirmation) {
            return alert("Cheers mate!");
        } else {
            return alert("This beer bottle is still full, but no cheers for now. Bring me a new one!");
        }
    }
}
var bottleStatus = prompt("Is your bottle of beer full ?! \n (No/Yes)");
getBeer(bottleStatus);

/***********************************************************************/

function checkТheNumber(num1, num2) {
    if (num1 >= 0 && num2 >= 0) {
        return "Both numbers are positive";
    } else if (num1 <= 0 || num2 <= 0) {
        return "One number is negative";
    } else {
        return "A number is a number";
    }
}

var input1 = parseFloat(prompt("Enter first number:"));
var input2 = parseFloat(prompt("Enter a second number:"));

if (!isNaN(input1) && !isNaN(input2)) {
    var result = checkТheNumber(input1, input2);
    alert(result);
} else {
    alert("Write validated numbers! Don't play!!! \n It's nicely written, enter a number!");
}

/***********************************************************************/

function welcome() {
    userName = prompt("Hello, please enter your name.");
    if (confirm("Are you at home?") == true) {
        alert("Welcome, " + userName + ". I will call you " + userName.substr(0, 1) + " for short ^_^");
    }
}
welcome();

/***********************************************************************/

function checkTemperature() {

    let temperature = prompt("What is the current temperature?");
    let heating = "on";

    if (temperature >= 20 && temperature <= 22) {
        alert("Optimal room comfort ^_^ \n No action needed.");
    } else if (temperature <= 19) {
        alert("Too cold, turn on heating -_- \n Heating: " + heating.toUpperCase());
    } else if (temperature >= 23) {
        heating = "оff";
        alert("Feels like summer ^‿^ \n Heating: " + heating.toUpperCase());
    } else {
        alert("Please enter a valid number!");
    }
}
checkTemperature();
