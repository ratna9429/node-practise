// Note: Bubble Sort

let arr = [2, 1, 34, 6, 7, 0, 1, 0, 7];

function bubblesort(arr) {
  console.log("🚀 ~ bubblesort ~ arr: 11111 ====>", arr);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  console.log("🚀 ~ bubblesort ~ arr: 22222 ====>", arr);
}

bubblesort(arr);
