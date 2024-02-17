// Write a JavaScript program to create a new string adding "New!" in front of a given string. If
// the given string begins with "New!" already then return the original string.

function addNewOrNot(text) {
  return text.indexOf("New!") === 0 ? text : `New! ${text}`;
}

console.log("result 1 ===>", addNewOrNot("Hello Buddy"));
console.log("result 2 ===>", addNewOrNot("New! Buddy Came"));
console.log("result 3 ===>", addNewOrNot("I live in Anjar"));
