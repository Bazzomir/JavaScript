// 1.Conditions, logical operators, string methods
function getBeer(bottleStatus) {
  if (bottleStatus === "empty") {
    return "This beer bottle is empty. Bring me a new one!";
  } else {
    return "Cheers! This beer bottle is still full.";
  }
}

let bottleStatus = "empty";
// let bottleStatus = "full";
console.log(getBeer(bottleStatus));


let bottleStatus = 0;
function emptyBottle() {
  console.log("This beer bottle is empty. Bring me a new one!");
}

function fullBottle() {
  console.log("Cheers! This beer bottle is still full.");
}

if (bottleStatus > 0) {
  emptyBottle();
} else {
  fullBottle();
};

if (bottleStatus < 1) {
  emptyBottle();
} else {
  fullBottle();
}

/***********************************************************************/

var banana = (banana != "vegetable");
console.log(banana);
console.log(typeof banana);

var x = "string";
var y = 7;
console.log(typeof x)
console.log(typeof y)

let a = 5;
let b = 18;
console.log(a && b);
console.log(a || b);
console.log(b || a);


function proverigoBrojot(num1, num2) {
  if (num1 > 0 && num2 > 0) {
    return "Dvata broja se negativni";
  } else if (num1 < 0 || num2 < 0) {
    return "Edniot broj e negativen";
  } else {
    return "Brojot e broj";
  }
}

let proverka1 = proverigoBrojot(5, 7);
console.log(proverka1);

let proverka2 = proverigoBrojot(-3, 8);
console.log(proverka2);

let proverka3 = proverigoBrojot(0, 10);
console.log(proverka3);

/***********************************************************************/

let name = "Anastasija Anastasijovska";
console.log(name.charAt(0));
console.log(name.charAt(17));

/***********************************************************************/

let zbor1 = "Blagoj";
let zbor2 = "Jovanovski";
let zbor3 = "Zdravo";
let zbor4 = "G-dine";
let zbirOdZborovi = zbor3 + " " + zbor4;
console.log(zbirOdZborovi);

let imePrezime = zbor1 + " " + zbor2;
let rechenica = zbor3 + " " + zbor4 + " " + imePrezime;
console.log(rechenica);

let toj = zbor4 + " " + zbor1 + " " + zbor2;
let formalnaRechenica = zbor3.concat("," + " " + toj);
console.log(formalnaRechenica);


let zborBroj = "3";
let broj = 3;
let zbirOdZbrorBroj = zborBroj + 5 - 1;
console.log(zbirOdZbrorBroj);

let zbirOdBroj = broj - 1;
console.log(zbirOdBroj);

/***********************************************************************/

var x = 10 > 5;
console.log(typeof x);

if (x) {
  console.log("The condition is true!");
} else {
  console.log("Try to set a false logical expression");
}