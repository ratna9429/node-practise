//Question:- In a function, if a pass "abcd" , then output should be "bcde",
// means , we are incrementing each letter by 1 place.

function moveStringForward(str) {
  let arr = str.split("");

  console.log("arr ====>", arr);

  let newArr = arr.map((e) => {
    return String.fromCharCode(e.charCodeAt() + 2);
  });

  let joinedAll = newArr.join("");

  console.log("joinedAll ====>", joinedAll);
}

moveStringForward("ab");
