// Write a JavaScript function to find the first not repeated character Example string: 'abacddbec'
// Expected output: 'e'

const findFistUnique = (str) => {
  let output = {};
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    if (output[arr[i]]) {
      delete output[arr[i]];
    } else {
      output[arr[i]] = arr[i];
    }
  }

  return Object.keys(output);
};

console.log("result ==>", findFistUnique("abacddbec"));
