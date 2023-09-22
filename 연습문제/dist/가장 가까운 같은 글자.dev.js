"use strict";

function solution(s) {
  var result = new Array(s.length);
  result.fill(-1);

  for (var i = 0; i < s.length; i++) {
    for (var j = i - 1; j >= 0; j--) {
      if (s[j] === s[i]) {
        result[i] = i - j;
        break;
      }
    }
  }

  return result;
}