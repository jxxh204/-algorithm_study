"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function solution(targets) {
  if (targets.length > 500000) return null;
  var answer = 1;
  targets.sort(function (a, b) {
    return b[0] - a[0];
  });

  var _targets$shift = targets.shift(),
      _targets$shift2 = _slicedToArray(_targets$shift, 2),
      s = _targets$shift2[0],
      e = _targets$shift2[1];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = targets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var target = _step.value;

      var _target = _slicedToArray(target, 2),
          s_t = _target[0],
          e_t = _target[1];

      console.log(e_t, s);

      if (e_t <= s) {
        answer += 1;
        s = s_t;
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

  return answer;
}

console.log(solution([[4, 5], [4, 8], [10, 14], [11, 13], [5, 12], [3, 7], [1, 4]])); // [[1, 3], [1, 3], [1, 3], [1, 3]] 1
// [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]] 5
// [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [1, 6]] 5
// [[2, 4], [3, 5], [4, 6], [1, 3]] 2
// [[1, 5], [2, 6], [3, 7], [4, 8], [4, 5]] 1
// [[1, 2], [2, 3], [1, 3], [3, 4], [4, 5], [3, 5]] 4