let arr = [555, 556, 8, 1, 10, 101, 0, 22];

function twoGreatestNums(arr) {
  let a = -Infinity;
  let b = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > a) {
      b = a;
      a = arr[i];
    } else if (arr[i] > b) {
      b = arr[i];
    }
  }

  console.log("a,b ====>", a, b);
}

twoGreatestNums(arr);
