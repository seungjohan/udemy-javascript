/*
let js = 'amazing';
if(js === 'amazing') alert('Javascript is FUN!');

console.log(40+8-2+28);

let firstName = "Eddie";
console.log(firstName);

let alpha = "dpdl";
let beta = "ql";
let gamma = "cl";

console.log(alpha, beta, gamma);

let $function = "function";
let PI = 3.1415;


// Much easy to understand
let myFirstJob = 'programmer';
let mySecondJob = 'teacher';

let job1 = 'programmer';
let job2 = 'teacher';
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas'); //Use quotes for making a string

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2022;
console.log(typeof year);

console.log(null); //result = object, error
*/

/*
let age = 30;
age = 31; //reassigning, mutated the variable

const birthYear = 1997;
birthYear = 1990; // impossible

var job = 'progammer';
job = 'teacher';
*/

/*
const thisYear = 2022;

const ageSeungjo = thisYear - 1997;
const ageMarta = thisYear - 1998;
console.log(ageSeungjo, ageMarta, ageSeungjo-ageMarta);

console.log(ageSeungjo * 2, ageMarta / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 2^3

//another use case for the plus operator
const firstName = 'Seungjo';
const lastName = 'Han';
console.log(firstName + ' ' + lastName);

//assignment operators
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

//Comparison operators
console.log(ageMarta > ageSeungjo); // true or false
console.log(ageMarta >= 18);

// precedence
const isFullAge = ageMarta >= 18;
console.log(thisYear - 1997 > thisYear - 1998);

let y, z;
y = z = 10 - 4 - 2;

const average = (ageMarta + ageSeungjo) / 2;
console.log(average);
*/

/*
const massMark = 70;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / (heightJohn * heightJohn);
const higherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, higherBMI);
*/

/*
const firstName = 'Seungjo';
const job = 'Product Manager';
const birthYear = 1997;
const year = 2022;

const seungjo = "I'm" + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!' // numbers with strings
console.log(seungjo);

const seungjoNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`; // template string.
console.log(seungjoNew);
console.log(`Just a regular string...`);

console.log('String with \n\
multiple\n\
lines');
console.log(`String
multiple
lines`);
*/

/*
const age = 17;
// const isOldEnough = age >= 19;

// if(isOldEnough) {
//     console.log('You can start driving!');
// }
if(age >= 19){
    console.log('You can start driving!');
} else {
    const yearLeft = 19 - age;
    console.log(`You are way too oung. Wait another ${yearLeft} years :)`)
}

const birthYear = 2012;
let century;
if(birthYear <= 2000){
    century = 20;
} else{
    century = 21;
}
console.log(century);
*/

/*
// type conversion
const inputYear = '1966';
console.log(Number(inputYear), inputYear); // convert from string to number by using this function
console.log(inputYear + 18);

console.log(Number('Jonas')); // error -> NaN, not a number = invalid number
console.log(typeof NaN); // type is number, It's just invalid number

// type coercion
console.log('I am' + 25 + 'years old' ) // + is a trigger a coercion to strings.
console.log('23' - '10' - '3'); // 10
console.log('23' * 2); // 46

let n = '1' + 1; // string, number, + operator -> 11
n  = n - 1; // converted to a number 
console.log(n);
*/

/*
// Truthy and Falsy Values
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true
console.log(Boolean(' ')); // false

const money = 0;
if(money) {
    console.log("Don't spend it all");
} else {
    console.log("You should ge a job!");
}

let height;
if(height) {
    console.log("YAY! height is defined!");
} else {
    console.log("Undefined!");
}
*/

/*
// Equality operators ==, ===
const age = '19';
if(age === 19) console.log('You just become an adult!'); // false
if(age == 19) console.log('You just become an adult!'); // true

const favourite1 = prompt("What's your favourite1 number?");
console.log(favourite1);
console.log(typeof(favourite1)); // string
const favourite = Number(prompt("What's your favourite number?")); // number

// if(favourite == 23){ // '23' == 23
if(favourite === 23){
    console.log("cool! 23 is an amazing number!");
} else if(favourite === 7) {
    console.log("7 is also a cool number");
} else {
    console.log("It's not that cool except 23 or 7");
}

if(favourite !== 23) console.log("Why not 23?");
*/

/*
//Logical Operators
const hasDriverLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriverLicense && hasGoodVision); // AND
console.log(hasDriverLicense || hasGoodVision); // OR
console.log(!hasDriverLicense); // NOT

const shouldDrive = hasDriverLicense && hasGoodVision;

// if(shouldDrive){
if(hasDriverLicense && hasGoodVision){
    console.log('Sarah is able to drive');
} else{
    console.log('Someone else should drive');
}

const isTired = true;
console.log(hasDriverLicense && hasGoodVision && isTired); 
*/
 
/*
//switch
const day = 'monday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log("Prepare video");
        break
    case 'wednesday':
    case 'thursday':
        console.log('Tomorrow is Friday');
        break
    case 'friday':
        console.log("Good job for this weekdays");
        break
    case 'saturday':
        console.log("Prepare video");
        break
    case 'sunday':
        console.log("Fuck Monday");
        break
    default:
        console.log('Not a valid day');
}
*/

/*
//statement, expressions
if (23 > 10){
    const str = '23 is bigger'; // statement , expression
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1997} years old ${me}`); // we need to put the expression inside.
*/

/*
//conditional operator
const age = 23;
age >= 18 ? console.log('I like to drink wine') : console.log('water...'); 

const drink = age >= 18 ? 'wine' : 'water'; // expression
console.log(drink);
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/