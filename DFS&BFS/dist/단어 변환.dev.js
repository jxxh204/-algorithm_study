"use strict";

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  var visited = new Array(words.length).fill(0);
  var result = Infinity;

  function getDifference(word1, word2) {
    var diff = 0;

    for (var i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) diff++;
    }

    return diff;
  }

  function 재귀(begin, count) {
    if (target === begin) {
      //   console.log(begin, result);
      result = Math.min(result, count);
      return count;
    }

    for (var index = 0; index < words.length; index++) {
      if (visited[index]) continue;

      if (getDifference(begin, words[index]) === 1) {
        visited[index] = 1;
        재귀(words[index], count + 1);
        visited[index] = 0; // 백트레킹
      }
    }
  }

  재귀(begin, 0);
  return result;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
console.log(solution("aab", "aba", ["abb", "aba"]));