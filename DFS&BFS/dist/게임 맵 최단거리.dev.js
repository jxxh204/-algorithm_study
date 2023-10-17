"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function 이동(maps, location, maxX, maxY) {
  var direction = {
    LEFT: [0, -1],
    //y,x
    RIGHT: [0, 1],
    DOWN: [1, 0],
    UP: [-1, 0]
  };

  for (var move in direction) {
    var 방향 = direction[move];
    var 현재y = location[0];
    var 현재x = location[1];
    var 이동후 = [현재y + 방향[0], 현재x + 방향[1]];

    if (이동후[0] < 0 || 이동후[1] < 0 || 이동후[0] > maxY || 이동후[1] > maxX) {
      // 음수인지 아닌지 확인.
      continue;
    } //두가지 경우의 수가 존재하는 경우 먼저 반복되는 left right 순으로 리턴한다.


    if (maps[이동후[0]][이동후[1]] === 1) {
      // console.log(maps[이동후[0]][이동후[1]], move);
      return [이동후[0], 이동후[1]];
    } else {
      continue;
    }
  }
}

function 재귀(maps, location, count) {
  var maxX = maps[0].length - 1;
  var maxY = maps.length - 1;
  var moved = 이동(maps, location, maxX, maxY); // 이동하는

  if (!moved) return {
    result: count,
    current: location
  };
  maps[moved[0]][moved[1]] = 0; // 지나온 길 0으로 변경

  var _ = 재귀(maps, moved, count + 1),
      result = _.result,
      current = _.current;

  return {
    result: result,
    current: current
  };
}

function solution2(maps) {
  var maxX = maps[0].length - 1;
  var maxY = maps.length - 1;
  var location = [0, 0];
  var count = 1; // 최단거리가 아님.

  var _2 = 재귀(maps, location, count),
      result = _2.result,
      current = _2.current;

  if (current[0] === maxY && current[1] === maxX) {
    return result;
  }

  return -1;
}

function solution(maps) {
  var yLength = maps.length;
  var xLength = maps[0].length;
  var goalY = yLength - 1;
  var goalX = xLength - 1; // y, x, steps

  var queue = [];
  queue.push([0, 0, 1]);

  while (queue.length) {
    console.log(queue);

    var _queue$shift = queue.shift(),
        _queue$shift2 = _slicedToArray(_queue$shift, 3),
        y = _queue$shift2[0],
        x = _queue$shift2[1],
        steps = _queue$shift2[2];

    if (x < 0 || x >= xLength) continue;
    if (y < 0 || y >= yLength) continue;
    if (maps[y][x] === 0) continue;

    if (y === goalY && x === goalX) {
      return steps;
    }

    maps[y][x] = 0;
    queue.push([y + 1, x, steps + 1]);
    queue.push([y - 1, x, steps + 1]);
    queue.push([y, x + 1, steps + 1]);
    queue.push([y, x - 1, steps + 1]);
  }

  return -1;
}

solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]);
solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]);
solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 0]]);