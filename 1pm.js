// You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

// The length of the subarray is k, and

// All the elements of the subarray are distinct.

// Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,5,4,2,9,9,9], k = 3

// Output: 15

// Explanation: The subarrays of nums with length 3 are:

// - [1,5,4] which meets the requirements and has a sum of 10.

// - [5,4,2] which meets the requirements and has a sum of 11.

// - [4,2,9] which meets the requirements and has a sum of 15.

// - [2,9,9] which does not meet the requirements because the element 9 is repeated.

// - [9,9,9] which does not meet the requirements because the element 9 is repeated.

// We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions

// Example 2:

// Input: nums = [4,4,4], k = 3

// Output: 0

// Explanation: The subarrays of nums with length 3 are:

// - [4,4,4] which does not meet the requirements because the element 4 is repeated.

// We return 0 because no subarrays meet the conditions.

// Constraints:

// 1 <= k <= nums.length <= 10^5

// 1 <= nums[i] <= 10^5

let arrA = [1, 5, 4, 2, 9, 9, 9];
let num = 3;

const maxSumOfSubArray = (arr, num) => {
  let newArr = [];
  let maxNum = 0;

  for (let i = 0; i < arr.length; i++) {
    newArr = [arr[i], arr[i + 1], arr[i + 2]];

    let sumOfArr = 0;
    for (let j = 0; j < newArr.length; j++) {
      sumOfArr += newArr[j];
    }

    if (sumOfArr > maxNum) {
      maxNum = sumOfArr;
    }
    console.log("sumOfArr ====>", sumOfArr);
  }
  return maxNum;
};

let result = maxSumOfSubArray(arrA, num);
console.log("result ==>", result);

// Consider a Books and Authors table. Books includes Book_ID, Author_ID, Title, and Sales, and

// Authors includes Author_ID, Author_Name. Write a SQL query to find the authors who have

// sold more than 1000 books and have written more than 3 books.

// Select Author_ID from books_table where Sales > '1000' JOIN Author_ID as author_id from author_table
