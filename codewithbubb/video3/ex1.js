// Write a JavaScript program to find the number of even digits in a an array of integers

//Solution 1

let arr = [3, 4, 5, 10, 22, 33, 21, 55];

const allEvenDigits = (arr) => {
  let count = 0;
  arr.forEach((e) => (e % 2 === 0 ? count++ : null));

  return count;
};

console.log("result 1 ==>", allEvenDigits(arr));

// Solution 2

let arr1 = [3, 4, 5, 10, 22, 33, 21, 55];

const allEvenDigits1 = (arr1) => {
  return arr1.filter((e) => e % 2 === 0).length;
};

console.log("result 2 ==>", allEvenDigits1(arr1));
