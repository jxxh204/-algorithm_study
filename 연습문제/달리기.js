// function solution(players, callings) { // 시간초과
//   callings.map((c) => {
//     for (const i in players) {
//       if (c === players[i]) {
//         const callPlayer = players[i];
//         const nextPlayer = players[i - 1];
//         players.splice(i, 1, nextPlayer);
//         players.splice(i - 1, 1, callPlayer);
//         break;
//       }
//     }
//   });
//   console.log(players);
//   //한칸 씩 올라갈게 아니고 다찾고 만드는게 빠를듯?
// }
function mapToList(mapObject) {
  // 이게 더 실패함 ㅋㅋㅋ
  const array = [];
  mapObject.forEach((m) => {
    array[m.index] = m.name;
  });
  return array;
}
function solution(players, callings) {
  // 시간초과
  playerList = new Map();
  players.map((p, i) => {
    playerList.set(p, {
      index: i,
      name: p,
      prev: players[i - 1],
      next: players[i + 1],
    });
  });
  callings.map((callName) => {
    const callPlayer = playerList.get(callName);
    const prevPlayer = playerList.get(callPlayer.prev);

    // 부른 선수 변경
    playerList.set(callPlayer.name, {
      index: prevPlayer.index,
      name: callPlayer.name,
      prev: prevPlayer.prev,
      next: prevPlayer.name,
    });

    // 앞선수 변경
    playerList.set(prevPlayer.name, {
      index: callPlayer.index,
      name: prevPlayer.name,
      prev: callPlayer.prev, // 이전의 이름을 안가져옴
      next: callPlayer.name,
    });
    //뒷 선수 변경
    if (callPlayer.next) {
      const nextPlayer = playerList.get(callPlayer.next);

      playerList.set(nextPlayer.name, {
        index: nextPlayer.index,
        name: nextPlayer.name,
        prev: prevPlayer.name,
        next: null, // 이전의 이름을 안가져옴
      });
    }
  });
  return mapToList(playerList);
}
console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);

//정답

function solution(players, callings) {
  //배열 두개로 하는 거였다. 왜 하나에 집착했을까..
  const keyPlayers = {};
  const keyRanks = {};
  players.forEach((player, idx) => {
    const rank = idx + 1;
    keyPlayers[player] = rank;
    keyRanks[rank] = player;
  });

  callings.forEach((calling) => {
    const losePlayer = keyRanks[keyPlayers[calling] - 1];

    keyRanks[keyPlayers[calling]] = losePlayer;
    keyRanks[keyPlayers[losePlayer]] = calling;
    keyPlayers[calling] -= 1;
    keyPlayers[losePlayer] += 1;
  });

  return Object.values(keyRanks);
}
