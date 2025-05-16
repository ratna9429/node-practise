// <=============================== Print below design for N ==============================> 12
// e.g N = 5
// 1        1
// 12      21
// 123    321
// 1234  4321
// 1234554321

// function function12(N) {
//   for (let i = 1; i <= N; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//       str += `${j}`;
//     }

//     for (let k = 0; k < (N - i) * 2; k++) {
//       str += " ";
//     }

//     for (let l = i; l >= 1; l--) {
//       str += `${l}`;
//     }

//     console.log(str);
//   }
// }

// function12(5);

// <=============================== Print below design for N ==============================> 13
// e.g N = 5
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// function function13(N) {
//   let count = 1;

//   for (let i = 1; i <= N; i++) {
//     let str = "";
//     for (let j = 0; j < i; j++) {
//       str += `${count} `;
//       count++;
//     }

//     console.log(str);
//   }
// }

// function13(5);

// <=============================== Print below design for N ==============================> 14
// e.g N = 5
// A
// AB
// ABC
// ABCD
// ABCDE

// function function14(N) {
//   for (let i = 1; i <= N; i++) {
//     let startNum = 65; // as 65 is the character code of A
//     let str = "";

//     for (let j = 0; j < i; j++) {
//       str += `${String.fromCharCode(startNum + j)}`;
//     }

//     console.log(str);
//   }
// }

// function14(5);

// <=============================== Print below design for N ==============================> 15
// e.g N = 5
// ABCDE
// ABCD
// ABC
// AB
// A

// function function15(N) {
//   for (let i = 1; i <= N; i++) {
//     let startNum = 65; // as 65 is the character code of A
//     let str = "";

//     for (let j = 0; j <= N - i; j++) {
//       str += `${String.fromCharCode(startNum + j)}`;
//     }

//     console.log(str);
//   }
// }

// function15(5);

// <=============================== Print below design for N ==============================> 16
// e.g N = 5
// A
// BB
// CCC
// DDDD
// EEEEE

// function function16(N) {
//   let startNum = 65; // as 65 is the character code of A
//   for (let i = 1; i <= N; i++) {
//     let str = "";

//     for (let j = 0; j < i; j++) {
//       str += `${String.fromCharCode(startNum)}`;
//     }
//     startNum++;
//     console.log(str);
//   }
// }

// function16(5);

// <=============================== Print below design for N ==============================> 16
// e.g N = 5
//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA

// function function17(N) {
//   let reqNum = "A".charCodeAt(0);

//   for (let i = 1; i <= N; i++) {
//     let startNum = reqNum;
//     let str = "";
//     for (let j = 0; j < N - i; j++) {
//       str += " ";
//     }

//     for (let j = 0; j < i; j++) {
//       str += `${String.fromCharCode(startNum + j)}`;
//     }

//     for (let k = i; k > 1; k--) {
//       str += `${String.fromCharCode(startNum + k - 2)}`;
//     }

//     console.log(str);
//   }
// }

// function17(5);

// <=============================== Print below design for N ==============================> 17
// e.g N = 5
// E
// D E
// C D E
// B C D E
// A B C D E

// function pattern18(N) {
//   let startChar = 65;

//   for (let i = 1; i <= N; i++) {
//     let str = "";

//     for (let j = i; j >= 1; j--) {
//       str += String.fromCharCode(startChar + N - j);
//     }

//     console.log(str);
//   }
// }

// pattern18(5);

// <=============================== Print below design for N ==============================> 18
// e.g N = 5
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********

// function pattern19(N) {
//   for (let i = 1; i <= N; i++) {
//     let str = "";

//     for (let j = i; j <= N; j++) {
//       str += "*";
//     }

//     for (let k = 1; k < i * 2 - 1; k++) {
//       str += " ";
//     }

//     for (let l = i; l <= N; l++) {
//       str += "*";
//     }

//     console.log(str);
//   }

//   for (let m = 1; m <= N; m++) {
//     let str = "";

//     for (let j = 1; j <= m; j++) {
//       str += "*";
//     }

//     for (let k = 1; k <= N * 2 - m * 2; k++) {
//       str += " ";
//     }

//     for (let l = 1; l <= m; l++) {
//       str += "*";
//     }

//     console.log(str);
//   }
// }

// pattern19(5);

// <=============================== Print below design for N ==============================> 19
// e.g N = 5
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

// function pattern20(N) {
//   for (let m = 1; m <= N; m++) {
//     let str = "";

//     for (let j = 1; j <= m; j++) {
//       str += "*";
//     }

//     for (let k = 1; k <= N * 2 - m * 2; k++) {
//       str += " ";
//     }

//     for (let l = 1; l <= m; l++) {
//       str += "*";
//     }

//     console.log(str);
//   }

//   for (let i = 1; i <= N - 1; i++) {
//     let str = "";

//     for (let j = i; j <= N - 1; j++) {
//       str += "*";
//     }

//     for (let k = 1; k <= i * 2; k++) {
//       str += " ";
//     }

//     for (let l = i; l <= N - 1; l++) {
//       str += "*";
//     }

//     console.log(str);
//   }
// }

// pattern20(5);

// <=============================== Print below design for N ==============================> 20
// e.g N = 5
// *****
// *   *
// *   *
// *   *
// *****

// function pattern21(N) {
//   for (let i = 1; i <= N; i++) {
//     let str = "";

//     if (i === 1 || i === N) {
//       for (let j = 1; j <= N; j++) {
//         str += "*";
//       }

//       console.log(str);
//     } else {
//       str += "*";

//       for (let k = 1; k <= N - 2; k++) {
//         str += " ";
//       }

//       str += "*";

//       console.log(str);
//     }
//   }
// }

// pattern21(5);

// <=============================== Print below design for N ==============================> 21
// e.g N = 5
// 5 5 5 5 5 5 5 5 5
// 5 4 4 4 4 4 4 4 5
// 5 4 3 3 3 3 3 4 5
// 5 4 3 2 2 2 3 4 5
// 5 4 3 2 1 2 3 4 5
// 5 4 3 2 2 2 3 4 5
// 5 4 3 3 3 3 3 4 5
// 5 4 4 4 4 4 4 4 5
// 5 5 5 5 5 5 5 5 5

function pattern22(N) {
  let size = 2 * N - 1;

  for (let i = 0; i < size; i++) {
    let str = "";

    for (let j = 0; j < size; j++) {
      let top = i;
      let left = j;
      let bottom = size - 1 - i;
      let right = size - 1 - j;

      let minDistance = Math.min(top, left, bottom, right);
      console.log("🚀 ~ pattern22 ~ minDistance: ====>", minDistance);
      str += N - minDistance + " ";
    }

    console.log(str.trim());
  }
}

pattern22(5);
