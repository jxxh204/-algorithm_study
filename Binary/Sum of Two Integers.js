/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// 5:101,3:011

//00101
//00011
// = 01000
//둘다 있으면 빼고 1을 쉬프트.
// 쉬프트 후 다시 둘다있는지확인.
// 계~~속 쉬프트해서 없으면 끝. - b
var getSum = function (a, b) {
  while (b !== 0) {
    const carry = a & b; // 같은것만 뺌.
    //carry = 001
    a ^= b;
    // a= 110
    b = carry << 1;
    // b = 010
    if (b === 0 && carry === 0) break;
  }
  return a;
};
