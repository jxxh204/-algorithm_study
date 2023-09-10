function getButton(keymap) {
  const Buttons = {};
  for (const map of keymap) {
    for (const i in map) {
      const numI = Number(i);
      const button = map[numI];
      if (Buttons[button]) {
        Buttons[button] = Math.min(Buttons[button], numI + 1);
        continue;
      }
      Buttons[button] = numI + 1;
    }
  }
  return Buttons;
}
function clickButton(Buttons, targets) {
  const clicks = [];
  for (const targetMap of targets) {
    let clickNum = 0;
    for (const targetButton of targetMap) {
      clickNum += Buttons[targetButton];
    }
    if (!clickNum) {
      clicks.push(-1);
      continue;
    }
    clicks.push(clickNum);
  }
  return clicks;
}
function solution(keymap, targets) {
  if (keymap.length === 0) return -1;
  const Buttons = getButton(keymap);
  return clickButton(Buttons, targets);
}
console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); //4
console.log(solution(["AA"], ["B"]));
console.log(solution(["ABACD", "BCEFD"], ["DBAC"]));
console.log(solution(["AAA", "BB"], ["ABA", "AAA"]));
console.log(solution(["ABC", "DEF", "GHI"], ["AFA"]));
console.log(solution(["AB", "CD", "EF"], ["AEC"]));

// Your function might return [5], but the correct answer would be different.

// Your function might return [8], but the correct answer would be different.
