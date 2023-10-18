"use strict";

function isVertex(rectangle, x, y) {
  if (rectangle[1] === x && rectangle[3] === y) {
    // lu
    return [rectangle[1], rectangle[3]];
  }

  if (rectangle[3] === x && rectangle[4] === y) {
    // ru
    return [rectangle[3], rectangle[4]];
  }

  if (rectangle[0] === x && rectangle[1] === y) {
    // ld
    return [rectangle[0], rectangle[1]];
  }

  if (rectangle[3] === x && rectangle[0] === y) {
    // rd
    return [rectangle[3], rectangle[0]];
  }

  return false;
}

function overMove(rectangle, x, y) {
  if (rectangle[1] > y || rectangle[4] < y || rectangle[0] > x || rectangle[3] < x) {
    return true; // 위아래 넘어감
  }

  return false;
}

function getRectangle() {}

function solution(rectangle, characterX, characterY, itemX, itemY) {
  var direction = {
    left: [-1, 0],
    right: [1, 0],
    up: [0, 1],
    down: [0, -1]
  };
  var visited = new Set(); // 좌표를 저장하고 has로 찾는다.

  visited.add("".concat((characterX, characterY)));
  var newRectangle;

  for (var i in rectangle) {
    if (characterX === rectangle[i][0] || characterY === rectangle[i][3]) {
      newRectangle = rectangle[i];
    }
  }

  var count = 0;

  function 재귀(newRectangle, x, y) {
    count++;
    if (count === 4) return;
    if (x < 0 || y < 0) return;
    if (!visited.has("".concat((x, y)))) return;
    if (x === itemX && y === itemY) return [x, y];
    if (overMove(newRectangle)) return;
    console.log(x, y); //부족한 점
    // 다음 박스를 마주쳤을 때. - 다시 확인
    // 방향을 어떻게 바꾸지? 1,4

    for (var _i in rectangle) {
      execution(_i);
    }

    function execution(i) {
      if (x === rectangle[i][0]) {
        //up
        visited.add("".concat((x + direction.up[0], y + direction.up[1])));
        재귀(rectangle[i], x + direction.up[0], y + direction.up[1]); //down

        visited.add("".concat((x + direction.down[0], y + direction.down[1])));
        재귀(rectangle[i], x + direction.down[0], y + direction.down[1]); //어느 면인지 확인.
      }

      if (y === rectangle[i][3]) {
        //left
        visited.add("".concat((x + direction.left[0], y + direction.left[1])));
        재귀(rectangle[i], x + direction.left[0], y + direction.left[1]); //right

        visited.add("".concat((x + direction.right[0], y + direction.right[1])));
        재귀(rectangle[i], x + direction.right[0], y + direction.right[1]);
      }
    }
  }

  재귀(newRectangle, characterX, characterY);
}

solution([[1, 1, 7, 4], [3, 2, 5, 5], [4, 3, 6, 9], [2, 6, 8, 8]], 1, 3, 7, 8); //17
// solution(
//   [
//     [1, 1, 8, 4],
//     [2, 2, 4, 9],
//     [3, 6, 9, 8],
//     [6, 3, 7, 7],
//   ],
//   9,
//   7,
//   6,
//   1
// ); //11
// solution([[1, 1, 5, 7]], 1, 1, 4, 7); //9
// solution(
//   [
//     [2, 1, 7, 5],
//     [6, 4, 10, 10],
//   ],
//   3,
//   1,
//   7,
//   10
// ); //15
// solution(
//   [
//     [2, 2, 5, 5],
//     [1, 3, 6, 4],
//     [3, 1, 4, 6],
//   ],
//   1,
//   4,
//   6,
//   3
// ); //10