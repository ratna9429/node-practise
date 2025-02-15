// Here are the rules of Selection Sort:

// Find the Minimum: Start from index 0, find the smallest element in the array.
// Swap: Swap this smallest element with the element at index 0.
// Move to the Next Position: Repeat the process for the next index (1), finding the smallest element in the remaining unsorted part.
// Repeat Until Sorted: Continue until the entire array is sorted.
// 💡 Time Complexity: O(n²) (because of two nested loops)
// 💡 Space Complexity: O(1) (since sorting is done in place)

// Now you can code it based on these rules! 🚀 Let me know if you need any clarifications. 😊

const selectionSorting = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};

let arr = [5, 6, 2, 4, 3];
const result = selectionSorting(arr);
console.log("🚀 ~ result: ====>", result);
