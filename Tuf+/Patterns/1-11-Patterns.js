// <=============================== Print * for N  ==============================> 1

// e.g.  N = 4
// * * * *
// * * * *
// * * * *
// * * * *

//Solution 1
// function printStars(N) {
//     for (let i = 0; i < N; i++) {
//       let str = "";
//       for (let j = 0; j < N; j++) {
//         str += "* ";
//       }

//       console.log(str);
//     }
//   }

//   printStars(3);

// Solution 2

//   function printStars2(N) {
//     for (let i = 0; i < N; i++) {
//       console.log("* ".repeat(N));
//     }
//   }

//   printStars2(3);

// <=============================== Print * for N  ==============================> 2

// e.g.  N = 4
// *
// * *
// * * *
// * * * *

// function starPrint(N) {
//   for (let i = 0; i < N; i++) {
//     let str = "";

//     for (let j = 0; j < i + 1; j++) {
//       str += "* ";
//     }
//     console.log(str);
//   }
// }

// starPrint(3);

// <=============================== Print * for N  ==============================> 3
// Print * for N

// e.g.  N = 4
//    *
//   * *
//  * * *
// * * * *

// function starPrint1(N) {
//   for (let i = 0; i < N; i++) {
//     let str = "";

//     // Add leading spaces using a loop
//     for (let space = 0; space < N - i - 1; space++) {
//       str += " "; // Add spaces
//     }

//     // Add stars with spaces
//     for (let j = 0; j < i + 1; j++) {
//       str += "* "; // Add stars
//     }

//     console.log(str);
//   }
// }

// starPrint1(3);

// <=============================== Print 1,2,3,4 for N  ==============================> 4
// e.g.  N = 4
// 1
// 1 2
// 1 2 3
// 1 2 3 4

// function function2(N) {
//   for (let i = 1; i <= N; i++) {
//     let str = "";

//     for (let j = 1; j <= i; j++) {
//       str += `${j} `;
//     }
//     console.log(str);
//   }
// }

// function2(4);

// <=============================== Print 1,1,1,1 for N  ==============================> 5
// e.g.  N = 4
// 1
// 2 2
// 3 3 3
// 4 4 4 4

// function function3(N) {
//   for (let i = 1; i <= N; i++) {
//     let str = "";

//     for (let j = 1; j <= i; j++) {
//       str += `${i} `;
//     }
//     console.log(str);
//   }
// }

// function3(4);

// <=============================== Print * for N  ==============================> 6

// e.g.  N = 4
// * * * *
// * * *
// * *
// *

// function function4(N) {
//   for (let i = 1; i <= N; i++) {
//     let str = "";

//     for (let j = i; j <= N; j++) {
//       str += "* ";
//     }
//     console.log(str);
//   }
// }

// Relation between outer loop and inner loop
// function function4(N) {
//   for (let i = 1; i <= N; i++) {
//     let str = "";

//     for (let j = 1; j <= N - i + 1; j++) {
//       str += "* ";
//     }
//     console.log(str);
//   }
// }

// function4(4);

// <=============================== Print 1,2,3,4 for N  ==============================> 7
// e.g.  N = 4
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// function function5(N) {
//   for (let i = 1; i <= N; i++) {
//     let str = "";

//     for (let j = 1; j <= N - i + 1; j++) {
//       str += `${j} `;
//     }
//     console.log(str);
//   }
// }

// function5(4);

// <=============================== Print * for N  ==============================> 8
// e.g.  N = 4
//       *
//     * * *
//   * * * * *
// * * * * * * *

// Using For Loop
// function function6(N) {
//   for (let i = 1; i <= N; i++) {
//     let str = "";
//     for (let j = 1; j <= N - i; j++) {
//       str += "  ";
//     }

//     for (let k = 1; k <= i * 2 - 1; k++) {
//       str += "* ";
//     }

//     console.log(str);
//   }
// }

// function6(4);

// Using .repeat
// function function6(N) {
//   for (let i = 1; i <= N; i++) {
//     let line = "  ".repeat(N - i) + "* ".repeat(i * 2 - 1);

//     console.log(line);
//   }
// }

// function6(4);

// <=============================== Print * for N  ==============================> 9
// e.g.  N = 4
// * * * * * * *
//   * * * * *
//     * * *
//       *
// function function7(N) {
//   for (let i = 1; i <= N; i++) {
//     let line = "  ".repeat(i - 1) + "* ".repeat(2 * (N - i) + 1);

//     console.log(line);
//   }
// }

// function function7(N) {
//   for (let i = 1; i <= N; i++) {
//     let str = "";
//     for (let j = 0; j < i - 1; j++) {
//       str += "  ";
//     }

//     for (let k = 0; k < 2 * (N - i) + 1; k++) {
//       str += "* ";
//     }

//     console.log(str);
//   }
// }

// function7(4);

// <=============================== Print * for N  ==============================> 10
// e.g.  N = 5
//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

// function function8(N) {
//   for (let i = 1; i <= N; i++) {
//     let str = "";
//     for (let j = 0; j < N - i; j++) {
//       str += " ";
//     }

//     for (let k = 0; k < i * 2 - 1; k++) {
//       str += "*";
//     }

//     console.log(str);
//   }

//   for (let i = 1; i <= N; i++) {
//     let str = "";
//     for (let j = 0; j < i - 1; j++) {
//       str += " ";
//     }

//     for (let k = 0; k < (N - i) * 2 + 1; k++) {
//       str += "*";
//     }

//     console.log(str);
//   }
// }

// Using .repeat
// function function8(N) {
//   for (let i = 1; i <= N; i++) {
//     let line = " ".repeat(N - i) + "*".repeat(i * 2 - 1);
//     console.log(line);
//   }

//   for (let i = 1; i <= N; i++) {
//     let line = " ".repeat(i - 1) + "*".repeat((N - i) * 2 + 1);
//     console.log(line);
//   }
// }

// function8(5);

// <=============================== Print * for N  ==============================> 11
// e.g.  N = 5
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// function function9(N) {
//   for (let i = 1; i <= N; i++) {
//     let eachLine = "*".repeat(i);
//     console.log(eachLine);
//   }

//   for (let j = 1; j <= N - 1; j++) {
//     let eachLine = "*".repeat(N - j);
//     console.log(eachLine);
//   }
// }

// function9(5);

// <=============================== Print * for N  ==============================> 12
// e.g.  N = 5
// 1
// 01
// 101
// 0101
// 10101

function function10(N) {
  for (let i = 1; i <= N; i++) {
    let str = "";

    for (let j = 0; j < i; j++) {
      if (j % 2 === 0) {
        str += "1";
      } else {
        str += "0";
      }
    }
    console.log(str);
  }
}

function10(5);
