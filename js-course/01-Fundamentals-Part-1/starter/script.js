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

