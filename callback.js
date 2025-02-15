var input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// var result = [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
// ];

let result = [];
const matrix = (input) => {
  for (let i = 0; i < input.length; i++) {
    let arr = [];
    for (let j = 0; j < input[i].length; j++) {
      arr.push(input[j][i]);
    }
    result.push(arr);
  }
};

matrix(input);
