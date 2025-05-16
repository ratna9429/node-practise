// highest occuring element in array.

let arr = [4, 4, 5, 5, 6];

// Optimized solution
function findHighestOcc(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    if (!result.hasOwnProperty(arr[i])) {
      result[arr[i]] = 1;
    } else {
      result[arr[i]] += 1;
    }
  }

  console.log("result ====>", result);

  let highestOne = 0;
  let tempNum;
  for (let data in result) {
    if (highestOne === 0) {
      highestOne = result[data];
      tempNum = data;
    } else if (
      result[data] > highestOne ||
      (result[data] === highestOne && data > tempNum)
    ) {
      highestOne = result[data];
      tempNum = data;
    }
  }

  console.log("🚀 ~ Final Result ====>", Number(tempNum));
}

findHighestOcc(arr);
