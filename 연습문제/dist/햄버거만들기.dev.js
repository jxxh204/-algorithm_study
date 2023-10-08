"use strict";

function makeHam(pointer, ingredient) {
  var count = 0;

  for (var i = 0; i < 4; i++) {
    count++;
    if (ingredient[pointer + i] !== count) return false;

    if (count === 3) {
      count = 0;
    }
  }

  console.log("햄버거");
  return true;
}

function solution(ingredient) {
  var i = 0;
  var j = 1;
  var result = 0;

  while (true) {
    if (i + 3 === ingredient.length || ingredient.length === 4 || i === ingredient.length) break; // if() return result;

    if (ingredient[i] === 1) {
      if (makeHam(i, ingredient)) {
        ingredient.splice(i, 4);
        i = -1;
        result++;
      }
    }

    i++;
  }

  return result;
} //  빵 – 야채 – 고기 - 빵
// 1-2-3-1
// 50점 나옴. 방법바꾸기.