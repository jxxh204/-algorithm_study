function solution(n, computers) {
  const visited = new Array(n).fill(false);
  const stack = [];
  let count = 0;

  function repeatX(y, indexY) {
    visited[indexY] = true; // 방문처리
    for (let i in y) {
      const x = y[i];

      if (x === 1 && !visited[i]) {
        // 값이 1인데 방문하지 않았을 경우.
        repeatX(computers[i], i); // 방문하지 않은 컴퓨터(i)를 방문처리하기 위해 repeatX에 넣어준다.
        // 여기서 중요한 점은 이 repeatX의 역할이다.
        // repeatX의 역할은 방문처리 + 해당 컴퓨터와 연결된 컴퓨터가 방문되었는지 확인처리
      }
    }
  }

  for (let i in visited) {
    const y = computers[i];
    if (visited[i]) continue;
    console.log(y, visited[i], i);
    count++;
    repeatX(y, i);
  }

  //   return count;

  //   function solution(n, computers) {
  //     const visited = new Array(n).fill(0);
  //     let count = 0;

  //     for (let i = 0; i < visited.length; i++) {
  //       if (visited[i] === 1) continue; // 방문했으면 넘김.

  //       count += 1;
  //       dfs(computers, visited, i);
  //     }

  //     return count;
  //   }

  //   function dfs(map, visited, node) {
  //     visited[node] = 1; // 방문 등록

  //     for (let i = 0; i < map[node].length; i++) {
  //       // computers 반복
  //       if (map[node][i] && visited[i] === 0) {
  //         // computers[y][0~2] === 1 && 반문안했을 경우
  //         dfs(map, visited, i);
  //       }
  //     }
  //   }
}
// com[i] = 110;
// (visited[i] = true), false;
solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);

solution(3, [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]);

solution(4, [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
]);
solution(3, [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
]);
