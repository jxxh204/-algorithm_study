function averagePair(array, avg) {
  if (!array.length) return false;
  // add whatever parameters you deem necessary - good luck!
  // first 숫자와 모든 숫자를 비교하여 답이 안나오면 first+1 후 다시 시작.
  let first = 0;
  let last = array.length - 1;
  while (first <= last) {
    if ((array[first] + array[last]) / 2 === avg) return true;
    if (first === last) {
      last = array.length - 1;
      first++;
      continue;
    }
    last--;
  }
  return false;
}
