// Write a JavaScript program to check whether a given array of integers is sorted in ascending order

const checkAscending = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }

  return true;
};

console.log("result 1 ==>", checkAscending([5, 6, 7, 9, 22]));
console.log("result 2 ==>", checkAscending([33, 54, 2, 20, 10]));
