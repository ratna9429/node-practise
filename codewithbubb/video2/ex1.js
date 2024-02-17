// Write a JavaScript program to create a new string from a given string taking the last 3
// characters and added at both the front and back. The string length must be 3 or more, if
// not, the original string is returned.

const newString = (str = "hello") => {
  let strPart = str.slice(0, 3);

  return str.length < 3 ? str : `${strPart}${str}${strPart}`;
};

console.log("result ===>", newString());
