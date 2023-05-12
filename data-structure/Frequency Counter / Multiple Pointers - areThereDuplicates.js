function areThereDuplicates(a, b, c, d) {
  console.log(a, b, c, d);
  //프리퀀시 카운터를 사용
  // Object[a]...
  // 0보다 큰 값을 가진 프로퍼티가 있다면 false
  const array = [a, b, c, d];
  const result = {};
  for (let i of array) {
    if (!result[i]) {
      result[i] = 1;
      continue;
    }
    result[i]++;
  }
  for (let j in result) {
    console.log(j, result[j]);
    if (result[j] > 1) return true;
  }
  return false;
  // good luck. (supply any arguments you deem necessary.)
}
