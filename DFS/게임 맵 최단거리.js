function 이동(maps, location, maxX, maxY) {
  const direction = {
    LEFT: [0, -1], //y,x
    RIGHT: [0, 1],
    DOWN: [1, 0],
    UP: [-1, 0],
  };
  for (let move in direction) {
    const 방향 = direction[move];
    const 현재y = location[0];
    const 현재x = location[1];
    const 이동후 = [현재y + 방향[0], 현재x + 방향[1]];
    if (
      이동후[0] < 0 ||
      이동후[1] < 0 ||
      이동후[0] > maxY ||
      이동후[1] > maxX
    ) {
      // 음수인지 아닌지 확인.
      continue;
    }
    //두가지 경우의 수가 존재하는 경우 먼저 반복되는 left right 순으로 리턴한다.

    if (maps[이동후[0]][이동후[1]] === 1) {
      // console.log(maps[이동후[0]][이동후[1]], move);

      return [이동후[0], 이동후[1]];
    } else {
      continue;
    }
  }
}

function 재귀(maps, location, count) {
  const maxX = maps[0].length - 1;
  const maxY = maps.length - 1;

  const moved = 이동(maps, location, maxX, maxY); // 이동하는
  if (!moved) return { result: count, current: location };
  maps[moved[0]][moved[1]] = 0; // 지나온 길 0으로 변경

  const { result, current } = 재귀(maps, moved, count + 1);
  return { result, current: current };
}

function solution2(maps) {
  const maxX = maps[0].length - 1;
  const maxY = maps.length - 1;

  const location = [0, 0];
  const count = 1; // 최단거리가 아님.
  const { result, current } = 재귀(maps, location, count);
  if (current[0] === maxY && current[1] === maxX) {
    return result;
  }
  return -1;
}

function solution(maps) {
  const yLength = maps.length;
  const xLength = maps[0].length;
  const goalY = yLength - 1;
  const goalX = xLength - 1;

  // y, x, steps
  const queue = [];
  queue.push([0, 0, 1]);

  while (queue.length) {
    console.log(queue);

    const [y, x, steps] = queue.shift();

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

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]);
solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
]);
solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0],
]);
