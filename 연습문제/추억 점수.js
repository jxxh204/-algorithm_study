function solution(name, yearning, photo) {
  const nameObj = {};
  const 점수 = [];
  name.map((n, index) => {
    nameObj[n] = yearning[index];
  });
  photo.map((p) => {
    let temp점수 = 0;
    p.map((name) => {
      if (nameObj[name]) temp점수 += nameObj[name];
    });
    점수.push(temp점수);
    temp점수 = 0;
  });
  console.log(점수);
  return 점수;
}
solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
  ]
);
