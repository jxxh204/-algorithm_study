const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('test.txt').toString().trim()

// 풀이
function solution(input) {
  const leftIndex = input.indexOf("<");
  const rightIndex = input.indexOf('>');
  const result = []
  
  if(leftIndex !== -1) {
    const regex = /(<[^>]+>)|([^<>]+)/g;
    const matches = [...input.matchAll(regex)];
    matches.forEach((match, index) => {
      if(match[1]) {
        result.push(match[1])
      }
      if(match[2]){ // 사이 문자.
        let noBrakets = []
        match[2].split(' ').map((m) => {
          noBrakets.push(m.split('').reverse().join(''))
        })
        result.push(noBrakets.join(' '))
      }
    });
    return result.join('');
  }
  input.split(' ').map((i) => {
    result.push(i.split('').reverse().join(''))
  })

  return result.join(' ');
}
 console.log(solution(input))