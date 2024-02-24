// Write a JavaScript program to get the largest even number from an array of integers.

//Solution 1
const largestEven = (arr) => {
  let evenArr = arr.filter((e) => e % 2 === 0);

  let sortedArr = evenArr.sort((a, b) => b - a);

  return sortedArr[0];
};

console.log("result ===>", largestEven([3, 50, 100, 230, 20, 22, 131]));

//Solution 2

const largestEven2 = (arr) => {
  return Math.max(...arr.filter((e) => e % 2 === 0));
};

console.log("result 2 ===>", largestEven2([3, 50, 100, 300, 20, 22, 131]));
