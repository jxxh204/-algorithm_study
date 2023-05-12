function sameFrequency(num1, num2) {
  let num1String = num1.toString();
  let num2String = num2.toString();
  if (num1String.length !== num2String.length) return false;
  const comparison = {};
  console.log(num1String, num2, num1String.length, num2String.length);
  // num1을 객체에 저장.
  // num2의 숫자를 num1객체에서 하나씩 빼서 남으면 다른값임.
  for (let i = 0; i < num1String.length; i++) {
    if (!comparison[num1String[i]]) {
      comparison[num1String[i]] = 1;
      continue;
    }
    comparison[num1String[i]]++;
  }

  for (let j = 0; j < num2String.length; j++) {
    if (!comparison[num2String[j]]) {
      return false;
    }
    comparison[num2String[j]]--;
  }
  for (let k in comparison) {
    if (comparison[k] > 0) return false;
  }

  return true;

  // good luck. Add any arguments you deem necessary.
}
