let str = "({)}";
let stack = [];

let pairs = {
  "(": ")",
  "{": "}",
  "[": "]",
};

const checkStack = (str) => {
  for (let char of str) {
    console.log("stack =====>", stack);
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      console.log("stack in else part=====>", stack);
      // Only pop once from the stack
      let lastBracket = stack.pop();
      console.log("lastbracket ====>", lastBracket);
      if (pairs[lastBracket] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(checkStack(str)); // This will return false since "[[" is unbalanced.
