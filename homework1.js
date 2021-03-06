// A - SETUP - IDE - MADE WITH BEAUTIFY AND FORMAT ON SAVE ALREADY DONE
// B - HELLO WORLD
console.log('Hello world!')
console.log(12);
// C - VARIABLES //
// Add a variable greeting to exercise.js (make sure it comes before the console.log)
// Print your greeting to the console 3 times

const greeting = 'Hello!';

for (i = 0; i < 3; i++) {
    console.log(greeting + "times" + [i]);
}
// D - STRINGS //Write a program that logs a message and its type

const message1 = "This is a string message"
console.log(message1);
console.log(typeof message1);

//E - STRING CONCATENATION //Write a program that logs a message with a greeting and your name

const myName = "Marcin";
console.log(`Hello, my name is ${myName}`);

//F - STRING METHODS
//Log a message that includes the length of your name

console.log(`My name is ${myName} and my name is ${myName.length} characters long.`);

//G - NUMBERS // 
//Create two variables numberOfStudents and numberOfMentors
//Log a message that displays the total number of students and mentors

const numberOfStudents = 15;
const numberOfMentors = 8;

console.log(`Number of students: ${numberOfStudents}`);
console.log(`Number of mentors: ${numberOfMentors}`);
console.log(`Total number of students and mentors: ${numberOfMentors + numberOfStudents}`);

//H - NOT INCLUDED
//I - FLOATS// Using the variables provided in the exercise calculate the percentage of mentors and students in the group

function percentOfGroup(a, b) {
    let result = a * 100 / (a + b)
    return Math.round(result);
}

console.log(`Percentage of students: ${percentOfGroup(numberOfStudents, numberOfMentors)} %`);
console.log(`Percentage of students: ${percentOfGroup( numberOfMentors, numberOfStudents)} %`);

//J - FUNCTIONS //
// Complete the function in exercise.js so that it halves the input
//Try calling the function more than once with some different numbers

const halveNo = (x = 0) => {
    let y = x / 2;
    return y;
}
console.log(halveNo(12));

const tripleNo = (x = 0) => {
    let y = x * 3;
    return y;
}
console.log(tripleNo(12));

//K -FUNCTIONS - PARAMETERS
//Write a function that multiplies two numbers together

const multiply2Parameters = (x = 0, y = 0) => {
    let result = x * y;
    return result;
}
console.log(multiply2Parameters(3, 4));
//From scratch, write a function that divides two numbers

const divide2Parameters = (x = 0, y = 1) => {
    let result = x / y;
    return result;
}
console.log(divide2Parameters(3, 4));

//Write a function that takes a name (a string) and returns a greeting
/*
<<
<<
<<
<
HEAD */
//const returnGreeting = name => {
//  typeof putName == 'string' && typeof parseInt(putName) == 'number' ? console.log(`Hello, my name is ${name}`) : console.log(`${name} is probably not a name!`);
//}
//let putName = prompt('put a name, please');                                               //commented as being annoying
//console.log(typeof putName);
/* ===
 ===
 = */
const returnGreeting = name => {
    typeof name == 'string' && /^[a-zA-Z]+$/.test(name) ? console.log(`Hello, my name is ${name}`) : console.log(`${name} is probably not a name!`);
}
let putName = 'put a name, please'; //commented as being annoying
console.log(typeof putName); // >>>
/*>>>
>
1178 f2edfd5f8d367cc05baa9c5a95f9183f7488 */
//console.log(parseInt(putName)); 
console.log(returnGreeting(putName));
//console.log(typeof parseInt('123'));
//console.log(typeof parseInt('abc'));
//problem 1  - I noticed that even if i put a number it works. I want to filter prompt input - select only strings.
//it takes everything as string, even if I put a number (for example 12). Parse int does not work yet. Unfortunately parseInt type is always number
//------------------------------------------------------------------------------------------------------------------------------------ Need help

//Write a function that adds two numbers together Call the function, passing 13 and 124 as parameters, and assigning the returned value to a variable

const sumOf2No = (x = 0, y = 0) => {
    let result = x + y;
    return result;
}

console.log(sumOf2No(13, 124));

//Write a function that takes a name (a string) and an age (a number) and returns a greeting (a string)

const combineNameAge = (name = 'none', Age = 0) => {
    if (typeof name == 'string' & typeof Age == 'number') {
        console.log(`Hello, my name is ${name} and I am ${Age} years old`);
    } else {
        console.log(`Did you put a name and your age?`);
    }
}

console.log(combineNameAge('Marcin', 30));
console.log(combineNameAge('Marcin', '30'));

//L - FUNCTIONS NESTED 
//In exercise2.js you have been provided with the names of some mentors. Write a program that logs a shouty greeting to each one.
//Your program should include a function that spells their name in uppercase, and a function that creates a shouty greeting.
// Log each greeting to the console.

//PROVIDED BY COURSE:
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

const mentorsArray = [mentor1, mentor2, mentor3, mentor4, mentor5];
console.log(mentorsArray);

for (const mentor of mentorsArray) {
    let mentorUpper = mentor.toUpperCase();
    console.log(`HELLO ${mentorUpper}`)
}


//MODULE 2 -----------------------------------------------------------------------------------------------------------------------

//// There are syntax errors in this code - can you fix it to pass the tests?

function addNumbers(a, b, c) {
    return a + b + c;
}
console.log(addNumbers(1, 2, 7))

function introduceMe(name, age) {
    return "Hello, my name is " + name + " and I am " +
        age + " years old.";
}

console.log(introduceMe('Marcin', 20));

function getTotal(a, b) {
    total = a + b;

    // Use string interpolation here
    return `The total is  ${total}`
}
console.log(getTotal(12, 18));

function trimWord(word) {
    return word.trim();
}

console.log('trimmed word is ' + trimWord('          aaa.    '))


function getWordLength(word) {
    return word.length;
}
console.log('It has ' + getWordLength('Litera') + ' numbers')


function multiply(a, b, c) {
    return a * b * c;
}
console.log('Total is ' + multiply(2, 2, 2));

// Add comments to explain what this function does. You're meant to use Google!
function getNumber() { //it takes a random number between 0 and 1 and multiply it by 10.
    return Math.random() * 10;
}

console.log(getNumber());

// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2) { //it concatenate two expressions
    return w1.concat(w2);
}

console.log(s('alfa', 'beta'))

function concatenate(firstWord, secondWord, thirdWord) {
    return firstWord.concat(secondWord, thirdWord)
}
console.log(concatenate('alfa', 'beta', 'gamma'))


//MODULE 3----------------------------------------------------------------------------------------------------------------------------

convertToUSD = priceP => {
    return priceP * 1.4

}

convertToReal = priceP => {
    return priceP * 5.7 * 0.99

}

let engPrice = 10
console.log(`Price in england is ${engPrice} , and in dollars is ${convertToUSD(engPrice)}`);
console.log(`Price in england is ${engPrice} , and in realis ${convertToReal(engPrice)}`);