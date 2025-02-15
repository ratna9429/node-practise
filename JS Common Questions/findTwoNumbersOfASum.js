let arr = [20, 11, 10, 5, 2];
let sum = 30;

function findSum(arr, sum) {
  const numSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    console.log("numSet ======>", numSet);
    const complement = sum - arr[i];
    console.log("complement =====>", complement);

    if (numSet.has(complement)) {
      return [arr.indexOf(complement), i];
    }

    numSet.add(arr[i]);
  }

  return [];
}

let result = findSum(arr, sum);
console.log("result ========>", result);
