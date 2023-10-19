"use strict";

function solution(number, k) {
  // i,j로 전부 구하기
  // 제일 큰 수?
  // 첫번째 숫자가
  //Math.max(x,y)
  var numArray = number.split("");
  var count = 0;
  var i = 0;
  var j = 1;

  while (i !== numArray.length - 1) {
    if (count === k) break;

    if (numArray[i] < numArray[j]) {
      numArray.splice(i, 1);
      i = -1;
      j = 0;
      count++;
    }

    i++;
    j++;
  }

  if (count !== k) {
    for (var c = 0; c < Math.abs(count - k); c++) {
      console.log(numArray);
      numArray.pop();
    }
  }

  return numArray.join("");
} // 케이스 10 시간초과