// Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array. A new line indicates a new row in the array.
//Example input:
// abc,def,ghi
// jkl,mno,pqr
// stu,vwx,yza

const make2DArray = (str) => {
  let arr = str.split("\n");
  console.log("arr ===>", arr);

  let twoDArray = arr.map((row) => row.split(","));

  return twoDArray;
};

const str = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`;

console.log("result ==>", make2DArray(str));
