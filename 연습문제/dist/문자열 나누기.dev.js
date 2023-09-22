"use strict";

function solution(s) {
  var count = 0;
  var x = null;
  var result = 0;

  var _loop = function _loop(i) {
    var 초기화 = function 초기화() {
      x = s[i];
      result++;
      count++;
    };

    if (count === 0) {
      초기화();
      return "continue";
    }

    if (x === s[i]) {
      count++;
    } else {
      count--;
    }
  };

  for (var i = 0; i < s.length; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }

  return result;
}

solution("aaabbaccccabba"); // 3