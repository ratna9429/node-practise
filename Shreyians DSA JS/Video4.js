// 1 ================> Note Denomination
// Means how many max notes can be made.
// e.g. 1020 rs --> 500 rs 2 notes + 20 rs 1 note

function noteDenomination(money) {
  let arr = [500, 200, 100, 50, 20, 10, 5, 2, 1];

  let remainingMoney = money;

  for (let i = 0; i < arr.length; i++) {
    if (remainingMoney >= arr[i]) {
      console.log(`₹${arr[i]} x ${Math.floor(remainingMoney / arr[i])}`);

      remainingMoney = remainingMoney % arr[i];
    }
  }
}

noteDenomination(5234);
