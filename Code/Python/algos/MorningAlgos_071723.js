/* 
  Balance Index

  Here, a balance point is ON an index, not between indices.

  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const two_nums1 = [-2, 5, 7, 0, 3];
const two_expected1 = 2;

const two_nums2 = [9,9];
const two_expected2 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */

function balanceIndex(nums) {
    // Immediately throws out inputs shorter than two indexes
    if (nums.length <= 2){
        return -1
    }
    // Loops through entire length of the array
    for (let i = 0; i < nums.length; i++){
        // Holds sums for both sides of the array
        var leftSum = 0;
        var rightSum = 0;
        // Loops up until i, adding the values of the indexes
        for (let j = 0; j < i;j++){
            leftSum += nums[i];
        }
        // Loops from the value of i until the end of the length of nums
        for(let p = i+1; p < nums.length; p++){
            rightSum += nums[i];
        }
        // Checks to see if the values summed are equal, if so, returns the current index
        if (leftSum === rightSum){
            return i;
        }
    }
    // If the for loop is completed without exiting, return -1
    return -1
}

console.log(balanceIndex(two_nums1));
console.log(balanceIndex(two_nums2));