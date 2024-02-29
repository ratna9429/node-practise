// Write a JavaScript function to convert an amount to coins. Example input: 46 and possible coins 25, 10, 5, 2, 1 Output: 25, 10, 10, 1

const possibleCoins = (money) => {
  let coins = [25, 10, 5, 2, 1];
  let output = [];

  for (let i = 0; i < coins.length; i++) {
    const thisCoinNum = Math.floor(money / coins[i]);
    console.log("thisCoinNum ==>", thisCoinNum);

    for (let y = 0; y < thisCoinNum; y++) {
      output.push(coins[i]);
    }

    money = money - coins[i] * thisCoinNum;
  }

  return output;
};

console.log("result ==>", possibleCoins(46));
