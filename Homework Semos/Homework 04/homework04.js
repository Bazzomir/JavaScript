let x = 100;
console.log(x);
x += 5;
console.log(x);
x -= 6;
console.log(x);
x *= 2;
console.log(x);
x /= 6;
console.log(x);
x %= 3;
console.log(x);

x = 5;
y = 15;
z = 105;

if (x / 10 < 1 && x / 10 > -1) {
    console.log('the number', x, 'is one digit number');
} else if (x / 10 < 10 && x / 10 > -10) {
    console.log('the number', x, 'is two digit number');
} else {
    console.log('the number', x, 'is three or more digit number');
}

if (y / 10 < 1 && y / 10 > -1) {
    console.log('the number', y, 'is one digit number');
} else if (y / 10 < 10 && y / 10 > -10) {
    console.log('the number', y, 'is two digit number');
} else {
    console.log('the number', y, 'is three or more digit number');
}

if (z / 10 < 1 && z / 10 > -1) {
    console.log('the number', z, 'is one digit number');
} else if (z / 10 < 10 && z / 10 > -10) {
    console.log('the number', z, 'is two digit number');
} else {
    console.log('the number', z, 'is three or more digit number');
}

day = 'friday';

switch (day) {
    case 'sunday':
    case 'saturday':
        console.log(day, 'is weekend');
        break;
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(day, 'is a working day');
        break;
    default:
        console.log(day, 'is not a day');
}

let david = 80;
let vinoth = 77;
let divya = 88;
let ishitha = 95;
let thomas = 68;
let avggrade = (david + vinoth + divya + ishitha + thomas) / 5;

if (vinoth < 0 || vinoth > 100 || david < 0 || david > 100 || divya < 0 || divya > 100 || ishitha < 0 || ishitha > 100 || thomas < 0 || thomas > 100) {
    console.log('Enter correct marks');
} else if (avggrade < 60 && avggrade >= 0) {
    console.log('Average grade F');
} else if (avggrade >= 60 && avggrade < 70) {
    console.log('Average grade D');
} else if (avggrade >= 70 && avggrade < 80) {
    console.log('Average grade C');
} else if (avggrade >= 80 && avggrade < 90) {
    console.log('Average grade B');
} else if (avggrade >= 90 && avggrade <= 100) {
    console.log('Average grade A');
}

let month = 11;

switch (month) {
    case 'January':
    case 1:
        console.log('Winter');
        break;
    case 'February':
    case 2:
        console.log('Winter');
        break;
    case 'March':
    case 3:
        console.log('Spring');
        break;
    case 'April':
    case 4:
        console.log('Spring');
        break;
    case 'May':
    case 5:
        console.log('Spring');
        break;
    case 'June':
    case 6:
        console.log('Summer');
        break;
    case 'July':
    case 7:
        console.log('Summer');
        break;
    case 'August':
    case 8:
        console.log('Summer');
        break;
    case 'September':
    case 9:
        console.log('Autumn');
        break;
    case 'October':
    case 10:
        console.log('Autumn');
        break;
    case 'November':
    case 11:
        console.log('Autumn');
        break;
    case 'December':
    case 12:
        console.log('Winter');
        break;
    default:
        console.log('Enter correct month or his number');
}