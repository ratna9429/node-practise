// Question 1 : Find Highest Occurance Number

// Brute Force method
// TODO: Solve using two for loops , already done previously. Can do again for practise

// Optimized solution
// let arr = [4, 4, 5, 5, 6];

// function findHighestOcc(arr) {
//   let result = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!result.hasOwnProperty(arr[i])) {
//       result[arr[i]] = 1;
//     } else {
//       result[arr[i]] += 1;
//     }
//   }

//   console.log("result ====>", result);

//   let highestOne = 0;
//   let tempNum;
//   for (let data in result) {
//     if (highestOne === 0) {
//       highestOne = result[data];
//       tempNum = data;
//     } else if (
//       result[data] > highestOne ||
//       (result[data] === highestOne && data > tempNum)
//     ) {
//       highestOne = result[data];
//       tempNum = data;
//     }
//   }

//   console.log("🚀 ~ Final Result ====>", Number(tempNum));
// }

// findHighestOcc(arr);

// Question 2 : Find 2nd Highest Occurance Number Dynamically

// let arr = [5, 5, 6, 6, 66, 7, 7, 7];

// function findSecondHighestOcc(arr, position) {
//   let freqMap = {};

//   // Build frequency map
//   for (let num of arr) {
//     freqMap[num] = (freqMap[num] || 0) + 1;
//   }

//   console.log("Frequency Map:", freqMap);

//   // Convert to array of [num, count] pairs
//   let freqArr = Object.entries(freqMap);

//   // Sort by count DESC, if same count → by number DESC
//   freqArr.sort((a, b) => {
//     if (b[1] !== a[1]) {
//       return b[1] - a[1]; // higher count first
//     } else {
//       return b[0] - a[0]; // higher number first
//       //   return a[0] - b[0]; // lower number first
//     }
//   });

//   console.log("Sorted Frequency Array:", freqArr);

//   // Get the 2nd element
//   if (freqArr.length >= position) {
//     console.log(
//       "Second Highest Occurrence Number:",
//       Number(freqArr[position - 1][0])
//     );
//   } else {
//     console.log("Not enough unique numbers.");
//   }
// }

// findSecondHighestOcc(arr, 1);

// Question 3 : Sum of Highest and Lowest Frequency

function sumOfHighLowFreq(arr = [2, 3, 3, 4, 4, 4, 5, 6, 6]) {
  const freqMap = {};

  // Step 1: Count frequencies
  for (let num of arr) {
    freqMap[num] = freqMap[num] + 1 || 1;
  }

  console.log("🚀 ~ freqMap:", freqMap);

  // Step 2: Extract frequencies and find min/max
  const freqValues = Object.values(freqMap); // Returns all values of object in an Array
  const maxFreq = Math.max(...freqValues);
  const minFreq = Math.min(...freqValues);

  console.log(`Max Freq: ${maxFreq}, Min Freq: ${minFreq}`);

  // Step 3: Return their sum
  return maxFreq + minFreq;
}

console.log("Sum of Highest & Lowest Frequency:", sumOfHighLowFreq());
