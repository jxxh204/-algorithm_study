function solution(s) {
  let count = 0;
  let x = null;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const 초기화 = () => {
      x = s[i];
      result++;
      count++;
    };
    if (count === 0) {
      초기화();
      continue;
    }

    if (x === s[i]) {
      count++;
    } else {
      count--;
    }
  }
  return result;
}

solution("aaabbaccccabba"); // 3
