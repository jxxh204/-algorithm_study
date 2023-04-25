function productExceptSelf(nums: number[]): number[] {
  // ouput : 자신을 빼고 나머지를 전부 곱한 값.
  // nums = [1,2,3,4]
  let result = new Array(nums.length).fill(0);
  // loop1 i
  for (let i = 0; i < result.length; i++) {
    // 루프를 돌때마다 sum을 초기화 곱하기이니 1로 초기화한다. let sum = 1;
    let sum = 1;
    for (let j = 0; j < result.length; j++) {
      // loop2 j
      //  if i와 같은 순서가 아니면 모두 곱한다. sum *= j
      if (i === j) continue;
      sum *= nums[j];
    } // loop2End
    // 루프2가 끝나고 루프1이 돌기전에 sum을 저장 한다.result[i] = sum
    console.log(sum);
    result[i] = sum;
  } // loop1End

  return result;
}
