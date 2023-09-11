function solution(n, lost, reserve, r) {
  if (n < 2 || n > 30) return null;
  if (lost < 1 || reserve < 1) return null;
  result = n;
  const map = [];
  // for (let i = 0; i < n; i++) {
  //   console.log(i+1);

  // }
  lost.forEach((num) => {
    map[num] = "lost";
  });
  reserve.forEach((num) => {
    if (map[num]) {
      delete map[num];
    } else {
      map[num] = "reserve";
    }
  });
  map.forEach((value, key) => {
    if (value === "lost") {
      if (map[key - 1]) {
        if (map[key - 1] === "reserve") {
          delete map[key - 1];
          delete map[key];
        }
      } else if (map[key + 1]) {
        if (map[key + 1] === "reserve") {
          delete map[key + 1];
          delete map[key];
        }
      }
    }
  });
  map.forEach((value, key) => {
    if (value === "lost") {
      result--;
    }
  });
  return result;
}
// console.log(solution(5, [4, 2], [3, 5]));
// console.log(solution(3, [3], [1]));
// console.log(solution(5, [3, 4], [1, 2, 5])); // 5
// console.log(
//   solution(24, [12, 13, 16, 17, 19, 20, 21, 22], [1, 22, 16, 18, 9, 10])
// ); // 19
// console.log(solution(5, [2, 4], [1, 3, 5], 5));
// console.log(solution(5, [2, 4], [3], 4));
// console.log(solution(3, [3], [1], 2));
// console.log(solution(4, [1, 3], [2, 4], 4));
// console.log(solution(5, [4, 2], [3, 5], 5));
// console.log(solution(5, [5, 3], [4, 2], 5));
// console.log(solution(5, [2, 3, 5], [2, 3, 4], 4));
// console.log(solution(5, [1], [5], 4));
// console.log(solution(10, [3, 4, 7, 9], [2, 3, 8], 8));
// console.log(solution(13, [13, 6, 1], [11, 9, 8, 7], 11));
// console.log(solution(5, [2, 4], [5], 4));
// console.log(solution(5, [2, 3, 4], [3, 4, 5], 4));
// console.log(solution(5, [5, 3, 1], [2, 4], 4));
// console.log(solution(6, [1, 2, 3, 5], [2, 4, 6])); 반례 다맞음.

//10번만 틀림;;
