//Find two numbers of which sum will be 210
// let arr = [20, 30, 40, 180, 190, 220, 500, 700];

//Two pointer method.
// let arr = arr1.sort((a, b) => a - b);
// console.log("arr ====>", arr);
// let p1 = 0;
// let p2 = arr.length - 1;

// console.log("p1, p2 ===>", p1, p2);

// while (p1 < p2) {
//   let sum = arr[p1] + arr[p2];
//   if (sum === 210) {
//     console.log("p1,p2 ====>", [arr[p1], arr[p2]]);
//     break;
//   } else if (sum < 210) {
//     p1++;
//   } else if (sum > 210) {
//     p2--;
//   }
// }

// Linear search method

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === 210) {
//       console.log("Pair Found:", arr[i], arr[j]);
//     }
//   }
// }

//Binary search method
// let arr = [20, 30, 40, 180, 190, 220, 500, 700];

// const binarySearch = (arr, start, requiredNum) => {
//   let p1 = start;
//   let p2 = arr.length - 1;

//   while (p1 <= p2) {
//     let mid = Math.floor((p1 + p2) / 2);
//     if (arr[mid] === requiredNum) {
//       console.log("found the number ===>", mid);
//       return mid;
//     } else if (arr[mid] < requiredNum) {
//       p1 = mid + 1;
//     } else if (arr[mid] > requiredNum) {
//       p2 = mid - 1;
//     }
//   }

//   return -1;
// };

// let sumOfTwo = 210;
// for (let i = 0; i < arr.length; i++) {
//   let requiredNum = sumOfTwo - arr[i];
//   // console.log("requiredNum ======>", requiredNum);
//   let binarySearchResult = binarySearch(arr, i + 1, requiredNum);
//   // console.log("binarySearchResult ==========>", binarySearchResult);
//   if (binarySearchResult !== -1) {
//     console.log("Pairs are : ", arr[i], arr[binarySearchResult]);
//   }
// }
