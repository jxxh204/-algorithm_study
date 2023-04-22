function containsDuplicate(nums: number[]): boolean {
  //훨씬 빠름.
  //set은 시간 복잡도가 O(1)
  const lookup = new Set(); // We can use set or map

  for (let i = 0; i < nums.length; i++) {
    if (lookup.has(nums[i])) return true;
    lookup.add(nums[i]);
  }

  return false;
}

function containsDuplicate(nums: number[]): boolean {
  //이유는 includes는 시간 복잡도가 O(n)
  const stack = [];
  let result = false;
  for (let i = 0; i < nums.length; i++) {
    stack.push(nums[i]);
    if (stack.includes(nums[i + 1])) {
      return true;
    }
  }
  return result;
}
