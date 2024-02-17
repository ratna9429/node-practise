//Type 1 - Write a JavaScript program to check a given string contains 2 to 4 occurrences of a specified character.
//Type 2 - Write a JavaScript program to check a given string contains 2 to 4 occurrences of a character.

//Type 1
const checkSpecificCharacters = (str, specChar) => {
  let count = 0;
  for (let char of str) {
    if (char === specChar) {
      count++;
    }
  }
  console.log("count ===>", count);
  return count >= 2 && count <= 4 ? true : false;
};
console.log("result ===>", checkSpecificCharacters("hello how are you", "o"));

//Type - 2
const checkCharacters = (str) => {
  let charMap = {};
  // Here i made mistake, i converted this str in array then looped over it.
  // But why to make new array, its extra code. I can directly loop over string.
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  // Filter characters that occur 2 to 4 times
  let result = [];

  for (let char in charMap) {
    if (charMap[char] >= 2 && charMap[char] <= 4) {
      result.push(char);
    }
  }

  return result;
};

console.log("result ====>", checkCharacters("hello budd? how are yayayay"));
