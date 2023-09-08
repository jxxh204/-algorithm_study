function solution(maps) {
  const yMax = maps.length - 1;
  const xMax = maps[0].length - 1;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let result = -1;
  function dfs(x, y, count) {
    //마지막 도달하면 count 리턴
    if (x >= xMax && y >= yMax) {
      result = count + 1;
      return;
    }
    //0일 경우 멈춤
    if (!maps[y][x]) return;

    //방문 했던 곳은 발자취를 제거
    maps[y][x] = 0;
    for (const [dx, dy] of directions) {
      // 모든 방향 탐색
      const newX = x + dx;
      const newY = y + dy;
      if (newX >= 0 && newY >= 0 && maps[newY][newX] === 1) {
        return dfs(newX, newY, count + 1);
      }
    }
  }
  dfs(0, 0, 0);
  console.log(result);
  return result;
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
