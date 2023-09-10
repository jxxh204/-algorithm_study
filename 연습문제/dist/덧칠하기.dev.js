"use strict";

// function solution(n, m, section) {
//   if (section.length === 0 || section.length > n) return null;
//   let max = section[section.length - 1];
//   let min = section[0];
//   let result = 0;
//   result = Math.ceil((max - min + 1) / m);
//   return result;
// }
function solution(n, m, section) {
  if (section.length === 0 || section.length > n) return null;
  var visited = 0;
  var count = 0;

  for (var i in section) {
    if (visited <= section[i]) {
      visited = section[i] + Number(m);
      count++;
    }
  }

  return count;
}

console.log(solution(4, 1, [1, 2, 3, 4])); //4

console.log(solution(8, 4, [2, 3, 6]));
console.log(solution(10, 4, [1, 2, 8, 9, 10])); //2