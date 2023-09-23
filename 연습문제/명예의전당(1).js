function solution(k, score) {
  const stack = [];

  return score.map((s) => {
    stack.push(s);
    stack.sort((a, b) => b - a);
    if (stack.length > k) {
      stack.pop();
    }
    return stack[stack.length - 1];
  });
}
