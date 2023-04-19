const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().split("\n");
function solution(input) {
  const length = Number(input[0]);
  const inputArray = input[1].split(" ");
  const result = new Array(length).fill(-1);
  const stack = [];

  const stacktF = (nums) => {
    const stack = new Array(length).fill(0);
    for (let i of nums) {
      stack[Number(i)]++;
    }
    return stack;
  };
  const F = stacktF(inputArray);
  for (let j = 0; j < inputArray.length; j++) {
    while (
      stack.length &&
      F[inputArray[stack[stack.length - 1]]] < F[inputArray[j]]
    ) {
      result[stack.pop()] = inputArray[j];
    }

    stack.push(j);
  }
  return result.join(" ");
}
console.log(solution(input));

// 이해했고 답도 나왔는데 왜 틀렸다고 나올까.. 나중에 다시 풀기.
