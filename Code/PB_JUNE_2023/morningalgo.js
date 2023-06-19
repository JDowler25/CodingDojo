//       06-13-23
// var countPostives = 0; 
// var numbers = [3,4,-2,7,16,-8,0]
// // each time we loop through the array we want add to countPostives
// for(let i = 0; i<numbers.length; i++){
//     if(i>0){
//         countPostives++
//     }
// }
// console.log("there are", countPostives, "positive values");



//             06-14-23
/* 
    Given an array and an item to search for,
    return the index where the item is found,

    return -1 to represent not found
*/

// R.I.O.T.

// const arrA1 = ['a', 'b', 'c'];
// const searchItemA1 = 'c';
// const expectedA1 = 2;

// const arrA2 = ['a', 'b', 'c'];
// const searchItemA2 = 5;
// const expectedA2 = -1;

// const arrA3 = ['c', 'a', 'b', 'c'];
// const searchItemA3 = 'c';
// const expectedA3 = 0;

// const arrA4 = [];
// const searchItemA4 = 5;
// const expectedA4 = -1;

// //* choose your ALGO ROLES
// // DRIVER 🚗
// // PRESENTER 👨‍🏫
// // NAVIGATOR 🧭

// /*
// 👉 spend 10 mins writing the pseudocode only!

// */
// function indexOf(items, searchItem) {
//     // here we will create a for loop that traverse through items arr.
//     for(let i = 0; i < items.length; i++){
//         // create if statement that compares each element in the items arr to the search item.
//         // if our search item is found we will return the arr index which corresponds to the search item.
//         if(items[i]==searchItem){
//             return i;
//         }
//     // if search item is not found return -1
//     } 
//     return -1;
// }

// // Tests
// const resultA1 = indexOf(arrA1, searchItemA1);
// console.log(resultA1, 'should be', expectedA1);

// const resultA2 = indexOf(arrA2, searchItemA2);
// console.log(resultA2, 'should be', expectedA2);

// const resultA3 = indexOf(arrA3, searchItemA3);
// console.log(resultA3, 'should be', expectedA3);

// const resultA4 = indexOf(arrA4, searchItemA4);
// console.log(resultA4, 'should be', expectedA4);
// ******    bonus    ********/

/* 
Given an array and an number which represents the position starting from the back,
return the nth-to-last element.
JS has the .at() method for this purpose, but solve this algo w/o it.
*/

// Last element:
// const arrB1 = ['a', 'b', 'c', 'd'];
// const idxB1 = 1;
// const expectedB1 = 'd';

// // Second to last element:
// const arrB2 = ['a', 'b', 'c', 'd'];
// const idxB2 = 2;
// const expectedB2 = 'c';

// const arrB3 = ['a', 'b', 'c', 'd'];
// const idxB3 = 0;
// const expectedB3 = null;

// const arrB4 = ['a', 'b', 'c', 'd'];
// const idxB4 = -1;
// const expectedB4 = null;

// const arrB5 = [];
// const idxB5 = 2;
// const expectedB5 = null;


// /*
// 👉 spend 5-10 mins writing the pseudocode only!



// */

// function nthLast(items, nthToLast) {
//     // here we will create a for loop that traverse through items arr.
//     for( let i = items.length; i > 0; i--){
//         if
//     }
//     // your code here
// }

// // Tests
// const resultB1 = nthLast(arrB1, idxB1);
// console.log(resultB1, 'should be', expectedB1);

// const resultB2 = nthLast(arrB2, idxB2);
// console.log(resultB2, 'should be', expectedB2);

// const resultB3 = nthLast(arrB3, idxB3);
// console.log(resultB3, 'should be', expectedB3);

// const resultB4 = nthLast(arrB4, idxB4);
// console.log(resultB4, 'should be', expectedB4);

// const resultB5 = nthLast(arrB5, idxB5);
// console.log(resultB5, 'should be', expectedB5);


//           06-15-23
// // Reversing an array
// // Write a function `reverseArray` that takes in an array, and returns the array reversed,
// // try it without creating a new array

// var arr1 = [11, 22, 33, 44, 55];
// // expected // [55, 44, 33, 22, 11];

// var arr2 = ["a", "b", "c", "d", "e"];
// // ["e", "d", "c", "b", "a"];

// // 👉write the pseudo code first
// // DRIVER 🚗
// // PRESENTER 👨‍🏫
// // NAVIGATOR 🧭

// function reverseArray(someArray) {
//     for(var i = 0; i < someArray.length/2; i++){
//         var temp = someArray[i]
//         someArray[i]= someArray[someArray.length-1-i]
//         someArray[someArray.length-1-i]=temp
//     }
//     console.log(someArray)
// }

// reverseArray(arr1)
// // 🚨 don't forget to invoke/call the function

// // use a 'for-loop' then refactor it using a 'while' loop

// // we expect to get back...
// // [55, 44, 33, 22, 11];
// // ["e", "d", "c", "b", "a"];


//        06/16/2023

// Dice Roller
// Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random.


//        06/17/2023
// function d6() {
//     var roll = Math.random(); 
//     // your code here
//     return roll;
// }
    
// var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);

// // Consult the Oracle
// // Using the following array, write a function that will answer all of our questions by randomly choosing a response

// var lifesAnswers = [
//     "It is certain.",
//     "It is decidedly so.",
//     "Without a doubt.",
//     "Yes – definitely.",
//     "You may rely on it.",
//     "As I see it, yes.",
//     "Most likely.",
//     "Outlook good.",
//     "Yes.",
//     "Signs point to yes.",
//     "Reply hazy, try again.",
//     "Ask again later.",
//     "Better not tell you now.",
//     "Cannot predict now.",
//     "Concentrate and ask again.",
//     "Don't count on it.",
//     "My reply is no.",
//     "My sources say no.",
//     "Outlook not so good.",
//     "Very doubtful."
// ];


//        06/19/2023
/* 
    Recreate the built in .slice method
    Given an array, a start index, and an end index,
    return a NEW array that has only the elements from
    the start index (inclusive) to the end index (exclusive)
    What should you do if the provided end index is out of bounds?
*/

// Create variable arr. to be container for new arr.
// Create for loop to traverse thru startIdx and < endIdx arr. 
// .push() that element into the new array 
// After the loop is done we will return the arr.

//             0    1    2    3    4
const arr1 = ["a", "b", "c", "d", "e"];
const startIdx1 = 0;
const endIdx1 = 5;
const expected1 = ["a", "b", "c", "d", "e"];

const arr2 = ["a", "b", "c", "d", "e"];
const startIdx2 = 0;
const endIdx2 = 1;
const expected2 = ["a"];

//            0   1    2   3   4
const arr3 = [12, 24, 36, 48, 60];
const startIdx3 = 1;
const endIdx3 = 3;
const expected3 = [24, 36];

const arr4 = ["a", "b", "c", "d", "e"];
const startIdx4 = -100;
const endIdx4 = 100;
const expected4 = ["a", "b", "c", "d", "e"];

const arr5 = ["a", "b", "c", "d", "e"];
const startIdx5 = 0;
const endIdx5 = 0;
const expected5 = [];

const arr6 = ["a", "b", "c", "d", "e"];
const startIdx6 = 1;
const endIdx6 = 1;
const expected6 = [];

//* choose your ALGO ROLES
// DRIVER 🚗
// PRESENTER 👨‍🏫
// NAVIGATOR 🧭

/*
    👉 spend 10 mins writing the pseudocode only!

*/
// RIOT

function slice(items, startIdx, endIdx){
    let newArray = [];
    for(let i = startIdx; i< endIdx; i++){
        if(i >= 0 && i < items.length){
         newArray.push(items[i])
        }
    }
    return newArray;
}