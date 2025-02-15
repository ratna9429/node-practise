//Use Binary Search Logic

// Iterative Method
let arrayMain = [10, 11, 14, 23, 35, 66, 67, 88, 89, 91, 93];

const findProvidedNumber = (arr, num) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer <= rightPointer) {
    let middleIndex = Math.floor((leftPointer + rightPointer) / 2);
    let middleValue = arr[middleIndex];

    if (middleValue == num) {
      return `Number Found at index : ${middleIndex}`;
    } else if (middleValue < num) {
      leftPointer = middleIndex + 1;
    } else {
      rightPointer = middleIndex - 1;
    }
  }

  return "Number Not Found";
};

const result = findProvidedNumber(arrayMain, 93);
console.log("🚀 ~ result: ====>", result);

// Recursive Method
// let arrayMain = [10, 11, 14, 23, 35, 66, 67, 88, 89, 91, 93];

// const findProvidedNumberRecursive = (
//   arr,
//   num,
//   leftPointer = 0,
//   rightPointer = arr.length - 1
// ) => {
//   if (leftPointer > rightPointer) {
//     return -1; // Base case: Number not found
//   }

//   let middleIndex = Math.floor((leftPointer + rightPointer) / 2);
//   let middleValue = arr[middleIndex];

//   console.log("🚀 ~ Checking middleValue:", middleValue);

//   if (middleValue === num) {
//     return 1; // Found the number
//   } else if (middleValue < num) {
//     return findProvidedNumberRecursive(arr, num, middleIndex + 1, rightPointer); // Search in the right half
//   } else {
//     return findProvidedNumberRecursive(arr, num, leftPointer, middleIndex - 1); // Search in the left half
//   }
// };

// const result = findProvidedNumberRecursive(arrayMain, 14);
// console.log("🚀 ~ result: ===========>", result);
