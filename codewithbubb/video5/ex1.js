// Write a JavaScript function that returns a passed string with letters in alphabetical order. Example string: 'webmaster'
// Expected Output: 'abeemrstw'

//My Approach
const arrangeCharacters = (str) => {
  let charNumArr = [];

  for (let i of str) {
    charNumArr.push(i.charCodeAt());
  }

  let sortedArr = charNumArr.sort();

  let finalResult = sortedArr.map((ele) => String.fromCharCode(ele)).join("");

  return finalResult;
};

console.log("result ==>", arrangeCharacters("webmaster"));

//ChatGpt Approach
const arrangeCharacters1 = (str) => {
  // Split the string into an array of characters, sort it alphabetically, then join it back into a string
  return str.split("").sort().join("");
};

console.log("result ==>", arrangeCharacters1("webmaster"));
