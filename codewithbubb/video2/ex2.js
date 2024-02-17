// Write a JavaScript program to extract the first half of a string of even length.

const extractHalfPart = (str) => {
  return str.slice(0, str.length / 2);
};

console.log("result ==>", extractHalfPart("hellobuddy"));
console.log("result ==>", extractHalfPart("hello"));
