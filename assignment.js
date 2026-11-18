// #1 Convert the string "123" to a number and add 7
const convertAndAdd = (str) => Number(str) + 7;
console.log(convertAndAdd("123"));
// #2 Check if the given variable is falsy and return "Invalid" if it is
const checkFalsy = (value) => (!value ? "Invalid" : value);
console.log(checkFalsy(0));
// #3 Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
const odds = [];
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    odds.push(i);
}
console.log(odds.join(", "));
//#4 Create an array of numbers and return only the even numbers using filter method
const getEvens = (arr) => arr.filter((n) => n % 2 === 0);
console.log(getEvens([1, 2, 3, 4, 5]));
//#5 Use the spread operator to merge two arrays, then return the merged array
const mergeArrays = (a, b) => [...a, ...b];
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
// #6 Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday)
function getDay(num) {
    switch (num) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Invalid day";
    }
}
console.log(getDay(2)); // "Monday"
// #7 Create an array of strings and return their lengths using map method
const getLengths = (arr) => arr.map((s) => s.length);
console.log(getLengths(["a", "ab", "abc"]));
// # 8 Write a function that checks if a number is divisible by 3 and 5
function checkDivisible(num) {
    if (num % 3 === 0 && num % 5 === 0) return "Divisible by both";
    if (num % 3 === 0) return "Divisible by 3 only";
    if (num % 5 === 0) return "Divisible by 5 only";
    return "Not divisible by 3 or 5";
}
console.log(checkDivisible(15));
// #9 Write a function using arrow syntax to return the square of a number 
const square = (n) => n * n;
console.log(square(5));
// #10 Write a function that destructures an object to extract values and returns a formatted string
function describePerson({ name, age }) {
    return `${name} is ${age} years old`;
}
console.log(describePerson({ name: "John", age: 25 }));
//#11 Write a function that accepts multiple parameters (two or more) and returns their sum
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4, 5));
// #12 Write a function that returns a promise which resolves after 3 seconds with a 'Success' message
// #12 Write a function that returns a promise which resolves after 3 seconds with a 'Success' message
function delayedSuccess() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Success"), 3000);
    });
}
delayedSuccess().then(console.log);
// #13 Write a function to find the largest number in an array
function findLargest(arr) {
    let largest = arr[0];
    for (const n of arr) {
        if (n > largest) largest = n;
    }
    return largest;
}
console.log(findLargest([1, 3, 7, 2, 4]));
//#14 Write a function that takes an object and returns an array containing only its keys
const getKeys = (obj) => Object.keys(obj);
console.log(getKeys({ name: "John", age: 30 }));
// #15  Write a function that splits a string into an array of words based on spaces
const splitWords = (str) => str.split(" ");
console.log(splitWords("The quick brown fox"));