"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function setArrayToHash(Array) {
  var Hash = new Map();

  for (var i in Array) {
    Hash.set(Array[i], Number(i));
  }

  return Hash;
}

function is완성(완성문, 카드) {
  var 지나친순서 = 0;
  var 순서 = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = 카드[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          value = _step$value[0],
          i = _step$value[1];

      var 완성문순서 = 완성문.get(value);

      if (!완성문순서) {
        // 지나침
        지나친순서 = 순서;
        continue;
      }

      if (완성문순서 >= 순서 && 지나친순서 === 0) {
        // 순서 === i 순서대로 들어오는지 확인.
        // 0,3,4
        순서 = 완성문순서;
      } else {
        return false;
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

  return true;
}

function solution(cards1, cards2, goal) {
  if (cards1.length === 0) return null;
  if (cards2.length > 10) return null;
  var 완성문 = setArrayToHash(goal);
  var 카드1 = setArrayToHash(cards1);
  var 카드2 = setArrayToHash(cards2);
  if (is완성(완성문, 카드1) && is완성(완성문, 카드2)) return "Yes";
  return "No";
}

console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"])); //4

console.log(solution(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], ["string", "or", "integer"], ["string", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]));
console.log(solution(["a", "b", "c"], ["d", "e", "f"], ["a", "d", "f"])); // No