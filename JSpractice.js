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
