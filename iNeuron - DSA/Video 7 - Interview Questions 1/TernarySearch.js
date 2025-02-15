function ternarySearchIterative(arr, key) {
  let i = 0,
    j = arr.length - 1; // Start and end indices

  while (i <= j) {
    let mid1 = i + Math.floor((j - i) / 3);
    let mid2 = j - Math.floor((j - i) / 3);

    if (arr[mid1] === key) {
      return mid1; // Found at mid1
    } else if (arr[mid2] === key) {
      return mid2; // Found at mid2
    }

    if (key < arr[mid1]) {
      // Search in the first third
      j = mid1 - 1;
    } else if (key > arr[mid2]) {
      // Search in the third part
      i = mid2 + 1;
    } else {
      // Search in the middle part
      i = mid1 + 1;
      j = mid2 - 1;
    }
  }

  return -1; // Element not found
}

// Driver Code
let arr = [20, 25, 47, 56, 59, 63, 65, 79, 82];
let key = 56;
let result = ternarySearchIterative(arr, key);
console.log("Iterative Method - Index of", key, ":", result); // Expected Output: Index of 56 : 3
