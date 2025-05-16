//<========================== Reverse Array ==========================> 1
//<========================== Odd/Even Array ==========================> 2
//<========================== Hashing ==========================> 3
//<========================== Hashing ==========================> 4

//<========================== Reverse Array ==========================> 1
// Input:- arr = [2,3,6,1,0] , Output:- arr = [0,1,6,3,2]

// function reverseArr(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];

//     left++;
//     right--;
//   }

//   console.log("arr =====>", arr);
// }

// reverseArr([2, 3, 6, 1]);

// 4 Ways to do this :
// 1 - Left , Right variables , While loop
// 2 - For loop , let j = arr.length - 1 - i;
// 3 - Take a new empty array, - - minus minus wala for loop
// 4 - Javascript .reverse()

//<========================== Odd/Even Array ==========================> 2
// Input:- arr = [2,3,6,1,0] , Output:- arr = [0,1,6,3,2]
// function isEven(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//       return false;
//     }
//   }

//   return true;
// }

// let result = isEven([8, 8, 10]);
// console.log("🚀 ~ result: ====>", result);

// function isEven(arr) {
//   return arr.every((e) => e % 2 == 0);
// }

// let result = isEven([8, 8, 10, 12]);
// console.log("🚀 ~ result: ====>", result);

//<========================== Hashing ==========================> 3
// Count Frequency of Elements in Array
// arr = [2,4,5,6,6,6,2]

// function findFrequency(arr) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;

//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === arr[i]) {
//         count++;
//       }
//     }

//     if (!newArr.find((e) => e.value === arr[i])) {
//       newArr.push({ value: arr[i], count });
//     }
//   }

//   console.log(newArr);
// }

// let arr = [2, 4, 5, 6, 6, 6, 2];

// findFrequency(arr);

// Above time complexity is O(n^2)  <========
// Below solution will have O(n) complexity  <=========

// function findFrequencyOptimized(arr) {
//   const feq = {};

//   for (let num of arr) {
//     feq[num] = (feq[num] || 0) + 1;
//   }

//   return feq;
// }

// let arr = [2, 4, 5, 6, 6, 6, 2];

// const freqHash = findFrequencyOptimized(arr);

// function answerQueries(freqHash, queries) {
//   for (let num of queries) {
//     if (freqHash.hasOwnProperty(num)) {
//       console.log(`Count of ${num} is ${freqHash[num]}`);
//     } else {
//       console.log(`Count of ${num} is 0`);
//     }
//   }
// }

// const queries = [2, 5, 10];

// answerQueries(freqHash, queries);

//<========================== Hashing ==========================> 4
// Inpout : const arr = ['a', 'b', 'a', 'c', 'a', 'x', 'm', 'a'];
// Output : { a: 4, b: 1, c: 1, x: 1, m: 1 }

// const arr = ["a", "b", "a", "b", "a", "x", "m", "a", "b"];

// function countOccurance(arr) {
//   // console.log("🚀 ~ countOccurance ~ arr: ====>", arr);
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]] = obj[arr[i]] + 1;
//     } else {
//       obj[arr[i]] = 1;
//     }
//   }

//   console.log(obj);
// }

// countOccurance(arr);

// Practise

let arr1 = [2, 4, 5, 6];
let arr2 = [3, 4, 5, 7];
let arr3 = [4, 4, 5, 6, 7];

function test(arr1, arr2, arr3) {
  let resultArr = [];

  let sortArr1 = new Set(arr1);

  let sortArr2 = new Set(arr2);

  let sortArr3 = new Set(arr3);

  for (let value of sortArr1) {
    if (sortArr2.has(value) && sortArr3.has(value)) {
      resultArr.push(value);
    }
  }

  console.log(resultArr);
}

test(arr1, arr2, arr3);
