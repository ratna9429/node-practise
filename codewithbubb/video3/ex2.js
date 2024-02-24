// Write a JavaScript program to find the number of even values up to a given number

//This was my approach but chatgpt was saying its not accurate. But i am getting correct answer.
const totalEvenValues = (num) => {
  let newNum = num % 2 === 0 ? num : num - 1;
  return newNum / 2;
};

console.log("result of my solution ==>", totalEvenValues(98));

//According to video

const allEvenDigits1 = (arr1) => {
  return arr1.filter((e) => e % 2 === 0).length;
};

const createArrayOfNumbers = (num) => {
  let numArr = [];

  for (let i = 1; i <= num; i++) {
    numArr.push(i);
  }

  console.log("result of video solution ===>", allEvenDigits1(numArr));
};

createArrayOfNumbers(98);
