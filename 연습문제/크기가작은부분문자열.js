function solution(t, p) {
  const pLength = p.length;
  const tLength = t.length;
  if (pLength === 0 || pLength > 18 || tLength < pLength || tLength > 10000)
    return null;
  if (t[0] === "0" || p[0] === "0") return null;
  let result = 0;
  const slide = [];

  for (const num of t) {
    slide.push(num);
    if (pLength === slide.length) {
      if (p >= Number(slide.join(""))) {
        result++;
      }
      slide.shift();
    }
  }
  return result;
}
console.log(solution("3141592", "271"));
console.log(solution("10203", "15"));
console.log(solution("500220839878", "7"));
