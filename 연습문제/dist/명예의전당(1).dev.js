"use strict";

function solution(k, score) {
  var stack = [];
  var result = [];
  return score.map(function (s) {
    stack.push(s);
    stack.sort(function (a, b) {
      return b - a;
    });

    if (stack.length > k) {
      stack.pop();
    }

    return stack[stack.length - 1];
  });
}