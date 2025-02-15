//Find max profit
let stockPriceArr = [7, 2, 4, 8, 1, 10];

let smallestPrice = Infinity;
let maxProfit = 0;

for (let i = 0; i < stockPriceArr.length; i++) {
  if (stockPriceArr[i] < smallestPrice) {
    smallestPrice = stockPriceArr[i];
  }

  let profit = stockPriceArr[i] - smallestPrice;
  if (profit > maxProfit) {
    maxProfit = profit;
  }
}

console.log("maxProfit =======>", maxProfit);
