// Write a JavaScript function to find the first not repeated character Example string: 'abacddbec'
// Expected output: 'e'

const findFistUnique = (str) => {
  let output = [];
  let arr = str.split("");

  let result = arr.map((ele, index) => {
    console.log("output ==>", output);
    console.log("index ==>", index);
    console.log("arr.indexOf(ele) ==>", arr.indexOf(ele));

    if (index > arr.indexOf(ele)) {
      output.pop(arr[0]);
    } else {
      output.push(ele);
    }
  });

  return output;
};

console.log("result ==>", findFistUnique("abacddbec"));
