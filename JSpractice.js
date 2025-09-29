// JavaScript Challenges

const { count } = require("console")

// Write a function that takes a string and returns it reversed.

// let str = 'hello world'
// function reverseSting(str){
//     let newStr = str.split('').reverse().join('')
//     return newStr
// }
// console.log(reverseSting(str))

// Sum All Numbers in an Array
// let numArray = [2,4,5]
// function sumArray(numArray){
//     let sumOfArray = 0
//     for (let i = 0; i < numArray.length; i++){
//         sumOfArray += numArray[i]
//     }
//     return sumOfArray
// }
// console.log(sumArray(numArray))

// Find the Maximum Number in an Array
// let numArr = [10, 13, 23, 453, 56, 34, 5, 23, 1, 29]
// function maxNum(numArr){
//     maximumNum = 0
//     for (let i = 0; i < numArr.length; i++ ){ 
//         if (numArr[i] > maximumNum){
//             maximumNum = numArr[i]
//         }
//     }
//     return maximumNum
//     }
// console.log(maxNum(numArr))




 // Find the Longest Word in a String
// const longString = 'This is a string where i will find the longest word';

// function findLongWord(longString) {
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

function fizzBuzz() {
    for (let i = 1; i <= 15; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz'); // divisible by both
        } else if (i % 3 === 0) {
            console.log('Fizz'); // divisible by 3
        } else if (i % 5 === 0) {
            console.log('Buzz'); // divisible by 5
        } else {
            console.log(i); // not divisible by 3 or 5
        }
    }}
fizzBuzz()
// Remove Duplicates from an Array
// Example: [1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]

/* Write a function to flatten an array with nested arrays.
 Example: [1, [2, [3, 4], 5]] → [1, 2, 3, 4, 5] */

//  Given a string, return an object mapping each character to how many times it appears.
//  Example: "banana" → { b: 1, a: 3, n: 2 }


// Implement a debounce utility that delays calling a function until after a certain time has passed.

