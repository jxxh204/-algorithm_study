"use strict";

var separation = function separation(numbers) {
  var one = [];
  var two = [];
  numbers.map(function (num) {
    if (num.toString().length > 1) {
      two.push(num);
    } else {
      one.push(num);
    }
  });
  one.sort(function (a, b) {
    return b - a;
  });
  two.sort(function (a, b) {
    return b - a;
  });
  return {
    one: one,
    two: two
  };
};

var merge = function merge(one, two) {
  var results = [];
  var i = 0; // arr1 index

  var j = 0; // arr2 index

  while (i < one.length && j < two.length) {
    if (two[j] < one[i] * 10) {
      //한자리가 더 클 경우
      results.push(one[i]);
      i++;
    } else {
      var string = two[j].toString();

      for (var s in string) {
        if (string[s] > one[i]) {
          results.push(two[j]);
          j++;
          break;
        } else if (Number(s) === string.length - 1) {
          results.push(one[i]);
          i++;
        }
      }
    }
  }

  while (i < one.length) {
    results.push(one[i]);
    i++;
  }

  while (j < two.length) {
    results.push(two[j]);
    j++;
  }

  return results;
};

function solution(numbers) {
  if (numbers.length === 0) return null;

  var _separation = separation(numbers),
      one = _separation.one,
      two = _separation.two;

  var mergeArray = merge(one, two);
  console.log(Number(mergeArray.join("")));
  if (Number(mergeArray.join("")) === 0) return 0;
  return mergeArray.join(""); // new Map()
  // 숫자 이어붙이기.
  //return 문자열.
  // [3, 30, 34, 5, 9]
  //1. 한자리 숫자는 큰 숫자가 앞으로.
  //2. 한자리 숫자와 두자리 숫자 첫번째 숫자가 같은 경우
  //     - 두자리 숫자의 두번째 숫자와 비교한다.
  // 한번 정렬
  // [34, 30, 9, 5, 3]
  // 10 이상을 따로빼면?
  // [9,5,3], [34,30]
  // [9,5,3] //에 다시 넣으면?
  // 비교 함수를 만들어야함.
  // [9,5,34,3]
  // [9,5,34,3,30]
  // 답 : [9,5,34,3,30]
  //두자리 이상의 수는 한자리씩 비교하면 되는 건데..
} // solution([6, 10, 2]);


solution([3, 30, 34, 5, 9]); // "9534330"

solution([5, 7, 5, 87, 23, 67]); // "877675523"

solution([0, 0, 0]); // "0"

solution([979, 97, 978, 81, 818, 817]); // 실패..
// solution([214, 3, 2]); // "32100"