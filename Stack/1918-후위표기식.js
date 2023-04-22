const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim();
const stack = new Array(0);
const result = new Array(0);
for (let i = 0; i < input.length; i++) {
  const spc = stack[stack.length - 1];

  if (input[i] === "(") {
    stack.push(input[i]);
  } else if (input[i] === ")") {
    // stack.push(input[i]);
    let lastStack = spc;

    while (lastStack !== "(") {
      const popData = stack.pop();

      lastStack = popData;
      if (lastStack !== "(") result.push(popData);
    }
  } else if (input[i] === "*" || input[i] === "/") {
    if (spc === "*" || spc === "/")
      while (stack.length > 0) {
        result.push(stack.pop());
      }

    stack.push(input[i]);
  } else if (input[i] === "+" || input[i] === "-") {
    while (stack.length > 0 && spc !== "(") {
      result.push(stack.pop());
    }
    stack.push(input[i]);
  } else {
    result.push(input[i]);
  }
}

while (stack.length) {
  result.push(stack.pop());
}
console.log(result.join(""));
