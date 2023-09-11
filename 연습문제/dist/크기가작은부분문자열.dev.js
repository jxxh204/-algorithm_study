"use strict";

function solution(t, p) {
  var pLength = p.length;
  var tLength = t.length;
  if (pLength === 0 || pLength > 18 || tLength < pLength || tLength > 10000) return null;
  if (t[0] === "0" || p[0] === "0") return null;
  var result = 0;
  var slide = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var num = _step.value;
      slide.push(num);

      if (pLength === slide.length) {
        if (p >= Number(slide.join(""))) {
          result++;
        }

        slide.shift();
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
}

console.log(solution("3141592", "271"));
console.log(solution("10203", "15"));
console.log(solution("500220839878", "7"));