"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function solution(maps) {
  var yMax = maps.length - 1;
  var xMax = maps[0].length - 1;
  var directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  var result = -1;

  function dfs(x, y, count) {
    //마지막 도달하면 count 리턴
    if (x >= xMax && y >= yMax) {
      result = count + 1;
      return;
    } //0일 경우 멈춤


    if (!maps[y][x]) return; //방문 했던 곳은 발자취를 제거

    maps[y][x] = 0;

    for (var _i = 0, _directions = directions; _i < _directions.length; _i++) {
      var _directions$_i = _slicedToArray(_directions[_i], 2),
          dx = _directions$_i[0],
          dy = _directions$_i[1];

      // 모든 방향 탐색
      var newX = x + dx;
      var newY = y + dy;

      if (newX >= 0 && newY >= 0 && maps[newY][newX] === 1) {
        return dfs(newX, newY, count + 1);
      }
    }
  }

  dfs(0, 0, 0);
  console.log(result);
  return result;
}

solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]);
solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]);