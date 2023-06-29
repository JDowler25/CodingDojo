// // ---- 06/26/23-----
// /* 
//     Write a function that takes a non-empty array of distinct integers and an integer representing a target sum.
//     If any two numbers in the input array sum up to the target sum, the function should return their indices in an array, in any order.
//     Note that the target sum has to be obtained by summing two different integers in the same array.
//     You can't add a single integer to itself in order to obtain the target sum.
//     You can assume that there will be at most one pair of numbers summing up to the target sum.

//     In other words:
//     Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//     You can return the answer in any order.
//  */

// // Example 1:
// // Input: nums = [2,7,11,15], target = 9
// // Output: [0,1]
// // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// function targetNum(){
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//             if(nums[j] + nums[i]=== target){
//                 return([i],[j]);
//             }
//         }
//     }
// }
// var nums = [3,2,4], target = 6
// console.log(targetNum(nums,6))
// // Example 2:
// // Input: 
// // Output: 
// // [1,2]

// // Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]


// // ---- 06/27/23-----

/* 
    Given an array and an index,
    remove the item at that index.
    return the removed item

    If index is out of range, return null and don't alter array

    No built-in array methods except pop().

    Alter the original array, don't create a new one.
*/

// const arr1 = ["a", "b", "c", "d", "e"];
// const removeIdx1 = 1;
// const expected1 = "b";
// function rmvInd(arr, removeIdx) {
//     // checking the remove index is "inbounds"
//     if (removeIdx < 0 || removeIdx >= arr.length - 1) {
//         // if it is return null so we never have to run the loop
//         return null;
//     }

//     var temp = arr[removeIdx];
//     for (let i = removeIdx; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1];
//     }
//     arr.length = arr.length - 1
//     console.log(arr);
//     return temp
// }
// const arr1Expected = ["a", "c", "d", "e"];



// //             0    1     2
// const arr2 = ["a", "b", "c"];
// const removeIdx2 = 3;
// const expected2 = null;
// const arr2Expected = ["a", "b", "c"];

// const arr3 = ["a", "b", "c"];
// const removeIdx3 = -3;
// const expected3 = null;
// const arr3Expected = ["a", "b", "c"];

// const arr4 = ["cake", "pie", "cookies", "vegetables", "candy"];
// const removeIdx4 = 3;
// const expected4 = "vegetables";
// const arr4Expected = ["cake", "pie", "cookies", "candy"];

//* choose your ALGO ROLES
// DRIVER 🚗
// PRESENTER 👨‍🏫
// NAVIGATOR 🧭


// extra challenge: re-create the built-in method '.pop()' 

// // ---- 06/28/23-----
/* 
    Array: Second-Largest

    Return the second-largest element of an array, or null if there is none.

    Bonus: do it with one loop and no nested loops
*/

// 2nd largest is 2nd
// const nums1 = [2, 3, 1, 4];
// const expected1 = 3;

// // largest is first
// const nums2 = [4, 1, 3, 2];
// const expected2 = 3;

// // largest duplicated first
// const nums3 = [4, 4, 4, 1, 3, 2];
// const expected3 = 3;

// // 2nd largest is first
// const nums4 = [3, 1, 4, 2];
// const expected4 = 3;

// // largest is 2nd
// const nums5 = [3, 4, 2, 1];
// const expected5 = 3;

// const nums6 = [3, 3];
// const expected6 = null;

// const nums7 = [2];
// const expected7 = null;

// const nums8 = [];
// const expected8 = null;

// // JSDOCS
// /**
//  * Finds the second largest int from the given array and returns it or null.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<number>} nums
//  * @returns {?number} The second largest int from the given array or null.
//  *    The ? in front means it's nullable.
//  */

// function secondLargest(nums = []) {
//     //checks if there are at least two elements
//     if (nums.length < 2) {
//         return null;
//     }
//     // decolares & initalizes variables
//     var largest = nums[0];
//     var secondLargest = null;

//     //normal loop through entire array
//     for (let i = 0; i < nums.length; i++) {
//         //checks that the next value is greater than the previous value
//         if (nums[i] > largest) {
//             secondLargest = largest;    //If the next value is greater, it sets the previous value to the secondLargest
//             largest = nums[i];          //sets the new largest
//         }
//         // If checks to make sure secondLargest is less than the value of the current iterator and not an identical number
//         if (nums[i] > secondLargest && nums[i] != largest) {
//             secondLargest = nums[i];
//         }

//     }

//     return secondLargest
// }

// secondLargest(nums1);




// // ---- 06/29/23-----
/* 
    Given an array, move the minimum value to the front in-place
    return the array after done.
    No built in methods.
*/

const nums1 = [6, 4, 5, 1, 3, 2];
const expected1 = [1, 6, 4, 5, 3, 2];

const nums2 = [1, 5, 2, 9]; // min already at front
const expected2 = [1, 5, 2, 9];

// The min occurs twice, take the first instance of it
const nums3 = [5, 1, 0, 2, 3, 0];
const expected3 = [0, 5, 1, 2, 3, 0];

// Determine minimum value and its index
// Swap or shift values so that the minimum value now appears at the front, preserving the order otherwise


/**
 * Moves the smallest number in the given array to the front.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given arr after the min has been moved to front.
 */


function minToFront(nums) {
    var minValue = 0;
    for(var i = 1;i < nums.length; i++){
        if(nums[i] < nums[minValue]){
            minIndex = i;
        }
    }
    var temp = nums[0];
    nums[0] = nums[minValue];
    nums[minValue] = temp;

    console.log(minValue)
    return nums
}

//! DRIVER 🚗
//! PRESENTER 👨‍🏫
//! NAVIGATOR 🧭 
// Tests
const result1 = minToFront(nums1);
console.log(result1, "should equal", expected1);
console.log(nums1, "should equal", expected1);

// const result2 = minToFront(nums2);
// console.log(result2, "should equal", expected2);
// console.log(nums2, "should equal", expected2);

// const result3 = minToFront(nums3);
// console.log(result3, "should equal", expected3);
// console.log(nums3, "should equal", expected3);