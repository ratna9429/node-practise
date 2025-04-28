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

function function18(N) {
  for (let i = 1; i <= N; i++) {
    let str = "";

    for (let j = 0; j < N; j++) {}
  }
}
function18(5);
