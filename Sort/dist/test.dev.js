"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 힌트 dfs로 해야함.
// 재귀로 다시해보자
function bfs(maps, x, y, count) {
  var max = 4;

  while (x !== max) {
    if (maps[y][x] === 1) {
      //오른쪽으로 만 감.
      x++;
      count++;
    } else {
      x--;
      count--;
      break;
    } //위,아래로도 가야함.

  }

  while (y !== max + 1) {
    // -1이 없어야함
    if (maps[y][x] === 1) {
      y++;
      count++;
    } else {
      y--;
      count--;
      break;
    }
  } //오른쪽과 아랫쪽이 봉쇄가 되었을 때 위로가야한다.


  if (x >= max && y >= max) return count;

  if (!maps[y + 1][x] && !maps[y][x + 1]) {
    if (x === max) {
      return -1;
    }

    y--;
    count++;
  }

  return bfs(maps, x, y, count);
}

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


    if (!maps[y][x]) return; //x+1, y+1 둘다 길이 없을 경우 위로감.
    // if (!maps[y + 1][x] && !maps[y][x + 1]) dfs(x, y - 1, count + 1);

    maps[y][x] = 0;

    for (var _i = 0, _directions = directions; _i < _directions.length; _i++) {
      var _directions$_i = _slicedToArray(_directions[_i], 2),
          dx = _directions$_i[0],
          dy = _directions$_i[1];

      var newX = x + dx;
      var newY = y + dy;

      if (newX >= 0 && newY >= 0 && maps[newY][newX] === 1) {
        // maps[newY][newX] = 0; // Mark as visited
        return dfs(newX, newY, count + 1); // maps[newY][newX] = 1; // Unmark after the visit
      }
    } //방문 했던 곳은 발자취를 제거
    // if (x !== xMax) dfs(x + 1, y, count + 1); // 계속 증가함
    // if (y !== yMax) dfs(x, y + 1, count + 1);

  }

  dfs(0, 0, 0);
  console.log(result);
  return result;
}

solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]);
solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]);