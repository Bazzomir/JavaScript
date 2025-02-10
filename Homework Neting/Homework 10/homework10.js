// 1. try-catch statement
let Apartment = function (numRooms, isReady, position, petFriendly) {
    try {
        if (typeof numRooms !== "number" || numRooms < 1) {
            throw new Error("Number of rooms must be a positive number");
        }
        this.numRooms = numRooms;
        this.isReady = isReady;
        this.position = position;
        this.petFriendly = petFriendly;

        // Corrected: Checking petFriendly correctly instead of using .filter()
        console.log("Pet friendly status: ", petFriendly ? "Yes" : "No");
    } catch (error) {
        console.log("Apartment creation status>> ", error);
    }
};

let apartments = [];
let invalidApartment = new Apartment(0, true, 1, true);
let apartmentOne = new Apartment(2, true, 1, true);
let apartmentTwo = new Apartment(2, false, 2, false);
let apartmentThree = new Apartment(4, true, 3, false);
let apartmentFour = new Apartment(3, true, 4, true);
let apartmentFive = new Apartment(3, true, 5, true);
apartments.push(apartmentOne);
apartments.push(apartmentTwo);
apartments.push(apartmentThree);
apartments.push(apartmentFour);
apartments.push(apartmentFive);

let appartmentsToRent = apartments.filter((stan) => stan.petFriendly == true);

// 2. specific error handling
function rentingApartments(stanoviArr, brNaSobi) {
    try {
        if (!Array.isArray(stanoviArr)) {
            throw new TypeError("The function expects an array of apartments");
        }
        stanoviArr
            .filter((stan) => stan.numRooms === brNaSobi)
            .map((stan) => stan.position)
            .forEach((brNaStan) => console.log(brNaStan));
    } catch (error) {
        console.log("Something went wrong: ", error.message);
    }
}

// Corrected: Passing a valid array instead of `0`
rentingApartments(apartments, 3);

/*
    Built-in Error Types: 
        Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError
*/