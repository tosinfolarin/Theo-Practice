// JavaScript Challenges

const { machine } = require("os")


// Write a function that takes a string and returns it reversed.
// let str = 'testing'
// function revStr(str){
//     let newStr = str.split('').reverse().join('')
//     return newStr
// }
// console.log(revStr(str))



// Sum All Numbers in an Array
// let numArray = [2,22,5]
// function sumArray(numArray){
//     let counter = 0
//     for(let i = 0; i < numArray.length; i++){
//         counter += numArray[i]
//     }
//     return counter
// }
// console.log(sumArray(numArray))



// Find the Maximum Number in an Array
// let numArr = [10, 13, 23, 34, 56, 34, 5, 23, 99, 29]
// function maxNum(numArr){
//     let maxNum = 0
//     for (let i = 0; i < numArr.length; i++){
//         if(numArr[i] > maxNum){
//             maxNum = numArr[i]
//         }
//     }
//     return maxNum
// }
// console.log(maxNum(numArr))



// Find the Longest Word in a String
// const longString = 'This is a string where i will find the longest word';
// function findLongWord(longString){
//     let words = longString.split(' ');
//     let longestWord = '';
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }
// console.log(findLongWord(longString));



// Count Vowels in a String

// let VowelString = 'this is the number of vowels'
// function countVowels(VowelString){
//     let counter = 0
//     for (let i = 0; i < VowelString.length; i++){
//         if(VowelString[i] === 'a' || VowelString[i] === 'e' || VowelString[i] ==='i' || VowelString[i] ==='o' || VowelString[i] === 'u'){
//             counter++
//         }
//     }
//     return counter
// }
// console.log(countVowels(VowelString))

// Check for Palindrome
// Example: "madam" = true

// let str = 'racecar'
// function isPalindrome(str) {
//     for (let i = 0; i < str.length / 2; i++) {
//         // Compare character from the start and end
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false; // If mismatch, not a palindrome
//         }
//     }
//     return true; // If no mismatches, it's a palindrome
// }
// console.log(isPalindrome(str))


/* Print numbers from 1 to 15. For multiples of 3, print "Fizz", 
for multiples of 5 print "Buzz", and for multiples of both print "FizzBuzz". */

// function fizzBuzz() {
//     for (let i = 1; i <= 15; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz'); // divisible by both
//         } else if (i % 3 === 0) {
//             console.log('Fizz'); // divisible by 3
//         } else if (i % 5 === 0) {
//             console.log('Buzz'); // divisible by 5
//         } else {
//             console.log(i); // not divisible by 3 or 5
//         }
//     }}
// fizzBuzz()

// Remove Duplicates from an Array
// let arrayWdups = [1, 2, 2, 3, 4, 4];
// function removeDups(arr) {
//     let noDupsArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!noDupsArr.includes(arr[i])) {
//             noDupsArr.push(arr[i]);
//         }
//     }
//     return noDupsArr;
// }

// console.log(removeDups(arrayWdups));


//  Given a string, return an object mapping each character to how many times it appears.
//  Example: "banana" → { b: 1, a: 3, n: 2 }

// let stringToCount = 'Count this string';
// function countString(str) {
//     let stringObj = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i]; // current character
//         // If the character already exists in the object, increment it
//         if (stringObj[char]) {
//             stringObj[char]++;
//         } else {
//             // Otherwise, initialize it with 1
//             stringObj[char] = 1;
//         }
//     }
//     return stringObj;
// }
// console.log(countString(stringToCount));


// 🧠 1. FizzBuzz
// Problem:
// Write a function that prints the numbers from 1 to 15. 
// But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". 
// For numbers that are multiples of both 3 and 5, print "FizzBuzz".

// function fizzBuzz(){
//     for (let counter = 1; counter < 16; counter++){
//         if (counter % 3 == 0 && counter % 5 == 0){
//             console.log('FizzBuzz')
//         } else if(counter % 3 == 0 ){
//             console.log ('Fizz')
//         } else if (counter % 5 == 0) {
//             console.log('Buzz')
//         } else (
//         console.log(counter))
//     }
// }
// fizzBuzz()


// 🔤 2. Reverse a String
// Problem:
// Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// reverseString("hello") → "olleh"


// // get the length of the string in index
// let index = [str.length - 1]
// // loop through the length of the string gradually reducing the index until index is 0
// for (let i = str.length - 1; i > 0; reverseString.push(i))
// // push each value to RevString

// function reverseString(str){
//     let revString = ''
//     for (let i = str.length - 1; i >= 0; i--){
//         revString += (str[i])
//     }
//     console.log(revString)
// }
// reverseString('hello')


// 📦 3. Find the Largest Number in an Array
// Problem:
// Write a function that takes an array of numbers and returns the largest one.
// Example:
// maxNumber([4, 9, 1, 17, 3]) → 17

// intialise a value of the first number of the array
// run a loop of the length of the array
// check if each value is bigger than the initialised value, if it is, biggest num = that value
// continue checking



function largestNum(numArr){
    let biggestNum = numArr[0]
    for(let i = 0; i <= numArr.length; i++){
        if (numArr[i] > biggestNum){
            biggestNum = numArr[i]
        }
    }
    console.log(biggestNum)
}
largestNum([1, 1, 10, 22, 1, -1, -10])




// 🔄 4. Remove Duplicates from an Array
// Problem:
// Write a function that removes duplicate values from an array.
// Example:
// removeDuplicates([1, 2, 2, 3, 4, 4]) → [1, 2, 3, 4]


// 🔢 5. Check for Palindrome
// Problem:
// Write a function that checks if a string is a palindrome (reads the same forwards and backwards).
// Example:
// isPalindrome("racecar") → true
// isPalindrome("hello") → false


// 📅 6. Factorial of a Number
// Problem:
// Write a function to find the factorial of a given number.
// Example:
// factorial(5) → 120 (because 5 × 4 × 3 × 2 × 1 = 120)


// 🧮 7. Count the Number of Vowels in a String
// Problem:
// Write a function that counts how many vowels (a, e, i, o, u) are in a string.
// Example:
// countVowels("Javascript") → 3


// 📝 8. Title Case a Sentence
// Problem:
// Write a function that takes a sentence and returns it with the first letter of each word capitalized.
// Example:
// titleCase("the quick brown fox") → "The Quick Brown Fox"


// 🧮 9. Sum of Numbers in an Array
// Problem:
// Write a function that returns the sum of all numbers in an array.
// Example:
// sumArray([1, 2, 3, 4]) → 10


// 🔍 10. Find the Index of an Element
// Problem:
// Write a function that returns the index of a given value in an array. If the value does not exist, return -1.
// Example:
// findIndex([10, 20, 30], 20) → 1
// findIndex([10, 20, 30], 50) → -1