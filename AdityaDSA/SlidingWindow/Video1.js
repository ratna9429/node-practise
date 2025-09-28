// Note: Sliding Window Questions

// Question 1 : Find max sum of subarray of k = 3 in arr = [ 2, 3, 4, 7, 10 , 11 , 13] . Also give subArray elements of max sum.

// Note : Brute Force Technique

/**
 * Step 1: Loop over full array. Then take another inside loop.
 */
// let arr = [2, 3, 4, 7, 10, 11, 13, 15, 17];
// let k = 3;
// function maxSum(arr, k) {
//   let maximumSum = -Infinity;
//   let maxArrNums = [];

//   for (let i = 0; i <= arr.length - k; i++) {
//     let sum = 0;

//     for (let j = 0; j < k; j++) {
//       sum += arr[i + j];
//     }
//     console.log("sum of each window ====>", sum);

//     if (sum > maximumSum) {
//       maximumSum = sum;
//       maxArrNums = [];
//       for (let h = 0; h < k; h++) {
//         maxArrNums.push(arr[i + h]);
//       }
//     }
//   }

//   console.log("maximum sum ===>", maximumSum);
//   console.log("maxArrNums ====>", maxArrNums);
// }

// maxSum(arr, k);

// Note : Sliding Window Technique

/**
 * Step 1 :
 * Step 2 : If j = k, do some calculation, then i++ , j++
 */
// let arr = [2, 3, 4, 99, 10, 11, 13, 15, 17];
// let k = 3;

// function maxSumSliding(arr, k) {
//   let maxSum = 0;

//   // Step 1
//   for (let i = 0; i < k; i++) {
//     maxSum += arr[i];
//   }

//   console.log("maxSum ===>", maxSum);

//   let sum = maxSum;
//   // Step 2
//   console.log("arr.length - k ====>", arr.length - k);
//   for (let i = k; i < arr.length; i++) {
//     console.log("arr[i - k] ====>", arr[i - k]);
//     console.log("arr[i] ====>", arr[i]);
//     sum = sum - arr[i - k] + arr[i];

//     if (sum > maxSum) {
//       maxSum = sum;
//     }
//   }

//   console.log("maxSum final ===>", maxSum);
// }
// maxSumSliding(arr, k);

// Question 2 : Find Anagram counts.
let arr = [
  "g",
  "a",
  "r",
  "h",
  "r",
  "a",
  "f",
  "h",
  "k",
  "f",
  "r",
  "a",
  "a",
  "a",
  "r",
  "f",
  "b",
];
let pat = ["f", "a", "r"];

function countAnagrams(arr, pat) {
  let count = 0;

  let patCount = pat.length;

  for (let i = 0; i < arr.length; i++) {
    let hash = { f: 0, a: 0, r: 0 };

    for (let j = i; j < i + patCount; j++) {
      if (hash.hasOwnProperty(arr[j])) {
        hash[arr[j]] = 1;
      }

      if (!Object.values(hash).includes(0)) {
        count++;
      }
    }
  }

  console.log("🚀 ~ result: ====>", count);
}

countAnagrams(arr, pat);
