"use strict";

function getBoxLength(m, score) {
  return Math.floor(score.length / m);
}

function makeAppleBox(m, score) {
  var apple = null;

  for (var i = 0; i < m; i++) {
    apple = score.pop();
  }

  var price = apple * m;
  return price;
}

function solution(k, m, score) {
  if (score.length === 0) return 0;
  var boxLeng = getBoxLength(m, score);
  var result = 0;
  score.sort(function (a, b) {
    return a - b;
  });

  while (true) {
    result += makeAppleBox(m, score);

    if (score.length < m) {
      return result;
    }
  }
} //16번 테스트만 틀림