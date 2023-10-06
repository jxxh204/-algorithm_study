function getBoxLength(m, score) {
  return Math.floor(score.length / m);
}
function makeAppleBox(m, score) {
  let apple = null;
  for (let i = 0; i < m; i++) {
    apple = score.pop();
  }
  const price = apple * m;
  return price;
}
function solution(k, m, score) {
  if (score.length === 0) return 0;
  const boxLeng = getBoxLength(m, score);
  let result = 0;
  score.sort((a, b) => a - b);
  while (true) {
    result += makeAppleBox(m, score);
    if (score.length < m) {
      return result;
    }
  }
}
//16번 테스트만 틀림
