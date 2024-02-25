// Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

// My logic. This is correct, but Chat GPT is saying
// Your implementation is close, but it's hardcoded to check if each number in the array is less than 10 based on the checkNumLessThan10 function. This approach limits the reusability of your code because it's tailored to a specific predicate function (checkNumLessThan10).

const checkNumLessThan10 = (num) => {
  return num < 10;
};

const testFunction = () => {
  let arr = [5, 6, 8, 10];

  for (let i = 0; i < arr.length; i++) {
    if (!checkNumLessThan10(arr[i])) {
      return false;
    }
  }

  return true;
};

console.log("result ==>", testFunction());

//Chat GPT implementation

const testFunction1 = (arr, predicate) => {
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) {
      return false;
    }
  }
  return true;
};

// Example usage with the checkNumLessThan10 predicate function
console.log(
  "result chat gpt ==>",
  testFunction1([5, 6, 8, 10], checkNumLessThan10)
);

// Example usage with a different predicate function
const checkNumGreaterThan5 = (num) => {
  return num > 5;
};
console.log(
  "result chat gpt ==>",
  testFunction1([6, 7, 8, 9], checkNumGreaterThan5)
);
