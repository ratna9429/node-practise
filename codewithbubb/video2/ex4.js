// Given two values, write a JavaScript program to find out which one is nearest to 100

const findNearestTo100 = (num1, num2) => {
  return 100 - num1 > 100 - num2 ? num2 : num1;
};

console.log("result ===>", findNearestTo100(20, 50));
