"use strict";

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
  var array = [];
  mapObject.forEach(function (m) {
    array[m.index] = m.name;
  });
  return array;
}

function solution(players, callings) {
  // 시간초과
  playerList = new Map();
  players.map(function (p, i) {
    playerList.set(p, {
      index: i,
      name: p,
      prev: players[i - 1],
      next: players[i + 1]
    });
  });
  callings.map(function (callName) {
    var callPlayer = playerList.get(callName);
    var prevPlayer = playerList.get(callPlayer.prev); // 부른 선수 변경

    playerList.set(callPlayer.name, {
      index: prevPlayer.index,
      name: callPlayer.name,
      prev: prevPlayer.prev,
      next: prevPlayer.name
    }); // 앞선수 변경

    playerList.set(prevPlayer.name, {
      index: callPlayer.index,
      name: prevPlayer.name,
      prev: callPlayer.prev,
      // 이전의 이름을 안가져옴
      next: callPlayer.name
    }); //뒷 선수 변경

    if (callPlayer.next) {
      var nextPlayer = playerList.get(callPlayer.next);
      playerList.set(nextPlayer.name, {
        index: nextPlayer.index,
        name: nextPlayer.name,
        prev: prevPlayer.name,
        next: null // 이전의 이름을 안가져옴

      });
    }
  });
  return mapToList(playerList);
}

console.log(solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]));