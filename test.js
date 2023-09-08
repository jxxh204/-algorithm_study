function solution(phone_book) {
  const phoneBook = new Map();
  let result = true;
  phone_book.map((phone, index) => {
    phoneBook.set(index, phone);
  });
  let key1 = 0;
  let key2 = 1;
  const length = phone_book.length - 1;
  while (key1 !== length) {
    const phone1 = phoneBook.get(key1);
    const phone2 = phoneBook.get(key2);
    // console.log(phone1, phone2, key2, length);
    if (phone2.includes(phone1)) return false;
    if (key2 === length) {
      key1++;
      key2 = key1 + 1;
    } else {
      key2++;
    }
  }
  return true;
  //new Map으로 새로운 phoneBook을 만든다
  // includes를 통해 포함 여부를 확인한다.
  // 포함되어있을 경우 false, 아닐경우 true를 반환한다.
  //   console.log(phoneBook);
}
console.log(solution(["123", "456", "789"]));
// console.log(solution(["12", "123", "1235", "567", "88"]));

//이게 훨씬빠름
function solution(phoneBook) {
  const table = {};

  for (const number of phoneBook) {
    table[number] = true;
    //123 : true
    // 456 : true
    // 789 : true
  }

  for (const number of phoneBook) {
    for (let i = 1; i < number.length; i += 1) {
      const prefix = number.slice(0, i);
      //slice로 0~i까지 스트링을 잘라서 검사했다.
      // ex 1, 12, 123, 4, 45, 456 이순서로
      // table에 넣으면 확인이 가능.
      if (table[prefix]) return false;
    }
  }

  return true;
}
