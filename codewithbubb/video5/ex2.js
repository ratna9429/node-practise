// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

// My Approach
const countVowel = (str) => {
  let arr = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i of str) {
    if (arr.includes(i)) {
      count++;
    }
  }

  return count;
};

console.log("result 1 ==>", countVowel("hellobuddy"));

//Bub's Approach

const countVowel1 = (str, arr) =>
  str.split("").filter((e) => arr.indexOf(e) != -1).length;

console.log(
  "result 2 ==>",
  countVowel1("hellobuddy", ["a", "e", "i", "o", "u"])
);

//Index of practise

const arr = [2, 5, "s", "hello"];

console.log("result 3 ==>", arr.indexOf("f"));
