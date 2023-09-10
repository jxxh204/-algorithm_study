"use strict";

function getButton(keymap) {
  var Buttons = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keymap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var map = _step.value;

      for (var i in map) {
        var numI = Number(i);
        var button = map[numI];

        if (Buttons[button]) {
          Buttons[button] = Math.min(Buttons[button], numI + 1);
          continue;
        }

        Buttons[button] = numI + 1;
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

  return Buttons;
}

function clickButton(Buttons, targets) {
  var clicks = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = targets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var targetMap = _step2.value;
      var clickNum = 0;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = targetMap[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var targetButton = _step3.value;
          clickNum += Buttons[targetButton];
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (!clickNum) {
        clicks.push(-1);
        continue;
      }

      clicks.push(clickNum);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return clicks;
}

function solution(keymap, targets) {
  if (keymap.length === 0) return -1;
  var Buttons = getButton(keymap);
  return clickButton(Buttons, targets);
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); //4

console.log(solution(["AA"], ["B"]));
console.log(solution(["ABACD", "BCEFD"], ["DBAC"]));
console.log(solution(["AAA", "BB"], ["ABA", "AAA"]));
console.log(solution(["ABC", "DEF", "GHI"], ["AFA"]));
console.log(solution(["AB", "CD", "EF"], ["AEC"])); // Your function might return [5], but the correct answer would be different.
// Your function might return [8], but the correct answer would be different.