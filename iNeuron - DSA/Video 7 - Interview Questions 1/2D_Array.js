// <------------------------------ Find a number in this 2D array --------------------------->
// <------------------------------ Brut Force Method --------------------------->
// const findNumIn2DArray = (arr, num) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] === num) {
//         return true;
//       }
//     }
//   }

//   return false;
// };

// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

// let result = findNumIn2DArray(arr, 30);
// console.log("🚀 ~ result: ====>", result);

// <------------------------------ Optimized Method --------------------------->

// const findNumIn2DArray = (arr, num) => {
//   let rows = arr.length;
//   let cols = arr[0].length;

//   let left = 0;
//   let right = rows * cols - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     let midNum = arr[Math.floor(mid / cols)][mid % cols];
//     console.log("🚀 ~ findNumIn2DArray ~ midNum: ====>", midNum);

//     if (midNum === num) {
//       return true;
//     } else if (midNum < num) {
//       left = mid + 1;
//     } else if (midNum > num) {
//       right = mid - 1;
//     }
//   }

//   return false;
// };

// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

// let result = findNumIn2DArray(arr, 3);
// console.log("🚀 ~ result: ====>", result);

// Input: nums = [1,5,4,2,9,9,9], k = 3
// Output: 15

const findSubArr = (arr, k) => {
  let reqSum = 15;
  let p1 = 0;
  let p2 = k - 1;
  while (p2 <= arr.length) {
    let arrPart = arr.slice(p1, p2 + 1);

    let uniqueArr = [...new Set(arrPart)];

    if (uniqueArr.length === k) {
      let sumOfArr = uniqueArr.reduce((acc, num) => acc + num, 0);

      if (sumOfArr === reqSum) {
        console.log("🚀 ~ findSubArr ~ Sub-Array is : ====>", uniqueArr);
      }
    }
    p1++;
    p2++;
  }
};

let arr = [1, 5, 4, 2, 9, 9, 9, 10, 4, 1];
let k = 3;

let result = findSubArr(arr, k);
