// Start with the second element, considering the first element as sorted.
// Pick the next element and compare it with the elements in the sorted part.
// Shift elements to the right if they are greater than the picked element.
// Insert the picked element at the correct position.
// Repeat this process for all elements until the array is fully sorted.
// Time Complexity:
// Best case (already sorted): O(n)
// Average and worst case: O(n²)
// Space Complexity: O(1) (in-place sorting).

const insertionSorting = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
  }

  return arr;
};

let arr = [80, 60, 70, 25, 100, 10];
const result = insertionSorting(arr);
console.log("🚀 ~ result: ====>", result);
