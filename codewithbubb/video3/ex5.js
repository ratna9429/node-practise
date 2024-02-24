// Write a JavaScript program to replace the first digit in a string (should contain at least one digit) with a $ character.

const replaceFirstDigit = (str) => str.replace(/[0-9]/, "$");

console.log("result ==>", replaceFirstDigit("hello987bob"));
