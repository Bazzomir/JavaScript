// 1.String concatenation
let boja = "zelena";
let nijansa = "maslinka";
let model = "formal dress";
let broj = 38;
let kompletFustan = boja + " " + nijansa + " " + broj + " " + model;
let fustan = kompletFustan;

console.log(fustan);
console.log("fustanot e", kompletFustan);
console.log("fustanot e " + "boja" + " " + boja + " " + nijansa + " model" + " " + model);

// 2.Variable scope
var portokal = "Orange";
var limon = "Lemon";

function fruit(){
    console.log("Portokal na angliski se pishuva: " + portokal);
    console.log("A limon se pishuva: " + limon);
}
fruit();

function fruitGerman(){
    console.log(portokal + " in german language is: " + portokal);
    console.log(limon + " in german language is: Zitrone");
}
fruitGerman();

var suggestion = "Let's get";
var mealType = "breakfast";
var place = "Mexican restaurant";

function suggestMeal() {
    console.log(suggestion + " " + mealType);
}
suggestMeal();

mealType = "lunch";

function suggestPlace() {
    mealType = "dinner";
    place = "Chinese restaurant";
    console.log(`${suggestion} ${mealType} from a ${place}`);
}
suggestMeal();
suggestPlace();
