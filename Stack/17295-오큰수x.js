const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().split("\n");
function solution(input) {
  const nums = input[1].split(" ").map((v) => +v);
  const stack = [];
  const n = input[1].split(" ");
  const result = n.fill(-1);

  for (let i = n.length - 1; i > -1; i--) {
    for (let j = stack.length - 1; j > -1; --j) {
      if (stack[j] > nums[i]) {
        result[i] = stack[j];
        break;
      } else {
        result[i] = -1;
      }
    }
    stack.push(nums[i]);
  }
  return result.join(" ");
}
console.log(solution(input));

// 시간초과 개빡침.
