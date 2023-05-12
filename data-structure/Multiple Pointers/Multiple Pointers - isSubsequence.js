function isSubsequence(string1, string2) {
  console.log("1 : ", string1, "2:", string2);
  // if(string1.length === string2.length) return false
  // good luck. Add any arguments you deem necessary.
  // string1으로 배열을 만들고.
  // string2를 string1배열에 하나씩 넣어준다.
  // 배열에서 0이 있을 경우 false
  let object = {};
  for (let i = 0; i < string1.length; i++) {
    if (!object[string1[i]]) {
      object[string1[i]] = 1;
      continue;
    }

    object[string1[i]]++;
  }

  for (let j = 0; j < string2.length; j++) {
    //  if(!object[string2[j]])continue;
    object[string2[j]]--;
  }
  for (let k in object) {
    if (k > 0) {
      console.log(string2[j], k);
      return false;
    }
  }
  return true;
}
