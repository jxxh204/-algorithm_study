function setArrayToHash(Array) {
  let Hash = new Map();
  for (const i in Array) {
    Hash.set(Array[i], Number(i));
  }
  return Hash;
}

function is완성(완성문, 카드) {
  let 지나친순서 = 0;
  let 순서 = 0;
  for (const [value, i] of 카드) {
    const 완성문순서 = 완성문.get(value);
    if (!완성문순서) {
      // 지나침
      지나친순서 = 순서;
      continue;
    }
    if (완성문순서 >= 순서 && 지나친순서 === 0) {
      // 순서 === i 순서대로 들어오는지 확인.
      // 0,3,4
      순서 = 완성문순서;
    } else {
      return false;
    }
  }

  return true;
}
function solution(cards1, cards2, goal) {
  if (cards1.length === 0) return null;
  if (cards2.length > 10) return null;
  const 완성문 = setArrayToHash(goal);
  const 카드1 = setArrayToHash(cards1);
  const 카드2 = setArrayToHash(cards2);
  if (is완성(완성문, 카드1) && is완성(완성문, 카드2)) return "Yes";
  return "No";
}
console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); //4

console.log(
  solution(
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    ["string", "or", "integer"],
    ["string", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
  )
);
console.log(solution(["a", "b", "c"], ["d", "e", "f"], ["a", "d", "f"])); // No
