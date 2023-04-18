const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString();
function solution(input) {
  let sticks = [];
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(" && input[i + 1] === ")") {
      //레이저
      result += sticks.length;
      i += 1;
    } else if (input[i] === "(") {
      sticks.push(input[i]);
    } else if (input[i] === ")") {
      sticks.pop();
      result += 1;
    }
  }
  return result;
}
// 생각보다 단순했다 답 도출 방법부터 생각하자;
console.log(solution(input));
