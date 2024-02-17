// Write a JavaScript program to concatenate two strings except their first character.

const concatFunction = (str1, str2) => {
  return `${str1.slice(1)}${str2.slice(1)}`;
};

console.log("result ==>", concatFunction("hello", "buddy"));
