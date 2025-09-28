// Question 1: Reverse the Array elements

// Solution: Extra Space Method
// function revArr1(arr) {
//   let newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }

//   console.log("newArr ====>", newArr);
// }

// revArr1([2, 3, 5, 7, 81, 34]);

// Solution: Two pointer method

// function newArr2(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];

//     right--;
//     left++;
//   }

//   console.log("arr ====>", arr);
// }

// newArr2([73, 47, 65, 6, 7, 8, 0, 1]);

// Question 2: Print all SubArrays of Array

// Solution:

function printSubArr(arr) {
  for (let start = 0; start < arr.length; start++) {
    let line = "";
    for (let end = start; end < arr.length; end++) {
      console.log("end ====>", end);
      let str = "";
      for (let k = start; k <= end; k++) {
        console.log("k ====>", k);
        str += arr[k];
      }
      //   process.stdout.write(str + ", ");
      line += str + ", ";
    }
    console.log(line);
  }
}

// printSubArr([1, 2, 3, 4, 5]);

// Question 3: Max SubArray Sum.
// REVIEW: This Question can be solved in three ways.

// Note : When solving max/min problems, always initialize the result with -Infinity (for max) or Infinity (for min) to handle all possible input values, including negatives.

// Solution 1 & 2: Brute Force Method & 1 reduced for loop.

function maxSubSum(arr) {
  console.log("arr ===>", arr);
  let maxSum = -Infinity;

  for (let start = 0; start < arr.length; start++) {
    // console.log("arr[start]", start);
    // let line = "";
    let sum = 0;
    console.log("new sub loop ===========>");
    for (let end = start; end < arr.length; end++) {
      //   console.log("arr[end]", end);
      //   let str = "";

      sum += arr[end];
      console.log("🚀 ~ maxSubSum ~ sum: ====>", sum);
      //   line += str + ", ";
      maxSum = Math.max(sum, maxSum);
      console.log("maxSum ======>", maxSum);
    }
    // console.log(line);
  }
  //   console.log("maxSum =====>", maxSum);
}

// maxSubSum([-2, 3, -3, 1, -110]);

// Solution 3 : Kadane Algorithm
// Note: If currentSum during loop becomes less than 0, then assign currentSum = 0 from that place.

function maxSubSum2(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum < 0) {
      currentSum = 0;
    }

    maxSum = Math.max(currentSum, maxSum);
    console.log("🚀 ~ maxSubSum2 ~ maxSum: ====>", maxSum);
  }
}

// maxSubSum2([-2, 3, -5, 1, -110]);

// Note: Above solution works fine — because there's a subarray with a positive sum.
// For [-5, -2, -1, -7] , It would return 0 ❌ — but the correct maximum subarray sum should be -1.
// Following solution handles that situation.

function maxSubSum3(arr) {
  let maxSum = arr[0]; // start with first element
  let currentSum = arr[0]; // same here

  for (let i = 1; i < arr.length; i++) {
    // Either extend previous subarray or start new from arr[i]
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    // Update maxSum
    maxSum = Math.max(maxSum, currentSum);

    console.log(`i: ${i}, currentSum: ${currentSum}, maxSum: ${maxSum}`);
  }

  console.log("✅ Final Max Subarray Sum:", maxSum);
}

// maxSubSum3([-2, 3, 5, 1, -110]); // Output: 9
// maxSubSum3([-5, -2, -1, -7]); // Output: -1 ✅

// Question 4: Best time to Buy & Sell Stock.
// Note: Will consider all days as selling days. So we know that best buy day will be always before selling day, and
// it will minimum of all before days.

function findBuySell(arr) {
  // Step 1: First create an array which will have min number values
  let bestBuy = [];
  bestBuy[0] = Infinity;

  for (let i = 1; i < arr.length; i++) {
    bestBuy[i] = Math.min(bestBuy[i - 1], arr[i - 1]);
  }

  console.log("bestBuy ====>", bestBuy);

  // Step 2 : Substract above array index bestBuy[j] from arr[j]
  let maxProfit = 0;
  for (let j = 0; j < arr.length; j++) {
    let currentProfit = arr[j] - bestBuy[j];
    console.log("🚀 ~ findBuySell ~ currentProfit: ====>", currentProfit);
    maxProfit = Math.max(maxProfit, currentProfit);
  }

  console.log("maxProfit ===>", maxProfit);
}

// findBuySell([-6, 1, -7, -81, -9, -0, -11]);

// Question 5:Tapping Water

function tapwater(arr) {
  // Step 1: Construct two arrays, 1st array for left max values, 2nd array for right max values

  let n = arr.length;
  let leftArr = new Array(n);
  let rightArr = new Array(n);

  // Fill left max arr
  leftArr[0] = arr[0];

  for (let i = 1; i < n; i++) {
    leftArr[i] = Math.max(leftArr[i - 1], arr[i]);
  }

  rightArr[n - 1] = arr[n - 1];

  for (let j = n - 2; j >= 0; j--) {
    rightArr[j] = Math.max(rightArr[j + 1], arr[j]);
  }

  console.log("leftArr =====>", leftArr);
  console.log("🚀 ~ tapwater ~ rightArr: ====>", rightArr);

  let totalWaterTapped = 0;

  for (let i = 0; i < n; i++) {
    let currentWaterTapped = Math.min(leftArr[i], rightArr[i]) - arr[i];

    if (currentWaterTapped > 0) totalWaterTapped += currentWaterTapped;
  }

  console.log("🚀 ~ tapwater ~ totalWaterTapped: ====>", totalWaterTapped);
}

// tapwater([6, 3, 4, 7, 3, 5]);
