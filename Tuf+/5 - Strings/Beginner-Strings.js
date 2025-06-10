// Question 1 : Reverse a String
// Input : s = ["h", "e" ,"l" ,"l" ,"o"]
// Output : ["o", "l", "l", "e", "h"]
// Explanation : The given string is s = "hello" and after reversing it becomes s = "olleh".

// Remark : How i solved initially. This is not good. Time Complexity is O(n^2) as str concatination happens n times.
// function reverseStr(str) {
//   let strArr = str.split("");

//   let resultStr = "";

//   for (let i = strArr.length - 1; i >= 0; i--) {
//     resultStr += strArr[i];
//   }

//   console.log("🚀 ~ reverseStr ~ resultStr: ====>", resultStr);
// }

// reverseStr("hello");

// Remark : ChatGPT suggested below ones.
// Optimal solution (if you're restricted from using built-ins): O(n)
// function reverseStr(str) {
//   let reversed = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed.push(str[i]);
//   }
//   return reversed.join("");
// }

// console.log(reverseStr("hello")); // "olleh"

// Optimal Solution ( using built-ins ): O(n)
// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseStr("hello")); // "olleh"

// Question 2 : Palindrome Check
// A palindrome is a sequence that reads the same forward and backwards.
// Examples:
// Input: head -> 3 -> 7 -> 5 -> 7 -> 3
// Output: true

// Input: head -> 1 -> 1 -> 2 -> 1
// Output: false

// Remark : How i solved initially. This is not good. Time Complexity is O(n) as 1 for loop is there , iteratingto all numbers
let word1 = "appa";
let word2 = "intetni";
let word3 = "tere";

// function checkPalindrome(word) {
//   console.log("word ===>", word);

//   let revWord = "";

//   for (let i = word.length - 1; i >= 0; i--) {
//     revWord += word[i];
//   }
//   console.log("🚀 ~ checkPalindrome ~ revWord: ====>", revWord);
//   if (revWord === word) return true;
//   else return false;
// }

// console.log(checkPalindrome(word3));

// Remark : ChatGPT suggested below one.
// Optimal solution O(n/2) , but still variable i is not required,
// as left and right are tracking the positions

// function checkPalindrome1(word) {
//   //tere
//   let left = 0;
//   let right = word.length - 1;

//   for (let i = 1; i <= Math.floor(word.length / 2); i++) {
//     if (word[left] === word[right]) {
//       left++;
//       right--;
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(checkPalindrome1(word1));
// console.log(checkPalindrome1(word2));
// console.log(checkPalindrome1(word3));

// Remark : ChatGPT more cleaner version.
// Optimal solution O(n/2) and clean code.

// function checkPalindrome2(word) {
//   let left = 0;
//   let right = word.length - 1;

//   while (left < right) {
//     if (word[left] !== word[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// }

// console.log(checkPalindrome2(word1));
// console.log(checkPalindrome2(word2));
// console.log(checkPalindrome2(word3));

// Question 3 : Largest Odd Number in a String
// Given a string s, representing a large integer, the task is to return the largest-valued odd integer (as a string) that is a substring of the given string s.

// The number returned should not have leading zero's. But the given input string may have leading zero.

// Remark : Regex little knowledge required.

// function largestOddNumber(num) {
//   for (let i = num.length - 1; i >= 0; i--) {
//     if (parseInt(num[i]) % 2 !== 0) {
//       let result = num.slice(0, i + 1).replace(/^0+/, "");

//       return result;
//     }
//   }
//   return "";
// }

// console.log(largestOddNumber("00875352"));

// Remark : If you dont know Regex little bit also.

// function largestOddNumber(num) {
//   // Step 1: Traverse from right to left to find the last odd digit
//   for (let i = num.length - 1; i >= 0; i--) {
//     const digit = parseInt(num[i]);
//     if (digit % 2 !== 0) {
//       // Step 2: Get the substring up to and including that odd digit
//       let result = num.slice(0, i + 1);

//       // Step 3: Remove leading zeros manually
//       let j = 0;
//       while (j < result.length && result[j] === "0") {
//         j++;
//       }

//       return result.slice(j); // return cleaned result
//     }
//   }

//   // If no odd digit is found, return empty string
//   return "";
// }

// console.log(largestOddNumber("00875352"));

// Question 4 : Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Examples:
// Input : str = ["flowers" , "flow" , "fly", "flight" ]
// Output : "fl"
// Explanation : All strings given in array contains common prefix "fl".

// Remark : This is how i first performed this. This is also have time complexity of O(n*m).
// Remark : But ChatGPT said i have done extra function calls, used more space , and its not much practical.

// function longestPrefix(arr) {
//   if (arr.length === 0) return "";
//   if (arr.length === 1) return arr[0];

//   // Helper function to get common prefix of two strings
//   const getCommonPrefix = (str1, str2) => {
//     let result = "";
//     let len = Math.min(str1.length, str2.length);

//     for (let i = 0; i < len; i++) {
//       if (str1[i] !== str2[i]) break;
//       result += str1[i];
//     }

//     return result;
//   };

//   // Step 1: Get prefix from first two strings
//   const prefix = getCommonPrefix(arr[0], arr[1]);

//   // Step 2: If no prefix found, return ""
//   if (prefix === "") return "";

//   // Step 3: Recursively call with [prefix, ...rest of the array]
//   const newArr = [prefix, ...arr.slice(2)];

//   return longestPrefix(newArr);
// }

// console.log(longestPrefix(["flowers", "flow", "fly", "flight"])); // Output: "fl"

// Solution 1 : By Chatgpt , Same time complexity, but done in a good acceptable way.

// let arr = ["abc", "ade", "azx"];

// function longestCommonPrefix(strs) {
//   if (!strs.length) return "";

//   let prefix = strs[0];

//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.slice(0, -1);
//       if (!prefix) return "";
//     }
//   }

//   return prefix;
// }

// console.log("longestCommonPrefix ====>", longestCommonPrefix(arr));

// Solution 2 :  Sort all strings, and just compare First and Last String -> Smart Approach
// Solution by Nikhil Lohia . Here Time complexity: O(n log n + m)

// let arr = ["aabc", "aade", "aazx"];

// function longestCommonPrefix(strs) {
//   if (!strs.length) return "";

//   strs.sort();
//   const first = strs[0];
//   const last = strs[strs.length - 1];
//   let i = 0;

//   while (i < first.length && first[i] === last[i]) {
//     i++;
//   }

//   return first.slice(0, i);
// }

// console.log(longestCommonPrefix(arr));
