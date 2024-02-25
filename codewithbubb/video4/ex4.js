// Write a JavaScript program to generate a random hexadecimal color code.

// The hexadecimal number system is a type of number system, that has a base value equal to 16. It is also pronounced sometimes as 'hex'. Hexadecimal numbers are represented by only 16 symbols. These symbols or values are 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E and F. Each digit represents a decimal value.

const getRandomHexNumber = () => {
  let num = Math.floor(Math.random() * 16).toString(16);

  return num;
};

const getRandomHexColor = () => {
  return `#${Array.from({ length: 6 }).map(getRandomHexNumber).join("")}`;
};

console.log("result 1 ==>", getRandomHexColor());
console.log("result 2 ==>", getRandomHexColor());
console.log("result 3 ==>", getRandomHexColor());
console.log("result 4 ==>", getRandomHexColor());
