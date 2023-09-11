function solution(targets) {
  if (targets.length > 500000) return null;
  let answer = 1;
  targets.sort((a, b) => b[0] - a[0]);
  let [s, e] = targets.shift();

  for (const target of targets) {
    const [s_t, e_t] = target;
    console.log(e_t, s);
    if (e_t <= s) {
      answer += 1;
      s = s_t;
    }
  }
  return answer;
}
console.log(
  solution([
    [4, 5],
    [4, 8],
    [10, 14],
    [11, 13],
    [5, 12],
    [3, 7],
    [1, 4],
  ])
);
// [[1, 3], [1, 3], [1, 3], [1, 3]] 1
// [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]] 5
// [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [1, 6]] 5
// [[2, 4], [3, 5], [4, 6], [1, 3]] 2
// [[1, 5], [2, 6], [3, 7], [4, 8], [4, 5]] 1
// [[1, 2], [2, 3], [1, 3], [3, 4], [4, 5], [3, 5]] 4
