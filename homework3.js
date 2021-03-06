console.log('week 3 - welcome');
// A - ARRAY FIND
var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

function findLongNameThatStartsWithA(name) {
    return (name.length > 7 && name[0] === 'A');
}

var longNameStarsWithA = names.find(findLongNameThatStartsWithA);

console.log(longNameStarsWithA);

// B - ARRAY SOME
var pairsByIndex = [
    [0, 3],
    [1, 2],
    [2, 1], null, [3, 0]
];

function isNull(pair) {
    return pair == null;
}
var containNull = pairsByIndex.some(isNull);
console.log(containNull);

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

if (containNull = pairsByIndex.some(isNull)) {
    console.log('verify your pairsByIndex Array!')
} else {
    var pairs = pairsByIndex.map(function (indexes) {
        var student = students[indexes[0]];
        var mentor = mentors[indexes[1]];
        return [student, mentor];
    })
};

// console.log(pairs);

//C - ARRAY EVERY

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

function isStudent(name1, name2) {
    return name1.every(item => name2.includes(item))
}
var groupIsOnlyStudents = isStudent(group, students);

if (groupIsOnlyStudents) {
    console.log("The group contains only students");
} else {
    console.log("The group does not contain only students");
}

//D - ARRAY FILTER
let simpleArr = [1, 'a', true]
//let mapElements = simpleArr.map(c => typeof c);
//console.log(mapElements);
console.log(simpleArr.every(a => {
    typeof a == 'number'
}));

function isNumber(arr) {
    return arr.filter(a => typeof a == 'number');
}
// I DID NOT MANAGE TO FINISH IT. NEED TO COME BACK TO THIS PLACE - NEED TO USE EVERY!- NEED TO USE EVERY!- NEED TO USE EVERY!- NEED TO USE EVERY!

console.log('exercise D')

let pairsBy = [
    [0, 'a'],
    [1, 2],
    [2, 1], null, [1], false, "whoops"
];
//console.log(pairsBy);

let filterArr = pairsBy.filter(a => Array.isArray(a)).filter(b => b.length >= 2);
//console.log(filterArr);

let filteringArr = arr => arr.filter(a => Array.isArray(a)).filter(b => b.length >= 2);
console.log(filteringArr(pairsBy));
let pairsByFiltered = filteringArr(pairsBy);
console.log(pairsByFiltered);


//let mapElementsofArray = arrTomap => arrTomap.map(elements => elements.map(c => typeof c == 'number'));

//console.log(mapElementsofArray(filterArr));
//let filteredArr = mapElementsofArray(filterArr);
//console.log(filteredArr);

//let filteredElementsOfArray = arr1 => arr1.filter(mapElementsofArray);
//console.log(filteredArr.filter(filteredElementsOfArray));

// E - MAP FILTER

const numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let m100 = arr => arr.map(number => number * 100);
console.log(m100(numbers));

// F for each
let arrFE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


// let arrChange = arr => arr.map(function (index) {
//     if (index % 3 == '0' && index % 5 == '0') {
//         return 'buzzfizz'
//     } else if (index % 3 == '0') {
//         return 'fizz'
//     } else if (index % 5 == '0') {
//         return 'buzz'
//     } else {
//         return index
//     }
// })
//console.log(arrChange(arrFE));

// let arrChanged = arrFE.map(function (index) {
//     if (index % 3 == '0' && index % 5 == '0') {
//         return 'buzzfizz'
//     } else if (index % 3 == '0') {
//         return 'fizz'
//     } else if (index % 5 == '0') {
//         return 'buzz'
//     } else {
//         return index
//     }
// }).forEach(index => console.log(index));

let arrChanged2 = arrFE.map((index) => {
    if (index % 3 == '0' && index % 5 == '0') {
        return 'buzzfizz'
    } else if (index % 3 == '0') {
        return 'fizz'
    } else if (index % 5 == '0') {
        return 'buzz'
    } else {
        return index
    }
}).forEach(index => console.log(index));


//G ARRAY METHODS 
var numbersG = [3, 2, 1];
var sortedNumbers = numbersG.sort(); // complete this statement

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(sortedNumbers);

var mentorsG = ["Daniel", "Irina", "Rares"];
var studentsG = ["Rukmini", "Abdul", "Austine", "Swathi"];

var everyoneG = mentorsG.concat(studentsG); // complete this statement

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(everyoneG);

//H ARRAY METHODS - 2

var everyoneH = [
    "Daniel",
    "Irina",
    "Rares",
    "Rukmini",
    "Abdul",
    "Austine",
    "Swathi"
];

var firstFive = everyoneH.slice(0, 5); // complete this statement
var lastFive = everyoneH.slice(2); // complete this statement


/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(firstFive);
console.log(lastFive);

function capitalise(str) {
    return str.toUpperCase()
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

var ukNations = ["Scotland", "Wales", "England", "Northern Ireland"];

function isInUK(country) {

    return ukNations.includes(country);; // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(isInUK("France"));
console.log(isInUK("Republic of Ireland"));
console.log(isInUK("England"));

/* 
  EXPECTED RESULT
  ---------------
  false
  false
  true
*/