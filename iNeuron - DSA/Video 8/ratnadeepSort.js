const ratnadeepSorting = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};

let arr = [6, 5, 4, 3, 2, 1];
const result = ratnadeepSorting(arr);
console.log("🚀 ~ result: ====>", result);

// Feature	Ratnadeep Sorting 🚀	                       Bubble Sort 🔄
// Swaps	Swaps elements even if not adjacent	           Only adjacent swaps
// Comparisons	(n * (n-1))/2 (Always Maximum)	           (n * (n-1))/2 worst, but optimized per pass
// Efficiency	O(n²) (No optimization)	                   O(n²) but optimized with fewer swaps
// Best Case	Still O(n²)	                               O(n) (when already sorted)
// Bubble-Up Mechanism	❌ No bubbling effect	           ✅ Bubble effect
