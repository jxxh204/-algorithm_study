function solution(s) {
  const result = new Array(s.length);
  result.fill(-1);
  for (let i = 0; i < s.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (s[j] === s[i]) {
        result[i] = i - j;
        break;
      }
    }
  }
  return result;
}
