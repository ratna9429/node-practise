// Write a JavaScript function to extract unique characters from a string.

//Method 1
const findUniqueNums = (str) => {
  let output = {};

  str.split("").forEach((element) => {
    //Taking advantage of that - A Object cannot have two same keys. So when "l" will come again,
    // output[element] = true; will not be inserted in output object.
    output[element] = true;
  });

  return Object.keys(output);
};

console.log("result ==>", findUniqueNums("helloworld"));

//Method 2
const findUniqueNums1 = (str) => [...new Set(str.split(""))];

console.log("result ==>", findUniqueNums1("helloworld"));
