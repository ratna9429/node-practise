// Question 1: Spiral Matrix

function printSpiral(mat) {
  let n = mat.length;
  let m = mat[0].length;
  console.log("n , m ===>", n, m);

  let sRow = 0;
  let eRow = n - 1;
  let sCol = 0;
  let eCol = m - 1;

  while (sRow <= eRow && sCol <= eCol) {
    // top
    for (let i = sCol; i <= eCol; i++) {
      console.log(mat[sRow][i]);
    }

    sRow++;

    // right
    for (let i = sRow; i <= eRow; i++) {
      console.log(mat[i][eCol]);
    }

    eCol--;

    // bottom
    if (sRow <= eRow) {
      for (let i = eCol; i >= sCol; i--) {
        console.log(mat[eRow][i]);
      }

      eRow--;
    }

    // left
    if (sCol <= eCol) {
      for (let i = eRow; i >= sRow; i--) {
        console.log(mat[i][sCol]);
      }

      sCol++;
    }
  }
}

// printSpiral([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   //   [13, 14, 15, 16],
// ]);

// Question 2: Diagonal Sum of Matrix

function diagonalSum1(mat) {
  let sum = 0;
  let n = mat.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        // Primary diagonal
        sum += mat[i][j];
      } else if (i + j === n - 1) {
        // Secondary diagonal
        sum += mat[i][j];
      }
    }
  }

  console.log("sum ===>", sum);
}

// diagonalSum1([
//   [1, 2, 3, 0],
//   [4, 5, 6, 0],
//   [7, 8, 9, 0],
//   [0, 0, 0, 0],
// ]);

// Optimize Version

function diagonalSum2(mat) {
  let sum = 0;

  let n = mat.length;

  for (let i = 0; i < n; i++) {
    console.log("first", mat[i]);
    sum += mat[i][i];

    if (i !== n - 1 - i) {
      sum += mat[i][n - 1 - i];
    }
  }

  console.log("🚀 ~ diagonalSum2 ~ sum: ====>", sum);
}

// diagonalSum2([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);

// Question 3: Search in sorted matrix

function searchInSorted(mat, searchNum) {
  let n = mat.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === searchNum) {
        console.log(mat[i][j]);

        break;
      }
    }
  }
}

// searchInSorted(
//   [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//   ],
//   13
// );

// Optimize - Binary Search Method

function searchInSorted1(mat, num) {
  // Do it yourself
}

// searchInSorted1(
//   [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//   ],
//   13
// );

// Optimize - Stair Search Method

function searchInSorted2(mat, num) {
  let m = mat[0].length;
  let n = mat.length;
  let r = 0;
  let c = m - 1;

  while (r < n && c >= 0) {
    let cStart = mat[r][c];
    console.log("catst ====>", cStart);

    console.log("c , r ===>", c, r);
    if (cStart === num) {
      console.log("Num Found ====>", cStart);
      return;
    } else if (cStart < num) {
      console.log("cStart , num 111 ====>", cStart, num);
      r++;
    } else if (cStart > num) {
      console.log("cStart , num 222 ====>", cStart, num);
      c--;
    }
  }

  console.log(`${num} Not Found`);
}

// searchInSorted2(
//   [
//     [10, 20, 30, 40],
//     [15, 25, 35, 45],
//     [27, 29, 37, 48],
//     [32, 33, 39, 50],
//   ],
//   33
// );

// Question 4 : Find Transpose of a Matrix.

function matTranspose(mat) {
  let m = mat[0].length;
  let n = mat.length;

  let newMat = [];
  for (let i = 0; i < m; i++) {
    newMat[i] = [];
    for (let j = 0; j < n; j++) {
      newMat[i][j] = mat[j][i];
    }
  }

  console.log("newMat ====>", newMat);
}

// matTranspose([
//   [2, 3, 4],
//   [5, 6, 7],
// ]);

// Question 5 : Rotate Matrix by 90 Degree
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Input: matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// Output: [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ];

function rotate90(mat) {
  let n = mat.length;

  for (let i = 0; i < n; i++) {
    console.log("mat[i] ===>", mat[i]);
    for (let j = i + 1; j < n; j++) {
      console.log("mat[i][j] ====>", mat[i][j]);
      console.log("mat[j][i] ====>", mat[j][i]);

      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }

  console.log("mat ====>", mat);
}

// rotate90([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ]);

// Question 6 : Convert 1D array into 2D array.

// Convert to 2*3 Matrix

function convertMat(arr, row, col) {
  if (arr.length !== row * col) {
    console.log("Invalid dimensions");
    return;
  }

  let mat = [];
  let index = 0;

  for (let i = 0; i < row; i++) {
    let tempArr = [];

    for (let j = 0; j < col; j++) {
      tempArr.push(arr[index]);

      index++;
    }

    mat.push(tempArr);
  }

  console.log(mat);
}

convertMat([1, 2, 3, 4, 5, 6], 2, 3);
