/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.

  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {}

/*****************************************************************************/

/*
  Recursive Binary Search

  Input: SORTED array of ints, int value
  Output: bool representing if value is found

  Recursively search to find if the value exists, do not loop over every element.

  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const two_nums1 = [1, 3, 5, 6];
const two_searchNum1 = 4;
const two_expected1 = false;

const two_nums2 = [4, 5, 6, 8, 12];
const two_searchNum2 = 5;
const two_expected2 = true;

const two_nums3 = [3, 4, 6, 8, 12];
const two_searchNum3 = 3;
const two_expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum, left = 0, right = sortedNums.length - 1) {
    // Base case: If the left index is greater than the right index, the value is not found.
    if (left > right) {
      return false;
    }
  
    // Calculate the middle index of the current search range.
    const mid = Math.floor((left + right) / 2);
  
    // Compare the middle element with the search value.
    if (sortedNums[mid] === searchNum) {
      return true; // Element found.
    } else if (sortedNums[mid] > searchNum) {
      // If the middle element is greater than the search value,
      // perform a binary search on the left half of the array.
      return binarySearch(sortedNums, searchNum, left, mid - 1);
    } else {
      // If the middle element is less than the search value,
      // perform a binary search on the right half of the array.
      return binarySearch(sortedNums, searchNum, mid + 1, right);
    }
  }



console.log(binarySearch(two_nums1, two_searchNum1));
console.log(binarySearch(two_nums2, two_searchNum2)); 
console.log(binarySearch(two_nums3, two_searchNum3)); 