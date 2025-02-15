// Compare Adjacent Elements: Start from the first element and compare it with the next element.
// Swap if Needed: If the first element is greater than the second, swap them.
// Pass Through the Array: Continue comparing and swapping for every adjacent pair in the array.
// Largest Element Bubbles Up: After the first pass, the largest element will have moved to its correct position (end of the array).
// Repeat for Remaining Elements: Continue the passes for the remaining unsorted part of the array.
// Stop When Sorted: If a pass results in no swaps, the array is fully sorted, and the algorithm stops.

const bubbleSorting = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

let arr = [6, 5, 4, 3, 2, 1];
const result = bubbleSorting(arr);
console.log("🚀 ~ result: ====>", result);
