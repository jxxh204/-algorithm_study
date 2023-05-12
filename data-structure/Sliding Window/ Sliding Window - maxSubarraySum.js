function maxSubarraySum(array, num) {
  if (array.length < num) return null;
  //num의 길이만큼 array에서 더해준다. 3개라면 0,1,2 값을 더한다.
  let i = 0;
  //i는 j만큼 ++하고
  //i = num-j로 초기화한다.
  let start = 0;
  let last = num - 1;
  let tempSum = 0;
  //i~j 합계.
  let maxSum = 0;
  // Math.max(tempSum, maxSum)

  while (last < array.length) {
    // j가 끝지점에 갈 때까지 돈다.
    console.log(i, last);
    if (i <= last) {
      //합치는 단계.
      tempSum += array[i];
      i++;
    } else {
      // 다합치고 다음 값으로 넘어감.
      maxSum = Math.max(tempSum, maxSum);
      console.log("tempSum : ", tempSum, "maxSum : ", maxSum);
      console.log("다시");
      tempSum = 0;
      last++;
      start++;
      i = start;
    }
  }
  return maxSum;
}
